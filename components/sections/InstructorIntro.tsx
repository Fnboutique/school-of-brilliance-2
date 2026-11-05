"use client";

import Link from "next/link";
import { Award, GraduationCap, Medal } from "lucide-react";
import { useLang } from "@/lib/i18n/provider";
import SectionHeading from "@/components/ui/SectionHeading";

const icons = [Medal, GraduationCap, Award];

export default function InstructorIntro() {
  const { t } = useLang();
  const i = t.instructor;
  return (
    <section className="section-pad bg-navy text-white">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Replace this placeholder with a professional photograph (see README). */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          <div aria-hidden className="absolute -inset-3 rounded-[2rem] border border-gold/40" />
          <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-royal to-navy-deep ring-1 ring-gold/50">
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(243,201,105,0.2),transparent_60%)]" />
            <div className="relative text-center">
              <p className="gold-text font-display text-7xl font-semibold">MH</p>
              <p className="mt-3 text-sm text-white/55">{i.photoNote}</p>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading dark align="left" eyebrow={i.eyebrow} title={i.name} />
          <p className="mt-2 font-medium text-gold-light">{i.role}</p>
          <p className="mt-5 max-w-xl text-white/75">{i.bio}</p>
          <ul className="mt-7 flex flex-wrap gap-3">
            {i.credentials.map((c, idx) => {
              const Icon = icons[idx];
              return (
                <li key={c} className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/5 px-4 py-2 text-sm">
                  <Icon aria-hidden className="h-4 w-4 text-gold-light" />
                  {c}
                </li>
              );
            })}
          </ul>
          <Link href="/instructor" className="btn-gold mt-9">
            {i.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
