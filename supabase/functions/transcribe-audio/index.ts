/**
 * Database Webhook on `research_responses` (INSERT or UPDATE):
 * - Audio URLs (`q*_audio_url`, screening audio) → English text via Whisper `/v1/audio/translations`
 * - Typed answers (`text_q1`…`text_q5`) with no audio → English in `trans_q*` via GPT
 * Original typed text stays in `text_q*`; original audio stays in Storage.
 */
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const VOICE_MEMOS_BUCKET = "voice-memos";

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const rawBody = await req.text();

    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(rawBody) as Record<string, unknown>;
    } catch (parseErr) {
      throw parseErr;
    }

    const extracted = extractRecordFromWebhook(parsed);

    if (!extracted.record || typeof extracted.record !== "object") {
      return json(
        {
          ok: false,
          error: "missing_record",
          message: "No record found — expected body.record or top-level record",
        },
        400
      );
    }

    const record = extracted.record as Record<string, unknown>;

    const idVal = record["id"];
    const idStr = idVal != null ? String(idVal) : "";
    if (!idStr) {
      return json({ ok: false, error: "missing_record_id" }, 400);
    }

    const eventType = extracted.eventType ?? (typeof parsed.type === "string" ? parsed.type : null);
    if (eventType === "DELETE") {
      return json({ ok: true, skipped: "delete_not_processed" });
    }

    const tableName = extracted.table ?? (typeof parsed.table === "string" ? parsed.table : null);
    if (tableName && tableName !== "research_responses") {
      return json({ ok: true, skipped: "wrong_table" });
    }

    const oldRecord = extractOldRecordFromWebhook(parsed);

    const jobs = collectTranslationJobs(record, oldRecord);
    if (jobs.length === 0) {
      console.log(
        `[transcribe-audio] Skip row=${idStr}: no new/changed audio URLs or typed answers to translate`
      );
      return json({
        ok: true,
        skipped: "no_new_or_changed_content",
        message:
          "Nothing to translate: no new/changed q*_audio_url, screening audio URLs, or text_q* answers.",
      });
    }

    console.log(
      `[transcribe-audio] row=${idStr} jobs=${jobs.length} → columns: ${jobs.map((j) => j.dbColumn).join(", ")}`
    );

    const openaiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openaiKey) {
      console.error("[transcribe-audio] OPENAI_API_KEY is missing");
      return json({ error: "Server misconfiguration" }, 500);
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    /** Service role only — never use SUPABASE_ANON_KEY here; RLS would block row updates. */
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceRoleKey) {
      console.error("[transcribe-audio] SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY missing");
      return json({ error: "Server misconfiguration" }, 500);
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const updatePayload: Record<string, string> = {};

    for (const job of jobs) {
      const destColumn = job.dbColumn;
      try {
        let english = "";
        if (job.kind === "audio") {
          const fullUrl = resolveFullPublicAudioUrl(job.url, supabaseUrl);
          console.log(
            `[transcribe-audio] Whisper EN start row=${idStr} dest=${destColumn} resolvedUrl=${fullUrl.slice(0, 120)}${fullUrl.length > 120 ? "…" : ""}`
          );
          english = await translateAudioUrlToEnglish(fullUrl, openaiKey, `row=${idStr} dest=${destColumn}`);
        } else {
          console.log(
            `[transcribe-audio] Text EN start row=${idStr} dest=${destColumn} chars=${job.text.length}`
          );
          english = await translateTextToEnglish(job.text, openaiKey, `row=${idStr} dest=${destColumn}`);
        }
        if (typeof english !== "string") {
          throw new Error(`Translation returned non-string for ${destColumn}: ${typeof english}`);
        }
        updatePayload[destColumn] = english;
        console.log(
          `[transcribe-audio] EN ok row=${idStr} dest=${destColumn} chars=${english.length}`
        );
      } catch (jobErr) {
        const msg = jobErr instanceof Error ? jobErr.message : String(jobErr);
        const stack = jobErr instanceof Error ? jobErr.stack : undefined;
        console.error(`[transcribe-audio] EN FAILED row=${idStr} dest=${destColumn}: ${msg}`, stack ?? "");
        throw jobErr;
      }
    }

    console.log("SENDING PAYLOAD:", updatePayload);

    const { data: updatedRows, error } = await supabase
      .from("research_responses")
      .update(updatePayload)
      .eq("id", idStr)
      .select("id");

    if (error) {
      console.error("Update failed:", error);
      return json({ error: error.message }, 500);
    }

    if (!updatedRows || updatedRows.length === 0) {
      const noRowErr = new Error(`No row updated for id=${idStr} (missing row or policy blocked write)`);
      console.error("Update failed:", noRowErr);
      return json({ error: noRowErr.message }, 500);
    }

    console.log("Update successful");
    return json({ ok: true, translated: Object.keys(updatePayload) });
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    const stack = e instanceof Error ? e.stack : undefined;
    console.error("[transcribe-audio] Unhandled error:", message, stack ?? "");
    return json({ error: message, detail: stack }, 500);
  }
});

type ExtractResult = {
  record: Record<string, unknown> | null;
  eventType: string | null;
  table: string | null;
  source: string;
};

/**
 * Supabase Database Webhooks may send the row as top-level `record`, or nested under `body.record`.
 */
function extractRecordFromWebhook(parsed: Record<string, unknown>): ExtractResult {
  let body: unknown = parsed.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body) as Record<string, unknown>;
    } catch {
      body = undefined;
    }
  }
  if (body && typeof body === "object") {
    const b = body as Record<string, unknown>;
    if (b.record && typeof b.record === "object") {
      return {
        record: b.record as Record<string, unknown>,
        eventType: typeof b.type === "string" ? b.type : null,
        table: typeof b.table === "string" ? b.table : null,
        source: "body.record",
      };
    }
  }

  if (parsed.record && typeof parsed.record === "object") {
    return {
      record: parsed.record as Record<string, unknown>,
      eventType: typeof parsed.type === "string" ? parsed.type : null,
      table: typeof parsed.table === "string" ? parsed.table : null,
      source: "top-level.record",
    };
  }

  const payload = parsed.payload;
  if (payload && typeof payload === "object") {
    const p = payload as Record<string, unknown>;
    if (p.record && typeof p.record === "object") {
      return {
        record: p.record as Record<string, unknown>,
        eventType: typeof p.type === "string" ? p.type : null,
        table: typeof p.table === "string" ? p.table : null,
        source: "payload.record",
      };
    }
  }

  return { record: null, eventType: null, table: null, source: "none" };
}

function extractOldRecordFromWebhook(parsed: Record<string, unknown>): Record<string, unknown> | null {
  let body: unknown = parsed.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body) as Record<string, unknown>;
    } catch {
      body = undefined;
    }
  }
  if (body && typeof body === "object") {
    const b = body as Record<string, unknown>;
    if (b.old_record && typeof b.old_record === "object") {
      return b.old_record as Record<string, unknown>;
    }
  }
  if (parsed.old_record && typeof parsed.old_record === "object") {
    return parsed.old_record as Record<string, unknown>;
  }
  const payload = parsed.payload;
  if (payload && typeof payload === "object") {
    const p = payload as Record<string, unknown>;
    if (p.old_record && typeof p.old_record === "object") {
      return p.old_record as Record<string, unknown>;
    }
  }
  return null;
}

type TranslationJob =
  | { kind: "audio"; dbColumn: string; url: string }
  | { kind: "text"; dbColumn: string; text: string };

/**
 * INSERT: translate every new audio URL and every typed answer that has no audio.
 * UPDATE: only when a watched field changed vs `oldRecord`.
 * Audio wins over typed text for the same question (XOR on the form).
 */
function collectTranslationJobs(
  record: Record<string, unknown>,
  oldRecord: Record<string, unknown> | null
): TranslationJob[] {
  const jobs: TranslationJob[] = [];

  const asTrimmed = (value: unknown): string => (typeof value === "string" ? value.trim() : "");

  const fieldChanged = (key: string): boolean => {
    if (!oldRecord) return true;
    return oldRecord[key] !== record[key];
  };

  for (let q = 1; q <= 5; q++) {
    const urlKey = `q${q}_audio_url`;
    const textKey = `text_q${q}`;
    const dest = `trans_q${q}`;
    const audioUrl = asTrimmed(record[urlKey]);
    const typed = asTrimmed(record[textKey]);

    if (audioUrl && fieldChanged(urlKey)) {
      jobs.push({ kind: "audio", dbColumn: dest, url: audioUrl });
      continue;
    }
    if (!audioUrl && typed && fieldChanged(textKey)) {
      jobs.push({ kind: "text", dbColumn: dest, text: typed });
    }
  }

  if (fieldChanged("screening_q3_audio_url")) {
    const u = asTrimmed(record["screening_q3_audio_url"]);
    if (u) jobs.push({ kind: "audio", dbColumn: "screening_q3_reason", url: u });
  }
  if (fieldChanged("screening_q4_audio_url")) {
    const u = asTrimmed(record["screening_q4_audio_url"]);
    if (u) jobs.push({ kind: "audio", dbColumn: "screening_q4_reason", url: u });
  }

  return jobs;
}

/**
 * Ensures we fetch from the full public Storage URL for `voice-memos`.
 */
function resolveFullPublicAudioUrl(raw: string, supabaseUrl: string): string {
  if (raw.startsWith("http://") || raw.startsWith("https://")) {
    return raw;
  }

  const base = supabaseUrl.replace(/\/+$/, "");
  let objectPath = raw.replace(/^\/+/, "");

  if (objectPath.startsWith(`${VOICE_MEMOS_BUCKET}/`)) {
    objectPath = objectPath.slice(VOICE_MEMOS_BUCKET.length + 1);
  }

  const pathSegments = objectPath.split("/").map((s) => encodeURIComponent(s));
  const encodedPath = pathSegments.join("/");
  return `${base}/storage/v1/object/public/${VOICE_MEMOS_BUCKET}/${encodedPath}`;
}

function json(data: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

async function translateTextToEnglish(text: string, apiKey: string, context: string): Promise<string> {
  const trimmed = text.trim();
  if (!trimmed) return "";

  let res: Response;
  try {
    res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0,
        messages: [
          {
            role: "system",
            content:
              "Translate the user's message into English. If it is already English, return it unchanged. Preserve meaning, paragraph breaks, and first-person voice. Return only the translation with no quotes or commentary.",
          },
          { role: "user", content: trimmed },
        ],
      }),
    });
  } catch (fetchErr) {
    const m = fetchErr instanceof Error ? fetchErr.message : String(fetchErr);
    console.error(`[transcribe-audio] GPT request network error (${context}):`, m, fetchErr);
    throw fetchErr;
  }

  if (!res.ok) {
    let errText = "";
    try {
      errText = await res.text();
    } catch {
      errText = "(unreadable)";
    }
    const msg = `OpenAI translation failed (${context}) HTTP ${res.status}: ${errText.slice(0, 2000)}`;
    console.error(`[transcribe-audio] ${msg}`);
    throw new Error(msg);
  }

  const body = (await res.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const content = body.choices?.[0]?.message?.content;
  return typeof content === "string" ? content.trim() : "";
}

async function translateAudioUrlToEnglish(audioUrl: string, apiKey: string, context: string): Promise<string> {
  let res: Response;
  try {
    res = await fetch(audioUrl);
  } catch (fetchErr) {
    const m = fetchErr instanceof Error ? fetchErr.message : String(fetchErr);
    console.error(`[transcribe-audio] Audio fetch network error (${context}):`, m, fetchErr);
    throw fetchErr;
  }

  if (!res.ok) {
    let errBody = "";
    try {
      errBody = await res.text();
    } catch (_) {
      errBody = "(could not read body)";
    }
    const msg = `Failed to fetch audio (${context}) HTTP ${res.status}: ${errBody.slice(0, 500)}`;
    console.error(`[transcribe-audio] ${msg}`);
    throw new Error(msg);
  }

  let buf: ArrayBuffer;
  try {
    buf = await res.arrayBuffer();
  } catch (bufErr) {
    const m = bufErr instanceof Error ? bufErr.message : String(bufErr);
    console.error(`[transcribe-audio] Failed to read audio body (${context}):`, m, bufErr);
    throw bufErr;
  }

  const blob = new Blob([buf], { type: "audio/webm" });
  const form = new FormData();
  form.append("file", blob, "audio.webm");
  form.append("model", "whisper-1");

  let tr: Response;
  try {
    tr = await fetch("https://api.openai.com/v1/audio/translations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body: form,
    });
  } catch (openaiFetchErr) {
    const m = openaiFetchErr instanceof Error ? openaiFetchErr.message : String(openaiFetchErr);
    console.error(`[transcribe-audio] OpenAI request network error (${context}):`, m, openaiFetchErr);
    throw openaiFetchErr;
  }

  if (!tr.ok) {
    let errText = "";
    try {
      errText = await tr.text();
    } catch {
      errText = "(unreadable)";
    }
    const msg = `OpenAI Whisper failed (${context}) HTTP ${tr.status}: ${errText.slice(0, 2000)}`;
    console.error(`[transcribe-audio] ${msg}`);
    throw new Error(msg);
  }

  let openAiResponse: unknown;
  try {
    openAiResponse = await tr.json();
  } catch (jsonErr) {
    const m = jsonErr instanceof Error ? jsonErr.message : String(jsonErr);
    console.error(`[transcribe-audio] OpenAI JSON parse error (${context}):`, m, jsonErr);
    throw jsonErr;
  }

  if (!openAiResponse || typeof openAiResponse !== "object") {
    console.error(`[transcribe-audio] OpenAI response not an object (${context}):`, openAiResponse);
    throw new Error(`OpenAI translation response was not a JSON object (${context})`);
  }

  const body = openAiResponse as Record<string, unknown>;
  const rawText = body["text"];
  if (rawText !== undefined && typeof rawText !== "string") {
    console.error(`[transcribe-audio] OpenAI 'text' field has wrong type (${context}):`, typeof rawText, body);
    throw new Error(`OpenAI translation 'text' was not a string (${context})`);
  }

  const transcript = typeof rawText === "string" ? rawText.trim() : "";
  if (transcript.length === 0 && rawText === undefined) {
    console.error(
      `[transcribe-audio] OpenAI JSON missing string field 'text' (${context}). Keys:`,
      Object.keys(body),
      "body:",
      JSON.stringify(body).slice(0, 800)
    );
  }

  return transcript;
}
