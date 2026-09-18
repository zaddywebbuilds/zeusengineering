import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import { leadership } from "@/data/team";
import { company } from "@/data/company";
import { pageMeta, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Leadership",
  description:
    "The ZEUS Engineering leadership team: Tatts Nguyen, Chris Gainer, Quynh Nguyen and Valentine Cheval.",
  path: "/company/leadership",
});

/** Person JSON-LD, only for people ZEUS has publicly named. */
function peopleJsonLd() {
  return leadership.map((person) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    worksFor: {
      "@type": "Organization",
      name: company.legalName,
      url: SITE_URL,
    },
    ...(person.linkedin ? { sameAs: [person.linkedin] } : {}),
  }));
}

export default function LeadershipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(peopleJsonLd()) }}
      />

      <PageHeader
        index="01"
        label="Company"
        title={"Who runs it."}
        lede="A small team. ZEUS describes itself as small, highly skilled and experienced in allocating limited capital efficiently — and the profiles below are kept to what the company has actually published."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Company", href: "/company" },
        ]}
      />

      <Section>
        <div className="grid grid-cols-1 gap-px bg-[var(--rule)] md:grid-cols-2">
          {leadership.map((person, i) => (
            <article key={person.name} className="reveal bg-soil p-8 lg:p-10">
              <span className="tech-label text-stone-dim">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* No invented headshots. An initial monogram instead. */}
              <div
                aria-hidden
                className="mt-6 flex h-16 w-16 items-center justify-center border border-[var(--rule-strong)]"
              >
                <span className="display text-2xl leading-none text-stone">
                  {person.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
              </div>

              <h2 className="display mt-7 text-[clamp(1.75rem,3vw,2.25rem)] leading-none">
                {person.name}
              </h2>
              <p className="tech-label mt-3 text-amber/80">{person.role}</p>

              <p className="mt-6 max-w-[44ch] leading-relaxed text-stone">
                {person.bio}
              </p>

              {person.linkedin && (
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center gap-2 text-sm text-stone transition-colors duration-200 hover:text-bone"
                >
                  LinkedIn
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="reveal mt-12 max-w-[68ch] border-l-2 border-[var(--rule-strong)] pl-6">
          <TechLabel className="mb-4">On these profiles</TechLabel>
          <p className="text-sm leading-relaxed text-stone-dim">
            Biographies are limited to what ZEUS has published. No
            qualifications, previous employers, dates or photographs have been
            added, and profiles are not linked to social accounts that have not
            been verified. Where the company gives one line, this page gives one
            line.
          </p>
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center gap-4">
          <Button href="/company">About ZEUS</Button>
          <Button href="/contact" variant="secondary">
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  );
}
