import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Products & Décor",
  "description": "Browse Boston Interior's curated collection of furniture and décor, sofas, chairs, tables, lighting and décor pieces. Made to order, add pieces to your inquiry list for pricing.",
  "openGraph": {
    "title": "Products & Décor · Boston Interior",
    "description": "Sofas, chairs, tables, lighting and décor, built to fit your space exactly.",
    "type": "website",
    "images": [
      "/images/furn-sofa.webp"
    ]
  }
};

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
        <p className="hero-sub mt-5" data-reveal>A curated collection of furniture, lighting and décor. Add any piece to your inquiry list and we will confirm pricing, finishes and lead time.</p>
      </div>
    </section>

     {/* ============ COLLECTION ============ */} 
    <section className="section">
      <div className="container-page">
        <p className="mb-10 rounded-lg border border-bronze/20 bg-bronze-50 px-5 py-3 text-sm text-espresso/75">
          <strong className="text-espresso">Display only.</strong> All pieces are made to order, no online payment. Add pieces to your inquiry list and send one message to ask about price, materials and delivery.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>

          <article className="group product-card" data-product-id="sabrah-lounge-sofa" data-product-name="Sabrah Lounge Sofa" data-product-meta="Solid mahogany frame · Premium linen upholstery · 220 × 95 × 80 cm" data-product-image="/images/furn-sofa.webp">
            <div className="card-media aspect-[4/3]">
              <img src="/images/furn-sofa.webp" alt="Sabrah lounge sofa" loading="lazy" width="1100" height="850" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl">Sabrah Lounge Sofa</h2>
                <p className="mt-1 text-sm text-espresso/70">Solid mahogany frame · Premium linen upholstery</p>
                <p className="text-sm text-espresso/70">220 × 95 × 80 cm</p>
              </div>
              <span className="tag">Seating</span>
            </div>
            <button className="btn-outline add-to-inquiry mt-4 w-full" type="button" aria-pressed="false">Add to Inquiry</button>
          </article>

          <article className="group product-card" data-product-id="zawadi-armchair" data-product-name="Zawadi Armchair" data-product-meta="Kiln dried hardwood · Bouclé fabric · 85 × 88 × 78 cm" data-product-image="/images/furn-chair.webp">
            <div className="card-media aspect-[4/3]">
              <img src="/images/furn-chair.webp" alt="Zawadi armchair" loading="lazy" width="1100" height="850" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl">Zawadi Armchair</h2>
                <p className="mt-1 text-sm text-espresso/70">Kiln dried hardwood · Bouclé fabric</p>
                <p className="text-sm text-espresso/70">85 × 88 × 78 cm</p>
              </div>
              <span className="tag">Seating</span>
            </div>
            <button className="btn-outline add-to-inquiry mt-4 w-full" type="button" aria-pressed="false">Add to Inquiry</button>
          </article>

          <article className="group product-card" data-product-id="amani-coffee-table" data-product-name="Amani Coffee Table" data-product-meta="Solid walnut · Natural oil finish · 110 × 60 × 42 cm" data-product-image="/images/furn-table.webp">
            <div className="card-media aspect-[4/3]">
              <img src="/images/furn-table.webp" alt="Amani coffee table" loading="lazy" width="1100" height="850" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl">Amani Coffee Table</h2>
                <p className="mt-1 text-sm text-espresso/70">Solid walnut · Natural oil finish</p>
                <p className="text-sm text-espresso/70">110 × 60 × 42 cm</p>
              </div>
              <span className="tag">Tables</span>
            </div>
            <button className="btn-outline add-to-inquiry mt-4 w-full" type="button" aria-pressed="false">Add to Inquiry</button>
          </article>

          <article className="group product-card" data-product-id="malaika-table-lamp" data-product-name="Malaika Table Lamp" data-product-meta="Brushed brass · Linen shade · Ø 30 × H 52 cm" data-product-image="/images/furn-lamp.webp">
            <div className="card-media aspect-[4/3]">
              <img src="/images/furn-lamp.webp" alt="Malaika table lamp" loading="lazy" width="1100" height="850" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl">Malaika Table Lamp</h2>
                <p className="mt-1 text-sm text-espresso/70">Brushed brass · Linen shade</p>
                <p className="text-sm text-espresso/70">Ø 30 × H 52 cm</p>
              </div>
              <span className="tag">Lighting</span>
            </div>
            <button className="btn-outline add-to-inquiry mt-4 w-full" type="button" aria-pressed="false">Add to Inquiry</button>
          </article>

          <article className="group product-card" data-product-id="ujamaa-bookshelf" data-product-name="Ujamaa Bookshelf" data-product-meta="Solid oak · Open back · 180 × 40 × 200 cm" data-product-image="/images/furn-shelf.webp">
            <div className="card-media aspect-[4/3]">
              <img src="/images/furn-shelf.webp" alt="Ujamaa bookshelf" loading="lazy" width="1100" height="850" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl">Ujamaa Bookshelf</h2>
                <p className="mt-1 text-sm text-espresso/70">Solid oak · Open back</p>
                <p className="text-sm text-espresso/70">180 × 40 × 200 cm</p>
              </div>
              <span className="tag">Storage</span>
            </div>
            <button className="btn-outline add-to-inquiry mt-4 w-full" type="button" aria-pressed="false">Add to Inquiry</button>
          </article>

          <article className="group product-card" data-product-id="upendo-ceramic-vase" data-product-name="Upendo Ceramic Vase" data-product-meta="Hand glazed stoneware · Ø 22 × H 35 cm" data-product-image="/images/furn-decor.webp">
            <div className="card-media aspect-[4/3]">
              <img src="/images/furn-decor.webp" alt="Upendo ceramic vase" loading="lazy" width="1100" height="850" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl">Upendo Ceramic Vase</h2>
                <p className="mt-1 text-sm text-espresso/70">Hand glazed stoneware</p>
                <p className="text-sm text-espresso/70">Ø 22 × H 35 cm</p>
              </div>
              <span className="tag">Décor</span>
            </div>
            <button className="btn-outline add-to-inquiry mt-4 w-full" type="button" aria-pressed="false">Add to Inquiry</button>
          </article>

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
            <a className="btn-ghost-light" href="https://wa.me/17708994600" target="_blank" rel="noopener">WhatsApp Us</a>
          </div>
        </div>
        <div className="card-media aspect-[4/3]">
          <img src="/images/furn-shelf.webp" alt="Custom shelving built by Boston Interior" loading="lazy" width="1100" height="850" />
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
            <p className="mt-1 text-sm text-espresso/80">Add pieces, then send us one enquiry.</p>
          </div>
          <button id="inquiry-close" type="button" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-espresso/15 text-espresso/80 transition hover:border-bronze hover:text-bronze" aria-label="Close inquiry list">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </header>
        <div className="inquiry-body">
          <ul id="inquiry-items" className="inquiry-items"></ul>
          <p id="inquiry-empty" className="inquiry-empty">Your list is empty. Tap “Add to Inquiry” on any piece below.</p>
          <form id="inquiry-form" className="inquiry-form" noValidate hidden>
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div className="field">
              <label className="field-label" htmlFor="inq-name">Full name *</label>
              <input className="field-input" id="inq-name" name="name" type="text" placeholder="Your name" autoComplete="name" />
            </div>
            <div className="field">
              <label className="field-label" htmlFor="inq-email">Email *</label>
              <input className="field-input" id="inq-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
            </div>
            <div className="field">
              <label className="field-label" htmlFor="inq-phone">Phone / WhatsApp *</label>
              <input className="field-input" id="inq-phone" name="phone" type="tel" placeholder="+255 655 743 141" autoComplete="tel" />
            </div>
            <div className="field">
              <label className="field-label" htmlFor="inq-message">Notes <span className="font-normal text-espresso/55">(optional)</span></label>
              <textarea className="field-input" id="inq-message" name="message" rows={3} data-lenis-prevent placeholder="Sizes, finishes or questions..."></textarea>
            </div>
            <input type="hidden" id="inq-items-field" name="items" />
            <button className="btn-primary w-full" type="submit">Submit Inquiry</button>
            <button id="inquiry-whatsapp" className="btn-outline w-full" type="button">Send via WhatsApp</button>
            <div id="inquiry-status" className="hidden rounded-lg p-3 text-sm"></div>
          </form>
        </div>
      </aside>
    </div>

  </main>
  );
}
