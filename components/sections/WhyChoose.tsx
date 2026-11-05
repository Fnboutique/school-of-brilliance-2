"use client";

import { Compass, Clock, ListChecks, Mic } from "lucide-react";
import { useLang } from "@/lib/i18n/provider";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const icons = [Mic, Compass, Clock, ListChecks];

export default function WhyChoose() {
  const { t } = useLang();
  return (
    <section className="section-pad bg-white">
      <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading align="left" eyebrow={t.why.eyebrow} title={t.why.title} sub={t.why.sub} />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {t.why.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.t} delay={i * 0.07}>
                <div className="h-full rounded-2xl bg-offwhite p-6 ring-1 ring-navy/10 transition-shadow hover:shadow-card">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-navy text-gold-light">
                    <Icon aria-hidden className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{item.t}</h3>
                  <p className="mt-2 text-sm text-navy/65">{item.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
