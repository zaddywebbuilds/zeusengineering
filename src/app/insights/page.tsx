import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { FaqList } from "@/components/ui/FaqList";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import { faq } from "@/data/faq";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Insights",
  description:
    "ZEUS Engineering's published answers on mining economics, hardware obsolescence, heat management, regulation in Vietnam, and how Bitcoin, AI and quantum computing relate.",
  path: "/insights",
});

/** Article JSON-LD is intentionally absent: there are no articles yet. */
function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.caveat ? `${item.answer} ${item.caveat}` : item.answer,
      },
    })),
  };
}

const topics = [
  { id: "economics", label: "Economics" },
  { id: "hardware", label: "Hardware" },
  { id: "engineering", label: "Engineering" },
  { id: "regulatory", label: "Regulatory" },
  { id: "strategy", label: "Strategy" },
] as const;

export default function InsightsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />

      <PageHeader
        label="Insights"
        title={"Straight\nanswers."}
        lede="ZEUS's own answers to the questions that get asked about this business — including the uncomfortable ones. Published as given, with the company's caveats intact."
        crumbs={[{ label: "Home", href: "/" }]}
      />

      {topics.map((topic, i) => {
        const items = faq.filter((f) => f.topic === topic.id);
        if (items.length === 0) return null;

        return (
          <Section
            key={topic.id}
            index={String(i + 1).padStart(2, "0")}
            label={topic.label}
            tone={i % 2 === 1 ? "carbon" : "graphite"}
          >
            <FaqList items={items} />
          </Section>
        );
      })}

      <Section tone="carbon">
        <div className="max-w-[64ch] border-l-2 border-[var(--rule-strong)] pl-6">
          <TechLabel className="mb-4">On this section</TechLabel>
          <p className="text-sm leading-relaxed text-steel-dim">
            This section is built to carry long-form articles — the routing,
            metadata and structured-data templates are in place. It is not
            pre-filled with generated articles: an archive of synthetic posts
            would cost more credibility than it would earn in search.
            Regulatory and tax answers above are ZEUS&rsquo;s own and should be
            independently re-verified.
          </p>
        </div>

        <div className="reveal mt-12 flex flex-wrap items-center gap-4">
          <Button href="/technology">The technology</Button>
          <Button href="/contact" variant="secondary">
            Ask us something
          </Button>
        </div>
      </Section>
    </>
  );
}
