"use client";

import { useLang } from "@/lib/i18n/provider";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HowItWorks() {
  const { t } = useLang();
  return (
    <section className="section-pad bg-offwhite">
      <div className="container-page">
        <SectionHeading eyebrow={t.how.eyebrow} title={t.how.title} />
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.how.steps.map((s, i) => (
            <Reveal key={s.t} delay={(i % 3) * 0.07}>
              <li className="relative h-full rounded-2xl border border-navy/10 bg-white p-6 pl-20 shadow-card">
                <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-gold-gradient font-display text-lg font-bold text-navy">{i + 1}</span>
                <h3 className="text-lg font-semibold">{s.t}</h3>
                <p className="mt-1.5 text-sm text-navy/65">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
