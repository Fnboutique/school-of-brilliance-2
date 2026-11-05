"use client";

import { Laptop, MessageSquareText, ShieldCheck, Target, Users } from "lucide-react";
import { useLang } from "@/lib/i18n/provider";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const icons = [Target, MessageSquareText, ShieldCheck, Laptop, Users];

export default function Trust() {
  const { t } = useLang();
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading title={t.trust.title} />
        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {t.trust.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.t} delay={i * 0.06}>
                <div className="flex h-full flex-col border-t-2 border-gold pt-5">
                  <Icon aria-hidden className="h-7 w-7 text-gold" />
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
