import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { MaskedHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import {
  claimGroups,
  notPublished,
  openQuestions,
  sourceDocuments,
} from "@/data/sources";
import { STATUS_DISCLOSURE, type FactStatus } from "@/data/facts";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Sources",
  description:
    "Every figure published on this site about ZEUS Engineering, its status, and the exact ZEUS source it came from. Including the claims we chose not to publish.",
  path: "/sources",
});

const statusOrder: FactStatus[] = [
  "current",
  "zeus-reported",
  "target",
  "projection",
  "concept",
];

export default function SourcesPage() {
  const totalClaims = claimGroups.reduce((n, g) => n + g.claims.length, 0);

  return (
    <>
      <PageHeader
        label="Claim audit"
        title={"Every number,\nand where\nit came from."}
        lede={`This site publishes ${totalClaims} figures about ZEUS Engineering. Each one is listed below with its status and the ZEUS source it was taken from. Nothing appears on this site that cannot appear on this page.`}
        crumbs={[{ label: "Home", href: "/" }]}
      />

      {/* Why this page exists. The argument, before the evidence. */}
      <Section
        index="01"
        label="Why this page exists"
        title={"The question\nthis answers."}
        lede="Infrastructure companies are judged on figures that are almost impossible for an outsider to check. The usual response is to publish them confidently and hope nobody asks. This is the other option."
      >
        <div className="grid grid-cols-1 gap-px bg-[var(--rule)] md:grid-cols-3">
          {[
            {
              t: "Nothing is unattributed",
              b: "Every figure traces to a named ZEUS document. A figure with no source is not softened or hedged, it is removed.",
            },
            {
              t: "Nothing is reconciled for ZEUS",
              b: "Where two ZEUS documents disagree, both are reproduced and the disagreement is stated openly rather than quietly resolved.",
            },
            {
              t: "The omissions are listed too",
              b: "The figures that were available and flattering, and left out anyway, are named at the bottom of this page.",
            },
          ].map((item) => (
            <div key={item.t} className="reveal bg-canvas p-8">
              <h3 className="display text-[1.5rem] leading-none">{item.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate">{item.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The status key */}
      <Section
        index="02"
        label="How to read a status"
        title={"Five kinds\nof statement."}
        tone="linen"
        lede="Every figure on this site carries one of these. The label is always a word, never a colour alone, so the distinction survives greyscale, colour blindness and a screen reader."
      >
        <div className="grid grid-cols-1 gap-px bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-3">
          {statusOrder.map((s) => (
            <div key={s} className="reveal bg-linen p-7">
              <StatusBadge status={s} />
              <p className="mt-5 text-sm leading-relaxed text-slate">
                {STATUS_DISCLOSURE[s]}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* The source documents */}
      <Section
        index="03"
        label="Sources"
        title={"The documents."}
        lede="Four ZEUS sources sit behind everything on this site."
      >
        <div className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
          {sourceDocuments.map((doc) => (
            <div
              key={doc.ref}
              className="reveal grid grid-cols-1 gap-x-8 gap-y-3 py-7 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.3fr)]"
            >
              <span className="numeral text-2xl text-ochre">{doc.ref}</span>
              <div>
                <h3 className="leading-snug text-ink">{doc.title}</h3>
                <p className="tech-label mt-2">{doc.date}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {doc.confidential && (
                    <span className="inline-flex border border-ochre/45 px-2.5 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ochre">
                      Confidential, never published here
                    </span>
                  )}
                  {doc.supersededBy && (
                    <span className="inline-flex border border-slate/30 px-2.5 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-slate">
                      Superseded by {doc.supersededBy}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate">
                {doc.provenance}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 max-w-[72ch] border-l-2 border-ochre/50 bg-linen p-7">
          <TechLabel className="mb-4">On the confidential document</TechLabel>
          <p className="text-sm leading-relaxed text-slate">
            One of these sources is marked confidential by ZEUS. Its facts
            inform the copy on this site, because they are ZEUS&rsquo;s own
            current position and the alternative is to publish superseded
            figures. The file itself is never linked, embedded, mirrored or
            offered for download anywhere here, and no page of it is
            reproduced.
          </p>
        </div>
      </Section>

      {/* The ledger */}
      {claimGroups.map((group, i) => (
        <Section
          key={group.id}
          index={String(i + 4).padStart(2, "0")}
          label="Claim ledger"
          title={group.title}
          tone={i % 2 === 0 ? "linen" : "canvas"}
          lede={group.intro}
        >
          <div className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            {group.claims.map((claim) => (
              <div
                key={`${claim.figure}-${claim.what}`}
                className="reveal grid grid-cols-1 gap-x-8 gap-y-3 py-6 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)_minmax(0,1.4fr)]"
              >
                <div>
                  <p className="numeral text-[1.75rem] leading-none">
                    {claim.figure}
                  </p>
                  <div className="mt-3">
                    <StatusBadge status={claim.status} />
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-ink">{claim.what}</p>
                <p className="text-sm leading-relaxed text-slate">
                  <span className="tech-label mr-2 text-ochre">
                    [{claim.ref}]
                  </span>
                  {claim.citation}
                </p>
              </div>
            ))}
          </div>
        </Section>
      ))}

      {/* Open questions. The most important section on the page. */}
      <section className="on-sage tech-grid border-t border-[var(--rule)]">
        <div className="shell py-12 lg:py-16">
          <TechLabel
            index={String(claimGroups.length + 4).padStart(2, "0")}
            className="reveal mb-6"
          >
            Open questions
          </TechLabel>
          <MaskedHeading
            text={"Where the sources\ndisagree."}
            as="h2"
            className="h-sub max-w-[18ch]"
          />
          <p className="reveal mt-7 max-w-[56ch] text-lg leading-relaxed text-slate">
            These are not resolved on this site. They are put to ZEUS.
          </p>

          <div className="mt-11 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            {openQuestions.map((q) => (
              <div key={q.id} className="reveal py-9">
                <h3 className="display text-[clamp(1.75rem,3vw,2.5rem)] leading-none">
                  {q.title}
                </h3>
                <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-3">
                  <div>
                    <TechLabel className="mb-3">The discrepancy</TechLabel>
                    <p className="text-sm leading-relaxed text-slate">{q.body}</p>
                  </div>
                  <div>
                    <TechLabel className="mb-3">
                      How this site handles it
                    </TechLabel>
                    <p className="text-sm leading-relaxed text-slate">
                      {q.handling}
                    </p>
                  </div>
                  <div>
                    <TechLabel className="mb-3">The question for ZEUS</TechLabel>
                    <p className="text-sm leading-relaxed text-slate">{q.ask}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliberate omissions */}
      <Section
        index={String(claimGroups.length + 5).padStart(2, "0")}
        label="Deliberately not published"
        title={"What was left out."}
        lede="Anyone can list the figures they used. The test of a claim audit is whether it names the ones that were available, flattering, and left out anyway. These are ZEUS's own claims that do not appear anywhere on this site."
      >
        <div className="grid grid-cols-1 gap-px bg-[var(--rule)] md:grid-cols-2">
          {notPublished.map((item, i) => (
            <div key={item.title} className="reveal bg-canvas p-8">
              <div className="flex items-center gap-4">
                <span className="tech-label text-slate-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="h-px w-10 bg-ochre/60" />
              </div>
              <h3 className="display mt-6 text-[1.5rem] leading-none">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="linen">
        <div className="reveal max-w-[72ch]">
          <TechLabel className="mb-5">If a figure looks wrong</TechLabel>
          <p className="leading-relaxed text-slate">
            This page is maintained by hand against ZEUS&rsquo;s own documents,
            and ZEUS is the authority on its own operations. If a figure here
            misstates something, or a source has been superseded, say so and it
            will be corrected or removed.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/contact?intent=invest">Investor enquiry</Button>
            <Button href="/investors" variant="secondary">
              Investor relations
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
