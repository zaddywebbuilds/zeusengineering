import type { Metadata } from "next";
import { company } from "@/data/company";
import type { FaqItem } from "@/data/faq";
import { locales, localeMeta, localePath, type Locale } from "@/i18n/config";

/**
 * Canonical production origin.
 * Override with NEXT_PUBLIC_SITE_URL once the deployment target is confirmed.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://zaddywebbuilds.github.io/zeusengineering";

const DEFAULT_OG = "/images/concept/campus-aerial.webp";

interface PageMetaArgs {
  lang: Locale;
  title: string;
  description: string;
  /** Unprefixed route, e.g. "/investors". The locale prefix is added here. */
  path: string;
  image?: string;
}

/**
 * Per-page metadata: canonical, hreflang alternates, OpenGraph and Twitter.
 *
 * The hreflang set is generated from `locales` rather than written out, so
 * adding a third language cannot leave half the site pointing at two.
 */
export function pageMeta({
  lang,
  title,
  description,
  path,
  image = DEFAULT_OG,
}: PageMetaArgs): Metadata {
  const url = `${SITE_URL}${localePath(lang, path)}`;
  const fullTitle = `${title} | ${company.name}`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[localeMeta[l].hrefLang] = `${SITE_URL}${localePath(l, path)}`;
  }
  // x-default points at the detector, which is the only URL that serves
  // every visitor the right language rather than one fixed choice.
  languages["x-default"] = `${SITE_URL}${path === "/" ? "/" : path}`;

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.name,
      type: "website",
      locale: localeMeta[lang].ogLocale,
      images: [
        { url: `${SITE_URL}${image}`, width: 1920, height: 1080, alt: fullTitle },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}${image}`],
    },
  };
}

/** Organization JSON-LD. Only fields we can source are included. */
export function organizationJsonLd(lang: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    alternateName: company.name,
    url: `${SITE_URL}${localePath(lang, "/")}`,
    email: company.email,
    foundingDate: String(company.founded),
    address: {
      "@type": "PostalAddress",
      addressCountry: "VN",
      addressRegion: company.region,
    },
    sameAs: [company.linkedin],
    description: `${company.name} is ${company.descriptor}.`,
  };
}

export function breadcrumbJsonLd(
  lang: Locale,
  trail: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${localePath(lang, t.path)}`,
    })),
  };
}

/**
 * FAQPage JSON-LD.
 *
 * The rendered answer includes the caveat where one exists, so the markup and
 * the visible text stay identical. They have to: structured data that says
 * something the page does not is both a guidelines violation and, on a site
 * whose whole argument is traceability, a self-inflicted wound.
 */
export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.caveat ? `${item.answer} ${item.caveat}` : item.answer,
      },
    })),
  };
}
