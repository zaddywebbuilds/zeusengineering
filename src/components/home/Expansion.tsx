import Link from "next/link";
import { currentOperations, expansionTargets, seriesA } from "@/data/metrics";
import { STATUS_DISCLOSURE } from "@/data/facts";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { MaskedHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

/**
 * Today vs target, set side by side deliberately.
 *
 * The comparison is the honest way to present the raise: it shows the gap
 * rather than hiding it. The left column is what exists; the right column is
 * explicitly labelled as contingent on funding, with every figure carrying the
 * word "target" in text, not just in colour.
 */
export function Expansion() {
  const today = currentOperations[0];

  return (
    <section
      className="border-t border-[var(--rule)] bg-graphite"
      aria-labelledby="expansion-heading"
    >
      <div className="shell py-24 lg:py-32">
        <TechLabel index="08" className="reveal mb-7">
          Expansion
        </TechLabel>
        <MaskedHeading
          text={"Scaling the\ninfrastructure."}
          className="h-section max-w-[14ch]"
        />
        <h2 id="expansion-heading" className="sr-only">
          Expansion
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-px bg-[var(--rule)] lg:grid-cols-2">
          {/* Today */}
          <div className="bg-graphite p-8 lg:p-12">
            <div className="flex items-center justify-between gap-4">
              <TechLabel>Today</TechLabel>
              <StatusBadge status="zeus-reported" label="Operating" />
            </div>

            <div className="mt-10 flex items-baseline gap-2">
              <span className="numeral text-[clamp(4rem,9vw,7rem)]">
                {today.value}
              </span>
              <span className="numeral text-3xl text-steel">{today.unit}</span>
            </div>
            <p className="tech-label mt-4">Operating facility</p>

            <p className="mt-8 max-w-[38ch] text-sm leading-relaxed text-steel">
              A 300 m² site in the Vung Tau / Ba Ria region with 20 kW peak
              solar and 1+ PH peak hash power, as reported by ZEUS.
            </p>
          </div>

          {/* Target */}
          <div className="relative bg-graphite p-8 lg:p-12">
            {/* Dashed frame — the visual grammar for "not yet built" */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-4 border border-dashed border-amber/25"
            />

            <div className="relative flex items-center justify-between gap-4">
              <TechLabel>After Series A</TechLabel>
              <StatusBadge status="target" />
            </div>

            <div className="relative mt-10 flex items-baseline gap-2">
              <span className="numeral text-[clamp(4rem,9vw,7rem)] text-amber">
                1–2
              </span>
              <span className="numeral text-3xl text-amber/60">MW</span>
            </div>
            <p className="tech-label mt-4 text-amber/80">
              Planned power expansion — target
            </p>

            <ul className="relative mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
              {expansionTargets.slice(0, 5).map((fact) => (
                <li key={fact.label}>
                  <p className="numeral text-xl text-amber">
                    {fact.value}
                    {fact.unit && (
                      <span className="text-amber/60"> {fact.unit}</span>
                    )}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-steel">
                    {fact.label} <span className="text-steel-dim">(target)</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="reveal mt-6 max-w-[74ch] text-sm text-steel-dim">
          {STATUS_DISCLOSURE.target} {seriesA.note}
        </p>

        <div className="reveal mt-12 flex flex-wrap items-center gap-4">
          <Button href="/investors/roadmap" variant="secondary">
            View expansion roadmap
          </Button>
          <Link
            href="/investors/series-a"
            className="group inline-flex items-center gap-2 text-sm text-steel transition-colors duration-200 hover:text-engineering"
          >
            Series A detail
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
