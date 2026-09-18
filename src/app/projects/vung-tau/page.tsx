import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, RuleList } from "@/components/ui/Section";
import { MetricRow } from "@/components/ui/MetricRow";
import { MediaPanel } from "@/components/ui/MediaPanel";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/company";
import { currentOperations, thermalApproach } from "@/data/metrics";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `${site.name}, Project 001`,
  description:
    "ZEUS Engineering's operating site in Ba Ria, Vietnam: a reported 100 kW facility on 300 m² with 20 kW peak solar.",
  path: `/projects/${site.slug}`,
});

const sections = [
  {
    t: "Overview",
    b: "ZEUS reports operating a 100 kW facility on a 300 m² site in the Vung Tau / Ba Ria region of southern Vietnam, running Bitcoin mining hardware and hosting client-owned equipment.",
  },
  {
    t: "Location",
    b: "Southern Vietnam, in the Bà Rịa region. The area is central to the plan: the first SSMDC nodes are targeted for the same region, chosen for its solar resource.",
  },
  {
    t: "The challenge",
    b: "High-density compute at full load, continuously, in a tropical climate, where ambient conditions remove thermal headroom and power cost is the operating margin rather than an overhead line.",
  },
  {
    t: "Power",
    b: "A 100 kW facility supplied from the grid and supplemented by on-site solar generation, with power management sitting between the supplies and the racks.",
  },
  {
    t: "Solar",
    b: "20 kW peak solar as reported by ZEUS. The SSMDC node design that follows this prototype targets 80–120 kWp with 300–500 kWh of usable battery storage.",
  },
  {
    t: "Compute",
    b: "More than 1 PH of peak hash power across company-owned ASIC hardware and hosted client machines.",
  },
  {
    t: "Operations",
    b: "Maintenance is handled on site using ZEUS's own tooling, test and repair equipment. Hosted clients are offered monitoring of equipment status and performance.",
  },
];

export default function ProjectPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Projects", path: "/projects" },
              { name: site.name, path: `/projects/${site.slug}` },
            ]),
          ),
        }}
      />

      <PageHeader
        label={site.projectId}
        title={site.name}
        lede={`${site.province}, ${site.country}. The site where the engineering is proven, finite power, continuous load, and a climate that punishes anything under-specified.`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
        ]}
        status={{ value: "zeus-reported", label: "Operating" }}
        media={{
          image: "/images/concept/campus-aerial.webp",
          alt: "Concept visualisation of a ZEUS site: containerised units, a solar array and a compute hall beside the coast",
          label: site.projectId,
          note: "Concept visualisation",
        }}
      />

      <Section index="01" label="Reported figures" title={"The record."}>
        <MetricRow facts={currentOperations} />
      </Section>

      <Section
        index="02"
        label="Technical summary"
        title={"How it\nis built."}
        tone="linen"
      >
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-2">
          {sections.map((s, i) => (
            <div key={s.t} className="reveal">
              <div className="flex items-center gap-4">
                <span className="tech-label text-slate-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="h-px w-10 bg-ochre/60" />
              </div>
              <h2 className="display mt-5 text-[1.625rem] leading-none">
                {s.t}
              </h2>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-slate">
                {s.b}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section index="03" label="Thermal" title={"Managing\nthe heat."}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-12">
          <div>
            <RuleList items={[...thermalApproach]} />
            <p className="mt-8 max-w-[54ch] text-sm leading-relaxed text-slate-dim">
              ZEUS&rsquo;s published description of its approach. No rated
              operating temperature, humidity limit, PUE figure or uptime
              guarantee is claimed for this site.
            </p>
          </div>

          <MediaPanel
            className="reveal"
            image="/images/real/hardware-intake.webp"
            alt="Pallets of Antminer ASIC units, shrink-wrapped and awaiting commissioning in a ZEUS warehouse"
            label="Hardware intake, 2023"
            note="ZEUS photograph"
            aspect="video"
          />
        </div>
      </Section>

      {/* Provenance, stated plainly rather than hidden in a footer */}
      <Section tone="linen">
        <div className="max-w-[64ch] border-l-2 border-ochre/50 pl-6">
          <TechLabel className="mb-4">On the imagery</TechLabel>
          <p className="text-sm leading-relaxed text-slate">
            The wide visualisations on this page are cinematic concept renders
            commissioned for the brand. They are not photographs of the
            operating site, and they depict a facility considerably larger than
            the 300 m² ZEUS reports. The hardware intake image above is a real
            ZEUS photograph. More site photography will replace the renders.
          </p>
        </div>

        <div className="reveal mt-12 flex flex-wrap items-center gap-4">
          <Button href="/investors">Investor relations</Button>
          <Button href="/technology" variant="secondary">
            The technology
          </Button>
        </div>
      </Section>
    </>
  );
}
