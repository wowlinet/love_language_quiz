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
    text: "Wenn du an diese Person denkst, wie fühlst du dich?",
    options: [
      { text: "Mein Herz rast und ich bekomme Schmetterlinge im Bauch", score: 4 },
      { text: "Ich fühle mich warm, glücklich und zufrieden", score: 3 },
      { text: "Ich fühle mich wohl und entspannt", score: 2 },
      { text: "Ich denke nicht so oft an sie/ihn", score: 1 },
      { text: "Ich fühle mich gleichgültig oder verwirrt", score: 0 },
    ],
  },
  {
    id: 2,
    text: "Wie wichtig ist deren Glück für dich?",
    options: [
      { text: "Ihr/Sein Glück ist genauso wichtig wie mein eigenes", score: 4 },
      { text: "Sehr wichtig - ich möchte, dass sie/er glücklich ist", score: 3 },
      { text: "Einigermaßen wichtig, wie bei jedem Freund", score: 2 },
      { text: "Es ist mir wichtig, aber keine Priorität", score: 1 },
      { text: "Ich habe nicht wirklich darüber nachgedacht", score: 0 },
    ],
  },
  {
    id: 3,
    text: "Stellst du dir eine Zukunft mit dieser Person vor?",
    options: [
      { text: "Ja, ständig - sie/er ist in allen meinen Zukunftsplänen", score: 4 },
      { text: "Oft - ich sehe sie/ihn als Teil meiner Zukunft", score: 3 },
      { text: "Manchmal - aber es ist noch nicht klar", score: 2 },
      { text: "Selten - ich konzentriere mich auf die Gegenwart", score: 1 },
      { text: "Nein - ich sehe sie/ihn nicht in meiner Zukunft", score: 0 },
    ],
  },
  {
    id: 4,
    text: "Wie fühlst du dich, wenn ihr getrennt seid?",
    options: [
      { text: "Ich vermisse sie/ihn intensiv und zähle die Zeit, bis wir wieder zusammen sind", score: 4 },
      { text: "Ich vermisse sie/ihn und freue mich darauf, sie/ihn zu sehen", score: 3 },
      { text: "Mir geht es gut, aber ich bin glücklich, wenn wir uns wiedersehen", score: 2 },
      { text: "Ich bemerke es kaum - ich bin mit meinem eigenen Leben beschäftigt", score: 1 },
      { text: "Ich fühle mich erleichtert oder denke nicht darüber nach", score: 0 },
    ],
  },
  {
    id: 5,
    text: "Wärst du bereit, Opfer für sie/ihn zu bringen?",
    options: [
      { text: "Ja, ich würde fast alles für ihr/sein Wohlergehen opfern", score: 4 },
      { text: "Ja, ich würde vernünftige Opfer bringen", score: 3 },
      { text: "Vielleicht, je nachdem was es ist", score: 2 },
      { text: "Wahrscheinlich nicht - ich priorisiere mich selbst", score: 1 },
      { text: "Nein - ich sehe nicht, warum ich sollte", score: 0 },
    ],
  },
  {
    id: 6,
    text: "Wie reagierst du, wenn sie/er gute Nachrichten teilt?",
    options: [
      { text: "Ich bin wirklich begeistert und feiere mit ihr/ihm", score: 4 },
      { text: "Ich bin glücklich für sie/ihn und zeige Unterstützung", score: 3 },
      { text: "Ich freue mich, aber nicht übermäßig aufgeregt", score: 2 },
      { text: "Ich nehme es zur Kenntnis, fühle aber nicht viel", score: 1 },
      { text: "Ich fühle mich neutral oder sogar neidisch", score: 0 },
    ],
  },
  {
    id: 7,
    text: "Akzeptierst du ihre/seine Fehler und Unvollkommenheiten?",
    options: [
      { text: "Ja, ihre/seine Fehler machen sie/ihn für mich liebenswürdiger", score: 4 },
      { text: "Ja, ich akzeptiere sie/ihn so wie sie/er ist", score: 3 },
      { text: "Die meisten, aber einige stören mich", score: 2 },
      { text: "Einige Fehler sind schwer zu akzeptieren", score: 1 },
      { text: "Nein, ihre/seine Fehler frustrieren mich erheblich", score: 0 },
    ],
  },
  {
    id: 8,
    text: "Wie physisch angezogen fühlst du dich zu ihr/ihm?",
    options: [
      { text: "Extrem - sie/er ist die attraktivste Person für mich", score: 4 },
      { text: "Sehr angezogen - ich liebe es, körperlich nah zu sein", score: 3 },
      { text: "Mäßig angezogen", score: 2 },
      { text: "Leicht angezogen oder es variiert", score: 1 },
      { text: "Nicht wirklich körperlich angezogen", score: 0 },
    ],
  },
  {
    id: 9,
    text: "Möchtest du deine tiefsten Gedanken und Gefühle mit ihr/ihm teilen?",
    options: [
      { text: "Ja, sie/er ist die erste Person, der ich alles erzählen möchte", score: 4 },
      { text: "Ja, ich fühle mich wohl, mich ihr/ihm zu öffnen", score: 3 },
      { text: "Manchmal, aber ich bin wählerisch bei dem, was ich teile", score: 2 },
      { text: "Selten - ich ziehe es vor, Dinge privat zu halten", score: 1 },
      { text: "Nein - ich fühle diese Verbindung nicht", score: 0 },
    ],
  },
  {
    id: 10,
    text: "Wie eifersüchtig fühlst du dich, wenn sie/er Zeit mit anderen verbringt?",
    options: [
      { text: "Ziemlich eifersüchtig - ich wünschte, ich könnte immer bei ihr/ihm sein", score: 4 },
      { text: "Ein bisschen eifersüchtig, aber ich vertraue ihr/ihm", score: 3 },
      { text: "Minimale Eifersucht - jeder braucht seine eigene Zeit", score: 2 },
      { text: "Überhaupt nicht eifersüchtig", score: 1 },
      { text: "Es ist mir egal, mit wem sie/er Zeit verbringt", score: 0 },
    ],
  },
  {
    id: 11,
    text: "Priorisierst du ihre/seine Bedürfnisse über deine eigenen?",
    options: [
      { text: "Oft - ihre/seine Bedürfnisse fühlen sich genauso wichtig an wie meine", score: 4 },
      { text: "Manchmal - ich versuche, beides auszubalancieren", score: 3 },
      { text: "Gelegentlich, aber ich priorisiere mich meistens", score: 2 },
      { text: "Selten - ich konzentriere mich zuerst auf meine eigenen Bedürfnisse", score: 1 },
      { text: "Nie - ich stelle mich immer an erste Stelle", score: 0 },
    ],
  },
  {
    id: 12,
    text: "Wie fühlst du dich bei körperlicher Intimität mit ihr/ihm?",
    options: [
      { text: "Ich sehne mich danach und es fühlt sich zutiefst bedeutungsvoll an", score: 4 },
      { text: "Ich genieße es und es stärkt unsere Bindung", score: 3 },
      { text: "Es ist schön, aber nicht essenziell", score: 2 },
      { text: "Ich bin gleichgültig oder unsicher darüber", score: 1 },
      { text: "Ich wünsche mir keine körperliche Intimität mit ihr/ihm", score: 0 },
    ],
  },
  {
    id: 13,
    text: "Kannst du dein authentisches Selbst in ihrer/seiner Nähe sein?",
    options: [
      { text: "Vollständig - ich habe mich noch nie so sehr selbst gefühlt mit jemandem", score: 4 },
      { text: "Ja - ich fühle mich wohl, echt zu sein mit ihr/ihm", score: 3 },
      { text: "Meistens, aber ich verstecke einige Teile von mir", score: 2 },
      { text: "Nicht wirklich - ich habe das Gefühl, vorgeben zu müssen", score: 1 },
      { text: "Nein - ich kann nicht ich selbst sein in ihrer/seiner Nähe", score: 0 },
    ],
  },
  {
    id: 14,
    text: "Wie fühlst du dich, wenn du Zeit mit ihr/ihm verbringst?",
    options: [
      { text: "Energiegeladen, lebendig und vollständig erfüllt", score: 4 },
      { text: "Glücklich und zufrieden - die Zeit vergeht wie im Flug", score: 3 },
      { text: "Angenehm und erfreulich", score: 2 },
      { text: "Es ist okay, nichts Besonderes", score: 1 },
      { text: "Erschöpfend oder unangenehm", score: 0 },
    ],
  },
  {
    id: 15,
    text: "Wenn sie/er nicht mehr in deinem Leben wäre, wie würdest du dich fühlen?",
    options: [
      { text: "Am Boden zerstört - ich kann mir ein Leben ohne sie/ihn nicht vorstellen", score: 4 },
      { text: "Sehr traurig und tief betroffen", score: 3 },
      { text: "Traurig, aber ich würde es schließlich überwinden", score: 2 },
      { text: "Ein bisschen traurig, aber nicht dramatisch betroffen", score: 1 },
      { text: "Nicht besonders betroffen", score: 0 },
    ],
  },
]

export const loveQuizResults: Record<string, LoveQuizResult> = {
  deeply_in_love: {
    level: "deeply_in_love",
    title: "💕 Tief verliebt",
    description: "Alle Zeichen deuten auf Ja - du bist wirklich verliebt! Deine Gefühle zeigen eine starke emotionale Verbindung, tiefe Fürsorge für ihr/sein Wohlergehen und den Wunsch nach einer gemeinsamen Zukunft. Du erlebst die klassischen Anzeichen des Verliebtseins: Schmetterlinge, ständige Gedanken an sie/ihn und das Gefühl, du selbst zu sein, wenn ihr zusammen seid.",
    advice: [
      "Kommuniziere offen über deine Gefühle, wenn ihr beide bereit seid",
      "Pflege weiterhin die emotionale Intimität, die ihr aufgebaut habt",
      "Verliere dich nicht selbst - behalte deine individuelle Identität und Interessen bei",
      "Baue Vertrauen durch Beständigkeit und Ehrlichkeit auf",
      "Genieße diese besondere Zeit, aber lass die Beziehung sich natürlich entwickeln",
    ],
    color: "from-rose-500 to-pink-600",
  },
  strongly_attracted: {
    level: "strongly_attracted",
    title: "💗 Stark angezogen & verbunden",
    description: "Du hast starke Gefühle, die definitiv Liebe sein könnten oder sich zu Liebe entwickeln. Du sorgst dich tief um diese Person, genießt ihre Gesellschaft und kannst dir eine mögliche Zukunft zusammen vorstellen. Ob es frühe Liebe ist oder sich in diese Richtung entwickelt, eure Verbindung ist bedeutungsvoll.",
    advice: [
      "Gib dir Zeit - Liebe entwickelt sich oft allmählich",
      "Konzentriere dich darauf, tiefere emotionale Intimität aufzubauen",
      "Teile dein authentisches Selbst und ermutige sie/ihn, dasselbe zu tun",
      "Achte darauf, wie sie/er dich behandelt und dich konsistent fühlen lässt",
      "Vertraue deinen Instinkten, während sich deine Gefühle weiter entwickeln",
    ],
    color: "from-pink-500 to-rose-500",
  },
  developing_feelings: {
    level: "developing_feelings",
    title: "💓 Sich entwickelnde Gefühle",
    description: "Du erlebst echte Gefühle, die wachsen. Du genießt die Gesellschaft dieser Person und sorgst dich um sie, obwohl du vielleicht noch herausfindest, was genau du fühlst. Dies könnte der Beginn von Liebe sein, oder es könnte sich zu einer starken Freundschaft entwickeln.",
    advice: [
      "Nimm dir Zeit, deine Gefühle zu verstehen - es gibt keine Eile",
      "Verbringe mehr qualitative Zeit zusammen, um eure Verbindung zu vertiefen",
      "Achte darauf, wie du dich fühlst, wenn ihr zusammen seid im Vergleich zu getrennt",
      "Überlege, was du in einer romantischen Beziehung schätzt",
      "Sei offen dafür, wohin diese Verbindung führt",
    ],
    color: "from-purple-500 to-pink-500",
  },
  uncertain: {
    level: "uncertain",
    title: "💭 Unklare Gefühle",
    description: "Deine Gefühle sind im Moment unklar, was vollkommen normal ist. Du erlebst vielleicht etwas Anziehung oder Fürsorge, aber es ist nicht klar, ob es romantische Liebe, Freundschaft oder etwas anderes ist. Manchmal brauchen wir Zeit und Klarheit, um unsere Emotionen zu verstehen.",
    advice: [
      "Gib dir Raum, um zu erforschen, was du wirklich fühlst",
      "Reflektiere darüber, was du von dieser Beziehung willst",
      "Überlege, ob es Hindernisse gibt, die tiefere Gefühle verhindern",
      "Es ist okay, Gefühle nicht zu erzwingen, die nicht da sind",
      "Konzentriere dich darauf, eine echte Verbindung ohne Druck aufzubauen",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  not_in_love: {
    level: "not_in_love",
    title: "🤍 Nicht verliebt",
    description: "Basierend auf deinen Antworten scheinst du im Moment nicht in diese Person verliebt zu sein. Das bedeutet nicht, dass etwas falsch ist - du schätzt sie vielleicht als Freund/in, oder vielleicht fühlst du keine romantische Verbindung. Es ist wichtig, ehrlich zu dir selbst über deine Gefühle zu sein.",
    advice: [
      "Ehre deine authentischen Gefühle - es ist okay, nicht verliebt zu sein",
      "Wenn du in einer Beziehung bist, überlege, ob sie für euch beide erfüllend ist",
      "Setze dich nicht unter Druck, etwas zu fühlen, was du nicht fühlst",
      "Reflektiere darüber, was du wirklich in einem/r romantischen Partner/in willst",
      "Ehrlich zu dir selbst und anderen zu sein, ist der freundlichste Ansatz",
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
