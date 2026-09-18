"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryNav } from "@/data/navigation";
import { company } from "@/data/company";
import { cx } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on navigation. Adjusting state during render on a
  // changed value is React's documented pattern for this and avoids the
  // cascading render an effect would cause.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  // Lock scroll behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpenMenu(null);
      setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Small delay so the pointer can cross the gap into the panel.
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 120);
  };
  const cancelClose = () => window.clearTimeout(closeTimer.current);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || mobileOpen
          ? "border-b border-[var(--rule)] bg-[rgba(9,11,13,0.86)] backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="shell-wide flex h-[72px] items-center justify-between gap-6">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label={`${company.name} — home`}
        >
          <Image
            src="/images/brand/zeus-wordmark.webp"
            alt={company.name}
            width={702}
            height={285}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden lg:block"
          aria-label="Primary"
          onMouseLeave={scheduleClose}
        >
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li
                  key={item.label}
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenMenu(item.children ? item.label : null);
                  }}
                >
                  <Link
                    href={item.href}
                    aria-expanded={
                      item.children ? openMenu === item.label : undefined
                    }
                    onFocus={() =>
                      setOpenMenu(item.children ? item.label : null)
                    }
                    className={cx(
                      "relative block px-4 py-2 text-sm transition-colors duration-200",
                      active
                        ? "text-engineering"
                        : "text-steel hover:text-engineering",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cx(
                        "absolute inset-x-4 bottom-0 h-px origin-left bg-amber transition-transform duration-300",
                        active || openMenu === item.label
                          ? "scale-x-100"
                          : "scale-x-0",
                      )}
                    />
                  </Link>

                  {item.children && openMenu === item.label && (
                    <div
                      className="absolute inset-x-0 top-full border-y border-[var(--rule)] bg-[rgba(9,11,13,0.96)] backdrop-blur-md"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="shell-wide grid grid-cols-2 gap-px bg-[var(--rule)] py-px xl:grid-cols-5">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group bg-graphite px-6 py-7 transition-colors duration-200 hover:bg-carbon"
                          >
                            <span className="block text-sm text-engineering">
                              {child.label}
                            </span>
                            {child.blurb && (
                              <span className="mt-2 block text-xs leading-relaxed text-steel-dim">
                                {child.blurb}
                              </span>
                            )}
                            <span
                              aria-hidden
                              className="mt-4 block h-px w-6 origin-left bg-amber transition-transform duration-300 group-hover:scale-x-[2.5]"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-[3px] border border-[var(--rule-strong)] px-5 py-2.5 text-sm transition-colors duration-200 hover:border-engineering hover:bg-white/[0.04] sm:block"
          >
            Contact
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span className="sr-only">
              {mobileOpen ? "Close menu" : "Open menu"}
            </span>
            <span aria-hidden className="relative block h-3 w-6">
              <span
                className={cx(
                  "absolute left-0 block h-px w-full bg-engineering transition-all duration-300",
                  mobileOpen ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cx(
                  "absolute left-0 block h-px w-full bg-engineering transition-all duration-300",
                  mobileOpen ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        hidden={!mobileOpen}
        className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-[var(--rule)] bg-graphite lg:hidden"
      >
        <nav aria-label="Primary mobile" className="shell py-6">
          <ul className="divide-y divide-[var(--rule)]">
            {primaryNav.map((item) => (
              <li key={item.label} className="py-5">
                <Link
                  href={item.href}
                  className="display block text-[1.75rem] leading-none"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-4 space-y-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-1 text-sm text-steel"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-8 block rounded-[3px] bg-engineering px-6 py-4 text-center text-sm font-medium text-graphite"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
