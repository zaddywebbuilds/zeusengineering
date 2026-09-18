/**
 * Common questions.
 *
 * SOURCE: the pitch deck's own Q&A. This is the most credible content in the
 * whole project — a company answering the hard questions about its own
 * business — so it gets a real place on the site rather than being buried.
 *
 * Answers are ZEUS's. Where the deck flags that a claim needs re-verification,
 * that flag is carried through to the page rather than dropped.
 */
export interface FaqItem {
  question: string;
  answer: string;
  caveat?: string;
  topic: "economics" | "hardware" | "regulatory" | "engineering" | "strategy";
}

export const faq: FaqItem[] = [
  {
    topic: "economics",
    question: "Does it cost more in power than you make in Bitcoin?",
    answer:
      "ZEUS's answer emphasises managing power use and cost through efficient equipment, wholesale power rates and renewable energy — which is the reasoning behind the 1 MW and 2 MW capacity targets and the 500 kW solar fit-out in the expansion plan.",
  },
  {
    topic: "hardware",
    question: "Don't the machines become obsolete?",
    answer:
      "ZEUS acknowledges technology obsolescence, and emphasises extracting value during the equipment's higher-return period, maintaining an upgrade plan, and considering lower-cost power for older equipment.",
  },
  {
    topic: "regulatory",
    question: "Is mining illegal in Vietnam?",
    answer:
      "ZEUS states that Bitcoin mining itself is not illegal, and distinguishes it from illegal power theft.",
    caveat: "Regulatory claim from ZEUS's deck. Independently re-verify.",
  },
  {
    topic: "regulatory",
    question: "Is Bitcoin illegal in Vietnam?",
    answer:
      "The deck states that Bitcoin is not legal tender in Vietnam, and describes ownership as an asset-related matter.",
    caveat:
      "Current legal treatment should be independently re-verified with a qualified adviser.",
  },
  {
    topic: "regulatory",
    question: "Do you pay taxes?",
    answer:
      "ZEUS states that it operates as a functional company complying with applicable tax laws, and refers to depreciation and continued reinvestment in its operations.",
  },
  {
    topic: "engineering",
    question: "How do you manage heat?",
    answer:
      "ZEUS says it manages airflow using conventional approaches — airflow control systems, fans, and water radiators for hydro systems.",
  },
  {
    topic: "economics",
    question: "What about Bitcoin price volatility?",
    answer:
      "ZEUS expresses a long-term positive view of Bitcoin based on its years of industry experience.",
    caveat:
      "This is the company's viewpoint, not a guaranteed market outcome and not investment advice.",
  },
  {
    topic: "economics",
    question: "Why not simply buy Bitcoin?",
    answer:
      "ZEUS argues that mining can produce Bitcoin below the purchase price while the equipment continues operating.",
    caveat:
      "A company claim. It depends on hardware, energy cost, network difficulty, Bitcoin price and other variables.",
  },
  {
    topic: "strategy",
    question: "Does Vietnam have the workforce skills required?",
    answer:
      "ZEUS acknowledges a skills gap, and says it addresses this through technical leadership and local operations.",
  },
  {
    topic: "strategy",
    question: "How does this relate to AI and quantum computing?",
    answer:
      "ZEUS frames Bitcoin mining, AI and future advanced computing as infrastructure-intensive computing problems requiring the same facilities, engineering, power and thermal-management capability. That framing is the thesis behind the whole modular data centre direction.",
  },
];
