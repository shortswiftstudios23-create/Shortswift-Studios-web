import { useEffect, useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { LEGACY_FILES } from './routes.js';
import { ROUTES } from '../pages/index.js';

/** Scroll to top on navigation, or to the #hash target when the URL has one. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  }, []);
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

/** Turns plain <a href="/route"> clicks (including links built by page scripts) into SPA navigation. */
function LinkInterceptor() {
  const navigate = useNavigate();
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest && e.target.closest('a');
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('/') || href.startsWith('//')) return;
      e.preventDefault();
      navigate(href);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);
  return null;
}

function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#000', color: '#fff', font: '15px Inter, system-ui, sans-serif', textAlign: 'center', padding: 24 }}>
      <div>
        <h1 style={{ margin: 0, fontSize: 'clamp(2rem,6vw,3.5rem)', letterSpacing: '-.03em' }}>Page not found</h1>
        <p style={{ color: '#9A9A9A', margin: '12px 0 24px' }}>That page doesn&apos;t exist (anymore).</p>
        <a href="/" style={{ color: '#DFFF00', textDecoration: 'none', fontWeight: 600 }}>
          Back to home →
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <LinkInterceptor />
      <Routes>
        {ROUTES.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        {Object.entries(LEGACY_FILES).map(([file, to]) => (
          <Route key={file} path={'/' + file} element={<Navigate to={to} replace />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
