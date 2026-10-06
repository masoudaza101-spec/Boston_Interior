import sharp from "sharp";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.resolve("public/images");
const UA = { "User-Agent": "BostonInteriorSiteBuilder/1.0" };

const SLOTS = [
  { name: "hero-1", q: "modern living room interior design", alts: ["living room interior warm"], kw: ["living", "room", "interior"], w: 1920, h: 1080 },
  { name: "hero-2", q: "cozy living room sofa wood interior", alts: ["loft interior furniture"], kw: ["living", "interior", "loft", "room"], w: 1920, h: 1080 },
  { name: "about", q: "interior design mood board samples", alts: ["fabric swatches color samples", "paint color samples", "interior designer working"], kw: ["design", "sample", "color", "fabric", "mood", "swatch", "interior"], w: 1200, h: 900 },
  { name: "svc-furniture", q: "living room furniture sofa arrangement", alts: ["furniture showroom sofa", "elegant living room furniture"], kw: ["furniture", "sofa", "living", "room", "interior"], w: 1200, h: 900 },
  { name: "svc-concept", q: "architect drawing blueprint desk", alts: ["floor plan drawing architecture", "sketch interior design drawing"], kw: ["plan", "draw", "blueprint", "sketch", "architect", "design"], w: 1200, h: 900 },
  { name: "svc-renovation", q: "home renovation interior painting", alts: ["renovation room construction", "painting wall room"], kw: ["renovation", "paint", "construction", "room", "home"], w: 1200, h: 900 },
  { name: "svc-render", q: "modern apartment interior 3d", alts: ["modern interior render visualization", "contemporary interior design"], kw: ["apartment", "interior", "modern", "render", "design"], w: 1200, h: 900 },
  { name: "svc-residential", q: "bedroom interior design home", alts: ["cozy bedroom interior", "bedroom home decor"], kw: ["bedroom", "interior", "home", "bed"], w: 1200, h: 900 },
  { name: "svc-commercial", q: "office lounge interior design", alts: ["office interior workspace", "coworking lounge interior"], kw: ["office", "lounge", "interior", "workspace", "coworking"], w: 1200, h: 900 },
  { name: "testi-bg", q: "cozy home interior wood warm", alts: ["home interior background room", "wooden interior room"], kw: ["home", "interior", "room", "wood", "cozy"], w: 1920, h: 1080 },
  { name: "proj-living", q: "scandinavian living room interior", alts: ["minimalist living room", "white living room sofa"], kw: ["living", "room", "interior", "scandinavian", "minimalist"], w: 1400, h: 1000 },
  { name: "proj-living-2", q: "apartment lounge interior window", alts: ["lounge interior sofa window", "modern living area interior"], kw: ["lounge", "living", "interior", "apartment", "room"], w: 1400, h: 1000 },
  { name: "proj-bedroom", q: "modern bedroom interior design", alts: ["bedroom interior bed design", "luxury bedroom interior"], kw: ["bedroom", "bed", "interior"], w: 1400, h: 1000 },
  { name: "proj-bedroom-2", q: "bedroom interior night lamp", alts: ["bedroom home hotel interior"], kw: ["bedroom", "bed", "interior", "lamp"], w: 1400, h: 1000 },
  { name: "proj-kitchen", q: "modern kitchen interior wood", alts: ["kitchen cabinets interior", "kitchen design home"], kw: ["kitchen", "interior"], w: 1400, h: 1000 },
  { name: "proj-kitchen-2", q: "kitchen interior countertop", alts: ["kitchen cooking interior home"], kw: ["kitchen", "countertop", "interior"], w: 1400, h: 1000 },
  { name: "proj-office", q: "home office study room desk", alts: ["study room desk interior", "office desk workspace home"], kw: ["office", "desk", "study", "workspace"], w: 1400, h: 1000 },
  { name: "proj-office-2", q: "workspace interior bookshelf desk", alts: ["office interior design room", "work space room interior"], kw: ["workspace", "office", "desk", "bookshelf", "interior"], w: 1400, h: 1000 },
  { name: "proj-dining", q: "dining room table interior home", alts: ["dining table chairs interior"], kw: ["dining", "table", "interior"], w: 1400, h: 1000 },
  { name: "proj-dining-2", q: "dining area chairs interior", alts: ["restaurant table interior design"], kw: ["dining", "chair", "table", "interior"], w: 1400, h: 1000 },
  { name: "proj-bathroom", q: "bathroom interior marble design", alts: ["bathroom interior modern design"], kw: ["bathroom", "marble", "interior"], w: 1400, h: 1000 },
  { name: "proj-bathroom-2", q: "modern bathroom sink mirror", alts: ["bathroom interior home design"], kw: ["bathroom", "sink", "mirror", "interior"], w: 1400, h: 1000 },
  { name: "proj-outdoor", q: "patio terrace outdoor furniture", alts: ["garden patio furniture", "balcony terrace seating"], kw: ["patio", "terrace", "outdoor", "garden", "balcony", "furniture"], w: 1400, h: 1000 },
  { name: "proj-outdoor-2", q: "garden seating outdoor lounge", alts: ["backyard patio chairs", "outdoor table garden"], kw: ["garden", "outdoor", "seating", "patio", "lounge"], w: 1400, h: 1000 },
  { name: "furn-sofa", q: "sofa couch living room furniture", alts: ["couch furniture interior"], kw: ["sofa", "couch", "furniture", "living"], w: 1100, h: 850 },
  { name: "furn-chair", q: "armchair lounge chair interior", alts: ["chair furniture design"], kw: ["chair", "armchair", "furniture", "lounge"], w: 1100, h: 850 },
  { name: "furn-table", q: "wood coffee table furniture", alts: ["wooden table furniture interior"], kw: ["table", "furniture", "wood"], w: 1100, h: 850 },
  { name: "furn-lamp", q: "table lamp warm light decor", alts: ["floor lamp interior light"], kw: ["lamp", "light", "decor"], w: 1100, h: 850 },
  { name: "furn-shelf", q: "wooden bookshelf decor shelf", alts: ["bookshelf books shelf interior", "storage shelf furniture"], kw: ["shelf", "bookshelf", "book", "storage", "furniture"], w: 1100, h: 850 },
  { name: "furn-decor", q: "vase flowers decoration table", alts: ["decorative vase interior decor"], kw: ["vase", "flower", "decor", "decoration"], w: 1100, h: 850 }
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const usedUrls = new Set();

const STRICT = process.argv.includes("strict");
const BAD_TITLE =
  /(postcard|museum|archive|18\d{2}|19\d{2}|antique|century|stamp|painting|drawing|etching|engraving|lithograph|sculpt|statue|manuscript|heritage|national park|\bMET\b|klimt|ca\. \d)/i;

const keep = (x) =>
  x.width &&
  x.height &&
  x.width >= 850 &&
  x.width >= x.height * 0.9 &&
  !usedUrls.has(x.url) &&
  !BAD_TITLE.test(x.title || "");

async function search(q, extra = "") {
  const url = `https://api.openverse.org/v1/images/?q=${encodeURIComponent(
    q
  )}&page_size=20&license=cc0,pdm&mature=false${extra}`;
  for (let i = 0; i < 6; i++) {
    try {
      const res = await fetch(url, { headers: { Accept: "application/json", ...UA } });
      if (res.status === 403 || res.status === 429) {
        const wait = 45000 * (i + 1);
        console.log(`  rate-limited (${res.status}), waiting ${wait / 1000}s...`);
        await sleep(wait);
        continue;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const j = await res.json();
      return j.results || [];
    } catch (e) {
      console.log(`  search retry ${i + 1}: ${e.message}`);
      await sleep(5000);
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

async function upgradeUrl(u) {
  if (/staticflickr\.com\/.*_[a-z0-9]+_b\.jpg$/.test(u)) {
    const h = u.replace(/_b\.jpg$/, "_h.jpg");
    const head = await fetch(h, { method: "HEAD", headers: UA }).catch(() => null);
    if (head && head.ok) return h;
  }
  return u;
}

async function score(buf) {
  try {
    const s = sharp(buf);
    const meta = await s.metadata();
    if (!meta.width || !meta.height) return null;
    const { data, info } = await s
      .clone()
      .resize(64, 64, { fit: "fill" })
      .raw()
      .toBuffer({ resolveWithObject: true });
    const n = info.channels;
    let r = 0, g = 0, b = 0;
    for (let i = 0; i < n * 64 * 64; i += n) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
    }
    const px = 64 * 64;
    r /= px; g /= px; b /= px;
    const warmth = (r - b) / 255;
    const brightness = (r + g + b) / 3 / 255;
    const sat = (Math.max(r, g, b) - Math.min(r, g, b)) / 255;
    if (brightness < 0.15 || brightness > 0.95) return null;
    const value = warmth * 10 + sat * 1.5 - Math.abs(brightness - 0.55) * 2;
    return { value, warm: +warmth.toFixed(3), avg: [Math.round(r), Math.round(g), Math.round(b)] };
  } catch {
    return null;
  }
}

function relevance(slot, c) {
  const hay = `${c.title || ""} ${(c.tags || []).map((t) => t.name).join(" ")}`.toLowerCase();
  let hits = 0;
  for (const k of slot.kw) if (hay.includes(k)) hits++;
  return hits;
}

async function harvest(slot) {
  console.log(`> ${slot.name}: "${slot.q}"`);
  const queries = [slot.q, ...(slot.alts || [])];
  let best = null;
  for (const q of queries) {
    if (best) break;
    const modern = await search(q, "&source=rawpixel,stocksnap");
    let results = modern.filter(keep);
    if (results.length === 0 && !STRICT) {
      const general = await search(q);
      results = general.filter(keep);
      await sleep(800);
    }
    const withRel = results
      .map((c) => ({ c, rel: relevance(slot, c) }))
      .filter((x) => x.rel > 0);
    const pool = [...withRel, ...results.filter((c) => relevance(slot, c) === 0).map((c) => ({ c, rel: 0 }))]
      .sort((a, b) => b.rel - a.rel)
      .slice(0, 10);
    for (const { c } of pool) {
      const url = await upgradeUrl(c.url);
      const buf = await tryDownload(url);
      if (!buf) continue;
      const sc = await score(buf);
      if (!sc) continue;
      const value = sc.value + relevance(slot, c) * 0.7;
      const cand = { buf, sc: { ...sc, value }, title: c.title, creator: c.creator, license: c.license, src: c.foreign_landing_url, url };
      if (!best || cand.sc.value > best.sc.value) best = cand;
      if (best.sc.value > 6.5) break;
    }
    if (!best) await sleep(1000);
  }
  if (!best) {
    console.log(`  !! no usable candidate`);
    return null;
  }
  usedUrls.add(best.url);
  const out = path.join(OUT_DIR, `${slot.name}.webp`);
  await sharp(best.buf)
    .resize(slot.w, slot.h, { fit: "cover", position: "attention" })
    .webp({ quality: 82, effort: 4 })
    .toFile(out);
  console.log(`  ok warm=${best.sc.warm} score=${best.sc.value.toFixed(1)} avg=${best.sc.avg.join(",")} | ${String(best.title).slice(0, 60)}`);
  return { name: slot.name, title: best.title, creator: best.creator, license: best.license, page: best.src };
}

await mkdir(OUT_DIR, { recursive: true });

let manifest = [];
try {
  manifest = JSON.parse(await readFile(path.join(OUT_DIR, "credits.json"), "utf8"));
} catch {}
const only = process.argv[2] ? process.argv[2].split(",") : null;
const todo = only ? SLOTS.filter((s) => only.includes(s.name)) : SLOTS;
console.log(`Harvesting ${todo.length} slots (modern stock preferred)`);

for (const slot of todo) {
  const m = await harvest(slot);
  if (m) {
    manifest = manifest.filter((x) => x.name !== m.name);
    manifest.push(m);
    await writeFile(path.join(OUT_DIR, "credits.json"), JSON.stringify(manifest, null, 2));
  }
  await sleep(2000);
}
console.log(`\nDONE: ${manifest.length}/${SLOTS.length} images -> public/images/`);
