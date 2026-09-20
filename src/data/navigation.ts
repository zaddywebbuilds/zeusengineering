/**
 * Site structure.
 *
 * This file owns the SHAPE of the navigation: what links exist, where they
 * point, and how they nest. It deliberately owns no prose. Labels and blurbs
 * live in `src/i18n/dictionaries/*`, keyed by the stable `id` on each entry,
 * so a route can never be translated in one language and forgotten in another.
 *
 * `sitemap.ts` is generated from this file, so a route added to the menu
 * cannot be forgotten in the sitemap.
 */

export interface NavChild {
  /** Stable key into `dictionary.nav.items`. Never shown to a visitor. */
  id: string;
  href: string;
}

export interface NavItem {
  id: string;
  href: string;
  children?: NavChild[];
}

export const primaryNav: NavItem[] = [
  {
    id: "solutions",
    href: "/solutions",
    children: [
      { id: "modularDataCenters", href: "/solutions/modular-data-centers" },
      { id: "aiInfrastructure", href: "/solutions/ai-infrastructure" },
      { id: "bitcoinInfrastructure", href: "/solutions/bitcoin-infrastructure" },
      { id: "hostedMining", href: "/solutions/hosted-mining" },
      { id: "energyIntegration", href: "/solutions/energy-integration" },
    ],
  },
  {
    id: "technology",
    href: "/technology",
    children: [
      { id: "technologyOverview", href: "/technology" },
      { id: "power", href: "/technology/power" },
      { id: "cooling", href: "/technology/cooling" },
      { id: "compute", href: "/technology/compute" },
      { id: "monitoring", href: "/technology/monitoring" },
    ],
  },
  {
    id: "projects",
    href: "/projects",
    children: [
      { id: "allProjects", href: "/projects" },
      { id: "vungTau", href: "/projects/vung-tau" },
    ],
  },
  {
    id: "investors",
    href: "/investors",
    children: [
      { id: "investorsOverview", href: "/investors" },
      { id: "theAsk", href: "/investors/the-ask" },
      { id: "roadmap", href: "/investors/roadmap" },
      { id: "economics", href: "/investors/economics" },
      { id: "whyVietnam", href: "/investors/why-vietnam" },
      { id: "brief", href: "/investors/brief" },
    ],
  },
  {
    id: "company",
    href: "/company",
    children: [
      { id: "about", href: "/company" },
      { id: "vision", href: "/vision" },
      { id: "leadership", href: "/company/leadership" },
      { id: "careers", href: "/company/careers" },
      { id: "sources", href: "/sources" },
    ],
  },
  { id: "insights", href: "/insights" },
];

/** The three intent-specific conversion paths used in the footer and CTAs. */
export const contactPaths = [
  { id: "build", href: "/contact?intent=build" },
  { id: "host", href: "/contact?intent=host" },
  { id: "invest", href: "/contact?intent=invest" },
] as const;

export type ContactIntent = (typeof contactPaths)[number]["id"];

/** Every route that exists, for the sitemap and for link auditing. */
export function allRoutes(): string[] {
  const paths = new Set<string>(["/", "/contact", "/legal/privacy", "/sources"]);
  for (const item of primaryNav) {
    paths.add(item.href);
    for (const child of item.children ?? []) paths.add(child.href);
  }
  return [...paths];
}
