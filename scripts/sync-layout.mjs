import { readFile, writeFile } from "node:fs/promises";

const pages = ["about.html", "services.html", "portfolio.html", "furniture.html", "contact.html"];

const index = await readFile("index.html", "utf8");

function grab(name) {
  const re = new RegExp(`<!-- LAYOUT:${name}:START -->[\\s\\S]*?<!-- LAYOUT:${name}:END -->`);
  const m = index.match(re);
  if (!m) throw new Error(`index.html is missing LAYOUT:${name} markers`);
  return m[0];
}

const header = grab("HEADER");
const footer = grab("FOOTER");
const skeleton = grab("SKELETON");

for (const page of pages) {
  let html = await readFile(page, "utf8");
  const before = html;
  html = html.replace(/<!-- LAYOUT:HEADER:START -->[\s\S]*?<!-- LAYOUT:HEADER:END -->/, header);
  html = html.replace(/<!-- LAYOUT:FOOTER:START -->[\s\S]*?<!-- LAYOUT:FOOTER:END -->/, footer);
  if (/<!-- LAYOUT:SKELETON:START -->/.test(html)) {
    html = html.replace(/<!-- LAYOUT:SKELETON:START -->[\s\S]*?<!-- LAYOUT:SKELETON:END -->/, skeleton);
  } else {
    html = html.replace(/(<body[^>]*>)/, `$1\n\n${skeleton}\n`);
  }
  if (html === before && (before.match(/LAYOUT:HEADER:START/g) || []).length) {
    console.warn(`warn: no markers replaced in ${page}`);
  }
  await writeFile(page, html);
  console.log(`synced ${page}`);
}
