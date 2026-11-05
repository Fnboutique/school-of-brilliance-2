"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n/provider";

export default function FinalCta() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-center text-white sm:py-28">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(50%_70%_at_50%_0%,rgba(214,166,56,0.25),transparent_70%)]" />
      <div className="container-page relative max-w-3xl">
        <h2 className="gold-text text-3xl font-semibold sm:text-5xl">{t.finalCta.title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">{t.finalCta.sub}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/courses" className="btn-gold">
            {t.finalCta.start}
          </Link>
          <Link href="/booking" className="btn-ghost-light">
            {t.finalCta.book}
          </Link>
        </div>
      </div>
    </section>
  );
}
