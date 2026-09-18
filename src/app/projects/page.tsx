import type { Metadata } from "next";
import Link from "next/link";
import { Img } from "@/components/ui/Img";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { TechLabel } from "@/components/ui/TechLabel";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ConceptNotice } from "@/components/ui/ConceptNotice";
import { site } from "@/data/company";
import { currentOperations } from "@/data/metrics";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Projects",
  description:
    "ZEUS Engineering's operating infrastructure. Project 001: a reported 100 kW facility on a 300 m² site in the Vung Tau / Ba Ria region, Vietnam.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Projects"
        title={"Where the\nengineering\nis proven."}
        lede="One operating site today. The architecture of this section is built to carry more as they come online — but it will not show projects that do not exist."
        crumbs={[{ label: "Home", href: "/" }]}
      />

      <Section>
        <Link
          href={`/projects/${site.slug}`}
          className="group grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12"
        >
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <TechLabel>{site.projectId}</TechLabel>
              <StatusBadge status="zeus-reported" label="Operating" />
            </div>
            <h2 className="display mt-6 text-[clamp(2.25rem,5vw,4rem)] leading-none transition-colors duration-200 group-hover:text-amber">
              {site.name}
            </h2>
            <p className="tech-label mt-4">
              {site.province} / {site.country}
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5">
              {currentOperations.map((fact) => (
                <div key={fact.label}>
                  <dd className="numeral text-2xl">
                    {fact.value}
                    {fact.unit && <span className="text-stone"> {fact.unit}</span>}
                  </dd>
                  <dt className="tech-label mt-1 text-[0.625rem]">
                    {fact.label}
                  </dt>
                </div>
              ))}
            </dl>

            <span className="mt-10 inline-flex items-center gap-3 text-sm">
              Explore project
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </div>

          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] border border-[var(--rule)]">
              <Img
                src="/images/concept/campus-aerial.webp"
                alt="Concept visualisation of a ZEUS site with containerised units, a solar array and a compute hall"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <span className="mt-2 block">
              <ConceptNotice />
            </span>
          </div>
        </Link>
      </Section>

      <Section tone="bark">
        <div className="max-w-[60ch]">
          <TechLabel className="mb-5">On this page</TechLabel>
          <p className="leading-relaxed text-stone">
            ZEUS has published one operating site. There is no Project 002 on
            this page because there is no Project 002 to show — the absence is
            the honest answer, and it is a more useful signal to an investor
            than a filled grid would be.
          </p>
        </div>
      </Section>
    </>
  );
}
