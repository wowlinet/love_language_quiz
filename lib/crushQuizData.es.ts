export interface CrushQuestion {
  id: number
  text: string
  options: {
    text: string
    score: number
  }[]
}

export interface CrushQuizResult {
  level: string
  title: string
  emoji: string
  description: string
  advice: string[]
  color: string
}

export const crushQuestions: CrushQuestion[] = [
  {
    id: 1,
    text: "¿Con qué frecuencia tu crush inicia conversaciones contigo?",
    options: [
      { text: "Me envía mensajes o habla primero casi todos los días", score: 4 },
      { text: "Algunas veces por semana - se comunica regularmente", score: 3 },
      { text: "De vez en cuando - quizás una vez por semana o menos", score: 2 },
      { text: "Rara vez - usualmente soy yo quien inicia las conversaciones", score: 1 },
      { text: "Nunca - no inicia para nada", score: 0 },
    ],
  },
  {
    id: 2,
    text: "¿Cómo responde tu crush a tus mensajes?",
    options: [
      { text: "Rápidamente con respuestas detalladas y entusiastas", score: 4 },
      { text: "Bastante rápido y mantiene la conversación", score: 3 },
      { text: "Eventualmente responde pero las mantiene breves", score: 2 },
      { text: "Tarda mucho tiempo y da respuestas cortas", score: 1 },
      { text: "A menudo me deja en visto o no responde", score: 0 },
    ],
  },
  {
    id: 3,
    text: "¿Tu crush hace un esfuerzo por pasar tiempo contigo?",
    options: [
      { text: "¡Sí! Sugiere planes activamente y hace tiempo para mí", score: 4 },
      { text: "A menudo dice que sí cuando sugiero vernos", score: 3 },
      { text: "A veces, pero a menudo está ocupado/a o cancela", score: 2 },
      { text: "Rara vez - usualmente tiene otros planes", score: 1 },
      { text: "No, parece evitar el tiempo a solas", score: 0 },
    ],
  },
  {
    id: 4,
    text: "¿Cómo actúa tu crush cuando están juntos en persona?",
    options: [
      { text: "Me da toda su atención, mantiene contacto visual, se acerca", score: 4 },
      { text: "Parece feliz de verme y se involucra cálidamente", score: 3 },
      { text: "Amigable pero no notablemente diferente de otros", score: 2 },
      { text: "Un poco distante o distraído/a", score: 1 },
      { text: "Parece incómodo/a o evita la interacción", score: 0 },
    ],
  },
  {
    id: 5,
    text: "¿Tu crush muestra signos físicos de interés?",
    options: [
      { text: "Sí - toques juguetones, se sienta cerca, contacto 'accidental'", score: 4 },
      { text: "Algunas señales - toques ligeros ocasionales o proximidad cercana", score: 3 },
      { text: "Neutral - límites físicos normales de amistad", score: 2 },
      { text: "Mínimo - mantiene distancia física", score: 1 },
      { text: "Evita completamente el contacto físico", score: 0 },
    ],
  },
  {
    id: 6,
    text: "¿Tu crush recuerda detalles sobre tu vida?",
    options: [
      { text: "¡Sí! Recuerda cosas pequeñas que mencioné hace semanas", score: 4 },
      { text: "Recuerda cosas importantes y hace preguntas de seguimiento", score: 3 },
      { text: "Recuerda algunas cosas pero no todo", score: 2 },
      { text: "Parece olvidar la mayoría de las cosas que le cuento", score: 1 },
      { text: "No parece prestar atención a lo que comparto", score: 0 },
    ],
  },
  {
    id: 7,
    text: "¿Cómo reacciona tu crush cuando mencionas a otras personas que te podrían interesar?",
    options: [
      { text: "Parece celoso/a, incómodo/a o cambia el tema rápidamente", score: 4 },
      { text: "Parece menos entusiasta o hace preguntas indirectas", score: 3 },
      { text: "Reacción neutral - es solidario/a pero no le molesta", score: 2 },
      { text: "Lo anima activamente o intenta emparejarte", score: 1 },
      { text: "No parece importarle en absoluto", score: 0 },
    ],
  },
  {
    id: 8,
    text: "¿Los amigos de tu crush actúan diferente contigo?",
    options: [
      { text: "Sí - bromean, dan miradas cómplices o nos dejan solos", score: 4 },
      { text: "Son muy amigables y parecen saber de mí", score: 3 },
      { text: "Son educados pero nada especial", score: 2 },
      { text: "Apenas me reconocen", score: 1 },
      { text: "No he conocido a sus amigos o parecen desdeñosos", score: 0 },
    ],
  },
  {
    id: 9,
    text: "¿Tu crush hace preguntas sobre tu vida personal?",
    options: [
      { text: "Constantemente - quiere saber todo sobre mí", score: 4 },
      { text: "A menudo - muestra interés genuino en mi vida", score: 3 },
      { text: "A veces - preguntas casuales aquí y allá", score: 2 },
      { text: "Rara vez - las conversaciones son mayormente superficiales", score: 1 },
      { text: "Nunca - no parece curioso/a sobre mí", score: 0 },
    ],
  },
  {
    id: 10,
    text: "¿Cómo reacciona tu crush cuando compartes buenas noticias?",
    options: [
      { text: "Súper emocionado/a y celebra conmigo con entusiasmo", score: 4 },
      { text: "Genuinamente feliz y solidario/a", score: 3 },
      { text: "Educadamente positivo/a pero no demasiado emocionado/a", score: 2 },
      { text: "Lo reconoce brevemente", score: 1 },
      { text: "No parece interesado/a o cambia de tema", score: 0 },
    ],
  },
  {
    id: 11,
    text: "¿Tu crush se desvive por ayudarte?",
    options: [
      { text: "Siempre - salta ante las oportunidades de ayudarme", score: 4 },
      { text: "A menudo - es servicial cuando necesito algo", score: 3 },
      { text: "A veces - si es conveniente para él/ella", score: 2 },
      { text: "Rara vez - usualmente tiene excusas", score: 1 },
      { text: "Nunca - no se ofrece a ayudar", score: 0 },
    ],
  },
  {
    id: 12,
    text: "¿Tu crush te hace cumplidos?",
    options: [
      { text: "Frecuentemente - cumplidos genuinos sobre personalidad y apariencia", score: 4 },
      { text: "A veces - nota y comenta positivamente", score: 3 },
      { text: "Ocasionalmente - cumplidos genéricos", score: 2 },
      { text: "Rara vez - muy infrecuente", score: 1 },
      { text: "Nunca - ningún cumplido en absoluto", score: 0 },
    ],
  },
  {
    id: 13,
    text: "¿Tu crush comparte cosas personales contigo?",
    options: [
      { text: "Sí - pensamientos profundos, sentimientos y secretos", score: 4 },
      { text: "A menudo - se abre sobre temas significativos", score: 3 },
      { text: "A veces - pero lo mantiene bastante superficial", score: 2 },
      { text: "Rara vez - muy reservado/a", score: 1 },
      { text: "Nunca - mantiene todo privado", score: 0 },
    ],
  },
  {
    id: 14,
    text: "¿Cómo actúa tu crush contigo en las redes sociales?",
    options: [
      { text: "Le da me gusta/comenta frecuentemente, me etiqueta, ve mis historias primero", score: 4 },
      { text: "Interacción regular - me gusta y comentarios ocasionales", score: 3 },
      { text: "Me gusta ocasionales pero poca interacción", score: 2 },
      { text: "Apenas interactúa con mis publicaciones", score: 1 },
      { text: "No me sigue o nunca interactúa", score: 0 },
    ],
  },
  {
    id: 15,
    text: "¿Tu crush muestra interés en tus pasatiempos e intereses?",
    options: [
      { text: "Muy interesado/a - hace preguntas y quiere probarlos conmigo", score: 4 },
      { text: "Muestra curiosidad y escucha genuinamente cuando hablo de ellos", score: 3 },
      { text: "Escucha educadamente pero no se involucra profundamente", score: 2 },
      { text: "Parece aburrido/a o desinteresado/a", score: 1 },
      { text: "Cambia de tema cuando hablo de mis intereses", score: 0 },
    ],
  },
  {
    id: 16,
    text: "¿Tu crush ha insinuado o preguntado sobre tu estado sentimental?",
    options: [
      { text: "Sí, varias veces - claramente quiere saber si estoy disponible", score: 4 },
      { text: "Sí, lo ha preguntado casualmente o mediante insinuaciones", score: 3 },
      { text: "Tal vez indirectamente, pero no directamente", score: 2 },
      { text: "No, pero puede que ya lo sepa", score: 1 },
      { text: "Nunca, y habla de mí saliendo con otros", score: 0 },
    ],
  },
  {
    id: 17,
    text: "¿Cómo actúa tu crush cuando estás hablando con otros posibles intereses románticos?",
    options: [
      { text: "Notablemente molesto/a, intenta llamar mi atención o interrumpe", score: 4 },
      { text: "Parece un poco incómodo/a o menos hablador/a", score: 3 },
      { text: "No parece notarlo o importarle mucho", score: 2 },
      { text: "Me anima a perseguirlos", score: 1 },
      { text: "Activamente intenta emparejarme con otros", score: 0 },
    ],
  },
  {
    id: 18,
    text: "¿Tu crush hace planes futuros que te incluyen?",
    options: [
      { text: "Sí - menciona eventos futuros y asume que estaré ahí", score: 4 },
      { text: "A veces - sugiere hacer cosas juntos en el futuro", score: 3 },
      { text: "Ocasionalmente menciona planes futuros pero vagamente", score: 2 },
      { text: "Rara vez me incluye en su pensamiento futuro", score: 1 },
      { text: "Nunca - no parece pensar en un futuro conmigo", score: 0 },
    ],
  },
]

export const crushQuizResults: Record<string, CrushQuizResult> = {
  definitely_interested: {
    level: "definitely_interested",
    title: "¡Definitivamente Está Interesado/a en Ti!",
    emoji: "🎉💕",
    description: "¡Buenas noticias! Todas las señales sugieren fuertemente que tu crush siente lo mismo por ti. Está mostrando interés consistente a través de sus acciones, comunicación y lenguaje corporal. La forma en que te prioriza, recuerda detalles sobre ti y hace un esfuerzo por pasar tiempo juntos son signos clásicos de interés romántico.",
    advice: [
      "Considera dejarle saber que estás interesado/a - ¡los sentimientos parecen mutuos!",
      "Busca oportunidades para pasar más tiempo a solas juntos",
      "Presta atención a si está esperando que tú des el primer paso",
      "Sé confiado/a pero genuino/a al expresar tus sentimientos",
      "¡No lo pienses demasiado - disfruta este momento emocionante!",
    ],
    color: "from-rose-500 to-pink-600",
  },
  very_likely: {
    level: "very_likely",
    title: "Señales Fuertes de Que Le Gustas",
    emoji: "😊💗",
    description: "¡Las señales son muy positivas! Tu crush está mostrando muchos indicadores de interés romántico. Está haciendo un esfuerzo por conectar contigo, recordar cosas sobre ti y pasar tiempo juntos. Aunque puede ser un poco tímido/a o cauteloso/a, el interés parece genuino y mutuo.",
    advice: [
      "Las señales son prometedoras - considera llevar las cosas un paso más allá",
      "Crea más oportunidades para conversaciones significativas",
      "Nota si responde positivamente a coqueteos ligeros",
      "Sugiere salir a solas para medir su interés",
      "Sé paciente si es tímido/a - sigue mostrando que estás interesado/a",
    ],
    color: "from-pink-500 to-rose-500",
  },
  possibly_interested: {
    level: "possibly_interested",
    title: "Podría Estar Interesado/a",
    emoji: "🤔💓",
    description: "Las señales son mixtas pero se inclinan hacia lo positivo. Tu crush muestra algo de interés, pero no está completamente claro si es romántico o amistoso. Puede estar interesado/a pero cauteloso/a, inseguro/a de tus sentimientos, o todavía descubriendo sus propias emociones. Definitivamente hay potencial aquí.",
    advice: [
      "Intenta pasar más tiempo juntos para aclarar sus sentimientos",
      "Observa cambios en su comportamiento cuando estás cerca",
      "Prueba las aguas con coqueteo sutil para ver cómo responde",
      "Sé tú mismo/a y deja que la conexión se desarrolle naturalmente",
      "No te apresures - a veces los sentimientos toman tiempo en desarrollarse",
    ],
    color: "from-purple-500 to-pink-500",
  },
  unclear_signals: {
    level: "unclear_signals",
    title: "Señales Poco Claras",
    emoji: "💭🤷",
    description: "Las señales son genuinamente poco claras. Tu crush podría estar interesado/a pero muy tímido/a, podría verte solo como amigo/a, o puede que no haya pensado en ti románticamente todavía. También es posible que esté enviando señales mixtas intencional o no intencionalmente.",
    advice: [
      "Enfócate primero en construir una amistad más fuerte",
      "Presta atención a cómo te trata en comparación con otros",
      "Considera expresar interés directamente (pero casualmente) para obtener claridad",
      "No leas demasiado en cada interacción - mantén los pies en la tierra",
      "Prepárate para cualquier resultado y protege tu corazón",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  probably_not: {
    level: "probably_not",
    title: "Probablemente Solo Amigos",
    emoji: "💙🤝",
    description: "Basado en las señales, tu crush probablemente te ve como amigo/a en lugar de interés romántico. Puede que le importes, pero los comportamientos sugieren amistad en lugar de atracción romántica. Esto no significa que los sentimientos no puedan desarrollarse, pero por ahora, el interés romántico no parece mutuo.",
    advice: [
      "Considera si vale la pena perseguir esto dadas las posibles complicaciones de amistad",
      "Si expresas interés, prepárate para una respuesta de 'solo amigos'",
      "No lo tomes personal - la atracción no es una elección",
      "Enfócate en personas que muestren interés claro en ti",
      "A veces lo mejor es valorar la amistad y seguir adelante románticamente",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  not_interested: {
    level: "not_interested",
    title: "No Está Mostrando Interés",
    emoji: "💔😔",
    description: "Desafortunadamente, las señales sugieren que tu crush no está interesado/a románticamente. Puede estar evitando el tiempo a solas, dando respuestas cortas, o mostrando señales de desinterés. Aunque esto es difícil de aceptar, reconocerlo puede ayudarte a seguir adelante y encontrar a alguien que reciproque tus sentimientos.",
    advice: [
      "Acepta su falta de interés - mereces a alguien que esté entusiasmado/a contigo",
      "Date espacio de esta persona para sanar y seguir adelante",
      "No intentes convencerlo/a o hacerlo/a cambiar de opinión",
      "Enfócate en tu propio crecimiento e intereses",
      "Recuerda: la persona correcta dejará claro su interés",
    ],
    color: "from-gray-500 to-slate-500",
  },
}

export function calculateCrushQuizResult(totalScore: number, maxScore: number): string {
  const percentage = (totalScore / maxScore) * 100

  if (percentage >= 75) {
    return "definitely_interested"
  } else if (percentage >= 60) {
    return "very_likely"
  } else if (percentage >= 45) {
    return "possibly_interested"
  } else if (percentage >= 30) {
    return "unclear_signals"
  } else if (percentage >= 15) {
    return "probably_not"
  } else {
    return "not_interested"
  }
}
