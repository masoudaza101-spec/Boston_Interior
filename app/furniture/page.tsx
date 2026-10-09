import type { Metadata } from "next";
import { PRODUCT_CATALOG } from "@/src/ts/products";

export const metadata: Metadata = {
  "title": "Products & Décor",
  "description": "Browse Boston Interior's curated collection of furniture and décor, sofas, chairs, tables, lighting and décor pieces. Made to order in oak, walnut, teak, maple, ash, cherry, mahogany, birch, cedar, beech and engineered wood.",
  "openGraph": {
    "title": "Products & Décor · Boston Interior",
    "description": "Sofas, chairs, tables, lighting and décor, built to fit your space exactly in mixed modern hardwoods.",
    "type": "website",
    "images": [
      "/images/furn-sofa.webp"
    ]
  }
};

const WOODS: { name: string; slug: string; note: string }[] = [
  { name: "Oak", slug: "oak", note: "Dense, pale and hard-wearing" },
  { name: "Walnut", slug: "walnut", note: "Rich chocolate grain" },
  { name: "Teak", slug: "teak", note: "Golden and weather resistant" },
  { name: "Maple", slug: "maple", note: "Fine, light and smooth" },
  { name: "Ash", slug: "ash", note: "Springy with bold figure" },
  { name: "Cherry", slug: "cherry", note: "Warm red-brown patina" },
  { name: "Mahogany", slug: "mahogany", note: "Deep and luxurious" },
  { name: "Birch", slug: "birch", note: "Pale and uniform" },
  { name: "Cedar", slug: "cedar", note: "Aromatic and stable" },
  { name: "Beech", slug: "beech", note: "Tough with close grain" },
  { name: "Engineered", slug: "engineered", note: "Stable, layered and sustainable" }
];

export default function FurniturePage() {
  return (
<main>

     {/* ============ PAGE HERO ============ */} 
    <section className="page-hero">
      <div className="page-hero-bg"><img src="/images/furn-sofa.webp" alt="" fetchPriority="high" /></div>
      <div className="container-page relative z-10">
        <nav aria-label="Breadcrumb" className="mb-5 text-xs uppercase tracking-[0.2em] text-white/65">
          <a href="/" className="transition hover:text-white">Home</a> / <span className="text-bronze-300">Products</span>
        </nav>
        <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-bronze-300" data-reveal><span className="h-px w-10 bg-bronze-300/60"></span>Products &amp; Décor</span>
        <h1 className="title-xl max-w-3xl text-white" data-reveal>Pieces made to live with</h1>
        <p className="hero-sub mt-5" data-reveal>A curated collection of furniture, lighting and décor in oak, walnut, teak, maple, ash, cherry, mahogany, birch, cedar and beech. Select the pieces you like, set quantities and send one combined enquiry.</p>
      </div>
    </section>

     {/* ============ COLLECTION ============ */} 
    <section className="section">
      <div className="container-page">
        <p className="mb-10 rounded-lg border border-bronze/20 bg-bronze-50 px-5 py-3 text-sm text-espresso/75">
          <strong className="text-espresso">Made to order.</strong> All pieces are built in mixed modern hardwoods and finished to your taste, no online payment. Choose the pieces and quantities you like, then send one message with your details.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>

          {PRODUCT_CATALOG.map((p) => (
            <article
              key={p.id}
              className="group product-card"
              data-product-id={p.id}
              data-product-name={p.name}
              data-product-wood={p.wood}
              data-product-meta={`${p.meta} · ${p.dims}`}
              data-product-image={p.image}
            >
              <div className="card-media aspect-[4/3]">
                <img src={p.image} alt={p.alt} loading="lazy" width="1100" height="850" />
                <span className="wood-badge">{p.wood}</span>
                <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl">{p.name}</h2>
                  <p className="mt-1 text-sm text-espresso/70">{p.meta}</p>
                  <p className="text-sm text-espresso/70">{p.dims}</p>
                </div>
                <span className="tag">{p.tag}</span>
              </div>
              <div className="mt-4 flex items-stretch gap-3">
                <div className="qty-stepper" role="group" aria-label={`Quantity for ${p.name}`}>
                  <button type="button" className="qty-btn" data-qty="-1" aria-label={`Decrease quantity for ${p.name}`}>−</button>
                  <input className="qty-input" type="number" min="1" max="99" defaultValue="1" inputMode="numeric" aria-label={`Quantity for ${p.name}`} />
                  <button type="button" className="qty-btn" data-qty="1" aria-label={`Increase quantity for ${p.name}`}>+</button>
                </div>
                <button className="btn-outline add-to-inquiry flex-1 px-4" type="button" aria-pressed="false">Add to Inquiry</button>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>

     {/* ============ WOOD MATERIALS ============ */} 
    <section className="section bg-cream-light">
      <div className="container-page">
        <div className="grid items-end gap-8 lg:grid-cols-2" data-reveal-stagger>
          <div>
            <span className="eyebrow" data-reveal>Wood &amp; Materials</span>
            <h2 className="title-lg max-w-xl text-balance" data-reveal>Real designs, crafted from every wood</h2>
          </div>
          <div className="lg:pb-2">
            <p className="lead" data-reveal>
              A product designed and made from each of our eleven woods, mixing species for contrast,
              grain and warmth. Every piece can be built in the material, tone and finish that suits your space.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5" data-reveal-stagger>
          {WOODS.map((w, i) => (
            <figure
              key={w.slug}
              className={`group material-card overflow-hidden rounded-xl border border-espresso/10 bg-white ${i === WOODS.length - 1 ? "col-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden ${i === WOODS.length - 1 ? "aspect-[40/21] sm:aspect-[16/9]" : "aspect-[4/3]"}`}>
                <img
                  src={`/images/mat-${w.slug}.webp`}
                  alt={`${w.name} product design made by Boston Interior`}
                  loading="lazy"
                  width="1000"
                  height="750"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="material-glare" aria-hidden="true"></span>
              </div>
              <figcaption className="flex items-baseline justify-between gap-2 px-4 py-3">
                <span className="text-sm font-semibold text-espresso">{w.name}</span>
                <span className="text-right text-xs text-espresso/65">{w.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

     {/* ============ CUSTOM BAND ============ */} 
    <section className="section bg-bronze text-white">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-20" data-reveal-stagger>
        <div>
          <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/85" data-reveal><span className="h-px w-10 bg-white/50"></span>Custom Made</span>
          <h2 className="title-lg text-white" data-reveal>Need something built to fit?</h2>
          <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
            Every piece in our collection can be made in your size, fabric and finish, or we can design
            something completely new for your room. Share your measurements and we will send a quote.
          </p>
          <div className="mt-8 flex flex-wrap gap-4" data-reveal>
            <a className="btn-light" href="/contact?service=Furniture">Request a Quote</a>
            <a className="btn-ghost-light" href="https://wa.me/17708994600" target="_blank" rel="noopener">WhatsApp Us (optional)</a>
          </div>
        </div>
        <div className="card-media aspect-[4/3]">
          <img src="/images/furn-shelf.webp" alt="Custom oak shelving built by Boston Interior" loading="lazy" width="1100" height="850" />
        </div>
      </div>
    </section>

     {/* ============ INQUIRY CART ============ */}
    <button id="inquiry-toggle" className="inquiry-toggle" type="button" aria-label="Open inquiry list" aria-controls="inquiry-drawer" aria-expanded="false">
      <span id="inquiry-count" className="inquiry-count" hidden>0</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
    </button>

    <div id="inquiry-drawer" className="inquiry-drawer" aria-hidden="true">
      <div id="inquiry-backdrop" className="inquiry-backdrop"></div>
      <aside className="inquiry-panel" role="dialog" aria-modal="true" aria-labelledby="inquiry-title" data-lenis-prevent>
        <header className="flex items-start justify-between gap-4 border-b border-espresso/10 p-5">
          <div>
            <h2 id="inquiry-title" className="text-xl">Your Inquiry List</h2>
            <p className="mt-1 text-sm text-espresso/80">Pick pieces and quantities, then send us one enquiry.</p>
          </div>
          <button id="inquiry-close" type="button" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-espresso/15 text-espresso/80 transition hover:border-bronze hover:text-bronze" aria-label="Close inquiry list">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </header>
        <div className="inquiry-body">
          <ul id="inquiry-items" className="inquiry-items"></ul>
          <p id="inquiry-empty" className="inquiry-empty">Your list is empty. Choose a quantity and tap “Add to Inquiry” on any piece.</p>
          <div id="inquiry-summary" className="inquiry-summary" hidden>
            <div className="inquiry-total">
              <span>Total pieces</span>
              <strong id="inquiry-total">0</strong>
            </div>
            <a className="btn-primary w-full" href="/contact">Continue to Contact Us</a>
            <button id="inquiry-whatsapp" className="btn-outline w-full" type="button">Send via WhatsApp</button>
            <p className="inquiry-note">WhatsApp is optional. You can also submit these products through the Contact Us form.</p>
          </div>
        </div>
      </aside>
    </div>

  </main>
  );
}
