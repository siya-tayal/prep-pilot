// Short GRE-vs-GMAT compatibility diagnostic. Mixes a few quant/verbal
// micro-questions with two self-report preference questions, since the real
// biggest factor is which programs a student is applying to.

const APTITUDE_QUESTIONS = [
  {
    id: "q1", type: "quant",
    prompt: "A shirt costs $40 after a 20% discount. What was its original price?",
    options: ["$45", "$48", "$50", "$55"],
    correct: 2
  },
  {
    id: "q2", type: "quant",
    prompt: "What is 15% of 240?",
    options: ["24", "30", "36", "40"],
    correct: 2
  },
  {
    id: "q3", type: "quant",
    prompt: "A train travels 180 miles in 3 hours. At the same rate, how long will it take to travel 300 miles?",
    options: ["4 hours", "5 hours", "6 hours", "7 hours"],
    correct: 1
  },
  {
    id: "q4", type: "verbal",
    prompt: "Which word is closest in meaning to \"meticulous\"?",
    options: ["Careless", "Careful", "Hasty", "Indifferent"],
    correct: 1
  },
  {
    id: "q5", type: "verbal",
    prompt: "KNIFE is to CUT as PEN is to ___?",
    options: ["Draw", "Write", "Hold", "Ink"],
    correct: 1
  },
  {
    id: "q6", type: "verbal",
    prompt: "Despite her ______ efforts, she failed to convince the committee.",
    options: ["half-hearted", "diligent", "indifferent", "careless"],
    correct: 1
  },
  {
    id: "q7", type: "preference",
    prompt: "When you hit a hard problem, you'd rather...",
    options: ["Work through calculations and formulas", "Analyze an argument's structure and language"],
    mapsTo: ["quant", "verbal"]
  },
  {
    id: "q8", type: "program",
    prompt: "What are you mainly applying to?",
    options: ["Business / MBA programs", "Other graduate programs (STEM, humanities, social science, etc.)", "Not sure yet"],
    mapsTo: ["mba", "other", "unsure"]
  }
];

function scoreAptitude(answers) {
  // answers: { [questionId]: selectedOptionIndex }
  let quantCorrect = 0, quantTotal = 0, verbalCorrect = 0, verbalTotal = 0;
  let workStylePref = null, programType = null;

  APTITUDE_QUESTIONS.forEach(q => {
    const picked = answers[q.id];
    if (q.type === "quant") { quantTotal++; if (picked === q.correct) quantCorrect++; }
    if (q.type === "verbal") { verbalTotal++; if (picked === q.correct) verbalCorrect++; }
    if (q.type === "preference") workStylePref = q.mapsTo[picked];
    if (q.type === "program") programType = q.mapsTo[picked];
  });

  let recommendation, reason;
  if (programType === "mba") {
    recommendation = "GMAT";
    reason = "You're applying mainly to MBA programs — the GMAT is still the exam most business schools expect, even though a growing number also accept the GRE.";
  } else if (programType === "other") {
    recommendation = "GRE";
    reason = "You're applying to non-business graduate programs, where the GRE is accepted far more broadly than the GMAT.";
  } else {
    const quantLean = quantCorrect > verbalCorrect || (quantCorrect === verbalCorrect && workStylePref === "quant");
    recommendation = quantLean ? "GMAT" : "GRE";
    reason = quantLean
      ? "Your answers leaned quantitative and logic-driven — the GMAT's data-heavy format (and lighter emphasis on vocabulary) tends to suit that strength."
      : "Your answers leaned verbal — the GRE's broader vocabulary and reading emphasis (and its wider acceptance beyond business programs) tends to suit that strength.";
  }

  return {
    quantCorrect, quantTotal, verbalCorrect, verbalTotal,
    workStylePref, programType, recommendation, reason
  };
}

if (typeof window !== "undefined") {
  window.APTITUDE_QUESTIONS = APTITUDE_QUESTIONS;
  window.scoreAptitude = scoreAptitude;
}
