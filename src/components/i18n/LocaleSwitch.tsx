"use client";

import Link from "next/link";
import { getDictionary } from "@/i18n/dictionary";
import { localePath, type Locale } from "@/i18n/config";
import { LOCALE_STORAGE_KEY } from "@/i18n/detect";
import { cx } from "@/lib/utils";

/**
 * The language switch.
 *
 * Detection decides which language a visitor MEETS. This decides which one
 * they KEEP: clicking it writes the choice to storage, and the root detector
 * reads that ahead of the device setting from then on. Without the write, a
 * Vietnamese speaker on an English-locale phone would be sent back to English
 * on their next visit, which is worse than never having offered the switch.
 *
 * It links to the same route in the other language rather than to that
 * language's home page, because losing your place is the thing that makes
 * language switchers annoying.
 */
export function LocaleSwitch({
  lang,
  route,
  className,
}: {
  lang: Locale;
  /** Current path with the locale prefix already stripped. */
  route: string;
  className?: string;
}) {
  const d = getDictionary(lang);
  const other: Locale = lang === "en" ? "vi" : "en";

  const remember = () => {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, other);
    } catch {
      // Private window or blocked storage. The link still works; only the
      // preference fails to persist, and detection falls back to the device.
    }
  };

  return (
    <Link
      href={localePath(other, route)}
      onClick={remember}
      hrefLang={other}
      lang={other}
      aria-label={d.langSwitcher.ariaSwitchTo}
      className={cx(
        "inline-flex items-center gap-2 rounded-[3px] border border-[var(--rule-strong)] px-3 py-2.5 text-sm text-slate transition-colors duration-200 hover:border-ink hover:text-ink",
        className,
      )}
    >
      <span aria-hidden className="text-[0.7rem]">
        ⇄
      </span>
      {d.langSwitcher.switchTo}
    </Link>
  );
}
