"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";
import { useLang } from "@/lib/i18n/provider";
import { formatAmount, mockPackages, savings } from "@/data/pricing";
import SectionHeading from "@/components/ui/SectionHeading";

export default function MockPackages() {
  const { t } = useLang();
  const [selectedId, setSelectedId] = useState(mockPackages[0].id);
  const selected = mockPackages.find((p) => p.id === selectedId) ?? mockPackages[0];
  const cur = t.common.currency;

  return (
    <section className="section-pad bg-offwhite">
      <div className="container-page">
        <SectionHeading eyebrow={t.packages.eyebrow} title={t.packages.title} sub={t.packages.sub} />
        <div role="radiogroup" aria-label={t.packages.title} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {mockPackages.map((p) => {
            const active = p.id === selectedId;
            return (
              <button
                key={p.id}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setSelectedId(p.id)}
                className={`relative flex flex-col rounded-2xl border p-6 text-left transition-all duration-300 ${
                  active ? "-translate-y-1 border-gold bg-navy text-white shadow-gold" : "border-navy/10 bg-white text-navy shadow-card hover:border-gold"
                }`}
              >
                <span className="absolute -top-3 right-4 rounded-full bg-gold-gradient px-3 py-1 text-xs font-bold text-navy">{t.packages.off}</span>
                <p className="font-display text-5xl font-semibold">{p.tests}</p>
                <p className={`text-sm ${active ? "text-white/70" : "text-navy/60"}`}>{p.tests === 1 ? t.packages.mockOne : t.packages.mockMany}</p>
                <p className={`mt-5 text-sm line-through ${active ? "text-white/50" : "text-navy/45"}`}>
                  <span className="sr-only">{t.packages.original}: </span>
                  {formatAmount(p.original)} {cur}
                </p>
                <p className={`text-2xl font-semibold ${active ? "text-gold-light" : "text-navy"}`}>
                  {formatAmount(p.discounted)} <span className="text-sm font-medium">{cur}</span>
                </p>
                <p className={`mt-3 rounded-lg px-3 py-1.5 text-xs font-medium ${active ? "bg-white/10 text-gold-light" : "bg-gold/15 text-navy"}`}>
                  {t.packages.save} {formatAmount(savings(p))} {cur}
                </p>
                <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${active ? "text-gold-light" : "text-navy/70"}`}>
                  {active && <Check aria-hidden className="h-4 w-4" />}
                  {active ? t.packages.selected : t.packages.select}
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <Link href={`/booking?package=${selected.id}`} className="btn-gold">
            {t.packages.cta} · {selected.tests} {selected.tests === 1 ? t.packages.mockOne : t.packages.mockMany} · {formatAmount(selected.discounted)} {cur}
          </Link>
          <p className="max-w-xl text-sm text-navy/60">{t.packages.note}</p>
        </div>
      </div>
    </section>
  );
}
