"use client";

import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLang } from "@/lib/i18n/provider";
import { asset } from "@/data/site";

// Deterministic positions so server and client markup match.
const particles = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  top: (i * 53 + 7) % 100,
  size: 2 + (i % 3),
  dur: 5 + (i % 5),
  delay: (i % 7) * 0.6,
}));

function BadgeVisual() {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 14 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 14 });

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[460px]"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div aria-hidden className="absolute inset-[8%] rounded-full bg-gold/20 blur-3xl" />
      <motion.div
        aria-hidden
        className="absolute inset-[4%] rounded-full border border-dashed border-gold/40"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-[16%] rounded-full border border-gold-light/25"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 grid place-items-center"
        animate={reduce ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div style={{ rotateX, rotateY, transformPerspective: 900 }} className="w-[72%] drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]">
          <img src={asset("/images/logo-badge.png")} alt="School of Brilliance logo" width={376} height={315} className="h-auto w-full" />
        </motion.div>
      </motion.div>
      <Sparkles aria-hidden className="absolute left-[6%] top-[22%] h-6 w-6 text-gold-light/80" />
      <Sparkles aria-hidden className="absolute bottom-[18%] right-[8%] h-5 w-5 text-gold/70" />
    </div>
  );
}

export default function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 80% 30%, rgba(214,166,56,0.18), transparent 70%), radial-gradient(50% 60% at 10% 90%, rgba(16,38,83,0.9), transparent 70%), linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "auto, auto, 56px 56px, 56px 56px",
        }}
      />
      {!reduce &&
        particles.map((p, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="absolute rounded-full bg-gold-light"
            style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
            animate={{ opacity: [0.1, 0.7, 0.1], y: [0, -14, 0] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

      <div className="container-page relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-sm text-gold-light"
          >
            <Sparkles aria-hidden className="h-4 w-4" />
            {t.hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="gold-text text-4xl font-semibold sm:text-5xl lg:text-6xl"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg text-white/75"
          >
            {t.hero.sub}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/courses" className="btn-gold">
              {t.hero.ctaCourses}
            </Link>
            <Link href="/booking" className="btn-ghost-light">
              {t.hero.ctaMock}
            </Link>
          </motion.div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            {t.hero.pills.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <BadgeVisual />
      </div>
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
}
