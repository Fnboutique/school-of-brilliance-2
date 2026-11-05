"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLang } from "@/lib/i18n/provider";

const links = [
  { href: "/", key: "home" },
  { href: "/mock-tests", key: "mockTests" },
  { href: "/courses", key: "courses" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export default function Navbar() {
  const { t } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-gold focus:px-3 focus:py-2 focus:text-navy">
        {t.common.skipToContent}
      </a>
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <Logo className="h-12" />

        <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${isActive(l.href) ? "text-gold-light" : "text-white/80 hover:text-white"}`}
            >
              {t.nav[l.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher id="desktop" />
          <Link href="/login" className="px-2 text-sm font-medium text-white/80 hover:text-white">
            {t.nav.login}
          </Link>
          <Link href="/booking" className="btn-gold !py-2.5">
            {t.nav.cta}
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white xl:hidden"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-navy xl:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`rounded-xl px-4 py-3 text-base font-medium ${isActive(l.href) ? "bg-white/10 text-gold-light" : "text-white/85 hover:bg-white/5"}`}
                >
                  {t.nav[l.key]}
                </Link>
              ))}
              <Link href="/login" className="rounded-xl px-4 py-3 text-base font-medium text-white/85 hover:bg-white/5">
                {t.nav.login}
              </Link>
              <div className="mt-3 flex flex-col gap-3">
                <LanguageSwitcher id="mobile" className="self-start" />
                <Link href="/booking" className="btn-gold">
                  {t.nav.cta}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
