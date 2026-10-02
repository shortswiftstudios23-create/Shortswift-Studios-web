import Page from '../../site/Page.jsx';
import css from './book.css?inline';
import run from './book.run.js';

// GENERATED from shortswift-book-a-meeting-v1.html (markup converted to JSX). Edit freely.
export default function BookAMeetingPage() {
  return (
    <Page
      css={css}
      run={run}
      title="Book a Free 30-Minute Call | ShortSwift Studio"
      description="Pick a time for a free 30-minute call with ShortSwift Studio to talk branding, websites, social media growth or video editing."
      current="Contact"
    >
      <main>
        <section className="ph0" id="hero">
          <div className="c pg2">
            <div>
              <p className="crumb">
                <a href="/">Home</a>
                {" / "}
                <a href="/contact">Contact</a>
                {" / "}
                <b>Book a Meeting</b>
              </p>
              <h1 id="h1" aria-label="Thirty minutes. One clear next step." />
              <p className="sub">
                Tell us a little about what you're building, pick a time that suits you, and we'll take it from there. No pitch deck, no pressure. Just a real conversation about how ShortSwift Studio can help your brand grow.
              </p>
              <div className="kv2">
                <span>
                  <b>Free</b>
                  {" call"}
                </span>
                <span>
                  <b>30</b>
                  {" minutes"}
                </span>
                <span>Online, from anywhere</span>
              </div>
              <div className="row2">
                <a href="#brief" className="btn p" data-go="1">
                  {"Start my call brief "}
                  <b>↓</b>
                </a>
                <a href="#calendar" className="btn g" data-go="4">Skip to the calendar</a>
              </div>
            </div>
            <div className="ck rv" aria-label="Time difference">
              <i className="br tl1" />
              <i className="br tr1" />
              <i className="br bl1" />
              <i className="br rb1" />
              <p className="ckh">
                <i />
                Live time check
              </p>
              <div className="ckr">
                <div>
                  <small>Dhaka · Bangladesh</small>
                  <b id="ckd">--:--</b>
                </div>
                <div>
                  <small>
                    {"You · "}
                    <span id="ckz">your time</span>
                  </small>
                  <b id="ckl">--:--</b>
                </div>
              </div>
              <p className="ckn" id="ckn" />
              <ul className="ckl">
                <li>
                  <span>01</span>
                  Pick a time in your own timezone
                </li>
                <li>
                  <span>02</span>
                  Get a calendar invite by email
                </li>
                <li>
                  <span>03</span>
                  Show up with questions, we'll handle the rest
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="sec" id="brief" style={{ background: "var(--bg,#000)" }}>
          <div className="c">
            <div className="rv">
              <p className="crumb" style={{ marginBottom: "12px" }}>
                <b>Before you pick a time</b>
              </p>
              <h2>Build your call brief in a minute.</h2>
              <p className="lead">
                Three quick answers mean we arrive prepared and spend the 30 minutes on your goals, not on introductions. Your brief is passed to the calendar and shown on your ticket.
              </p>
            </div>
            <div className="bw">
              <div className="bl rv">
                <ol className="stp" id="stp">
                  <li className="on">
                    <i>1</i>
                    Topic
                  </li>
                  <li>
                    <i>2</i>
                    Stage
                  </li>
                  <li>
                    <i>3</i>
                    You
                  </li>
                  <li>
                    <i>4</i>
                    Time
                  </li>
                </ol>
                <div className="bp">
                  <div className="bpn on" data-s="1">
                    <h3>What's this about?</h3>
                    <p className="hint">Pick everything that applies.</p>
                    <div className="chs" id="chs" />
                    <p className="er" id="e1" role="alert" />
                    <div className="nv">
                      <span />
                      <button className="btn p nx" data-n="2">
                        {"Next "}
                        <b>→</b>
                      </button>
                    </div>
                  </div>
                  <div className="bpn" data-s="2">
                    <h3>Where are you right now?</h3>
                    <div className="rds" id="rds" role="radiogroup" aria-label="Project stage" />
                    <label className="fl">
                      {"Anything we should know? "}
                      <em>(optional)</em>
                      <textarea id="note" maxLength="400" rows="3" placeholder="Your goals, a deadline, what's not working yet..." />
                    </label>
                    <p className="er" id="e2" role="alert" />
                    <div className="nv">
                      <button className="bk" data-n="1">← Back</button>
                      <button className="btn p nx" data-n="3">
                        {"Next "}
                        <b>→</b>
                      </button>
                    </div>
                  </div>
                  <div className="bpn" data-s="3">
                    <h3>Who are we talking to?</h3>
                    <div className="bfg">
                      <label className="fl">
                        Your name
                        <input id="nm" autoComplete="name" placeholder="Full name" />
                      </label>
                      <label className="fl">
                        Email
                        <input id="em" type="email" autoComplete="email" placeholder="you@example.com" />
                      </label>
                    </div>
                    <label className="fl">
                      {"Website, channel or social link "}
                      <em>(optional)</em>
                      <input id="lk" inputMode="url" autoComplete="url" placeholder="https://" />
                    </label>
                    <p className="er" id="e3" role="alert" />
                    <div className="nv">
                      <button className="bk" data-n="2">← Back</button>
                      <button className="btn p nx" data-n="4">
                        {"Choose a time "}
                        <b>→</b>
                      </button>
                    </div>
                  </div>
                  <div className="bpn" data-s="4" id="calendar">
                    <h3>Pick your day</h3>
                    <p className="hint">
                      Choose a date and Calendly opens in a new tab with your brief attached. You'll pick the exact time there, shown in your own timezone.
                    </p>
                    <div className="kal" id="kal">
                      <span className="sw" aria-hidden="true" />
                      <div className="kh">
                        <button type="button" id="kp" aria-label="Previous month">←</button>
                        <b id="km" aria-live="polite" />
                        <button type="button" id="kn" aria-label="Next month">→</button>
                      </div>
                      <div className="kw" aria-hidden="true">
                        <span>Sun</span>
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                      </div>
                      <div className="kg" id="kg" />
                      <div className="kf">
                        <span className="kl">
                          <i />
                          Today
                        </span>
                        <a className="btn p" id="kall" href="https://calendly.com/shortswiftstudios23/30min" target="_blank" rel="noopener">
                          {"See all available times "}
                          <b>→</b>
                        </a>
                      </div>
                    </div>
                    <p className="hint" id="kmsg" aria-live="polite" style={{ marginTop: "14px" }}>
                      {"Prefer to copy your details first? "}
                      <button className="bk" id="cpy" style={{ display: "inline" }}>Copy my brief</button>
                    </p>
                    <div className="nv">
                      <button className="bk" data-n="3">← Edit my brief</button>
                      <span />
                    </div>
                  </div>
                  <div className="bpn" data-s="5" id="ok">
                    <svg className="ckm" viewBox="0 0 80 80" fill="none" stroke="#DFFF00" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="4" y="4" width="72" height="72" rx="22" />
                      <path d="M24 41l12 12 21-26" />
                    </svg>
                    <h3>You're booked.</h3>
                    <p className="hint" style={{ fontSize: "16px" }}>
                      A calendar invite and your meeting details are on their way to your inbox from Calendly. Need to change the time? Use the link in that email.
                    </p>
                    <div className="row2" style={{ marginTop: "22px" }}>
                      <a href="/book-a-meeting" className="btn p">
                        {"Back to home "}
                        <b>→</b>
                      </a>
                      <a href="/contact" className="btn g">Meet the team</a>
                    </div>
                  </div>
                </div>
              </div>
              <aside className="bt rv" aria-label="Your call ticket">
                <div className="tkt" id="tkt">
                  <div className="tkh">
                    <img className="logo" style={{ height: "34px" }} src="/logo.png" alt="ShortSwift Studio" />
                    <span>
                      CALL TICKET
                      <br />
                      <b>30 MIN</b>
                    </span>
                  </div>
                  <div className="tkm">
                    <i className="nt l" />
                    <i className="nt r" />
                  </div>
                  <dl className="tkb">
                    <div>
                      <dt>Name</dt>
                      <dd id="tn">--</dd>
                    </div>
                    <div>
                      <dt>Topics</dt>
                      <dd id="tt">--</dd>
                    </div>
                    <div>
                      <dt>Stage</dt>
                      <dd id="ts">--</dd>
                    </div>
                    <div>
                      <dt>Link</dt>
                      <dd id="tl">--</dd>
                    </div>
                  </dl>
                  <div className="bc" aria-hidden="true" />
                  <span className="stmp">BOOKED</span>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <section className="sec" id="agenda" style={{ background: "var(--sf)", borderBlock: "1px solid var(--bd)" }}>
          <div className="c">
            <div className="rv">
              <p className="crumb" style={{ marginBottom: "12px" }}>
                <b>What happens on the call</b>
              </p>
              <h2>Thirty minutes, four moves.</h2>
              <p className="lead">
                Every call follows the same simple shape, so it's useful even if we never work together. The clock plays through the call on its own. Hover a segment, drag the ring, or press pause to explore.
              </p>
            </div>
            <div className="dlw">
              <div className="dlc">
                <svg className="dl rv" id="dl" viewBox="-24 -24 368 368" role="group" aria-label="30 minute call agenda clock" />
                <div className="dctl">
                  <button type="button" id="dpp" aria-pressed="true">Pause</button>
                  <button type="button" id="drs">Restart</button>
                </div>
              </div>
              <div className="dlr rv" id="dlr" />
            </div>
          </div>
        </section>
        <section className="sec">
          <div className="c">
            <div className="rv">
              <p className="crumb" style={{ marginBottom: "12px" }}>
                <b>Good to know</b>
              </p>
              <h2>Quick answers.</h2>
            </div>
            <div className="fq rv" id="fq2" />
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
                <h2>Prefer to message first?</h2>
                <p className="mut" style={{ maxWidth: "480px", marginBottom: "24px" }}>
                  No problem. Send us a note and we'll reply with a few ideas, or book whenever you're ready.
                </p>
                <div className="row2">
                  <a href="/contact" className="btn p">
                    {"Contact us "}
                    <b>→</b>
                  </a>
                  <a href="#brief" className="btn g" data-go="1">Back to the brief</a>
                </div>
              </div>
              <div className="cl">
                <a href="mailto:shortswiftstudios23@gmail.com">
                  Email us
                  <span>shortswiftstudios23@gmail.com</span>
                </a>
                <a href="https://www.instagram.com/shortswiftstudios_official" target="_blank" rel="noreferrer">
                  Instagram
                  <span>ShortSwift Studio</span>
                </a>
                <a href="https://www.facebook.com/share/1SKgPxbDae/" target="_blank" rel="noreferrer">
                  Facebook
                  <span>ShortSwift Studio</span>
                </a>
                <a href="/team">
                  Meet the team
                  <span>14+ creatives</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="ov" id="ask" role="dialog" aria-modal="true" aria-labelledby="ask-t" hidden>
          <div className="ovc">
            <h3 id="ask-t">Welcome back.</h3>
            <p className="hint" style={{ margin: "10px 0 26px" }}>Did you finish booking your call on Calendly?</p>
            <div className="row2">
              <button type="button" className="btn p nx" id="ay">
                {"Yes, I'm booked "}
                <b>→</b>
              </button>
              <button type="button" className="btn g nx" id="an">Not yet</button>
            </div>
          </div>
        </div>
        <div className="ov" id="cel" role="dialog" aria-modal="true" aria-labelledby="cel-t" hidden>
          <canvas id="cv" aria-hidden="true" />
          <div className="ovc cbig">
            <svg className="ckm" viewBox="0 0 80 80" fill="none" stroke="#DFFF00" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="4" y="4" width="72" height="72" rx="22" />
              <path d="M24 41l12 12 21-26" />
            </svg>
            <h3 id="cel-t">
              Thank you
              <span id="cn" />
              . You're booked.
            </h3>
            <p className="hint" style={{ margin: "10px 0 22px" }}>Your calendar invite is on its way from Calendly. Here's what happens next:</p>
            <ol className="nxs">
              <li>
                <b>01</b>
                Check your inbox for the invite and meeting details.
              </li>
              <li>
                <b>02</b>
                We read your brief so the 30 minutes go straight to what matters.
              </li>
              <li>
                <b>03</b>
                Join the call with your questions. We'll handle the rest.
              </li>
            </ol>
            <div className="row2">
              <a href="/book-a-meeting" className="btn p">
                {"Back to home "}
                <b>→</b>
              </a>
              <a href="/contact" className="btn g">Meet the team</a>
            </div>
            <button type="button" className="bk" id="cx" style={{ marginTop: "16px" }}>Close</button>
          </div>
        </div>
      </main>
    </Page>
  );
}
