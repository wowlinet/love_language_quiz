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
    text: "Ich fühle mich am meisten geliebt, wenn mein Partner...",
    options: [
      { text: "Mir sagt, dass er/sie mich liebt und schätzt", language: "Worte der Bestätigung" },
      { text: "Qualitätszeit mit mir verbringt ohne Ablenkungen", language: "Qualitätszeit" },
      { text: "Mir durchdachte Geschenke gibt", language: "Geschenke empfangen" },
      { text: "Dinge tut, um mir zu helfen", language: "Hilfsbereitschaft" },
      { text: "Meine Hand hält oder mich umarmt", language: "Körperliche Berührung" },
    ],
  },
  {
    id: 2,
    text: "Was mich am meisten verletzt, ist, wenn mein Partner...",
    options: [
      { text: "Mich kritisiert oder meine Bemühungen nicht anerkennt", language: "Worte der Bestätigung" },
      { text: "Abgelenkt ist oder mir nicht seine volle Aufmerksamkeit schenkt", language: "Qualitätszeit" },
      { text: "Besondere Anlässe vergisst oder mir keine Geschenke bringt", language: "Geschenke empfangen" },
      { text: "Mir nicht hilft, wenn ich es brauche", language: "Hilfsbereitschaft" },
      { text: "Körperlich distanziert ist oder keine Zuneigung zeigt", language: "Körperliche Berührung" },
    ],
  },
  {
    id: 3,
    text: "Ich zeige anderen Liebe, indem ich...",
    options: [
      { text: "Ihnen sage, wie viel sie mir bedeuten", language: "Worte der Bestätigung" },
      { text: "Qualitätszeit zusammen verbringe", language: "Qualitätszeit" },
      { text: "Ihnen bedeutungsvolle Geschenke mache", language: "Geschenke empfangen" },
      { text: "Hilfreiche Dinge für sie tue", language: "Hilfsbereitschaft" },
      { text: "Umarmungen, Küsse und körperliche Zuneigung gebe", language: "Körperliche Berührung" },
    ],
  },
  {
    id: 4,
    text: "Was mich am meisten geschätzt fühlen lässt, ist...",
    options: [
      { text: "Komplimente und ermutigende Worte zu erhalten", language: "Worte der Bestätigung" },
      { text: "Ungestörte Zeit zusammen zu haben", language: "Qualitätszeit" },
      { text: "Ein überraschendes Geschenk oder Zeichen der Liebe zu erhalten", language: "Geschenke empfangen" },
      { text: "Wenn jemand eine Aufgabe erledigt, um meine Last zu erleichtern", language: "Hilfsbereitschaft" },
      { text: "Eine warme Umarmung oder Händchenhalten", language: "Körperliche Berührung" },
    ],
  },
  {
    id: 5,
    text: "Wenn ich wählen könnte, würde ich es vorziehen, dass mein Partner...",
    options: [
      { text: "'Ich liebe dich' sagt und oft seine Gefühle ausdrückt", language: "Worte der Bestätigung" },
      { text: "Einen besonderen Date-Abend nur für uns beide plant", language: "Qualitätszeit" },
      { text: "Mich mit einem durchdachten Geschenk überrascht", language: "Geschenke empfangen" },
      { text: "Mir bei Haushaltsaufgaben hilft", language: "Hilfsbereitschaft" },
      { text: "Mit mir auf der Couch kuschelt", language: "Körperliche Berührung" },
    ],
  },
  {
    id: 6,
    text: "Ich fühle mich von meinem Partner getrennt, wenn...",
    options: [
      { text: "Er/sie seine Liebe nicht verbal ausdrückt", language: "Worte der Bestätigung" },
      { text: "Wir nicht genug Qualitätszeit zusammen verbringen", language: "Qualitätszeit" },
      { text: "Er/sie wichtige Daten vergisst oder keine Geschenke macht", language: "Geschenke empfangen" },
      { text: "Er/sie mir nicht hilft, wenn ich überfordert bin", language: "Hilfsbereitschaft" },
      { text: "Es nicht genug körperliche Zuneigung gibt", language: "Körperliche Berührung" },
    ],
  },
  {
    id: 7,
    text: "Das beste Geschenk, das mir jemand machen könnte, ist...",
    options: [
      { text: "Ein herzlicher Brief, der seine Gefühle ausdrückt", language: "Worte der Bestätigung" },
      { text: "Seine ungeteilte Aufmerksamkeit für einen Nachmittag", language: "Qualitätszeit" },
      { text: "Etwas, das ich schon lange haben wollte", language: "Geschenke empfangen" },
      { text: "Hilfe bei einem Projekt, an dem ich arbeite", language: "Hilfsbereitschaft" },
      { text: "Eine lange, warme Umarmung", language: "Körperliche Berührung" },
    ],
  },
  {
    id: 8,
    text: "Ich weiß, dass mein Partner mich liebt, wenn...",
    options: [
      { text: "Er/sie mir sagt, dass ich ihm/ihr wichtig bin", language: "Worte der Bestätigung" },
      { text: "Er/sie Zeit für Aktivitäten macht, die wir beide genießen", language: "Qualitätszeit" },
      { text: "Er/sie sich erinnert, was ich mag und mich damit überrascht", language: "Geschenke empfangen" },
      { text: "Er/sie Dinge tut, um mein Leben einfacher zu machen", language: "Hilfsbereitschaft" },
      { text: "Er/sie mich den ganzen Tag über berührt", language: "Körperliche Berührung" },
    ],
  },
  {
    id: 9,
    text: "Mein idealer Abend mit meinem Partner wäre...",
    options: [
      { text: "Ein tiefes Gespräch, in dem wir unsere Gedanken teilen", language: "Worte der Bestätigung" },
      { text: "Etwas Spaßiges zusammen ohne Unterbrechungen zu tun", language: "Qualitätszeit" },
      { text: "Kleine, durchdachte Geschenke auszutauschen", language: "Geschenke empfangen" },
      { text: "Zusammen an einem Heimprojekt zu arbeiten", language: "Hilfsbereitschaft" },
      { text: "Beim Filmschauen zu kuscheln", language: "Körperliche Berührung" },
    ],
  },
  {
    id: 10,
    text: "Was ich in einer Beziehung am meisten schätze, ist...",
    options: [
      { text: "Offene Kommunikation und verbale Wertschätzung", language: "Worte der Bestätigung" },
      { text: "Qualitätszeit und ungeteilte Aufmerksamkeit", language: "Qualitätszeit" },
      { text: "Aufmerksamkeit durch Geschenke gezeigt", language: "Geschenke empfangen" },
      { text: "Handlungen, die Fürsorge und Unterstützung zeigen", language: "Hilfsbereitschaft" },
      { text: "Körperliche Nähe und Zuneigung", language: "Körperliche Berührung" },
    ],
  },
]

export const loveLanguageDescriptions: Record<string, { title: string; description: string; tips: string[] }> = {
  "Worte der Bestätigung": {
    title: "Worte der Bestätigung",
    description: "Du fühlst dich am meisten geliebt, wenn dein Partner seine Gefühle verbal ausdrückt. Komplimente, Worte der Wertschätzung und verbale Ermutigung bedeuten dir die Welt. Du blühst auf, wenn du 'Ich liebe dich' und andere bestätigende Worte hörst.",
    tips: [
      "Drücke deine Gefühle regelmäßig mit Worten aus",
      "Schreibe Liebesbriefe oder sende süße Textnachrichten",
      "Gib oft echte Komplimente",
      "Erkenne die Bemühungen deines Partners verbal an",
      "Sage 'Ich liebe dich' häufig und bedeutungsvoll",
    ],
  },
  "Qualitätszeit": {
    title: "Qualitätszeit",
    description: "Du fühlst dich am meisten geliebt, wenn dein Partner dir seine ungeteilte Aufmerksamkeit schenkt. Zusammensein, Erfahrungen teilen und bedeutungsvolle Gespräche führen sind das, was dir am wichtigsten ist. Ablenkungen während eurer gemeinsamen Zeit können verletzend sein.",
    tips: [
      "Lege Telefone und Geräte während Gesprächen weg",
      "Plane regelmäßige Date-Abende oder Aktivitäten zusammen",
      "Macht Spaziergänge und redet über euren Tag",
      "Halte Augenkontakt während Gesprächen",
      "Erschaffe Traditionen und Rituale, die ihr teilen könnt",
    ],
  },
  "Geschenke empfangen": {
    title: "Geschenke empfangen",
    description: "Du fühlst dich am meisten geliebt, wenn dein Partner dir durchdachte Geschenke macht. Es geht nicht um Materialismus – es geht um den Gedanken, die Mühe und die Symbolik hinter dem Geschenk. Diese greifbaren Symbole der Liebe sind dir sehr wichtig.",
    tips: [
      "Erinnere dich an wichtige Daten und Anlässe",
      "Gib durchdachte Geschenke, die zeigen, dass du zugehört hast",
      "Das Geschenk muss nicht teuer sein – es zählt der Gedanke",
      "Bewahre kleine Zeichen oder Erinnerungsstücke aus eurer Beziehung auf",
      "Überrasche deinen Partner mit unerwarteten Geschenken",
    ],
  },
  "Hilfsbereitschaft": {
    title: "Hilfsbereitschaft",
    description: "Du fühlst dich am meisten geliebt, wenn dein Partner hilfreiche Dinge für dich tut. Taten sagen mehr als Worte – ein Essen kochen, eine Besorgung machen oder bei Aufgaben helfen zeigt dir, dass du umsorgt und unterstützt wirst.",
    tips: [
      "Hilf bei Haushaltsaufgaben ohne gefragt zu werden",
      "Erledige Besorgungen oder Aufgaben, um ihre Last zu erleichtern",
      "Repariere etwas, das kaputt war",
      "Koche ihr Lieblingsessen",
      "Übernimm Verantwortungen, wenn sie müde oder beschäftigt sind",
    ],
  },
  "Körperliche Berührung": {
    title: "Körperliche Berührung",
    description: "Du fühlst dich am meisten geliebt durch körperliche Zuneigung und Nähe. Umarmungen, Küsse, Händchenhalten und andere Formen körperlicher Berührung lassen dich verbunden und geliebt fühlen. Körperliche Distanz oder fehlende Zuneigung kann sich wie emotionale Distanz anfühlen.",
    tips: [
      "Halte Hände beim gemeinsamen Gehen",
      "Gib regelmäßig Umarmungen und Küsse",
      "Sitze nah beieinander",
      "Biete Rückenmassagen oder Massagen an",
      "Körperliche Anwesenheit in schwierigen Zeiten ist besonders wichtig",
    ],
  },
}
