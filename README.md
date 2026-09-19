# RZQ Agency Website

A 1:1 visual recreation of [arounda.agency](https://arounda.agency/) rebranded as **RZQ**.

Built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, and **shadcn-style UI**.

## Identity (only differences from the reference)

| Item | Value |
|------|--------|
| Brand | RZQ |
| Founder | Rana Zaman Qamar — Founder |
| Email | ranazamanqanar13@gmail.com |
| Book a Call | 03206633549 (`tel:+923206633549`) — no Calendly |
| LinkedIn | https://www.linkedin.com/in/ranazamanqamar |
| Photo slot | `public/rana-zaman-qamar.jpg` |

Portfolio cases, clients, testimonials, stats, awards, industries, and service copy are kept from the reference so the site looks complete. Drop your own photo at `public/rana-zaman-qamar.jpg` when ready.

## Run locally

```bash
npm install
npm run dev
```

Dev server binds to **http://localhost:4317** (not 3000).

## Scripts

- `npm run dev` — development server on port 4317
- `npm run build` — production build
- `npm run start` — production server on port 4317
- `npm run lint` — ESLint

## Main routes

- `/` — Homepage
- `/works` — Portfolio
- `/works/[slug]` — Case study
- `/pricing` — Pricing & FAQ
- `/about` — About & founder
- `/contact` — Contact form
- `/book-a-call` — Click-to-call booking
- `/blog` — Blog listing
- `/blog/[slug]` — Article
- `/services/[slug]` — Service pages
- `/industries/[slug]` — Industry pages
- `/solutions/[slug]` — Solutions
- `/referral`, `/privacy-policy`, `/cookie-policy`, `/editorial-policy`, `/ai-instructions`
