// Stumblebee — exam lock utility.
// Once a student picks GRE or GMAT, the choice is locked until they visit Settings.

const EXAM_LOCK_KEY = "stumblebee_exam_v1";

const ExamLock = {
  get() {
    return localStorage.getItem(EXAM_LOCK_KEY) || null;
  },
  set(exam) {
    localStorage.setItem(EXAM_LOCK_KEY, exam);
  },
  clear() {
    localStorage.removeItem(EXAM_LOCK_KEY);
  },
  isLocked() {
    return this.get() !== null;
  }
};

// ---------- Subject registry ----------
// Each exam has up to 3 sections. "status: live" sections have a chapters array
// available on window (loaded via separate <script> data files); "soon" sections
// render a coming-soon card instead of a lesson viewer.

const SUBJECTS = {
  GRE: {
    label: "GRE",
    fullLabel: "GRE General Test",
    sections: [
      { key: "quant", label: "Quantitative Reasoning", icon: "📐", status: "live", chaptersVar: "GRE_MATH_CHAPTERS" },
      { key: "verbal", label: "Verbal Reasoning", icon: "📖", status: "soon" },
      { key: "essay", label: "Analytical Writing", icon: "✍️", status: "soon" }
    ]
  },
  GMAT: {
    label: "GMAT",
    fullLabel: "GMAT Focus Edition",
    sections: [
      { key: "quant", label: "Quantitative Reasoning", icon: "📐", status: "live", chaptersVar: "GMAT_QUANT_CHAPTERS" },
      { key: "verbal", label: "Verbal Reasoning", icon: "📖", status: "soon" },
      { key: "di", label: "Data Insights", icon: "📊", status: "soon" }
    ]
  }
};

function getChaptersFor(exam, sectionKey) {
  const subj = SUBJECTS[exam];
  if (!subj) return null;
  const section = subj.sections.find(s => s.key === sectionKey);
  if (!section || section.status !== "live") return null;
  return window[section.chaptersVar] || null;
}
