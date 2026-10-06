# Boston Interior — Software Requirements Specification (SRS)

**Version:** 1.1 | **Status:** Draft | **Date:** October 2026

---

## 1. Purpose
This document defines the requirements of the Boston Interior portfolio website for the developer, designer and business owner.

## 2. Product Perspective
A responsive, mostly static website built with HTML, Tailwind CSS and TypeScript with jQuery. A lightweight service handles contact form submissions and sends them to the company's email.

## 3. Functional Requirements

**FR-1 Home Page**
- Hero banner with a call-to-action ("Book a Consultation").
- Featured projects, short services summary and testimonials.

**FR-2 About Page**
- Company story, mission, team and design approach.

**FR-3 Services Page**
- List of services: residential design, commercial design, space planning, decoration, furniture customization.
- Each service has a short description and a "Request Quote" link.

**FR-4 Portfolio Gallery**
- Grid of completed projects with category filters (living room, bedroom, kitchen, office, outdoor), done with jQuery.
- Project detail view or lightbox with multiple images, description, location, year and style.

**FR-5 Furniture Showcase**
- Display furniture and décor items with images, materials, dimensions and an "Inquire" button.
- No cart or online payment.

**FR-6 Testimonials**
- Client reviews shown as a slider or cards.

**FR-7 Blog / Design Tips (optional)**
- List and detail pages for articles.

**FR-8 Contact & Consultation Form**
- Fields: name, email, phone, project type, budget range (optional), message, optional photo upload.
- Client-side validation in TypeScript; server-side validation on submit.
- Success and error messages; email notification to the business.
- Direct links for phone, WhatsApp, email, map and social media.

**FR-9 Navigation & Layout**
- Responsive header with mobile menu, sticky navigation and a footer with contact info and social links.

## 4. User Roles
| Role | Capabilities |
|---|---|
| Visitor | View all pages, filter portfolio, submit forms |
| Admin (owner/staff) | Update content and receive inquiries by email (or via a simple admin panel in a later phase) |

## 5. Non-Functional Requirements
- **Performance:** loads in under 3 seconds on mobile; compressed, lazy-loaded images (WebP preferred).
- **Responsiveness:** mobile-first design using Tailwind breakpoints.
- **Security:** HTTPS, form spam protection (honeypot or reCAPTCHA), input sanitization, no sensitive data stored in the front end.
- **SEO:** clean URLs, meta titles/descriptions, Open Graph tags, sitemap, image alt text.
- **Accessibility:** good color contrast, alt text, keyboard-friendly navigation.
- **Browser support:** latest Chrome, Firefox, Safari and Edge.
- **Maintainability:** typed, modular TypeScript; reusable Tailwind components; documented code.

## 6. Technology Stack and Recommendations
| Layer | Choice | Notes |
|---|---|---|
| Language | TypeScript | Catches errors early; compiled to JS |
| Library | jQuery 3.x + `@types/jquery` | Gallery filtering, menu toggle, sliders, form AJAX |
| Styling | Tailwind CSS | Utility classes; purge unused CSS for small files |
| Build | Vite | Fast dev server; compiles TypeScript and Tailwind |
| Form backend | PHP mail script, Node/Express, or Formspree/EmailJS | Simplest: Formspree or EmailJS |
| Optional plugins | Swiper or Slick (slider), GLightbox or Magnific Popup (lightbox) | Work with jQuery |

## 7. Suggested Project Structure
```
boston-interior/
├── index.html
├── about.html
├── services.html
├── portfolio.html
├── furniture.html
├── contact.html
├── src/
│   ├── ts/        (main.ts, gallery.ts, form.ts)
│   └── css/       (tailwind.css)
├── public/images/
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 8. Site Map
Home, About, Services, Portfolio (project details), Furniture, Testimonials, Blog (optional), Contact.

## 9. Key Use Case — Requesting a Consultation
1. Visitor browses the portfolio and clicks "Book a Consultation".
2. Fills in the contact form; TypeScript validates the fields.
3. Form is submitted and the business receives an email.
4. Visitor sees a confirmation message; the business replies.

## 10. Acceptance Criteria
- All pages display correctly on mobile, tablet and desktop.
- Gallery filtering and lightbox work without page reloads.
- Contact form validates, submits and delivers an email.
- Lighthouse performance and accessibility scores of 90 or higher.

## 11. Development Phases
1. **Design:** branding, wireframes, content gathering.
2. **Setup:** Vite, TypeScript, Tailwind and jQuery configuration.
3. **Build:** pages, gallery, form and components.
4. **Test and optimize:** devices, speed, SEO.
5. **Launch:** domain, hosting, SSL.

## 12. Future Enhancements
Simple admin panel or headless CMS, online shop, bilingual (English/Swahili) support, live chat, design inspiration boards.
