import type { Metadata } from "next";
import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { MaskedHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { company, site } from "@/data/company";
import { currentOperations } from "@/data/metrics";
import {
  nodeCompute,
  nodeEconomics,
  theAsk,
  useOfFunds,
} from "@/data/ssmdc";
import { hostingFacts } from "@/data/hosting";
import type { Fact, FactStatus } from "@/data/facts";
import { vi, viStatusDisclosure, viStatusLabel } from "@/data/vi";
import { SITE_URL } from "@/lib/seo";

/**
 * The Vietnamese overview.
 *
 * `lang="vi"` is declared on the content wrapper rather than on <html>,
 * because a nested layout in the App Router cannot change the root element.
 * A `lang` attribute is valid on any element, and it is what screen readers
 * and search engines actually read for a language subtree.
 */

export const metadata: Metadata = {
  title: vi.meta.title,
  description: vi.meta.description,
  alternates: {
    canonical: `${SITE_URL}/vi`,
    languages: {
      "en-GB": SITE_URL,
      vi: `${SITE_URL}/vi`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title: vi.meta.title,
    description: vi.meta.description,
    url: `${SITE_URL}/vi`,
    siteName: company.name,
    type: "website",
    locale: "vi_VN",
  },
};

/** Figure grid with Vietnamese labels. Values come from the shared data. */
function ViFacts({
  facts,
  labels,
  columns = 4,
}: {
  facts: Fact[];
  labels: Record<string, string>;
  columns?: 2 | 4;
}) {
  return (
    <div
      className={`grid grid-cols-1 gap-px bg-[var(--rule)] sm:grid-cols-2 ${
        columns === 4 ? "lg:grid-cols-4" : ""
      }`}
    >
      {facts.map((f) => (
        <div key={`${f.label}-${f.value}`} className="reveal bg-canvas p-7">
          <p className="flex items-baseline gap-1.5">
            <span className="numeral text-[clamp(2.25rem,4.5vw,3.25rem)]">
              {f.value}
            </span>
            {f.unit && (
              <span className="numeral text-xl text-slate">{f.unit}</span>
            )}
          </p>
          <p className="tech-label mt-4">{labels[f.label] ?? f.label}</p>
        </div>
      ))}
    </div>
  );
}

function ViDisclosure({ status }: { status: FactStatus }) {
  return (
    <div className="reveal mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
      <StatusBadge status={status} label={viStatusLabel[status]} />
      <p className="max-w-[62ch] text-sm text-slate-dim">
        {viStatusDisclosure[status]}
      </p>
    </div>
  );
}

function ViSection({
  kicker,
  title,
  lede,
  tone = "canvas",
  children,
}: {
  kicker: string;
  title: string;
  lede?: string;
  tone?: "canvas" | "linen";
  children?: React.ReactNode;
}) {
  return (
    <section
      className={`border-t border-[var(--rule)] ${
        tone === "linen" ? "bg-linen" : "bg-canvas"
      }`}
    >
      <div className="shell py-12 lg:py-11">
        <div className="mb-10 max-w-[58ch]">
          <TechLabel className="reveal mb-6">{kicker}</TechLabel>
          <MaskedHeading text={title} className="h-sub" />
          {lede && (
            <p className="reveal mt-7 text-lg leading-relaxed text-slate">
              {lede}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function VietnamesePage() {
  const statuses: FactStatus[] = [
    "zeus-reported",
    "target",
    "projection",
    "concept",
  ];

  return (
    <div lang="vi">
      {/* Hero */}
      <section className="tech-grid border-b border-[var(--rule)] pt-[112px] lg:pt-[128px]">
        <div className="shell pb-12 lg:pb-16">
          <div className="flex flex-wrap items-center gap-4">
            <TechLabel className="reveal">{vi.hero.kicker}</TechLabel>
            <Link
              href="/"
              lang="en"
              hrefLang="en"
              className="tech-label border border-[var(--rule-strong)] px-3 py-1 transition-colors duration-200 hover:border-ink hover:text-ink"
            >
              {vi.nav.toEnglish}
            </Link>
          </div>

          <MaskedHeading
            text={vi.hero.title}
            as="h1"
            className="h-section mt-7 max-w-[16ch]"
          />

          <p className="reveal mt-8 max-w-[58ch] text-lg leading-relaxed text-slate">
            {vi.hero.lede}
          </p>
          <p className="reveal mt-6 max-w-[58ch] text-sm leading-relaxed text-slate-dim">
            {vi.hero.note}
          </p>
        </div>
      </section>

      {/* How to read a figure */}
      <ViSection
        kicker={vi.howToRead.kicker}
        title={vi.howToRead.title}
        lede={vi.howToRead.lede}
        tone="linen"
      >
        <div className="grid grid-cols-1 gap-px bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-4">
          {statuses.map((s) => (
            <div key={s} className="reveal bg-linen p-7">
              <StatusBadge status={s} label={viStatusLabel[s]} />
              <p className="mt-5 text-sm leading-relaxed text-slate">
                {viStatusDisclosure[s]}
              </p>
            </div>
          ))}
        </div>
        <p className="reveal mt-8">
          <Link
            href="/sources"
            className="text-sm underline underline-offset-4 hover:text-ochre"
          >
            {vi.howToRead.sourcesLink}
          </Link>
        </p>
      </ViSection>

      {/* Operating facility */}
      <ViSection
        kicker={vi.operating.kicker}
        title={vi.operating.title}
        lede={vi.operating.lede}
      >
        <ViFacts facts={currentOperations} labels={vi.operating.labels} />
        <ViDisclosure status="zeus-reported" />
        <p className="reveal mt-6 text-sm text-slate-dim">
          {site.province}, {company.country}.
        </p>
      </ViSection>

      {/* SSMDC */}
      <ViSection
        kicker={vi.ssmdc.kicker}
        title={vi.ssmdc.title}
        lede={vi.ssmdc.lede}
        tone="linen"
      >
        <div className="grid grid-cols-1 gap-px bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-4">
          {vi.ssmdc.pillars.map((p, i) => (
            <div key={p.t} className="reveal bg-linen p-7">
              <div className="flex items-center gap-4">
                <span className="tech-label text-slate-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="h-px w-8 bg-ochre/60" />
              </div>
              <h3 className="display mt-5 text-[1.5rem] leading-none">{p.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate">{p.b}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <TechLabel className="reveal mb-6">{vi.ssmdc.nodeTitle}</TechLabel>
          <p className="reveal mb-8 max-w-[58ch] leading-relaxed text-slate">
            {vi.ssmdc.nodeLede}
          </p>
          <ViFacts facts={nodeEconomics} labels={vi.ssmdc.labels} />
          <div className="mt-px">
            <ViFacts facts={nodeCompute} labels={vi.ssmdc.labels} />
          </div>
          <ViDisclosure status="target" />
        </div>
      </ViSection>

      {/* Hosted mining */}
      <ViSection
        kicker={vi.hosting.kicker}
        title={vi.hosting.title}
        lede={vi.hosting.lede}
      >
        <ViFacts
          facts={hostingFacts}
          labels={vi.hosting.labels}
          columns={2}
        />
        <ViDisclosure status="zeus-reported" />

        <div className="reveal mt-12">
          <TechLabel className="mb-6">{vi.hosting.includedTitle}</TechLabel>
          <ul className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            {vi.hosting.included.map((item, i) => (
              <li key={item} className="flex gap-6 py-4">
                <span className="tech-label shrink-0 text-slate-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-slate">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal mt-10 max-w-[72ch] border-l-2 border-ochre/50 bg-linen p-7">
          <p className="text-sm leading-relaxed text-slate">
            {vi.hosting.risk}
          </p>
        </div>
      </ViSection>

      {/* Investors */}
      <ViSection
        kicker={vi.investors.kicker}
        title={vi.investors.title}
        lede={vi.investors.lede}
        tone="linen"
      >
        <div className="reveal border border-[var(--rule)] bg-canvas p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="flex items-baseline gap-2">
              <span className="numeral text-[clamp(3rem,7vw,5rem)] text-ochre">
                {theAsk.value}
              </span>
              <span className="numeral text-3xl text-ochre/60">
                {theAsk.unit}
              </span>
            </span>
            <StatusBadge status="target" label={viStatusLabel.target} />
          </div>
          <p className="tech-label mt-4">{vi.investors.runway}</p>
        </div>

        <div className="reveal mt-10">
          <TechLabel className="mb-6">{vi.investors.useTitle}</TechLabel>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-y border-[var(--rule)]">
                <th scope="col" className="tech-label py-3 text-left">
                  {vi.investors.useCols.item}
                </th>
                <th scope="col" className="tech-label py-3 text-right">
                  {vi.investors.useCols.amount}
                </th>
              </tr>
            </thead>
            <tbody>
              {useOfFunds.map((row) => (
                <tr key={row.item} className="border-b border-[var(--rule)]">
                  <th
                    scope="row"
                    className="py-4 pr-4 text-left font-normal text-ink"
                  >
                    {vi.investors.items[row.item] ?? row.item}
                  </th>
                  <td className="numeral py-4 text-right text-base whitespace-nowrap">
                    {row.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ViDisclosure status="target" />

        <p className="reveal mt-8 max-w-[72ch] text-sm leading-relaxed text-slate-dim">
          {vi.investors.disclaimer}
        </p>
      </ViSection>

      {/* Sources */}
      <ViSection kicker={vi.sources.kicker} title={vi.sources.title}>
        <p className="reveal max-w-[68ch] leading-relaxed text-slate">
          {vi.sources.body}
        </p>
        <div className="reveal mt-9">
          <Button href="/sources" variant="secondary">
            {vi.sources.cta}
          </Button>
        </div>
      </ViSection>

      {/* Contact */}
      <ViSection
        kicker={vi.contact.kicker}
        title={vi.contact.title}
        lede={vi.contact.lede}
        tone="linen"
      >
        <div className="reveal flex flex-wrap items-center gap-6">
          <Button href="/contact">{vi.contact.cta}</Button>
          <p className="text-sm text-slate">
            <span className="tech-label mr-3">{vi.contact.emailLabel}</span>
            <a
              href={`mailto:${company.email}`}
              className="underline underline-offset-4 hover:text-ochre"
            >
              {company.email}
            </a>
          </p>
        </div>

        {/* Stated plainly rather than hidden. ZEUS owns its own language. */}
        <div className="reveal mt-12 max-w-[72ch] border-l-2 border-slate/30 bg-canvas p-7">
          <TechLabel className="mb-4">{vi.reviewNotice.title}</TechLabel>
          <p className="text-sm leading-relaxed text-slate">
            {vi.reviewNotice.body}
          </p>
        </div>
      </ViSection>
    </div>
  );
}
