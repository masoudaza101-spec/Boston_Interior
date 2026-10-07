import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Furniture & Décor",
  "description": "Browse Boston Interior's furniture and décor collection, sofas, chairs, tables, lighting and décor pieces. Made to order, inquire for pricing.",
  "openGraph": {
    "title": "Furniture & Décor · Boston Interior",
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
        <nav aria-label="Breadcrumb" className="mb-5 text-xs uppercase tracking-[0.2em] text-white/50">
          <a href="/" className="transition hover:text-white">Home</a> / <span className="text-bronze-300">Furniture</span>
        </nav>
        <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-bronze-300" data-reveal><span className="h-px w-10 bg-bronze-300/60"></span>Furniture &amp; Décor</span>
        <h1 className="title-xl max-w-3xl text-white" data-reveal>Pieces made to live with</h1>
        <p className="mt-5 max-w-2xl text-white/70" data-reveal>A curated collection of furniture, lighting and décor, inquire about any piece and we will confirm pricing, finishes and lead time.</p>
      </div>
    </section>

     {/* ============ COLLECTION ============ */} 
    <section className="section">
      <div className="container-page">
        <p className="mb-10 rounded-lg border border-bronze/20 bg-bronze-50 px-5 py-3 text-sm text-espresso/70">
          <strong className="text-espresso">Display only.</strong> All pieces are made to order, no online payment. Tap “Inquire” to ask about price, materials and delivery.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>

          <article className="group">
            <div className="card-media aspect-[4/3]">
              <img src="/images/furn-sofa.webp" alt="Sabrah lounge sofa" loading="lazy" width="1100" height="850" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl">Sabrah Lounge Sofa</h2>
                <p className="mt-1 text-sm text-espresso/60">Solid mahogany frame · Premium linen upholstery</p>
                <p className="text-sm text-espresso/60">220 × 95 × 80 cm</p>
              </div>
              <span className="tag">Seating</span>
            </div>
            <a className="btn-outline mt-4 w-full" href="https://wa.me/17708994600?text=Hi%20Boston%20Interior%2C%20I%27d%20like%20to%20inquire%20about%20the%20Sabrah%20Lounge%20Sofa." target="_blank" rel="noopener">Inquire</a>
          </article>

          <article className="group">
            <div className="card-media aspect-[4/3]">
              <img src="/images/furn-chair.webp" alt="Zawadi armchair" loading="lazy" width="1100" height="850" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl">Zawadi Armchair</h2>
                <p className="mt-1 text-sm text-espresso/60">Kiln dried hardwood · Bouclé fabric</p>
                <p className="text-sm text-espresso/60">85 × 88 × 78 cm</p>
              </div>
              <span className="tag">Seating</span>
            </div>
            <a className="btn-outline mt-4 w-full" href="https://wa.me/17708994600?text=Hi%20Boston%20Interior%2C%20I%27d%20like%20to%20inquire%20about%20the%20Zawadi%20Armchair." target="_blank" rel="noopener">Inquire</a>
          </article>

          <article className="group">
            <div className="card-media aspect-[4/3]">
              <img src="/images/furn-table.webp" alt="Amani coffee table" loading="lazy" width="1100" height="850" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl">Amani Coffee Table</h2>
                <p className="mt-1 text-sm text-espresso/60">Solid walnut · Natural oil finish</p>
                <p className="text-sm text-espresso/60">110 × 60 × 42 cm</p>
              </div>
              <span className="tag">Tables</span>
            </div>
            <a className="btn-outline mt-4 w-full" href="https://wa.me/17708994600?text=Hi%20Boston%20Interior%2C%20I%27d%20like%20to%20inquire%20about%20the%20Amani%20Coffee%20Table." target="_blank" rel="noopener">Inquire</a>
          </article>

          <article className="group">
            <div className="card-media aspect-[4/3]">
              <img src="/images/furn-lamp.webp" alt="Malaika table lamp" loading="lazy" width="1100" height="850" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl">Malaika Table Lamp</h2>
                <p className="mt-1 text-sm text-espresso/60">Brushed brass · Linen shade</p>
                <p className="text-sm text-espresso/60">Ø 30 × H 52 cm</p>
              </div>
              <span className="tag">Lighting</span>
            </div>
            <a className="btn-outline mt-4 w-full" href="https://wa.me/17708994600?text=Hi%20Boston%20Interior%2C%20I%27d%20like%20to%20inquire%20about%20the%20Malaika%20Table%20Lamp." target="_blank" rel="noopener">Inquire</a>
          </article>

          <article className="group">
            <div className="card-media aspect-[4/3]">
              <img src="/images/furn-shelf.webp" alt="Ujamaa bookshelf" loading="lazy" width="1100" height="850" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl">Ujamaa Bookshelf</h2>
                <p className="mt-1 text-sm text-espresso/60">Solid oak · Open back</p>
                <p className="text-sm text-espresso/60">180 × 40 × 200 cm</p>
              </div>
              <span className="tag">Storage</span>
            </div>
            <a className="btn-outline mt-4 w-full" href="https://wa.me/17708994600?text=Hi%20Boston%20Interior%2C%20I%27d%20like%20to%20inquire%20about%20the%20Ujamaa%20Bookshelf." target="_blank" rel="noopener">Inquire</a>
          </article>

          <article className="group">
            <div className="card-media aspect-[4/3]">
              <img src="/images/furn-decor.webp" alt="Upendo ceramic vase" loading="lazy" width="1100" height="850" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl">Upendo Ceramic Vase</h2>
                <p className="mt-1 text-sm text-espresso/60">Hand glazed stoneware</p>
                <p className="text-sm text-espresso/60">Ø 22 × H 35 cm</p>
              </div>
              <span className="tag">Décor</span>
            </div>
            <a className="btn-outline mt-4 w-full" href="https://wa.me/17708994600?text=Hi%20Boston%20Interior%2C%20I%27d%20like%20to%20inquire%20about%20the%20Upendo%20Ceramic%20Vase." target="_blank" rel="noopener">Inquire</a>
          </article>

        </div>
      </div>
    </section>

     {/* ============ CUSTOM BAND ============ */} 
    <section className="section bg-bronze text-white">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-20" data-reveal-stagger>
        <div>
          <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70" data-reveal><span className="h-px w-10 bg-white/50"></span>Custom Made</span>
          <h2 className="title-lg text-white" data-reveal>Need something built to fit?</h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
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

  </main>
  );
}
