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
    question: "When it comes to communication in a relationship, I prefer...",
    category: "communication",
    options: [
      { text: "Deep, meaningful conversations about life and dreams", value: "deep", weight: 4 },
      { text: "Light-hearted banter and playful exchanges", value: "playful", weight: 3 },
      { text: "Practical discussions about daily life and plans", value: "practical", weight: 2 },
      { text: "Comfortable silence and non-verbal understanding", value: "quiet", weight: 1 },
    ],
  },
  {
    id: 2,
    question: "My ideal partner would share my values about...",
    category: "values",
    options: [
      { text: "Family, tradition, and building a stable foundation together", value: "traditional", weight: 4 },
      { text: "Personal growth, adventure, and exploring new experiences", value: "growth", weight: 3 },
      { text: "Career ambitions and achieving success together", value: "ambitious", weight: 2 },
      { text: "Creativity, art, and expressing ourselves authentically", value: "creative", weight: 1 },
    ],
  },
  {
    id: 3,
    question: "When I imagine my perfect weekend with my soulmate, we would be...",
    category: "lifestyle",
    options: [
      { text: "Exploring a new city or going on an outdoor adventure", value: "adventurous", weight: 4 },
      { text: "Hosting friends for dinner or attending social events", value: "social", weight: 3 },
      { text: "Relaxing at home, cooking together, and enjoying quiet time", value: "homebody", weight: 2 },
      { text: "Pursuing our individual hobbies while being in the same space", value: "independent", weight: 1 },
    ],
  },
  {
    id: 4,
    question: "Emotionally, I need a partner who...",
    category: "emotional",
    options: [
      { text: "Is deeply empathetic and can connect with my feelings", value: "empathetic", weight: 4 },
      { text: "Brings optimism and joy to every situation", value: "optimistic", weight: 3 },
      { text: "Is steady, reliable, and emotionally stable", value: "stable", weight: 2 },
      { text: "Gives me space to process emotions independently", value: "independent", weight: 1 },
    ],
  },
  {
    id: 5,
    question: "When facing challenges together, I want us to...",
    category: "communication",
    options: [
      { text: "Talk through everything openly and work as a team", value: "collaborative", weight: 4 },
      { text: "Support each other while handling our own responsibilities", value: "supportive", weight: 3 },
      { text: "Take practical steps and focus on solutions", value: "solution-focused", weight: 2 },
      { text: "Give each other space and reconvene when ready", value: "space-giving", weight: 1 },
    ],
  },
  {
    id: 6,
    question: "In terms of future planning, my ideal relationship involves...",
    category: "future",
    options: [
      { text: "Detailed plans and shared goals we work toward together", value: "planned", weight: 4 },
      { text: "A general direction with flexibility for spontaneous changes", value: "flexible", weight: 3 },
      { text: "Individual goals that complement each other", value: "complementary", weight: 2 },
      { text: "Living in the present and letting the future unfold naturally", value: "present-focused", weight: 1 },
    ],
  },
  {
    id: 7,
    question: "The way I show love and affection is primarily through...",
    category: "emotional",
    options: [
      { text: "Physical touch, hugs, and being close to my partner", value: "physical", weight: 4 },
      { text: "Words of affirmation and verbal expressions of love", value: "verbal", weight: 3 },
      { text: "Acts of service and doing thoughtful things", value: "service", weight: 2 },
      { text: "Quality time and shared experiences", value: "time", weight: 1 },
    ],
  },
  {
    id: 8,
    question: "My approach to conflict resolution is to...",
    category: "communication",
    options: [
      { text: "Address issues immediately and work through them together", value: "direct", weight: 4 },
      { text: "Take time to cool down, then discuss calmly", value: "thoughtful", weight: 3 },
      { text: "Focus on finding compromise and middle ground", value: "diplomatic", weight: 2 },
      { text: "Avoid conflict when possible and focus on positives", value: "harmonious", weight: 1 },
    ],
  },
  {
    id: 9,
    question: "When it comes to personal space and independence, I believe...",
    category: "lifestyle",
    options: [
      { text: "We should do most things together and share everything", value: "together", weight: 4 },
      { text: "We should balance couple time with individual interests", value: "balanced", weight: 3 },
      { text: "We should maintain separate friend groups and hobbies", value: "separate", weight: 2 },
      { text: "We should be independent people who choose to be together", value: "independent", weight: 1 },
    ],
  },
  {
    id: 10,
    question: "The most important quality I seek in a life partner is...",
    category: "values",
    options: [
      { text: "Unconditional love and emotional connection", value: "loving", weight: 4 },
      { text: "Loyalty, commitment, and reliability", value: "loyal", weight: 3 },
      { text: "Intelligence, ambition, and shared goals", value: "ambitious", weight: 2 },
      { text: "Humor, fun, and the ability to enjoy life together", value: "fun", weight: 1 },
    ],
  },
];

// Category weights for result calculation
export const CATEGORY_WEIGHTS = {
  communication: 0.25,
  emotional: 0.25,
  lifestyle: 0.20,
  values: 0.20,
  future: 0.10
};

// Soulmate types based on score combinations
export const SOULMATE_TYPES: Record<string, SoulmateResult> = {
  'romantic-idealist': {
    type: 'romantic-idealist',
    title: 'The Romantic Idealist',
    description: 'You seek deep emotional connection and shared dreams. You believe in soulmates and are looking for that once-in-a-lifetime love that feels magical and transformative.',
    compatibility: {
      communication: 85,
      emotional: 90,
      lifestyle: 70,
      values: 80,
      future: 75
    },
    characteristics: [
      'Values deep emotional intimacy',
      'Believes in destiny and soulmate connections',
      'Seeks meaningful conversations and shared dreams',
      'Appreciates romantic gestures and expressions of love',
      'Wants a partner who understands them completely'
    ],
    tips: [
      'Look for someone who shares your emotional depth',
      'Don\'t settle for surface-level connections',
      'Express your romantic nature openly',
      'Find someone who appreciates your idealistic view of love',
      'Balance dreams with practical relationship building'
    ],
    idealPartner: [
      'Emotionally intelligent and expressive',
      'Shares your romantic worldview',
      'Values deep conversation and connection',
      'Appreciates poetry, art, or meaningful experiences',
      'Believes in the power of love to transform lives'
    ]
  },
  'practical-partner': {
    type: 'practical-partner',
    title: 'The Practical Partner',
    description: 'You value stability, compatibility, and shared goals. You believe the best relationships are built on solid foundations of trust, respect, and practical compatibility.',
    compatibility: {
      communication: 75,
      emotional: 70,
      lifestyle: 85,
      values: 90,
      future: 85
    },
    characteristics: [
      'Values stability and long-term planning',
      'Seeks compatibility in lifestyle and values',
      'Appreciates reliability and consistency',
      'Focuses on building a solid foundation together',
      'Believes actions speak louder than words'
    ],
    tips: [
      'Look for someone with similar life goals',
      'Value consistency and reliability in a partner',
      'Build your relationship on shared values',
      'Appreciate practical expressions of love',
      'Plan your future together step by step'
    ],
    idealPartner: [
      'Reliable and consistent in their actions',
      'Shares your values and life goals',
      'Good at practical planning and organization',
      'Values stability and commitment',
      'Shows love through helpful actions'
    ]
  },
  'adventurous-soul': {
    type: 'adventurous-soul',
    title: 'The Adventurous Soul',
    description: 'You desire excitement, growth, and shared experiences. You want a partner who will explore the world with you and embrace life\'s adventures together.',
    compatibility: {
      communication: 80,
      emotional: 75,
      lifestyle: 90,
      values: 70,
      future: 70
    },
    characteristics: [
      'Loves new experiences and adventures',
      'Values personal growth and exploration',
      'Seeks a partner who shares their zest for life',
      'Appreciates spontaneity and flexibility',
      'Wants to create exciting memories together'
    ],
    tips: [
      'Find someone who shares your love of adventure',
      'Look for a partner who embraces change',
      'Value experiences over material possessions',
      'Seek someone who challenges you to grow',
      'Balance adventure with relationship stability'
    ],
    idealPartner: [
      'Loves trying new things and exploring',
      'Embraces change and spontaneity',
      'Values personal growth and learning',
      'Has their own passions and interests',
      'Sees life as an adventure to be shared'
    ]
  },
  'deep-connector': {
    type: 'deep-connector',
    title: 'The Deep Connector',
    description: 'You prioritize emotional intimacy and understanding. You want a partner who truly sees and understands you, creating a profound emotional bond.',
    compatibility: {
      communication: 90,
      emotional: 95,
      lifestyle: 65,
      values: 80,
      future: 70
    },
    characteristics: [
      'Values emotional intimacy above all else',
      'Seeks deep understanding and empathy',
      'Appreciates vulnerability and authenticity',
      'Wants to be truly known by their partner',
      'Believes in the power of emotional connection'
    ],
    tips: [
      'Look for someone emotionally available',
      'Value deep conversations and sharing',
      'Seek a partner who appreciates vulnerability',
      'Find someone who wants to truly know you',
      'Build intimacy through emotional openness'
    ],
    idealPartner: [
      'Emotionally intelligent and empathetic',
      'Comfortable with vulnerability and depth',
      'Values authentic communication',
      'Seeks to understand rather than judge',
      'Creates safe space for emotional expression'
    ]
  },
  'balanced-seeker': {
    type: 'balanced-seeker',
    title: 'The Balanced Seeker',
    description: 'You seek harmony across all relationship dimensions. You want a well-rounded partnership that balances emotional connection, practical compatibility, and shared growth.',
    compatibility: {
      communication: 80,
      emotional: 80,
      lifestyle: 80,
      values: 80,
      future: 80
    },
    characteristics: [
      'Values balance in all aspects of relationship',
      'Seeks harmony between different needs',
      'Appreciates both emotional and practical connection',
      'Wants a well-rounded partnership',
      'Believes in growing together while maintaining individuality'
    ],
    tips: [
      'Look for someone who values balance too',
      'Seek compatibility across multiple dimensions',
      'Appreciate both emotional and practical qualities',
      'Find someone who complements your strengths',
      'Build a relationship that nurtures all aspects of life'
    ],
    idealPartner: [
      'Well-rounded and emotionally mature',
      'Balances different aspects of life well',
      'Values both connection and independence',
      'Seeks harmony in relationships',
      'Committed to mutual growth and understanding'
    ]
  }
};

// Result calculation function
export function calculateSoulmateResult(responses: QuizResponse[]): SoulmateResult {
  // Calculate category scores
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

  // Calculate average scores and convert to percentages
  const categoryScores: Record<string, number> = {};
  Object.keys(categoryTotals).forEach(category => {
    const average = categoryTotals[category] / categoryCounts[category];
    categoryScores[category] = Math.round((average / 4) * 100); // Convert to percentage
  });

  // Determine soulmate type based on highest scoring categories
  const sortedCategories = Object.entries(categoryScores)
    .sort(([,a], [,b]) => b - a);

  const topCategory = sortedCategories[0][0];
  const topScore = sortedCategories[0][1];

  let soulmateType: string;

  // Determine type based on score patterns
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