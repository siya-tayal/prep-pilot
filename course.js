// Stumblebee — unified course engine.
// Handles: exam gate -> subsection picker -> chapter/lesson viewer.

const QC_OPTIONS = [
  { key: "A", text: "Quantity A is greater." },
  { key: "B", text: "Quantity B is greater." },
  { key: "C", text: "The two quantities are equal." },
  { key: "D", text: "The relationship cannot be determined from the information given." }
];

const DS_OPTIONS = [
  { key: "A", text: "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient." },
  { key: "B", text: "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient." },
  { key: "C", text: "BOTH statements TOGETHER are sufficient, but neither statement alone is sufficient." },
  { key: "D", text: "EACH statement ALONE is sufficient." },
  { key: "E", text: "Statements (1) and (2) TOGETHER are not sufficient." }
];

function qs(key) {
  return new URLSearchParams(window.location.search).get(key);
}

function progressKey(exam, sub) {
  return `stumblebee_progress_${exam}_${sub}`;
}
function getProgress(exam, sub) {
  try { return new Set(JSON.parse(localStorage.getItem(progressKey(exam, sub)) || "[]")); }
  catch (e) { return new Set(); }
}
function saveProgress(exam, sub, set) {
  localStorage.setItem(progressKey(exam, sub), JSON.stringify([...set]));
}

// ---------- Entry point ----------

let CURRENT_EXAM = null;
let CURRENT_SUB = null;
let CURRENT_CHAPTERS = null;
let FLAT = [];

function boot() {
  const urlExam = qs("exam");
  const lockedExam = ExamLock.get();

  if (lockedExam && urlExam && urlExam !== lockedExam) {
    renderLockedNotice(lockedExam, urlExam);
    return;
  }

  const exam = lockedExam || urlExam;

  if (!exam) {
    renderExamGate();
    return;
  }

  if (!lockedExam) ExamLock.set(exam);
  if (typeof renderNav === "function") renderNav();

  CURRENT_EXAM = exam;
  const sub = qs("sub");

  if (!sub) {
    renderSubsectionPicker(exam);
    return;
  }

  const subject = SUBJECTS[exam];
  const section = subject.sections.find(s => s.key === sub);

  if (!section || section.status !== "live") {
    renderComingSoon(exam, section);
    return;
  }

  CURRENT_SUB = sub;
  CURRENT_CHAPTERS = getChaptersFor(exam, sub);
  if (!CURRENT_CHAPTERS) { renderSubsectionPicker(exam); return; }

  initLessonViewer();
}

// ---------- Gate / picker screens ----------

function screenShell(inner) {
  document.getElementById("courseRoot").innerHTML = `<div class="wrap"><div class="gate-wrap">${inner}</div></div>`;
}

function renderLockedNotice(lockedExam, triedExam) {
  if (typeof renderNav === "function") renderNav();
  screenShell(`
    <div class="gate-card center">
      <span class="eyebrow">🔒 Locked in</span>
      <h1 style="margin-top:16px;">You're set up for ${lockedExam}.</h1>
      <p class="muted" style="max-width:480px; margin:14px auto 26px;">You picked ${lockedExam} as your track, so ${triedExam} content is locked. Head to Settings if you want to switch.</p>
      <div class="hero-cta">
        <a href="course?exam=${lockedExam}" class="btn btn-black">Continue with ${lockedExam} →</a>
        <a href="settings" class="btn btn-outline">Go to Settings</a>
      </div>
    </div>
  `);
}

function renderExamGate() {
  document.body.dataset.page = "course";
  if (typeof renderNav === "function") renderNav();
  screenShell(`
    <div class="gate-card center">
      <span class="eyebrow">Step 1 of 2</span>
      <h1 style="margin-top:16px;">Which exam are you studying for?</h1>
      <p class="muted" style="max-width:480px; margin:14px auto 30px;">Pick one to unlock its lessons. You can only switch later from Settings — so choose the one you're actually taking!</p>
      <div class="exam-pick-grid">
        <button class="exam-pick-card" data-exam="GRE">
          <div class="epc-title">GRE</div>
          <div class="epc-sub">General Test</div>
        </button>
        <button class="exam-pick-card" data-exam="GMAT">
          <div class="epc-title">GMAT</div>
          <div class="epc-sub">Focus Edition</div>
        </button>
      </div>
    </div>
  `);
  document.querySelectorAll(".exam-pick-card").forEach(btn => {
    btn.addEventListener("click", () => {
      ExamLock.set(btn.dataset.exam);
      window.location.href = `course?exam=${btn.dataset.exam}`;
    });
  });
}

function renderSubsectionPicker(exam) {
  document.body.dataset.page = "course";
  const subject = SUBJECTS[exam];
  const cardsHtml = subject.sections.map(s => {
    const progress = s.status === "live" ? getProgress(exam, s.key) : null;
    const chapters = s.status === "live" ? getChaptersFor(exam, s.key) : null;
    const totalLessons = chapters ? chapters.reduce((n, c) => n + c.lessons.length, 0) : 0;
    return `
      <a href="${s.status === "live" ? `course?exam=${exam}&sub=${s.key}` : "#"}" class="sub-card ${s.status !== "live" ? "sub-card-soon" : ""}" data-sub="${s.key}" data-status="${s.status}">
        ${s.status !== "live" ? '<span class="soon-badge">Coming soon</span>' : ""}
        <div class="sub-icon">${s.icon}</div>
        <h3>${s.label}</h3>
        ${s.status === "live" ? `<p class="muted">${chapters.length} chapters &middot; ${progress.size}/${totalLessons} lessons done</p>` : `<p class="muted">We're building this next.</p>`}
      </a>`;
  }).join("");

  screenShell(`
    <div class="gate-card">
      <span class="eyebrow">Step 2 of 2</span>
      <h1 style="margin-top:16px;">${subject.fullLabel} — pick a section</h1>
      <p class="muted" style="max-width:520px; margin:14px 0 30px;">Choose which part of the ${exam} you want to study. You can come back and pick another section any time.</p>
      <div class="sub-grid">${cardsHtml}</div>
    </div>
  `);

  document.querySelectorAll(".sub-card-soon").forEach(el => {
    el.addEventListener("click", e => e.preventDefault());
  });
}

function renderComingSoon(exam, section) {
  document.body.dataset.page = "course";
  screenShell(`
    <div class="gate-card center">
      <span class="eyebrow">${section ? section.icon : "🐝"} Coming soon</span>
      <h1 style="margin-top:16px;">${section ? section.label : "This section"} isn't ready yet.</h1>
      <p class="muted" style="max-width:480px; margin:14px auto 26px;">We're building the same interactive treatment for it. In the meantime, check out what's already live.</p>
      <a href="course?exam=${exam}" class="btn btn-black">← Back to ${exam} sections</a>
    </div>
  `);
}

// ---------- Lesson viewer (chapters + lessons) ----------

function flattenChapters(chapters) {
  const flat = [];
  chapters.forEach(ch => ch.lessons.forEach((ls, i) => flat.push({ chapter: ch, lesson: ls, isFirstInChapter: i === 0 })));
  return flat;
}

function renderMath(el) {
  if (window.renderMathInElement) {
    renderMathInElement(el, {
      delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }],
      throwOnError: false
    });
  }
}

function initLessonViewer() {
  document.body.dataset.page = "course";
  FLAT = flattenChapters(CURRENT_CHAPTERS);
  const totalLessons = FLAT.length;

  document.getElementById("courseRoot").innerHTML = `
    <div class="course-shell">
      <aside class="course-sidebar">
        <a href="course?exam=${CURRENT_EXAM}" class="back-link">← ${SUBJECTS[CURRENT_EXAM].label} sections</a>
        <div class="sidebar-progress">
          <div class="label" id="progressLabel">0 / ${totalLessons} lessons complete</div>
          <div class="progress-track"><div class="progress-fill" id="progressFill" style="width:0%;"></div></div>
        </div>
        <input type="search" id="lessonSearch" class="sidebar-search" placeholder="Search chapters & lessons...">
        <nav id="sidebarNav"></nav>
        <p id="noResults" class="muted" style="font-size:0.82rem; padding:10px 6px;" hidden>No matches.</p>
      </aside>
      <main class="course-main" id="courseMain"></main>
    </div>
  `;

  buildSidebar();
  wireInteractions(document.getElementById("courseMain"));
  document.getElementById("lessonSearch").addEventListener("input", e => filterSidebar(e.target.value));
  window.addEventListener("hashchange", route);
  route();
}

function buildSidebar() {
  const nav = document.getElementById("sidebarNav");
  nav.innerHTML = "";
  CURRENT_CHAPTERS.forEach(ch => {
    const block = document.createElement("div");
    block.className = "chapter-block";
    block.dataset.chapter = ch.id;
    block.dataset.searchText = ch.title.toLowerCase();

    const toggle = document.createElement("button");
    toggle.className = "chapter-toggle";
    toggle.innerHTML = `<span class="num">${ch.number}</span><span class="ttl">${ch.title}</span><span class="caret">▸</span>`;
    toggle.addEventListener("click", () => block.classList.toggle("open"));
    block.appendChild(toggle);

    const list = document.createElement("ul");
    list.className = "lesson-list";
    ch.lessons.forEach(ls => {
      const li = document.createElement("li");
      li.dataset.searchText = ls.title.toLowerCase();
      const a = document.createElement("a");
      a.href = `#${ls.id}`;
      a.dataset.lessonId = ls.id;
      a.innerHTML = `<span class="lesson-check"></span><span>${ls.title}</span>`;
      li.appendChild(a);
      list.appendChild(li);
    });
    block.appendChild(list);
    nav.appendChild(block);
  });
  refreshSidebarState();
}

function filterSidebar(query) {
  const q = query.trim().toLowerCase();
  let anyVisible = false;
  document.querySelectorAll(".chapter-block").forEach(block => {
    const chapterMatches = block.dataset.searchText.includes(q);
    let chapterHasVisibleLesson = false;
    block.querySelectorAll(".lesson-list li").forEach(li => {
      const match = !q || chapterMatches || li.dataset.searchText.includes(q);
      li.hidden = !match;
      if (match) chapterHasVisibleLesson = true;
    });
    const show = !q || chapterHasVisibleLesson;
    block.hidden = !show;
    if (show) anyVisible = true;
    if (q && chapterHasVisibleLesson) block.classList.add("open");
  });
  document.getElementById("noResults").hidden = anyVisible;
}

function refreshSidebarState() {
  const progress = getProgress(CURRENT_EXAM, CURRENT_SUB);
  document.querySelectorAll(".lesson-list a").forEach(a => {
    a.classList.toggle("done", progress.has(a.dataset.lessonId));
  });
  const pct = Math.round((progress.size / FLAT.length) * 100);
  const fill = document.getElementById("progressFill");
  const label = document.getElementById("progressLabel");
  if (fill) fill.style.width = pct + "%";
  if (label) label.textContent = `${progress.size} / ${FLAT.length} lessons complete`;
}

function setActiveSidebarLink(lessonId) {
  document.querySelectorAll(".lesson-list a").forEach(a => a.classList.toggle("active", a.dataset.lessonId === lessonId));
  document.querySelectorAll(".chapter-block").forEach(b => b.classList.remove("open"));
  const activeLink = document.querySelector(`.lesson-list a[data-lesson-id="${lessonId}"]`);
  if (activeLink) {
    const block = activeLink.closest(".chapter-block");
    if (block) block.classList.add("open");
    activeLink.scrollIntoView({ block: "nearest" });
  }
}

// ---------- Block renderers ----------

function renderConceptsBlock(block) {
  const cards = block.items.map(it => `
    <div class="concept-card">
      <h5>${it.name}</h5>
      <div class="cc-row"><b>Definition —</b> ${it.definition}</div>
      ${it.identify ? `<div class="cc-row"><b>Spot it —</b> ${it.identify}</div>` : ""}
      ${it.set ? `<div class="cc-row"><b>Set —</b> ${it.set}</div>` : ""}
      ${it.examples ? `<div class="cc-examples">${it.examples.map(e => `<span class="cc-example">${e}</span>`).join("")}</div>` : ""}
    </div>`).join("");
  return `<div class="lesson-block concept-grid">${cards}</div>`;
}

function renderTableBlock(block) {
  const head = `<tr>${block.headers.map(h => `<th>${h}</th>`).join("")}</tr>`;
  const rows = block.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("");
  return `<div class="lesson-block"><table class="lesson-table"><thead>${head}</thead><tbody>${rows}</tbody></table></div>`;
}

let flipTableCounter = 0;
function renderFlipTableBlock(block) {
  const rows = block.rows.map(r => {
    const id = `flip-row-${flipTableCounter++}`;
    return `
      <div class="flip-row" id="${id}" data-flip-row>
        <div class="flip-row-face flip-row-front">
          <span class="flip-row-key">${r.key}</span>
          <span class="flip-row-rule">${r.rule}</span>
          <span class="flip-row-hint">Click for an example →</span>
        </div>
        <div class="flip-row-face flip-row-back">
          <span class="flip-row-example">${r.example}</span>
        </div>
      </div>`;
  }).join("");
  return `<div class="lesson-block flip-table">${rows}</div>`;
}

let revealCounter = 0;
function renderRevealBlock(block) {
  const id = `reveal-${revealCounter++}`;
  return `
    <div class="reveal-block" id="${id}">
      <div class="reveal-prompt">${block.label}</div>
      ${block.prompt ? `<div class="reveal-hint">${block.prompt}</div>` : ""}
      <button class="btn btn-outline btn-sm reveal-btn" data-reveal-target="${id}">Show answer</button>
      <div class="reveal-answer">${block.answer}</div>
    </div>`;
}

let questionCounter = 0;
function renderQuestionCard(q) {
  const qid = `q-${questionCounter++}`;
  const options = q.kind === "QC" ? QC_OPTIONS : q.kind === "DS" ? DS_OPTIONS : q.options;
  const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];
  const multi = q.kind === "MS";

  const qtyHtml = q.kind === "QC" ? `
    <div class="qc-quantities">
      <div class="qty"><div class="qty-label">Quantity A</div><div class="qty-value">${q.quantityA}</div></div>
      <div class="qty"><div class="qty-label">Quantity B</div><div class="qty-value">${q.quantityB}</div></div>
    </div>` : "";

  const dsStatements = q.kind === "DS" && q.statements ? `
    <ol class="ds-statements">${q.statements.map(s => `<li>${s}</li>`).join("")}</ol>` : "";

  const optionsHtml = options.map(o => `
    <button class="q-option" type="button" data-key="${o.key}" aria-pressed="false">
      <span class="opt-key">${o.key}</span><span>${o.text}</span>
    </button>`).join("");

  const stepsHtml = q.steps.map(s => `<li>${s}</li>`).join("");

  return `
    <div class="question-card" id="${qid}" data-kind="${q.kind}" data-correct='${JSON.stringify(correctArr)}' data-multi="${multi}">
      <div class="q-title">${q.title}</div>
      ${q.context ? `<div class="q-context">${q.context}</div>` : ""}
      ${dsStatements}
      ${qtyHtml}
      <div class="q-options">${optionsHtml}</div>
      ${multi ? `<div class="q-submit-row"><button class="btn btn-black btn-sm q-submit-btn" type="button">Submit answer${correctArr.length !== 1 ? "s" : ""}</button></div>` : ""}
      <div class="q-feedback" hidden></div>
      <div class="q-explanation" hidden>
        <div class="exp-title">Explanation</div>
        <ol>${stepsHtml}</ol>
      </div>
    </div>`;
}

function renderPracticeBlock(block) {
  return `<div class="lesson-block">${block.questions.map(renderQuestionCard).join("")}</div>`;
}

function renderBlock(block) {
  switch (block.type) {
    case "concepts": return renderConceptsBlock(block);
    case "table": return renderTableBlock(block);
    case "flip-table": return renderFlipTableBlock(block);
    case "reveal": return renderRevealBlock(block);
    case "practice": return renderPracticeBlock(block);
    case "html": return `<div class="lesson-block">${block.content}</div>`;
    default: return "";
  }
}

// ---------- Grading ----------

function gradeSingleChoice(card, chosenKey) {
  const correct = JSON.parse(card.dataset.correct)[0];
  card.querySelectorAll(".q-option").forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.key === correct) btn.classList.add("correct");
    if (btn.dataset.key === chosenKey && chosenKey !== correct) btn.classList.add("incorrect");
  });
  const feedback = card.querySelector(".q-feedback");
  feedback.hidden = false;
  const isRight = chosenKey === correct;
  feedback.textContent = isRight ? "Correct!" : `Not quite — the correct answer is ${correct}.`;
  feedback.className = "q-feedback " + (isRight ? "is-correct" : "is-incorrect");
  card.querySelector(".q-explanation").hidden = false;
}

function gradeMultiSelect(card) {
  const correct = JSON.parse(card.dataset.correct);
  const selected = [...card.querySelectorAll('.q-option[aria-pressed="true"]')].map(b => b.dataset.key);
  card.querySelectorAll(".q-option").forEach(btn => {
    btn.disabled = true;
    const key = btn.dataset.key;
    const shouldBeSelected = correct.includes(key);
    const wasSelected = selected.includes(key);
    if (shouldBeSelected) btn.classList.add("correct");
    else if (wasSelected) btn.classList.add("incorrect");
  });
  const isRight = selected.length === correct.length && selected.every(k => correct.includes(k));
  const feedback = card.querySelector(".q-feedback");
  feedback.hidden = false;
  feedback.textContent = isRight ? "Correct!" : `Not quite — the correct selection${correct.length === 1 ? " is" : "s are"} ${correct.length ? correct.join(", ") : "none of the above"}.`;
  feedback.className = "q-feedback " + (isRight ? "is-correct" : "is-incorrect");
  card.querySelector(".q-submit-row").style.display = "none";
  card.querySelector(".q-explanation").hidden = false;
}

function wireInteractions(container) {
  container.addEventListener("click", e => {
    const revealBtn = e.target.closest(".reveal-btn");
    if (revealBtn) { revealBtn.closest(".reveal-block").classList.add("shown"); return; }

    const flipRow = e.target.closest("[data-flip-row]");
    if (flipRow) { flipRow.classList.toggle("flipped"); return; }

    const optBtn = e.target.closest(".q-option");
    if (optBtn) {
      const card = optBtn.closest(".question-card");
      if (card.dataset.multi === "true") {
        optBtn.setAttribute("aria-pressed", optBtn.getAttribute("aria-pressed") === "true" ? "false" : "true");
      } else {
        if (optBtn.disabled) return;
        gradeSingleChoice(card, optBtn.dataset.key);
      }
      return;
    }

    const submitBtn = e.target.closest(".q-submit-btn");
    if (submitBtn) { gradeMultiSelect(submitBtn.closest(".question-card")); return; }
  });
}

// ---------- Lesson rendering ----------

function findLesson(lessonId) { return FLAT.find(f => f.lesson.id === lessonId); }

function renderLesson(lessonId) {
  const found = findLesson(lessonId) || FLAT[0];
  const { chapter, lesson } = found;
  const main = document.getElementById("courseMain");

  const widgetSlot = lesson.widget ? `<div class="widget-slot" id="widgetSlot"></div>` : "";
  const blocksHtml = (lesson.blocks || []).map(renderBlock).join("");

  const flatIndex = FLAT.indexOf(found);
  const prev = FLAT[flatIndex - 1];
  const next = FLAT[flatIndex + 1];
  const isDone = getProgress(CURRENT_EXAM, CURRENT_SUB).has(lesson.id);

  main.innerHTML = `
    <div class="crumbs">${SUBJECTS[CURRENT_EXAM].label} · Chapter ${chapter.number} · ${chapter.title}</div>
    <div class="lesson-header">
      <h1>${lesson.title}</h1>
      ${chapter.blurb ? `<p class="blurb">${chapter.blurb}</p>` : ""}
    </div>
    ${widgetSlot}
    ${blocksHtml}
    <div class="lesson-footer">
      <button class="btn ${isDone ? "btn-black mark-complete-btn done" : "btn-outline mark-complete-btn"}" id="markCompleteBtn">
        ${isDone ? "✓ Lesson complete" : "Mark lesson complete"}
      </button>
      <div class="lesson-nav-btns">
        ${prev ? `<a href="#${prev.lesson.id}" class="btn btn-outline btn-sm">← ${prev.lesson.title}</a>` : ""}
        ${next ? `<a href="#${next.lesson.id}" class="btn btn-black btn-sm">${next.lesson.title} →</a>` : ""}
      </div>
    </div>
  `;

  if (lesson.widget && window.StumblebeeWidgets && window.StumblebeeWidgets[lesson.widget]) {
    window.StumblebeeWidgets[lesson.widget](document.getElementById("widgetSlot"));
  }

  renderMath(main);
  setActiveSidebarLink(lesson.id);

  document.getElementById("markCompleteBtn").addEventListener("click", () => {
    const p = getProgress(CURRENT_EXAM, CURRENT_SUB);
    if (p.has(lesson.id)) p.delete(lesson.id); else p.add(lesson.id);
    saveProgress(CURRENT_EXAM, CURRENT_SUB, p);
    refreshSidebarState();
    renderLesson(lesson.id);
  });

  main.scrollTop = 0;
  window.scrollTo({ top: 0 });
}

function route() {
  const h = window.location.hash.replace("#", "");
  renderLesson(h || FLAT[0].lesson.id);
}

document.addEventListener("DOMContentLoaded", boot);
