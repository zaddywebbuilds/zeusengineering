# Factual audit

> **September 2026, the site now runs on ZEUS's current deck.**
> See §0. The earlier Bitcoin-expansion figures are superseded.

## 0. Two decks, and which one wins

ZEUS's own WordPress media library contains
`SSMDC_Pitch_Deck_Zeus_Engineering_Final-17Sep.pdf`, dated **17 September 2026**
and marked **"Confidential | 2026"**. It supersedes the reconstructed pitch page
this site was first built from.

| | Reconstructed deck (old) | SSMDC deck, 17 Sep 2026 (current) |
|---|---|---|
| The ask | $1–2M Series A | **$2.69M**, itemised, 18–24 month runway |
| Positioning | Scale Bitcoin mining | **Decentralised AI compute** |
| The mining site | The business | "prototype… **redirected to AI**" |
| SSMDC | 100–200 kW grid + 100 kW solar | **400 m² node**, 80–120 kWp solar, 300–500 kWh battery, 50–75 kW IT |
| Compute |, | **24–32 × H100/H200**, 50–100+ PFLOPS, $0.9–1.4M |
| Technical edge |, | **DC-DC power path**, 8–15% saving |
| Model | Mining revenue | **Compute + real estate** |
| Projections | ~20 BTC/yr | Absent |
| Roadmap | 8 stages to Series C | 3 phases: prototype → nodes → network |

**The site is built on the current deck.** Retired: the $1–2M Series A, the
2,000 m² / 500-machine / 1–2 MW expansion targets, and the ~20 BTC/yr
projections. Routes changed with it, `/investors/series-a` → `/investors/the-ask`,
`/investors/projections` → `/investors/economics`.

### Handling of the confidential file

The PDF is **publicly downloadable** from `zeus-engineering.com`, unlinked, but
served without authentication and listed in the public `wp-json` media endpoint.

- Its **facts inform the copy**. The file is **never linked, embedded or offered
  for download** anywhere on this site, and it is not committed to `public/`.
- **ZEUS should be told** that a document marked Confidential is publicly
  retrievable from their own server. That is their decision to make, not ours.

### Never publishable: the logo wall

Page 11 of that deck is a grid of third-party marks, NVIDIA, AWS, OpenAI,
Gemini, Grab, Shopee, Lazada, FPT, EVN, plus the Vietnamese and Australian
government crests, under the heading **"POTENTIAL CLIENTS & PARTNERS"**.

These are aspirational. Reproducing them would assert endorsements and
relationships that do not exist. **They must never appear on the website.**

---

## The sources

Beyond the current deck, content traces to:

1. **The SSMDC deck**, 17 September 2026, current; governs investor content.
2. **The reconstructed deck**, still the source for the operating figures, the
   team, Why Vietnam and the FAQ, none of which the newer deck contradicts.
3. **The live site**, `zeus-engineering.com`, read 18 September 2026.
4. **Their WordPress media library**, `/wp-json/wp/v2/media`, 83 items.

The deck carries its own warning on page 1, and it is worth repeating because it
governs how this whole site is written:

> This is not the original ZEUS-designed PDF … factual claims remain ZEUS's
> published claims and should be independently verified before external
> publication.

That is why almost nothing on this site is classified `current`. A claim in a
pitch deck is a claim. The site says "ZEUS reports" and means it.

---

## 1. Claims removed, present in the earlier brief, absent from both sources

These four came from the ChatGPT planning conversation, not from ZEUS. None
appears in the deck or on the live site. **All four have been removed from the
codebase rather than softened**, because a hedge on a fabricated number is still
a fabricated number.

| Claim | Where it came from | Status |
|---|---|---|
| **99.9% rack uptime** | ChatGPT brief only | ❌ Removed. Nowhere in the deck. Uptime is never claimed on this site. |
| **35 °C / 85% humidity** operating conditions | ChatGPT brief only | ❌ Removed. The deck describes *methods* for managing heat, not rated conditions. |
| **"Localised liquid cooling"** | ChatGPT brief only | ❌ Removed. The deck says "fans, water radiators for hydro systems and airflow-control systems". |
| **$10,000 hosting package** | ChatGPT brief | ✅ **RESTORED, verified.** ZEUS's own offer graphic (`2025/09/10K-Hosted-Mining-Post.webp`) is headed "$10,000 USD Hosted Mining Package". The "3 Bitmain ASICs / 2-year" detail remains unconfirmed and is not stated. |

**Not reproduced from that same graphic:** "EXTRA $10,000 USD per year", a
~100%-per-annum return claim published with no stated assumptions, and "ONLY 8
SLOTS LEFT", a scarcity device. A return figure whose workings cannot be shown
does not belong on an investor-facing site. If ZEUS supplies the assumptions, it
can be added as a clearly-labelled projection.

## 2. Place name conflict, "Long Hai"

**The deck says "the Vung Tau / Ba Ria region". It never says Long Hai.**
Neither does the live site.

"Long Hai" appears only in the ChatGPT brief and burned into the captions of the
supplied AI concept renders. Long Hai *is* a coastal town in Ba Ria–Vung Tau
province, so it is plausibly correct, but plausible is not sourced, and this is
an investor-facing site.

**RESOLVED.** The 17 September deck says **"Bà Rịa region, South Vietnam"**
repeatedly and never says Long Hai. The site uses the region; the route is
`/projects/vung-tau`.

**To change it back:** if ZEUS confirms Long Hai, edit `site` in
`src/data/company.ts` (`name`, `slug`) and rename the route folder. One place,
two minutes, the data layer exists so that this is not a find-and-replace.

## 3. Reclassified, operating figures are `zeus-reported`, not `current`

The deck's own wording is *"ZEUS **reports** operating a 100 kW facility…"*.
So 100 kW / 300 m² / 20 kW solar / 1+ PH all carry the **Zeus reported** badge,
not **Current**. They are presented as the company's figures, not as audited fact.

## 4. Corrected, the projection breakdown

The earlier brief compressed this into "~20 BTC/yr revenue, 10–15 BTC/yr profit".
The deck is more precise, and the detail matters because 10–15 appears twice in
two different roles:

- **~20 BTC/yr**, total projected production
- **10–15 BTC/yr**, from 200 company-owned machines
- **4–5 BTC/yr**, from hosted mining across 300 machines
- **10–15 BTC/yr**, projected **profit after expenses**

**These are now retired from the site**, the 17 September deck contains no BTC
projection and repositions mining as the prototype rather than the business.
Recorded here for reference; `/investors/economics` presents the node design
figures instead. If ZEUS wants the mining projections back, they go in
`src/data/metrics.ts` with their four assumptions attached.

## 5. Recovered, material the brief missed entirely

The deck contained substantial content the planning conversation never surfaced.
All of it is now on the site:

- **Leadership**, Tatts Nguyen (Founder & CEO), Chris Gainer (Co-Founder & CTO),
  Quynh Nguyen (Head of Accounting & Legal), Valentine Cheval (CBMO).
- **Why Vietnam**, six sourced arguments, including the 20% nominal corporate
  tax rate, with ZEUS's own "re-verify this" caveats carried through.
- **Common questions**, a genuine FAQ where the company answers hard questions
  about its own business. The most credible content in the whole project.
- **~US$3M systemised asset value**, including assets under management.
- **Self-funded to date**, pre-seed and seed completed from reinvested mining revenue.
- **Quantum computing** in the long-term vision, alongside Bitcoin and AI.
- **Public-company ambition** in the long-range roadmap.
- **Solar saving estimate**, up to 10% of overall power expense.
- **The seven-point Series A plan**, superseded by the SSMDC use-of-funds table, kept in AUDIT for reference.

From the live site, additionally: **founded 2022**, MST **0317377894**, the
mission quotation, SSMDC's grid load-balancing behaviour, the full Ai-1
component specification, and **ASIC Sales + Consulting** as current offerings.

## 6. Imagery provenance

**All six supplied assets are AI-generated concept renders.** None is a
photograph of the operating site, and they depict a facility substantially
larger than the 300 m² ZEUS reports, a multi-hall campus with dozens of
containers and a large solar field.

Every one is labelled **Concept visualisation** on its caption rail, and
`/projects/vung-tau` states the position explicitly. They are never captioned as
documentary footage.

**The supplied brand film carries "LONG HAI | VIETNAM" burned into its titles**
, the place name §2 establishes as unsupported. The clip is therefore cropped
to its lower band before use, which drops every burned-in caption while keeping
the ZEUS wordmark on the building. The uncropped file is not shipped.

**The hero video is 736×400** (WhatsApp-compressed). Encoded derivatives sit at
1104×600 and the browser upscales. This is the main reason media is presented in
framed panels rather than full-bleed, a panel upscales far less than a viewport.
**Replacing `/public/video/*.mp4` with higher-resolution masters needs no code
change.**

## 7. Still needed from ZEUS

| Item | Why it matters |
|---|---|
| **Real site photography** | Still the highest-value upgrade. One genuine photograph was recovered from their media library (Antminer pallets, Aug 2023) and is now used on `/solutions/bitcoin-infrastructure` and `/projects/vung-tau`. Everything else remains a concept render. |
| **Uncompressed hero footage** | Current source is a quarter of 1080p. |
| ~~Long Hai or Bà Rịa?~~ | ✅ Resolved, Bà Rịa. See §2. |
| **Assumptions behind "$10,000 per year"** | The package price is verified; the advertised return is not substantiated. See §1. |
| **Confirm the 99.9% uptime claim, if real** | Still unsourced in either deck. If ZEUS can evidence it, it is a strong number. |
| **Tell ZEUS their confidential deck is public** | See §0. |
| **Form endpoint** | The contact form currently composes an email client message. See README. |
| **Legal review of `/legal/privacy`** | Drafted, unreviewed, and says so on the page. |
| **Deployment target** | Affects `NEXT_PUBLIC_SITE_URL` and therefore canonicals and the sitemap. |

## 8. Verifying this yourself

Every figure lives in `src/data/`. To audit what the site claims and where each
number sits:

```bash
grep -rn "value:" src/data/metrics.ts src/data/ssmdc.ts
```

Each entry carries a `status` of `current`, `zeus-reported`, `target`,
`projection` or `concept`. That status drives the badge, and the badge states the
status **as a word**, so the distinction survives greyscale, colour blindness
and a screen reader. No component hardcodes a ZEUS figure.
