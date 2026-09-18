import { Img } from "@/components/ui/Img";
import Link from "next/link";
import { company } from "@/data/company";
import { contactPaths, primaryNav } from "@/data/navigation";
import { MaskedHeading } from "@/components/ui/SectionHeading";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--rule)] bg-soil">
      {/* Closing statement + the three conversion paths */}
      <section className="shell py-14 lg:py-20">
        <MaskedHeading
          text={"Let's build\nwhat computes next."}
          className="h-section max-w-[16ch]"
        />

        <div className="mt-11 grid grid-cols-1 gap-px bg-[var(--rule)] md:grid-cols-3">
          {contactPaths.map((path) => (
            <Link
              key={path.id}
              href={path.href}
              className="group flex flex-col justify-between gap-10 bg-soil p-8 transition-colors duration-200 hover:bg-bark lg:p-10"
            >
              <div>
                <h3 className="display text-[1.75rem] leading-none">
                  {path.label}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-stone">
                  {path.blurb}
                </p>
              </div>
              <span
                aria-hidden
                className="text-xl transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Directory */}
      <div className="border-t border-[var(--rule)]">
        <div className="shell grid grid-cols-2 gap-x-8 gap-y-12 py-11 md:grid-cols-3 lg:grid-cols-6">
          {primaryNav.map((item) => (
            <nav key={item.label} aria-label={item.label}>
              <p className="tech-label mb-5">{item.label}</p>
              <ul className="space-y-3">
                {(item.children ?? [{ label: item.label, href: item.href }]).map(
                  (child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="text-sm text-stone transition-colors duration-200 hover:text-bone"
                      >
                        {child.label}
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
              src="/images/brand/zeus-wordmark.webp"
              alt={company.name}
              width={702}
              height={285}
              className="h-7 w-auto"
            />
            <p className="text-xs leading-relaxed text-stone-dim">
              {company.legalName}, {company.country}
              <br />
              MST: {company.taxId}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-stone-dim">
            <a
              href={`mailto:${company.email}`}
              className="transition-colors duration-200 hover:text-bone"
            >
              {company.email}
            </a>
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-bone"
            >
              LinkedIn
            </a>
            <Link
              href="/legal/privacy"
              className="transition-colors duration-200 hover:text-bone"
            >
              Privacy
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
