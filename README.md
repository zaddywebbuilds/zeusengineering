# ZEUS Engineering

A complete website for ZEUS Engineering JSC, a Vietnamese engineering company
building infrastructure for high-density compute.

The narrative is `ENERGY → INFRASTRUCTURE → COMPUTE`: an operating Bitcoin
mining prototype is the proving ground, AI is the workload it was redirected
toward, and the SSMDC, a 400 m² solar-powered modular compute node, is the
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

That status drives `<StatusBadge>`, which renders the status **as a word** ,
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
  products.ts    SSMDC, Ai-1, S3XY Ai, Zeus's own published specs
  roadmap.ts     milestones, each with a visual weight
  vietnam.ts     the Why Vietnam arguments, with Zeus's caveats
  faq.ts         Zeus's published Q&A
  hosting.ts     hosted mining
  solutions.ts / technology.ts / navigation.ts
```

## Design system

Dark and earthy, with photography and typography doing the work.

Warm and light, cream walls, sage joinery, oak and tan leather, taken from a
reference interior the client supplied. The client's own accent sits in it
naturally rather than fighting a cold ground.

- **Surfaces** canvas `#F3EFE8` · linen `#E9E3D9` · clay `#DCD4C6`
- **Feature block** sage `#4B5441`, one section painted, like the joinery wall
- **Text** ink `#2B2722` · slate `#5E5851` · slate-dim `#686158`
- **Accents** ochre `#8A5A28` = energy · sage `#4F5A45` = compute

Each accent has a light partner (`tan`, `sage-light`) for fills and rules,
where contrast is not a legibility requirement.

Every text element on the page was measured against its **composited**
background, alpha included, and clears WCAG AA. The `.on-sage` utility flips
a whole section to the deep sage block and remaps text, rules and accents for
it, so inverting a section is one class rather than hand-edited children.

### Technical illustrations

`src/components/diagrams/` holds explanatory SVG, not decoration. Each one
wraps in `<Figure>`, which supplies a label, a caption stating what the diagram
does and does not show, and an `aria-label` carrying the same content in prose.

The rule is the same as for numbers: an illustration must be traceable. Where
a diagram uses a ZEUS figure it comes from `src/data`; where it uses a generic
engineering shape (a clear-day solar curve, standard aisle airflow, a
simplified coastline) the caption says so on the page. None of them implies a
measurement ZEUS has not published.

Vector, so there is no resolution ceiling, unlike the supplied footage.

### Never upscale a video panel

The supplied footage is **736px wide**. Stretching a panel past that upscales it
in the browser and visibly softens it, and no amount of re-encoding fixes
scaling that happens after decode. The full-bleed aerial strip was rendering at
1278px from a 736px source (1.74x) and looked blurry for exactly this reason.

`<MediaPanel maxWidth="...">` caps the rendered width. **Set it on every video
panel**, at or below the source width, and verify:

```js
[...document.querySelectorAll('video')]
  .map(v => v.getBoundingClientRect().width / v.videoWidth)  // must be <= 1
```

Images are 1080px+ and do not need the cap.

### Media is never a background

Every image and clip sits inside `<MediaPanel>`, a bordered panel with its own
caption rail, placed *beside* the type. Two reasons: text never fights a moving
frame for contrast, and the supplied footage (736×400 source) is upscaled far
less inside a panel than stretched across a viewport.

### Motion

One shared `IntersectionObserver` in `RevealProvider` drives `.reveal`,
`.mask-line` and `.draw-line`. Elements reveal **once** and are then unobserved ,
nothing re-animates on scroll-back. GSAP ScrollTrigger is reserved for the two
scrubbed sequences (the system scroller and the Bitcoin→AI chapters), scoped via
`useGsapContext` so every trigger is reverted on navigation.

Under `prefers-reduced-motion` the GSAP setup is skipped entirely and all reveal
primitives are forced to their final state. The markup is authored so the
un-animated state is the correct, readable state.

## Routes

31 routes: home · solutions (+5) · technology (+4) · projects (+1) ·
investors (the-ask, economics, roadmap, why-vietnam, brief) · company (+2) ·
insights · sources · vi · vision · contact · legal/privacy · 404 ·
sitemap.xml · robots.txt

`sitemap.ts` is generated from `navigation.ts`, so a route added to the menu
cannot be forgotten in the sitemap. `robots.ts` is generated rather than static ,
a previous project on this account shipped a static `robots.txt` that silently
blocked every crawler.

## The four pieces most likely to be misunderstood

### `/sources`, the public claim ledger

`CLAIMS.md` is the working audit. `src/data/sources.ts` is the same discipline
rendered as a public page. **Both must be kept in step by hand.**
`npm run audit:claims` only enforces that figures in `src/data/` appear in
`CLAIMS.md`; it does not know about `sources.ts`.

The page also publishes what was **deliberately left out**, which is the part
that actually earns trust. Do not quietly delete an entry from `notPublished`
to make the site look better.

The confidential deck is named on that page and is still **never linked,
embedded, mirrored or reproduced**.

### `/investors/economics`, the node model

`NodeModel.tsx` splits its eight inputs in two and never lets them blur:

- **Four ZEUS sliders** whose `min`/`max` ARE the published ranges. A visitor
  cannot drag one outside what ZEUS actually stated.
- **Four inputs with no ZEUS source** (PUE, tariff, utilisation, GPU price).
  Their defaults are placeholders, labelled as such on the control and again
  in the output footer.

The only arithmetic done on ZEUS's behalf is the annual solar yield, which is
interpolated between ZEUS's own two published endpoints and says so. If you
add an input, it must declare a provenance. See `CLAIMS.md`.

### `/investors/brief`, the printable one-pager

Rendered from `ssmdc.ts`, `metrics.ts` and `roadmap.ts`, the same data every
other page uses, so it **cannot** disagree with the pages it summarises. A
separately maintained deck is how the kW/kWp drift happened. Do not introduce
a PDF library: that would recreate the second rendering path this removes.

Print rules live at the bottom of `globals.css`. They are scoped to
`body > header` and `body > footer` on purpose, because an unscoped `header`
selector also hides the brief's own title block.

### `/vi`, the Vietnamese overview

A complete standalone overview, **not** a translation of all 26 English
routes. All translatable copy is in `src/data/vi.ts` so ZEUS can review it in
one pass. **Figures are never retyped there**, they are imported from the same
data layer, which is the only way the two languages cannot drift.

Two exceptions are documented at the top of that file: `hosting.included` and
`investors.items` mirror English lists and must be updated alongside them.

Vietnamese stacks a mark above and a dot below the same letter. The
`[lang="vi"]` rules in `globals.css` widen the masked-heading window so those
lower marks are not clipped; English headings keep their original rhythm.

## Integrations still needed

### Form endpoint

Build, Host and Invest are three separate funnels with their own qualifying
fields, defined in `src/data/enquiry.ts`. Only name, email and message are ever
required; an investor who will not state a ticket size before a call can still
send the enquiry.

**Transport is environment-driven.** Set `NEXT_PUBLIC_FORM_ENDPOINT` and the
form POSTs to it with a real submitting / sent / error cycle. Leave it unset
and the form composes a pre-filled email and hands it to the mail client,
saying so under the button.

What it never does is fake a success state. A submit that reports "thank you"
into a void is worse than no form, because the enquiry is lost and nobody
knows.

Validation, a honeypot, `aria-invalid`, per-field error ids wired through
`aria-describedby`, and focus movement to the first invalid field are all in
place.

### Analytics

None installed, and no tracker IDs invented. There is deliberately no cookie
banner because nothing sets a cookie. If analytics are added, update
`/legal/privacy` and add consent handling first.

## Deployment

Static export to **GitHub Pages**, built by `.github/workflows/deploy.yml` on
every push to `main`. The workflow lints, type-checks (via `next build`) and
publishes `out/`, a lint or type error fails the deploy rather than shipping a
broken page. `out/` is gitignored; CI builds it.

Live at **https://zaddywebbuilds.github.io/zeusengineering/**

### Base path, read this before changing hosting

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

**Never import `next/image` directly, import `<Img>`.**

## Assets

```
public/
  video/     hero (desktop + mobile), plant, brand film
  images/
    concept/   AI concept renders, always captioned as such
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
  That element needs vertical padding, a `0.88` display line-height otherwise
  clips the glyphs the mask is meant to reveal.
- New figure? Add it to `src/data/` with a status. Never inline it in JSX.
- No claim about ZEUS goes on this site without a source in `AUDIT.md`.
- A new figure needs a row in `CLAIMS.md` **and**, if it appears on a page, a
  row in `src/data/sources.ts`. The audit script only checks the first.
- New user-facing copy on `/vi` goes in `src/data/vi.ts`, never inline.
