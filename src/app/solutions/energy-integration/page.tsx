import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { SystemDiagramStatic } from "@/components/diagrams/SystemDiagramStatic";
import { Button } from "@/components/ui/Button";
import { TechLabel } from "@/components/ui/TechLabel";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Energy Integration",
  description:
    "Grid supply and solar generation managed as one system — ZEUS Engineering's approach to reducing the operating cost of high-density compute in Vietnam.",
  path: "/solutions/energy-integration",
});

export default function EnergyIntegrationPage() {
  return (
    <>
      <PageHeader
        index="05"
        label="Solutions"
        title={"Compute starts\nwith power."}
        lede="ZEUS's systems are designed to integrate with existing power infrastructure while leveraging renewable energy — particularly solar — to reduce operating costs and improve energy efficiency."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
        ]}
        media={{
          image: "/images/site/solar.webp",
          alt: "Solar array at sunrise",
          label: "Solar generation",
        }}
      />

      <Section
        index="06"
        label="The flow"
        title={"Grid and solar,\nmanaged as one."}
        lede="Two supplies, combined and managed before anything reaches compute — and a control layer that feeds back into how power is allocated."
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] lg:gap-12">
          <div className="border border-[var(--rule)] bg-bark p-6 lg:p-8">
            <TechLabel className="mb-6">Energy flow</TechLabel>
            <SystemDiagramStatic />
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="display text-[1.75rem] leading-none">
                Grid integration
              </h3>
              <p className="mt-4 leading-relaxed text-stone">
                Systems are designed to work with the power infrastructure that
                already exists rather than replace it — and, in the SSMDC node
                design, to lean on it as little as possible. On-site generation
                and storage reduce both energy cost and grid dependency.
              </p>
            </div>

            <div>
              <h3 className="display text-[1.75rem] leading-none">
                Solar supplement
              </h3>
              <p className="mt-4 leading-relaxed text-stone">
                ZEUS reports 20 kWp of solar at the operating prototype. The
                SSMDC node design targets 80–120 kWp with 300–500 kWh of usable
                battery — enough to carry a 50–75 kW continuous IT load through
                the night in a strong solar region.
              </p>
              <div className="mt-5">
                <StatusBadge status="target" label="Node figures are design targets" />
              </div>
            </div>

            <div>
              <h3 className="display text-[1.75rem] leading-none">
                DC end to end
              </h3>
              <p className="mt-4 leading-relaxed text-stone">
                Solar generates DC. Batteries store DC. Compute consumes DC. The
                SSMDC keeps it that way, removing the inverter and the AC-DC
                stage inside every server — a stated 8–15% ongoing facility
                saving, with a practical 10–12% central case.
              </p>
            </div>

            <div>
              <h3 className="display text-[1.75rem] leading-none">
                Grid load balancing
              </h3>
              <p className="mt-4 leading-relaxed text-stone">
                The SSMDC concept treats compute as a flexible load: drawing
                excess power when the grid has it available, and idling when the
                grid is under peak load. A data centre that can throttle itself
                is a different proposition to one that cannot.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        index="07"
        label="Why it matters"
        title={"Power is\nthe margin."}
        tone="bark"
        lede="In mining, energy cost is not an overhead line — it is the business. The same is increasingly true of AI compute."
      >
        <div className="grid grid-cols-1 gap-px bg-[var(--rule)] sm:grid-cols-3">
          {[
            {
              t: "Efficient equipment",
              b: "The first lever: hardware that produces more per watt.",
            },
            {
              t: "Wholesale rates",
              b: "The second: consuming at a scale that changes the tariff.",
            },
            {
              t: "Renewable generation",
              b: "The third: producing some of the supply on site.",
            },
          ].map((item) => (
            <div key={item.t} className="reveal bg-bark p-7">
              <h3 className="display text-[1.375rem] leading-none">{item.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-stone">{item.b}</p>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 max-w-[68ch] text-sm leading-relaxed text-stone-dim">
          ZEUS publishes no renewable-energy percentage, bark reduction or
          environmental-saving figure, and none is stated here.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center gap-4">
          <Button href="/technology/power">Power architecture</Button>
          <Button href="/investors/why-vietnam" variant="secondary">
            Why Vietnam
          </Button>
        </div>
      </Section>
    </>
  );
}
