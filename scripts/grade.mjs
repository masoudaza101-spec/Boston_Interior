import sharp from "sharp";
import { mkdirSync, existsSync, readdirSync, copyFileSync, statSync } from "node:fs";
import path from "node:path";

const RAW_DIR = path.resolve("images-raw");
const OUT_DIR = path.resolve("public/images");
const BLEND = Number(process.env.BLEND ?? 0.72);

const SHADOW = [30, 26, 23]; // charcoal #1E1A17
const MID = [125, 92, 64]; // wood #7D5C40
const HIGH = [245, 241, 234]; // warm white #F5F1EA

const lerp = (a, b, t) => a + (b - a) * t;

function tritone(L) {
  if (L < 0.5) {
    const t = L / 0.5;
    return [lerp(SHADOW[0], MID[0], t), lerp(SHADOW[1], MID[1], t), lerp(SHADOW[2], MID[2], t)];
  }
  const t = (L - 0.5) / 0.5;
  return [lerp(MID[0], HIGH[0], t), lerp(MID[1], HIGH[1], t), lerp(MID[2], HIGH[2], t)];
}

function avg(buf, n) {
  let r = 0, g = 0, b = 0;
  const px = buf.length / n;
  for (let i = 0; i < buf.length; i += n) { r += buf[i]; g += buf[i + 1]; b += buf[i + 2]; }
  return [r / px, g / px, b / px].map((v) => Math.round(v));
}

async function gradeFile(name) {
  const src = path.join(RAW_DIR, name);
  const { data, info } = await sharp(src)
    .flatten({ background: "#ffffff" })
    .toColorspace("srgb")
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.allocUnsafe(data.length);
  const n = info.channels;
  for (let i = 0; i < data.length; i += n) {
    const L = (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) / 255;
    const [tr, tg, tb] = tritone(L);
    out[i] = data[i] + (tr - data[i]) * BLEND;
    out[i + 1] = data[i + 1] + (tg - data[i + 1]) * BLEND;
    out[i + 2] = data[i + 2] + (tb - data[i + 2]) * BLEND;
    if (n === 4) out[i + 3] = 255;
  }

  const before = avg(data, n);
  const after = avg(out, n);
  await sharp(out, { raw: { width: info.width, height: info.height, channels: 3 } })
    .webp({ quality: 82, effort: 4 })
    .toFile(path.join(OUT_DIR, name));
  return { name, before, after, size: statSync(path.join(OUT_DIR, name)).size };
}

mkdirSync(RAW_DIR, { recursive: true });
mkdirSync(OUT_DIR, { recursive: true });

const existingRaw = readdirSync(RAW_DIR).filter((f) => f.endsWith(".webp"));
if (existingRaw.length === 0) {
  for (const f of readdirSync(OUT_DIR)) {
    if (f.endsWith(".webp")) copyFileSync(path.join(OUT_DIR, f), path.join(RAW_DIR, f));
  }
  console.log(`backed up ${readdirSync(RAW_DIR).length} originals -> images-raw/`);
}

const files = readdirSync(RAW_DIR).filter((f) => f.endsWith(".webp"));
console.log(`grading ${files.length} images (blend ${BLEND}, charcoal/wood/white)\n`);
for (const f of files) {
  const r = await gradeFile(f);
  console.log(
    `${f.padEnd(22)} ${String(r.before.join(",")).padEnd(14)} -> ${String(r.after.join(",")).padEnd(14)} ${(r.size / 1024).toFixed(0)}KB`
  );
}
console.log("\nDONE - originals kept in images-raw/ (re-run anytime; tune with BLEND=0..1)");
