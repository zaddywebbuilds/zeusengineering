import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";
import { companyHistory, whyZeus } from "@/data/team";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "A private engineering company in southern Vietnam specialising in modular datacenter infrastructure, Bitcoin mining, AI and renewable energy.",
  path: "/company",
});

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        label="Company"
        title={"We build where\nenergy meets\ncompute."}
        lede={`Founded in ${company.founded}, ZEUS Engineering is ${company.descriptor}.`}
        crumbs={[{ label: "Home", href: "/" }]}
        media={{
          image: "/images/concept/zeus-plant-portrait.webp",
          alt: "ZEUS Engineering switchgear cabinets carrying the ZEUS wordmark",
          label: "Power plant",
          note: "Concept visualisation",
        }}
      />

      <Section
        index="01"
        label="Approach"
        title={"A deliberate\ndifference."}
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-12">
          <p className="reveal text-xl leading-relaxed text-bone">
            While much of the industry focuses on building ever-larger
            hyperscale facilities, we have deliberately taken a different
            approach.
          </p>
          <div className="reveal space-y-6 text-stone">
            <p className="leading-relaxed">
              We believe the future lies in highly efficient, modular and
              decentralised infrastructure. Rather than concentrating resources
              into massive single-site deployments, we develop scalable systems
              that prioritise precision engineering, automation, resilience and
              operational efficiency.
            </p>
            <p className="leading-relaxed">
              By using standardised modular designs, infrastructure can be
              deployed in months rather than years — letting customers and
              investors respond to opportunities in Bitcoin mining, AI computing
              and digital infrastructure as they appear.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission — the company's own words, given room */}
      <Section tone="bark">
        <div className="mx-auto max-w-[44ch] text-center">
          <TechLabel className="reveal mb-8">Our mission</TechLabel>
          <blockquote className="display text-[clamp(1.75rem,4vw,3rem)] leading-[1.05]">
            <span className="mask-line">
              <span>&ldquo;Leave every system safer,</span>
            </span>
            <span className="mask-line">
              <span style={{ transitionDelay: "80ms" }}>
                more efficient, more reliable,
              </span>
            </span>
            <span className="mask-line">
              <span style={{ transitionDelay: "160ms" }}>
                and more valuable than
              </span>
            </span>
            <span className="mask-line">
              <span style={{ transitionDelay: "240ms" }}>
                when we arrived.&rdquo;
              </span>
            </span>
          </blockquote>
          <p className="reveal mt-10 leading-relaxed text-stone">
            We don&rsquo;t aim to become a permanent fixture in your operation.
            We help when needed, transfer knowledge to your team, solve the
            problem, and move to the next challenge.
          </p>
          <p className="reveal mt-6 text-lg text-amber">
            {company.missionCoda}
          </p>
        </div>
      </Section>

      <Section index="02" label="History" title={"How we\ngot here."}>
        <ol className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
          {companyHistory.map((item, i) => (
            <li
              key={item.label}
              className="reveal grid grid-cols-1 gap-4 py-8 lg:grid-cols-[3rem_14rem_1fr] lg:gap-10"
            >
              <span className="tech-label text-stone-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="display text-[1.375rem] leading-none">
                {item.label}
              </h2>
              <p className="max-w-[58ch] leading-relaxed text-stone">
                {item.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="reveal mt-8 max-w-[64ch] text-sm text-stone-dim">
          ZEUS states these timings relative to its pitch rather than as
          calendar dates. They are reproduced that way here rather than
          converted into years we cannot verify.
        </p>
      </Section>

      <Section
        index="03"
        label="Why ZEUS"
        title={"What the team\nbrings."}
        tone="bark"
      >
        <ul className="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2">
          {whyZeus.map((item) => (
            <li key={item.slice(0, 24)} className="reveal flex gap-3 text-stone">
              <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-amber/60" />
              {item}
            </li>
          ))}
        </ul>

        <div className="reveal mt-10 flex flex-wrap items-center gap-4">
          <Button href="/company/leadership">Leadership</Button>
          <Link
            href="/company/careers"
            className="group inline-flex items-center gap-2 text-sm text-stone transition-colors duration-200 hover:text-bone"
          >
            Careers
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </Section>
    </>
  );
}
