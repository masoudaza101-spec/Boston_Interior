import fs from "node:fs";
import path from "node:path";

const pages = ["index.html", "about.html", "services.html", "portfolio.html", "furniture.html", "contact.html"];
const issues = [];

function walk(d, base = "") {
  let out = [];
  for (const f of fs.readdirSync(d)) {
    const rel = base ? base + "/" + f : f;
    const st = fs.statSync(path.join(d, f));
    out = out.concat(st.isDirectory() ? walk(path.join(d, f), rel) : [rel]);
  }
  return out;
}
const real = new Set(walk("public"));
const realLower = new Map();
for (const f of real) realLower.set(f.toLowerCase(), f);

for (const p of pages) {
  const s = fs.readFileSync(p, "utf8");
  if (!s.includes('<meta charset="utf-8">')) issues.push(`${p}: missing charset meta`);
  if (s.charCodeAt(0) === 0xfeff) issues.push(`${p}: has BOM`);
  if (/localhost|127\.0\.0\.1/.test(s)) issues.push(`${p}: localhost reference`);

  for (const m of s.matchAll(/(?:src|href)="([^"#?]+)"/g)) {
    const u = m[1];
    if (u.includes("\\")) issues.push(`${p}: backslash in ${u}`);
    if (u.startsWith("/images/") || u === "/favicon.png" || u.startsWith("/assets/") || u === "/sitemap.xml" || u === "/robots.txt") {
      const f = u.replace(/^\//, "");
      if (!real.has(f)) {
        const alt = realLower.get(f.toLowerCase());
        if (alt) issues.push(`${p}: CASE MISMATCH ${u} (actual: ${alt})`);
        else issues.push(`${p}: MISSING ${u}`);
      }
    } else if (u.startsWith("/") && u.endsWith(".html")) {
      if (!fs.existsSync("." + u)) issues.push(`${p}: BROKEN LINK ${u}`);
      else {
        const name = u.slice(1);
        const actual = fs.readdirSync(".").find((x) => x.toLowerCase() === name.toLowerCase());
        if (actual !== name) issues.push(`${p}: CASE MISMATCH link ${u} (actual: ${actual})`);
      }
    }
  }
}

const boms = ["src/ts/main.ts", "src/ts/form.ts", "src/css/tailwind.css", "public/sitemap.xml", "public/robots.txt", "public/images/credits.json"];
for (const f of boms) {
  if (fs.existsSync(f)) {
    const b = fs.readFileSync(f);
    if (b[0] === 0xef && b[1] === 0xbb && b[2] === 0xbf) issues.push(`${f}: has BOM`);
  }
}

const chars = new Set();
for (const p of pages) for (const ch of fs.readFileSync(p, "utf8")) if (ch.codePointAt(0) > 127) chars.add(ch);
console.log("non-ascii chars:", [...chars].map((c) => `${c}(U+${c.codePointAt(0).toString(16).toUpperCase()})`).join(" "));

for (const p of pages) {
  const s = fs.readFileSync(p, "utf8");
  for (const m of s.matchAll(/([a-zA-Z-]+)="([^"]*)"/g)) {
    if (/[\u2013\u2014]/.test(m[2])) console.log(`${p}: DASH IN ATTR ${m[1]}="${m[2]}"`);
  }
}
console.log(issues.length ? "ISSUES:\n" + issues.join("\n") : "NO TECHNICAL ISSUES FOUND");
