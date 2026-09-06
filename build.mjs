// Builds the Gramwise legal site: src/*.md -> styled static HTML. Run: node build.mjs
// (The repo and its URL keep the tallybite name deliberately - it is the privacy-policy URL
// registered in Play Console; renaming it is a coordinated owner action. ADR-0062 in the app repo.)
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const inline = (s) =>
  esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');

// Minimal, correct-enough markdown -> HTML for these docs (h1/h2, **bold**, - and 1. lists, paras).
function mdToHtml(md) {
  // The app repository is the canonical source. Its markdown starts with multi-line maintainer
  // comments and uses explicit section anchors; neither should appear as policy prose.
  const lines = md.replace(/<!--[\s\S]*?-->/g, "").split(/\r?\n/);
  const out = [];
  let list = null; // "ul" | "ol" | null
  const closeList = () => { if (list) { out.push(`</${list}>`); list = null; } };
  let para = [];
  const flushPara = () => {
    if (para.length) { out.push(`<p>${inline(para.join(" "))}</p>`); para = []; }
  };
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (/^#\s+/.test(line)) { flushPara(); closeList(); out.push(`<h1>${inline(line.replace(/^#\s+/, ""))}</h1>`); }
    else if (/^##\s+/.test(line)) {
      flushPara();
      closeList();
      const heading = line.replace(/^##\s+/, "").replace(/\s*\{#[a-z0-9-]+\}\s*$/i, "");
      out.push(`<h2>${inline(heading)}</h2>`);
    }
    else if (/^-\s+/.test(line)) { flushPara(); if (list !== "ul") { closeList(); out.push("<ul>"); list = "ul"; } out.push(`<li>${inline(line.replace(/^-\s+/, ""))}</li>`); }
    else if (/^\d+\.\s+/.test(line)) { flushPara(); if (list !== "ol") { closeList(); out.push("<ol>"); list = "ol"; } out.push(`<li>${inline(line.replace(/^\d+\.\s+/, ""))}</li>`); }
    else if (line === "") { flushPara(); closeList(); }
    else { para.push(line); }
  }
  flushPara(); closeList();
  return out.join("\n");
}

const page = (title, bodyHtml, active) => `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<link rel="icon" type="image/png" href="./icon-96.png">
<style>
  :root { --accent:#7FC24A; --bg:#0a0f0d; --card:#121a16; --ink:#F5EFE4; --muted:#93A79B; --border:#1f2a24; }
  * { box-sizing:border-box; }
  body { margin:0; background:var(--bg); color:var(--ink);
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Plus Jakarta Sans",sans-serif; line-height:1.65; }
  header { padding:28px 20px; border-bottom:1px solid var(--border); background:radial-gradient(120% 140% at 20% 0%, #16241d, #0a0f0d 60%); }
  .wrap { max-width:760px; margin:0 auto; padding:0 20px; }
  .brand { display:flex; align-items:center; gap:12px; font-weight:800; font-size:22px; letter-spacing:-.02em; }
  .brand .b { color:var(--accent); }
  .brand img { border-radius:8px; }
  nav { margin-top:14px; display:flex; gap:18px; font-size:14px; }
  nav a { color:var(--muted); text-decoration:none; padding-bottom:2px; border-bottom:2px solid transparent; }
  nav a.active, nav a:hover { color:var(--ink); border-color:var(--accent); }
  main { padding:32px 0 72px; }
  h1 { font-size:30px; letter-spacing:-.02em; margin:0 0 6px; }
  h2 { font-size:19px; margin:30px 0 8px; color:var(--accent); }
  p, li { color:#d6e4dd; }
  a { color:var(--accent); }
  strong { color:var(--ink); }
  footer { border-top:1px solid var(--border); color:var(--muted); font-size:13px; padding:22px 0 40px; }
  svg { flex:none; }
</style></head>
<body>
<header><div class="wrap">
  <div class="brand">
    <img src="./icon-96.png" width="34" height="34" alt="">
    <span>Gram<span class="b">wise</span></span>
  </div>
  <nav>
    <a href="./"${active === "home" ? ' class="active"' : ""}>Home</a>
    <a href="./privacy.html"${active === "privacy" ? ' class="active"' : ""}>Privacy Policy</a>
    <a href="./terms.html"${active === "terms" ? ' class="active"' : ""}>Terms of Use</a>
    <a href="./credits.html"${active === "credits" ? ' class="active"' : ""}>Credits</a>
  </nav>
</div></header>
<main><div class="wrap">
${bodyHtml}
</div></main>
<footer><div class="wrap">Gramwise · privacy-first calorie &amp; macro tracker · contact: the developer details on the <a href="https://play.google.com/store/apps/details?id=com.tallybite.app">Gramwise page on Google Play</a></div></footer>
</body></html>`;

const dir = resolve(".");
const privacy = mdToHtml(readFileSync(resolve("src/privacy.md"), "utf8"));
const terms = mdToHtml(readFileSync(resolve("src/terms.md"), "utf8"));
const credits = mdToHtml(readFileSync(resolve("src/credits.md"), "utf8"));

writeFileSync(resolve("privacy.html"), page("Gramwise — Privacy Policy", privacy, "privacy"));
writeFileSync(resolve("terms.html"), page("Gramwise — Terms of Use", terms, "terms"));
writeFileSync(resolve("credits.html"), page("Gramwise — Credits & Licenses", credits, "credits"));

const home = `<h1>Gramwise legal</h1>
<p>Gramwise is a privacy-first calorie &amp; macro tracker. There is no account or login: your diary, profile and weight history stay on your phone, and anything that leaves it — a backup you share, a photo you choose to scan — is your explicit choice, described in the Privacy Policy.</p>
<ul>
<li><a href="./privacy.html">Privacy Policy</a></li>
<li><a href="./terms.html">Terms of Use</a></li>
<li><a href="./credits.html">Credits &amp; Licenses</a></li>
</ul>
<p>Questions: use the developer contact details on the <a href="https://play.google.com/store/apps/details?id=com.tallybite.app">Gramwise page on Google Play</a>.</p>`;
writeFileSync(resolve("index.html"), page("Gramwise — Legal", home, "home"));

console.log("built index.html, privacy.html, terms.html, credits.html into", dir);
