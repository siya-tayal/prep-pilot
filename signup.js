// Stumblebee signup wizard.

const STATE = {
  fullName: "", email: "", phone: "", password: "",
  country: "", enrolled: null, university: "",
  gradDate: "",
  examChoice: "", // "GRE" | "GMAT" | "unsure"
  aptitudeAnswers: {}, aptitudeResult: null,
  otpVerified: false, otpChannel: "email"
};

const MAIN_STEPS = ["basics", "otp", "location", "graduation", "exam"];
let stepId = "basics";
let aptQIndex = 0;

const container = document.getElementById("stepContainer");
const dotsEl = document.getElementById("stepDots");

function renderDots() {
  const idx = MAIN_STEPS.indexOf(stepId);
  dotsEl.innerHTML = MAIN_STEPS.map((s, i) => {
    const cls = i === idx ? "active" : i < idx ? "done" : "";
    return `<span class="step-dot ${cls}"></span>`;
  }).join("");
}

function goTo(id) { stepId = id; render(); window.scrollTo({ top: 0 }); }

// ---------- Step: Basics ----------

function renderBasics() {
  container.innerHTML = `
    <div class="auth-step">
      <h2>Create your account</h2>
      <p class="step-sub">Let's get the basics down first.</p>

      <div class="field-group" id="fg-fullName">
        <label>Full name</label>
        <input type="text" id="fullName" placeholder="Jordan Rivera" value="${STATE.fullName}">
        <div class="error-text">Enter your full name.</div>
      </div>
      <div class="field-group" id="fg-email">
        <label>Email</label>
        <input type="email" id="email" placeholder="you@email.com" value="${STATE.email}">
        <div class="error-text">Enter a valid email.</div>
      </div>
      <div class="field-group" id="fg-phone">
        <label>Phone number</label>
        <input type="tel" id="phone" placeholder="+1 555 123 4567" value="${STATE.phone}">
        <div class="error-text">Enter a valid phone number.</div>
      </div>
      <div class="field-row">
        <div class="field-group" id="fg-password">
          <label>Password</label>
          <input type="password" id="password" placeholder="At least 8 characters">
          <div class="error-text">At least 8 characters.</div>
        </div>
        <div class="field-group" id="fg-confirm">
          <label>Confirm password</label>
          <input type="password" id="confirmPassword" placeholder="Repeat password">
          <div class="error-text">Passwords don't match.</div>
        </div>
      </div>

      <div class="auth-actions">
        <button class="btn btn-black" id="nextBtn" style="width:100%;">Continue →</button>
      </div>
    </div>
  `;

  document.getElementById("nextBtn").addEventListener("click", () => {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    let ok = true;
    const setErr = (id, has) => { document.getElementById(id).classList.toggle("has-error", has); if (has) ok = false; };

    setErr("fg-fullName", fullName.length < 2);
    setErr("fg-email", !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    setErr("fg-phone", phone.replace(/\D/g, "").length < 7);
    setErr("fg-password", password.length < 8);
    setErr("fg-confirm", password !== confirmPassword || confirmPassword.length < 8);

    if (Auth.findByEmail(email)) {
      document.getElementById("fg-email").classList.add("has-error");
      document.querySelector("#fg-email .error-text").textContent = "An account with this email already exists.";
      ok = false;
    }

    if (!ok) return;
    Object.assign(STATE, { fullName, email, phone, password });
    goTo("otp");
  });
}

// ---------- Step: OTP ----------

function renderOtp() {
  container.innerHTML = `
    <div class="auth-step">
      <h2>Verify it's you</h2>
      <p class="step-sub">We'll send a 6-digit code — pick where.</p>

      <div class="channel-row">
        <div class="radio-pill ${STATE.otpChannel === "email" ? "selected" : ""}" data-channel="email">📧 Email</div>
        <div class="radio-pill ${STATE.otpChannel === "phone" ? "selected" : ""}" data-channel="phone">📱 Phone</div>
      </div>

      <div id="otpSendArea"></div>
      <div id="otpVerifyArea"></div>

      <div class="auth-actions">
        <button class="btn btn-outline" id="backBtn">← Back</button>
        <button class="btn btn-black" id="nextBtn" disabled>Continue →</button>
      </div>
    </div>
  `;

  container.querySelectorAll(".radio-pill").forEach(p => {
    p.addEventListener("click", () => { STATE.otpChannel = p.dataset.channel; renderOtp(); });
  });

  const sendArea = document.getElementById("otpSendArea");
  const verifyArea = document.getElementById("otpVerifyArea");
  const nextBtn = document.getElementById("nextBtn");

  function renderSendButton() {
    const dest = STATE.otpChannel === "email" ? STATE.email : STATE.phone;
    sendArea.innerHTML = `<button class="btn btn-outline" id="sendOtpBtn" style="width:100%; margin-bottom:16px;">Send code to ${dest}</button>`;
    document.getElementById("sendOtpBtn").addEventListener("click", () => {
      const code = OTP.generate(STATE.otpChannel, dest);
      renderVerifyBox(code, dest);
    });
  }

  function renderVerifyBox(code, dest) {
    verifyArea.innerHTML = `
      <div class="otp-dev-banner">This is a prototype with no real SMS/email service — here's the code we'd have sent to <b>${dest}</b>: <b>${code}</b></div>
      <div class="otp-inputs">
        ${[0,1,2,3,4,5].map(i => `<input type="text" inputmode="numeric" maxlength="1" data-i="${i}">`).join("")}
      </div>
      <div class="error-text" id="otpError" style="text-align:center; display:none;">That code doesn't match — try again.</div>
    `;
    const inputs = [...verifyArea.querySelectorAll("input")];
    inputs.forEach((inp, i) => {
      inp.addEventListener("input", () => {
        inp.value = inp.value.replace(/\D/g, "");
        if (inp.value && inputs[i + 1]) inputs[i + 1].focus();
        checkComplete();
      });
      inp.addEventListener("keydown", e => {
        if (e.key === "Backspace" && !inp.value && inputs[i - 1]) inputs[i - 1].focus();
      });
    });
    inputs[0].focus();

    function checkComplete() {
      const entered = inputs.map(i => i.value).join("");
      const errEl = document.getElementById("otpError");
      if (entered.length === 6) {
        if (OTP.verify(entered)) {
          errEl.style.display = "none";
          STATE.otpVerified = true;
          nextBtn.disabled = false;
          inputs.forEach(i => i.disabled = true);
        } else {
          errEl.style.display = "block";
        }
      }
    }
  }

  renderSendButton();
  document.getElementById("backBtn").addEventListener("click", () => goTo("basics"));
  nextBtn.addEventListener("click", () => { if (STATE.otpVerified) goTo("location"); });
}

// ---------- Step: Location ----------

function renderLocation() {
  const countryOptions = COUNTRIES.map(c => `<option value="${c}" ${STATE.country === c ? "selected" : ""}>${c}</option>`).join("");

  container.innerHTML = `
    <div class="auth-step">
      <h2>Where are you studying?</h2>
      <p class="step-sub">This helps us show you locally relevant resources later.</p>

      <div class="field-group" id="fg-country">
        <label>Country</label>
        <select id="country">
          <option value="">Select your country...</option>
          ${countryOptions}
        </select>
        <div class="error-text">Pick your country.</div>
      </div>

      <div class="field-group">
        <label>Are you currently enrolled in a university or college?</label>
        <div class="radio-row">
          <div class="radio-pill ${STATE.enrolled === true ? "selected" : ""}" data-enrolled="yes">Yes</div>
          <div class="radio-pill ${STATE.enrolled === false ? "selected" : ""}" data-enrolled="no">No</div>
        </div>
      </div>

      <div id="universityArea"></div>

      <div class="auth-actions">
        <button class="btn btn-outline" id="backBtn">← Back</button>
        <button class="btn btn-black" id="nextBtn">Continue →</button>
      </div>
    </div>
  `;

  function renderUniversityField() {
    const area = document.getElementById("universityArea");
    if (STATE.enrolled !== true) { area.innerHTML = ""; return; }
    const list = (UNIVERSITIES_BY_COUNTRY[STATE.country] || []);
    area.innerHTML = `
      <div class="field-group" id="fg-university">
        <label>University / college</label>
        ${list.length ? `
          <select id="universitySelect">
            <option value="">Select your university...</option>
            ${list.map(u => `<option value="${u}" ${STATE.university === u ? "selected" : ""}>${u}</option>`).join("")}
            <option value="__other__" ${STATE.university && !list.includes(STATE.university) ? "selected" : ""}>My school isn't listed</option>
          </select>
          <input type="text" id="universityOther" placeholder="Type your school's name" style="margin-top:8px; ${list.includes(STATE.university) || !STATE.university ? "display:none;" : ""}" value="${!list.includes(STATE.university) ? STATE.university : ""}">
        ` : `
          <input type="text" id="universityOther" placeholder="Type your school's name" value="${STATE.university}">
        `}
        <div class="error-text">Tell us your school (or pick "isn't listed" and type it in).</div>
      </div>
    `;
    const sel = document.getElementById("universitySelect");
    if (sel) {
      sel.addEventListener("change", () => {
        const otherInput = document.getElementById("universityOther");
        if (sel.value === "__other__") { otherInput.style.display = "block"; otherInput.focus(); }
        else { otherInput.style.display = "none"; otherInput.value = ""; }
      });
    }
  }

  document.getElementById("country").addEventListener("change", e => {
    STATE.country = e.target.value;
    if (STATE.enrolled === true) renderUniversityField();
  });

  container.querySelectorAll("[data-enrolled]").forEach(p => {
    p.addEventListener("click", () => {
      STATE.enrolled = p.dataset.enrolled === "yes";
      container.querySelectorAll("[data-enrolled]").forEach(x => x.classList.toggle("selected", x === p));
      renderUniversityField();
    });
  });

  renderUniversityField();

  document.getElementById("backBtn").addEventListener("click", () => goTo("otp"));
  document.getElementById("nextBtn").addEventListener("click", () => {
    let ok = true;
    if (!STATE.country) { document.getElementById("fg-country").classList.add("has-error"); ok = false; }
    if (STATE.enrolled === true) {
      const sel = document.getElementById("universitySelect");
      const other = document.getElementById("universityOther");
      const uni = sel ? (sel.value === "__other__" ? other.value.trim() : sel.value) : (other ? other.value.trim() : "");
      if (!uni) { document.getElementById("fg-university").classList.add("has-error"); ok = false; }
      STATE.university = uni;
    }
    if (STATE.enrolled === null) ok = false;
    if (!ok) return;
    goTo("graduation");
  });
}

// ---------- Step: Graduation ----------

function renderGraduation() {
  container.innerHTML = `
    <div class="auth-step">
      <h2>When do you graduate?</h2>
      <p class="step-sub">Or your most recent/expected graduation date.</p>
      <div class="field-group" id="fg-grad">
        <label>Graduation month & year</label>
        <input type="month" id="gradDate" value="${STATE.gradDate}">
        <div class="error-text">Pick a date.</div>
      </div>
      <div class="auth-actions">
        <button class="btn btn-outline" id="backBtn">← Back</button>
        <button class="btn btn-black" id="nextBtn">Continue →</button>
      </div>
    </div>
  `;
  document.getElementById("backBtn").addEventListener("click", () => goTo("location"));
  document.getElementById("nextBtn").addEventListener("click", () => {
    const val = document.getElementById("gradDate").value;
    if (!val) { document.getElementById("fg-grad").classList.add("has-error"); return; }
    STATE.gradDate = val;
    goTo("exam");
  });
}

// ---------- Step: Exam choice ----------

function renderExam() {
  container.innerHTML = `
    <div class="auth-step">
      <h2>What are you preparing for?</h2>
      <p class="step-sub">Pick one — you can only change this later from Settings.</p>
      <div class="exam-choice-grid">
        <div class="exam-choice-card" data-choice="GRE">
          <span class="ec-icon">📐</span>
          <div><div class="ec-title">I'm preparing for the GRE</div><div class="ec-sub">General Test</div></div>
        </div>
        <div class="exam-choice-card" data-choice="GMAT">
          <span class="ec-icon">🎯</span>
          <div><div class="ec-title">I'm preparing for the GMAT</div><div class="ec-sub">Focus Edition</div></div>
        </div>
        <div class="exam-choice-card" data-choice="unsure">
          <span class="ec-icon">🧭</span>
          <div><div class="ec-title">I'm not sure</div><div class="ec-sub">Take a 2-minute compatibility test</div></div>
        </div>
      </div>
      <div class="auth-actions">
        <button class="btn btn-outline" id="backBtn">← Back</button>
        <button class="btn btn-black" id="nextBtn">Continue →</button>
      </div>
    </div>
  `;
  container.querySelectorAll(".exam-choice-card").forEach(c => {
    c.classList.toggle("selected", c.dataset.choice === STATE.examChoice);
    c.addEventListener("click", () => {
      STATE.examChoice = c.dataset.choice;
      container.querySelectorAll(".exam-choice-card").forEach(x => x.classList.toggle("selected", x === c));
    });
  });
  document.getElementById("backBtn").addEventListener("click", () => goTo("graduation"));
  document.getElementById("nextBtn").addEventListener("click", () => {
    if (!STATE.examChoice) return;
    if (STATE.examChoice === "unsure") { aptQIndex = 0; goTo("aptitude"); }
    else finishSignup();
  });
}

// ---------- Step: Aptitude test ----------

function renderAptitude() {
  const q = APTITUDE_QUESTIONS[aptQIndex];
  const total = APTITUDE_QUESTIONS.length;

  container.innerHTML = `
    <div class="auth-step">
      <h2>Quick compatibility test</h2>
      <div class="apt-progress">Question ${aptQIndex + 1} of ${total}</div>
      <div class="apt-question">
        <div class="apt-prompt">${q.prompt}</div>
        <div class="apt-options">
          ${q.options.map((o, i) => `<button class="apt-option" data-i="${i}">${o}</button>`).join("")}
        </div>
      </div>
    </div>
  `;

  container.querySelectorAll(".apt-option").forEach(btn => {
    btn.addEventListener("click", () => {
      STATE.aptitudeAnswers[q.id] = parseInt(btn.dataset.i, 10);
      if (aptQIndex < total - 1) { aptQIndex++; renderAptitude(); }
      else {
        STATE.aptitudeResult = scoreAptitude(STATE.aptitudeAnswers);
        goTo("aptitudeResult");
      }
    });
  });
}

function renderAptitudeResult() {
  const r = STATE.aptitudeResult;
  container.innerHTML = `
    <div class="auth-step apt-result">
      <h2>Here's what we found</h2>
      <div class="result-badge">${r.recommendation}</div>
      <p class="step-sub" style="max-width:440px; margin:0 auto 20px;">${r.reason}</p>
      <p class="hint" style="margin-bottom:24px;">Quant: ${r.quantCorrect}/${r.quantTotal} correct &nbsp;·&nbsp; Verbal: ${r.verbalCorrect}/${r.verbalTotal} correct</p>
      <div class="auth-actions">
        <button class="btn btn-outline" id="retakeBtn">Retake test</button>
        <button class="btn btn-black" id="confirmBtn">Go with ${r.recommendation} →</button>
      </div>
    </div>
  `;
  document.getElementById("retakeBtn").addEventListener("click", () => { STATE.aptitudeAnswers = {}; aptQIndex = 0; goTo("aptitude"); });
  document.getElementById("confirmBtn").addEventListener("click", () => {
    STATE.examChoice = r.recommendation;
    finishSignup();
  });
}

// ---------- Finish ----------

async function finishSignup() {
  container.innerHTML = `<div class="auth-step step-sub" style="text-align:center; padding:40px 0;">Creating your account...</div>`;
  const user = await Auth.createUser(STATE);
  Auth.startSession(user);
  ExamLock.set(STATE.examChoice);
  window.location.href = "course?exam=" + STATE.examChoice;
}

// ---------- Router ----------

function render() {
  renderDots();
  if (stepId === "basics") renderBasics();
  else if (stepId === "otp") renderOtp();
  else if (stepId === "location") renderLocation();
  else if (stepId === "graduation") renderGraduation();
  else if (stepId === "exam") renderExam();
  else if (stepId === "aptitude") renderAptitude();
  else if (stepId === "aptitudeResult") renderAptitudeResult();
}

render();
