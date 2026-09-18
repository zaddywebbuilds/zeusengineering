import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { MetricRow } from "@/components/ui/MetricRow";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import { PowerPathDiagram } from "@/components/diagrams/PowerPathDiagram";
import {
  nodeEconomics,
  nodeCompute,
  nodeComputeDetail,
  dcPowerPath,
} from "@/data/ssmdc";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Node Economics",
  description:
    "What a 400 m² class SSMDC node produces and computes: 80–120 kWp solar, 300–500 kWh battery, 50–75 kW IT load and 24–32 H100/H200 GPUs.",
  path: "/investors/economics",
});

export default function EconomicsPage() {
  return (
    <>
      <PageHeader
        index="02"
        label="Investor relations"
        title={"What one node\nlooks like."}
        lede="A 400 m² class site in the Bà Rịa region. These are design figures for a node not yet built — a specification, not a measured result."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Investors", href: "/investors" },
        ]}
        status={{ value: "target", label: "Design target" }}
      />

      <Section index="03" label="Site economics" title={"Sun to silicon."}>
        <MetricRow facts={nodeEconomics} />
      </Section>

      {/* DC-DC — the actual technical differentiator */}
      <Section
        index="04"
        label="Technical edge"
        title={"Two conversions\nremoved."}
        tone="bark"
        lede="Most facilities convert DC solar to AC, then convert back to DC inside every server. The SSMDC keeps it DC end to end."
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,32rem)_minmax(0,1fr)] lg:gap-12">
          <div className="border border-[var(--rule)] bg-soil p-6 lg:p-8">
            <TechLabel className="mb-6">DC power path</TechLabel>
            <PowerPathDiagram />
          </div>

          <div>
            <div className="flex items-baseline gap-2">
              <span className="numeral text-[clamp(3rem,7vw,5rem)] text-sage">
                {dcPowerPath.saving}
              </span>
            </div>
            <p className="tech-label mt-4">Ongoing facility power saving</p>
            <p className="mt-2 text-sm text-stone-dim">
              With a practical {dcPowerPath.central} central case.
            </p>

            <p className="mt-8 max-w-[48ch] leading-relaxed text-stone">
              {dcPowerPath.body}
            </p>

            <div className="mt-8">
              <StatusBadge status="target" label="Design claim" />
              <p className="mt-4 max-w-[54ch] text-sm text-stone-dim">
                ZEUS states the architecture is validated on its prototype. The
                8–15% figure is the company&rsquo;s own estimate of
                facility-level saving, not an independently measured result.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        index="05"
        label="Compute capacity"
        title={"Per node."}
        lede="The recommended first-node configuration, sized to fit cleanly inside the 50–75 kW continuous IT envelope."
      >
        <MetricRow facts={nodeCompute} showDisclosure={false} />

        <div className="mt-px grid grid-cols-1 gap-px bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-4">
          {nodeComputeDetail.map((item) => (
            <div key={item.t} className="reveal bg-bark p-7">
              <h3 className="tech-label text-bone">{item.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{item.b}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
          <StatusBadge status="target" />
          <p className="max-w-[66ch] text-sm text-stone-dim">
            A specification for hardware not yet purchased. It delivers
            production inference and medium-scale training or fine-tuning
            capacity, and expands by adding nodes rather than enlarging a site.
          </p>
        </div>

        <div className="reveal mt-12 max-w-[72ch] border-l-2 border-amber/50 bg-bark p-7">
          <TechLabel className="mb-4">Important</TechLabel>
          <p className="text-sm leading-relaxed text-stone">
            No revenue, utilisation, pricing or return figure is published on
            this page, because ZEUS has not published one for the SSMDC. Nothing
            here is a forecast of investor returns, and nothing here is
            investment advice. Verify independently before relying on it.
          </p>
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center gap-4">
          <Button href="/investors/roadmap">Roadmap</Button>
          <Button href="/contact?intent=invest" variant="secondary">
            Investor enquiry
          </Button>
        </div>
      </Section>
    </>
  );
}
