import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { FaqList } from "@/components/ui/FaqList";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import { faq } from "@/data/faq";
import { faqJsonLd, pageMeta } from "@/lib/seo";
import { translator } from "@/i18n/t";
import { toLocale, type LangPageProps } from "@/i18n/page";

export async function generateMetadata({
  params,
}: LangPageProps): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = toLocale(rawLang);
  const t = translator(lang);

  return pageMeta({
    lang,
    title: t("Insights"),
    description:
      t("ZEUS Engineering's published answers on mining economics, hardware, heat management and regulation in Vietnam."),
    path: "/insights",
  });
}

/** Article JSON-LD is intentionally absent: there are no articles yet. */

const topics = [
  { id: "economics", label: "Economics" },
  { id: "hardware", label: "Hardware" },
  { id: "engineering", label: "Engineering" },
  { id: "regulatory", label: "Regulatory" },
  { id: "strategy", label: "Strategy" },
] as const;

export default async function InsightsPage({ params }: LangPageProps) {
  const { lang: rawLang } = await params;
  const lang = toLocale(rawLang);
  const t = translator(lang);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }}
      />

      <PageHeader
        lang={lang}
        label="Insights"
        title={"Straight\nanswers."}
        lede="ZEUS's own answers to the questions that get asked about this business, including the uncomfortable ones. Published as given, with the company's caveats intact."
        crumbs={[{ label: "Home", href: "/" }]}
        media={{
          image: "/images/real/hardware-intake-portrait.webp",
          alt: "Pallets of Antminer ASIC units awaiting commissioning in a ZEUS warehouse",
          label: "Hardware intake, 2023",
          note: "ZEUS photograph",
        }}
      />

      {topics.map((topic, i) => {
        const items = faq.filter((f) => f.topic === topic.id);
        if (items.length === 0) return null;
        const translatedItems = items.map((item) => ({
          ...item,
          question: t(item.question),
          answer: t(item.answer),
          caveat: item.caveat ? t(item.caveat) : undefined,
        }));

        return (
          <Section
            key={topic.id}
            index={String(i + 1).padStart(2, "0")}
            label={t(topic.label)}
            tone={i % 2 === 1 ? "linen" : "canvas"}
          >
            <FaqList items={translatedItems} />
          </Section>
        );
      })}

      <Section tone="linen">
        <div className="max-w-[64ch] border-l-2 border-[var(--rule-strong)] pl-6">
          <TechLabel className="mb-4">On this section</TechLabel>
          <p className="text-sm leading-relaxed text-slate-dim">
            This section is built to carry long-form articles, the routing,
            metadata and structured-data templates are in place. It is not
            pre-filled with generated articles: an archive of synthetic posts
            would cost more credibility than it would earn in search.
            Regulatory and tax answers above are ZEUS&rsquo;s own and should be
            independently re-verified.
          </p>
        </div>

        <div className="reveal mt-12 flex flex-wrap items-center gap-4">
          <Button lang={lang} href="/technology">The technology</Button>
          <Button lang={lang} href="/contact" variant="secondary">
            Ask us something
          </Button>
        </div>
      </Section>
    </>
  );
}
