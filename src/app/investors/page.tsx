import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { MetricRow } from "@/components/ui/MetricRow";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import { theAsk, traction, hyperscaleProblems, businessModel, whyZeusNow } from "@/data/ssmdc";
import { pageMeta } from "@/lib/seo";
import { cx } from "@/lib/utils";

export const metadata: Metadata = pageMeta({
  title: "Investor Relations",
  description:
    "ZEUS Engineering is raising $2.69M to build decentralised AI compute nodes in Vietnam — SSMDC. Traction, economics, roadmap and the case.",
  path: "/investors",
});

const chapters = [
  {
    href: "/investors/the-ask",
    index: "01",
    label: "The ask",
    body: "$2.69M, itemised — what it buys and over what runway.",
  },
  {
    href: "/investors/economics",
    index: "02",
    label: "Node economics",
    body: "What a 400 m² node produces, costs and computes.",
  },
  {
    href: "/investors/roadmap",
    index: "03",
    label: "Roadmap",
    body: "Prototype, first nodes, network — and which of those exists.",
  },
  {
    href: "/investors/why-vietnam",
    index: "04",
    label: "Why Vietnam",
    body: "Capex, power, sunlight, logistics and tax — with ZEUS's own caveats.",
  },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHeader
        label="Investor relations"
        title={"Build the nodes.\nOwn the uptime."}
        lede="Hyperscale cannot keep up with the hunger for compute. ZEUS is raising $2.69M to build decentralised, solar-powered AI compute nodes in southern Vietnam — on the back of a mining site that already runs."
        crumbs={[{ label: "Home", href: "/" }]}
        status={{ value: "target", label: "Raising" }}
      />

      {/* The reading key, before any figure. */}
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
              b: "A figure ZEUS publishes about its own operations. Not independently audited.",
            },
            {
              s: "target" as const,
              b: "An objective contingent on funding. Not a current capability and not a commitment.",
            },
            {
              s: "projection" as const,
              b: "A management forecast resting on stated assumptions. Not a record of performance.",
            },
            {
              s: "concept" as const,
              b: "A product direction or engineering concept. Not a count of deployed units.",
            },
          ].map((item) => (
            <div key={item.s} className="reveal bg-graphite p-7">
              <StatusBadge status={item.s} />
              <p className="mt-5 text-sm leading-relaxed text-steel">{item.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The problem */}
      <Section
        index="02"
        label="The problem"
        title={"Hyperscale cannot\nkeep up."}
        tone="carbon"
        lede="The constraint on AI compute is no longer silicon. It is the years, the capital and the single-site risk involved in putting that silicon somewhere it can run."
      >
        <div className="grid grid-cols-1 gap-px bg-[var(--rule)] md:grid-cols-3">
          {hyperscaleProblems.map((problem) => (
            <div key={problem.index} className="reveal bg-carbon p-8">
              <div className="flex items-center gap-4">
                <span className="tech-label text-steel-dim">{problem.index}</span>
                <span aria-hidden className="h-px w-10 bg-amber/60" />
              </div>
              <h3 className="display mt-6 text-[1.5rem] leading-none">
                {problem.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-steel">
                {problem.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Traction */}
      <Section
        index="03"
        label="Traction"
        title={"Already operating.\nAlready learning."}
        lede="ZEUS has spent a decade building dense power, cooling and modular compute systems — first for mining, now redirected to AI. The Vietnam prototype is the foundation the SSMDC design is drawn from."
      >
        <MetricRow facts={traction} />
      </Section>

      {/* The ask */}
      <Section index="04" label="The ask" title={"$2.69M."} tone="carbon">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-16">
          <div className="reveal border border-[var(--rule)] bg-graphite p-8">
            <div className="flex items-center justify-between gap-4">
              <TechLabel>Current raise</TechLabel>
              <StatusBadge status="target" label="Fundraising target" />
            </div>
            <div className="mt-8 flex items-baseline gap-2">
              <span className="numeral text-[clamp(3rem,7vw,5rem)] text-amber">
                {theAsk.value}
              </span>
              <span className="numeral text-3xl text-amber/60">
                {theAsk.unit}
              </span>
            </div>
            <p className="tech-label mt-4">18–24 month runway to live nodes</p>
            <p className="mt-6 border-t border-[var(--rule)] pt-6 text-sm leading-relaxed text-steel">
              {theAsk.note}
            </p>
            <Button href="/investors/the-ask" variant="secondary" className="mt-7 w-full justify-center">
              See the breakdown
            </Button>
          </div>

          <div>
            <TechLabel className="mb-6">Why ZEUS</TechLabel>
            <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
              {whyZeusNow.map((item) => (
                <div key={item.title} className="reveal">
                  <h3 className="display text-[1.25rem] leading-none">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-steel-dim">
              Full-stack operators, not pure software or pure real estate.
            </p>
          </div>
        </div>
      </Section>

      {/* Business model */}
      <Section
        index="05"
        label="Business model"
        title={"Two asset classes.\nOne operating system."}
      >
        <div className="grid grid-cols-1 gap-px bg-[var(--rule)] md:grid-cols-2">
          {businessModel.map((item) => (
            <div key={item.title} className="reveal bg-graphite p-8 lg:p-10">
              <span
                aria-hidden
                className={cx(
                  "block h-px w-12",
                  item.accent === "energy" ? "bg-amber" : "bg-cyan",
                )}
              />
              <h3 className="display mt-6 text-[clamp(1.75rem,3vw,2.5rem)] leading-none">
                {item.title}
              </h3>
              <p className="mt-5 max-w-[44ch] leading-relaxed text-steel">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section index="06" label="Continue" title={"The detail."} tone="carbon">
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
