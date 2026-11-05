"use client";

import Link from "next/link";
import { Monitor } from "lucide-react";
import { useLang } from "@/lib/i18n/provider";
import { featuredCourses } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedCourses() {
  const { t } = useLang();
  return (
    <section className="section-pad bg-royal text-white">
      <div className="container-page">
        <SectionHeading dark eyebrow={t.courses.eyebrow} title={t.courses.title} sub={t.courses.sub} />
        <div className="-mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {featuredCourses.map((c) => {
            const Icon = c.icon;
            const item = t.courses.items[c.key];
            return (
              <article key={c.key} className="flex min-w-[85%] snap-center flex-col rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:border-gold sm:min-w-[60%] md:min-w-0">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-navy">
                    <Icon aria-hidden className="h-6 w-6" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
                    <Monitor aria-hidden className="h-3.5 w-3.5" />
                    {t.courses.format}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70">{item.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-gold-light">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  <p className="mb-4 text-sm text-white/55">{t.common.priceSoon}</p>
                  <Link href={c.href} className="btn-gold w-full">
                    {t.courses.viewCourse}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
