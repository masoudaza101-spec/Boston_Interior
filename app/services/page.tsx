import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Our Services",
  "description": "Residential and commercial interior design, space planning, decoration and furniture customization by Boston Interior. Request a quote today.",
  "openGraph": {
    "title": "Our Services · Boston Interior",
    "description": "Full service interior design, decoration and furniture, tailored to your space and budget.",
    "type": "website",
    "images": [
      "/images/svc-residential.webp"
    ]
  }
};

export default function ServicesPage() {
  return (
<main>

     {/* ============ PAGE HERO ============ */} 
    <section className="page-hero">
      <div className="page-hero-bg"><img src="/images/svc-planning.webp" alt="" fetchPriority="high" /></div>
      <div className="container-page relative z-10">
        <nav aria-label="Breadcrumb" className="mb-5 text-xs uppercase tracking-[0.2em] text-white/50">
          <a href="/" className="transition hover:text-white">Home</a> / <span className="text-bronze-300">Services</span>
        </nav>
        <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-bronze-300" data-reveal><span className="h-px w-10 bg-bronze-300/60"></span>Our Services</span>
        <h1 className="title-xl max-w-3xl text-white" data-reveal>Design solutions made for living</h1>
        <p className="mt-5 max-w-2xl text-white/70" data-reveal>Five core services, one joined up process, from the first measurement to the final styled photograph.</p>
      </div>
    </section>

     {/* ============ SERVICE ROWS ============ */} 
    <section className="section">
      <div className="container-page space-y-20 md:space-y-28">

         {/* 1 */} 
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16" data-reveal-stagger>
          <div className="card-media aspect-[4/3]">
            <img src="/images/svc-residential.webp" alt="Residential interior design" loading="lazy" width="1200" height="900" />
          </div>
          <div>
            <span className="eyebrow" data-reveal>01 · Residential</span>
            <h2 className="title-md" data-reveal>Residential Interior Design</h2>
            <p className="lead mt-4" data-reveal>
              Apartments, villas and family homes designed around the way you actually live. We handle
              layout, lighting, materials, furniture and styling, whole home or a single room.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-espresso/70">
              <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze"></span>Full home and single room design</li>
              <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze"></span>Furniture, lighting and décor selection</li>
              <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze"></span>Renovation guidance and contractor coordination</li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-4" data-reveal>
              <a className="btn-primary" href="/contact?service=Residential">Request Quote</a>
              <a className="btn-outline" href="/portfolio">See Projects</a>
            </div>
          </div>
        </div>

         {/* 2 */} 
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16" data-reveal-stagger>
          <div className="card-media aspect-[4/3] lg:order-2">
            <img src="/images/svc-commercial.webp" alt="Commercial interior design" loading="lazy" width="1200" height="900" />
          </div>
          <div className="lg:order-1">
            <span className="eyebrow" data-reveal>02 · Commercial</span>
            <h2 className="title-md" data-reveal>Commercial Interior Design</h2>
            <p className="lead mt-4" data-reveal>
              Offices, retail stores, restaurants and clinics that support your brand and your people,
              planned for flow, comfort and a professional first impression.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-espresso/70">
              <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze"></span>Workspaces, retail and hospitality interiors</li>
              <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze"></span>Brand aligned colours, signage and finishes</li>
              <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze"></span>Phased works to minimise business downtime</li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-4" data-reveal>
              <a className="btn-primary" href="/contact?service=Commercial">Request Quote</a>
              <a className="btn-outline" href="/portfolio">See Projects</a>
            </div>
          </div>
        </div>

         {/* 3 */} 
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16" data-reveal-stagger>
          <div className="card-media aspect-[4/3]">
            <img src="/images/svc-planning.webp" alt="Thoughtfully planned open plan living room" loading="lazy" width="1200" height="900" />
          </div>
          <div>
            <span className="eyebrow" data-reveal>03 · Planning</span>
            <h2 className="title-md" data-reveal>Space Planning</h2>
            <p className="lead mt-4" data-reveal>
              The smartest redesign often starts on paper. We rethink layouts, circulation and storage so
              every square metre earns its place.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-espresso/70">
              <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze"></span>Layout optimisation and zoning</li>
              <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze"></span>2D plans and 3D visualisations</li>
              <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze"></span>Storage and furniture fit studies</li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-4" data-reveal>
              <a className="btn-primary" href="/contact?service=Space Planning">Request Quote</a>
              <a className="btn-outline" href="/portfolio">See Projects</a>
            </div>
          </div>
        </div>

         {/* 4 */} 
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16" data-reveal-stagger>
          <div className="card-media aspect-[4/3] lg:order-2">
            <img src="/images/svc-furniture.webp" alt="Decoration and styling" loading="lazy" width="1200" height="900" />
          </div>
          <div className="lg:order-1">
            <span className="eyebrow" data-reveal>04 · Styling</span>
            <h2 className="title-md" data-reveal>Decoration &amp; Styling</h2>
            <p className="lead mt-4" data-reveal>
              Colour, textiles, art, rugs and lighting, the layer that turns a finished room into a
              space with warmth and personality.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-espresso/70">
              <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze"></span>Colour and material palettes</li>
              <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze"></span>Textiles, art and accessory sourcing</li>
              <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze"></span>Final styling and hand over photography</li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-4" data-reveal>
              <a className="btn-primary" href="/contact?service=Decoration">Request Quote</a>
              <a className="btn-outline" href="/portfolio">See Projects</a>
            </div>
          </div>
        </div>

         {/* 5 */} 
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16" data-reveal-stagger>
          <div className="card-media aspect-[4/3]">
            <img src="/images/furn-table.webp" alt="Custom furniture craftsmanship" loading="lazy" width="1100" height="850" />
          </div>
          <div>
            <span className="eyebrow" data-reveal>05 · Furniture</span>
            <h2 className="title-md" data-reveal>Furniture Customization</h2>
            <p className="lead mt-4" data-reveal>
              Off the shelf rarely fits perfectly. We design and build made to measure furniture with
              trusted workshops, your dimensions, your materials, your style.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-espresso/70">
              <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze"></span>Bespoke sofas, tables, beds and storage</li>
              <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze"></span>Material, finish and upholstery selection</li>
              <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze"></span>Sourcing and curation for your project</li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-4" data-reveal>
              <a className="btn-primary" href="/contact?service=Furniture">Request Quote</a>
              <a className="btn-outline" href="/furniture">Browse Furniture</a>
            </div>
          </div>
        </div>

      </div>
    </section>

     {/* ============ PROCESS ============ */} 
    <section className="section bg-cream-light">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow" data-reveal>How We Work</span>
          <h2 className="title-lg" data-reveal>A simple, transparent process</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
          <div className="rounded-xl border border-espresso/10 bg-white p-7">
            <span className="text-sm font-bold tracking-widest text-bronze">01</span>
            <h3 className="mt-4 text-xl">Consultation</h3>
            <p className="mt-2 text-sm text-espresso/65">We discuss your needs, style, budget and goals to understand your space clearly.</p>
          </div>
          <div className="rounded-xl border border-espresso/10 bg-white p-7">
            <span className="text-sm font-bold tracking-widest text-bronze">02</span>
            <h3 className="mt-4 text-xl">Concept Design</h3>
            <p className="mt-2 text-sm text-espresso/65">Layouts, mood boards and material palettes tailored to your lifestyle and taste.</p>
          </div>
          <div className="rounded-xl border border-espresso/10 bg-white p-7">
            <span className="text-sm font-bold tracking-widest text-bronze">03</span>
            <h3 className="mt-4 text-xl">Execution</h3>
            <p className="mt-2 text-sm text-espresso/65">Quality materials, skilled craftspeople and careful project management on site.</p>
          </div>
          <div className="rounded-xl border border-espresso/10 bg-white p-7">
            <span className="text-sm font-bold tracking-widest text-bronze">04</span>
            <h3 className="mt-4 text-xl">Final Reveal</h3>
            <p className="mt-2 text-sm text-espresso/65">Your completed space, styled and finished beautifully, ready to enjoy.</p>
          </div>
        </div>
      </div>
    </section>

     {/* ============ CTA ============ */} 
    <section className="relative overflow-hidden bg-espresso py-24 text-center">
      <div className="band-bg"><img src="/images/proj-office.webp" alt="" loading="lazy" /></div>
      <div className="container-page relative z-10">
        <h2 className="title-lg mx-auto max-w-3xl text-white" data-reveal>Not sure which service you need?</h2>
        <p className="mx-auto mt-5 max-w-xl text-white/70">Describe your space in a message and we will recommend the right package, timeline and budget.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4" data-reveal>
          <a className="btn-primary" href="/contact">Request a Quote</a>
          <a className="btn-ghost-light" href="https://wa.me/17708994600" target="_blank" rel="noopener">Chat on WhatsApp</a>
        </div>
      </div>
    </section>

  </main>
  );
}
