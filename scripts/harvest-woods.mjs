import sharp from "sharp";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.resolve("public/images");
const RAW_DIR = path.resolve("images-raw");
const UA = { "User-Agent": "BostonInteriorSiteBuilder/1.0 (site build)" };

/* ---------- 11 wood materials (Wikimedia Commons, prefer diffuse/albedo maps) ---------- */
const WOODS = [
  { name: "wood-oak", queries: ["oak wood texture", "oak wood planks texture", "oak timber grain"] },
  { name: "wood-walnut", queries: ["walnut wood texture", "walnut veneer texture", "walnut timber grain"] },
  { name: "wood-teak", queries: ["teak wood texture", "teak veneer texture", "teak timber grain"] },
  { name: "wood-maple", queries: ["maple wood texture", "maple lumber grain", "maple timber board"] },
  { name: "wood-ash", queries: ["ash wood texture board", "ash timber grain", "ash lumber plank"] },
  { name: "wood-cherry", queries: ["cherry wood texture", "cherry veneer texture", "cherry timber grain"] },
  { name: "wood-mahogany", queries: ["mahogany wood texture", "mahogany veneer texture", "mahogany timber grain"] },
  { name: "wood-birch", queries: ["birch wood texture", "birch plywood texture", "birch timber grain"] },
  { name: "wood-cedar", queries: ["cedar wood texture", "cedar wood planks", "cedar timber grain"] },
  { name: "wood-beech", queries: ["beech wood texture", "beech timber board", "beech lumber grain"] },
  { name: "wood-engineered", queries: ["engineered wood flooring", "plywood texture", "laminated wood board"] },
];

/* ---------- product & material photos (Pexels CDN, clean modern designs) ---------- */
const PRODUCTS = [
  { name: "furn-sofa", pexels: 31737838 },
  { name: "furn-chair", pexels: 11507952 },
  { name: "furn-table", pexels: 15602699 },
  { name: "furn-lamp", pexels: 32168984 },
  { name: "furn-shelf", pexels: 36883416 },
  { name: "furn-decor", pexels: 7000100 },
  { name: "axis-sofa", pexels: 37252552 },
  { name: "noma-chair", pexels: 18688394 },
  { name: "zenith-table", pexels: 38369494 },
  { name: "halo-lamp", pexels: 32684360 },
  { name: "grid-shelf", pexels: 7993285 },
  { name: "form-decor", pexels: 31846007 },
  { name: "mat-oak", pexels: 35378675 },
  { name: "mat-walnut", pexels: 12277013 },
  { name: "mat-teak", pexels: 34125692 },
  { name: "mat-maple", pexels: 36718705 },
  { name: "mat-ash", pexels: 36854079 },
  { name: "mat-cherry", pexels: 30037656 },
  { name: "mat-mahogany", pexels: 189333 },
  { name: "mat-birch", pexels: 7195588 },
  { name: "mat-cedar", pexels: 4440116 },
  { name: "mat-beech", pexels: 34995610 },
  { name: "mat-engineered", pexels: 38083081 },
];

const OK_LICENSES = /^(cc0|public domain|pd-?|no restrictions|cc by)/i;
const BAD_TITLE =
  /(postcard|museum|musée|musee|archive|18\d{2}|19\d{2}|antique|century|stamp|painting|drawing|etching|engraving|lithograph|sculpt|statue|manuscript|heritage|coat of arms|logo|icon|silhouette|map of|klimt|portrait|diagram|chart|ca\. \d)/i;
const MAP_TOKENS = /\b(arm|nor|nor_?gl|normal|rough|roughness|disp|displacement|specular|spec|gloss|metallic|metal|height|bump|opacity|mask|ao|exr)\b/i;
const DIFF_TOKENS = /\b(diff|diffuse|albedo|color|colour)\b/i;
const WOOD_TOKENS = ["wood", "timber", "plank", "board", "grain", "lumber", "veneer", "parquet", "plywood", "floorboard", "flooring"];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const usedUrls = new Set();

async function fetchT(url, opts = {}, ms = 20000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { ...opts, signal: ctrl.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function search(q) {
  const url =
    "https://commons.wikimedia.org/w/api.php?action=query&generator=search" +
    `&gsrsearch=${encodeURIComponent("filetype:bitmap " + q)}` +
    "&gsrlimit=30&gsrnamespace=6&prop=imageinfo&iiprop=url%7Csize%7Cextmetadata&iiurlwidth=2000&format=json";
  for (let i = 0; i < 4; i++) {
    try {
      const res = await fetchT(url, { headers: { Accept: "application/json", ...UA } });
      if (res.status === 429) { await sleep(8000 * (i + 1)); continue; }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const j = await res.json();
      const pages = j.query?.pages || {};
      return Object.values(pages).map((p) => {
        const ii = p.imageinfo?.[0] || {};
        return {
          title: p.title?.replace(/^File:/, ""),
          url: ii.thumburl,
          width: ii.thumbwidth || ii.width,
          height: ii.thumbheight || ii.height,
          page: `https://commons.wikimedia.org/wiki/${encodeURIComponent(p.title || "")}`,
          license: ii.extmetadata?.LicenseShortName?.value || ""
        };
      });
    } catch (e) {
      console.log(`  search retry ${i + 1}: ${e.message}`);
      await sleep(3000 * (i + 1));
    }
  }
  return [];
}

async function tryDownload(url) {
  try {
    const res = await fetchT(url, { headers: UA }, 25000);
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 25000) return null;
    return buf;
  } catch {
    return null;
  }
}

async function analyze(buf) {
  try {
    const meta = await sharp(buf).metadata();
    if (!meta.width || !meta.height) return null;
    const { data, info } = await sharp(buf)
      .resize(64, 64, { fit: "fill" })
      .raw()
      .toBuffer({ resolveWithObject: true });
    const n = info.channels;
    const px = 64 * 64;
    let r = 0, g = 0, b = 0, blown = 0, dark = 0;
    for (let i = 0; i < n * px; i += n) {
      const R = data[i], G = data[i + 1], B = data[i + 2];
      r += R; g += G; b += B;
      const lum = (0.2126 * R + 0.7152 * G + 0.0722 * B) / 255;
      if (lum > 0.95) blown++;
      if (lum < 0.05) dark++;
    }
    r /= px; g /= px; b /= px;
    const warmth = (r - b) / 255;
    const brightness = (r + g + b) / 3 / 255;
    const sat = (Math.max(r, g, b) - Math.min(r, g, b)) / 255;
    if (blown / px > 0.3) return null;
    if (dark / px > 0.6) return null;
    if (brightness < 0.18 || brightness > 0.88) return null;
    if (sat > 0.62) return null;
    if (warmth > 0.5 || warmth < -0.05) return null;
    return {
      warm: +warmth.toFixed(3), sat: +sat.toFixed(3), brightness: +brightness.toFixed(3),
      value: warmth * 8 + sat * 1.5 - Math.abs(brightness - 0.5) * 2.2,
      avg: [Math.round(r), Math.round(g), Math.round(b)]
    };
  } catch {
    return null;
  }
}

function woodRelevance(title) {
  const hay = title.toLowerCase();
  let hits = 0;
  for (const k of WOOD_TOKENS) if (hay.includes(k)) hits += 2;
  if (DIFF_TOKENS.test(title)) hits += 4;
  return hits;
}

async function harvestWood(slot) {
  console.log(`> ${slot.name}`);
  let best = null;
  for (const q of slot.queries) {
    if (best && best.sc.value > 7) break;
    const species = slot.name.replace("wood-", "");
    const results = (await search(q)).filter(
      (x) => x.url && x.width >= 800 && x.width >= x.height * 0.8 && !usedUrls.has(x.url) &&
        !BAD_TITLE.test(x.title || "") && !MAP_TOKENS.test(x.title || "") && OK_LICENSES.test(x.license || "")
    );
    const pool = results
      .map((c) => ({ c, rel: woodRelevance(c.title || "") + (String(c.title).toLowerCase().includes(species) ? 3 : 0) }))
      .filter((x) => x.rel >= 4)
      .sort((a, b) => b.rel - a.rel)
      .slice(0, 10);
    for (const { c } of pool) {
      const buf = await tryDownload(c.url);
      if (!buf) continue;
      const sc = await analyze(buf);
      if (!sc) continue;
      const value = sc.value + (woodRelevance(c.title || "") + (String(c.title).toLowerCase().includes(species) ? 3 : 0)) * 0.5;
      if (!best || value > best.sc.value) best = { buf, sc: { ...sc, value }, title: c.title, license: c.license, page: c.page, url: c.url };
      if (best.sc.value > 8) break;
    }
    await sleep(1200);
  }
  if (!best) { console.log("  !! no candidate"); return null; }
  usedUrls.add(best.url);
  const out = await sharp(best.buf).resize(1000, 750, { fit: "cover", position: "attention" }).webp({ quality: 82, effort: 4 }).toBuffer();
  await writeFile(path.join(OUT_DIR, `${slot.name}.webp`), out);
  await writeFile(path.join(RAW_DIR, `${slot.name}.webp`), out);
  console.log(`  ok warm=${best.sc.warm} sat=${best.sc.sat} score=${best.sc.value.toFixed(1)} avg=${best.sc.avg.join(",")} | ${String(best.title).slice(0, 55)} [${best.license}]`);
  return { name: slot.name, title: best.title, creator: "Wikimedia Commons", license: best.license, page: best.page };
}

async function harvestProduct(slot) {
  console.log(`> ${slot.name} (pexels ${slot.pexels})`);
  const url = `https://images.pexels.com/photos/${slot.pexels}/pexels-photo-${slot.pexels}.jpeg?auto=compress&cs=tinysrgb&w=2200`;
  const buf = await tryDownload(url);
  if (!buf) { console.log("  !! download failed"); return null; }
  const out = await sharp(buf).resize(1100, 850, { fit: "cover", position: "attention" }).webp({ quality: 82, effort: 4 }).toBuffer();
  await writeFile(path.join(OUT_DIR, `${slot.name}.webp`), out);
  await writeFile(path.join(RAW_DIR, `${slot.name}.webp`), out);
  console.log(`  ok ${(out.length / 1024).toFixed(0)}KB`);
  return { name: slot.name, title: `${slot.name} product photo`, creator: "Pexels", license: "Pexels License", page: `https://www.pexels.com/photo/${slot.pexels}/` };
}

await mkdir(OUT_DIR, { recursive: true });
await mkdir(RAW_DIR, { recursive: true });

let manifest = [];
try { manifest = JSON.parse(await readFile(path.join(OUT_DIR, "credits.json"), "utf8")); } catch {}

const only = process.argv[2] ? process.argv[2].split(",") : null;
const todoWoods = WOODS.filter((s) => !only || only.includes(s.name));
const todoProducts = PRODUCTS.filter((s) => !only || only.includes(s.name));

let ok = 0;
for (const slot of todoWoods) {
  const m = await harvestWood(slot);
  if (m) { ok++; manifest = manifest.filter((x) => x.name !== m.name); manifest.push(m); await writeFile(path.join(OUT_DIR, "credits.json"), JSON.stringify(manifest, null, 2) + "\n"); }
  await sleep(700);
}
for (const slot of todoProducts) {
  const m = await harvestProduct(slot);
  if (m) { ok++; manifest = manifest.filter((x) => x.name !== m.name); manifest.push(m); await writeFile(path.join(OUT_DIR, "credits.json"), JSON.stringify(manifest, null, 2) + "\n"); }
  await sleep(500);
}
console.log(`\nDONE ${ok}/${todoWoods.length + todoProducts.length} slots written (${manifest.length} total in manifest)`);
