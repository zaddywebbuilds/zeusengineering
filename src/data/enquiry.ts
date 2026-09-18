import type { ContactIntent } from "./navigation";

/**
 * The three conversion funnels.
 *
 * Build, Host and Invest are different conversations with different
 * qualifying questions, so they get different forms rather than one generic
 * contact box pointed at three labels.
 *
 * Only name, email and message are ever required. Every qualifying field is
 * optional: an investor who will not state a ticket size before a call should
 * still be able to send the enquiry.
 */
export type FieldType = "text" | "email" | "select" | "textarea" | "checkbox";

export interface Field {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  /** Renders full width rather than in the two-column grid. */
  wide?: boolean;
  help?: string;
}

const NAME: Field = { name: "name", label: "Name", type: "text", required: true };
const COUNTRY: Field = { name: "country", label: "Country", type: "text" };
const MESSAGE: Field = {
  name: "message",
  label: "Message",
  type: "textarea",
  required: true,
  wide: true,
  placeholder: "What are you trying to do?",
};

const TIMELINES = [
  "Exploring options",
  "Within 3 months",
  "3 to 6 months",
  "6 to 12 months",
  "Beyond 12 months",
];

export const enquiryForms: Record<
  ContactIntent,
  { heading: string; blurb: string; submit: string; fields: Field[] }
> = {
  build: {
    heading: "Build with ZEUS",
    blurb:
      "Infrastructure and engineering enquiries: modular data centres, AI infrastructure, energy integration and consulting.",
    submit: "Send enquiry",
    fields: [
      NAME,
      { name: "company", label: "Company", type: "text" },
      {
        name: "email",
        label: "Professional email",
        type: "email",
        required: true,
      },
      COUNTRY,
      {
        name: "projectType",
        label: "Project type",
        type: "select",
        options: [
          "Modular infrastructure",
          "AI infrastructure",
          "Bitcoin infrastructure",
          "Energy integration",
          "Engineering consultation",
          "Other",
        ],
      },
      {
        name: "power",
        label: "Approximate power requirement",
        type: "text",
        placeholder: "e.g. 100 kW, 1 MW, not sure yet",
      },
      {
        name: "workload",
        label: "Compute or workload type",
        type: "text",
        placeholder: "e.g. AI inference, training, ASIC",
      },
      {
        name: "timeline",
        label: "Target deployment timeline",
        type: "select",
        options: TIMELINES,
      },
      MESSAGE,
    ],
  },

  host: {
    heading: "Host with ZEUS",
    blurb:
      "Hosted mining enquiries. ZEUS provides the site, power, cooling, monitoring and maintenance; you own the hardware.",
    submit: "Discuss hosting",
    fields: [
      NAME,
      { name: "email", label: "Email", type: "email", required: true },
      COUNTRY,
      {
        name: "ownsHardware",
        label: "Do you already own ASIC hardware?",
        type: "select",
        options: ["Yes", "No", "Partly"],
      },
      {
        name: "machines",
        label: "Approximate machine count",
        type: "select",
        options: ["1 to 10", "11 to 50", "51 to 200", "200+", "Not sure yet"],
      },
      {
        name: "packageInterest",
        label: "Interested in the ZEUS hardware package?",
        type: "select",
        options: ["Yes", "No", "Tell me more"],
        help: "ZEUS advertises a $10,000 entry package.",
      },
      {
        name: "timeline",
        label: "Target deployment timeline",
        type: "select",
        options: TIMELINES,
      },
      MESSAGE,
    ],
  },

  invest: {
    heading: "Invest in ZEUS",
    blurb:
      "Investor enquiries relating to the current raise for SSMDC nodes in southern Vietnam.",
    submit: "Investor enquiry",
    fields: [
      NAME,
      { name: "organisation", label: "Organisation or fund", type: "text" },
      {
        name: "email",
        label: "Professional email",
        type: "email",
        required: true,
      },
      COUNTRY,
      {
        name: "investorType",
        label: "Investor type",
        type: "select",
        options: [
          "Angel",
          "Family office",
          "Venture capital",
          "Private equity",
          "Strategic or corporate",
          "Other",
        ],
      },
      {
        name: "ticket",
        label: "Indicative range",
        type: "select",
        options: [
          "Prefer not to say",
          "Under $100k",
          "$100k to $500k",
          "$500k to $1M",
          "$1M+",
        ],
        help: "Optional. Leave blank if you would rather discuss it first.",
      },
      MESSAGE,
      {
        name: "requestMaterials",
        label: "Request investor materials",
        type: "checkbox",
        wide: true,
        help: "We will send what ZEUS has cleared for external distribution.",
      },
    ],
  },
};
