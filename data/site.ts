export const SITE = {
  name: "School of Brilliance",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://schoolofbrilliance.com",
  phoneDisplay: "01761-525710",
  phoneTel: "+8801761525710",
  email: "schoolofbrilliance@outlook.com",
  facebook: "https://www.facebook.com/profile.php?id=61579647175786",
  whatsapp: "https://wa.me/8801761525710",
} as const;

/** Routes listed in sitemap.xml. Extend this array as new public pages are added. */
export const publicRoutes: string[] = [""];

/** Prefix for files in /public so images also work when the site is served from a sub-path (GitHub Pages). */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
