import { currentOperations, thermalApproach, assetValue } from "@/data/metrics";
import { MetricRow } from "@/components/ui/MetricRow";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { MaskedHeading } from "@/components/ui/SectionHeading";
import { MediaPanel } from "@/components/ui/MediaPanel";

/**
 * The proof section — the only place on the homepage where operating figures
 * appear. Expansion targets live in their own section further down, visually
 * and structurally separated so the two cannot be read as one set.
 *
 * The thermal block deliberately carries no numbers. ZEUS's published answer
 * on heat describes methods, not rated conditions, and inventing a figure to
 * fill the space is exactly what this site is built to avoid.
 */
export function Proof() {
  return (
    <section
      className="border-t border-[var(--rule)] bg-graphite"
      aria-labelledby="proof-heading"
    >
      <div className="shell py-24 lg:py-32">
        <div className="flex flex-wrap items-center gap-4">
          <TechLabel index="03" className="reveal">
            Operations
          </TechLabel>
          <StatusBadge status="zeus-reported" className="reveal" />
        </div>

        <MaskedHeading
          text={"Built through\noperation."}
          className="h-section mt-7 max-w-[14ch]"
        />
        <h2 id="proof-heading" className="sr-only">
          Operations
        </h2>

        <p className="reveal mt-8 max-w-[56ch] text-lg leading-relaxed text-steel">
          Engineering experience developed running high-density compute
          infrastructure in southern Vietnam — where power is finite, the air
          is hot and wet, and the hardware does not get to rest.
        </p>

        <MetricRow facts={currentOperations} className="mt-16" />
      </div>

      {/* Thermal management */}
      <div className="border-t border-[var(--rule)]">
        <div className="shell grid grid-cols-1 gap-14 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          <div>
            <TechLabel index="04" className="reveal mb-7">
              Thermal management
            </TechLabel>
            <MaskedHeading
              text={"Heat is the\nreal constraint."}
              className="h-sub max-w-[14ch]"
            />
            <p className="reveal mt-8 max-w-[48ch] text-lg leading-relaxed text-steel">
              In a tropical climate, cooling stops being a line item and becomes
              the constraint everything else is arranged around. Asked how it
              manages heat, ZEUS describes conventional airflow engineering
              rather than exotic hardware.
            </p>

            <ul className="reveal mt-12 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
              {thermalApproach.map((method, i) => (
                <li
                  key={method}
                  className="flex items-center gap-5 py-5"
                >
                  <span className="tech-label text-steel-dim">
                    0{i + 1}
                  </span>
                  <span
                    aria-hidden
                    className="h-px w-8 bg-amber/50"
                  />
                  <span className="text-lg text-engineering">{method}</span>
                </li>
              ))}
            </ul>

            <div className="reveal mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
              <StatusBadge status="zeus-reported" />
              <p className="max-w-[54ch] text-sm text-steel-dim">
                ZEUS&rsquo;s published description of its approach to heat. No
                rated operating temperature, humidity limit or uptime guarantee
                is claimed.
              </p>
            </div>

            {/* Asset value — attributed, and kept away from the projections */}
            <div className="reveal mt-12 border-t border-[var(--rule)] pt-10">
              <div className="flex items-baseline gap-1.5">
                <span className="numeral text-[clamp(2.75rem,5.5vw,4rem)]">
                  {assetValue.value}
                </span>
                <span className="numeral text-2xl text-steel">
                  {assetValue.unit}
                </span>
              </div>
              <p className="tech-label mt-3">{assetValue.label}</p>
              <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-steel-dim">
                {assetValue.note} Described by ZEUS; not independently audited.
              </p>
            </div>
          </div>

          <MediaPanel
            className="reveal"
            image="/images/concept/cooling-plant.webp"
            alt="Concept visualisation of external cooling plant and containerised units at a coastal site"
            video={{ desktop: "/video/zeus-plant.mp4" }}
            label="Cooling plant"
            note="Concept visualisation"
            aspect="portrait"
          />
        </div>
      </div>
    </section>
  );
}
