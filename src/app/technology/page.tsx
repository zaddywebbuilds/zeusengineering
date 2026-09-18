import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { SystemDiagramStatic } from "@/components/diagrams/SystemDiagramStatic";
import { TechLabel } from "@/components/ui/TechLabel";
import { pillars } from "@/data/technology";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Technology",
  description:
    "Power, cooling, compute and control — the four pillars of ZEUS Engineering's infrastructure, and how they constrain one another.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <>
      <PageHeader
        label="Technology"
        title={"Engineered from\nfirst principles."}
        lede="Four pillars that only make sense together. Power determines what compute is possible; cooling determines whether it keeps running; control determines whether any of it can be operated remotely."
        crumbs={[{ label: "Home", href: "/" }]}
      />

      <Section
        index="01"
        label="The system"
        title={"One schematic."}
        lede="Grid and solar enter, power is managed and distributed, heat is rejected, compute runs, and a control layer watches all of it — feeding telemetry back into how power is allocated."
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-16">
          <div className="border border-[var(--rule)] bg-carbon p-6 lg:p-8">
            <TechLabel className="mb-6">Infrastructure schematic</TechLabel>
            <SystemDiagramStatic />
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <span className="tech-label flex items-center gap-2">
                <span className="h-2 w-2 bg-amber" aria-hidden />
                Energy
              </span>
              <span className="tech-label flex items-center gap-2">
                <span className="h-2 w-2 bg-cyan" aria-hidden />
                Compute
              </span>
            </div>
          </div>

          <div className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            {pillars.map((pillar) => (
              <Link
                key={pillar.id}
                href={pillar.href}
                className="group flex items-start gap-6 py-8 transition-colors duration-200"
              >
                <span className="tech-label shrink-0 pt-2 text-steel-dim">
                  {pillar.index}
                </span>
                <span className="flex-1">
                  <span className="flex items-center gap-4">
                    <span className="display text-[clamp(1.75rem,3vw,2.5rem)] leading-none transition-colors duration-200 group-hover:text-amber">
                      {pillar.label}
                    </span>
                    <span
                      aria-hidden
                      className={`h-px w-8 transition-all duration-300 group-hover:w-14 ${
                        pillar.accent === "energy" ? "bg-amber" : "bg-cyan"
                      }`}
                    />
                  </span>
                  <span className="mt-3 block max-w-[52ch] text-sm leading-relaxed text-steel">
                    {pillar.summary}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="shrink-0 pt-2 transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
