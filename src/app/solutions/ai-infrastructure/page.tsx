import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { MediaPanel } from "@/components/ui/MediaPanel";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import { ai1, s3xyAi } from "@/data/products";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Infrastructure",
  description:
    "The physical requirements of high-density AI compute, and how ZEUS Engineering's operating experience in Vietnam applies to them.",
  path: "/solutions/ai-infrastructure",
});

export default function AiInfrastructurePage() {
  return (
    <>
      <PageHeader
        index="02"
        label="Solutions"
        title={"Infrastructure\nfor intelligence."}
        lede="AI compute is a physical problem before it is a software one. The accelerators change; the power, the heat and the requirement to keep running do not."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
        ]}
        media={{
          image: "/images/site/consulting.webp",
          alt: "ZEUS Engineering AI consulting and analytics imagery",
          label: "AI compute",
        }}
      />

      {/* An honest statement of position, placed first rather than buried. */}
      <Section
        index="03"
        label="Where ZEUS actually is"
        title={"An engineering\nposition, not a\nfleet."}
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-bone">
              ZEUS does not operate a hyperscale AI cluster, and this site will
              not imply otherwise.
            </p>
            <p className="leading-relaxed text-stone">
              What ZEUS has is operating experience with hardware that runs at
              full load, continuously, in a hot and humid climate — the
              conditions under which power delivery, thermal management and
              remote monitoring stop being theoretical. Those are the same
              constraints that determine whether a rack of accelerators
              performs or throttles.
            </p>
            <p className="leading-relaxed text-stone">
              The company frames Bitcoin mining, AI and future advanced
              computing as one class of problem: infrastructure-intensive
              workloads requiring facilities, engineering, power and thermal
              management. That framing is the whole thesis behind the modular
              data centre direction.
            </p>
          </div>

          <aside className="border border-[var(--rule)] bg-bark p-7">
            <TechLabel className="mb-5">What is not claimed</TechLabel>
            <ul className="space-y-3 text-sm text-stone">
              {[
                "No GPU counts or cluster sizes.",
                "No AI customers or contracts.",
                "No inference or training benchmarks.",
                "No deployed AI capacity.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-stone-dim" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-stone-dim">
              Where ZEUS has not published a figure, this site designs around
              the absence rather than filling it.
            </p>
          </aside>
        </div>
      </Section>

      <Section
        index="04"
        label="The physical demands"
        title={"What an AI rack\nactually needs."}
        tone="bark"
      >
        <div className="grid grid-cols-1 gap-px bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Power", b: "More watts per rack, delivered cleanly and continuously." },
            { t: "Cooling", b: "More heat to move out of a smaller volume." },
            { t: "Connectivity", b: "Links that do not become the bottleneck." },
            { t: "Control", b: "Telemetry and remote operation as standard." },
          ].map((item) => (
            <div key={item.t} className="reveal bg-bark p-7">
              <h3 className="display text-[1.375rem] leading-none">{item.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-stone">{item.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Ai-1 — the strongest genuine AI asset ZEUS has published */}
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <TechLabel index="05" className="reveal">
                {ai1.fullName}
              </TechLabel>
              <StatusBadge status="concept" className="reveal" />
            </div>

            <h2 className="display h-sub mt-7 max-w-[12ch]">
              <span className="mask-line">
                <span>One panel.</span>
              </span>
              <span className="mask-line">
                <span style={{ transitionDelay: "90ms" }}>Off-grid compute.</span>
              </span>
            </h2>

            <div className="reveal mt-8 space-y-5">
              {ai1.description.map((para) => (
                <p key={para.slice(0, 24)} className="leading-relaxed text-stone">
                  {para}
                </p>
              ))}
            </div>

            <p className="reveal mt-6 text-sm text-stone-dim">
              {ai1.statusNote}
            </p>
          </div>

          <MediaPanel
            className="reveal"
            image={ai1.image}
            alt={ai1.imageAlt}
            label="ZEUS specification drawing"
            aspect="square"
          />
        </div>

        {/* Published component specification, transcribed from Zeus's own sheet */}
        <div className="mt-11 grid grid-cols-1 gap-px bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-3">
          {ai1.specs?.map((group) => (
            <div key={group.group} className="reveal bg-soil p-7">
              <h3 className="tech-label text-bone">{group.group}</h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-stone">
                    <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-sage/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-px grid grid-cols-1 gap-px bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-3">
          {ai1.features?.map((feature) => (
            <div key={feature.title} className="reveal bg-bark p-7">
              <h3 className="display text-[1.25rem] leading-none">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* S3XY Ai — deliberately small, and kept off the investor path */}
      <Section tone="bark">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] lg:gap-14">
        <div className="max-w-[64ch]">
          <div className="flex flex-wrap items-center gap-4">
            <TechLabel index="06" className="reveal">
              {s3xyAi.name}
            </TechLabel>
            <StatusBadge status="concept" label="Internal tool" className="reveal" />
          </div>
          <h2 className="display mt-6 text-[clamp(1.75rem,3vw,2.5rem)] leading-none">
            An in-house business AI.
          </h2>
          <div className="reveal mt-6 space-y-4">
            {s3xyAi.description.map((para) => (
              <p key={para.slice(0, 24)} className="leading-relaxed text-stone">
                {para}
              </p>
            ))}
          </div>
          <p className="reveal mt-6 text-sm text-stone-dim">
            An internal operations tool rather than infrastructure ZEUS sells.
            Listed here for completeness.
          </p>
        </div>

          <MediaPanel
            className="reveal self-start"
            image={s3xyAi.image}
            alt={s3xyAi.imageAlt}
            label="ZEUS brand artwork"
            aspect="square"
            sizes="(max-width: 1024px) 100vw, 18rem"
          />
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center gap-4">
          <Button href="/solutions/modular-data-centers">
            Modular data centers
          </Button>
          <Button href="/contact?intent=build" variant="secondary">
            Build with Zeus
          </Button>
        </div>
      </Section>
    </>
  );
}
