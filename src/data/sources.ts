import type { FactStatus } from "./facts";

/**
 * ============================================================
 * THE PUBLIC CLAIM LEDGER
 * ============================================================
 *
 * `CLAIMS.md` is the working audit document for whoever maintains this site.
 * This file is the same discipline made public: every figure the site
 * publishes about ZEUS, its status, and the exact ZEUS source it came from.
 *
 * It exists because the hardest question an investor can ask an
 * infrastructure company is "where did this number come from?", and the
 * strongest possible answer is to have written it down before being asked.
 *
 * RULES
 *  - A figure may not appear on the site without a row here.
 *  - `citation` quotes or closely paraphrases the source. It is never a
 *    restatement of the claim in the site's own words.
 *  - Nothing here may be invented, inferred, or reconciled on ZEUS's behalf.
 *    Where two ZEUS sources disagree, both are reproduced and the
 *    disagreement is stated. See `openQuestions`.
 *
 * `npm run audit:claims` enforces the first rule against CLAIMS.md.
 */

export interface SourceDoc {
  ref: string;
  title: string;
  date: string;
  /** How this document was obtained, and what it is relied on for. */
  provenance: string;
  /**
   * Marked confidential by ZEUS. Facts inform the copy; the file itself is
   * never linked, embedded or offered for download anywhere on this site.
   */
  confidential?: boolean;
  supersededBy?: string;
}

export const sourceDocuments: SourceDoc[] = [
  {
    ref: "D2",
    title: "SSMDC, Small Solar Modular Datacenter",
    date: "17 September 2026",
    provenance:
      "ZEUS Engineering JSC. The current fundraising document, and the source the investor section follows wherever it disagrees with earlier material.",
    confidential: true,
  },
  {
    ref: "D1",
    title: "Pitch deck, reconstructed from the published pitch page",
    date: "Earlier, exact date not stated",
    provenance:
      "Reconstructed from ZEUS's own published pitch page. Still the source for the Vung Tau operating figures, which D2 does not restate.",
    supersededBy: "D2",
  },
  {
    ref: "W",
    title: "zeus-engineering.com",
    date: "Read 18 September 2026",
    provenance: "ZEUS's live public website.",
  },
  {
    ref: "G",
    title: "Hosted mining offer graphic",
    date: "September 2025",
    provenance: "An official ZEUS offer graphic published by the company.",
  },
];

export interface Claim {
  figure: string;
  what: string;
  status: FactStatus;
  ref: string;
  /** Where in the source, and what it actually says. */
  citation: string;
}

export interface ClaimGroup {
  id: string;
  title: string;
  intro: string;
  claims: Claim[];
}

export const claimGroups: ClaimGroup[] = [
  {
    id: "operating",
    title: "What ZEUS reports operating today",
    intro:
      "These are the only figures on this site that describe something already running. Note the verb in the source: ZEUS reports. They are classified as reported by ZEUS rather than as verified fact, because no independent audit of them exists.",
    claims: [
      {
        figure: "100 kW",
        what: "Facility capacity, Vung Tau",
        status: "zeus-reported",
        ref: "D1",
        citation:
          "“ZEUS reports operating a 100 kW facility on a 300 m² site in the Vung Tau / Bà Rịa region, with more than 1 PH peak hash power and 20 kW peak solar.”",
      },
      {
        figure: "300 m²",
        what: "Operating site area",
        status: "zeus-reported",
        ref: "D1",
        citation: "Same sentence.",
      },
      {
        figure: "20 kW",
        what: "Peak solar, Vung Tau",
        status: "zeus-reported",
        ref: "D1",
        citation: "Same sentence.",
      },
      {
        figure: "1+ PH",
        what: "Peak hash power",
        status: "zeus-reported",
        ref: "D1",
        citation: "“more than 1 PH peak hash power”",
      },
      {
        figure: "~$3M",
        what: "Systemised asset value",
        status: "zeus-reported",
        ref: "D1",
        citation:
          "“total systemized asset value of approximately US$3 million, including assets under management”",
      },
      {
        figure: "Vung Tau / Bà Rịa",
        what: "Operating region",
        status: "zeus-reported",
        ref: "D1",
        citation:
          "Stated in both D1 and D2 as the region. Neither document names a more specific location, so neither does this site.",
      },
    ],
  },
  {
    id: "traction",
    title: "Traction",
    intro:
      "D2 page 6, the deck's own traction page. The prototype figure is reproduced in ZEUS's units, not converted. See the open question below.",
    claims: [
      {
        figure: "5 yrs",
        what: "Established in Vietnam",
        status: "zeus-reported",
        ref: "D2",
        citation: "Page 6.",
      },
      {
        figure: "100 kWp",
        what: "Operational ASIC prototype",
        status: "zeus-reported",
        ref: "D2",
        citation:
          "Stated in three places. Page 3, comparison table, “Existing live prototype: 100 kWp operational”. Page 6, “100 kWp / Operational ASIC prototype”. Page 10, “100 kWp BTC ASIC site already running in Vietnam”.",
      },
      {
        figure: "BTC",
        what: "Live compute workload",
        status: "zeus-reported",
        ref: "D2",
        citation: "Page 6.",
      },
      {
        figure: "DC",
        what: "Power architecture validated on the prototype",
        status: "zeus-reported",
        ref: "D2",
        citation: "Page 6.",
      },
    ],
  },
  {
    id: "raise",
    title: "The raise",
    intro:
      "D2 page 13, verbatim from the deck's own use-of-funds table. A fundraising target is not money received, and this site never renders it as one.",
    claims: [
      {
        figure: "$2.69M",
        what: "Total raise sought",
        status: "target",
        ref: "D2",
        citation:
          "Page 13, “THE ASK, $2.69M · 18–24 month runway to multiple live nodes”",
      },
      {
        figure: "$1.15M",
        what: "GPU and server hardware",
        status: "target",
        ref: "D2",
        citation: "Page 13 table row.",
      },
      {
        figure: "$620k",
        what: "Founders, staff and contractors",
        status: "target",
        ref: "D2",
        citation: "Page 13 table row.",
      },
      {
        figure: "$380k",
        what: "Solar, battery, power and build-out",
        status: "target",
        ref: "D2",
        citation: "Page 13 table row.",
      },
      {
        figure: "$180k",
        what: "Land options, deposits and setup",
        status: "target",
        ref: "D2",
        citation: "Page 13 table row.",
      },
      {
        figure: "$360k",
        what: "R&D, taxes, contingency and working capital",
        status: "target",
        ref: "D2",
        citation: "Page 13 table row.",
      },
      {
        figure: "18–24 months",
        what: "Runway to multiple live nodes",
        status: "target",
        ref: "D2",
        citation: "Page 13.",
      },
    ],
  },
  {
    id: "node",
    title: "SSMDC node design",
    intro:
      "D2 pages 5 and 7. Every figure here describes a node that has not been built. They are design ranges, not measured output from anything currently running.",
    claims: [
      {
        figure: "400 m² class",
        what: "Site size for one node",
        status: "target",
        ref: "D2",
        citation:
          "Page 5, “400 m² class sites become viable AI nodes”, and the page 7 heading.",
      },
      {
        figure: "80–120 kWp",
        what: "Solar capacity per node",
        status: "target",
        ref: "D2",
        citation: "Page 7, “Solar capacity, 80–120 kWp (realistic working range)”",
      },
      {
        figure: "130–190 MWh",
        what: "Annual solar yield per node",
        status: "target",
        ref: "D2",
        citation: "Page 7.",
      },
      {
        figure: "300–500 kWh",
        what: "Usable battery, three to five hour class",
        status: "target",
        ref: "D2",
        citation: "Page 7.",
      },
      {
        figure: "50–75 kW",
        what: "Continuous IT load",
        status: "target",
        ref: "D2",
        citation: "Page 7.",
      },
      {
        figure: "8–15%",
        what: "DC-DC facility power saving, 10–12% central case",
        status: "target",
        ref: "D2",
        citation:
          "Page 5, “Real-world facility-level savings of 8–15%, with a practical 10–12% central case”. ZEUS's own estimate, not an independently measured result.",
      },
      {
        figure: "100–200 kW",
        what: "Grid supply, grid-connected variant",
        status: "concept",
        ref: "W",
        citation:
          "ZEUS's earlier grid-connected description on the live site. Kept alongside the D2 node spec and labelled as the grid-connected variant rather than merged into it.",
      },
    ],
  },
  {
    id: "compute",
    title: "Compute per node",
    intro:
      "D2 page 8. A specification for hardware not yet purchased. No per-GPU power draw is derived anywhere on this site, because ZEUS has not published one.",
    claims: [
      {
        figure: "24–32",
        what: "NVIDIA H100 / H200 GPUs",
        status: "target",
        ref: "D2",
        citation: "Page 8.",
      },
      {
        figure: "50–100+ PFLOPS",
        what: "Compute, FP8 sparse",
        status: "target",
        ref: "D2",
        citation: "Page 8.",
      },
      {
        figure: "1.9–4.5 TB",
        what: "HBM memory",
        status: "target",
        ref: "D2",
        citation: "Page 8.",
      },
      {
        figure: "$0.9–1.4M",
        what: "GPU hardware cost",
        status: "target",
        ref: "D2",
        citation: "Page 8.",
      },
      {
        figure: "30–100k+",
        what: "Tokens per second, 70B class inference",
        status: "target",
        ref: "D2",
        citation: "Page 8.",
      },
      {
        figure: "3–4",
        what: "8-GPU servers per node",
        status: "target",
        ref: "D2",
        citation: "Page 8.",
      },
    ],
  },
  {
    id: "hosting",
    title: "Hosted mining",
    intro:
      "The commercial terms ZEUS advertises. What this site deliberately leaves out of that same source is set out further down.",
    claims: [
      {
        figure: "$10,000",
        what: "Hosted mining package price",
        status: "zeus-reported",
        ref: "G",
        citation: "“$10,000 USD Hosted Mining Package”",
      },
      {
        figure: "10%",
        what: "Service fee on earnings",
        status: "zeus-reported",
        ref: "D1",
        citation: "“10% of earnings in service fees to ZEUS”",
      },
    ],
  },
];

/**
 * Where ZEUS's own sources disagree with each other.
 *
 * The site does not pick a winner. It reproduces both and says so, which is
 * the only honest option until ZEUS clarifies.
 */
export const openQuestions = [
  {
    id: "kwp",
    title: "kW and kWp",
    body: "D2 describes the operational prototype as 100 kWp. D1 separately describes the Vung Tau operation as a 100 kW facility with 20 kW peak solar. kW and kWp are different units: one measures capacity, the other measures peak photovoltaic output.",
    handling:
      "Both figures are reproduced exactly as ZEUS published them, and a short note appears wherever a reader meets either one. This site does not claim the two describe the same site, and does not claim they describe different sites.",
    ask: "Is the prototype 100 kW of site capacity, or 100 kWp of solar? If it is the latter, it is a separate installation from Vung Tau's 20 kW of solar and deserves naming in its own right.",
  },
];

/**
 * Claims available in ZEUS sources that this site chose NOT to publish.
 *
 * This section is the real test of the method. Anyone can list the figures
 * they used. The discipline is in writing down the ones that were available,
 * flattering, and left out anyway.
 */
export const notPublished = [
  {
    title: "A return figure of roughly 100% per year",
    body: "The same graphic that advertises the $10,000 hosted mining package also advertises “EXTRA $10,000 USD per year”. That is a return claim with no stated assumptions behind it. A return figure whose workings cannot be shown does not belong on an investor-facing site. If ZEUS supplies the assumptions, it can appear as a clearly labelled projection.",
  },
  {
    title: "Scarcity messaging",
    body: "The same graphic states “ONLY 8 SLOTS LEFT”. That is a sales device rather than a fact about the infrastructure, and it is not reproduced.",
  },
  {
    title: "A third-party logo wall",
    body: "D2 contains a page of third-party company and government logos under the heading “POTENTIAL CLIENTS & PARTNERS”. Those are aspirations, not relationships. Reproducing them would imply commercial ties that have not been stated to exist, so no third-party logo appears anywhere on this site.",
  },
  {
    title: "Superseded fundraising figures",
    body: "D1 contains an entire earlier plan: a $1–2M Series A, a 2,000 m² industrial site, 500 machines, 1 MW rising to 2 MW, and roughly 20 BTC per year of projected production. D2 replaces that plan. The old figures are kept in the audit file but are not published, so they cannot compete with the current ask.",
  },
  {
    title: "Unsourced operating claims",
    body: "A 99.9% uptime figure, 35 °C and 85% humidity operating conditions, and the phrase “localised liquid cooling” all appeared in earlier working material for this project. None of them appears in any ZEUS source, so all three were removed rather than softened.",
  },
  {
    title: "Everything ZEUS has never claimed",
    body: "No customer, partner, contract, investor, deployment, office, employee count, revenue, profitability, certification, patent, award, uptime guarantee, PUE, carbon figure, market-size statistic or valuation appears anywhere on this site. None of them has a ZEUS source.",
  },
];
