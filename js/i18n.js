/**
 * UI strings for English, Spanish, and Portuguese.
 * Participant answers are stored as entered; English versions are written to trans_q* by the backend.
 */
(function (global) {
  var STRINGS = {
    en: {
      pageTitle: 'Research Study',
      langTitle: 'Choose your language',
      langIntro: 'You can complete this study in English, Spanish, or Portuguese. Spoken or typed answers in another language will be saved and also translated into English for the research team.',
      langContinue: 'Continue',
      langSwitchLabel: 'Language',
      screeningContinueAria: 'Continue to main survey',
      langStep: 'Step 1 of 4',
      step1: 'Step 2 of 4',
      step2: 'Step 3 of 4',
      screeningTitle: 'Eligibility screening',
      screeningIntro:
        'Please answer each question honestly. Your responses determine whether you may continue to the main survey. This section uses different criteria than the questions that follow.',
      screenQ1: '1. Are you between 18 and 85 years of age?',
      screenQ2:
        '2. Are you currently engaged in regular exercise? (Note: For this study, regular exercise is defined as an average of at least 3 days per week for a minimum of 30 minutes per session. This excludes leisure-based or very low-intensity movement.)',
      screenQ3:
        '3. In the last 10 years, have you had any continuous break from training longer than 3 months for reasons <em>other than</em> injury?',
      screenQ4:
        '4. Over the last 10 years, have you had more than 5 pauses in training lasting 3 months or more (including for injuries)?',
      screenQ5:
        '5. Do you currently train at least 3 days per week <em>and</em> at least 30 minutes per session on average?',
      yes: 'Yes',
      no: 'No',
      continue: 'Continue',
      ineligible:
        'Based on your responses, you do not meet the specific eligibility criteria for this study. We appreciate your time and interest!',
      consentTitle: 'Informed consent',
      consentH3: 'Informational Letter',
      consentStudyTitle: 'Life Changes, Exercise Remains: Experiences of Long-Term Exercise Maintenance',
      consentP1:
        'Hello, my name is Savannah Calleja. You are being invited to take part in a research study about long-term exercise and the experiences that may help people continue exercising over time. The purpose of this study is to learn how adults who have exercised regularly for at least 10 years describe the experiences that have helped them continue exercising.',
      consentP2: 'About 100 people are expected to take part in this study. Taking part will take about 30 minutes.',
      consentP3: 'If you agree to take part, you will be asked to:',
      consentLi1: 'Complete a short screening to see if you are eligible for the study.',
      consentLi2:
        'Provide basic information about yourself and your exercise history, including your age, biological sex, race/ethnicity, number of years you have exercised, how often you exercise, how long your exercise sessions usually last, and your main type of exercise.',
      consentLi3:
        'Answer five open-ended questions about your exercise experiences. These questions will ask about when you first started exercising, your reasons for exercising and how they may have changed, times when you thought about stopping exercise, difficult or intense exercise experiences, and what helped you continue exercising.',
      consentLi4:
        'Answer the questions by typing your responses or recording audio responses through the study website. If you record your answers, the audio will be converted into written text for the research team to review and study.',
      consentP4:
        'There are minimal risks to taking part in this study. Some questions may ask you to think about difficult, intense, or discouraging exercise experiences. Thinking about these experiences may cause temporary discomfort, frustration, or tiredness. You may stop taking part at any time before submitting your responses, without penalty.',
      consentP5:
        'There are no guaranteed direct benefits to you for taking part in this study. However, you may find it helpful to think about your exercise experiences. This study may help researchers better understand the social, environmental, psychological, and biological factors that may help people continue exercising over many years. The results may also help guide future research and programs designed to help people continue exercising as their lives change.',
      consentP6:
        'There is no cost to you for taking part in this study, and you will not be paid for participating. If you have questions about the study, you may contact the research team using the contact information provided in this letter.',
      consentP7:
        'You will not be completely anonymous if you choose to record audio because your voice or information you share may identify you. However, your answers will be kept confidential. Your audio recordings will be stored in a protected study system and will only be available to approved members of the research team. Your audio responses will be converted into written text. Information that could identify you will be removed from the written responses before they are analyzed or shared. Your audio recordings will not be made public and will be permanently deleted after the approved storage period. Written responses with identifying information removed may be kept as required by Florida International University and the Institutional Review Board.',
      consentP8:
        'If you have questions for one of the researchers conducting this study, you may contact Savannah Calleja at <a href="tel:9419168459">941-916-8459</a> or <a href="mailto:scall041@fiu.edu">scall041@fiu.edu</a>.',
      consentP9:
        'If you would like to talk with someone about your rights of being a subject in this research study or about ethical issues with this research study, you may contact the FIU Office of Research Integrity by phone at <a href="tel:3053482494">305-348-2494</a> or by email at <a href="mailto:ori@fiu.edu">ori@fiu.edu</a>.',
      consentP10:
        'Your participation in this research is voluntary, and you will not be penalized or lose benefits if you refuse to participate or decide to stop. You may keep a copy of this form for your records.',
      consentAgree: 'I have read this information and I agree to take part in this research study.',
      consentContinue: 'Continue to the study',
      consentDecline: 'I do not agree',
      consentDeclined: 'You have chosen not to take part in this study. Thank you for your time.',
      headerTitle: 'Research Study',
      headerIntro:
        'Thank you for participating in this survey study. Please complete the demographics, then answer each survey question in writing or by voice in as much detail as possible.',
      demographics: 'Demographics',
      age: 'Age',
      bioSex: 'Biological Sex',
      select: 'Select',
      male: 'Male',
      female: 'Female',
      preferNot: 'Prefer not to say',
      ethnicity: 'Ethnicity',
      ethHispanic: 'Hispanic or Latino',
      ethAIAN: 'American Indian or Alaska Native',
      ethAsian: 'Asian',
      ethBlack: 'Black or African American',
      ethNHPI: 'Native Hawaiian or Other Pacific Islander',
      ethWhite: 'White',
      yearsTraining: 'Years of Training',
      daysPerWeek: 'Days Per Week',
      daysHint: 'In a typical week, on average, how many days do you train?',
      duration: 'Typical Training Duration',
      durationHint: 'On a typical training session, how many minutes is it?',
      modality: 'Primary Modality',
      modGroupAerobic: 'Aerobic / Endurance',
      running: 'Running',
      cycling: 'Cycling',
      swimming: 'Swimming',
      rowing: 'Rowing',
      modGroupResistance: 'Resistance Training',
      tradLift: 'Traditional Weightlifting',
      calisthenics: 'Calisthenics',
      powerlifting: 'Powerlifting',
      olyLift: 'Olympic Weightlifting',
      modGroupFunctional: 'Functional / High-Intensity',
      crossfit: 'CrossFit',
      circuit: 'Circuit Training',
      other: 'Other (type below)',
      modalityHint: 'Select your main training style, or choose Other and describe it below.',
      specifyModality: 'Specify your modality',
      modalityPlaceholder: 'e.g., Dance, sport-specific training',
      surveyQuestions: 'Survey Questions',
      xorHint:
        'For each question, choose <strong>either</strong> a written answer <strong>or</strong> a voice recording — not both. Please answer in as much detail as possible.',
      q1: '1. Tell us about the first time you started exercising. What was the initial experience like (e.g., was it intimidating, exciting, or difficult)?',
      q2: '2. Why did you originally decide to start, and how has your “why” evolved since you’ve started?',
      q3: '3. During your ten years or more of training, was there ever a time you wanted to give up? Please explain what kept you going and why.',
      q4: '4. Describe the hardest or most intense exercise session you’ve ever had. How did you feel physically and mentally immediately afterward (e.g., sense of accomplishment, physical exhaustion, nausea, or mental clarity)? Please specify what the activity was (e.g., a specific race, a heavy lifting session, or a high-intensity circuit).',
      q5: '5. Why did you choose to continue training after that specific “hard” session, and has that level of intensity become a regular part of your routine?',
      qInstruction: 'Please describe in as much detail as possible.',
      answerFormat: 'Answer format (choose one)',
      written: 'Written response',
      voice: 'Voice recording',
      typeHere: 'Type your answer here…',
      recordAnswer: 'Record answer',
      recordingStop: 'Recording... Tap to Stop',
      uploading: 'Uploading…',
      saved: 'Saved',
      submit: 'Submit Survey',
      submitting: 'Submitting…',
      thankYou: 'Thank you',
      thankYouNote: 'Your responses have been saved. We appreciate your participation in this study.',
      errScreening: 'You must complete the eligibility screening and qualify before you can submit this survey.',
      errConsent: 'You must read and agree to the informed consent information before you can submit this survey.',
      errOtherModality: 'Please specify your primary modality when you select Other.',
      errMixedPrefix: 'Each question must be answered with either writing or voice only — please fix: ',
      errMissingPrefix: 'Please complete every question: ',
      writtenAnswer: 'written answer',
      voiceRecording: 'voice recording',
      errUpload: 'Could not upload your recording. Please try recording again.',
      errMic: 'Microphone permission needed to record. Please allow mic access.',
      errAudioUploadPrefix: 'Audio upload failed: ',
      errSubmitPrefix: 'Submission error: ',
      errNotConnected: 'Survey is not connected. Check Supabase settings in js/app.js.',
    },
    es: {
      pageTitle: 'Estudio de investigación',
      langTitle: 'Elija su idioma',
      langIntro:
        'Puede completar este estudio en inglés, español o portugués. Las respuestas habladas o escritas en otro idioma se guardarán y también se traducirán al inglés para el equipo de investigación.',
      langContinue: 'Continuar',
      langSwitchLabel: 'Idioma',
      screeningContinueAria: 'Continuar a la encuesta principal',
      langStep: 'Paso 1 de 4',
      step1: 'Paso 2 de 4',
      step2: 'Paso 3 de 4',
      screeningTitle: 'Evaluación de elegibilidad',
      screeningIntro:
        'Por favor responda cada pregunta con honestidad. Sus respuestas determinan si puede continuar con la encuesta principal. Esta sección usa criterios distintos a las preguntas que siguen.',
      screenQ1: '1. ¿Tiene usted entre 18 y 85 años de edad?',
      screenQ2:
        '2. ¿Practica ejercicio de forma regular? (Nota: para este estudio, el ejercicio regular se define como un promedio de al menos 3 días por semana, con un mínimo de 30 minutos por sesión. Esto no incluye actividad de ocio o movimiento de muy baja intensidad.)',
      screenQ3:
        '3. En los últimos 10 años, ¿ha tenido alguna interrupción continua del entrenamiento de más de 3 meses por motivos <em>distintos</em> a una lesión?',
      screenQ4:
        '4. En los últimos 10 años, ¿ha tenido más de 5 pausas en el entrenamiento de 3 meses o más (incluyendo por lesiones)?',
      screenQ5:
        '5. ¿Entrena actualmente al menos 3 días por semana <em>y</em> al menos 30 minutos por sesión, en promedio?',
      yes: 'Sí',
      no: 'No',
      continue: 'Continuar',
      ineligible:
        'Según sus respuestas, no cumple los criterios de elegibilidad específicos de este estudio. Agradecemos su tiempo e interés.',
      consentTitle: 'Consentimiento informado',
      consentH3: 'Carta informativa',
      consentStudyTitle: 'Life Changes, Exercise Remains: Experiences of Long-Term Exercise Maintenance',
      consentP1:
        'Hola, me llamo Savannah Calleja. Lo invitamos a participar en un estudio de investigación sobre el ejercicio a largo plazo y las experiencias que pueden ayudar a las personas a seguir haciendo ejercicio con el tiempo. El propósito de este estudio es conocer cómo adultos que han hecho ejercicio de forma regular durante al menos 10 años describen las experiencias que les han ayudado a continuar.',
      consentP2: 'Se espera que participen unas 100 personas. La participación tomará aproximadamente 30 minutos.',
      consentP3: 'Si acepta participar, se le pedirá que:',
      consentLi1: 'Complete una breve evaluación para ver si es elegible para el estudio.',
      consentLi2:
        'Proporcione información básica sobre usted y su historial de ejercicio, incluyendo su edad, sexo biológico, raza/etnicidad, número de años que ha hecho ejercicio, con qué frecuencia se ejercita, cuánto duran normalmente sus sesiones y su tipo principal de ejercicio.',
      consentLi3:
        'Responda cinco preguntas abiertas sobre sus experiencias con el ejercicio. Estas preguntas tratarán sobre cuándo empezó a hacer ejercicio, sus motivos y cómo pueden haber cambiado, momentos en los que pensó en dejarlo, experiencias difíciles o intensas, y qué le ayudó a continuar.',
      consentLi4:
        'Responda escribiendo o grabando audio en el sitio web del estudio. Si graba sus respuestas, el audio se convertirá en texto escrito para que el equipo de investigación lo revise y analice.',
      consentP4:
        'Los riesgos de participar en este estudio son mínimos. Algunas preguntas pueden pedirle que piense en experiencias de ejercicio difíciles, intensas o desalentadoras. Pensar en esas experiencias puede causar molestia, frustración o cansancio temporales. Puede dejar de participar en cualquier momento antes de enviar sus respuestas, sin penalización.',
      consentP5:
        'No hay beneficios directos garantizados por participar. Sin embargo, puede resultarle útil reflexionar sobre sus experiencias de ejercicio. Este estudio puede ayudar a los investigadores a comprender mejor los factores sociales, ambientales, psicológicos y biológicos que pueden ayudar a las personas a seguir haciendo ejercicio durante muchos años. Los resultados también pueden orientar futuras investigaciones y programas.',
      consentP6:
        'No hay costo por participar y no recibirá pago. Si tiene preguntas sobre el estudio, puede comunicarse con el equipo de investigación usando la información de contacto de esta carta.',
      consentP7:
        'No será completamente anónimo si elige grabar audio, porque su voz o la información que comparta pueden identificarlo. No obstante, sus respuestas se mantendrán confidenciales. Las grabaciones se almacenarán en un sistema protegido y solo estarán disponibles para miembros aprobados del equipo de investigación. Las respuestas de audio se convertirán en texto escrito. La información que podría identificarlo se eliminará de las respuestas escritas antes de analizarlas o compartirlas. Las grabaciones de audio no se harán públicas y se eliminarán de forma permanente después del período de almacenamiento aprobado. Las respuestas escritas, sin información identificable, pueden conservarse según lo requieran Florida International University y la Junta de Revisión Institucional.',
      consentP8:
        'Si tiene preguntas para uno de los investigadores de este estudio, puede comunicarse con Savannah Calleja al <a href="tel:9419168459">941-916-8459</a> o <a href="mailto:scall041@fiu.edu">scall041@fiu.edu</a>.',
      consentP9:
        'Si desea hablar con alguien sobre sus derechos como participante en este estudio o sobre cuestiones éticas, puede comunicarse con la Oficina de Integridad de la Investigación de FIU al <a href="tel:3053482494">305-348-2494</a> o por correo a <a href="mailto:ori@fiu.edu">ori@fiu.edu</a>.',
      consentP10:
        'Su participación es voluntaria y no será penalizado ni perderá beneficios si se niega a participar o decide detenerse. Puede conservar una copia de este formulario para sus registros.',
      consentAgree: 'He leído esta información y acepto participar en este estudio de investigación.',
      consentContinue: 'Continuar al estudio',
      consentDecline: 'No acepto',
      consentDeclined: 'Ha elegido no participar en este estudio. Gracias por su tiempo.',
      headerTitle: 'Estudio de investigación',
      headerIntro:
        'Gracias por participar en este estudio. Complete los datos demográficos y luego responda cada pregunta por escrito o por voz, con el mayor detalle posible.',
      demographics: 'Datos demográficos',
      age: 'Edad',
      bioSex: 'Sexo biológico',
      select: 'Seleccionar',
      male: 'Hombre',
      female: 'Mujer',
      preferNot: 'Prefiero no decirlo',
      ethnicity: 'Etnicidad',
      ethHispanic: 'Hispano o latino',
      ethAIAN: 'Indígena americano o nativo de Alaska',
      ethAsian: 'Asiático',
      ethBlack: 'Negro o afroamericano',
      ethNHPI: 'Nativo de Hawái u otra isla del Pacífico',
      ethWhite: 'Blanco',
      yearsTraining: 'Años de entrenamiento',
      daysPerWeek: 'Días por semana',
      daysHint: 'En una semana típica, en promedio, ¿cuántos días entrena?',
      duration: 'Duración típica del entrenamiento',
      durationHint: 'En una sesión típica, ¿cuántos minutos dura?',
      modality: 'Modalidad principal',
      modGroupAerobic: 'Aeróbico / Resistencia',
      running: 'Correr',
      cycling: 'Ciclismo',
      swimming: 'Natación',
      rowing: 'Remo',
      modGroupResistance: 'Entrenamiento de fuerza',
      tradLift: 'Levantamiento de pesas tradicional',
      calisthenics: 'Calistenia',
      powerlifting: 'Powerlifting',
      olyLift: 'Halterofilia olímpica',
      modGroupFunctional: 'Funcional / Alta intensidad',
      crossfit: 'CrossFit',
      circuit: 'Entrenamiento en circuito',
      other: 'Otro (especifique abajo)',
      modalityHint: 'Seleccione su estilo principal de entrenamiento, o elija Otro y descríbalo abajo.',
      specifyModality: 'Especifique su modalidad',
      modalityPlaceholder: 'p. ej., danza, entrenamiento específico de un deporte',
      surveyQuestions: 'Preguntas de la encuesta',
      xorHint:
        'Para cada pregunta, elija <strong>o</strong> una respuesta escrita <strong>o</strong> una grabación de voz, no ambas. Responda con el mayor detalle posible.',
      q1: '1. Cuéntenos sobre la primera vez que empezó a hacer ejercicio. ¿Cómo fue esa experiencia inicial (por ejemplo, intimidante, emocionante o difícil)?',
      q2: '2. ¿Por qué decidió empezar originalmente, y cómo ha evolucionado su “porqué” desde que comenzó?',
      q3: '3. Durante sus diez años o más de entrenamiento, ¿hubo alguna vez en que quiso rendirse? Explique qué lo mantuvo y por qué.',
      q4: '4. Describa la sesión de ejercicio más dura o intensa que haya tenido. ¿Cómo se sintió física y mentalmente inmediatamente después (por ejemplo, logro, agotamiento, náuseas o claridad mental)? Especifique cuál fue la actividad (por ejemplo, una carrera, una sesión de levantamiento pesado o un circuito de alta intensidad).',
      q5: '5. ¿Por qué decidió continuar entrenando después de esa sesión “dura”, y ese nivel de intensidad se ha vuelto parte regular de su rutina?',
      qInstruction: 'Por favor describa con el mayor detalle posible.',
      answerFormat: 'Formato de respuesta (elija uno)',
      written: 'Respuesta escrita',
      voice: 'Grabación de voz',
      typeHere: 'Escriba su respuesta aquí…',
      recordAnswer: 'Grabar respuesta',
      recordingStop: 'Grabando... Toque para detener',
      uploading: 'Subiendo…',
      saved: 'Guardado',
      submit: 'Enviar encuesta',
      submitting: 'Enviando…',
      thankYou: 'Gracias',
      thankYouNote: 'Sus respuestas se han guardado. Agradecemos su participación en este estudio.',
      errScreening: 'Debe completar la evaluación de elegibilidad y calificar antes de enviar esta encuesta.',
      errConsent: 'Debe leer y aceptar la información de consentimiento informado antes de enviar esta encuesta.',
      errOtherModality: 'Especifique su modalidad principal cuando seleccione Otro.',
      errMixedPrefix: 'Cada pregunta debe responderse solo por escrito o solo por voz. Corrija: ',
      errMissingPrefix: 'Complete todas las preguntas: ',
      writtenAnswer: 'respuesta escrita',
      voiceRecording: 'grabación de voz',
      errUpload: 'No se pudo subir su grabación. Intente grabar de nuevo.',
      errMic: 'Se necesita permiso del micrófono para grabar. Permita el acceso al micrófono.',
      errAudioUploadPrefix: 'Error al subir el audio: ',
      errSubmitPrefix: 'Error al enviar: ',
      errNotConnected: 'La encuesta no está conectada. Revise la configuración de Supabase en js/app.js.',
    },
    pt: {
      pageTitle: 'Estudo de pesquisa',
      langTitle: 'Escolha o seu idioma',
      langIntro:
        'Pode completar este estudo em inglês, espanhol ou português. Respostas faladas ou escritas noutro idioma serão guardadas e também traduzidas para inglês para a equipe de pesquisa.',
      langContinue: 'Continuar',
      langSwitchLabel: 'Idioma',
      screeningContinueAria: 'Continuar para o questionário principal',
      langStep: 'Passo 1 de 4',
      step1: 'Passo 2 de 4',
      step2: 'Passo 3 de 4',
      screeningTitle: 'Triagem de elegibilidade',
      screeningIntro:
        'Por favor, responda a cada pergunta com honestidade. As suas respostas determinam se pode continuar para o questionário principal. Esta secção usa critérios diferentes das perguntas que se seguem.',
      screenQ1: '1. Tem entre 18 e 85 anos de idade?',
      screenQ2:
        '2. Pratica exercício de forma regular? (Nota: neste estudo, exercício regular significa uma média de pelo menos 3 dias por semana, com um mínimo de 30 minutos por sessão. Isto exclui atividade de lazer ou movimento de muito baixa intensidade.)',
      screenQ3:
        '3. Nos últimos 10 anos, teve alguma interrupção contínua do treino superior a 3 meses por razões <em>diferentes</em> de lesão?',
      screenQ4:
        '4. Nos últimos 10 anos, teve mais de 5 pausas no treino com duração de 3 meses ou mais (incluindo por lesões)?',
      screenQ5:
        '5. Treina atualmente pelo menos 3 dias por semana <em>e</em> pelo menos 30 minutos por sessão, em média?',
      yes: 'Sim',
      no: 'Não',
      continue: 'Continuar',
      ineligible:
        'Com base nas suas respostas, não cumpre os critérios de elegibilidade específicos deste estudo. Agradecemos o seu tempo e interesse.',
      consentTitle: 'Consentimento informado',
      consentH3: 'Carta informativa',
      consentStudyTitle: 'Life Changes, Exercise Remains: Experiences of Long-Term Exercise Maintenance',
      consentP1:
        'Olá, o meu nome é Savannah Calleja. Está a ser convidado(a) a participar num estudo de investigação sobre exercício a longo prazo e as experiências que podem ajudar as pessoas a continuar a exercitar-se ao longo do tempo. O objetivo deste estudo é aprender como adultos que se exercitam regularmente há pelo menos 10 anos descrevem as experiências que os ajudaram a continuar.',
      consentP2: 'Espera-se que cerca de 100 pessoas participem. A participação levará cerca de 30 minutos.',
      consentP3: 'Se concordar em participar, ser-lhe-á pedido que:',
      consentLi1: 'Complete uma breve triagem para ver se é elegível para o estudo.',
      consentLi2:
        'Forneça informações básicas sobre si e o seu historial de exercício, incluindo idade, sexo biológico, raça/etnia, número de anos de exercício, com que frequência se exercita, quanto duram normalmente as sessões e o seu tipo principal de exercício.',
      consentLi3:
        'Responda a cinco perguntas abertas sobre as suas experiências de exercício. Estas perguntas abordarão quando começou a exercitar-se, os seus motivos e como podem ter mudado, momentos em que pensou em parar, experiências difíceis ou intensas, e o que o ajudou a continuar.',
      consentLi4:
        'Responda escrevendo ou gravando áudio no site do estudo. Se gravar as respostas, o áudio será convertido em texto escrito para a equipe de pesquisa rever e analisar.',
      consentP4:
        'Os riscos de participar neste estudo são mínimos. Algumas perguntas podem pedir-lhe que pense em experiências de exercício difíceis, intensas ou desanimadoras. Pensar nessas experiências pode causar desconforto, frustração ou cansaço temporários. Pode deixar de participar a qualquer momento antes de enviar as respostas, sem penalização.',
      consentP5:
        'Não há benefícios diretos garantidos por participar. No entanto, pode ser útil refletir sobre as suas experiências de exercício. Este estudo pode ajudar os investigadores a compreender melhor os fatores sociais, ambientais, psicológicos e biológicos que podem ajudar as pessoas a continuar a exercitar-se durante muitos anos. Os resultados também podem orientar investigação e programas futuros.',
      consentP6:
        'Não há custo para participar e não será pago. Se tiver perguntas sobre o estudo, pode contactar a equipe de pesquisa usando as informações desta carta.',
      consentP7:
        'Não será completamente anónimo se escolher gravar áudio, porque a sua voz ou as informações que partilhar podem identificá-lo. Contudo, as suas respostas serão mantidas confidenciais. As gravações serão armazenadas num sistema protegido e só estarão disponíveis para membros aprovados da equipe de pesquisa. As respostas de áudio serão convertidas em texto escrito. Informações que o possam identificar serão removidas das respostas escritas antes de serem analisadas ou partilhadas. As gravações de áudio não serão tornadas públicas e serão eliminadas de forma permanente após o período de armazenamento aprovado. As respostas escritas, sem informação identificável, podem ser conservadas conforme exigido pela Florida International University e pelo Institutional Review Board.',
      consentP8:
        'Se tiver perguntas para um dos investigadores deste estudo, pode contactar Savannah Calleja em <a href="tel:9419168459">941-916-8459</a> ou <a href="mailto:scall041@fiu.edu">scall041@fiu.edu</a>.',
      consentP9:
        'Se quiser falar com alguém sobre os seus direitos como participante neste estudo ou sobre questões éticas, pode contactar o FIU Office of Research Integrity pelo telefone <a href="tel:3053482494">305-348-2494</a> ou por email <a href="mailto:ori@fiu.edu">ori@fiu.edu</a>.',
      consentP10:
        'A sua participação é voluntária e não será penalizado nem perderá benefícios se recusar participar ou decidir parar. Pode guardar uma cópia deste formulário para os seus registos.',
      consentAgree: 'Li esta informação e concordo em participar neste estudo de investigação.',
      consentContinue: 'Continuar para o estudo',
      consentDecline: 'Não concordo',
      consentDeclined: 'Escolheu não participar neste estudo. Obrigado pelo seu tempo.',
      headerTitle: 'Estudo de pesquisa',
      headerIntro:
        'Obrigado por participar neste estudo. Complete os dados demográficos e depois responda a cada pergunta por escrito ou por voz, com o máximo de detalhe possível.',
      demographics: 'Dados demográficos',
      age: 'Idade',
      bioSex: 'Sexo biológico',
      select: 'Selecionar',
      male: 'Masculino',
      female: 'Feminino',
      preferNot: 'Prefiro não dizer',
      ethnicity: 'Etnia',
      ethHispanic: 'Hispânico ou latino',
      ethAIAN: 'Indígena americano ou nativo do Alasca',
      ethAsian: 'Asiático',
      ethBlack: 'Negro ou afro-americano',
      ethNHPI: 'Nativo do Havai ou de outra ilha do Pacífico',
      ethWhite: 'Branco',
      yearsTraining: 'Anos de treino',
      daysPerWeek: 'Dias por semana',
      daysHint: 'Numa semana típica, em média, quantos dias treina?',
      duration: 'Duração típica do treino',
      durationHint: 'Numa sessão típica, quantos minutos dura?',
      modality: 'Modalidade principal',
      modGroupAerobic: 'Aeróbico / Resistência',
      running: 'Corrida',
      cycling: 'Ciclismo',
      swimming: 'Natação',
      rowing: 'Remo',
      modGroupResistance: 'Treino de força',
      tradLift: 'Musculação tradicional',
      calisthenics: 'Calistenia',
      powerlifting: 'Powerlifting',
      olyLift: 'Halterofilismo olímpico',
      modGroupFunctional: 'Funcional / Alta intensidade',
      crossfit: 'CrossFit',
      circuit: 'Treino em circuito',
      other: 'Outro (indique abaixo)',
      modalityHint: 'Selecione o seu estilo principal de treino, ou escolha Outro e descreva abaixo.',
      specifyModality: 'Especifique a sua modalidade',
      modalityPlaceholder: 'p. ex., dança, treino específico de um desporto',
      surveyQuestions: 'Perguntas do questionário',
      xorHint:
        'Para cada pergunta, escolha <strong>ou</strong> uma resposta escrita <strong>ou</strong> uma gravação de voz — não ambas. Responda com o máximo de detalhe possível.',
      q1: '1. Fale-nos da primeira vez que começou a fazer exercício. Como foi essa experiência inicial (por exemplo, intimidante, empolgante ou difícil)?',
      q2: '2. Porque decidiu começar originalmente, e como evoluiu o seu “porquê” desde que começou?',
      q3: '3. Durante os seus dez anos ou mais de treino, houve algum momento em que quis desistir? Explique o que o manteve e porquê.',
      q4: '4. Descreva a sessão de exercício mais dura ou intensa que já teve. Como se sentiu física e mentalmente imediatamente depois (por exemplo, realização, esgotamento, náusea ou clareza mental)? Especifique qual foi a atividade (por exemplo, uma corrida, uma sessão de levantamento pesado ou um circuito de alta intensidade).',
      q5: '5. Porque escolheu continuar a treinar depois dessa sessão “dura”, e esse nível de intensidade tornou-se parte regular da sua rotina?',
      qInstruction: 'Por favor descreva com o máximo de detalhe possível.',
      answerFormat: 'Formato da resposta (escolha um)',
      written: 'Resposta escrita',
      voice: 'Gravação de voz',
      typeHere: 'Escreva a sua resposta aqui…',
      recordAnswer: 'Gravar resposta',
      recordingStop: 'A gravar... Toque para parar',
      uploading: 'A enviar…',
      saved: 'Guardado',
      submit: 'Enviar questionário',
      submitting: 'A enviar…',
      thankYou: 'Obrigado',
      thankYouNote: 'As suas respostas foram guardadas. Agradecemos a sua participação neste estudo.',
      errScreening: 'Deve completar a triagem de elegibilidade e ser elegível antes de enviar este questionário.',
      errConsent: 'Deve ler e aceitar a informação de consentimento informado antes de enviar este questionário.',
      errOtherModality: 'Especifique a sua modalidade principal quando selecionar Outro.',
      errMixedPrefix: 'Cada pergunta deve ser respondida só por escrito ou só por voz. Corrija: ',
      errMissingPrefix: 'Complete todas as perguntas: ',
      writtenAnswer: 'resposta escrita',
      voiceRecording: 'gravação de voz',
      errUpload: 'Não foi possível enviar a sua gravação. Tente gravar novamente.',
      errMic: 'É preciso permissão do microfone para gravar. Permita o acesso ao microfone.',
      errAudioUploadPrefix: 'Falha no envio do áudio: ',
      errSubmitPrefix: 'Erro no envio: ',
      errNotConnected: 'O questionário não está ligado. Verifique as definições do Supabase em js/app.js.',
    },
  };

  var LANG_KEY = 'research_survey_ui_language';
  var current = 'en';

  function t(key) {
    var pack = STRINGS[current] || STRINGS.en;
    if (pack[key] != null) return pack[key];
    if (STRINGS.en[key] != null) return STRINGS.en[key];
    return key;
  }

  function htmlLang() {
    if (current === 'es') return 'es';
    if (current === 'pt') return 'pt';
    return 'en';
  }

  function apply() {
    document.documentElement.lang = htmlLang();
    document.title = t('pageTitle');
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (key) el.innerHTML = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (key) el.setAttribute('placeholder', t(key));
    });
    document.querySelectorAll('[data-i18n-label]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-label');
      if (key) el.setAttribute('label', t(key));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (key) el.setAttribute('aria-label', t(key));
    });
    document.querySelectorAll('textarea.survey-response-textarea').forEach(function (el) {
      el.setAttribute('lang', htmlLang());
    });
    document.querySelectorAll('.record-btn[data-q]').forEach(function (btn) {
      if (btn.classList.contains('recording')) {
        btn.textContent = t('recordingStop');
      } else {
        btn.textContent = t('recordAnswer');
      }
    });
    var switcher = document.getElementById('lang-switch-select');
    if (switcher) switcher.value = current;
  }

  function setLang(code) {
    if (!STRINGS[code]) code = 'en';
    current = code;
    try {
      sessionStorage.setItem(LANG_KEY, code);
    } catch (e) {}
    apply();
  }

  function getLang() {
    return current;
  }

  function initFromStorage() {
    var stored = null;
    try {
      stored = sessionStorage.getItem(LANG_KEY);
    } catch (e) {}
    if (stored && STRINGS[stored]) current = stored;
    return current;
  }

  global.SurveyI18n = {
    t: t,
    apply: apply,
    setLang: setLang,
    getLang: getLang,
    initFromStorage: initFromStorage,
    LANG_KEY: LANG_KEY,
  };
})(window);
