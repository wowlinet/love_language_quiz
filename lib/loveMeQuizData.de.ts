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
    text: "Wie reagiert dein/e Partner/in, wenn du etwas Wichtiges erreichst?",
    options: [
      { text: "Feiert begeistert und ist wirklich stolz auf mich", score: 4 },
      { text: "Zeigt Freude und Unterstützung", score: 3 },
      { text: "Nimmt es zur Kenntnis, scheint aber nicht übermäßig begeistert", score: 2 },
      { text: "Reagiert kaum oder scheint gleichgültig", score: 1 },
      { text: "Scheint eifersüchtig, abweisend oder macht es zu ihrer/seiner Sache", score: 0 },
    ],
  },
  {
    id: 2,
    text: "Gibt dir dein/e Partner/in das Gefühl, eine Priorität in ihrem/seinem Leben zu sein?",
    options: [
      { text: "Absolut - ich fühle mich wie eine ihrer/seiner Hauptprioritäten", score: 4 },
      { text: "Ja, sie/er balanciert mich gut mit anderen Verpflichtungen", score: 3 },
      { text: "Manchmal, aber ich fühle mich oft zweitrangig", score: 2 },
      { text: "Selten - andere Dinge scheinen wichtiger zu sein", score: 1 },
      { text: "Nein - ich fühle mich oft wie ein Nachgedanke", score: 0 },
    ],
  },
  {
    id: 3,
    text: "Wie geht dein/e Partner/in mit Meinungsverschiedenheiten oder Konflikten mit dir um?",
    options: [
      { text: "Hört respektvoll zu und arbeitet gemeinsam an Lösungen", score: 4 },
      { text: "Meist konstruktiv, obwohl manchmal angespannt", score: 3 },
      { text: "Oft defensiv, aber löst schließlich Dinge", score: 2 },
      { text: "Wird wütend, macht dicht oder weigert sich zu diskutieren", score: 1 },
      { text: "Gibt mir die Schuld, sagt verletzende Dinge oder mauert", score: 0 },
    ],
  },
  {
    id: 4,
    text: "Zeigt dein/e Partner/in echtes Interesse an deinen Gedanken und Gefühlen?",
    options: [
      { text: "Immer - sie/er möchte wissen, was ich denke und wie ich mich fühle", score: 4 },
      { text: "Oft - sie/er fragt nach und hört wirklich zu", score: 3 },
      { text: "Manchmal - aber sie/er kann abgelenkt sein", score: 2 },
      { text: "Selten - Gespräche sind meist oberflächlich", score: 1 },
      { text: "Nein - sie/er scheint sich nicht für meine innere Welt zu interessieren", score: 0 },
    ],
  },
  {
    id: 5,
    text: "Wie behandelt dich dein/e Partner/in, wenn sie/er gestresst ist oder einen schlechten Tag hat?",
    options: [
      { text: "Immer noch freundlich und liebevoll, braucht vielleicht nur Raum", score: 4 },
      { text: "Etwas zurückgezogen, aber nicht unfreundlich", score: 3 },
      { text: "Lässt manchmal Frust an mir aus", score: 2 },
      { text: "Wird oft kalt oder gereizt mir gegenüber", score: 1 },
      { text: "Behandelt mich schlecht, gibt mir die Schuld oder lässt es an mir aus", score: 0 },
    ],
  },
  {
    id: 6,
    text: "Bemüht sich dein/e Partner/in, deine Ziele und Träume zu verstehen und zu unterstützen?",
    options: [
      { text: "Ja - sie/er ermutigt aktiv und hilft mir, sie zu verfolgen", score: 4 },
      { text: "Ja - sie/er ist unterstützend und interessiert", score: 3 },
      { text: "Einigermaßen - sie/er ist damit einverstanden, aber nicht beteiligt", score: 2 },
      { text: "Nicht wirklich - sie/er schenkt dem wenig Aufmerksamkeit", score: 1 },
      { text: "Nein - sie/er lehnt meine Bestrebungen ab oder entmutigt sie", score: 0 },
    ],
  },
  {
    id: 7,
    text: "Wie reagiert dein/e Partner/in, wenn du eine schwierige Zeit durchmachst?",
    options: [
      { text: "Voll präsent, tröstend und tut alles, um zu helfen", score: 4 },
      { text: "Unterstützend und versucht, für mich da zu sein", score: 3 },
      { text: "Bietet etwas Unterstützung, scheint aber unwohl", score: 2 },
      { text: "Distanziert oder weiß nicht, wie sie/er helfen soll", score: 1 },
      { text: "Meidet mich, scheint genervt oder macht es schlimmer", score: 0 },
    ],
  },
  {
    id: 8,
    text: "Akzeptiert dein/e Partner/in deine Fehler und Unvollkommenheiten?",
    options: [
      { text: "Ja - liebt mich vollständig, Fehler und alles", score: 4 },
      { text: "Ja - akzeptiert mich so wie ich bin", score: 3 },
      { text: "Meistens, aber kritisiert manchmal bestimmte Dinge", score: 2 },
      { text: "Weist oft auf meine Fehler hin oder möchte, dass ich mich ändere", score: 1 },
      { text: "Nein - kritisiert häufig oder versucht, mich zu ändern", score: 0 },
    ],
  },
  {
    id: 9,
    text: "Wie spricht dein/e Partner/in über die Zukunft eurer Beziehung?",
    options: [
      { text: "Begeistert und selbstbewusst schließt sie/er mich in langfristige Pläne ein", score: 4 },
      { text: "Erwähnt positiv eine gemeinsame Zukunft", score: 3 },
      { text: "Vage oder vermeidet konkrete Verpflichtungen", score: 2 },
      { text: "Bringt selten die Zukunft zur Sprache", score: 1 },
      { text: "Meidet oder scheint unsicher über eine gemeinsame Zukunft", score: 0 },
    ],
  },
  {
    id: 10,
    text: "Bringt dein/e Partner/in Opfer oder geht Kompromisse für die Beziehung ein?",
    options: [
      { text: "Ja - bringt bereitwillig Opfer, damit wir funktionieren", score: 4 },
      { text: "Ja - findet Balance und geht Kompromisse ein", score: 3 },
      { text: "Manchmal, aber widerwillig", score: 2 },
      { text: "Selten - erwartet, dass ich die meisten Kompromisse mache", score: 1 },
      { text: "Nie - es ist immer ihr/sein Weg oder gar nicht", score: 0 },
    ],
  },
  {
    id: 11,
    text: "Wie zeigt dir dein/e Partner/in Zuneigung?",
    options: [
      { text: "Häufig und auf Weisen, die sich für mich bedeutungsvoll anfühlen", score: 4 },
      { text: "Zeigt regelmäßig körperliche und emotionale Zuneigung", score: 3 },
      { text: "Gelegentlich, aber ich wünschte, es wäre mehr", score: 2 },
      { text: "Zeigt selten Zuneigung", score: 1 },
      { text: "Fast nie - fühlt sich distanziert und kalt an", score: 0 },
    ],
  },
  {
    id: 12,
    text: "Verteidigt und unterstützt dich dein/e Partner/in vor anderen?",
    options: [
      { text: "Immer - steht öffentlich und privat hinter mir", score: 4 },
      { text: "Ja - setzt sich für mich ein", score: 3 },
      { text: "Manchmal, aber nicht konsequent", score: 2 },
      { text: "Verteidigt mich selten", score: 1 },
      { text: "Nie - oder schlimmer noch, kritisiert mich vor anderen", score: 0 },
    ],
  },
  {
    id: 13,
    text: "Wie vertrauenswürdig und ehrlich ist dein/e Partner/in zu dir?",
    options: [
      { text: "Völlig vertrauenswürdig - offen und ehrlich über alles", score: 4 },
      { text: "Sehr vertrauenswürdig - transparent mit mir", score: 3 },
      { text: "Meistens ehrlich, aber manchmal ausweichend", score: 2 },
      { text: "Oft verschlossen oder bei kleinen Lügen ertappt", score: 1 },
      { text: "Häufig unehrlich oder verheimlicht Dinge vor mir", score: 0 },
    ],
  },
  {
    id: 14,
    text: "Respektiert dein/e Partner/in deine Grenzen und Autonomie?",
    options: [
      { text: "Absolut - respektiert meine Unabhängigkeit und Grenzen", score: 4 },
      { text: "Ja - gibt mir Raum und respektiert meine Bedürfnisse", score: 3 },
      { text: "Normalerweise, aber überschreitet manchmal Grenzen", score: 2 },
      { text: "Missachtet oft meine Grenzen", score: 1 },
      { text: "Nein - kontrollierend oder abweisend gegenüber meinen Bedürfnissen", score: 0 },
    ],
  },
  {
    id: 15,
    text: "Wie lässt dich dein/e Partner/in über dich selbst fühlen?",
    options: [
      { text: "Großartig - ich fühle mich selbstbewusster und geschätzter durch sie/ihn", score: 4 },
      { text: "Gut - sie/er baut mich auf und unterstützt mich", score: 3 },
      { text: "Neutral - beeinflusst mein Selbstwertgefühl nicht wirklich", score: 2 },
      { text: "Manchmal schlechter - gelegentliche Kritik betrifft mich", score: 1 },
      { text: "Schlecht - ich fühle mich schlechter über mich selbst in dieser Beziehung", score: 0 },
    ],
  },
  {
    id: 16,
    text: "Erinnert sich dein/e Partner/in an Dinge, die dir wichtig sind, und würdigt sie?",
    options: [
      { text: "Ja - erinnert sich an Details und gibt mir das Gefühl, wirklich gesehen zu werden", score: 4 },
      { text: "Normalerweise - erinnert sich an wichtige Daten und Vorlieben", score: 3 },
      { text: "Manchmal - aber vergisst bedeutende Dinge", score: 2 },
      { text: "Selten - scheint nicht aufzupassen", score: 1 },
      { text: "Nie - vergisst alles, was mir wichtig ist", score: 0 },
    ],
  },
  {
    id: 17,
    text: "Wie trägt dein/e Partner/in zur Beziehung bei?",
    options: [
      { text: "Gleich oder mehr - investiert aktiv Zeit, Mühe und Fürsorge", score: 4 },
      { text: "Ziemlich gleich - wir beide geben uns Mühe", score: 3 },
      { text: "Einigermaßen - aber ich tue oft mehr", score: 2 },
      { text: "Minimal - ich trage die meiste Last der Beziehung", score: 1 },
      { text: "Kaum - es fühlt sich völlig einseitig an", score: 0 },
    ],
  },
  {
    id: 18,
    text: "Entschuldigt sich dein/e Partner/in und übernimmt Verantwortung, wenn sie/er dich verletzt?",
    options: [
      { text: "Ja - entschuldigt sich aufrichtig und bemüht sich, besser zu werden", score: 4 },
      { text: "Normalerweise - erkennt Fehler an und entschuldigt sich", score: 3 },
      { text: "Manchmal - aber Entschuldigungen können unaufrichtig wirken", score: 2 },
      { text: "Selten - defensiv und vermeidet Verantwortung", score: 1 },
      { text: "Nie - gibt mir die Schuld oder weigert sich zu entschuldigen", score: 0 },
    ],
  },
  {
    id: 19,
    text: "Wie reagiert dein/e Partner/in, wenn du Bedürfnisse oder Bedenken äußerst?",
    options: [
      { text: "Hört aufmerksam zu und nimmt meine Bedürfnisse ernst", score: 4 },
      { text: "Generell aufgeschlossen und versucht, Bedenken anzusprechen", score: 3 },
      { text: "Manchmal abweisend, aber hört schließlich zu", score: 2 },
      { text: "Oft defensiv oder gibt mir das Gefühl, schlecht für meine Bedürfnisse zu sein", score: 1 },
      { text: "Weist ab, invalidiert oder wird wütend über meine Bedürfnisse", score: 0 },
    ],
  },
  {
    id: 20,
    text: "Fühlst du dich insgesamt wirklich geliebt, geschätzt und wertgeschätzt von deinem/r Partner/in?",
    options: [
      { text: "Absolut - ich fühle mich jeden Tag tief geliebt", score: 4 },
      { text: "Ja - ich fühle mich geliebt und geschätzt", score: 3 },
      { text: "Manchmal - meine Gefühle schwanken", score: 2 },
      { text: "Selten - ich zweifle oft an ihrer/seiner Liebe", score: 1 },
      { text: "Nein - ich fühle mich nicht wirklich geliebt", score: 0 },
    ],
  },
]

export const loveMeQuizResults: Record<string, LoveMeQuizResult> = {
  deeply_loves_you: {
    level: "deeply_loves_you",
    title: "Sie/Er liebt dich zutiefst",
    emoji: "💝💕",
    description: "Dein/e Partner/in zeigt starke, konstante Anzeichen echter Liebe. Sie/Er priorisiert dich, respektiert dich, unterstützt dein Wachstum und gibt dir das Gefühl, geschätzt zu werden. Die Art, wie sie/er dich während Konflikten behandelt, deine Erfolge feiert und da ist, wenn du sie/ihn brauchst, zeigt tiefe, reife Liebe. Dies ist eine gesunde, liebevolle Beziehung.",
    advice: [
      "Schätze und pflege diese liebevolle Beziehung",
      "Setze offene Kommunikation fort, um eure starke Bindung zu erhalten",
      "Zeige Wertschätzung für die Liebe, die sie/er dir gibt",
      "Investiert weiterhin gemeinsam in die Beziehung",
      "Baut auf diesem Fundament für eine dauerhafte Partnerschaft auf",
    ],
    color: "from-rose-500 to-pink-600",
  },
  truly_loves_you: {
    level: "truly_loves_you",
    title: "Sie/Er liebt dich wirklich",
    emoji: "💖😊",
    description: "Dein/e Partner/in zeigt echte Liebe für dich. Sie/Er kümmert sich um dein Wohlergehen, unterstützt dich durch Herausforderungen und schätzt die Beziehung. Obwohl keine Beziehung perfekt ist, sind die Grundlagen stark - Respekt, Vertrauen, Zuneigung und Engagement sind klar vorhanden.",
    advice: [
      "Baue weiter auf eurem starken Fundament auf",
      "Sprich kleine Probleme an, bevor sie größer werden",
      "Äußere deine Bedürfnisse und höre auf ihre/seine",
      "Zeige weiterhin Liebe auf Weisen, die sie/er versteht",
      "Schätze das Gute, während ihr an Wachstumsbereichen arbeitet",
    ],
    color: "from-pink-500 to-rose-500",
  },
  loves_you_with_issues: {
    level: "loves_you_with_issues",
    title: "Sie/Er liebt dich, aber es gibt Probleme",
    emoji: "💛🤔",
    description: "Dein/e Partner/in liebt dich wahrscheinlich, aber es gibt einige besorgniserregende Muster oder Lücken in der Art, wie sie/er es ausdrückt. Einige Bedürfnisse werden nicht vollständig erfüllt, oder es gibt Bereiche, in denen die Beziehung gesünder sein könnte. Liebe ist vorhanden, aber sie braucht möglicherweise Arbeit, um zu gedeihen.",
    advice: [
      "Führe ehrliche Gespräche über unerfüllte Bedürfnisse",
      "Erwäge eine Paarberatung, um eure Bindung zu stärken",
      "Identifiziere spezifische Bereiche, die Verbesserung brauchen",
      "Beide Partner müssen in Veränderungen investieren",
      "Bewerte, ob ihr beide bereit seid, gemeinsam zu wachsen",
    ],
    color: "from-yellow-500 to-amber-500",
  },
  uncertain_love: {
    level: "uncertain_love",
    title: "Ihre/Seine Liebe ist unsicher",
    emoji: "💭❓",
    description: "Die Zeichen sind gemischt und besorgniserregend. Dein/e Partner/in mag sich um dich kümmern, aber es gibt erhebliche Probleme damit, wie sie/er Liebe ausdrückt, mit Konflikten umgeht oder die Beziehung priorisiert. Du fühlst dich möglicherweise häufig unsicher über ihre/seine Gefühle, was in einer engagierten Beziehung nicht gesund ist.",
    advice: [
      "Reflektiere ernsthaft, ob deine Bedürfnisse erfüllt werden",
      "Führe ein direktes Gespräch über den Zustand der Beziehung",
      "Überlege, ob diese Beziehung dich glücklich macht",
      "Suche professionelle Hilfe, wenn du versuchen möchtest, die Dinge zu verbessern",
      "Denke daran: Du verdienst es, dich geliebt und sicher zu fühlen",
    ],
    color: "from-orange-500 to-yellow-500",
  },
  questionable_love: {
    level: "questionable_love",
    title: "Ihre/Seine Liebe ist fragwürdig",
    emoji: "💔😔",
    description: "Basierend auf deinen Antworten gibt es ernsthafte Warnzeichen. Dein/e Partner/in liebt dich möglicherweise nicht auf gesunde Weise, oder der Beziehung fehlen grundlegende Elemente der Liebe wie Respekt, Unterstützung und echte Fürsorge. Du verdienst besser als das, was du derzeit erlebst.",
    advice: [
      "Bewerte ernsthaft, ob diese Beziehung gesund für dich ist",
      "Sprich mit vertrauenswürdigen Freunden, Familie oder einem Therapeuten",
      "Überlege, ob du dich sicher und geschätzt in dieser Beziehung fühlst",
      "Ignoriere keine Warnzeichen - sie sind Warnungen aus einem Grund",
      "Denke daran: Echte Liebe lässt dich gut über dich selbst fühlen",
    ],
    color: "from-red-500 to-orange-500",
  },
  not_healthy_love: {
    level: "not_healthy_love",
    title: "Das scheint keine gesunde Liebe zu sein",
    emoji: "🚩💔",
    description: "Deine Antworten deuten auf eine Beziehung hin, der es an gesunder Liebe fehlt. Du erlebst möglicherweise emotionale Vernachlässigung, Manipulation, Kontrolle oder andere schädliche Dynamiken. Wahre Liebe beinhaltet Respekt, Unterstützung, Vertrauen und lässt dich geschätzt fühlen - nicht vermindert oder unsicher.",
    advice: [
      "Erwäge, einen Therapeuten oder Berater zu kontaktieren",
      "Sprich mit vertrauenswürdigen Menschen in deinem Leben über deine Beziehung",
      "Bewerte, ob diese Beziehung gut für dein Wohlbefinden ist",
      "Du verdienst einen Partner, der dich wirklich liebt und respektiert",
      "Gib dich nicht mit weniger zufrieden als du verdienst - dein Glück zählt",
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
