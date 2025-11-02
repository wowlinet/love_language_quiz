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
    text: "À quelle fréquence votre crush initie-t-il/elle des conversations avec vous ?",
    options: [
      { text: "Il/Elle m'envoie des messages ou me parle en premier presque tous les jours", score: 4 },
      { text: "Quelques fois par semaine - il/elle me contacte régulièrement", score: 3 },
      { text: "Occasionnellement - peut-être une fois par semaine ou moins", score: 2 },
      { text: "Rarement - c'est généralement moi qui commence les conversations", score: 1 },
      { text: "Jamais - il/elle n'initie pas du tout", score: 0 },
    ],
  },
  {
    id: 2,
    text: "Comment votre crush répond-il/elle à vos messages ?",
    options: [
      { text: "Rapidement avec des réponses détaillées et enthousiastes", score: 4 },
      { text: "Assez rapidement et maintient la conversation", score: 3 },
      { text: "Finit par répondre mais reste bref", score: 2 },
      { text: "Prend beaucoup de temps et donne des réponses courtes", score: 1 },
      { text: "Me laisse souvent en vu ou ne répond pas", score: 0 },
    ],
  },
  {
    id: 3,
    text: "Votre crush fait-il/elle un effort pour passer du temps avec vous ?",
    options: [
      { text: "Oui ! Il/Elle suggère activement des plans et prend du temps pour moi", score: 4 },
      { text: "Il/Elle dit souvent oui quand je suggère de sortir ensemble", score: 3 },
      { text: "Parfois, mais il/elle est souvent occupé(e) ou annule", score: 2 },
      { text: "Rarement - il/elle a généralement d'autres plans", score: 1 },
      { text: "Non, il/elle semble éviter le temps en tête-à-tête", score: 0 },
    ],
  },
  {
    id: 4,
    text: "Comment votre crush se comporte-t-il/elle en personne autour de vous ?",
    options: [
      { text: "Me donne toute son attention, maintient le contact visuel, se penche vers moi", score: 4 },
      { text: "Semble heureux(se) de me voir et s'engage chaleureusement", score: 3 },
      { text: "Amical mais pas particulièrement différent des autres", score: 2 },
      { text: "Un peu distant(e) ou distrait(e)", score: 1 },
      { text: "Semble mal à l'aise ou évite l'interaction", score: 0 },
    ],
  },
  {
    id: 5,
    text: "Votre crush montre-t-il/elle des signes physiques d'intérêt ?",
    options: [
      { text: "Oui - contact ludique, s'asseoir près, contact 'accidentel'", score: 4 },
      { text: "Quelques signes - contacts légers occasionnels ou proximité", score: 3 },
      { text: "Neutre - limites physiques amicales normales", score: 2 },
      { text: "Minimal - garde une distance physique", score: 1 },
      { text: "Évite complètement le contact physique", score: 0 },
    ],
  },
  {
    id: 6,
    text: "Votre crush se souvient-il/elle de détails sur votre vie ?",
    options: [
      { text: "Oui ! Il/Elle se souvient de petites choses que j'ai mentionnées il y a des semaines", score: 4 },
      { text: "Il/Elle se souvient de choses importantes et pose des questions de suivi", score: 3 },
      { text: "Il/Elle se souvient de certaines choses mais pas de tout", score: 2 },
      { text: "Il/Elle semble oublier la plupart des choses que je lui dis", score: 1 },
      { text: "Il/Elle ne semble pas prêter attention à ce que je partage", score: 0 },
    ],
  },
  {
    id: 7,
    text: "Comment votre crush réagit-il/elle quand vous mentionnez d'autres personnes qui pourraient vous intéresser ?",
    options: [
      { text: "Il/Elle semble jaloux(se), mal à l'aise ou change rapidement de sujet", score: 4 },
      { text: "Il/Elle semble moins enthousiaste ou pose des questions insistantes", score: 3 },
      { text: "Réaction neutre - il/elle est encourageant(e) mais pas dérangé(e)", score: 2 },
      { text: "Il/Elle l'encourage activement ou essaie de m'arranger avec quelqu'un", score: 1 },
      { text: "Il/Elle ne semble pas s'en soucier du tout", score: 0 },
    ],
  },
  {
    id: 8,
    text: "Les amis de votre crush agissent-ils différemment autour de vous ?",
    options: [
      { text: "Oui - ils taquinent, font des regards complices ou nous laissent seuls", score: 4 },
      { text: "Ils sont particulièrement amicaux et semblent me connaître", score: 3 },
      { text: "Ils sont polis mais rien de spécial", score: 2 },
      { text: "Ils me reconnaissent à peine", score: 1 },
      { text: "Je n'ai pas rencontré ses amis ou ils semblent dédaigneux", score: 0 },
    ],
  },
  {
    id: 9,
    text: "Votre crush pose-t-il/elle des questions sur votre vie personnelle ?",
    options: [
      { text: "Constamment - il/elle veut tout savoir sur moi", score: 4 },
      { text: "Souvent - il/elle montre un véritable intérêt pour ma vie", score: 3 },
      { text: "Parfois - questions occasionnelles ici et là", score: 2 },
      { text: "Rarement - les conversations sont surtout superficielles", score: 1 },
      { text: "Jamais - il/elle ne semble pas curieux(se) de moi", score: 0 },
    ],
  },
  {
    id: 10,
    text: "Comment votre crush réagit-il/elle quand vous partagez de bonnes nouvelles ?",
    options: [
      { text: "Super excité(e) et célèbre avec moi avec enthousiasme", score: 4 },
      { text: "Vraiment content(e) et encourageant(e)", score: 3 },
      { text: "Poliment positif mais pas excessivement excité(e)", score: 2 },
      { text: "Le reconnaît brièvement", score: 1 },
      { text: "Ne semble pas intéressé(e) ou change de sujet", score: 0 },
    ],
  },
  {
    id: 11,
    text: "Votre crush fait-il/elle des efforts pour vous aider ?",
    options: [
      { text: "Toujours - il/elle saisit les opportunités pour m'aider", score: 4 },
      { text: "Souvent - il/elle est serviable quand j'ai besoin de quelque chose", score: 3 },
      { text: "Parfois - si c'est pratique pour lui/elle", score: 2 },
      { text: "Rarement - il/elle a généralement des excuses", score: 1 },
      { text: "Jamais - il/elle ne propose pas d'aider", score: 0 },
    ],
  },
  {
    id: 12,
    text: "Votre crush vous fait-il/elle des compliments ?",
    options: [
      { text: "Fréquemment - compliments sincères sur la personnalité et l'apparence", score: 4 },
      { text: "Parfois - il/elle remarque et commente positivement", score: 3 },
      { text: "Occasionnellement - compliments génériques", score: 2 },
      { text: "Rarement - très peu fréquent", score: 1 },
      { text: "Jamais - aucun compliment du tout", score: 0 },
    ],
  },
  {
    id: 13,
    text: "Votre crush partage-t-il/elle des choses personnelles avec vous ?",
    options: [
      { text: "Oui - pensées profondes, sentiments et secrets", score: 4 },
      { text: "Souvent - il/elle s'ouvre sur des sujets significatifs", score: 3 },
      { text: "Parfois - mais reste assez superficiel", score: 2 },
      { text: "Rarement - très réservé(e)", score: 1 },
      { text: "Jamais - il/elle garde tout privé", score: 0 },
    ],
  },
  {
    id: 14,
    text: "Comment votre crush agit-il/elle sur les réseaux sociaux avec vous ?",
    options: [
      { text: "Aime/commente fréquemment, me tague, voit mes stories en premier", score: 4 },
      { text: "Engagement régulier - aime et commentaires occasionnels", score: 3 },
      { text: "Aime occasionnels mais pas beaucoup d'interaction", score: 2 },
      { text: "Interagit à peine avec mes publications", score: 1 },
      { text: "Ne me suit pas ou n'engage jamais", score: 0 },
    ],
  },
  {
    id: 15,
    text: "Votre crush montre-t-il/elle de l'intérêt pour vos loisirs et centres d'intérêt ?",
    options: [
      { text: "Très intéressé(e) - pose des questions et veut les essayer avec moi", score: 4 },
      { text: "Montre de la curiosité et écoute vraiment quand j'en parle", score: 3 },
      { text: "Écoute poliment mais ne s'engage pas profondément", score: 2 },
      { text: "Semble ennuyé(e) ou désintéressé(e)", score: 1 },
      { text: "Change de sujet quand je parle de mes intérêts", score: 0 },
    ],
  },
  {
    id: 16,
    text: "Votre crush a-t-il/elle fait allusion ou demandé votre statut relationnel ?",
    options: [
      { text: "Oui, plusieurs fois - il/elle veut clairement savoir si je suis disponible", score: 4 },
      { text: "Oui, il/elle a demandé de manière décontractée ou par allusions", score: 3 },
      { text: "Peut-être indirectement, mais pas directement", score: 2 },
      { text: "Non, mais il/elle le sait peut-être déjà", score: 1 },
      { text: "Jamais, et il/elle parle de moi sortant avec d'autres", score: 0 },
    ],
  },
  {
    id: 17,
    text: "Comment votre crush agit-il/elle quand vous parlez à d'autres intérêts romantiques potentiels ?",
    options: [
      { text: "Visiblement dérangé(e), essaie d'attirer mon attention ou interrompt", score: 4 },
      { text: "Semble un peu mal à l'aise ou moins bavard(e)", score: 3 },
      { text: "Ne semble pas remarquer ou s'en soucier beaucoup", score: 2 },
      { text: "M'encourage à les poursuivre", score: 1 },
      { text: "Essaie activement de m'arranger avec d'autres", score: 0 },
    ],
  },
  {
    id: 18,
    text: "Votre crush fait-il/elle des plans futurs qui vous incluent ?",
    options: [
      { text: "Oui - mentionne des événements futurs et suppose que je serai là", score: 4 },
      { text: "Parfois - suggère de faire des choses ensemble dans le futur", score: 3 },
      { text: "Mentionne occasionnellement des plans futurs mais vaguement", score: 2 },
      { text: "M'inclut rarement dans la pensée future", score: 1 },
      { text: "Jamais - ne semble pas penser à un avenir avec moi", score: 0 },
    ],
  },
]

export const crushQuizResults: Record<string, CrushQuizResult> = {
  definitely_interested: {
    level: "definitely_interested",
    title: "Il/Elle est définitivement intéressé(e) par vous !",
    emoji: "🎉💕",
    description: "Excellentes nouvelles ! Tous les signes suggèrent fortement que votre crush vous aime en retour. Il/Elle montre un intérêt constant à travers ses actions, sa communication et son langage corporel. La façon dont il/elle vous donne la priorité, se souvient des détails vous concernant et fait des efforts pour passer du temps ensemble sont des signes classiques d'intérêt romantique.",
    advice: [
      "Envisagez de leur faire savoir que vous êtes intéressé(e) - les sentiments semblent mutuels !",
      "Cherchez des opportunités de passer plus de temps en tête-à-tête",
      "Faites attention à s'il/elle attend que vous fassiez le premier pas",
      "Soyez confiant(e) mais authentique en exprimant vos sentiments",
      "Ne réfléchissez pas trop - profitez de ce moment passionnant !",
    ],
    color: "from-rose-500 to-pink-600",
  },
  very_likely: {
    level: "very_likely",
    title: "Signes forts qu'il/elle vous aime",
    emoji: "😊💗",
    description: "Les signes sont très positifs ! Votre crush montre de nombreux indicateurs d'intérêt romantique. Il/Elle fait des efforts pour se connecter avec vous, se souvenir de choses vous concernant et passer du temps ensemble. Bien qu'il/elle puisse être un peu timide ou prudent(e), l'intérêt semble authentique et mutuel.",
    advice: [
      "Les signaux sont prometteurs - envisagez d'aller plus loin",
      "Créez plus d'opportunités pour des conversations significatives",
      "Remarquez s'il/elle répond positivement à un flirt léger",
      "Suggérez de sortir en tête-à-tête pour évaluer son intérêt",
      "Soyez patient(e) s'il/elle est timide - continuez à montrer que vous êtes intéressé(e)",
    ],
    color: "from-pink-500 to-rose-500",
  },
  possibly_interested: {
    level: "possibly_interested",
    title: "Il/Elle pourrait être intéressé(e)",
    emoji: "🤔💓",
    description: "Les signes sont mitigés mais penchent vers le positif. Votre crush montre un certain intérêt, mais ce n'est pas entièrement clair s'il est romantique ou amical. Il/Elle pourrait être intéressé(e) mais prudent(e), incertain(e) de vos sentiments, ou encore en train de comprendre ses propres émotions. Il y a définitivement du potentiel ici.",
    advice: [
      "Essayez de passer plus de temps ensemble pour clarifier ses sentiments",
      "Observez les changements dans son comportement quand vous êtes là",
      "Testez les eaux avec un flirt subtil pour voir comment il/elle réagit",
      "Soyez vous-même et laissez la connexion se développer naturellement",
      "Ne vous précipitez pas - parfois les sentiments prennent du temps à se développer",
    ],
    color: "from-purple-500 to-pink-500",
  },
  unclear_signals: {
    level: "unclear_signals",
    title: "Signaux peu clairs",
    emoji: "💭🤷",
    description: "Les signes sont vraiment peu clairs. Votre crush pourrait être intéressé(e) mais très timide, il/elle pourrait vous voir seulement comme un(e) ami(e), ou il/elle n'a peut-être pas encore pensé à vous romantiquement. Il est aussi possible qu'il/elle envoie des signaux mixtes intentionnellement ou non.",
    advice: [
      "Concentrez-vous d'abord sur la construction d'une amitié plus forte",
      "Faites attention à la façon dont il/elle vous traite par rapport aux autres",
      "Envisagez d'exprimer directement (mais de manière décontractée) votre intérêt pour obtenir de la clarté",
      "Ne lisez pas trop dans chaque interaction - restez ancré(e)",
      "Soyez préparé(e) pour les deux résultats et protégez votre cœur",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  probably_not: {
    level: "probably_not",
    title: "Probablement juste des amis",
    emoji: "💙🤝",
    description: "D'après les signes, votre crush vous voit probablement comme un(e) ami(e) plutôt qu'un intérêt romantique. Il/Elle peut se soucier de vous, mais les comportements suggèrent l'amitié plutôt que l'attirance romantique. Cela ne signifie pas que les sentiments ne peuvent pas se développer, mais pour l'instant, l'intérêt romantique ne semble pas mutuel.",
    advice: [
      "Considérez si poursuivre cela vaut les complications potentielles de l'amitié",
      "Si vous exprimez votre intérêt, soyez préparé(e) à une réponse 'juste amis'",
      "Ne le prenez pas personnellement - l'attirance n'est pas un choix",
      "Concentrez-vous sur les personnes qui montrent un intérêt clair pour vous",
      "Parfois le meilleur choix est de chérir l'amitié et d'avancer romantiquement",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  not_interested: {
    level: "not_interested",
    title: "Il/Elle ne montre pas d'intérêt",
    emoji: "💔😔",
    description: "Malheureusement, les signes suggèrent que votre crush n'est pas intéressé(e) romantiquement. Il/Elle évite peut-être le temps en tête-à-tête, donne des réponses courtes ou montre des signes de désintérêt. Bien que cela soit difficile à accepter, le reconnaître peut vous aider à avancer et à trouver quelqu'un qui réciproque vos sentiments.",
    advice: [
      "Acceptez son manque d'intérêt - vous méritez quelqu'un qui est enthousiaste à votre sujet",
      "Donnez-vous de l'espace par rapport à cette personne pour guérir et avancer",
      "N'essayez pas de les convaincre ou de changer leur avis",
      "Concentrez-vous sur votre propre croissance et vos intérêts",
      "Rappelez-vous : la bonne personne rendra son intérêt clair",
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
