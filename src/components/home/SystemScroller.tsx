"use client";

import { useRef, useState } from "react";
import { pillars } from "@/data/technology";
import { SystemDiagram } from "@/components/diagrams/SystemDiagram";
import { TechLabel } from "@/components/ui/TechLabel";
import { useGsapContext, ScrollTrigger } from "@/components/motion/useGsap";
import { cx } from "@/lib/utils";

/**
 * Signature interaction #1 — the sticky system section.
 *
 * On desktop the diagram pins and the stages advance with scroll. On mobile
 * and under reduced motion the same four stages render as a plain vertical
 * sequence with the diagram at its final state: no information is carried by
 * the animation alone.
 */
export function SystemScroller() {
  const root = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);

  useGsapContext(root, () => {
    const steps = gsapSteps();

    steps.forEach((el, i) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 62%",
        end: "bottom 62%",
        onToggle: (self) => {
          if (self.isActive) setStage(i);
        },
      });
    });

    function gsapSteps() {
      return Array.from(
        root.current?.querySelectorAll<HTMLElement>("[data-stage]") ?? [],
      );
    }
  });

  return (
    <section
      ref={root}
      className="relative border-t border-[var(--rule)] bg-graphite"
      aria-labelledby="system-heading"
    >
      <div className="shell py-24 lg:py-32">
        <TechLabel index="02" className="reveal mb-7">
          The system
        </TechLabel>
        <h2 id="system-heading" className="display h-section max-w-[18ch]">
          <span className="mask-line">
            <span>Power. Cooling.</span>
          </span>
          <span className="mask-line">
            <span style={{ transitionDelay: "90ms" }}>Compute. Control.</span>
          </span>
        </h2>
        <p className="reveal mt-8 max-w-[56ch] text-lg leading-relaxed text-steel">
          Not four services. One system, in which every stage constrains the
          next — and where the thing that fails first is almost never the
          silicon.
        </p>
      </div>

      <div className="shell grid grid-cols-1 gap-16 pb-24 lg:grid-cols-[1fr_minmax(0,460px)] lg:gap-24 lg:pb-32">
        {/* Stage copy */}
        <div>
          {pillars.map((pillar, i) => (
            <div
              key={pillar.id}
              data-stage={i}
              className="border-t border-[var(--rule)] py-12 first:border-t-0 first:pt-0 lg:min-h-[62vh] lg:py-20"
            >
              <div className="flex items-baseline gap-4">
                <span className="tech-label text-steel-dim">{pillar.index}</span>
                <span
                  className={cx(
                    "h-px w-12 transition-colors duration-500",
                    stage >= i
                      ? pillar.accent === "energy"
                        ? "bg-amber"
                        : "bg-cyan"
                      : "bg-[var(--rule)]",
                  )}
                  aria-hidden
                />
              </div>

              <h3
                className={cx(
                  "display mt-6 text-[clamp(2.75rem,7vw,5.5rem)] transition-colors duration-500",
                  stage >= i ? "text-engineering" : "text-steel-dim lg:text-steel-dim",
                )}
              >
                {pillar.label}
              </h3>

              <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-steel">
                {pillar.summary}
              </p>

              <div className="mt-6 space-y-4">
                {pillar.detail.map((para) => (
                  <p
                    key={para.slice(0, 32)}
                    className="max-w-[54ch] text-sm leading-relaxed text-steel-dim"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pinned diagram */}
        <div className="lg:sticky lg:top-[112px] lg:self-start">
          <div className="border border-[var(--rule)] bg-carbon p-6 lg:p-8">
            <div className="mb-6 flex items-center justify-between">
              <TechLabel>Infrastructure schematic</TechLabel>
              <span className="tech-label text-steel-dim">
                {String(Math.min(stage + 1, pillars.length)).padStart(2, "0")} /
                0{pillars.length}
              </span>
            </div>
            <SystemDiagram stage={stage} />
          </div>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            <span className="tech-label flex items-center gap-2">
              <span className="h-2 w-2 bg-amber" aria-hidden />
              Energy
            </span>
            <span className="tech-label flex items-center gap-2">
              <span className="h-2 w-2 bg-cyan" aria-hidden />
              Compute
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
