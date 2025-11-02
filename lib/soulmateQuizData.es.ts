export interface SoulmateQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
    weight: number;
  }[];
  category: 'communication' | 'values' | 'lifestyle' | 'emotional' | 'future';
}

export interface SoulmateResult {
  type: string;
  title: string;
  description: string;
  compatibility: {
    communication: number;
    emotional: number;
    lifestyle: number;
    values: number;
    future: number;
  };
  characteristics: string[];
  tips: string[];
  idealPartner: string[];
}

export interface QuizResponse {
  questionId: number;
  selectedOption: string;
  weight: number;
  category: string;
}

export const soulmateQuestions: SoulmateQuestion[] = [
  {
    id: 1,
    question: "En cuanto a la comunicación en una relación, prefiero...",
    category: "communication",
    options: [
      { text: "Conversaciones profundas y significativas sobre la vida y los sueños", value: "deep", weight: 4 },
      { text: "Bromas ligeras e intercambios juguetones", value: "playful", weight: 3 },
      { text: "Discusiones prácticas sobre la vida diaria y planes", value: "practical", weight: 2 },
      { text: "Silencio cómodo y comprensión no verbal", value: "quiet", weight: 1 },
    ],
  },
  {
    id: 2,
    question: "Mi pareja ideal compartiría mis valores sobre...",
    category: "values",
    options: [
      { text: "La familia, la tradición y construir una base estable juntos", value: "traditional", weight: 4 },
      { text: "El crecimiento personal, la aventura y explorar nuevas experiencias", value: "growth", weight: 3 },
      { text: "Las ambiciones profesionales y lograr el éxito juntos", value: "ambitious", weight: 2 },
      { text: "La creatividad, el arte y expresarnos auténticamente", value: "creative", weight: 1 },
    ],
  },
  {
    id: 3,
    question: "Cuando imagino mi fin de semana perfecto con mi alma gemela, estaríamos...",
    category: "lifestyle",
    options: [
      { text: "Explorando una nueva ciudad o viviendo una aventura al aire libre", value: "adventurous", weight: 4 },
      { text: "Recibiendo amigos para cenar o asistiendo a eventos sociales", value: "social", weight: 3 },
      { text: "Relajándonos en casa, cocinando juntos y disfrutando de tiempo tranquilo", value: "homebody", weight: 2 },
      { text: "Persiguiendo nuestros hobbies individuales mientras estamos en el mismo espacio", value: "independent", weight: 1 },
    ],
  },
  {
    id: 4,
    question: "Emocionalmente, necesito una pareja que...",
    category: "emotional",
    options: [
      { text: "Sea profundamente empático/a y pueda conectar con mis sentimientos", value: "empathetic", weight: 4 },
      { text: "Aporte optimismo y alegría a cada situación", value: "optimistic", weight: 3 },
      { text: "Sea estable, confiable y emocionalmente equilibrado/a", value: "stable", weight: 2 },
      { text: "Me dé espacio para procesar emociones de forma independiente", value: "independent", weight: 1 },
    ],
  },
  {
    id: 5,
    question: "Al enfrentar desafíos juntos, quiero que...",
    category: "communication",
    options: [
      { text: "Hablemos de todo abiertamente y trabajemos como equipo", value: "collaborative", weight: 4 },
      { text: "Nos apoyemos mutuamente mientras manejamos nuestras propias responsabilidades", value: "supportive", weight: 3 },
      { text: "Tomemos medidas prácticas y nos enfoquemos en soluciones", value: "solution-focused", weight: 2 },
      { text: "Nos demos espacio y nos reunamos cuando estemos listos", value: "space-giving", weight: 1 },
    ],
  },
  {
    id: 6,
    question: "En términos de planificación futura, mi relación ideal implica...",
    category: "future",
    options: [
      { text: "Planes detallados y objetivos compartidos hacia los que trabajamos juntos", value: "planned", weight: 4 },
      { text: "Una dirección general con flexibilidad para cambios espontáneos", value: "flexible", weight: 3 },
      { text: "Objetivos individuales que se complementan entre sí", value: "complementary", weight: 2 },
      { text: "Vivir en el presente y dejar que el futuro se desarrolle naturalmente", value: "present-focused", weight: 1 },
    ],
  },
  {
    id: 7,
    question: "La forma en que muestro amor y afecto es principalmente a través de...",
    category: "emotional",
    options: [
      { text: "Contacto físico, abrazos y estar cerca de mi pareja", value: "physical", weight: 4 },
      { text: "Palabras de afirmación y expresiones verbales de amor", value: "verbal", weight: 3 },
      { text: "Actos de servicio y hacer cosas consideradas", value: "service", weight: 2 },
      { text: "Tiempo de calidad y experiencias compartidas", value: "time", weight: 1 },
    ],
  },
  {
    id: 8,
    question: "Mi enfoque para la resolución de conflictos es...",
    category: "communication",
    options: [
      { text: "Abordar los problemas inmediatamente y resolverlos juntos", value: "direct", weight: 4 },
      { text: "Tomarme tiempo para calmarme, luego discutir con calma", value: "thoughtful", weight: 3 },
      { text: "Enfocarme en encontrar compromisos y puntos medios", value: "diplomatic", weight: 2 },
      { text: "Evitar el conflicto cuando sea posible y enfocarme en lo positivo", value: "harmonious", weight: 1 },
    ],
  },
  {
    id: 9,
    question: "En cuanto al espacio personal y la independencia, creo que...",
    category: "lifestyle",
    options: [
      { text: "Deberíamos hacer la mayoría de las cosas juntos y compartir todo", value: "together", weight: 4 },
      { text: "Deberíamos equilibrar el tiempo en pareja con intereses individuales", value: "balanced", weight: 3 },
      { text: "Deberíamos mantener grupos de amigos y hobbies separados", value: "separate", weight: 2 },
      { text: "Deberíamos ser personas independientes que eligen estar juntas", value: "independent", weight: 1 },
    ],
  },
  {
    id: 10,
    question: "La cualidad más importante que busco en una pareja de vida es...",
    category: "values",
    options: [
      { text: "Amor incondicional y conexión emocional", value: "loving", weight: 4 },
      { text: "Lealtad, compromiso y confiabilidad", value: "loyal", weight: 3 },
      { text: "Inteligencia, ambición y objetivos compartidos", value: "ambitious", weight: 2 },
      { text: "Humor, diversión y la capacidad de disfrutar la vida juntos", value: "fun", weight: 1 },
    ],
  },
];

export const CATEGORY_WEIGHTS = {
  communication: 0.25,
  emotional: 0.25,
  lifestyle: 0.20,
  values: 0.20,
  future: 0.10
};

export const SOULMATE_TYPES: Record<string, SoulmateResult> = {
  'romantic-idealist': {
    type: 'romantic-idealist',
    title: 'El Idealista Romántico',
    description: 'Buscas una conexión emocional profunda y sueños compartidos. Crees en las almas gemelas y buscas ese amor único que se siente mágico y transformador.',
    compatibility: {
      communication: 85,
      emotional: 90,
      lifestyle: 70,
      values: 80,
      future: 75
    },
    characteristics: [
      'Valora la intimidad emocional profunda',
      'Cree en el destino y las conexiones de almas gemelas',
      'Busca conversaciones significativas y sueños compartidos',
      'Aprecia los gestos románticos y las expresiones de amor',
      'Quiere una pareja que lo/la comprenda completamente'
    ],
    tips: [
      'Busca a alguien que comparta tu profundidad emocional',
      'No te conformes con conexiones superficiales',
      'Expresa tu naturaleza romántica abiertamente',
      'Encuentra a alguien que aprecie tu visión idealista del amor',
      'Equilibra los sueños con la construcción práctica de la relación'
    ],
    idealPartner: [
      'Emocionalmente inteligente y expresivo/a',
      'Comparte tu visión romántica del mundo',
      'Valora la conversación profunda y la conexión',
      'Aprecia la poesía, el arte o las experiencias significativas',
      'Cree en el poder del amor para transformar vidas'
    ]
  },
  'practical-partner': {
    type: 'practical-partner',
    title: 'La Pareja Práctica',
    description: 'Valoras la estabilidad, la compatibilidad y los objetivos compartidos. Crees que las mejores relaciones se construyen sobre bases sólidas de confianza, respeto y compatibilidad práctica.',
    compatibility: {
      communication: 75,
      emotional: 70,
      lifestyle: 85,
      values: 90,
      future: 85
    },
    characteristics: [
      'Valora la estabilidad y la planificación a largo plazo',
      'Busca compatibilidad en estilo de vida y valores',
      'Aprecia la confiabilidad y la consistencia',
      'Se enfoca en construir una base sólida juntos',
      'Cree que las acciones hablan más que las palabras'
    ],
    tips: [
      'Busca a alguien con objetivos de vida similares',
      'Valora la consistencia y la confiabilidad en una pareja',
      'Construye tu relación sobre valores compartidos',
      'Aprecia las expresiones prácticas de amor',
      'Planifica vuestro futuro juntos paso a paso'
    ],
    idealPartner: [
      'Confiable y consistente en sus acciones',
      'Comparte tus valores y objetivos de vida',
      'Bueno/a en planificación práctica y organización',
      'Valora la estabilidad y el compromiso',
      'Muestra amor a través de acciones útiles'
    ]
  },
  'adventurous-soul': {
    type: 'adventurous-soul',
    title: 'El Alma Aventurera',
    description: 'Deseas emoción, crecimiento y experiencias compartidas. Quieres una pareja que explore el mundo contigo y abrace juntos las aventuras de la vida.',
    compatibility: {
      communication: 80,
      emotional: 75,
      lifestyle: 90,
      values: 70,
      future: 70
    },
    characteristics: [
      'Ama las nuevas experiencias y aventuras',
      'Valora el crecimiento personal y la exploración',
      'Busca una pareja que comparta su entusiasmo por la vida',
      'Aprecia la espontaneidad y la flexibilidad',
      'Quiere crear recuerdos emocionantes juntos'
    ],
    tips: [
      'Encuentra a alguien que comparta tu amor por la aventura',
      'Busca una pareja que abrace el cambio',
      'Valora las experiencias más que las posesiones materiales',
      'Busca a alguien que te desafíe a crecer',
      'Equilibra la aventura con la estabilidad relacional'
    ],
    idealPartner: [
      'Ama probar cosas nuevas y explorar',
      'Abraza el cambio y la espontaneidad',
      'Valora el crecimiento personal y el aprendizaje',
      'Tiene sus propias pasiones e intereses',
      'Ve la vida como una aventura para compartir'
    ]
  },
  'deep-connector': {
    type: 'deep-connector',
    title: 'El Conector Profundo',
    description: 'Priorizas la intimidad emocional y la comprensión. Quieres una pareja que realmente te vea y te comprenda, creando un vínculo emocional profundo.',
    compatibility: {
      communication: 90,
      emotional: 95,
      lifestyle: 65,
      values: 80,
      future: 70
    },
    characteristics: [
      'Valora la intimidad emocional por encima de todo',
      'Busca comprensión profunda y empatía',
      'Aprecia la vulnerabilidad y la autenticidad',
      'Quiere ser verdaderamente conocido/a por su pareja',
      'Cree en el poder de la conexión emocional'
    ],
    tips: [
      'Busca a alguien emocionalmente disponible',
      'Valora las conversaciones profundas y el compartir',
      'Busca una pareja que aprecie la vulnerabilidad',
      'Encuentra a alguien que quiera conocerte de verdad',
      'Construye intimidad a través de la apertura emocional'
    ],
    idealPartner: [
      'Emocionalmente inteligente y empático/a',
      'Cómodo/a con la vulnerabilidad y la profundidad',
      'Valora la comunicación auténtica',
      'Busca comprender en lugar de juzgar',
      'Crea un espacio seguro para la expresión emocional'
    ]
  },
  'balanced-seeker': {
    type: 'balanced-seeker',
    title: 'El Buscador Equilibrado',
    description: 'Buscas armonía en todas las dimensiones de la relación. Quieres una asociación bien equilibrada que balancee la conexión emocional, la compatibilidad práctica y el crecimiento compartido.',
    compatibility: {
      communication: 80,
      emotional: 80,
      lifestyle: 80,
      values: 80,
      future: 80
    },
    characteristics: [
      'Valora el equilibrio en todos los aspectos de la relación',
      'Busca armonía entre diferentes necesidades',
      'Aprecia tanto la conexión emocional como la práctica',
      'Quiere una asociación bien equilibrada',
      'Cree en crecer juntos mientras mantiene la individualidad'
    ],
    tips: [
      'Busca a alguien que también valore el equilibrio',
      'Busca compatibilidad en múltiples dimensiones',
      'Aprecia tanto las cualidades emocionales como prácticas',
      'Encuentra a alguien que complemente tus fortalezas',
      'Construye una relación que nutra todos los aspectos de la vida'
    ],
    idealPartner: [
      'Equilibrado/a y emocionalmente maduro/a',
      'Equilibra bien diferentes aspectos de la vida',
      'Valora tanto la conexión como la independencia',
      'Busca armonía en las relaciones',
      'Comprometido/a con el crecimiento y comprensión mutuos'
    ]
  }
};

export function calculateSoulmateResult(responses: QuizResponse[]): SoulmateResult {
  const categoryTotals: Record<string, number> = {
    communication: 0,
    emotional: 0,
    lifestyle: 0,
    values: 0,
    future: 0
  };

  const categoryCounts: Record<string, number> = {
    communication: 0,
    emotional: 0,
    lifestyle: 0,
    values: 0,
    future: 0
  };

  responses.forEach(response => {
    categoryTotals[response.category] += response.weight;
    categoryCounts[response.category]++;
  });

  const categoryScores: Record<string, number> = {};
  Object.keys(categoryTotals).forEach(category => {
    const average = categoryTotals[category] / categoryCounts[category];
    categoryScores[category] = Math.round((average / 4) * 100);
  });

  const sortedCategories = Object.entries(categoryScores)
    .sort(([,a], [,b]) => b - a);

  const topCategory = sortedCategories[0][0];
  const topScore = sortedCategories[0][1];

  let soulmateType: string;

  if (categoryScores.emotional >= 85 && categoryScores.communication >= 80) {
    soulmateType = 'deep-connector';
  } else if (categoryScores.emotional >= 80 && categoryScores.values >= 75) {
    soulmateType = 'romantic-idealist';
  } else if (categoryScores.lifestyle >= 80 && categoryScores.values >= 80) {
    soulmateType = 'practical-partner';
  } else if (categoryScores.lifestyle >= 85 && categoryScores.communication >= 75) {
    soulmateType = 'adventurous-soul';
  } else {
    soulmateType = 'balanced-seeker';
  }

  const result = { ...SOULMATE_TYPES[soulmateType] };
  result.compatibility = {
    communication: categoryScores.communication,
    emotional: categoryScores.emotional,
    lifestyle: categoryScores.lifestyle,
    values: categoryScores.values,
    future: categoryScores.future
  };

  return result;
}
