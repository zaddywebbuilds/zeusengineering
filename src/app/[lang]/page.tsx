import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { EnergyToCompute } from "@/components/home/EnergyToCompute";
import { SystemScroller } from "@/components/home/SystemScroller";
import { Proof } from "@/components/home/Proof";
import { BitcoinToAi } from "@/components/home/BitcoinToAi";
import { SolutionsIndex } from "@/components/home/SolutionsIndex";
import { ProjectPanel } from "@/components/home/ProjectPanel";
import { SsmdcExplorer } from "@/components/home/SsmdcExplorer";
import { Expansion } from "@/components/home/Expansion";
import { InvestorGateway } from "@/components/home/InvestorGateway";
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
    title: t("Infrastructure for high-density compute"),
    description:
      t("Modular infrastructure for Bitcoin, AI and high-density computing, engineered in Vietnam. Power, cooling, compute and remote control."),
    path: "/",
  });
}

/**
 * Homepage emotional sequence:
 * awe → understanding → proof → technology → ambition → action.
 */
export default async function HomePage({ params }: LangPageProps) {
  const { lang: rawLang } = await params;
  const lang = toLocale(rawLang);
  const t = translator(lang);

  return (
    <>
      <Hero lang={lang} />
      <EnergyToCompute lang={lang} />
      <SystemScroller lang={lang} />
      <Proof lang={lang} />
      <BitcoinToAi lang={lang} />
      <SolutionsIndex lang={lang} />
      <ProjectPanel lang={lang} />
      <SsmdcExplorer lang={lang} />
      <Expansion lang={lang} />
      <InvestorGateway lang={lang} />
    </>
  );
}
