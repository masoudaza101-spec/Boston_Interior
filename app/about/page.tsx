import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "About Us",
  "description": "Meet Boston Interior, a full service interior design, decoration and furniture studio led by Sabrah, creating warm and functional spaces since 2015.",
  "openGraph": {
    "title": "About Us · Boston Interior",
    "description": "Our story, mission and design approach, Boston Interior by Sabrah.",
    "type": "website",
    "images": [
      "/images/about.webp"
    ]
  }
};

export default function AboutPage() {
  return (
<main>

     {/* ============ PAGE HERO ============ */} 
    <section className="page-hero">
      <div className="page-hero-bg"><img src="/images/testi-bg.webp" alt="" fetchPriority="high" /></div>
      <div className="container-page relative z-10">
        <nav aria-label="Breadcrumb" className="mb-5 text-xs uppercase tracking-[0.2em] text-white/50">
          <a href="/" className="transition hover:text-white">Home</a> / <span className="text-bronze-300">About</span>
        </nav>
        <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-bronze-300" data-reveal><span className="h-px w-10 bg-bronze-300/60"></span>About Us</span>
        <h1 className="title-xl max-w-3xl text-white" data-reveal>A studio built on care, craft and honest design</h1>
        <p className="mt-5 max-w-2xl text-white/70" data-reveal>We believe great interiors come from listening first, to you, to the space, and to the way you want to live in it.</p>
      </div>
    </section>

     {/* ============ STORY ============ */} 
    <section className="section">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20" data-reveal-stagger>
        <div>
          <span className="eyebrow" data-reveal>Our Story</span>
          <h2 className="title-lg" data-reveal>Design that feels like home</h2>
          <p className="lead mt-5" data-reveal>
            Boston Interior began with a simple idea: that a well designed space should feel personal,
            not showroom perfect. Founded by Sabrah, the studio grew from styling projects for friends
            and family into a full service practice serving homes and businesses across Tanzania and
            East Africa.
          </p>
          <p className="lead mt-4" data-reveal>
            Today our team of designers, project managers and craftspeople handles everything from the
            first floor plan to the last cushion, always with warm materials, honest budgets and
            details that stand up to everyday life.
          </p>
          <div className="mt-7 border-l-2 border-bronze pl-5">
            <p className="text-lg font-semibold text-espresso">Sabrah</p>
            <p className="text-sm text-espresso/60">Founder &amp; Creative Director</p>
          </div>
        </div>
        <div className="card-media aspect-[4/3]">
          <img src="/images/about.webp" alt="Textile and material samples in the Boston Interior studio" loading="lazy" width="1200" height="900" />
        </div>
      </div>
    </section>

     {/* ============ MISSION / VISION ============ */} 
    <section className="section bg-cream-light">
      <div className="container-page grid gap-8 lg:grid-cols-2" data-reveal-stagger>
        <div className="rounded-xl border border-espresso/10 bg-white p-9">
          <span className="eyebrow" data-reveal>Our Mission</span>
          <h3 className="title-md" data-reveal>Spaces that work as beautifully as they look</h3>
          <p className="lead mt-4" data-reveal>
            To design interiors that balance beauty and function, guiding every client from idea to
            completion with transparency, craftsmanship and respect for their budget.
          </p>
        </div>
        <div className="rounded-xl border border-espresso/10 bg-white p-9">
          <span className="eyebrow" data-reveal>Our Vision</span>
          <h3 className="title-md" data-reveal>East Africa's most trusted design studio</h3>
          <p className="lead mt-4" data-reveal>
            To be known for warm, timeless interiors and furniture, and for making professional design
            feel approachable for every home and business we work with.
          </p>
        </div>
      </div>
    </section>

     {/* ============ APPROACH ============ */} 
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow" data-reveal>Our Approach</span>
          <h2 className="title-lg" data-reveal>How we bring ideas to life</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
          <div className="rounded-xl border border-espresso/10 bg-cream-light p-7">
            <span className="text-sm font-bold tracking-widest text-bronze">01</span>
            <h3 className="mt-4 text-xl">Listen</h3>
            <p className="mt-2 text-sm text-espresso/65">We learn how you live, work and what you love before drawing a single line.</p>
          </div>
          <div className="rounded-xl border border-espresso/10 bg-cream-light p-7">
            <span className="text-sm font-bold tracking-widest text-bronze">02</span>
            <h3 className="mt-4 text-xl">Design</h3>
            <p className="mt-2 text-sm text-espresso/65">Layouts, mood boards and 3D views make every decision easy to see and approve.</p>
          </div>
          <div className="rounded-xl border border-espresso/10 bg-cream-light p-7">
            <span className="text-sm font-bold tracking-widest text-bronze">03</span>
            <h3 className="mt-4 text-xl">Craft</h3>
            <p className="mt-2 text-sm text-espresso/65">Trusted makers and careful site supervision turn plans into lasting reality.</p>
          </div>
          <div className="rounded-xl border border-espresso/10 bg-cream-light p-7">
            <span className="text-sm font-bold tracking-widest text-bronze">04</span>
            <h3 className="mt-4 text-xl">Style</h3>
            <p className="mt-2 text-sm text-espresso/65">We finish with the details, textiles, art and lighting that make it yours.</p>
          </div>
        </div>
      </div>
    </section>

     {/* ============ STATS ============ */} 
    <section className="relative overflow-hidden bg-espresso py-16 text-white">
      <div className="band-bg"><img src="/images/proj-living-2.webp" alt="" loading="lazy" /></div>
      <div className="container-page relative z-10 grid grid-cols-2 gap-10 text-center lg:grid-cols-4" data-reveal-stagger>
        <div>
          <p className="text-4xl font-semibold text-bronze-300 lg:text-5xl"><span className="counter" data-target="5000" data-suffix="+">0</span></p>
          <p className="mt-1 text-sm text-white/60">Design Hours Completed</p>
        </div>
        <div>
          <p className="text-4xl font-semibold text-bronze-300 lg:text-5xl"><span className="counter" data-target="150" data-suffix="+">0</span></p>
          <p className="mt-1 text-sm text-white/60">Projects Delivered</p>
        </div>
        <div>
          <p className="text-4xl font-semibold text-bronze-300 lg:text-5xl"><span className="counter" data-target="120" data-suffix="+">0</span></p>
          <p className="mt-1 text-sm text-white/60">Satisfied Clients</p>
        </div>
        <div>
          <p className="text-4xl font-semibold text-bronze-300 lg:text-5xl"><span className="counter" data-target="10" data-suffix="+">0</span></p>
          <p className="mt-1 text-sm text-white/60">Years of Experience</p>
        </div>
      </div>
    </section>

     {/* ============ DISCIPLINES ============ */} 
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow" data-reveal>Inside the Studio</span>
          <h2 className="title-lg" data-reveal>One team, three disciplines</h2>
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-3" data-reveal-stagger>
          <div className="card-media aspect-[4/3]">
            <img src="/images/svc-render.webp" alt="3D interior concept visualisation" loading="lazy" width="1200" height="900" />
            <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/90 to-transparent p-6 pt-16">
              <h3 className="text-xl text-white">Design Studio</h3>
              <p className="mt-1 text-sm text-white/70">Concepts, layouts, 3D visuals and material palettes.</p>
            </div>
          </div>
          <div className="card-media aspect-[4/3]">
            <img src="/images/svc-renovation.webp" alt="Project delivery on site" loading="lazy" width="1200" height="900" />
            <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/90 to-transparent p-6 pt-16">
              <h3 className="text-xl text-white">Project Delivery</h3>
              <p className="mt-1 text-sm text-white/70">Budgets, contractors, timelines and quality control.</p>
            </div>
          </div>
          <div className="card-media aspect-[4/3]">
            <img src="/images/furn-shelf.webp" alt="Furniture and workshop craftsmanship" loading="lazy" width="1100" height="850" />
            <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/90 to-transparent p-6 pt-16">
              <h3 className="text-xl text-white">Furniture Workshop</h3>
              <p className="mt-1 text-sm text-white/70">Custom pieces built to measure with local craftspeople.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

     {/* ============ CTA ============ */} 
    <section className="relative overflow-hidden bg-espresso py-24 text-center">
      <div className="band-bg"><img src="/images/proj-bedroom.webp" alt="" loading="lazy" /></div>
      <div className="container-page relative z-10">
        <h2 className="title-lg mx-auto max-w-3xl text-white" data-reveal>Let's design something together</h2>
        <p className="mx-auto mt-5 max-w-xl text-white/70">Share your space, your ideas and your budget, we will take it from there.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4" data-reveal>
          <a className="btn-primary" href="/contact">Book a Consultation</a>
          <a className="btn-ghost-light" href="/portfolio">See Our Work</a>
        </div>
      </div>
    </section>

  </main>
  );
}
