export interface CrushQuestion {
  id: number
  text: string
  options: {
    text: string
    score: number // 0-4 points per answer
  }[]
}

export interface CrushQuizResult {
  level: string
  title: string
  emoji: string
  description: string
  advice: string[]
  color: string
}

export const crushQuestions: CrushQuestion[] = [
  {
    id: 1,
    text: "How often does your crush initiate conversations with you?",
    options: [
      { text: "They text or talk to me first almost every day", score: 4 },
      { text: "A few times a week - they reach out regularly", score: 3 },
      { text: "Occasionally - maybe once a week or less", score: 2 },
      { text: "Rarely - I'm usually the one starting conversations", score: 1 },
      { text: "Never - they don't initiate at all", score: 0 },
    ],
  },
  {
    id: 2,
    text: "How does your crush respond to your messages?",
    options: [
      { text: "Quickly with detailed, enthusiastic responses", score: 4 },
      { text: "Fairly quickly and keeps the conversation going", score: 3 },
      { text: "Eventually responds but keeps it brief", score: 2 },
      { text: "Takes a long time and gives short answers", score: 1 },
      { text: "Often leaves me on read or doesn't respond", score: 0 },
    ],
  },
  {
    id: 3,
    text: "Does your crush make an effort to spend time with you?",
    options: [
      { text: "Yes! They actively suggest plans and make time for me", score: 4 },
      { text: "They often say yes when I suggest hanging out", score: 3 },
      { text: "Sometimes, but they're often busy or cancel", score: 2 },
      { text: "Rarely - they usually have other plans", score: 1 },
      { text: "No, they seem to avoid one-on-one time", score: 0 },
    ],
  },
  {
    id: 4,
    text: "How does your crush act around you in person?",
    options: [
      { text: "Gives me full attention, maintains eye contact, leans in", score: 4 },
      { text: "Seems happy to see me and engages warmly", score: 3 },
      { text: "Friendly but not notably different from others", score: 2 },
      { text: "A bit distant or distracted", score: 1 },
      { text: "Seems uncomfortable or avoids interaction", score: 0 },
    ],
  },
  {
    id: 5,
    text: "Does your crush show physical signs of interest?",
    options: [
      { text: "Yes - playful touching, sitting close, 'accidental' contact", score: 4 },
      { text: "Some signs - occasional light touches or close proximity", score: 3 },
      { text: "Neutral - normal friendly physical boundaries", score: 2 },
      { text: "Minimal - keeps physical distance", score: 1 },
      { text: "Avoids physical contact completely", score: 0 },
    ],
  },
  {
    id: 6,
    text: "Does your crush remember details about your life?",
    options: [
      { text: "Yes! They remember small things I mentioned weeks ago", score: 4 },
      { text: "They remember important things and ask follow-up questions", score: 3 },
      { text: "They remember some things but not everything", score: 2 },
      { text: "They seem to forget most things I tell them", score: 1 },
      { text: "They don't seem to pay attention to what I share", score: 0 },
    ],
  },
  {
    id: 7,
    text: "How does your crush react when you mention other people you might be interested in?",
    options: [
      { text: "They seem jealous, uncomfortable, or change the subject quickly", score: 4 },
      { text: "They seem less enthusiastic or ask probing questions", score: 3 },
      { text: "Neutral reaction - they're supportive but not bothered", score: 2 },
      { text: "They actively encourage it or try to set me up", score: 1 },
      { text: "They don't seem to care at all", score: 0 },
    ],
  },
  {
    id: 8,
    text: "Do your crush's friends act differently around you?",
    options: [
      { text: "Yes - they tease, give knowing looks, or leave us alone together", score: 4 },
      { text: "They're extra friendly and seem to know about me", score: 3 },
      { text: "They're polite but nothing special", score: 2 },
      { text: "They barely acknowledge me", score: 1 },
      { text: "I haven't met their friends or they seem dismissive", score: 0 },
    ],
  },
  {
    id: 9,
    text: "Does your crush ask questions about your personal life?",
    options: [
      { text: "Constantly - they want to know everything about me", score: 4 },
      { text: "Often - they show genuine interest in my life", score: 3 },
      { text: "Sometimes - casual questions here and there", score: 2 },
      { text: "Rarely - conversations are mostly surface level", score: 1 },
      { text: "Never - they don't seem curious about me", score: 0 },
    ],
  },
  {
    id: 10,
    text: "How does your crush react when you share good news?",
    options: [
      { text: "Super excited and celebrates with me enthusiastically", score: 4 },
      { text: "Genuinely happy and supportive", score: 3 },
      { text: "Politely positive but not overly excited", score: 2 },
      { text: "Briefly acknowledges it", score: 1 },
      { text: "Doesn't seem interested or changes topic", score: 0 },
    ],
  },
  {
    id: 11,
    text: "Does your crush go out of their way to help you?",
    options: [
      { text: "Always - they jump at opportunities to assist me", score: 4 },
      { text: "Often - they're helpful when I need something", score: 3 },
      { text: "Sometimes - if it's convenient for them", score: 2 },
      { text: "Rarely - they usually have excuses", score: 1 },
      { text: "Never - they don't offer to help", score: 0 },
    ],
  },
  {
    id: 12,
    text: "Does your crush compliment you?",
    options: [
      { text: "Frequently - genuine compliments on personality and looks", score: 4 },
      { text: "Sometimes - they notice and comment positively", score: 3 },
      { text: "Occasionally - generic compliments", score: 2 },
      { text: "Rarely - very infrequent", score: 1 },
      { text: "Never - no compliments at all", score: 0 },
    ],
  },
  {
    id: 13,
    text: "Does your crush share personal things with you?",
    options: [
      { text: "Yes - deep thoughts, feelings, and secrets", score: 4 },
      { text: "Often - they open up about meaningful topics", score: 3 },
      { text: "Sometimes - but keeps it fairly surface level", score: 2 },
      { text: "Rarely - very guarded", score: 1 },
      { text: "Never - they keep everything private", score: 0 },
    ],
  },
  {
    id: 14,
    text: "How does your crush act on social media with you?",
    options: [
      { text: "Likes/comments frequently, tags me, views my stories first", score: 4 },
      { text: "Regular engagement - likes and occasional comments", score: 3 },
      { text: "Occasional likes but not much interaction", score: 2 },
      { text: "Barely interacts with my posts", score: 1 },
      { text: "Doesn't follow me or never engages", score: 0 },
    ],
  },
  {
    id: 15,
    text: "Does your crush show interest in your hobbies and interests?",
    options: [
      { text: "Very interested - asks questions and wants to try them with me", score: 4 },
      { text: "Shows curiosity and genuinely listens when I talk about them", score: 3 },
      { text: "Politely listens but doesn't engage deeply", score: 2 },
      { text: "Seems bored or disinterested", score: 1 },
      { text: "Changes subject when I talk about my interests", score: 0 },
    ],
  },
  {
    id: 16,
    text: "Has your crush hinted at or asked about your relationship status?",
    options: [
      { text: "Yes, multiple times - they clearly want to know if I'm available", score: 4 },
      { text: "Yes, they've asked casually or through hints", score: 3 },
      { text: "Maybe indirectly, but not directly", score: 2 },
      { text: "No, but they might already know", score: 1 },
      { text: "Never, and they talk about me dating others", score: 0 },
    ],
  },
  {
    id: 17,
    text: "How does your crush act when you're talking to other potential romantic interests?",
    options: [
      { text: "Noticeably bothered, tries to get my attention, or interrupts", score: 4 },
      { text: "Seems a bit uncomfortable or less talkative", score: 3 },
      { text: "Doesn't seem to notice or care much", score: 2 },
      { text: "Encourages me to pursue them", score: 1 },
      { text: "Actively tries to set me up with others", score: 0 },
    ],
  },
  {
    id: 18,
    text: "Does your crush make future plans that include you?",
    options: [
      { text: "Yes - mentions future events and assumes I'll be there", score: 4 },
      { text: "Sometimes - suggests doing things together in the future", score: 3 },
      { text: "Occasionally mentions future plans but vaguely", score: 2 },
      { text: "Rarely includes me in future thinking", score: 1 },
      { text: "Never - doesn't seem to think about a future with me", score: 0 },
    ],
  },
]

export const crushQuizResults: Record<string, CrushQuizResult> = {
  definitely_interested: {
    level: "definitely_interested",
    title: "They're Definitely Into You!",
    emoji: "🎉💕",
    description: "Great news! All the signs strongly suggest your crush likes you back. They're showing consistent interest through their actions, communication, and body language. The way they prioritize you, remember details about you, and make an effort to spend time together are classic signs of romantic interest.",
    advice: [
      "Consider letting them know you're interested - the feelings seem mutual!",
      "Look for opportunities to spend more one-on-one time together",
      "Pay attention to whether they're waiting for you to make the first move",
      "Be confident but genuine when expressing your feelings",
      "Don't overthink it - enjoy this exciting time!",
    ],
    color: "from-rose-500 to-pink-600",
  },
  very_likely: {
    level: "very_likely",
    title: "Strong Signs They Like You",
    emoji: "😊💗",
    description: "The signs are very positive! Your crush is showing many indicators of romantic interest. They're making an effort to connect with you, remember things about you, and spend time together. While they might be a bit shy or cautious, the interest appears genuine and mutual.",
    advice: [
      "The signals are promising - consider taking things a step further",
      "Create more opportunities for meaningful conversations",
      "Notice if they respond positively to light flirting",
      "Suggest hanging out one-on-one to gauge their interest",
      "Be patient if they're shy - keep showing you're interested",
    ],
    color: "from-pink-500 to-rose-500",
  },
  possibly_interested: {
    level: "possibly_interested",
    title: "They Might Be Interested",
    emoji: "🤔💓",
    description: "The signs are mixed but lean positive. Your crush shows some interest, but it's not entirely clear if it's romantic or friendly. They might be interested but cautious, unsure of your feelings, or still figuring out their own emotions. There's definitely potential here.",
    advice: [
      "Try spending more time together to clarify their feelings",
      "Watch for changes in their behavior when you're around",
      "Test the waters with subtle flirting to see how they respond",
      "Be yourself and let the connection develop naturally",
      "Don't rush - sometimes feelings take time to develop",
    ],
    color: "from-purple-500 to-pink-500",
  },
  unclear_signals: {
    level: "unclear_signals",
    title: "Unclear Signals",
    emoji: "💭🤷",
    description: "The signs are genuinely unclear. Your crush might be interested but very shy, they could see you only as a friend, or they might not have thought about you romantically yet. It's also possible they're sending mixed signals intentionally or unintentionally.",
    advice: [
      "Focus on building a stronger friendship first",
      "Pay attention to how they treat you vs. others",
      "Consider directly (but casually) expressing interest to get clarity",
      "Don't read too much into every interaction - stay grounded",
      "Be prepared for either outcome and protect your heart",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  probably_not: {
    level: "probably_not",
    title: "Likely Just Friends",
    emoji: "💙🤝",
    description: "Based on the signs, your crush is likely seeing you as a friend rather than a romantic interest. They might care about you, but the behaviors suggest friendship rather than romantic attraction. This doesn't mean feelings can't develop, but right now, the romantic interest doesn't appear mutual.",
    advice: [
      "Consider whether pursuing this is worth potential friendship complications",
      "If you do express interest, be prepared for a 'just friends' response",
      "Don't take it personally - attraction isn't a choice",
      "Focus on people who show clear interest in you",
      "Sometimes the best course is to cherish the friendship and move on romantically",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  not_interested: {
    level: "not_interested",
    title: "They're Not Showing Interest",
    emoji: "💔😔",
    description: "Unfortunately, the signs suggest your crush isn't romantically interested. They may be avoiding one-on-one time, giving short responses, or showing signs of disinterest. While this is hard to accept, recognizing it can help you move forward and find someone who reciprocates your feelings.",
    advice: [
      "Accept their lack of interest - you deserve someone who's enthusiastic about you",
      "Give yourself space from this person to heal and move on",
      "Don't try to convince them or change their mind",
      "Focus on your own growth and interests",
      "Remember: the right person will make their interest clear",
    ],
    color: "from-gray-500 to-slate-500",
  },
}

export function calculateCrushQuizResult(totalScore: number, maxScore: number): string {
  const percentage = (totalScore / maxScore) * 100

  if (percentage >= 75) {
    return "definitely_interested"
  } else if (percentage >= 60) {
    return "very_likely"
  } else if (percentage >= 45) {
    return "possibly_interested"
  } else if (percentage >= 30) {
    return "unclear_signals"
  } else if (percentage >= 15) {
    return "probably_not"
  } else {
    return "not_interested"
  }
}
