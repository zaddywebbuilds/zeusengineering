import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, StepList } from "@/components/ui/Section";
import { MetricRow } from "@/components/ui/MetricRow";
import { FaqList } from "@/components/ui/FaqList";
import { Button } from "@/components/ui/Button";
import { TechLabel } from "@/components/ui/TechLabel";
import {
  hostingFacts,
  hostingIncluded,
  hostingProcess,
  hostingDisclosure,
} from "@/data/hosting";
import { faq } from "@/data/faq";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Hosted Mining",
  description:
    "ZEUS Engineering runs and maintains client-owned mining equipment in Vietnam — power infrastructure, cooling, monitoring and maintenance, for a 10% service fee on earnings.",
  path: "/solutions/hosted-mining",
});

export default function HostedMiningPage() {
  return (
    <>
      <PageHeader
        index="04"
        label="Solutions"
        title={"Your hardware.\nOur infrastructure."}
        lede="You own the machines. ZEUS provides the site, the power, the cooling and the people — and runs them."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
        ]}
        media={{
          image: "/images/concept/zeus-plant-portrait.webp",
          alt: "Concept visualisation of ZEUS switchgear cabinets on a compute site",
          label: "Power plant",
          note: "Concept visualisation",
        }}
      />

      <Section
        index="05"
        label="The offer"
        title={"Infrastructure\nfirst."}
        lede="What ZEUS provides, and what it charges for providing it."
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
          <div>
            <TechLabel className="mb-6">Included</TechLabel>
            <ul className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
              {hostingIncluded.map((item, i) => (
                <li key={item} className="reveal flex items-center gap-5 py-5">
                  <span className="tech-label text-steel-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="h-px w-8 bg-amber/50" />
                  <span className="text-lg text-engineering">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="border border-[var(--rule)] bg-carbon p-7">
            <TechLabel className="mb-5">On pricing</TechLabel>
            <p className="text-sm leading-relaxed text-steel">
              ZEUS publishes its service fee — 10% of earnings — but has not
              published a fixed package price in the material available for this
              site. Rather than invent one, hosting is quoted per deployment.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-steel-dim">
              Scope depends on machine count, hardware type and term.
            </p>
            <Button
              href="/contact?intent=host"
              variant="secondary"
              className="mt-7 w-full justify-center"
            >
              Request a quote
            </Button>
          </aside>
        </div>

        <MetricRow
          facts={hostingFacts}
          columns={2}
          className="mt-16"
          showDisclosure={false}
        />
      </Section>

      <Section
        index="06"
        label="Process"
        title={"From enquiry\nto settlement."}
        tone="carbon"
      >
        <StepList steps={hostingProcess} />
      </Section>

      <Section index="07" label="Common questions" title={"Before you\ncommit."}>
        <FaqList
          items={faq.filter(
            (f) => f.topic === "economics" || f.topic === "hardware",
          )}
        />

        {/* Risk disclosure — required wherever hosting economics are discussed */}
        <div className="reveal mt-14 border-l-2 border-amber/50 bg-carbon p-7 lg:p-8">
          <TechLabel className="mb-4">Risk disclosure</TechLabel>
          <p className="max-w-[72ch] text-sm leading-relaxed text-steel">
            {hostingDisclosure}
          </p>
        </div>

        <div className="reveal mt-12">
          <Button href="/contact?intent=host">Discuss hosting with Zeus</Button>
        </div>
      </Section>
    </>
  );
}
