// Stumblebee GRE Math — course rendering engine.

const QC_OPTIONS = [
  { key: "A", text: "Quantity A is greater." },
  { key: "B", text: "Quantity B is greater." },
  { key: "C", text: "The two quantities are equal." },
  { key: "D", text: "The relationship cannot be determined from the information given." }
];

const PROGRESS_KEY = "stumblebee_progress_v1";

function getProgress() {
  try { return new Set(JSON.parse(localStorage.getItem(PROGRESS_KEY) || "[]")); }
  catch (e) { return new Set(); }
}
function saveProgress(set) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify([...set]));
}
function toggleComplete(lessonId) {
  const p = getProgress();
  if (p.has(lessonId)) p.delete(lessonId); else p.add(lessonId);
  saveProgress(p);
  return p;
}

// ---------- Flatten chapters for prev/next + sidebar ----------

function flatten() {
  const flat = [];
  GRE_MATH_CHAPTERS.forEach(ch => {
    ch.lessons.forEach((ls, i) => {
      flat.push({ chapter: ch, lesson: ls, isFirstInChapter: i === 0 });
    });
  });
  return flat;
}
const FLAT = flatten();
const TOTAL_LESSONS = FLAT.length;

function findLesson(lessonId) {
  return FLAT.find(f => f.lesson.id === lessonId);
}

// ---------- KaTeX ----------

function renderMath(el) {
  if (window.renderMathInElement) {
    renderMathInElement(el, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  }
}

// ---------- Sidebar ----------

function buildSidebar() {
  const nav = document.getElementById("sidebarNav");
  nav.innerHTML = "";
  GRE_MATH_CHAPTERS.forEach(ch => {
    const block = document.createElement("div");
    block.className = "chapter-block";
    block.dataset.chapter = ch.id;

    const toggle = document.createElement("button");
    toggle.className = "chapter-toggle";
    toggle.innerHTML = `<span class="num">${ch.number}</span><span class="ttl">${ch.title}</span><span class="caret">▸</span>`;
    toggle.addEventListener("click", () => block.classList.toggle("open"));
    block.appendChild(toggle);

    const list = document.createElement("ul");
    list.className = "lesson-list";
    ch.lessons.forEach(ls => {
      const li = document.createElement("li");
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

function refreshSidebarState() {
  const progress = getProgress();
  document.querySelectorAll(".lesson-list a").forEach(a => {
    a.classList.toggle("done", progress.has(a.dataset.lessonId));
  });
  const pct = Math.round((progress.size / TOTAL_LESSONS) * 100);
  const fill = document.getElementById("progressFill");
  const label = document.getElementById("progressLabel");
  if (fill) fill.style.width = pct + "%";
  if (label) label.textContent = `${progress.size} / ${TOTAL_LESSONS} lessons complete`;
}

function setActiveSidebarLink(lessonId) {
  document.querySelectorAll(".lesson-list a").forEach(a => {
    a.classList.toggle("active", a.dataset.lessonId === lessonId);
  });
  document.querySelectorAll(".chapter-block").forEach(b => b.classList.remove("open"));
  const activeLink = document.querySelector(`.lesson-list a[data-lesson-id="${lessonId}"]`);
  if (activeLink) {
    const block = activeLink.closest(".chapter-block");
    if (block) block.classList.add("open");
    activeLink.scrollIntoView({ block: "nearest" });
  }
}

// ---------- Block renderers ----------

function escapeAttr(str) {
  return String(str).replace(/"/g, "&quot;");
}

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
  const options = q.kind === "QC" ? QC_OPTIONS : q.options;
  const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];
  const multi = q.kind === "MS";

  const qtyHtml = q.kind === "QC" ? `
    <div class="qc-quantities">
      <div class="qty"><div class="qty-label">Quantity A</div><div class="qty-value">${q.quantityA}</div></div>
      <div class="qty"><div class="qty-label">Quantity B</div><div class="qty-value">${q.quantityB}</div></div>
    </div>` : "";

  const optionsHtml = options.map(o => `
    <button class="q-option" type="button" data-key="${o.key}" aria-pressed="false">
      <span class="opt-key">${o.key}</span><span>${o.text}</span>
    </button>`).join("");

  const stepsHtml = q.steps.map(s => `<li>${s}</li>`).join("");

  return `
    <div class="question-card" id="${qid}" data-kind="${q.kind}" data-correct='${JSON.stringify(correctArr)}' data-multi="${multi}">
      <div class="q-title">${q.title}</div>
      ${q.context ? `<div class="q-context">${q.context}</div>` : ""}
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
    case "reveal": return renderRevealBlock(block);
    case "practice": return renderPracticeBlock(block);
    case "html": return `<div class="lesson-block">${block.content}</div>`;
    default: return "";
  }
}

// ---------- Question grading ----------

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
  feedback.textContent = isRight
    ? "Correct!"
    : `Not quite — the correct selection${correct.length === 1 ? " is" : "s are"} ${correct.length ? correct.join(", ") : "none of the above"}.`;
  feedback.className = "q-feedback " + (isRight ? "is-correct" : "is-incorrect");
  card.querySelector(".q-submit-row").style.display = "none";
  card.querySelector(".q-explanation").hidden = false;
}

// ---------- Event delegation ----------

function wireInteractions(container) {
  container.addEventListener("click", e => {
    const revealBtn = e.target.closest(".reveal-btn");
    if (revealBtn) {
      revealBtn.closest(".reveal-block").classList.add("shown");
      return;
    }

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
    if (submitBtn) {
      gradeMultiSelect(submitBtn.closest(".question-card"));
      return;
    }
  });
}

// ---------- Lesson rendering ----------

function renderLesson(lessonId) {
  const found = findLesson(lessonId) || FLAT[0];
  const { chapter, lesson } = found;
  const main = document.getElementById("courseMain");

  const widgetSlot = lesson.widget ? `<div class="widget-slot" id="widgetSlot"></div>` : "";
  const blocksHtml = (lesson.blocks || []).map(renderBlock).join("");

  const flatIndex = FLAT.indexOf(found);
  const prev = FLAT[flatIndex - 1];
  const next = FLAT[flatIndex + 1];
  const isDone = getProgress().has(lesson.id);

  main.innerHTML = `
    <div class="crumbs">Chapter ${chapter.number} · ${chapter.title}</div>
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
    toggleComplete(lesson.id);
    refreshSidebarState();
    renderLesson(lesson.id);
  });

  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

// ---------- Router ----------

function currentHashLessonId() {
  const h = window.location.hash.replace("#", "");
  return h || FLAT[0].lesson.id;
}

function route() {
  renderLesson(currentHashLessonId());
}

// ---------- Init ----------

document.addEventListener("DOMContentLoaded", () => {
  buildSidebar();
  wireInteractions(document.getElementById("courseMain"));
  window.addEventListener("hashchange", route);
  route();
});
