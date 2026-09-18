# Factual audit

Everything ZEUS-related on this website traces to one of two sources:

1. **The deck** — `ZEUS_Engineering_Full_Pitch_Deck_Reconstructed.pdf`, itself a
   reconstruction of the official pitch page formerly at
   `zeus-engineering.com/pitch-deck-v01/`.
2. **The live site** — `zeus-engineering.com`, read 18 September 2026.

The deck carries its own warning on page 1, and it is worth repeating because it
governs how this whole site is written:

> This is not the original ZEUS-designed PDF … factual claims remain ZEUS's
> published claims and should be independently verified before external
> publication.

That is why almost nothing on this site is classified `current`. A claim in a
pitch deck is a claim. The site says "ZEUS reports" and means it.

---

## 1. Claims removed — present in the earlier brief, absent from both sources

These four came from the ChatGPT planning conversation, not from ZEUS. None
appears in the deck or on the live site. **All four have been removed from the
codebase rather than softened**, because a hedge on a fabricated number is still
a fabricated number.

| Claim | Where it came from | Status |
|---|---|---|
| **99.9% rack uptime** | ChatGPT brief only | ❌ Removed. Nowhere in the deck. Uptime is never claimed on this site. |
| **35 °C / 85% humidity** operating conditions | ChatGPT brief only | ❌ Removed. The deck describes *methods* for managing heat, not rated conditions. |
| **"Localised liquid cooling"** | ChatGPT brief only | ❌ Removed. The deck says "fans, water radiators for hydro systems and airflow-control systems". |
| **$10,000 / 3 Bitmain ASICs / 2-year hosting package** | ChatGPT brief only | ❌ Removed. The deck confirms only the **10% service fee on earnings**. |

The hosted-mining page is therefore built to sell the operation rather than a
price, and says plainly that hosting is quoted per deployment. If ZEUS confirms
a package price, add it to `src/data/hosting.ts` and the page picks it up.

## 2. Place name conflict — "Long Hai"

**The deck says "the Vung Tau / Ba Ria region". It never says Long Hai.**
Neither does the live site.

"Long Hai" appears only in the ChatGPT brief and burned into the captions of the
supplied AI concept renders. Long Hai *is* a coastal town in Ba Ria–Vung Tau
province, so it is plausibly correct — but plausible is not sourced, and this is
an investor-facing site.

**Resolution:** the site uses the deck's region. The route is `/projects/vung-tau`.

**To change it back:** if ZEUS confirms Long Hai, edit `site` in
`src/data/company.ts` (`name`, `slug`) and rename the route folder. One place,
two minutes — the data layer exists so that this is not a find-and-replace.

## 3. Reclassified — operating figures are `zeus-reported`, not `current`

The deck's own wording is *"ZEUS **reports** operating a 100 kW facility…"*.
So 100 kW / 300 m² / 20 kW solar / 1+ PH all carry the **Zeus reported** badge,
not **Current**. They are presented as the company's figures, not as audited fact.

## 4. Corrected — the projection breakdown

The earlier brief compressed this into "~20 BTC/yr revenue, 10–15 BTC/yr profit".
The deck is more precise, and the detail matters because 10–15 appears twice in
two different roles:

- **~20 BTC/yr** — total projected production
- **10–15 BTC/yr** — from 200 company-owned machines
- **4–5 BTC/yr** — from hosted mining across 300 machines
- **10–15 BTC/yr** — projected **profit after expenses**

All four are in `src/data/metrics.ts` with the four stated assumptions, which
render alongside them on `/investors/projections` and are never omitted.

## 5. Recovered — material the brief missed entirely

The deck contained substantial content the planning conversation never surfaced.
All of it is now on the site:

- **Leadership** — Tatts Nguyen (Founder & CEO), Chris Gainer (Co-Founder & CTO),
  Quynh Nguyen (Head of Accounting & Legal), Valentine Cheval (CBMO).
- **Why Vietnam** — six sourced arguments, including the 20% nominal corporate
  tax rate, with ZEUS's own "re-verify this" caveats carried through.
- **Common questions** — a genuine FAQ where the company answers hard questions
  about its own business. The most credible content in the whole project.
- **~US$3M systemised asset value**, including assets under management.
- **Self-funded to date** — pre-seed and seed completed from reinvested mining revenue.
- **Quantum computing** in the long-term vision, alongside Bitcoin and AI.
- **Public-company ambition** in the long-range roadmap.
- **Solar saving estimate** — up to 10% of overall power expense.
- **The seven-point Series A plan**, in ZEUS's own sequence.

From the live site, additionally: **founded 2022**, MST **0317377894**, the
mission quotation, SSMDC's grid load-balancing behaviour, the full Ai-1
component specification, and **ASIC Sales + Consulting** as current offerings.

## 6. Imagery provenance

**All six supplied assets are AI-generated concept renders.** None is a
photograph of the operating site, and they depict a facility substantially
larger than the 300 m² ZEUS reports — a multi-hall campus with dozens of
containers and a large solar field.

Every one is labelled **Concept visualisation** on its caption rail, and
`/projects/vung-tau` states the position explicitly. They are never captioned as
documentary footage.

**The hero video is 736×400** (WhatsApp-compressed). Encoded derivatives sit at
1104×600 and the browser upscales. This is the main reason media is presented in
framed panels rather than full-bleed — a panel upscales far less than a viewport.
**Replacing `/public/video/*.mp4` with higher-resolution masters needs no code
change.**

## 7. Still needed from ZEUS

| Item | Why it matters |
|---|---|
| **Real site photography** | The single highest-value upgrade. Concept renders can then be retired from `/projects`. |
| **Uncompressed hero footage** | Current source is a quarter of 1080p. |
| **Confirm: Long Hai or Vung Tau / Ba Ria?** | See §2. |
| **Hosting package price, if one exists** | See §1. |
| **Confirm the 99.9% uptime claim, if real** | If ZEUS stands behind it and can evidence it, it is a strong number — but it needs a source. |
| **Form endpoint** | The contact form currently composes an email client message. See README. |
| **Legal review of `/legal/privacy`** | Drafted, unreviewed, and says so on the page. |
| **Deployment target** | Affects `NEXT_PUBLIC_SITE_URL` and therefore canonicals and the sitemap. |

## 8. Verifying this yourself

Every figure lives in `src/data/`. To audit what the site claims and where each
number sits:

```bash
grep -rn "value:" src/data/metrics.ts
```

Each entry carries a `status` of `current`, `zeus-reported`, `target`,
`projection` or `concept`. That status drives the badge, and the badge states the
status **as a word** — so the distinction survives greyscale, colour blindness
and a screen reader. No component hardcodes a ZEUS figure.
