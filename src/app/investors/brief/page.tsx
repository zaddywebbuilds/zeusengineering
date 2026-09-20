import type { Metadata } from "next";
import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { PrintButton } from "@/components/investors/PrintButton";
import { company, site } from "@/data/company";
import { currentOperations } from "@/data/metrics";
import {
  nodeCompute,
  nodeEconomics,
  prototypeUnitNote,
  theAsk,
  traction,
  useOfFunds,
} from "@/data/ssmdc";
import { roadmap } from "@/data/roadmap";
import { STATUS_DISCLOSURE, type Fact } from "@/data/facts";
import { pageMeta, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Investor Brief",
  description:
    "A one-page investor brief for ZEUS Engineering, generated from the same figures the rest of this site renders. Print or save as PDF.",
  path: "/investors/brief",
});

/** Compact figure row, sized for a printed page rather than a hero. */
function BriefFacts({ facts }: { facts: Fact[] }) {
  return (
    <div className="grid grid-cols-2 gap-px bg-[var(--rule)] lg:grid-cols-4">
      {facts.map((f) => (
        <div key={`${f.label}-${f.value}`} className="bg-canvas p-4">
          <p className="flex items-baseline gap-1">
            <span className="numeral text-[1.875rem]">{f.value}</span>
            {f.unit && (
              <span className="numeral text-base text-slate">{f.unit}</span>
            )}
          </p>
          <p className="tech-label mt-2 text-[0.6875rem]">{f.label}</p>
        </div>
      ))}
    </div>
  );
}

function Block({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`print-block border-t border-[var(--rule)] pt-6 ${className ?? ""}`}>
      <TechLabel className="mb-4 text-ink">{title}</TechLabel>
      {children}
    </section>
  );
}

export default function BriefPage() {
  const totalUse = useOfFunds.length;

  return (
    <div className="shell max-w-[62rem] pt-[112px] pb-16 lg:pt-[128px]">
      {/* Screen-only controls */}
      <div className="no-print mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--rule)] pb-8">
        <div>
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="tech-label hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden className="tech-label text-slate-dim">
                /
              </li>
              <li>
                <Link href="/investors" className="tech-label hover:text-ink">
                  Investors
                </Link>
              </li>
            </ol>
          </nav>
          <p className="max-w-[56ch] text-sm leading-relaxed text-slate">
            This brief is generated from the same data the rest of the site
            renders. It cannot disagree with the pages it summarises, which is
            the point of producing it here rather than maintaining a separate
            document.
          </p>
        </div>
        <PrintButton className="group inline-flex items-center gap-3 rounded-[3px] bg-ink px-6 py-3.5 text-sm font-medium tracking-wide text-canvas transition-colors duration-200 hover:bg-ink/90" />
      </div>

      {/* ---------- The brief itself ---------- */}
      <header className="print-block">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h1 className="display text-[clamp(2rem,5vw,3.25rem)] leading-none">
            {company.name}
          </h1>
          <p className="tech-label">Investor brief</p>
        </div>
        <p className="mt-4 max-w-[76ch] leading-relaxed text-slate">
          {company.legalName}. Modular infrastructure for Bitcoin, AI and
          high-density computing, engineered in {company.country}. Operating
          region {site.name}. Business registration {company.taxId}.
        </p>
      </header>

      <div className="mt-8 space-y-8">
        <Block title="The ask">
          <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
            <p className="flex items-baseline gap-1.5">
              <span className="numeral text-[clamp(2.5rem,6vw,4rem)] text-ochre">
                {theAsk.value}
              </span>
              <span className="numeral text-2xl text-ochre/70">
                {theAsk.unit}
              </span>
            </p>
            <div className="pb-2">
              <StatusBadge status="target" label="Fundraising target" />
              <p className="tech-label mt-3">
                18–24 month runway to live nodes
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-[76ch] text-sm leading-relaxed text-slate">
            {theAsk.note}
          </p>

          <table className="mt-6 w-full border-collapse text-sm">
            <caption className="sr-only">
              Use of funds, {totalUse} line items
            </caption>
            <thead>
              <tr className="border-y border-[var(--rule)]">
                <th scope="col" className="tech-label py-3 text-left">
                  Allocation
                </th>
                <th scope="col" className="tech-label py-3 text-right">
                  Amount
                </th>
                <th scope="col" className="tech-label py-3 pl-6 text-left">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {useOfFunds.map((row) => (
                <tr key={row.item} className="border-b border-[var(--rule)]">
                  <th
                    scope="row"
                    className="py-3 pr-4 text-left font-medium text-ink"
                  >
                    {row.item}
                  </th>
                  <td className="numeral py-3 text-right text-base whitespace-nowrap">
                    {row.amount}
                  </td>
                  <td className="py-3 pl-6 leading-relaxed text-slate">
                    {row.purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Block>

        <Block title="Traction, as reported by ZEUS">
          <BriefFacts facts={traction} />
          <p className="mt-4 max-w-[76ch] text-sm leading-relaxed text-slate-dim">
            {prototypeUnitNote}
          </p>
        </Block>

        <Block title="Operating facility, Vung Tau / Bà Rịa">
          <BriefFacts facts={currentOperations} />
          <p className="mt-4 max-w-[76ch] text-sm leading-relaxed text-slate-dim">
            {STATUS_DISCLOSURE["zeus-reported"]}
          </p>
        </Block>

        <Block title="SSMDC node design" className="print-break">
          <BriefFacts facts={nodeEconomics} />
          <div className="mt-px">
            <BriefFacts facts={nodeCompute} />
          </div>
          <p className="mt-4 max-w-[76ch] text-sm leading-relaxed text-slate-dim">
            {STATUS_DISCLOSURE.target} These figures describe a 400 m² class
            node that has not been built.
          </p>
        </Block>

        <Block title="Roadmap">
          <ol className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            {roadmap.map((m) => (
              <li
                key={m.id}
                className="print-block grid grid-cols-1 gap-x-6 gap-y-2 py-4 md:grid-cols-[7rem_minmax(0,1fr)_9rem]"
              >
                <p className="tech-label text-ink">{m.phase}</p>
                <div>
                  <p className="font-medium text-ink">
                    {m.title}
                    {m.figure && (
                      <span className="ml-2 text-slate">
                        {m.figure} {m.figureUnit}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate">
                    {m.body}
                  </p>
                </div>
                <div className="md:text-right">
                  <StatusBadge status={m.status} />
                </div>
              </li>
            ))}
          </ol>
        </Block>

        <Block title="How to read every figure above">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {(["zeus-reported", "target"] as const).map((s) => (
              <div key={s}>
                <dt>
                  <StatusBadge status={s} />
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-slate">
                  {STATUS_DISCLOSURE[s]}
                </dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block title="Sources and standing">
          <div className="print-url max-w-[76ch] space-y-3 text-sm leading-relaxed text-slate">
            <p>
              Every figure in this brief is taken from ZEUS Engineering&rsquo;s
              own documents and is listed, with its source, at{" "}
              <Link
                href="/sources"
                className="underline underline-offset-4 hover:text-ink"
              >
                {SITE_URL.replace(/^https?:\/\//, "")}/sources
              </Link>
              . Figures marked as reported by ZEUS have not been independently
              audited. Figures marked as a target describe intended development
              contingent on funding, and are neither current capability nor a
              commitment.
            </p>
            <p>
              Nothing in this brief is investment advice, an offer of
              securities, or a forecast of returns. No revenue, profitability,
              utilisation or return figure is published anywhere in it, because
              ZEUS has not published one.
            </p>
            <p>
              Enquiries: {company.email}. Prepared from material published by{" "}
              {company.legalName}.
            </p>
          </div>
        </Block>
      </div>
    </div>
  );
}
