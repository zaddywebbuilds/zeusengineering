import { hyperscaleComparison } from "@/data/ssmdc";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechLabel } from "@/components/ui/TechLabel";
import { MaskedHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

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
export function Expansion() {
  return (
    <section
      className="border-t border-[var(--rule)] bg-soil"
      aria-labelledby="comparison-heading"
    >
      <div className="shell py-12 lg:py-16">
        <TechLabel index="08" className="reveal mb-7">
          The argument
        </TechLabel>
        <MaskedHeading
          text={"Where modular\nwins."}
          className="h-section max-w-[14ch]"
        />
        <h2 id="comparison-heading" className="sr-only">
          Hyperscale compared with SSMDC
        </h2>

        <p className="reveal mt-8 max-w-[56ch] text-lg leading-relaxed text-stone">
          The case ZEUS makes for building many small nodes instead of one large
          campus. It is the company&rsquo;s own comparison, not an independent
          benchmark.
        </p>

        <div className="mt-10 overflow-hidden border-y border-[var(--rule)]">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">
              Hyperscale compared with the ZEUS SSMDC across ten capabilities
            </caption>
            <thead>
              <tr className="border-b border-[var(--rule)]">
                <th scope="col" className="tech-label py-5 pr-6 font-medium">
                  Capability
                </th>
                <th
                  scope="col"
                  className="tech-label hidden py-5 pr-6 font-medium sm:table-cell"
                >
                  Hyperscale
                </th>
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
                    className="py-5 pr-6 align-top text-sm font-normal text-bone"
                  >
                    {row.capability}
                    {/* Hyperscale value folds under the label on small screens */}
                    <span className="mt-2 block text-sm text-stone-dim sm:hidden">
                      Hyperscale: {row.hyperscale}
                    </span>
                  </th>
                  <td className="hidden py-5 pr-6 align-top text-sm text-stone-dim sm:table-cell">
                    {row.hyperscale}
                  </td>
                  <td className="py-5 align-top text-sm text-sage">
                    {row.ssmdc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="reveal mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
          <StatusBadge status="target" label="ZEUS's comparison" />
          <p className="max-w-[64ch] text-sm text-stone-dim">
            Only the final row describes something that exists — the 100 kWp
            prototype. The rest compares an operating model against a design.
          </p>
        </div>

        <div className="reveal mt-12 flex flex-wrap items-center gap-4">
          <Button href="/solutions/modular-data-centers">
            How the SSMDC works
          </Button>
          <Button href="/investors/economics" variant="secondary">
            Node economics
          </Button>
        </div>
      </div>
    </section>
  );
}
