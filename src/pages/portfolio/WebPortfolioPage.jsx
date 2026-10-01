import Page from '../../site/Page.jsx';
import css from './portfolio.css?inline';
import run from './web.run.js';

// GENERATED from portfolio-web-v2.html (markup converted to JSX). Edit freely.
export default function WebPortfolioPage() {
  return (
    <Page
      css={css}
      run={run}
      title="Website Development Portfolio | ShortSwift Studio"
      current="Portfolio"
      after={
        <>
        <div className="lb" id="lb" role="dialog" aria-modal="true" aria-label="Gallery">
          <button className="lbx" id="lbx" aria-label="Close">✕</button>
          <button className="lbn p" id="lbp" aria-label="Previous">←</button>
          <button className="lbn n" id="lbn" aria-label="Next">→</button>
          <div className="lbs" id="lbs" />
          <div className="lbc">
            <b id="lbt" />
            <span id="lbd" />
            <em id="lbk" />
          </div>
          <div className="lbth" id="lbth" />
        </div>
        </>
      }
    >
      <main>
        <section className="ph0">
          <div className="c pg2">
            <div>
              <p className="crumb">
                <a href="/">Home</a>
                {" / Portfolio / "}
                <b>Website Development Portfolio</b>
              </p>
              <h1 id="h1" />
              <p className="sub">
                Real sites we have built, shown live on desktop, tablet and mobile. Switch devices to see how each one adapts.
              </p>
              <div className="row2">
                <a href="#work" className="btn p">
                  {"View the work "}
                  <b>↓</b>
                </a>
                <a href="/book-a-meeting" className="btn g">Book a Meeting</a>
              </div>
            </div>
            <nav className="pix" id="pix" aria-label="Portfolio categories" />
          </div>
        </section>
        <section className="sec" style={{ padding: "0 0 24px" }}>
          <div className="c">
            <div className="rband rv">
              <div>
                <b>30+</b>
                <span>Websites launched</span>
              </div>
              <div>
                <b>{"<2s"}</b>
                <span>Typical load time</span>
              </div>
              <div>
                <b>95+</b>
                <span>Lighthouse performance target</span>
              </div>
              <div>
                <b>2x</b>
                <span>Average lift in enquiries</span>
              </div>
            </div>
          </div>
        </section>
        <section className="sec" id="work" style={{ paddingTop: "24px" }}>
          <div className="c">
            <div className="rv">
              <h2>Live on every screen</h2>
              <p className="lead">
                Pick a website, then switch between desktop, tablet and mobile to see the real thing respond.
              </p>
            </div>
            <div className="wpk" id="wpk" role="tablist" aria-label="Websites" />
            <div className="wst rv">
              <div className="wbar">
                <div className="wtt">
                  <b id="wn" />
                  <a id="wu" target="_blank" rel="noopener" />
                </div>
                <div className="wct">
                  <div className="seg" id="dsg" role="group" aria-label="Device">
                    <button data-d="desktop" className="on">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="12" rx="2" />
                        <path d="M8 20h8M12 16v4" />
                      </svg>
                      Desktop
                    </button>
                    <button data-d="tablet">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="3" width="14" height="18" rx="2" />
                        <path d="M11 18h2" />
                      </svg>
                      Tablet
                    </button>
                    <button data-d="phone">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="7" y="2" width="10" height="20" rx="2" />
                        <path d="M11 18h2" />
                      </svg>
                      Mobile
                    </button>
                  </div>
                  <div className="seg" id="msg" role="group" aria-label="Mode">
                    <button data-m="live" className="on">Live</button>
                    <button data-m="shot">Snapshot</button>
                  </div>
                  <a className="btn g" id="wo" target="_blank" rel="noopener">Open site ↗</a>
                </div>
              </div>
              <div className="wview" id="wview">
                <div className="dev desktop" id="dev">
                  <div className="dtop">
                    <i />
                    <i />
                    <i />
                    <span id="wbar" />
                  </div>
                  <div className="notch" />
                  <div className="scr" id="scr" />
                </div>
              </div>
              <p className="wh">
                Some websites block being shown inside other pages. If a site looks blank, switch to Snapshot.
              </p>
            </div>
          </div>
        </section>
        <section className="sec" style={{ paddingTop: "0" }}>
          <div className="c">
            <div className="rv">
              <p className="crumb" style={{ marginBottom: "12px" }}>
                <b>Featured case study</b>
              </p>
              <h2>One project, start to finish.</h2>
              <p className="lead">Placeholder story and numbers. Replace with a real client result.</p>
            </div>
            <div className="cs">
              <div className="csv rv">
                <b>2x</b>
                <span>More enquiries after the redesign</span>
              </div>
              <div className="csr">
                <div className="px2 rv">
                  <span className="k">Challenge</span>
                  <p>
                    A slow, dated site that looked nothing like the business and turned visitors away.
                  </p>
                </div>
                <div className="px2 rv">
                  <span className="k">Approach</span>
                  <p>
                    Clear structure, sharp copy, fast custom build and conversion-focused calls to action on every page.
                  </p>
                </div>
                <div className="px2 rv">
                  <span className="k">Result</span>
                  <p>
                    A site that loads fast, feels premium and brings in enquiries around the clock.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec" style={{ background: "var(--sf)", borderBlock: "1px solid var(--bd)" }}>
          <div className="c">
            <div className="rv">
              <p className="crumb" style={{ marginBottom: "12px" }}>
                <b>What is included</b>
              </p>
              <h2>Everything you get with every project.</h2>
            </div>
            <div className="dgrid">
              <div className="px2 rv">
                <i>01</i>
                <h3>Custom design</h3>
                <p>Layouts made for your brand, not a template.</p>
              </div>
              <div className="px2 rv">
                <i>02</i>
                <h3>Fast build</h3>
                <p>Clean code, optimised media, quick on mobile.</p>
              </div>
              <div className="px2 rv">
                <i>03</i>
                <h3>Conversion focus</h3>
                <p>Pages and buttons planned around one goal.</p>
              </div>
              <div className="px2 rv">
                <i>04</i>
                <h3>SEO foundations</h3>
                <p>Structure, speed and metadata set up right.</p>
              </div>
              <div className="px2 rv">
                <i>05</i>
                <h3>CMS handover</h3>
                <p>Edit your own content without calling us.</p>
              </div>
              <div className="px2 rv">
                <i>06</i>
                <h3>Launch support</h3>
                <p>Testing, go-live and a check-in after.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="sec">
          <div className="c">
            <div className="rv">
              <p className="crumb" style={{ marginBottom: "12px" }}>
                <b>How it runs</b>
              </p>
              <h2>Four steps, no surprises.</h2>
            </div>
            <div className="stp rv">
              <div style={{ "--i": "0" }}>
                <b>01</b>
                <h3>Plan</h3>
                <p>Sitemap, goals and content outline.</p>
              </div>
              <div style={{ "--i": "1" }}>
                <b>02</b>
                <h3>Design</h3>
                <p>Desktop and mobile layouts you can review.</p>
              </div>
              <div style={{ "--i": "2" }}>
                <b>03</b>
                <h3>Build</h3>
                <p>Development, animation and testing on real devices.</p>
              </div>
              <div style={{ "--i": "3" }}>
                <b>04</b>
                <h3>Launch</h3>
                <p>Go-live, tracking and training.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="sec" style={{ paddingTop: "0" }}>
          <div className="c">
            <div className="qb rv">
              <blockquote>
                {"Our new site finally looks like the business we are. "}
                <em>Enquiries picked up</em>
                {" within weeks."}
              </blockquote>
              <cite>
                <b>Client Name</b>
                {" · Director, Company Name (placeholder quote)"}
              </cite>
            </div>
          </div>
        </section>
        <section className="sec" style={{ paddingTop: "0" }}>
          <div className="c">
            <div className="rv">
              <p className="crumb" style={{ marginBottom: "12px" }}>
                <b>Questions</b>
              </p>
              <h2>Good to know before we start.</h2>
            </div>
            <div className="fq rv">
              <details>
                <summary>How long does a website take?</summary>
                <p>
                  A typical marketing site takes three to six weeks from kickoff to launch.
                </p>
              </details>
              <details>
                <summary>Will it work on phones?</summary>
                <p>Every site is designed mobile-first and tested on real devices.</p>
              </details>
              <details>
                <summary>Can I update it myself?</summary>
                <p>Yes. We set up an easy editor and show you how to use it.</p>
              </details>
              <details>
                <summary>Do you handle hosting and domains?</summary>
                <p>We can set both up for you or work with what you already have.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="sec" style={{ paddingTop: "0" }}>
          <div className="c" id="nxt" />
        </section>
        <section className="sec" style={{ paddingTop: "0" }}>
          <div className="c">
            <div className="cta rv">
              <div className="gl" />
              <div>
                <div className="cb">
                  <i data-cam="" />
                </div>
                <h2>Want results like these for your brand?</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  <a href="/book-a-meeting" className="btn p">
                    {"Book a Meeting "}
                    <b>→</b>
                  </a>
                  <a href="/contact" className="btn g">Contact us</a>
                </div>
              </div>
              <div className="cl">
                <a href="mailto:hello@yourdomain.com">
                  Email us
                  <span>hello@yourdomain.com</span>
                </a>
                <a href="/book-a-meeting">
                  Book a meeting
                  <span>30 minutes, free</span>
                </a>
                <a href="https://instagram.com/shortswiftstudio" target="_blank" rel="noreferrer">
                  Instagram
                  <span>@shortswiftstudio</span>
                </a>
                <a href="https://facebook.com/ShortSwiftStudio" target="_blank" rel="noreferrer">
                  Facebook
                  <span>ShortSwift Studio</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Page>
  );
}
