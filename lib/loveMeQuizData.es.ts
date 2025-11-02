export interface LoveMeQuestion {
  id: number
  text: string
  options: {
    text: string
    score: number // 0-4 points per answer
  }[]
}

export interface LoveMeQuizResult {
  level: string
  title: string
  emoji: string
  description: string
  advice: string[]
  color: string
}

export const loveMeQuestions: LoveMeQuestion[] = [
  {
    id: 1,
    text: "¿Cómo reacciona tu pareja cuando logras algo importante?",
    options: [
      { text: "Celebra con entusiasmo y está genuinamente orgulloso/a de mí", score: 4 },
      { text: "Muestra felicidad y apoyo", score: 3 },
      { text: "Lo reconoce pero no parece excesivamente emocionado/a", score: 2 },
      { text: "Apenas reacciona o parece indiferente", score: 1 },
      { text: "Parece celoso/a, desdeñoso/a o lo hace sobre ellos", score: 0 },
    ],
  },
  {
    id: 2,
    text: "¿Tu pareja te hace sentir como una prioridad en su vida?",
    options: [
      { text: "Absolutamente - me siento como una de sus principales prioridades", score: 4 },
      { text: "Sí, me equilibra bien con otros compromisos", score: 3 },
      { text: "A veces, pero a menudo me siento secundario/a", score: 2 },
      { text: "Raramente - otras cosas parecen más importantes", score: 1 },
      { text: "No - a menudo me siento como algo de último momento", score: 0 },
    ],
  },
  {
    id: 3,
    text: "¿Cómo maneja tu pareja los desacuerdos o conflictos contigo?",
    options: [
      { text: "Escucha respetuosamente y trabaja hacia soluciones juntos", score: 4 },
      { text: "Generalmente constructivo, aunque a veces tenso", score: 3 },
      { text: "A menudo a la defensiva pero eventualmente resuelve las cosas", score: 2 },
      { text: "Se enoja, se cierra o se niega a discutir", score: 1 },
      { text: "Me culpa, dice cosas hirientes o levanta un muro", score: 0 },
    ],
  },
  {
    id: 4,
    text: "¿Tu pareja muestra interés genuino en tus pensamientos y sentimientos?",
    options: [
      { text: "Siempre - quiere saber qué pienso y cómo me siento", score: 4 },
      { text: "A menudo - pregunta y realmente escucha", score: 3 },
      { text: "A veces - pero puede estar distraído/a", score: 2 },
      { text: "Raramente - las conversaciones son mayormente superficiales", score: 1 },
      { text: "No - no parece importarle mi mundo interior", score: 0 },
    ],
  },
  {
    id: 5,
    text: "¿Cómo te trata tu pareja cuando está estresado/a o tiene un mal día?",
    options: [
      { text: "Sigue siendo amable y cariñoso/a, tal vez solo necesita espacio", score: 4 },
      { text: "Un poco retraído/a pero no desagradable", score: 3 },
      { text: "A veces descarga su frustración en mí", score: 2 },
      { text: "A menudo se vuelve frío/a o irritable hacia mí", score: 1 },
      { text: "Me trata mal, me culpa o arremete", score: 0 },
    ],
  },
  {
    id: 6,
    text: "¿Tu pareja hace un esfuerzo para entender y apoyar tus metas y sueños?",
    options: [
      { text: "Sí - me anima activamente y me ayuda a perseguirlos", score: 4 },
      { text: "Sí - es solidario/a e interesado/a", score: 3 },
      { text: "Algo - está bien con ellos pero no involucrado/a", score: 2 },
      { text: "No realmente - no presta mucha atención", score: 1 },
      { text: "No - descarta o desalienta mis aspiraciones", score: 0 },
    ],
  },
  {
    id: 7,
    text: "¿Cómo responde tu pareja cuando estás pasando por un momento difícil?",
    options: [
      { text: "Completamente presente, reconfortante y hace lo que puede para ayudar", score: 4 },
      { text: "Solidario/a e intenta estar ahí para mí", score: 3 },
      { text: "Ofrece algo de apoyo pero parece incómodo/a", score: 2 },
      { text: "Distante o no sabe cómo ayudar", score: 1 },
      { text: "Me evita, parece molesto/a o lo empeora", score: 0 },
    ],
  },
  {
    id: 8,
    text: "¿Tu pareja acepta tus defectos e imperfecciones?",
    options: [
      { text: "Sí - me ama completamente, defectos y todo", score: 4 },
      { text: "Sí - me acepta como soy", score: 3 },
      { text: "Mayormente, pero a veces critica ciertas cosas", score: 2 },
      { text: "A menudo señala mis defectos o quiere que cambie", score: 1 },
      { text: "No - frecuentemente critica o intenta cambiarme", score: 0 },
    ],
  },
  {
    id: 9,
    text: "¿Cómo habla tu pareja sobre el futuro de su relación?",
    options: [
      { text: "Con entusiasmo y confianza me incluye en planes a largo plazo", score: 4 },
      { text: "Menciona positivamente un futuro juntos", score: 3 },
      { text: "Vagamente o evita compromisos específicos", score: 2 },
      { text: "Raramente habla sobre el futuro", score: 1 },
      { text: "Evita o parece incierto/a sobre un futuro juntos", score: 0 },
    ],
  },
  {
    id: 10,
    text: "¿Tu pareja hace sacrificios o compromisos por la relación?",
    options: [
      { text: "Sí - hace sacrificios voluntariamente para hacernos funcionar", score: 4 },
      { text: "Sí - encuentra equilibrio y hace compromisos", score: 3 },
      { text: "A veces, pero a regañadientes", score: 2 },
      { text: "Raramente - espera que yo haga la mayoría de los compromisos", score: 1 },
      { text: "Nunca - siempre es a su manera o nada", score: 0 },
    ],
  },
  {
    id: 11,
    text: "¿Cómo te muestra afecto tu pareja?",
    options: [
      { text: "Frecuentemente y de maneras que me parecen significativas", score: 4 },
      { text: "Muestra regularmente afecto físico y emocional", score: 3 },
      { text: "Ocasionalmente, pero desearía que hubiera más", score: 2 },
      { text: "Raramente muestra afecto", score: 1 },
      { text: "Casi nunca - se siente distante y frío/a", score: 0 },
    ],
  },
  {
    id: 12,
    text: "¿Tu pareja te defiende y apoya frente a otros?",
    options: [
      { text: "Siempre - me respalda pública y privadamente", score: 4 },
      { text: "Sí - me defiende", score: 3 },
      { text: "A veces, pero no consistentemente", score: 2 },
      { text: "Raramente me defiende", score: 1 },
      { text: "Nunca - o peor, me critica frente a otros", score: 0 },
    ],
  },
  {
    id: 13,
    text: "¿Qué tan confiable y honesto/a es tu pareja contigo?",
    options: [
      { text: "Completamente confiable - abierto/a y honesto/a sobre todo", score: 4 },
      { text: "Muy confiable - transparente conmigo", score: 3 },
      { text: "Mayormente honesto/a pero a veces evasivo/a", score: 2 },
      { text: "A menudo reservado/a o atrapado/a en pequeñas mentiras", score: 1 },
      { text: "Frecuentemente deshonesto/a o me oculta cosas", score: 0 },
    ],
  },
  {
    id: 14,
    text: "¿Tu pareja respeta tus límites y autonomía?",
    options: [
      { text: "Absolutamente - respeta mi independencia y límites", score: 4 },
      { text: "Sí - me da espacio y respeta mis necesidades", score: 3 },
      { text: "Usualmente, pero a veces sobrepasa límites", score: 2 },
      { text: "A menudo desestima mis límites", score: 1 },
      { text: "No - controlador/a o desdeñoso/a de mis necesidades", score: 0 },
    ],
  },
  {
    id: 15,
    text: "¿Cómo te hace sentir tu pareja sobre ti mismo/a?",
    options: [
      { text: "Increíble - me siento más seguro/a y valorado/a gracias a él/ella", score: 4 },
      { text: "Bien - me levanta el ánimo y me apoya", score: 3 },
      { text: "Neutral - realmente no afecta mi autoestima", score: 2 },
      { text: "A veces peor - la crítica ocasional me afecta", score: 1 },
      { text: "Mal - me siento peor sobre mí mismo/a en esta relación", score: 0 },
    ],
  },
  {
    id: 16,
    text: "¿Tu pareja recuerda y reconoce cosas importantes para ti?",
    options: [
      { text: "Sí - recuerda detalles y me hace sentir verdaderamente visto/a", score: 4 },
      { text: "Usualmente - recuerda fechas y preferencias importantes", score: 3 },
      { text: "A veces - pero olvida cosas significativas", score: 2 },
      { text: "Raramente - parece no prestar atención", score: 1 },
      { text: "Nunca - olvida todo lo importante para mí", score: 0 },
    ],
  },
  {
    id: 17,
    text: "¿Cómo contribuye tu pareja a la relación?",
    options: [
      { text: "Igualmente o más - invierte activamente tiempo, esfuerzo y cuidado", score: 4 },
      { text: "Bastante igualmente - ambos hacemos esfuerzos", score: 3 },
      { text: "Algo - pero a menudo hago más", score: 2 },
      { text: "Mínimamente - yo cargo con la mayor parte del peso de la relación", score: 1 },
      { text: "Apenas - se siente completamente unilateral", score: 0 },
    ],
  },
  {
    id: 18,
    text: "¿Tu pareja se disculpa y asume responsabilidad cuando te lastima?",
    options: [
      { text: "Sí - se disculpa sinceramente y trabaja para mejorar", score: 4 },
      { text: "Usualmente - reconoce errores y se disculpa", score: 3 },
      { text: "A veces - pero las disculpas pueden sentirse poco sinceras", score: 2 },
      { text: "Raramente - a la defensiva y evita la responsabilidad", score: 1 },
      { text: "Nunca - me culpa o se niega a disculparse", score: 0 },
    ],
  },
  {
    id: 19,
    text: "¿Cómo reacciona tu pareja cuando expresas necesidades o preocupaciones?",
    options: [
      { text: "Escucha atentamente y toma mis necesidades en serio", score: 4 },
      { text: "Generalmente receptivo/a e intenta abordar las preocupaciones", score: 3 },
      { text: "A veces desdeñoso/a pero eventualmente escucha", score: 2 },
      { text: "A menudo a la defensiva o me hace sentir mal por tener necesidades", score: 1 },
      { text: "Descarta, invalida o se enoja con mis necesidades", score: 0 },
    ],
  },
  {
    id: 20,
    text: "En general, ¿te sientes verdaderamente amado/a, valorado/a y apreciado/a por tu pareja?",
    options: [
      { text: "Absolutamente - me siento profundamente amado/a cada día", score: 4 },
      { text: "Sí - me siento amado/a y apreciado/a", score: 3 },
      { text: "A veces - mis sentimientos fluctúan", score: 2 },
      { text: "Raramente - a menudo dudo de su amor", score: 1 },
      { text: "No - no me siento genuinamente amado/a", score: 0 },
    ],
  },
]

export const loveMeQuizResults: Record<string, LoveMeQuizResult> = {
  deeply_loves_you: {
    level: "deeply_loves_you",
    title: "Te ama profundamente",
    emoji: "💝💕",
    description: "Tu pareja muestra señales fuertes y consistentes de amor genuino. Te prioriza, te respeta, apoya tu crecimiento y te hace sentir valorado/a. La forma en que te trata durante conflictos, celebra tus éxitos y está presente cuando lo/la necesitas demuestra un amor profundo y maduro. Esta es una relación saludable y amorosa.",
    advice: [
      "Aprecia y nutre esta relación amorosa",
      "Continúa la comunicación abierta para mantener su fuerte vínculo",
      "Muestra aprecio por el amor que te da",
      "Sigue invirtiendo juntos en la relación",
      "Construye sobre esta base para una asociación duradera",
    ],
    color: "from-rose-500 to-pink-600",
  },
  truly_loves_you: {
    level: "truly_loves_you",
    title: "Te ama verdaderamente",
    emoji: "💖😊",
    description: "Tu pareja demuestra amor genuino por ti. Se preocupa por tu bienestar, te apoya a través de desafíos y valora la relación. Aunque ninguna relación es perfecta, los fundamentos son sólidos: respeto, confianza, afecto y compromiso están claramente presentes.",
    advice: [
      "Continúa construyendo sobre tu sólida base",
      "Aborda los pequeños problemas antes de que crezcan",
      "Expresa tus necesidades y escucha las suyas",
      "Sigue mostrando amor de maneras que él/ella entienda",
      "Aprecia lo bueno mientras trabajan en áreas de crecimiento",
    ],
    color: "from-pink-500 to-rose-500",
  },
  loves_you_with_issues: {
    level: "loves_you_with_issues",
    title: "Te ama, pero hay problemas",
    emoji: "💛🤔",
    description: "Tu pareja probablemente te ama, pero hay algunos patrones o vacíos preocupantes en cómo lo expresa. Algunas necesidades no están siendo completamente satisfechas, o hay áreas donde la relación podría ser más saludable. El amor está presente, pero puede necesitar trabajo para prosperar.",
    advice: [
      "Ten conversaciones honestas sobre necesidades no satisfechas",
      "Considera terapia de pareja para fortalecer su vínculo",
      "Identifica áreas específicas que necesitan mejora",
      "Ambos socios necesitan invertir en hacer cambios",
      "Evalúa si ambos están dispuestos a crecer juntos",
    ],
    color: "from-yellow-500 to-amber-500",
  },
  uncertain_love: {
    level: "uncertain_love",
    title: "Su amor es incierto",
    emoji: "💭❓",
    description: "Las señales son mixtas y preocupantes. Tu pareja puede preocuparse por ti, pero hay problemas significativos con cómo expresa el amor, maneja conflictos o prioriza la relación. Puedes sentirte frecuentemente inseguro/a sobre sus sentimientos, lo cual no es saludable en una relación comprometida.",
    advice: [
      "Reflexiona seriamente sobre si tus necesidades están siendo satisfechas",
      "Ten una conversación directa sobre el estado de la relación",
      "Considera si esta relación te hace feliz",
      "Busca ayuda profesional si quieres intentar mejorar las cosas",
      "Recuerda: mereces sentirte amado/a y seguro/a",
    ],
    color: "from-orange-500 to-yellow-500",
  },
  questionable_love: {
    level: "questionable_love",
    title: "Su amor es cuestionable",
    emoji: "💔😔",
    description: "Según tus respuestas, hay señales de alarma serias. Tu pareja puede no amarte de manera saludable, o la relación puede carecer de elementos fundamentales del amor como respeto, apoyo y cuidado genuino. Mereces mejor que lo que estás experimentando actualmente.",
    advice: [
      "Evalúa seriamente si esta relación es saludable para ti",
      "Habla con amigos de confianza, familia o un terapeuta",
      "Considera si te sientes seguro/a y valorado/a en esta relación",
      "No ignores las señales de alarma - son advertencias por una razón",
      "Recuerda: el amor real te hace sentir bien contigo mismo/a",
    ],
    color: "from-red-500 to-orange-500",
  },
  not_healthy_love: {
    level: "not_healthy_love",
    title: "Esto no parece amor saludable",
    emoji: "🚩💔",
    description: "Tus respuestas indican una relación que carece de amor saludable. Puedes estar experimentando negligencia emocional, manipulación, control u otras dinámicas dañinas. El amor verdadero implica respeto, apoyo, confianza y hacerte sentir valorado/a - no disminuido/a o inseguro/a.",
    advice: [
      "Considera contactar a un terapeuta o consejero",
      "Habla con personas de confianza en tu vida sobre tu relación",
      "Evalúa si esta relación es buena para tu bienestar",
      "Mereces una pareja que te ame y respete verdaderamente",
      "No te conformes con menos de lo que mereces - tu felicidad importa",
    ],
    color: "from-gray-600 to-red-600",
  },
}

export function calculateLoveMeQuizResult(totalScore: number, maxScore: number): string {
  const percentage = (totalScore / maxScore) * 100

  if (percentage >= 80) {
    return "deeply_loves_you"
  } else if (percentage >= 65) {
    return "truly_loves_you"
  } else if (percentage >= 50) {
    return "loves_you_with_issues"
  } else if (percentage >= 35) {
    return "uncertain_love"
  } else if (percentage >= 20) {
    return "questionable_love"
  } else {
    return "not_healthy_love"
  }
}
