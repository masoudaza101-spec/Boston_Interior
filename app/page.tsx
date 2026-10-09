export default function HomePage() {
  return (
<main>

     {/* ============ HERO ============ */}
    <section id="hero" className="relative flex min-h-[92vh] items-center overflow-hidden bg-espresso">
      <div className="swiper hero-swiper absolute inset-0">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="/images/hero-1.webp" alt="Warm modern living room designed by Boston Interior" className="h-full w-full object-cover" fetchPriority="high" />
          </div>
          <div className="swiper-slide">
            <img src="/images/hero-2.webp" alt="Cozy loft interior with ethnic furniture" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
      <div className="hero-overlay absolute inset-0"></div>

      <div className="container-page relative z-10 pb-40 pt-44">
        <span className="mb-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/85" data-reveal>
          <span className="h-px w-10 bg-white/50"></span>Interior Design &amp; Decoration
        </span>
        <h1 className="mb-0" data-reveal-stagger>
          <span className="hero-split block text-left">Refined Interiors,</span>
          <span className="hero-split block text-right">Elevated Living</span>
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-12" data-reveal-stagger>
          <p className="hero-lead md:col-span-6 md:col-start-1 md:pr-8">
            Boston Interior designs warm, functional spaces, from first concept to the final styled
            detail, creating homes and workplaces that feel inviting, personal and timeless.
          </p>
          <div className="mt-2 flex flex-col items-stretch gap-3 md:col-span-6 md:col-start-7 md:items-end md:gap-4" data-reveal>
            <a className="btn-primary w-full justify-center whitespace-nowrap px-5 text-xs sm:px-7 sm:text-sm md:max-w-xs" href="/contact">Book a Consultation</a>
            <a className="btn-ghost-light w-full justify-center whitespace-nowrap px-5 text-xs sm:px-7 sm:text-sm md:max-w-xs" href="/portfolio">View Our Portfolio</a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 hidden pb-24 md:block" data-reveal>
        <div className="container-page flex items-center justify-between gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
          <span className="inline-flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-bronze-300"></span>Functional Space Planning</span>
          <span className="inline-flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-bronze-300"></span>Stylish Material Selection</span>
          <span className="inline-flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-bronze-300"></span>Tailored Design Concepts</span>
        </div>
      </div>

      <div className="hero-pagination absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2"></div>
    </section>

     {/* ============ MARQUEE ============ */}
    <div className="marquee-band overflow-hidden bg-espresso py-4" aria-hidden="true">
      <div className="marquee-track flex w-max items-center whitespace-nowrap text-sm font-medium uppercase tracking-[0.25em]">
        <span className="marquee-item text-white/90">Interior Design</span><span className="marquee-sep">&bull;</span>
        <span className="marquee-item text-white/90">Space Planning</span><span className="marquee-sep">&bull;</span>
        <span className="marquee-item text-white/90">Decoration &amp; Styling</span><span className="marquee-sep">&bull;</span>
        <span className="marquee-item text-white/90">Custom Furniture</span><span className="marquee-sep">&bull;</span>
        <span className="marquee-item text-white/90">Interior Design</span><span className="marquee-sep">&bull;</span>
        <span className="marquee-item text-white/90">Space Planning</span><span className="marquee-sep">&bull;</span>
        <span className="marquee-item text-white/90">Decoration &amp; Styling</span><span className="marquee-sep">&bull;</span>
        <span className="marquee-item text-white/90">Custom Furniture</span><span className="marquee-sep">&bull;</span>
      </div>
    </div>

     {/* ============ ABOUT ============ */}
    <section className="section">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20" data-reveal-stagger>
        <div className="card-media aspect-[4/3]">
          <img src="/images/about.webp" alt="Material samples and design details from the Boston Interior studio" loading="lazy" width="1200" height="900" />
        </div>
        <div>
          <span className="eyebrow" data-reveal>About Us</span>
          <h2 className="title-lg text-balance" data-reveal>We turn your vision into reality</h2>
          <p className="lead mt-5" data-reveal>
            Boston Interior is a full service interior design, decoration and furniture studio. We shape
            spaces that are not only beautiful but genuinely liveable, balancing light, proportion,
            texture and colour so every room feels effortless and unmistakably yours.
          </p>
          <p className="lead mt-4" data-reveal>
            From private residences to commercial interiors, we guide every project from first sketch to
            final styling with care, precision and honest craftsmanship.
          </p>
          <div className="mt-7 border-l-2 border-bronze pl-5">
            <p className="text-lg font-semibold text-espresso">Sabrah</p>
            <p className="text-sm text-espresso/70">Founder &amp; Creative Director</p>
          </div>
          <a className="btn-outline mt-8" href="/about">Learn About Us</a>
        </div>
      </div>
    </section>

     {/* ============ STATS BAND ============ */}
    <section className="bg-espresso py-14 md:py-16">
      <div className="container-page grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4" data-reveal-stagger>
        <div>
          <p className="text-4xl font-semibold text-bronze-300 lg:text-5xl"><span className="counter" data-target="5000" data-suffix="+">0</span></p>
          <p className="mt-1 text-sm text-white/70">Design Hours</p>
        </div>
        <div className="sm:border-l sm:border-white/10 sm:pl-8">
          <p className="text-4xl font-semibold text-bronze-300 lg:text-5xl"><span className="counter" data-target="150" data-suffix="+">0</span></p>
          <p className="mt-1 text-sm text-white/70">Projects Completed</p>
        </div>
        <div className="border-t border-white/10 pt-6 sm:border-t-0 sm:border-l sm:border-white/10 sm:pl-8 sm:pt-0">
          <p className="text-4xl font-semibold text-bronze-300 lg:text-5xl"><span className="counter" data-target="120" data-suffix="+">0</span></p>
          <p className="mt-1 text-sm text-white/70">Happy Clients</p>
        </div>
        <div className="border-t border-white/10 pt-6 sm:border-t-0 sm:border-l sm:border-white/10 sm:pl-8 sm:pt-0">
          <p className="text-4xl font-semibold text-bronze-300 lg:text-5xl"><span className="counter" data-target="10" data-suffix="+">0</span></p>
          <p className="mt-1 text-sm text-white/70">Years of Experience</p>
        </div>
      </div>
    </section>

     {/* ============ SERVICES ============ */}
    <section className="section bg-cream-light">
      <div className="container-page">
        <div className="grid items-end gap-8 lg:grid-cols-2" data-reveal-stagger>
          <div>
            <span className="eyebrow" data-reveal>Our Services</span>
            <h2 className="title-lg max-w-xl text-balance" data-reveal>Design solutions made for living</h2>
          </div>
          <div className="lg:pb-2">
            <p className="lead" data-reveal>
              From full interior design to custom furniture, every service is tailored to your space,
              your budget and the way you actually live.
            </p>
            <a className="btn-outline mt-5" href="/services">All Services</a>
          </div>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
          <a href="/services" className="group block">
            <div className="card-media aspect-[4/3]">
              <img src="/images/svc-residential.webp" alt="Residential interior design" loading="lazy" width="1200" height="900" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <h3 className="mt-5 text-xl">Residential Interior Design</h3>
            <p className="mt-2 text-sm text-espresso/75">Apartments, villas and family homes designed for comfort, flow and everyday beauty.</p>
          </a>

          <a href="/services" className="group block">
            <div className="card-media aspect-[4/3]">
              <img src="/images/svc-commercial.webp" alt="Commercial interior design" loading="lazy" width="1200" height="900" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <h3 className="mt-5 text-xl">Commercial Interior Design</h3>
            <p className="mt-2 text-sm text-espresso/75">Offices, retail and hospitality spaces that work hard and look remarkable.</p>
          </a>

          <a href="/services" className="group block">
            <div className="card-media aspect-[4/3]">
              <img src="/images/svc-planning.webp" alt="Space planning in an open plan living room" loading="lazy" width="1200" height="900" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <h3 className="mt-5 text-xl">Space Planning</h3>
            <p className="mt-2 text-sm text-espresso/75">Smart layouts that make every square metre useful, comfortable and easy to move through.</p>
          </a>

          <a href="/services" className="group block">
            <div className="card-media aspect-[4/3]">
              <img src="/images/svc-furniture.webp" alt="Decoration and styling" loading="lazy" width="1200" height="900" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <h3 className="mt-5 text-xl">Decoration &amp; Styling</h3>
            <p className="mt-2 text-sm text-espresso/75">Colour, textiles, lighting and décor brought together into one cohesive, warm story.</p>
          </a>

          <a href="/services" className="group block">
            <div className="card-media aspect-[4/3]">
              <img src="/images/furn-table.webp" alt="Custom furniture craftsmanship" loading="lazy" width="1100" height="850" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <h3 className="mt-5 text-xl">Furniture Customization</h3>
            <p className="mt-2 text-sm text-espresso/75">Bespoke pieces built to your measurements, materials and taste by our workshop partners.</p>
          </a>

          <div className="flex flex-col justify-center rounded-xl bg-espresso p-8 text-white">
            <h3 className="text-2xl text-white">Not sure where to start?</h3>
            <p className="mt-3 text-sm text-white/85">Tell us about your space and we will recommend the right services, timeline and budget.</p>
            <a className="btn-light mt-6 self-start" href="/contact">Request a Quote</a>
          </div>
        </div>
      </div>
    </section>

     {/* ============ PROJECTS ============ */}
    <section className="section">
      <div className="container-page">
        <div className="grid items-end gap-8 lg:grid-cols-2" data-reveal-stagger>
          <div>
            <span className="eyebrow" data-reveal>Latest Projects</span>
            <h2 className="title-lg max-w-xl text-balance" data-reveal>Thoughtfully designed spaces that inspire</h2>
          </div>
          <div className="lg:pb-2">
            <p className="lead" data-reveal>A curated selection of recent interiors where aesthetics and everyday function balance perfectly.</p>
            <a className="btn-outline mt-5" href="/portfolio">View Full Portfolio</a>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-10" data-reveal-stagger>
          <a href="/portfolio" className="group block lg:col-span-7">
            <div className="card-media aspect-[16/10]">
              <img src="/images/proj-living.webp" alt="Modern minimalist living room" loading="lazy" width="1400" height="1000" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <h3 className="mt-5 text-2xl">Modern Minimalist Living Room</h3>
            <div className="mt-3 flex flex-wrap gap-2"><span className="tag">Private Residence</span><span className="tag">Open Space</span><span className="tag">Contemporary</span></div>
          </a>

          <a href="/portfolio" className="group block lg:col-span-5 lg:mt-20">
            <div className="card-media aspect-[4/3]">
              <img src="/images/proj-bedroom.webp" alt="Serene contemporary bedroom suite" loading="lazy" width="1400" height="1000" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <h3 className="mt-5 text-2xl">Serene Bedroom Retreat</h3>
            <div className="mt-3 flex flex-wrap gap-2"><span className="tag">Master Suite</span><span className="tag">Warm Neutrals</span><span className="tag">Soft Lighting</span></div>
          </a>

          <a href="/portfolio" className="group block lg:col-span-5 lg:mt-20">
            <div className="card-media aspect-[4/3]">
              <img src="/images/proj-kitchen.webp" alt="Scandinavian inspired kitchen design" loading="lazy" width="1400" height="1000" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <h3 className="mt-5 text-2xl">Scandinavian Kitchen Design</h3>
            <div className="mt-3 flex flex-wrap gap-2"><span className="tag">Kitchen</span><span className="tag">Nordic Style</span><span className="tag">Minimalist</span></div>
          </a>

          <a href="/portfolio" className="group block lg:col-span-7">
            <div className="card-media aspect-[16/10]">
              <img src="/images/proj-office.webp" alt="Elegant home office workspace" loading="lazy" width="1400" height="1000" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <h3 className="mt-5 text-2xl">Elegant Home Office</h3>
            <div className="mt-3 flex flex-wrap gap-2"><span className="tag">Home Office</span><span className="tag">Productivity</span><span className="tag">Modern</span></div>
          </a>

          <a href="/portfolio" className="group block lg:col-span-6">
            <div className="card-media aspect-[16/11]">
              <img src="/images/proj-dining.webp" alt="Warm family dining room concept" loading="lazy" width="1400" height="1000" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <h3 className="mt-5 text-2xl">Warm Family Dining Room</h3>
            <div className="mt-3 flex flex-wrap gap-2"><span className="tag">Dining Area</span><span className="tag">Natural Wood</span><span className="tag">Family Home</span></div>
          </a>

          <a href="/portfolio" className="group block lg:col-span-6">
            <div className="card-media aspect-[16/11]">
              <img src="/images/proj-bathroom.webp" alt="Luxury bathroom with marble finish" loading="lazy" width="1400" height="1000" />
              <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
            </div>
            <h3 className="mt-5 text-2xl">Luxury Marble Bathroom</h3>
            <div className="mt-3 flex flex-wrap gap-2"><span className="tag">Bathroom</span><span className="tag">Marble</span><span className="tag">Premium Finish</span></div>
          </a>
        </div>
      </div>
    </section>

     {/* ============ TESTIMONIALS ============ */}
    <section className="section relative overflow-hidden">
      <div className="band-bg band-bg-darker"><img src="/images/testi-bg.webp" alt="" loading="lazy" /></div>
      <div className="container-page relative z-10">
        <div className="max-w-2xl">
          <span className="eyebrow !text-bronze-300" data-reveal>Testimonials</span>
          <h2 className="title-lg text-white" data-reveal>What our clients say</h2>
        </div>

        <div className="swiper testi-swiper mt-12">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <figure className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-8">
                <blockquote className="text-base leading-relaxed text-white/85">“They transformed our apartment into a warm, elegant home. Every detail felt intentional and refined.”</blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-bronze-300">Neema J. · Dar es Salaam</figcaption>
              </figure>
            </div>
            <div className="swiper-slide">
              <figure className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-8">
                <blockquote className="text-base leading-relaxed text-white/85">“The layout and design exceeded our expectations. Our office now feels larger, brighter and far more productive.”</blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-bronze-300">Michael O. · Nairobi</figcaption>
              </figure>
            </div>
            <div className="swiper-slide">
              <figure className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-8">
                <blockquote className="text-base leading-relaxed text-white/85">“They truly understood our brief. The finished space reflects our lifestyle with style and comfort.”</blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-bronze-300">Amina K. · Arusha</figcaption>
              </figure>
            </div>
            <div className="swiper-slide">
              <figure className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-8">
                <blockquote className="text-base leading-relaxed text-white/85">“From concept to the final reveal, everything was handled professionally. Our home feels beautiful and genuinely ours.”</blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-bronze-300">Fatma H. · Zanzibar</figcaption>
              </figure>
            </div>
            <div className="swiper-slide">
              <figure className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-8">
                <blockquote className="text-base leading-relaxed text-white/85">“Creative ideas, honest budgets and excellent execution. They turned our space into something truly special.”</blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-bronze-300">Daniel M. · Kampala</figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="testi-pagination mt-9 flex items-center justify-center gap-2"></div>
      </div>
    </section>

     {/* ============ PROCESS ============ */}
    <section className="section bg-cream-light">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow" data-reveal>How We Work</span>
          <h2 className="title-lg text-balance" data-reveal>A simple, transparent process</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
          <div className="rounded-xl border border-espresso/10 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-bronze/40 hover:shadow-[0_22px_45px_-28px_rgba(52,31,22,0.5)]">
            <span className="text-sm font-bold tracking-widest text-bronze">01</span>
            <h3 className="mt-4 text-xl">Consultation</h3>
            <p className="mt-2 text-sm text-espresso/75">We discuss your needs, style, budget and goals to understand your space clearly.</p>
          </div>
          <div className="rounded-xl border border-espresso/10 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-bronze/40 hover:shadow-[0_22px_45px_-28px_rgba(52,31,22,0.5)]">
            <span className="text-sm font-bold tracking-widest text-bronze">02</span>
            <h3 className="mt-4 text-xl">Concept Design</h3>
            <p className="mt-2 text-sm text-espresso/75">Layouts, mood boards and material palettes tailored to your lifestyle and taste.</p>
          </div>
          <div className="rounded-xl border border-espresso/10 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-bronze/40 hover:shadow-[0_22px_45px_-28px_rgba(52,31,22,0.5)]">
            <span className="text-sm font-bold tracking-widest text-bronze">03</span>
            <h3 className="mt-4 text-xl">Execution</h3>
            <p className="mt-2 text-sm text-espresso/75">Quality materials, skilled craftspeople and careful project management on site.</p>
          </div>
          <div className="rounded-xl border border-espresso/10 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-bronze/40 hover:shadow-[0_22px_45px_-28px_rgba(52,31,22,0.5)]">
            <span className="text-sm font-bold tracking-widest text-bronze">04</span>
            <h3 className="mt-4 text-xl">Final Reveal</h3>
            <p className="mt-2 text-sm text-espresso/75">Your completed space, styled and finished beautifully, ready to enjoy.</p>
          </div>
        </div>
      </div>
    </section>

     {/* ============ FURNITURE TEASER ============ */}
    <section className="section bg-bronze text-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20" data-reveal-stagger>
        <div className="card-media aspect-[4/3]">
          <img src="/images/furn-chair.webp" alt="Custom armchair from the Boston Interior furniture collection" loading="lazy" width="1100" height="850" />
        </div>
        <div>
          <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/85" data-reveal><span className="h-px w-10 bg-white/50"></span>Products &amp; Décor</span>
          <h2 className="title-lg text-white" data-reveal>Pieces made to live with</h2>
          <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
            Sofas, chairs, tables, lighting and décor, selected and custom built to fit your space
            exactly. Browse the collection and enquire about any piece; we deliver across Tanzania.
          </p>
          <a className="btn-light mt-8" href="/furniture">Explore Products</a>
        </div>
      </div>
    </section>

     {/* ============ FAQ ============ */}
    <section className="section">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-20" data-reveal-stagger>
        <div className="lg:col-span-5">
          <span className="eyebrow" data-reveal>FAQ</span>
          <h2 className="title-lg" data-reveal>Questions, answered</h2>
          <p className="lead mt-5" data-reveal>Everything you need to know before starting your project. Still curious? Send us a message.</p>
          <a className="btn-primary mt-7" href="/contact">Ask a Question</a>
        </div>
        <div className="faq-list lg:col-span-7" data-reveal-stagger>
          <div className="faq-item active">
            <button className="faq-question" type="button" aria-expanded="true">
              What services do you offer?
              <span className="faq-icon" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg></span>
            </button>
            <div className="faq-answer">Residential and commercial interior design, space planning, decoration and styling, furniture customization and full project execution.</div>
          </div>
          <div className="faq-item">
            <button className="faq-question" type="button" aria-expanded="false">
              How do I get started?
              <span className="faq-icon" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg></span>
            </button>
            <div className="faq-answer">Book a consultation through our contact form, WhatsApp or phone call. We will discuss your needs, style, budget and timeline, then prepare a tailored proposal.</div>
          </div>
          <div className="faq-item">
            <button className="faq-question" type="button" aria-expanded="false">
              Do you handle renovations?
              <span className="faq-icon" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg></span>
            </button>
            <div className="faq-answer">Yes, including layout optimisation, material selection, finishes and coordination with trusted contractors and craftspeople.</div>
          </div>
          <div className="faq-item">
            <button className="faq-question" type="button" aria-expanded="false">
              What is included in the design process?
              <span className="faq-icon" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg></span>
            </button>
            <div className="faq-answer">Concept development, mood boards, space planning, 3D visualisations, material schedules and final styling with furniture and décor.</div>
          </div>
          <div className="faq-item">
            <button className="faq-question" type="button" aria-expanded="false">
              How long does a project usually take?
              <span className="faq-icon" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg></span>
            </button>
            <div className="faq-answer">Timelines depend on scope. Consulting and styling projects can take 2 to 4 weeks, while full renovations typically run several months.</div>
          </div>
        </div>
      </div>
    </section>

     {/* ============ CTA ============ */}
    <section className="relative overflow-hidden bg-espresso py-24 text-center">
      <div className="band-bg"><img src="/images/proj-living.webp" alt="" loading="lazy" /></div>
      <div className="container-page relative z-10">
        <h2 className="title-lg mx-auto max-w-3xl text-white text-balance" data-reveal>Ready to transform your space?</h2>
        <p className="mx-auto mt-5 max-w-xl text-white/85">Tell us about your project and we will come back to you within one business day with next steps.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4" data-reveal>
          <a className="btn-primary" href="/contact">Book a Consultation</a>
          <a className="btn-ghost-light" href="https://wa.me/17708994600" target="_blank" rel="noopener">Chat on WhatsApp</a>
        </div>
        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/75" data-reveal>
          <a className="transition hover:text-white" href="https://wa.me/17708994600" target="_blank" rel="noopener">WhatsApp +1 770 899 4600</a>
          <span className="hidden h-4 w-px bg-white/20 sm:block"></span>
          <a className="transition hover:text-white" href="tel:+255655743141">+255 655 743 141</a>
          <span className="hidden h-4 w-px bg-white/20 sm:block"></span>
          <a className="transition hover:text-white" href="mailto:info@bostoninterior.co.tz">info@bostoninterior.co.tz</a>
        </div>
      </div>
    </section>

  </main>
  );
}
