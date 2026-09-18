import type { Fact } from "./facts";

/**
 * ============================================================
 * SSMDC — the current ZEUS proposition
 * ============================================================
 *
 * SOURCE: "SSMDC — Small Solar Modular Datacenter", ZEUS Engineering JSC,
 * dated 17 September 2026. Found in ZEUS's own WordPress media library.
 *
 * The document is marked "Confidential | 2026". It is therefore NEVER linked,
 * embedded or offered for download anywhere on this site. Its facts inform the
 * copy; the file itself stays private. See AUDIT.md.
 *
 * This deck supersedes the earlier reconstructed pitch page in several ways —
 * the ask, the positioning and the SSMDC specification all changed. Where the
 * two conflict, this file wins.
 */

/** The problem the SSMDC is positioned against. */
export const hyperscaleProblems = [
  {
    index: "01",
    title: "Years of delay",
    body: "Paperwork, permits, grid interconnection and commissioning routinely stretch 3–7 years before a hyperscale campus delivers a single FLOP.",
  },
  {
    index: "02",
    title: "Concentrated risk",
    body: "A single-site failure in power, cooling, network or regulation takes down massive capacity. Uptime is tied to one location.",
  },
  {
    index: "03",
    title: "Capital and site lock-in",
    body: "Hundreds of millions locked into one geography. Land, power contracts and local politics become single points of failure.",
  },
];

/** The four design pillars of the SSMDC. */
export const ssmdcPillars = [
  {
    index: "01",
    title: "Modular",
    body: "Factory-built or rapid-deploy units. Scale by adding nodes rather than enlarging a site.",
    accent: "energy" as const,
  },
  {
    index: "02",
    title: "Solar + battery",
    body: "On-site generation and storage. Lower energy cost and reduced grid dependency.",
    accent: "energy" as const,
  },
  {
    index: "03",
    title: "DC-DC architecture",
    body: "Eliminate inverter and AC-DC conversion losses. 8–15% ongoing power savings.",
    accent: "compute" as const,
  },
  {
    index: "04",
    title: "Real-estate offset",
    body: "Acquire land as a second asset class that stabilises the compute business.",
    accent: "compute" as const,
  },
];

/**
 * Hyperscale vs SSMDC.
 *
 * This is ZEUS's own comparison and is presented as such — it is an argument
 * the company makes, not an independent benchmark.
 */
export const hyperscaleComparison = [
  { capability: "Deployment speed", hyperscale: "3–7+ years", ssmdc: "Months" },
  {
    capability: "Capital intensity (first capacity)",
    hyperscale: "Hundreds of millions",
    ssmdc: "Sub-$1M per node",
  },
  {
    capability: "Site / single-point risk",
    hyperscale: "High",
    ssmdc: "Low. Distributed nodes",
  },
  {
    capability: "Uptime model",
    hyperscale: "Tied to one location",
    ssmdc: "Network of nodes",
  },
  {
    capability: "On-site solar + battery",
    hyperscale: "Rare or limited",
    ssmdc: "Core design",
  },
  {
    capability: "DC-DC power efficiency",
    hyperscale: "Usually AC-heavy",
    ssmdc: "8–15% ongoing savings",
  },
  {
    capability: "Real-estate offset model",
    hyperscale: "Pure compute asset",
    ssmdc: "Land + compute dual asset",
  },
  { capability: "Time to first revenue", hyperscale: "Years", ssmdc: "Far shorter" },
  {
    capability: "Scalability approach",
    hyperscale: "Big-bang / multi-year",
    ssmdc: "Add nodes as needed",
  },
  {
    capability: "Existing live prototype",
    hyperscale: "Not applicable",
    ssmdc: "100 kW site operating",
  },
];

/**
 * Site economics for a 400 m² class node in the Bà Rịa region.
 * Every figure is a design range from the deck, not a measured result.
 */
export const nodeEconomics: Fact[] = [
  {
    value: "80–120",
    unit: "kWp",
    label: "Solar capacity",
    status: "target",
    note: "Realistic working range for a 400 m² class site.",
  },
  {
    value: "130–190",
    unit: "MWh",
    label: "Annual solar yield",
    status: "target",
    note: "Reflecting the strong southern Vietnamese solar resource.",
  },
  {
    value: "300–500",
    unit: "kWh",
    label: "Battery, usable",
    status: "target",
    note: "Three to five hour class storage.",
  },
  {
    value: "50–75",
    unit: "kW",
    label: "Continuous IT load",
    status: "target",
    note: "Average, with higher peaks supported by storage.",
  },
];

/** The DC-DC power path — ZEUS's stated technical differentiator. */
export const dcPowerPath = {
  chain: ["Solar", "Battery", "DC distribution", "DC-input compute"],
  saving: "8–15%",
  central: "10–12%",
  body: "Removes two major conversion stages: the inverter, and the AC-DC power supplies in each server. Real-world facility-level savings of 8–15%, with a practical 10–12% central case. Less heat, less copper, and simpler protection at modular scale.",
};

/**
 * Recommended first-node compute configuration.
 * A specification for a node not yet built — classified `target` throughout.
 */
export const nodeCompute: Fact[] = [
  {
    value: "24–32",
    label: "NVIDIA H100 / H200 GPUs",
    status: "target",
    note: "Fits inside the 50–75 kW continuous IT envelope.",
  },
  {
    value: "50–100+",
    unit: "PFLOPS",
    label: "Compute, FP8 sparse",
    status: "target",
  },
  {
    value: "1.9–4.5",
    unit: "TB",
    label: "HBM memory",
    status: "target",
    note: "H200 preferred for memory-heavy workloads.",
  },
  {
    value: "$0.9–1.4",
    unit: "M",
    label: "GPU hardware cost",
    status: "target",
  },
];

export const nodeComputeDetail = [
  {
    t: "Inference, 70B-class",
    b: "30–100k+ tokens per second.",
  },
  { t: "Form factor", b: "Three to four 8-GPU servers." },
  { t: "Upgrade path", b: "B200 when ready." },
  {
    t: "Workloads",
    b: "Production inference plus medium-scale training and fine-tuning.",
  },
];

/** The current ask. This replaces the earlier $1–2M Series A figure. */
export const theAsk: Fact = {
  value: "$2.69",
  unit: "M",
  label: "Current raise",
  status: "target",
  note: "An 18–24 month runway to multiple live nodes. This is a fundraising target, ZEUS has not stated that it is committed or closed.",
};

export const useOfFunds = [
  {
    item: "GPU & server hardware",
    amount: "$1.15M",
    purpose:
      "Two nodes: 24–32 H200-class GPUs plus servers, NVLink, networking and DC-input PSUs.",
  },
  {
    item: "Founders, staff & contractors",
    amount: "$620k",
    purpose:
      "Two founders plus engineers, installers, ops and legal over 18–24 months, taxes and social insurance included.",
  },
  {
    item: "Solar, battery, power & build-out",
    amount: "$380k",
    purpose:
      "80–120 kWp solar, 300–500 kWh battery, DC plant and containers or site works for two to three nodes.",
  },
  {
    item: "Land options, deposits & setup",
    amount: "$180k",
    purpose:
      "Site options in the Bà Rịa region, plus permits, corporate, import clearance and legal.",
  },
  {
    item: "R&D, taxes, contingency & working capital",
    amount: "$360k",
    purpose:
      "DC-DC R&D, import duty and VAT buffer, insurance, legal and runway contingency.",
  },
];

/** Traction, as stated in the deck. */
export const traction: Fact[] = [
  {
    value: "5",
    unit: "yrs",
    label: "Established in Vietnam",
    status: "zeus-reported",
  },
  {
    value: "100",
    unit: "kW",
    label: "Operating ASIC prototype",
    status: "zeus-reported",
    note: "The same site as the facility capacity reported elsewhere.",
  },
  {
    value: "BTC",
    label: "Live compute workload",
    status: "zeus-reported",
  },
  {
    value: "DC",
    label: "Power architecture validated",
    status: "zeus-reported",
  },
];

/** The two-asset business model. */
export const businessModel = [
  {
    title: "Compute",
    body: "AI training and inference capacity sold as nodes or as a managed service. High utilisation, recurring revenue, and an energy cost structurally lower via the solar and DC-DC path.",
    accent: "compute" as const,
  },
  {
    title: "Real estate",
    body: "Land and buildings acquired as a core asset. Appreciating or cash-flowing property offsets engineering and operations cost, the McDonald's model applied to modular compute.",
    accent: "energy" as const,
  },
];

/** Why ZEUS, per the current deck. */
export const whyZeusNow = [
  {
    title: "Power systems DNA",
    body: "Electrical and electronics engineering, plus a decade of dense GPU and ASIC cluster operations for mining.",
  },
  {
    title: "Military systems discipline",
    body: "Electrical engineering at UNSW Canberra and 20+ years of experience, with a Blackhawk and MRH-90 systems background: weight, power, thermal and reliability under constraint.",
  },
  {
    title: "Live prototype",
    body: "A 100 kW BTC ASIC site already running in Vietnam. Real data, real lessons.",
  },
  {
    title: "Vertical integration",
    body: "From solar and battery design through DC distribution to compute packaging and site acquisition.",
  },
];
