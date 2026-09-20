import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { allRoutes } from "@/data/navigation";
import { locales, localeMeta, localePath } from "@/i18n/config";

// Required by `output: "export"` — emitted at build time.
export const dynamic = "force-static";

/**
 * Every route, in every locale, each entry carrying the full alternates set.
 *
 * Built from `navigation.ts` so a route added to the menu cannot be forgotten
 * here. `trailingSlash: true` means the canonical URL ends in a slash, so the
 * sitemap has to agree with it or every entry is a redirect.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  const abs = (lang: (typeof locales)[number], path: string) =>
    `${SITE_URL}${localePath(lang, path)}${path === "/" ? "" : "/"}`;

  for (const path of allRoutes()) {
    const languages: Record<string, string> = {};
    for (const l of locales) languages[localeMeta[l].hrefLang] = abs(l, path);

    for (const lang of locales) {
      entries.push({
        url: abs(lang, path),
        lastModified: now,
        changeFrequency: path === "/" ? "monthly" : "yearly",
        priority: path === "/" ? 1 : path.split("/").length === 2 ? 0.8 : 0.6,
        alternates: { languages },
      });
    }
  }

  return entries;
}
