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
    question: "Was die Kommunikation in einer Beziehung betrifft, bevorzuge ich...",
    category: "communication",
    options: [
      { text: "Tiefe, bedeutungsvolle Gespräche über das Leben und Träume", value: "deep", weight: 4 },
      { text: "Unbeschwerte Neckereien und spielerische Unterhaltungen", value: "playful", weight: 3 },
      { text: "Praktische Diskussionen über den Alltag und Pläne", value: "practical", weight: 2 },
      { text: "Bequeme Stille und nonverbales Verständnis", value: "quiet", weight: 1 },
    ],
  },
  {
    id: 2,
    question: "Mein idealer Partner würde meine Werte teilen über...",
    category: "values",
    options: [
      { text: "Familie, Tradition und den Aufbau einer stabilen Grundlage zusammen", value: "traditional", weight: 4 },
      { text: "Persönliches Wachstum, Abenteuer und die Erkundung neuer Erfahrungen", value: "growth", weight: 3 },
      { text: "Karriereambitionen und gemeinsames Erreichen von Erfolg", value: "ambitious", weight: 2 },
      { text: "Kreativität, Kunst und authentischen Selbstausdruck", value: "creative", weight: 1 },
    ],
  },
  {
    id: 3,
    question: "Wenn ich mir mein perfektes Wochenende mit meinem Seelenverwandten vorstelle, würden wir...",
    category: "lifestyle",
    options: [
      { text: "Eine neue Stadt erkunden oder ein Outdoor-Abenteuer erleben", value: "adventurous", weight: 4 },
      { text: "Freunde zum Abendessen einladen oder gesellschaftliche Veranstaltungen besuchen", value: "social", weight: 3 },
      { text: "Zu Hause entspannen, zusammen kochen und ruhige Zeit genießen", value: "homebody", weight: 2 },
      { text: "Unseren individuellen Hobbys nachgehen, während wir im selben Raum sind", value: "independent", weight: 1 },
    ],
  },
  {
    id: 4,
    question: "Emotional brauche ich einen Partner, der...",
    category: "emotional",
    options: [
      { text: "Zutiefst empathisch ist und sich mit meinen Gefühlen verbinden kann", value: "empathetic", weight: 4 },
      { text: "Optimismus und Freude in jede Situation bringt", value: "optimistic", weight: 3 },
      { text: "Beständig, zuverlässig und emotional stabil ist", value: "stable", weight: 2 },
      { text: "Mir Raum gibt, Emotionen unabhängig zu verarbeiten", value: "independent", weight: 1 },
    ],
  },
  {
    id: 5,
    question: "Wenn wir gemeinsam Herausforderungen begegnen, möchte ich, dass wir...",
    category: "communication",
    options: [
      { text: "Alles offen besprechen und als Team arbeiten", value: "collaborative", weight: 4 },
      { text: "Uns gegenseitig unterstützen, während wir unsere eigenen Verantwortlichkeiten handhaben", value: "supportive", weight: 3 },
      { text: "Praktische Schritte unternehmen und uns auf Lösungen konzentrieren", value: "solution-focused", weight: 2 },
      { text: "Uns gegenseitig Raum geben und uns treffen, wenn wir bereit sind", value: "space-giving", weight: 1 },
    ],
  },
  {
    id: 6,
    question: "In Bezug auf Zukunftsplanung beinhaltet meine ideale Beziehung...",
    category: "future",
    options: [
      { text: "Detaillierte Pläne und gemeinsame Ziele, auf die wir zusammen hinarbeiten", value: "planned", weight: 4 },
      { text: "Eine allgemeine Richtung mit Flexibilität für spontane Änderungen", value: "flexible", weight: 3 },
      { text: "Individuelle Ziele, die sich gegenseitig ergänzen", value: "complementary", weight: 2 },
      { text: "In der Gegenwart leben und die Zukunft natürlich sich entfalten lassen", value: "present-focused", weight: 1 },
    ],
  },
  {
    id: 7,
    question: "Die Art und Weise, wie ich Liebe und Zuneigung zeige, ist hauptsächlich durch...",
    category: "emotional",
    options: [
      { text: "Körperliche Berührung, Umarmungen und Nähe zu meinem Partner", value: "physical", weight: 4 },
      { text: "Bestätigende Worte und verbale Liebeserklärungen", value: "verbal", weight: 3 },
      { text: "Dienste und aufmerksame Handlungen", value: "service", weight: 2 },
      { text: "Qualitätszeit und gemeinsame Erlebnisse", value: "time", weight: 1 },
    ],
  },
  {
    id: 8,
    question: "Mein Ansatz zur Konfliktlösung ist es...",
    category: "communication",
    options: [
      { text: "Probleme sofort anzusprechen und gemeinsam durchzuarbeiten", value: "direct", weight: 4 },
      { text: "Mir Zeit zum Abkühlen zu nehmen, dann ruhig zu diskutieren", value: "thoughtful", weight: 3 },
      { text: "Mich auf das Finden von Kompromissen und Mittelwegen zu konzentrieren", value: "diplomatic", weight: 2 },
      { text: "Konflikte wenn möglich zu vermeiden und mich auf Positives zu konzentrieren", value: "harmonious", weight: 1 },
    ],
  },
  {
    id: 9,
    question: "Was persönlichen Raum und Unabhängigkeit betrifft, glaube ich...",
    category: "lifestyle",
    options: [
      { text: "Wir sollten die meisten Dinge zusammen tun und alles teilen", value: "together", weight: 4 },
      { text: "Wir sollten Paarzeit mit individuellen Interessen ausbalancieren", value: "balanced", weight: 3 },
      { text: "Wir sollten getrennte Freundeskreise und Hobbys pflegen", value: "separate", weight: 2 },
      { text: "Wir sollten unabhängige Menschen sein, die sich entscheiden, zusammen zu sein", value: "independent", weight: 1 },
    ],
  },
  {
    id: 10,
    question: "Die wichtigste Eigenschaft, die ich bei einem Lebenspartner suche, ist...",
    category: "values",
    options: [
      { text: "Bedingungslose Liebe und emotionale Verbindung", value: "loving", weight: 4 },
      { text: "Loyalität, Engagement und Zuverlässigkeit", value: "loyal", weight: 3 },
      { text: "Intelligenz, Ehrgeiz und gemeinsame Ziele", value: "ambitious", weight: 2 },
      { text: "Humor, Spaß und die Fähigkeit, das Leben gemeinsam zu genießen", value: "fun", weight: 1 },
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
    title: 'Der romantische Idealist',
    description: 'Du suchst tiefe emotionale Verbindung und gemeinsame Träume. Du glaubst an Seelenverwandte und suchst nach dieser einmaligen Liebe, die sich magisch und transformierend anfühlt.',
    compatibility: {
      communication: 85,
      emotional: 90,
      lifestyle: 70,
      values: 80,
      future: 75
    },
    characteristics: [
      'Schätzt tiefe emotionale Intimität',
      'Glaubt an Schicksal und Seelenverwandte',
      'Sucht bedeutungsvolle Gespräche und gemeinsame Träume',
      'Schätzt romantische Gesten und Liebesbekundungen',
      'Möchte einen Partner, der sie/ihn vollständig versteht'
    ],
    tips: [
      'Suche jemanden, der deine emotionale Tiefe teilt',
      'Gib dich nicht mit oberflächlichen Verbindungen zufrieden',
      'Drücke deine romantische Natur offen aus',
      'Finde jemanden, der deine idealistische Sicht auf die Liebe schätzt',
      'Balanciere Träume mit praktischem Beziehungsaufbau'
    ],
    idealPartner: [
      'Emotional intelligent und ausdrucksstark',
      'Teilt deine romantische Weltanschauung',
      'Schätzt tiefe Gespräche und Verbindung',
      'Schätzt Poesie, Kunst oder bedeutungsvolle Erfahrungen',
      'Glaubt an die Kraft der Liebe, Leben zu transformieren'
    ]
  },
  'practical-partner': {
    type: 'practical-partner',
    title: 'Der praktische Partner',
    description: 'Du schätzt Stabilität, Kompatibilität und gemeinsame Ziele. Du glaubst, dass die besten Beziehungen auf soliden Fundamenten von Vertrauen, Respekt und praktischer Kompatibilität aufgebaut sind.',
    compatibility: {
      communication: 75,
      emotional: 70,
      lifestyle: 85,
      values: 90,
      future: 85
    },
    characteristics: [
      'Schätzt Stabilität und langfristige Planung',
      'Sucht Kompatibilität in Lebensstil und Werten',
      'Schätzt Zuverlässigkeit und Beständigkeit',
      'Konzentriert sich darauf, gemeinsam ein solides Fundament aufzubauen',
      'Glaubt, dass Taten mehr sagen als Worte'
    ],
    tips: [
      'Suche jemanden mit ähnlichen Lebenszielen',
      'Schätze Beständigkeit und Zuverlässigkeit bei einem Partner',
      'Baue deine Beziehung auf gemeinsamen Werten auf',
      'Schätze praktische Liebesbekundungen',
      'Plant eure Zukunft Schritt für Schritt gemeinsam'
    ],
    idealPartner: [
      'Zuverlässig und beständig in ihren Handlungen',
      'Teilt deine Werte und Lebensziele',
      'Gut in praktischer Planung und Organisation',
      'Schätzt Stabilität und Engagement',
      'Zeigt Liebe durch hilfreiche Handlungen'
    ]
  },
  'adventurous-soul': {
    type: 'adventurous-soul',
    title: 'Die abenteuerlustige Seele',
    description: 'Du wünschst dir Aufregung, Wachstum und gemeinsame Erlebnisse. Du möchtest einen Partner, der mit dir die Welt erkundet und gemeinsam die Abenteuer des Lebens annimmt.',
    compatibility: {
      communication: 80,
      emotional: 75,
      lifestyle: 90,
      values: 70,
      future: 70
    },
    characteristics: [
      'Liebt neue Erfahrungen und Abenteuer',
      'Schätzt persönliches Wachstum und Erkundung',
      'Sucht einen Partner, der ihre/seine Lebensfreude teilt',
      'Schätzt Spontanität und Flexibilität',
      'Möchte aufregende Erinnerungen zusammen schaffen'
    ],
    tips: [
      'Finde jemanden, der deine Liebe zum Abenteuer teilt',
      'Suche einen Partner, der Veränderungen annimmt',
      'Schätze Erlebnisse mehr als materielle Besitztümer',
      'Suche jemanden, der dich herausfordert zu wachsen',
      'Balanciere Abenteuer mit Beziehungsstabilität'
    ],
    idealPartner: [
      'Liebt es, neue Dinge auszuprobieren und zu erkunden',
      'Nimmt Veränderung und Spontanität an',
      'Schätzt persönliches Wachstum und Lernen',
      'Hat eigene Leidenschaften und Interessen',
      'Sieht das Leben als ein zu teilendes Abenteuer'
    ]
  },
  'deep-connector': {
    type: 'deep-connector',
    title: 'Der tiefe Verbinder',
    description: 'Du priorisierst emotionale Intimität und Verständnis. Du möchtest einen Partner, der dich wirklich sieht und versteht und eine tiefgreifende emotionale Bindung schafft.',
    compatibility: {
      communication: 90,
      emotional: 95,
      lifestyle: 65,
      values: 80,
      future: 70
    },
    characteristics: [
      'Schätzt emotionale Intimität über alles',
      'Sucht tiefes Verständnis und Empathie',
      'Schätzt Verletzlichkeit und Authentizität',
      'Möchte von ihrem/seinem Partner wirklich gekannt werden',
      'Glaubt an die Kraft emotionaler Verbindung'
    ],
    tips: [
      'Suche jemanden, der emotional verfügbar ist',
      'Schätze tiefe Gespräche und das Teilen',
      'Suche einen Partner, der Verletzlichkeit schätzt',
      'Finde jemanden, der dich wirklich kennen möchte',
      'Baue Intimität durch emotionale Offenheit auf'
    ],
    idealPartner: [
      'Emotional intelligent und empathisch',
      'Komfortabel mit Verletzlichkeit und Tiefe',
      'Schätzt authentische Kommunikation',
      'Sucht zu verstehen statt zu urteilen',
      'Schafft einen sicheren Raum für emotionalen Ausdruck'
    ]
  },
  'balanced-seeker': {
    type: 'balanced-seeker',
    title: 'Der ausgeglichene Suchende',
    description: 'Du suchst Harmonie in allen Beziehungsdimensionen. Du möchtest eine ausgewogene Partnerschaft, die emotionale Verbindung, praktische Kompatibilität und gemeinsames Wachstum ausbalanciert.',
    compatibility: {
      communication: 80,
      emotional: 80,
      lifestyle: 80,
      values: 80,
      future: 80
    },
    characteristics: [
      'Schätzt Balance in allen Aspekten der Beziehung',
      'Sucht Harmonie zwischen verschiedenen Bedürfnissen',
      'Schätzt sowohl emotionale als auch praktische Verbindung',
      'Möchte eine ausgewogene Partnerschaft',
      'Glaubt daran, zusammen zu wachsen und gleichzeitig Individualität zu bewahren'
    ],
    tips: [
      'Suche jemanden, der auch Balance schätzt',
      'Suche Kompatibilität über mehrere Dimensionen',
      'Schätze sowohl emotionale als auch praktische Qualitäten',
      'Finde jemanden, der deine Stärken ergänzt',
      'Baue eine Beziehung auf, die alle Aspekte des Lebens nährt'
    ],
    idealPartner: [
      'Ausgeglichen und emotional reif',
      'Balanciert verschiedene Lebensaspekte gut',
      'Schätzt sowohl Verbindung als auch Unabhängigkeit',
      'Sucht Harmonie in Beziehungen',
      'Engagiert für gegenseitiges Wachstum und Verständnis'
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
