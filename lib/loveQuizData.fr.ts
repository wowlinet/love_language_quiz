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
    text: "Quand vous pensez à cette personne, comment vous sentez-vous ?",
    options: [
      { text: "Mon cœur s'emballe et j'ai des papillons dans le ventre", score: 4 },
      { text: "Je me sens chaleureux, heureux et content", score: 3 },
      { text: "Je me sens à l'aise et détendu", score: 2 },
      { text: "Je ne pense pas souvent à elle/lui", score: 1 },
      { text: "Je me sens indifférent ou confus", score: 0 },
    ],
  },
  {
    id: 2,
    text: "À quel point son bonheur est-il important pour vous ?",
    options: [
      { text: "Son bonheur est aussi important que le mien", score: 4 },
      { text: "Très important - je veux qu'elle/il soit heureux(se)", score: 3 },
      { text: "Assez important, comme n'importe quel ami", score: 2 },
      { text: "Ça m'importe, mais ce n'est pas une priorité", score: 1 },
      { text: "Je n'y ai pas vraiment pensé", score: 0 },
    ],
  },
  {
    id: 3,
    text: "Imaginez-vous un avenir avec cette personne ?",
    options: [
      { text: "Oui, constamment - elle/il est dans tous mes projets d'avenir", score: 4 },
      { text: "Souvent - je la/le vois comme faisant partie de mon avenir", score: 3 },
      { text: "Parfois - mais ce n'est pas encore clair", score: 2 },
      { text: "Rarement - je me concentre sur le présent", score: 1 },
      { text: "Non - je ne la/le vois pas dans mon avenir", score: 0 },
    ],
  },
  {
    id: 4,
    text: "Comment vous sentez-vous quand vous êtes séparés ?",
    options: [
      { text: "Elle/Il me manque intensément et je compte les minutes jusqu'à ce qu'on se retrouve", score: 4 },
      { text: "Elle/Il me manque et j'ai hâte de la/le revoir", score: 3 },
      { text: "Ça va mais je suis content(e) quand on se retrouve", score: 2 },
      { text: "Je ne le remarque à peine - je suis occupé(e) avec ma propre vie", score: 1 },
      { text: "Je me sens soulagé(e) ou je n'y pense pas", score: 0 },
    ],
  },
  {
    id: 5,
    text: "Seriez-vous prêt(e) à faire des sacrifices pour elle/lui ?",
    options: [
      { text: "Oui, je sacrifierais presque tout pour son bien-être", score: 4 },
      { text: "Oui, je ferais des sacrifices raisonnables", score: 3 },
      { text: "Peut-être, selon ce que c'est", score: 2 },
      { text: "Probablement pas - je me donne la priorité", score: 1 },
      { text: "Non - je ne vois pas pourquoi je devrais", score: 0 },
    ],
  },
  {
    id: 6,
    text: "Comment réagissez-vous quand elle/il partage de bonnes nouvelles ?",
    options: [
      { text: "Je suis vraiment ravi(e) et je célèbre avec elle/lui", score: 4 },
      { text: "Je suis heureux(se) pour elle/lui et montre mon soutien", score: 3 },
      { text: "Je suis content(e) mais pas excessivement excité(e)", score: 2 },
      { text: "Je reconnais mais ne ressens pas grand-chose", score: 1 },
      { text: "Je me sens neutre ou même jaloux(se)", score: 0 },
    ],
  },
  {
    id: 7,
    text: "Acceptez-vous ses défauts et imperfections ?",
    options: [
      { text: "Oui, ses défauts la/le rendent plus attachant(e) à mes yeux", score: 4 },
      { text: "Oui, je l'accepte tel(le) qu'elle/il est", score: 3 },
      { text: "La plupart, mais certains me dérangent", score: 2 },
      { text: "Certains défauts sont difficiles à accepter", score: 1 },
      { text: "Non, ses défauts me frustrent considérablement", score: 0 },
    ],
  },
  {
    id: 8,
    text: "À quel point êtes-vous physiquement attiré(e) par elle/lui ?",
    options: [
      { text: "Extrêmement - elle/il est la personne la plus attirante pour moi", score: 4 },
      { text: "Très attiré(e) - j'aime être physiquement proche", score: 3 },
      { text: "Modérément attiré(e)", score: 2 },
      { text: "Légèrement attiré(e) ou ça varie", score: 1 },
      { text: "Pas vraiment attiré(e) physiquement", score: 0 },
    ],
  },
  {
    id: 9,
    text: "Voulez-vous partager vos pensées et sentiments les plus profonds avec elle/lui ?",
    options: [
      { text: "Oui, elle/il est la première personne à qui je veux tout raconter", score: 4 },
      { text: "Oui, je me sens à l'aise de m'ouvrir à elle/lui", score: 3 },
      { text: "Parfois, mais je suis sélectif(ve) sur ce que je partage", score: 2 },
      { text: "Rarement - je préfère garder les choses privées", score: 1 },
      { text: "Non - je ne ressens pas cette connexion", score: 0 },
    ],
  },
  {
    id: 10,
    text: "À quel point êtes-vous jaloux(se) quand elle/il passe du temps avec d'autres ?",
    options: [
      { text: "Assez jaloux(se) - j'aimerais pouvoir être avec elle/lui toujours", score: 4 },
      { text: "Un peu jaloux(se) mais je lui fais confiance", score: 3 },
      { text: "Jalousie minimale - tout le monde a besoin de son propre temps", score: 2 },
      { text: "Pas jaloux(se) du tout", score: 1 },
      { text: "Je me fiche de qui elle/il passe du temps avec", score: 0 },
    ],
  },
  {
    id: 11,
    text: "Priorisez-vous ses besoins au-dessus des vôtres ?",
    options: [
      { text: "Souvent - ses besoins semblent aussi importants que les miens", score: 4 },
      { text: "Parfois - j'essaie d'équilibrer nos deux besoins", score: 3 },
      { text: "Occasionnellement, mais je me donne la priorité surtout", score: 2 },
      { text: "Rarement - je me concentre d'abord sur mes propres besoins", score: 1 },
      { text: "Jamais - je me mets toujours en premier", score: 0 },
    ],
  },
  {
    id: 12,
    text: "Comment vous sentez-vous à propos de l'intimité physique avec elle/lui ?",
    options: [
      { text: "J'en ai envie et c'est profondément significatif", score: 4 },
      { text: "J'apprécie et ça renforce notre lien", score: 3 },
      { text: "C'est agréable mais pas essentiel", score: 2 },
      { text: "Je suis indifférent(e) ou incertain(e) à ce sujet", score: 1 },
      { text: "Je ne désire pas d'intimité physique avec elle/lui", score: 0 },
    ],
  },
  {
    id: 13,
    text: "Pouvez-vous être votre vrai moi en sa présence ?",
    options: [
      { text: "Complètement - je ne me suis jamais senti(e) plus moi-même avec quelqu'un", score: 4 },
      { text: "Oui - je me sens à l'aise d'être authentique avec elle/lui", score: 3 },
      { text: "Surtout, mais je cache certaines parties de moi", score: 2 },
      { text: "Pas vraiment - j'ai l'impression de devoir faire semblant", score: 1 },
      { text: "Non - je ne peux pas être moi-même en sa présence", score: 0 },
    ],
  },
  {
    id: 14,
    text: "Comment vous sentez-vous en passant du temps avec elle/lui ?",
    options: [
      { text: "Énergisé(e), vivant(e) et complètement comblé(e)", score: 4 },
      { text: "Heureux(se) et content(e) - le temps passe vite", score: 3 },
      { text: "Agréable et plaisant", score: 2 },
      { text: "C'est correct, rien de spécial", score: 1 },
      { text: "Épuisant ou inconfortable", score: 0 },
    ],
  },
  {
    id: 15,
    text: "Si elle/il n'était plus dans votre vie, comment vous sentiriez-vous ?",
    options: [
      { text: "Dévasté(e) - je ne peux pas imaginer la vie sans elle/lui", score: 4 },
      { text: "Très triste et profondément affecté(e)", score: 3 },
      { text: "Triste mais je finirais par passer à autre chose", score: 2 },
      { text: "Un peu triste mais pas dramatiquement affecté(e)", score: 1 },
      { text: "Pas particulièrement affecté(e)", score: 0 },
    ],
  },
]

export const loveQuizResults: Record<string, LoveQuizResult> = {
  deeply_in_love: {
    level: "deeply_in_love",
    title: "💕 Profondément amoureux(se)",
    description: "Tous les signes indiquent oui - vous êtes vraiment amoureux(se) ! Vos sentiments montrent une forte connexion émotionnelle, un soin profond pour son bien-être et un désir d'un avenir partagé. Vous ressentez les signes classiques d'être amoureux : des papillons, des pensées constantes à son sujet et le sentiment d'être vous-même quand vous êtes ensemble.",
    advice: [
      "Communiquez ouvertement vos sentiments quand vous êtes tous les deux prêts",
      "Continuez à nourrir l'intimité émotionnelle que vous avez construite",
      "Ne vous perdez pas - maintenez votre identité et vos intérêts individuels",
      "Construisez la confiance par la cohérence et l'honnêteté",
      "Profitez de ce moment spécial mais laissez la relation se développer naturellement",
    ],
    color: "from-rose-500 to-pink-600",
  },
  strongly_attracted: {
    level: "strongly_attracted",
    title: "💗 Fortement attiré(e) & connecté(e)",
    description: "Vous avez de forts sentiments qui pourraient définitivement être de l'amour ou se développer en amour. Vous tenez profondément à cette personne, appréciez sa compagnie et pouvez voir un avenir potentiel ensemble. Que ce soit un amour naissant ou en développement, votre connexion est significative.",
    advice: [
      "Donnez-vous du temps - l'amour se développe souvent graduellement",
      "Concentrez-vous sur la construction d'une intimité émotionnelle plus profonde",
      "Partagez votre vrai moi et encouragez-la/le à faire de même",
      "Remarquez comment elle/il vous traite et vous fait sentir constamment",
      "Faites confiance à vos instincts alors que vos sentiments continuent de se développer",
    ],
    color: "from-pink-500 to-rose-500",
  },
  developing_feelings: {
    level: "developing_feelings",
    title: "💓 Sentiments en développement",
    description: "Vous ressentez de vrais sentiments qui grandissent. Vous appréciez la compagnie de cette personne et vous vous souciez d'elle, bien que vous puissiez encore déterminer exactement ce que vous ressentez. Cela pourrait être le début de l'amour, ou cela pourrait se développer en une forte amitié.",
    advice: [
      "Prenez votre temps pour comprendre vos sentiments - il n'y a pas d'urgence",
      "Passez plus de temps de qualité ensemble pour approfondir votre connexion",
      "Faites attention à ce que vous ressentez quand vous êtes ensemble vs séparés",
      "Réfléchissez à ce que vous appréciez dans une relation amoureuse",
      "Soyez ouvert(e) à où cette connexion mène",
    ],
    color: "from-purple-500 to-pink-500",
  },
  uncertain: {
    level: "uncertain",
    title: "💭 Sentiments incertains",
    description: "Vos sentiments sont incertains en ce moment, ce qui est complètement normal. Vous ressentez peut-être une certaine attraction ou affection, mais il n'est pas clair si c'est de l'amour romantique, de l'amitié ou autre chose. Parfois, nous avons besoin de temps et de clarté pour comprendre nos émotions.",
    advice: [
      "Donnez-vous de l'espace pour explorer ce que vous ressentez vraiment",
      "Réfléchissez à ce que vous voulez de cette relation",
      "Considérez s'il y a des obstacles empêchant des sentiments plus profonds",
      "C'est correct de ne pas forcer des sentiments qui ne sont pas là",
      "Concentrez-vous sur la construction d'une connexion authentique sans pression",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  not_in_love: {
    level: "not_in_love",
    title: "🤍 Pas amoureux(se)",
    description: "D'après vos réponses, vous ne semblez pas être amoureux(se) de cette personne en ce moment. Cela ne signifie pas qu'il y a quelque chose qui ne va pas - vous la/le valorisez peut-être en tant qu'ami(e), ou vous ne ressentez peut-être pas de connexion romantique. Il est important d'être honnête avec vous-même au sujet de vos sentiments.",
    advice: [
      "Honorez vos vrais sentiments - c'est correct de ne pas être amoureux(se)",
      "Si vous êtes dans une relation, réfléchissez si elle est épanouissante pour vous deux",
      "Ne vous mettez pas la pression pour ressentir quelque chose que vous ne ressentez pas",
      "Réfléchissez à ce que vous voulez vraiment chez un(e) partenaire romantique",
      "Être honnête avec vous-même et les autres est l'approche la plus bienveillante",
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
