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

/** The raise itself — a target, not capital received. */
export const seriesA: Fact = {
  value: "$1–2",
  unit: "M",
  label: "Series A fundraising target",
  status: "target",
  note: "ZEUS is seeking US$1–2 million in Series A venture-capital or private-equity funding. This is a target. ZEUS has not stated that the round has closed.",
};

/**
 * SERIES A EXPANSION TARGETS — from the deck's seven-point plan.
 * Every one is contingent on the raise. None may appear as an operating figure.
 */
export const expansionTargets: Fact[] = [
  { value: "2,000", unit: "m²", label: "Industrial site", status: "target" },
  { value: "200", label: "Company-owned machines", status: "target" },
  { value: "300", label: "Hosted machines", status: "target" },
  { value: "500", label: "Total machines", status: "target" },
  { value: "500", unit: "kW", label: "Peak solar", status: "target" },
  { value: "1 → 2", unit: "MW", label: "Power capacity", status: "target" },
];

/** The plan, in the deck's own sequence. */
export const expansionPlan = [
  {
    step: "01",
    title: "Acquire a larger site",
    body: "Up to 2,000 m² in the Vung Tau / Ba Ria region, with factory and warehouse space sufficient to house, power and operate up to 500 mining machines.",
  },
  {
    step: "02",
    title: "Purchase 200 machines",
    body: "New Bitcoin mining machines for company operation, with a management projection of 10–15 BTC per year.",
  },
  {
    step: "03",
    title: "Onboard 100 hosting clients",
    body: "Representing a total of 300 additional machines, with 10% of earnings paid to ZEUS in service fees.",
  },
  {
    step: "04",
    title: "Reach 500 machines",
    body: "A grand total of 500 machines online and operational.",
  },
  {
    step: "05",
    title: "Fit out up to 500 kW peak solar",
    body: "ZEUS estimates potential savings of up to 10% in overall power expenses.",
  },
  {
    step: "06",
    title: "Scale toward 1 MW, then 2 MW",
    body: "With the goal of accessing wholesale power rates in Vietnam and reducing operating power expense.",
  },
  {
    step: "07",
    title: "Establish factory floor space",
    body: "For trial fit-outs and manufacturing of containerised units for the company's future modular data centre plans.",
  },
];

/**
 * MANAGEMENT PROJECTIONS.
 *
 * Deck: the projection for the first year following completion of the new
 * facilities and client onboarding is approximately 20 BTC/year — of which
 * ~10–15 BTC/yr from 200 company-owned machines and a further ~4–5 BTC/yr
 * from hosted mining across 300 machines. Profit after expenses is projected
 * at approximately 10–15 BTC/year.
 *
 * Permitted only inside investor content, always under an explicit label and
 * never without the assumptions below.
 */
export const projections: Fact[] = [
  {
    value: "~20",
    unit: "BTC/yr",
    label: "Projected total production",
    status: "projection",
    note: "First year following completion of the new facilities and client onboarding.",
  },
  {
    value: "10–15",
    unit: "BTC/yr",
    label: "From company-owned machines",
    status: "projection",
    note: "Across the 200 company-owned machines in the plan.",
  },
  {
    value: "4–5",
    unit: "BTC/yr",
    label: "From hosted mining",
    status: "projection",
    note: "Across the 300 hosted machines in the plan.",
  },
  {
    value: "10–15",
    unit: "BTC/yr",
    label: "Projected profit after expenses",
    status: "projection",
    note: "As projected by ZEUS management.",
  },
];

/** The assumptions the projections rest on. Shown alongside, never omitted. */
export const projectionAssumptions = [
  "The Series A raise completes and the new facilities become operational.",
  "200 company-owned machines are purchased and brought online.",
  "100 hosting clients are onboarded, representing 300 further machines.",
  "Figures describe the first year following completion and onboarding, not the present.",
];

/** Later financing ambitions. Not commitments, not raised capital. */
export const financingAmbitions: Fact[] = [
  { value: "$10–20", unit: "M", label: "Series B ambition", status: "target" },
  { value: "$100", unit: "M", label: "Series C ambition", status: "target" },
];
