export interface LoveQuestion {
  id: number
  text: string
  options: {
    text: string
    score: number // 0-4 points per answer
  }[]
}

export interface LoveQuizResult {
  level: string
  title: string
  description: string
  advice: string[]
  color: string
}

export const loveQuestions: LoveQuestion[] = [
  {
    id: 1,
    text: "Cuando piensas en esta persona, ¿cómo te sientes?",
    options: [
      { text: "Mi corazón se acelera y siento mariposas en el estómago", score: 4 },
      { text: "Me siento cálido, feliz y contento", score: 3 },
      { text: "Me siento cómodo y relajado", score: 2 },
      { text: "No pienso en ella/él tan a menudo", score: 1 },
      { text: "Me siento indiferente o confundido", score: 0 },
    ],
  },
  {
    id: 2,
    text: "¿Qué tan importante es su felicidad para ti?",
    options: [
      { text: "Su felicidad es tan importante como la mía", score: 4 },
      { text: "Muy importante - quiero que sea feliz", score: 3 },
      { text: "Algo importante, como cualquier amigo", score: 2 },
      { text: "Me importa, pero no es una prioridad", score: 1 },
      { text: "No he pensado realmente en ello", score: 0 },
    ],
  },
  {
    id: 3,
    text: "¿Imaginas un futuro con esta persona?",
    options: [
      { text: "Sí, constantemente - está en todos mis planes futuros", score: 4 },
      { text: "A menudo - la/lo veo como parte de mi futuro", score: 3 },
      { text: "A veces - pero aún no está claro", score: 2 },
      { text: "Raramente - me concentro en el presente", score: 1 },
      { text: "No - no la/lo veo en mi futuro", score: 0 },
    ],
  },
  {
    id: 4,
    text: "¿Cómo te sientes cuando están separados?",
    options: [
      { text: "La/Lo extraño intensamente y cuento los minutos hasta que estemos juntos de nuevo", score: 4 },
      { text: "La/Lo extraño y espero con ansias verla/lo", score: 3 },
      { text: "Estoy bien pero feliz cuando nos reconectamos", score: 2 },
      { text: "Apenas lo noto - estoy ocupado con mi propia vida", score: 1 },
      { text: "Me siento aliviado o no pienso en ello", score: 0 },
    ],
  },
  {
    id: 5,
    text: "¿Estarías dispuesto a hacer sacrificios por ella/él?",
    options: [
      { text: "Sí, sacrificaría casi cualquier cosa por su bienestar", score: 4 },
      { text: "Sí, haría sacrificios razonables", score: 3 },
      { text: "Tal vez, dependiendo de qué sea", score: 2 },
      { text: "Probablemente no - me priorizo a mí mismo", score: 1 },
      { text: "No - no veo por qué debería", score: 0 },
    ],
  },
  {
    id: 6,
    text: "¿Cómo reaccionas cuando comparte buenas noticias?",
    options: [
      { text: "Estoy genuinamente emocionado y celebro con ella/él", score: 4 },
      { text: "Estoy feliz por ella/él y muestro apoyo", score: 3 },
      { text: "Estoy complacido pero no excesivamente emocionado", score: 2 },
      { text: "Lo reconozco pero no siento mucho", score: 1 },
      { text: "Me siento neutral o incluso celoso", score: 0 },
    ],
  },
  {
    id: 7,
    text: "¿Aceptas sus defectos e imperfecciones?",
    options: [
      { text: "Sí, sus defectos la/lo hacen más entrañable para mí", score: 4 },
      { text: "Sí, la/lo acepto como es", score: 3 },
      { text: "La mayoría, pero algunos me molestan", score: 2 },
      { text: "Algunos defectos son difíciles de aceptar", score: 1 },
      { text: "No, sus defectos me frustran significativamente", score: 0 },
    ],
  },
  {
    id: 8,
    text: "¿Qué tan físicamente atraído estás hacia ella/él?",
    options: [
      { text: "Extremadamente - es la persona más atractiva para mí", score: 4 },
      { text: "Muy atraído - me encanta estar físicamente cerca", score: 3 },
      { text: "Moderadamente atraído", score: 2 },
      { text: "Ligeramente atraído o varía", score: 1 },
      { text: "No realmente atraído físicamente", score: 0 },
    ],
  },
  {
    id: 9,
    text: "¿Quieres compartir tus pensamientos y sentimientos más profundos con ella/él?",
    options: [
      { text: "Sí, es la primera persona a quien quiero contarle todo", score: 4 },
      { text: "Sí, me siento cómodo abriéndome a ella/él", score: 3 },
      { text: "A veces, pero soy selectivo sobre lo que comparto", score: 2 },
      { text: "Raramente - prefiero mantener las cosas privadas", score: 1 },
      { text: "No - no siento esa conexión", score: 0 },
    ],
  },
  {
    id: 10,
    text: "¿Qué tan celoso te sientes cuando pasa tiempo con otros?",
    options: [
      { text: "Bastante celoso - desearía poder estar con ella/él siempre", score: 4 },
      { text: "Un poco celoso pero confío en ella/él", score: 3 },
      { text: "Celos mínimos - todos necesitan su propio tiempo", score: 2 },
      { text: "No celoso en absoluto", score: 1 },
      { text: "No me importa con quién pase tiempo", score: 0 },
    ],
  },
  {
    id: 11,
    text: "¿Priorizas sus necesidades sobre las tuyas?",
    options: [
      { text: "A menudo - sus necesidades se sienten tan importantes como las mías", score: 4 },
      { text: "A veces - trato de equilibrar ambas necesidades", score: 3 },
      { text: "Ocasionalmente, pero me priorizo a mí mismo principalmente", score: 2 },
      { text: "Raramente - me concentro en mis propias necesidades primero", score: 1 },
      { text: "Nunca - siempre me pongo a mí mismo primero", score: 0 },
    ],
  },
  {
    id: 12,
    text: "¿Cómo te sientes acerca de la intimidad física con ella/él?",
    options: [
      { text: "La anhelo y se siente profundamente significativa", score: 4 },
      { text: "La disfruto y fortalece nuestro vínculo", score: 3 },
      { text: "Es agradable pero no esencial", score: 2 },
      { text: "Soy indiferente o inseguro al respecto", score: 1 },
      { text: "No deseo intimidad física con ella/él", score: 0 },
    ],
  },
  {
    id: 13,
    text: "¿Puedes ser tu yo auténtico cerca de ella/él?",
    options: [
      { text: "Completamente - nunca me he sentido más yo mismo con nadie", score: 4 },
      { text: "Sí - me siento cómodo siendo real con ella/él", score: 3 },
      { text: "Mayormente, pero oculto algunas partes de mí", score: 2 },
      { text: "No realmente - siento que tengo que fingir", score: 1 },
      { text: "No - no puedo ser yo mismo cerca de ella/él", score: 0 },
    ],
  },
  {
    id: 14,
    text: "¿Cómo te hace sentir pasar tiempo con ella/él?",
    options: [
      { text: "Energizado, vivo y completamente realizado", score: 4 },
      { text: "Feliz y contento - el tiempo pasa volando", score: 3 },
      { text: "Agradable y placentero", score: 2 },
      { text: "Está bien, nada especial", score: 1 },
      { text: "Agotador o incómodo", score: 0 },
    ],
  },
  {
    id: 15,
    text: "Si ya no estuviera en tu vida, ¿cómo te sentirías?",
    options: [
      { text: "Devastado - no puedo imaginar la vida sin ella/él", score: 4 },
      { text: "Muy triste y profundamente afectado", score: 3 },
      { text: "Triste pero eventualmente seguiría adelante", score: 2 },
      { text: "Un poco triste pero no dramáticamente afectado", score: 1 },
      { text: "No particularmente afectado", score: 0 },
    ],
  },
]

export const loveQuizResults: Record<string, LoveQuizResult> = {
  deeply_in_love: {
    level: "deeply_in_love",
    title: "💕 Profundamente enamorado/a",
    description: "Todas las señales apuntan a que sí - ¡estás genuinamente enamorado/a! Tus sentimientos muestran una fuerte conexión emocional, un profundo cuidado por su bienestar y un deseo de un futuro compartido. Experimentas los signos clásicos de estar enamorado: mariposas, pensamientos constantes sobre ella/él y sentirte más tú mismo cuando están juntos.",
    advice: [
      "Comunica abiertamente tus sentimientos cuando ambos estén listos",
      "Continúa nutriendo la intimidad emocional que han construido",
      "No te pierdas a ti mismo - mantén tu identidad e intereses individuales",
      "Construye confianza a través de la consistencia y honestidad",
      "Disfruta este tiempo especial pero deja que la relación se desarrolle naturalmente",
    ],
    color: "from-rose-500 to-pink-600",
  },
  strongly_attracted: {
    level: "strongly_attracted",
    title: "💗 Fuertemente atraído/a y conectado/a",
    description: "Tienes fuertes sentimientos que definitivamente podrían ser amor o están desarrollándose en amor. Te importa profundamente esta persona, disfrutas su compañía y puedes ver un futuro potencial juntos. Ya sea amor en etapa temprana o dirigiéndose en esa dirección, tu conexión es significativa.",
    advice: [
      "Date tiempo - el amor a menudo se desarrolla gradualmente",
      "Enfócate en construir una intimidad emocional más profunda",
      "Comparte tu yo auténtico y anímala/lo a hacer lo mismo",
      "Observa cómo te trata y te hace sentir consistentemente",
      "Confía en tus instintos mientras tus sentimientos continúan desarrollándose",
    ],
    color: "from-pink-500 to-rose-500",
  },
  developing_feelings: {
    level: "developing_feelings",
    title: "💓 Sentimientos en desarrollo",
    description: "Estás experimentando sentimientos genuinos que están creciendo. Disfrutas la compañía de esta persona y te importa, aunque aún podrías estar descubriendo exactamente lo que sientes. Esto podría ser el comienzo del amor, o podría desarrollarse en una fuerte amistad.",
    advice: [
      "Tómate tu tiempo para entender tus sentimientos - no hay prisa",
      "Pasa más tiempo de calidad juntos para profundizar tu conexión",
      "Presta atención a cómo te sientes cuando están juntos vs separados",
      "Considera lo que valoras en una relación romántica",
      "Mantente abierto a donde sea que esta conexión te lleve",
    ],
    color: "from-purple-500 to-pink-500",
  },
  uncertain: {
    level: "uncertain",
    title: "💭 Sentimientos inciertos",
    description: "Tus sentimientos son inciertos ahora mismo, lo cual es completamente normal. Podrías estar experimentando algo de atracción o cariño, pero no está claro si es amor romántico, amistad u otra cosa. A veces necesitamos tiempo y claridad para entender nuestras emociones.",
    advice: [
      "Date espacio para explorar lo que realmente sientes",
      "Reflexiona sobre lo que quieres de esta relación",
      "Considera si hay barreras que previenen sentimientos más profundos",
      "Está bien no forzar sentimientos que no están ahí",
      "Enfócate en construir una conexión genuina sin presión",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  not_in_love: {
    level: "not_in_love",
    title: "🤍 No enamorado/a",
    description: "Basándose en tus respuestas, no pareces estar enamorado/a de esta persona en este momento. Esto no significa que algo esté mal - podrías valorarla/lo como amigo/a, o tal vez no sientes una conexión romántica. Es importante ser honesto contigo mismo sobre tus sentimientos.",
    advice: [
      "Honra tus sentimientos auténticos - está bien no estar enamorado/a",
      "Si estás en una relación, considera si es satisfactoria para ambos",
      "No te presiones para sentir algo que no sientes",
      "Reflexiona sobre lo que realmente quieres en una pareja romántica",
      "Ser honesto contigo mismo y con otros es el enfoque más amable",
    ],
    color: "from-gray-500 to-slate-500",
  },
}

export function calculateLoveQuizResult(totalScore: number, maxScore: number): string {
  const percentage = (totalScore / maxScore) * 100

  if (percentage >= 80) {
    return "deeply_in_love"
  } else if (percentage >= 60) {
    return "strongly_attracted"
  } else if (percentage >= 40) {
    return "developing_feelings"
  } else if (percentage >= 20) {
    return "uncertain"
  } else {
    return "not_in_love"
  }
}
