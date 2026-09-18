import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, RuleList } from "@/components/ui/Section";
import { MetricRow } from "@/components/ui/MetricRow";
import { Button } from "@/components/ui/Button";
import { currentOperations, thermalApproach } from "@/data/metrics";
import { faq } from "@/data/faq";
import { FaqList } from "@/components/ui/FaqList";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Bitcoin Infrastructure",
  description:
    "ZEUS Engineering's Bitcoin mining infrastructure in Vietnam — ASIC deployment, power, cooling, monitoring and maintenance, run continuously.",
  path: "/solutions/bitcoin-infrastructure",
});

export default function BitcoinInfrastructurePage() {
  return (
    <>
      <PageHeader
        index="03"
        label="Solutions"
        title={"Built through\ncontinuous compute."}
        lede="Bitcoin is the workload that pays for the infrastructure and proves it at the same time. Machines at full load, continuously, with no idle period to recover thermally — the hardest version of the problem ZEUS is in business to solve."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
        ]}
        media={{
          image: "/images/zeus-hero-poster.webp",
          alt: "Concept visualisation of a compute hall aisle lined with racked mining hardware",
          video: {
            desktop: "/video/zeus-hero-desktop.mp4",
            mobile: "/video/zeus-hero-mobile.mp4",
          },
          label: "Compute hall",
          note: "Cinematic brand visualisation",
        }}
      />

      <Section
        index="04"
        label="Operations"
        title={"What running\nit involves."}
        lede="ZEUS reports operating a facility in the Vung Tau / Ba Ria region on the figures below."
      >
        <MetricRow facts={currentOperations} />
      </Section>

      <Section
        index="05"
        label="Capability"
        title={"The work\nbehind the hash."}
        tone="carbon"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <RuleList
            items={[
              "ASIC deployment, racking and commissioning.",
              "Power infrastructure and distribution to the rack.",
              "Thermal management sized for continuous full load.",
              "Monitoring of equipment status and performance.",
              "On-site maintenance using ZEUS's own tooling and test equipment.",
              "Hosted operation of client-owned hardware.",
            ]}
          />

          <div>
            <h3 className="display text-[1.75rem] leading-none">
              Managing heat
            </h3>
            <p className="mt-5 leading-relaxed text-steel">
              Asked directly how it manages heat, ZEUS describes conventional
              airflow engineering rather than exotic hardware — which is the
              more credible answer, and the one that scales.
            </p>
            <ul className="mt-8 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
              {thermalApproach.map((method, i) => (
                <li key={method} className="flex items-center gap-5 py-4">
                  <span className="tech-label text-steel-dim">0{i + 1}</span>
                  <span aria-hidden className="h-px w-8 bg-amber/50" />
                  <span className="text-engineering">{method}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm leading-relaxed text-steel-dim">
              No rated operating temperature, humidity limit or uptime
              guarantee is claimed anywhere on this site.
            </p>
          </div>
        </div>
      </Section>

      <Section
        index="06"
        label="Common questions"
        title={"The awkward\nquestions."}
        lede="ZEUS's own published answers on the economics and the hardware."
      >
        <FaqList items={faq.filter((f) => f.topic === "economics" || f.topic === "hardware")} />

        <div className="reveal mt-14 flex flex-wrap items-center gap-4">
          <Button href="/solutions/hosted-mining">Hosted mining</Button>
          <Button href="/solutions/ai-infrastructure" variant="secondary">
            Where this leads
          </Button>
        </div>
      </Section>
    </>
  );
}
