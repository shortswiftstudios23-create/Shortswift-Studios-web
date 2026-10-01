import Page from '../../site/Page.jsx';
import css from './services.css?inline';
import run from './services.run.js';

// GENERATED from shortswift-services-v4.html (markup converted to JSX). Edit freely.
export default function ServicesPage() {
  return (
    <Page
      css={css}
      run={run}
      title="Services | ShortSwift Studio"
      current="Services"
    >
      <main>
        <section className="ph0">
          <div className="c pg2">
            <div>
              <p className="crumb">
                <a href="/">Home</a>
                {" / "}
                <b>Services</b>
              </p>
              <h1 id="h1" aria-label="Services built to grow brands." />
              <p className="sub">
                Five services, one team, one plan. Tell us your goal and we'll show you where to start.
              </p>
              <div className="row2">
                <a href="/book-a-meeting" className="btn p">
                  {"Book a Meeting "}
                  <b>→</b>
                </a>
                <a href="#s0" className="btn g">Browse all services</a>
              </div>
            </div>
            <div className="fd">
              <p className="fh">What are you trying to do?</p>
              <p className="fs2">Pick a goal to see where we'd start.</p>
              <div className="gs" id="gs" />
              <div className="rs" id="rs" aria-live="polite">
                <p className="em0">Your recommended services will appear here.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="c stk" id="stk" />
        <div className="c" style={{ paddingBottom: "64px" }}>
          <div className="strip" id="strip" />
        </div>
        <section className="sec" style={{ background: "var(--sf)", borderBlock: "1px solid var(--bd)" }}>
          <div className="c">
            <div className="rv">
              <h2>Ways to work with us</h2>
              <p className="lead">
                Every project is scoped to your goals. Pick the model that fits, and we tailor the details.
              </p>
            </div>
            <div className="pk" id="pk" />
          </div>
        </section>
        <section className="sec">
          <div className="c fqg">
            <div className="rv">
              <h2>Questions, answered</h2>
              <p className="lead">Cannot find yours? Ask us on a call and we will answer it properly.</p>
            </div>
            <div className="rv" id="fqs" />
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
