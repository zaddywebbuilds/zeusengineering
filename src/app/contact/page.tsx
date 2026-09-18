import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ui/ContactForm";
import { TechLabel } from "@/components/ui/TechLabel";
import { company } from "@/data/company";
import { contactPaths, type ContactIntent } from "@/data/navigation";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Contact ZEUS Engineering — infrastructure and engineering enquiries, hosted mining enquiries, and investor enquiries.",
  path: "/contact",
});

const validIntents = contactPaths.map((p) => p.id) as readonly string[];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const params = await searchParams;
  const intent: ContactIntent = validIntents.includes(params.intent ?? "")
    ? (params.intent as ContactIntent)
    : "build";

  return (
    <>
      <PageHeader
        label="Contact"
        title={"Let's build what\ncomputes next."}
        lede="Three routes in, depending on what you need. Pick one and the form adapts."
        crumbs={[{ label: "Home", href: "/" }]}
      />

      <Section>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-20">
          <ContactForm initialIntent={intent} />

          <aside className="space-y-10">
            <div>
              <TechLabel className="mb-4">Direct</TechLabel>
              <a
                href={`mailto:${company.email}`}
                className="text-lg text-engineering transition-colors duration-200 hover:text-amber"
              >
                {company.email}
              </a>
            </div>

            <div>
              <TechLabel className="mb-4">Company</TechLabel>
              <p className="text-sm leading-relaxed text-steel">
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
                className="group inline-flex items-center gap-2 text-sm text-steel transition-colors duration-200 hover:text-engineering"
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
              <p className="text-xs leading-relaxed text-steel-dim">
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
