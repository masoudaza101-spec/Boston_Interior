import { readFileSync, existsSync } from "node:fs";

const pages = ["index.html", "about.html", "services.html", "portfolio.html", "furniture.html", "contact.html"];
const bad = [];

for (const p of pages) {
  const html = readFileSync(p, "utf8");
  for (const m of html.matchAll(/(?:src|href)="(\/[^"#?]+)"/g)) {
    const u = m[1];
    if (u.startsWith("/images/") || u === "/favicon.png" || u.startsWith("/assets/")) {
      if (!existsSync("public" + u)) bad.push(`${p}: MISSING public${u}`);
    } else if (u.endsWith(".html")) {
      if (!existsSync("." + u)) bad.push(`${p}: BROKEN LINK ${u}`);
    } else if (u === "/sitemap.xml" || u === "/robots.txt") {
      if (!existsSync("public" + u)) bad.push(`${p}: MISSING public${u}`);
    }
  }
}

console.log(bad.length ? bad.join("\n") : "ALL IMAGES + LINKS OK");
process.exit(bad.length ? 1 : 0);
