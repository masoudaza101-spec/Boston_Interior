# Boston Interior — Project Overview

**Version:** 1.1 | **Status:** Draft | **Date:** October 2026

---

## 1. Introduction
Boston Interior is a portfolio-style business website for an interior design, decoration and furniture company. It presents the company's work, services and furniture designs, and makes it easy for visitors to contact the business or request a consultation.

## 2. Vision
To give Boston Interior a professional, image-focused online presence where potential clients can see the quality of its work and get in touch quickly.

## 3. Objectives
- Showcase completed interior design and decoration projects.
- Present services and furniture offerings clearly.
- Build trust with testimonials and company information.
- Turn visitors into clients through contact and consultation request forms.
- Work smoothly on phones, tablets and desktops.

## 4. Target Users
| User | Description |
|---|---|
| Visitor / Potential client | Browses projects and services, then contacts the company |
| Business owner / Staff | Updates content and receives inquiries |

## 5. Scope
**In scope:** Home, About, Services, Portfolio gallery, Furniture showcase (display only), Testimonials, Blog/Tips (optional), Contact and consultation request form, social media links, SEO basics.

**Out of scope:** online shopping cart, payments, customer accounts, order tracking, mobile apps.

## 6. Technology Choices
| Purpose | Technology |
|---|---|
| Markup | HTML5 |
| Styling | Tailwind CSS |
| Scripting | TypeScript (compiled to JavaScript) |
| DOM and effects | jQuery (with `@types/jquery`) |
| Build tool | Vite (or Tailwind CLI + `tsc`) |
| Contact form handling | Small backend (PHP or Node), or a service such as Formspree / EmailJS |
| Hosting | Any static host (Netlify, Vercel, cPanel) or a simple VPS |

## 7. Assumptions & Constraints
- Project photos, logo and text content are supplied by the business.
- Content is updated by editing files or data (JSON) unless a CMS is added later.
- The site must load fast, so images are compressed and lazy-loaded.
