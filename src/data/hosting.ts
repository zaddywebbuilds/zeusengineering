import type { Fact } from "./facts";

/**
 * Hosted mining.
 *
 * WHAT THE DECK ACTUALLY SUPPORTS:
 *   - ZEUS has opened hosted-mining services.
 *   - Clients pay setup and service fees for ZEUS to run and maintain mining
 *     equipment on their behalf.
 *   - Service fee: 10% of earnings.
 *   - The expansion plan targets 100 hosting clients / 300 machines.
 *
 * WHAT IT DOES NOT SUPPORT:
 *   The "$10,000 for three Bitmain ASICs on a two-year arrangement" package
 *   from the earlier project brief appears nowhere in the deck or on the live
 *   site. It is not reproduced here. The page is built to sell the operation
 *   rather than a price, and a price block drops in the moment ZEUS confirms
 *   one. See AUDIT.md.
 */
export const hostingFacts: Fact[] = [
  {
    value: "10",
    unit: "%",
    label: "Service fee on earnings",
    status: "zeus-reported",
    note: "The share of earnings paid to ZEUS for running and maintaining the equipment.",
  },
  {
    value: "300",
    label: "Hosted machines — target",
    status: "target",
    note: "Across a target of 100 hosting clients, contingent on the Series A expansion.",
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
