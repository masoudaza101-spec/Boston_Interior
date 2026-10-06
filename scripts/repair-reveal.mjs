import { readFileSync, writeFileSync } from "node:fs";

const pages = ["index.html", "about.html", "services.html", "portfolio.html", "furniture.html", "contact.html"];

for (const page of pages) {
  let s = readFileSync(page, "utf8");
  const before = s;
  s = s
    .split("data reveal stagger").join("data-reveal-stagger")
    .split("data reveal").join("data-reveal")
    .split("data lenis prevent").join("data-lenis-prevent");
  if (s !== before) writeFileSync(page, s, "utf8");
  const reveals = (s.match(/data-reveal(?![-\w])/g) || []).length;
  const staggers = (s.match(/data-reveal-stagger/g) || []).length;
  const bad = (s.match(/data reveal/g) || []).length;
  const fffd = (s.match(/\uFFFD/g) || []).length;
  console.log(`${page}: reveal=${reveals} stagger=${staggers} corrupted=${bad} FFFD=${fffd}`);
}
