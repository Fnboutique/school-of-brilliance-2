"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLang } from "@/lib/i18n/provider";
import { LANGS } from "@/lib/i18n";

export default function LanguageSwitcher({ id, className = "" }: { id: string; className?: string }) {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t.common.language} className={`inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1 ${className}`}>
      <Globe aria-hidden className="ml-2 h-4 w-4 text-gold-light" />
      {LANGS.map((l) => {
        const active = lang === l.code;
        return (
          <button
            key={l.code}
            type="button"
            lang={l.htmlLang}
            aria-pressed={active}
            onClick={() => setLang(l.code)}
            className={`relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${active ? "text-navy" : "text-white/75 hover:text-white"}`}
          >
            {active && <motion.span layoutId={`lang-pill-${id}`} className="absolute inset-0 rounded-full bg-gold-gradient" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
            <span className="relative">{l.label}</span>
          </button>
        );
      })}
    </div>
  );
}
