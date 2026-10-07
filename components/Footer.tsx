export default function Footer() {
  return (
    <>
<footer className="bg-espresso-900 text-white/70">
    <div className="container-page py-16">
      <div className="grid gap-12 lg:grid-cols-12" data-reveal-stagger>
        <div className="lg:col-span-4">
          <img src="/images/logo-white.png" alt="Boston Interior" width="70" height="58" className="h-16 w-auto" />
          <p className="mt-5 text-sm leading-relaxed">
            Transform your home, office or commercial space with professional interior design tailored
            to your vision and lifestyle, from concept development to final styling.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="social-link" href="https://wa.me/17708994600" target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4a9.36 9.36 0 0 1 6.65 2.76 9.32 9.32 0 0 1 2.75 6.65c0 5.18-4.22 9.4-9.39 9.4zM20.52 3.45A11.78 11.78 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L.08 24l6.35-1.66a11.85 11.85 0 0 0 5.61 1.43h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.16-3.39-8.41z"/></svg>
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

        <div className="lg:col-span-2">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a className="transition hover:text-white" href="/">Home</a></li>
            <li><a className="transition hover:text-white" href="/about">About Us</a></li>
            <li><a className="transition hover:text-white" href="/services">Services</a></li>
            <li><a className="transition hover:text-white" href="/portfolio">Portfolio</a></li>
            <li><a className="transition hover:text-white" href="/furniture">Furniture</a></li>
            <li><a className="transition hover:text-white" href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Our Services</h3>
          <ul className="space-y-3 text-sm">
            <li><a className="transition hover:text-white" href="/services">Residential Interior Design</a></li>
            <li><a className="transition hover:text-white" href="/services">Commercial Interior Design</a></li>
            <li><a className="transition hover:text-white" href="/services">Space Planning</a></li>
            <li><a className="transition hover:text-white" href="/services">Decoration &amp; Styling</a></li>
            <li><a className="transition hover:text-white" href="/services">Furniture Customization</a></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-bronze-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              <span>Monday to Saturday<br />08:00 to 18:00</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-bronze-300" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4a9.36 9.36 0 0 1 6.65 2.76 9.32 9.32 0 0 1 2.75 6.65c0 5.18-4.22 9.4-9.39 9.4z"/></svg>
              <a className="transition hover:text-white" href="https://wa.me/17708994600" target="_blank" rel="noopener">WhatsApp +1 770 899 4600</a>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-bronze-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/></svg>
              <a className="transition hover:text-white" href="tel:+255655743141">+255 655 743 141</a>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-bronze-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>
              <a className="transition hover:text-white" href="mailto:info@bostoninterior.co.tz">info@bostoninterior.co.tz</a>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-bronze-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
              <span>Dar es Salaam, Tanzania<br />By appointment</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
        <p>© <span className="current-year">2026</span> Boston Interior by Sabrah. All rights reserved.</p>
        <p>Interior Design · Decoration · Furniture</p>
      </div>
    </div>
  </footer>

  <a href="https://wa.me/17708994600" target="_blank" rel="noopener" aria-label="Chat with Boston Interior on WhatsApp" className="fixed bottom-6 right-6 z-[800] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] transition duration-300 hover:scale-110">
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4a9.36 9.36 0 0 1 6.65 2.76 9.32 9.32 0 0 1 2.75 6.65c0 5.18-4.22 9.4-9.39 9.4zM20.52 3.45A11.78 11.78 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L.08 24l6.35-1.66a11.85 11.85 0 0 0 5.61 1.43h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.16-3.39-8.41z"/></svg>
  </a>
    </>
  );
}
