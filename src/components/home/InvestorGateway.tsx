import { theAsk, useOfFunds } from "@/data/ssmdc";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { MaskedHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

/**
 * Investor gateway. Data-led rather than photographic, and the raise is
 * labelled as a target in the badge, in the caption and in the disclosure —
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
            text={"Build the nodes.\nOwn the uptime."}
            className="h-section max-w-[14ch]"
          />
          <h2 id="investor-heading" className="sr-only">
            Investor relations
          </h2>

          <p className="reveal mt-8 max-w-[48ch] text-lg leading-relaxed text-steel">
            A prototype that already runs, a node design costed to the line, and
            a raise sized to build two of them — presented so that what exists,
            what is planned and what is projected are never the same thing.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-4">
            <Button href="/investors">Explore investor relations</Button>
            <Button href="/investors/the-ask" variant="secondary">
              The ask
            </Button>
          </div>
        </div>

        <div className="reveal border border-[var(--rule)] bg-graphite p-8 lg:p-10">
          <div className="flex items-center justify-between gap-4">
            <TechLabel>Current raise</TechLabel>
            <StatusBadge status="target" label="Fundraising target" />
          </div>

          <div className="mt-10 flex items-baseline gap-2">
            <span className="numeral text-[clamp(3.5rem,8vw,6rem)] text-amber">
              {theAsk.value}
            </span>
            <span className="numeral text-3xl text-amber/60">
              {theAsk.unit}
            </span>
          </div>
          <p className="tech-label mt-4">18–24 month runway to live nodes</p>

          <p className="mt-8 border-t border-[var(--rule)] pt-8 text-sm leading-relaxed text-steel">
            {theAsk.note}
          </p>

          <dl className="mt-8 space-y-3 border-t border-[var(--rule)] pt-8">
            {useOfFunds.slice(0, 3).map((row) => (
              <div key={row.item} className="flex justify-between gap-6 text-sm">
                <dt className="text-steel-dim">{row.item}</dt>
                <dd className="shrink-0 text-right text-steel">{row.amount}</dd>
              </div>
            ))}
            <div className="flex justify-between gap-6 text-sm text-steel-dim">
              <dt>+ 2 further lines</dt>
              <dd className="shrink-0 text-right">$540k</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
