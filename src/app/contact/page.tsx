import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ui/ContactForm";
import { TechLabel } from "@/components/ui/TechLabel";
import { company } from "@/data/company";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Contact ZEUS Engineering — infrastructure and engineering enquiries, hosted mining enquiries, and investor enquiries.",
  path: "/contact",
});

/**
 * Static page.
 *
 * The ?intent= parameter is read inside ContactForm via useSearchParams rather
 * than as a server-side searchParams prop — that prop would make this route
 * dynamic, and the site is exported as static HTML for GitHub Pages. The
 * Suspense boundary is what useSearchParams requires in an exported build.
 */
export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title={"Let's build what\ncomputes next."}
        lede="Three routes in, depending on what you need. Pick one and the form adapts."
        crumbs={[{ label: "Home", href: "/" }]}
      />

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-12">
          <Suspense fallback={<ContactFormSkeleton />}>
            <ContactForm />
          </Suspense>

          <aside className="space-y-10">
            <div>
              <TechLabel className="mb-4">Direct</TechLabel>
              <a
                href={`mailto:${company.email}`}
                className="text-lg text-ink transition-colors duration-200 hover:text-ochre"
              >
                {company.email}
              </a>
            </div>

            <div>
              <TechLabel className="mb-4">Company</TechLabel>
              <p className="text-sm leading-relaxed text-slate">
                {company.legalName}
                <br />
                {company.region}, {company.country}
                <br />
                MST: {company.taxId}
              </p>
            </div>

            <div>
              <TechLabel className="mb-4">Elsewhere</TechLabel>
              <a
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-slate transition-colors duration-200 hover:text-ink"
              >
                LinkedIn
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            </div>

            <div className="border-t border-[var(--rule)] pt-8">
              <p className="text-xs leading-relaxed text-slate-dim">
                No phone number or street address is listed because ZEUS has not
                published one. The email address and registration number above
                are taken from the company&rsquo;s own site.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

/** Holds the layout while the client reads the intent parameter. */
function ContactFormSkeleton() {
  return (
    <div aria-hidden className="animate-pulse">
      <div className="mb-10 h-28 border border-[var(--rule)] bg-linen" />
      <div className="space-y-7">
        <div className="h-20 bg-linen" />
        <div className="h-20 bg-linen" />
        <div className="h-40 bg-linen" />
      </div>
    </div>
  );
}
