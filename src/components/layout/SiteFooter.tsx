import { Img } from "@/components/ui/Img";
import Link from "next/link";
import { company } from "@/data/company";
import { contactPaths, primaryNav } from "@/data/navigation";
import { MaskedHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/dictionary";
import { localePath, type Locale } from "@/i18n/config";

export function SiteFooter({ lang }: { lang: Locale }) {
  const d = getDictionary(lang);

  return (
    <footer className="border-t border-[var(--rule)] bg-canvas">
      {/* Closing statement + the three conversion paths */}
      <section className="shell py-12 lg:py-16">
        <MaskedHeading text={d.footer.heading} className="h-section max-w-[16ch]" />

        <div className="mt-11 grid grid-cols-1 gap-px bg-[var(--rule)] md:grid-cols-3">
          {contactPaths.map((path) => {
            const c = d.nav.contactPaths[path.id];
            return (
              <Link
                key={path.id}
                href={localePath(lang, path.href)}
                className="group flex flex-col justify-between gap-10 bg-canvas p-8 transition-colors duration-200 hover:bg-linen lg:p-10"
              >
                <div>
                  <h3 className="display text-[1.75rem] leading-none">
                    {c.label}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate">
                    {c.blurb}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="text-xl transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Directory */}
      <div className="border-t border-[var(--rule)]">
        <div className="shell grid grid-cols-2 gap-x-8 gap-y-12 py-11 md:grid-cols-3 lg:grid-cols-6">
          {primaryNav.map((item) => (
            <nav key={item.id} aria-label={d.nav.items[item.id].label}>
              <p className="tech-label mb-5">{d.nav.items[item.id].label}</p>
              <ul className="space-y-3">
                {(item.children ?? [{ id: item.id, href: item.href }]).map(
                  (child) => (
                    <li key={child.id}>
                      <Link
                        href={localePath(lang, child.href)}
                        className="text-sm text-slate transition-colors duration-200 hover:text-ink"
                      >
                        {d.nav.items[child.id].label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Legal / identity */}
      <div className="border-t border-[var(--rule)]">
        <div className="shell flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-6">
            <Img
              src="/images/brand/zeus-wordmark-ink.webp"
              alt={company.name}
              width={702}
              height={285}
              className="h-7 w-auto"
            />
            <p className="text-xs leading-relaxed text-slate-dim">
              {company.legalName}, {company.country}
              <br />
              {d.footer.registration}: {company.taxId}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-slate-dim">
            <a
              href={`mailto:${company.email}`}
              className="transition-colors duration-200 hover:text-ink"
            >
              {company.email}
            </a>
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-ink"
            >
              LinkedIn
            </a>
            <Link
              href={localePath(lang, "/legal/privacy")}
              className="transition-colors duration-200 hover:text-ink"
            >
              {d.footer.privacy}
            </Link>
            <span>
              © {new Date().getFullYear()} {company.legalName}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
