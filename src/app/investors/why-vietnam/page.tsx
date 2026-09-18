import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import { vietnamPoints } from "@/data/vietnam";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Why Vietnam",
  description:
    "ZEUS Engineering's argument for building compute infrastructure in Vietnam — capex, power rates, sunlight, policy, logistics and tax, with the company's own caveats.",
  path: "/investors/why-vietnam",
});

export default function WhyVietnamPage() {
  return (
    <>
      <PageHeader
        index="04"
        label="Investor relations"
        title={"Why Vietnam."}
        lede="ZEUS's case for where it builds. These are the company's arguments, presented as such — and where ZEUS's own material flags that a claim needs re-verification, that flag is carried through rather than dropped."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Investors", href: "/investors" },
        ]}
        media={{
          image: "/images/site/solar.webp",
          alt: "Solar array at sunrise",
          label: "Solar generation",
        }}
      />

      <Section>
        <div className="grid grid-cols-1 gap-px bg-[var(--rule)] md:grid-cols-2">
          {vietnamPoints.map((point) => (
            <article key={point.index} className="reveal bg-graphite p-8 lg:p-10">
              <div className="flex items-center gap-4">
                <span className="tech-label text-steel-dim">{point.index}</span>
                <span aria-hidden className="h-px w-10 bg-amber/60" />
              </div>

              <h2 className="display mt-6 text-[clamp(1.5rem,2.4vw,2rem)] leading-none">
                {point.title}
              </h2>

              <p className="mt-5 max-w-[46ch] leading-relaxed text-steel">
                {point.body}
              </p>

              {point.caveat && (
                <p className="mt-6 border-l border-amber/40 pl-4 text-sm leading-relaxed text-steel-dim">
                  {point.caveat}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="reveal mt-12 max-w-[72ch] border-l-2 border-amber/50 bg-carbon p-7">
          <TechLabel className="mb-4">On this page</TechLabel>
          <p className="text-sm leading-relaxed text-steel">
            No market-size statistics, growth rates or third-party forecasts
            appear here. ZEUS has not supplied verified external figures, so
            this page makes its case qualitatively rather than borrowing numbers
            it cannot source. Regulatory and tax statements are ZEUS&rsquo;s own
            and should be verified with a qualified adviser.
          </p>
        </div>

        <div className="reveal mt-14 flex flex-wrap items-center gap-4">
          <Button href="/investors/the-ask">The ask</Button>
          <Button href="/contact?intent=invest" variant="secondary">
            Investor enquiry
          </Button>
        </div>
      </Section>
    </>
  );
}
