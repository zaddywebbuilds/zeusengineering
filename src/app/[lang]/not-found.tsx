"use client";

import { usePathname } from "next/navigation";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { TechLabel } from "@/components/ui/TechLabel";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/data/navigation";
import { translator } from "@/i18n/t";
import { getDictionary } from "@/i18n/dictionary";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

/**
 * 404.
 *
 * A client component, unlike every other route here, because `not-found` is
 * the one file the App Router renders WITHOUT params: there is no `[lang]` to
 * destructure, since the URL that triggered it may not have matched the
 * segment at all. The locale is therefore read back off the pathname, and
 * falls back to English when even that is unreadable.
 */
function localeFromPath(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0] ?? "";
  return isLocale(first) ? first : defaultLocale;
}

export default function NotFound() {
  const lang = localeFromPath(usePathname());
  const t = translator(lang);
  const d = getDictionary(lang);

  return (
    <section className="tech-grid flex min-h-[70svh] items-center pt-[112px]">
      <div className="shell py-12">
        <TechLabel className="mb-7">{t("Error / 404")}</TechLabel>

        <h1 className="display text-[clamp(3rem,10vw,7rem)] leading-none">
          {t("No route\nto that page.")
            .split("\n")
            .map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
        </h1>

        <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-slate">
          {t(
            "The address does not resolve. It may have moved, or it may never have existed.",
          )}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button lang={lang} href="/">
            {t("Back to home")}
          </Button>
          <Button lang={lang} href="/contact" variant="secondary">
            {d.common.contact}
          </Button>
        </div>

        <nav
          aria-label="Site sections"
          className="mt-11 border-t border-[var(--rule)] pt-10"
        >
          <TechLabel className="mb-6">{t("Or try")}</TechLabel>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {primaryNav.map((item) => (
              <li key={item.id}>
                <LocaleLink
                  lang={lang}
                  href={item.href}
                  className="text-slate transition-colors duration-200 hover:text-ink"
                >
                  {d.nav.items[item.id].label}
                </LocaleLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
