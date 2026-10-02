import { useEffect, useLayoutEffect } from 'react';
import Shell from './Shell.jsx';
import { runPage } from './runtime.js';
import fixesCss from '../styles/responsive-fixes.css?inline';

/**
 * Wraps one page of the site.
 *  - css:  the page's own stylesheet. The original site shipped a different stylesheet per page,
 *          so it is mounted only while the page is on screen (keeps each design 100% intact).
 *  - run:  the page's interactive scene code (see runtime.js).
 */
export default function Page({ css, run, title, description, current, footerVariant, after, children }) {
  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.setAttribute('data-page-css', '');
    style.textContent = css;
    const fixes = document.createElement('style');
    fixes.setAttribute('data-page-fixes', '');
    fixes.textContent = fixesCss;
    document.head.append(style, fixes);
    return () => {
      style.remove();
      fixes.remove();
    };
  }, [css]);

  useEffect(() => {
    document.title = title;
    const set = (attr, key, value) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };
    const url = window.location.origin + window.location.pathname.replace(/\/$/, '');
    set('name', 'description', description || '');
    set('property', 'og:title', title);
    set('property', 'og:description', description || '');
    set('property', 'og:url', url || window.location.origin + '/');
    set('name', 'twitter:title', title);
    set('name', 'twitter:description', description || '');
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url || window.location.origin + '/';
  }, [title, description]);

  useEffect(() => runPage(run), [run]);

  return (
    <Shell current={current} footerVariant={footerVariant} after={after}>
      {children}
    </Shell>
  );
}
