import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { MetricRow } from "@/components/ui/MetricRow";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import { currentOperations, seriesA, assetValue } from "@/data/metrics";
import { whyZeus } from "@/data/team";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Investor Relations",
  description:
    "ZEUS Engineering is seeking a US$1–2M Series A to scale its Bitcoin mining operations in Vietnam. Operations, plan, projections and vision.",
  path: "/investors",
});

const chapters = [
  {
    href: "/investors/series-a",
    index: "01",
    label: "Series A",
    body: "What ZEUS is asking for, and the seven-point plan the raise funds.",
  },
  {
    href: "/investors/roadmap",
    index: "02",
    label: "Expansion roadmap",
    body: "From the operating site through to the long-term modular data centre vision.",
  },
  {
    href: "/investors/projections",
    index: "03",
    label: "Management projections",
    body: "The BTC production and profit figures, with the assumptions they depend on.",
  },
  {
    href: "/investors/why-vietnam",
    index: "04",
    label: "Why Vietnam",
    body: "The capex, power, sunlight, logistics and tax arguments — with ZEUS's own caveats.",
  },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHeader
        label="Investor relations"
        title={"Proof first.\nThen scale."}
        lede="ZEUS Engineering is seeking US$1–2 million in Series A funding to scale its Bitcoin mining operations in Vietnam while reducing operating expense. What follows separates what exists from what is planned from what is projected — deliberately, and throughout."
        crumbs={[{ label: "Home", href: "/" }]}
      />

      {/* The four classes, stated up front. This is the reading key for the
          entire section and it belongs before any number. */}
      <Section
        index="01"
        label="How to read this section"
        title={"Four kinds\nof statement."}
        lede="Every figure on this site carries one of these labels. They are never mixed, and the label is always a word — not just a colour."
      >
        <div className="grid grid-cols-1 gap-px bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              s: "zeus-reported" as const,
              t: "Zeus reported",
              b: "A figure ZEUS publishes about its own operations. Not independently audited.",
            },
            {
              s: "target" as const,
              t: "Target",
              b: "An objective contingent on funding. Not a current capability and not a commitment.",
            },
            {
              s: "projection" as const,
              t: "Projection",
              b: "A management forecast resting on stated assumptions. Not a record of performance.",
            },
            {
              s: "concept" as const,
              t: "Concept",
              b: "A product direction or engineering concept. Not a count of deployed units.",
            },
          ].map((item) => (
            <div key={item.t} className="reveal bg-graphite p-7">
              <StatusBadge status={item.s} />
              <p className="mt-5 text-sm leading-relaxed text-steel">
                {item.b}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        index="02"
        label="Where we are"
        title={"What exists\ntoday."}
        tone="carbon"
        lede="ZEUS reports the following operations. These are the only operating figures presented anywhere on this site."
      >
        <MetricRow facts={currentOperations} />

        <div className="reveal mt-14 grid grid-cols-1 gap-10 border-t border-[var(--rule)] pt-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="numeral text-[clamp(2.5rem,5vw,3.5rem)]">
                {assetValue.value}
              </span>
              <span className="numeral text-2xl text-steel">
                {assetValue.unit}
              </span>
            </div>
            <p className="tech-label mt-3">{assetValue.label}</p>
            <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-steel-dim">
              {assetValue.note} Described by ZEUS; not independently audited.
            </p>
          </div>

          <div>
            <TechLabel className="mb-4">Funded to here</TechLabel>
            <p className="max-w-[48ch] leading-relaxed text-steel">
              ZEUS states that it is financially self-sustaining, and that
              pre-seed and seed funding were completed using internally
              generated funds reinvested from its Bitcoin mining operations.
            </p>
          </div>
        </div>
      </Section>

      <Section index="03" label="The ask" title={"Series A."}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-16">
          <div className="reveal border border-[var(--rule)] bg-carbon p-8">
            <div className="flex items-center justify-between gap-4">
              <TechLabel>Series A</TechLabel>
              <StatusBadge status="target" label="Fundraising target" />
            </div>
            <div className="mt-8 flex items-baseline gap-2">
              <span className="numeral text-[clamp(3rem,7vw,5rem)] text-amber">
                {seriesA.value}
              </span>
              <span className="numeral text-3xl text-amber/60">
                {seriesA.unit}
              </span>
            </div>
            <p className="tech-label mt-4">Venture capital or private equity</p>
            <p className="mt-6 border-t border-[var(--rule)] pt-6 text-sm leading-relaxed text-steel">
              {seriesA.note}
            </p>
          </div>

          <div>
            <TechLabel className="mb-6">Why ZEUS</TechLabel>
            <ul className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
              {whyZeus.map((item) => (
                <li key={item.slice(0, 30)} className="flex gap-3 text-sm text-steel">
                  <span
                    aria-hidden
                    className="mt-2 h-px w-4 shrink-0 bg-amber/60"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section index="04" label="Continue" title={"The detail."} tone="carbon">
        <div className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
          {chapters.map((chapter) => (
            <Link
              key={chapter.href}
              href={chapter.href}
              className="group flex items-center gap-6 py-7 transition-colors duration-200"
            >
              <span className="tech-label shrink-0 text-steel-dim">
                {chapter.index}
              </span>
              <span className="flex-1">
                <span className="display block text-[clamp(1.5rem,2.6vw,2.25rem)] leading-none transition-colors duration-200 group-hover:text-amber">
                  {chapter.label}
                </span>
                <span className="mt-2 block max-w-[54ch] text-sm text-steel">
                  {chapter.body}
                </span>
              </span>
              <span
                aria-hidden
                className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          ))}
        </div>

        <div className="reveal mt-14">
          <Button href="/contact?intent=invest">Investor enquiry</Button>
        </div>
      </Section>
    </>
  );
}
