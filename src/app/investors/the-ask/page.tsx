import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import { theAsk, useOfFunds } from "@/data/ssmdc";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "The Ask",
  description:
    "ZEUS Engineering is raising $2.69M for an 18–24 month runway to multiple live SSMDC nodes. Full use-of-funds breakdown.",
  path: "/investors/the-ask",
});

export default function TheAskPage() {
  return (
    <>
      <PageHeader
        index="01"
        label="Investor relations"
        title={"What we're\nasking for."}
        lede="$2.69M for an 18–24 month runway to multiple live nodes — GPUs, the power plant that runs them, the land they sit on, and the team that builds them."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Investors", href: "/investors" },
        ]}
        status={{ value: "target", label: "Fundraising target" }}
        media={{
          image: "/images/clean/solar.webp",
          alt: "Rows of solar panels at sunset",
          label: "On-site generation",
        }}
      >
        <div className="reveal mt-12 flex items-baseline gap-3">
          <span className="numeral text-[clamp(4rem,10vw,8rem)] text-amber">
            {theAsk.value}
          </span>
          <span className="numeral text-4xl text-amber/60">{theAsk.unit}</span>
        </div>
        <p className="reveal mt-4 max-w-[52ch] text-sm leading-relaxed text-stone">
          {theAsk.note}
        </p>
      </PageHeader>

      <Section
        index="02"
        label="Use of funds"
        title={"Where it goes."}
        lede="ZEUS's own allocation. Every line is a plan contingent on the round completing."
      >
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <StatusBadge status="target" />
          <p className="max-w-[62ch] text-sm text-stone-dim">
            An intended allocation, not committed spend.
          </p>
        </div>

        {/* Table on desktop, stacked cards on mobile — same data, no scroll */}
        <div className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
          {useOfFunds.map((row, i) => (
            <div
              key={row.item}
              className="reveal grid grid-cols-1 gap-3 py-7 lg:grid-cols-[3rem_minmax(0,18rem)_8rem_minmax(0,1fr)] lg:items-baseline lg:gap-8"
            >
              <span className="tech-label text-stone-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="display text-[1.375rem] leading-none">
                {row.item}
              </h2>
              <p className="numeral text-2xl text-amber">{row.amount}</p>
              <p className="max-w-[54ch] text-sm leading-relaxed text-stone">
                {row.purpose}
              </p>
            </div>
          ))}

          <div className="grid grid-cols-1 gap-3 py-7 lg:grid-cols-[3rem_minmax(0,18rem)_8rem_minmax(0,1fr)] lg:items-baseline lg:gap-8">
            <span />
            <p className="tech-label">Total</p>
            <p className="numeral text-3xl text-amber">$2.69M</p>
            <p className="max-w-[54ch] text-sm text-stone-dim">
              Over an 18–24 month runway.
            </p>
          </div>
        </div>

        <div className="reveal mt-10 max-w-[72ch] border-l-2 border-[var(--rule-strong)] pl-6">
          <TechLabel className="mb-4">On compensation</TechLabel>
          <p className="text-sm leading-relaxed text-stone">
            ZEUS states that founder living wages are set at competitive senior
            technical rates in Vietnam, with full employer taxes and social
            insurance included, and notes that high-tech and AI expert
            incentives may apply.
          </p>
        </div>
      </Section>

      <Section
        index="03"
        label="What it buys"
        title={"Two nodes,\nstanding up."}
        tone="bark"
      >
        <div className="grid grid-cols-1 gap-px bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "GPUs", b: "24–32 H200-class per node, with servers, NVLink, networking and DC-input PSUs." },
            { t: "Power plant", b: "80–120 kWp solar and 300–500 kWh battery per node, plus the DC distribution plant." },
            { t: "Sites", b: "Land options and deposits in the Bà Rịa region, with permits and import clearance." },
            { t: "Runway", b: "18–24 months of team, R&D, duty and VAT buffer, insurance and contingency." },
          ].map((item) => (
            <div key={item.t} className="reveal bg-bark p-7">
              <h3 className="display text-[1.375rem] leading-none">{item.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-stone">{item.b}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 max-w-[72ch] border-l-2 border-amber/50 bg-soil p-7">
          <TechLabel className="mb-4">Not stated</TechLabel>
          <p className="text-sm leading-relaxed text-stone">
            No valuation, instrument, equity split or investor name appears on
            this site. ZEUS has not published them, and none is constructed
            here. No party has been stated to have committed, and the round is
            not stated to have closed.
          </p>
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center gap-4">
          <Button href="/contact?intent=invest">Investor enquiry</Button>
          <Button href="/investors/economics" variant="secondary">
            Node economics
          </Button>
        </div>
      </Section>
    </>
  );
}
