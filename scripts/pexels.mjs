import sharp from "sharp";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const OUT_DIR = path.resolve("public/images");
const RAW_DIR = path.resolve("images-raw");

const CDN = (id, w = 2000) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// slot -> { id, w, h, title, creator, page }
const PLAN = {
  "hero-1": [1669799, 1920, 1200, "Stylish minimalist living room with warm lighting", "Vecislavas Popa"],
  "hero-2": [7546645, 1920, 1200, "Bright modern living room with natural light", "Max Vakhtbovycn"],
  about: [6583358, 1200, 900, "Interior material and colour samples", "Anete Lusina"],
  "svc-renovation": [39383505, 1200, 900, "Renovated modern kitchen with dark cabinetry", "Furkan Sener"],
  "svc-render": [32791637, 1200, 900, "3D visualisation of a modern living room", "Nguyen Nguyen"],
  "svc-commercial": [3782317, 1200, 900, "Stylish commercial office interior", "Pixabay"],
  "svc-furniture": [6446306, 1200, 900, "Modern room showing bespoke wood furniture", "Erik Mclean"],
  "svc-planning": [31234945, 1200, 900, "Modern open concept living and dining room", "Nanthakumar S"],
  "svc-residential": [8135502, 1200, 900, "Bright luxury residential bedroom", "Zakhar Vozhdaienko"],
  "testi-bg": [27059630, 1920, 1200, "Elegant minimalist living room with warm lighting", "Wilcle Nunes"],
  "proj-living": [4498873, 1400, 1000, "Calming minimalist living room with wooden cabinet", "Antoni Shkraba"],
  "proj-living-2": [6587824, 1400, 1000, "Minimalist modern living room with a comfy couch", "Max Vakhtbovycn"],
  "proj-bedroom": [28456462, 1400, 1000, "Modern minimalist bedroom", "Zakhar Vozhdaienko"],
  "proj-bedroom-2": [26556326, 1400, 1000, "Luxury contemporary bedroom", "Nguyen Nguyen"],
  "proj-kitchen": [29252559, 1400, 1000, "Modern minimalist kitchen", "Erik Mclean"],
  "proj-kitchen-2": [18285887, 1400, 1000, "Luxury kitchen with dark wood cabinets and marble", "Pixabay"],
  "proj-office": [8082224, 1400, 1000, "Modern home office workspace", "Bence Balla-Schottner"],
  "proj-office-2": [20588687, 1400, 1000, "Minimalist home office desk", "Emma Dau"],
  "proj-dining": [12715504, 1400, 1000, "Modern dining table and chairs", "Jean van der Meulen"],
  "proj-dining-2": [35057475, 1400, 1000, "Elegant modern dining room", "Mark Chan"],
  "proj-bathroom": [7587869, 1400, 1000, "Marble bathroom with premium finishes", "Pixabay"],
  "proj-bathroom-2": [33599113, 1400, 1000, "Luxurious modern marble bathroom", "Jaroslav Beznoska"],
  "proj-outdoor": [5490376, 1400, 1000, "Wooden table on an outdoor terrace", "Pixabay"],
  "proj-outdoor-2": [8680943, 1400, 1000, "Garden patio lounge furniture", "Pixabay"],
  "furn-sofa": [16825059, 1100, 850, "Modern grey sofa in sunlit room", "Pixabay"],
  "furn-chair": [6198655, 1100, 850, "Stylish armchair in a modern living room", "Max Vakhtbovycn"],
  "furn-table": [27164980, 1100, 850, "Wooden coffee table in a living space", "Mark Chan"],
  "furn-lamp": [12155608, 1100, 850, "Floor lamp beside modern furniture", "Pixabay"],
  "furn-shelf": [7195289, 1100, 850, "Wooden shelving and bookcase", "Max Vakhtbovycn"],
  "furn-decor": [7404957, 1100, 850, "Ceramic vase decor on wooden table", "Yaroslav Shuraev"],
};

mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(RAW_DIR, { recursive: true });

const credits = [];
let ok = 0;
const failed = [];

for (const [name, [id, w, h, title, creator]] of Object.entries(PLAN)) {
  const url = CDN(id, Math.max(w, 2000));
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const input = Buffer.from(await res.arrayBuffer());
    const buf = await sharp(input)
      .resize(w, h, { fit: "cover", position: "center" })
      .webp({ quality: 82, effort: 4 })
      .toBuffer();
    writeFileSync(path.join(OUT_DIR, `${name}.webp`), buf);
    writeFileSync(path.join(RAW_DIR, `${name}.webp`), buf);
    credits.push({
      name,
      title,
      creator,
      license: "Pexels License",
      page: `https://www.pexels.com/photo/${id}/`,
    });
    ok++;
    console.log(`ok   ${name.padEnd(18)} ${String(id).padEnd(9)} ${(buf.length / 1024).toFixed(0)}KB`);
  } catch (e) {
    failed.push(`${name} (${id}): ${e.message}`);
    console.log(`FAIL ${name.padEnd(18)} ${id}  ${e.message}`);
  }
}

credits.sort((a, b) => a.name.localeCompare(b.name));
writeFileSync(
  path.join(OUT_DIR, "credits.json"),
  JSON.stringify(credits, null, 2) + "\n"
);

console.log(`\n${ok}/${Object.keys(PLAN).length} images written`);
if (failed.length) console.log("failed:\n" + failed.join("\n"));
