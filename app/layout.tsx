import type { Metadata, Viewport } from "next";
import { Hind_Siliguri, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const bn = Hind_Siliguri({ subsets: ["bengali", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-bn", display: "swap" });
const display = Playfair_Display({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap" });

const description =
  "School of Brilliance is an online IELTS preparation platform offering realistic mock tests, personalised feedback and flexible courses. Available in বাংলা, English and Banglish.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "School of Brilliance | Online IELTS Mock Tests & Courses", template: "%s | School of Brilliance" },
  description,
  keywords: ["IELTS", "IELTS mock test", "IELTS course", "IELTS Bangladesh", "School of Brilliance"],
  openGraph: {
    title: "School of Brilliance | Your IELTS Success Story Starts Here",
    description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#071B3D", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-lang="en" className={`${inter.variable} ${bn.variable} ${display.variable}`}>
      <body>
        <LanguageProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
