import sharp from "sharp";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.resolve("public/images");
const UA = { "User-Agent": "BostonInteriorSiteBuilder/1.0 (site build; contact dev@example.com)" };

const SLOTS = [
  { name: "svc-planning", queries: ["modern open plan living room interior", "modern apartment living room", "open plan interior living space"], kw: ["living", "room", "interior", "apartment", "modern", "open", "plan", "space"], w: 1200, h: 900 },
  { name: "proj-outdoor-2", queries: ["terrace garden seating furniture", "outdoor lounge chairs garden", "balcony furniture"], kw: ["terrace", "garden", "outdoor", "furniture", "chair", "seating", "balcony", "patio"], w: 1400, h: 1000 },
  { name: "proj-outdoor", queries: ["terrace outdoor furniture modern", "patio table chairs garden", "balcony seating table"], kw: ["terrace", "patio", "balcony", "outdoor", "furniture", "chair", "table", "garden"], w: 1400, h: 1000 },
  { name: "furn-sofa", queries: ["sofa modern living room", "couch furniture interior", "leather sofa"], kw: ["sofa", "couch"], w: 1100, h: 850 },
  { name: "furn-chair", queries: ["armchair modern chair interior", "lounge chair design", "upholstered chair"], kw: ["armchair", "chair", "lounge"], w: 1100, h: 850 },
  { name: "furn-table", queries: ["coffee table wooden living room", "wood table furniture interior"], kw: ["table", "coffee", "wood"], w: 1100, h: 850 },
  { name: "furn-lamp", queries: ["table lamp interior light", "desk lamp warm light"], kw: ["lamp", "light"], w: 1100, h: 850 },
  { name: "furn-shelf", queries: ["bookshelf wooden books shelf", "bookcase interior furniture"], kw: ["shelf", "bookshelf", "bookcase", "book"], w: 1100, h: 850 },
  { name: "furn-decor", queries: ["vase flowers table decoration", "decorative vase still life", "flower vase interior"], kw: ["vase", "flower", "decor"], w: 1100, h: 850 }
];

const OK_LICENSES = /^(cc0|public domain|pd-?|no restrictions)/i;
const BAD_TITLE =
  /(postcard|museum|musée|musee|archive|18\d{2}|19\d{2}|antique|century|stamp|painting|drawing|etching|engraving|lithograph|sculpt|statue|manuscript|heritage|national park|\bMET\b|ca\. \d)/i;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const usedUrls = new Set();

async function search(q) {
  const url =
    "https://commons.wikimedia.org/w/api.php?action=query&generator=search" +
    `&gsrsearch=${encodeURIComponent("filetype:bitmap " + q)}` +
    "&gsrlimit=20&gsrnamespace=6&prop=imageinfo&iiprop=url%7Csize%7Cextmetadata&iiurlwidth=1600&format=json";
  for (let i = 0; i < 3; i++) {
    try {
      const res = await fetch(url, { headers: { Accept: "application/json", ...UA } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const j = await res.json();
      const pages = j.query?.pages || {};
      return Object.values(pages).map((p) => {
        const ii = p.imageinfo?.[0] || {};
        const lic = ii.extmetadata?.LicenseShortName?.value || "";
        return { title: p.title?.replace(/^File:/, ""), url: ii.thumburl, width: ii.thumbwidth || ii.width, height: ii.thumbheight || ii.height, page: `https://commons.wikimedia.org/wiki/${encodeURIComponent(p.title || "")}`, license: lic };
      });
    } catch (e) {
      console.log(`  search retry ${i + 1}: ${e.message}`);
      await sleep(4000);
    }
  }
  return [];
}

async function tryDownload(url) {
  try {
    const res = await fetch(url, { headers: UA });
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 20000) return null;
    return buf;
  } catch {
    return null;
  }
}

async function score(buf) {
  try {
    const s = sharp(buf);
    const meta = await s.metadata();
    if (!meta.width || !meta.height) return null;
    const { data, info } = await s.clone().resize(64, 64, { fit: "fill" }).raw().toBuffer({ resolveWithObject: true });
    const n = info.channels;
    let r = 0, g = 0, b = 0;
    for (let i = 0; i < n * 64 * 64; i += n) { r += data[i]; g += data[i + 1]; b += data[i + 2]; }
    const px = 64 * 64;
    r /= px; g /= px; b /= px;
    const warmth = (r - b) / 255;
    const brightness = (r + g + b) / 3 / 255;
    const sat = (Math.max(r, g, b) - Math.min(r, g, b)) / 255;
    if (brightness < 0.15 || brightness > 0.95) return null;
    return { value: warmth * 10 + sat * 1.5 - Math.abs(brightness - 0.55) * 2, warm: +warmth.toFixed(3), avg: [Math.round(r), Math.round(g), Math.round(b)] };
  } catch {
    return null;
  }
}

function relevance(slot, c) {
  const hay = `${c.title || ""}`.toLowerCase();
  let hits = 0;
  for (const k of slot.kw) if (hay.includes(k)) hits++;
  return hits;
}

async function harvest(slot) {
  console.log(`> ${slot.name}: ${slot.queries[0]}`);
  let best = null;
  for (const q of slot.queries) {
    if (best && best.sc.value > 5) break;
    const results = (await search(q)).filter(
      (x) => x.url && x.width >= 850 && x.width >= x.height * 0.85 && !usedUrls.has(x.url) && !BAD_TITLE.test(x.title || "") && (OK_LICENSES.test(x.license) || /cc[-\s]?by/i.test(x.license))
    );
    const pool = results
      .map((c) => ({ c, rel: relevance(slot, c) }))
      .filter((x) => x.rel > 0)
      .sort((a, b) => b.rel - a.rel)
      .slice(0, 8);
    for (const { c } of pool) {
      const buf = await tryDownload(c.url);
      if (!buf) continue;
      const sc = await score(buf);
      if (!sc) continue;
      const value = sc.value + relevance(slot, c) * 0.7;
      const cand = { buf, sc: { ...sc, value }, title: c.title, license: c.license, page: c.page, url: c.url };
      if (!best || cand.sc.value > best.sc.value) best = cand;
      if (best.sc.value > 5.5) break;
    }
    await sleep(1000);
  }
  if (!best) { console.log("  !! no candidate"); return null; }
  usedUrls.add(best.url);
  await sharp(best.buf).resize(slot.w, slot.h, { fit: "cover", position: "attention" }).webp({ quality: 82, effort: 4 }).toFile(path.join(OUT_DIR, `${slot.name}.webp`));
  console.log(`  ok warm=${best.sc.warm} score=${best.sc.value.toFixed(1)} | ${String(best.title).slice(0, 60)} [${best.license}]`);
  return { name: slot.name, title: best.title, creator: "Wikimedia Commons", license: best.license, page: best.page };
}

await mkdir(OUT_DIR, { recursive: true });
let manifest = [];
try { manifest = JSON.parse(await readFile(path.join(OUT_DIR, "credits.json"), "utf8")); } catch {}
const FRESH = process.argv.includes("fresh");
if (FRESH) {
  const skipTitles = new Set(manifest.map((m) => String(m.title || "").toLowerCase()));
  const origSearch = search;
  search = async (q) =>
    (await origSearch(q)).filter((x) => !skipTitles.has(String(x.title || "").toLowerCase()));
}
const only = process.argv[2] ? process.argv[2].split(",") : null;
const todo = only ? SLOTS.filter((s) => only.includes(s.name)) : SLOTS;
for (const slot of todo) {
  const m = await harvest(slot);
  if (m) {
    manifest = manifest.filter((x) => x.name !== m.name);
    manifest.push(m);
    await writeFile(path.join(OUT_DIR, "credits.json"), JSON.stringify(manifest, null, 2));
  }
  await sleep(800);
}
console.log(`\nDONE (${manifest.length} total in manifest)`);
