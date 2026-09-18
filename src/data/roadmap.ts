import type { FactStatus } from "./facts";

export interface Milestone {
  id: string;
  phase: string;
  title: string;
  status: FactStatus;
  figure?: string;
  figureUnit?: string;
  body: string;
  points?: string[];
  /** Visual weight: realised milestones are solid, ambitions are dimmed. */
  weight: "realised" | "funded-target" | "ambition";
}

/**
 * The roadmap.
 *
 * SOURCE: the SSMDC deck of 17 September 2026, which replaced the earlier
 * eight-stage Bitcoin-expansion roadmap with a three-phase one.
 *
 * Exactly one milestone is operating. The `weight` field drives a visual
 * treatment — solid, outlined, then dashed and dimmed — but status is also
 * stated in words, so the distinction never depends on colour alone.
 */
export const roadmap: Milestone[] = [
  {
    id: "now",
    phase: "Now",
    title: "Vietnam prototype",
    status: "zeus-reported",
    figure: "100",
    figureUnit: "kW",
    body: "An operational ASIC site in Vietnam running a live Bitcoin workload, the foundation the SSMDC design is drawn from.",
    points: [
      "100 kW ASIC site operating",
      "DC-DC and solar-plus-battery lessons captured",
      "Team and process in place",
    ],
    weight: "realised",
  },
  {
    id: "next",
    phase: "Next",
    title: "SSMDC v1 nodes",
    status: "target",
    figure: "400",
    figureUnit: "m² class",
    body: "Standardised modules deployed in the Bà Rịa region and additional southern sites, running first AI workloads alongside mining.",
    points: [
      "Standardised 400 m² class modules",
      "Bà Rịa and additional southern sites",
      "First AI workloads alongside mining",
    ],
    weight: "funded-target",
  },
  {
    id: "scale",
    phase: "Scale",
    title: "Network expansion",
    status: "target",
    body: "A multi-node portfolio held against a combined real-estate and compute balance sheet, with an Australian company vehicle.",
    points: [
      "Australia company vehicle",
      "Multi-node portfolio",
      "Real-estate plus compute balance sheet",
    ],
    weight: "ambition",
  },
];

/**
 * Status note carried onto the roadmap page, so the distinction between the
 * operating prototype and everything after it is stated rather than implied.
 */
export const roadmapDisclosure =
  "One stage is operating. Everything after it is contingent on the raise completing, and is described by ZEUS as a plan rather than a commitment. No node beyond the Vietnam prototype has been built, and no timeline is guaranteed.";
