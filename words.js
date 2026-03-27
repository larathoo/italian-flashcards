// Italian vocabulary organised into three CEFR levels.
// Each level array contains only the NEW words added at that level.
// The exported italianLevels object combines them cumulatively.

// ── A1 Beginner ────────────────────────────────────────────────────────────
// Core survival phrases, basic nouns/adjectives, and infinitive verbs only.
const italianWordsA1 = [

  // Greetings & survival phrases
  { english: "hello / bye (informal)", translations: ["ciao"] },
  { english: "hello (formal)", translations: ["salve"] },
  { english: "good morning", translations: ["buongiorno"] },
  { english: "good evening", translations: ["buonasera"] },
  { english: "good night", translations: ["buonanotte"] },
  { english: "goodbye", translations: ["arrivederci"] },
  { english: "please", translations: ["per favore"] },
  { english: "thank you", translations: ["grazie"] },
  { english: "you're welcome", translations: ["prego"] },
  { english: "excuse me", translations: ["scusa", "scusi"] },
  { english: "sorry", translations: ["mi dispiace"] },
  { english: "yes", translations: ["sì"] },
  { english: "no", translations: ["no"] },
  { english: "ok / alright", translations: ["va bene"] },
  { english: "of course", translations: ["certo"] },
  { english: "I understand", translations: ["capisco"] },
  { english: "I don't understand", translations: ["non capisco"] },
  { english: "I don't know", translations: ["non so"] },

  // Pronouns
  { english: "I", translations: ["io"] },
  { english: "you (singular)", translations: ["tu"] },
  { english: "he", translations: ["lui"] },
  { english: "she", translations: ["lei"] },
  { english: "we", translations: ["noi"] },
  { english: "you (plural)", translations: ["voi"] },
  { english: "they", translations: ["loro"] },

  // Numbers 1–10
  { english: "one", translations: ["uno"] },
  { english: "two", translations: ["due"] },
  { english: "three", translations: ["tre"] },
  { english: "four", translations: ["quattro"] },
  { english: "five", translations: ["cinque"] },
  { english: "six", translations: ["sei"] },
  { english: "seven", translations: ["sette"] },
  { english: "eight", translations: ["otto"] },
  { english: "nine", translations: ["nove"] },
  { english: "ten", translations: ["dieci"] },

  // Basic colors
  { english: "red", translations: ["rosso"] },
  { english: "blue", translations: ["blu"] },
  { english: "green", translations: ["verde"] },
  { english: "yellow", translations: ["giallo"] },
  { english: "black", translations: ["nero"] },
  { english: "white", translations: ["bianco"] },

  // Core family
  { english: "mother", translations: ["madre", "mamma"] },
  { english: "father", translations: ["padre", "papà"] },
  { english: "brother", translations: ["fratello"] },
  { english: "sister", translations: ["sorella"] },
  { english: "family", translations: ["famiglia"] },
  { english: "child", translations: ["bambino"] },

  // Core food & drink
  { english: "water", translations: ["acqua"] },
  { english: "bread", translations: ["pane"] },
  { english: "milk", translations: ["latte"] },
  { english: "coffee", translations: ["caffè"] },
  { english: "pasta", translations: ["pasta"] },
  { english: "pizza", translations: ["pizza"] },
  { english: "apple", translations: ["mela"] },
  { english: "ice cream", translations: ["gelato"] },

  // Basic body parts
  { english: "head", translations: ["testa"] },
  { english: "eye", translations: ["occhio"] },
  { english: "nose", translations: ["naso"] },
  { english: "mouth", translations: ["bocca"] },
  { english: "hand", translations: ["mano"] },
  { english: "foot", translations: ["piede"] },

  // Key places
  { english: "house / home", translations: ["casa"] },
  { english: "school", translations: ["scuola"] },
  { english: "city", translations: ["città"] },
  { english: "restaurant", translations: ["ristorante"] },
  { english: "road / street", translations: ["strada"] },

  // Basic nature & weather
  { english: "sun", translations: ["sole"] },
  { english: "sea", translations: ["mare"] },
  { english: "rain", translations: ["pioggia"] },
  { english: "flower", translations: ["fiore"] },

  // Core animals
  { english: "dog", translations: ["cane"] },
  { english: "cat", translations: ["gatto"] },
  { english: "bird", translations: ["uccello"] },
  { english: "fish", translations: ["pesce"] },

  // Basic adjectives
  { english: "good", translations: ["buono"] },
  { english: "bad / ugly", translations: ["brutto", "cattivo"] },
  { english: "big / large", translations: ["grande"] },
  { english: "small", translations: ["piccolo"] },
  { english: "hot", translations: ["caldo"] },
  { english: "cold", translations: ["freddo"] },
  { english: "beautiful", translations: ["bello"] },
  { english: "new", translations: ["nuovo"] },
  { english: "old", translations: ["vecchio"] },
  { english: "happy", translations: ["felice"] },
  { english: "sad", translations: ["triste"] },
  { english: "easy", translations: ["facile"] },
  { english: "difficult / hard", translations: ["difficile"] },

  // Question words
  { english: "who", translations: ["chi"] },
  { english: "what", translations: ["cosa"] },
  { english: "where", translations: ["dove"] },
  { english: "when", translations: ["quando"] },
  { english: "why", translations: ["perché"] },
  { english: "how", translations: ["come"] },

  // Key connectors & adverbs
  { english: "and", translations: ["e"] },
  { english: "but", translations: ["ma"] },
  { english: "not", translations: ["non"] },
  { english: "very", translations: ["molto"] },
  { english: "also / too", translations: ["anche"] },
  { english: "here", translations: ["qui"] },
  { english: "more", translations: ["più"] },
  { english: "maybe", translations: ["forse"] },

  // Common nouns
  { english: "man", translations: ["uomo"] },
  { english: "woman", translations: ["donna"] },
  { english: "boy / boyfriend", translations: ["ragazzo"] },
  { english: "girl / girlfriend", translations: ["ragazza"] },
  { english: "person", translations: ["persona"] },
  { english: "name", translations: ["nome"] },
  { english: "day", translations: ["giorno"] },
  { english: "love", translations: ["amore"] },

  // Days of the week
  { english: "Monday", translations: ["lunedì"] },
  { english: "Tuesday", translations: ["martedì"] },
  { english: "Wednesday", translations: ["mercoledì"] },
  { english: "Thursday", translations: ["giovedì"] },
  { english: "Friday", translations: ["venerdì"] },
  { english: "Saturday", translations: ["sabato"] },
  { english: "Sunday", translations: ["domenica"] },
  { english: "week", translations: ["settimana"] },
  { english: "weekend", translations: ["fine settimana"] },

  // Basic time words
  { english: "morning", translations: ["mattina"] },
  { english: "evening", translations: ["sera"] },
  { english: "night", translations: ["notte"] },
  { english: "today", translations: ["oggi"] },
  { english: "yesterday", translations: ["ieri"] },
  { english: "tomorrow", translations: ["domani"] },

  // Core infinitive verbs
  { english: "to be", translations: ["essere"] },
  { english: "to have", translations: ["avere"] },
  { english: "to do / make", translations: ["fare"] },
  { english: "to go", translations: ["andare"] },
  { english: "to come", translations: ["venire"] },
  { english: "to see", translations: ["vedere"] },
  { english: "to say / tell", translations: ["dire"] },
  { english: "to want", translations: ["volere"] },
  { english: "to be able to", translations: ["potere"] },
  { english: "to have to", translations: ["dovere"] },
  { english: "to eat", translations: ["mangiare"] },
  { english: "to drink", translations: ["bere"] },
  { english: "to sleep", translations: ["dormire"] },
  { english: "to speak / talk", translations: ["parlare"] },
  { english: "to work", translations: ["lavorare"] },
  { english: "to know (a fact)", translations: ["sapere"] },
  { english: "to understand", translations: ["capire"] },
  { english: "to love", translations: ["amare"] },
  { english: "to read", translations: ["leggere"] },
  { english: "to write", translations: ["scrivere"] },
];

// ── A2 Improver — new words added at this level ────────────────────────────
// Expanded vocabulary across all categories + present tense conjugations
// for key irregular verbs (essere/avere/fare/andare/venire/stare/dare),
// modal verbs (volere/potere/dovere), and common regular verbs.
const italianWordsA2_new = [

  // Numbers 11–20 + higher + ordinals
  { english: "eleven", translations: ["undici"] },
  { english: "twelve", translations: ["dodici"] },
  { english: "thirteen", translations: ["tredici"] },
  { english: "fourteen", translations: ["quattordici"] },
  { english: "fifteen", translations: ["quindici"] },
  { english: "sixteen", translations: ["sedici"] },
  { english: "seventeen", translations: ["diciassette"] },
  { english: "eighteen", translations: ["diciotto"] },
  { english: "nineteen", translations: ["diciannove"] },
  { english: "twenty", translations: ["venti"] },
  { english: "thirty", translations: ["trenta"] },
  { english: "forty", translations: ["quaranta"] },
  { english: "fifty", translations: ["cinquanta"] },
  { english: "one hundred", translations: ["cento"] },
  { english: "one thousand", translations: ["mille"] },
  { english: "first", translations: ["primo"] },
  { english: "second", translations: ["secondo"] },
  { english: "third", translations: ["terzo"] },

  // Months
  { english: "January", translations: ["gennaio"] },
  { english: "February", translations: ["febbraio"] },
  { english: "March", translations: ["marzo"] },
  { english: "April", translations: ["aprile"] },
  { english: "May", translations: ["maggio"] },
  { english: "June", translations: ["giugno"] },
  { english: "July", translations: ["luglio"] },
  { english: "August", translations: ["agosto"] },
  { english: "September", translations: ["settembre"] },
  { english: "October", translations: ["ottobre"] },
  { english: "November", translations: ["novembre"] },
  { english: "December", translations: ["dicembre"] },
  { english: "month", translations: ["mese"] },
  { english: "year", translations: ["anno"] },

  // More time expressions
  { english: "time", translations: ["tempo"] },
  { english: "hour", translations: ["ora"] },
  { english: "minute", translations: ["minuto"] },
  { english: "afternoon", translations: ["pomeriggio"] },
  { english: "now", translations: ["adesso", "ora"] },
  { english: "soon", translations: ["presto"] },
  { english: "late", translations: ["tardi"] },
  { english: "always", translations: ["sempre"] },
  { english: "never", translations: ["mai"] },
  { english: "sometimes", translations: ["a volte"] },
  { english: "often", translations: ["spesso"] },
  { english: "already", translations: ["già"] },
  { english: "still / yet", translations: ["ancora"] },
  { english: "again", translations: ["di nuovo"] },

  // More colors
  { english: "orange", translations: ["arancione"] },
  { english: "purple", translations: ["viola"] },
  { english: "pink", translations: ["rosa"] },
  { english: "brown", translations: ["marrone"] },
  { english: "grey", translations: ["grigio"] },
  { english: "light blue", translations: ["azzurro"] },

  // More family
  { english: "grandmother", translations: ["nonna"] },
  { english: "grandfather", translations: ["nonno"] },
  { english: "aunt", translations: ["zia"] },
  { english: "uncle", translations: ["zio"] },
  { english: "husband", translations: ["marito"] },
  { english: "wife", translations: ["moglie"] },
  { english: "son", translations: ["figlio"] },
  { english: "daughter", translations: ["figlia"] },
  { english: "parents", translations: ["genitori"] },
  { english: "friend (male)", translations: ["amico"] },
  { english: "friend (female)", translations: ["amica"] },

  // More food & drink
  { english: "wine", translations: ["vino"] },
  { english: "beer", translations: ["birra"] },
  { english: "cheese", translations: ["formaggio"] },
  { english: "meat", translations: ["carne"] },
  { english: "egg", translations: ["uovo"] },
  { english: "rice", translations: ["riso"] },
  { english: "tomato", translations: ["pomodoro"] },
  { english: "onion", translations: ["cipolla"] },
  { english: "garlic", translations: ["aglio"] },
  { english: "salt", translations: ["sale"] },
  { english: "sugar", translations: ["zucchero"] },
  { english: "oil", translations: ["olio"] },
  { english: "soup", translations: ["zuppa"] },
  { english: "salad", translations: ["insalata"] },
  { english: "chicken", translations: ["pollo"] },
  { english: "butter", translations: ["burro"] },
  { english: "cake", translations: ["torta"] },
  { english: "chocolate", translations: ["cioccolato"] },
  { english: "banana", translations: ["banana"] },
  { english: "orange (fruit)", translations: ["arancia"] },
  { english: "vegetables", translations: ["verdura"] },
  { english: "fruit", translations: ["frutta"] },
  { english: "breakfast", translations: ["colazione"] },
  { english: "lunch", translations: ["pranzo"] },
  { english: "dinner", translations: ["cena"] },

  // More body parts
  { english: "face", translations: ["faccia"] },
  { english: "ear", translations: ["orecchio"] },
  { english: "arm", translations: ["braccio"] },
  { english: "leg", translations: ["gamba"] },
  { english: "heart", translations: ["cuore"] },
  { english: "hair", translations: ["capelli"] },
  { english: "teeth", translations: ["denti"] },
  { english: "finger", translations: ["dito"] },
  { english: "shoulder", translations: ["spalla"] },
  { english: "knee", translations: ["ginocchio"] },
  { english: "back", translations: ["schiena"] },

  // More places
  { english: "room", translations: ["stanza", "camera"] },
  { english: "kitchen", translations: ["cucina"] },
  { english: "bathroom", translations: ["bagno"] },
  { english: "bedroom", translations: ["camera da letto"] },
  { english: "door", translations: ["porta"] },
  { english: "window", translations: ["finestra"] },
  { english: "table", translations: ["tavolo"] },
  { english: "chair", translations: ["sedia"] },
  { english: "bed", translations: ["letto"] },
  { english: "country / nation", translations: ["paese", "nazione"] },
  { english: "world", translations: ["mondo"] },
  { english: "university", translations: ["università"] },
  { english: "hospital", translations: ["ospedale"] },
  { english: "church", translations: ["chiesa"] },
  { english: "hotel", translations: ["albergo"] },
  { english: "shop / store", translations: ["negozio"] },
  { english: "market", translations: ["mercato"] },
  { english: "airport", translations: ["aeroporto"] },
  { english: "station", translations: ["stazione"] },
  { english: "park", translations: ["parco"] },
  { english: "office", translations: ["ufficio"] },
  { english: "library", translations: ["biblioteca"] },
  { english: "pharmacy", translations: ["farmacia"] },
  { english: "bank", translations: ["banca"] },
  { english: "museum", translations: ["museo"] },
  { english: "cinema / movie theatre", translations: ["cinema"] },

  // More nature
  { english: "moon", translations: ["luna"] },
  { english: "star", translations: ["stella"] },
  { english: "sky", translations: ["cielo"] },
  { english: "earth / ground", translations: ["terra"] },
  { english: "mountain", translations: ["montagna"] },
  { english: "river", translations: ["fiume"] },
  { english: "forest / wood", translations: ["bosco", "foresta"] },
  { english: "tree", translations: ["albero"] },
  { english: "snow", translations: ["neve"] },
  { english: "wind", translations: ["vento"] },
  { english: "fire", translations: ["fuoco"] },
  { english: "air", translations: ["aria"] },
  { english: "light", translations: ["luce"] },

  // More animals
  { english: "horse", translations: ["cavallo"] },
  { english: "cow", translations: ["mucca"] },
  { english: "pig", translations: ["maiale"] },
  { english: "sheep", translations: ["pecora"] },

  // Transport
  { english: "car", translations: ["macchina", "auto"] },
  { english: "bus", translations: ["autobus"] },
  { english: "train", translations: ["treno"] },
  { english: "aeroplane", translations: ["aereo"] },
  { english: "bicycle", translations: ["bicicletta"] },
  { english: "boat", translations: ["barca"] },
  { english: "ship", translations: ["nave"] },

  // More adjectives
  { english: "long", translations: ["lungo"] },
  { english: "short (length)", translations: ["corto"] },
  { english: "tall / high", translations: ["alto"] },
  { english: "short (height)", translations: ["basso"] },
  { english: "fat", translations: ["grasso"] },
  { english: "thin", translations: ["magro"] },
  { english: "young", translations: ["giovane"] },
  { english: "warm", translations: ["tiepido"] },
  { english: "fast / quick", translations: ["veloce"] },
  { english: "slow", translations: ["lento"] },
  { english: "clean", translations: ["pulito"] },
  { english: "dirty", translations: ["sporco"] },
  { english: "full", translations: ["pieno"] },
  { english: "empty", translations: ["vuoto"] },
  { english: "open", translations: ["aperto"] },
  { english: "closed", translations: ["chiuso"] },
  { english: "rich", translations: ["ricco"] },
  { english: "poor", translations: ["povero"] },
  { english: "tired", translations: ["stanco"] },
  { english: "sick / ill", translations: ["malato"] },
  { english: "healthy", translations: ["sano"] },
  { english: "strong", translations: ["forte"] },
  { english: "near", translations: ["vicino"] },
  { english: "far", translations: ["lontano"] },
  { english: "right / correct", translations: ["giusto"] },
  { english: "wrong", translations: ["sbagliato"] },
  { english: "true", translations: ["vero"] },
  { english: "false", translations: ["falso"] },
  { english: "ready", translations: ["pronto"] },
  { english: "free", translations: ["libero"] },
  { english: "sweet", translations: ["dolce"] },
  { english: "salty", translations: ["salato"] },
  { english: "expensive", translations: ["caro"] },
  { english: "cheap", translations: ["economico"] },

  // More question words & connectors
  { english: "how much", translations: ["quanto"] },
  { english: "how many", translations: ["quanti"] },
  { english: "which", translations: ["quale"] },
  { english: "because", translations: ["perché"] },
  { english: "if", translations: ["se"] },
  { english: "only", translations: ["solo", "soltanto"] },
  { english: "together", translations: ["insieme"] },
  { english: "there", translations: ["là", "lì"] },
  { english: "less", translations: ["meno"] },
  { english: "nothing", translations: ["niente", "nulla"] },
  { english: "everything", translations: ["tutto"] },
  { english: "everyone", translations: ["tutti"] },
  { english: "no one", translations: ["nessuno"] },
  { english: "something", translations: ["qualcosa"] },
  { english: "someone", translations: ["qualcuno"] },
  { english: "before", translations: ["prima"] },
  { english: "after", translations: ["dopo"] },
  { english: "without", translations: ["senza"] },
  { english: "outside", translations: ["fuori"] },
  { english: "inside", translations: ["dentro"] },
  { english: "above", translations: ["sopra"] },
  { english: "below / under", translations: ["sotto"] },
  { english: "in front of", translations: ["davanti"] },
  { english: "behind", translations: ["dietro"] },
  { english: "against", translations: ["contro"] },

  // More common nouns
  { english: "life", translations: ["vita"] },
  { english: "problem", translations: ["problema"] },
  { english: "word", translations: ["parola"] },
  { english: "question", translations: ["domanda"] },
  { english: "answer", translations: ["risposta"] },
  { english: "reason", translations: ["ragione", "motivo"] },
  { english: "story / history", translations: ["storia"] },
  { english: "truth", translations: ["verità"] },
  { english: "dream", translations: ["sogno"] },
  { english: "fear", translations: ["paura"] },
  { english: "luck", translations: ["fortuna"] },
  { english: "hope", translations: ["speranza"] },
  { english: "money", translations: ["soldi"] },
  { english: "work / job", translations: ["lavoro"] },
  { english: "music", translations: ["musica"] },
  { english: "song", translations: ["canzone"] },
  { english: "book", translations: ["libro"] },
  { english: "language", translations: ["lingua"] },
  { english: "game", translations: ["gioco"] },
  { english: "sport", translations: ["sport"] },
  { english: "voice", translations: ["voce"] },
  { english: "health", translations: ["salute"] },
  { english: "trip / journey", translations: ["viaggio"] },
  { english: "key", translations: ["chiave"] },
  { english: "phone", translations: ["telefono"] },
  { english: "message", translations: ["messaggio"] },
  { english: "photo", translations: ["foto"] },
  { english: "letter", translations: ["lettera"] },
  { english: "place / spot", translations: ["posto"] },

  // More verbs (infinitive)
  { english: "to give", translations: ["dare"] },
  { english: "to take", translations: ["prendere"] },
  { english: "to find", translations: ["trovare"] },
  { english: "to think", translations: ["pensare"] },
  { english: "to know (a person)", translations: ["conoscere"] },
  { english: "to listen", translations: ["ascoltare"] },
  { english: "to look at", translations: ["guardare"] },
  { english: "to feel / hear", translations: ["sentire"] },
  { english: "to wait", translations: ["aspettare"] },
  { english: "to call", translations: ["chiamare"] },
  { english: "to ask", translations: ["chiedere"] },
  { english: "to leave / let go", translations: ["lasciare"] },
  { english: "to return", translations: ["tornare"] },
  { english: "to enter", translations: ["entrare"] },
  { english: "to exit / go out", translations: ["uscire"] },
  { english: "to arrive", translations: ["arrivare"] },
  { english: "to remember", translations: ["ricordare"] },
  { english: "to forget", translations: ["dimenticare"] },
  { english: "to believe", translations: ["credere"] },
  { english: "to lose", translations: ["perdere"] },
  { english: "to die", translations: ["morire"] },
  { english: "to become", translations: ["diventare"] },
  { english: "to bring / carry", translations: ["portare"] },
  { english: "to put", translations: ["mettere"] },
  { english: "to try", translations: ["provare"] },
  { english: "to use", translations: ["usare"] },
  { english: "to change", translations: ["cambiare"] },
  { english: "to finish", translations: ["finire"] },
  { english: "to start", translations: ["iniziare", "cominciare"] },
  { english: "to play (a game)", translations: ["giocare"] },
  { english: "to play (music)", translations: ["suonare"] },
  { english: "to sing", translations: ["cantare"] },
  { english: "to dance", translations: ["ballare"] },
  { english: "to walk", translations: ["camminare"] },
  { english: "to run", translations: ["correre"] },
  { english: "to drive", translations: ["guidare"] },
  { english: "to travel", translations: ["viaggiare"] },
  { english: "to pay", translations: ["pagare"] },
  { english: "to buy", translations: ["comprare"] },
  { english: "to sell", translations: ["vendere"] },
  { english: "to help", translations: ["aiutare"] },
  { english: "to open", translations: ["aprire"] },
  { english: "to close", translations: ["chiudere"] },
  { english: "to laugh", translations: ["ridere"] },
  { english: "to cry", translations: ["piangere"] },
  { english: "to smile", translations: ["sorridere"] },
  { english: "to teach", translations: ["insegnare"] },
  { english: "to learn", translations: ["imparare"] },
  { english: "to study", translations: ["studiare"] },
  { english: "to cook", translations: ["cucinare"] },
  { english: "to wash", translations: ["lavare"] },
  { english: "to clean", translations: ["pulire"] },
  { english: "to cut", translations: ["tagliare"] },
  { english: "to search", translations: ["cercare"] },
  { english: "to meet", translations: ["incontrare"] },
  { english: "to show", translations: ["mostrare"] },
  { english: "to send", translations: ["mandare", "inviare"] },
  { english: "to receive", translations: ["ricevere"] },
  { english: "to hold / keep", translations: ["tenere"] },
  { english: "to stay / remain", translations: ["restare"] },
  { english: "to continue", translations: ["continuare"] },
  { english: "to hope", translations: ["sperare"] },
  { english: "to live", translations: ["vivere"] },

  // Present tense conjugations — essere (to be)
  { english: "I am", translations: ["sono"] },
  { english: "you (singular) are", translations: ["sei"] },
  { english: "he/she is", translations: ["è"] },
  { english: "we are", translations: ["siamo"] },
  { english: "you (plural) are", translations: ["siete"] },
  { english: "they are", translations: ["sono"] },

  // Present tense conjugations — avere (to have)
  { english: "I have", translations: ["ho"] },
  { english: "you (singular) have", translations: ["hai"] },
  { english: "he/she has", translations: ["ha"] },
  { english: "we have", translations: ["abbiamo"] },
  { english: "you (plural) have", translations: ["avete"] },
  { english: "they have", translations: ["hanno"] },

  // Present tense conjugations — fare (to do/make)
  { english: "I do", translations: ["faccio"] },
  { english: "you (singular) do", translations: ["fai"] },
  { english: "he/she does", translations: ["fa"] },
  { english: "we do", translations: ["facciamo"] },
  { english: "you (plural) do", translations: ["fate"] },
  { english: "they do", translations: ["fanno"] },

  // Present tense conjugations — andare (to go)
  { english: "I go", translations: ["vado"] },
  { english: "you (singular) go", translations: ["vai"] },
  { english: "he/she goes", translations: ["va"] },
  { english: "we go", translations: ["andiamo"] },
  { english: "you (plural) go", translations: ["andate"] },
  { english: "they go", translations: ["vanno"] },

  // Present tense conjugations — venire (to come)
  { english: "I come", translations: ["vengo"] },
  { english: "you (singular) come", translations: ["vieni"] },
  { english: "he/she comes", translations: ["viene"] },
  { english: "we come", translations: ["veniamo"] },
  { english: "you (plural) come", translations: ["venite"] },
  { english: "they come", translations: ["vengono"] },

  // Present tense conjugations — stare (to stay/be)
  { english: "I stay", translations: ["sto"] },
  { english: "you (singular) stay", translations: ["stai"] },
  { english: "he/she stays", translations: ["sta"] },
  { english: "we stay", translations: ["stiamo"] },
  { english: "you (plural) stay", translations: ["state"] },
  { english: "they stay", translations: ["stanno"] },

  // Present tense conjugations — dare (to give)
  { english: "I give", translations: ["do"] },
  { english: "you (singular) give", translations: ["dai"] },
  { english: "he/she gives", translations: ["dà"] },
  { english: "we give", translations: ["diamo"] },
  { english: "you (plural) give", translations: ["date"] },
  { english: "they give", translations: ["danno"] },

  // Present tense conjugations — volere (to want)
  { english: "I want", translations: ["voglio"] },
  { english: "you (singular) want", translations: ["vuoi"] },
  { english: "he/she wants", translations: ["vuole"] },
  { english: "we want", translations: ["vogliamo"] },
  { english: "you (plural) want", translations: ["volete"] },
  { english: "they want", translations: ["vogliono"] },

  // Present tense conjugations — potere (to be able to)
  { english: "I can", translations: ["posso"] },
  { english: "you (singular) can", translations: ["puoi"] },
  { english: "he/she can", translations: ["può"] },
  { english: "we can", translations: ["possiamo"] },
  { english: "you (plural) can", translations: ["potete"] },
  { english: "they can", translations: ["possono"] },

  // Present tense conjugations — dovere (to have to)
  { english: "I must", translations: ["devo"] },
  { english: "you (singular) must", translations: ["devi"] },
  { english: "he/she must", translations: ["deve"] },
  { english: "we must", translations: ["dobbiamo"] },
  { english: "you (plural) must", translations: ["dovete"] },
  { english: "they must", translations: ["devono"] },

  // Present tense conjugations — parlare (to speak)
  { english: "I speak", translations: ["parlo"] },
  { english: "you (singular) speak", translations: ["parli"] },
  { english: "he/she speaks", translations: ["parla"] },
  { english: "we speak", translations: ["parliamo"] },
  { english: "you (plural) speak", translations: ["parlate"] },
  { english: "they speak", translations: ["parlano"] },

  // Present tense conjugations — mangiare (to eat)
  { english: "I eat", translations: ["mangio"] },
  { english: "you (singular) eat", translations: ["mangi"] },
  { english: "he/she eats", translations: ["mangia"] },
  { english: "we eat", translations: ["mangiamo"] },
  { english: "you (plural) eat", translations: ["mangiate"] },
  { english: "they eat", translations: ["mangiano"] },

  // Present tense conjugations — bere (to drink)
  { english: "I drink", translations: ["bevo"] },
  { english: "you (singular) drink", translations: ["bevi"] },
  { english: "he/she drinks", translations: ["beve"] },
  { english: "we drink", translations: ["beviamo"] },
  { english: "you (plural) drink", translations: ["bevete"] },
  { english: "they drink", translations: ["bevono"] },

  // Present tense conjugations — dormire (to sleep)
  { english: "I sleep", translations: ["dormo"] },
  { english: "you (singular) sleep", translations: ["dormi"] },
  { english: "he/she sleeps", translations: ["dorme"] },
  { english: "we sleep", translations: ["dormiamo"] },
  { english: "you (plural) sleep", translations: ["dormite"] },
  { english: "they sleep", translations: ["dormono"] },

  // Present tense conjugations — capire (to understand)
  { english: "you (singular) understand", translations: ["capisci"] },
  { english: "he/she understands", translations: ["capisce"] },
  { english: "we understand", translations: ["capiamo"] },
  { english: "you (plural) understand", translations: ["capite"] },
  { english: "they understand", translations: ["capiscono"] },
];

// ── B1 Intermediate — new words added at this level ────────────────────────
// Advanced vocabulary + three new tenses: passato prossimo, futuro semplice,
// and imperfetto for the 8–10 most common verbs each.
const italianWordsB1_new = [

  // People & roles
  { english: "doctor", translations: ["dottore", "medico"] },
  { english: "teacher", translations: ["insegnante"] },
  { english: "student", translations: ["studente"] },
  { english: "police", translations: ["polizia"] },
  { english: "lawyer", translations: ["avvocato"] },

  // Advanced adjectives
  { english: "weak", translations: ["debole"] },
  { english: "quiet", translations: ["silenzioso", "tranquillo"] },
  { english: "light (weight)", translations: ["leggero"] },
  { english: "heavy", translations: ["pesante"] },
  { english: "hard", translations: ["duro"] },
  { english: "soft", translations: ["morbido"] },
  { english: "bitter", translations: ["amaro"] },
  { english: "spicy", translations: ["piccante"] },
  { english: "dangerous", translations: ["pericoloso"] },
  { english: "safe / sure", translations: ["sicuro"] },
  { english: "important", translations: ["importante"] },
  { english: "interesting", translations: ["interessante"] },
  { english: "boring", translations: ["noioso"] },
  { english: "funny / fun", translations: ["divertente"] },
  { english: "serious", translations: ["serio"] },
  { english: "strange / odd", translations: ["strano"] },
  { english: "normal", translations: ["normale"] },
  { english: "different", translations: ["diverso"] },
  { english: "same", translations: ["stesso"] },
  { english: "possible", translations: ["possibile"] },
  { english: "impossible", translations: ["impossibile"] },
  { english: "incredible", translations: ["incredibile"] },
  { english: "terrible", translations: ["terribile"] },
  { english: "perfect", translations: ["perfetto"] },
  { english: "fantastic", translations: ["fantastico"] },
  { english: "excellent", translations: ["ottimo"] },

  // Abstract & less common nouns
  { english: "war", translations: ["guerra"] },
  { english: "peace", translations: ["pace"] },
  { english: "courage", translations: ["coraggio"] },
  { english: "idea", translations: ["idea"] },
  { english: "way / manner", translations: ["modo"] },
  { english: "news", translations: ["notizie"] },
  { english: "film / movie", translations: ["film"] },
  { english: "football", translations: ["calcio"] },
  { english: "blood", translations: ["sangue"] },
  { english: "mind", translations: ["mente"] },
  { english: "body", translations: ["corpo"] },
  { english: "soul", translations: ["anima"] },
  { english: "second (time)", translations: ["secondo"] },

  // ── Passato prossimo ───────────────────────────────────────────────────────
  // Avere verbs (participle invariable)

  // parlare → parlato
  { english: "I spoke / I have spoken", translations: ["ho parlato"] },
  { english: "you (singular) spoke", translations: ["hai parlato"] },
  { english: "he/she spoke", translations: ["ha parlato"] },
  { english: "we spoke", translations: ["abbiamo parlato"] },
  { english: "you (plural) spoke", translations: ["avete parlato"] },
  { english: "they spoke", translations: ["hanno parlato"] },

  // mangiare → mangiato
  { english: "I ate / I have eaten", translations: ["ho mangiato"] },
  { english: "you (singular) ate", translations: ["hai mangiato"] },
  { english: "he/she ate", translations: ["ha mangiato"] },
  { english: "we ate", translations: ["abbiamo mangiato"] },
  { english: "you (plural) ate", translations: ["avete mangiato"] },
  { english: "they ate", translations: ["hanno mangiato"] },

  // bere → bevuto
  { english: "I drank / I have drunk", translations: ["ho bevuto"] },
  { english: "you (singular) drank", translations: ["hai bevuto"] },
  { english: "he/she drank", translations: ["ha bevuto"] },
  { english: "we drank", translations: ["abbiamo bevuto"] },
  { english: "you (plural) drank", translations: ["avete bevuto"] },
  { english: "they drank", translations: ["hanno bevuto"] },

  // fare → fatto
  { english: "I did / I have done", translations: ["ho fatto"] },
  { english: "you (singular) did", translations: ["hai fatto"] },
  { english: "he/she did", translations: ["ha fatto"] },
  { english: "we did", translations: ["abbiamo fatto"] },
  { english: "you (plural) did", translations: ["avete fatto"] },
  { english: "they did", translations: ["hanno fatto"] },

  // vedere → visto
  { english: "I saw / I have seen", translations: ["ho visto"] },
  { english: "you (singular) saw", translations: ["hai visto"] },
  { english: "he/she saw", translations: ["ha visto"] },
  { english: "we saw", translations: ["abbiamo visto"] },
  { english: "you (plural) saw", translations: ["avete visto"] },
  { english: "they saw", translations: ["hanno visto"] },

  // avere → avuto
  { english: "I had / I have had", translations: ["ho avuto"] },
  { english: "you (singular) had", translations: ["hai avuto"] },
  { english: "he/she had", translations: ["ha avuto"] },
  { english: "we had", translations: ["abbiamo avuto"] },
  { english: "you (plural) had", translations: ["avete avuto"] },
  { english: "they had", translations: ["hanno avuto"] },

  // Essere verbs (participle agrees with subject gender/number)
  // Both masculine and feminine forms are accepted.

  // essere → stato/stata
  { english: "I was / I have been", translations: ["sono stato", "sono stata"] },
  { english: "you (singular) were", translations: ["sei stato", "sei stata"] },
  { english: "he was", translations: ["è stato"] },
  { english: "she was", translations: ["è stata"] },
  { english: "we were", translations: ["siamo stati", "siamo state"] },
  { english: "you (plural) were", translations: ["siete stati", "siete state"] },
  { english: "they were", translations: ["sono stati", "sono state"] },

  // andare → andato/andata
  { english: "I went / I have gone", translations: ["sono andato", "sono andata"] },
  { english: "you (singular) went", translations: ["sei andato", "sei andata"] },
  { english: "he went", translations: ["è andato"] },
  { english: "she went", translations: ["è andata"] },
  { english: "we went", translations: ["siamo andati", "siamo andate"] },
  { english: "you (plural) went", translations: ["siete andati", "siete andate"] },
  { english: "they went", translations: ["sono andati", "sono andate"] },

  // venire → venuto/venuta
  { english: "I came / I have come", translations: ["sono venuto", "sono venuta"] },
  { english: "you (singular) came", translations: ["sei venuto", "sei venuta"] },
  { english: "he came", translations: ["è venuto"] },
  { english: "she came", translations: ["è venuta"] },
  { english: "we came", translations: ["siamo venuti", "siamo venute"] },
  { english: "you (plural) came", translations: ["siete venuti", "siete venute"] },
  { english: "they came", translations: ["sono venuti", "sono venute"] },

  // ── Futuro semplice ────────────────────────────────────────────────────────

  // essere
  { english: "I will be", translations: ["sarò"] },
  { english: "you (singular) will be", translations: ["sarai"] },
  { english: "he/she will be", translations: ["sarà"] },
  { english: "we will be", translations: ["saremo"] },
  { english: "you (plural) will be", translations: ["sarete"] },
  { english: "they will be", translations: ["saranno"] },

  // avere
  { english: "I will have", translations: ["avrò"] },
  { english: "you (singular) will have", translations: ["avrai"] },
  { english: "he/she will have", translations: ["avrà"] },
  { english: "we will have", translations: ["avremo"] },
  { english: "you (plural) will have", translations: ["avrete"] },
  { english: "they will have", translations: ["avranno"] },

  // fare
  { english: "I will do", translations: ["farò"] },
  { english: "you (singular) will do", translations: ["farai"] },
  { english: "he/she will do", translations: ["farà"] },
  { english: "we will do", translations: ["faremo"] },
  { english: "you (plural) will do", translations: ["farete"] },
  { english: "they will do", translations: ["faranno"] },

  // andare
  { english: "I will go", translations: ["andrò"] },
  { english: "you (singular) will go", translations: ["andrai"] },
  { english: "he/she will go", translations: ["andrà"] },
  { english: "we will go", translations: ["andremo"] },
  { english: "you (plural) will go", translations: ["andrete"] },
  { english: "they will go", translations: ["andranno"] },

  // venire
  { english: "I will come", translations: ["verrò"] },
  { english: "you (singular) will come", translations: ["verrai"] },
  { english: "he/she will come", translations: ["verrà"] },
  { english: "we will come", translations: ["verremo"] },
  { english: "you (plural) will come", translations: ["verrete"] },
  { english: "they will come", translations: ["verranno"] },

  // volere
  { english: "I will want", translations: ["vorrò"] },
  { english: "you (singular) will want", translations: ["vorrai"] },
  { english: "he/she will want", translations: ["vorrà"] },
  { english: "we will want", translations: ["vorremo"] },
  { english: "you (plural) will want", translations: ["vorrete"] },
  { english: "they will want", translations: ["vorranno"] },

  // parlare (regular -are pattern)
  { english: "I will speak", translations: ["parlerò"] },
  { english: "you (singular) will speak", translations: ["parlerai"] },
  { english: "he/she will speak", translations: ["parlerà"] },
  { english: "we will speak", translations: ["parleremo"] },
  { english: "you (plural) will speak", translations: ["parlerete"] },
  { english: "they will speak", translations: ["parleranno"] },

  // dormire (regular -ire pattern)
  { english: "I will sleep", translations: ["dormirò"] },
  { english: "you (singular) will sleep", translations: ["dormirai"] },
  { english: "he/she will sleep", translations: ["dormirà"] },
  { english: "we will sleep", translations: ["dormiremo"] },
  { english: "you (plural) will sleep", translations: ["dormirete"] },
  { english: "they will sleep", translations: ["dormiranno"] },

  // ── Imperfetto ─────────────────────────────────────────────────────────────

  // essere (irregular stem: er-)
  { english: "I was / I used to be", translations: ["ero"] },
  { english: "you (singular) used to be", translations: ["eri"] },
  { english: "he/she used to be", translations: ["era"] },
  { english: "we used to be", translations: ["eravamo"] },
  { english: "you (plural) used to be", translations: ["eravate"] },
  { english: "they used to be", translations: ["erano"] },

  // avere
  { english: "I used to have", translations: ["avevo"] },
  { english: "you (singular) used to have", translations: ["avevi"] },
  { english: "he/she used to have", translations: ["aveva"] },
  { english: "we used to have", translations: ["avevamo"] },
  { english: "you (plural) used to have", translations: ["avevate"] },
  { english: "they used to have", translations: ["avevano"] },

  // fare (irregular stem: face-)
  { english: "I used to do", translations: ["facevo"] },
  { english: "you (singular) used to do", translations: ["facevi"] },
  { english: "he/she used to do", translations: ["faceva"] },
  { english: "we used to do", translations: ["facevamo"] },
  { english: "you (plural) used to do", translations: ["facevate"] },
  { english: "they used to do", translations: ["facevano"] },

  // andare
  { english: "I used to go", translations: ["andavo"] },
  { english: "you (singular) used to go", translations: ["andavi"] },
  { english: "he/she used to go", translations: ["andava"] },
  { english: "we used to go", translations: ["andavamo"] },
  { english: "you (plural) used to go", translations: ["andavate"] },
  { english: "they used to go", translations: ["andavano"] },

  // venire
  { english: "I used to come", translations: ["venivo"] },
  { english: "you (singular) used to come", translations: ["venivi"] },
  { english: "he/she used to come", translations: ["veniva"] },
  { english: "we used to come", translations: ["venivamo"] },
  { english: "you (plural) used to come", translations: ["venivate"] },
  { english: "they used to come", translations: ["venivano"] },

  // volere
  { english: "I used to want", translations: ["volevo"] },
  { english: "you (singular) used to want", translations: ["volevi"] },
  { english: "he/she used to want", translations: ["voleva"] },
  { english: "we used to want", translations: ["volevamo"] },
  { english: "you (plural) used to want", translations: ["volevate"] },
  { english: "they used to want", translations: ["volevano"] },

  // parlare (regular -are pattern)
  { english: "I used to speak", translations: ["parlavo"] },
  { english: "you (singular) used to speak", translations: ["parlavi"] },
  { english: "he/she used to speak", translations: ["parlava"] },
  { english: "we used to speak", translations: ["parlavamo"] },
  { english: "you (plural) used to speak", translations: ["parlavate"] },
  { english: "they used to speak", translations: ["parlavano"] },

  // dormire (regular -ire pattern)
  { english: "I used to sleep", translations: ["dormivo"] },
  { english: "you (singular) used to sleep", translations: ["dormivi"] },
  { english: "he/she used to sleep", translations: ["dormiva"] },
  { english: "we used to sleep", translations: ["dormivamo"] },
  { english: "you (plural) used to sleep", translations: ["dormivate"] },
  { english: "they used to sleep", translations: ["dormivano"] },
];

// ── Cumulative level exports ────────────────────────────────────────────────
const italianLevels = {
  a1: italianWordsA1,
  a2: [...italianWordsA1, ...italianWordsA2_new],
  b1: [...italianWordsA1, ...italianWordsA2_new, ...italianWordsB1_new],
};
