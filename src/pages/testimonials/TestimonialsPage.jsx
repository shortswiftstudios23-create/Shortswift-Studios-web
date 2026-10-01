import Page from '../../site/Page.jsx';
import css from './testimonials.css?inline';
import run from './testimonials.run.js';

// GENERATED from shortswift-testimonials-v4.html (markup converted to JSX). Edit freely.
export default function TestimonialsPage() {
  return (
    <Page
      css={css}
      run={run}
      title="Testimonials | ShortSwift Studio"
      current="Testimonials"
    >
      <main>
        <section className="ph0">
          <i className="br tl1" style={{ left: "24px", top: "96px" }} />
          <i className="br tr1" style={{ right: "24px", top: "96px" }} />
          <div className="c pg2">
            <div>
              <p className="crumb">
                <a href="/">Home</a>
                {" / "}
                <b>Testimonials</b>
              </p>
              <p className="rec2">
                <i />
                {"CLIENT DMS "}
                <b>LIVE</b>
              </p>
              <h1 id="h1" aria-label="Don't take our word for it." />
              <p className="sub">
                Brands and creators we have worked with, in their own words. Watch a few conversations play out, then browse the full wall of proof below.
              </p>
              <div className="row2">
                <a href="#wall" className="btn p">
                  {"Read the wall "}
                  <b>↓</b>
                </a>
                <a href="/book-a-meeting" className="btn g">Book a Meeting</a>
              </div>
            </div>
            <div>
              <div className="ts-wrap">
                <div className="ts-toast" id="tt" aria-hidden="true">
                  <i />
                  New 5-star review
                </div>
                <div className="ts-ph" id="ph">
                  <div className="ts-hd">
                    <div className="ts-av" id="pa" />
                    <div>
                      <b id="pn" />
                      <small>
                        <i />
                        <span id="ps">Online</span>
                      </small>
                    </div>
                    <span className="ts-tag" id="pt" />
                  </div>
                  <div className="ts-bd" id="bd" aria-live="polite" />
                  <div className="ts-ft">
                    <div className="ts-dt" id="dt" role="group" aria-label="Choose a conversation" />
                    <button className="ts-pb" id="pb" aria-pressed="false">Pause</button>
                  </div>
                </div>
              </div>
              <p className="ts-nt">Sample conversations. Replace with real client messages.</p>
            </div>
          </div>
        </section>
        <section className="sec" id="stories" style={{ background: "var(--sf)", borderBlock: "1px solid var(--bd)" }}>
          <div className="c">
            <div className="rv">
              <p className="ts-lab">CLIENT STORIES</p>
              <h2>Results, in their words.</h2>
              <p className="lead">
                Three projects, three services. Pick one to see what the client said and what actually moved.
              </p>
            </div>
            <div className="ts-tabs" id="tb" role="tablist" aria-label="Client stories">
              <i id="tbi" />
            </div>
            <div className="ts-pg">
              <i id="pg" />
            </div>
            <div className="ts-st" id="st" aria-live="polite" />
          </div>
        </section>
        <section className="sec ts-wl" id="wall">
          <div className="c rv ts-hr">
            <div>
              <p className="ts-lab">THE WALL</p>
              <h2>Kind words, on repeat.</h2>
              <p className="lead">Hover the wall to pause it.</p>
            </div>
            <div className="ts-avg">
              <b>5.0</b>
              <div>
                <div className="ts-s5" id="s5a" />
                <small>AVERAGE, 10 SAMPLE REVIEWS</small>
              </div>
            </div>
          </div>
          <div className="ts-rows" id="rows" />
        </section>
        <section className="sec" style={{ background: "var(--sf)", borderBlock: "1px solid var(--bd)" }}>
          <div className="c">
            <div className="rv">
              <p className="ts-lab">THE SCORECARD</p>
              <h2>How clients rate the crew</h2>
              <p className="lead">After every project we ask four questions. These are the averages.</p>
            </div>
            <div className="ts-dg" id="nm" />
            <div className="ts-yes rv">
              <b>98%</b>
              <span>of clients say they would work with us again.</span>
              <a href="/contact" className="btn g">Leave a review</a>
            </div>
            <p className="ts-note">PLACEHOLDER FIGURES. REPLACE WITH YOUR REAL SURVEY RESULTS.</p>
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
                <h2>Ready to be our next success story?</h2>
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
