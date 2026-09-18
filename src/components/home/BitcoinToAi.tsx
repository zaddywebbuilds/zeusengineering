"use client";

import { useRef } from "react";
import { TechLabel } from "@/components/ui/TechLabel";
import { MediaPanel } from "@/components/ui/MediaPanel";
import { useGsapContext, gsap } from "@/components/motion/useGsap";

/**
 * Signature interaction #2 — the three-chapter narrative.
 *
 *   Bitcoin proved the infrastructure.
 *   AI expands the opportunity.
 *   Modular compute is the destination.
 *
 * Implemented as three stacked full-height chapters whose imagery scales
 * slowly on scrub. Not a scroll-jack: native scrolling is untouched, and with
 * motion disabled it reads as three ordinary editorial panels.
 */
const chapters = [
  {
    id: "bitcoin",
    index: "01",
    kicker: "The proving ground",
    title: "Bitcoin proved\nthe infrastructure.",
    body: "Machines at full load, continuously, in a tropical climate. Power density, heat rejection, efficiency and uptime stop being architecture diagrams and become the daily operating reality.",
    image: "/images/zeus-hero-poster.webp",
    alt: "Concept visualisation of a data hall aisle lined with racked mining hardware",
    concept: true,
    video: {
      desktop: "/video/zeus-hero-desktop.mp4",
      mobile: "/video/zeus-hero-mobile.mp4",
    },
  },
  {
    id: "ai",
    index: "02",
    kicker: "The opportunity",
    title: "AI expands\nthe opportunity.",
    body: "AI accelerators arrive with the same physical demands ZEUS already engineers around — more power per rack, more heat to move, less tolerance for downtime. The workload changes. The infrastructure problem does not.",
    image: "/images/site/consulting.webp",
    alt: "AI compute and analytics imagery",
    concept: false,
  },
  {
    id: "modular",
    index: "03",
    kicker: "The destination",
    title: "Modular compute\nis the destination.",
    body: "Rather than concentrating everything into one hyperscale site, ZEUS builds standardised units that can be manufactured, transported and commissioned close to available energy — and repeated.",
    image: "/images/concept/campus-aerial.webp",
    alt: "Concept visualisation of a modular compute campus with solar array beside the coast",
    concept: true,
  },
];

export function BitcoinToAi() {
  const root = useRef<HTMLDivElement>(null);

  useGsapContext(root, () => {
    root.current?.querySelectorAll<HTMLElement>("[data-chapter]").forEach((el) => {
      const media = el.querySelector("[data-chapter-media]");
      if (!media) return;

      gsap.fromTo(
        media,
        { scale: 1.16 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        },
      );
    });
  });

  return (
    <section
      ref={root}
      className="border-t border-[var(--rule)] bg-canvas"
      aria-labelledby="journey-heading"
    >
      <div className="shell pt-12 lg:pt-16">
        <TechLabel index="05" className="reveal mb-7">
          Where this goes
        </TechLabel>
        <h2 id="journey-heading" className="sr-only">
          From Bitcoin infrastructure to AI and modular compute
        </h2>
      </div>

      {chapters.map((chapter, i) => (
        <article
          key={chapter.id}
          data-chapter
          className="relative border-t border-[var(--rule)] first:border-t-0"
        >
          <div className="shell grid grid-cols-1 items-center gap-12 py-12 lg:grid-cols-2 lg:gap-12 lg:py-16">
            <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
              <div className="flex items-center gap-4">
                <span className="tech-label text-slate-dim">
                  {chapter.index}
                </span>
                <span
                  aria-hidden
                  className="draw-line h-px w-16 bg-ochre"
                  style={{ transitionDelay: "150ms" }}
                />
                <TechLabel>{chapter.kicker}</TechLabel>
              </div>

              <h3 className="display h-sub mt-7 max-w-[15ch]">
                {chapter.title.split("\n").map((line, li) => (
                  <span className="mask-line" key={li}>
                    <span style={{ transitionDelay: `${li * 90}ms` }}>
                      {line}
                    </span>
                  </span>
                ))}
              </h3>

              <p className="reveal mt-8 max-w-[50ch] text-lg leading-relaxed text-slate">
                {chapter.body}
              </p>
            </div>

            <div
              data-chapter-media
              className={i % 2 === 1 ? "lg:order-1" : undefined}
            >
              <MediaPanel
                className="reveal"
                image={chapter.image}
                alt={chapter.alt}
                video={chapter.video}
                label={chapter.kicker}
                note={chapter.concept ? "Concept visualisation" : undefined}
                aspect="video"
              />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
