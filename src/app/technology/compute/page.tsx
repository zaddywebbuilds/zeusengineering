import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getPillar } from "@/data/technology";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Compute",
  description:
    "ZEUS Engineering compute infrastructure - ASIC hardware running continuously today, and the same power and thermal envelope AI accelerators demand.",
  path: "/technology/compute",
});

const blocks = [
  { t: "Today: ASICs", b: "ZEUS reports more than 1 PH of peak hash power at a 100 kW facility. This is hardware at full load, continuously, with no idle window in which to recover thermally - the least forgiving version of the problem." },
  { t: "The transferable part", b: "What ZEUS has learned is not specific to mining silicon. Power delivery to the rack, heat rejection, monitoring and maintenance under continuous load are the same disciplines regardless of what the rack is computing." },
  { t: "Next: AI and beyond", b: "ZEUS frames Bitcoin mining, AI and future advanced computing as one class of infrastructure-intensive problem. The stated long-term direction is containerised units compatible with Bitcoin mining, AI and quantum-computing applications." },
  { t: "Honest position", b: "ZEUS does not operate an AI cluster today. The AI direction is a stated product direction supported by operating experience, not a deployed fleet." },
];

export default function Page() {
  const pillar = getPillar("compute");

  return (
    <>
      <PageHeader
        index="03"
        label="Technology"
        title={"Density\nunder load."}
        lede={pillar?.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Technology", href: "/technology" },
        ]}
        media={{
          image: "/images/site/bitcoin-mining.webp",
          alt: "ASIC mining hardware",
          label: "Compute hardware",
          note: undefined,
        }}
      />

      <Section>
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
          {blocks.map((block, i) => (
            <div key={block.t} className="reveal">
              <div className="flex items-center gap-4">
                <span className="tech-label text-steel-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="h-px w-10 bg-amber/60" />
              </div>
              <h2 className="display mt-5 text-[1.75rem] leading-none">
                {block.t}
              </h2>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-steel">
                {block.b}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 flex flex-wrap items-center gap-4">
          <Button href="/technology" variant="secondary">
            All four pillars
          </Button>
          <Button href="/contact?intent=build">Build with Zeus</Button>
        </div>
      </Section>
    </>
  );
}
