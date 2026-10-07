import { readFileSync, readdirSync, statSync } from "node:fs";

const files = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = dir + "/" + name;
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.tsx$/.test(name)) files.push(p);
  }
}
walk("app");
walk("components");

for (const p of files) {
  const src = readFileSync(p, "utf8");
  const lines = src.split("\n");
  lines.forEach((line, i) => {
    const text = line
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (!text) return;
    if (/[-–—]/.test(text)) {
      console.log(`${p}:${i + 1}  ${text}`);
    }
  });
}
