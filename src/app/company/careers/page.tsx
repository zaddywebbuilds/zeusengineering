import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Careers",
  description:
    "ZEUS Engineering is a small engineering team in southern Vietnam working on power, thermal management and high-density compute infrastructure.",
  path: "/company/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHeader
        index="02"
        label="Company"
        title={"Small team.\nHard problems."}
        lede="ZEUS is a small, highly skilled team working on power, thermal management and continuous-operation compute infrastructure in a climate that makes all three harder."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Company", href: "/company" },
        ]}
      />

      <Section>
        {/* No invented vacancies. The honest empty state. */}
        <div className="border border-dashed border-[var(--rule-strong)] p-10 lg:p-16">
          <TechLabel className="mb-6">Open positions</TechLabel>
          <h2 className="display text-[clamp(1.75rem,4vw,3rem)] leading-none">
            No current openings.
          </h2>
          <p className="mt-6 max-w-[52ch] leading-relaxed text-steel">
            ZEUS has not published any vacancies. Rather than list roles that do
            not exist, this page stays empty until there is something real to
            put on it.
          </p>
          <p className="mt-6 max-w-[52ch] leading-relaxed text-steel">
            If you work in power systems, thermal engineering, industrial
            automation or data centre operations and want to be considered when
            something opens, write to us.
          </p>

          <Button href={`mailto:${company.email}?subject=General interest`} className="mt-9">
            Register general interest
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-[var(--rule)] sm:grid-cols-3">
          {[
            {
              t: "Where",
              b: `${company.region}, ${company.country}.`,
            },
            {
              t: "What we work on",
              b: "Power architecture, thermal management, automation, and modular compute infrastructure.",
            },
            {
              t: "How we work",
              b: "Leanly. ZEUS describes itself as experienced in allocating limited capital efficiently.",
            },
          ].map((item) => (
            <div key={item.t} className="reveal bg-graphite p-7">
              <h3 className="display text-[1.375rem] leading-none">{item.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-steel">{item.b}</p>
            </div>
          ))}
        </div>

        <p className="reveal mt-10 max-w-[64ch] text-sm text-steel-dim">
          No salary ranges, benefits or role descriptions are listed, because
          ZEUS has not published any.
        </p>
      </Section>
    </>
  );
}
