import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, StepList } from "@/components/ui/Section";
import { MetricRow } from "@/components/ui/MetricRow";
import { FaqList } from "@/components/ui/FaqList";
import { Button } from "@/components/ui/Button";
import { TechLabel } from "@/components/ui/TechLabel";
import {
  hostingFacts,
  hostingIncluded,
  hostingProcess,
  hostingDisclosure,
} from "@/data/hosting";
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
    title: t("Hosted Mining"),
    description:
      t("ZEUS Engineering runs and maintains client-owned Bitcoin mining hardware in Vietnam: power, cooling, monitoring and maintenance for a 10% service fee."),
    path: "/solutions/hosted-mining",
  });
}

/** The rendered subset and the structured data must be the same array. */
const faqItems = faq.filter(
  (f) => f.topic === "economics" || f.topic === "hardware",
);

export default async function HostedMiningPage({ params }: LangPageProps) {
  const { lang: rawLang } = await params;
  const lang = toLocale(rawLang);
  const t = translator(lang);

  return (
    <>
      <script
        type="application/ld+json"
        // Static, author-controlled JSON-LD. No user input reaches this.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(faqItems)),
        }}
      />
      <PageHeader
        lang={lang}
        index="04"
        label={t("Solutions")}
        title={"Your hardware.\nOur infrastructure."}
        lede="You own the machines. ZEUS provides the site, the power, the cooling and the people, and runs them."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
        ]}
        media={{
          image: "/images/concept/zeus-plant-portrait.webp",
          alt: "Concept visualisation of ZEUS switchgear cabinets on a compute site",
          label: "Power plant",
          note: "Concept visualisation",
        }}
      />

      <Section
        index="05"
        label="The offer"
        title={"Infrastructure\nfirst."}
        lede="What ZEUS provides, and what it charges for providing it."
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-12">
          <div>
            <TechLabel className="mb-6">Included</TechLabel>
            <ul className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
              {hostingIncluded.map((item, i) => (
                <li key={item} className="reveal flex items-center gap-5 py-5">
                  <span className="tech-label text-slate-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="h-px w-8 bg-ochre/50" />
                  <span className="text-lg text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="border border-[var(--rule)] bg-linen p-7">
            <TechLabel className="mb-5">On pricing</TechLabel>
            <p className="text-sm leading-relaxed text-slate">
              ZEUS advertises a $10,000 entry package and takes 10% of earnings
              as a service fee for running and maintaining the equipment.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-dim">
              Exact scope, machine count, hardware and term, is confirmed on
              enquiry. No return figure is published here: see the risk note
              below.
            </p>
            <Button lang={lang}
              href="/contact?intent=host"
              variant="secondary"
              className="mt-7 w-full justify-center"
            >
              Request a quote
            </Button>
          </aside>
        </div>

        <MetricRow
          facts={hostingFacts}
          columns={2}
          className="mt-11"
          showDisclosure={false}
        />
      </Section>

      <Section
        index="06"
        label="Process"
        title={"From enquiry\nto settlement."}
        tone="linen"
      >
        <StepList steps={hostingProcess} />
      </Section>

      <Section index="07" label="Common questions" title={"Before you\ncommit."}>
        <FaqList items={faqItems} />

        {/* Risk disclosure, required wherever hosting economics are discussed */}
        <div className="reveal mt-10 border-l-2 border-ochre/50 bg-linen p-7 lg:p-8">
          <TechLabel className="mb-4">Risk disclosure</TechLabel>
          <p className="max-w-[72ch] text-sm leading-relaxed text-slate">
            {hostingDisclosure}
          </p>
        </div>

        <div className="reveal mt-12">
          <Button lang={lang} href="/contact?intent=host">Discuss hosting with Zeus</Button>
        </div>
      </Section>
    </>
  );
}
