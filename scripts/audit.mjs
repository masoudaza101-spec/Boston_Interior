import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";

const ROUTES = {
  "/": "app/page.tsx",
  "/about": "app/about/page.tsx",
  "/services": "app/services/page.tsx",
  "/portfolio": "app/portfolio/page.tsx",
  "/furniture": "app/furniture/page.tsx",
  "/contact": "app/contact/page.tsx"
};

const pages = [
  "app/layout.tsx",
  "app/page.tsx",
  "app/about/page.tsx",
  "app/services/page.tsx",
  "app/portfolio/page.tsx",
  "app/furniture/page.tsx",
  "app/contact/page.tsx",
  "components/Header.tsx",
  "components/Footer.tsx",
  "components/Skeleton.tsx"
];

const exact = new Set();
function walk(dir, prefix) {
  for (const name of readdirSync(dir)) {
    const p = dir + "/" + name;
    const rel = prefix + "/" + name;
    if (statSync(p).isDirectory()) walk(p, rel);
    else exact.add(rel);
  }
}
walk("public", "");

const bad = [];

for (const p of pages) {
  const src = readFileSync(p, "utf8");

  for (const m of src.matchAll(/"(\/(?:images\/[^"]+|favicon\.png))"/g)) {
    const u = m[1];
    if (!exact.has(u)) {
      bad.push(existsSync("public" + u) ? `${p}: WRONG CASE public${u}` : `${p}: MISSING public${u}`);
    }
  }

  for (const m of src.matchAll(/href="([^"]+)"/g)) {
    const href = m[1];
    if (/^(https?:|mailto:|tel:|#|\/\/)/.test(href)) continue;
    if (!href.startsWith("/")) {
      bad.push(`${p}: RELATIVE LINK ${href}`);
      continue;
    }
    const path = href.split(/[?#]/)[0];
    if (path.startsWith("/images/") || path === "/favicon.png") continue;
    if (path.endsWith(".html")) bad.push(`${p}: LEGACY .html LINK ${href}`);
    else if (!(path in ROUTES)) bad.push(`${p}: UNKNOWN ROUTE ${href}`);
    else if (!existsSync(ROUTES[path])) bad.push(`${p}: BROKEN ROUTE ${href}`);
  }
}

console.log(bad.length ? bad.join("\n") : "ALL IMAGES + LINKS OK");
process.exit(bad.length ? 1 : 0);
