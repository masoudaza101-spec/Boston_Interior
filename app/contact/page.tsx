import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Contact & Consultation",
  "description": "Book a consultation with Boston Interior, contact form, WhatsApp, phone and social links. We reply within one business day.",
  "openGraph": {
    "title": "Contact & Consultation · Boston Interior",
    "description": "Tell us about your project, book a consultation via form, WhatsApp or phone.",
    "type": "website",
    "images": [
      "/images/proj-living-2.webp"
    ]
  }
};

export default function ContactPage() {
  return (
<main>

     {/* ============ PAGE HERO ============ */} 
    <section className="page-hero">
      <div className="page-hero-bg"><img src="/images/proj-living-2.webp" alt="" fetchPriority="high" /></div>
      <div className="container-page relative z-10">
        <nav aria-label="Breadcrumb" className="mb-5 text-xs uppercase tracking-[0.2em] text-white/65">
          <a href="/" className="transition hover:text-white">Home</a> / <span className="text-bronze-300">Contact</span>
        </nav>
        <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-bronze-300" data-reveal><span className="h-px w-10 bg-bronze-300/60"></span>Get in Touch</span>
        <h1 className="title-xl max-w-3xl text-white" data-reveal>Book a consultation</h1>
        <p className="hero-sub mt-5" data-reveal>Tell us about your space and your ideas, we reply to every enquiry within one business day.</p>
      </div>
    </section>

     {/* ============ FORM + INFO ============ */} 
    <section className="section">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16" data-reveal-stagger>

        <div className="lg:col-span-7">
          <span className="eyebrow" data-reveal>Consultation Request</span>
          <h2 className="title-md" data-reveal>Tell us about your project</h2>

          <form id="consultation-form" className="mt-8 grid gap-5 sm:grid-cols-2" data-reveal-stagger noValidate>
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <div className="field">
              <label className="field-label" htmlFor="name">Full name *</label>
              <input className="field-input" type="text" id="name" name="name" placeholder="Your name" autoComplete="name" required />
              <p className="field-error">Please enter your name.</p>
            </div>

            <div className="field">
              <label className="field-label" htmlFor="email">Email *</label>
              <input className="field-input" type="email" id="email" name="email" placeholder="you@example.com" autoComplete="email" required />
              <p className="field-error">Please enter a valid email address.</p>
            </div>

            <div className="field">
              <label className="field-label" htmlFor="phone">Phone / WhatsApp *</label>
              <input className="field-input" type="tel" id="phone" name="phone" placeholder="+255 655 743 141" autoComplete="tel" required />
              <p className="field-error">Please enter a valid phone number.</p>
            </div>

            <div className="field">
              <label className="field-label" htmlFor="project-type">Project type *</label>
              <select className="field-input" id="project-type" name="project-type" required>
                <option value="">Select a service</option>
                <option value="residential">Residential Interior Design</option>
                <option value="commercial">Commercial Interior Design</option>
                <option value="space-planning">Space Planning</option>
                <option value="decoration">Decoration &amp; Styling</option>
                <option value="furniture">Furniture Customization</option>
                <option value="other">Other / Not sure yet</option>
              </select>
              <p className="field-error">Please choose a project type.</p>
            </div>

            <div className="field sm:col-span-2">
              <label className="field-label" htmlFor="budget">Budget range <span className="font-normal text-espresso/55">(optional)</span></label>
              <select className="field-input" id="budget" name="budget">
                <option value="">Select a range</option>
                <option value="under-1k">Under USD 1,000</option>
                <option value="1k-5k">USD 1,000 to 5,000</option>
                <option value="5k-15k">USD 5,000 to 15,000</option>
                <option value="15k-plus">USD 15,000+</option>
                <option value="discuss">Prefer to discuss</option>
              </select>
            </div>

            <div className="field sm:col-span-2">
              <label className="field-label" htmlFor="message">Project details *</label>
              <textarea className="field-input" id="message" name="message" rows={5} data-lenis-prevent placeholder="Tell us about the space, location, timeline and what you have in mind..." required></textarea>
              <p className="field-error">Tell us a little more (at least 10 characters).</p>
            </div>

            <div className="field sm:col-span-2">
              <label className="field-label" htmlFor="photo">Photo / inspiration <span className="font-normal text-espresso/55">(optional, max 5MB)</span></label>
              <input className="field-input" type="file" id="photo" name="photo" accept="image/jpeg,image/png,image/webp,application/pdf" />
              <p className="field-error" id="photo-error">Max 5MB: JPG, PNG, WEBP or PDF.</p>
            </div>

            <div className="sm:col-span-2">
              <button className="btn-primary w-full sm:w-auto" type="submit">Book My Consultation</button>
              <div id="form-status" className="mt-5 hidden rounded-lg p-4 text-sm"></div>
            </div>
          </form>
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-xl bg-espresso p-8 text-white">
            <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-bronze-300" data-reveal><span className="h-px w-10 bg-bronze-300/60"></span>Contact Details</span>
            <h2 className="text-2xl text-white">Talk to us directly</h2>

            <div className="mt-7 space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-bronze-300">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4a9.36 9.36 0 0 1 6.65 2.76 9.32 9.32 0 0 1 2.75 6.65c0 5.18-4.22 9.4-9.39 9.4z"/></svg>
                </span>
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <a className="text-white/85 transition hover:text-white" href="https://wa.me/17708994600" target="_blank" rel="noopener">+1 770 899 4600</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-bronze-300">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/></svg>
                </span>
                <div>
                  <p className="font-semibold text-white">Call</p>
                  <a className="text-white/85 transition hover:text-white" href="tel:+255655743141">+255 655 743 141</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-bronze-300">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                </span>
                <div>
                  <p className="font-semibold text-white">Working Hours</p>
                  <p className="text-white/85">Monday to Saturday, 08:00 to 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-bronze-300">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>
                </span>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a className="text-white/85 transition hover:text-white" href="mailto:info@bostoninterior.co.tz">info@bostoninterior.co.tz</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-bronze-300">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
                </span>
                <div>
                  <p className="font-semibold text-white">Studio</p>
                  <p className="text-white/85">Dar es Salaam, Tanzania, by appointment</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3 border-t border-white/10 pt-7">
              <a className="social-link" href="https://wa.me/17708994600" target="_blank" rel="noopener" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4a9.36 9.36 0 0 1 6.65 2.76 9.32 9.32 0 0 1 2.75 6.65c0 5.18-4.22 9.4-9.39 9.4z"/></svg>
              </a>
              <a className="social-link" href="https://www.instagram.com/boston_interiorbysabrah" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a className="social-link" href="https://www.linkedin.com/in/boston_interiorbysabrah" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z"/></svg>
              </a>
              <a className="social-link" href="https://www.tiktok.com/@boston_interiorbysabrah" target="_blank" rel="noopener" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-espresso/10 bg-cream-light p-6">
            <h3 className="text-lg">What happens next?</h3>
            <ol className="mt-3 space-y-2 text-sm text-espresso/75">
              <li><strong className="text-espresso">1.</strong> We review your enquiry and reply within one business day.</li>
              <li><strong className="text-espresso">2.</strong> A free 20 minute call to understand your space and goals.</li>
              <li><strong className="text-espresso">3.</strong> A tailored proposal with scope, timeline and budget.</li>
            </ol>
          </div>
        </aside>

      </div>
    </section>

  </main>
  );
}
