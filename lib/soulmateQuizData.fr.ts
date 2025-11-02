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
    question: "En ce qui concerne la communication dans une relation, je préfère...",
    category: "communication",
    options: [
      { text: "Des conversations profondes et significatives sur la vie et les rêves", value: "deep", weight: 4 },
      { text: "Des échanges légers et ludiques", value: "playful", weight: 3 },
      { text: "Des discussions pratiques sur la vie quotidienne et les projets", value: "practical", weight: 2 },
      { text: "Un silence confortable et une compréhension non verbale", value: "quiet", weight: 1 },
    ],
  },
  {
    id: 2,
    question: "Mon partenaire idéal partagerait mes valeurs concernant...",
    category: "values",
    options: [
      { text: "La famille, la tradition et la construction d'une base stable ensemble", value: "traditional", weight: 4 },
      { text: "La croissance personnelle, l'aventure et l'exploration de nouvelles expériences", value: "growth", weight: 3 },
      { text: "Les ambitions professionnelles et la réussite ensemble", value: "ambitious", weight: 2 },
      { text: "La créativité, l'art et l'expression authentique de soi", value: "creative", weight: 1 },
    ],
  },
  {
    id: 3,
    question: "Quand j'imagine mon week-end parfait avec mon âme sœur, nous serions...",
    category: "lifestyle",
    options: [
      { text: "En train d'explorer une nouvelle ville ou de vivre une aventure en plein air", value: "adventurous", weight: 4 },
      { text: "Recevant des amis pour dîner ou assistant à des événements sociaux", value: "social", weight: 3 },
      { text: "Relaxant à la maison, cuisinant ensemble et profitant d'un moment calme", value: "homebody", weight: 2 },
      { text: "Poursuivant nos loisirs individuels tout en étant dans le même espace", value: "independent", weight: 1 },
    ],
  },
  {
    id: 4,
    question: "Émotionnellement, j'ai besoin d'un partenaire qui...",
    category: "emotional",
    options: [
      { text: "Est profondément empathique et peut se connecter à mes sentiments", value: "empathetic", weight: 4 },
      { text: "Apporte de l'optimisme et de la joie à chaque situation", value: "optimistic", weight: 3 },
      { text: "Est stable, fiable et émotionnellement équilibré", value: "stable", weight: 2 },
      { text: "Me donne de l'espace pour traiter les émotions de manière indépendante", value: "independent", weight: 1 },
    ],
  },
  {
    id: 5,
    question: "Face aux défis ensemble, je veux que nous...",
    category: "communication",
    options: [
      { text: "Parlions de tout ouvertement et travaillions en équipe", value: "collaborative", weight: 4 },
      { text: "Nous soutenions mutuellement tout en gérant nos propres responsabilités", value: "supportive", weight: 3 },
      { text: "Prenions des mesures pratiques et nous concentrions sur les solutions", value: "solution-focused", weight: 2 },
      { text: "Nous donnions de l'espace et nous retrouvions quand nous sommes prêts", value: "space-giving", weight: 1 },
    ],
  },
  {
    id: 6,
    question: "En termes de planification d'avenir, ma relation idéale implique...",
    category: "future",
    options: [
      { text: "Des plans détaillés et des objectifs partagés vers lesquels nous travaillons ensemble", value: "planned", weight: 4 },
      { text: "Une direction générale avec flexibilité pour des changements spontanés", value: "flexible", weight: 3 },
      { text: "Des objectifs individuels qui se complètent", value: "complementary", weight: 2 },
      { text: "Vivre dans le présent et laisser l'avenir se dérouler naturellement", value: "present-focused", weight: 1 },
    ],
  },
  {
    id: 7,
    question: "La façon dont je montre l'amour et l'affection est principalement à travers...",
    category: "emotional",
    options: [
      { text: "Le contact physique, les câlins et la proximité avec mon partenaire", value: "physical", weight: 4 },
      { text: "Les mots d'affirmation et les expressions verbales d'amour", value: "verbal", weight: 3 },
      { text: "Les actes de service et les gestes attentionnés", value: "service", weight: 2 },
      { text: "Le temps de qualité et les expériences partagées", value: "time", weight: 1 },
    ],
  },
  {
    id: 8,
    question: "Mon approche de la résolution des conflits est de...",
    category: "communication",
    options: [
      { text: "Aborder les problèmes immédiatement et les résoudre ensemble", value: "direct", weight: 4 },
      { text: "Prendre le temps de me calmer, puis discuter calmement", value: "thoughtful", weight: 3 },
      { text: "Me concentrer sur la recherche de compromis et de terrain d'entente", value: "diplomatic", weight: 2 },
      { text: "Éviter le conflit quand c'est possible et me concentrer sur le positif", value: "harmonious", weight: 1 },
    ],
  },
  {
    id: 9,
    question: "En ce qui concerne l'espace personnel et l'indépendance, je crois...",
    category: "lifestyle",
    options: [
      { text: "Nous devrions faire la plupart des choses ensemble et tout partager", value: "together", weight: 4 },
      { text: "Nous devrions équilibrer le temps de couple avec les intérêts individuels", value: "balanced", weight: 3 },
      { text: "Nous devrions maintenir des groupes d'amis et des loisirs séparés", value: "separate", weight: 2 },
      { text: "Nous devrions être des personnes indépendantes qui choisissent d'être ensemble", value: "independent", weight: 1 },
    ],
  },
  {
    id: 10,
    question: "La qualité la plus importante que je recherche chez un partenaire de vie est...",
    category: "values",
    options: [
      { text: "L'amour inconditionnel et la connexion émotionnelle", value: "loving", weight: 4 },
      { text: "La loyauté, l'engagement et la fiabilité", value: "loyal", weight: 3 },
      { text: "L'intelligence, l'ambition et les objectifs partagés", value: "ambitious", weight: 2 },
      { text: "L'humour, le plaisir et la capacité de profiter de la vie ensemble", value: "fun", weight: 1 },
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
    title: "L'Idéaliste Romantique",
    description: "Vous recherchez une connexion émotionnelle profonde et des rêves partagés. Vous croyez aux âmes sœurs et recherchez cet amour unique qui semble magique et transformateur.",
    compatibility: {
      communication: 85,
      emotional: 90,
      lifestyle: 70,
      values: 80,
      future: 75
    },
    characteristics: [
      "Valorise l'intimité émotionnelle profonde",
      "Croit au destin et aux connexions d'âmes sœurs",
      "Recherche des conversations significatives et des rêves partagés",
      "Apprécie les gestes romantiques et les expressions d'amour",
      "Veut un partenaire qui le/la comprend complètement"
    ],
    tips: [
      "Cherchez quelqu'un qui partage votre profondeur émotionnelle",
      "Ne vous contentez pas de connexions superficielles",
      "Exprimez votre nature romantique ouvertement",
      "Trouvez quelqu'un qui apprécie votre vision idéaliste de l'amour",
      "Équilibrez les rêves avec la construction pratique de la relation"
    ],
    idealPartner: [
      "Émotionnellement intelligent et expressif",
      "Partage votre vision romantique du monde",
      "Valorise la conversation profonde et la connexion",
      "Apprécie la poésie, l'art ou les expériences significatives",
      "Croit au pouvoir de l'amour de transformer les vies"
    ]
  },
  'practical-partner': {
    type: 'practical-partner',
    title: "Le Partenaire Pratique",
    description: "Vous valorisez la stabilité, la compatibilité et les objectifs partagés. Vous croyez que les meilleures relations sont construites sur des fondations solides de confiance, de respect et de compatibilité pratique.",
    compatibility: {
      communication: 75,
      emotional: 70,
      lifestyle: 85,
      values: 90,
      future: 85
    },
    characteristics: [
      "Valorise la stabilité et la planification à long terme",
      "Recherche la compatibilité dans le mode de vie et les valeurs",
      "Apprécie la fiabilité et la cohérence",
      "Se concentre sur la construction d'une base solide ensemble",
      "Croit que les actions parlent plus fort que les mots"
    ],
    tips: [
      "Cherchez quelqu'un avec des objectifs de vie similaires",
      "Valorisez la cohérence et la fiabilité chez un partenaire",
      "Construisez votre relation sur des valeurs partagées",
      "Appréciez les expressions pratiques de l'amour",
      "Planifiez votre avenir ensemble étape par étape"
    ],
    idealPartner: [
      "Fiable et cohérent dans ses actions",
      "Partage vos valeurs et objectifs de vie",
      "Doué pour la planification pratique et l'organisation",
      "Valorise la stabilité et l'engagement",
      "Montre l'amour par des actions utiles"
    ]
  },
  'adventurous-soul': {
    type: 'adventurous-soul',
    title: "L'Âme Aventureuse",
    description: "Vous désirez l'excitation, la croissance et les expériences partagées. Vous voulez un partenaire qui explorera le monde avec vous et embrassera ensemble les aventures de la vie.",
    compatibility: {
      communication: 80,
      emotional: 75,
      lifestyle: 90,
      values: 70,
      future: 70
    },
    characteristics: [
      "Aime les nouvelles expériences et les aventures",
      "Valorise la croissance personnelle et l'exploration",
      "Recherche un partenaire qui partage son enthousiasme pour la vie",
      "Apprécie la spontanéité et la flexibilité",
      "Veut créer des souvenirs excitants ensemble"
    ],
    tips: [
      "Trouvez quelqu'un qui partage votre amour de l'aventure",
      "Cherchez un partenaire qui embrasse le changement",
      "Valorisez les expériences plus que les possessions matérielles",
      "Cherchez quelqu'un qui vous met au défi de grandir",
      "Équilibrez l'aventure avec la stabilité relationnelle"
    ],
    idealPartner: [
      "Aime essayer de nouvelles choses et explorer",
      "Embrasse le changement et la spontanéité",
      "Valorise la croissance personnelle et l'apprentissage",
      "A ses propres passions et intérêts",
      "Voit la vie comme une aventure à partager"
    ]
  },
  'deep-connector': {
    type: 'deep-connector',
    title: "Le Connecteur Profond",
    description: "Vous priorisez l'intimité émotionnelle et la compréhension. Vous voulez un partenaire qui vous voit et vous comprend vraiment, créant un lien émotionnel profond.",
    compatibility: {
      communication: 90,
      emotional: 95,
      lifestyle: 65,
      values: 80,
      future: 70
    },
    characteristics: [
      "Valorise l'intimité émotionnelle avant tout",
      "Recherche une compréhension profonde et de l'empathie",
      "Apprécie la vulnérabilité et l'authenticité",
      "Veut être vraiment connu par son partenaire",
      "Croit au pouvoir de la connexion émotionnelle"
    ],
    tips: [
      "Cherchez quelqu'un d'émotionnellement disponible",
      "Valorisez les conversations profondes et le partage",
      "Cherchez un partenaire qui apprécie la vulnérabilité",
      "Trouvez quelqu'un qui veut vraiment vous connaître",
      "Construisez l'intimité par l'ouverture émotionnelle"
    ],
    idealPartner: [
      "Émotionnellement intelligent et empathique",
      "À l'aise avec la vulnérabilité et la profondeur",
      "Valorise la communication authentique",
      "Cherche à comprendre plutôt qu'à juger",
      "Crée un espace sûr pour l'expression émotionnelle"
    ]
  },
  'balanced-seeker': {
    type: 'balanced-seeker',
    title: "Le Chercheur Équilibré",
    description: "Vous recherchez l'harmonie dans toutes les dimensions de la relation. Vous voulez un partenariat bien équilibré qui équilibre connexion émotionnelle, compatibilité pratique et croissance partagée.",
    compatibility: {
      communication: 80,
      emotional: 80,
      lifestyle: 80,
      values: 80,
      future: 80
    },
    characteristics: [
      "Valorise l'équilibre dans tous les aspects de la relation",
      "Recherche l'harmonie entre différents besoins",
      "Apprécie à la fois la connexion émotionnelle et pratique",
      "Veut un partenariat bien équilibré",
      "Croit en grandir ensemble tout en maintenant l'individualité"
    ],
    tips: [
      "Cherchez quelqu'un qui valorise aussi l'équilibre",
      "Recherchez la compatibilité sur plusieurs dimensions",
      "Appréciez les qualités à la fois émotionnelles et pratiques",
      "Trouvez quelqu'un qui complète vos forces",
      "Construisez une relation qui nourrit tous les aspects de la vie"
    ],
    idealPartner: [
      "Équilibré et émotionnellement mature",
      "Équilibre bien différents aspects de la vie",
      "Valorise à la fois la connexion et l'indépendance",
      "Recherche l'harmonie dans les relations",
      "Engagé dans la croissance et la compréhension mutuelles"
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
