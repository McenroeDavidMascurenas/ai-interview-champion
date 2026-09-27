(function () {
  const TOPICS = window.TOPICS;
  const GROUPS = [
    { id: "AI", name: "Artificial Intelligence" },
    { id: "Data", name: "Data" },
    { id: "Tools", name: "Tools & Platforms" }
  ];
  const byId = Object.fromEntries(TOPICS.map(t => [t.id, t]));
  const $ = s => document.querySelector(s);
  const main = $("#main");

  // ---------- storage (safe) ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* ignore */ } }
  };
  let learned = new Set(store.get("learned", []));
  const saveLearned = () => { store.set("learned", [...learned]); renderNav(); updateProgress(); };

  // ---------- theme ----------
  const applyTheme = t => { if (t) document.documentElement.dataset.theme = t; };
  applyTheme(store.get("theme", null));
  $("#themeBtn").onclick = () => {
    const cur = document.documentElement.dataset.theme ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    applyTheme(next); store.set("theme", next);
  };

  // ---------- mobile menu ----------
  $("#menuBtn").onclick = () => document.body.classList.toggle("nav-open");
  $("#scrim").onclick = () => document.body.classList.remove("nav-open");

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ---------- sidebar ----------
  function matches(t, q) {
    if (!q) return true;
    const hay = [t.title, t.tag, t.tagline, t.summary, ...t.concepts.flat(), ...t.interview.flat()].join(" ").toLowerCase();
    return q.toLowerCase().split(/\s+/).every(w => hay.includes(w));
  }
  function renderNav() {
    const q = $("#search").value.trim();
    const cur = currentId();
    let html = `<div class="nav-group"><a class="nav-item ${location.hash === "#/drill" ? "active" : ""}" href="#/drill">Interview drill (flashcards)</a>
      <a class="nav-item ${!cur && location.hash !== "#/drill" ? "active" : ""}" href="#/">Home &amp; big picture</a></div>`;
    let any = false;
    for (const g of GROUPS) {
      const items = TOPICS.filter(t => t.group === g.id && matches(t, q));
      if (!items.length) continue;
      any = true;
      html += `<div class="nav-group"><h4><span class="dot ${g.id}"></span>${g.name}</h4>` +
        items.map(t => `<a class="nav-item ${t.id === cur ? "active" : ""}" href="#/topic/${t.id}${q ? "?q=" + encodeURIComponent(q) : ""}">
          <span>${esc(t.title)}</span>${learned.has(t.id) ? '<span class="check">✓</span>' : ""}</a>`).join("") + `</div>`;
    }
    if (!any) html += `<div class="nav-empty">No topics match “${esc(q)}”.</div>`;
    $("#nav").innerHTML = html;
  }
  function updateProgress() {
    $("#progressText").textContent = `${learned.size} / ${TOPICS.length}`;
    $("#progressFill").style.width = (learned.size / TOPICS.length * 100) + "%";
  }
  $("#search").addEventListener("input", renderNav);
  $("#nav").addEventListener("click", e => { if (e.target.closest("a")) document.body.classList.remove("nav-open"); });

  // ---------- routing ----------
  function currentId() {
    const m = location.hash.match(/^#\/topic\/([\w-]+)/);
    return m ? m[1] : null;
  }
  function route() {
    const id = currentId();
    if (id && byId[id]) renderTopic(byId[id]);
    else if (location.hash.startsWith("#/drill")) renderDrill();
    else renderHome();
    renderNav();
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", route);

  // ---------- highlight search terms ----------
  function hl(text, q) {
    let out = esc(text);
    if (!q) return out;
    for (const w of q.split(/\s+/).filter(w => w.length > 2)) {
      const re = new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
      out = out.replace(re, "<mark>$1</mark>");
    }
    return out;
  }

  // ---------- home ----------
  function renderHome() {
    document.title = "AI & Data Study Hub";
    const stat = g => {
      const all = TOPICS.filter(t => t.group === g.id);
      const done = all.filter(t => learned.has(t.id)).length;
      return `<div class="stat"><div class="k"><span class="dot ${g.id}"></span>${g.name}</div>
        <div class="v">${done} / ${all.length}</div><div class="bar"><div class="bar-fill" style="width:${done / all.length * 100}%"></div></div></div>`;
    };
    const box = (id, label) => `<a class="arch-box ${byId[id].group}" href="#/topic/${id}">${label || byId[id].tag}</a>`;
    const plain = label => `<span class="arch-box">${label}</span>`;
    const totalQ = TOPICS.reduce((n, t) => n + t.interview.length, 0);

    main.innerHTML = `
      <section class="card hero">
        <div class="eyebrow AI">Interview prep · ${TOPICS.length} topics · ${totalQ} interview questions</div>
        <h1>Learn the AI &amp; Data landscape, end to end</h1>
        <p class="lead">Every topic follows the same structure: a plain-language analogy, the core explanation, key concepts, how it works step by step, real use cases, likely interview questions with model answers, common pitfalls, and official links to go deeper.</p>
        <div class="topic-actions">
          <a class="btn primary" href="#/topic/genai">Start with Generative AI →</a>
          <a class="btn" href="#/drill">Practise interview questions</a>
        </div>
        <div class="stats">${GROUPS.map(stat).join("")}</div>
      </section>

      <h2>How it all fits together</h2>
      <p class="lead" style="font-size:15.5px">A typical enterprise AI &amp; data architecture. Click any box to open that topic. Be ready to draw something like this in an interview.</p>
      <div class="card arch">
        <div class="arch-row"><div class="arch-label">Sources</div><div class="arch-boxes">
          ${box("servicenow")} ${box("jira", "Jira / Clarity")} ${plain("ERP / CRM")} ${plain("SharePoint &amp; docs")} ${plain("IoT / logs")}</div></div>
        <div class="arch-arrow">▼ ingest &amp; orchestrate</div>
        <div class="arch-row"><div class="arch-label">Integration</div><div class="arch-boxes">
          ${box("adf", "Azure Data Factory")} ${plain("Event Hubs / streaming")}</div></div>
        <div class="arch-arrow">▼ store</div>
        <div class="arch-row"><div class="arch-label">Storage</div><div class="arch-boxes">
          ${box("datalake", "ADLS Gen2 (Bronze · Silver · Gold)")} ${plain("OneLake (Fabric)")}</div></div>
        <div class="arch-arrow">▼ transform, model, learn</div>
        <div class="arch-row"><div class="arch-label">Processing &amp; ML</div><div class="arch-boxes">
          ${box("databricks", "Azure Databricks")} ${box("datamodel", "Star schema")} ${box("ml")} ${box("forecasting")} ${box("anomaly")}</div></div>
        <div class="arch-arrow">▼ serve</div>
        <div class="arch-row"><div class="arch-label">Analytics</div><div class="arch-boxes">
          ${box("powerbi")} ${box("kpi")} ${box("analytics", "Reports &amp; dashboards")} ${box("ddd", "Decisions")}</div></div>
        <div class="arch-row"><div class="arch-label">GenAI &amp; agents</div><div class="arch-boxes">
          ${box("foundry", "Microsoft Foundry")} ${box("azureopenai")} ${box("rag")} ${box("agents", "Agents · MCP · A2A")} ${box("copilotstudio")} ${box("copilot")}</div></div>
        <div class="arch-foot"><b>Across every layer:</b>
          ${box("datagov", "Data Governance")} ${box("dataquality", "Data Quality")} ${box("governance", "Responsible AI")} ${box("kms", "Knowledge Mgmt")} ${box("usecases", "Use-case portfolio")}</div>
      </div>

      <h2>Suggested study plan</h2>
      <div class="plan">
        <div class="card"><h3>Day 1: AI foundations</h3><ul><li>GenAI, LLM</li><li>RAG, KMS</li><li>Agents &amp; A2A</li></ul></div>
        <div class="card"><h3>Day 2: ML &amp; analytics</h3><ul><li>ML fundamentals</li><li>Predictive, forecasting</li><li>Anomaly detection</li></ul></div>
        <div class="card"><h3>Day 3: Data discipline</h3><ul><li>Management, governance</li><li>Quality, modelling</li><li>KPIs, analytics, decisions</li></ul></div>
        <div class="card"><h3>Day 4: Microsoft stack</h3><ul><li>M365 Copilot, Copilot Studio</li><li>Foundry, Azure OpenAI</li><li>ADLS, ADF, Databricks, Power BI</li></ul></div>
        <div class="card"><h3>Day 5: Enterprise &amp; practice</h3><ul><li>ServiceNow, Jira/Clarity</li><li>Responsible AI, use cases</li><li>Interview drill ×2</li></ul></div>
      </div>

      ${GROUPS.map(g => `
        <h2><span class="dot ${g.id}"></span>${g.name}</h2>
        <div class="group-grid">
          ${TOPICS.filter(t => t.group === g.id).map(t => `
            <a class="card topic-card ${t.group}" href="#/topic/${t.id}">
              <h3><span>${esc(t.title)}</span>${learned.has(t.id) ? '<span class="done">✓ learned</span>' : ""}</h3>
              <p>${esc(t.tagline)}</p>
            </a>`).join("")}
        </div>`).join("")}

      <h2>Interview tips for this role</h2>
      <div class="two-col">
        <div class="card list-card good"><h3>Do</h3><ul>
          <li>Start every answer with the business problem, then the technology.</li>
          <li>Use STAR (Situation, Task, Action, Result) with a number in the result.</li>
          <li>Mention governance, security and cost: it shows enterprise maturity.</li>
          <li>Say which tool fits when: Copilot, then Copilot Studio, then Foundry; ADF for orchestration, Databricks for transformation.</li>
          <li>Tie AI to KPIs such as MTTR, deflection, time saved and adoption.</li>
        </ul></div>
        <div class="card list-card bad"><h3>Avoid</h3><ul>
          <li>Buzzwords without an example.</li>
          <li>Claiming AI is 100% accurate; talk about evaluation and human review.</li>
          <li>Ignoring data quality ("garbage in, garbage out").</li>
          <li>Pilots with no path to production.</li>
          <li>Forgetting change management and adoption.</li>
        </ul></div>
      </div>`;
  }

  // ---------- topic ----------
  function renderTopic(t) {
    document.title = t.title + " · AI & Data Study Hub";
    const q = decodeURIComponent((location.hash.split("?q=")[1] || ""));
    const idx = TOPICS.indexOf(t);
    const prev = TOPICS[idx - 1], next = TOPICS[idx + 1];
    const group = GROUPS.find(g => g.id === t.group);
    const isDone = learned.has(t.id);
    let n = 0;
    const H = title => `<h2><span class="num">${String(++n).padStart(2, "0")}</span>${title}</h2>`;

    main.innerHTML = `
      <div class="crumbs"><a href="#/">Home</a> / ${group.name}</div>
      <div class="eyebrow ${t.group}">${esc(t.tag)}</div>
      <h1>${esc(t.title)}</h1>
      <p class="lead">${hl(t.tagline, q)}</p>
      <div class="topic-actions">
        <button class="btn ${isDone ? "done" : "primary"}" id="learnBtn">${isDone ? "✓ Learned" : "Mark as learned"}</button>
        <a class="btn" href="#/drill?topic=${t.id}">Drill this topic's questions</a>
      </div>

      <div class="analogy"><span class="lbl">In plain words</span><p>${hl(t.analogy, q)}</p></div>

      ${H("What it is")}
      <div class="card summary"><p>${hl(t.summary, q)}</p></div>

      ${H("Key concepts")}
      <div class="concepts">${t.concepts.map(([k, v]) => `<div class="card concept"><b>${hl(k, q)}</b><span>${hl(v, q)}</span></div>`).join("")}</div>

      ${H("How it works, step by step")}
      <ol class="flow">${t.flow.map(s => `<li>${hl(s, q)}</li>`).join("")}</ol>

      ${H("Use cases &amp; pitfalls")}
      <div class="two-col">
        <div class="card list-card good"><h3>Real-world use cases</h3><ul>${t.useCases.map(u => `<li>${hl(u, q)}</li>`).join("")}</ul></div>
        <div class="card list-card bad"><h3>Common pitfalls</h3><ul>${t.pitfalls.map(p => `<li>${hl(p, q)}</li>`).join("")}</ul></div>
      </div>

      ${H("Interview questions")}
      <div class="qa-tools"><button class="btn" id="openAll">Show all answers</button><button class="btn" id="closeAll">Hide all</button></div>
      ${t.interview.map(([qq, a]) => `
        <details class="card qa"${q && (qq + a).toLowerCase().includes(q.toLowerCase()) ? " open" : ""}>
          <summary><span class="q">Q</span><span>${hl(qq, q)}</span><span class="chev">›</span></summary>
          <div class="a">${hl(a, q)}</div>
        </details>`).join("")}

      ${H("Related topics")}
      <div class="chips">${t.related.filter(r => byId[r]).map(r => `<a class="chip ${byId[r].group}" href="#/topic/${r}">${esc(byId[r].title)}</a>`).join("")}</div>

      ${H("Go deeper (official &amp; trusted sources)")}
      <div class="card list-card"><ul class="links">${t.links.map(([l, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${esc(l)} ↗</a></li>`).join("")}</ul></div>

      <div class="pager">
        ${prev ? `<a class="card" href="#/topic/${prev.id}"><small>← Previous</small>${esc(prev.title)}</a>` : "<span></span>"}
        ${next ? `<a class="card next" href="#/topic/${next.id}"><small>Next →</small>${esc(next.title)}</a>` : "<span></span>"}
      </div>`;

    $("#learnBtn").onclick = () => {
      learned.has(t.id) ? learned.delete(t.id) : learned.add(t.id);
      saveLearned(); renderTopic(t); window.scrollTo(0, 0);
    };
    $("#openAll").onclick = () => main.querySelectorAll(".qa").forEach(d => d.open = true);
    $("#closeAll").onclick = () => main.querySelectorAll(".qa").forEach(d => d.open = false);
  }

  // ---------- drill ----------
  let deck = [], pos = 0, shown = false, drillFilter = "all";
  function buildDeck(filter) {
    const list = [];
    TOPICS.forEach(t => {
      if (filter !== "all" && t.group !== filter && t.id !== filter) return;
      t.interview.forEach(([q, a]) => list.push({ q, a, t }));
    });
    for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }
    return list;
  }
  function renderDrill() {
    document.title = "Interview drill · AI & Data Study Hub";
    const topicParam = (location.hash.match(/topic=([\w-]+)/) || [])[1];
    const want = topicParam && byId[topicParam] ? topicParam : drillFilter;
    if (want !== drillFilter || !deck.length) { drillFilter = want; deck = buildDeck(drillFilter); pos = 0; shown = false; }
    drawDrill();
  }
  function drawDrill() {
    const filters = [["all", "All topics"], ...GROUPS.map(g => [g.id, g.name])];
    if (byId[drillFilter]) filters.push([drillFilter, byId[drillFilter].title]);
    const c = deck[pos];
    main.innerHTML = `
      <div class="eyebrow AI">Practice mode</div>
      <h1>Interview drill</h1>
      <p class="lead">Read the question and answer it out loud first, ideally in under 90 seconds. Then reveal the model answer and compare.</p>
      <div class="drill-filters">${filters.map(([id, name]) => `<button class="btn ${id === drillFilter ? "on" : ""}" data-f="${id}">${esc(name)}</button>`).join("")}</div>
      <div class="card flash">
        <div class="meta"><a href="#/topic/${c.t.id}">${esc(c.t.title)}</a><span>${pos + 1} / ${deck.length}</span></div>
        <div class="question">${esc(c.q)}</div>
        ${shown ? `<div class="answer">${esc(c.a)}</div>` : ""}
        <div class="controls">
          <button class="btn" id="prevQ" ${pos === 0 ? "disabled" : ""}>← Back</button>
          <button class="btn primary" id="revealQ">${shown ? "Hide answer" : "Reveal answer"}</button>
          <button class="btn" id="nextQ">Next →</button>
          <button class="btn" id="shuffleQ">Shuffle</button>
        </div>
      </div>
      <p class="tip">Keyboard: <b>Space</b> reveals the answer, <b>←</b> and <b>→</b> move between questions.</p>`;
    main.querySelectorAll("[data-f]").forEach(b => b.onclick = () => {
      drillFilter = b.dataset.f; deck = buildDeck(drillFilter); pos = 0; shown = false;
      if (location.hash !== "#/drill") history.replaceState(null, "", "#/drill");
      drawDrill();
    });
    $("#revealQ").onclick = () => { shown = !shown; drawDrill(); };
    $("#nextQ").onclick = () => { pos = (pos + 1) % deck.length; shown = false; drawDrill(); };
    $("#prevQ").onclick = () => { if (pos > 0) { pos--; shown = false; drawDrill(); } };
    $("#shuffleQ").onclick = () => { deck = buildDeck(drillFilter); pos = 0; shown = false; drawDrill(); };
  }
  document.addEventListener("keydown", e => {
    if (!location.hash.startsWith("#/drill") || e.target.matches?.("input, textarea")) return;
    if (e.key === " " || e.code === "Space") { e.preventDefault(); $("#revealQ")?.click(); }
    if (e.key === "ArrowRight") $("#nextQ")?.click();
    if (e.key === "ArrowLeft") $("#prevQ")?.click();
  });

  updateProgress();
  route();
})();
