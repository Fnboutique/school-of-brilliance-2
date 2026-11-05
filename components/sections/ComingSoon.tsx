"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n/provider";
import { SITE } from "@/data/site";

export default function ComingSoon() {
  const { t } = useLang();
  return (
    <section className="grid min-h-[60vh] place-items-center bg-offwhite px-5 py-24 text-center">
      <div className="max-w-lg">
        <h1 className="text-3xl font-semibold sm:text-4xl">{t.common.comingTitle}</h1>
        <p className="mt-4 text-navy/65">{t.common.comingText}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-gold">
            {t.common.backHome}
          </Link>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline-navy">
            <MessageCircle aria-hidden className="h-4 w-4" />
            {t.common.contactUs}
          </a>
        </div>
      </div>
    </section>
  );
}
