// Curated free GRE & GMAT resources.
// exam: "GRE" | "GMAT" | "Both"
// category: one of CATEGORIES below

const CATEGORIES = [
  "Official",
  "Practice Tests",
  "Quant",
  "Verbal",
  "Vocabulary",
  "AWA / Essay",
  "Video Courses",
  "Question Banks",
  "Study Plans",
  "Communities",
  "Flashcards & Apps"
];

const RESOURCES = [
  // ---------- GRE: Official ----------
  {
    title: "ETS POWERPREP Online",
    exam: "GRE",
    category: "Official",
    desc: "The official free GRE prep software from the test maker. Includes two full-length adaptive practice tests that closely mirror the real exam.",
    url: "https://www.ets.org/gre/test-takers/general-test/prepare/powerprep.html"
  },
  {
    title: "ETS Free GRE Prep Hub",
    exam: "GRE",
    category: "Official",
    desc: "ETS's official prep landing page — practice materials, sample questions, and the free 'Quick Quiz' app.",
    url: "https://www.ets.org/gre/test-takers/general-test/prepare.html"
  },
  {
    title: "ETS GRE Math Review & Conceptual Overview (PDF)",
    exam: "GRE",
    category: "Quant",
    desc: "Free official PDF covering every math concept tested on the GRE Quant section, straight from ETS.",
    url: "https://www.ets.org/pdfs/gre/gre-math-review.pdf"
  },

  // ---------- GRE: Vocabulary ----------
  {
    title: "Vocabulary.com GRE Word Lists",
    exam: "GRE",
    category: "Vocabulary",
    desc: "Adaptive, game-like vocabulary learning with curated GRE word lists that track your mastery over time.",
    url: "https://www.vocabulary.com/lists/"
  },
  {
    title: "Magoosh GRE Vocabulary Flashcards",
    exam: "GRE",
    category: "Vocabulary",
    desc: "1,000+ free digital flashcards covering high-frequency GRE vocabulary, sorted by difficulty.",
    url: "https://gre.magoosh.com/flashcards/vocabulary"
  },
  {
    title: "Quizlet: GRE Vocabulary Sets",
    exam: "GRE",
    category: "Vocabulary",
    desc: "Thousands of community-made GRE vocab flashcard sets, ready to study or export.",
    url: "https://quizlet.com/subject/gre-vocabulary/"
  },

  // ---------- GRE: Quant ----------
  {
    title: "Khan Academy — Math",
    exam: "GRE",
    category: "Quant",
    desc: "Not GRE-specific, but the best free resource for rebuilding arithmetic, algebra, geometry, and data analysis fundamentals tested on Quant.",
    url: "https://www.khanacademy.org/math"
  },
  {
    title: "GregMat Free GRE Math Course",
    exam: "GRE",
    category: "Quant",
    desc: "A famously thorough, entirely free GRE prep course by a former Kaplan instructor, covering every Quant topic in depth.",
    url: "https://www.gregmat.com"
  },

  // ---------- GRE: Verbal ----------
  {
    title: "Magoosh Free GRE eBooks",
    exam: "GRE",
    category: "Verbal",
    desc: "Downloadable free eBooks on GRE Verbal strategy, vocabulary, and Reading Comprehension approach.",
    url: "https://gre.magoosh.com/ebooks"
  },
  {
    title: "GregMat Free GRE Verbal Course",
    exam: "GRE",
    category: "Verbal",
    desc: "Video lessons on Text Completion, Sentence Equivalence, and Reading Comprehension strategy — all free.",
    url: "https://www.gregmat.com"
  },

  // ---------- GRE: AWA ----------
  {
    title: "ETS GRE Analytical Writing Guide",
    exam: "GRE",
    category: "AWA / Essay",
    desc: "Official scoring guides, sample essays, and the full pool of possible Issue and Argument essay topics.",
    url: "https://www.ets.org/gre/test-takers/general-test/prepare/analytical-writing.html"
  },

  // ---------- GRE: Video Courses ----------
  {
    title: "GregMat YouTube Channel",
    exam: "GRE",
    category: "Video Courses",
    desc: "Hundreds of free GRE video lessons and full practice problem walkthroughs — arguably the most complete free GRE video library online.",
    url: "https://www.youtube.com/@GregMat"
  },
  {
    title: "Magoosh GRE YouTube Channel",
    exam: "GRE",
    category: "Video Courses",
    desc: "Short, focused videos on GRE strategy, vocab, and problem-solving techniques.",
    url: "https://www.youtube.com/@magoosh"
  },

  // ---------- GRE: Practice Tests ----------
  {
    title: "Manhattan Prep Free GRE Practice Test",
    exam: "GRE",
    category: "Practice Tests",
    desc: "A full-length, computer-adaptive practice test with detailed score report and answer explanations.",
    url: "https://www.manhattanprep.com/gre/free-gre-practice-test/"
  },
  {
    title: "Kaplan Free GRE Practice Test",
    exam: "GRE",
    category: "Practice Tests",
    desc: "Free full-length practice test plus a post-test score analysis from Kaplan.",
    url: "https://www.kaptest.com/gre/free/gre-practice-test"
  },
  {
    title: "Princeton Review Free GRE Practice Test",
    exam: "GRE",
    category: "Practice Tests",
    desc: "Timed, full-length practice test with score report, from Princeton Review.",
    url: "https://www.princetonreview.com/grad/free-gre-practice-test"
  },

  // ---------- GRE: Study Plans ----------
  {
    title: "Magoosh GRE Study Schedules",
    exam: "GRE",
    category: "Study Plans",
    desc: "Free 1-month, 3-month, and 6-month GRE study schedules depending on how much time you have.",
    url: "https://gre.magoosh.com/study-schedules"
  },

  // ---------- GRE: Communities ----------
  {
    title: "Reddit — r/GRE",
    exam: "GRE",
    category: "Communities",
    desc: "Active community for score reports, study advice, shared resources, and Q&A with recent test-takers.",
    url: "https://www.reddit.com/r/GRE/"
  },
  {
    title: "GRE Prep Club Forum",
    exam: "GRE",
    category: "Communities",
    desc: "Forum with daily practice questions, free tests, and detailed discussion threads on tricky problems.",
    url: "https://greprepclub.com"
  },

  // ---------- GMAT: Official ----------
  {
    title: "mba.com Free GMAT Exam Prep",
    exam: "GMAT",
    category: "Official",
    desc: "GMAC's official free prep hub — includes the free GMAT Official Starter Kit with practice questions and one full-length adaptive test.",
    url: "https://www.mba.com/exams/gmat-exam/prepare-for-the-gmat-exam/free-gmat-exam-prep"
  },
  {
    title: "mba.com Official Guide Sample Questions",
    exam: "GMAT",
    category: "Official",
    desc: "Free official GMAT sample questions across Quant, Verbal, and Data Insights, sourced directly from GMAC.",
    url: "https://www.mba.com/exams/gmat-exam"
  },

  // ---------- GMAT: Practice Tests / Question Banks ----------
  {
    title: "GMAT Club",
    exam: "GMAT",
    category: "Question Banks",
    desc: "The largest GMAT community online — free question bank, daily 'Question of the Day', free practice tests, and error-log tools.",
    url: "https://gmatclub.com"
  },
  {
    title: "GMAT Club Math Book (Free)",
    exam: "GMAT",
    category: "Quant",
    desc: "A free, comprehensive PDF covering every GMAT Quant topic from number properties to combinatorics.",
    url: "https://gmatclub.com/forum/gmat-math-book-87417.html"
  },

  // ---------- GMAT: Verbal ----------
  {
    title: "Magoosh Free GMAT Resources",
    exam: "GMAT",
    category: "Verbal",
    desc: "Free GMAT eBooks, cheat sheets, and blog guides covering Sentence Correction, Critical Reasoning, and Reading Comprehension.",
    url: "https://gmat.magoosh.com"
  },
  {
    title: "e-GMAT Free Trial & Concept Videos",
    exam: "GMAT",
    category: "Verbal",
    desc: "Free access to intro concept videos and practice questions, especially strong for Verbal (Sentence Correction).",
    url: "https://www.e-gmat.com"
  },

  // ---------- GMAT: Quant ----------
  {
    title: "Khan Academy — Math",
    exam: "GMAT",
    category: "Quant",
    desc: "Rebuild core arithmetic, algebra, and geometry fundamentals that underlie GMAT Quant questions.",
    url: "https://www.khanacademy.org/math"
  },
  {
    title: "Target Test Prep Free GMAT Resources",
    exam: "GMAT",
    category: "Quant",
    desc: "Free quant articles, practice problems, and a diagnostic quiz to identify weak areas.",
    url: "https://www.targettestprep.com/gmat-free-resources/"
  },

  // ---------- GMAT: AWA / IR ----------
  {
    title: "mba.com AWA & Data Insights Guide",
    exam: "GMAT",
    category: "AWA / Essay",
    desc: "Official scoring rubrics and sample responses for the Analytical Writing and Data Insights sections.",
    url: "https://www.mba.com/exams/gmat-exam/about-the-exam"
  },

  // ---------- GMAT: Video Courses ----------
  {
    title: "GMAT Ninja YouTube Channel",
    exam: "GMAT",
    category: "Video Courses",
    desc: "Extremely well-regarded free video library covering Verbal, Quant, and Data Insights strategy in depth.",
    url: "https://www.youtube.com/@GMATNinjaTutoring"
  },
  {
    title: "EMPOWERgmat Free Resources",
    exam: "GMAT",
    category: "Video Courses",
    desc: "Free diagnostic tools, study plan builder, and sample video lessons.",
    url: "https://www.empowergmat.com"
  },

  // ---------- GMAT: Study Plans ----------
  {
    title: "Manhattan Prep Free GMAT Resources",
    exam: "GMAT",
    category: "Study Plans",
    desc: "Free study plans, strategy guides, and a full-length practice test from Manhattan Prep.",
    url: "https://www.manhattanprep.com/gmat/free-resources/"
  },

  // ---------- GMAT: Communities ----------
  {
    title: "Reddit — r/GMAT",
    exam: "GMAT",
    category: "Communities",
    desc: "Active subreddit for study advice, score reports, and shared free resources.",
    url: "https://www.reddit.com/r/GMAT/"
  },

  // ---------- Both: Flashcards & Apps ----------
  {
    title: "Anki (Free Flashcard App)",
    exam: "Both",
    category: "Flashcards & Apps",
    desc: "Free, powerful spaced-repetition flashcard app. Search for community-shared GRE/GMAT vocab and concept decks.",
    url: "https://apps.ankiweb.net"
  },
  {
    title: "Quizlet",
    exam: "Both",
    category: "Flashcards & Apps",
    desc: "Free flashcard and quiz platform with thousands of student-made GRE and GMAT decks.",
    url: "https://quizlet.com"
  }
];
