# School of Brilliance – Website (Stage 1)

Premium multilingual (বাংলা / English / Banglish) IELTS education website built with
Next.js, React, TypeScript, Tailwind CSS and Framer Motion. Frontend only: no backend,
database, real login or payment processing.

## What is included in Stage 1
- Design system (navy and gold tokens in `tailwind.config.ts`, fonts in `app/layout.tsx`)
- Three-language system with saved choice (`lib/i18n/`)
- Complete homepage (navbar, hero, services, courses, mock test packages, instructor, how it works, demo testimonials, FAQ, final CTA, footer)
- Centralised pricing (`data/pricing.ts`) and contact details (`data/site.ts`)
- `sitemap.xml`, `robots.txt` and a GitHub Pages deployment workflow
- Pages not built yet (mock tests, courses, booking, dashboards, admin and so on) show a "coming soon" page. They arrive in the next stages.

## Important status notes
- This ZIP was written without internet access, so `npm install` and `npm run build` have **not** been run on it. Only the translation files and pricing data were type-checked.
- There is no `package-lock.json` yet. Running `npm install` creates it. Commit it to GitHub afterwards.
- Language switching changes text on the same URL. Separate language URLs (such as `/bn`) and `hreflang` tags are not included yet.

## 1. Install Node.js
Download the **LTS** version from https://nodejs.org and install it. Check with `node -v` (v20 or newer).

## 2. Run locally
Open a terminal in the project folder, then:

```bash
npm install
npm run dev
```
Open http://localhost:3000.

Production check:

```bash
npm run build
npm run start
```
If `npm run build` shows an error, send the message to your developer or back to Claude.

## 3. Deploy on GitHub Pages (current setup)
The project includes `.github/workflows/deploy.yml`, which builds the site and publishes it automatically.

1. Upload **all** project files to the `main` branch of your repository, including the hidden `.github` folder. If you drag files in the browser, check that `.github/workflows/deploy.yml` appears in the repository.
2. In the repository open **Settings → Pages** and set **Source** to **GitHub Actions** (not "Deploy from a branch").
3. Open the **Actions** tab and wait for "Deploy to GitHub Pages" to finish (a few minutes). Click the run to read any error.
4. Your site is at https://fnboutique.github.io/school-of-brilliance/

If you rename the repository, change `NEXT_PUBLIC_BASE_PATH` and `NEXT_PUBLIC_SITE_URL` in `.github/workflows/deploy.yml`.

Local test of the GitHub Pages build (optional):

```bash
STATIC_EXPORT=true NEXT_PUBLIC_BASE_PATH=/school-of-brilliance npm run build
```
(on Windows PowerShell set the variables first with `$env:STATIC_EXPORT="true"`.) The result is in the `out` folder.

## 4. Later: Vercel and schoolofbrilliance.com
Real login, bookings and payments need a server, so the final site should move to Vercel. Import the repository at vercel.com, add the domain under **Settings → Domains** and add the DNS records Vercel shows. Leave the two environment variables unset there.

## Editing content
| What | Where |
|---|---|
| Any text in বাংলা / English / Banglish | `lib/i18n/bn.ts`, `en.ts`, `bl.ts` (keep the same structure in all three) |
| Mock test package prices | `data/pricing.ts` |
| Phone, email, Facebook, WhatsApp | `data/site.ts` |
| Logo | replace `public/images/logo-badge.png` (and `app/icon.png` for the browser tab icon) |
| Instructor photo | replace the placeholder block in `components/sections/InstructorIntro.tsx` with an `<Image>` |
| Services and links | `data/services.ts` |

## Folder structure
```
app/            pages, layout, sitemap, robots
components/     layout/ (navbar, footer), sections/ (homepage), ui/
data/           pricing, services, site constants
lib/i18n/       en.ts, bn.ts, bl.ts, provider.tsx
public/images/  logo files
```

## Demonstration-only in this stage
- Testimonials are clearly labelled sample placeholders.
- Prices shown on the Speaking, Writing and Speaking & Writing cards use the poster's package prices ("from 120 BDT"). Complete Mock Test and all course prices are "to be confirmed".
