// Stumblebee daily goal planner.
// Students can optionally set a test date; we split remaining lessons and
// vocab words evenly across the days left and show a daily target on the
// dashboard. Reminder emails need a real backend (a server that can send
// mail on a schedule), which a static site cannot do on its own, so the
// opt-in here saves the preference and time zone but is honestly labeled
// as not yet wired up to a live email service.

const GOAL_SETTINGS_KEY = "stumblebee_goal_settings_v1";
const DAILY_COMPLETED_KEY = "stumblebee_daily_completed_v1";

const DailyGoal = {
  getSettings() {
    try { return JSON.parse(localStorage.getItem(GOAL_SETTINGS_KEY) || "{}"); }
    catch (e) { return {}; }
  },
  saveSettings(settings) {
    localStorage.setItem(GOAL_SETTINGS_KEY, JSON.stringify(settings));
  },
  clearTestDate() {
    const s = this.getSettings();
    delete s.testDate;
    delete s.reminderOptIn;
    this.saveSettings(s);
  },
  detectTimezone() {
    try { return Intl.DateTimeFormat().resolvedOptions().timeZone; }
    catch (e) { return "UTC"; }
  },

  // Remaining lessons + vocab words not yet done, for the locked exam.
  remainingCount(exam) {
    if (!exam || typeof SUBJECTS === "undefined") return 0;
    const subject = SUBJECTS[exam];
    let remaining = 0;
    subject.sections.filter(s => s.status === "live").forEach(sec => {
      const chapters = getChaptersFor(exam, sec.key);
      if (!chapters) return;
      let progress;
      try { progress = new Set(JSON.parse(localStorage.getItem(`stumblebee_progress_${exam}_${sec.key}`) || "[]")); }
      catch (e) { progress = new Set(); }
      chapters.forEach(ch => ch.lessons.forEach(ls => { if (!progress.has(ls.id)) remaining++; }));
    });
    if (exam === "GRE" && typeof VOCAB_WORDS !== "undefined" && typeof VocabSRS !== "undefined") {
      const mastered = new Set(VocabSRS.masteredWords());
      remaining += VOCAB_WORDS.filter(w => !mastered.has(w.word)).length;
    }
    return remaining;
  },

  computePlan(exam) {
    const settings = this.getSettings();
    if (!settings.testDate) return null;
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const target = new Date(settings.testDate + "T00:00:00");
    const daysLeft = Math.max(1, Math.ceil((target - today) / (1000 * 60 * 60 * 24)));
    const remaining = this.remainingCount(exam);
    const perDay = Math.max(1, Math.ceil(remaining / daysLeft));
    return { daysLeft, remaining, perDay, testDate: settings.testDate, reminderOptIn: !!settings.reminderOptIn };
  },

  todayKey() { return new Date().toISOString().slice(0, 10); },

  recordCompletion() {
    const today = this.todayKey();
    let data;
    try { data = JSON.parse(localStorage.getItem(DAILY_COMPLETED_KEY) || "{}"); }
    catch (e) { data = {}; }
    if (data.date !== today) data = { date: today, count: 0 };
    data.count++;
    localStorage.setItem(DAILY_COMPLETED_KEY, JSON.stringify(data));
    return data.count;
  },

  getTodayCompleted() {
    const today = this.todayKey();
    let data;
    try { data = JSON.parse(localStorage.getItem(DAILY_COMPLETED_KEY) || "{}"); }
    catch (e) { data = {}; }
    return data.date === today ? data.count : 0;
  }
};

if (typeof window !== "undefined") window.DailyGoal = DailyGoal;
