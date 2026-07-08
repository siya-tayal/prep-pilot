// Stumblebee — auth prototype.
// No real backend: users are stored in localStorage. Passwords are hashed
// (SHA-256) before storage, never kept in plain text. OTP is simulated —
// there's no SMS/email provider here, so the "sent" code is shown directly
// on screen in a clearly-labeled prototype banner instead of actually
// texting/emailing anyone.

const USERS_KEY = "stumblebee_users_v1";
const SESSION_KEY = "stumblebee_session_v1";

async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(hashBuffer)].map(b => b.toString(16).padStart(2, "0")).join("");
}

const Auth = {
  getUsers() {
    try { return JSON.parse(localStorage.getItem(USERS_KEY) || "[]"); }
    catch (e) { return []; }
  },
  saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },
  findByEmail(email) {
    return this.getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
  },
  async createUser(profile) {
    const users = this.getUsers();
    const passwordHash = await sha256(profile.password);
    const user = {
      id: "u_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      fullName: profile.fullName,
      email: profile.email,
      phone: profile.phone,
      passwordHash,
      country: profile.country,
      enrolled: profile.enrolled,
      university: profile.university || null,
      gradDate: profile.gradDate,
      examChoice: profile.examChoice,
      aptitudeResult: profile.aptitudeResult || null,
      signupDate: new Date().toISOString()
    };
    users.push(user);
    this.saveUsers(users);
    return user;
  },
  async verifyLogin(emailOrPhone, password) {
    const users = this.getUsers();
    const user = users.find(u =>
      u.email.toLowerCase() === emailOrPhone.toLowerCase() || u.phone === emailOrPhone
    );
    if (!user) return null;
    const hash = await sha256(password);
    return hash === user.passwordHash ? user : null;
  },
  startSession(user) {
    localStorage.setItem(SESSION_KEY, user.email);
  },
  endSession() {
    localStorage.removeItem(SESSION_KEY);
  },
  currentUser() {
    const email = localStorage.getItem(SESSION_KEY);
    if (!email) return null;
    return this.findByEmail(email) || null;
  },
  isLoggedIn() {
    return this.currentUser() !== null;
  }
};

// ---------- Simulated OTP ----------
// Generates a 6-digit code and holds it in memory for the caller to compare
// against. There is no real delivery channel — the UI must display the code
// itself, clearly labeled as a prototype stand-in for SMS/email.

const OTP = {
  _pending: null,
  generate(channel, destination) {
    const code = String(Math.floor(100000 + Math.random() * 900000));
    this._pending = { code, channel, destination, issuedAt: Date.now() };
    return code;
  },
  verify(code) {
    if (!this._pending) return false;
    const ok = String(code).trim() === this._pending.code;
    if (ok) this._pending = null;
    return ok;
  },
  clear() { this._pending = null; }
};
