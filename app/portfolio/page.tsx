import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Portfolio",
  "description": "Explore completed interior design projects by Boston Interior, living rooms, bedrooms, kitchens, offices, outdoor spaces and more.",
  "openGraph": {
    "title": "Portfolio · Boston Interior",
    "description": "Thoughtfully designed spaces that inspire, browse our recent interior projects.",
    "type": "website",
    "images": [
      "/images/proj-living.webp"
    ]
  }
};

export default function PortfolioPage() {
  return (
<main>

     {/* ============ PAGE HERO ============ */} 
    <section className="page-hero">
      <div className="page-hero-bg"><img src="/images/proj-living.webp" alt="" fetchPriority="high" /></div>
      <div className="container-page relative z-10">
        <nav aria-label="Breadcrumb" className="mb-5 text-xs uppercase tracking-[0.2em] text-white/65">
          <a href="/" className="transition hover:text-white">Home</a> / <span className="text-bronze-300">Portfolio</span>
        </nav>
        <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-bronze-300" data-reveal><span className="h-px w-10 bg-bronze-300/60"></span>Our Work</span>
        <h1 className="title-xl max-w-3xl text-white" data-reveal>Thoughtfully designed spaces that inspire</h1>
        <p className="hero-sub mt-5" data-reveal>Every project below is a real brief solved with care, filter by category and click any project to view the full gallery.</p>
      </div>
    </section>

     {/* ============ FILTERS + GRID ============ */} 
    <section className="section">
      <div className="container-page">
        <div id="portfolio-filters" className="flex flex-wrap justify-center gap-3" role="group" aria-label="Filter projects by category">
          <button type="button" className="filter-btn active" data-filter="all" aria-pressed="true">All</button>
          <button type="button" className="filter-btn" data-filter="living-room" aria-pressed="false">Living Room</button>
          <button type="button" className="filter-btn" data-filter="bedroom" aria-pressed="false">Bedroom</button>
          <button type="button" className="filter-btn" data-filter="kitchen" aria-pressed="false">Kitchen</button>
          <button type="button" className="filter-btn" data-filter="office" aria-pressed="false">Office</button>
          <button type="button" className="filter-btn" data-filter="outdoor" aria-pressed="false">Outdoor</button>
          <button type="button" className="filter-btn" data-filter="dining" aria-pressed="false">Dining</button>
          <button type="button" className="filter-btn" data-filter="bathroom" aria-pressed="false">Bathroom</button>
        </div>

        <div id="portfolio-grid" className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>

          <div className="portfolio-item group" data-category="living-room">
            <a href="/images/proj-living.webp" className="glightbox block" data-gallery="p1" data-title="Modern Minimalist Living Room" data-description="<strong>Masaki, Dar es Salaam · 2025 · Contemporary</strong><br />An open plan lounge layered with warm neutrals, low profile seating and soft ambient lighting.">
              <div className="card-media aspect-[4/3]">
                <img src="/images/proj-living.webp" alt="Modern minimalist living room" loading="lazy" width="1400" height="1000" />
                <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
              </div>
              <h3 className="mt-4 text-xl">Modern Minimalist Living Room</h3>
              <div className="mt-2 flex flex-wrap gap-2"><span className="tag">Living Room</span><span className="tag">Contemporary</span></div>
            </a>
            <a href="/images/proj-living-2.webp" className="glightbox hidden" data-gallery="p1" data-title="Modern Minimalist Living Room, View 2" data-description="Wide view of the open lounge and dining connection." tabIndex={-1} aria-hidden="true"></a>
            <a href="/images/about.webp" className="glightbox hidden" data-gallery="p1" data-title="Modern Minimalist Living Room, Materials" data-description="Textile and material palette used across the space." tabIndex={-1} aria-hidden="true"></a>
          </div>

          <div className="portfolio-item group" data-category="living-room">
            <a href="/images/proj-living-2.webp" className="glightbox block" data-gallery="p2" data-title="Sunlit Family Lounge" data-description="<strong>Mikocheni, Dar es Salaam · 2025 · Transitional</strong><br />Large windows, natural textures and generous seating designed for family evenings.">
              <div className="card-media aspect-[4/3]">
                <img src="/images/proj-living-2.webp" alt="Sunlit family lounge" loading="lazy" width="1400" height="1000" />
                <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
              </div>
              <h3 className="mt-4 text-xl">Sunlit Family Lounge</h3>
              <div className="mt-2 flex flex-wrap gap-2"><span className="tag">Living Room</span><span className="tag">Transitional</span></div>
            </a>
            <a href="/images/proj-living.webp" className="glightbox hidden" data-gallery="p2" data-title="Sunlit Family Lounge, View 2" data-description="Seating detail with layered rugs and cushions." tabIndex={-1} aria-hidden="true"></a>
            <a href="/images/testi-bg.webp" className="glightbox hidden" data-gallery="p2" data-title="Sunlit Family Lounge, Evening" data-description="Warm evening lighting scheme." tabIndex={-1} aria-hidden="true"></a>
          </div>

          <div className="portfolio-item group" data-category="bedroom">
            <a href="/images/proj-bedroom.webp" className="glightbox block" data-gallery="p3" data-title="Serene Bedroom Retreat" data-description="<strong>Msasani Peninsula · 2024 · Warm Minimal</strong><br />A calm master suite with layered neutrals, soft textiles and concealed storage.">
              <div className="card-media aspect-[4/3]">
                <img src="/images/proj-bedroom.webp" alt="Serene bedroom retreat" loading="lazy" width="1400" height="1000" />
                <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
              </div>
              <h3 className="mt-4 text-xl">Serene Bedroom Retreat</h3>
              <div className="mt-2 flex flex-wrap gap-2"><span className="tag">Bedroom</span><span className="tag">Warm Minimal</span></div>
            </a>
            <a href="/images/proj-bedroom-2.webp" className="glightbox hidden" data-gallery="p3" data-title="Serene Bedroom Retreat, View 2" data-description="Night time view with bedside lighting." tabIndex={-1} aria-hidden="true"></a>
            <a href="/images/about.webp" className="glightbox hidden" data-gallery="p3" data-title="Serene Bedroom Retreat, Materials" data-description="Fabric and finish palette for the suite." tabIndex={-1} aria-hidden="true"></a>
          </div>

          <div className="portfolio-item group" data-category="bedroom">
            <a href="/images/proj-bedroom-2.webp" className="glightbox block" data-gallery="p4" data-title="Cozy Guest Bedroom" data-description="<strong>Arusha · 2024 · Classic</strong><br />A welcoming guest room with warm timber, layered bedding and soft reading light.">
              <div className="card-media aspect-[4/3]">
                <img src="/images/proj-bedroom-2.webp" alt="Cozy guest bedroom" loading="lazy" width="1400" height="1000" />
                <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
              </div>
              <h3 className="mt-4 text-xl">Cozy Guest Bedroom</h3>
              <div className="mt-2 flex flex-wrap gap-2"><span className="tag">Bedroom</span><span className="tag">Classic</span></div>
            </a>
            <a href="/images/proj-bedroom.webp" className="glightbox hidden" data-gallery="p4" data-title="Cozy Guest Bedroom, View 2" data-description="Wardrobe and dressing corner." tabIndex={-1} aria-hidden="true"></a>
            <a href="/images/hero-1.webp" className="glightbox hidden" data-gallery="p4" data-title="Cozy Guest Bedroom, View 3" data-description="Overall room composition and lighting." tabIndex={-1} aria-hidden="true"></a>
          </div>

          <div className="portfolio-item group" data-category="kitchen">
            <a href="/images/proj-kitchen.webp" className="glightbox block" data-gallery="p5" data-title="Scandinavian Kitchen Design" data-description="<strong>Bahari Beach · 2025 · Nordic</strong><br />Clean cabinetry, pale wood and generous worktops in a light filled kitchen.">
              <div className="card-media aspect-[4/3]">
                <img src="/images/proj-kitchen.webp" alt="Scandinavian kitchen design" loading="lazy" width="1400" height="1000" />
                <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
              </div>
              <h3 className="mt-4 text-xl">Scandinavian Kitchen Design</h3>
              <div className="mt-2 flex flex-wrap gap-2"><span className="tag">Kitchen</span><span className="tag">Nordic</span></div>
            </a>
            <a href="/images/proj-kitchen-2.webp" className="glightbox hidden" data-gallery="p5" data-title="Scandinavian Kitchen Design, View 2" data-description="Worktop and storage detail." tabIndex={-1} aria-hidden="true"></a>
            <a href="/images/testi-bg.webp" className="glightbox hidden" data-gallery="p5" data-title="Scandinavian Kitchen Design, View 3" data-description="Kitchen seen from the dining area." tabIndex={-1} aria-hidden="true"></a>
          </div>

          <div className="portfolio-item group" data-category="kitchen">
            <a href="/images/proj-kitchen-2.webp" className="glightbox block" data-gallery="p6" data-title="Compact City Kitchen" data-description="<strong>Kinondoni · 2024 · Modern</strong><br />Smart storage and durable finishes make a small footprint work hard.">
              <div className="card-media aspect-[4/3]">
                <img src="/images/proj-kitchen-2.webp" alt="Compact city kitchen" loading="lazy" width="1400" height="1000" />
                <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
              </div>
              <h3 className="mt-4 text-xl">Compact City Kitchen</h3>
              <div className="mt-2 flex flex-wrap gap-2"><span className="tag">Kitchen</span><span className="tag">Modern</span></div>
            </a>
            <a href="/images/proj-kitchen.webp" className="glightbox hidden" data-gallery="p6" data-title="Compact City Kitchen, View 2" data-description="Full run of cabinetry and appliances." tabIndex={-1} aria-hidden="true"></a>
            <a href="/images/hero-2.webp" className="glightbox hidden" data-gallery="p6" data-title="Compact City Kitchen, View 3" data-description="Open connection to the living area." tabIndex={-1} aria-hidden="true"></a>
          </div>

          <div className="portfolio-item group" data-category="office">
            <a href="/images/proj-office.webp" className="glightbox block" data-gallery="p7" data-title="Elegant Home Office" data-description="<strong>Mbezi Beach · 2025 · Modern</strong><br />A focused workspace with custom shelving, warm timber and balanced daylight.">
              <div className="card-media aspect-[4/3]">
                <img src="/images/proj-office.webp" alt="Elegant home office" loading="lazy" width="1400" height="1000" />
                <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
              </div>
              <h3 className="mt-4 text-xl">Elegant Home Office</h3>
              <div className="mt-2 flex flex-wrap gap-2"><span className="tag">Office</span><span className="tag">Modern</span></div>
            </a>
            <a href="/images/proj-office-2.webp" className="glightbox hidden" data-gallery="p7" data-title="Elegant Home Office, View 2" data-description="Shelving and storage wall." tabIndex={-1} aria-hidden="true"></a>
          </div>

          <div className="portfolio-item group" data-category="office">
            <a href="/images/proj-office-2.webp" className="glightbox block" data-gallery="p8" data-title="Creative Studio Workspace" data-description="<strong>Oysterbay · 2024 · Industrial</strong><br />Open desks, exposed textures and pin up walls for a small creative team.">
              <div className="card-media aspect-[4/3]">
                <img src="/images/proj-office-2.webp" alt="Creative studio workspace" loading="lazy" width="1400" height="1000" />
                <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
              </div>
              <h3 className="mt-4 text-xl">Creative Studio Workspace</h3>
              <div className="mt-2 flex flex-wrap gap-2"><span className="tag">Office</span><span className="tag">Industrial</span></div>
            </a>
            <a href="/images/proj-office.webp" className="glightbox hidden" data-gallery="p8" data-title="Creative Studio Workspace, View 2" data-description="Quiet focus corner." tabIndex={-1} aria-hidden="true"></a>
            <a href="/images/svc-render.webp" className="glightbox hidden" data-gallery="p8" data-title="Creative Studio Workspace, View 3" data-description="Concept visual for the studio fit out." tabIndex={-1} aria-hidden="true"></a>
          </div>

          <div className="portfolio-item group" data-category="outdoor">
            <a href="/images/proj-outdoor.webp" className="glightbox block" data-gallery="p9" data-title="Garden Terrace Retreat" data-description="<strong>Kigamboni · 2025 · Natural</strong><br />All weather seating, shade planting and warm decking for slow afternoons.">
              <div className="card-media aspect-[4/3]">
                <img src="/images/proj-outdoor.webp" alt="Garden terrace retreat" loading="lazy" width="1400" height="1000" />
                <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
              </div>
              <h3 className="mt-4 text-xl">Garden Terrace Retreat</h3>
              <div className="mt-2 flex flex-wrap gap-2"><span className="tag">Outdoor</span><span className="tag">Natural</span></div>
            </a>
            <a href="/images/proj-outdoor-2.webp" className="glightbox hidden" data-gallery="p9" data-title="Garden Terrace Retreat, View 2" data-description="Seating corner with planting." tabIndex={-1} aria-hidden="true"></a>
            <a href="/images/testi-bg.webp" className="glightbox hidden" data-gallery="p9" data-title="Garden Terrace Retreat, View 3" data-description="Evening atmosphere on the terrace." tabIndex={-1} aria-hidden="true"></a>
          </div>

          <div className="portfolio-item group" data-category="outdoor">
            <a href="/images/proj-outdoor-2.webp" className="glightbox block" data-gallery="p10" data-title="Outdoor Lounge Corner" data-description="<strong>Zanzibar · 2025 · Coastal</strong><br />A shaded lounge for sea breezes with durable fabrics and teak furniture.">
              <div className="card-media aspect-[4/3]">
                <img src="/images/proj-outdoor-2.webp" alt="Outdoor lounge corner" loading="lazy" width="1400" height="1000" />
                <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
              </div>
              <h3 className="mt-4 text-xl">Outdoor Lounge Corner</h3>
              <div className="mt-2 flex flex-wrap gap-2"><span className="tag">Outdoor</span><span className="tag">Coastal</span></div>
            </a>
            <a href="/images/proj-outdoor.webp" className="glightbox hidden" data-gallery="p10" data-title="Outdoor Lounge Corner, View 2" data-description="Terrace viewed from the garden." tabIndex={-1} aria-hidden="true"></a>
            <a href="/images/proj-living-2.webp" className="glightbox hidden" data-gallery="p10" data-title="Outdoor Lounge Corner, View 3" data-description="Indoor and outdoor connection." tabIndex={-1} aria-hidden="true"></a>
          </div>

          <div className="portfolio-item group" data-category="dining">
            <a href="/images/proj-dining.webp" className="glightbox block" data-gallery="p11" data-title="Warm Family Dining Room" data-description="<strong>Dodoma · 2024 · Rustic</strong><br />Solid wood table, woven seating and a pendant that gathers everyone in.">
              <div className="card-media aspect-[4/3]">
                <img src="/images/proj-dining.webp" alt="Warm family dining room" loading="lazy" width="1400" height="1000" />
                <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
              </div>
              <h3 className="mt-4 text-xl">Warm Family Dining Room</h3>
              <div className="mt-2 flex flex-wrap gap-2"><span className="tag">Dining</span><span className="tag">Rustic</span></div>
            </a>
            <a href="/images/proj-dining-2.webp" className="glightbox hidden" data-gallery="p11" data-title="Warm Family Dining Room, View 2" data-description="Seating and table setting detail." tabIndex={-1} aria-hidden="true"></a>
            <a href="/images/furn-table.webp" className="glightbox hidden" data-gallery="p11" data-title="Warm Family Dining Room, Furniture" data-description="Custom table built for the space." tabIndex={-1} aria-hidden="true"></a>
          </div>

          <div className="portfolio-item group" data-category="bathroom">
            <a href="/images/proj-bathroom.webp" className="glightbox block" data-gallery="p12" data-title="Luxury Marble Bathroom" data-description="<strong>Dar es Salaam · 2025 · Premium</strong><br />Marble surfaces, brushed fixtures and layered lighting in a spa like finish.">
              <div className="card-media aspect-[4/3]">
                <img src="/images/proj-bathroom.webp" alt="Luxury marble bathroom" loading="lazy" width="1400" height="1000" />
                <span className="arrow-badge" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg></span>
              </div>
              <h3 className="mt-4 text-xl">Luxury Marble Bathroom</h3>
              <div className="mt-2 flex flex-wrap gap-2"><span className="tag">Bathroom</span><span className="tag">Premium</span></div>
            </a>
            <a href="/images/proj-bathroom-2.webp" className="glightbox hidden" data-gallery="p12" data-title="Luxury Marble Bathroom, View 2" data-description="Vanity and mirror detail." tabIndex={-1} aria-hidden="true"></a>
            <a href="/images/furn-lamp.webp" className="glightbox hidden" data-gallery="p12" data-title="Luxury Marble Bathroom, Lighting" data-description="Warm lighting accents used throughout." tabIndex={-1} aria-hidden="true"></a>
          </div>

        </div>
      </div>
    </section>

     {/* ============ CTA ============ */} 
    <section className="relative overflow-hidden bg-espresso py-24 text-center">
      <div className="band-bg"><img src="/images/proj-dining-2.webp" alt="" loading="lazy" /></div>
      <div className="container-page relative z-10">
        <h2 className="title-lg mx-auto max-w-3xl text-white" data-reveal>Want a space like these?</h2>
        <p className="mx-auto mt-5 max-w-xl text-white/85">Tell us about your project and we will come back to you within one business day.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4" data-reveal>
          <a className="btn-primary" href="/contact">Book a Consultation</a>
          <a className="btn-ghost-light" href="https://wa.me/17708994600" target="_blank" rel="noopener">Chat on WhatsApp</a>
        </div>
      </div>
    </section>

  </main>
  );
}
