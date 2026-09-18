import { TechLabel } from "@/components/ui/TechLabel";
import { MaskedHeading } from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

/**
 * The turn from cinema into interface. Deliberately spare: one statement, one
 * paragraph, and the three-word spine of the whole narrative.
 */
export function EnergyToCompute() {
  return (
    <section
      className="tech-grid relative border-t border-[var(--rule)] bg-graphite"
      aria-labelledby="narrative-heading"
    >
      <div className="shell py-24 lg:py-36">
        <TechLabel index="01" className="reveal mb-7">
          Positioning
        </TechLabel>

        <MaskedHeading
          text={"From energy\nto compute."}
          className="h-section max-w-[12ch]"
        />
        <h2 id="narrative-heading" className="sr-only">
          From energy to compute
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <p className="reveal text-xl leading-relaxed text-engineering lg:text-2xl">
            Founded in {company.founded}, ZEUS Engineering is {company.descriptor}.
          </p>

          <div className="reveal space-y-6 text-steel">
            <p className="leading-relaxed">
              While much of the industry concentrates resources into ever-larger
              hyperscale facilities, ZEUS has deliberately taken a different
              approach: highly efficient, modular, decentralised infrastructure
              built close to available energy.
            </p>
            <p className="leading-relaxed">
              Standardised modular designs can be deployed in months rather than
              years. They contain the impact of an individual system failure.
              And they let both small and large investors participate in digital
              infrastructure without the barriers of large-scale development.
            </p>
          </div>
        </div>

        {/* The spine */}
        <div className="reveal mt-20 grid grid-cols-1 gap-px bg-[var(--rule)] sm:grid-cols-3">
          {[
            { word: "Energy", note: "Grid and solar, managed as one supply." },
            { word: "Infrastructure", note: "Power, cooling, enclosure, control." },
            { word: "Compute", note: "Bitcoin today. AI and modular next." },
          ].map((item, i) => (
            <div key={item.word} className="bg-graphite px-0 py-8 sm:px-8">
              <span className="tech-label text-steel-dim">
                0{i + 1}
              </span>
              <p className="display mt-4 text-[clamp(1.75rem,3vw,2.5rem)] leading-none">
                {item.word}
              </p>
              <p className="mt-4 max-w-[26ch] text-sm leading-relaxed text-steel">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
