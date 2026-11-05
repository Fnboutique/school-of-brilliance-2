"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Info, Quote } from "lucide-react";
import { useLang } from "@/lib/i18n/provider";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  const { t } = useLang();
  const items = t.testimonials.items;
  const [index, setIndex] = useState(0);
  const go = (d: number) => setIndex((i) => (i + d + items.length) % items.length);
  const current = items[index];

  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />
        <div className="mx-auto mt-6 flex max-w-2xl items-start gap-2 rounded-xl border border-gold/50 bg-gold/10 px-4 py-3 text-sm text-navy/80">
          <Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
          <p>
            <strong className="font-semibold">{t.testimonials.demoBadge}.</strong> {t.testimonials.demoNote}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl" aria-live="polite">
          <div className="relative min-h-[240px] rounded-3xl bg-navy p-8 text-white sm:p-12">
            <Quote aria-hidden className="absolute right-8 top-8 h-10 w-10 text-gold/30" />
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="font-display text-xl leading-relaxed sm:text-2xl">{current.quote}</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold text-gold-light">{current.name}</span>
                  <span className="text-white/60"> · {current.role}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <button type="button" onClick={() => go(-1)} aria-label={t.testimonials.prev} className="rounded-full border border-navy/20 p-3 hover:border-gold hover:bg-navy hover:text-white">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2" role="tablist">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`${i + 1} / ${items.length}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-gold" : "w-2.5 bg-navy/20"}`}
                />
              ))}
            </div>
            <button type="button" onClick={() => go(1)} aria-label={t.testimonials.next} className="rounded-full border border-navy/20 p-3 hover:border-gold hover:bg-navy hover:text-white">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
