"use client";

import { Img } from "@/components/ui/Img";
import { useState } from "react";
import { ssmdc } from "@/data/products";
import { TechLabel } from "@/components/ui/TechLabel";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { MaskedHeading } from "@/components/ui/SectionHeading";
import { cx } from "@/lib/utils";

/**
 * Signature interaction #3 — the SSMDC layer explorer.
 *
 * Built as a layered visualisation over Zeus's own engineering drawing rather
 * than a Three.js model. The drawing is the most credible asset in the whole
 * project: it is genuinely theirs, it is already in the right visual language,
 * and it loads in 24 KB on a mid-range phone.
 *
 * Tabs are real buttons in a tablist, so this works on keyboard and reads
 * correctly to a screen reader.
 */
const layers = [
  {
    id: "power",
    label: "Power",
    accent: "amber",
    body: "80–120 kWp of on-site solar with 300–500 kWh of usable battery, carrying a 50–75 kW continuous IT load.",
    detail:
      "Kept DC end to end — solar to battery to distribution to compute — removing the inverter and the server-side AC-DC stage for a stated 8–15% ongoing saving.",
  },
  {
    id: "cooling",
    label: "Cooling",
    accent: "amber",
    body: "Thermal management designed for the harshest of environments.",
    detail:
      "Cooling capacity is what determines whether a compact enclosure can hold high-density hardware at full load in a tropical climate.",
  },
  {
    id: "compute",
    label: "Compute",
    accent: "cyan",
    body: "Bitcoin mining, AI compute, or a mix of both.",
    detail:
      "The enclosure is workload-agnostic: what changes between a mining deployment and an AI deployment is the hardware inside, not the infrastructure around it.",
  },
  {
    id: "control",
    label: "Control",
    accent: "cyan",
    body: "Full automation and remote monitoring.",
    detail:
      "Remote operation is what makes small distributed sites viable — a unit placed near available energy cannot depend on a permanent on-site crew.",
  },
] as const;

export function SsmdcExplorer() {
  const [active, setActive] = useState(0);
  const layer = layers[active];

  return (
    <section
      className="border-t border-[var(--rule)] bg-carbon"
      aria-labelledby="ssmdc-heading"
    >
      <div className="shell py-24 lg:py-32">
        <div className="flex flex-wrap items-center gap-4">
          <TechLabel index="07" className="reveal">
            {ssmdc.fullName}
          </TechLabel>
          <StatusBadge status="concept" className="reveal" />
        </div>

        <MaskedHeading
          text={"Small footprint.\nSerious compute."}
          className="h-section mt-7 max-w-[16ch]"
        />
        <h2 id="ssmdc-heading" className="sr-only">
          {ssmdc.fullName}
        </h2>

        <p className="reveal mt-8 max-w-[58ch] text-lg leading-relaxed text-steel">
          A 400 m² class node: solar, storage and compute in one package,
          deployed close to the energy rather than the other way round.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          {/* Drawing + layer highlight */}
          <div className="reveal relative overflow-hidden rounded-[4px] border border-[var(--rule)] bg-graphite">
            <div className="relative aspect-square">
              <Img
                src={ssmdc.image}
                alt={ssmdc.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain p-4"
              />
              {/* Layer wash — signals which subsystem is selected */}
              <div
                aria-hidden
                className={cx(
                  "pointer-events-none absolute inset-0 transition-colors duration-500",
                  layer.accent === "amber"
                    ? "bg-[radial-gradient(circle_at_50%_60%,rgba(244,166,35,0.16),transparent_62%)]"
                    : "bg-[radial-gradient(circle_at_50%_60%,rgba(85,199,217,0.16),transparent_62%)]",
                )}
              />
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-[var(--rule)] px-5 py-3">
              <TechLabel>ZEUS engineering drawing</TechLabel>
              <span className="tech-label text-steel-dim">
                0{active + 1} / 0{layers.length}
              </span>
            </div>
          </div>

          {/* Layer selector */}
          <div>
            <div
              role="tablist"
              aria-label="SSMDC subsystems"
              className="flex flex-col"
            >
              {layers.map((l, i) => (
                <button
                  key={l.id}
                  role="tab"
                  type="button"
                  id={`ssmdc-tab-${l.id}`}
                  aria-selected={active === i}
                  aria-controls={`ssmdc-panel-${l.id}`}
                  onClick={() => setActive(i)}
                  className={cx(
                    "group flex items-center gap-4 border-t border-[var(--rule)] py-5 text-left transition-colors duration-200 last:border-b",
                    active === i ? "text-engineering" : "text-steel hover:text-engineering",
                  )}
                >
                  <span
                    aria-hidden
                    className={cx(
                      "h-px transition-all duration-300",
                      active === i
                        ? l.accent === "amber"
                          ? "w-10 bg-amber"
                          : "w-10 bg-cyan"
                        : "w-5 bg-[var(--rule-strong)]",
                    )}
                  />
                  <span className="display text-[1.5rem] leading-none">
                    {l.label}
                  </span>
                </button>
              ))}
            </div>

            <div
              role="tabpanel"
              id={`ssmdc-panel-${layer.id}`}
              aria-labelledby={`ssmdc-tab-${layer.id}`}
              className="mt-8"
            >
              <p className="text-lg leading-relaxed text-engineering">
                {layer.body}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-steel">
                {layer.detail}
              </p>
            </div>
          </div>
        </div>

        <p className="reveal mt-12 max-w-[64ch] text-sm text-steel-dim">
          {ssmdc.statusNote}
        </p>
      </div>
    </section>
  );
}
