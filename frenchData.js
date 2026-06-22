// Lerninhalte für die Französisch-Lernwebsite (A1, Deutsch als Hilfssprache)
window.FRENCH = {
  lessons: [
    {
      id: "greet",
      num: "01",
      title: "Bonjour !",
      subtitle: "Begrüßung & sich vorstellen",
      accent: "blue",
      vocab: [
        { fr: "Bonjour", de: "Guten Tag / Hallo" },
        { fr: "Salut", de: "Hi / Tschüss (locker)" },
        { fr: "Bonsoir", de: "Guten Abend" },
        { fr: "Au revoir", de: "Auf Wiedersehen" },
        { fr: "Merci", de: "Danke" },
        { fr: "S'il vous plaît", de: "Bitte" },
        { fr: "Oui", de: "Ja" },
        { fr: "Non", de: "Nein" },
        { fr: "Comment ça va ?", de: "Wie geht's?" },
        { fr: "Je m'appelle…", de: "Ich heiße…" }
      ],
      questions: [
        { kind: "mc", prompt: "Was bedeutet « Bonjour » ?", speak: "Bonjour", answer: "Guten Tag", choices: ["Guten Tag", "Danke", "Tschüss", "Ja"] },
        { kind: "mc", audio: "Merci", prompt: "Hör zu. Was bedeutet das Wort?", answer: "Danke", choices: ["Danke", "Bitte", "Hallo", "Nein"] },
        { kind: "type", prompt: "Vervollständige: « Au _____ »", sub: "(Auf Wiedersehen)", answer: "revoir", accept: ["revoir"], hint: "Beginnt mit « r »" },
        { kind: "mc", prompt: "Wie sagt man « Danke » ?", answer: "Merci", choices: ["Merci", "Salut", "Oui", "Pardon"] },
        { kind: "memory", prompt: "Finde die passenden Paare.", pairs: [["Bonjour", "Hallo"], ["Merci", "Danke"], ["Oui", "Ja"], ["Non", "Nein"]] },
        { kind: "mc", audio: "Salut", prompt: "Hör zu. Welches Wort hörst du?", answer: "Salut", choices: ["Salut", "Merci", "Bonsoir", "Pardon"] },
        { kind: "mc", prompt: "« Je m'appelle Anna » heißt…", speak: "Je m'appelle Anna", answer: "Ich heiße Anna", choices: ["Ich heiße Anna", "Mir geht es gut", "Ich bin müde", "Wie heißt du?"] },
        { kind: "type", prompt: "Wie sagt man « Ja » ?", answer: "oui", accept: ["oui"], hint: "3 Buchstaben" },
        { kind: "mc", prompt: "« Comment ça va ? » bedeutet…", speak: "Comment ça va ?", answer: "Wie geht es dir?", choices: ["Wie geht es dir?", "Wie heißt du?", "Woher kommst du?", "Wie spät ist es?"] },
        { kind: "mc", prompt: "Es ist Abend. Was sagst du zur Begrüßung?", answer: "Bonsoir", choices: ["Bonsoir", "Bonjour", "Bonne nuit", "Au revoir"] }
      ]
    },
    {
      id: "numbers",
      num: "02",
      title: "Les chiffres",
      subtitle: "Die Zahlen 0 – 10",
      accent: "red",
      vocab: [
        { fr: "zéro", de: "0" },
        { fr: "un", de: "1" },
        { fr: "deux", de: "2" },
        { fr: "trois", de: "3" },
        { fr: "quatre", de: "4" },
        { fr: "cinq", de: "5" },
        { fr: "six", de: "6" },
        { fr: "sept", de: "7" },
        { fr: "huit", de: "8" },
        { fr: "neuf", de: "9" },
        { fr: "dix", de: "10" }
      ],
      questions: [
        { kind: "mc", image: "3", prompt: "Welches Wort passt zur Zahl?", answer: "trois", choices: ["trois", "deux", "treize", "trente"] },
        { kind: "mc", audio: "cinq", prompt: "Hör zu. Welche Zahl ist das?", answer: "5", choices: ["5", "9", "6", "2"] },
        { kind: "mc", prompt: "« sept » ist welche Zahl?", speak: "sept", answer: "7", choices: ["7", "6", "9", "2"] },
        { kind: "type", image: "7", prompt: "Schreibe die Zahl auf Französisch.", answer: "sept", accept: ["sept"], hint: "Beginnt mit « s »" },
        { kind: "memory", prompt: "Ordne Wort und Zahl zu.", pairs: [["un", "1"], ["quatre", "4"], ["six", "6"], ["dix", "10"]] },
        { kind: "mc", prompt: "« neuf » =", speak: "neuf", answer: "9", choices: ["9", "4", "2", "19"] },
        { kind: "mc", image: "10", prompt: "Welches Wort passt zur Zahl?", answer: "dix", choices: ["dix", "deux", "douze", "huit"] },
        { kind: "mc", audio: "huit", prompt: "Hör zu. Welche Zahl ist das?", answer: "8", choices: ["8", "2", "10", "6"] },
        { kind: "type", image: "0", prompt: "Schreibe die Zahl auf Französisch.", answer: "zéro", accept: ["zéro", "zero"], hint: "Beginnt mit « z »" },
        { kind: "mc", prompt: "« deux » =", speak: "deux", answer: "2", choices: ["2", "10", "12", "3"] }
      ]
    },
    {
      id: "colors",
      num: "03",
      title: "Les couleurs",
      subtitle: "Die Farben",
      accent: "blue",
      vocab: [
        { fr: "rouge", de: "rot" },
        { fr: "bleu", de: "blau" },
        { fr: "vert", de: "grün" },
        { fr: "jaune", de: "gelb" },
        { fr: "noir", de: "schwarz" },
        { fr: "blanc", de: "weiß" },
        { fr: "orange", de: "orange" },
        { fr: "rose", de: "rosa" },
        { fr: "gris", de: "grau" },
        { fr: "marron", de: "braun" }
      ],
      questions: [
        { kind: "mc", prompt: "Was bedeutet « rouge » ?", speak: "rouge", answer: "rot", choices: ["rot", "grün", "blau", "gelb"] },
        { kind: "mc", image: "🟥", prompt: "Welches Wort passt zur Farbe?", answer: "rouge", choices: ["rouge", "bleu", "vert", "jaune"] },
        { kind: "mc", audio: "bleu", prompt: "Hör zu. Welche Farbe ist das?", answer: "blau", choices: ["blau", "schwarz", "weiß", "grau"] },
        { kind: "type", image: "🟩", prompt: "Schreibe diese Farbe auf Französisch.", answer: "vert", accept: ["vert"], hint: "Beginnt mit « v »" },
        { kind: "type", prompt: "Wie sagt man « grün » ?", answer: "vert", accept: ["vert"], hint: "Beginnt mit « v »" },
        { kind: "mc", prompt: "Die Sonne ist…", speak: "jaune", answer: "jaune", choices: ["jaune", "rose", "noir", "vert"] },
        { kind: "memory", prompt: "Finde die passenden Paare.", pairs: [["rouge", "rot"], ["bleu", "blau"], ["noir", "schwarz"], ["blanc", "weiß"]] },
        { kind: "mc", prompt: "« blanc » bedeutet…", speak: "blanc", answer: "weiß", choices: ["weiß", "schwarz", "grau", "braun"] },
        { kind: "type", prompt: "Schreibe « schwarz » auf Französisch.", answer: "noir", accept: ["noir"], hint: "4 Buchstaben" },
        { kind: "mc", audio: "vert", prompt: "Hör zu. Welche Farbe hörst du?", answer: "grün", choices: ["grün", "gelb", "rosa", "orange"] },
        { kind: "mc", prompt: "« rose » ist welche Farbe?", speak: "rose", answer: "rosa", choices: ["rosa", "rot", "grau", "braun"] },
        { kind: "memory", prompt: "Ordne Farbe und Bedeutung zu.", pairs: [["vert", "grün"], ["jaune", "gelb"], ["orange", "orange"], ["gris", "grau"]] }
      ]
    },
    {
      id: "family",
      num: "04",
      title: "La famille",
      subtitle: "Die Familie",
      accent: "red",
      vocab: [
        { fr: "la mère", de: "die Mutter" },
        { fr: "le père", de: "der Vater" },
        { fr: "le frère", de: "der Bruder" },
        { fr: "la sœur", de: "die Schwester" },
        { fr: "les parents", de: "die Eltern" },
        { fr: "le fils", de: "der Sohn" },
        { fr: "la fille", de: "die Tochter" },
        { fr: "la grand-mère", de: "die Großmutter" },
        { fr: "le grand-père", de: "der Großvater" },
        { fr: "l'enfant", de: "das Kind" }
      ],
      questions: [
        { kind: "mc", prompt: "Was bedeutet « la mère » ?", speak: "la mère", answer: "die Mutter", choices: ["die Mutter", "die Schwester", "die Tochter", "die Tante"] },
        { kind: "mc", audio: "le père", prompt: "Hör zu. Wer ist das?", answer: "der Vater", choices: ["der Vater", "der Bruder", "der Sohn", "der Großvater"] },
        { kind: "type", prompt: "Wie sagt man « die Schwester » ?", answer: "la sœur", accept: ["la soeur", "soeur", "sœur", "la sœur"], hint: "« la s… »" },
        { kind: "mc", prompt: "« le frère » ist…", speak: "le frère", answer: "der Bruder", choices: ["der Bruder", "der Vater", "der Sohn", "das Kind"] },
        { kind: "memory", prompt: "Finde die passenden Paare.", pairs: [["la mère", "Mutter"], ["le père", "Vater"], ["le frère", "Bruder"], ["la sœur", "Schwester"]] },
        { kind: "mc", prompt: "« les parents » bedeutet…", speak: "les parents", answer: "die Eltern", choices: ["die Eltern", "die Kinder", "die Großeltern", "die Geschwister"] },
        { kind: "mc", audio: "la fille", prompt: "Hör zu. Was bedeutet das?", answer: "die Tochter", choices: ["die Tochter", "die Mutter", "die Schwester", "das Kind"] },
        { kind: "type", prompt: "Wie sagt man « das Kind » ?", answer: "l'enfant", accept: ["l'enfant", "enfant", "lenfant"], hint: "« l'… »" },
        { kind: "mc", prompt: "« la grand-mère » ist…", speak: "la grand-mère", answer: "die Großmutter", choices: ["die Großmutter", "die Mutter", "die Tante", "die Schwester"] },
        { kind: "memory", prompt: "Ordne zu.", pairs: [["le fils", "Sohn"], ["la fille", "Tochter"], ["le grand-père", "Großvater"], ["l'enfant", "Kind"]] }
      ]
    },
    {
      id: "days",
      num: "05",
      title: "Les jours",
      subtitle: "Wochentage & Zeit",
      accent: "blue",
      vocab: [
        { fr: "lundi", de: "Montag" },
        { fr: "mardi", de: "Dienstag" },
        { fr: "mercredi", de: "Mittwoch" },
        { fr: "jeudi", de: "Donnerstag" },
        { fr: "vendredi", de: "Freitag" },
        { fr: "samedi", de: "Samstag" },
        { fr: "dimanche", de: "Sonntag" },
        { fr: "aujourd'hui", de: "heute" },
        { fr: "demain", de: "morgen" },
        { fr: "hier", de: "gestern" }
      ],
      questions: [
        { kind: "mc", prompt: "Was bedeutet « lundi » ?", speak: "lundi", answer: "Montag", choices: ["Montag", "Dienstag", "Sonntag", "Freitag"] },
        { kind: "mc", audio: "samedi", prompt: "Hör zu. Welcher Tag ist das?", answer: "Samstag", choices: ["Samstag", "Sonntag", "Freitag", "Mittwoch"] },
        { kind: "type", prompt: "Wie sagt man « heute » ?", answer: "aujourd'hui", accept: ["aujourd'hui", "aujourdhui"], hint: "« a… »" },
        { kind: "mc", prompt: "« vendredi » ist…", speak: "vendredi", answer: "Freitag", choices: ["Freitag", "Donnerstag", "Mittwoch", "Montag"] },
        { kind: "memory", prompt: "Finde die passenden Paare.", pairs: [["lundi", "Montag"], ["mardi", "Dienstag"], ["jeudi", "Donnerstag"], ["dimanche", "Sonntag"]] },
        { kind: "mc", prompt: "« demain » bedeutet…", speak: "demain", answer: "morgen", choices: ["morgen", "heute", "gestern", "jetzt"] },
        { kind: "mc", audio: "mercredi", prompt: "Hör zu. Welcher Tag ist das?", answer: "Mittwoch", choices: ["Mittwoch", "Montag", "Dienstag", "Samstag"] },
        { kind: "type", prompt: "Wie sagt man « gestern » ?", answer: "hier", accept: ["hier"], hint: "4 Buchstaben" },
        { kind: "mc", prompt: "Welcher Tag kommt nach « jeudi » ?", answer: "vendredi", choices: ["vendredi", "mercredi", "samedi", "lundi"] },
        { kind: "memory", prompt: "Ordne zu.", pairs: [["aujourd'hui", "heute"], ["demain", "morgen"], ["hier", "gestern"], ["samedi", "Samstag"]] }
      ]
    },
    {
      id: "cafe",
      num: "06",
      title: "Au café",
      subtitle: "Essen & Trinken bestellen",
      accent: "red",
      vocab: [
        { fr: "un café", de: "ein Kaffee" },
        { fr: "un thé", de: "ein Tee" },
        { fr: "de l'eau", de: "Wasser" },
        { fr: "un croissant", de: "ein Croissant" },
        { fr: "du pain", de: "Brot" },
        { fr: "une pomme", de: "ein Apfel" },
        { fr: "le fromage", de: "der Käse" },
        { fr: "l'addition", de: "die Rechnung" },
        { fr: "Je voudrais…", de: "Ich hätte gern…" },
        { fr: "C'est combien ?", de: "Wie viel kostet das?" }
      ],
      questions: [
        { kind: "mc", prompt: "Was bedeutet « un café » ?", speak: "un café", answer: "ein Kaffee", choices: ["ein Kaffee", "ein Tee", "ein Saft", "ein Wasser"] },
        { kind: "mc", image: "🍎", prompt: "Welches Wort passt zum Bild?", answer: "une pomme", choices: ["une pomme", "du pain", "un café", "le fromage"] },
        { kind: "type", image: "🥐", prompt: "Schreibe das Wort auf Französisch.", sub: "(ein Croissant)", answer: "un croissant", accept: ["un croissant", "croissant"], hint: "« un c… »" },
        { kind: "mc", audio: "un croissant", prompt: "Hör zu. Was bestellst du?", answer: "ein Croissant", choices: ["ein Croissant", "ein Brot", "ein Apfel", "ein Käse"] },
        { kind: "type", prompt: "Vervollständige: « Je _____ un café »", sub: "(Ich hätte gern einen Kaffee)", answer: "voudrais", accept: ["voudrais"], hint: "« v… »" },
        { kind: "mc", prompt: "« de l'eau » bedeutet…", speak: "de l'eau", answer: "Wasser", choices: ["Wasser", "Wein", "Milch", "Saft"] },
        { kind: "memory", prompt: "Finde die passenden Paare.", pairs: [["un café", "Kaffee"], ["du pain", "Brot"], ["une pomme", "Apfel"], ["le fromage", "Käse"]] },
        { kind: "mc", prompt: "Du willst zahlen. Du fragst nach…", speak: "l'addition", answer: "l'addition", choices: ["l'addition", "le menu", "le café", "la pomme"] },
        { kind: "mc", audio: "un thé", prompt: "Hör zu. Was bestellst du?", answer: "ein Tee", choices: ["ein Tee", "ein Kaffee", "ein Wasser", "ein Saft"] },
        { kind: "type", prompt: "Wie sagt man « Brot » ?", answer: "pain", accept: ["pain", "du pain"], hint: "« p… »" },
        { kind: "mc", prompt: "« C'est combien ? » bedeutet…", speak: "C'est combien ?", answer: "Wie viel kostet das?", choices: ["Wie viel kostet das?", "Was ist das?", "Wo ist das?", "Wie heißt das?"] },
        { kind: "memory", prompt: "Ordne zu.", pairs: [["un thé", "Tee"], ["de l'eau", "Wasser"], ["l'addition", "Rechnung"], ["un croissant", "Croissant"]] }
      ]
    },
    {
      id: "politeness",
      num: "07",
      title: "La politesse",
      subtitle: "Höfliche Wendungen",
      accent: "blue",
      vocab: [
        { fr: "Pardon", de: "Entschuldigung" },
        { fr: "Excusez-moi", de: "Entschuldigen Sie" },
        { fr: "De rien", de: "Gern geschehen" },
        { fr: "Enchanté", de: "Sehr erfreut" },
        { fr: "Bienvenue", de: "Willkommen" },
        { fr: "Bonne journée", de: "Schönen Tag" },
        { fr: "Bonne nuit", de: "Gute Nacht" },
        { fr: "À bientôt", de: "Bis bald" },
        { fr: "Comment vous appelez-vous ?", de: "Wie heißen Sie?" },
        { fr: "Je ne comprends pas", de: "Ich verstehe nicht" }
      ],
      questions: [
        { kind: "mc", prompt: "Was bedeutet « Pardon » ?", speak: "Pardon", answer: "Entschuldigung", choices: ["Entschuldigung", "Danke", "Bitte", "Willkommen"] },
        { kind: "mc", audio: "Bienvenue", prompt: "Hör zu. Was bedeutet das?", answer: "Willkommen", choices: ["Willkommen", "Bis bald", "Gute Nacht", "Danke"] },
        { kind: "type", prompt: "Jemand dankt dir. Du antwortest: « De _____ »", sub: "(Gern geschehen)", answer: "rien", accept: ["rien"], hint: "4 Buchstaben" },
        { kind: "mc", prompt: "« À bientôt » bedeutet…", speak: "À bientôt", answer: "Bis bald", choices: ["Bis bald", "Gute Nacht", "Guten Tag", "Willkommen"] },
        { kind: "memory", prompt: "Finde die passenden Paare.", pairs: [["Pardon", "Entschuldigung"], ["De rien", "Gern geschehen"], ["Bienvenue", "Willkommen"], ["À bientôt", "Bis bald"]] },
        { kind: "mc", prompt: "Du gehst schlafen. Du sagst…", speak: "Bonne nuit", answer: "Bonne nuit", choices: ["Bonne nuit", "Bonne journée", "Bonjour", "Bienvenue"] },
        { kind: "mc", audio: "Enchanté", prompt: "Hör zu. Was bedeutet das?", answer: "Sehr erfreut", choices: ["Sehr erfreut", "Willkommen", "Bis bald", "Entschuldigung"] },
        { kind: "type", prompt: "Wie sagt man « Entschuldigen Sie » ?", answer: "Excusez-moi", accept: ["excusez-moi", "excusez moi"], hint: "« Excusez-… »" },
        { kind: "mc", prompt: "Du verstehst etwas nicht. Du sagst…", speak: "Je ne comprends pas", answer: "Je ne comprends pas", choices: ["Je ne comprends pas", "Je voudrais", "Je m'appelle", "Comment ça va"] },
        { kind: "memory", prompt: "Ordne zu.", pairs: [["Bonne journée", "Schönen Tag"], ["Bonne nuit", "Gute Nacht"], ["Enchanté", "Sehr erfreut"], ["Excusez-moi", "Entschuldigen Sie"]] }
      ]
    },
    {
      id: "body",
      num: "08",
      title: "Le corps",
      subtitle: "Der Körper",
      accent: "red",
      vocab: [
        { fr: "la tête", de: "der Kopf" },
        { fr: "les yeux", de: "die Augen" },
        { fr: "le nez", de: "die Nase" },
        { fr: "la bouche", de: "der Mund" },
        { fr: "l'oreille", de: "das Ohr" },
        { fr: "la main", de: "die Hand" },
        { fr: "le bras", de: "der Arm" },
        { fr: "la jambe", de: "das Bein" },
        { fr: "le pied", de: "der Fuß" },
        { fr: "le cœur", de: "das Herz" }
      ],
      questions: [
        { kind: "mc", prompt: "Was bedeutet « la tête » ?", speak: "la tête", answer: "der Kopf", choices: ["der Kopf", "die Hand", "der Fuß", "das Ohr"] },
        { kind: "mc", image: "✋", prompt: "Welches Wort passt zum Bild?", answer: "la main", choices: ["la main", "le pied", "le bras", "la tête"] },
        { kind: "mc", audio: "la main", prompt: "Hör zu. Welcher Körperteil?", answer: "die Hand", choices: ["die Hand", "der Arm", "das Bein", "der Fuß"] },
        { kind: "type", image: "👁️", prompt: "Schreibe das Wort (Plural) auf Französisch.", sub: "(die Augen)", answer: "les yeux", accept: ["les yeux", "yeux"], hint: "« les y… »" },
        { kind: "type", prompt: "Wie sagt man « die Nase » ?", answer: "le nez", accept: ["le nez", "nez"], hint: "« le n… »" },
        { kind: "mc", prompt: "« les yeux » bedeutet…", speak: "les yeux", answer: "die Augen", choices: ["die Augen", "die Ohren", "die Hände", "die Füße"] },
        { kind: "memory", prompt: "Finde die passenden Paare.", pairs: [["la tête", "Kopf"], ["la main", "Hand"], ["le pied", "Fuß"], ["le nez", "Nase"]] },
        { kind: "mc", prompt: "« la bouche » ist…", speak: "la bouche", answer: "der Mund", choices: ["der Mund", "die Nase", "das Ohr", "das Auge"] },
        { kind: "mc", audio: "le cœur", prompt: "Hör zu. Was bedeutet das?", answer: "das Herz", choices: ["das Herz", "der Kopf", "die Hand", "das Bein"] },
        { kind: "type", prompt: "Wie sagt man « der Fuß » ?", answer: "le pied", accept: ["le pied", "pied"], hint: "« le p… »" },
        { kind: "mc", prompt: "« la jambe » ist…", speak: "la jambe", answer: "das Bein", choices: ["das Bein", "der Arm", "die Hand", "der Fuß"] },
        { kind: "memory", prompt: "Ordne zu.", pairs: [["les yeux", "Augen"], ["l'oreille", "Ohr"], ["le bras", "Arm"], ["la jambe", "Bein"]] }
      ]
    },
    {
      id: "grammar",
      num: "09",
      title: "Les phrases",
      subtitle: "Grammatik: Artikel & être",
      accent: "blue",
      vocab: [
        { fr: "le / la", de: "der / die (bestimmt)" },
        { fr: "un / une", de: "ein / eine (unbestimmt)" },
        { fr: "je suis", de: "ich bin" },
        { fr: "tu es", de: "du bist" },
        { fr: "il / elle est", de: "er / sie ist" },
        { fr: "nous sommes", de: "wir sind" },
        { fr: "vous êtes", de: "ihr seid / Sie sind" },
        { fr: "ils / elles sont", de: "sie sind (Plural)" },
        { fr: "c'est", de: "das ist" },
        { fr: "et / mais", de: "und / aber" }
      ],
      questions: [
        { kind: "mc", prompt: "Welcher Artikel passt: « ___ maison » ? (weiblich)", answer: "la", choices: ["la", "le", "un", "les"] },
        { kind: "mc", prompt: "Welcher Artikel passt: « ___ livre » ? (männlich)", answer: "le", choices: ["le", "la", "une", "les"] },
        { kind: "type", prompt: "Vervollständige: « Je _____ Margot »", sub: "(Ich bin Margot)", answer: "suis", accept: ["suis"], hint: "« être » in der ich-Form" },
        { kind: "mc", prompt: "« Tu ___ français » – welche Form von être?", speak: "Tu es français", answer: "es", choices: ["es", "est", "suis", "sont"] },
        { kind: "memory", prompt: "Ordne Pronomen und être-Form zu.", pairs: [["je", "suis"], ["tu", "es"], ["il", "est"], ["nous", "sommes"]] },
        { kind: "mc", prompt: "« Nous ___ amis » – welche Form?", speak: "Nous sommes amis", answer: "sommes", choices: ["sommes", "êtes", "sont", "est"] },
        { kind: "type", prompt: "Vervollständige: « ___ un chat »", sub: "(Das ist eine Katze)", answer: "c'est", accept: ["c'est", "cest"], hint: "« c’… »" },
        { kind: "mc", prompt: "« Vous ___ professeur » – welche Form?", speak: "Vous êtes professeur", answer: "êtes", choices: ["êtes", "es", "sommes", "est"] },
        { kind: "mc", prompt: "Welches Wort bedeutet « aber » ?", speak: "mais", answer: "mais", choices: ["mais", "et", "ou", "avec"] },
        { kind: "memory", prompt: "Ordne zu.", pairs: [["c'est", "das ist"], ["et", "und"], ["mais", "aber"], ["elles sont", "sie sind"]] }
      ]
    }
  ],
  badges: [
    { id: "greet", title: "Premiers mots", de: "Lektion « Bonjour ! » geschafft" },
    { id: "numbers", title: "Compteur", de: "Lektion « Les chiffres » geschafft" },
    { id: "colors", title: "Arc-en-ciel", de: "Lektion « Les couleurs » geschafft" },
    { id: "family", title: "En famille", de: "Lektion « La famille » geschafft" },
    { id: "days", title: "Calendrier", de: "Lektion « Les jours » geschafft" },
    { id: "cafe", title: "Au comptoir", de: "Lektion « Au café » geschafft" },
    { id: "politeness", title: "Très poli", de: "Lektion « La politesse » geschafft" },
    { id: "body", title: "Anatomie", de: "Lektion « Le corps » geschafft" },
    { id: "grammar", title: "Grammairien", de: "Lektion « Les phrases » geschafft" },
    { id: "review", title: "Polyglotte", de: "Großen Test bestanden" },
    { id: "perfect", title: "Sans faute", de: "Eine Lektion ohne Fehler" },
    { id: "streak", title: "En feu", de: "5 richtige in Folge" }
  ]
};
