// Runs after `vite build`.
//  1. Writes dist/robots.txt and dist/sitemap.xml
//  2. Pre-renders the <head> (title, description, canonical, Open Graph) for every route into
//     dist/<route>/index.html, so Google, WhatsApp and Facebook see the right text without
//     running JavaScript. Vercel serves these files before the SPA fallback.
// Set SITE_URL in Vercel (Settings > Environment Variables), e.g. https://shortswift.com
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';

const raw = process.env.SITE_URL || 'https://shortswift-studios-web.vercel.app';
const base = raw.replace(/\/$/, '');

// ---- read route -> title/description straight from the page components
const idx = readFileSync('src/pages/index.js', 'utf8');
const routes = [...idx.matchAll(/path: '([^']+)', element: createElement\((\w+)\)/g)].map((m) => ({ path: m[1], comp: m[2] }));
const folders = Object.fromEntries([...idx.matchAll(/import (\w+) from '\.\/(\w+)\//g)].map((m) => [m[1], m[2]]));
const meta = routes.map(({ path, comp }) => {
  const src = readFileSync(`src/pages/${folders[comp]}/${comp}.jsx`, 'utf8');
  const title = (src.match(/\n\s+title="([^"]*)"/) || [])[1] || '';
  const description = (src.match(/\n\s+description="([^"]*)"/) || [])[1] || '';
  return { path, title, description };
});

const esc = (s) => s.replace(/&(?!amp;)/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

if (!base) {
  writeFileSync('dist/robots.txt', 'User-agent: *\nAllow: /\n');
  console.warn('[seo] SITE_URL not set: wrote robots.txt only. Set SITE_URL to your domain for sitemap, canonical and share image.');
} else {
  const today = new Date().toISOString().slice(0, 10);
  writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${meta.map((m) => `  <url><loc>${base}${m.path}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`);
  writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`);

  const html = readFileSync('dist/index.html', 'utf8');
  const withImage = (h) => h.replace('</head>', `    <meta property="og:image" content="${base}/og-image.png" />\n    <meta property="og:image:width" content="1200" />\n    <meta property="og:image:height" content="630" />\n    <meta name="twitter:image" content="${base}/og-image.png" />\n  </head>`).replace('twitter:card" content="summary"', 'twitter:card" content="summary_large_image"');
  for (const m of meta) {
    const url = base + (m.path === '/' ? '/' : m.path);
    let h = html
      .replace(/<title>.*?<\/title>/s, `<title>${esc(m.title)}</title>`)
      .replace(/(<meta name="description" content=")[^"]*"/, `$1${esc(m.description)}"`)
      .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${esc(m.title)}"`)
      .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${esc(m.description)}"`)
      .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${esc(m.title)}"`)
      .replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${esc(m.description)}"`)
      .replace('</head>', `    <meta property="og:url" content="${url}" />\n    <link rel="canonical" href="${url}" />\n  </head>`);
    h = withImage(h);
    if (m.path === '/') writeFileSync('dist/index.html', h);
    else {
      mkdirSync(`dist${m.path}`, { recursive: true });
      writeFileSync(`dist${m.path}/index.html`, h);
    }
  }
  console.log(`[seo] sitemap + ${meta.length} pre-rendered pages for ${base}`);
}
