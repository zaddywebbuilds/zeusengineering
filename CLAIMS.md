# Claim audit

Every number this website publishes about ZEUS, and where it comes from.

The test each row has to survive is: **"Chris, where did this figure come
from?"** If a figure cannot be pointed at a ZEUS source, it is not on the site.

Run `npm run audit:claims` to verify that every figure in `src/data/` appears in
this file. The check fails the build if a number is introduced without being
documented here.

## Sources

| Ref | Document | Date | Where it came from |
|---|---|---|---|
| **[D2]** | `SSMDC, Small Solar Modular Datacenter`, ZEUS Engineering JSC | **17 Sep 2026** | ZEUS's own WordPress media library, `/wp-json/wp/v2/media`. Archived at `docs/ZEUS_SSMDC_deck_2026-09-17.pdf`. Marked "Confidential | 2026", **never linked or published from the site**; facts only. |
| **[D1]** | Reconstructed pitch page (`/pitch-deck-v01/`) | earlier | Archived at `docs/ZEUS_pitch_deck_reconstructed.pdf`. Superseded by [D2] on the raise and the SSMDC spec. |
| **[W]** | `zeus-engineering.com` | read 18 Sep 2026 | The live one-page site. |
| **[G]** | `10K-Hosted-Mining-Post.webp` | Sep 2025 | Official ZEUS offer graphic, from the same media library. |

**On [D1] vs [D2].** These are two different fundraising plans, and [D2] is five
months newer. [D2] repositions mining as the *prototype*, "first for mining,
now redirected to AI", and replaces the Series A entirely. The site follows
[D2]. If ZEUS says [D1] is still the live pitch, the investor section reverts:
the [D1] figures are preserved in this file and in `AUDIT.md §4`.

---

## Operating figures, what ZEUS reports today

| Figure | Status | Source |
|---|---|---|
| 100 kW facility capacity | Zeus reported | [D1] "ZEUS **reports** operating a 100 kW facility" |
| 300 m² operating site | Zeus reported | [D1] same sentence |
| 20 kW peak solar | Zeus reported | [D1] same sentence |
| 1+ PH peak hash power | Zeus reported | [D1] "more than 1 PH peak hash power" |
| ~$3M systemised asset value | Zeus reported | [D1] "total systemized asset value of approximately US$3 million, including assets under management" |
| Vung Tau / Bà Rịa region | Zeus reported | [D1] and [D2]. **Not "Long Hai"**, see `AUDIT.md §2` |
| Airflow control / fans / water radiators | Zeus reported | [D1] Q&A, "How do you manage heat?" |

## The raise, [D2], page 13

Verbatim from the deck's own use-of-funds table.

| Figure | Status | Source |
|---|---|---|
| **$2.69M** total raise | Target | [D2] p13 "THE ASK, $2.69M · 18–24 month runway to multiple live nodes" |
| $1.15M GPU & server hardware | Target | [D2] p13 table row |
| $620k founders, staff & contractors | Target | [D2] p13 table row |
| $380k solar, battery, power & build-out | Target | [D2] p13 table row |
| $180k land options, deposits & setup | Target | [D2] p13 table row |
| $360k R&D, taxes, contingency & working capital | Target | [D2] p13 table row |
| 18–24 month runway | Target | [D2] p13 |

## SSMDC node design, [D2], pages 5 and 7

| Figure | Status | Source |
|---|---|---|
| 400 m² class site | Target | [D2] p5 "400 m² class sites become viable AI nodes"; p7 heading |
| 80–120 kWp solar | Target | [D2] p7 "Solar capacity, 80–120 kWp (realistic working range)" |
| ~130–190 MWh annual solar yield | Target | [D2] p7 |
| 300–500 kWh usable battery (3–5 h) | Target | [D2] p7 |
| 50–75 kW continuous IT load | Target | [D2] p7 |
| 8–15% DC-DC saving (10–12% central) | Target, ZEUS's own estimate | [D2] p5 "Real-world facility-level savings of 8–15%, with a practical 10–12% central case" |
| 100–200 kW grid + up to 100 kW solar | Concept | **[W]**, ZEUS's earlier grid-connected description. Kept alongside the [D2] node spec, labelled as the grid-connected variant |

## Compute per node, [D2], page 8

| Figure | Status | Source |
|---|---|---|
| 24–32 NVIDIA H100/H200 GPUs | Target | [D2] p8 |
| ~50–100+ PFLOPS (FP8 sparse) | Target | [D2] p8 |
| 1.9–4.5 TB HBM | Target | [D2] p8 |
| $0.9–1.4M GPU hardware cost | Target | [D2] p8 |
| 30–100k+ tokens/s (70B-class) | Target | [D2] p8 |
| 3–4 × 8-GPU servers | Target | [D2] p8 |

## Traction, [D2], page 6

| Figure | Status | Source |
|---|---|---|
| 5 yrs established in Vietnam | Zeus reported | [D2] p6 |
| **100 kWp** operational ASIC prototype | Zeus reported | [D2] states this in **three** places: **p3** comparison table, "Existing live prototype: 100 kWp operational"; **p6**, "100 kWp / Operational ASIC prototype"; **p10**, "100 kWp BTC ASIC site already running in Vietnam". Reproduced as published. |
| BTC live compute workload | Zeus reported | [D2] p6 |
| DC path architecture validated | Zeus reported | [D2] p6 |

### kW and kWp: an open question for ZEUS

[D2] describes the prototype as **100 kWp**. [D1] separately describes the Vung
Tau operation as a **100 kW facility with 20 kW peak solar**. kW and kWp are
different units.

Both are reproduced exactly as ZEUS published them, and a short note appears
wherever a reader meets them (investor traction, homepage comparison, Vung Tau
figures) stating both and saying ZEUS has not clarified how they relate.

**The site does not claim they are the same site, and does not claim they are
different sites.** An earlier revision rewrote the deck's "kWp" to "kW" to
remove the apparent clash; that was wrong, because it silently altered ZEUS's
own wording, and has been reverted.

**Ask ZEUS:** is the prototype 100 kW of site capacity, or 100 kWp of solar? If
the latter, it is a separate installation from Vung Tau's 20 kW of solar and
deserves naming in its own right.

## Hosted mining

| Figure | Status | Source |
|---|---|---|
| $10,000 package | Zeus reported | **[G]** "$10,000 USD Hosted Mining Package" |
| 10% service fee on earnings | Zeus reported | [D1] "10% of earnings in service fees to ZEUS" |

**Deliberately not published:** the same graphic advertises "EXTRA $10,000 USD
per year", a ~100%/yr return claim with no stated assumptions, and "ONLY 8
SLOTS LEFT". Neither appears on the site. The "3 Bitmain ASICs / two-year
contract" detail is not in [D1], [D2] or [W] and is **not stated**.

## The hyperscale comparison, [D2], page 3

Every row (3–7+ years, sub-$1M per node, 8–15% savings, and the rest) is ZEUS's
own table from [D2] p3, reproduced as the company's argument and labelled on the
page as "ZEUS's comparison", not an independent benchmark.

**DONE.** The homepage section is now headed "The modular thesis" and states
that it is ZEUS's own design thesis, not an independent industry benchmark. The
investor heading was softened from "Hyperscale cannot keep up" to "Hyperscale
alone cannot meet every deployment", which is defensible without industry data
behind it.

## Figures from [D1] currently NOT on the site

Superseded by [D2], preserved here in case ZEUS says the Series A is still live:

$1–2M Series A · 2,000 m² industrial site · 200 company machines · 300 hosted
machines · 500 machines total · up to 500 kW solar · 1 MW → 2 MW · ~20 BTC/yr
projected production · 10–15 BTC/yr from owned · 4–5 BTC/yr from hosted ·
10–15 BTC/yr projected profit · $10–20M Series B ambition · $100M Series C
ambition

## Never published

No customers, partners, contracts, investors, funding received, deployments,
offices, employee counts, revenue, profitability, certifications, patents,
awards, uptime guarantee, PUE, carbon or environmental figures, market-size
statistics, or valuation. None of these has a ZEUS source.

**Specifically excluded:** [D2] page 11 is a wall of third-party logos, NVIDIA,
AWS, OpenAI, Gemini, Grab, Shopee, Lazada, FPT, EVN, plus the Vietnamese and
Australian government crests, under the heading "POTENTIAL CLIENTS &
PARTNERS". Aspirational, not relationships. These must never appear on the site.

Also removed as unsourced (see `AUDIT.md §1`): 99.9% uptime, 35 °C / 85%
operating conditions, "localised liquid cooling".

---

## Published as a page

This audit is no longer repo-only. `/sources` renders the same ledger from
`src/data/sources.ts`, including the source documents, the kW/kWp open
question, and the **deliberately not published** list.

Anything added to `src/data/sources.ts` must also exist here, and vice versa.
The two files are kept in step by hand; `npm run audit:claims` only enforces
that figures in `src/data/` appear in this file.

**The confidential deck is still never linked.** `/sources` names [D2], states
its date, and marks it "Confidential, never published here". It does not link,
embed, mirror or reproduce any page of it.

## The node model, `/investors/economics`

An interactive model. It introduces **one derived quantity** and **four inputs
with no ZEUS source**. Both are disclosed on the control and in the output.

**Derived, and the only arithmetic performed on ZEUS's behalf:**

| Quantity | How | Why it is defensible |
|---|---|---|
| Annual solar yield at a given kWp | Linear interpolation between ZEUS's own two published endpoints, 80 kWp → 130 MWh and 120 kWp → 190 MWh [D2] p7 | It reproduces both published endpoints exactly and invents no third figure. Labelled as interpolated in the output. |

**No ZEUS source. Placeholder defaults, marked as the visitor's own:**

| Input | Default | Note |
|---|---|---|
| Facility PUE | 1.2 | ZEUS publishes no PUE. `CLAIMS.md` bars a PUE claim, and this is not one: it is an input the reader sets. |
| Grid tariff | $0.08/kWh | No Vietnamese tariff figure is asserted anywhere on the site. |
| GPU utilisation sold | 70% | ZEUS publishes no utilisation figure. |
| Price per GPU hour | $2.00 | ZEUS publishes no price. |

The four ZEUS sliders are **bounded by the published ranges** and cannot be
dragged outside them, so the model cannot be used to manufacture a ZEUS claim.

The output panel states, in words, that the result is the visitor's model and
not a ZEUS projection; that the solar coverage figure is an optimistic bound
because it assumes total self-consumption and ZEUS has published no load
profile; and that only energy is netted off, so nothing shown is a profit
figure. **No revenue, return or profitability figure is attributed to ZEUS
anywhere in it.**

## The investor brief, `/investors/brief`

A printable one-pager rendered from `ssmdc.ts`, `metrics.ts` and `roadmap.ts`,
the same data the rest of the site uses. It introduces **no new figures**.

It exists because a separately maintained deck is how the kW/kWp drift
happened in the first place. A brief generated from the site's own data cannot
disagree with the pages it summarises.
