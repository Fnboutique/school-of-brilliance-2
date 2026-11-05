import type { Metadata } from "next";
import ComingSoon from "@/components/sections/ComingSoon";

export const metadata: Metadata = { title: "Coming soon", robots: { index: false, follow: true } };

// Required for static export (GitHub Pages): list every planned page that is not built yet.
// Remove an entry once its real page exists.
const planned = [
  "mock-tests", "mock-tests/complete", "mock-tests/speaking", "mock-tests/writing", "mock-tests/speaking-writing",
  "courses", "courses/complete-ielts", "courses/speaking-writing", "courses/crash-course",
  "booking", "about", "instructor", "contact", "faq",
  "privacy-policy", "terms-and-conditions", "refund-policy",
  "login", "register", "checkout",
  "dashboard", "dashboard/courses", "dashboard/mock-tests", "dashboard/appointments", "dashboard/profile",
  "admin", "admin/students", "admin/courses", "admin/mock-tests", "admin/appointments", "admin/content", "admin/settings",
];

export const dynamicParams = false;

export function generateStaticParams() {
  return planned.map((p) => ({ slug: p.split("/") }));
}

/** Temporary catch-all: every page not built yet shows this. Delete once all pages exist. */
export default function PlaceholderPage() {
  return <ComingSoon />;
}
