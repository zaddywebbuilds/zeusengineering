import { hyperscaleComparison, prototypeUnitNote } from "@/data/ssmdc";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { MaskedHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/diagrams/Figure";
import { DistributedVsCampus } from "@/components/diagrams/DistributedVsCampus";
import { translator } from "@/i18n/t";
import type { Locale } from "@/i18n/config";

/**
 * Hyperscale vs SSMDC.
 *
 * ZEUS's own comparison, presented as an argument the company makes rather
 * than an independent benchmark — which is why the header says so and the
 * badge is on the ZEUS column, not the table.
 *
 * Built as a real <table> so it reads correctly to a screen reader, and
 * restructured into stacked rows on mobile rather than side-scrolled.
 */
export function Expansion({ lang }: { lang: Locale }) {
  const t = translator(lang);
  return (
    <section
      className="border-t border-[var(--rule)] bg-canvas"
      aria-labelledby="comparison-heading"
    >
      <div className="shell py-12 lg:py-16">
        <TechLabel index="08" className="reveal mb-7">{t("The argument")}</TechLabel>
        <MaskedHeading
          text={"Where modular\nwins."}
          className="h-section max-w-[14ch]"
        />
        <h2 id="comparison-heading" className="sr-only">{t("Hyperscale compared with SSMDC")}</h2>

        <p className="reveal mt-8 max-w-[56ch] text-lg leading-relaxed text-slate">
          {t("How ZEUS sees the deployment model: many small nodes rather than one large campus. This is the company's own design thesis, not an independent industry benchmark.")}
        </p>

        <Figure
          label={t("Two topologies")}
          caption={t("Schematic. No node count is implied; ZEUS has published none for a network.")}
          tone="linen"
          className="reveal mt-10"
        >
          <DistributedVsCampus />
        </Figure>

        <div className="mt-10 overflow-hidden border-y border-[var(--rule)]">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">{t("Hyperscale compared with the ZEUS SSMDC across ten capabilities")}</caption>
            <thead>
              <tr className="border-b border-[var(--rule)]">
                <th scope="col" className="tech-label py-5 pr-6 font-medium">{t("Capability")}</th>
                <th
                  scope="col"
                  className="tech-label hidden py-5 pr-6 font-medium sm:table-cell"
                >{t("Hyperscale")}</th>
                <th scope="col" className="tech-label py-5 font-medium text-sage">
                  SSMDC
                </th>
              </tr>
            </thead>
            <tbody>
              {hyperscaleComparison.map((row) => (
                <tr
                  key={row.capability}
                  className="border-b border-[var(--rule)] last:border-b-0"
                >
                  <th
                    scope="row"
                    className="py-5 pr-6 align-top text-sm font-normal text-ink"
                  >
                    {t(row.capability)}
                    {/* Hyperscale value folds under the label on small screens */}
                    <span className="mt-2 block text-sm text-slate-dim sm:hidden">
                      {t("Hyperscale:")} {t(row.hyperscale)}
                    </span>
                  </th>
                  <td className="hidden py-5 pr-6 align-top text-sm text-slate-dim sm:table-cell">
                    {t(row.hyperscale)}
                  </td>
                  <td className="py-5 align-top text-sm text-sage">
                    {t(row.ssmdc)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="reveal mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
          <StatusBadge status="target" label={t("ZEUS's comparison")} />
          <p className="max-w-[64ch] text-sm text-slate-dim">
            {t("Only the final row describes something that exists, the 100 kWp prototype. The rest compares an operating model against a design.")}
          </p>
        </div>

        <p className="reveal mt-4 max-w-[72ch] text-xs leading-relaxed text-slate-dim">
          {t(prototypeUnitNote)}
        </p>

        <div className="reveal mt-12 flex flex-wrap items-center gap-4">
          <Button lang={lang} href="/solutions/modular-data-centers">{t("How the SSMDC works")}</Button>
          <Button lang={lang} href="/investors/economics" variant="secondary">{t("Node economics")}</Button>
        </div>
      </div>
    </section>
  );
}
