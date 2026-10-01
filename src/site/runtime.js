// Runs a page's interactive "scene" code (timelines, sliders, lightboxes, counters...) and
// guarantees that everything it starts is torn down when the route changes: timers, rAF loops,
// IntersectionObservers, window/document listeners and nodes appended to <body>.
export const CAM =
  '<svg viewBox="0 0 100 100" fill="none" stroke="#DFFF00" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="92" height="92" rx="24"/><rect x="24" y="44" width="36" height="28" rx="6"/><path d="M60 52l16-8v28l-16-8"/><rect x="30" y="32" width="20" height="8" rx="3"/></svg>';
export const SCI =
  '<svg viewBox="0 0 48 48" fill="none" stroke="#DFFF00" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="37" r="5"/><circle cx="37" cy="37" r="5"/><path d="M15 33L38 8M33 33L10 8"/></svg>';

export function runPage(fn) {
  const timeouts = new Set();
  const intervals = new Set();
  const frames = new Set();
  const observers = new Set();
  const listeners = [];
  let dead = false;

  const track = (target, type, handler, opts) => {
    target.addEventListener(type, handler, opts);
    listeners.push([target, type, handler, opts]);
  };

  const rt = {
    $: (s) => document.querySelector(s),
    cam: CAM,
    sci: SCI,
    setTimeout: (f, ms, ...a) => {
      const id = window.setTimeout(() => {
        timeouts.delete(id);
        if (!dead) f(...a);
      }, ms);
      timeouts.add(id);
      return id;
    },
    setInterval: (f, ms, ...a) => {
      const id = window.setInterval(() => !dead && f(...a), ms);
      intervals.add(id);
      return id;
    },
    requestAnimationFrame: (f) => {
      const id = window.requestAnimationFrame((t) => {
        frames.delete(id);
        if (!dead) f(t);
      });
      frames.add(id);
      return id;
    },
    addEventListener: (type, handler, opts) => {
      // In the old multi-page site 'load' fired after the script ran; in an SPA it already has.
      if (type === 'load' && document.readyState === 'complete') {
        rt.setTimeout(() => handler(new Event('load')), 0);
        return;
      }
      track(window, type, handler, opts);
    },
    removeEventListener: (type, handler, opts) => window.removeEventListener(type, handler, opts),
    IntersectionObserver: function (cb, opts) {
      const o = new window.IntersectionObserver(cb, opts);
      observers.add(o);
      return o;
    },
    document: new Proxy(document, {
      get(t, p) {
        if (p === 'addEventListener') return (type, h, o) => track(t, type, h, o);
        const v = t[p];
        return typeof v === 'function' ? v.bind(t) : v;
      },
      set(t, p, v) {
        t[p] = v;
        return true;
      },
    }),
  };

  const bodyBefore = new Set(document.body.children);
  try {
    fn(rt);
  } catch (err) {
    console.error('[ShortSwift] page script failed:', err);
  }

  return () => {
    dead = true;
    timeouts.forEach((id) => window.clearTimeout(id));
    intervals.forEach((id) => window.clearInterval(id));
    frames.forEach((id) => window.cancelAnimationFrame(id));
    observers.forEach((o) => o.disconnect());
    listeners.forEach(([t, type, h, o]) => t.removeEventListener(type, h, o));
    [...document.body.children].forEach((n) => {
      if (!bodyBefore.has(n)) n.remove();
    });
    document.body.style.overflow = '';
    delete window.watchRV;
  };
}
