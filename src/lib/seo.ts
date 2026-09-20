import type { Metadata } from "next";
import { company } from "@/data/company";
import type { FaqItem } from "@/data/faq";

/**
 * Canonical production origin.
 * Override with NEXT_PUBLIC_SITE_URL once the deployment target is confirmed.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://zaddywebbuilds.github.io/zeusengineering";

const DEFAULT_OG = "/images/concept/campus-aerial.webp";

interface PageMetaArgs {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** hreflang alternates, e.g. { vi: "/vi" }. Paths are made absolute. */
  languages?: Record<string, string>;
}

/** Build per-page metadata with canonical, OpenGraph and Twitter cards. */
export function pageMeta({
  title,
  description,
  path,
  image = DEFAULT_OG,
  languages,
}: PageMetaArgs): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${company.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      ...(languages && {
        languages: Object.fromEntries(
          Object.entries(languages).map(([k, v]) => [k, `${SITE_URL}${v}`]),
        ),
      }),
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.name,
      type: "website",
      locale: "en_GB",
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
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    alternateName: company.name,
    url: SITE_URL,
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

export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path}`,
    })),
  };
}
