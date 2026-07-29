# Holdfast — Escrow Payment Landing Pages

Two landing pages (Buyer and Vendor) for an escrow-style payment app, built with
React + Vite + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173/buyer` or `http://localhost:5173/vendor`.

## Build for production

```bash
npm run build
npm run preview
```

Output goes to `dist/`. Deploy that folder to any static host (Vercel, Netlify,
S3 + CloudFront, etc).

## Structure

```
src/
  components/       Shared, reusable sections used by both pages
    Navbar.jsx        Sticky nav, includes the buyer↔vendor cross-link
    Footer.jsx
    Hero.jsx
    WhoIsThisFor.jsx
    HowItWorks.jsx
    EscrowAnimation.jsx   Signature conveyor-track step animation
    LiveStats.jsx         Count-up stats, animates on scroll into view
    ComparisonTable.jsx   Direct payment vs. escrow
    TrustSecurity.jsx
    FeatureGrid.jsx
    Testimonials.jsx
    FAQ.jsx               Native <details>/<summary>, no JS state needed
    FinalCTA.jsx
  pages/
    BuyerLandingPage.jsx
    VendorLandingPage.jsx
  App.jsx            Router: /buyer and /vendor
  main.jsx
  index.css
```

Every section is a single component that takes a `variant` prop (`"buyer"` or
`"vendor"`) and renders role-specific copy. This keeps both pages in sync
structurally while letting the messaging differ — change a section once and
both pages benefit; change copy for one role without touching the other.

## Design notes

- **Palette**: warm charcoal base (`#17181A`), steel-blue secondary accent,
  amber primary accent, and a safety-yellow (`signal`) reserved for live/active
  states (the moving crate marker, the "live" stats dot). Rust and moss are
  used only inside the comparison table, for risk/positive indicators.
- **Type**: Oswald (condensed, uppercase) for headings, Inter for body copy,
  IBM Plex Mono for data-like labels (stats, stage numbers, order details) —
  reinforcing the "manifest / shipment plate" feel.
- **Signature element**: the escrow animation is a horizontal track with a
  sliding marker, styled like a factory conveyor gauge, with riveted corner
  dots on the hero's order-manifest panel reinforcing the same motif.
- Both pages cross-link to each other in the nav, footer, and final CTA —
  neither role is a dead end.

## Accessibility & performance checklist

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1` per page.
- Visible focus ring (`:focus-visible`) across all interactive elements.
- `prefers-reduced-motion` respected — animations disable/skip entirely.
- Live-updating regions (`role="status"`, `aria-live="polite"`) on the escrow
  tracker so screen reader users get the same updates as sighted users.
- FAQ uses native `<details>/<summary>` — keyboard accessible with zero JS.
- Google Fonts preconnected; only three font families loaded, each with a
  narrow weight range to keep payload small.
- All external links use `rel="noopener noreferrer"`.
- Per-page `document.title` and meta description set on route mount for SEO,
  since this is a client-rendered SPA (swap to a static-per-route setup or SSR
  if you need pre-rendered meta tags for crawlers that don't execute JS).

## Notes / assumptions

- CTAs (`Get started`, `Create your account`, etc.) are static links — wire
  them up to your actual signup/checkout flow.
- Stats in `LiveStats.jsx` are mock values — replace with a real data source
  (API call, websocket, etc.) when available.
- No backend/auth included — this is the marketing layer only.
