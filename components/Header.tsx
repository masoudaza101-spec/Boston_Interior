export default function Header() {
  return (
    <>
<header className="site-header on-dark">
    <div className="container-page">
      <div className="header-inner">
        <a href="/" className="flex shrink-0 items-center gap-3" aria-label="Boston Interior, home">
          <img src="/images/logo-white.png" alt="Boston Interior logo" width="58" height="48" className="logo-white h-12 w-auto" />
          <img src="/images/logo-dark.png" alt="" aria-hidden="true" width="58" height="48" className="logo-main h-12 w-auto" />
          <span className="logo-word hidden leading-none sm:block">
            <span className="block text-sm font-bold uppercase tracking-[0.18em]">Boston Interior</span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.35em] opacity-60">by Sabrah</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          <a className="nav-link" href="/">Home</a>
          <a className="nav-link" href="/about">About</a>
          <a className="nav-link" href="/services">Services</a>
          <a className="nav-link" href="/portfolio">Portfolio</a>
          <a className="nav-link" href="/furniture">Products</a>
          <a className="nav-link" href="/contact">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <a className="btn-header hidden sm:inline-flex" href="/contact">Book a Consultation</a>
          <button className="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <div id="mobile-menu" aria-label="Mobile navigation">
    <nav className="flex flex-col items-center gap-6 text-2xl font-medium text-white" aria-label="Mobile">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/services">Services</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/furniture">Products</a>
      <a href="/contact">Contact</a>
    </nav>
    <a className="btn-primary mt-4" href="/contact">Book a Consultation</a>
    <div className="flex gap-3">
      <a className="social-link" href="https://wa.me/17708994600" target="_blank" rel="noopener" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4a9.36 9.36 0 0 1 6.65 2.76 9.32 9.32 0 0 1 2.75 6.65c0 5.18-4.22 9.4-9.39 9.4zM20.52 3.45A11.78 11.78 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L.08 24l6.35-1.66a11.85 11.85 0 0 0 5.61 1.43h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.16-3.39-8.41z"/></svg>
      </a>
      <a className="social-link" href="https://www.instagram.com/boston_interiorbysabrah" target="_blank" rel="noopener" aria-label="Instagram">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>
      </a>
      <a className="social-link" href="tel:+255655743141" aria-label="Call us">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/></svg>
      </a>
    </div>
  </div>
    </>
  );
}
