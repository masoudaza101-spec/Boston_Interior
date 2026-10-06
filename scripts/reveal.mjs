import { readFileSync, writeFileSync } from "node:fs";

const PAGES = ["index.html", "about.html", "services.html", "portfolio.html", "furniture.html", "contact.html"];

const HEAD_SNIPPET =
  '  <script>document.documentElement.classList.add("js");setTimeout(function(){if(!window.__revealReady)document.documentElement.classList.remove("js")},3000);</script>\n';

function attrFor(line, nextLine) {
  const m = line.match(/class="([^"]*)"/);
  if (!m) return null;
  if (line.includes("data-reveal")) return null;
  const tokens = m[1].split(/\s+/);
  const has = (t) => tokens.includes(t);

  if (/<h1[\s>]/.test(line)) {
    const child = (nextLine || "").trim();
    return child.startsWith("<span") ? "data-reveal-stagger" : "data-reveal";
  }
  if (has("grid") || has("faq-list")) return "data-reveal-stagger";
  if (has("eyebrow") || has("lead")) return "data-reveal";
  if (tokens.some((t) => /^title-(xl|lg|md)$/.test(t))) return "data-reveal";
  if (has("mb-7") && has("inline-flex")) return "data-reveal";
  if (has("mb-4") && has("inline-flex")) return "data-reveal";
  if (has("flex-wrap") && has("gap-4")) return "data-reveal";
  if (has("pb-24") && has("hidden")) return "data-reveal";
  if (/<p[\s>]/.test(line) && has("mt-5") && has("max-w-2xl")) return "data-reveal";
  return null;
}

let total = 0;
for (const page of PAGES) {
  let html = readFileSync(page, "utf8");
  let count = 0;

  if (!html.includes("__revealReady")) {
    html = html.replace("</head>", `${HEAD_SNIPPET}</head>`);
    count += 1;
  }

  const lines = html.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const attr = attrFor(lines[i], lines[i + 1]);
    if (!attr) continue;
    lines[i] = lines[i].replace(/class="([^"]*)"/, `class="$1" ${attr}`);
    count += 1;
  }

  html = lines.join("\n");
  writeFileSync(page, html);
  total += count;
  console.log(`${page}: ${count} changes`);
}
console.log(`TOTAL: ${total}`);
