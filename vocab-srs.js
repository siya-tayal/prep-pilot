// Stumblebee vocab SRS (spaced repetition system).
// A Leitner-box style scheduler: six boxes, each with a longer review
// interval. A correct answer promotes a word to the next box; a wrong
// answer resets its streak and drops it back a box. A word graduates
// ("mastered") only after six correct answers in a row, at which point it
// leaves the active rotation entirely, so already-known words stop
// wasting review time.

const VOCAB_SRS_KEY = "stumblebee_vocab_srs_v1";

// Minutes until a word in each box is due again. Box 6 means mastered.
const BOX_INTERVALS_MIN = { 1: 0, 2: 10, 3: 60 * 24, 4: 60 * 24 * 3, 5: 60 * 24 * 7 };

const VocabSRS = {
  getState() {
    try { return JSON.parse(localStorage.getItem(VOCAB_SRS_KEY) || "{}"); }
    catch (e) { return {}; }
  },
  saveState(state) {
    localStorage.setItem(VOCAB_SRS_KEY, JSON.stringify(state));
  },
  getWord(word) {
    const state = this.getState();
    return state[word] || { streak: 0, box: 1, nextDue: 0, timesSeen: 0, timesCorrect: 0, mastered: false };
  },
  recordAnswer(word, correct) {
    const state = this.getState();
    const rec = state[word] || { streak: 0, box: 1, nextDue: 0, timesSeen: 0, timesCorrect: 0, mastered: false };
    rec.timesSeen++;
    if (correct) {
      rec.timesCorrect++;
      rec.streak++;
      rec.box = Math.min(rec.box + 1, 6);
      if (rec.streak >= 6) {
        rec.mastered = true;
      }
    } else {
      rec.streak = 0;
      rec.box = Math.max(rec.box - 1, 1);
      rec.mastered = false;
    }
    const intervalMin = BOX_INTERVALS_MIN[rec.box] || 0;
    rec.nextDue = Date.now() + intervalMin * 60 * 1000;
    state[word] = rec;
    this.saveState(state);
    return rec;
  },
  masteredCount(words) {
    const state = this.getState();
    return words.filter(w => state[w.word] && state[w.word].mastered).length;
  },
  masteredWords() {
    const state = this.getState();
    return Object.keys(state).filter(w => state[w].mastered);
  },
  // Build a study queue for a set of candidate words: overdue/never-seen
  // words first (most overdue first), skipping anything already mastered.
  buildQueue(words, limit) {
    const state = this.getState();
    const now = Date.now();
    const scored = words
      .filter(w => !(state[w.word] && state[w.word].mastered))
      .map(w => {
        const rec = state[w.word];
        if (!rec) return { w, priority: 0, isNew: true }; // never seen = highest priority
        const overdueBy = now - rec.nextDue;
        return { w, priority: rec.box * 1e12 - overdueBy, isNew: false };
      });
    scored.sort((a, b) => a.priority - b.priority);
    return scored.slice(0, limit).map(s => s.w);
  }
};

// Build 4 shuffled options (1 correct + 3 distractors) for a word, using
// other words' glosses as distractors so every option is a real definition.
function buildVocabOptions(word, allWords) {
  const others = allWords.filter(w => w.word !== word.word);
  const shuffled = others.slice().sort(() => Math.random() - 0.5);
  const distractors = shuffled.slice(0, 3).map(w => w.gloss);
  const options = [word.gloss, ...distractors].sort(() => Math.random() - 0.5);
  return options;
}

if (typeof window !== "undefined") {
  window.VocabSRS = VocabSRS;
  window.buildVocabOptions = buildVocabOptions;
}
