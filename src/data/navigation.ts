export interface NavChild {
  label: string;
  href: string;
  blurb?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const primaryNav: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "Modular Data Centers",
        href: "/solutions/modular-data-centers",
        blurb: "Compute, containerised.",
      },
      {
        label: "AI Infrastructure",
        href: "/solutions/ai-infrastructure",
        blurb: "Infrastructure for intelligence.",
      },
      {
        label: "Bitcoin Infrastructure",
        href: "/solutions/bitcoin-infrastructure",
        blurb: "Built through continuous compute.",
      },
      {
        label: "Hosted Mining",
        href: "/solutions/hosted-mining",
        blurb: "Your hardware. Our infrastructure.",
      },
      {
        label: "Energy Integration",
        href: "/solutions/energy-integration",
        blurb: "Compute starts with power.",
      },
    ],
  },
  {
    label: "Technology",
    href: "/technology",
    children: [
      { label: "Overview", href: "/technology", blurb: "Four pillars, one system." },
      { label: "Power Architecture", href: "/technology/power", blurb: "Grid and solar into compute." },
      { label: "Cooling & Thermal", href: "/technology/cooling", blurb: "Heat is the constraint." },
      { label: "Compute", href: "/technology/compute", blurb: "Density, uptime, efficiency." },
      { label: "Monitoring & Automation", href: "/technology/monitoring", blurb: "Remote operation." },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "All Projects", href: "/projects" },
      { label: "Vung Tau / Ba Ria", href: "/projects/vung-tau", blurb: "Project 001." },
    ],
  },
  {
    label: "Investors",
    href: "/investors",
    children: [
      { label: "Overview", href: "/investors" },
      { label: "The ask", href: "/investors/the-ask", blurb: "$2.69M target." },
      { label: "Roadmap", href: "/investors/roadmap" },
      { label: "Node economics", href: "/investors/economics" },
      { label: "Why Vietnam", href: "/investors/why-vietnam" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    children: [
      { label: "About", href: "/company" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
    ],
  },
  { label: "Insights", href: "/insights" },
];

/** The three intent-specific conversion paths used in the footer and CTAs. */
export const contactPaths = [
  {
    id: "build",
    label: "Build with Zeus",
    href: "/contact?intent=build",
    blurb: "Infrastructure and engineering enquiries.",
  },
  {
    id: "host",
    label: "Host with Zeus",
    href: "/contact?intent=host",
    blurb: "Hosted mining enquiries.",
  },
  {
    id: "invest",
    label: "Invest in Zeus",
    href: "/contact?intent=invest",
    blurb: "Investor enquiries.",
  },
] as const;

export type ContactIntent = (typeof contactPaths)[number]["id"];
