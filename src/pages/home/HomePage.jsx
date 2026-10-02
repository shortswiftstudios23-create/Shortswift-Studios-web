import Page from '../../site/Page.jsx';
import css from './home.css?inline';
import run from './home.run.js';

// GENERATED from shortswift-home-v5.html (markup converted to JSX). Edit freely.
export default function HomePage() {
  return (
    <Page
      css={css}
      run={run}
      title="ShortSwift Studio | Brand & Growth Agency in Dhaka"
      description="ShortSwift Studio is a Dhaka creative agency for brand development, website design, social media growth and video editing. Book a free 30-minute call."
    >
      <main>
        <section className="hero">
          <div className="c hg">
            <div>
              <div className="pill glass">
                <span className="dot" />
                Now booking new projects · Dhaka, Bangladesh
              </div>
              <h1 id="h1" aria-label="We build brands people can't scroll past." />
              <p className="sub">
                ShortSwift Studio is a Dhaka-based agency helping ambitious businesses grow through brand development, high-converting websites, social media growth, and video that actually moves numbers.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a href="/book-a-meeting" className="btn p">
                  {"Book a Meeting "}
                  <b>→</b>
                </a>
                <a href="#work" className="btn g">▷ View our work</a>
              </div>
            </div>
            <div className="tl" id="tl" aria-hidden="true">
              <div className="tlh">
                <span className="rec">
                  <i />
                  ShortSwift / Project timeline
                </span>
                <b id="tc">00:00:00</b>
              </div>
              <div className="tk" id="tk">
                <div className="ru" />
                <div className="ph" id="ph">
                  <i data-sci="" />
                </div>
              </div>
            </div>
          </div>
          <div className="c">
            <div className="strip" id="strip" />
          </div>
        </section>
        <div className="mq" aria-label="Services">
          <div className="mt" id="mt" />
        </div>
        <section className="sec" id="services">
          <div className="c">
            <div className="rv">
              <h2>Everything your brand needs to grow.</h2>
              <p className="lead">Five services, one team. Pick one to see what is included.</p>
            </div>
            <div className="sx rv">
              <div className="svl" role="tablist" aria-label="Services" id="svl" />
              <div className="mon" id="mon" role="tabpanel" aria-live="polite">
                <i className="br tl1" />
                <i className="br tr1" />
                <i className="br bl1" />
                <i className="br rb1" />
              </div>
            </div>
          </div>
        </section>
        <section className="sec" id="work" style={{ paddingTop: "0" }}>
          <div className="c">
            <div className="rv">
              <h2>Selected work</h2>
              <p className="lead">One recent project from each service.</p>
            </div>
            <div className="wk" id="wk" />
          </div>
        </section>
        <section className="sec" id="process" style={{ background: "var(--bg)" }}>
          <div className="c">
            <div className="rv">
              <h2>How we work</h2>
              <p className="lead">Four stages, from first call to measurable growth.</p>
            </div>
            <div className="fs rv" id="fs">
              <div className="hole">
                <i data-sci="" id="scs" />
              </div>
              <div className="frs" id="frs" />
              <div className="hole" />
            </div>
          </div>
        </section>
        <section className="sec" id="founders" style={{ paddingTop: "0" }}>
          <div className="c">
            <div className="rv">
              <h2>Meet the founders</h2>
            </div>
            <div className="fg" id="fg" />
          </div>
        </section>
        <section className="sec" id="testimonials" style={{ paddingTop: "0" }}>
          <div className="c">
            <div className="rv">
              <h2>Kind words</h2>
              <p className="lead">What clients say after launch.</p>
            </div>
            <div className="tg rv" id="tg">
              <div className="tqc">
                <svg className="qm" viewBox="0 0 48 48" fill="none" stroke="#DFFF00" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 14c-6 2-10 7-10 14v6h10V24h-6c0-4 2-7 6-8zM38 14c-6 2-10 7-10 14v6h10V24h-6c0-4 2-7 6-8z" />
                </svg>
                <div className="qt" id="q" aria-live="polite" />
              </div>
              <div className="tls" id="tls" role="tablist" aria-label="Clients" />
            </div>
          </div>
        </section>
        <section className="sec" style={{ paddingTop: "0" }}>
          <div className="c">
            <div className="cta rv">
              <div className="gl" />
              <div>
                <div className="cb">
                  <i data-cam="" />
                </div>
                <h2>Ready to make your brand impossible to ignore?</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  <a href="/book-a-meeting" className="btn p">
                    {"Book a Meeting "}
                    <b>→</b>
                  </a>
                  <a href="/contact" className="btn g">Contact us</a>
                </div>
              </div>
              <div className="cl">
                <a href="mailto:shortswiftstudios23@gmail.com">
                  Email us
                  <span>shortswiftstudios23@gmail.com</span>
                </a>
                <a href="/book-a-meeting">
                  Book a meeting
                  <span>30 minutes, free</span>
                </a>
                <a href="https://www.instagram.com/shortswiftstudios_official" target="_blank" rel="noreferrer">
                  Instagram
                  <span>@shortswiftstudios_official</span>
                </a>
                <a href="https://www.facebook.com/share/1SKgPxbDae/" target="_blank" rel="noreferrer">
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
