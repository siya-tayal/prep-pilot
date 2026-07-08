// Stumblebee shared dynamic nav bar. Renders into <div id="siteNavRoot">.
// Reflects the exam lock: the non-selected exam is greyed out and can only
// be changed from Settings.

function beeIconSVG(size) {
  return `<svg class="bee-icon" style="width:${size}px;height:${size}px;" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="16" cy="18" rx="9.5" ry="7.5" fill="#18140C"/>
    <path d="M7 16 Q16 12.5 25 16" stroke="#FFC629" stroke-width="3" stroke-linecap="round"/>
    <path d="M7.8 20.5 Q16 24 24.2 20.5" stroke="#FFC629" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="9" cy="11" rx="5.5" ry="4" fill="#FFFFFF" fill-opacity="0.85" transform="rotate(-20 9 11)"/>
    <ellipse cx="23" cy="11" rx="5.5" ry="4" fill="#FFFFFF" fill-opacity="0.85" transform="rotate(20 23 11)"/>
    <circle cx="16" cy="9" r="2" fill="#18140C"/>
  </svg>`;
}

function renderNav() {
  const root = document.getElementById("siteNavRoot");
  if (!root) return;

  const exam = ExamLock.get();
  const page = document.body.dataset.page || "";

  function examLink(key) {
    const isLocked = exam && exam !== key;
    const isCurrent = exam === key;
    const href = isLocked ? `settings?locked=${key}` : `course?exam=${key}`;
    const cls = ["nav-link"];
    if (page === "course" && isCurrent) cls.push("active");
    if (isLocked) cls.push("tag-soon");
    return `<a href="${href}" class="${cls.join(" ")}">${key}${isLocked ? ' <span class="pill">🔒</span>' : ""}</a>`;
  }

  const user = (typeof Auth !== "undefined") ? Auth.currentUser() : null;
  const userChip = user ? `
    <span style="font-size:0.85rem; font-weight:600; color:var(--ink-soft);">Hi, ${user.fullName.split(" ")[0]}</span>
    <button class="btn btn-outline btn-sm" id="navLogoutBtn" type="button">Log out</button>
  ` : `<a href="login" class="btn btn-outline btn-sm">Log in</a>`;

  root.innerHTML = `
    <div class="wrap">
      <nav class="site-nav">
        <a href="index" class="brand">${beeIconSVG(30)}stumblebee</a>
        <div class="nav-links">
          ${examLink("GRE")}
          ${examLink("GMAT")}
          <a href="${exam && exam !== "GRE" ? "settings?locked=GRE" : "vocab"}" class="nav-link ${page === "vocab" ? "active" : ""} ${exam && exam !== "GRE" ? "tag-soon" : ""}">Vocab${exam && exam !== "GRE" ? ' <span class="pill">🔒</span>' : ""}</a>
          <a href="resources" class="nav-link ${page === "resources" ? "active" : ""}">Resources</a>
          <a href="dashboard" class="nav-link ${page === "dashboard" ? "active" : ""}">Dashboard</a>
        </div>
        <div style="display:flex; gap:10px; align-items:center;">
          ${userChip}
          <a href="settings" class="btn btn-outline btn-sm" title="Settings">⚙️</a>
          <a href="${exam ? `course?exam=${exam}` : "index"}" class="btn btn-black btn-sm">${exam ? "Continue" : "Home"}</a>
        </div>
      </nav>
    </div>
  `;

  const logoutBtn = document.getElementById("navLogoutBtn");
  if (logoutBtn) logoutBtn.addEventListener("click", () => { Auth.endSession(); window.location.href = "index"; });
}

document.addEventListener("DOMContentLoaded", renderNav);
