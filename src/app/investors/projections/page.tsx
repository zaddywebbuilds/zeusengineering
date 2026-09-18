import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import { ProjectionChart } from "@/components/diagrams/ProjectionChart";
import { projections, projectionAssumptions } from "@/data/metrics";
import { STATUS_DISCLOSURE } from "@/data/facts";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Management Projections",
  description:
    "ZEUS Engineering's management projections for BTC production and profit following the Series A expansion — presented with the assumptions they depend on.",
  path: "/investors/projections",
});

export default function ProjectionsPage() {
  return (
    <>
      <PageHeader
        index="03"
        label="Investor relations"
        title={"What ZEUS\nprojects."}
        lede="These are forecasts, not results. They describe the first year following completion of the new facilities and client onboarding — a state that does not exist yet and depends on the Series A round closing."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Investors", href: "/investors" },
        ]}
        status={{ value: "projection" }}
      />

      <Section>
        {/* The label comes before the numbers, not after them. */}
        <div className="reveal mb-12 border-l-2 border-cyan/50 bg-carbon p-7 lg:p-8">
          <div className="flex flex-wrap items-center gap-4">
            <StatusBadge status="projection" />
          </div>
          <p className="mt-5 max-w-[72ch] text-sm leading-relaxed text-steel">
            {STATUS_DISCLOSURE.projection} Nothing on this page describes
            realised production, revenue or profit. ZEUS has not published a
            month-by-month operating history, and none is shown.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-[var(--rule)] sm:grid-cols-2">
          {projections.map((fact) => (
            <div key={fact.label} className="reveal bg-graphite p-7 lg:p-9">
              <div className="flex items-baseline gap-2">
                <span className="numeral text-[clamp(2.75rem,6vw,4.5rem)] text-cyan">
                  {fact.value}
                </span>
                <span className="numeral text-xl text-cyan/60">
                  {fact.unit}
                </span>
              </div>
              <p className="tech-label mt-4">{fact.label}</p>
              {fact.note && (
                <p className="mt-3 max-w-[38ch] text-sm leading-relaxed text-steel-dim">
                  {fact.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section
        index="04"
        label="Composition"
        title={"Where the\n20 BTC\ncomes from."}
        tone="carbon"
        lede="The projected total splits across company-owned machines and hosted client machines — two different businesses with different economics."
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,30rem)_minmax(0,1fr)] lg:gap-16">
          <div className="border border-[var(--rule)] bg-graphite p-6 lg:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <TechLabel>Projected annual production</TechLabel>
              <StatusBadge status="projection" label="Projection" />
            </div>
            <ProjectionChart />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="display text-[1.625rem] leading-none">
                Company-owned
              </h2>
              <p className="mt-4 max-w-[48ch] leading-relaxed text-steel">
                200 machines purchased and operated by ZEUS, projected at 10–15
                BTC per year. This is the capital-intensive half: ZEUS carries
                the hardware cost and the energy cost, and keeps the output.
              </p>
            </div>
            <div>
              <h2 className="display text-[1.625rem] leading-none">Hosted</h2>
              <p className="mt-4 max-w-[48ch] leading-relaxed text-steel">
                300 client machines across a target of 100 hosting clients,
                projected at 4–5 BTC per year to ZEUS through the 10% service
                fee. Lower revenue per machine, but the client carries the
                hardware.
              </p>
            </div>
            <div>
              <h2 className="display text-[1.625rem] leading-none">
                Profit after expenses
              </h2>
              <p className="mt-4 max-w-[48ch] leading-relaxed text-steel">
                ZEUS projects approximately 10–15 BTC per year after expenses.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section index="05" label="Assumptions" title={"What this\nrests on."}>
        <ol className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
          {projectionAssumptions.map((item, i) => (
            <li key={item} className="reveal flex gap-6 py-5">
              <span className="tech-label shrink-0 text-steel-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-steel">{item}</span>
            </li>
          ))}
        </ol>

        <div className="reveal mt-12 border-l-2 border-amber/50 bg-carbon p-7">
          <TechLabel className="mb-4">Important</TechLabel>
          <p className="max-w-[72ch] text-sm leading-relaxed text-steel">
            Mining output and profitability depend on the Bitcoin price, network
            difficulty, energy cost and machine performance — all of which vary
            and none of which ZEUS controls. These projections are not a
            forecast of investor returns, not a guarantee, and not investment
            advice. Verify independently before relying on them.
          </p>
        </div>

        <div className="reveal mt-14 flex flex-wrap items-center gap-4">
          <Button href="/contact?intent=invest">Investor enquiry</Button>
          <Button href="/investors/roadmap" variant="secondary">
            Expansion roadmap
          </Button>
        </div>
      </Section>
    </>
  );
}
