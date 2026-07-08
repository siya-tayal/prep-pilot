// Stumblebee personal bests: tracks session records and shows a trophy
// toast when a new one is set. Records tracked:
//   wordsInSession   - most vocab words practiced in one session
//   accuracyPct      - highest accuracy in a single session (5+ words)
//   topicsInDay      - most distinct new lessons/vocab letters started in one calendar day

const PB_KEY = "stumblebee_personal_bests_v1";
const DAILY_KEY = "stumblebee_daily_topics_v1";

const PersonalBests = {
  get() {
    try { return JSON.parse(localStorage.getItem(PB_KEY) || "{}"); }
    catch (e) { return {}; }
  },
  save(bests) {
    localStorage.setItem(PB_KEY, JSON.stringify(bests));
  },

  // Call at the end of a vocab session.
  recordVocabSession(wordsCount, correctCount) {
    if (wordsCount === 0) return [];
    const bests = this.get();
    const broken = [];
    const accuracyPct = Math.round((correctCount / wordsCount) * 100);

    if (wordsCount > (bests.wordsInSession || 0)) {
      bests.wordsInSession = wordsCount;
      broken.push({ label: "Most words in one session", value: `${wordsCount} words` });
    }
    if (wordsCount >= 5 && accuracyPct > (bests.accuracyPct || 0)) {
      bests.accuracyPct = accuracyPct;
      broken.push({ label: "Best session accuracy", value: `${accuracyPct}% correct` });
    }
    this.save(bests);
    return broken;
  },

  // Call whenever a student starts (not just completes) a new lesson or a
  // new vocab letter for the first time today.
  recordTopicStarted(topicKey) {
    const today = new Date().toISOString().slice(0, 10);
    let daily;
    try { daily = JSON.parse(localStorage.getItem(DAILY_KEY) || "{}"); }
    catch (e) { daily = {}; }
    if (daily.date !== today) daily = { date: today, topics: [] };
    if (daily.topics.includes(topicKey)) return [];
    daily.topics.push(topicKey);
    localStorage.setItem(DAILY_KEY, JSON.stringify(daily));

    const bests = this.get();
    const broken = [];
    if (daily.topics.length > (bests.topicsInDay || 0)) {
      bests.topicsInDay = daily.topics.length;
      this.save(bests);
      broken.push({ label: "Most new topics started in one day", value: `${daily.topics.length} topics` });
    }
    return broken;
  },

  showToast(records) {
    if (!records || !records.length) return;
    const container = document.createElement("div");
    container.className = "pb-toast";
    container.innerHTML = `
      <div class="pb-toast-icon">🏆</div>
      <div>
        <div class="pb-toast-title">New personal best!</div>
        ${records.map(r => `<div class="pb-toast-detail">${r.label}: <b>${r.value}</b></div>`).join("")}
      </div>
    `;
    document.body.appendChild(container);
    requestAnimationFrame(() => container.classList.add("shown"));
    setTimeout(() => {
      container.classList.remove("shown");
      setTimeout(() => container.remove(), 400);
    }, 9000);
  }
};

if (typeof window !== "undefined") window.PersonalBests = PersonalBests;
