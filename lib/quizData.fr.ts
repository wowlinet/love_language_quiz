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
    text: "Je me sens le plus aimé(e) quand mon partenaire...",
    options: [
      { text: "Me dit qu'il/elle m'aime et m'apprécie", language: "Paroles valorisantes" },
      { text: "Passe du temps de qualité avec moi sans distractions", language: "Moments de qualité" },
      { text: "Me fait des cadeaux réfléchis", language: "Recevoir des cadeaux" },
      { text: "Fait des choses pour m'aider", language: "Services rendus" },
      { text: "Me tient la main ou me prend dans ses bras", language: "Toucher physique" },
    ],
  },
  {
    id: 2,
    text: "Ce qui me blesse le plus, c'est quand mon partenaire...",
    options: [
      { text: "Me critique ou ne reconnaît pas mes efforts", language: "Paroles valorisantes" },
      { text: "Est distrait(e) ou ne me donne pas toute son attention", language: "Moments de qualité" },
      { text: "Oublie les occasions spéciales ou ne m'offre pas de cadeaux", language: "Recevoir des cadeaux" },
      { text: "Ne m'aide pas quand j'en ai besoin", language: "Services rendus" },
      { text: "Est physiquement distant(e) ou ne montre pas d'affection", language: "Toucher physique" },
    ],
  },
  {
    id: 3,
    text: "Je montre mon amour aux autres en...",
    options: [
      { text: "Leur disant combien ils comptent pour moi", language: "Paroles valorisantes" },
      { text: "Passant du temps de qualité ensemble", language: "Moments de qualité" },
      { text: "Leur offrant des cadeaux significatifs", language: "Recevoir des cadeaux" },
      { text: "Faisant des choses utiles pour eux", language: "Services rendus" },
      { text: "Donnant des câlins, des baisers et de l'affection physique", language: "Toucher physique" },
    ],
  },
  {
    id: 4,
    text: "Ce qui me fait me sentir le plus apprécié(e) est...",
    options: [
      { text: "Recevoir des compliments et des mots d'encouragement", language: "Paroles valorisantes" },
      { text: "Avoir du temps ininterrompu ensemble", language: "Moments de qualité" },
      { text: "Recevoir un cadeau surprise ou un symbole d'amour", language: "Recevoir des cadeaux" },
      { text: "Quand quelqu'un accomplit une tâche pour alléger ma charge", language: "Services rendus" },
      { text: "Une étreinte chaleureuse ou se tenir la main", language: "Toucher physique" },
    ],
  },
  {
    id: 5,
    text: "Si je pouvais choisir, je préférerais que mon partenaire...",
    options: [
      { text: "Dise 'Je t'aime' et exprime souvent ses sentiments", language: "Paroles valorisantes" },
      { text: "Planifie une soirée spéciale juste pour nous deux", language: "Moments de qualité" },
      { text: "Me surprenne avec un cadeau réfléchi", language: "Recevoir des cadeaux" },
      { text: "M'aide avec les tâches ménagères", language: "Services rendus" },
      { text: "Se blottisse contre moi sur le canapé", language: "Toucher physique" },
    ],
  },
  {
    id: 6,
    text: "Je me sens déconnecté(e) de mon partenaire quand...",
    options: [
      { text: "Il/elle n'exprime pas verbalement son amour", language: "Paroles valorisantes" },
      { text: "Nous ne passons pas assez de temps de qualité ensemble", language: "Moments de qualité" },
      { text: "Il/elle oublie les dates importantes ou n'offre pas de cadeaux", language: "Recevoir des cadeaux" },
      { text: "Il/elle ne m'aide pas quand je suis dépassé(e)", language: "Services rendus" },
      { text: "Il n'y a pas assez d'affection physique", language: "Toucher physique" },
    ],
  },
  {
    id: 7,
    text: "Le meilleur cadeau que quelqu'un pourrait me faire est...",
    options: [
      { text: "Une lettre sincère exprimant ses sentiments", language: "Paroles valorisantes" },
      { text: "Son attention ininterrompue pour un après-midi", language: "Moments de qualité" },
      { text: "Quelque chose que je voulais depuis longtemps", language: "Recevoir des cadeaux" },
      { text: "De l'aide pour un projet sur lequel je travaille", language: "Services rendus" },
      { text: "Un long câlin chaleureux", language: "Toucher physique" },
    ],
  },
  {
    id: 8,
    text: "Je sais que mon partenaire m'aime quand...",
    options: [
      { text: "Il/elle me dit que je suis important(e) pour lui/elle", language: "Paroles valorisantes" },
      { text: "Il/elle fait du temps pour les activités que nous aimons tous les deux", language: "Moments de qualité" },
      { text: "Il/elle se souvient de ce que j'aime et me surprend avec", language: "Recevoir des cadeaux" },
      { text: "Il/elle fait des choses pour faciliter ma vie", language: "Services rendus" },
      { text: "Il/elle me touche tout au long de la journée", language: "Toucher physique" },
    ],
  },
  {
    id: 9,
    text: "Ma soirée idéale avec mon partenaire serait...",
    options: [
      { text: "Avoir une conversation profonde où nous partageons nos pensées", language: "Paroles valorisantes" },
      { text: "Faire quelque chose d'amusant ensemble sans interruptions", language: "Moments de qualité" },
      { text: "Échanger de petits cadeaux réfléchis", language: "Recevoir des cadeaux" },
      { text: "Travailler ensemble sur un projet domestique", language: "Services rendus" },
      { text: "Se blottir en regardant un film", language: "Toucher physique" },
    ],
  },
  {
    id: 10,
    text: "Ce que je valorise le plus dans une relation est...",
    options: [
      { text: "Une communication ouverte et de l'appréciation verbale", language: "Paroles valorisantes" },
      { text: "Du temps de qualité et une attention ininterrompue", language: "Moments de qualité" },
      { text: "De la prévenance montrée à travers des cadeaux", language: "Recevoir des cadeaux" },
      { text: "Des actions qui montrent de l'attention et du soutien", language: "Services rendus" },
      { text: "De la proximité physique et de l'affection", language: "Toucher physique" },
    ],
  },
]

export const loveLanguageDescriptions: Record<string, { title: string; description: string; tips: string[] }> = {
  "Paroles valorisantes": {
    title: "Paroles valorisantes",
    description: "Vous vous sentez le plus aimé(e) lorsque votre partenaire exprime ses sentiments verbalement. Les compliments, les mots d'appréciation et l'encouragement verbal signifient tout pour vous. Vous vous épanouissez en entendant 'Je t'aime' et d'autres mots affirmants.",
    tips: [
      "Exprimez vos sentiments régulièrement par des mots",
      "Écrivez des lettres d'amour ou envoyez des messages doux",
      "Faites des compliments sincères souvent",
      "Reconnaissez verbalement les efforts de votre partenaire",
      "Dites 'Je t'aime' fréquemment et avec sens",
    ],
  },
  "Moments de qualité": {
    title: "Moments de qualité",
    description: "Vous vous sentez le plus aimé(e) lorsque votre partenaire vous donne toute son attention. Être ensemble, partager des expériences et avoir des conversations significatives sont ce qui compte le plus pour vous. Les distractions pendant votre temps ensemble peuvent être blessantes.",
    tips: [
      "Rangez les téléphones et appareils pendant les conversations",
      "Planifiez régulièrement des soirées ou activités ensemble",
      "Faites des promenades et parlez de votre journée",
      "Maintenez le contact visuel pendant les conversations",
      "Créez des traditions et rituels que vous pouvez partager",
    ],
  },
  "Recevoir des cadeaux": {
    title: "Recevoir des cadeaux",
    description: "Vous vous sentez le plus aimé(e) lorsque votre partenaire vous fait des cadeaux réfléchis. Il ne s'agit pas de matérialisme – il s'agit de la pensée, de l'effort et du symbolisme derrière le cadeau. Ces symboles tangibles d'amour sont profondément significatifs pour vous.",
    tips: [
      "Souvenez-vous des dates et occasions importantes",
      "Offrez des cadeaux réfléchis qui montrent que vous avez écouté",
      "Le cadeau n'a pas besoin d'être cher – c'est l'attention qui compte",
      "Conservez de petits symboles ou souvenirs de votre relation",
      "Surprenez votre partenaire avec des cadeaux inattendus",
    ],
  },
  "Services rendus": {
    title: "Services rendus",
    description: "Vous vous sentez le plus aimé(e) lorsque votre partenaire fait des choses utiles pour vous. Les actions parlent plus fort que les mots – préparer un repas, faire une course ou aider avec des tâches vous montre que vous êtes pris(e) en charge et soutenu(e).",
    tips: [
      "Aidez avec les tâches ménagères sans qu'on vous le demande",
      "Faites des courses ou des tâches pour alléger leur charge",
      "Réparez quelque chose qui était cassé",
      "Préparez leur repas préféré",
      "Prenez en charge des responsabilités quand ils sont fatigués ou occupés",
    ],
  },
  "Toucher physique": {
    title: "Toucher physique",
    description: "Vous vous sentez le plus aimé(e) par l'affection physique et la proximité. Les câlins, les baisers, se tenir la main et d'autres formes de toucher physique vous font sentir connecté(e) et aimé(e). La distance physique ou le manque d'affection peut sembler être une distance émotionnelle.",
    tips: [
      "Tenez-vous la main en marchant ensemble",
      "Donnez des câlins et des baisers régulièrement",
      "Asseyez-vous près l'un de l'autre",
      "Offrez des massages du dos ou des massages",
      "La présence physique pendant les moments difficiles est particulièrement importante",
    ],
  },
}
