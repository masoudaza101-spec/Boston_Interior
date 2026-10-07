import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";

// Remove hyphen/dash punctuation from visible copy.
//   em dash  " — "  -> ", " mid-sentence, " · " in titles/captions/eyebrows
//   en dash  ranges -> " to "
//   compound words   -> spaced ("full-service" -> "full service")
// Protects: inline scripts/styles, JSX comments, template literals, attribute values, data-* tokens.

const pages = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = dir + "/" + name;
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.tsx$/.test(name)) pages.push(p);
  }
}
walk("app");
walk("components");

const PROTECTED_ATTRS = new Set(["data-description", "data-title", "alt", "title"]);

function fixCopy(s, mode) {
  s = s.replace(/Max 5MB\s*—/g, "Max 5MB:");
  s = s.replace(/(\d)\s*–\s*(\d)/g, "$1 to $2");
  s = s.replace(/([A-Za-z]+)\s+–\s+([A-Za-z]+)/g, "$1 to $2");
  s = s.replace(/\b(\d{2}) — /g, "$1 · ");
  if (mode === "middot") {
    s = s.replace(/\s*—\s*/g, " · ");
  } else {
    s = s.replace(/\s*—\s+/g, ", ");
    s = s.replace(/\s*—$/g, ",");
  }
  s = s.replace(/([A-Za-z])-([A-Za-z])/g, "$1 $2");
  s = s.replace(/(\d)-([A-Za-z])/g, "$1 $2");
  s = s.replace(/([A-Za-z])-(\d)/g, "$1 $2");
  s = s.replace(/(\d)-(\d)/g, "$1 to $2");
  return s;
}

for (const page of pages) {
  let src = readFileSync(page, "utf8");
  const stash = [];
  const keep = (text) => {
    const token = `\u0000${stash.length}\u0000`;
    stash.push(text);
    return token;
  };

  src = src.replace(/<script\b[\s\S]*?<\/script>/gi, (m) => keep(m));
  src = src.replace(/<style\b[\s\S]*?<\/style>/gi, (m) => keep(m));
  src = src.replace(/<!--[\s\S]*?-->/g, (m) => keep(m));
  src = src.replace(/\{\/\*[\s\S]*?\*\/\}/g, (m) => keep(m));
  src = src.replace(/`[^`]*`/g, (m) => keep(m));

  const out = src.split("\n").map((line) => {
    const mode = /<title>|figcaption/.test(line) ? "middot" : "comma";

    line = line.replace(/([a-zA-Z-]+)="([^"]*)"/g, (m, name, val) => {
      if (PROTECTED_ATTRS.has(name)) return `${name}="${fixCopy(val, mode)}"`;
      if (
        name === "content" &&
        /<meta/.test(line) &&
        /name="description"|og:description|twitter:description|og:title|twitter:title/.test(line)
      ) {
        const contentMode = /og:title|twitter:title/.test(line) ? "middot" : "comma";
        return `${name}="${fixCopy(val, contentMode)}"`;
      }
      return m;
    });

    line = line.replace(/([a-zA-Z-]+)="([^"]*)"/g, (m) => keep(m));
    line = line.replace(/\bdata-[a-z]+(?:-[a-z]+)*\b/g, (m) => keep(m));

    line = fixCopy(line, mode);

    for (let i = stash.length - 1; i >= 0; i--) {
      line = line.split(`\u0000${i}\u0000`).join(stash[i]);
    }
    return line;
  });

  writeFileSync(page, out.join("\n"), "utf8");
  console.log(`${page}: done`);
}
