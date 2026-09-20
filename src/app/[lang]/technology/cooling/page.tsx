import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getPillar } from "@/data/technology";
import { Figure } from "@/components/diagrams/Figure";
import { AirflowDiagram } from "@/components/diagrams/AirflowDiagram";
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
    title: t("Cooling and Thermal Management"),
    description:
      t("ZEUS Engineering thermal management - airflow control, fans and water radiators for hydro systems, engineered for continuous full load in a tropical climate."),
    path: "/technology/cooling",
  });
}

const blocks = [
  { t: "The problem", b: "High-density compute converts almost all the power it draws into heat. In a hot, humid climate there is less thermal headroom to work with, and the margin between infrastructure that performs and infrastructure that throttles is the cooling design." },
  { t: "The approach", b: "Asked directly how it manages heat, ZEUS describes conventional engineering: airflow control systems, fans, and water radiators for hydro systems. Not exotic, but proven and maintainable - which matters more at a site that must run continuously." },
  { t: "Why it scales", b: "Conventional airflow engineering is repeatable. It uses parts that can be sourced and serviced locally, by a team that already knows them. That is what makes it viable inside a standardised modular unit rather than a bespoke facility." },
  { t: "What is not claimed", b: "No rated operating temperature, humidity ceiling, PUE figure or uptime guarantee appears anywhere on this site. ZEUS has not published them." },
];

export default async function Page({ params }: LangPageProps) {
  const { lang: rawLang } = await params;
  const lang = toLocale(rawLang);
  const t = translator(lang);

  const pillar = getPillar("cooling");

  return (
    <>
      <PageHeader
        lang={lang}
        index="02"
        label="Technology"
        title={"Heat is\nthe constraint."}
        lede={pillar?.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Technology", href: "/technology" },
        ]}
        media={{
          image: "/images/concept/cooling-plant.webp",
          alt: "Concept visualisation of external cooling plant and containerised units",
          label: "Cooling plant",
          note: "Concept visualisation",
        }}
      />

      <Section tone="linen">
        <Figure
          label="Keeping the paths separate"
          caption="Standard contained-aisle airflow, drawn to explain the three methods ZEUS names: airflow control, fans, and water radiators. No temperatures are shown, because ZEUS has published none."
        >
          <AirflowDiagram />
        </Figure>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-x-12 gap-y-9 lg:grid-cols-2">
          {blocks.map((block, i) => (
            <div key={block.t} className="reveal">
              <div className="flex items-center gap-4">
                <span className="tech-label text-slate-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="h-px w-10 bg-ochre/60" />
              </div>
              <h2 className="display mt-5 text-[1.75rem] leading-none">
                {block.t}
              </h2>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-slate">
                {block.b}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-11 flex flex-wrap items-center gap-4">
          <Button lang={lang} href="/technology" variant="secondary">
            All four pillars
          </Button>
          <Button lang={lang} href="/contact?intent=build">Build with Zeus</Button>
        </div>
      </Section>
    </>
  );
}
