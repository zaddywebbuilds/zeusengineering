/**
 * Why Vietnam.
 *
 * SOURCE: the pitch deck. Every item is presented as ZEUS's argument, because
 * that is what it is — the deck itself flags that regulatory and tax
 * statements should be independently re-verified before publication.
 *
 * The `caveat` field is rendered on the page, not stripped.
 */
export interface VietnamPoint {
  index: string;
  title: string;
  body: string;
  caveat?: string;
}

export const vietnamPoints: VietnamPoint[] = [
  {
    index: "01",
    title: "Low capex and opex",
    body: "ZEUS argues that Vietnam offers comparatively low land, factory setup and workforce costs, supporting capital-efficient infrastructure development.",
  },
  {
    index: "02",
    title: "Competitive power rates",
    body: "The deck describes Vietnam's power rates as competitive, and says further benefits may be available at wholesale consumption levels above 1 MW, which is part of why the expansion plan targets that threshold.",
  },
  {
    index: "03",
    title: "Abundant sunlight",
    body: "Year-round sunlight, plus access to locally and regionally manufactured solar equipment, as an opportunity to reduce power expense through solar integration.",
  },
  {
    index: "04",
    title: "Supportive government policies",
    body: "The deck argues that Vietnam is seeking greater participation in data centres, AI technology, regulated digital-asset markets and foreign investment.",
    caveat:
      "Regulatory position stated in ZEUS's deck. Independently re-verify before relying on it.",
  },
  {
    index: "05",
    title: "Convenient logistics",
    body: "Proximity to and trade relationship with China, where much of the required equipment and components are manufactured or distributed.",
  },
  {
    index: "06",
    title: "Comparatively low taxes",
    body: "The deck cites a nominal Vietnamese corporate tax rate of 20%, and refers to potential reductions or customs treatment for certain computing and software activities.",
    caveat:
      "Tax position stated in ZEUS's deck. Verify with a qualified adviser before relying on it.",
  },
];
