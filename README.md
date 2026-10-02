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
