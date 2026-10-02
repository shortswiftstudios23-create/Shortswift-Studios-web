import Page from '../../site/Page.jsx';
import css from './team.css?inline';
import run from './team.run.js';

// GENERATED from shortswift-team-v3.html (markup converted to JSX). Edit freely.
export default function TeamPage() {
  return (
    <Page
      css={css}
      run={run}
      title="Our Team | ShortSwift Studio, Dhaka"
      description="Meet the founders, editors, designers, writers and strategists behind ShortSwift Studio, a creative brand and growth agency in Dhaka, Bangladesh."
      current="Team"
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
                <b>Team</b>
              </p>
              <p className="rec2">
                <i />
                {"CREW ROLL "}
                <b>14+ ACTIVE</b>
              </p>
              <h1 id="h1" aria-label="The crew behind every brand we build." />
              <p className="sub">
                Six disciplines, one Dhaka studio. Editors, writers, designers, strategists, developers and channel managers, all working to the same standard: does this hold attention?
              </p>
              <div className="row2">
                <a href="#build" className="btn p">
                  {"Build your crew "}
                  <b>↓</b>
                </a>
                <a href="/book-a-meeting" className="btn g">Book a Meeting</a>
              </div>
            </div>
            <div className="tm-b" id="nm" />
          </div>
        </section>
        <section className="sec" id="build" style={{ background: "var(--sf)", borderBlock: "1px solid var(--bd)" }}>
          <div className="c">
            <div className="rv">
              <p className="tm-lab">BUILD YOUR CREW</p>
              <h2>Pick what you need. See who shows up.</h2>
              <p className="lead">
                Every project pulls in a different mix of disciplines. Choose one or more services and we will show the squad and the order they hand work to each other.
              </p>
            </div>
            <div className="tm-g rv">
              <div>
                <p className="tm-pl">QUICK MIXES</p>
                <div className="tm-pr" id="pr" />
                <p className="tm-pl">OR PICK YOUR OWN</p>
                <div id="sv" role="group" aria-label="Services" />
              </div>
              <div className="tm-p">
                <div className="tm-sum" id="sm" aria-live="polite" />
                <div className="tm-bar">
                  <i id="bf" />
                </div>
                <small className="tm-cap" id="bc" />
                <div id="rw" />
                <div className="tm-hf">
                  <small>HANDOFF ORDER</small>
                  <div className="tm-ch" id="hf" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec">
          <div className="c">
            <div className="rv">
              <p className="tm-lab">HOW THE CREW WORKS</p>
              <h2>Four rules everyone follows</h2>
              <p className="lead">Different crafts, same operating habits.</p>
            </div>
            <div className="tm-rl" id="rl" />
          </div>
        </section>
        <section className="sec" style={{ background: "var(--sf)", borderBlock: "1px solid var(--bd)" }}>
          <div className="c">
            <div className="rv">
              <p className="tm-lab">WORKING TOGETHER</p>
              <h2>Three ways to work with the crew</h2>
              <p className="lead">
                From a single launch to running the whole channel. Pick the shape that fits, and we scale the squad around it.
              </p>
            </div>
            <div className="tm-wg" id="wg" />
          </div>
        </section>
        <section className="sec">
          <div className="c">
            <div className="rv">
              <p className="tm-lab">FOUNDERS</p>
              <h2>Who sets the standard</h2>
              <p className="lead">The crew runs on two people's stubborn idea of what good looks like.</p>
            </div>
            <div className="tm-fs" id="fs" />
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
                <h2>Want this crew on your brand?</h2>
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
