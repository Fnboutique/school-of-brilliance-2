"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n/provider";
import { services } from "@/data/services";
import { formatAmount } from "@/data/pricing";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  const { t } = useLang();
  return (
    <section className="section-pad bg-offwhite">
      <div className="container-page">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} sub={t.services.sub} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            const item = t.services.items[s.key];
            const isCourse = s.kind === "course";
            return (
              <Reveal key={s.key} delay={(i % 4) * 0.06} className={s.key === "courseCrash" ? "lg:col-span-2" : ""}>
                <article className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold-light">
                      <Icon aria-hidden className="h-6 w-6" />
                    </span>
                    <span className="text-xs font-medium text-navy/55">{isCourse ? t.services.groupCourse : t.services.groupMock}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-navy/65">{item.desc}</p>
                  <div className="mt-5 border-t border-navy/10 pt-4">
                    {s.priceFrom !== null ? (
                      <p className="flex items-baseline gap-2">
                        <span className="text-xs text-navy/55">{t.common.from}</span>
                        <span className="text-2xl font-semibold text-navy">
                          {formatAmount(s.priceFrom)} <span className="text-sm font-medium">{t.common.currency}</span>
                        </span>
                      </p>
                    ) : (
                      <p className="text-sm text-navy/55">{t.common.priceSoon}</p>
                    )}
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <Link href={s.href} className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold">
                      {t.common.learnMore}
                      <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link href={s.ctaHref} className="btn-gold !px-4 !py-2 text-xs">
                      {isCourse ? t.common.enrollNow : t.common.bookNow}
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
