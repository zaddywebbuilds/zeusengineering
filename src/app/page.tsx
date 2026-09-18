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

export const metadata: Metadata = pageMeta({
  title: "Infrastructure for high-density compute",
  description:
    "Modular infrastructure for Bitcoin, AI and high-density computing, engineered in Vietnam — power, cooling, compute and remote control.",
  path: "/",
});

/**
 * Homepage emotional sequence:
 * awe → understanding → proof → technology → ambition → action.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <EnergyToCompute />
      <SystemScroller />
      <Proof />
      <BitcoinToAi />
      <SolutionsIndex />
      <ProjectPanel />
      <SsmdcExplorer />
      <Expansion />
      <InvestorGateway />
    </>
  );
}
