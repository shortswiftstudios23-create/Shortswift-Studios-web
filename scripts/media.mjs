// Scans public/videos/long-form and writes src/generated/long-form.json.
// Runs automatically before `npm run dev` and `npm run build` (so also on Vercel).
//
//   public/videos/long-form/faceless/*.mp4        -> category "Faceless"
//   public/videos/long-form/promotional/*.mp4     -> category "Promotional"
//   public/videos/long-form/talking-head/*.mp4    -> category "Talking Head"
//   (any other sub-folder name becomes its own category)
//   optional poster: same file name with .jpg/.png/.webp (my-film.mp4 + my-film.jpg)
//   optional links:  public/videos/long-form/links.json  (YouTube / Vimeo links)
import { readdirSync, statSync, readFileSync, writeFileSync, existsSync, openSync, readSync, closeSync, fstatSync, mkdirSync } from 'node:fs';
import { join, extname, basename } from 'node:path';

const ROOT = 'public/videos/long-form';
const OUT = 'src/generated/long-form.json';
const VIDEO = new Set(['.mp4', '.m4v', '.mov', '.webm']);
const IMG = ['.jpg', '.jpeg', '.png', '.webp'];

const pretty = (s) =>
  s.replace(/^\d+[\s._-]+/, '').replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim()
    .replace(/\b([a-z])/g, (m) => m.toUpperCase());
const natural = (a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
const fmt = (sec) => {
  if (!sec || !isFinite(sec)) return '';
  const s = Math.round(sec), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
  return h ? `${h}:${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}` : `${m}:${String(r).padStart(2, '0')}`;
};

// Reads the duration from an MP4/MOV header without loading the whole file.
function duration(file) {
  let fd;
  try {
    fd = openSync(file, 'r');
    const size = fstatSync(fd).size;
    let pos = 0;
    while (pos + 8 <= size) {
      const h = Buffer.alloc(16);
      readSync(fd, h, 0, 16, pos);
      let len = h.readUInt32BE(0), hdr = 8;
      const type = h.toString('latin1', 4, 8);
      if (len === 1) { len = Number(h.readBigUInt64BE(8)); hdr = 16; } else if (len === 0) len = size - pos;
      if (type === 'moov') {
        const buf = Buffer.alloc(Math.min(len - hdr, 8_000_000));
        readSync(fd, buf, 0, buf.length, pos + hdr);
        let p = 0;
        while (p + 8 <= buf.length) {
          const l = buf.readUInt32BE(p), t = buf.toString('latin1', p + 4, p + 8);
          if (t === 'mvhd') {
            const v = buf[p + 8];
            const ts = v === 1 ? buf.readUInt32BE(p + 28) : buf.readUInt32BE(p + 20);
            const du = v === 1 ? Number(buf.readBigUInt64BE(p + 32)) : buf.readUInt32BE(p + 24);
            return ts ? du / ts : 0;
          }
          if (l < 8) break;
          p += l;
        }
        return 0;
      }
      if (len < 8) break;
      pos += len;
    }
  } catch { /* unreadable file: no duration */ } finally { if (fd !== undefined) closeSync(fd); }
  return 0;
}

const enc = (p) => p.split('/').map(encodeURIComponent).join('/');
const items = [];
const warn = [];

function scan(dir, category) {
  if (!existsSync(dir)) return;
  const names = readdirSync(dir).sort(natural);
  for (const name of names) {
    const full = join(dir, name);
    if (statSync(full).isDirectory() || !VIDEO.has(extname(name).toLowerCase())) continue;
    const base = basename(name, extname(name));
    const poster = IMG.map((e) => base + e).find((n) => names.includes(n));
    const url = '/' + full.replace(/^public\//, '');
    const mb = statSync(full).size / 1048576;
    if (mb > 95) warn.push(`${name} is ${mb.toFixed(0)} MB. GitHub rejects files over 100 MB, so compress it or use a YouTube link in links.json.`);
    items.push({
      t: pretty(base), cat: category, cl: category + ' video', d: fmt(duration(full)), v: false,
      src: enc(url), poster: poster ? enc(url.replace(name, poster)) : '', embed: '',
    });
  }
}

function embedOf(u) {
  let m;
  if ((m = u.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/))) return { embed: `https://www.youtube.com/embed/${m[1]}?rel=0`, poster: `https://i.ytimg.com/vi/${m[1]}/hqdefault.jpg` };
  if ((m = u.match(/vimeo\.com\/(?:video\/)?(\d+)/))) return { embed: `https://player.vimeo.com/video/${m[1]}`, poster: '' };
  return null;
}

if (existsSync(ROOT)) {
  scan(ROOT, 'Long-form');
  for (const d of readdirSync(ROOT).sort(natural)) {
    const full = join(ROOT, d);
    if (statSync(full).isDirectory()) scan(full, pretty(d));
  }
  const links = join(ROOT, 'links.json');
  if (existsSync(links)) {
    try {
      for (const l of JSON.parse(readFileSync(links, 'utf8') || '[]')) {
        const e = l && l.url && embedOf(l.url);
        if (!e) { warn.push(`links.json: skipped "${l && (l.title || l.url)}" (use a YouTube or Vimeo link).`); continue; }
        const cat = pretty(l.category || 'Long-form');
        items.push({ t: l.title || 'Untitled film', cat, cl: cat + ' video', d: l.duration || '', v: false, src: '', poster: l.poster || e.poster, embed: e.embed });
      }
    } catch (err) { warn.push('links.json is not valid JSON: ' + err.message); }
  }
}

mkdirSync('src/generated', { recursive: true });
writeFileSync(OUT, JSON.stringify(items, null, 2) + '\n');
console.log(`[media] ${items.length} long-form video(s) found`);
warn.forEach((w) => console.warn('[media] WARNING: ' + w));
