import type { FaqItem } from "@/data/faq";

/**
 * Native <details> disclosure — keyboard accessible, works without JS, and
 * the answer text is in the DOM for crawlers whether or not it is open.
 *
 * Where ZEUS's deck flags that a claim needs re-verification, that caveat is
 * rendered with the answer rather than quietly dropped.
 */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
      {items.map((item) => (
        <details key={item.question} className="group py-2">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg text-ink marker:hidden [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span
              aria-hidden
              className="shrink-0 text-slate transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="pb-6 pr-10">
            <p className="max-w-[68ch] leading-relaxed text-slate">
              {item.answer}
            </p>
            {item.caveat && (
              <p className="mt-4 flex gap-3 border-l border-ochre/40 pl-4 text-sm text-slate-dim">
                {item.caveat}
              </p>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
