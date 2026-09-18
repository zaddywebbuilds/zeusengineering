import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getPillar } from "@/data/technology";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Power Architecture",
  description:
    "ZEUS Engineering power architecture - grid integration, solar generation, distribution and grid load balancing for high-density compute.",
  path: "/technology/power",
});

const blocks = [
  { t: "Grid integration", b: "Systems are designed to integrate with existing power infrastructure rather than replace it. Scaling capacity toward 1 MW and then 2 MW is a deliberate objective: it is the threshold at which ZEUS expects to access wholesale power rates in Vietnam and reduce operating expense." },
  { t: "Solar generation", b: "Solar supplements grid supply rather than replacing it. ZEUS reports 20 kW peak solar today; the expansion plan targets up to 500 kW, with an estimate of up to 10% saving on overall power expenses." },
  { t: "Distribution", b: "Power management and distribution sit between the supplies and the racks. This is where a mixed grid-and-solar input becomes a single predictable supply." },
  { t: "Flexible load", b: "In the SSMDC concept the site behaves as a grid-friendly load: drawing excess power when available, idling when the grid is under peak demand." },
];

export default function Page() {
  const pillar = getPillar("power");

  return (
    <>
      <PageHeader
        index="01"
        label="Technology"
        title={"Grid and solar\ninto compute."}
        lede={pillar?.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Technology", href: "/technology" },
        ]}
        media={{
          image: "/images/site/substation.webp",
          alt: "Electrical substation equipment",
          label: "Power distribution",
          note: undefined,
        }}
      />

      <Section>
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
          {blocks.map((block, i) => (
            <div key={block.t} className="reveal">
              <div className="flex items-center gap-4">
                <span className="tech-label text-steel-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="h-px w-10 bg-amber/60" />
              </div>
              <h2 className="display mt-5 text-[1.75rem] leading-none">
                {block.t}
              </h2>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-steel">
                {block.b}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 flex flex-wrap items-center gap-4">
          <Button href="/technology" variant="secondary">
            All four pillars
          </Button>
          <Button href="/contact?intent=build">Build with Zeus</Button>
        </div>
      </Section>
    </>
  );
}
