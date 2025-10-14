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
    text: "When you think about this person, how do you feel?",
    options: [
      { text: "My heart races and I get butterflies in my stomach", score: 4 },
      { text: "I feel warm, happy, and content", score: 3 },
      { text: "I feel comfortable and relaxed", score: 2 },
      { text: "I don't think about them that often", score: 1 },
      { text: "I feel indifferent or confused", score: 0 },
    ],
  },
  {
    id: 2,
    text: "How important is their happiness to you?",
    options: [
      { text: "Their happiness is as important as my own", score: 4 },
      { text: "Very important - I want them to be happy", score: 3 },
      { text: "Somewhat important, like any friend", score: 2 },
      { text: "I care, but it's not a priority", score: 1 },
      { text: "I haven't really thought about it", score: 0 },
    ],
  },
  {
    id: 3,
    text: "Do you imagine a future with this person?",
    options: [
      { text: "Yes, constantly - they're in all my future plans", score: 4 },
      { text: "Often - I see them as part of my future", score: 3 },
      { text: "Sometimes - but it's not clear yet", score: 2 },
      { text: "Rarely - I focus on the present", score: 1 },
      { text: "No - I don't see them in my future", score: 0 },
    ],
  },
  {
    id: 4,
    text: "How do you feel when you're apart from them?",
    options: [
      { text: "I miss them intensely and count down until we're together again", score: 4 },
      { text: "I miss them and look forward to seeing them", score: 3 },
      { text: "I'm fine but happy when we reconnect", score: 2 },
      { text: "I barely notice - I'm busy with my own life", score: 1 },
      { text: "I feel relieved or don't think about it", score: 0 },
    ],
  },
  {
    id: 5,
    text: "Would you be willing to make sacrifices for them?",
    options: [
      { text: "Yes, I'd sacrifice almost anything for their well-being", score: 4 },
      { text: "Yes, I'd make reasonable sacrifices", score: 3 },
      { text: "Maybe, depending on what it is", score: 2 },
      { text: "Probably not - I prioritize myself", score: 1 },
      { text: "No - I don't see why I should", score: 0 },
    ],
  },
  {
    id: 6,
    text: "How do you react when they share good news?",
    options: [
      { text: "I'm genuinely thrilled and celebrate with them", score: 4 },
      { text: "I'm happy for them and show support", score: 3 },
      { text: "I'm pleased but not overly excited", score: 2 },
      { text: "I acknowledge it but don't feel much", score: 1 },
      { text: "I feel neutral or even jealous", score: 0 },
    ],
  },
  {
    id: 7,
    text: "Do you accept their flaws and imperfections?",
    options: [
      { text: "Yes, their flaws make them more endearing to me", score: 4 },
      { text: "Yes, I accept them as they are", score: 3 },
      { text: "Most of them, but some bother me", score: 2 },
      { text: "Some flaws are hard to accept", score: 1 },
      { text: "No, their flaws frustrate me significantly", score: 0 },
    ],
  },
  {
    id: 8,
    text: "How physically attracted are you to them?",
    options: [
      { text: "Extremely - they're the most attractive person to me", score: 4 },
      { text: "Very attracted - I love being physically close", score: 3 },
      { text: "Moderately attracted", score: 2 },
      { text: "Slightly attracted or it varies", score: 1 },
      { text: "Not really attracted physically", score: 0 },
    ],
  },
  {
    id: 9,
    text: "Do you want to share your deepest thoughts and feelings with them?",
    options: [
      { text: "Yes, they're the first person I want to tell everything", score: 4 },
      { text: "Yes, I feel comfortable opening up to them", score: 3 },
      { text: "Sometimes, but I'm selective about what I share", score: 2 },
      { text: "Rarely - I prefer to keep things private", score: 1 },
      { text: "No - I don't feel that connection", score: 0 },
    ],
  },
  {
    id: 10,
    text: "How jealous do you feel when they spend time with others?",
    options: [
      { text: "Quite jealous - I wish I could be with them always", score: 4 },
      { text: "A little jealous but I trust them", score: 3 },
      { text: "Minimal jealousy - everyone needs their own time", score: 2 },
      { text: "Not jealous at all", score: 1 },
      { text: "I don't care who they spend time with", score: 0 },
    ],
  },
  {
    id: 11,
    text: "Do you prioritize their needs over your own?",
    options: [
      { text: "Often - their needs feel as important as mine", score: 4 },
      { text: "Sometimes - I try to balance both our needs", score: 3 },
      { text: "Occasionally, but I prioritize myself mostly", score: 2 },
      { text: "Rarely - I focus on my own needs first", score: 1 },
      { text: "Never - I always put myself first", score: 0 },
    ],
  },
  {
    id: 12,
    text: "How do you feel about physical intimacy with them?",
    options: [
      { text: "I crave it and it feels deeply meaningful", score: 4 },
      { text: "I enjoy it and it strengthens our bond", score: 3 },
      { text: "It's nice but not essential", score: 2 },
      { text: "I'm indifferent or uncertain about it", score: 1 },
      { text: "I don't desire physical intimacy with them", score: 0 },
    ],
  },
  {
    id: 13,
    text: "Can you be your authentic self around them?",
    options: [
      { text: "Completely - I've never felt more myself with anyone", score: 4 },
      { text: "Yes - I feel comfortable being real with them", score: 3 },
      { text: "Mostly, but I hide some parts of myself", score: 2 },
      { text: "Not really - I feel like I have to pretend", score: 1 },
      { text: "No - I can't be myself around them", score: 0 },
    ],
  },
  {
    id: 14,
    text: "How does spending time with them make you feel?",
    options: [
      { text: "Energized, alive, and completely fulfilled", score: 4 },
      { text: "Happy and content - time flies by", score: 3 },
      { text: "Pleasant and enjoyable", score: 2 },
      { text: "It's okay, nothing special", score: 1 },
      { text: "Draining or uncomfortable", score: 0 },
    ],
  },
  {
    id: 15,
    text: "If they were no longer in your life, how would you feel?",
    options: [
      { text: "Devastated - I can't imagine life without them", score: 4 },
      { text: "Very sad and deeply affected", score: 3 },
      { text: "Sad but I'd eventually move on", score: 2 },
      { text: "A little sad but not dramatically affected", score: 1 },
      { text: "Not particularly affected", score: 0 },
    ],
  },
]

export const loveQuizResults: Record<string, LoveQuizResult> = {
  deeply_in_love: {
    level: "deeply_in_love",
    title: "💕 Deeply in Love",
    description: "All signs point to yes - you're genuinely in love! Your feelings show strong emotional connection, deep care for their wellbeing, and a desire for a shared future. You experience the classic signs of being in love: butterflies, constant thoughts about them, and feeling most yourself when you're together.",
    advice: [
      "Communicate openly about your feelings when you're both ready",
      "Continue nurturing the emotional intimacy you've built",
      "Don't lose yourself - maintain your individual identity and interests",
      "Build trust through consistency and honesty",
      "Enjoy this special time but let the relationship develop naturally",
    ],
    color: "from-rose-500 to-pink-600",
  },
  strongly_attracted: {
    level: "strongly_attracted",
    title: "💗 Strongly Attracted & Connected",
    description: "You have strong feelings that could definitely be love or are developing into love. You care deeply about this person, enjoy their company, and can see a potential future together. Whether it's early-stage love or heading in that direction, your connection is meaningful.",
    advice: [
      "Give yourself time - love often develops gradually",
      "Focus on building deeper emotional intimacy",
      "Share your authentic self and encourage them to do the same",
      "Notice how they treat you and make you feel consistently",
      "Trust your instincts as your feelings continue to develop",
    ],
    color: "from-pink-500 to-rose-500",
  },
  developing_feelings: {
    level: "developing_feelings",
    title: "💓 Developing Feelings",
    description: "You're experiencing genuine feelings that are growing. You enjoy this person's company and care about them, though you might still be figuring out exactly what you feel. This could be the beginning of love, or it might develop into a strong friendship.",
    advice: [
      "Take your time to understand your feelings - there's no rush",
      "Spend more quality time together to deepen your connection",
      "Pay attention to how you feel when you're together vs. apart",
      "Consider what you value in a romantic relationship",
      "Be open to wherever this connection leads",
    ],
    color: "from-purple-500 to-pink-500",
  },
  uncertain: {
    level: "uncertain",
    title: "💭 Unclear Feelings",
    description: "Your feelings are uncertain right now, which is completely normal. You might be experiencing some attraction or care, but it's not clear if it's romantic love, friendship, or something else. Sometimes we need time and clarity to understand our emotions.",
    advice: [
      "Give yourself space to explore what you truly feel",
      "Reflect on what you want from this relationship",
      "Consider if there are barriers preventing deeper feelings",
      "It's okay not to force feelings that aren't there",
      "Focus on building a genuine connection without pressure",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  not_in_love: {
    level: "not_in_love",
    title: "🤍 Not in Love",
    description: "Based on your responses, you don't appear to be in love with this person right now. This doesn't mean there's anything wrong - you might value them as a friend, or perhaps you're not feeling a romantic connection. It's important to be honest with yourself about your feelings.",
    advice: [
      "Honor your authentic feelings - it's okay not to be in love",
      "If you're in a relationship, consider whether it's fulfilling for both of you",
      "Don't pressure yourself to feel something you don't",
      "Reflect on what you truly want in a romantic partner",
      "Being honest with yourself and others is the kindest approach",
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
