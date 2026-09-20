/**
 * Shared copy: metadata, navigation, footer, the status vocabulary, and the
 * strings that appear on more than one page.
 *
 * English is the SOURCE OF TRUTH FOR SHAPE. `vi/core.ts` is typed against
 * this object, so renaming a key here fails the build until the Vietnamese
 * side is updated. That check is the only thing preventing English from
 * silently leaking into Vietnamese pages on a site this size.
 */
export interface NavEntry {
  label: string;
  blurb?: string;
}

type StatusKey =
  | "current"
  | "zeus-reported"
  | "target"
  | "projection"
  | "concept";

/**
 * Declared explicitly rather than inferred with `as const`, for one reason:
 * `nav.items` has to be indexable by the `id` strings that live in
 * `data/navigation.ts`. Inference would narrow it to a union of the 30 keys
 * present today and reject `d.nav.items[item.id]`, which is exactly the
 * lookup the header and footer are built on.
 */
export interface CoreDictionary {
  meta: { siteTitle: string; siteDescription: string };
  common: Record<
    | "skipToContent"
    | "conceptVisualisation"
    | "breadcrumb"
    | "home"
    | "contact"
    | "readTheFullVision"
    | "exploreProject"
    | "continueReading"
    | "important"
    | "riskDisclosure"
    | "howToRead"
    | "source"
    | "andMoreLines",
    string
  >;
  status: {
    label: Record<StatusKey, string>;
    disclosure: Record<StatusKey, string>;
  };
  langSwitcher: { label: string; switchTo: string; ariaSwitchTo: string };
  nav: {
    menu: string;
    close: string;
    openMenu: string;
    items: Record<string, NavEntry>;
    contactPaths: Record<"build" | "host" | "invest", NavEntry>;
  };
  footer: { heading: string; privacy: string; registration: string };
}

export const core: CoreDictionary = {
  meta: {
    siteTitle: "ZEUS Engineering, Infrastructure for high-density compute",
    siteDescription:
      "Modular infrastructure for Bitcoin, AI and high-density computing, engineered in Vietnam.",
  },

  common: {
    skipToContent: "Skip to content",
    conceptVisualisation: "Concept visualisation",
    breadcrumb: "Breadcrumb",
    home: "Home",
    contact: "Contact",
    readTheFullVision: "Read the full vision",
    exploreProject: "Explore project",
    continueReading: "Continue",
    important: "Important",
    riskDisclosure: "Risk disclosure",
    howToRead: "How to read this",
    source: "Source",
    andMoreLines: "+ 2 further lines",
  },

  /** The status vocabulary. The word carries the meaning, never the colour. */
  status: {
    label: {
      current: "Current",
      "zeus-reported": "Zeus reported",
      target: "Target",
      projection: "Management projection",
      concept: "Concept",
    },
    disclosure: {
      current: "Operating figures as reported by ZEUS Engineering.",
      "zeus-reported":
        "Reported by ZEUS Engineering. Not independently verified.",
      target:
        "A stated objective. Not a current capability and not a commitment.",
      projection:
        "A management forecast based on stated assumptions. Not a guarantee, a forecast of returns, or a record of past performance.",
      concept:
        "A product concept or engineering direction. Not a record of deployed units.",
    },
  },

  langSwitcher: {
    label: "Language",
    /** Shown on the switcher itself, always in the target language. */
    switchTo: "Tiếng Việt",
    ariaSwitchTo: "Chuyển sang tiếng Việt",
  },

  nav: {
    menu: "Menu",
    close: "Close",
    openMenu: "Open menu",
    items: {
      solutions: { label: "Solutions" },
      technology: { label: "Technology" },
      projects: { label: "Projects" },
      investors: { label: "Investors" },
      company: { label: "Company" },
      insights: { label: "Insights" },

      modularDataCenters: {
        label: "Modular Data Centers",
        blurb: "Compute, containerised.",
      },
      aiInfrastructure: {
        label: "AI Infrastructure",
        blurb: "Infrastructure for intelligence.",
      },
      bitcoinInfrastructure: {
        label: "Bitcoin Infrastructure",
        blurb: "Built through continuous compute.",
      },
      hostedMining: {
        label: "Hosted Mining",
        blurb: "Your hardware. Our infrastructure.",
      },
      energyIntegration: {
        label: "Energy Integration",
        blurb: "Compute starts with power.",
      },

      technologyOverview: {
        label: "Overview",
        blurb: "Four pillars, one system.",
      },
      power: { label: "Power Architecture", blurb: "Grid and solar into compute." },
      cooling: { label: "Cooling & Thermal", blurb: "Heat is the constraint." },
      compute: { label: "Compute", blurb: "Density, uptime, efficiency." },
      monitoring: { label: "Monitoring & Automation", blurb: "Remote operation." },

      allProjects: { label: "All Projects", blurb: "" },
      vungTau: { label: "Vung Tau / Ba Ria", blurb: "Project 001." },

      investorsOverview: { label: "Overview", blurb: "" },
      theAsk: { label: "The ask", blurb: "$2.69M target." },
      roadmap: { label: "Roadmap", blurb: "" },
      economics: { label: "Node economics", blurb: "" },
      whyVietnam: { label: "Why Vietnam", blurb: "" },
      brief: { label: "Investor brief", blurb: "One page, printable." },

      about: { label: "About", blurb: "" },
      vision: { label: "Vision", blurb: "Where this goes." },
      leadership: { label: "Leadership", blurb: "" },
      careers: { label: "Careers", blurb: "" },
      sources: { label: "Sources", blurb: "Every figure, audited." },
    },
    contactPaths: {
      build: {
        label: "Build with Zeus",
        blurb: "Infrastructure and engineering enquiries.",
      },
      host: {
        label: "Host with Zeus",
        blurb: "Hosted mining enquiries.",
      },
      invest: {
        label: "Invest in Zeus",
        blurb: "Investor enquiries.",
      },
    },
  },

  footer: {
    heading: "Let's build\nwhat computes next.",
    privacy: "Privacy",
    registration: "Business registration",
  },
};
