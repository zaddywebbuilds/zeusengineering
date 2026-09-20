import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import type { ComponentProps } from "react";

/**
 * `next/link` with the locale prefix applied.
 *
 * Use this for every internal link that is not a `Button`. Importing
 * `next/link` directly in a page is the i18n equivalent of importing
 * `next/image` directly instead of `Img`: it works, it looks right, and it
 * quietly breaks the thing the wrapper exists to guarantee.
 */
export function LocaleLink({
  lang,
  href,
  ...rest
}: Omit<ComponentProps<typeof Link>, "href"> & {
  lang: Locale;
  href: string;
}) {
  return <Link href={localePath(lang, href)} {...rest} />;
}
