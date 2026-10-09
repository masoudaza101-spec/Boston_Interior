export interface Product {
  id: string;
  name: string;
  tag: string;
  wood: string;
  meta: string;
  dims: string;
  image: string;
  alt: string;
}

export const PRODUCT_CATALOG: Product[] = [
  {
    id: "sabrah-lounge-sofa",
    name: "Sabrah Lounge Sofa",
    tag: "Seating",
    wood: "Mahogany & Teak",
    meta: "Solid mahogany & teak frame · Premium linen upholstery",
    dims: "220 × 95 × 80 cm",
    image: "/images/furn-sofa.webp",
    alt: "Sabrah lounge sofa with a solid hardwood frame"
  },
  {
    id: "zawadi-armchair",
    name: "Zawadi Armchair",
    tag: "Seating",
    wood: "Beech & Ash",
    meta: "Steam-bent beech & ash · Bouclé fabric",
    dims: "85 × 88 × 78 cm",
    image: "/images/furn-chair.webp",
    alt: "Zawadi armchair in beech and ash hardwood"
  },
  {
    id: "amani-coffee-table",
    name: "Amani Coffee Table",
    tag: "Tables",
    wood: "Walnut",
    meta: "Solid walnut · Natural oil finish",
    dims: "110 × 60 × 42 cm",
    image: "/images/furn-table.webp",
    alt: "Amani coffee table in solid walnut"
  },
  {
    id: "malaika-table-lamp",
    name: "Malaika Table Lamp",
    tag: "Lighting",
    wood: "Maple",
    meta: "Turned maple base · Brushed brass · Linen shade",
    dims: "Ø 30 × H 52 cm",
    image: "/images/furn-lamp.webp",
    alt: "Malaika table lamp with a turned maple base"
  },
  {
    id: "ujamaa-bookshelf",
    name: "Ujamaa Bookshelf",
    tag: "Storage",
    wood: "Oak",
    meta: "Solid oak · Open back",
    dims: "180 × 40 × 200 cm",
    image: "/images/furn-shelf.webp",
    alt: "Ujamaa open-back bookshelf in solid oak"
  },
  {
    id: "upendo-ceramic-vase",
    name: "Upendo Ceramic Vase",
    tag: "Décor",
    wood: "Cedar",
    meta: "Hand glazed stoneware · Turned cedar plinth",
    dims: "Ø 22 × H 35 cm",
    image: "/images/furn-decor.webp",
    alt: "Upendo ceramic vase on a turned cedar plinth"
  },
  {
    id: "axis-modular-sofa",
    name: "Axis Modular Sofa",
    tag: "Seating",
    wood: "Walnut & Oak",
    meta: "Low-profile modular seating · Deep bouclé cushions · Reconfigurable",
    dims: "280 × 105 × 68 cm",
    image: "/images/axis-sofa.webp",
    alt: "Axis low-profile modular sofa in neutral bouclé fabric"
  },
  {
    id: "noma-lounge-chair",
    name: "Noma Sculptural Lounge Chair",
    tag: "Seating",
    wood: "Oak & Ash",
    meta: "Curved steam-bent frame · Slimline profile · Sculptural silhouette",
    dims: "78 × 82 × 74 cm",
    image: "/images/noma-chair.webp",
    alt: "Noma sculptural lounge chair with a curved hardwood frame"
  },
  {
    id: "zenith-nesting-tables",
    name: "Zenith Nesting Tables",
    tag: "Tables",
    wood: "Walnut",
    meta: "Set of three · FSC walnut · Matte oil finish · Space-saving",
    dims: "90 / 70 / 50 × 45 × 40 cm",
    image: "/images/zenith-table.webp",
    alt: "Zenith set of three modern nesting tables in walnut"
  },
  {
    id: "halo-floor-lamp",
    name: "Halo Arc Floor Lamp",
    tag: "Lighting",
    wood: "Maple & Brass",
    meta: "Brushed brass arc · Turned maple base · Dimmable warm LED",
    dims: "Ø 40 × H 175 cm",
    image: "/images/halo-lamp.webp",
    alt: "Halo arc floor lamp with a turned maple base and brass arm"
  },
  {
    id: "grid-open-shelving",
    name: "Grid Open Shelving",
    tag: "Storage",
    wood: "Oak",
    meta: "Modular open-frame shelving · Floating look · Expandable bays",
    dims: "200 × 35 × 210 cm",
    image: "/images/grid-shelf.webp",
    alt: "Grid modular open shelving unit in solid oak"
  },
  {
    id: "form-ceramic-set",
    name: "Form Ceramic Décor Set",
    tag: "Décor",
    wood: "Cedar",
    meta: "Matte stoneware trio · Turned cedar accents · Monochrome finish",
    dims: "Ø 14–24 × H 18–38 cm",
    image: "/images/form-decor.webp",
    alt: "Form modern ceramic décor set with cedar accents"
  }
];

export const PRODUCTS_BY_ID: Record<string, Product> = Object.fromEntries(
  PRODUCT_CATALOG.map((p) => [p.id, p])
);
