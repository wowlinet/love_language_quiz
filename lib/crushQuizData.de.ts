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
    text: "Wie oft beginnt dein Schwarm Gespräche mit dir?",
    options: [
      { text: "Sie/Er schreibt oder spricht mich fast jeden Tag zuerst an", score: 4 },
      { text: "Ein paar Mal pro Woche - sie/er meldet sich regelmäßig", score: 3 },
      { text: "Gelegentlich - vielleicht einmal pro Woche oder seltener", score: 2 },
      { text: "Selten - normalerweise bin ich derjenige, der Gespräche beginnt", score: 1 },
      { text: "Nie - sie/er beginnt überhaupt nicht", score: 0 },
    ],
  },
  {
    id: 2,
    text: "Wie antwortet dein Schwarm auf deine Nachrichten?",
    options: [
      { text: "Schnell mit detaillierten, enthusiastischen Antworten", score: 4 },
      { text: "Ziemlich schnell und hält das Gespräch am Laufen", score: 3 },
      { text: "Antwortet schließlich, aber hält es kurz", score: 2 },
      { text: "Braucht lange und gibt kurze Antworten", score: 1 },
      { text: "Lässt mich oft auf gelesen oder antwortet nicht", score: 0 },
    ],
  },
  {
    id: 3,
    text: "Bemüht sich dein Schwarm, Zeit mit dir zu verbringen?",
    options: [
      { text: "Ja! Sie/Er schlägt aktiv Pläne vor und nimmt sich Zeit für mich", score: 4 },
      { text: "Sie/Er sagt oft ja, wenn ich vorschlage, etwas zu unternehmen", score: 3 },
      { text: "Manchmal, aber sie/er ist oft beschäftigt oder sagt ab", score: 2 },
      { text: "Selten - sie/er hat normalerweise andere Pläne", score: 1 },
      { text: "Nein, sie/er scheint Einzelzeit zu vermeiden", score: 0 },
    ],
  },
  {
    id: 4,
    text: "Wie verhält sich dein Schwarm persönlich in deiner Nähe?",
    options: [
      { text: "Schenkt mir volle Aufmerksamkeit, hält Augenkontakt, beugt sich vor", score: 4 },
      { text: "Scheint glücklich, mich zu sehen und engagiert sich herzlich", score: 3 },
      { text: "Freundlich, aber nicht merklich anders als bei anderen", score: 2 },
      { text: "Ein bisschen distanziert oder abgelenkt", score: 1 },
      { text: "Scheint unwohl oder vermeidet Interaktion", score: 0 },
    ],
  },
  {
    id: 5,
    text: "Zeigt dein Schwarm körperliche Anzeichen von Interesse?",
    options: [
      { text: "Ja - spielerisches Berühren, nah sitzen, 'zufälliger' Kontakt", score: 4 },
      { text: "Einige Anzeichen - gelegentliche leichte Berührungen oder Nähe", score: 3 },
      { text: "Neutral - normale freundschaftliche körperliche Grenzen", score: 2 },
      { text: "Minimal - hält körperlichen Abstand", score: 1 },
      { text: "Vermeidet körperlichen Kontakt vollständig", score: 0 },
    ],
  },
  {
    id: 6,
    text: "Erinnert sich dein Schwarm an Details über dein Leben?",
    options: [
      { text: "Ja! Sie/Er erinnert sich an kleine Dinge, die ich vor Wochen erwähnt habe", score: 4 },
      { text: "Sie/Er erinnert sich an wichtige Dinge und stellt Folgefragen", score: 3 },
      { text: "Sie/Er erinnert sich an einiges, aber nicht alles", score: 2 },
      { text: "Sie/Er scheint die meisten Dinge zu vergessen, die ich erzähle", score: 1 },
      { text: "Sie/Er scheint nicht aufzupassen, was ich teile", score: 0 },
    ],
  },
  {
    id: 7,
    text: "Wie reagiert dein Schwarm, wenn du andere Personen erwähnst, an denen du interessiert sein könntest?",
    options: [
      { text: "Sie/Er scheint eifersüchtig, unwohl oder wechselt schnell das Thema", score: 4 },
      { text: "Sie/Er scheint weniger enthusiastisch oder stellt bohrende Fragen", score: 3 },
      { text: "Neutrale Reaktion - sie/er ist unterstützend, aber nicht gestört", score: 2 },
      { text: "Sie/Er ermutigt es aktiv oder versucht, mich zu verkuppeln", score: 1 },
      { text: "Es scheint sie/ihn überhaupt nicht zu kümmern", score: 0 },
    ],
  },
  {
    id: 8,
    text: "Verhalten sich die Freunde deines Schwarms anders in deiner Nähe?",
    options: [
      { text: "Ja - sie necken, geben wissende Blicke oder lassen uns allein", score: 4 },
      { text: "Sie sind besonders freundlich und scheinen von mir zu wissen", score: 3 },
      { text: "Sie sind höflich, aber nichts Besonderes", score: 2 },
      { text: "Sie nehmen mich kaum zur Kenntnis", score: 1 },
      { text: "Ich habe ihre/seine Freunde nicht getroffen oder sie scheinen abweisend", score: 0 },
    ],
  },
  {
    id: 9,
    text: "Stellt dein Schwarm Fragen über dein persönliches Leben?",
    options: [
      { text: "Ständig - sie/er möchte alles über mich wissen", score: 4 },
      { text: "Oft - sie/er zeigt echtes Interesse an meinem Leben", score: 3 },
      { text: "Manchmal - gelegentliche Fragen hier und da", score: 2 },
      { text: "Selten - Gespräche sind meist oberflächlich", score: 1 },
      { text: "Nie - sie/er scheint nicht neugierig auf mich zu sein", score: 0 },
    ],
  },
  {
    id: 10,
    text: "Wie reagiert dein Schwarm, wenn du gute Nachrichten teilst?",
    options: [
      { text: "Super aufgeregt und feiert enthusiastisch mit mir", score: 4 },
      { text: "Wirklich glücklich und unterstützend", score: 3 },
      { text: "Höflich positiv, aber nicht übermäßig aufgeregt", score: 2 },
      { text: "Nimmt es kurz zur Kenntnis", score: 1 },
      { text: "Scheint nicht interessiert oder wechselt das Thema", score: 0 },
    ],
  },
  {
    id: 11,
    text: "Geht dein Schwarm aus dem Weg, um dir zu helfen?",
    options: [
      { text: "Immer - sie/er nutzt Gelegenheiten, mir zu helfen", score: 4 },
      { text: "Oft - sie/er ist hilfsbereit, wenn ich etwas brauche", score: 3 },
      { text: "Manchmal - wenn es für sie/ihn bequem ist", score: 2 },
      { text: "Selten - sie/er hat normalerweise Ausreden", score: 1 },
      { text: "Nie - sie/er bietet nicht an zu helfen", score: 0 },
    ],
  },
  {
    id: 12,
    text: "Macht dir dein Schwarm Komplimente?",
    options: [
      { text: "Häufig - echte Komplimente über Persönlichkeit und Aussehen", score: 4 },
      { text: "Manchmal - sie/er bemerkt und kommentiert positiv", score: 3 },
      { text: "Gelegentlich - allgemeine Komplimente", score: 2 },
      { text: "Selten - sehr selten", score: 1 },
      { text: "Nie - überhaupt keine Komplimente", score: 0 },
    ],
  },
  {
    id: 13,
    text: "Teilt dein Schwarm persönliche Dinge mit dir?",
    options: [
      { text: "Ja - tiefe Gedanken, Gefühle und Geheimnisse", score: 4 },
      { text: "Oft - sie/er öffnet sich über bedeutungsvolle Themen", score: 3 },
      { text: "Manchmal - aber hält es ziemlich oberflächlich", score: 2 },
      { text: "Selten - sehr verschlossen", score: 1 },
      { text: "Nie - sie/er hält alles privat", score: 0 },
    ],
  },
  {
    id: 14,
    text: "Wie verhält sich dein Schwarm in sozialen Medien mit dir?",
    options: [
      { text: "Liked/kommentiert häufig, markiert mich, sieht meine Stories zuerst", score: 4 },
      { text: "Regelmäßiges Engagement - Likes und gelegentliche Kommentare", score: 3 },
      { text: "Gelegentliche Likes, aber nicht viel Interaktion", score: 2 },
      { text: "Interagiert kaum mit meinen Beiträgen", score: 1 },
      { text: "Folgt mir nicht oder engagiert sich nie", score: 0 },
    ],
  },
  {
    id: 15,
    text: "Zeigt dein Schwarm Interesse an deinen Hobbys und Interessen?",
    options: [
      { text: "Sehr interessiert - stellt Fragen und möchte sie mit mir ausprobieren", score: 4 },
      { text: "Zeigt Neugier und hört wirklich zu, wenn ich darüber spreche", score: 3 },
      { text: "Hört höflich zu, aber engagiert sich nicht tief", score: 2 },
      { text: "Scheint gelangweilt oder desinteressiert", score: 1 },
      { text: "Wechselt das Thema, wenn ich über meine Interessen spreche", score: 0 },
    ],
  },
  {
    id: 16,
    text: "Hat dein Schwarm angedeutet oder nach deinem Beziehungsstatus gefragt?",
    options: [
      { text: "Ja, mehrmals - sie/er möchte eindeutig wissen, ob ich verfügbar bin", score: 4 },
      { text: "Ja, sie/er hat beiläufig oder durch Andeutungen gefragt", score: 3 },
      { text: "Vielleicht indirekt, aber nicht direkt", score: 2 },
      { text: "Nein, aber sie/er weiß es vielleicht schon", score: 1 },
      { text: "Nie, und sie/er spricht über mich, dass ich andere date", score: 0 },
    ],
  },
  {
    id: 17,
    text: "Wie verhält sich dein Schwarm, wenn du mit anderen potenziellen romantischen Interessen sprichst?",
    options: [
      { text: "Merklich gestört, versucht meine Aufmerksamkeit zu bekommen oder unterbricht", score: 4 },
      { text: "Scheint etwas unwohl oder weniger gesprächig", score: 3 },
      { text: "Scheint es nicht zu bemerken oder sich nicht zu kümmern", score: 2 },
      { text: "Ermutigt mich, sie zu verfolgen", score: 1 },
      { text: "Versucht aktiv, mich mit anderen zu verkuppeln", score: 0 },
    ],
  },
  {
    id: 18,
    text: "Macht dein Schwarm Zukunftspläne, die dich einschließen?",
    options: [
      { text: "Ja - erwähnt zukünftige Ereignisse und geht davon aus, dass ich dabei sein werde", score: 4 },
      { text: "Manchmal - schlägt vor, in Zukunft Dinge zusammen zu machen", score: 3 },
      { text: "Gelegentlich erwähnt Zukunftspläne, aber vage", score: 2 },
      { text: "Schließt mich selten in Zukunftsdenken ein", score: 1 },
      { text: "Nie - scheint nicht an eine Zukunft mit mir zu denken", score: 0 },
    ],
  },
]

export const crushQuizResults: Record<string, CrushQuizResult> = {
  definitely_interested: {
    level: "definitely_interested",
    title: "Sie/Er steht definitiv auf dich!",
    emoji: "🎉💕",
    description: "Tolle Neuigkeiten! Alle Zeichen deuten stark darauf hin, dass dein Schwarm dich auch mag. Sie/Er zeigt konsistentes Interesse durch Handlungen, Kommunikation und Körpersprache. Die Art, wie sie/er dich priorisiert, sich Details über dich merkt und sich bemüht, Zeit zusammen zu verbringen, sind klassische Anzeichen für romantisches Interesse.",
    advice: [
      "Überlege, ihnen/ihm zu sagen, dass du interessiert bist - die Gefühle scheinen gegenseitig zu sein!",
      "Suche nach Gelegenheiten, mehr Zeit zu zweit zu verbringen",
      "Achte darauf, ob sie/er darauf wartet, dass du den ersten Schritt machst",
      "Sei selbstbewusst, aber echt, wenn du deine Gefühle ausdrückst",
      "Überdenke es nicht - genieße diese aufregende Zeit!",
    ],
    color: "from-rose-500 to-pink-600",
  },
  very_likely: {
    level: "very_likely",
    title: "Starke Anzeichen, dass sie/er dich mag",
    emoji: "😊💗",
    description: "Die Zeichen sind sehr positiv! Dein Schwarm zeigt viele Indikatoren für romantisches Interesse. Sie/Er bemüht sich, mit dir in Kontakt zu treten, sich Dinge über dich zu merken und Zeit zusammen zu verbringen. Obwohl sie/er vielleicht etwas schüchtern oder vorsichtig ist, scheint das Interesse echt und gegenseitig zu sein.",
    advice: [
      "Die Signale sind vielversprechend - überlege, die Dinge einen Schritt weiter zu bringen",
      "Schaffe mehr Gelegenheiten für bedeutungsvolle Gespräche",
      "Beachte, ob sie/er positiv auf leichtes Flirten reagiert",
      "Schlage vor, zu zweit etwas zu unternehmen, um ihr/sein Interesse zu messen",
      "Sei geduldig, wenn sie/er schüchtern ist - zeige weiter, dass du interessiert bist",
    ],
    color: "from-pink-500 to-rose-500",
  },
  possibly_interested: {
    level: "possibly_interested",
    title: "Sie/Er könnte interessiert sein",
    emoji: "🤔💓",
    description: "Die Zeichen sind gemischt, neigen aber zum Positiven. Dein Schwarm zeigt etwas Interesse, aber es ist nicht ganz klar, ob es romantisch oder freundschaftlich ist. Sie/Er könnte interessiert, aber vorsichtig sein, unsicher über deine Gefühle oder noch dabei sein, ihre/seine eigenen Emotionen herauszufinden. Es gibt hier definitiv Potenzial.",
    advice: [
      "Versuche, mehr Zeit zusammen zu verbringen, um ihre/seine Gefühle zu klären",
      "Beobachte Veränderungen in ihrem/seinem Verhalten, wenn du in der Nähe bist",
      "Teste das Wasser mit subtilem Flirten, um zu sehen, wie sie/er reagiert",
      "Sei du selbst und lass die Verbindung sich natürlich entwickeln",
      "Überstürze nichts - manchmal brauchen Gefühle Zeit, um sich zu entwickeln",
    ],
    color: "from-purple-500 to-pink-500",
  },
  unclear_signals: {
    level: "unclear_signals",
    title: "Unklare Signale",
    emoji: "💭🤷",
    description: "Die Zeichen sind wirklich unklar. Dein Schwarm könnte interessiert, aber sehr schüchtern sein, sie/er könnte dich nur als Freund/in sehen, oder sie/er hat vielleicht noch nicht romantisch über dich nachgedacht. Es ist auch möglich, dass sie/er absichtlich oder unabsichtlich gemischte Signale sendet.",
    advice: [
      "Konzentriere dich zuerst darauf, eine stärkere Freundschaft aufzubauen",
      "Achte darauf, wie sie/er dich im Vergleich zu anderen behandelt",
      "Erwäge, direkt (aber beiläufig) Interesse auszudrücken, um Klarheit zu bekommen",
      "Lies nicht zu viel in jede Interaktion hinein - bleib geerdet",
      "Sei auf beide Ergebnisse vorbereitet und schütze dein Herz",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  probably_not: {
    level: "probably_not",
    title: "Wahrscheinlich nur Freunde",
    emoji: "💙🤝",
    description: "Basierend auf den Zeichen sieht dein Schwarm dich wahrscheinlich eher als Freund/in denn als romantisches Interesse. Sie/Er mag sich um dich kümmern, aber die Verhaltensweisen deuten auf Freundschaft statt romantische Anziehung hin. Das bedeutet nicht, dass sich Gefühle nicht entwickeln können, aber im Moment scheint das romantische Interesse nicht gegenseitig zu sein.",
    advice: [
      "Überlege, ob es das Risiko wert ist, die Freundschaft zu komplizieren",
      "Wenn du Interesse ausdrückst, sei auf eine 'nur Freunde'-Antwort vorbereitet",
      "Nimm es nicht persönlich - Anziehung ist keine Wahl",
      "Konzentriere dich auf Menschen, die klares Interesse an dir zeigen",
      "Manchmal ist es am besten, die Freundschaft zu schätzen und romantisch weiterzuziehen",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  not_interested: {
    level: "not_interested",
    title: "Sie/Er zeigt kein Interesse",
    emoji: "💔😔",
    description: "Leider deuten die Zeichen darauf hin, dass dein Schwarm nicht romantisch interessiert ist. Sie/Er vermeidet möglicherweise Zeit zu zweit, gibt kurze Antworten oder zeigt Anzeichen von Desinteresse. Obwohl dies schwer zu akzeptieren ist, kann es dir helfen, weiterzumachen und jemanden zu finden, der deine Gefühle erwidert.",
    advice: [
      "Akzeptiere ihr/sein mangelndes Interesse - du verdienst jemanden, der begeistert von dir ist",
      "Gib dir Abstand von dieser Person, um zu heilen und weiterzumachen",
      "Versuche nicht, sie/ihn zu überzeugen oder ihre/seine Meinung zu ändern",
      "Konzentriere dich auf dein eigenes Wachstum und deine Interessen",
      "Denk daran: Die richtige Person wird ihr Interesse klar machen",
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
