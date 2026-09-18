import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import { roadmap, roadmapDisclosure } from "@/data/roadmap";
import { pageMeta } from "@/lib/seo";
import { cx } from "@/lib/utils";

export const metadata: Metadata = pageMeta({
  title: "Expansion Roadmap",
  description:
    "From ZEUS Engineering's operating prototype through the first SSMDC nodes to a distributed network.",
  path: "/investors/roadmap",
});

/**
 * The roadmap.
 *
 * Three visual weights carry the distinction between what is running, what is
 * funded-if-the-round-closes, and what is a stated ambition. Every milestone
 * also states its status in words, so the distinction does not depend on
 * seeing the difference between a solid and a dashed rule.
 */
const weightStyles = {
  realised: {
    marker: "bg-engineering",
    rail: "bg-engineering/40",
    frame: "border-[var(--rule-strong)]",
    figure: "text-engineering",
  },
  "funded-target": {
    marker: "bg-amber",
    rail: "bg-amber/30",
    frame: "border-amber/30",
    figure: "text-amber",
  },
  ambition: {
    marker: "bg-steel-dim",
    rail: "bg-[var(--rule)]",
    frame: "border-dashed border-[var(--rule)]",
    figure: "text-steel",
  },
} as const;

export default function RoadmapPage() {
  return (
    <>
      <PageHeader
        index="02"
        label="Investor relations"
        title={"From here\nto there."}
        lede="One stage is running. The next is contingent on the raise closing. The third is a stated ambition. The page is built so you can tell which is which at a glance."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Investors", href: "/investors" },
        ]}
      />

      <Section>
        {/* Legend */}
        <div className="mb-14 flex flex-wrap gap-x-8 gap-y-4">
          {[
            { w: "realised", t: "Operating now" },
            { w: "funded-target", t: "Target — contingent on the raise" },
            { w: "ambition", t: "Stated long-term ambition" },
          ].map((item) => (
            <span key={item.w} className="flex items-center gap-3">
              <span
                aria-hidden
                className={cx(
                  "h-2.5 w-2.5",
                  weightStyles[item.w as keyof typeof weightStyles].marker,
                )}
              />
              <span className="tech-label">{item.t}</span>
            </span>
          ))}
        </div>

        <ol className="relative">
          {roadmap.map((milestone, i) => {
            const style = weightStyles[milestone.weight];
            const last = i === roadmap.length - 1;

            return (
              <li key={milestone.id} className="reveal relative flex gap-6 pb-12 lg:gap-10">
                {/* Rail */}
                <div className="relative flex w-3 shrink-0 justify-center">
                  <span
                    aria-hidden
                    className={cx("mt-2 h-3 w-3 shrink-0", style.marker)}
                  />
                  {!last && (
                    <span
                      aria-hidden
                      className={cx(
                        "absolute left-1/2 top-6 h-full w-px -translate-x-1/2",
                        style.rail,
                      )}
                    />
                  )}
                </div>

                <div
                  className={cx(
                    "flex-1 border-l-2 pl-6 lg:pl-8",
                    style.frame,
                  )}
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <TechLabel>{milestone.phase}</TechLabel>
                    <StatusBadge
                      status={milestone.status}
                      label={
                        milestone.weight === "ambition"
                          ? "Ambition"
                          : milestone.weight === "funded-target"
                            ? "Target"
                            : undefined
                      }
                    />
                  </div>

                  {milestone.figure && (
                    <p className="mt-5 flex items-baseline gap-2">
                      <span
                        className={cx(
                          "numeral text-[clamp(2.5rem,5.5vw,4rem)]",
                          style.figure,
                        )}
                      >
                        {milestone.figure}
                      </span>
                      {milestone.figureUnit && (
                        <span
                          className={cx("numeral text-2xl opacity-60", style.figure)}
                        >
                          {milestone.figureUnit}
                        </span>
                      )}
                    </p>
                  )}

                  <h2 className="display mt-4 text-[1.625rem] leading-none">
                    {milestone.title}
                  </h2>
                  <p className="mt-4 max-w-[58ch] leading-relaxed text-steel">
                    {milestone.body}
                  </p>
                  {milestone.points && (
                    <ul className="mt-5 space-y-2">
                      {milestone.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm text-steel-dim"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-px w-4 shrink-0 bg-[var(--rule-strong)]"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ol>

        <div className="reveal mt-6 border-l-2 border-amber/50 bg-carbon p-7">
          <TechLabel className="mb-4">Status</TechLabel>
          <p className="max-w-[72ch] text-sm leading-relaxed text-steel">
            {roadmapDisclosure}
          </p>
        </div>

        <div className="reveal mt-14 flex flex-wrap items-center gap-4">
          <Button href="/investors/economics">Node economics</Button>
          <Button href="/contact?intent=invest" variant="secondary">
            Investor enquiry
          </Button>
        </div>
      </Section>
    </>
  );
}
