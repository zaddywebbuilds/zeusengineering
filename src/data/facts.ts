/**
 * Factual classification system for all ZEUS Engineering figures.
 *
 * Every number that appears anywhere on this website must carry a status.
 * This is the single mechanism that prevents a fundraising target from being
 * rendered as a current achievement, or a management projection from being
 * rendered as realised performance.
 *
 * Do not hardcode a Zeus figure in a component. Import it from here.
 */

export type FactStatus =
  | "current" // Exists and operates now, state directly
  | "zeus-reported" // Zeus reports it; not independently verified, attribute
  | "target" // Intended future development, always say planned/target
  | "projection" // Financial/operational forecast, identify as projection
  | "concept"; // Product/engineering concept, not a deployed fleet

export const STATUS_LABEL: Record<FactStatus, string> = {
  current: "Current",
  "zeus-reported": "Zeus reported",
  target: "Target",
  projection: "Management projection",
  concept: "Concept",
};

/** Longer disclosure used beneath figure groups. */
export const STATUS_DISCLOSURE: Record<FactStatus, string> = {
  current: "Operating figures as reported by ZEUS Engineering.",
  "zeus-reported":
    "Reported by ZEUS Engineering. Not independently verified.",
  target:
    "A stated objective. Not a current capability and not a commitment.",
  projection:
    "A management forecast based on stated assumptions. Not a guarantee, a forecast of returns, or a record of past performance.",
  concept:
    "A product concept or engineering direction. Not a record of deployed units.",
};

export interface Fact {
  /** The headline figure, e.g. "100" */
  value: string;
  /** The unit rendered alongside, e.g. "kW" */
  unit?: string;
  /** What the figure describes, e.g. "Current facility" */
  label: string;
  status: FactStatus;
  /** Optional sentence of context shown near the figure. */
  note?: string;
}
