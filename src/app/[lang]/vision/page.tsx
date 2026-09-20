import type { Metadata } from "next";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { Button } from "@/components/ui/Button";
import { MediaPanel } from "@/components/ui/MediaPanel";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { MaskedHeading } from "@/components/ui/SectionHeading";
import { currentOperations } from "@/data/metrics";
import { pageMeta } from "@/lib/seo";
import { cx } from "@/lib/utils";
import type { FactStatus } from "@/data/facts";
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
    title: t("Vision"),
    description:
      t("Where ZEUS Engineering is going: from an operating Bitcoin prototype to distributed, solar-powered modular compute nodes built in Vietnam."),
    path: "/vision",
    image: "/images/concept/campus-aerial.webp",
  });
}

/**
 * The strategic narrative, told once, in order.
 *
 * This page exists to be read end to end rather than navigated, so it is
 * deliberately not in the primary nav; it is linked contextually from the
 * homepage, About, SSMDC and the investor section.
 *
 * The hard rule here is the same as everywhere else: exactly one chapter
 * describes something that exists. Every other chapter carries a status badge
 * saying so, because a cinematic page is precisely where a reader is most
 * likely to stop distinguishing plan from fact.
 */
interface Chapter {
  index: string;
  kicker: string;
  title: string;
  body: string[];
  status: FactStatus;
  statusLabel?: string;
  accent: "ochre" | "sage";
}

const chapters: Chapter[] = [
  {
    index: "01",
    kicker: "The proving ground",
    title: "Bitcoin paid for\nthe education.",
    body: [
      "ZEUS did not start with a thesis about AI. It started with machines that had to stay running: hardware at full load, continuously, in a hot and humid climate, where the margin between a working site and a throttled one is the engineering around the silicon.",
      "That is a demanding way to learn power delivery, heat rejection, monitoring and maintenance. It is also the only part of this story that has already happened.",
    ],
    status: "zeus-reported",
    statusLabel: "Operating",
    accent: "ochre",
  },
  {
    index: "02",
    kicker: "The system",
    title: "Four problems,\none machine.",
    body: [
      "Power, cooling, compute and control are not four departments. Each one constrains the next, and the thing that fails first is almost never the processor.",
      "Treating them as a single system is what makes a site repeatable rather than bespoke.",
    ],
    status: "zeus-reported",
    accent: "ochre",
  },
  {
    index: "03",
    kicker: "The product",
    title: "A data centre\nyou can repeat.",
    body: [
      "If the whole system fits in a standardised unit, capacity stops being a construction project and becomes a manufacturing one. Build the node once, then build it again.",
      "That is the SSMDC: solar, storage, DC distribution and compute on a 400 m² class pad, designed to be added to rather than enlarged.",
    ],
    status: "target",
    statusLabel: "Design target",
    accent: "sage",
  },
  {
    index: "04",
    kicker: "The opportunity",
    title: "AI arrived with\nthe same problem.",
    body: [
      "Accelerators want more watts per rack and produce more heat in less volume. The workload changed; the physical constraint did not.",
      "ZEUS does not operate an AI cluster today. What it has is the engineering that decides whether one would run or throttle.",
    ],
    status: "target",
    accent: "sage",
  },
  {
    index: "05",
    kicker: "The network",
    title: "Uptime by nodes,\nnot by site.",
    body: [
      "One large campus concentrates its risk in one place: one grid connection, one permit regime, one set of local politics. A network of small nodes spreads it.",
      "It also lets infrastructure sit next to available energy instead of asking the energy to come to it.",
    ],
    status: "target",
    accent: "sage",
  },
  {
    index: "06",
    kicker: "The origin",
    title: "Engineered\nin Vietnam.",
    body: [
      "Southern Vietnam offers year-round sun, competitive power, manufacturing capacity and proximity to where the equipment is made. ZEUS is locally owned and locally operated.",
      "Building the units where the supply chain already is, rather than importing finished infrastructure, is the point.",
    ],
    status: "zeus-reported",
    accent: "ochre",
  },
  {
    index: "07",
    kicker: "The ambition",
    title: "Built here.\nDeployed anywhere.",
    body: [
      "A unit that can be manufactured, shipped and commissioned is not limited to the country that made it. The stated long-term direction is Vietnamese-built modular compute deployed internationally.",
      "That is an ambition, not a plan with dates against it.",
    ],
    status: "target",
    statusLabel: "Long-term ambition",
    accent: "sage",
  },
];

export default async function VisionPage({ params }: LangPageProps) {
  const { lang: rawLang } = await params;
  const lang = toLocale(rawLang);
  const t = translator(lang);

  return (
    <>
      {/* Opening */}
      <section className="tech-grid relative overflow-hidden border-b border-[var(--rule)] pt-[112px] lg:pt-[128px]">
        <span
          aria-hidden
          className="absolute left-0 top-[72px] h-px w-full bg-[linear-gradient(to_right,var(--color-ochre),transparent_38%)] opacity-40"
        />
        <div className="shell pb-12 lg:pb-16">
          <TechLabel className="reveal mb-7">Vision</TechLabel>
          <MaskedHeading
            text={"The data centre\ndoesn't have to be\na building."}
            as="h1"
            className="h-section max-w-[16ch]"
          />
          <p className="reveal mt-8 max-w-[56ch] text-lg leading-relaxed text-slate">
            Where ZEUS is going, in seven steps. One of them has already
            happened. The rest are labelled so you can tell the difference.
          </p>
        </div>
      </section>

      {/* Chapters */}
      {chapters.map((chapter, i) => (
        <section
          key={chapter.index}
          className={cx(
            "border-t border-[var(--rule)]",
            i % 2 === 1 ? "bg-linen" : "bg-canvas",
          )}
          aria-labelledby={`vision-${chapter.index}`}
        >
          <div className="shell grid grid-cols-1 gap-10 py-12 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-12 lg:py-16">
            <div className="lg:sticky lg:top-[110px] lg:self-start">
              <div className="flex items-center gap-4">
                <span className="tech-label text-slate-dim">
                  {chapter.index}
                </span>
                <span
                  aria-hidden
                  className={cx(
                    "h-px w-10",
                    chapter.accent === "ochre" ? "bg-ochre" : "bg-sage",
                  )}
                />
              </div>
              <TechLabel className="mt-4">{chapter.kicker}</TechLabel>
              <div className="mt-5">
                <StatusBadge
                  status={chapter.status}
                  label={chapter.statusLabel}
                />
              </div>
            </div>

            <div>
              <MaskedHeading
                text={chapter.title}
                as="h2"
                className="h-sub max-w-[16ch]"
              />
              <span id={`vision-${chapter.index}`} className="sr-only">
                {chapter.kicker}
              </span>
              <div className="reveal mt-7 space-y-5">
                {chapter.body.map((p) => (
                  <p
                    key={p.slice(0, 28)}
                    className="max-w-[62ch] text-lg leading-relaxed text-slate"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* The one chapter with evidence gets the evidence. */}
              {chapter.index === "01" && (
                <dl className="reveal mt-9 grid grid-cols-2 gap-px bg-[var(--rule)] sm:grid-cols-4">
                  {currentOperations.map((fact) => (
                    <div
                      key={fact.label}
                      className="bg-canvas py-5 pr-5 sm:px-5 sm:first:pl-0"
                    >
                      <dd className="numeral text-[clamp(1.75rem,3.2vw,2.5rem)]">
                        {fact.value}
                        {fact.unit && (
                          <span className="text-slate"> {fact.unit}</span>
                        )}
                      </dd>
                      <dt className="tech-label mt-2 text-[0.6875rem]">
                        {fact.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              )}

              {chapter.index === "03" && (
                <MediaPanel
                  className="reveal mt-9"
                  image="/images/products/ssmdc-drawing.webp"
                  alt="ZEUS engineering drawing of the SSMDC: a modular container unit with fold-out solar panel arrays"
                  label="ZEUS engineering drawing"
                  aspect="square"
                  maxWidth="420px"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Closing */}
      <section className="on-sage tech-grid border-t border-[var(--rule)]">
        <div className="shell py-16 lg:py-24">
          <MaskedHeading
            text={"Build the nodes.\nScale the network."}
            as="h2"
            className="h-section max-w-[14ch]"
          />
          <p className="reveal mt-8 max-w-[54ch] text-lg leading-relaxed text-slate">
            One site running today, a node design costed to the line, and a
            raise sized to build the first two of them.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-4">
            <Button lang={lang} href="/solutions/modular-data-centers">Explore SSMDC</Button>
            <Button lang={lang} href="/investors" variant="secondary">{t("Investor relations")}</Button>
          </div>

          <p className="reveal mt-12 max-w-[64ch] text-sm leading-relaxed text-slate-dim">
            Chapters 03, 04, 05 and 07 describe intended development, not
            existing capability. See the{" "}
            <LocaleLink lang={lang} href="/investors/roadmap" className="underline underline-offset-4 hover:text-canvas">
              roadmap
            </LocaleLink>{" "}
            for what is operating and what is planned.
          </p>
        </div>
      </section>
    </>
  );
}
