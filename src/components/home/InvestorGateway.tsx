import { seriesA } from "@/data/metrics";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { MaskedHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

/**
 * Investor gateway. Data-led rather than photographic, and the Series A figure
 * is labelled as a target in the badge, in the caption and in the disclosure —
 * three times, because this is the single number most likely to be misread.
 */
export function InvestorGateway() {
  return (
    <section
      className="tech-grid border-t border-[var(--rule)] bg-carbon"
      aria-labelledby="investor-heading"
    >
      <div className="shell grid grid-cols-1 gap-14 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
        <div>
          <TechLabel index="09" className="reveal mb-7">
            Investor relations
          </TechLabel>
          <MaskedHeading
            text={"Proof first.\nThen scale."}
            className="h-section max-w-[12ch]"
          />
          <h2 id="investor-heading" className="sr-only">
            Investor relations
          </h2>

          <p className="reveal mt-8 max-w-[48ch] text-lg leading-relaxed text-steel">
            An operating facility, a defined expansion, and a stated long-range
            direction — presented so that what exists, what is planned and what
            is projected are never the same thing.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-4">
            <Button href="/investors">Explore investor relations</Button>
            <Button href="/investors/roadmap" variant="secondary">
              Expansion roadmap
            </Button>
          </div>
        </div>

        <div className="reveal border border-[var(--rule)] bg-graphite p-8 lg:p-10">
          <div className="flex items-center justify-between gap-4">
            <TechLabel>Series A</TechLabel>
            <StatusBadge status="target" label="Fundraising target" />
          </div>

          <div className="mt-10 flex items-baseline gap-2">
            <span className="numeral text-[clamp(3.5rem,8vw,6rem)] text-amber">
              {seriesA.value}
            </span>
            <span className="numeral text-3xl text-amber/60">
              {seriesA.unit}
            </span>
          </div>
          <p className="tech-label mt-4">Current fundraising target</p>

          <p className="mt-8 border-t border-[var(--rule)] pt-8 text-sm leading-relaxed text-steel">
            {seriesA.note}
          </p>

          <dl className="mt-8 space-y-4 border-t border-[var(--rule)] pt-8">
            {[
              ["Industrial site", "Up to 2,000 m² — target"],
              ["Machines", "500 total — target"],
              ["Peak solar", "Up to 500 kW — target"],
            ].map(([term, detail]) => (
              <div key={term} className="flex justify-between gap-6 text-sm">
                <dt className="text-steel-dim">{term}</dt>
                <dd className="text-right text-steel">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
