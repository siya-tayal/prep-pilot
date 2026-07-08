// Stumblebee GRE Vocabulary: flashcard session engine.

const SESSION_SIZE = 15;
const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

const root = document.getElementById("vocabRoot");

function wordsForLetter(letter) {
  return VOCAB_WORDS.filter(w => w.word[0].toLowerCase() === letter);
}

function overallMasteredCount() {
  return VocabSRS.masteredWords().length;
}

function screenShell(inner) {
  root.innerHTML = inner;
}

// ---------- Letter grid (home) ----------

function renderHome() {
  document.body.dataset.page = "vocab";
  const mastered = overallMasteredCount();
  const total = VOCAB_WORDS.length;
  const pct = Math.round((mastered / total) * 100);

  const tiles = LETTERS.map(letter => {
    const words = wordsForLetter(letter);
    if (!words.length) return "";
    const done = VocabSRS.masteredCount(words);
    const tilePct = Math.round((done / words.length) * 100);
    return `
      <div class="letter-tile ${done === words.length ? "complete" : ""}" data-letter="${letter}">
        <div class="lt-char">${letter}</div>
        <div class="lt-count">${done}/${words.length}</div>
        <div class="lt-track"><div class="lt-fill" style="width:${tilePct}%;"></div></div>
      </div>`;
  }).join("");

  screenShell(`
    <div class="vocab-hero">
      <div>
        <span class="eyebrow" style="background:var(--yellow);">GRE Vocabulary</span>
        <h1 style="margin-top:14px;">${mastered} of ${total} words mastered.</h1>
        <p style="color:#C9C4B6; margin-top:6px;">Pick a letter to start a smart review session. Words you already know will not keep showing up.</p>
      </div>
      <div class="vocab-hero-stat">
        <div class="vh-ring-label"><div class="big">${pct}%</div><div class="small">mastered</div></div>
      </div>
    </div>
    <div class="letter-grid" id="letterGrid">${tiles}</div>
  `);

  document.querySelectorAll(".letter-tile").forEach(tile => {
    tile.addEventListener("click", () => startSession(tile.dataset.letter));
  });
}

// ---------- Session ----------

let session = null;

function startSession(letter) {
  const words = wordsForLetter(letter);
  const queue = VocabSRS.buildQueue(words, SESSION_SIZE);

  if (!queue.length) {
    screenShell(`
      <div class="vocab-session" style="text-align:center;">
        <span class="eyebrow" style="background:var(--yellow);">Letter ${letter.toUpperCase()}</span>
        <h2 style="margin-top:16px;">Every word here is already mastered!</h2>
        <p class="muted" style="margin:14px 0 26px;">Try another letter, or come back later. Mastered words are retired from review.</p>
        <a href="vocab" class="btn btn-black">← Back to all letters</a>
      </div>
    `);
    return;
  }

  const newTopicRecords = PersonalBests.recordTopicStarted("vocab-" + letter);
  if (newTopicRecords.length) PersonalBests.showToast(newTopicRecords);

  session = { letter, queue, index: 0, correct: 0, newlyMastered: 0 };
  renderCard();
}

function renderCard() {
  const { queue, index } = session;
  const word = queue[index];
  const options = buildVocabOptions(word, VOCAB_WORDS);

  screenShell(`
    <div class="vocab-session">
      <div class="vs-progress">Word ${index + 1} of ${queue.length} &middot; Letter ${session.letter.toUpperCase()}</div>
      <div class="vs-track"><div class="vs-fill" style="width:${Math.round((index / queue.length) * 100)}%;"></div></div>
      <div class="vs-card">
        <div class="vs-prompt"><span class="vs-word">${word.word}</span> is closest in meaning to:</div>
        <div class="vs-subprompt">Choose the best answer.</div>
        <div class="vs-options" id="vsOptions">
          ${options.map(o => `<button class="vs-option" data-text="${o.replace(/"/g, "&quot;")}">${o}</button>`).join("")}
        </div>
        <div class="vs-feedback" id="vsFeedback" hidden></div>
        <button class="btn btn-black btn-sm vs-next-btn" id="vsNextBtn" hidden>Next word →</button>
      </div>
    </div>
  `);

  const optionButtons = [...document.querySelectorAll(".vs-option")];
  optionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const chosen = btn.dataset.text;
      const isCorrect = chosen === word.gloss;
      optionButtons.forEach(b => {
        b.disabled = true;
        if (b.dataset.text === word.gloss) b.classList.add("correct");
        else if (b === btn) b.classList.add("incorrect");
      });

      const rec = VocabSRS.recordAnswer(word.word, isCorrect);
      if (isCorrect) session.correct++;
      if (rec.mastered) {
        session.newlyMastered++;
        if (window.DailyGoal) DailyGoal.recordCompletion();
      }

      const feedback = document.getElementById("vsFeedback");
      feedback.hidden = false;
      feedback.className = "vs-feedback " + (isCorrect ? "is-correct" : "is-incorrect");
      feedback.textContent = isCorrect
        ? (rec.mastered ? `Correct! "${word.word}" is now mastered.` : "Correct!")
        : `Not quite. "${word.word}" means: ${word.definition}`;

      document.getElementById("vsNextBtn").hidden = false;
    });
  });

  document.getElementById("vsNextBtn").addEventListener("click", () => {
    session.index++;
    if (session.index >= session.queue.length) renderSummary();
    else renderCard();
  });
}

function renderSummary() {
  const { queue, correct, newlyMastered, letter } = session;
  const accuracy = Math.round((correct / queue.length) * 100);

  screenShell(`
    <div class="vocab-session vs-summary">
      <span class="eyebrow" style="background:var(--yellow);">Session complete</span>
      <h2 style="margin-top:16px;">Nice work on letter ${letter.toUpperCase()}!</h2>
      <div class="vs-summary-stats">
        <div class="vs-summary-stat"><div class="n">${queue.length}</div><div class="l">words practiced</div></div>
        <div class="vs-summary-stat"><div class="n">${accuracy}%</div><div class="l">accuracy</div></div>
        <div class="vs-summary-stat"><div class="n">${newlyMastered}</div><div class="l">newly mastered</div></div>
      </div>
      <div class="hero-cta" style="display:flex; gap:12px; justify-content:center;">
        <a href="vocab" class="btn btn-black">Back to all letters</a>
        <button class="btn btn-outline" id="retrySessionBtn">Study letter ${letter.toUpperCase()} again</button>
      </div>
    </div>
  `);

  document.getElementById("retrySessionBtn").addEventListener("click", () => startSession(letter));

  const records = PersonalBests.recordVocabSession(queue.length, correct);
  if (records.length) PersonalBests.showToast(records);
}

// ---------- Boot: gate to GRE only ----------

function boot() {
  const exam = ExamLock.get();
  if (exam !== "GRE") {
    document.body.dataset.page = "vocab";
    screenShell(`
      <div class="vocab-session" style="text-align:center;">
        <span class="eyebrow" style="background:var(--yellow);">GRE Vocabulary</span>
        <h2 style="margin-top:16px;">${exam ? "This is a GRE-only feature." : "Pick GRE to unlock vocabulary."}</h2>
        <p class="muted" style="margin:14px 0 26px;">${exam ? `You're set up for ${exam}. Switch tracks in Settings to use the vocabulary flashcards.` : "Choose GRE from the homepage to start building your vocabulary."}</p>
        <a href="${exam ? "settings" : "course"}" class="btn btn-black">${exam ? "Go to Settings" : "Choose your exam"} →</a>
      </div>
    `);
    return;
  }
  renderHome();
}

document.addEventListener("DOMContentLoaded", boot);
