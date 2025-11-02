export interface Question {
  id: number
  text: string
  options: {
    text: string
    language: string
  }[]
}

export interface QuizResult {
  language: string
  score: number
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Me siento más amado/a cuando mi pareja...",
    options: [
      { text: "Me dice que me ama y me aprecia", language: "Palabras de afirmación" },
      { text: "Pasa tiempo de calidad conmigo sin distracciones", language: "Tiempo de calidad" },
      { text: "Me da regalos pensados", language: "Recibir regalos" },
      { text: "Hace cosas para ayudarme", language: "Actos de servicio" },
      { text: "Me toma de la mano o me abraza", language: "Toque físico" },
    ],
  },
  {
    id: 2,
    text: "Lo que más me duele es cuando mi pareja...",
    options: [
      { text: "Me critica o no reconoce mis esfuerzos", language: "Palabras de afirmación" },
      { text: "Está distraído/a o no me da toda su atención", language: "Tiempo de calidad" },
      { text: "Olvida ocasiones especiales o no me trae regalos", language: "Recibir regalos" },
      { text: "No me ayuda cuando lo necesito", language: "Actos de servicio" },
      { text: "Está físicamente distante o no muestra afecto", language: "Toque físico" },
    ],
  },
  {
    id: 3,
    text: "Muestro amor a otros...",
    options: [
      { text: "Diciéndoles cuánto significan para mí", language: "Palabras de afirmación" },
      { text: "Pasando tiempo de calidad juntos", language: "Tiempo de calidad" },
      { text: "Dándoles regalos significativos", language: "Recibir regalos" },
      { text: "Haciendo cosas útiles por ellos", language: "Actos de servicio" },
      { text: "Dando abrazos, besos y afecto físico", language: "Toque físico" },
    ],
  },
  {
    id: 4,
    text: "Lo que más me hace sentir apreciado/a es...",
    options: [
      { text: "Recibir cumplidos y palabras de aliento", language: "Palabras de afirmación" },
      { text: "Tener tiempo ininterrumpido juntos", language: "Tiempo de calidad" },
      { text: "Recibir un regalo sorpresa o símbolo de amor", language: "Recibir regalos" },
      { text: "Cuando alguien hace una tarea para aligerar mi carga", language: "Actos de servicio" },
      { text: "Un abrazo cálido o tomarnos de la mano", language: "Toque físico" },
    ],
  },
  {
    id: 5,
    text: "Si pudiera elegir, preferiría que mi pareja...",
    options: [
      { text: "Diga 'Te amo' y exprese sus sentimientos a menudo", language: "Palabras de afirmación" },
      { text: "Planee una cita especial solo para nosotros dos", language: "Tiempo de calidad" },
      { text: "Me sorprenda con un regalo pensado", language: "Recibir regalos" },
      { text: "Me ayude con las tareas del hogar", language: "Actos de servicio" },
      { text: "Se acurruque conmigo en el sofá", language: "Toque físico" },
    ],
  },
  {
    id: 6,
    text: "Me siento desconectado/a de mi pareja cuando...",
    options: [
      { text: "No expresa verbalmente su amor", language: "Palabras de afirmación" },
      { text: "No pasamos suficiente tiempo de calidad juntos", language: "Tiempo de calidad" },
      { text: "Olvida fechas importantes o no da regalos", language: "Recibir regalos" },
      { text: "No me ayuda cuando estoy abrumado/a", language: "Actos de servicio" },
      { text: "No hay suficiente afecto físico", language: "Toque físico" },
    ],
  },
  {
    id: 7,
    text: "El mejor regalo que alguien podría darme es...",
    options: [
      { text: "Una carta sincera expresando sus sentimientos", language: "Palabras de afirmación" },
      { text: "Su atención ininterrumpida durante una tarde", language: "Tiempo de calidad" },
      { text: "Algo que he estado queriendo por un tiempo", language: "Recibir regalos" },
      { text: "Ayuda con un proyecto en el que estoy trabajando", language: "Actos de servicio" },
      { text: "Un abrazo largo y cálido", language: "Toque físico" },
    ],
  },
  {
    id: 8,
    text: "Sé que mi pareja me ama cuando...",
    options: [
      { text: "Me dice que soy importante para él/ella", language: "Palabras de afirmación" },
      { text: "Hace tiempo para actividades que ambos disfrutamos", language: "Tiempo de calidad" },
      { text: "Recuerda lo que me gusta y me sorprende con eso", language: "Recibir regalos" },
      { text: "Hace cosas para hacer mi vida más fácil", language: "Actos de servicio" },
      { text: "Se acerca a tocarme durante todo el día", language: "Toque físico" },
    ],
  },
  {
    id: 9,
    text: "Mi tarde ideal con mi pareja sería...",
    options: [
      { text: "Tener una conversación profunda donde compartimos nuestros pensamientos", language: "Palabras de afirmación" },
      { text: "Hacer algo divertido juntos sin interrupciones", language: "Tiempo de calidad" },
      { text: "Intercambiar pequeños regalos pensados", language: "Recibir regalos" },
      { text: "Trabajar juntos en un proyecto del hogar", language: "Actos de servicio" },
      { text: "Acurrucarnos mientras vemos una película", language: "Toque físico" },
    ],
  },
  {
    id: 10,
    text: "Lo que más valoro en una relación es...",
    options: [
      { text: "Comunicación abierta y apreciación verbal", language: "Palabras de afirmación" },
      { text: "Tiempo de calidad y atención ininterrumpida", language: "Tiempo de calidad" },
      { text: "Consideración mostrada a través de regalos", language: "Recibir regalos" },
      { text: "Acciones que muestran cuidado y apoyo", language: "Actos de servicio" },
      { text: "Cercanía física y afecto", language: "Toque físico" },
    ],
  },
]

export const loveLanguageDescriptions: Record<string, { title: string; description: string; tips: string[] }> = {
  "Palabras de afirmación": {
    title: "Palabras de afirmación",
    description: "Te sientes más amado/a cuando tu pareja expresa sus sentimientos verbalmente. Los cumplidos, palabras de aprecio y aliento verbal significan el mundo para ti. Prosperas al escuchar 'Te amo' y otras palabras afirmativas.",
    tips: [
      "Expresa tus sentimientos regularmente con palabras",
      "Escribe notas de amor o envía mensajes dulces",
      "Da cumplidos genuinos a menudo",
      "Reconoce verbalmente los esfuerzos de tu pareja",
      "Di 'Te amo' frecuentemente y con significado",
    ],
  },
  "Tiempo de calidad": {
    title: "Tiempo de calidad",
    description: "Te sientes más amado/a cuando tu pareja te da su atención ininterrumpida. Estar juntos, compartir experiencias y tener conversaciones significativas es lo que más importa para ti. Las distracciones durante tu tiempo juntos pueden sentirse hirientes.",
    tips: [
      "Guarda teléfonos y dispositivos durante las conversaciones",
      "Planea citas regulares o actividades juntos",
      "Da paseos y habla sobre tu día",
      "Mantén contacto visual durante las conversaciones",
      "Crea tradiciones y rituales que puedan compartir",
    ],
  },
  "Recibir regalos": {
    title: "Recibir regalos",
    description: "Te sientes más amado/a cuando tu pareja te da regalos pensados. No se trata de materialismo, se trata del pensamiento, esfuerzo y simbolismo detrás del regalo. Estos símbolos tangibles de amor son profundamente significativos para ti.",
    tips: [
      "Recuerda fechas y ocasiones importantes",
      "Da regalos pensados que muestren que estabas escuchando",
      "El regalo no necesita ser caro, es el pensamiento lo que cuenta",
      "Guarda pequeños símbolos o recuerdos de tu relación",
      "Sorprende a tu pareja con regalos inesperados",
    ],
  },
  "Actos de servicio": {
    title: "Actos de servicio",
    description: "Te sientes más amado/a cuando tu pareja hace cosas útiles por ti. Las acciones hablan más que las palabras: cocinar una comida, hacer un mandado o ayudar con tareas te muestra que eres cuidado/a y apoyado/a.",
    tips: [
      "Ayuda con las tareas del hogar sin que te lo pidan",
      "Haz mandados o tareas para aligerar su carga",
      "Arregla algo que estaba roto",
      "Prepara su comida favorita",
      "Hazte cargo de responsabilidades cuando están cansados o ocupados",
    ],
  },
  "Toque físico": {
    title: "Toque físico",
    description: "Te sientes más amado/a a través del afecto físico y la cercanía. Abrazos, besos, tomarse de la mano y otras formas de toque físico te hacen sentir conectado/a y amado/a. La distancia física o la falta de afecto puede sentirse como distancia emocional.",
    tips: [
      "Tómense de la mano al caminar juntos",
      "Den abrazos y besos regularmente",
      "Siéntense cerca el uno del otro",
      "Ofrece masajes en la espalda o masajes",
      "La presencia física durante momentos difíciles es especialmente importante",
    ],
  },
}
