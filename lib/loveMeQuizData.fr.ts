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
    text: "Comment votre partenaire réagit-il/elle lorsque vous accomplissez quelque chose d'important ?",
    options: [
      { text: "Célèbre avec enthousiasme et est vraiment fier(e) de moi", score: 4 },
      { text: "Montre du bonheur et du soutien", score: 3 },
      { text: "Le reconnaît mais ne semble pas excessivement enthousiasmé(e)", score: 2 },
      { text: "Réagit à peine ou semble indifférent(e)", score: 1 },
      { text: "Semble jaloux(se), dédaigneux(se) ou en fait une affaire personnelle", score: 0 },
    ],
  },
  {
    id: 2,
    text: "Votre partenaire vous fait-il/elle sentir comme une priorité dans sa vie ?",
    options: [
      { text: "Absolument - je me sens comme l'une de ses principales priorités", score: 4 },
      { text: "Oui, il/elle m'équilibre bien avec d'autres engagements", score: 3 },
      { text: "Parfois, mais je me sens souvent secondaire", score: 2 },
      { text: "Rarement - d'autres choses semblent plus importantes", score: 1 },
      { text: "Non - je me sens souvent comme une pensée après coup", score: 0 },
    ],
  },
  {
    id: 3,
    text: "Comment votre partenaire gère-t-il/elle les désaccords ou conflits avec vous ?",
    options: [
      { text: "Écoute respectueusement et travaille ensemble vers des solutions", score: 4 },
      { text: "Généralement constructif, bien que parfois tendu", score: 3 },
      { text: "Souvent sur la défensive mais finit par résoudre les choses", score: 2 },
      { text: "Se fâche, se ferme ou refuse de discuter", score: 1 },
      { text: "Me blâme, dit des choses blessantes ou fait le mur", score: 0 },
    ],
  },
  {
    id: 4,
    text: "Votre partenaire montre-t-il/elle un véritable intérêt pour vos pensées et sentiments ?",
    options: [
      { text: "Toujours - il/elle veut savoir ce que je pense et comment je me sens", score: 4 },
      { text: "Souvent - il/elle prend des nouvelles et écoute vraiment", score: 3 },
      { text: "Parfois - mais il/elle peut être distrait(e)", score: 2 },
      { text: "Rarement - les conversations sont surtout superficielles", score: 1 },
      { text: "Non - il/elle ne semble pas se soucier de mon monde intérieur", score: 0 },
    ],
  },
  {
    id: 5,
    text: "Comment votre partenaire vous traite-t-il/elle quand il/elle est stressé(e) ou a une mauvaise journée ?",
    options: [
      { text: "Toujours gentil(le) et aimant(e), a peut-être juste besoin d'espace", score: 4 },
      { text: "Un peu renfermé(e) mais pas méchant(e)", score: 3 },
      { text: "Parfois décharge sa frustration sur moi", score: 2 },
      { text: "Devient souvent froid(e) ou irritable envers moi", score: 1 },
      { text: "Me traite mal, me blâme ou se déchaîne", score: 0 },
    ],
  },
  {
    id: 6,
    text: "Votre partenaire fait-il/elle un effort pour comprendre et soutenir vos objectifs et rêves ?",
    options: [
      { text: "Oui - il/elle encourage activement et m'aide à les poursuivre", score: 4 },
      { text: "Oui - il/elle est encourageant(e) et intéressé(e)", score: 3 },
      { text: "Un peu - il/elle est d'accord avec eux mais pas impliqué(e)", score: 2 },
      { text: "Pas vraiment - il/elle n'y prête pas beaucoup d'attention", score: 1 },
      { text: "Non - il/elle rejette ou décourage mes aspirations", score: 0 },
    ],
  },
  {
    id: 7,
    text: "Comment votre partenaire réagit-il/elle quand vous traversez une période difficile ?",
    options: [
      { text: "Pleinement présent(e), réconfortant(e) et fait tout ce qu'il/elle peut pour aider", score: 4 },
      { text: "Encourageant(e) et essaie d'être là pour moi", score: 3 },
      { text: "Offre un certain soutien mais semble mal à l'aise", score: 2 },
      { text: "Distant(e) ou ne sait pas comment aider", score: 1 },
      { text: "M'évite, semble agacé(e) ou aggrave la situation", score: 0 },
    ],
  },
  {
    id: 8,
    text: "Votre partenaire accepte-t-il/elle vos défauts et imperfections ?",
    options: [
      { text: "Oui - m'aime complètement, défauts et tout", score: 4 },
      { text: "Oui - m'accepte tel(le) que je suis", score: 3 },
      { text: "Surtout, mais critique parfois certaines choses", score: 2 },
      { text: "Pointe souvent mes défauts ou veut que je change", score: 1 },
      { text: "Non - critique fréquemment ou essaie de me changer", score: 0 },
    ],
  },
  {
    id: 9,
    text: "Comment votre partenaire parle-t-il/elle de l'avenir de votre relation ?",
    options: [
      { text: "Avec enthousiasme et confiance m'inclut dans les plans à long terme", score: 4 },
      { text: "Mentionne positivement un avenir ensemble", score: 3 },
      { text: "Vaguement ou évite les engagements spécifiques", score: 2 },
      { text: "Parle rarement de l'avenir", score: 1 },
      { text: "Évite ou semble incertain(e) quant à un avenir ensemble", score: 0 },
    ],
  },
  {
    id: 10,
    text: "Votre partenaire fait-il/elle des sacrifices ou des compromis pour la relation ?",
    options: [
      { text: "Oui - fait volontiers des sacrifices pour nous faire fonctionner", score: 4 },
      { text: "Oui - trouve l'équilibre et fait des compromis", score: 3 },
      { text: "Parfois, mais à contrecœur", score: 2 },
      { text: "Rarement - s'attend à ce que je fasse la plupart des compromis", score: 1 },
      { text: "Jamais - c'est toujours à sa façon ou rien", score: 0 },
    ],
  },
  {
    id: 11,
    text: "Comment votre partenaire vous montre-t-il/elle de l'affection ?",
    options: [
      { text: "Fréquemment et de manières qui me semblent significatives", score: 4 },
      { text: "Montre régulièrement de l'affection physique et émotionnelle", score: 3 },
      { text: "Occasionnellement, mais j'aimerais qu'il y en ait plus", score: 2 },
      { text: "Montre rarement de l'affection", score: 1 },
      { text: "Presque jamais - se sent distant(e) et froid(e)", score: 0 },
    ],
  },
  {
    id: 12,
    text: "Votre partenaire vous défend-il/elle et vous soutient-il/elle devant les autres ?",
    options: [
      { text: "Toujours - me soutient publiquement et en privé", score: 4 },
      { text: "Oui - prend ma défense", score: 3 },
      { text: "Parfois, mais pas systématiquement", score: 2 },
      { text: "Me défend rarement", score: 1 },
      { text: "Jamais - ou pire, me critique devant les autres", score: 0 },
    ],
  },
  {
    id: 13,
    text: "À quel point votre partenaire est-il/elle digne de confiance et honnête avec vous ?",
    options: [
      { text: "Complètement digne de confiance - ouvert(e) et honnête sur tout", score: 4 },
      { text: "Très digne de confiance - transparent(e) avec moi", score: 3 },
      { text: "Surtout honnête mais parfois évasif(ve)", score: 2 },
      { text: "Souvent secret(ète) ou pris(e) dans de petits mensonges", score: 1 },
      { text: "Fréquemment malhonnête ou me cache des choses", score: 0 },
    ],
  },
  {
    id: 14,
    text: "Votre partenaire respecte-t-il/elle vos limites et votre autonomie ?",
    options: [
      { text: "Absolument - respecte mon indépendance et mes limites", score: 4 },
      { text: "Oui - me donne de l'espace et respecte mes besoins", score: 3 },
      { text: "Habituellement, mais franchit parfois les limites", score: 2 },
      { text: "Ignore souvent mes limites", score: 1 },
      { text: "Non - contrôlant(e) ou dédaigneux(se) de mes besoins", score: 0 },
    ],
  },
  {
    id: 15,
    text: "Comment votre partenaire vous fait-il/elle vous sentir à propos de vous-même ?",
    options: [
      { text: "Incroyable - je me sens plus confiant(e) et valorisé(e) grâce à lui/elle", score: 4 },
      { text: "Bien - il/elle me remonte le moral et me soutient", score: 3 },
      { text: "Neutre - n'affecte pas vraiment mon estime de soi", score: 2 },
      { text: "Parfois pire - la critique occasionnelle m'affecte", score: 1 },
      { text: "Mal - je me sens moins bien dans ma peau dans cette relation", score: 0 },
    ],
  },
  {
    id: 16,
    text: "Votre partenaire se souvient-il/elle et reconnaît-il/elle les choses importantes pour vous ?",
    options: [
      { text: "Oui - se souvient des détails et me fait me sentir vraiment vu(e)", score: 4 },
      { text: "Habituellement - se souvient des dates et préférences importantes", score: 3 },
      { text: "Parfois - mais oublie des choses importantes", score: 2 },
      { text: "Rarement - semble ne pas prêter attention", score: 1 },
      { text: "Jamais - oublie tout ce qui est important pour moi", score: 0 },
    ],
  },
  {
    id: 17,
    text: "Comment votre partenaire contribue-t-il/elle à la relation ?",
    options: [
      { text: "Également ou plus - investit activement du temps, des efforts et des soins", score: 4 },
      { text: "Assez également - nous faisons tous les deux des efforts", score: 3 },
      { text: "Un peu - mais j'en fais souvent plus", score: 2 },
      { text: "Minimalement - je porte la majeure partie du poids de la relation", score: 1 },
      { text: "Presque pas - ça semble complètement déséquilibré", score: 0 },
    ],
  },
  {
    id: 18,
    text: "Votre partenaire s'excuse-t-il/elle et assume-t-il/elle ses responsabilités quand il/elle vous blesse ?",
    options: [
      { text: "Oui - s'excuse sincèrement et travaille à s'améliorer", score: 4 },
      { text: "Habituellement - reconnaît ses erreurs et s'excuse", score: 3 },
      { text: "Parfois - mais les excuses peuvent sembler peu sincères", score: 2 },
      { text: "Rarement - sur la défensive et évite la responsabilité", score: 1 },
      { text: "Jamais - me blâme ou refuse de s'excuser", score: 0 },
    ],
  },
  {
    id: 19,
    text: "Comment votre partenaire réagit-il/elle quand vous exprimez des besoins ou des préoccupations ?",
    options: [
      { text: "Écoute attentivement et prend mes besoins au sérieux", score: 4 },
      { text: "Généralement réceptif(ve) et essaie de répondre aux préoccupations", score: 3 },
      { text: "Parfois dédaigneux(se) mais finit par écouter", score: 2 },
      { text: "Souvent sur la défensive ou me fait me sentir mal d'avoir des besoins", score: 1 },
      { text: "Rejette, invalide ou se met en colère contre mes besoins", score: 0 },
    ],
  },
  {
    id: 20,
    text: "Dans l'ensemble, vous sentez-vous vraiment aimé(e), valorisé(e) et chéri(e) par votre partenaire ?",
    options: [
      { text: "Absolument - je me sens profondément aimé(e) chaque jour", score: 4 },
      { text: "Oui - je me sens aimé(e) et apprécié(e)", score: 3 },
      { text: "Parfois - mes sentiments fluctuent", score: 2 },
      { text: "Rarement - je doute souvent de son amour", score: 1 },
      { text: "Non - je ne me sens pas vraiment aimé(e)", score: 0 },
    ],
  },
]

export const loveMeQuizResults: Record<string, LoveMeQuizResult> = {
  deeply_loves_you: {
    level: "deeply_loves_you",
    title: "Il/Elle vous aime profondément",
    emoji: "💝💕",
    description: "Votre partenaire montre des signes forts et constants d'amour véritable. Il/Elle vous donne la priorité, vous respecte, soutient votre croissance et vous fait sentir valorisé(e). La façon dont il/elle vous traite pendant les conflits, célèbre vos succès et est présent(e) quand vous avez besoin d'eux démontre un amour profond et mature. C'est une relation saine et aimante.",
    advice: [
      "Chérissez et nourrissez cette relation aimante",
      "Continuez la communication ouverte pour maintenir votre lien fort",
      "Montrez de l'appréciation pour l'amour qu'il/elle vous donne",
      "Continuez à investir ensemble dans la relation",
      "Construisez sur cette fondation pour un partenariat durable",
    ],
    color: "from-rose-500 to-pink-600",
  },
  truly_loves_you: {
    level: "truly_loves_you",
    title: "Il/Elle vous aime vraiment",
    emoji: "💖😊",
    description: "Votre partenaire démontre un véritable amour pour vous. Il/Elle se soucie de votre bien-être, vous soutient à travers les défis et valorise la relation. Bien qu'aucune relation ne soit parfaite, les fondamentaux sont solides - le respect, la confiance, l'affection et l'engagement sont clairement présents.",
    advice: [
      "Continuez à construire sur votre solide fondation",
      "Abordez les petits problèmes avant qu'ils ne grandissent",
      "Exprimez vos besoins et écoutez les siens",
      "Continuez à montrer de l'amour de manières qu'il/elle comprend",
      "Appréciez le bon tout en travaillant sur les domaines de croissance",
    ],
    color: "from-pink-500 to-rose-500",
  },
  loves_you_with_issues: {
    level: "loves_you_with_issues",
    title: "Il/Elle vous aime, mais il y a des problèmes",
    emoji: "💛🤔",
    description: "Votre partenaire vous aime probablement, mais il y a des schémas ou des lacunes préoccupants dans la façon dont il/elle l'exprime. Certains besoins ne sont pas pleinement satisfaits, ou il y a des domaines où la relation pourrait être plus saine. L'amour est présent, mais il peut nécessiter du travail pour prospérer.",
    advice: [
      "Ayez des conversations honnêtes sur les besoins non satisfaits",
      "Envisagez une thérapie de couple pour renforcer votre lien",
      "Identifiez les domaines spécifiques qui nécessitent des améliorations",
      "Les deux partenaires doivent investir pour apporter des changements",
      "Évaluez si vous êtes tous les deux prêts à grandir ensemble",
    ],
    color: "from-yellow-500 to-amber-500",
  },
  uncertain_love: {
    level: "uncertain_love",
    title: "Son amour est incertain",
    emoji: "💭❓",
    description: "Les signes sont mitigés et préoccupants. Votre partenaire peut se soucier de vous, mais il y a des problèmes importants avec la façon dont il/elle exprime l'amour, gère les conflits ou donne la priorité à la relation. Vous pouvez fréquemment vous sentir incertain(e) de ses sentiments, ce qui n'est pas sain dans une relation engagée.",
    advice: [
      "Réfléchissez sérieusement si vos besoins sont satisfaits",
      "Ayez une conversation directe sur l'état de la relation",
      "Considérez si cette relation vous rend heureux(se)",
      "Cherchez de l'aide professionnelle si vous voulez essayer d'améliorer les choses",
      "Rappelez-vous : vous méritez de vous sentir aimé(e) et en sécurité",
    ],
    color: "from-orange-500 to-yellow-500",
  },
  questionable_love: {
    level: "questionable_love",
    title: "Son amour est questionnable",
    emoji: "💔😔",
    description: "D'après vos réponses, il y a de sérieux signaux d'alarme. Votre partenaire peut ne pas vous aimer de manière saine, ou la relation peut manquer d'éléments fondamentaux de l'amour comme le respect, le soutien et l'attention véritable. Vous méritez mieux que ce que vous vivez actuellement.",
    advice: [
      "Évaluez sérieusement si cette relation est saine pour vous",
      "Parlez à des amis de confiance, à votre famille ou à un thérapeute",
      "Considérez si vous vous sentez en sécurité et valorisé(e) dans cette relation",
      "N'ignorez pas les signaux d'alarme - ce sont des avertissements pour une raison",
      "Rappelez-vous : le véritable amour vous fait vous sentir bien dans votre peau",
    ],
    color: "from-red-500 to-orange-500",
  },
  not_healthy_love: {
    level: "not_healthy_love",
    title: "Cela ne semble pas être un amour sain",
    emoji: "🚩💔",
    description: "Vos réponses indiquent une relation qui manque d'amour sain. Vous pourriez vivre de la négligence émotionnelle, de la manipulation, du contrôle ou d'autres dynamiques nuisibles. Le véritable amour implique le respect, le soutien, la confiance et vous fait sentir valorisé(e) - pas diminué(e) ou incertain(e).",
    advice: [
      "Envisagez de contacter un thérapeute ou un conseiller",
      "Parlez à des personnes de confiance dans votre vie de votre relation",
      "Évaluez si cette relation est bonne pour votre bien-être",
      "Vous méritez un partenaire qui vous aime et vous respecte vraiment",
      "Ne vous contentez pas de moins que ce que vous méritez - votre bonheur compte",
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
