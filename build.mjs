// Builds the TallyBite legal site: src/*.md -> styled static HTML. Run: node build.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const inline = (s) =>
  esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');

// Minimal, correct-enough markdown -> HTML for these docs (h1/h2, **bold**, - and 1. lists, paras).
function mdToHtml(md) {
  const lines = md.split(/\r?\n/);
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
    else if (/^##\s+/.test(line)) { flushPara(); closeList(); out.push(`<h2>${inline(line.replace(/^##\s+/, ""))}</h2>`); }
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
<style>
  :root { --mint:#34f0a0; --bg:#0a0f0d; --card:#121a16; --ink:#f3fbf7; --muted:#8aa79a; --border:#1f2a24; }
  * { box-sizing:border-box; }
  body { margin:0; background:var(--bg); color:var(--ink);
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Plus Jakarta Sans",sans-serif; line-height:1.65; }
  header { padding:28px 20px; border-bottom:1px solid var(--border); background:radial-gradient(120% 140% at 20% 0%, #16241d, #0a0f0d 60%); }
  .wrap { max-width:760px; margin:0 auto; padding:0 20px; }
  .brand { display:flex; align-items:center; gap:12px; font-weight:800; font-size:22px; letter-spacing:-.02em; }
  .brand .b { color:var(--mint); }
  nav { margin-top:14px; display:flex; gap:18px; font-size:14px; }
  nav a { color:var(--muted); text-decoration:none; padding-bottom:2px; border-bottom:2px solid transparent; }
  nav a.active, nav a:hover { color:var(--ink); border-color:var(--mint); }
  main { padding:32px 0 72px; }
  h1 { font-size:30px; letter-spacing:-.02em; margin:0 0 6px; }
  h2 { font-size:19px; margin:30px 0 8px; color:var(--mint); }
  p, li { color:#d6e4dd; }
  a { color:var(--mint); }
  strong { color:var(--ink); }
  footer { border-top:1px solid var(--border); color:var(--muted); font-size:13px; padding:22px 0 40px; }
  svg { flex:none; }
</style></head>
<body>
<header><div class="wrap">
  <div class="brand">
    <svg width="34" height="34" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="82" stroke="#1a2b22" stroke-width="16"/>
      <circle cx="100" cy="100" r="82" stroke="#34f0a0" stroke-width="16" stroke-linecap="round" stroke-dasharray="360 155" transform="rotate(-90 100 100)"/>
      <path d="M72 134V88" stroke="#34f0a0" stroke-width="18" stroke-linecap="round"/>
      <path d="M100 134V66" stroke="#1fd6c4" stroke-width="18" stroke-linecap="round"/>
      <path d="M128 134V104" stroke="#a6e26a" stroke-width="18" stroke-linecap="round"/>
    </svg>
    <span>Tally<span class="b">Bite</span></span>
  </div>
  <nav>
    <a href="./"${active === "home" ? ' class="active"' : ""}>Home</a>
    <a href="./privacy.html"${active === "privacy" ? ' class="active"' : ""}>Privacy Policy</a>
    <a href="./terms.html"${active === "terms" ? ' class="active"' : ""}>Terms of Use</a>
  </nav>
</div></header>
<main><div class="wrap">
${bodyHtml}
</div></main>
<footer><div class="wrap">TallyBite · on-device calorie &amp; macro tracker · hollownett@gmail.com</div></footer>
</body></html>`;

const dir = resolve(".");
const privacy = mdToHtml(readFileSync(resolve("src/privacy.md"), "utf8"));
const terms = mdToHtml(readFileSync(resolve("src/terms.md"), "utf8"));

writeFileSync(resolve("privacy.html"), page("TallyBite — Privacy Policy", privacy, "privacy"));
writeFileSync(resolve("terms.html"), page("TallyBite — Terms of Use", terms, "terms"));

const home = `<h1>TallyBite legal</h1>
<p>TallyBite is an on-device calorie &amp; macro tracker. Your food diary, weight, and photos stay on your phone — there is no account and no server copy.</p>
<ul>
<li><a href="./privacy.html">Privacy Policy</a></li>
<li><a href="./terms.html">Terms of Use</a></li>
</ul>
<p>Questions: <a href="mailto:hollownett@gmail.com">hollownett@gmail.com</a>.</p>`;
writeFileSync(resolve("index.html"), page("TallyBite — Legal", home, "home"));

console.log("built index.html, privacy.html, terms.html into", dir);
