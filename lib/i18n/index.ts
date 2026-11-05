import { en, type Dict } from "./en";
import { bn } from "./bn";
import { bl } from "./bl";

export type Lang = "en" | "bn" | "bl";
export type { Dict };

export const DEFAULT_LANG: Lang = "en";

export const LANGS: { code: Lang; label: string; htmlLang: string }[] = [
  { code: "bn", label: "বাংলা", htmlLang: "bn" },
  { code: "en", label: "English", htmlLang: "en" },
  { code: "bl", label: "Banglish", htmlLang: "bn-Latn" },
];

export const dictionaries: Record<Lang, Dict> = { en, bn, bl };

export const isLang = (v: unknown): v is Lang => v === "en" || v === "bn" || v === "bl";
