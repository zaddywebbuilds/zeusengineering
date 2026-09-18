export interface Pillar {
  id: "power" | "cooling" | "compute" | "control";
  index: string;
  label: string;
  href: string;
  headline: string;
  summary: string;
  /** Which accent this pillar uses: energy (amber) or compute (cyan). */
  accent: "energy" | "compute";
  detail: string[];
}

export const pillars: Pillar[] = [
  {
    id: "power",
    index: "01",
    label: "Power",
    href: "/technology/power",
    headline: "Energy enters\nthe system.",
    summary:
      "Grid supply and decentralised solar, combined and managed before a single watt reaches compute.",
    accent: "energy",
    detail: [
      "Zeus designs systems to integrate with existing power infrastructure rather than replace it, then layers renewable generation on top to reduce operating cost.",
      "In the SSMDC concept this becomes an explicit grid service: the unit draws excess power when the grid has it, and idles when the grid is under peak load.",
    ],
  },
  {
    id: "cooling",
    index: "02",
    label: "Cooling",
    href: "/technology/cooling",
    headline: "Heat is\nthe constraint.",
    summary:
      "Airflow engineering built for a tropical climate, where ambient conditions remove the easy options.",
    accent: "energy",
    detail: [
      "High-density compute is a thermal problem before it is anything else. In a hot, humid climate the margin between working infrastructure and throttled infrastructure is the cooling design.",
      "Asked directly how it manages heat, ZEUS describes conventional approaches: airflow control systems, fans, and water radiators for hydro systems.",
    ],
  },
  {
    id: "compute",
    index: "03",
    label: "Compute",
    href: "/technology/compute",
    headline: "Density\nunder load.",
    summary:
      "Racked hardware running continuously — today ASICs, and the same power and thermal envelope that AI accelerators demand.",
    accent: "compute",
    detail: [
      "Zeus's operating experience is in Bitcoin infrastructure: hardware that runs at full load, continuously, with no idle periods to recover thermally.",
      "That is the discipline the company carries into AI compute and modular data centre work.",
    ],
  },
  {
    id: "control",
    index: "04",
    label: "Control",
    href: "/technology/monitoring",
    headline: "Operated\nremotely.",
    summary:
      "Automation, telemetry and remote monitoring — so a site does not require a permanent crew to stay efficient.",
    accent: "compute",
    detail: [
      "Full automation and remote monitoring are core to the SSMDC concept, and remote monitoring, telemetry and control are specified components of the Ai-1 unit.",
      "Hosted mining customers are offered remote monitoring as part of the service.",
    ],
  },
];

export const getPillar = (id: string) => pillars.find((p) => p.id === id);
