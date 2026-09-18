export interface Solution {
  id: string;
  index: string;
  label: string;
  href: string;
  headline: string;
  tagline: string;
  summary: string;
  image: string;
  imageAlt: string;
  /** True where the imagery is an AI-generated concept render, not documentary. */
  imageIsConcept?: boolean;
}

export const solutions: Solution[] = [
  {
    id: "modular-data-centers",
    index: "01",
    label: "Modular Data Centers",
    href: "/solutions/modular-data-centers",
    headline: "Compute.\nContainerised.",
    tagline: "Deployed in months, not years.",
    summary:
      "Standardised modular designs that reduce deployment risk, contain the impact of individual system failures, and place infrastructure closer to available energy.",
    image: "/images/concept/cooling-plant.webp",
    imageAlt:
      "Concept visualisation of a modular compute facility with containerised units and external cooling plant",
    imageIsConcept: true,
  },
  {
    id: "ai-infrastructure",
    index: "02",
    label: "AI Infrastructure",
    href: "/solutions/ai-infrastructure",
    headline: "Infrastructure\nfor intelligence.",
    tagline: "Power, cooling, connectivity, control.",
    summary:
      "High-density AI compute is a physical problem before it is a software one. The engineering that keeps ASICs running in a tropical climate is the engineering that keeps accelerators running.",
    image: "/images/site/consulting.webp",
    imageAlt: "AI consulting and analytics imagery from ZEUS Engineering",
  },
  {
    id: "bitcoin-infrastructure",
    index: "03",
    label: "Bitcoin Infrastructure",
    href: "/solutions/bitcoin-infrastructure",
    headline: "Built through\ncontinuous compute.",
    tagline: "The proving ground.",
    summary:
      "ASIC deployment, power infrastructure, cooling, monitoring and maintenance — run continuously, in heat and humidity, where efficiency is the margin.",
    image: "/images/site/bitcoin-mining.webp",
    imageAlt: "ASIC mining hardware",
  },
  {
    id: "hosted-mining",
    index: "04",
    label: "Hosted Mining",
    href: "/solutions/hosted-mining",
    headline: "Your hardware.\nOur infrastructure.",
    tagline: "Hardware, hosting, operations, monitoring, maintenance, payout.",
    summary:
      "A commercially active offering: Zeus provides the power infrastructure, cooling, monitoring and maintenance; you hold the hardware and receive monthly BTC payouts.",
    image: "/images/concept/data-hall.webp",
    imageAlt:
      "Concept visualisation of a ZEUS data hall with racked mining hardware",
    imageIsConcept: true,
  },
  {
    id: "energy-integration",
    index: "05",
    label: "Energy Integration",
    href: "/solutions/energy-integration",
    headline: "Compute starts\nwith power.",
    tagline: "Grid and solar, managed as one system.",
    summary:
      "Systems designed to integrate with existing power infrastructure while leveraging renewable energy — particularly solar — to reduce operating costs and improve energy efficiency.",
    image: "/images/site/solar.webp",
    imageAlt: "Solar array at sunrise",
  },
];

export const getSolution = (id: string) => solutions.find((s) => s.id === id);
