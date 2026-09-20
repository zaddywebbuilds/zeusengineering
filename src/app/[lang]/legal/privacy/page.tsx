import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { TechLabel } from "@/components/ui/TechLabel";
import { company } from "@/data/company";
import { pageMeta } from "@/lib/seo";
import { translator } from "@/i18n/t";
import { toLocale, type LangPageProps } from "@/i18n/page";

export async function generateMetadata({
  params,
}: LangPageProps): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = toLocale(rawLang);
  const t = translator(lang);

  return pageMeta({
    lang,
    title: t("Privacy"),
    description:
      t("How the ZEUS Engineering website handles information. A working draft pending legal review."),
    path: "/legal/privacy",
  });
}

export default async function PrivacyPage({ params }: LangPageProps) {
  const { lang: rawLang } = await params;
  const lang = toLocale(rawLang);
  const t = translator(lang);

  return (
    <>
      <PageHeader
        lang={lang}
        label="Legal"
        title={"Privacy and\ndata handling."}
        lede="What this website does and does not collect."
        crumbs={[{ label: "Home", href: "/" }]}
      />

      <Section>
        {/* Stated first, not buried. This text has not been reviewed by a lawyer. */}
        <div className="mb-10 max-w-[72ch] border-l-2 border-ochre/50 bg-linen p-7">
          <TechLabel className="mb-4">Draft, requires legal review</TechLabel>
          <p className="text-sm leading-relaxed text-slate">
            This page is a working draft describing how the website currently
            behaves. It has not been reviewed by a qualified lawyer and is not
            legal advice. It must be reviewed against Vietnamese law, and
            against GDPR if the site markets into the EU, before launch.
          </p>
        </div>

        <div className="max-w-[68ch] space-y-10">
          {[
            {
              t: "What this site collects",
              b: "Nothing automatically. This website sets no cookies, runs no analytics and embeds no third-party trackers. There is no consent banner because there is nothing to consent to.",
            },
            {
              t: "The enquiry form",
              b: "The contact form does not transmit anything to a server. It composes an email in your own mail client, which you then choose to send. Until you send it, the information stays on your device.",
            },
            {
              t: "Email you send us",
              b: `If you email ${company.email}, we hold that message and your contact details in order to reply and to handle your enquiry.`,
            },
            {
              t: "Hosting",
              b: "The hosting provider may keep standard server logs, which can include IP addresses, for security and operational purposes. This section must be completed once the hosting arrangement is confirmed.",
            },
            {
              t: "If analytics are added later",
              b: "If measurement is introduced, this page must be updated and an appropriate consent mechanism added before it goes live.",
            },
            {
              t: "Contact",
              b: `${company.legalName}, ${company.region}, ${company.country}. MST: ${company.taxId}. Email: ${company.email}.`,
            },
          ].map((section, i) => (
            <div key={section.t} className="reveal">
              <div className="flex items-center gap-4">
                <span className="tech-label text-slate-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="h-px w-10 bg-ochre/60" />
              </div>
              <h2 className="display mt-5 text-[1.5rem] leading-none">
                {section.t}
              </h2>
              <p className="mt-4 leading-relaxed text-slate">{section.b}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
