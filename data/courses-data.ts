export interface CourseSubLevel {
  code: string;
  title: string;
  desc: string;
  topics?: string[];
}

export interface CourseFaq {
  question: string;
  answer: string;
}

export interface CourseProgram {
  id: string;
  slug: string;
  programNumber: string;
  tabTitle: string;
  badgeTag: string;
  title: string;
  shortTitle: string;
  levelCode: string;
  ageGroup: string;
  subtitle: string;
  description: string[];
  detailsSummary: string;
  image: string;
  cognitiveFocus: string;
  masteryCurve: string;
  duration: string;
  frequency: string;
  batchSize: string;
  mode: string;
  certificateBadge: string;
  fees: string;
  feePeriod: string;
  idealFor: string;
  levels: CourseSubLevel[];
  progressionRule: string;
  outcomes: string[];
  highlights: string[];
  curriculumFeatures: { title: string; desc: string; icon: string }[];
  faqs: CourseFaq[];
  whatsappMsg: string;
  prevCourse: { slug: string; title: string } | null;
  nextCourse: { slug: string; title: string } | null;
}

export const COURSES_DATA: CourseProgram[] = [
  {
    id: "beginner",
    slug: "beginner",
    programNumber: "PROGRAM 01",
    tabTitle: "BEGINNER (BG1–BG3)",
    badgeTag: "FOUNDATIONS & RULES · LEVELS BG1, BG2 & BG3",
    title: "BEGINNER COURSE (BG1, BG2 & BG3)",
    shortTitle: "Beginner Course (BG1–BG3)",
    levelCode: "BG1, BG2 & BG3",
    ageGroup: "Ages 5+ to 14 Years (Starting from scratch)",
    subtitle: "Master piece movement, fundamental rules, spatial reasoning, and basic checkmate patterns under expert guidance. Designed for young minds starting from zero.",
    description: [
      "The AIM Chess Academy Beginner Program is carefully tailored for children and newcomers taking their very first steps into the 64-square world. We turn abstract rules into vivid, joyful learning experiences using interactive digital demonstration boards, storytelling, and hands-on puzzles.",
      "Across three progressive modules (BG1, BG2, and BG3), students learn how each piece maneuvers and attacks, grasp the vital golden opening principles, avoid dangerous early traps like Scholar's Mate, and execute fundamental ladder checkmates with Rooks and Queens.",
      "Classes are conducted in small, engaging cohorts of 4 to 6 students where every child receives direct attention from FIDE Certified Trainers, building focus, patience, spatial awareness, and sportsmanship from day one."
    ],
    detailsSummary: "Weekly 2 classes · 24 Weeks (48 Sessions) · ISO Certified",
    image: "/22.png",
    cognitiveFocus: "SPATIAL REASONING & BOARD VISION",
    masteryCurve: "88%",
    duration: "24 Weeks (48 Sessions)",
    frequency: "2 Live Classes / Week (60 mins each)",
    batchSize: "Small Cohort (Max 4–6 Students)",
    mode: "Online (Global via Zoom) & Offline (Barasat Center)",
    certificateBadge: "ISO 9001:2015 Cert.",
    fees: "Available on Request",
    feePeriod: "Flexible monthly billing & international rates available",
    idealFor: "Children aged 5+ with no prior chess background, or kids who know how pieces move but lack structured opening rules and board awareness.",
    levels: [
      {
        code: "BG1",
        title: "Introduction & Board Vision",
        desc: "Board coordinates, piece movements & values, rules of check, checkmate, stalemate, and board geometry.",
        topics: [
          "Algebraic notation & grid coordinates (Files a-h & Ranks 1-8)",
          "Piece movements, values, capturing rules & touch-move etiquette",
          "Understanding the differences between Check, Checkmate & Stalemate",
          "Pawn structure basics, pawn promotion & basic defending concepts"
        ]
      },
      {
        code: "BG2",
        title: "Opening Rules & Basic Checkmates",
        desc: "Castling, En Passant, center control principles, Scholar's Mate defense, Queen & Rook ladder checkmates.",
        topics: [
          "Golden rules of the opening: controlling the 4 central squares",
          "Kingside & Queenside castling for King safety",
          "Defending against early Queen attacks & Scholar's Mate traps",
          "Executing Rook & Queen ladder mates against a lone King",
          "Special pawn rules: The En Passant capture explained"
        ]
      },
      {
        code: "BG3",
        title: "Fundamental Tactical Motifs",
        desc: "Single-move tactical motifs (Forks, Pins, Skewers, Hanging pieces), basic King & Pawn endgames, and chess clock basics.",
        topics: [
          "Identifying hanging undefended pieces in 1 move",
          "Fundamental tactics: Knights forks, Bishop pins, Rook skewers",
          "Basic King & Pawn endgame: Opposition & King escorting",
          "Introduction to official digital chess clocks & internal Swiss practice games"
        ]
      }
    ],
    progressionRule: "Students pass a diagnostic evaluation game with a senior coach + internal Swiss practice tournament to advance into Intermediate Level (IM1).",
    outcomes: [
      "Board Vision & Piece Movement Mastery (BG1)",
      "Core Opening Principles: Center Control & Castling (BG2)",
      "Essential Checkmate Patterns: Rook & Queen Mates (BG2)",
      "Single-Move Tactical Safety & En Passant Rules (BG3)",
      "Basic King & Pawn Endgame Opposition Fundamentals",
      "Confidence to play clock games on Lichess & Chess.com"
    ],
    highlights: [
      "Weekly 2 Live Classes (Small batches max 4-6)",
      "Complete Progression: BG1, BG2 & BG3",
      "FIDE Certified Trainer Guidance",
      "Monthly Internal Practice Tournaments",
      "Official ISO Course Completion Certificate",
      "Free Academy Study Materials & Puzzles"
    ],
    curriculumFeatures: [
      {
        title: "Child-Centric Interactive Pedagogy",
        desc: "Gamified lessons, fun puzzles, and friendly coach interactions that spark genuine passion for chess.",
        icon: "Sparkles"
      },
      {
        title: "FIDE Certified Mentorship",
        desc: "Direct guidance by trainers certified by the International Chess Federation (FIDE).",
        icon: "Award"
      },
      {
        title: "Weekly Practice Tournaments",
        desc: "Friendly internal Swiss tournaments where beginners practice with clocks without tournament anxiety.",
        icon: "Trophy"
      },
      {
        title: "ISO 9001:2015 Accredited",
        desc: "Structured, audited syllabus ensuring systematic progression and recognized certificates upon graduation.",
        icon: "ShieldCheck"
      }
    ],
    faqs: [
      {
        question: "Does my child need any chess experience before joining?",
        answer: "No prior experience is necessary! The BG1 beginner level is crafted specifically for complete beginners starting from zero."
      },
      {
        question: "What is the minimum age to enroll?",
        answer: "We welcome young learners from age 5 onwards. Our coaches use visual demonstration boards and engaging stories suited for young minds."
      },
      {
        question: "Are classes available online or offline?",
        answer: "Both! We conduct interactive online batches via Zoom/Lichess for global students, and physical offline classes at our Barasat academy center."
      },
      {
        question: "Can we attend a trial session before paying fees?",
        answer: "Yes, we offer a 100% free interactive demo session so you and your child can experience our teaching style firsthand."
      }
    ],
    whatsappMsg: "Hi, I would like to book a free demo for the Beginner Course (BG1-BG3).",
    prevCourse: null,
    nextCourse: { slug: "intermediate", title: "Intermediate Course (IM1–IM6)" }
  },
  {
    id: "intermediate",
    slug: "intermediate",
    programNumber: "PROGRAM 02",
    tabTitle: "INTERMEDIATE (IM1–IM6)",
    badgeTag: "TACTICAL PRECISION & STRATEGY · LEVELS IM1 TO IM6",
    title: "INTERMEDIATE COURSE (IM1 – IM6)",
    shortTitle: "Intermediate Course (IM1–IM6)",
    levelCode: "IM1 to IM6",
    ageGroup: "Ages 6+ (Students who know rules & basic tactics)",
    subtitle: "Eliminate blunder habits, calculate combinations with confidence, execute winning positional middle-game plans, and master theoretical endgames.",
    description: [
      "The Intermediate Program bridges casual rule-knowledge with competitive tournament play. Designed for students who understand checkmate and basic tactics, this comprehensive 36-week course deepens calculation habits and strategic intuition.",
      "Spanning levels IM1 through IM6, students master multi-step tactical combinations (discovered attacks, double checks, decoys, deflections), explore structured opening repertoires (Italian Game, Scotch, Sicilian principles), and learn positional concepts such as pawn outposts, open files, and weak squares.",
      "Crucially, students develop candidate move discipline and blunder-check rituals, preventing the unforced blunders that cost games, while learning how to convert King & Pawn and Rook endings."
    ],
    detailsSummary: "Weekly 2 classes · 36 Weeks (72 Sessions) · ISO Certified",
    image: "/25.png",
    cognitiveFocus: "TACTICAL PATTERN RECOGNITION",
    masteryCurve: "92%",
    duration: "36 Weeks (72 Sessions)",
    frequency: "2 Live Classes / Week (60 mins each)",
    batchSize: "Small Cohort (Max 4–6 Students)",
    mode: "Online (Global) & Offline (Barasat)",
    certificateBadge: "ISO Intermediate Cert.",
    fees: "Available on Request",
    feePeriod: "Flexible monthly billing & international rates available",
    idealFor: "Graduates of Beginner BG3, or club players (rated 800–1200 on chess platforms) who want to stop making random blunders and play with a clear strategic plan.",
    levels: [
      {
        code: "IM1–IM2",
        title: "Combinations & Core Openings",
        desc: "Multi-move tactics (Discovered attacks, double checks, decoys, deflections) and opening systems (Italian Game, Scotch, Sicilian principles).",
        topics: [
          "Multi-move tactical combinations: Decoys, Deflections & Overloaded pieces",
          "Discovered attacks, double checks, and windmill mating attacks",
          "Standard classical openings: Italian Game (Giuoco Piano), Scotch Game, French Defense concepts",
          "Pawn structure fundamentals: Doubled pawns, isolated pawns & pawn islands"
        ]
      },
      {
        code: "IM3–IM4",
        title: "Middlegame Strategy & Endgames",
        desc: "Outpost creation, pawn levers, open files, piece coordination, and essential King & Pawn / Rook endgames.",
        topics: [
          "Creating Knight outposts on weak central squares",
          "Open file invasion: 7th and 8th rank Rook penetration",
          "Pawn levers and breaking open locked positions",
          "Theoretical endgames: Square of the Pawn, Key Squares, and basic Rook endings",
          "Evaluating positional advantages: Bishop pair vs Knight pair"
        ]
      },
      {
        code: "IM5–IM6",
        title: "Calculation Discipline & Tournaments",
        desc: "Candidate move discipline, blunder check rituals, clock management, and official notation score sheets.",
        topics: [
          "Developing a Candidate Move checklist before every play",
          "Blunder-prevention rituals under fast clock pressures",
          "Clock management techniques for 15m+10s and 30m rapid formats",
          "Official FIDE notation sheet writing practice during live academy rounds"
        ]
      }
    ],
    progressionRule: "Students achieve 1100–1200+ internal academy rating and pass comprehensive tactical benchmark to enter Advanced 1.",
    outcomes: [
      "Forks, Pins, Skewers & Discovered Attack Motifs (IM1)",
      "Middle-Game Outpost Creation & Pawn Levers (IM3)",
      "Standard Opening Systems: Italian, Sicilian & French (IM2)",
      "Essential Theoretical King & Pawn and Rook Endgames (IM4)",
      "Systematic Candidate Move Calculation Tree (IM5)",
      "Score sheet notation & clock mastery for official tournaments"
    ],
    highlights: [
      "Weekly 2 Live Classes (Batches max 4-6)",
      "Complete Progression: IM1 through IM6",
      "Monthly Clock Tournaments with Notation",
      "Personalized Move-by-Move PGN Game Reviews",
      "ISO Intermediate Mastery Certificate",
      "Weekly Homework Puzzles on ChessBase/Lichess"
    ],
    curriculumFeatures: [
      {
        title: "Move-by-Move Game Analysis",
        desc: "Coaches review students' online and offline tournament games using Stockfish and human strategic commentary.",
        icon: "BookOpen"
      },
      {
        title: "Tactical Pattern Drills",
        desc: "Over 500+ curated puzzle patterns designed to build instantaneous tactical recognition.",
        icon: "Activity"
      },
      {
        title: "Score Sheet Writing",
        desc: "Complete training on official FIDE algebraic notation so students feel confident at physical tournaments.",
        icon: "Clock"
      },
      {
        title: "Rapid Rating Growth",
        desc: "Focused on moving students from 800 to 1200+ Elo on platforms like Lichess and Chess.com.",
        icon: "TrendingUp"
      }
    ],
    faqs: [
      {
        question: "How do I know if my child is ready for Intermediate level?",
        answer: "If your child already knows all rules, checkmates with Queen and Rook, and doesn't blunder pieces in 1 move, they can take our free diagnostic assessment for Intermediate placement."
      },
      {
        question: "Are practice tournaments included in the fee?",
        answer: "Yes! All internal Swiss clock practice tournaments and academy sparring sessions are completely included with zero extra charges."
      },
      {
        question: "What platforms are used for online homework?",
        answer: "We use Lichess Classroom and ChessBase interactive studies. Puzzles and homework are tailored to each student's current sub-level."
      }
    ],
    whatsappMsg: "Hi, I would like to book a free demo for the Intermediate Course (IM1-IM6).",
    prevCourse: { slug: "beginner", title: "Beginner Course (BG1–BG3)" },
    nextCourse: { slug: "advanced", title: "Advanced Course (ADV 1–3)" }
  },
  {
    id: "advanced",
    slug: "advanced",
    programNumber: "PROGRAM 03",
    tabTitle: "ADVANCED (ADV 1–3)",
    badgeTag: "COMPETITIVE PREPARATION · LEVELS ADV 1 TO ADV 3",
    title: "ADVANCED COURSE (ADV 1 – ADV 3)",
    shortTitle: "Advanced Course (ADV 1–3)",
    levelCode: "ADV 1 to ADV 3",
    ageGroup: "Tournament Players & Rated Candidates",
    subtitle: "Deepen calculation trees, master theoretical endgames (Lucena & Philidor), and prepare customized tournament opening repertoires against rated opponents.",
    description: [
      "The Advanced Course is an intensive competitive training track designed for serious junior players preparing to enter official state, national, and international FIDE rating tournaments.",
      "Coached by senior FIDE Certified Trainers, this curriculum expands deep calculation trees (3 to 5 ply visualization), prophylactic thinking (anticipating opponent threats before they materialize), and modern opening repertoires tailored against common club setups.",
      "Endgame mastery is a centerpiece of this course, ensuring students master the critical Lucena and Philidor positions, minor piece endgames, and transition techniques to convert slight positional edges into clean tournament points."
    ],
    detailsSummary: "Weekly 2 classes · 24 Weeks (48 Sessions) · FIDE Prep",
    image: "/23.png",
    cognitiveFocus: "DEEP CALCULATION & ENDGAMES",
    masteryCurve: "95%",
    duration: "24 Weeks (48 Sessions)",
    frequency: "2 Live Classes / Week (90 mins each)",
    batchSize: "Selected Tournament Batch (Max 4–6 Students)",
    mode: "Online (Global) & Offline (Barasat)",
    certificateBadge: "FIDE Prep Certificate",
    fees: "Available on Request",
    feePeriod: "Flexible monthly billing & international rates available",
    idealFor: "Intermediate graduates or active tournament players rated 1200–1500+ seeking their official FIDE rating or podium finishes at regional events.",
    levels: [
      {
        code: "Adv 1",
        title: "Modern Repertoires & Space",
        desc: "Dynamic opening systems (Sicilian variations, 1.d4 setups), space advantage management, and prophylactic thinking.",
        topics: [
          "Dynamic repertoires: Sicilian Defense (Dragon/Najdorf setups) & 1.d4 structures",
          "Space advantage conversion and fighting against pawn storms",
          "Prophylaxis: Thinking from the opponent's perspective before moving",
          "Exploiting backward pawns and weak square color complexes"
        ]
      },
      {
        code: "Adv 2",
        title: "Positional Sacrifices & Complexes",
        desc: "Weak square color complexes, exchange sacrifices, dynamic compensation, and candidate move visualization trees.",
        topics: [
          "Exchange sacrifices: Rook for Bishop/Knight for positional dominance",
          "Dynamic compensation vs static material balance",
          "Deep calculation trees: Visualizing 3–5 candidate moves cleanly",
          "Attacking the castled King: Pawn storms, piece sacrifices on h7/g7"
        ]
      },
      {
        code: "Adv 3",
        title: "Theoretical Endgames & FIDE Sprint",
        desc: "Lucena & Philidor Rook endings, minor piece endings, psychological tournament stamina, and clock control.",
        topics: [
          "The Lucena Bridge & Philidor Defense in Rook & Pawn endgames",
          "Opposite-colored Bishop endings: Drawing fortresses & winning breaks",
          "Minor piece endgames: Knight outposts vs bad Bishops",
          "Psychological tournament preparation: Coping with losses and 4-hour battles"
        ]
      }
    ],
    progressionRule: "Active rated tournament participation and coach benchmark score for progression to Expert 1.",
    outcomes: [
      "Candidate Move Discipline & Tree Calculation (3–5 ply)",
      "Positional Sacrifices & Prophylactic Defense",
      "Theoretical Endgame Mastery (Lucena & Philidor)",
      "Tournament Clock Management & Psychological Stamina",
      "Personalized Opening Repertoire .PGN Database Files",
      "Readiness for official FIDE rating tournaments"
    ],
    highlights: [
      "Weekly 2 Intensive Live Classes",
      "Complete Progression: Adv 1, Adv 2 & Adv 3",
      "Master-level Tactical Problem Vault",
      "Pre-round Opponent Scouting & Diagnostics",
      "Official FIDE Rating Roadmap Entry",
      "Direct Coach Review of Tournament Games"
    ],
    curriculumFeatures: [
      {
        title: "Classical Game Studies",
        desc: "Dissection of immortal games by Fischer, Kasparov, Karpov, and Carlsen to build strategic intuition.",
        icon: "BookOpen"
      },
      {
        title: "Endgame Precision Lab",
        desc: "Mastering theoretical Rook and minor piece positions where single tempos decide tournaments.",
        icon: "ShieldCheck"
      },
      {
        title: "Tournament Psychological Coaching",
        desc: "Handling tournament pressure, fatigue management during double rounds, and resilience.",
        icon: "Award"
      },
      {
        title: "Digital Database Access",
        desc: "Custom .PGN opening repertoires and training bases provided to every enrolled student.",
        icon: "Layers"
      }
    ],
    faqs: [
      {
        question: "Does this course help in getting an official FIDE rating?",
        answer: "Yes, this course is tailored specifically to prepare students for official AICF / FIDE rated tournaments to achieve their international Elo rating."
      },
      {
        question: "How long are the sessions in Advanced level?",
        answer: "Advanced sessions are 90 minutes each, allowing sufficient time for deep game analysis, theoretical study, and intense sparring."
      },
      {
        question: "Do coaches assist during actual tournaments?",
        answer: "Yes! Our coaches provide tournament recommendations, opponent scouting advice, and round-by-round debriefing."
      }
    ],
    whatsappMsg: "Hi, I would like to book a trial for the Advanced Course (Adv 1-3).",
    prevCourse: { slug: "intermediate", title: "Intermediate Course (IM1–IM6)" },
    nextCourse: { slug: "expert", title: "Expert Course (EXP 1–6)" }
  },
  {
    id: "expert",
    slug: "expert",
    programNumber: "PROGRAM 04",
    tabTitle: "EXPERT (EXP 1–6)",
    badgeTag: "TITLE PLAYER ANALYSIS & NOVELTIES · LEVELS EXP 1 TO EXP 6",
    title: "EXPERT COURSE (EXP 1 – EXP 6)",
    shortTitle: "Expert Course (EXP 1–6)",
    levelCode: "EXP 1 to EXP 6",
    ageGroup: "Rated Tournament Competitors (1400+ Elo)",
    subtitle: "Dissect modern Super-GM novelties, dynamic imbalances, and masterclasses under the direct mentorship of senior FIDE Certified Trainers and titled players.",
    description: [
      "The Expert Masterclass program is the pinnacle of AIM Chess Academy's competitive training. Designed exclusively for FIDE rated players and state/national contenders, this course explores master-level positional understanding and engine preparation.",
      "Students study modern Super-GM novelties, imbalanced pawn structures, dynamic compensation against material sacrifices, and advanced endgame conversions. Mentorship is provided by senior FIDE Certified Trainers and guest sessions by International Masters.",
      "Each student receives tailored opponent preparation, deep database research methods, and 4-hour classical tournament conditioning to push their FIDE rating towards 1600, 1800, and 2000+ Elo."
    ],
    detailsSummary: "Weekly 2 classes + Masterclasses · 48 Weeks · Master Level",
    image: "/18.png",
    cognitiveFocus: "DYNAMIC IMBALANCE & ENGINE PREP",
    masteryCurve: "98%",
    duration: "48 Weeks (Mastery Cycles)",
    frequency: "2 Classes / Week + Masterclasses",
    batchSize: "Elite Cohort (Max 4 Students)",
    mode: "Online (Worldwide)",
    certificateBadge: "Master Level Diploma",
    fees: "Available on Request",
    feePeriod: "Flexible monthly billing & international rates available",
    idealFor: "FIDE-rated players (1300–1600+ Elo) aiming for state podiums, national qualifications, or title norms.",
    levels: [
      {
        code: "Exp 1–2",
        title: "Master Calculation & Imbalances",
        desc: "Visualization beyond 5 ply, dynamic sacrifices, material vs initiative compensation, and deep tactical workouts.",
        topics: [
          "Multi-branch calculation trees beyond 5 ply",
          "Material vs Initiative: When to sacrifice the exchange or pawns",
          "Static vs dynamic imbalances in closed and open structures",
          "Advanced tactical workout drills from Grandmaster tournament praxis"
        ]
      },
      {
        code: "Exp 3–4",
        title: "Engine Lab & Super-GM Novelties",
        desc: "Modern Super-GM game innovation, opening database research, engine validation, and counter-attacking systems.",
        topics: [
          "Navigating modern opening databases (ChessBase / Mega Database)",
          "Using modern neural engines (Stockfish/Leela) without losing human understanding",
          "Finding opening novelties on move 12–18 in top theoretical lines",
          "Sharp counter-attacking systems against classical setups"
        ]
      },
      {
        code: "Exp 5–6",
        title: "Classical Conditioning & Titled Prep",
        desc: "4-hour classical tournament stamina, opponent antidote preparation, path to 1600–2000+ FIDE Elo.",
        topics: [
          "Physical & psychological endurance for 4–5 hour classical games",
          "Targeted opponent preparation: Exploiting specific player repertoire gaps",
          "Mastery of complex Queen endgames and Rook vs minor piece endgames",
          "Roadmap execution towards 1800–2000+ FIDE rating"
        ]
      }
    ],
    progressionRule: "Achieving official international FIDE rating milestones (1400 / 1600 / 1800+ Elo).",
    outcomes: [
      "Modern Super-GM Game Innovation & Novelties",
      "Imbalanced Pawn Structures & Dynamic Compensation",
      "Complex Minor Piece & Queen Endgame Conversions",
      "Opening Database Research & Engine Validation",
      "Tailored Repertoire against 1800+ Rated Opponents",
      "Elite Performance Psychology & Classical Stamina"
    ],
    highlights: [
      "Weekly 2 Classes + Exclusive Masterclasses",
      "Complete Progression: Expert 1 through Expert 6",
      "Elite Opening Repertoire Files (.PGN)",
      "Priority Tournament Coaching & Phone Support",
      "Target: 1600–2000+ Official FIDE Elo",
      "Guest Masterclasses by International Masters"
    ],
    curriculumFeatures: [
      {
        title: "Engine & Database Lab",
        desc: "Learn how top Grandmasters use ChessBase, Mega Database, and Stockfish to prepare surprise novelties.",
        icon: "Layers"
      },
      {
        title: "IM Guest Sessions",
        desc: "Exclusive training seminars with active International Masters analyzing practical tournament decisions.",
        icon: "Award"
      },
      {
        title: "Opponent Scouting",
        desc: "We analyze your upcoming tournament opponents' games to formulate customized psychological opening traps.",
        icon: "ShieldCheck"
      },
      {
        title: "FIDE Norm Roadmap",
        desc: "Strategic guidance on tournament selection to maximize Elo rating gain and title norm opportunities.",
        icon: "Trophy"
      }
    ],
    faqs: [
      {
        question: "What is the rating requirement to enter Expert Level?",
        answer: "Students generally need an established FIDE rating of 1200–1400+ or an internal academy rating assessment confirming advanced tactical competence."
      },
      {
        question: "Do students get personalized opening databases?",
        answer: "Yes, students receive complete ChessBase .cbv and .pgn tree repertoires continually updated with modern GM novelties."
      }
    ],
    whatsappMsg: "Hi, I would like to book a trial for the Expert Course (Exp 1-6).",
    prevCourse: { slug: "advanced", title: "Advanced Course (ADV 1–3)" },
    nextCourse: { slug: "individual", title: "Individual 1-on-1 Coaching" }
  },
  {
    id: "individual",
    slug: "individual",
    programNumber: "PROGRAM 05",
    tabTitle: "INDIVIDUAL (1-ON-1)",
    badgeTag: "100% PERSONALIZED 1-ON-1 MENTORSHIP · BG1 TO EXP 6",
    title: "INDIVIDUAL 1-ON-1 COACHING",
    shortTitle: "Individual 1-on-1 Coaching",
    levelCode: "Custom (BG1 to EXP 6)",
    ageGroup: "All Ages (Ages 5+ to Adults)",
    subtitle: "Completely personalized private coaching designed around your child's specific playing style, strengths, and rating goals across any level.",
    description: [
      "Our Individual 1-on-1 Coaching is the fastest path to chess mastery. With 100% of the coach's attention focused on a single student, every minute is tailored to eradicating recurring weaknesses, sharpening tactical vision, and building bespoke opening repertoires.",
      "Whether your child is a fast-learning 6-year-old beginner who needs customized pacing, or an active FIDE tournament contender preparing against specific rated opponents, 1-on-1 sessions offer maximum scheduling flexibility and deep psychological support.",
      "Parents receive monthly detailed progress calls with the head coach, alongside direct WhatsApp access for ongoing tournament advice and game analysis."
    ],
    detailsSummary: "Weekly 1 session · One-on-one training · Flexible Timing",
    image: "/images/prize-6.jpg",
    cognitiveFocus: "CUSTOM WEAKNESS ELIMINATION",
    masteryCurve: "96%",
    duration: "Customized & Flexible",
    frequency: "1 or 2 Private Sessions / Week (60 mins)",
    batchSize: "1-on-1 Private Mentorship",
    mode: "Online (Global via Zoom) & Offline (Barasat)",
    certificateBadge: "Level Certificate",
    fees: "Available on Request",
    feePeriod: "Flexible monthly billing & international rates available",
    idealFor: "Students seeking rapid progress, kids requiring flexible class timings across international time zones, or players preparing for upcoming tournaments.",
    levels: [
      {
        code: "Module A",
        title: "Personalized Skill Roadmap",
        desc: "Tailored curriculum advancing systematically through BG1 to Exp 6 at the student's personal learning pace.",
        topics: [
          "Diagnostic assessment of strengths, weaknesses & recurring blunder patterns",
          "Custom pacing: accelerate through mastered concepts, spend more time on complex areas",
          "Flexible blend of tactics, strategy, and endgame training"
        ]
      },
      {
        code: "Module B",
        title: "Tournament PGN Game Dissection",
        desc: "Every external tournament game analyzed move-by-move to eradicate individual recurring tactical mistakes.",
        topics: [
          "Detailed move-by-move breakdown of student's actual tournament games",
          "Root cause analysis: Why was the blunder made? (Time pressure, calculation slip, psychological fear)",
          "Building customized puzzle sets targeting the student's exact blind spots"
        ]
      },
      {
        code: "Module C",
        title: "Custom Opening Repertoire",
        desc: "Bespoke opening preparation tailored to the student's natural aggressive or positional inclinations.",
        topics: [
          "Crafting an opening repertoire that matches the student's natural personality",
          "Creating tailored .PGN reference files for White and Black",
          "Simulated sparring with coach playing the typical opponent defenses"
        ]
      }
    ],
    progressionRule: "Continuous personalized milestone assessments with immediate level promotion upon coach sign-off.",
    outcomes: [
      "Micro-Analysis of Student's Personal Tournament PGNs",
      "Custom Opening Repertoire Tailored to Playing Style",
      "Targeted Blunder Elimination & Tactical Workouts",
      "Real-Time Sparring with Live Coach Move Critique",
      "100% Dedicated Attention from Senior Coach",
      "Flexible Timing Suited for Busy Academic Schedules"
    ],
    highlights: [
      "Weekly 1-on-1 Dedicated Session (60 mins)",
      "100% Flexible Scheduling Across Time Zones",
      "Dedicated Monthly Parent Progress Calls",
      "Direct Senior Coach WhatsApp Support",
      "Custom Opening Repertoires (.PGN Files)",
      "Instant Level Promotion When Ready"
    ],
    curriculumFeatures: [
      {
        title: "Tailored to Your Child's Brain",
        desc: "Every child thinks differently. We adapt our teaching speed and examples to match their cognitive style.",
        icon: "Sparkles"
      },
      {
        title: "Global Time Zone Friendly",
        desc: "Convenient class slots available for students in US, UK, Europe, Middle East, Australia, and India.",
        icon: "Globe"
      },
      {
        title: "Direct WhatsApp Line to Coach",
        desc: "Parents and students can share game links or ask questions directly between scheduled classes.",
        icon: "MessageCircle"
      },
      {
        title: "Zero Distractions",
        desc: "Maximum retention rate with 100% coach focus and personalized game sparring throughout the hour.",
        icon: "Award"
      }
    ],
    faqs: [
      {
        question: "Can we schedule classes around our child's school timetable?",
        answer: "Absolutely! 1-on-1 sessions offer complete scheduling flexibility. You can choose morning, evening, or weekend slots across any time zone."
      },
      {
        question: "Can an adult or teenager enroll in 1-on-1 coaching?",
        answer: "Yes! While our group batches are primarily for junior players, our 1-on-1 coaching is open to all ages, including ambitious adult club players."
      },
      {
        question: "Can we increase session frequency before a tournament?",
        answer: "Yes, you can easily add extra sessions or switch to 2 sessions per week during tournament preparation sprints."
      }
    ],
    whatsappMsg: "Hi, I would like to apply for Individual 1-on-1 Classes.",
    prevCourse: { slug: "expert", title: "Expert Course (EXP 1–6)" },
    nextCourse: { slug: "fide-group", title: "FIDE Rating Course (Group)" }
  },
  {
    id: "fide-group",
    slug: "fide-group",
    programNumber: "PROGRAM 06",
    tabTitle: "FIDE RATING (GROUP)",
    badgeTag: "OFFICIAL FIDE RATING ACCELERATION · GROUP COHORT",
    title: "FIDE RATING COURSE (GROUP)",
    shortTitle: "FIDE Rating Course (Group)",
    levelCode: "FIDE Group Cohort",
    ageGroup: "Junior Contenders Aiming for Official Elo",
    subtitle: "Structured group training dedicated to breaking through the rating barrier, entering rated tournaments, and securing official international FIDE Elo.",
    description: [
      "Breaking into official international FIDE ratings is the dream of every young chess player. The FIDE Rating Course (Group) provides a dedicated, structured environment designed specifically to turn unrated players into internationally rated competitors.",
      "Working together in an ambitious cohort of up to 6 students, players simulate authentic tournament hall conditions: playing with digital clocks under classical time controls, writing score sheets, practicing time scramble decisions, and overcoming tournament nervousness.",
      "Our coaches assist with AICF registration, tournament calendar selection, and game debriefing, giving your child the competitive edge they need to earn their FIDE rating in their very first rated tournaments."
    ],
    detailsSummary: "Weekly 2 classes · FIDE Tournament Roadmap",
    image: "/17.png",
    cognitiveFocus: "TOURNAMENT TEMPERAMENT",
    masteryCurve: "95%",
    duration: "24 Weeks (48 Sessions)",
    frequency: "2 Live Classes / Week (75 mins)",
    batchSize: "Rated Aspirants Cohort (Max 6 Students)",
    mode: "Online & Offline",
    certificateBadge: "FIDE Recognition",
    fees: "Available on Request",
    feePeriod: "Flexible monthly billing & international rates available",
    idealFor: "Students aiming to obtain an official international FIDE rating (1400–1600+ Elo) within the next 6 to 12 months.",
    levels: [
      {
        code: "Stage 1",
        title: "Official FIDE Roadmap & Regulations",
        desc: "Structured AICF & FIDE tournament entry preparation, official handbook rules, and tournament calendar selection.",
        topics: [
          "Understanding FIDE rating calculation, initial rating rules & K-factor",
          "AICF player ID registration and tournament eligibility guide",
          "Selecting optimal rating tournaments to maximize rating gain chances"
        ]
      },
      {
        code: "Stage 2",
        title: "Clock & Notation Simulations",
        desc: "Classical time controls (60m+30s, 90m+30s) with official score sheet notation habits.",
        topics: [
          "Mastering classical time controls: 60m+30s and 90m+30s increment play",
          "Avoiding time scrambles through systematic time-budgeting per move",
          "Official FIDE score sheet notation rules & dispute resolution etiquette"
        ]
      },
      {
        code: "Stage 3",
        title: "Anti-Club Opening Weapons",
        desc: "Eliminating common club player tricks and establishing resilient fighting repertoires.",
        topics: [
          "Dismantling tricky club gambits: Blackmar-Diemer, Evans, Stafford, Budapest",
          "Solid fighting structures with Black that guarantee equal or better middlegames",
          "Converting technical +1 and +2 advantages into clean tournament wins"
        ]
      }
    ],
    progressionRule: "Participating in official FIDE rated events with target initial Elo score.",
    outcomes: [
      "Structured FIDE Tournament Roadmap & Calendar Planning",
      "Anti-Club Player Opening Systems Preparation",
      "Monthly Classical Games with Clocks & Score Sheets",
      "Time Scramble Decision-Making & Emotional Endurance",
      "Full Guidance for Official Player Registrations",
      "Confidence to play in high-stakes rating tournaments"
    ],
    highlights: [
      "Weekly 2 Live Classes (Cohort max 6)",
      "Official FIDE Rating Roadmap & Guidance",
      "Rated Practice Simulation Rounds with Clocks",
      "Tournament Entry & Registration Assistance",
      "Pre-tournament Opening Checklist",
      "Community of Ambitious Peer Competitors"
    ],
    curriculumFeatures: [
      {
        title: "FIDE Hall Simulations",
        desc: "Exact replication of tournament time controls and score sheet writing to eradicate beginner anxiety.",
        icon: "Clock"
      },
      {
        title: "AICF / FIDE Registration Support",
        desc: "Step-by-step guidance for parents on paperwork, player IDs, and official tournament entries.",
        icon: "ShieldCheck"
      },
      {
        title: "Anti-Trap Repertoire",
        desc: "Bulletproof opening systems designed to neutralize common amateur club gambits effortlessly.",
        icon: "BookOpen"
      },
      {
        title: "Supportive Peer Cohort",
        desc: "Learn and spar alongside motivated peers striving for the same international milestones.",
        icon: "Trophy"
      }
    ],
    faqs: [
      {
        question: "How long does it take to get a FIDE rating?",
        answer: "With consistent training in this program, most students earn their official FIDE rating within 6 to 9 months after participating in 2 to 3 recognized rating events."
      },
      {
        question: "Do coaches help with tournament registrations?",
        answer: "Yes, we advise on upcoming FIDE calendar events, help with AICF player registrations, and coordinate tournament squads."
      }
    ],
    whatsappMsg: "Hi, I would like to apply for the FIDE Rating Course (Group).",
    prevCourse: { slug: "individual", title: "Individual 1-on-1 Coaching" },
    nextCourse: { slug: "fide-individual", title: "FIDE Rating Course (Individual)" }
  },
  {
    id: "fide-individual",
    slug: "fide-individual",
    programNumber: "PROGRAM 07",
    tabTitle: "FIDE RATING (1-ON-1)",
    badgeTag: "ELITE 1-ON-1 FIDE ELO BENCHMARKS",
    title: "FIDE RATING COURSE (INDIVIDUAL)",
    shortTitle: "FIDE Rating Course (Individual)",
    levelCode: "FIDE 1-on-1 Elite",
    ageGroup: "Competitive Players with Target Elo Goals",
    subtitle: "Private senior coach guidance tailored for targeted Elo milestones (1200, 1400, 1600+ Elo) with live tournament support and opponent scouting.",
    description: [
      "The FIDE Rating Course (Individual) is our premier private competitive service for ambitious tournament players with specific rating goals (1200, 1400, 1600, or 1800+ FIDE Elo).",
      "Under the personal mentorship of Founder Soumen Banerjee or a designated senior coach, students receive customized tournament game diagnostics, opponent scouting reports from mega databases, and live telephone / WhatsApp debriefing between rounds during active classical tournaments.",
      "This intense, individualized approach has produced top state champions, FIDE-rated medalists in the UK and India, and rapid Elo rating milestones."
    ],
    detailsSummary: "Weekly 1 session · Senior Coach · Tournament Support",
    image: "/15.png",
    cognitiveFocus: "RATING BENCHMARK ACCELERATION",
    masteryCurve: "99%",
    duration: "Ongoing Tournament Support",
    frequency: "Weekly 1-on-1 Session (60 mins) + Call Support",
    batchSize: "1-on-1 Private Senior Coach",
    mode: "Online (Global via Zoom)",
    certificateBadge: "Elite Elo Diploma",
    fees: "Available on Request",
    feePeriod: "Flexible monthly billing & international rates available",
    idealFor: "Serious junior tournament players targeting specific FIDE rating milestones with round-by-round coach guidance.",
    levels: [
      {
        code: "Milestone 1",
        title: "Custom Elo Milestone Roadmap",
        desc: "Targeted rating goals (1200 / 1400 / 1600+ Elo) with round-by-round point projections.",
        topics: [
          "Targeted rating calculations and round-by-round tournament score goals",
          "Selecting rating categories and open tournaments for maximum rating yield",
          "Personalized blunder diagnostic and performance trend tracking"
        ]
      },
      {
        code: "Milestone 2",
        title: "Pre-Round Opponent Scouting",
        desc: "Dissecting opponent tournament games in databases and preparing customized antidotes.",
        topics: [
          "Searching opponent profiles on FIDE, AICF, and ChessBase databases",
          "Identifying specific opening vulnerabilities and psychological habits of opponents",
          "Preparing 15–20 move targeted antidotes for morning and afternoon rounds"
        ]
      },
      {
        code: "Milestone 3",
        title: "Live Tournament Phone Guidance",
        desc: "Real-time psychological and tactical debriefing between classical tournament rounds.",
        topics: [
          "Immediate telephone debriefing after each tournament round",
          "Quick mental reset after difficult losses to maintain podium contention",
          "Tailored rest and nutrition advice for grueling multi-day events"
        ]
      }
    ],
    progressionRule: "Attaining official international FIDE Elo rating benchmarks (1400, 1600, 1800+ Elo).",
    outcomes: [
      "Custom Elo Milestone Roadmap (1200 / 1400 / 1600+)",
      "Pre-Round Opponent Scouting & Antidote Prep",
      "Comprehensive Blunder Diagnostic & Heatmap Tracking",
      "Live Consultation Support During Official Tournaments",
      "Direct Mentorship by Senior FIDE Certified Trainer",
      "Fastest Path to Earning & Increasing Official FIDE Rating"
    ],
    highlights: [
      "Weekly 1-on-1 Senior Coach Session",
      "Pre-round Opponent Scouting from Database",
      "Continuous Performance Analytics & PGN Heatmaps",
      "Live Tournament Phone Guidance",
      "Custom Elo Milestone Roadmap",
      "Proven Track Record of State & International Champions"
    ],
    curriculumFeatures: [
      {
        title: "Live Tournament Support",
        desc: "Call your senior coach between tournament rounds for immediate opponent prep and mental encouragement.",
        icon: "ShieldCheck"
      },
      {
        title: "Database Scouting",
        desc: "We look up your round pairings in advance to find opening weaknesses in your opponents' past games.",
        icon: "Layers"
      },
      {
        title: "Senior Trainer Direct Access",
        desc: "Mentored directly by certified senior trainers with proven track records of international medalists.",
        icon: "Award"
      },
      {
        title: "Elo Milestone Guarantee",
        desc: "Laser-focused on achieving and raising your official international FIDE Elo rating.",
        icon: "TrendingUp"
      }
    ],
    faqs: [
      {
        question: "How does live tournament phone guidance work?",
        answer: "When your child plays in an official tournament, you send the next round pairing to the coach. The coach reviews the opponent's game history and calls you to provide targeted opening strategy."
      },
      {
        question: "Can we start this course if we don't have a FIDE rating yet?",
        answer: "Yes! Many students enroll to secure their very first official FIDE rating in their upcoming tournaments."
      }
    ],
    whatsappMsg: "Hi, I would like to apply for the FIDE Rating Course (Individual).",
    prevCourse: { slug: "fide-group", title: "FIDE Rating Course (Group)" },
    nextCourse: null
  }
];

export function getCourseBySlug(slug: string): CourseProgram | undefined {
  return COURSES_DATA.find((c) => c.slug === slug || c.id === slug);
}
