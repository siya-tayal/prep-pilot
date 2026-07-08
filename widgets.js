// Stumblebee — custom interactive widgets for GRE Math lessons.
// Each widget is a function(container) that renders itself into `container`.

window.StumblebeeWidgets = {};

(function injectWidgetStyles() {
  const css = `
  .sb-widget-title { font-family:"Fredoka",sans-serif; font-weight:600; font-size:0.95rem; margin-bottom:14px; color:var(--ink); }
  .sb-controls { display:flex; flex-wrap:wrap; gap:18px; align-items:center; margin-top:16px; }
  .sb-slider-row { display:flex; flex-direction:column; gap:4px; font-size:0.8rem; font-weight:600; color:var(--ink-soft); min-width:150px; }
  .sb-slider-row input[type=range] { accent-color: var(--ink); }
  .sb-readout { background:var(--white); border-radius:10px; padding:10px 14px; font-size:0.85rem; }
  .sb-readout b { font-family:"Fredoka",sans-serif; }
  .sb-toggle-group { display:flex; gap:8px; }
  .sb-toggle-btn { border:1.5px solid var(--ink); background:var(--white); border-radius:999px; padding:6px 16px; font-size:0.8rem; font-weight:700; cursor:pointer; }
  .sb-toggle-btn.active { background:var(--ink); color:var(--yellow); }
  .sb-num-input { width:64px; padding:8px 10px; border-radius:8px; border:1.5px solid var(--line); font-size:0.9rem; font-family:"Inter",sans-serif; }
  .sb-result-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:14px; }
  .sb-result-card { background:var(--white); border-radius:12px; padding:14px 16px; text-align:center; }
  .sb-result-card .rlabel { font-size:0.7rem; font-weight:700; color:var(--ink-faint); text-transform:uppercase; letter-spacing:0.03em; }
  .sb-result-card .rvalue { font-family:"Fredoka",sans-serif; font-size:1.3rem; margin-top:4px; }

  /* flip tree */
  .sb-tree-scroll { overflow-x:auto; padding-bottom:10px; }
  .sb-tree-hint { font-size:0.76rem; color:var(--ink-faint); margin-bottom:6px; }
  .sb-tree, .sb-tree ul { list-style:none; margin:0; padding:0; }
  .sb-tree { display:inline-flex; padding-top:0; text-align:center; }
  .sb-tree ul { display:flex; padding-top:28px; position:relative; }
  .sb-tree li { flex:1; display:flex; flex-direction:column; align-items:center; padding:28px 8px 0; position:relative; min-width:100px; }
  .sb-tree li::before, .sb-tree li::after { content:''; position:absolute; top:0; right:50%; width:50%; height:28px; border-top:2px solid #D8CDA9; }
  .sb-tree li::after { right:auto; left:50%; border-left:2px solid #D8CDA9; }
  .sb-tree li:only-child::after, .sb-tree li:only-child::before { display:none; }
  .sb-tree > li { padding-top:0; }
  .sb-tree > li::before, .sb-tree > li::after { display:none; }
  .sb-tree li:first-child::before, .sb-tree li:last-child::after { border:0 none; }
  .sb-tree li:last-child::before { border-right:2px solid #D8CDA9; border-radius:0 6px 0 0; }
  .sb-tree li:first-child::after { border-radius:6px 0 0 0; }
  .sb-tree ul::before { content:''; position:absolute; top:0; left:50%; border-left:2px solid #D8CDA9; width:0; height:28px; }
  .sb-tree li:only-child { padding-top:0; }
  .sb-tree li:only-child > ul::before { display:none; }
  .flip-node { background:var(--white); border:2px solid var(--ink); border-radius:12px; padding:9px 12px; font-size:0.74rem; font-weight:700; cursor:pointer; max-width:150px; transition:transform 0.1s ease; }
  .flip-node:hover { transform:translateY(-2px); }
  .flip-node.flipped { background:var(--ink); color:var(--yellow); text-align:left; max-width:190px; }
  .flip-node .fn-back { display:none; font-weight:500; font-size:0.7rem; margin-top:6px; line-height:1.4; }
  .flip-node.flipped .fn-back { display:block; }

  /* angle diagram */
  .sb-angle-wrap { display:flex; gap:24px; flex-wrap:wrap; align-items:flex-start; }
  .sb-angle-svg { flex-shrink:0; }
  .angle-label { cursor:pointer; font-size:12px; font-weight:700; }
  .angle-label rect { fill:var(--white); stroke:#D8CDA9; stroke-width:1; rx:6; }
  .angle-label.sel-a rect { fill:#2F6FED; stroke:#2F6FED; }
  .angle-label.sel-a text { fill:white; }
  .angle-label.sel-b rect { fill:#F2784B; stroke:#F2784B; }
  .angle-label.sel-b text { fill:white; }
  .sb-angle-info { flex:1; min-width:220px; background:var(--white); border-radius:14px; padding:16px 18px; font-size:0.86rem; }

  /* boxplot */
  .sb-box-tooltip { background:var(--white); border-radius:12px; padding:12px 16px; font-size:0.84rem; margin-top:10px; min-height:24px; }

  /* reflection */
  .sb-refl-svg { touch-action:none; }
  .sb-legend { display:flex; flex-wrap:wrap; gap:12px; margin-top:12px; font-size:0.78rem; font-weight:600; }
  .sb-legend span { display:inline-flex; align-items:center; gap:6px; }
  .sb-legend .dot { width:10px; height:10px; border-radius:999px; display:inline-block; }
  `;
  const style = document.createElement("style");
  style.id = "stumblebee-widget-styles";
  style.textContent = css;
  document.head.appendChild(style);
})();

function sbRenderMath(el) { if (window.renderMathInElement) renderMathInElement(el, { delimiters: [{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false}], throwOnError:false }); }

// ================= 1. Number System flip-tree =================

window.StumblebeeWidgets.numberSystemFlowchart = function (container) {
  const TREE = {
    name: "Number System", def: "Every kind of number used in math.",
    children: [
      { name: "Complex Numbers", def: "Has a real part and/or imaginary part: a + bi.",
        children: [ { name: "Imaginary Numbers", def: "Real part is zero: bi, b ≠ 0." } ] },
      { name: "Real Numbers", def: "Any number that can sit on the number line.",
        children: [
          { name: "Irrational Numbers", def: "Can't be written as a fraction — decimal never ends or repeats." },
          { name: "Rational Numbers", def: "Can be written as p/q, integers, q ≠ 0.",
            children: [
              { name: "Fractional Numbers", def: "Rational numbers that aren't integers." },
              { name: "Integers", def: "Whole numbers and their negatives, including 0.",
                children: [
                  { name: "Negative Numbers", def: "Less than zero." },
                  { name: "Zero", def: "Represents no quantity." },
                  { name: "Positive Numbers", def: "Greater than zero.",
                    children: [
                      { name: "Whole Numbers", def: "Natural numbers plus zero.",
                        children: [
                          { name: "Natural Numbers", def: "Counting numbers starting at 1.",
                            children: [
                              { name: "Even Numbers", def: "Divisible by 2." },
                              { name: "Odd Numbers", def: "Not divisible by 2." },
                              { name: "Prime Numbers", def: "Exactly two factors: 1 and itself." },
                              { name: "Composite Numbers", def: "More than two factors." }
                            ] }
                        ] }
                    ] }
                ] }
            ] }
        ] }
    ]
  };

  function buildNode(node) {
    const li = document.createElement("li");
    const card = document.createElement("div");
    card.className = "flip-node";
    card.innerHTML = `<div class="fn-front">${node.name}</div><div class="fn-back">${node.def}</div>`;
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    li.appendChild(card);
    if (node.children && node.children.length) {
      const ul = document.createElement("ul");
      node.children.forEach(c => ul.appendChild(buildNode(c)));
      li.appendChild(ul);
    }
    return li;
  }

  const wrap = document.createElement("div");
  wrap.className = "sb-tree-scroll";
  wrap.innerHTML = `<div class="sb-tree-hint">Click any box to flip it and reveal its definition — click again to flip back. Scroll → to see the full tree.</div>`;
  const rootUl = document.createElement("ul");
  rootUl.className = "sb-tree";
  rootUl.appendChild(buildNode(TREE));
  wrap.appendChild(rootUl);
  container.innerHTML = "";
  container.appendChild(wrap);
};

// ================= 2. Angle hashtag diagram =================

window.StumblebeeWidgets.angleHashtag = function (container) {
  const W = 560, H = 380;
  let theta = 60; // degrees
  let selected = null;

  container.innerHTML = `
    <div class="sb-widget-title">Parallel lines cut by a transversal — click an angle</div>
    <div class="sb-angle-wrap">
      <svg class="sb-angle-svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"></svg>
      <div class="sb-angle-info" id="angleInfo">Click any labeled angle to see which other angles must equal it, and why.</div>
    </div>
    <div class="sb-controls">
      <div class="sb-slider-row">
        Adjust transversal angle: <span id="thetaVal">60°</span>
        <input type="range" min="20" max="160" value="60" id="thetaSlider">
      </div>
    </div>
  `;

  const svg = container.querySelector("svg");
  const info = container.querySelector("#angleInfo");
  const thetaVal = container.querySelector("#thetaVal");

  const y1 = 110, y2 = 270, cx = W / 2;

  function draw() {
    const rad = theta * Math.PI / 180;
    const t2 = (y2 - y1) / Math.sin(rad);
    const p1 = { x: cx, y: y1 };
    const p2 = { x: cx + t2 * Math.cos(rad), y: y2 };

    const tTop = (30 - y1) / Math.sin(rad);
    const tBot = (H - 30 - y1) / Math.sin(rad);
    const lineTop = { x: cx + tTop * Math.cos(rad), y: y1 + tTop * Math.sin(rad) };
    const lineBot = { x: cx + tBot * Math.cos(rad), y: y1 + tBot * Math.sin(rad) };

    const rays = { East: 0, Fwd: theta, West: 180, Bwd: (theta + 180) % 360 };
    const sorted = Object.entries(rays).sort((a, b) => a[1] - b[1]);

    function wedgeAt(deg) {
      const norm = ((deg % 360) + 360) % 360;
      for (let i = 0; i < sorted.length; i++) {
        const [, a] = sorted[i];
        const [, b] = sorted[(i + 1) % sorted.length];
        const bEnd = b > a ? b : b + 360;
        if (norm >= a && norm <= bEnd) return { size: Math.round(bEnd - a) };
        if (norm + 360 >= a && norm + 360 <= bEnd) return { size: Math.round(bEnd - a) };
      }
      return { size: 90 };
    }

    const probes = [
      { key: "NE", ang: -45, dx: 30, dy: -22 },
      { key: "SE", ang: 45, dx: 30, dy: 22 },
      { key: "SW", ang: 135, dx: -34, dy: 22 },
      { key: "NW", ang: -135, dx: -34, dy: -22 }
    ];

    let svgMarkup = `
      <line x1="20" y1="${y1}" x2="${W-20}" y2="${y1}" stroke="#18140C" stroke-width="2.5"/>
      <line x1="20" y1="${y2}" x2="${W-20}" y2="${y2}" stroke="#18140C" stroke-width="2.5"/>
      <line x1="${lineTop.x}" y1="${lineTop.y}" x2="${lineBot.x}" y2="${lineBot.y}" stroke="#18140C" stroke-width="2.5"/>
      <text x="24" y="${y1-10}" font-size="12" font-weight="700" fill="#8A8370">L1</text>
      <text x="24" y="${y2-10}" font-size="12" font-weight="700" fill="#8A8370">L2</text>
    `;

    [p1, p2].forEach((p, pi) => {
      probes.forEach((pr, idx) => {
        const w = wedgeAt(pr.ang);
        const val = w.size;
        const isGroupA = Math.round(val) === Math.round(theta);
        const lx = p.x + pr.dx, ly = p.y + pr.dy;
        const cls = selected == null ? "" : (Math.round(val) === selected ? (isGroupA ? "sel-a" : "sel-b") : "dim");
        svgMarkup += `
          <g class="angle-label ${cls}" data-value="${Math.round(val)}" data-id="p${pi}-${pr.key}">
            <rect x="${lx-16}" y="${ly-12}" width="32" height="22" rx="6"></rect>
            <text x="${lx}" y="${ly+4}" text-anchor="middle">${Math.round(val)}°</text>
          </g>`;
      });
    });

    svg.innerHTML = svgMarkup;

    svg.querySelectorAll(".angle-label").forEach(g => {
      g.addEventListener("click", () => {
        const v = parseInt(g.dataset.value, 10);
        selected = selected === v ? null : v;
        draw();
        updateInfo();
      });
    });
  }

  function updateInfo() {
    if (selected == null) {
      info.textContent = "Click any labeled angle to see which other angles must equal it, and why.";
      return;
    }
    const other = 180 - selected;
    const count = [...svg.querySelectorAll(".angle-label")].filter(g => parseInt(g.dataset.value, 10) === selected).length;
    info.innerHTML = `<b>${selected}°</b> is highlighted on ${count} of the 8 angles. Because $l_1 \\parallel l_2$, a transversal only ever produces <strong>two</strong> distinct angle measures — every other angle here measures either <b>${selected}°</b> or its supplement, <b>${other}°</b>. Any two highlighted angles are equal by vertical angles, corresponding angles, or alternate interior/exterior angles.`;
    sbRenderMath(info);
  }

  container.querySelector("#thetaSlider").addEventListener("input", e => {
    theta = parseInt(e.target.value, 10);
    thetaVal.textContent = theta + "°";
    selected = null;
    draw();
    updateInfo();
  });

  draw();
  updateInfo();
};

// ================= 3. Quadratic grapher =================

window.StumblebeeWidgets.quadraticGrapher = function (container) {
  let a = 1, b = -4, c = 3;
  const W = 420, H = 340, PAD = 30;
  const xMin = -10, xMax = 10, yMin = -10, yMax = 10;

  container.innerHTML = `
    <div class="sb-widget-title">Drag the sliders — watch the roots and vertex update live</div>
    <div style="display:flex; gap:24px; flex-wrap:wrap; align-items:flex-start;">
      <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" id="quadSvg"></svg>
      <div style="flex:1; min-width:220px;">
        <div class="sb-slider-row">a = <span id="aVal">1</span><input type="range" min="-5" max="5" step="0.5" value="1" id="aSlider"></div>
        <div class="sb-slider-row">b = <span id="bVal">-4</span><input type="range" min="-10" max="10" step="0.5" value="-4" id="bSlider"></div>
        <div class="sb-slider-row">c = <span id="cVal">3</span><input type="range" min="-10" max="10" step="0.5" value="3" id="cSlider"></div>
        <div class="sb-readout" id="quadReadout" style="margin-top:12px;"></div>
      </div>
    </div>
  `;

  const svg = container.querySelector("#quadSvg");
  const readout = container.querySelector("#quadReadout");

  function toPx(x, y) {
    return {
      x: PAD + (x - xMin) / (xMax - xMin) * (W - 2 * PAD),
      y: H - PAD - (y - yMin) / (yMax - yMin) * (H - 2 * PAD)
    };
  }

  function draw() {
    if (a === 0) a = 0.5;
    let path = "";
    for (let px = 0; px <= 200; px++) {
      const x = xMin + (px / 200) * (xMax - xMin);
      const y = a * x * x + b * x + c;
      const p = toPx(x, Math.max(yMin - 2, Math.min(yMax + 2, y)));
      path += (px === 0 ? "M" : "L") + p.x.toFixed(1) + "," + p.y.toFixed(1) + " ";
    }

    const origin = toPx(0, 0);
    const disc = b * b - 4 * a * c;
    let rootsMarkup = "";
    let rootsText = "0 real roots";
    if (disc > 0) {
      const r1 = (-b + Math.sqrt(disc)) / (2 * a);
      const r2 = (-b - Math.sqrt(disc)) / (2 * a);
      [r1, r2].forEach(r => {
        if (r >= xMin && r <= xMax) {
          const p = toPx(r, 0);
          rootsMarkup += `<circle cx="${p.x}" cy="${p.y}" r="5" fill="#2F6FED"/>`;
        }
      });
      rootsText = `x = ${r1.toFixed(2)}, ${r2.toFixed(2)}`;
    } else if (disc === 0) {
      const r = -b / (2 * a);
      const p = toPx(r, 0);
      rootsMarkup += `<circle cx="${p.x}" cy="${p.y}" r="5" fill="#2F6FED"/>`;
      rootsText = `x = ${r.toFixed(2)} (double root)`;
    }

    const vx = -b / (2 * a);
    const vy = a * vx * vx + b * vx + c;
    const vp = toPx(vx, Math.max(yMin, Math.min(yMax, vy)));

    svg.innerHTML = `
      <line x1="${PAD}" y1="${origin.y}" x2="${W-PAD}" y2="${origin.y}" stroke="#D8CDA9" stroke-width="1.5"/>
      <line x1="${origin.x}" y1="${PAD}" x2="${origin.x}" y2="${H-PAD}" stroke="#D8CDA9" stroke-width="1.5"/>
      <path d="${path}" fill="none" stroke="#18140C" stroke-width="2.5"/>
      ${rootsMarkup}
      <circle cx="${vp.x}" cy="${vp.y}" r="5" fill="#F2784B"/>
    `;

    readout.innerHTML = `
      <div><b>Δ = b² − 4ac = ${disc.toFixed(2)}</b></div>
      <div style="margin-top:6px;">${disc > 0 ? "2 real roots" : disc === 0 ? "1 real root" : "0 real roots"} — ${rootsText}</div>
      <div style="margin-top:6px;">Vertex: (${vx.toFixed(2)}, ${vy.toFixed(2)})</div>
    `;
  }

  ["a", "b", "c"].forEach(v => {
    container.querySelector(`#${v}Slider`).addEventListener("input", e => {
      const val = parseFloat(e.target.value);
      if (v === "a") a = val; if (v === "b") b = val; if (v === "c") c = val;
      container.querySelector(`#${v}Val`).textContent = val;
      draw();
    });
  });

  draw();
};

// ================= 4. Sequence explorer =================

window.StumblebeeWidgets.sequenceExplorer = function (container) {
  let mode = "arithmetic";
  let a1 = 3, step = 4, n = 6;

  container.innerHTML = `
    <div class="sb-widget-title">Build your own sequence</div>
    <div class="sb-toggle-group">
      <button class="sb-toggle-btn active" data-mode="arithmetic">Arithmetic</button>
      <button class="sb-toggle-btn" data-mode="geometric">Geometric</button>
    </div>
    <div class="sb-controls">
      <div class="sb-slider-row">First term (a₁)<input type="number" class="sb-num-input" id="a1Input" value="3"></div>
      <div class="sb-slider-row" id="stepLabel">Common difference (d)<input type="number" class="sb-num-input" id="stepInput" value="4"></div>
      <div class="sb-slider-row">Find term n<input type="number" class="sb-num-input" id="nInput" value="6" min="1" max="12"></div>
    </div>
    <div id="seqChips" style="display:flex; flex-wrap:wrap; gap:8px; margin-top:16px;"></div>
    <div class="sb-readout" id="seqReadout" style="margin-top:14px;"></div>
  `;

  const chipsEl = container.querySelector("#seqChips");
  const readout = container.querySelector("#seqReadout");

  function draw() {
    const terms = [];
    for (let i = 1; i <= Math.max(n, 8); i++) {
      terms.push(mode === "arithmetic" ? a1 + (i - 1) * step : a1 * Math.pow(step, i - 1));
    }
    chipsEl.innerHTML = terms.slice(0, 8).map((t, i) => `
      <span class="cc-example" style="${i + 1 === n ? 'background:var(--ink);color:var(--yellow);' : ''}">a<sub>${i+1}</sub> = ${Number.isFinite(t) ? Math.round(t*100)/100 : "—"}</span>
    `).join("");

    const nthVal = mode === "arithmetic" ? a1 + (n - 1) * step : a1 * Math.pow(step, n - 1);
    let sumVal;
    if (mode === "arithmetic") sumVal = n * (a1 + nthVal) / 2;
    else sumVal = step === 1 ? a1 * n : a1 * (1 - Math.pow(step, n)) / (1 - step);

    readout.innerHTML = mode === "arithmetic"
      ? `<b>aₙ = a₁ + (n−1)d</b> &nbsp;→&nbsp; a<sub>${n}</sub> = ${Math.round(nthVal*100)/100}<br><span style="color:var(--ink-soft);">Sum of first ${n} terms: ${Math.round(sumVal*100)/100}</span>`
      : `<b>aₙ = a₁ · r⁽ⁿ⁻¹⁾</b> &nbsp;→&nbsp; a<sub>${n}</sub> = ${Math.round(nthVal*100)/100}<br><span style="color:var(--ink-soft);">Sum of first ${n} terms: ${Math.round(sumVal*100)/100}</span>`;
  }

  container.querySelectorAll(".sb-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      mode = btn.dataset.mode;
      container.querySelectorAll(".sb-toggle-btn").forEach(b => b.classList.toggle("active", b === btn));
      container.querySelector("#stepLabel").firstChild.textContent = mode === "arithmetic" ? "Common difference (d)" : "Common ratio (r)";
      container.querySelector("#stepInput").value = mode === "arithmetic" ? 4 : 2;
      step = mode === "arithmetic" ? 4 : 2;
      draw();
    });
  });

  container.querySelector("#a1Input").addEventListener("input", e => { a1 = parseFloat(e.target.value) || 0; draw(); });
  container.querySelector("#stepInput").addEventListener("input", e => { step = parseFloat(e.target.value) || 0; draw(); });
  container.querySelector("#nInput").addEventListener("input", e => { n = Math.max(1, Math.min(50, parseInt(e.target.value, 10) || 1)); draw(); });

  draw();
};

// ================= 5. Boxplot comparison =================

window.StumblebeeWidgets.boxplotCompare = function (container) {
  const sets = [
    { label: "Class A", min: 40, q1: 55, med: 70, q3: 85, max: 95, color: "#2F6FED" },
    { label: "Class B", min: 50, q1: 65, med: 75, q3: 80, max: 90, color: "#F2784B" }
  ];
  const W = 520, H = 160, PAD = 40;
  const domainMin = 30, domainMax = 100;

  container.innerHTML = `
    <div class="sb-widget-title">Hover a boxplot to see its five-number summary</div>
    <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"></svg>
    <div class="sb-box-tooltip" id="boxTip">Hover over a boxplot above.</div>
  `;
  const svg = container.querySelector("svg");
  const tip = container.querySelector("#boxTip");

  function sx(v) { return PAD + (v - domainMin) / (domainMax - domainMin) * (W - 2 * PAD); }

  let markup = `<line x1="${PAD}" y1="${H-24}" x2="${W-PAD}" y2="${H-24}" stroke="#D8CDA9"/>`;
  [domainMin, 40, 50, 60, 70, 80, 90, domainMax].forEach(v => {
    markup += `<text x="${sx(v)}" y="${H-8}" font-size="10" fill="#8A8370" text-anchor="middle">${v}</text>`;
  });

  sets.forEach((s, i) => {
    const y = 38 + i * 55;
    markup += `
      <g class="boxplot-g" data-idx="${i}" style="cursor:pointer;">
        <line x1="${sx(s.min)}" y1="${y}" x2="${sx(s.q1)}" y2="${y}" stroke="${s.color}" stroke-width="2"/>
        <line x1="${sx(s.q3)}" y1="${y}" x2="${sx(s.max)}" y2="${y}" stroke="${s.color}" stroke-width="2"/>
        <line x1="${sx(s.min)}" y1="${y-8}" x2="${sx(s.min)}" y2="${y+8}" stroke="${s.color}" stroke-width="2"/>
        <line x1="${sx(s.max)}" y1="${y-8}" x2="${sx(s.max)}" y2="${y+8}" stroke="${s.color}" stroke-width="2"/>
        <rect x="${sx(s.q1)}" y="${y-14}" width="${sx(s.q3)-sx(s.q1)}" height="28" fill="${s.color}" fill-opacity="0.18" stroke="${s.color}" stroke-width="2" rx="4"/>
        <line x1="${sx(s.med)}" y1="${y-14}" x2="${sx(s.med)}" y2="${y+14}" stroke="${s.color}" stroke-width="2.5"/>
        <text x="${PAD}" y="${y-20}" font-size="11" font-weight="700" fill="${s.color}">${s.label}</text>
      </g>`;
  });

  svg.innerHTML = markup;
  svg.querySelectorAll(".boxplot-g").forEach(g => {
    g.addEventListener("mouseenter", () => {
      const s = sets[parseInt(g.dataset.idx, 10)];
      tip.innerHTML = `<b>${s.label}</b> — Min ${s.min}, Q1 ${s.q1}, Median ${s.med}, Q3 ${s.q3}, Max ${s.max} &nbsp;·&nbsp; IQR = ${s.q3-s.q1} &nbsp;·&nbsp; Range = ${s.max-s.min}`;
    });
  });
};

// ================= 6. Combinatorics calculator =================

window.StumblebeeWidgets.combinatoricsCalculator = function (container) {
  container.innerHTML = `
    <div class="sb-widget-title">Permutations & Combinations calculator</div>
    <div class="sb-controls">
      <div class="sb-slider-row">n<input type="number" class="sb-num-input" id="nInput" value="6" min="0" max="20"></div>
      <div class="sb-slider-row">r<input type="number" class="sb-num-input" id="rInput" value="2" min="0" max="20"></div>
    </div>
    <div class="sb-result-grid">
      <div class="sb-result-card"><div class="rlabel">P(n, r) — order matters</div><div class="rvalue" id="permOut">30</div></div>
      <div class="sb-result-card"><div class="rlabel">C(n, r) — order doesn't matter</div><div class="rvalue" id="combOut">15</div></div>
    </div>
  `;

  function fact(k) { let r = 1; for (let i = 2; i <= k; i++) r *= i; return r; }

  function draw() {
    let n = parseInt(container.querySelector("#nInput").value, 10) || 0;
    let r = parseInt(container.querySelector("#rInput").value, 10) || 0;
    n = Math.max(0, Math.min(20, n));
    r = Math.max(0, Math.min(20, r));
    const permOut = container.querySelector("#permOut");
    const combOut = container.querySelector("#combOut");
    if (r > n) { permOut.textContent = "—"; combOut.textContent = "—"; return; }
    permOut.textContent = Math.round(fact(n) / fact(n - r));
    combOut.textContent = Math.round(fact(n) / (fact(r) * fact(n - r)));
  }

  container.querySelector("#nInput").addEventListener("input", draw);
  container.querySelector("#rInput").addEventListener("input", draw);
  draw();
};

// ================= 7. Coordinate reflection tool =================

window.StumblebeeWidgets.reflectionTool = function (container) {
  const W = 380, H = 380, PAD = 20;
  const domain = 10;
  let px = 4, py = 3;

  container.innerHTML = `
    <div class="sb-widget-title">Drag the black point — watch all four reflections move</div>
    <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" class="sb-refl-svg"></svg>
    <div class="sb-legend">
      <span><span class="dot" style="background:#18140C;"></span>Original (x, y)</span>
      <span><span class="dot" style="background:#2F6FED;"></span>Across x-axis (x, −y)</span>
      <span><span class="dot" style="background:#F2784B;"></span>Across y-axis (−x, y)</span>
      <span><span class="dot" style="background:#1E8E3E;"></span>Through origin (−x, −y)</span>
      <span><span class="dot" style="background:#9B51E0;"></span>Across y=x (y, x)</span>
    </div>
  `;

  const svg = container.querySelector("svg");
  const cx = W / 2, cy = H / 2, scale = (W - 2 * PAD) / (2 * domain);
  function toPx(x, y) { return { x: cx + x * scale, y: cy - y * scale }; }
  function toMath(x, y) { return { x: (x - cx) / scale, y: (cy - y) / scale }; }

  function draw() {
    const pts = [
      { x: px, y: py, color: "#18140C", r: 7, drag: true },
      { x: px, y: -py, color: "#2F6FED" },
      { x: -px, y: py, color: "#F2784B" },
      { x: -px, y: -py, color: "#1E8E3E" },
      { x: py, y: px, color: "#9B51E0" }
    ];
    let markup = `
      <line x1="${PAD}" y1="${cy}" x2="${W-PAD}" y2="${cy}" stroke="#D8CDA9"/>
      <line x1="${cx}" y1="${PAD}" x2="${cx}" y2="${H-PAD}" stroke="#D8CDA9"/>
      <line x1="${PAD}" y1="${H-PAD}" x2="${W-PAD}" y2="${PAD}" stroke="#D8CDA9" stroke-dasharray="4 3"/>
    `;
    pts.forEach(p => {
      const s = toPx(p.x, p.y);
      markup += `<circle cx="${s.x}" cy="${s.y}" r="${p.r || 6}" fill="${p.color}" ${p.drag ? 'id="dragPoint" style="cursor:grab;"' : ''}/>`;
    });
    svg.innerHTML = markup;

    const dragPoint = svg.querySelector("#dragPoint");
    let dragging = false;
    dragPoint.addEventListener("pointerdown", () => { dragging = true; });
    svg.addEventListener("pointermove", e => {
      if (!dragging) return;
      const rect = svg.getBoundingClientRect();
      const sx = (e.clientX - rect.left) * (W / rect.width);
      const sy = (e.clientY - rect.top) * (H / rect.height);
      const m = toMath(sx, sy);
      px = Math.max(-domain, Math.min(domain, Math.round(m.x * 2) / 2));
      py = Math.max(-domain, Math.min(domain, Math.round(m.y * 2) / 2));
      draw();
    });
    window.addEventListener("pointerup", () => { dragging = false; });
  }

  draw();
};

// ================= 8. Normal distribution curve =================

window.StumblebeeWidgets.normalCurve = function (container) {
  const W = 520, H = 260, PAD = 30;
  let k = 1; // sigma multiplier

  container.innerHTML = `
    <div class="sb-widget-title">Shade the region within k standard deviations of the mean</div>
    <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"></svg>
    <div class="sb-controls">
      <div class="sb-slider-row">k = <span id="kVal">1.0</span>σ<input type="range" min="0.25" max="3" step="0.25" value="1" id="kSlider"></div>
    </div>
    <div class="sb-readout" id="normReadout" style="margin-top:10px;"></div>
  `;

  const svg = container.querySelector("svg");
  const readout = container.querySelector("#normReadout");

  function erf(x) {
    const sign = x < 0 ? -1 : 1; x = Math.abs(x);
    const a1=0.254829592,a2=-0.284496736,a3=1.421413741,a4=-1.453152027,a5=1.061405429,p=0.3275911;
    const t = 1/(1+p*x);
    const y = 1-(((((a5*t+a4)*t)+a3)*t+a2)*t+a1)*t*Math.exp(-x*x);
    return sign*y;
  }
  function normalCdf(x) { return 0.5 * (1 + erf(x / Math.sqrt(2))); }
  function pdf(z) { return Math.exp(-z * z / 2) / Math.sqrt(2 * Math.PI); }

  function draw() {
    const xToPx = z => PAD + (z + 4) / 8 * (W - 2 * PAD);
    const yToPx = y => H - PAD - y * (H - 2 * PAD) / 0.45;

    let curve = "";
    for (let i = 0; i <= 200; i++) {
      const z = -4 + (i / 200) * 8;
      const p = { x: xToPx(z), y: yToPx(pdf(z)) };
      curve += (i === 0 ? "M" : "L") + p.x.toFixed(1) + "," + p.y.toFixed(1) + " ";
    }

    let shaded = `M${xToPx(-k).toFixed(1)},${yToPx(0).toFixed(1)} `;
    for (let i = 0; i <= 100; i++) {
      const z = -k + (i / 100) * (2 * k);
      shaded += `L${xToPx(z).toFixed(1)},${yToPx(pdf(z)).toFixed(1)} `;
    }
    shaded += `L${xToPx(k).toFixed(1)},${yToPx(0).toFixed(1)} Z`;

    const pct = (normalCdf(k) - normalCdf(-k)) * 100;

    svg.innerHTML = `
      <line x1="${PAD}" y1="${H-PAD}" x2="${W-PAD}" y2="${H-PAD}" stroke="#D8CDA9"/>
      <path d="${shaded}" fill="#FFC629" fill-opacity="0.7"/>
      <path d="${curve}" fill="none" stroke="#18140C" stroke-width="2.5"/>
      <line x1="${xToPx(0)}" y1="${PAD}" x2="${xToPx(0)}" y2="${H-PAD}" stroke="#8A8370" stroke-dasharray="3 3"/>
      <text x="${xToPx(0)}" y="${H-10}" font-size="11" text-anchor="middle" fill="#8A8370">μ</text>
      <text x="${xToPx(-k)}" y="${H-10}" font-size="11" text-anchor="middle" fill="#8A8370">−${k}σ</text>
      <text x="${xToPx(k)}" y="${H-10}" font-size="11" text-anchor="middle" fill="#8A8370">+${k}σ</text>
    `;

    readout.innerHTML = `<b>μ ± ${k}σ contains ≈ ${pct.toFixed(1)}% of the data.</b>`;
  }

  container.querySelector("#kSlider").addEventListener("input", e => {
    k = parseFloat(e.target.value);
    container.querySelector("#kVal").textContent = k.toFixed(2);
    draw();
  });

  draw();
};
