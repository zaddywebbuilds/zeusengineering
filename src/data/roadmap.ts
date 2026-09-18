import type { FactStatus } from "./facts";

export interface Milestone {
  id: string;
  phase: string;
  title: string;
  status: FactStatus;
  /** Rendered as the milestone's headline figure where one exists. */
  figure?: string;
  figureUnit?: string;
  body: string;
  /** Visual weight: realised milestones are solid, ambitions are dimmed. */
  weight: "realised" | "funded-target" | "ambition";
}

/**
 * The expansion roadmap.
 *
 * Exactly one milestone is `current`. Everything below it is a target or an
 * ambition, and the `weight` field drives a visual treatment that makes that
 * distinction impossible to miss — solid, outlined, then dashed and dimmed.
 * Status is also stated in text, never by colour alone.
 */
export const roadmap: Milestone[] = [
  {
    id: "now",
    phase: "Now",
    title: "Vung Tau / Ba Ria infrastructure",
    status: "zeus-reported",
    figure: "100",
    figureUnit: "kW",
    body: "A 300 m² site with 100 kW capacity, 20 kW peak solar and 1+ PH peak hash power, as reported by ZEUS.",
    weight: "realised",
  },
  {
    id: "series-a",
    phase: "Series A",
    title: "Facility expansion",
    status: "target",
    figure: "1–2",
    figureUnit: "MW",
    body: "A $1–2M raise funding an industrial site of up to 2,000 m² and a planned scaling toward 1 MW, then 2 MW.",
    weight: "funded-target",
  },
  {
    id: "scale",
    phase: "Scale",
    title: "Machine and solar build-out",
    status: "target",
    figure: "500",
    figureUnit: "machines",
    body: "200 company-owned and 300 hosted machines, with up to 500 kW peak solar.",
    weight: "funded-target",
  },
  {
    id: "productize",
    phase: "Productise",
    title: "Containerised prototypes",
    status: "target",
    body: "Once the expansion is operational, ZEUS intends to begin prototyping and testing its own containerised models, designed for compatibility with Bitcoin mining, AI and quantum-computing applications.",
    weight: "funded-target",
  },
  {
    id: "series-b",
    phase: "Series B ambition",
    title: "Expansion capital",
    status: "target",
    figure: "$10–20",
    figureUnit: "M",
    body: "A stated later-stage ambition. No commitment or term sheet is implied.",
    weight: "ambition",
  },
  {
    id: "advanced-compute",
    phase: "Advanced compute",
    title: "Bitcoin, AI and quantum",
    status: "target",
    body: "A stated ambition to participate in broader research and development across Bitcoin, AI and quantum computing.",
    weight: "ambition",
  },
  {
    id: "series-c",
    phase: "Series C ambition",
    title: "Scale capital",
    status: "target",
    figure: "$100",
    figureUnit: "M",
    body: "A stated long-range ambition described in Zeus investor material.",
    weight: "ambition",
  },
  {
    id: "international",
    phase: "International",
    title: "Deployment beyond Vietnam",
    status: "target",
    body: "The stated long-term vision: to become a world-leading provider of modular, transportable, containerised data centres built in Vietnam and deployed worldwide, including as a trusted government and international provider.",
    weight: "ambition",
  },
  {
    id: "public",
    phase: "Long term",
    title: "Public company ambition",
    status: "target",
    body: "Beyond those stages, ZEUS discusses a longer-term ambition to take the company public and pursue deeper research and development in emerging compute technologies.",
    weight: "ambition",
  },
];

/**
 * The deck's own status note on everything below Series A, reproduced on the
 * roadmap page so the distinction is stated rather than implied.
 */
export const roadmapDisclosure =
  "Series B, Series C, public-company and advanced-compute statements are long-term ambitions described by ZEUS. They are not completed financing, committed capital or existing deployments.";
