import type { Fact } from "./facts";

/**
 * Hosted mining.
 *
 * VERIFIED: the $10,000 package is real. ZEUS published an official offer
 * graphic (wp-content/uploads/2025/09/10K-Hosted-Mining-Post.webp, Sept 2025)
 * headed "$10,000 USD Hosted Mining Package". It was restored here after being
 * removed as unsourced — the pitch deck alone did not mention it.
 *
 * NOT REPRODUCED: that same graphic advertises "EXTRA $10,000 USD per year"
 * and "ONLY 8 SLOTS LEFT". The first is a ~100%-per-annum return claim
 * published with no stated assumptions; the second is a scarcity device. A
 * return figure we cannot show the workings for does not belong on an
 * investor-facing site, so the page sells the operation and quotes the fee.
 * If ZEUS supplies the assumptions behind the figure, it can be added as a
 * clearly-labelled projection. See AUDIT.md.
 */
export const hostingPackagePrice: Fact = {
  value: "$10,000",
  label: "Hosted mining package",
  status: "zeus-reported",
  note: "The package price ZEUS advertises for getting started with hosted Bitcoin mining.",
};

export const hostingFacts: Fact[] = [
  {
    value: "$10,000",
    label: "Package price",
    status: "zeus-reported",
    note: "As advertised by ZEUS. Scope confirmed on enquiry.",
  },
  {
    value: "10",
    unit: "%",
    label: "Service fee on earnings",
    status: "zeus-reported",
    note: "The share of earnings paid to ZEUS for running and maintaining the equipment.",
  },
];

/** What ZEUS states it provides. Nothing added. */
export const hostingIncluded = [
  "Equipment operation",
  "Maintenance",
  "Power infrastructure",
  "Cooling",
  "Site security and access",
];

export const hostingProcess = [
  {
    step: "01",
    title: "Enquire",
    body: "Scope the deployment: how many machines, what hardware, and the service arrangement.",
  },
  {
    step: "02",
    title: "Deploy",
    body: "Equipment is received, racked, powered and commissioned into the facility.",
  },
  {
    step: "03",
    title: "Operate",
    body: "Hardware runs on ZEUS power and cooling infrastructure, managed by the ZEUS team.",
  },
  {
    step: "04",
    title: "Monitor",
    body: "Equipment status and performance are tracked through the operations layer.",
  },
  {
    step: "05",
    title: "Maintain",
    body: "Maintenance is handled on site, using ZEUS's own tooling, test and repair equipment.",
  },
  {
    step: "06",
    title: "Settle",
    body: "Earnings are settled with the client, net of the 10% service fee.",
  },
];

/**
 * Risk disclosure. Must appear wherever hosting economics are discussed.
 * Deliberately plain rather than legalistic — and not a substitute for
 * review by a qualified adviser before publication.
 */
export const hostingDisclosure =
  "Mining returns depend on the Bitcoin price, network difficulty, energy cost and machine performance, all of which vary and none of which ZEUS controls. ZEUS does not guarantee profitability, payout amounts, uptime or return on investment. Any estimate ZEUS publishes is a projection based on stated assumptions, not a forecast of your result.";
