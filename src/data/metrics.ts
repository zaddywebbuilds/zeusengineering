import type { Fact } from "./facts";

/**
 * ============================================================
 * SOURCE OF TRUTH FOR EVERY ZEUS FIGURE
 * ============================================================
 *
 * Primary source: ZEUS_Engineering_Full_Pitch_Deck_Reconstructed.pdf, itself
 * a reconstruction of the official pitch page formerly at
 * zeus-engineering.com/pitch-deck-v01/. Secondary source: the live site.
 *
 * The reconstruction states that factual claims remain ZEUS's published
 * claims and should be independently verified before external publication.
 * That is why almost nothing here is classified `current` — a claim in a
 * pitch deck is a claim, not an audit.
 *
 * Figures that appeared in the earlier project brief but are NOT in the deck
 * have been removed rather than softened. See AUDIT.md.
 */

/**
 * OPERATING FIGURES.
 *
 * Deck: "ZEUS reports operating a 100 kW facility on a 300 m² site in the
 * Vung Tau / Ba Ria region, with more than 1 PH peak hash power and 20 kW
 * peak solar."
 *
 * Note the verb: ZEUS *reports*. Classified `zeus-reported`, not `current`.
 */
export const currentOperations: Fact[] = [
  {
    value: "100",
    unit: "kW",
    label: "Facility capacity",
    status: "zeus-reported",
  },
  { value: "300", unit: "m²", label: "Operating site", status: "zeus-reported" },
  { value: "20", unit: "kW", label: "Peak solar", status: "zeus-reported" },
  { value: "1+", unit: "PH", label: "Peak hash power", status: "zeus-reported" },
];

/**
 * Thermal management.
 *
 * Deck, "How do you manage heat?": ZEUS manages airflow using conventional
 * approaches including fans, water radiators for hydro systems and
 * airflow-control systems.
 *
 * The earlier brief's 35 °C / 85% humidity figures and its "localised liquid
 * cooling" phrasing appear neither in the deck nor on the live site, so no
 * numeric operating-condition claim is published anywhere on this site.
 */
export const thermalApproach = [
  "Airflow control systems",
  "Fans",
  "Water radiators for hydro systems",
] as const;

/**
 * Total asset value.
 * Deck: "describes total systemized asset value of approximately US$3 million,
 * including assets under management."
 */
export const assetValue: Fact = {
  value: "$3",
  unit: "M",
  label: "Systemised asset value",
  status: "zeus-reported",
  note: "Including assets under management, as described by ZEUS.",
};

/**
 * SUPERSEDED — the earlier Bitcoin-expansion figures.
 *
 * The $1–2M Series A, the 2,000 m² / 500-machine / 1–2 MW expansion targets
 * and the ~20 BTC/yr projections all came from the reconstructed pitch page.
 * ZEUS's deck of 17 September 2026 replaces that plan with the SSMDC raise, so
 * those figures have been removed rather than left to compete with the current
 * ask. They are recorded in AUDIT.md.
 *
 * Current investor figures live in `src/data/ssmdc.ts`.
 */
