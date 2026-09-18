/**
 * Verified company information.
 *
 * SOURCE: zeus-engineering.com (live site, read 2026-09-18) unless marked otherwise.
 * Nothing in this file may be invented. If a field is unknown, leave it out —
 * the UI is built to degrade gracefully around absence.
 */

export const company = {
  name: "ZEUS Engineering",
  legalName: "Zeus Engineering Joint Stock Company",
  shortName: "ZEUS",
  /** Vietnamese business registration number. Source: live site footer. */
  taxId: "0317377894",
  founded: 2022,
  country: "Vietnam",
  region: "Southern Vietnam",
  email: "inquiries@zeus-engineering.com",
  url: "https://zeus-engineering.com",
  linkedin: "https://www.linkedin.com/company/zeus-engineering-vn",
  /**
   * Source: live site <title>. These are the capabilities Zeus currently
   * presents itself as offering.
   */
  disciplines: [
    "Consulting",
    "ASIC Sales",
    "AI",
    "Data Centers",
    "Bitcoin",
  ],
  /** Source: live site, "About Zeus Engineering" — verbatim. */
  descriptor:
    "a private, agile engineering company based in Southern Vietnam, specialising in modular datacenter infrastructure, Bitcoin mining, artificial intelligence (AI), renewable energy integration, and power optimisation technologies",
  /** Source: live site, "Our Mission" — verbatim, quoted on site as a quotation. */
  missionQuote:
    "Leave every system safer, more efficient, more reliable, and more valuable than when we arrived.",
  missionCoda: "When Zeus leaves, the improvement stays.",
} as const;

/**
 * Operating location.
 *
 * SOURCE: the deck says "the Vung Tau / Ba Ria region". Neither the deck nor
 * the live site names Long Hai — that name appears only in the supplied
 * concept renders' burned-in captions and in the earlier project brief. The
 * verified region is used here; see AUDIT.md.
 */
export const site = {
  name: "Vung Tau / Ba Ria",
  province: "Ba Ria-Vung Tau",
  country: "Vietnam",
  projectId: "PROJECT / 001",
  slug: "vung-tau",
} as const;
