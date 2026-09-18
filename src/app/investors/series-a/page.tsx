import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, StepList } from "@/components/ui/Section";
import { MetricRow } from "@/components/ui/MetricRow";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import { seriesA, expansionTargets, expansionPlan } from "@/data/metrics";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Series A",
  description:
    "ZEUS Engineering is seeking US$1–2 million in Series A funding. The seven-point expansion plan the raise funds, and the targets it is measured against.",
  path: "/investors/series-a",
});

export default function SeriesAPage() {
  return (
    <>
      <PageHeader
        index="01"
        label="Investor relations"
        title={"What we're\nasking for."}
        lede="US$1–2 million in Series A venture-capital or private-equity funding, to scale Bitcoin mining operations in Vietnam while reducing operating expense."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Investors", href: "/investors" },
        ]}
        status={{ value: "target", label: "Fundraising target" }}
      >
        <div className="reveal mt-12 flex items-baseline gap-3">
          <span className="numeral text-[clamp(4rem,10vw,8rem)] text-amber">
            {seriesA.value}
          </span>
          <span className="numeral text-4xl text-amber/60">{seriesA.unit}</span>
        </div>
        <p className="reveal mt-4 max-w-[52ch] text-sm leading-relaxed text-steel">
          {seriesA.note}
        </p>
      </PageHeader>

      <Section
        index="02"
        label="The plan"
        title={"Seven steps."}
        lede="What the raise funds, in ZEUS's own sequence. Each step is an objective contingent on the round closing."
      >
        <StepList steps={expansionPlan.slice(0, 6)} />
        <div className="mt-px">
          <StepList steps={expansionPlan.slice(6)} columns={2} />
        </div>
      </Section>

      <Section
        index="03"
        label="Targets"
        title={"Measured\nagainst."}
        tone="carbon"
        lede="The figures the plan is aiming at. None of these describes a current capability."
      >
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <StatusBadge status="target" />
          <p className="max-w-[62ch] text-sm text-steel-dim">
            Every figure below is a stated objective contingent on the Series A
            raise. None appears in an operating context anywhere on this site.
          </p>
        </div>

        <MetricRow
          facts={expansionTargets}
          columns={3}
          showDisclosure={false}
        />
      </Section>

      <Section index="04" label="Use of funds" title={"Where it goes."}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-16">
          <ul className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            {[
              "A larger industrial site in the Vung Tau / Ba Ria region.",
              "Mining hardware for company operation.",
              "Power infrastructure and capacity expansion.",
              "Solar generation fit-out.",
              "Factory workshop space for containerised unit development.",
            ].map((item, i) => (
              <li key={item} className="reveal flex items-center gap-5 py-5">
                <span className="tech-label text-steel-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="h-px w-8 bg-amber/50" />
                <span className="text-engineering">{item}</span>
              </li>
            ))}
          </ul>

          <aside className="border border-[var(--rule)] bg-carbon p-7">
            <TechLabel className="mb-5">On allocation</TechLabel>
            <p className="text-sm leading-relaxed text-steel">
              ZEUS describes the areas the raise funds but has not published a
              percentage breakdown across them. None is shown here rather than
              constructed.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-steel-dim">
              No investor names or logos appear on this site. ZEUS has not
              stated that this round has closed or that any party has
              committed.
            </p>
          </aside>
        </div>

        <div className="reveal mt-14 flex flex-wrap items-center gap-4">
          <Button href="/contact?intent=invest">Investor enquiry</Button>
          <Button href="/investors/projections" variant="secondary">
            Management projections
          </Button>
        </div>
      </Section>
    </>
  );
}
