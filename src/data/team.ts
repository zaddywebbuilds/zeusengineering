/**
 * Leadership.
 *
 * SOURCE: the pitch deck, verbatim in substance. Nothing is embellished —
 * where the deck gives one line, this gives one line. No invented
 * qualifications, employers, dates or photographs.
 *
 * LinkedIn URLs are omitted except where verified. Tatts Nguyen's profile was
 * confirmed via search; the others are not linked until confirmed.
 */
export interface Person {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
}

export const leadership: Person[] = [
  {
    name: "Tatts Nguyen",
    role: "Founder & CEO",
    bio: "Vietnamese entrepreneur with experience in multinational corporate environments, particularly insurance companies.",
    linkedin: "https://www.linkedin.com/in/tatts6969/",
  },
  {
    name: "Chris Gainer",
    role: "Co-Founder & CTO",
    bio: "Australian private investor and Vietnam resident. Electrical and electronics engineer and entrepreneur, with approximately 20 years of experience across heavy-industrial engineering environments and military operations and leadership.",
  },
  {
    name: "Quynh Nguyen",
    role: "Head of Accounting & Legal",
    bio: "Brings strong corporate-governance knowledge to the company.",
  },
  {
    name: "Valentine Cheval",
    role: "Chief Brand & Marketing Officer",
    bio: "Background with Bitcoin.com and BitMEX.",
  },
];

/**
 * Company history.
 * Deck: the team began working with Bitcoin mining eight years before the
 * pitch, and ZEUS Engineering was officially registered four years before it.
 * The live site gives a founding year of 2022. Relative dates are kept
 * relative rather than converted into absolute years we cannot verify.
 */
export const companyHistory = [
  {
    label: "Before the company",
    body: "The team states it began working with Bitcoin mining around eight years before the pitch, through more than one market cycle, including bear markets.",
  },
  {
    label: "Registration",
    body: "ZEUS Engineering was officially registered in Vietnam as a privately held, multiple-member limited-liability company with shares, under MST/CRN 0317377894.",
  },
  {
    label: "Self-funded",
    body: "ZEUS states it is financially self-sustaining, and that pre-seed and seed funding were completed using internally generated funds reinvested from its Bitcoin mining operations.",
  },
  {
    label: "Hosted services",
    body: "The company opened hosted-mining services, expanding its potential client base internationally while increasing assets under management.",
  },
];

/** Why ZEUS — the deck's own list, condensed but not embellished. */
export const whyZeus = [
  "An established company at the time of the pitch, describing itself as audited and prepared for operational scale.",
  "Locally owned, with a foreign co-founder.",
  "Around eight years of Bitcoin mining experience claimed by the team.",
  "Strong understanding of the local operating environment and government policy.",
  "Import/export licence, with established logistics and payment rails.",
  "An engineering chief with approximately 20 years of experience.",
  "Experience operating through difficult market cycles and bear markets.",
  "Existing tooling, test and repair equipment, and the technical skills to use them.",
  "A small, highly skilled team experienced in allocating limited capital efficiently.",
  "Operational mistakes and lessons that ZEUS says have taught it the pitfalls, risks and mitigations.",
];
