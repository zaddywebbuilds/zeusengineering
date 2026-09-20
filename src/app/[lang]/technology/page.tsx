import type { Metadata } from "next";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { SystemDiagramStatic } from "@/components/diagrams/SystemDiagramStatic";
import { TechLabel } from "@/components/ui/TechLabel";
import { pillars } from "@/data/technology";
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
    title: t("Technology"),
    description:
      t("Power, cooling, compute and control, the four pillars of ZEUS Engineering's infrastructure, and how they constrain one another."),
    path: "/technology",
  });
}

export default async function TechnologyPage({ params }: LangPageProps) {
  const { lang: rawLang } = await params;
  const lang = toLocale(rawLang);
  const t = translator(lang);

  return (
    <>
      <PageHeader
        lang={lang}
        label="Technology"
        title={"Engineered from\nfirst principles."}
        lede="Four pillars that only make sense together. Power determines what compute is possible; cooling determines whether it keeps running; control determines whether any of it can be operated remotely."
        crumbs={[{ label: "Home", href: "/" }]}
        media={{
          image: "/images/clean/substation.webp",
          alt: "High-voltage substation switchgear",
          label: "Power infrastructure",
        }}
      />

      <Section
        index="01"
        label={t("The system")}
        title={"One schematic."}
        lede="Grid and solar enter, power is managed and distributed, heat is rejected, compute runs, and a control layer watches all of it, feeding telemetry back into how power is allocated."
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-12">
          <div className="border border-[var(--rule)] bg-linen p-6 lg:p-8">
            <TechLabel className="mb-6">Infrastructure schematic</TechLabel>
            <SystemDiagramStatic />
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <span className="tech-label flex items-center gap-2">
                <span className="h-2 w-2 bg-ochre" aria-hidden />{t("Energy")}</span>
              <span className="tech-label flex items-center gap-2">
                <span className="h-2 w-2 bg-sage" aria-hidden />{t("Compute")}</span>
            </div>
          </div>

          <div className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            {pillars.map((pillar) => (
              <LocaleLink lang={lang}
                key={pillar.id}
                href={pillar.href}
                className="group flex items-start gap-6 py-8 transition-colors duration-200"
              >
                <span className="tech-label shrink-0 pt-2 text-slate-dim">
                  {pillar.index}
                </span>
                <span className="flex-1">
                  <span className="flex items-center gap-4">
                    <span className="display text-[clamp(1.75rem,3vw,2.5rem)] leading-none transition-colors duration-200 group-hover:text-ochre">
                      {pillar.label}
                    </span>
                    <span
                      aria-hidden
                      className={`h-px w-8 transition-all duration-300 group-hover:w-14 ${
                        pillar.accent === "energy" ? "bg-ochre" : "bg-sage"
                      }`}
                    />
                  </span>
                  <span className="mt-3 block max-w-[52ch] text-sm leading-relaxed text-slate">
                    {pillar.summary}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="shrink-0 pt-2 transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
