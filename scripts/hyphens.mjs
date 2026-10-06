import { readFileSync } from "node:fs";

const pages = ["index.html", "about.html", "services.html", "portfolio.html", "furniture.html", "contact.html"];

for (const p of pages) {
  const html = readFileSync(p, "utf8");
  const lines = html.split("\n");
  lines.forEach((line, i) => {
    const text = line
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (!text) return;
    if (/[-\u2013\u2014]/.test(text)) {
      console.log(`${p}:${i + 1}  ${text}`);
    }
  });
}
