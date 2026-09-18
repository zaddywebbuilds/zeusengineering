import type { Metadata } from "next";
import { Img } from "@/components/ui/Img";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { ConceptNotice } from "@/components/ui/ConceptNotice";
import { solutions } from "@/data/solutions";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Solutions",
  description:
    "Modular data centers, AI infrastructure, Bitcoin infrastructure, hosted mining and energy integration — the five areas ZEUS Engineering builds in.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        label="Solutions"
        title={"What ZEUS\nbuilds."}
        lede="Five areas, one underlying capability: getting power, cooling and control right so that dense compute can run continuously in a demanding climate."
        crumbs={[{ label: "Home", href: "/" }]}
        media={{
          image: "/images/clean/asic.webp",
          alt: "An ASIC mining unit against a circuit-board backdrop",
          label: "Compute hardware",
        }}
      />

      <div className="bg-canvas">
        {solutions.map((solution) => (
          <Link
            key={solution.id}
            href={solution.href}
            className="group block border-b border-[var(--rule)] transition-colors duration-300 hover:bg-linen"
          >
            <div className="shell grid grid-cols-1 items-center gap-8 py-12 lg:grid-cols-[6rem_1fr_minmax(0,24rem)_3rem] lg:gap-10 lg:py-11">
              <span className="tech-label text-slate-dim">{solution.index}</span>

              <div>
                <h2 className="display text-[clamp(2rem,4vw,3.25rem)] leading-[0.95]">
                  {solution.label}
                </h2>
                <p className="tech-label mt-4 text-ochre/70">
                  {solution.tagline}
                </p>
                <p className="mt-5 max-w-[48ch] leading-relaxed text-slate">
                  {solution.summary}
                </p>
              </div>

              <div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] border border-[var(--rule)]">
                  <Img
                    src={solution.image}
                    alt={solution.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 24rem"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                {solution.imageIsConcept && (
                  <span className="mt-2 block">
                    <ConceptNotice>Concept visualisation</ConceptNotice>
                  </span>
                )}
              </div>

              <span
                aria-hidden
                className="hidden text-xl transition-transform duration-200 group-hover:translate-x-1 lg:block"
              >
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
