const state = {
  exam: "all",
  category: null,
  query: ""
};

const grid = document.getElementById("resourceGrid");
const emptyState = document.getElementById("emptyState");
const resultCount = document.getElementById("resultCount");
const chipsContainer = document.getElementById("categoryChips");
const searchInput = document.getElementById("searchInput");
const examTabs = document.getElementById("examTabs");

function buildChips() {
  const allChip = document.createElement("button");
  allChip.className = "chip active";
  allChip.textContent = "All Categories";
  allChip.dataset.category = "";
  chipsContainer.appendChild(allChip);

  CATEGORIES.forEach(cat => {
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.textContent = cat;
    chip.dataset.category = cat;
    chipsContainer.appendChild(chip);
  });

  chipsContainer.addEventListener("click", e => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    state.category = btn.dataset.category || null;
    [...chipsContainer.children].forEach(c => c.classList.toggle("active", c === btn));
    render();
  });
}

examTabs.addEventListener("click", e => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  state.exam = btn.dataset.exam;
  [...examTabs.children].forEach(t => t.classList.toggle("active", t === btn));
  render();
});

searchInput.addEventListener("input", e => {
  state.query = e.target.value.trim().toLowerCase();
  render();
});

function matches(resource) {
  const examOk = state.exam === "all" || resource.exam === state.exam || resource.exam === "Both";
  const categoryOk = !state.category || resource.category === state.category;
  const queryOk = !state.query ||
    resource.title.toLowerCase().includes(state.query) ||
    resource.desc.toLowerCase().includes(state.query) ||
    resource.category.toLowerCase().includes(state.query);
  return examOk && categoryOk && queryOk;
}

function render() {
  const filtered = RESOURCES.filter(matches);
  grid.innerHTML = "";

  filtered.forEach(r => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-badges">
        <span class="badge exam-${r.exam}">${r.exam}</span>
        <span class="badge category">${r.category}</span>
      </div>
      <h3>${r.title}</h3>
      <p>${r.desc}</p>
      <a class="visit" href="${r.url}" target="_blank" rel="noopener noreferrer">Visit resource →</a>
    `;
    grid.appendChild(card);
  });

  emptyState.hidden = filtered.length !== 0;
  resultCount.textContent = `${filtered.length} resource${filtered.length === 1 ? "" : "s"}`;
}

buildChips();
render();
