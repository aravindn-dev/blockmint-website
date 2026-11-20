# BlockMint Technology Services — Website

Single-page static website built with React, Vite, Tailwind CSS, Lucide icons and Framer Motion. No backend.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in /dist
npm run preview   # preview the build
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, S3, cPanel).

## Things to update

| What | Where |
| --- | --- |
| Phone, email, address, WhatsApp number | `src/config/site.js` → `contact` |
| Temporary logo | `src/components/Logo.jsx` (used everywhere via `<Logo />`) |
| Favicon | `public/favicon.svg` |
| Services, differentiators, approach steps | `src/data/content.js` |
| Privacy Policy / Terms links | `src/components/Footer.jsx` |
| SEO title & description | `index.html` |

While a contact value is empty, its placeholder (e.g. `[BUSINESS PHONE NUMBER]`) is shown.
Without a WhatsApp number, WhatsApp buttons open WhatsApp's share sheet with a prefilled message;
add the number in international format, digits only (e.g. `919876543210`), to send enquiries directly.

## Structure

```
src/
  config/site.js        contact details, nav, link helpers
  data/content.js       all service and section copy
  components/
    Navbar.jsx  Hero.jsx  HeroVisual.jsx  Overview.jsx
    Services.jsx  ServiceCard.jsx  WhyBlockMint.jsx  Approach.jsx
    About.jsx  Contact.jsx  Footer.jsx
    Logo.jsx  Reveal.jsx  SectionLabel.jsx
```
