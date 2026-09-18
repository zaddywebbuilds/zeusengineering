import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { primaryNav } from "@/data/navigation";

/**
 * Built from the navigation data so a new route cannot be added to the menu
 * and forgotten in the sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Set<string>(["/", "/contact", "/legal/privacy"]);

  for (const item of primaryNav) {
    paths.add(item.href);
    for (const child of item.children ?? []) paths.add(child.href);
  }

  const now = new Date();

  return [...paths].map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
