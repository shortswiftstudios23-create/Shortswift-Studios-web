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
    let meta = document.querySelector('meta[name="description"]');
    if (description) {
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;
    } else if (meta) {
      meta.remove();
    }
  }, [title, description]);

  useEffect(() => runPage(run), [run]);

  return (
    <Shell current={current} footerVariant={footerVariant} after={after}>
      {children}
    </Shell>
  );
}
