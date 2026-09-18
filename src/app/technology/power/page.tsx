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
  { t: "Grid integration", b: "Systems are designed to integrate with existing power infrastructure rather than replace it. In the SSMDC node design the grid becomes a supplement rather than the primary supply, with on-site generation and storage carrying the continuous load." },
  { t: "Solar generation", b: "ZEUS reports 20 kWp at the operating prototype. The SSMDC node design targets 80–120 kWp with 300–500 kWh of usable battery, yielding an estimated 130–190 MWh a year in southern Vietnam." },
  { t: "DC-DC distribution", b: "Solar generates DC, batteries store DC and compute consumes DC. Keeping the path DC end to end removes the inverter and the server-side AC-DC stage — a stated 8–15% ongoing facility saving, with a practical 10–12% central case." },
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
        <div className="grid grid-cols-1 gap-x-12 gap-y-9 lg:grid-cols-2">
          {blocks.map((block, i) => (
            <div key={block.t} className="reveal">
              <div className="flex items-center gap-4">
                <span className="tech-label text-slate-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="h-px w-10 bg-ochre/60" />
              </div>
              <h2 className="display mt-5 text-[1.75rem] leading-none">
                {block.t}
              </h2>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-slate">
                {block.b}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-11 flex flex-wrap items-center gap-4">
          <Button href="/technology" variant="secondary">
            All four pillars
          </Button>
          <Button href="/contact?intent=build">Build with Zeus</Button>
        </div>
      </Section>
    </>
  );
}
