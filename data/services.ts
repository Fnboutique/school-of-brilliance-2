import { BookOpen, ClipboardCheck, GraduationCap, Mic, PenLine, Zap, type LucideIcon } from "lucide-react";
import type { Dict } from "@/lib/i18n/en";
import { mockPackages } from "./pricing";

export type ServiceKey = keyof Dict["services"]["items"];

export interface Service {
  key: ServiceKey;
  kind: "mock" | "course";
  icon: LucideIcon;
  href: string;
  ctaHref: string;
  /** Lowest price in BDT, or null while the price is still to be confirmed. */
  priceFrom: number | null;
}

const lowestPackage = Math.min(...mockPackages.map((p) => p.discounted));

export const services: Service[] = [
  { key: "mockComplete", kind: "mock", icon: ClipboardCheck, href: "/mock-tests/complete", ctaHref: "/booking?type=complete", priceFrom: null },
  { key: "mockSpeaking", kind: "mock", icon: Mic, href: "/mock-tests/speaking", ctaHref: "/booking?type=speaking", priceFrom: lowestPackage },
  { key: "mockWriting", kind: "mock", icon: PenLine, href: "/mock-tests/writing", ctaHref: "/booking?type=writing", priceFrom: lowestPackage },
  { key: "mockSpeakingWriting", kind: "mock", icon: BookOpen, href: "/mock-tests/speaking-writing", ctaHref: "/booking?type=speaking-writing", priceFrom: lowestPackage },
  { key: "courseComplete", kind: "course", icon: GraduationCap, href: "/courses/complete-ielts", ctaHref: "/courses/complete-ielts", priceFrom: null },
  { key: "courseSW", kind: "course", icon: Mic, href: "/courses/speaking-writing", ctaHref: "/courses/speaking-writing", priceFrom: null },
  { key: "courseCrash", kind: "course", icon: Zap, href: "/courses/crash-course", ctaHref: "/courses/crash-course", priceFrom: null },
];

export const featuredCourses = [
  { key: "complete" as const, href: "/courses/complete-ielts", icon: GraduationCap },
  { key: "sw" as const, href: "/courses/speaking-writing", icon: Mic },
  { key: "crash" as const, href: "/courses/crash-course", icon: Zap },
];
