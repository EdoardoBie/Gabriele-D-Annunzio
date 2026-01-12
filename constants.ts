import { Fragment } from "./types";

// The path follows a chronological "Snake" layout:
// 1. La Genesi (Top Left) 
// 2. Il Piacere (Top Center-Left)
// 3. La Divina (Top Center-Right) 
// 4. La Pioggia nel Pineto (Top Right)
// 5. Esilio & Cinema (Mid Right) 
// 6. Il Notturno (Mid Center) 
// 7. L'Impresa (Bottom Left) 
// 8. Il Vittoriale (Bottom Center) 
// 9. Oracle (Bottom Right)

export const FRAGMENTS: Fragment[] = [
  // --- 1. LA GENESI (FULL BIO) ---
  {
    id: 'prodigio',
    label: 'La Genesi',
    type: 'EVENT',
    era: "1863-1938",
    x: 8, y: 10,
    scale: 0.9,
    rotation: -5,
    meta: "Vita del Vate",
    content: [
      "1. Un Inizio da \"Ragazzo Prodigio\" (1863-1881)\nNato a Pescara nel 1863 da una famiglia benestante, Gabriele dimostrò subito un'intelligenza precocissima. Già a 16 anni, mentre studiava a Prato, pubblicò la sua prima raccolta di poesie, Primo vere. Per farsi pubblicità e attirare l'attenzione del pubblico, orchestrò un colpo di scena degno di un moderno esperto di marketing: fece diffondere la falsa notizia della propria morte per una caduta da cavallo, smentendola solo dopo che il libro aveva ottenuto un enorme successo.",
      "2. La Roma Bizantina e il \"Vivere Inimitabile\" (1881-1893)\nTrasferitosi a Roma per l'università (che non finì mai), D'Annunzio si immerse nella vita mondana e aristocratica della capitale. In questo periodo coniò l'espressione \"vivere inimitabile\", decidendo di circondarsi di lusso, bellezza e passioni travolgenti.\n• Successo letterario: Nel 1889 pubblicò Il piacere, il romanzo manifesto dell'estetismo italiano, il cui protagonista Andrea Sperelli è un suo chiaro alter ego.\n• Vita privata: Sposò Maria Hardouin, duchessa di Gallese, con un \"matrimonio di riparazione\" dopo un rapimento consensuale, ma la lasciò presto a causa dei suoi innumerevoli tradimenti.",
      "3. L'Amore per la Duse e il Picco Creativo (1894-1910)\nIl 1894 segnò l'inizio della relazione con la leggendaria attrice Eleonora Duse, definita la sua \"testimone velata\". Insieme si stabilirono vicino a Firenze, nella villa La Capponcina, dove D'Annunzio visse come un signore rinascimentale tra cavalli, levrieri e arredi preziosi.\n• Opere eccelse: In questi anni scrisse il suo capolavoro poetico, Alcyone, e romanzi come Il fuoco, in cui descrisse impietosamente la sua storia con la Duse.\n• Politica: Nel 1897 entrò in parlamento con la Destra, per poi passare clamorosamente all'Estrema Sinistra nel 1900 gridando: «Vado verso la vita!».",
      "4. Debiti, Cinema ed Esilio Francese (1910-1915)\nNonostante i guadagni stellari, lo stile di vita dissipato lo portò alla bancarotta. Per sfuggire ai creditori, si trasferì in Francia per cinque anni (un \"esilio dorato\"). Qui non rimase inattivo: collaborò con musicisti come Debussy e si avvicinò al cinema, scrivendo le didascalie per il colossale film Cabiria e inventando il nome del forzuto eroe Maciste.",
      "5. Il Poeta Aviatore e la Grande Guerra (1915-1918)\nCon lo scoppio della Prima Guerra Mondiale, D'Annunzio rientrò in Italia come acceso interventista. Nonostante avesse 52 anni, si arruolò come volontario, compiendo imprese eroiche e altamente spettacolari:\n• Il Volo su Vienna: Lanciò migliaia di volantini tricolori sulla capitale austriaca.\n• La Beffa di Buccari: Un'audace incursione navale notturna.\n• Il Notturno: Durante un atterraggio d'emergenza perse l'occhio destro; costretto all'immobilità e al buio, scrisse il Notturno su sottili strisce di carta, definendosi \"l'Orbo veggente\".",
      "6. L'Impresa di Fiume e il Ritiro al Vittoriale (1919-1938)\nNel dopoguerra, insoddisfatto della \"vittoria mutilata\", guidò una spedizione di legionari per occupare la città di Fiume. Qui instaurò una reggenza e varò la Carta del Carnaro, una costituzione modernissima che prevedeva il suffragio universale e la libertà di orientamento sessuale. Dopo il \"Natale di Sangue\" del 1920, che pose fine all'avventura fiumana, si ritirò a Gardone Riviera nella villa ribattezzata Vittoriale degli Italiani. Qui trascorse gli ultimi anni tra lusso, cocaina e amanti, celebrato dal regime fascista che però lo teneva sotto stretta sorveglianza, temendo la sua ingombrante personalità. Morì nel 1938 per un'emorragia cerebrale al suo tavolo da lavoro."
    ],
    image: "https://picsum.photos/seed/childhood/500/500?grayscale",
    analysis: {
        title: "Il Mito di Sé Stesso",
        paragraphs: [
            "D'Annunzio non fu solo uno scrittore, ma il primo vero 'influencer' moderno. Capì che nell'era di massa la biografia dell'artista era importante quanto l'opera.",
            "Dalla finta morte adolescenziale fino al monumento funebre del Vittoriale, la sua intera esistenza fu un'opera d'arte costruita per stupire, sedurre e dominare l'immaginario collettivo."
        ]
    }
  },

  // --- 2. IL PIACERE (FULL TEXT FROM USER) ---
  {
    id: 'piacere',
    label: 'Il Piacere',
    type: 'EVENT',
    era: "1889",
    x: 30, y: 15,
    scale: 1.1,
    rotation: 3,
    meta: "Estetismo & Biografia",
    content: [
      "Il piacere, pubblicato nel 1889, non è solo un romanzo, ma il vero e proprio manifesto dell'estetismo e del decadentismo italiano. Scritto da d'Annunzio mentre si trovava in Abruzzo, ospite dell'amico Michetti, l'opera segnò una rottura totale con il Verismo dell'epoca, proponendo un modello di vita basato sulla bellezza assoluta.\nEcco una spiegazione suddivisa per punti chiave, arricchita dall'analisi degli elementi narrativi.",
      "1. Il Protagonista: Andrea Sperelli e il \"Vivere Inimitabile\"\nIl protagonista è Andrea Sperelli, un giovane aristocratico, raffinato e coltissimo, che vive a Palazzo Zuccari a Roma. Andrea incarna perfettamente l'ideale dell'esteta decadente che ha influenzato la letteratura per anni.\n• Analisi del testo: Il nucleo del pensiero di Andrea (e dello stesso d'Annunzio) è racchiuso nella celebre massima: «bisogna fare la propria vita, come si fa un'opera d'arte». Per Sperelli, la bellezza è il valore supremo, superiore alla morale, e la sua esistenza è una ricerca continua di piaceri sensoriali e intellettuali.",
      "2. Elena Muti: La Passione Distruttrice\nIl romanzo si apre con Andrea che attende con ansia Elena Muti, la sua ex amante, nel loro vecchio nido d'amore. Elena è una contessa sensuale e fatale che lo aveva abbandonato anni prima.\n• Analisi del testo: Elena rappresenta l'eros travolgente e carnale. Andrea scoprirà che lei lo ha lasciato non per mancanza d'amore, ma a causa di una crisi finanziaria, scegliendo di sposare un ricchissimo Lord inglese per convenienza. Questo rifiuto trasforma il desiderio di Andrea in un'ossessione che lo porterà verso una vita di dissipazione e depravazione.",
      "3. Maria Ferres: L'Illusione della Purezza\nDopo essere rimasto ferito in un duello causato dai suoi intrighi amorosi, Andrea trascorre la convalescenza a Villa Schifanoja. Qui incontra Maria Ferres, una donna profondamente diversa da Elena: è casta, religiosa e spirituale.\n• Analisi del testo: Maria rappresenta per Andrea la possibilità di una \"redenzione\" o, più cinicamente, un nuovo tipo di \"piacere\" più sottile e spirituale. Egli decide di conquistarla quasi come una sfida, ma finisce per invaghirsene realmente, colpito dalla sua inclinazione mistica.",
      "4. Il Triangolo Tossico e il Fallimento\nTornato a Roma, Andrea si ritrova diviso tra le due donne: insegue ancora Elena, che lo respinge, e contemporaneamente corteggia Maria, che infine cede al suo amore. Tuttavia, Andrea non riesce a separare le due figure nella sua mente.\n• Analisi del testo: Il momento culminante (il climax) del romanzo avviene durante un incontro intimo con Maria: Andrea, ossessionato da Elena, chiama Maria col nome dell'altra donna. Questo errore fatale porta Maria ad abbandonarlo, lasciandolo solo e con un profondo senso di vuoto e incompletezza nell'anima.",
      "5. Analisi Finale: La Sconfitta dell'Esteta\nIl finale del romanzo non è glorioso: Andrea Sperelli finisce solo e sconfitto. Nonostante la sua ricerca della bellezza suprema, la sua vita non è diventata un capolavoro, ma un fallimento causato dalla sua stessa incapacità di amare davvero e dalla sua vacuità morale.\n• Punto di vista critico: L'opera mostra come l'estetismo esasperato porti all'isolamento e allo sfacelo interiore, anticipando quella che d'Annunzio chiamerà la sua \"stagione notturna\"."
    ],
    image: "https://picsum.photos/seed/pleasure/600/800?grayscale",
  },

  // --- 3. LA DIVINA (FULL TEXT FROM USER) ---
  {
    id: 'duse',
    label: 'La Divina',
    type: 'MUSE',
    era: "1894-1904",
    x: 60, y: 12,
    scale: 1.2,
    rotation: -4,
    meta: "Eleonora Duse",
    content: [
      "1. Una vita nomade e il successo precoce\nEleonora nacque nel 1858 a Vigevano in una stanza d'albergo, figlia di attori girovaghi. La sua infanzia fu segnata da privazioni, continui spostamenti a piedi e un'istruzione saltuaria impartita dal padre.\n• La svolta: A soli 14 anni, interpretando Giulietta a Verona, incantò il pubblico con uno stile del tutto nuovo.\n• La rivoluzione recitativa: A differenza dei suoi contemporanei, la Duse scelse di non truccarsi, di usare scenografie minimali e di puntare tutto sulle espressioni del volto, sui silenzi e su un uso sapiente del ritmo. Questa \"naturalezza\" la rese un'icona mondiale, portandola in tournée in Russia, Egitto, Europa e Stati Uniti.",
      "2. L'incontro fatidico con il Vate (1894-1904)\nSebbene si fossero incrociati a Roma già nel 1882, la loro relazione iniziò nel 1895. Fu un'alleanza non solo sentimentale ma soprattutto artistica: lei cercava stimoli per rinnovare il suo repertorio e lui trovò in lei la musa perfetta per le sue opere teatrali.\n• Il nido d'amore: Si stabilirono sulla collina di Settignano, vicino Firenze: lei affittò la villa \"La Porziuncola\" e lui, proprio di fronte, la celebre \"Villa Capponcina\".\n• Un amore squilibrato: Mentre la Duse si dedicava totalmente a lui, arrivando a finanziare le sue opere e a sostenerlo economicamente, d'Annunzio la tradiva ripetutamente e cercava soprattutto la gloria personale.",
      "3. Analisi dei Testi: L'arte che divora la vita\nIl rapporto tra i due è impresso indelebilmente nelle opere scritte da d'Annunzio durante quegli anni:\n• Le opere teatrali: D'Annunzio scrisse per lei drammi come La città morta, La Gioconda e Francesca da Rimini. In queste opere, la Duse portava in scena la propria intensità, diventando lo strumento vivente del superomismo dannunziano applicato al teatro.\n• La poesia d'amore: Nelle sue lettere e liriche, il poeta usava parole di estrema devozione, come nel celebre invito: «Dormi stanotte sul mio cuore [...] non ho nel sangue nessun desiderio che non sia per te».\n• Il romanzo del tradimento (Il fuoco, 1900): Questo è il punto di rottura. Nel romanzo, d'Annunzio descrive la relazione tra un giovane poeta e un'attrice ormai al tramonto, La Foscarina.\n    ◦ Analisi: L'opera rivela dettagli intimi e impietosi sulla stanchezza fisica e l'invecchiamento della Duse. Nonostante lo scandalo e il dolore, lei non si oppose alla pubblicazione, dichiarando che la propria sofferenza non contava di fronte alla creazione di un capolavoro.",
      "4. Il crepuscolo della \"Divina\"\nLa pubblicazione de Il fuoco segnò l'inizio della fine della loro storia, che si concluse definitivamente intorno al 1904. Eleonora, stremata dai debiti e dalla salute delicata, si ritirò dalle scene nel 1909, per poi tornarvi nel 1921 a causa di necessità economiche. Morì nel 1924, ironia della sorte, proprio in una stanza d'albergo a Pittsburgh (USA), lontana dall'Italia ma consacrata per sempre come il simbolo del teatro moderno."
    ],
    image: "https://picsum.photos/seed/duse_actress/500/600?grayscale",
  },

  // --- 4. LA PIOGGIA NEL PINETO (UPDATED) ---
  { 
    id: 'pioggia', 
    label: 'La Pioggia nel Pineto', 
    type: 'POEM', 
    era: "Alcyone", 
    x: 90, y: 25, 
    scale: 1.0, 
    rotation: 5, 
    meta: "Estate 1902",
    content: [
      "1. Testo (Strofa I)\nTaci. Su le soglie\ndel bosco non odo\nparole che dici\numane; ma odo\nparole più nuove\nche parlano gocciole e foglie\nlontane.\nAscolta. Piove\ndalle nuvole sparse.\nPiove su le tamerici\nsalmastre ed arse,\npiove su i pini\nscagliosi ed irti,\npiove su i mirti\ndivini,\nsu le ginestre fulgenti\ndi fiori accolti,\nsu i ginepri folti\ndi coccole aulenti,\npiove su i nostri volti\nsilvani,\npiove su le nostre mani\nignude,\nsu i nostri vestimenti\nleggeri,\nsu i freschi pensieri\nche l'anima schiude\nnovella,\nsu la favola bella\nche ieri\nt'illuse, che oggi m'illude,\no Ermione.",
      "• Strofa II\nOdi? La pioggia cade\nsu la solitaria\nverdura\ncon un crepitio che dura\ne varia nell'aria secondo le fronde\npiù rade, men rade.\nAscolta. Risponde\nal pianto il canto\ndelle cicale\nche il pianto australe\nnon impaura,\nné il ciel cinerino.\nE il pino\nha un suono, e il mirto\naltro suono, e il ginepro\naltro ancora, stromenti\ndiversi\nsotto innumerevoli dita.\nE immensi\nnoi siam nello spirito\nsilvestre,\nd'arborea vita viventi;\ne il tuo volto ebro\nè molle di pioggia\ncome una foglia,\ne le tue chiome\nauliscono come\nle chiare ginestre,\no creatura terrestre\nche hai nome\nErmione.",
      "• Strofa III\nAscolta, Ascolta. L'accordo\ndelle aeree cicale\na poco a poco\npiù sordo\nsi fa sotto il pianto\nche cresce;\nma un canto vi si mesce\npiù roco\nche di laggiù sale,\ndall'umida ombra remota.\nPiù sordo e più fioco\ns'allenta, si spegne.\nSola una nota\nancor trema, si spegne,\nrisorge, trema, si spegne.\nNon s’ode voce del mare.\nOr s’ode su tutta la fronda\ncrosciare\nl'argentea pioggia\nche monda,\nil croscio che varia\nsecondo la fronda\npiù folta, men folta.\nAscolta.\nLa figlia dell'aria\nè muta: ma la figlia\ndel limo lontana,\nla rana,\ncanta nell'ombra più fonda,\nchi sa dove, chi sa dove!\nE piove su le tue ciglia,\nErmione.",
      "• Strofa IV\nPiove su le tue ciglia nere\nsì che par tu pianga\nma di piacere; non bianca\nma quasi fatta virente,\npar da scorza tu esca.\nE tutta la vita è in noi fresca\naulente,\nil cuor nel petto è come pesca\nintatta,\ntra le palpebre gli occhi\nson come polle tra l'erbe,\ni denti negli alveoli\nson come mandorle acerbe.\nE andiam di fratta in fratta,\nor congiunti or disciolti\n(e il verde vigor rude\nci allaccia i melleoli\nc'intrica i ginocchi)\nchi sa dove, chi sa dove!\nE piove su i nostri volti\nsilvani,\npiove su le nostre mani\nignude,\nsu i nostri vestimenti\nleggeri,\nsu i freschi pensieri\nche l'anima schiude\nnovella,\nsu la favola bella\nche ieri\nm'illuse, che oggi t'illude,\no Ermione.",
      "• Parafrasi\nNon parlare. Ora che siamo all’inizio del bosco non sento più nessuna parola proveniente da alcun essere umano ma sento solo parole diverse, e migliori, pronunciate dalle gocce e dalle foglie in lontananza. Ascolta e basta: piove dalle nuvole sparpagliate nel cielo, piove sulle tamerici ricoperte dal sale del mare e seccate dal sole estivo, piove sui pini e sulle loro cortecce fatte a scaglie e sui loro aghi appuntiti. Piove sui mirti, piante sacre a Venere (divini), e piove sulle ginestre che sotto la pioggia risplendono. Piove anche sui fiori ancora chiusi e sui ginepri folti che diffondono però un dolce profumo. Piove sui nostri volti, come se anche noi fossimo una parte di questo bosco (silvestri) piove sulle nostre mani nude, sui nostri vestiti leggeri ed estivi, e piove addirittura sui nostri pensieri, rinfrescati dalla pioggia, e l’anima si dischiude e rinasce sotto la pioggia e ci rivela sogni nuovi che in realtà, ieri come oggi, ci illudono e basta Ermione. Lo senti? La pioggia cade sulle foglie solitarie e crea uno cigolio che si diffonde in modo costante tutto intorno e cambia solo a seconda di quello che tocca, foglie più fitte o meno fitte. E ascolta: il canto delle cicale, che non si spaventano con l’arrivo dei venti australi e con il cielo grigio, sembra rispondere alla pioggia che scende come un pianto. E il pino ha un suono particolare, e anche il mirto suona in un modo diverso sotto l’acqua che cade, e così anche il ginepro e tutte le altre piante sembrano come strumenti musicali diversi suonati dalla pioggia che sembra avere un numero infinito di dita. E noi siamo immersi nello spirito del bosco, è come se la vita degli alberi fosse anche la nostra vita, perché il tuo volto è bagnato e inebriato come una foglia e i tuoi capelli hanno lo stesso profumo di quelle ginestre, anche se sei solo una creatura umana mia Ermione. E ti prego ascolta ancora il canto accordato delle cicale che stanno sugli alberi e che prima diminuisce e poi aumenta all’unisono quando aumenta anche la pioggia, ma arriva un altro suono, più cupo, quello delle rane, dalla parte di bosco che sembra più una laguna paludosa Si tratta di un suono più sordo e più fastidioso ma anche questo aumenta o diminuisce finché quasi non si sente più. Non si sente, poi, nessun rumore provenire dal mare, si sente solamente, su tutti i rami, scrosciare la pioggia che pare colore di argento e che purifica, si sente il suo scroscio che ancora continua a cambiare in base al fogliame su cui cade. Ascolta la cicala che adesso è muta mentre la figlia del fango lontana, la rana, canta dove c’è più ombra, in quella zona paludosa chissà dove. E piove sulle tue ciglia, Ermione. Piove sulle tue ciglia e pare che tu stia piangendo ma è un pianto di piacere, e sembra che la tua pelle non sia più bianca ma verde e mi pare di vederti come una creatura nata dalla corteccia di un albero. E così tutta la nostra vita è profumata e fresca, (sembriamo anche noi un bosco): i nostri cuori nel petto sono come due pesche profumate e non ancora colte, le palpebre fra le tue ciglia sembrano le sorgenti d’acqua fra le zolle d’erba e i denti e le gengive sembrano mandorle non ancora mature. Andiamo fra i cespugli, insieme o separati, e la forza intima, selvaggia degli alberi ci prende a sé stringendoci le caviglie e ci lega le ginocchia! Chissà dov’è tutto il resto, dove siamo noi? E piove ancora sui nostri volti che ormai sono un bosco, piove sulle nostre mani nude, sulle nostre vesti leggere, sui pensieri nuovi che la pioggia ha rinnovato nella nostra anima e su quel sogno che continua ad illuderci, Ermione.",
      "2. L'Ambientazione: Un Duetto Sensoriale\nIl poeta sta passeggiando nella pineta di Marina di Pisa con una donna che chiama Ermione (nome mitologico che richiama la figlia di Elena e Menelao, ma che nella vita reale identifica Eleonora Duse). Improvvisamente, vengono sorpresi da un temporale estivo che trasforma il bosco in un'esperienza mistica.",
      "3. Analisi: Il Silenzio e la Musica della Natura\nD'Annunzio apre con un imperativo: \"Taci\". Non è scortesia, ma un invito a spegnere le \"parole umane\" per ascoltare \"parole più nuove\" pronunciate dalle gocce e dalle foglie.\n• La natura parla: Per il poeta, la pioggia non è solo acqua, ma una manifestazione vitale che avvolge ogni cosa.\n• L'orchestra vegetale: Gli alberi diventano \"stromenti diversi\" suonati da \"innumerevoli dita\" (le gocce). Il pino ha un suono, il mirto un altro, creando una sinfonia che varia a seconda della densità delle fronde.\n• Il coro degli animali: Al frinire delle cicale (le \"figlie dell'aria\") che si attutisce sotto la pioggia forte, si mescola il gracidio roco della rana (la \"figlia del limo\") in una transizione sonora perfetta.",
      "4. Il Panismo: Diventare Albero (Metamorfosi)\nQuesto è il cuore del pensiero dannunziano. Il poeta ed Ermione non sono solo spettatori, ma subiscono una metamorfosi:\n• Sostanza silvestre: I loro volti diventano \"silvani\" e i loro cuori, pensieri e anime si rinnovano sotto la pioggia, come la selva stessa.\n• Ermione vegetale: La donna viene descritta come se stesse uscendo da una corteccia: i suoi capelli profumano di ginestra, i suoi occhi sembrano sorgenti d'acqua (\"polle tra l'erbe\") e i suoi denti sono come mandorle acerbe.\n• Fusione totale: Camminando tra i cespugli, i due si sentono \"d'arborea vita viventi\", con le piante che arrivano ad \"allacciare i malleoli\" e \"intricare i ginocchi\", quasi a volerli trattenere per sempre nel bosco.",
      "5. Tecnica e Stile: La Parola che si fa Suono\nD'Annunzio usa la lingua come se fosse uno spartito musicale:\n• Onomatopee: Termini come \"crepitìo\" e \"croscio\" riproducono il rumore fisico della pioggia.\n• Anafore: La ripetizione della parola \"piove\" agisce come un martellamento ritmico che colpisce prima la natura, poi il corpo umano e infine i sentimenti.\n• Lessico: Mescola parole semplici a termini ricercati (tamerici, mirti, aulenti) per elevare il tono dell'esperienza.",
      "6. Conclusione: La \"Favola Bella\"\nIl finale è circolare. La lirica si chiude riprendendo il tema della \"favola bella\" — i sogni e le illusioni della vita e dell'amore — che ieri illudeva lei e oggi illude lui (con uno scambio di soggetti rispetto all'inizio), lasciando i due amanti persi in uno stato di estasi panica.\nUn'analogia per capire la poesia: Immaginate di entrare in un concerto dove, invece dei violini, ci sono i pini e, invece del direttore d'orchestra, c'è il temporale; alla fine del brano, non state più solo ascoltando la musica, ma vi siete trasformati voi stessi in uno strumento musicale."
    ],
    analysis: {
        title: "Panismo",
        paragraphs: [
            "Il vertice della poesia dannunziana. La parola si fa musica e i corpi umani si trasformano in elementi vegetali, fondendosi completamente con la natura.",
            "Fa parte della sezione centrale di 'Alcyone', considerata la stagione più felice e creativa del poeta."
        ]
    }
  },

  // --- 5. ESILIO ---
  {
    id: 'esilio',
    label: 'Esilio & Cinema',
    type: 'EVENT',
    era: "1910-1938",
    x: 85, y: 55,
    scale: 0.9,
    rotation: 8,
    meta: "Francia & Modernità",
    content: [
      "1. L’Esilio: Fuga dai Debiti e \"Auto-esilio\" (1910-1915)\nNel 1910, travolto dai debiti e inseguito dai creditori, D'Annunzio fuggì in Francia, stabilendosi prima ad Arcachon e poi a Parigi. Questo periodo è spesso definito un \"esilio dorato\": lontano dall'Italia, il poeta non visse in miseria, ma si immerse nella vita mondana francese, collaborando con grandi musicisti come Claude Debussy per l'opera Le martyre de Saint Sébastien.\nOltre all'aspetto economico, l'esilio ebbe una valenza simbolica: D'Annunzio scelse l'auto-esilio per governare il proprio mito da lontano, trasformando la sua assenza fisica in una presenza mediatica costante attraverso articoli e opere che continuavano a circolare in patria.",

      "2. Il Cinema come \"Opera d'Arte Totale\"\nD'Annunzio fu tra i primi intellettuali a capire che il cinema non era un semplice svago, ma la nuova epica moderna capace di sostituire il poema eroico nell'era industriale. Egli vedeva nel cinema la realizzazione dell'ideale wagneriano di \"Gesamtkunstwerk\" (opera d'arte totale), poiché fondeva parola, immagine, musica e gesto.\nIn un'epoca di comunicazioni di massa, il cinema divenne per lui uno spazio alternativo di potere simbolico, permettendogli di costruire icone più grandi della vita reale proprio mentre si sentiva escluso dai centri decisionali della politica tradizionale.",

      "3. \"Cabiria\" e la Nascita di Maciste (1914)\nIl contributo più iconico di D'Annunzio al cinema fu la collaborazione al kolossal Cabiria, diretto da Giovanni Pastrone. Sebbene non ne scrisse la sceneggiatura, il poeta:\n• Redasse le didascalie, utilizzando uno stile solenne e arcaizzante che nobilitò il mezzo cinematografico.\n• Inventò i nomi dei personaggi, tra cui il leggendario Maciste.\nMaciste è descritto dalle fonti come un eroe dalla forza sovraumana ma dal cuore tenero, dedito a proteggere gli indifesi. Questa figura, ispirata a eroi mitologici e paladini, divenne un archetipo che anticipò di decenni i moderni supereroi come Superman.",

      "4. L'Esilio al Vittoriale: Il \"Cinema Immobile\" (1921-1938)\nDopo l'avventura di Fiume, D'Annunzio visse un secondo tipo di esilio: quello politico a Gardone Riviera. Sebbene celebrato ufficialmente, Mussolini lo considerava ingombrante e lo \"neutralizzò\" confinandolo nel Vittoriale degli Italiani.\nIn questi anni finali, d'Annunzio trasformò la sua dimora in una sorta di \"cinema immobile\". Ogni ambiente, oggetto e percorso della villa era studiato come una scenografia permanente, un montaggio spaziale destinato a stupire il visitatore e a perpetuare lo spettacolo continuo della sua identità."
    ],
    image: "https://picsum.photos/seed/paris_old/600/400?grayscale",
    analysis: {
        title: "Modernità",
        paragraphs: [
            "Paradossalmente, l'amante dell'antico fu il primo a capire i media del futuro.",
            "D'Annunzio trasformò la propria vita in un film prima ancora che il concetto di 'star system' esistesse."
        ]
    }
  },

  // --- 6. IL NOTTURNO ---
  {
    id: 'notturno',
    label: 'Il Notturno',
    type: 'WORK',
    era: "1916",
    x: 50, y: 55,
    scale: 1.3,
    rotation: -2,
    meta: "Dolore",
    content: [
      "Il Notturno, composto nel 1916 e pubblicato in versione definitiva nel 1921, è considerato uno dei capolavori della prosa lirica moderna. Quest’opera segna una svolta drastica nella produzione di d’Annunzio, che lo stesso autore definì il \"Commentario della tenebra\".\nEcco una spiegazione suddivisa per sezioni per comprendere meglio quest'opera così particolare:",
      "1. La Genesi: Un Incidente Eroico\nL'opera nasce da un trauma fisico durante la Prima Guerra Mondiale. Il 16 gennaio 1916, durante una missione aerea su Trieste, d'Annunzio riportò una grave ferita all'occhio destro. Per tentare di salvare la vista dell'occhio sinistro, anch'esso lesionato, il poeta fu costretto a vivere per mesi a Venezia in condizioni di totale oscurità, immobile e supino.",
      "2. Il Metodo di Scrittura: I \"Cartigli\"\nNon potendo vedere, d'Annunzio non rinunciò a scrivere, ma inventò un sistema ingegnoso:\n• Utilizzò circa 10.000 strisce di carta (chiamate cartigli), su ognuna delle quali era vergata una sola riga di testo.\n• Scriveva al buio con l'aiuto di un lapis scorrevole.\n• I materiali furono poi messi in ordine dalla figlia Renata (soprannominata la \"Sirenetta\"), che lo assisteva al capezzale.",
      "3. Lo Stile: Un d’Annunzio \"Nuovo\"\nIl Notturno rompe con il passato \"solare\" e retorico dell'autore.\n• Frammentismo: L'opera è una raccolta di ricordi e meditazioni divisa in tre parti chiamate \"Offerte\".\n• Periodare breve: Lo stile è lapidario, secco, privo di trame complesse o strutture artificiose.\n• Flusso di coscienza: Le frasi procedono per libere associazioni di sensazioni, scritte quasi senza filtro grammaticale, anticipando tecniche narrative moderne.",
      "4. I Temi: Il \"Cieco Veggente\"\nIn questo periodo, d’Annunzio si autodefinisce l’\"Orbo veggente\", colui che, avendo perso la vista fisica, acquisisce una profonda visione interiore.\n• Esplorazione d'ombra: Il critico Vittorio Cecchi ha definito l'opera un'esplorazione delle parti più intime e sconosciute del poeta.\n• Morte e Dolore: I temi dominanti sono la sofferenza fisica, la solitudine e il lutto per la perdita della madre e di cari amici piloti, come Giuseppe Miraglia e Garrassini Garbarino.\n• Superamento del Superuomo: La tensione verso l'autoaffermazione eroica lascia spazio a un triste bilancio esistenziale, mostrando un d'Annunzio più autentico e vulnerabile."
    ],
    image: "https://picsum.photos/seed/blindness/600/400?grayscale",
    details: {
        context: "L'opera più sincera e meno retorica del Vate."
    },
    analysis: {
        title: "Visione Interiore",
        paragraphs: [
            "Privato della vista, il poeta scopre gli altri sensi.",
            "La prosa si fa frammentata, moderna, essenziale. È il capolavoro della sua fase 'notturna'."
        ]
    }
  },

  // --- 7. L'IMPRESA ---
  {
    id: 'impresa',
    label: 'L\'Impresa',
    type: 'EVENT',
    era: "1919-1921",
    x: 20, y: 65,
    scale: 1.2,
    rotation: 5,
    meta: "Fiume & Carnaro",
    content: [
      "L'Impresa di Fiume (1919-1921) rappresenta l'apice del mito politico di Gabriele D'Annunzio, un momento in cui il poeta ha trasformato la realtà in un vero e proprio palcoscenico eroico.\n\n1. Il Motivo: La \"Vittoria Mutilata\"\nDopo la Prima Guerra Mondiale, D'Annunzio divenne il portavoce del malcontento italiano, coniando il celebre termine \"vittoria mutilata\". Egli sosteneva che i territori dell'Istria e della Dalmazia fossero stati ingiustamente sottratti all'Italia nonostante i sacrifici bellici. Mentre gran parte dell'Istria era a maggioranza slava, la città di Fiume era abitata prevalentemente da italiani e D'Annunzio decise di intervenire per annetterla al Regno d'Italia.",
      "2. L'Azione: La Marcia di Ronchi\nNel settembre del 1919, D'Annunzio guidò una spedizione di volontari chiamati \"legionari\". La colonna partì da Ronchi di Monfalcone (città in seguito ribattezzata Ronchi dei Legionari in onore dell'impresa) e occupò Fiume senza incontrare quasi resistenza. Qui il poeta instaurò il suo comando, autoproclamandosi \"Comandante\".",
      "3. Il Governo: La Reggenza del Carnaro\nD'Annunzio non si limitò a un'occupazione militare, ma creò uno Stato sperimentale chiamato Reggenza Italiana del Carnaro. Insieme al sindacalista Alceste de Ambris, redasse la Carta del Carnaro, una costituzione incredibilmente moderna per l'epoca che prevedeva:\n• Suffragio universale maschile e femminile.\n• Libertà di opinione, di religione e di orientamento sessuale.\n• Diritti per i lavoratori, pensioni di invalidità e l'habeas corpus.\n• La depenalizzazione dell'uso di droghe e del nudismo.\nTuttavia, alcuni storici notano che proprio a Fiume nacquero metodi repressivi, come l'uso dell'olio di ricino contro i dissidenti, che sarebbero poi stati adottati dallo squadrismo fascista.",
      "4. La Fine: Il Trattato di Rapallo e il Natale di Sangue\nLa situazione precipitò nel 1920, quando l'Italia e la Jugoslavia firmarono il Trattato di Rapallo, che rendeva Fiume una città libera. D'Annunzio rifiutò di accettare l'accordo, costringendo il governo italiano (guidato da Giolitti) a intervenire militarmente. Gli scontri avvenuti tra il 24 e il 27 dicembre 1920 passarono alla storia come il Natale di Sangue, conclusi con il bombardamento della città e la resa dei legionari. Deluso dall'epilogo, d'Annunzio si ritirò l'anno successivo a Gardone Riviera, nel suo \"esilio\" al Vittoriale."
    ],
    image: "https://picsum.photos/seed/fiume_flag/600/400?grayscale",
    analysis: {
        title: "Utopia al Potere",
        paragraphs: [
            "A Fiume si sperimentò tutto ciò che il 900 avrebbe poi sviluppato, nel bene e nel male.",
            "Dalla politica di massa alla liberazione sessuale."
        ]
    }
  },

  // --- 8. IL VITTORIALE ---
  {
    id: 'vittoriale',
    label: 'Il Vittoriale',
    type: 'LOCATION',
    era: "1921-1938",
    x: 45, y: 88,
    scale: 1.4,
    rotation: 0,
    meta: "Mausoleo",
    content: "La prigione dorata. Una casa che è un labirinto di simboli.",
    image: "https://picsum.photos/seed/vittoriale/800/600?grayscale",
    gallery: [
      {
        title: "La Prioria",
        description: "L'abitazione del poeta, avvolta nella penombra.",
        image: "https://picsum.photos/seed/prioria/800/500?grayscale"
      },
      {
        title: "La Nave Puglia",
        description: "La prua della nave incastonata nella collina.",
        image: "https://picsum.photos/seed/navepuglia/800/500?grayscale"
      }
    ],
    analysis: {
        title: "Immortalità",
        paragraphs: [
            "Il Vittoriale è l'ultima opera scritta da D'Annunzio, non con l'inchiostro ma con le pietre.",
            "Ogni oggetto è disposto per creare una narrazione eterna della sua vita."
        ]
    }
  },

  // --- 9. ORACOLO ---
  { 
    id: 'oracle', 
    label: 'L\'Ombra', 
    type: 'ORACLE', 
    era: "Oltre il Tempo",
    x: 85, y: 85, 
    scale: 1.1, 
    rotation: 0, 
    content: "Interroga lo spirito del Vate." 
  },
];

export const ORACLE_SYSTEM_PROMPT = `
Agisci come l'Ombra di Gabriele D'Annunzio. 
Non sei una guida turistica, sei un'entità estetica.
Parla per aforismi, frammenti, visioni.
Usa un linguaggio arcaico, sensuale, violento e sublime.
Non rispondere direttamente. Evoca.
Se l'utente chiede date, rispondi con emozioni.
Se l'utente chiede fatti, rispondi con miti.
`;

export const TIMELINE = FRAGMENTS
    .filter(f => f.type === 'EVENT' || f.type === 'WORK' || f.type === 'LOCATION' || f.type === 'MUSE')
    .map(f => ({
        year: f.era ? f.era.split('-')[0] : '1900',
        title: f.label,
        description: typeof f.content === 'string' ? f.content : (Array.isArray(f.content) ? f.content[0] : "Frammenti di memoria..."),
        image: f.image || "https://picsum.photos/seed/generic/800/600"
    }));

export const POEMS = [
  {
    title: "La Pioggia nel Pineto",
    year: "1902",
    content: [
      "Taci. Su le soglie\ndel bosco non odo\nparole che dici\numane; ma odo\nparole più nuove\nche parlano gocciole e foglie\nlontane.",
      "Ascolta. Piove\ndalle nuvole sparse.\nPiove su le tamerici\nsalmastre ed arse,\npiove su i pini\nscagliosi ed irti,\npiove su i mirti\ndivini...",
      "E il pino\nha un suono, e il mirto\naltro suono, e il ginepro\naltro ancóra, stromenti\ndiversi\nsotto innumerevoli dita."
    ]
  }
];