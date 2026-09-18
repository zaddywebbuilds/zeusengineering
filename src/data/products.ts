import type { FactStatus } from "./facts";

export interface ProductSpec {
  group: string;
  items: string[];
}

export interface Product {
  id: string;
  name: string;
  fullName: string;
  status: FactStatus;
  statusNote: string;
  tagline: string;
  /** Verbatim or near-verbatim from Zeus published material. */
  description: string[];
  specs?: ProductSpec[];
  features?: { title: string; body: string }[];
  image: string;
  imageAlt: string;
}

/**
 * SSMDC — Small Solar Modular Data Centre.
 * SOURCE: zeus-engineering.com "Our Projects" (verbatim copy, spelling normalised).
 * The accompanying image is Zeus's own engineering drawing.
 */
export const ssmdc: Product = {
  id: "ssmdc",
  name: "SSMDC",
  fullName: "Small Solar Modular Data Centre",
  status: "concept",
  statusNote:
    "A ZEUS product direction. ZEUS has not published a count of deployed units.",
  tagline: "Decentralised AI compute. Deployed in months, not years.",
  description: [
    "The Small Solar Modular Data Centre is designed for rapid deployment and operation using available grid power between 100–200 kW, with up to 100 kW solar supplement.",
    "Suitable for the harshest of environments, with full automation and remote monitoring for Bitcoin mining and/or AI compute.",
    "The SSMDC can assist in load balancing of the grid, using excess power when available, and idling when the grid is under peak loads.",
  ],
  specs: [
    {
      // Current node specification — SSMDC deck, 17 September 2026.
      group: "Node design (current)",
      items: [
        "400 m² class site",
        "80–120 kWp solar",
        "300–500 kWh usable battery (3–5 h class)",
        "50–75 kW continuous IT load",
        "End-to-end DC-DC, 8–15% ongoing saving",
      ],
    },
    {
      // Earlier grid-led description, still published on zeus-engineering.com.
      group: "Grid-connected variant",
      items: [
        "100–200 kW available grid power",
        "Up to 100 kW solar supplement",
        "Grid load balancing, draws excess, idles at peak",
      ],
    },
    {
      group: "Workload",
      items: ["AI training and inference", "Bitcoin mining", "Mixed operation"],
    },
    {
      group: "Operation",
      items: [
        "Full automation",
        "Remote monitoring",
        "Designed for harsh environments",
      ],
    },
  ],
  image: "/images/products/ssmdc-drawing.webp",
  imageAlt:
    "ZEUS engineering drawing of the SSMDC: a modular container unit with fold-out solar panel arrays",
};

/**
 * Ai-1 — All-in-One solar AI & Bitcoin mining unit.
 * SOURCE: zeus-engineering.com "Our Projects" + Zeus's published Ai1 specification sheet.
 * Component specifications below are transcribed from that sheet. Nothing added.
 */
export const ai1: Product = {
  id: "ai-1",
  name: "Ai-1",
  fullName: "All-in-One Solar AI & Bitcoin Mining Unit",
  status: "concept",
  statusNote:
    "A long-running ZEUS development project. Not presented by ZEUS as a deployed commercial fleet.",
  tagline: "One panel. Off-grid compute.",
  description: [
    "The All-in-One has been a project of ours for years, long before the required hardware existed.",
    "A single unit the size of a standard 2×1 m solar panel (plus auxiliary panel) that can provide both Bitcoin mining and AI compute, day and night, using only solar power. No grid connection required.",
    "The unit is intended to be deployed in the thousands and interconnected as one large decentralised computing network.",
  ],
  specs: [
    {
      group: "Standard 2×1 m solar panel",
      items: [
        "High-efficiency monocrystalline cells",
        "Maximum power output",
        "Durable aluminium frame",
        "Weatherproof and built to last",
      ],
    },
    {
      group: "Battery bank",
      items: [
        "LiFePO4 battery cells",
        "48 V system",
        "Long cycle life",
        "High safety and stability",
      ],
    },
    {
      group: "Main controller board",
      items: [
        "System management unit",
        "Power management",
        "Monitoring and telemetry",
        "Remote access",
      ],
    },
    {
      group: "Bitcoin mining hashboard",
      items: [
        "Dedicated ASIC hashboard",
        "High hashrate performance",
        "Energy optimised",
      ],
    },
    {
      group: "AI compute GPU",
      items: [
        "NVIDIA high-performance GPU",
        "AI inference and training",
        "24/7 AI workloads",
      ],
    },
  ],
  features: [
    {
      title: "100% solar powered",
      body: "Runs 24/7 off-grid. Clean, silent, sustainable.",
    },
    {
      title: "Battery stored",
      body: "Integrated LiFePO4 battery stores energy for night and cloudy conditions.",
    },
    {
      title: "AI compute ready",
      body: "High-performance GPU for AI workloads anytime, anywhere.",
    },
    {
      title: "Bitcoin mining",
      body: "Dedicated ASIC hashboard delivers maximum BTC mining efficiency.",
    },
    {
      title: "Rugged and durable",
      body: "Built into a solar panel. Weatherproof, sealed and built for any environment.",
    },
    {
      title: "Smart and connected",
      body: "Remote monitoring, telemetry and control from anywhere.",
    },
  ],
  image: "/images/products/ai-1-spec.webp",
  imageAlt:
    "ZEUS Ai-1 specification drawing: an exploded view of a 2×1 metre solar panel with an integrated battery bank, controller board, ASIC hashboard and AI compute GPU",
};

/**
 * S3XY Ai.
 * SOURCE: zeus-engineering.com "Our Projects" (verbatim copy, spelling normalised).
 * This is an internal business tool, not infrastructure. Kept deliberately
 * small and away from the investor and infrastructure narratives.
 */
export const s3xyAi: Product = {
  id: "s3xy-ai",
  name: "S3XY Ai",
  fullName: "S3XY Ai, in-house business and engineering AI",
  status: "concept",
  statusNote: "An internal ZEUS tool.",
  tagline: "Built in house.",
  description: [
    "S3XY Ai is our own custom-built, private, in-house AI, designed and trained to provide all forms of business and engineering tasks.",
    "It covers accounting, legal, reception, strategic planning, engineering research and design, and more.",
    "No more burning tokens and cash on ever-increasing subscriptions.",
  ],
  specs: [
    {
      group: "Functions",
      items: [
        "Accounting",
        "Legal",
        "Reception",
        "Strategic planning",
        "Engineering research and design",
      ],
    },
  ],
  image: "/images/products/s3xy-ai.webp",
  imageAlt: "ZEUS S3XY Ai brand artwork",
};

export const products = [ssmdc, ai1, s3xyAi];
