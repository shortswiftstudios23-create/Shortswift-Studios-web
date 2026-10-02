# ShortSwift Studio (React + Vite)

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Deploy
1. Push to GitHub.
2. In Vercel: **Add New > Project**, import the repo. Framework is auto-detected as Vite (build `npm run build`, output `dist`).
3. `vercel.json` already rewrites all routes to `index.html` so direct links and refreshes work.

## Routes
`/` `/services` `/about` `/team` `/team/towsif-khan` `/team/mesbah-hasin` `/testimonials` `/gallery` `/contact` `/book-a-meeting` `/portfolio/brand|web|social|video`

## Structure
- `src/site/routes.js` - all URLs and nav/footer data (edit links here)
- `src/site/Shell.jsx` - header, mobile menu, footer, progress bar
- `src/pages/*/` - one folder per page: `*.jsx` markup, `*.css` page styles, `*.run.js` interactive animations

## SEO
See `SEO-COPY.md` for ready-to-paste titles, descriptions and bios. In Vercel, add an environment variable `SITE_URL` (your real domain) so `sitemap.xml` is generated.

## Media
Compressed videos live in `public/videos`, posters in `public/images/video`, portfolio images in `public/images/brand` and `public/images/social`.

## Before going live
- The site URL defaults to `https://shortswift-studios-web.vercel.app`. When you buy a custom domain, set `SITE_URL` in Vercel (or edit `scripts/seo.mjs` and the JSON-LD in `index.html`).

## Long-form videos (automatic)
Drop files into `public/videos/long-form/faceless`, `promotional` or `talking-head` (see the README.txt in that folder). They appear on the Video Editing page on the next build. Too big for GitHub? Add YouTube links to `public/videos/long-form/links.json` instead.

## Founder photos (automatic)
Replace `public/images/team/towsif-khan.jpg` and `public/images/team/mesbah-hasin.jpg` with your own crops (same names). They update on every page.

## Replacing stand-in website screenshots
`public/images/web/vulcan-sportswear.jpg`, `hengyu-dac-211.jpg` and `ayah-scents.jpg` are generated stand-ins shown on Home and Gallery. Replace them with real screenshots (same names, ideally 1200x800).
