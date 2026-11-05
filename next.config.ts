import type { NextConfig } from "next";

// GitHub Pages build: STATIC_EXPORT=true and NEXT_PUBLIC_BASE_PATH=/school-of-brilliance (set in the workflow).
// Normal local development and Vercel builds leave both unset.
const staticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(staticExport && {
    output: "export",
    trailingSlash: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  }),
  images: { unoptimized: staticExport },
};

export default nextConfig;
