import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Generated, not static.
 *
 * A previous project on this account shipped a static public/robots.txt that
 * silently blocked every crawler. Generating it here keeps the rule in one
 * reviewable place and keeps the sitemap URL in step with SITE_URL.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
