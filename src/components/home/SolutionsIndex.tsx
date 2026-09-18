import { Img } from "@/components/ui/Img";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import { TechLabel } from "@/components/ui/TechLabel";
import { MaskedHeading } from "@/components/ui/SectionHeading";
import { ConceptNotice } from "@/components/ui/ConceptNotice";

/**
 * Editorial panels rather than a grid of floating cards. Each row is a full
 * link target with a fine rule above it — the list reads as an index, which is
 * what it is.
 */
export function SolutionsIndex() {
  return (
    <section
      className="border-t border-[var(--rule)] bg-soil"
      aria-labelledby="solutions-heading"
    >
      <div className="shell py-14 lg:py-18">
        <TechLabel index="06" className="reveal mb-7">
          Solutions
        </TechLabel>
        <MaskedHeading
          text={"What ZEUS\nbuilds."}
          className="h-section max-w-[12ch]"
        />
        <h2 id="solutions-heading" className="sr-only">
          Solutions
        </h2>
      </div>

      <div className="border-t border-[var(--rule)]">
        {solutions.map((solution) => (
          <Link
            key={solution.id}
            href={solution.href}
            className="group block border-b border-[var(--rule)] transition-colors duration-300 hover:bg-bark"
          >
            <div className="shell grid grid-cols-1 items-center gap-8 py-10 lg:grid-cols-[6rem_1fr_minmax(0,22rem)_3rem] lg:gap-10 lg:py-12">
              <span className="tech-label text-stone-dim">
                {solution.index}
              </span>

              <div>
                <h3 className="display text-[clamp(1.75rem,3.6vw,3rem)] leading-[0.95]">
                  {solution.label}
                </h3>
                <p className="mt-3 max-w-[44ch] text-sm leading-relaxed text-stone">
                  {solution.summary}
                </p>
              </div>

              <div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] border border-[var(--rule)] lg:aspect-[16/9]">
                  <Img
                    src={solution.image}
                    alt={solution.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 22rem"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                {solution.imageIsConcept && (
                  <span className="mt-2 block">
                    <ConceptNotice>Concept visualisation</ConceptNotice>
                  </span>
                )}
              </div>

              <span
                aria-hidden
                className="hidden text-xl transition-transform duration-200 group-hover:translate-x-1 lg:block"
              >
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
