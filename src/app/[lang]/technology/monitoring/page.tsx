import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getPillar } from "@/data/technology";
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
    title: t("Monitoring and Automation"),
    description:
      t("ZEUS Engineering monitoring and automation - the telemetry and remote control layer that makes small distributed compute sites viable."),
    path: "/technology/monitoring",
  });
}

const blocks = [
  { t: "Why it exists", b: "A unit sited next to available energy cannot depend on a permanent on-site crew. Remote operation is what makes a distributed, modular estate viable at all, rather than a collection of sites each needing staff." },
  { t: "In the SSMDC", b: "Full automation and remote monitoring are core to the SSMDC concept, alongside the grid load-balancing behaviour that requires the unit to respond to conditions without anyone present." },
  { t: "In the Ai-1", b: "The Ai-1 specification lists a main controller board providing system management, power management, monitoring and telemetry, and remote access." },
  { t: "For hosting clients", b: "Hosted mining customers are offered monitoring of equipment status and performance as part of the service arrangement." },
];

export default async function Page({ params }: LangPageProps) {
  const { lang: rawLang } = await params;
  const lang = toLocale(rawLang);
  const t = translator(lang);

  const pillar = getPillar("control");

  return (
    <>
      <PageHeader
        lang={lang}
        index="04"
        label="Technology"
        title={"Operated\nremotely."}
        lede={pillar?.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Technology", href: "/technology" },
        ]}
        media={{
          image: "/images/site/consulting.webp",
          alt: "Monitoring and analytics interface imagery",
          label: "Operations layer",
          note: undefined,
        }}
      />

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
