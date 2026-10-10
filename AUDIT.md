# Boston Interior: site audit

Audited 10 October 2026 against the live site, https://boston-interior-m1c5.vercel.app/, and the code it is built from: `origin/main` at commit `83cff1b`.

**Read this first.** Your local checkout is 4 commits behind `origin/main`. The remote was migrated from Vite to Next.js and redesigned ("Migrate to Next.js app", "picture change", "new design", "snacks"), and that Next.js version is what is live. All file and line references below are to `origin/main` (`83cff1b`), not to the files currently on your disk. Nothing in the site source has been changed. See question Q1.

## 1. Site summary

**Stack.** Next.js 15.5 App Router with `output: "export"` (fully static), React 19, TypeScript, Tailwind 3. Interactivity is not React: `components/ClientScripts.tsx` dynamically imports legacy jQuery modules (`src/ts/*.ts`) that drive Swiper (sliders), GLightbox (portfolio lightbox) and Lenis (smooth scroll). Hosted on Vercel.

**Pages.**

| Route | File | What it holds |
|---|---|---|
| `/` | `app/page.tsx` (425 lines) | Hero slider, marquee, about, stats, services, projects, testimonials, process, furniture teaser, FAQ, CTA band |
| `/about` | `app/about/page.tsx` | Story, mission and vision, approach, stats, disciplines, CTA band |
| `/services` | `app/services/page.tsx` | Five service rows, process, CTA band |
| `/portfolio` | `app/portfolio/page.tsx` | Filters, 12 project cards with lightbox, CTA band |
| `/furniture` (nav label "Products") | `app/furniture/page.tsx` | 12 products with quantity and "Add to Inquiry", woods grid, custom band, inquiry drawer |
| `/contact` | `app/contact/page.tsx` | Enquiry form with product picker, contact details, "What happens next" |

**Shared components.** `Header.tsx` (nav and mobile menu), `Footer.tsx` (footer and floating WhatsApp button), `Skeleton.tsx` (full-screen loading overlay), `ClientScripts.tsx`. Everything else is repeated markup inside the pages.

**Content and data.** Copy is hardcoded in the page files. The only data module is `src/ts/products.ts` (12 products). The inquiry basket is stored in `localStorage` (`src/ts/inquiry-store.ts`). Images are single-size WebP files in `public/images` served through plain `<img>` tags.

**Forms.** One form, on `/contact`, posted by `src/ts/form.ts` to Formspree using `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.

**Design system as built.**

| Element | Current state |
|---|---|
| Colours | `bronze` #805231 (10 shades, 6 unused), `espresso` #341F16, `cream` #F0EBE5 with light and dark variants. No success, error or warning tokens. |
| Font | DM Sans only, weights 400, 500 and 700 loaded. Weight 600 is the most-used weight in the CSS but is not loaded. |
| Type scale | `.title-xl`, `.title-lg`, `.title-md`, `.lead`, `.eyebrow`, plus three fluid hero classes and about ten off-scale raw sizes. |
| Spacing | `.container-page` (1400px max), `.section` (`py-20 md:py-28`), Tailwind default scale. |
| Radius, shadow, z-index | No tokens. Ten different z-index values, 13 raw shadows. |
| Buttons | `.btn-primary`, `.btn-outline`, `.btn-light`, `.btn-ghost-light`, `.btn-header`, plus six one-off button styles. No focus or disabled states. |
| Icons | Inline SVG pasted at each use. |

## 2. Baseline measurements

**Build.** `npm run build` succeeds (9 static pages, 103 kB first-load JS per route). `npx tsc --noEmit` passes. `npm run lint` fails with "Missing script": there is no linter, formatter, test or CI configuration.

**Lighthouse 13, live site.**

| Page | Mode | Performance | Accessibility | Best practices | SEO | FCP | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|---|---|
| Home | Mobile | 74 | 100 | 100 | 100 | 2.9 s | 4.0 s | 190 ms | 0 |
| Home | Desktop | 73 | 100 | 96 | 100 | 1.9 s | 2.3 s | 0 ms | 0 |
| About | Mobile | 73 | 100 | 100 | 100 | 2.5 s | 4.1 s | 300 ms | 0 |
| About | Desktop | 85 | 100 | 96 | 100 | 1.5 s | 1.5 s | 0 ms | 0 |
| Services | Mobile | 77 | 100 | 96 | 100 | 2.3 s | 3.0 s | 370 ms | 0 |
| Services | Desktop | 77 | 100 | 96 | 100 | 2.0 s | 2.0 s | 0 ms | 0.02 |
| Portfolio | Mobile | 68 | 98 | 96 | 100 | 3.7 s | 5.3 s | 30 ms | 0 |
| Portfolio | Desktop | 78 | 98 | 96 | 100 | 1.8 s | 1.8 s | 0 ms | 0 |
| Products | Mobile | 74 | 100 | 96 | 100 | 3.8 s | 3.8 s | 110 ms | 0 |
| Products | Desktop | 85 | 100 | 96 | 100 | 1.5 s | 1.5 s | 0 ms | 0.003 |
| Contact | Mobile | 69 | 97 | 100 | 100 | 3.4 s | 4.2 s | 290 ms | 0 |
| Contact | Desktop | 94 | 97 | 100 | 100 | 1.1 s | 1.1 s | 0 ms | 0 |

Two cautions on reading these. The home page was run twice and its performance score moved between 73 and 83 on desktop, so treat single-point differences as noise. The accessibility and SEO scores of 97 to 100 overstate the real position: Lighthouse does not test focus management, announcements, autoplay, or whether the canonical domain works, and most findings in sections 3.4 and 3.6 are outside what it checks.

**Lighthouse failures.** Render-blocking requests (0.7 to 2.6 s estimated saving per page), image delivery (up to 1.2 MB saving on Products desktop), unused JavaScript (63 to 91 KiB per page), incorrect image aspect ratio (five pages), heading order (Portfolio), colour contrast (Contact), label and accessible-name mismatch (desktop header).

**Browser checks at 375, 768 and 1440 px.** No horizontal overflow, no console errors, no failed requests and no broken images on any page. The loading overlay stayed up for 1.0 to 3.9 s after load. Mobile page length: Home 12,787 px, Products 10,145 px.

**Behaviour tests on the live site.**

| Test | Result |
|---|---|
| Submit a valid enquiry | No request is sent. The page shows "The form is not connected yet. Please reach us directly on WhatsApp +1 770 899 4600 (optional) or call +255 655 743141." |
| Submit an empty form | Five inline errors appear and focus moves to the first field. |
| Open mobile menu, press Escape | Menu stays open. The button label stays "Open menu". |
| Tab through the header | Focus ring is the browser default, 1px dark, on a dark photo. |
| Add a product to the inquiry | Button text changes; the drawer does not open and nothing else confirms it. |
| Old URLs such as `/about.html` | 404. |

## 3. Findings

Severity: **Critical** blocks enquiries or damages trust outright; **High** is a clear loss of conversions, accessibility or search visibility; **Medium** is a noticeable quality problem; **Low** is polish or hygiene.

### 3.1 UX and conversion

| ID | Where | File:line | Problem | Severity | Proposed fix and reason |
|---|---|---|---|---|---|
| UX-01 | Contact form | `src/ts/form.ts:17,200-205` | The live form cannot send. `NEXT_PUBLIC_FORMSPREE_ENDPOINT` was not set when Vercel built the site, so every valid submission ends at "The form is not connected yet". Every "Book a Consultation" and "Request Quote" button leads here. | Critical | Set the variable in Vercel and redeploy; add a build-time check that fails the build when it is empty. A form that silently cannot send loses every enquiry it receives. |
| UX-02 | All pages | `Footer.tsx:14,61,88`, `Header.tsx:44`, `app/contact/page.tsx:142,188`, `src/ts/inquiry.ts:15`, 6 more | WhatsApp goes to a US number, +1 770 899 4600, beside a Tanzanian phone number. It is hardcoded in 13 places and is the only persistent contact action on phones. | Critical | Confirm the right number (Q2), then move phone, WhatsApp, email and socials into one `lib/site.ts` config. A foreign number on a Dar es Salaam studio reads as a mistake or a scam, and one source removes the 13-place edit. |
| UX-03 | Portfolio, Products, alt text | `app/portfolio/page.tsx:29,50-201`, `app/furniture/page.tsx:101-120`, `src/ts/products.ts:98`, `public/images/credits.json` | All 56 images are Pexels or Wikimedia stock, but the copy says "Every project below is a real brief", gives each an invented location and year, reuses photos as extra "views" of other projects, labels stock photos "made by Boston Interior", and claims "FSC walnut". | Critical | Replace with real project photos if they exist (Q3). Until then, remove the false claims: relabel as "design inspiration" or "styles we work in", drop invented locations, years and the FSC claim, and fix the alt text. Presenting stock as completed work is the fastest way to lose a client who notices, and it is a consumer-protection risk. |
| UX-04 | Home, About | `app/page.tsx:95-107,271-295`, `app/about/page.tsx:120-133` | Testimonials are first name, initial and city with generic quotes. Stats (5000+, 150+, 120+, 10+) are hardcoded as `0` in the HTML and only count up with JavaScript, so crawlers and no-JS visitors read "0 Projects Completed". | High | Use real, attributable testimonials and verified figures (Q3); render the final numbers in the HTML and animate from there. Unverifiable praise reads as invented, and "0" in the source is what search engines index. |
| UX-05 | Home hero | `app/page.tsx:23-34`, `src/css/tailwind.css:59-63` | The first screen says "Refined Interiors, Elevated Living" with no location, audience, proof or phone. At 1440px the lead paragraph is 64px and runs off the bottom of the screen; white text over the bright second slide is hard to read. | High | Rewrite to state what, for whom and where (for example interior design and custom furniture in Dar es Salaam), add one proof line and the free 20 minute call offer, cap `.hero-lead` near 1.5rem, and strengthen the overlay. Visitors decide in the first screen whether the studio serves them. |
| UX-06 | Header, mobile | `components/Header.tsx:24` | The header CTA is `hidden sm:inline-flex`, so on phones the only persistent action is the WhatsApp bubble. | High | Show a compact "Book" button or a call icon in the mobile header. Most visitors are on phones and should always be one tap from contact. |
| UX-07 | Inquiry basket | `src/ts/inquiry.ts:113-186`, `app/furniture/page.tsx:160-186` | After "Add to Inquiry" nothing confirms the action and the drawer stays closed; the bag icon exists only on `/furniture`; "Continue to Contact Us" does not preselect the project type; no prices or price guide. | High | Open the drawer, or show a confirmation with a "View inquiry" link, on add; show the bag count in the header on every page; link to `/contact?service=Furniture`; add "from" prices if available (Q6). Unconfirmed actions make people doubt the basket worked. |
| UX-08 | Contact form | `app/contact/page.tsx:58,67,90-93,104,119` | Phone is required and its placeholder is the studio's own number; budget is in USD; "WhatsApp (optional)" wording is confusing; a 12-row product picker sits inside the form and makes it very long on phones; the photo upload needs a paid Formspree plan. | High | Make phone optional or explain why it is needed, use a neutral placeholder, show TZS (with USD if wanted), collapse the picker behind "Add products", and confirm the Formspree plan (Q4). Each extra required field lowers completion. |
| UX-09 | About, Portfolio | `app/about/page.tsx:181`, `app/portfolio/page.tsx:215` | About has one CTA, at the very bottom. Portfolio cards only open a lightbox, with no "start a project like this" action. | Medium | Add a CTA after the story section and an enquiry link per project that prefills the form. Interest peaks while looking at work, so the action should be there. |
| UX-10 | Home, Footer | `app/page.tsx:131-245`, `components/Footer.tsx:44-48` | All service cards, project cards and footer service links go to the top of `/services` or `/portfolio`, not to the item clicked. | Medium | Add ids to service rows and link to them; link project cards to the matching portfolio item or filter. A click on "Space Planning" should land on Space Planning. |
| UX-11 | Trust content | `app/about/page.tsx:46-59`, `app/contact/page.tsx:182` | No founder photo or bio, no team, no street address or map, no privacy policy although the form collects personal data and files, no pricing guide, no case studies, FAQ only on Home. | High | Add a founder section with photo, an address or service-area map, a privacy policy page, and a short pricing or "how we charge" guide (Q6). These are the proofs a first-time client looks for before sending details. |
| UX-12 | Floating buttons, mobile | `components/Footer.tsx:88`, `src/css/tailwind.css:663-667` | The WhatsApp bubble covers the email field on `/contact` and, with the basket button, covers product images and badges on `/furniture`. | Medium | Hide the bubble while a form field is focused and on `/contact`, and merge the basket into the header. Floating controls should not sit on the content being used. |
| UX-13 | 404 and old URLs | no `app/not-found.tsx`; `vercel.json` | Unknown URLs show the unbranded Next.js 404. The pre-migration URLs (`/about.html` and so on) all 404. | Medium | Add a branded `not-found.tsx` with links and a CTA, and redirects from the `.html` URLs in `vercel.json`. Old links and search results should not dead-end. |
| UX-14 | Naming | `Header.tsx`, `app/furniture/page.tsx:3-14` | The route is `/furniture`, the nav says "Products", the title says "Products & Décor"; the page hero lists ten woods, the body says eleven. | Low | Pick one name and one count. Small contradictions add up to a careless impression. |
| UX-15 | Navigation | all pages | Every link is a plain `<a>`, so each click reloads the document and replays the loading overlay. | Medium | Addressed with PERF-01 and CODE-01. |

### 3.2 Visual design

| ID | Where | File:line | Problem | Severity | Proposed fix and reason |
|---|---|---|---|---|---|
| VIS-01 | All cards | `src/css/tailwind.css:98-100` | `.card-media img` has no `object-cover`, so photos are stretched to the box: about 14% on Home project cards, 3 to 5% elsewhere. Lighthouse flags it on five pages. | High | Add `object-cover` to the rule. Distorted photographs are immediately visible on a design studio's site. |
| VIS-02 | Typography | `src/css/tailwind.css:1`; 41 `font-semibold` uses | Weight 600 is used for buttons, eyebrows, labels and stats but not loaded, so the browser substitutes 700 and semibold looks the same as bold. | High | Load DM Sans as a variable font through `next/font` covering 400 to 700. The intended hierarchy between medium, semibold and bold currently does not exist. |
| VIS-03 | Design tokens | `tailwind.config.js:6-37`, `src/css/tailwind.css:656-1032` | No tokens for radius, shadow, z-index, semantic colours or letter-spacing. The 375 lines added in the redesign use 40 raw hex and 37 raw rgba values, ten off-scale font sizes and sit outside `@layer`. Off-palette colours: #c08a52, #e6dfd6, rgba(43,25,17). | Medium | Define the token set first (see fix plan group 0) and rewrite the new CSS against it. Tokens are what keep later fixes consistent. |
| VIS-04 | Home projects grid, 1440px | `app/page.tsx:186-255` | Cards have mixed aspect ratios and offsets that read as misalignment rather than intent. | Medium | Use one ratio and a regular grid, or a deliberate two-size pattern. A premium feel depends on visible order. |
| VIS-05 | Photography | `public/images/*` | Photo styles clash: turquoise LED lighting, dark amber rooms and bright white rooms sit side by side; the first hero image is a television wall. | Medium | Curate to one light, warm palette and choose a hero that shows a finished room. Consistent imagery is most of the brand on a portfolio site. Depends on Q3. |
| VIS-06 | Buttons | `src/css/tailwind.css:70-84,207-209,462-467` | Six one-off button styles outside the `.btn` system; `.btn:hover` and `.btn:active` match nothing because no element has the `btn` class; no disabled style. | Medium | Rebuild as one base plus variants with hover, focus, active and disabled states. One system makes every button behave the same. |
| VIS-07 | Body text | `src/css/tailwind.css:13-14` | `line-height: 30px` is fixed, so it is too loose for small text and too tight for large text wherever no `leading-*` is set. | Low | Use a unitless 1.6. Line height should scale with font size. |
| VIS-08 | Small text | `Header.tsx:12`, `src/css/tailwind.css:106` | "by Sabrah" is 10px at 60% opacity; tags are 11px; wood badges 10.56px. | Low | Minimum 12px. Text below that is unreadable on phones. |
| VIS-09 | Logo | `public/images/logo-*.png`, `public/favicon.png` | Logos are 98×81 PNG shown up to 64px tall, so they are soft on high-density screens. The favicon is 77×64, not square. | Medium | Supply an SVG logo and a square icon set (Q7). The logo is the first brand mark people see. |
| VIS-10 | Loading overlay | `components/Skeleton.tsx`, `src/css/tailwind.css:538-559` | The skeleton uses a 1200px container while the site uses 1400px, so the layout jumps when it lifts. | Low | Removed by PERF-01. |

### 3.3 Responsive and mobile

| ID | Where | File:line | Problem | Severity | Proposed fix and reason |
|---|---|---|---|---|---|
| RES-01 | Tap targets | `src/css/tailwind.css:140,225,284-286,834,869,993`, `app/furniture/page.tsx:173` | Under 44px: burger 40px, social links 40px, drawer close 36px, quantity buttons 38px wide (30px in the form), checkboxes 20px, footer links 18px tall, slider bullets 8px. | Medium | Raise all to 44px, with padding on text links. This is your stated minimum and what thumbs need. |
| RES-02 | Home hero, tablet and desktop | `src/css/tailwind.css:59-63` | At 768px the lead paragraph wraps to ten lines beside the buttons; at 1440px it is cut off. | High | Same fix as UX-05. |
| RES-03 | Page length, mobile | `app/page.tsx`, `app/furniture/page.tsx` | Home is 12,787px and Products 10,145px tall at 375px, mostly single-column cards. | Medium | Use two-column or horizontally scrolling cards for services, projects and woods on phones. Long scrolls bury the CTA and FAQ. |
| RES-04 | Hover effects | `src/css/tailwind.css:101-103,417` | Image zoom and marquee pause are hover-only. No content is hidden behind hover. | Low | Add `:focus-visible` equivalents. Keyboard and touch users should get the same feedback. |
| RES-05 | Layering | `src/css/tailwind.css:219,667` | The basket button (z-index 860) sits above the open mobile menu (850) on `/furniture`. | Low | Fix with z-index tokens. |

### 3.4 Accessibility (WCAG 2.2 AA)

| ID | Where | File:line | Problem | Severity | Proposed fix and reason |
|---|---|---|---|---|---|
| A11Y-01 | Focus styles | `src/css/tailwind.css:127,856,865`; no global rule | No `:focus-visible` style on links or buttons; the default 1px dark ring is invisible on espresso, bronze and photos. Inputs remove the outline and use a 15% ring. Fails 2.4.7 and 2.4.11. | High | Add one global focus ring token (2px, offset, light on dark and dark on light). Keyboard users must see where they are. |
| A11Y-02 | Skip link | `app/layout.tsx:37-43` | No skip-to-content link. Fails 2.4.1. | High | Add one as the first focusable element. It saves keyboard users seven tab stops on every page. |
| A11Y-03 | Mobile menu | `components/Header.tsx:25-54`, `src/ts/main.ts:53-67` | Escape does not close it (tested), focus is not trapped or returned, the label stays "Open menu", the container has an `aria-label` but no role, and the page still scrolls behind it. | High | Rebuild as a React dialog with focus trap, Escape, label toggle and scroll lock. This is the only navigation on phones. |
| A11Y-04 | Inquiry drawer | `app/furniture/page.tsx:160-191`, `src/ts/inquiry.ts:113-141` | Declared `role="dialog" aria-modal` but focus is not moved in, trapped or returned; add, remove and count changes are not announced; removing an item drops focus to the page. | High | Share the dialog behaviour from A11Y-03 and add a polite live region. A modal that does not manage focus strands screen-reader users. |
| A11Y-05 | Sliders | `src/ts/main.ts:230-264`, `src/css/tailwind.css:284-286` | Hero and testimonials autoplay with no pause control and ignore reduced motion (fails 2.2.2); bullets are 8px, unlabelled and not focusable (fails 2.1.1 and 2.5.8). | High | Add pause, previous and next buttons, stop autoplay under reduced motion, and enable Swiper's accessibility module, or replace the testimonial slider with a static grid. Moving content that cannot be stopped is a barrier. |
| A11Y-06 | Form feedback | `app/contact/page.tsx:47-125`, `src/ts/form.ts:45,81` | Error text is not linked to inputs with `aria-describedby`; `#form-status` has no `role="status"`; the asterisk is never explained. | High | Link errors, add the live region, add a "required" note. Screen-reader users currently get no confirmation that the form succeeded or failed. |
| A11Y-07 | Contrast | `src/css/tailwind.css:127,952-957`, `app/contact/page.tsx:69,87,100,106,118`, `Header.tsx:12`, `Footer.tsx:88` | Placeholders about 2.1:1; `text-espresso/55` hints about 3.5:1; `text-espresso/60` small text about 4.0:1; "by Sabrah" about 4.0:1 at 10px; WhatsApp glyph on green about 2.0:1. Lighthouse confirms on Contact. | Medium | Raise text to at least 4.5:1 using tokenised muted colours; darken the WhatsApp green. Ratios are calculated from the palette, to be confirmed in the fix. |
| A11Y-08 | FAQ | `app/page.tsx:364-398`, `src/css/tailwind.css:158-170` | Collapsed answers are hidden only with `max-height: 0; opacity: 0`, so screen readers read all answers while `aria-expanded="false"`. No `aria-controls`. | Medium | Use `hidden` or native `<details>` with ids and `aria-controls`. State and content must agree. |
| A11Y-09 | Headings | `app/portfolio/page.tsx:55`, `app/about/page.tsx:66,74` | Portfolio jumps from h1 to h3 (Lighthouse confirms); Mission and Vision are h3 with no h2. | Low | Correct the levels. Headings are the page outline for screen-reader users. |
| A11Y-10 | Icons and links | `Footer.tsx:15-89`, `Header.tsx:45-51`, others | Decorative SVGs lack `aria-hidden`; links that open a new tab do not say so; no `aria-current` on the active nav item or breadcrumb; header CTA accessible name does not match its visible text. | Low | Fix in a shared `Icon` component and nav component. |
| A11Y-11 | Reduced motion | `src/ts/main.ts:162-194`, `src/ts/gallery.ts:19`, `wa-pulse` in `tailwind.css` | Counters, gallery fades and the WhatsApp pulse still animate under reduced motion. | Low | Guard each with the existing reduced-motion check. |
| A11Y-12 | Alt text | `app/page.tsx:13,133,142,160`, portfolio cards | Several alts repeat the adjacent heading; one says "ethnic furniture" for a different photo. False-authorship alts are covered by UX-03. | Low | Describe what is in the photo. |

### 3.5 Performance

| ID | Where | File:line | Problem | Severity | Proposed fix and reason |
|---|---|---|---|---|---|
| PERF-01 | Loading overlay | `components/Skeleton.tsx`, `app/layout.tsx:14,38-39`, `src/ts/main.ts:271-287`, `src/css/tailwind.css:313-315` | A full-screen overlay covers every page until hydration, a dynamic chunk and `window.load` have all finished (measured 1.0 to 3.9 s after load), and headings start at `opacity: 0`. It replays on every click because every link is a full reload. | High | Remove the overlay, render above-the-fold content visible, and keep reveal effects for below-the-fold only. The site is static HTML that could paint in under a second but is hidden behind its own loader. |
| PERF-02 | JavaScript | `src/ts/main.ts:1-29`, `components/ClientScripts.tsx` | jQuery (87 KB), Swiper and Lenis (103 KB) load on every page on top of the React runtime; sliders exist only on Home. Lenis runs an animation-frame loop forever. Lighthouse: 63 to 91 KiB unused per page, 3.7 to 5.3 s main-thread work on mobile. | High | Load Swiper only on Home, drop Lenis or limit it to desktop, and replace jQuery with small React components (Q5). Less script is the main lever on mobile time-to-interactive. |
| PERF-03 | Images | all `<img>`; `next.config.mjs:4` | One size per image, no `srcset`, no AVIF: 1920px heroes go to phones and 1400px files fill 400px cards. Lighthouse estimates up to 1.2 MB saving on Products. | High | Generate 480, 960 and 1600px WebP and AVIF variants with the existing `sharp` dependency and serve them through one `<Picture>` component. Images are most of the page weight. |
| PERF-04 | Fonts | `src/css/tailwind.css:1` | Google Fonts is loaded by a CSS `@import`, a render-blocking chain with no preconnect. Lighthouse: 0.7 to 2.6 s render-blocking saving. | High | Use `next/font` (self-hosted, preloaded). It removes two blocking round trips and fixes VIS-02 in the same change. |
| PERF-05 | Caching | live response headers | `/images/*` is served with `cache-control: max-age=0, must-revalidate`. | Medium | Hash image filenames or add a long cache rule in `vercel.json`. Repeat views should not revalidate every image. |
| PERF-06 | Eager and duplicate loads | `app/page.tsx:13`, `Header.tsx:8-9`, `app/layout.tsx:4-8` | The second hero slide (124 KB) loads eagerly; both logo variants are preloaded; GLightbox and Swiper CSS (21.6 KB) load on every page. | Medium | Lazy-load slide two, use one SVG logo coloured with CSS, and import library CSS only on the pages that use it. |
| PERF-07 | Unused assets | `public/images/wood-*.webp`, `logo.png`, `credits.json` | Nine orphan wood images (713 KB), an unused logo, and the stock-credits file are deployed. | Low | Delete the orphans and move `credits.json` out of `public/`. |

### 3.6 SEO and technical

| ID | Where | File:line | Problem | Severity | Proposed fix and reason |
|---|---|---|---|---|---|
| SEO-01 | Site domain | `app/layout.tsx:17`, `public/robots.txt:4`, `public/sitemap.xml:3-8` | `metadataBase`, robots and the sitemap all use `https://bostoninterior.com`, which is a parked domain (it redirects to `/lander`). Share-preview images therefore resolve to that domain and are broken, and the sitemap points search engines at someone else's site. The contact email is on `bostoninterior.co.tz`, which does not resolve. | Critical | Confirm the real domain (Q2) and read it from one config value; generate `robots` and `sitemap` from `app/robots.ts` and `app/sitemap.ts`. Until then the site is telling Google and social networks that it lives somewhere else. |
| SEO-02 | Canonical and Open Graph | `app/layout.tsx:16-32`, each `page.tsx:3-14` | No canonical URL, no `og:url`, `og:site_name` or `og:locale`; share images are WebP with no dimensions. | High | Add `alternates.canonical` per page and a 1200×630 JPG share image. Canonicals prevent duplicate indexing across the Vercel and custom domains. |
| SEO-03 | Structured data | none | No JSON-LD: no LocalBusiness, FAQPage, BreadcrumbList or Product. | High | Add LocalBusiness (name, area served, hours, phone, geo), FAQPage on Home and BreadcrumbList on inner pages. This is what feeds local search results and the map panel. |
| SEO-04 | Local keywords | `app/layout.tsx:19-22`, every h1 | No title, description or h1 mentions Dar es Salaam or Tanzania, and the brand name "Boston" points to the wrong city. | High | Add the location to titles, descriptions and the Home h1. Local clients search by city. |
| SEO-05 | Duplicate headings | `app/services/page.tsx:28`, `app/portfolio/page.tsx:28`, `app/furniture/page.tsx:43` | Three page h1s repeat Home h2s word for word. | Low | Write a distinct h1 per page. |
| SEO-06 | Icons and manifest | `app/layout.tsx:24` | One non-square 77×64 PNG favicon; no `favicon.ico`, apple-touch-icon, manifest or theme colour. | Medium | Add `app/icon`, `app/apple-icon` and a manifest. Depends on Q7. |
| SEO-07 | Security headers | `vercel.json` | Only HSTS is set (by Vercel). No Content-Security-Policy, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` or frame protection. | Medium | Add a `headers` block in `vercel.json`. Cheap protection for a site that handles a contact form. |
| SEO-08 | Social links | `components/Footer.tsx:20`, `app/contact/page.tsx:194` | LinkedIn uses a personal `/in/boston_interiorbysabrah` path that could not be verified (LinkedIn blocks automated checks). Instagram and TikTok returned 200. | Low | Confirm the LinkedIn URL (Q2). |

### 3.7 Code quality

| ID | Where | File:line | Problem | Severity | Proposed fix and reason |
|---|---|---|---|---|---|
| CODE-01 | Script architecture | `components/ClientScripts.tsx:9-14`, `src/ts/*.ts` | jQuery modules run once per document and mutate React-rendered DOM with no cleanup. It only works because every link is a full reload; using `next/link` anywhere would leave pages with invisible content, dead forms and duplicated handlers. | High | Convert interactive parts to client components (menu, FAQ, filters, form, basket, counters), then switch to `next/link`. The current structure blocks the navigation and loading fixes above. |
| CODE-02 | Repeated markup | pages and components, about 800 lines | Page hero ×5, CTA band ×4, process steps ×2, stats ×2, contact details ×3, social links ×3, portfolio card ×12, service row ×5, WhatsApp SVG ×7, arrow SVG ×27. Service names are listed in four files. | Medium | Extract `PageHero`, `CtaBand`, `ProcessSteps`, `Stats`, `ProjectCard`, `ServiceRow`, `Icon` and move content to data files. Every content fix is otherwise made in several places. |
| CODE-03 | Form error handling | `src/ts/form.ts:81,219,235-236,241` | Server error text is injected with `.html()` unescaped; no request timeout; the button label is hardcoded twice. | Medium | Render messages as text, add an `AbortController` timeout, keep one label. |
| CODE-04 | Basket data | `src/ts/form.ts:90-124`, `src/ts/inquiry.ts:71-76,149-155` | Stored items no longer in the catalogue are submitted but cannot be seen or removed; the card quantity goes stale after editing in the drawer; the badge counts items while the total counts pieces; two tabs overwrite each other. | Medium | Validate stored items against the catalogue, keep one source of state, count one thing. |
| CODE-05 | Tooling | `package.json:7-14` | No `lint`, `format` or `test` script, no ESLint or Prettier config, no CI, no README, no Node version pin; `npm run audit` shadows `npm audit`. | Medium | Add ESLint (`eslint-config-next`) and Prettier with a `lint` script (Q5). Your process asks for lint after each fix group, so this comes first. |
| CODE-06 | Destructive scripts | `scripts/desh.mjs`, `scripts/grade.mjs`, five `harvest*.mjs`, `scripts/pexels.mjs` | Scripts rewrite page source and overwrite `public/images` in place with no dry run; four are near-duplicates. | Low | Keep one harvester, add a dry-run flag, delete the rest (with your agreement). |
| CODE-07 | Repository hygiene | `.gitignore`, repo root | `images-raw/` (4.9 MB, byte-identical to `public/images`), `harvest-woods.err` and `BOSTON INTERIOR LOGO.png` are tracked; `.gitignore` misses `.env*.local` and `.vercel/`; a stale `allowScripts` entry for esbuild. | Low | Clean up and extend `.gitignore`. |
| CODE-08 | Hydration | `app/layout.tsx:14,36-38` | An inline script adds a class to `<html>` before hydration without `suppressHydrationWarning`, giving a warning in development. | Low | Removed along with PERF-01. |

## 4. Prioritised fix plan

Each group is small enough to build, lint and check on its own. Items marked (Q) need an answer from section 5 first.

| Order | Group | Findings | Notes |
|---|---|---|---|
| 0 | Foundations | CODE-05, VIS-03, VIS-02, PERF-04, UX-02 (config only) | Add ESLint and Prettier; define tokens (colour including semantic and muted text, type scale, spacing, radius, shadow, z-index, focus ring); load DM Sans through `next/font`; create `lib/site.ts` for domain and contact details. |
| 1 | Critical: enquiries reach the studio | UX-01, UX-02 (Q2), SEO-01 (Q2), CODE-03 | Connect the form, correct the WhatsApp number and domain, generate robots and sitemap from config, harden form errors. |
| 2 | Critical: honest content | UX-03 (Q3), UX-04 (Q3) | Remove false claims now; swap in real photos, testimonials and figures when supplied. Copy changes will be listed for your approval before they go in. |
| 3 | High: first impression and speed | PERF-01, UX-05, RES-02, VIS-01, UX-06 | Remove the loading overlay, fix the hero, stop image distortion, add a mobile header CTA. |
| 4 | High: accessibility of shared chrome | A11Y-01, A11Y-02, A11Y-03, A11Y-06, CODE-01 (menu, FAQ, form) | Focus ring, skip link, React menu dialog, announced form feedback. |
| 5 | High: sliders, basket and scripts | A11Y-04, A11Y-05, UX-07, CODE-01 (rest), CODE-04, PERF-02 (Q5), UX-15 | Convert remaining jQuery behaviour to components, switch to `next/link`, fix basket feedback. |
| 6 | High: images and search | PERF-03, PERF-06, SEO-02, SEO-03, SEO-04 | Responsive image variants and `<Picture>`, canonical and Open Graph, JSON-LD, local keywords. |
| 7 | High: trust and form friction | UX-08 (Q4), UX-11 (Q6) | Form simplification; founder section, address or map, privacy policy, pricing guide. New pages only with your approval. |
| 8 | Medium | UX-09, UX-10, UX-12, UX-13, VIS-04, VIS-05, VIS-06, VIS-09 (Q7), RES-01, RES-03, A11Y-07, A11Y-08, PERF-05, SEO-06, SEO-07, CODE-02 | Conversion paths, 404 and redirects, component extraction, tap targets, contrast, caching, headers. |
| 9 | Low | UX-14, VIS-07, VIS-08, VIS-10, RES-04, RES-05, A11Y-09 to A11Y-12, PERF-07, SEO-05, SEO-08, CODE-06 to CODE-08 | Polish and hygiene. |

No new runtime dependencies are needed. ESLint and Prettier are dev-only. Groups 4 and 5 remove jQuery and possibly Lenis, if you agree (Q5).

## 5. Questions before Phase 3

| # | Question | Why it matters |
|---|---|---|
| Q1 | May I bring this checkout up to `origin/main` before fixing? That discards the uncommitted local changes: the staged `.gitignore` and `node_modules` removal (the remote already did both), the `package-lock.json` change and the rebuilt `dist/`. Or do you want fixes made somewhere else, such as a new branch? | Fixes must be made on the Next.js code that is live, not the old Vite code on disk. |
| Q2 | What are the correct WhatsApp number, production domain, email address and LinkedIn URL? | UX-02, SEO-01, SEO-08. I will not guess contact details. |
| Q3 | Do real project photos, client testimonials and verified figures exist? If not, do you agree to relabel the portfolio and products as inspiration and remove the invented locations, years, stats and testimonials? | UX-03, UX-04, VIS-05. This is the largest trust issue and it is a content decision. |
| Q4 | What is the Formspree endpoint, and is the account on a plan that accepts file uploads? Can you set the variable in Vercel, or should I describe the steps? | UX-01, UX-08. I have no access to the Vercel project settings. |
| Q5 | May I add ESLint and Prettier (dev-only), and replace jQuery and Lenis with React code? The original SRS asked for jQuery. | CODE-01, CODE-05, PERF-02. |
| Q6 | Which new content do you want: privacy policy, pricing guide, founder and team section, project case studies, a dedicated FAQ page? Can you supply the text and photos, or should I draft placeholders clearly marked for your review? | UX-11. I will not publish invented business facts. |
| Q7 | Is there a vector (SVG or AI) version of the logo? | VIS-09, SEO-06. |

## 6. Method and limits

- Code review covered every file in `app/`, `components/`, `src/`, `scripts/` and the config files at `origin/main`.
- Lighthouse 13 ran once per page per mode against the live site with headless Chrome 155; Home was run twice.
- Layout was checked with Playwright at 375×812, 768×1024 and 1440×900 on all six pages, plus the open mobile menu, keyboard tabbing, form validation, form submission and adding to the basket.
- Not tested: real devices, Safari and Firefox, screen readers (findings come from the markup and scripted checks), a real Formspree submission, and Search Console data. Contrast ratios are calculated from the palette, not measured in a tool, except where Lighthouse confirmed them.
