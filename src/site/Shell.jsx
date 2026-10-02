import { useEffect, useRef, useState } from 'react';
import { NAV, FOOTER_PAGES, FOOTER_PORTFOLIO, SOCIAL_CHIPS, PATHS } from './routes.js';

const linkProps = (i) => (i.ext ? { target: '_blank', rel: 'noreferrer' } : {});

/* ---------- Scroll progress bar (top of the page) ---------- */
function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (ref.current) ref.current.style.transform = `scaleX(${h ? window.scrollY / h : 0})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return <div id="bar" ref={ref} />;
}

/* ---------- Desktop dropdown menu ---------- */
function DropDown({ items }) {
  return (
    <ul className="dd">
      {items.map((i) => (
        <li key={i.l}>
          <a href={i.u} aria-haspopup={i.c ? 'true' : undefined} {...linkProps(i)}>
            {i.l}
            {i.c ? <span>›</span> : null}
          </a>
          {i.c ? <DropDown items={i.c} /> : null}
        </li>
      ))}
    </ul>
  );
}

function MobileItems({ items }) {
  return items.map((i) =>
    i.c ? (
      <details key={i.l}>
        <summary>{i.l}</summary>
        <MobileItems items={i.c} />
      </details>
    ) : (
      <a key={i.l} href={i.u} {...linkProps(i)}>
        {i.l}
      </a>
    )
  );
}

/* ---------- Header + full-screen mobile menu ---------- */
function Header({ current }) {
  const [small, setSmall] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSmall(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Any link tapped inside the mobile menu should close it.
  const onMobileClick = (e) => {
    if (e.target.closest('a')) setOpen(false);
  };

  return (
    <>
      <header id="hd" className={small ? 'sm' : undefined}>
        <nav className="glass" aria-label="Main">
          <a href={PATHS.home} aria-label="ShortSwift Studio home">
            <img className="logo" src="/logo.png" alt="ShortSwift Studio" width="92" height="34" />
          </a>
          <ul className="menu" id="menu">
            {NAV.map((i) => (
              <li key={i.l}>
                <a href={i.u} aria-haspopup={i.c ? 'true' : undefined} className={current && i.l.startsWith(current) ? 'cur' : undefined}>
                  {i.l}
                  {i.c ? ' ▾' : ''}
                </a>
                {i.c ? <DropDown items={i.c} /> : null}
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <a href={PATHS.book} className="btn p ncta">
              Book a Meeting <b>→</b>
            </a>
            <button className="burger" id="bg" aria-label="Open menu" onClick={() => setOpen(true)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            </button>
          </div>
        </nav>
      </header>
      <div id="mob" className={open ? 'open' : undefined} role="dialog" aria-modal="true" aria-label="Menu" onClick={onMobileClick}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <img className="logo" src="/logo.png" alt="ShortSwift Studio" />
          <button className="burger" id="cl" aria-label="Close menu" onClick={() => setOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>
        <div id="mm">
          <MobileItems items={NAV} />
        </div>
        <p style={{ marginTop: '28px' }}>
          <a href={PATHS.book} className="btn p">
            Book a Meeting <b>→</b>
          </a>
        </p>
      </div>
    </>
  );
}

/* ---------- Footer ---------- */
const clockFmt = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Dhaka', hour: 'numeric', minute: '2-digit' });

function Footer({ variant }) {
  const [time, setTime] = useState(() => 'Dhaka ' + clockFmt.format(new Date()));
  useEffect(() => {
    const id = setInterval(() => setTime('Dhaka ' + clockFmt.format(new Date())), 20000);
    return () => clearInterval(id);
  }, []);
  const chips = SOCIAL_CHIPS[variant] || SOCIAL_CHIPS.default;

  return (
    <footer>
      <div className="c">
        <div className="fw">
          <div>
            <img className="logo" style={{ height: '44px' }} src="/logo.png" alt="ShortSwift Studio" />
            <p className="mut" style={{ marginTop: '14px', maxWidth: '300px' }}>
              Brand development and growth for ambitious businesses, from Dhaka.
            </p>
            <div className="st">
              <span className="dot" />
              Taking new projects<s id="clk">{time}</s>
            </div>
            <a href="mailto:shortswiftstudios23@gmail.com" className="em lime">
              shortswiftstudios23@gmail.com
            </a>
          </div>
          <div className="fcols">
            <div>
              <h4>Pages</h4>
              <ul>
                {FOOTER_PAGES.map(([l, u]) => (
                  <li key={l}>
                    <a href={u}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Portfolio</h4>
              <ul>
                {FOOTER_PORTFOLIO.map(([l, u]) => (
                  <li key={l}>
                    <a href={u}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Social</h4>
              <div className="sg">
                <p>Instagram</p>
                <div className="chips">
                  {chips.instagram.map((i) => (
                    <a key={i.l} href={i.u} {...linkProps(i)}>
                      {i.l}
                    </a>
                  ))}
                </div>
              </div>
              <div className="sg">
                <p>Facebook</p>
                <div className="chips">
                  {chips.facebook.map((i) => (
                    <a key={i.l} href={i.u} {...linkProps(i)}>
                      {i.l}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="big" id="bigw" aria-hidden="true">
        {'SHORTSWIFT'.split('').map((c, i) => (
          <span key={i} style={{ '--i': i }}>
            {c}
          </span>
        ))}
      </div>
      <div className="fbt">
        <div className="c">
          <span>© 2025 ShortSwift Studio. Dhaka, Bangladesh.</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Shell: everything shared by every page ---------- */
export default function Shell({ current, footerVariant, after, children }) {
  return (
    <>
      <ScrollProgress />
      <div className="grain" aria-hidden="true" />
      <Header current={current} />
      {children}
      <Footer variant={footerVariant} />
      <div id="cur" aria-hidden="true">
        View
      </div>
      {after}
    </>
  );
}
