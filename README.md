# ZEUS Engineering

A complete website for ZEUS Engineering JSC — a Vietnamese engineering company
building infrastructure for high-density compute.

The narrative is `ENERGY → INFRASTRUCTURE → COMPUTE`: an operating Bitcoin
mining prototype is the proving ground, AI is the workload it was redirected
toward, and the SSMDC — a 400 m² solar-powered modular compute node — is the
product. It is deliberately **not** a cryptocurrency site.

Investor content follows ZEUS's SSMDC deck of 17 September 2026: a **$2.69M**
raise for an 18–24 month runway to multiple live nodes. That deck is marked
Confidential and is **never linked or published** from this site.

> **Read [`AUDIT.md`](./AUDIT.md) before editing any number.** It records which
> claims are sourced, which were removed as unsourced, and what still needs
> confirming from ZEUS.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind v4 · GSAP
ScrollTrigger

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## The thing that makes this codebase unusual

**No component hardcodes a ZEUS figure.** Every number lives in `src/data/` and
carries a `FactStatus`:

| Status | Meaning | Treatment |
|---|---|---|
| `current` | Exists and operates now | State directly |
| `zeus-reported` | ZEUS publishes it; not independently verified | Attribute |
| `target` | Intended future development | Always says target/planned |
| `projection` | Financial or operational forecast | Labelled, with assumptions |
| `concept` | Product direction, not a deployed fleet | Labelled |

That status drives `<StatusBadge>`, which renders the status **as a word** —
colour and glyph are reinforcement only. The distinction therefore survives
greyscale, colour blindness and a screen reader.

This is the mechanism that stops the $2.69M *fundraising target* from ever
rendering as capital raised, or a *design target* for an unbuilt node from
rendering as measured capacity. Change a figure in one place and every page that shows it updates,
still correctly labelled.

```
src/data/
  facts.ts       FactStatus type + disclosure strings
  metrics.ts     operating figures (Zeus-reported)
  ssmdc.ts       the current deck: the ask, node economics, DC-DC, compute
  company.ts     verified company details
  team.ts        leadership (deck-sourced, nothing embellished)
  products.ts    SSMDC, Ai-1, S3XY Ai — Zeus's own published specs
  roadmap.ts     milestones, each with a visual weight
  vietnam.ts     the Why Vietnam arguments, with Zeus's caveats
  faq.ts         Zeus's published Q&A
  hosting.ts     hosted mining
  solutions.ts / technology.ts / navigation.ts
```

## Design system

Dark and earthy, with photography and typography doing the work.

Warm and light — cream walls, sage joinery, oak and tan leather, taken from a
reference interior the client supplied. The client's own accent sits in it
naturally rather than fighting a cold ground.

- **Surfaces** canvas `#F3EFE8` · linen `#E9E3D9` · clay `#DCD4C6`
- **Feature block** sage `#4B5441` — one section painted, like the joinery wall
- **Text** ink `#2B2722` · slate `#5E5851` · slate-dim `#686158`
- **Accents** ochre `#8A5A28` = energy · sage `#4F5A45` = compute

Each accent has a light partner (`tan`, `sage-light`) for fills and rules,
where contrast is not a legibility requirement.

Every text element on the page was measured against its **composited**
background — alpha included — and clears WCAG AA. The `.on-sage` utility flips
a whole section to the deep sage block and remaps text, rules and accents for
it, so inverting a section is one class rather than hand-edited children.

### Media is never a background

Every image and clip sits inside `<MediaPanel>` — a bordered panel with its own
caption rail, placed *beside* the type. Two reasons: text never fights a moving
frame for contrast, and the supplied footage (736×400 source) is upscaled far
less inside a panel than stretched across a viewport.

### Motion

One shared `IntersectionObserver` in `RevealProvider` drives `.reveal`,
`.mask-line` and `.draw-line`. Elements reveal **once** and are then unobserved —
nothing re-animates on scroll-back. GSAP ScrollTrigger is reserved for the two
scrubbed sequences (the system scroller and the Bitcoin→AI chapters), scoped via
`useGsapContext` so every trigger is reverted on navigation.

Under `prefers-reduced-motion` the GSAP setup is skipped entirely and all reveal
primitives are forced to their final state. The markup is authored so the
un-animated state is the correct, readable state.

## Routes

28 routes: home · solutions (+5) · technology (+4) · projects (+1) ·
investors (the-ask, economics, roadmap, why-vietnam) · company (+2) · insights ·
contact · legal/privacy · 404 · sitemap.xml · robots.txt

`sitemap.ts` is generated from `navigation.ts`, so a route added to the menu
cannot be forgotten in the sitemap. `robots.ts` is generated rather than static —
a previous project on this account shipped a static `robots.txt` that silently
blocked every crawler.

## Integrations still needed

### Form endpoint

`src/components/ui/ContactForm.tsx` has **no backend**. Rather than render a
submit button that silently does nothing — or shows a fake success state — it
composes a pre-filled email and hands it to the visitor's mail client. The
enquiry genuinely reaches ZEUS.

To switch to a real endpoint: set `NEXT_PUBLIC_FORM_ENDPOINT` and replace
`composeMailto` with a POST. Field names are already namespaced, validation and
a honeypot are in place, and the status region is already `aria-live`.

### Analytics

None installed, and no tracker IDs invented. There is deliberately no cookie
banner because nothing sets a cookie. If analytics are added, update
`/legal/privacy` and add consent handling first.

## Deployment

Static export to **GitHub Pages**, built by `.github/workflows/deploy.yml` on
every push to `main`. The workflow lints, type-checks (via `next build`) and
publishes `out/` — a lint or type error fails the deploy rather than shipping a
broken page. `out/` is gitignored; CI builds it.

Live at **https://zaddywebbuilds.github.io/zeusengineering/**

### Base path — read this before changing hosting

A project repo is served from `/<repo>/`, so every route and asset needs that
prefix. It is configured once in `.env.production`:

```bash
NEXT_PUBLIC_BASE_PATH=/zeusengineering
NEXT_PUBLIC_SITE_URL=https://zaddywebbuilds.github.io/zeusengineering
```

**Moving to a custom domain:** blank `NEXT_PUBLIC_BASE_PATH`, set
`NEXT_PUBLIC_SITE_URL` to the domain, and add a `CNAME` file to `public/`.
No code changes.

**The trap:** `next build` sets `images.unoptimized` for static export, and with
the optimiser off `next/image` does **not** prepend `basePath`. Links and
stylesheets resolve; every image 404s. This is invisible locally, where the base
path is empty. That is why all images go through `<Img>` (`src/components/ui/Img.tsx`)
and raw video sources and the favicon go through `asset()` (`src/lib/asset.ts`).

**Never import `next/image` directly — import `<Img>`.**

## Assets

```
public/
  video/     hero (desktop + mobile), plant, brand film
  images/
    concept/   AI concept renders — always captioned as such
    products/  Zeus's own SSMDC and Ai-1 drawings
    site/      imagery from the current Zeus site
    brand/     logo and mark
```

The SSMDC engineering drawing and the Ai-1 specification sheet are ZEUS's own
published assets and are the most credible visuals in the project. They are used
as drawings, at full contrast, not decorated.

## Conventions

- Headline line breaks are editorial: pass `\n` in `title`, don't let the
  viewport decide.
- `MaskedHeading` splits on those breaks and wraps each line in `.mask-line`.
  That element needs vertical padding — a `0.88` display line-height otherwise
  clips the glyphs the mask is meant to reveal.
- New figure? Add it to `src/data/` with a status. Never inline it in JSX.
- No claim about ZEUS goes on this site without a source in `AUDIT.md`.
