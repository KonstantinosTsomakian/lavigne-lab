// Shared header/footer, page renderers and little charts. Content lives in data.js.
(function () {
  const pages = [
    ["index.html", "Home"],
    ["publications.html", "Publications"],
    ["members.html", "Members"],
    ["news.html", "News"],
    ["contact.html", "Contact"],
  ];
  const current = location.pathname.split("/").pop() || "index.html";
  const PALETTE = ["#1f6f78", "#c8553d", "#d4a03a", "#5e548e", "#3f7fbf", "#6a8f5a"];

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const initials = (name) => {
    const w = name.trim().split(/\s+/).filter(Boolean);
    return ((w[0]?.[0] || "") + (w.length > 1 ? w[w.length - 1][0] : "")).toUpperCase();
  };
  const hash = (s) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);

  // Little helix logo
  const LOGO = `<svg viewBox="0 0 40 40" aria-hidden="true">
    <circle cx="20" cy="20" r="19" fill="#e1eef0"/>
    <path d="M12 6 C 28 14, 12 26, 28 34" fill="none" stroke="#c8553d" stroke-width="3" stroke-linecap="round"/>
    <path d="M28 6 C 12 14, 28 26, 12 34" fill="none" stroke="#1f6f78" stroke-width="3" stroke-linecap="round"/>
    <path d="M15 11h10M15 29h10M17 20h6" stroke="#d4a03a" stroke-width="2.5" stroke-linecap="round"/></svg>`;

  // Header
  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="container nav">
        <a class="brand" href="index.html">${LOGO}${esc(LAB.name)}</a>
        <button class="menu-btn" aria-label="Toggle menu">☰</button>
        <ul>${pages.map(([href, label]) => `<li><a class="link${href === current ? " active" : ""}" href="${href}">${label}</a></li>`).join("")}</ul>
      </div>`;
    header.querySelector(".menu-btn").addEventListener("click", () => header.querySelector("ul").classList.toggle("open"));
  }

  // Footer
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container">
        <div>© ${new Date().getFullYear()} ${esc(LAB.name)} · <a href="${LAB.instituteUrl}">${esc(LAB.institute)}</a>, Heraklion, Greece</div>
        <div><a href="mailto:${LAB.email}">${esc(LAB.email)}</a></div>
      </div>`;
  }

  const avatar = (m) => {
    if (m.photo) return `<img class="avatar" src="${esc(m.photo)}" alt="${esc(m.name)}">`;
    const h = hash(m.name), i = h % PALETTE.length;
    let j = (h >>> 3) % PALETTE.length;
    if (j === i) j = (i + 1) % PALETTE.length;
    return `<div class="avatar" aria-hidden="true" style="background:linear-gradient(135deg,${PALETTE[i]},${PALETTE[j]})">${esc(initials(m.name))}</div>`;
  };

  // Selected = journal impact factor >= threshold (see data.js), plus manual overrides
  const journals = [...new Set(PUBLICATIONS.map((p) => p.journal))];
  const isSelected = (p) => !SELECTED_EXCLUDE.includes(p.pmid) &&
    (SELECTED_EXTRA.includes(p.pmid) || (JOURNAL_IF[p.journal] ?? 0) >= SELECTED_IF_THRESHOLD);
  const SELECTED = PUBLICATIONS.filter(isSelected).sort((a, b) => b.year - a.year);
  const C_SEL = "#1f6f78", C_OTHER = "#b8a27a";
  const pColor = (p) => (isSelected(p) ? C_SEL : C_OTHER);

  const pubHTML = (p) => {
    const link = p.doi ? `https://doi.org/${p.doi}` : `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(p.title)}`;
    const pubmed = p.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${p.pmid}/` : link;
    const authors = esc(p.authors).replace(/Lavigne MD/g, "<b>Lavigne MD</b>");
    const c = pColor(p);
    return `<div class="card pub reveal">
      <div class="stripe" style="background:${c}"></div>
      <div>
        <div class="title"><a href="${link}" target="_blank" rel="noopener">${esc(p.title)}</a></div>
        <div class="authors">${authors}</div>
        <div class="meta">
          <span class="badge" style="background:${c}1f;color:${c}">${esc(p.journal)}</span>
          ${p.type ? `<span class="badge" style="background:var(--border);color:var(--muted)">${esc(p.type)}</span>` : ""}
          <span>${p.details ? esc(p.details) + " · " : ""}${p.year}</span>
          ${p.doi ? `<a href="${link}" target="_blank" rel="noopener">DOI ↗</a>` : ""}
          <a href="${pubmed}" target="_blank" rel="noopener">PubMed ↗</a>
        </div>
      </div></div>`;
  };

  // Empty-state: neutral icon + message
  const sleepy = (msg, sub) => `<div class="empty-state">
    <svg viewBox="0 0 72 72" aria-hidden="true">
      <circle cx="36" cy="36" r="34" fill="var(--teal-soft)"/>
      <rect x="22" y="20" width="28" height="34" rx="4" fill="none" stroke="var(--teal)" stroke-width="2.5"/>
      <path d="M28 30h16M28 37h16M28 44h10" stroke="var(--teal)" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
    <h3>${msg}</h3><p>${sub}</p></div>`;

  // ---------- Home ----------
  const homePubs = document.getElementById("home-pubs");
  if (homePubs) homePubs.innerHTML = [...PUBLICATIONS].sort((a, b) => b.year - a.year).slice(0, 3).map(pubHTML).join("");
  const homeNews = document.getElementById("home-news");
  if (homeNews) {
    const items = [...NEWS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
    homeNews.innerHTML = items.length
      ? `<div class="grid">${items.map((n) => `<div class="card reveal"><span class="pill">${fmtDate(n.date)}</span><h3>${esc(n.title)}</h3><p>${n.body}</p></div>`).join("")}</div>`
      : sleepy("No announcements yet", "Lab news, publications and events will be posted here.");
  }
  const stats = document.getElementById("stats");
  if (stats) {
    const years = PUBLICATIONS.map((p) => p.year);
    const nTech = document.querySelectorAll(".cloud .chip").length;
    const items = [
      [PUBLICATIONS.length, "publications", "bg-coral"],
      [SELECTED.length, `in journals with impact factor ≥ ${SELECTED_IF_THRESHOLD}`, "bg-teal"],
      [nTech, "experimental and computational methods", "bg-sun"],
      [`${Math.min(...years)}–${Math.max(...years)}`, "publication record", "bg-plum"],
    ];
    stats.innerHTML = items.map(([v, l, c]) => `<div class="stat ${c} reveal"><b${String(v).length > 4 ? ' style="font-size:1.9rem;white-space:nowrap"' : ""}>${v}</b><span>${l}</span></div>`).join("");
  }

  // ---------- People ----------
  const piEl = document.getElementById("pi");
  if (piEl) {
    const pi = MEMBERS.find((m) => m.group === "pi");
    if (pi) piEl.innerHTML = `<div class="card pi-card reveal">${avatar(pi)}<div>
        <span class="pill">Principal Investigator</span>
        <h2 style="margin:.2rem 0">${esc(pi.name)}</h2>
        <p class="role" style="color:var(--coral);font-weight:700">${esc(pi.role)}</p>
        <p>${esc(pi.bio)}</p>
        ${pi.email ? `<p><a href="mailto:${esc(pi.email)}">${esc(pi.email)}</a></p>` : ""}
      </div></div>`;
  }
  function memberLinks(m) {
    const ICON = {
      cv: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>`,
      github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>`,
      linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>`,
    };
    const links = [
      m.cv && `<a class="mlink cv" href="${esc(m.cv)}" target="_blank" rel="noopener">${ICON.cv}CV</a>`,
      m.github && `<a class="mlink gh" href="${esc(m.github)}" target="_blank" rel="noopener">${ICON.github}GitHub</a>`,
      m.linkedin && `<a class="mlink li" href="${esc(m.linkedin)}" target="_blank" rel="noopener">${ICON.linkedin}LinkedIn</a>`,
    ].filter(Boolean);
    return links.length ? `<div class="member-links">${links.join("")}</div>` : "";
  }

  const renderGroup = (id, group, msg, sub) => {
    const el = document.getElementById(id);
    if (!el) return;
    const list = MEMBERS.filter((m) => m.group === group);
    el.innerHTML = list.length
      ? `<div class="grid">${list.map((m) => `<div class="card member reveal">${avatar(m)}<h3>${esc(m.name)}</h3><p class="role">${esc(m.role)}</p>
          ${m.bio ? `<p>${esc(m.bio)}</p>` : ""}${m.now ? `<p>${esc(m.now)}</p>` : ""}
          ${m.tags?.length ? `<div class="member-tags">${m.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}
          ${m.email ? `<p><a href="mailto:${esc(m.email)}">${esc(m.email)}</a></p>` : ""}
          ${memberLinks(m)}</div>`).join("")}</div>`
      : sleepy(msg, sub);
  };
  renderGroup("members-current", "current", "Member profiles coming soon", "Profiles of current lab members will be added here.");
  renderGroup("members-alumni", "alumni", "No alumni listed yet", "Former lab members will be listed here.");

  // ---------- Papers ----------
  const pubList = document.getElementById("pub-list");
  if (pubList) {
    drawYearChart(document.getElementById("chart-years"));
    drawJournalBars(document.getElementById("chart-journals"));
    const selEl = document.getElementById("pub-selected");
    if (selEl) selEl.innerHTML = SELECTED.map(pubHTML).join("");
    const selNote = document.getElementById("selected-note");
    if (selNote) selNote.textContent = `${SELECTED.length} papers in journals with a Journal Impact Factor of ${SELECTED_IF_THRESHOLD} or higher.`;
    const search = document.getElementById("pub-search");
    const yearSel = document.getElementById("pub-year");
    const years = [...new Set(PUBLICATIONS.map((p) => p.year))].sort((a, b) => b - a);
    yearSel.innerHTML = `<option value="">All years</option>` + years.map((y) => `<option>${y}</option>`).join("");
    const render = () => {
      const q = search.value.toLowerCase().trim();
      const y = yearSel.value;
      const filtered = PUBLICATIONS.filter((p) =>
        (!y || String(p.year) === y) && (!q || `${p.title} ${p.authors} ${p.journal}`.toLowerCase().includes(q)));
      const byYear = {};
      filtered.forEach((p) => (byYear[p.year] = byYear[p.year] || []).push(p));
      pubList.innerHTML = Object.keys(byYear).sort((a, b) => b - a)
        .map((yr) => `<h2 class="year-head">${yr}</h2>${byYear[yr].map(pubHTML).join("")}`).join("")
        || sleepy("No matching publications", "Try a different search term, such as an author, journal or keyword.");
      observe();
    };
    search.addEventListener("input", render);
    yearSel.addEventListener("change", (e) => render());
    window.__filterYear = (y) => { yearSel.value = String(y); render(); pubList.scrollIntoView({ behavior: "smooth" }); };
    render();
  }

  function drawYearChart(el) {
    if (!el) return;
    const ys = PUBLICATIONS.map((p) => p.year);
    const y0 = Math.min(...ys), y1 = Math.max(...ys);
    const years = Array.from({ length: y1 - y0 + 1 }, (_, i) => y0 + i);
    const max = Math.max(...years.map((y) => ys.filter((v) => v === y).length));
    const W = 520, H = 200, pad = 26, bw = (W - pad * 2) / years.length;
    let svg = `<svg viewBox="0 0 ${W} ${H + 30}" role="img" aria-label="Papers per year">`;
    for (let g = 1; g <= max; g++) {
      const gy = H - (g / max) * (H - 30);
      svg += `<line x1="${pad}" x2="${W - pad}" y1="${gy}" y2="${gy}" stroke="currentColor" opacity=".08"/><text x="${pad - 8}" y="${gy + 4}" text-anchor="end">${g}</text>`;
    }
    years.forEach((y, i) => {
      const pubs = PUBLICATIONS.filter((p) => p.year === y).sort((a, b) => isSelected(b) - isSelected(a));
      const x = pad + i * bw + bw * 0.18, w = bw * 0.64;
      let yy = H;
      pubs.forEach((p) => {
        const h = (H - 30) / max;
        yy -= h;
        svg += `<rect class="bar" x="${x}" y="${yy + 2}" width="${w}" height="${h - 4}" rx="${Math.min(4, w / 3)}" fill="${pColor(p)}"
          style="cursor:pointer" onclick="__filterYear(${y})"><title>${esc(p.title)} (${esc(p.journal)})</title></rect>`;
      });
      if (years.length <= 14 || i % 2 === 0) svg += `<text x="${x + w / 2}" y="${H + 18}" text-anchor="middle">${y}</text>`;
    });
    el.innerHTML = svg + `</svg>` +
      `<div class="donut-legend" style="display:flex;gap:1.2rem;margin-top:.4rem"><span style="display:flex;align-items:center;gap:.4rem"><i style="background:${C_SEL};width:12px;height:12px;border-radius:3px;display:inline-block"></i>Selected (IF ≥ ${SELECTED_IF_THRESHOLD})</span><span style="display:flex;align-items:center;gap:.4rem"><i style="background:${C_OTHER};width:12px;height:12px;border-radius:3px;display:inline-block"></i>Other</span></div>`;
  }

  function drawJournalBars(el) {
    if (!el) return;
    const counts = journals.map((j) => [j, PUBLICATIONS.filter((p) => p.journal === j).length])
      .sort((a, b) => b[1] - a[1] || (JOURNAL_IF[b[0]] ?? 0) - (JOURNAL_IF[a[0]] ?? 0)).slice(0, 7);
    const max = counts[0][1];
    el.innerHTML = `<div style="display:grid;gap:.55rem">${counts.map(([j, n]) => {
      const sel = (JOURNAL_IF[j] ?? 0) >= SELECTED_IF_THRESHOLD, c = sel ? C_SEL : C_OTHER;
      return `<div style="display:grid;grid-template-columns:1fr auto;gap:.2rem .6rem;font-size:.86rem">
        <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(j)}">${esc(j)}</span><b>${n}</b>
        <span style="grid-column:1/-1;height:8px;border-radius:4px;background:var(--border)"><span style="display:block;height:100%;width:${(n / max) * 100}%;background:${c};border-radius:4px"></span></span>
      </div>`; }).join("")}</div>
      <p style="font-size:.82rem;margin-top:.9rem">${PUBLICATIONS.length} publications across ${journals.length} journals.</p>`;
  }

  // ---------- News ----------
  const newsList = document.getElementById("news-list");
  if (newsList) {
    const items = [...NEWS].sort((a, b) => b.date.localeCompare(a.date));
    newsList.innerHTML = items.length
      ? items.map((n) => {
          const d = new Date(n.date + "T00:00:00");
          return `<article class="news-item reveal">
            <div class="date-badge"><small>${d.toLocaleDateString("en-GB", { month: "short" })}</small><b>${d.getDate()}</b><small>${d.getFullYear()}</small></div>
            <div class="card"><h3>${esc(n.title)}</h3><div>${n.body}</div></div></article>`;
        }).join("")
      : sleepy("No announcements yet", "News about publications, talks, grants and lab members will be posted here.");
  }

  // ---------- Contact ----------
  const contact = document.getElementById("contact-details");
  if (contact) {
    const ic = {
      mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>`,
      phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>`,
      fax: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="6" y="3" width="12" height="6" rx="1"/><rect x="3" y="9" width="18" height="9" rx="2"/><rect x="7" y="14" width="10" height="7" rx="1"/></svg>`,
      pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
    };
    contact.innerHTML = `
      <li><span class="icon-badge bg-coral">${ic.mail}</span><div><small>Email</small><a href="mailto:${LAB.email}">${esc(LAB.email)}</a></div></li>
      <li><span class="icon-badge bg-teal">${ic.phone}</span><div><small>Phone</small><a href="tel:${LAB.phone.replace(/\s/g, "")}">${esc(LAB.phone)}</a></div></li>
      <li><span class="icon-badge bg-sun">${ic.fax}</span><div><small>Fax</small>${esc(LAB.fax)}</div></li>
      <li><span class="icon-badge bg-plum">${ic.pin}</span><div><small>Address</small>${LAB.address.map(esc).join("<br>")}</div></li>`;
  }

  function fmtDate(d) {
    const dt = new Date(d + "T00:00:00");
    return isNaN(dt) ? esc(d) : dt.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }

  // Reveal-on-scroll
  function observe() {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.remove("pending"); io.unobserve(e.target); }
    }), { threshold: 0.1 });
    document.querySelectorAll(".reveal:not(.seen)").forEach((el) => {
      el.classList.add("seen");
      if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add("pending"); io.observe(el); }
    });
  }
  observe();
})();
