import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, StepList } from "@/components/ui/Section";
import { MediaPanel } from "@/components/ui/MediaPanel";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import { ssmdc } from "@/data/products";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Modular Data Centers",
  description:
    "Standardised, containerised compute infrastructure deployed in months rather than years — including the SSMDC, ZEUS's Small Solar Modular Data Centre concept.",
  path: "/solutions/modular-data-centers",
});

const deployment = [
  { step: "01", title: "Design", body: "A standardised unit specified against the site's available power and thermal conditions." },
  { step: "02", title: "Manufacture", body: "Built to a repeatable specification rather than assembled uniquely on site." },
  { step: "03", title: "Transport", body: "Containerised form factor, moved by conventional freight." },
  { step: "04", title: "Install", body: "Placed close to the available energy source rather than the other way round." },
  { step: "05", title: "Connect", body: "Tied into grid supply and any local solar generation." },
  { step: "06", title: "Operate", body: "Run under automation and remote monitoring." },
];

export default function ModularDataCentersPage() {
  return (
    <>
      <PageHeader
        index="01"
        label="Solutions"
        title={"Compute.\nContainerised."}
        lede="Rather than concentrating resources into massive single-site deployments, ZEUS develops standardised systems that can be manufactured, moved and commissioned close to available energy — and then repeated."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
        ]}
        media={{
          image: "/images/concept/campus-aerial.webp",
          alt: "Concept visualisation of a modular compute campus with containerised units and a solar array",
          label: "Modular campus",
          note: "Concept visualisation",
        }}
      />

      <Section
        index="02"
        label="Why modular"
        title={"Contain the\nblast radius."}
        lede="A modular approach reduces deployment risk, minimises the impact of an individual system failure, improves maintainability, and allows infrastructure to be placed closer to available energy sources."
      >
        <div className="grid grid-cols-1 gap-px bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Lower risk", b: "Deployment is incremental rather than all at once." },
            { t: "Contained failure", b: "One unit failing is not the whole site failing." },
            { t: "Maintainable", b: "Standard units mean standard parts and procedures." },
            { t: "Sited by energy", b: "Infrastructure moves to the power, not the reverse." },
          ].map((item) => (
            <div key={item.t} className="reveal bg-graphite p-7">
              <h3 className="display text-[1.375rem] leading-none">{item.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-steel">{item.b}</p>
            </div>
          ))}
        </div>

        <p className="reveal mt-10 max-w-[64ch] leading-relaxed text-steel">
          It also lowers the barrier to entry. Standardised units create
          opportunities for both small and large investors to participate in
          digital infrastructure without the commitments that come with
          large-scale development.
        </p>
      </Section>

      {/* SSMDC */}
      <Section tone="carbon">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <TechLabel index="03" className="reveal">
                {ssmdc.fullName}
              </TechLabel>
              <StatusBadge status="concept" className="reveal" />
            </div>

            <h2 className="display h-sub mt-7 max-w-[14ch]">
              <span className="mask-line">
                <span>Small footprint.</span>
              </span>
              <span className="mask-line">
                <span style={{ transitionDelay: "90ms" }}>Serious compute.</span>
              </span>
            </h2>

            <div className="reveal mt-8 space-y-5">
              {ssmdc.description.map((para) => (
                <p key={para.slice(0, 24)} className="leading-relaxed text-steel">
                  {para}
                </p>
              ))}
            </div>

            <dl className="reveal mt-10 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
              {ssmdc.specs?.map((group) => (
                <div key={group.group} className="py-6">
                  <dt className="tech-label">{group.group}</dt>
                  <dd className="mt-3">
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-steel">
                          <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-amber/60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="reveal mt-6 text-sm text-steel-dim">
              {ssmdc.statusNote}
            </p>
          </div>

          <div className="lg:sticky lg:top-[112px] lg:self-start">
            <MediaPanel
              className="reveal"
              image={ssmdc.image}
              alt={ssmdc.imageAlt}
              label="ZEUS engineering drawing"
              aspect="square"
            />
          </div>
        </div>
      </Section>

      <Section
        index="04"
        label="Deployment"
        title={"Design once.\nDeploy repeatedly."}
        lede="The sequence a standardised unit follows, from specification through to operation."
      >
        <StepList steps={deployment} />

        <div className="reveal mt-14 flex flex-wrap items-center gap-4">
          <Button href="/contact?intent=build">Build with Zeus</Button>
          <Button href="/technology" variant="secondary">
            See the technology
          </Button>
        </div>
      </Section>
    </>
  );
}
