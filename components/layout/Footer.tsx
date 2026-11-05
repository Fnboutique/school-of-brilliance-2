"use client";

import Link from "next/link";
import { Facebook, Mail, MessageCircle, Phone } from "lucide-react";
import Logo from "./Logo";
import { useLang } from "@/lib/i18n/provider";
import { services } from "@/data/services";
import { SITE } from "@/data/site";

const quick = [
  { href: "/", key: "home" },
  { href: "/mock-tests", key: "mockTests" },
  { href: "/courses", key: "courses" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export default function Footer() {
  const { t } = useLang();
  const mock = services.filter((s) => s.kind === "mock");
  const courses = services.filter((s) => s.kind === "course");
  const col = "text-sm text-white/70 transition-colors hover:text-gold-light";

  return (
    <footer className="border-t border-gold/40 bg-navy-deep text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
        <div>
          <Logo className="h-16" />
          <p className="mt-5 max-w-xs text-sm text-white/70">{t.footer.about}</p>
          <div className="mt-6 flex gap-3">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label={t.footer.facebook} className="rounded-full border border-white/15 p-2.5 hover:border-gold hover:text-gold-light">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={t.footer.whatsapp} className="rounded-full border border-white/15 p-2.5 hover:border-gold hover:text-gold-light">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href={`mailto:${SITE.email}`} aria-label={t.footer.email} className="rounded-full border border-white/15 p-2.5 hover:border-gold hover:text-gold-light">
              <Mail className="h-4 w-4" />
            </a>
            <a href={`tel:${SITE.phoneTel}`} aria-label={t.footer.phone} className="rounded-full border border-white/15 p-2.5 hover:border-gold hover:text-gold-light">
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-base font-semibold text-gold-light">{t.footer.quickLinks}</h3>
          <ul className="space-y-2.5">
            {quick.map((q) => (
              <li key={q.href}>
                <Link href={q.href} className={col}>
                  {t.nav[q.key]}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/faq" className={col}>
                {t.faq.eyebrow}
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid gap-8">
          <div>
            <h3 className="mb-4 text-base font-semibold text-gold-light">{t.footer.courses}</h3>
            <ul className="space-y-2.5">
              {courses.map((s) => (
                <li key={s.key}>
                  <Link href={s.href} className={col}>
                    {t.services.items[s.key].title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-8">
          <div>
            <h3 className="mb-4 text-base font-semibold text-gold-light">{t.footer.mockTests}</h3>
            <ul className="space-y-2.5">
              {mock.map((s) => (
                <li key={s.key}>
                  <Link href={s.href} className={col}>
                    {t.services.items[s.key].title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-base font-semibold text-gold-light">{t.footer.contact}</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href={`tel:${SITE.phoneTel}`} className="hover:text-gold-light">{SITE.phoneDisplay}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="break-all hover:text-gold-light">{SITE.email}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} School of Brilliance. {t.footer.rights}</p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <li><Link href="/privacy-policy" className="hover:text-gold-light">{t.footer.privacy}</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-gold-light">{t.footer.terms}</Link></li>
            <li><Link href="/refund-policy" className="hover:text-gold-light">{t.footer.refund}</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
