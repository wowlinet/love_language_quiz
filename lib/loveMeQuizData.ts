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
    text: "How does your partner react when you achieve something important?",
    options: [
      { text: "Celebrates enthusiastically and is genuinely proud of me", score: 4 },
      { text: "Shows happiness and support", score: 3 },
      { text: "Acknowledges it but doesn't seem overly excited", score: 2 },
      { text: "Barely reacts or seems indifferent", score: 1 },
      { text: "Seems jealous, dismissive, or makes it about them", score: 0 },
    ],
  },
  {
    id: 2,
    text: "Does your partner make you feel like a priority in their life?",
    options: [
      { text: "Absolutely - I feel like one of their top priorities", score: 4 },
      { text: "Yes, they balance me well with other commitments", score: 3 },
      { text: "Sometimes, but I often feel secondary", score: 2 },
      { text: "Rarely - other things seem more important", score: 1 },
      { text: "No - I often feel like an afterthought", score: 0 },
    ],
  },
  {
    id: 3,
    text: "How does your partner handle disagreements or conflicts with you?",
    options: [
      { text: "Respectfully listens and works toward solutions together", score: 4 },
      { text: "Usually constructive, though sometimes tense", score: 3 },
      { text: "Often defensive but eventually resolves things", score: 2 },
      { text: "Gets angry, shuts down, or refuses to discuss", score: 1 },
      { text: "Blames me, says hurtful things, or stonewalls", score: 0 },
    ],
  },
  {
    id: 4,
    text: "Does your partner show genuine interest in your thoughts and feelings?",
    options: [
      { text: "Always - they want to know what I think and how I feel", score: 4 },
      { text: "Often - they check in and really listen", score: 3 },
      { text: "Sometimes - but they can be distracted", score: 2 },
      { text: "Rarely - conversations are mostly surface level", score: 1 },
      { text: "No - they don't seem to care about my inner world", score: 0 },
    ],
  },
  {
    id: 5,
    text: "How does your partner treat you when they're stressed or having a bad day?",
    options: [
      { text: "Still kind and loving, maybe just needs space", score: 4 },
      { text: "A bit withdrawn but not unkind", score: 3 },
      { text: "Sometimes takes frustration out on me", score: 2 },
      { text: "Often becomes cold or irritable toward me", score: 1 },
      { text: "Treats me badly, blames me, or lashes out", score: 0 },
    ],
  },
  {
    id: 6,
    text: "Does your partner make an effort to understand and support your goals and dreams?",
    options: [
      { text: "Yes - they actively encourage and help me pursue them", score: 4 },
      { text: "Yes - they're supportive and interested", score: 3 },
      { text: "Somewhat - they're okay with them but not involved", score: 2 },
      { text: "Not really - they don't pay much attention", score: 1 },
      { text: "No - they dismiss or discourage my aspirations", score: 0 },
    ],
  },
  {
    id: 7,
    text: "How does your partner respond when you're going through a difficult time?",
    options: [
      { text: "Fully present, comforting, and does whatever they can to help", score: 4 },
      { text: "Supportive and tries to be there for me", score: 3 },
      { text: "Offers some support but seems uncomfortable", score: 2 },
      { text: "Distant or doesn't know how to help", score: 1 },
      { text: "Avoids me, seems annoyed, or makes it worse", score: 0 },
    ],
  },
  {
    id: 8,
    text: "Does your partner accept your flaws and imperfections?",
    options: [
      { text: "Yes - loves me completely, flaws and all", score: 4 },
      { text: "Yes - accepts me as I am", score: 3 },
      { text: "Mostly, but sometimes criticizes certain things", score: 2 },
      { text: "Often points out my flaws or wants me to change", score: 1 },
      { text: "No - frequently criticizes or tries to change me", score: 0 },
    ],
  },
  {
    id: 9,
    text: "How does your partner talk about your relationship's future?",
    options: [
      { text: "Excitedly and confidently includes me in long-term plans", score: 4 },
      { text: "Positively mentions future together", score: 3 },
      { text: "Vaguely or avoids specific commitments", score: 2 },
      { text: "Rarely brings up the future", score: 1 },
      { text: "Avoids or seems uncertain about a future together", score: 0 },
    ],
  },
  {
    id: 10,
    text: "Does your partner make sacrifices or compromises for the relationship?",
    options: [
      { text: "Yes - willingly makes sacrifices to make us work", score: 4 },
      { text: "Yes - finds balance and compromises", score: 3 },
      { text: "Sometimes, but reluctantly", score: 2 },
      { text: "Rarely - expects me to do most compromising", score: 1 },
      { text: "Never - it's always their way or nothing", score: 0 },
    ],
  },
  {
    id: 11,
    text: "How does your partner show affection toward you?",
    options: [
      { text: "Frequently and in ways that feel meaningful to me", score: 4 },
      { text: "Regularly shows physical and emotional affection", score: 3 },
      { text: "Occasionally, but I wish there was more", score: 2 },
      { text: "Rarely shows affection", score: 1 },
      { text: "Almost never - feels distant and cold", score: 0 },
    ],
  },
  {
    id: 12,
    text: "Does your partner defend and support you in front of others?",
    options: [
      { text: "Always - has my back publicly and privately", score: 4 },
      { text: "Yes - stands up for me", score: 3 },
      { text: "Sometimes, but not consistently", score: 2 },
      { text: "Rarely defends me", score: 1 },
      { text: "Never - or worse, criticizes me in front of others", score: 0 },
    ],
  },
  {
    id: 13,
    text: "How trustworthy and honest is your partner with you?",
    options: [
      { text: "Completely trustworthy - open and honest about everything", score: 4 },
      { text: "Very trustworthy - transparent with me", score: 3 },
      { text: "Mostly honest but sometimes evasive", score: 2 },
      { text: "Often secretive or caught in small lies", score: 1 },
      { text: "Frequently dishonest or hides things from me", score: 0 },
    ],
  },
  {
    id: 14,
    text: "Does your partner respect your boundaries and autonomy?",
    options: [
      { text: "Absolutely - respects my independence and boundaries", score: 4 },
      { text: "Yes - gives me space and respects my needs", score: 3 },
      { text: "Usually, but sometimes pushes boundaries", score: 2 },
      { text: "Often disregards my boundaries", score: 1 },
      { text: "No - controlling or dismissive of my needs", score: 0 },
    ],
  },
  {
    id: 15,
    text: "How does your partner make you feel about yourself?",
    options: [
      { text: "Amazing - I feel more confident and valued because of them", score: 4 },
      { text: "Good - they lift me up and support me", score: 3 },
      { text: "Neutral - doesn't really affect my self-esteem", score: 2 },
      { text: "Sometimes worse - occasional criticism affects me", score: 1 },
      { text: "Bad - I feel worse about myself in this relationship", score: 0 },
    ],
  },
  {
    id: 16,
    text: "Does your partner remember and acknowledge things that are important to you?",
    options: [
      { text: "Yes - remembers details and makes me feel truly seen", score: 4 },
      { text: "Usually - remembers important dates and preferences", score: 3 },
      { text: "Sometimes - but forgets significant things", score: 2 },
      { text: "Rarely - seems not to pay attention", score: 1 },
      { text: "Never - forgets everything important to me", score: 0 },
    ],
  },
  {
    id: 17,
    text: "How does your partner contribute to the relationship?",
    options: [
      { text: "Equally or more - actively invests time, effort, and care", score: 4 },
      { text: "Fairly equally - we both put in effort", score: 3 },
      { text: "Somewhat - but I often do more", score: 2 },
      { text: "Minimally - I carry most of the relationship weight", score: 1 },
      { text: "Barely at all - it feels completely one-sided", score: 0 },
    ],
  },
  {
    id: 18,
    text: "Does your partner apologize and take accountability when they hurt you?",
    options: [
      { text: "Yes - sincerely apologizes and works to do better", score: 4 },
      { text: "Usually - acknowledges mistakes and apologizes", score: 3 },
      { text: "Sometimes - but apologies can feel insincere", score: 2 },
      { text: "Rarely - defensive and avoids responsibility", score: 1 },
      { text: "Never - blames me or refuses to apologize", score: 0 },
    ],
  },
  {
    id: 19,
    text: "How does your partner react when you express needs or concerns?",
    options: [
      { text: "Listens thoughtfully and takes my needs seriously", score: 4 },
      { text: "Generally receptive and tries to address concerns", score: 3 },
      { text: "Sometimes dismissive but eventually listens", score: 2 },
      { text: "Often defensive or makes me feel bad for having needs", score: 1 },
      { text: "Dismisses, invalidates, or gets angry at my needs", score: 0 },
    ],
  },
  {
    id: 20,
    text: "Overall, do you feel truly loved, valued, and cherished by your partner?",
    options: [
      { text: "Absolutely - I feel deeply loved every day", score: 4 },
      { text: "Yes - I feel loved and appreciated", score: 3 },
      { text: "Sometimes - my feelings fluctuate", score: 2 },
      { text: "Rarely - I often doubt their love", score: 1 },
      { text: "No - I don't feel genuinely loved", score: 0 },
    ],
  },
]

export const loveMeQuizResults: Record<string, LoveMeQuizResult> = {
  deeply_loves_you: {
    level: "deeply_loves_you",
    title: "They Deeply Love You",
    emoji: "💝💕",
    description: "Your partner shows strong, consistent signs of genuine love. They prioritize you, respect you, support your growth, and make you feel valued. The way they treat you during conflicts, celebrate your successes, and show up when you need them demonstrates deep, mature love. This is a healthy, loving relationship.",
    advice: [
      "Cherish and nurture this loving relationship",
      "Continue open communication to maintain your strong bond",
      "Show appreciation for the love they give you",
      "Keep investing in the relationship together",
      "Build on this foundation for a lasting partnership",
    ],
    color: "from-rose-500 to-pink-600",
  },
  truly_loves_you: {
    level: "truly_loves_you",
    title: "They Truly Love You",
    emoji: "💖😊",
    description: "Your partner demonstrates genuine love for you. They care about your wellbeing, support you through challenges, and value the relationship. While no relationship is perfect, the fundamentals are strong - respect, trust, affection, and commitment are clearly present.",
    advice: [
      "Continue building on your strong foundation",
      "Address any small issues before they grow",
      "Express your needs and listen to theirs",
      "Keep showing love in ways they understand",
      "Appreciate the good while working on areas of growth",
    ],
    color: "from-pink-500 to-rose-500",
  },
  loves_you_with_issues: {
    level: "loves_you_with_issues",
    title: "They Love You, But There Are Issues",
    emoji: "💛🤔",
    description: "Your partner likely loves you, but there are some concerning patterns or gaps in how they express it. Some needs aren't being fully met, or there are areas where the relationship could be healthier. Love is present, but it may need work to thrive.",
    advice: [
      "Have honest conversations about unmet needs",
      "Consider couples counseling to strengthen your bond",
      "Identify specific areas that need improvement",
      "Both partners need to invest in making changes",
      "Evaluate if both of you are willing to grow together",
    ],
    color: "from-yellow-500 to-amber-500",
  },
  uncertain_love: {
    level: "uncertain_love",
    title: "Their Love Is Uncertain",
    emoji: "💭❓",
    description: "The signs are mixed and concerning. Your partner may care about you, but there are significant issues with how they express love, handle conflict, or prioritize the relationship. You may frequently feel unsure of their feelings, which isn't healthy in a committed relationship.",
    advice: [
      "Reflect seriously on whether your needs are being met",
      "Have a direct conversation about the state of the relationship",
      "Consider whether this relationship makes you happy",
      "Seek professional help if you want to try to improve things",
      "Remember: you deserve to feel loved and secure",
    ],
    color: "from-orange-500 to-yellow-500",
  },
  questionable_love: {
    level: "questionable_love",
    title: "Their Love Is Questionable",
    emoji: "💔😔",
    description: "Based on your responses, there are serious red flags. Your partner may not love you in a healthy way, or the relationship may be lacking fundamental elements of love like respect, support, and genuine care. You deserve better than what you're currently experiencing.",
    advice: [
      "Seriously evaluate if this relationship is healthy for you",
      "Talk to trusted friends, family, or a therapist",
      "Consider if you feel safe and valued in this relationship",
      "Don't ignore red flags - they're warnings for a reason",
      "Remember: real love makes you feel good about yourself",
    ],
    color: "from-red-500 to-orange-500",
  },
  not_healthy_love: {
    level: "not_healthy_love",
    title: "This Doesn't Seem Like Healthy Love",
    emoji: "🚩💔",
    description: "Your responses indicate a relationship that lacks healthy love. You may be experiencing emotional neglect, manipulation, control, or other harmful dynamics. True love involves respect, support, trust, and making you feel valued - not diminished or uncertain.",
    advice: [
      "Consider reaching out to a therapist or counselor",
      "Talk to trusted people in your life about your relationship",
      "Evaluate whether this relationship is good for your wellbeing",
      "You deserve a partner who truly loves and respects you",
      "Don't settle for less than you deserve - your happiness matters",
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
