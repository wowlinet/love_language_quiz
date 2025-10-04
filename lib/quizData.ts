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
    text: "I feel most loved when my partner...",
    options: [
      { text: "Tells me they love me and appreciate me", language: "Words of Affirmation" },
      { text: "Spends quality time with me without distractions", language: "Quality Time" },
      { text: "Gives me thoughtful gifts", language: "Receiving Gifts" },
      { text: "Does things to help me out", language: "Acts of Service" },
      { text: "Holds my hand or hugs me", language: "Physical Touch" },
    ],
  },
  {
    id: 2,
    text: "What hurts me most is when my partner...",
    options: [
      { text: "Criticizes or doesn't acknowledge my efforts", language: "Words of Affirmation" },
      { text: "Is distracted or doesn't give me their full attention", language: "Quality Time" },
      { text: "Forgets special occasions or doesn't bring me gifts", language: "Receiving Gifts" },
      { text: "Doesn't help me when I need it", language: "Acts of Service" },
      { text: "Is physically distant or doesn't show affection", language: "Physical Touch" },
    ],
  },
  {
    id: 3,
    text: "I show love to others by...",
    options: [
      { text: "Telling them how much they mean to me", language: "Words of Affirmation" },
      { text: "Spending quality time together", language: "Quality Time" },
      { text: "Giving them meaningful presents", language: "Receiving Gifts" },
      { text: "Doing helpful things for them", language: "Acts of Service" },
      { text: "Giving hugs, kisses, and physical affection", language: "Physical Touch" },
    ],
  },
  {
    id: 4,
    text: "What makes me feel most appreciated is...",
    options: [
      { text: "Receiving compliments and words of encouragement", language: "Words of Affirmation" },
      { text: "Having uninterrupted time together", language: "Quality Time" },
      { text: "Receiving a surprise gift or token of love", language: "Receiving Gifts" },
      { text: "When someone does a task to lighten my load", language: "Acts of Service" },
      { text: "A warm embrace or holding hands", language: "Physical Touch" },
    ],
  },
  {
    id: 5,
    text: "If I could choose, I would prefer my partner to...",
    options: [
      { text: "Say 'I love you' and express their feelings often", language: "Words of Affirmation" },
      { text: "Plan a special date night with just the two of us", language: "Quality Time" },
      { text: "Surprise me with a thoughtful gift", language: "Receiving Gifts" },
      { text: "Help me with household chores", language: "Acts of Service" },
      { text: "Cuddle with me on the couch", language: "Physical Touch" },
    ],
  },
  {
    id: 6,
    text: "I feel disconnected from my partner when...",
    options: [
      { text: "They don't verbally express their love", language: "Words of Affirmation" },
      { text: "We don't spend enough quality time together", language: "Quality Time" },
      { text: "They forget important dates or don't give gifts", language: "Receiving Gifts" },
      { text: "They don't help me when I'm overwhelmed", language: "Acts of Service" },
      { text: "There's not enough physical affection", language: "Physical Touch" },
    ],
  },
  {
    id: 7,
    text: "The best gift someone could give me is...",
    options: [
      { text: "A heartfelt letter expressing their feelings", language: "Words of Affirmation" },
      { text: "Their undivided attention for an afternoon", language: "Quality Time" },
      { text: "Something I've been wanting for a while", language: "Receiving Gifts" },
      { text: "Help with a project I've been working on", language: "Acts of Service" },
      { text: "A long, warm hug", language: "Physical Touch" },
    ],
  },
  {
    id: 8,
    text: "I know my partner loves me when...",
    options: [
      { text: "They tell me I'm important to them", language: "Words of Affirmation" },
      { text: "They make time for activities we both enjoy", language: "Quality Time" },
      { text: "They remember what I like and surprise me with it", language: "Receiving Gifts" },
      { text: "They do things to make my life easier", language: "Acts of Service" },
      { text: "They reach out to touch me throughout the day", language: "Physical Touch" },
    ],
  },
  {
    id: 9,
    text: "My ideal evening with my partner would be...",
    options: [
      { text: "Having a deep conversation where we share our thoughts", language: "Words of Affirmation" },
      { text: "Doing something fun together with no interruptions", language: "Quality Time" },
      { text: "Exchanging small, thoughtful presents", language: "Receiving Gifts" },
      { text: "Working together on a home project", language: "Acts of Service" },
      { text: "Cuddling while watching a movie", language: "Physical Touch" },
    ],
  },
  {
    id: 10,
    text: "What I value most in a relationship is...",
    options: [
      { text: "Open communication and verbal appreciation", language: "Words of Affirmation" },
      { text: "Quality time and undivided attention", language: "Quality Time" },
      { text: "Thoughtfulness shown through gifts", language: "Receiving Gifts" },
      { text: "Actions that show care and support", language: "Acts of Service" },
      { text: "Physical closeness and affection", language: "Physical Touch" },
    ],
  },
]

export const loveLanguageDescriptions: Record<string, { title: string; description: string; tips: string[] }> = {
  "Words of Affirmation": {
    title: "Words of Affirmation",
    description: "You feel most loved when your partner expresses their feelings verbally. Compliments, words of appreciation, and verbal encouragement mean the world to you. You thrive on hearing 'I love you' and other affirming words.",
    tips: [
      "Express your feelings regularly through words",
      "Write love notes or send sweet text messages",
      "Give genuine compliments often",
      "Verbally acknowledge your partner's efforts",
      "Say 'I love you' frequently and meaningfully",
    ],
  },
  "Quality Time": {
    title: "Quality Time",
    description: "You feel most loved when your partner gives you their undivided attention. Being together, sharing experiences, and having meaningful conversations are what matter most to you. Distractions during your time together can feel hurtful.",
    tips: [
      "Put away phones and devices during conversations",
      "Plan regular date nights or activities together",
      "Take walks and talk about your day",
      "Make eye contact during conversations",
      "Create traditions and rituals you can share",
    ],
  },
  "Receiving Gifts": {
    title: "Receiving Gifts",
    description: "You feel most loved when your partner gives you thoughtful gifts. It's not about materialism—it's about the thought, effort, and symbolism behind the gift. These tangible symbols of love are deeply meaningful to you.",
    tips: [
      "Remember important dates and occasions",
      "Give thoughtful gifts that show you were listening",
      "The gift doesn't need to be expensive—it's the thought that counts",
      "Keep small tokens or mementos from your relationship",
      "Surprise your partner with unexpected presents",
    ],
  },
  "Acts of Service": {
    title: "Acts of Service",
    description: "You feel most loved when your partner does helpful things for you. Actions speak louder than words—cooking a meal, running an errand, or helping with tasks shows you that you're cared for and supported.",
    tips: [
      "Help with household chores without being asked",
      "Run errands or do tasks to lighten their load",
      "Fix something that's been broken",
      "Make their favorite meal",
      "Take care of responsibilities when they're tired or busy",
    ],
  },
  "Physical Touch": {
    title: "Physical Touch",
    description: "You feel most loved through physical affection and closeness. Hugs, kisses, holding hands, and other forms of physical touch make you feel connected and loved. Physical distance or lack of affection can feel like emotional distance.",
    tips: [
      "Hold hands when walking together",
      "Give hugs and kisses regularly",
      "Sit close to each other",
      "Offer back rubs or massages",
      "Physical presence during difficult times is especially important",
    ],
  },
}
