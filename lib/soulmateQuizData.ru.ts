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
    question: "Что касается общения в отношениях, я предпочитаю...",
    category: "communication",
    options: [
      { text: "Глубокие, содержательные разговоры о жизни и мечтах", value: "deep", weight: 4 },
      { text: "Легкую болтовню и игривые обмены", value: "playful", weight: 3 },
      { text: "Практические обсуждения о повседневной жизни и планах", value: "practical", weight: 2 },
      { text: "Комфортное молчание и невербальное понимание", value: "quiet", weight: 1 },
    ],
  },
  {
    id: 2,
    question: "Мой идеальный партнер разделял бы мои ценности относительно...",
    category: "values",
    options: [
      { text: "Семьи, традиций и построения стабильного фундамента вместе", value: "traditional", weight: 4 },
      { text: "Личностного роста, приключений и исследования нового опыта", value: "growth", weight: 3 },
      { text: "Карьерных амбиций и достижения успеха вместе", value: "ambitious", weight: 2 },
      { text: "Креативности, искусства и аутентичного самовыражения", value: "creative", weight: 1 },
    ],
  },
  {
    id: 3,
    question: "Когда я представляю идеальные выходные со своей второй половинкой, мы бы...",
    category: "lifestyle",
    options: [
      { text: "Исследовали новый город или отправлялись в приключение на природе", value: "adventurous", weight: 4 },
      { text: "Принимали друзей на ужин или посещали социальные мероприятия", value: "social", weight: 3 },
      { text: "Отдыхали дома, готовили вместе и наслаждались тихим временем", value: "homebody", weight: 2 },
      { text: "Занимались своими индивидуальными хобби, находясь в одном пространстве", value: "independent", weight: 1 },
    ],
  },
  {
    id: 4,
    question: "Эмоционально мне нужен партнер, который...",
    category: "emotional",
    options: [
      { text: "Глубоко эмпатичен и может связаться с моими чувствами", value: "empathetic", weight: 4 },
      { text: "Приносит оптимизм и радость в каждую ситуацию", value: "optimistic", weight: 3 },
      { text: "Стабилен, надежен и эмоционально уравновешен", value: "stable", weight: 2 },
      { text: "Дает мне пространство для самостоятельной обработки эмоций", value: "independent", weight: 1 },
    ],
  },
  {
    id: 5,
    question: "Сталкиваясь с трудностями вместе, я хочу, чтобы мы...",
    category: "communication",
    options: [
      { text: "Обсуждали все открыто и работали как команда", value: "collaborative", weight: 4 },
      { text: "Поддерживали друг друга, справляясь со своими обязанностями", value: "supportive", weight: 3 },
      { text: "Предпринимали практические шаги и фокусировались на решениях", value: "solution-focused", weight: 2 },
      { text: "Давали друг другу пространство и встречались, когда готовы", value: "space-giving", weight: 1 },
    ],
  },
  {
    id: 6,
    question: "Что касается планирования будущего, моя идеальная связь включает...",
    category: "future",
    options: [
      { text: "Детальные планы и общие цели, над которыми мы работаем вместе", value: "planned", weight: 4 },
      { text: "Общее направление с гибкостью для спонтанных изменений", value: "flexible", weight: 3 },
      { text: "Индивидуальные цели, которые дополняют друг друга", value: "complementary", weight: 2 },
      { text: "Жизнь в настоящем и естественное развитие будущего", value: "present-focused", weight: 1 },
    ],
  },
  {
    id: 7,
    question: "Способ, которым я проявляю любовь и привязанность, в основном через...",
    category: "emotional",
    options: [
      { text: "Физический контакт, объятия и близость с партнером", value: "physical", weight: 4 },
      { text: "Слова подтверждения и вербальные выражения любви", value: "verbal", weight: 3 },
      { text: "Акты служения и заботливые действия", value: "service", weight: 2 },
      { text: "Качественное время и совместный опыт", value: "time", weight: 1 },
    ],
  },
  {
    id: 8,
    question: "Мой подход к разрешению конфликтов заключается в том, чтобы...",
    category: "communication",
    options: [
      { text: "Немедленно решать проблемы и прорабатывать их вместе", value: "direct", weight: 4 },
      { text: "Дать время остыть, затем спокойно обсудить", value: "thoughtful", weight: 3 },
      { text: "Сосредоточиться на поиске компромисса и золотой середины", value: "diplomatic", weight: 2 },
      { text: "Избегать конфликтов, когда это возможно, и фокусироваться на позитиве", value: "harmonious", weight: 1 },
    ],
  },
  {
    id: 9,
    question: "Что касается личного пространства и независимости, я считаю...",
    category: "lifestyle",
    options: [
      { text: "Мы должны делать большинство вещей вместе и делиться всем", value: "together", weight: 4 },
      { text: "Мы должны балансировать время пары с индивидуальными интересами", value: "balanced", weight: 3 },
      { text: "Мы должны поддерживать отдельные круги друзей и хобби", value: "separate", weight: 2 },
      { text: "Мы должны быть независимыми людьми, которые выбирают быть вместе", value: "independent", weight: 1 },
    ],
  },
  {
    id: 10,
    question: "Самое важное качество, которое я ищу в спутнике жизни, это...",
    category: "values",
    options: [
      { text: "Безусловная любовь и эмоциональная связь", value: "loving", weight: 4 },
      { text: "Преданность, приверженность и надежность", value: "loyal", weight: 3 },
      { text: "Интеллект, амбиции и общие цели", value: "ambitious", weight: 2 },
      { text: "Юмор, веселье и способность наслаждаться жизнью вместе", value: "fun", weight: 1 },
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
    title: 'Романтический Идеалист',
    description: 'Вы ищете глубокую эмоциональную связь и общие мечты. Вы верите в родственные души и ищете ту единственную в жизни любовь, которая кажется волшебной и преобразующей.',
    compatibility: {
      communication: 85,
      emotional: 90,
      lifestyle: 70,
      values: 80,
      future: 75
    },
    characteristics: [
      'Ценит глубокую эмоциональную близость',
      'Верит в судьбу и связи родственных душ',
      'Ищет содержательные разговоры и общие мечты',
      'Ценит романтические жесты и выражения любви',
      'Хочет партнера, который полностью его/ее понимает'
    ],
    tips: [
      'Ищите того, кто разделяет вашу эмоциональную глубину',
      'Не довольствуйтесь поверхностными связями',
      'Открыто выражайте свою романтическую натуру',
      'Найдите того, кто ценит ваш идеалистический взгляд на любовь',
      'Балансируйте мечты с практическим построением отношений'
    ],
    idealPartner: [
      'Эмоционально интеллигентный и выразительный',
      'Разделяет ваше романтическое мировоззрение',
      'Ценит глубокие разговоры и связь',
      'Ценит поэзию, искусство или значимые переживания',
      'Верит в силу любви преобразовывать жизни'
    ]
  },
  'practical-partner': {
    type: 'practical-partner',
    title: 'Практичный Партнер',
    description: 'Вы цените стабильность, совместимость и общие цели. Вы верите, что лучшие отношения строятся на прочном фундаменте доверия, уважения и практической совместимости.',
    compatibility: {
      communication: 75,
      emotional: 70,
      lifestyle: 85,
      values: 90,
      future: 85
    },
    characteristics: [
      'Ценит стабильность и долгосрочное планирование',
      'Ищет совместимость в образе жизни и ценностях',
      'Ценит надежность и постоянство',
      'Фокусируется на построении прочного фундамента вместе',
      'Верит, что действия говорят громче слов'
    ],
    tips: [
      'Ищите того, у кого похожие жизненные цели',
      'Цените постоянство и надежность в партнере',
      'Стройте отношения на общих ценностях',
      'Цените практические проявления любви',
      'Планируйте свое будущее вместе шаг за шагом'
    ],
    idealPartner: [
      'Надежный и последовательный в своих действиях',
      'Разделяет ваши ценности и жизненные цели',
      'Хорошо справляется с практическим планированием и организацией',
      'Ценит стабильность и приверженность',
      'Показывает любовь через полезные действия'
    ]
  },
  'adventurous-soul': {
    type: 'adventurous-soul',
    title: 'Авантюрная Душа',
    description: 'Вы желаете волнения, роста и совместного опыта. Вы хотите партнера, который будет исследовать мир вместе с вами и принимать жизненные приключения.',
    compatibility: {
      communication: 80,
      emotional: 75,
      lifestyle: 90,
      values: 70,
      future: 70
    },
    characteristics: [
      'Любит новый опыт и приключения',
      'Ценит личностный рост и исследование',
      'Ищет партнера, который разделяет энтузиазм к жизни',
      'Ценит спонтанность и гибкость',
      'Хочет создавать захватывающие воспоминания вместе'
    ],
    tips: [
      'Найдите того, кто разделяет вашу любовь к приключениям',
      'Ищите партнера, который принимает перемены',
      'Цените опыт больше, чем материальные вещи',
      'Ищите того, кто бросает вам вызов расти',
      'Балансируйте приключения со стабильностью отношений'
    ],
    idealPartner: [
      'Любит пробовать новое и исследовать',
      'Принимает перемены и спонтанность',
      'Ценит личностный рост и обучение',
      'Имеет свои собственные страсти и интересы',
      'Видит жизнь как приключение, которым нужно делиться'
    ]
  },
  'deep-connector': {
    type: 'deep-connector',
    title: 'Глубокий Связующий',
    description: 'Вы отдаете приоритет эмоциональной близости и пониманию. Вы хотите партнера, который действительно видит и понимает вас, создавая глубокую эмоциональную связь.',
    compatibility: {
      communication: 90,
      emotional: 95,
      lifestyle: 65,
      values: 80,
      future: 70
    },
    characteristics: [
      'Ценит эмоциональную близость превыше всего',
      'Ищет глубокое понимание и эмпатию',
      'Ценит уязвимость и аутентичность',
      'Хочет быть по-настоящему известным своему партнеру',
      'Верит в силу эмоциональной связи'
    ],
    tips: [
      'Ищите эмоционально доступного человека',
      'Цените глубокие разговоры и обмен',
      'Ищите партнера, который ценит уязвимость',
      'Найдите того, кто хочет по-настоящему узнать вас',
      'Стройте близость через эмоциональную открытость'
    ],
    idealPartner: [
      'Эмоционально интеллигентный и эмпатичный',
      'Комфортно с уязвимостью и глубиной',
      'Ценит аутентичное общение',
      'Стремится понять, а не осуждать',
      'Создает безопасное пространство для эмоционального выражения'
    ]
  },
  'balanced-seeker': {
    type: 'balanced-seeker',
    title: 'Сбалансированный Искатель',
    description: 'Вы ищете гармонию во всех измерениях отношений. Вы хотите сбалансированное партнерство, которое уравновешивает эмоциональную связь, практическую совместимость и совместный рост.',
    compatibility: {
      communication: 80,
      emotional: 80,
      lifestyle: 80,
      values: 80,
      future: 80
    },
    characteristics: [
      'Ценит баланс во всех аспектах отношений',
      'Ищет гармонию между различными потребностями',
      'Ценит как эмоциональную, так и практическую связь',
      'Хочет сбалансированное партнерство',
      'Верит в совместный рост при сохранении индивидуальности'
    ],
    tips: [
      'Ищите того, кто тоже ценит баланс',
      'Ищите совместимость в нескольких измерениях',
      'Цените как эмоциональные, так и практические качества',
      'Найдите того, кто дополняет ваши сильные стороны',
      'Стройте отношения, которые питают все аспекты жизни'
    ],
    idealPartner: [
      'Сбалансированный и эмоционально зрелый',
      'Хорошо балансирует разные аспекты жизни',
      'Ценит как связь, так и независимость',
      'Ищет гармонию в отношениях',
      'Привержен взаимному росту и пониманию'
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
