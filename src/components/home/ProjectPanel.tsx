import Link from "next/link";
import { site } from "@/data/company";
import { currentOperations } from "@/data/metrics";
import { TechLabel } from "@/components/ui/TechLabel";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { MediaPanel } from "@/components/ui/MediaPanel";
import { MaskedHeading } from "@/components/ui/SectionHeading";

/**
 * Project 001 — the operating site.
 *
 * Media sits beside the record rather than under it: the figures stay on
 * canvas at full contrast, and the visualisation is framed and labelled as
 * a concept rather than passing for site photography.
 */
export function ProjectPanel() {
  return (
    <section
      className="border-t border-[var(--rule)] bg-canvas"
      aria-labelledby="project-heading"
    >
      <div className="shell grid grid-cols-1 items-center gap-12 py-12 lg:grid-cols-2 lg:gap-12 lg:py-16">
        <div>
          <div className="flex flex-wrap items-center gap-4">
            <TechLabel className="reveal">{site.projectId}</TechLabel>
            <StatusBadge status="zeus-reported" label="Operating" className="reveal" />
          </div>

          <MaskedHeading
            text={site.name}
            className="h-section mt-6"
            as="h2"
          />
          <span id="project-heading" className="sr-only">
            Project 001, {site.name}
          </span>

          <p className="tech-label mt-4">
            {site.province} / {site.country}
          </p>

          <p className="reveal mt-8 max-w-[46ch] text-lg leading-relaxed text-slate">
            The site where the engineering is proven: finite power, continuous
            load, and a climate that punishes anything under-specified.
          </p>

          <dl className="reveal mt-12 grid grid-cols-2 gap-px bg-[var(--rule)]">
            {currentOperations.map((fact) => (
              <div key={fact.label} className="bg-canvas py-6 pr-6 sm:pl-6 sm:first:pl-0">
                <dd className="numeral text-[clamp(2rem,4vw,3rem)]">
                  {fact.value}
                  {fact.unit && (
                    <span className="text-slate"> {fact.unit}</span>
                  )}
                </dd>
                <dt className="tech-label mt-2 text-[0.625rem]">
                  {fact.label}
                </dt>
              </div>
            ))}
          </dl>

          <Link
            href={`/projects/${site.slug}`}
            className="group mt-10 inline-flex items-center gap-3 text-sm text-ink transition-colors duration-200 hover:text-ochre"
          >
            Explore project
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        <MediaPanel
          className="reveal"
          image="/images/concept/campus-aerial.webp"
          alt="Concept visualisation of a ZEUS site: containerised units, a solar array and a compute hall beside the coast"
          label={site.projectId}
          note="Concept visualisation"
          aspect="portrait"
        />
      </div>
    </section>
  );
}
