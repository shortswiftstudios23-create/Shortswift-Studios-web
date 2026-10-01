import Page from '../../site/Page.jsx';
import css from './contact.css?inline';
import run from './contact.run.js';

// GENERATED from shortswift-contact-v4.html (markup converted to JSX). Edit freely.
export default function ContactPage() {
  return (
    <Page
      css={css}
      run={run}
      title="Contact | ShortSwift Studio"
      current="Contact"
    >
      <main>
        <section className="ph0">
          <div className="c pg2">
            <div>
              <p className="crumb">
                <a href="/">Home</a>
                {" / "}
                <b>Contact</b>
              </p>
              <h1 id="h1" aria-label="Let's talk about your next big move." />
              <p className="sub">
                Tell us where your brand is and where you want it to go. Send a message, or skip the back and forth and book a free 30-minute call with the studio.
              </p>
              <div className="row2">
                <a href="#talk" className="btn p" data-go="book">
                  {"Book a Meeting "}
                  <b>→</b>
                </a>
                <a href="#talk" className="btn g" data-go="msg">Send a message</a>
              </div>
            </div>
            <aside className="st2" aria-label="Studio status">
              <div className="on2" id="on">
                <i />
                <span id="ons">Online now</span>
              </div>
              <div className="clk2" id="dc">
                --:--
                <small>Dhaka</small>
              </div>
              <p className="mut" style={{ fontSize: "13px" }}>Studio hours: Sun to Thu, 10:00 to 18:00 (GMT+6)</p>
              <div className="kv">
                <div>
                  <span>Reply time</span>
                  Under 24 hours
                </div>
                <div>
                  <span>First call</span>
                  30 minutes, free
                </div>
                <div>
                  <span>Languages</span>
                  Bangla, English
                </div>
              </div>
            </aside>
          </div>
        </section>
        <section className="sec" id="talk" style={{ paddingTop: "24px" }}>
          <div className="c">
            <div className="tabs" role="tablist" aria-label="How would you like to reach us">
              <span className="tpill" id="pill" />
              <button role="tab" id="t-msg" aria-selected="true" aria-controls="p-msg" data-k="msg">Send a message</button>
              <button role="tab" id="t-book" aria-selected="false" aria-controls="p-book" data-k="book" tabIndex="-1">Book a meeting</button>
            </div>
            <div className="pnl rv" id="p-msg" role="tabpanel" aria-labelledby="t-msg">
              <div className="lft">
                <form id="f" noValidate>
                  <div className="stpr2">
                    <span>
                      {"Step "}
                      <b id="sn">1</b>
                      {" of 5 · "}
                      <b id="sl">Services</b>
                    </span>
                    <span>About 2 minutes</span>
                  </div>
                  <div className="dots" id="dots" role="group" aria-label="Form progress" />
                  <div className="sp">
                    <h3>What can we help with?</h3>
                    <p className="mut">Pick everything that applies.</p>
                    <div className="svg" id="sv" role="group" aria-label="Services" />
                  </div>
                  <div className="sp" hidden>
                    <h3>What is the main goal?</h3>
                    <p className="mut">The one outcome that would make this project a win.</p>
                    <div className="fld">
                      <span id="lgl">Main goal</span>
                      <div className="tiles" id="gl" role="radiogroup" aria-labelledby="lgl" />
                    </div>
                    <div className="fld">
                      <span id="lsg">Where is the brand today?</span>
                      <div className="tiles" id="sg" role="radiogroup" aria-labelledby="lsg" />
                    </div>
                  </div>
                  <div className="sp" hidden>
                    <h3>Budget and timing</h3>
                    <p className="mut">A rough range helps us suggest the right plan. Not sure is fine.</p>
                    <div className="fld">
                      <span id="lbd">Budget</span>
                      <div className="tiles" id="bd" role="radiogroup" aria-labelledby="lbd" />
                    </div>
                    <div className="fld">
                      <span id="ltm">When do you want to start?</span>
                      <div className="tiles" id="tm" role="radiogroup" aria-labelledby="ltm" />
                    </div>
                  </div>
                  <div className="sp" hidden>
                    <h3>Show us where you are</h3>
                    <p className="mut">Optional, but it helps us show up prepared. Skip anything you like.</p>
                    <div className="ff">
                      <input className="inp" id="fw" placeholder=" " autoComplete="url" />
                      <label htmlFor="fw">Website or main social link</label>
                    </div>
                    <div className="ff">
                      <input className="inp" id="fr" placeholder=" " />
                      <label htmlFor="fr">Brands or channels you admire</label>
                    </div>
                    <div className="fld">
                      <span id="lhr">How did you find us?</span>
                      <div className="tiles" id="hr" role="radiogroup" aria-labelledby="lhr" />
                    </div>
                  </div>
                  <div className="sp" hidden>
                    <h3>Who are we talking to?</h3>
                    <p className="mut">Last step. We reply within 24 hours.</p>
                    <div className="two">
                      <div className="ff">
                        <input className="inp" id="fn" placeholder=" " autoComplete="name" />
                        <label htmlFor="fn">Your name</label>
                      </div>
                      <div className="ff">
                        <input className="inp" id="fe" type="email" placeholder=" " autoComplete="email" />
                        <label htmlFor="fe">Email</label>
                      </div>
                    </div>
                    <div className="two">
                      <div className="ff">
                        <input className="inp" id="fc" placeholder=" " autoComplete="organization" />
                        <label htmlFor="fc">Company or channel (optional)</label>
                      </div>
                      <div className="ff">
                        <input className="inp" id="fp" type="tel" placeholder=" " autoComplete="tel" />
                        <label htmlFor="fp">WhatsApp number (optional)</label>
                      </div>
                    </div>
                    <div className="ff">
                      <textarea className="inp" id="fm" maxLength="600" placeholder=" " />
                      <label htmlFor="fm">Tell us about the project</label>
                    </div>
                    <small className="cnt" id="cnt">0 / 600</small>
                    <div className="fld">
                      <span id="lrp">Best way to reply</span>
                      <div className="tiles" id="rp" role="radiogroup" aria-labelledby="lrp" />
                    </div>
                  </div>
                  <p className="er" id="fer" role="alert" />
                  <div className="nv">
                    <button type="button" className="btn g" id="bkb" hidden>← Back</button>
                    <button type="button" className="btn p" id="nx">
                      {"Continue "}
                      <b>→</b>
                    </button>
                  </div>
                  <ul className="tr2">
                    <li>Reply in under 24 hours</li>
                    <li>No spam, ever</li>
                    <li>Your brief stays private</li>
                  </ul>
                </form>
                <div className="ok2" id="fok" hidden>
                  <div className="cb2" data-cam="" />
                  <h3>Brief sent.</h3>
                  <p id="fokt" />
                  <a href="/contact" className="btn g" data-go="book">Book your free call now</a>
                </div>
              </div>
              <aside className="brief" aria-label="Your brief">
                <h4 id="bh">Your brief</h4>
                <div className="bpc">
                  <span>
                    <b id="bp">0%</b>
                    {" complete"}
                  </span>
                  <div className="bar2">
                    <i id="bpb" />
                  </div>
                </div>
                <div className="bro">
                  <span>Services</span>
                  <div id="bs" />
                </div>
                <div className="bro">
                  <span>Goal</span>
                  <b id="bgl" />
                </div>
                <div className="bro">
                  <span>Budget</span>
                  <b id="bb" />
                </div>
                <div className="bro">
                  <span>Start</span>
                  <b id="bt" />
                </div>
                <div className="bro">
                  <span>Link</span>
                  <b id="bl" />
                </div>
                <div className="bro">
                  <span>From</span>
                  <b id="bw" />
                </div>
                <div className="bc2">
                  {"Prefer to talk? "}
                  <a href="/book-a-meeting" data-go="book">Book a free call →</a>
                  <br />
                  {"Or email "}
                  <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
                </div>
              </aside>
            </div>
            <div className="pnl cal rv" id="p-book" role="tabpanel" aria-labelledby="t-book" hidden>
              <div className="cl0">
                <h3>Book a free 30-minute call</h3>
                <p className="mut">
                  Choose a time that suits you. A calendar invite and video link arrive as soon as you confirm.
                </p>
                <ul className="ex">
                  <li>
                    <i>01</i>
                    <div>
                      <b>Tell us the goal</b>
                      <span>Where your brand is now and where you want it to be.</span>
                    </div>
                  </li>
                  <li>
                    <i>02</i>
                    <div>
                      <b>See what fits</b>
                      <span>We suggest the right mix of brand, web, social and video.</span>
                    </div>
                  </li>
                  <li>
                    <i>03</i>
                    <div>
                      <b>Leave with a plan</b>
                      <span>Clear next steps, a rough timeline and pricing range.</span>
                    </div>
                  </li>
                </ul>
                <a className="btn g" href="https://calendly.com/shortswiftstudios23/30min" target="_blank" rel="noopener">Open in Calendly ↗</a>
                <p className="mut" style={{ fontSize: "12.5px", marginTop: "14px" }}>Free, no obligation. Times shown in your own time zone.</p>
              </div>
              <div className="cfr cal3" id="cal3">
                <div className="c3h">
                  <div>
                    <span className="c3k">Free 30-minute call</span>
                    <h4 id="c3m">Month</h4>
                  </div>
                  <div className="c3n">
                    <button type="button" id="c3p" aria-label="Previous month">‹</button>
                    <button type="button" id="c3x" aria-label="Next month">›</button>
                  </div>
                </div>
                <div className="c3t">
                  <span className="dot" />
                  <span>
                    {"Your time "}
                    <b id="c3t">--:--</b>
                  </span>
                  <span className="c3d">
                    {"Dhaka "}
                    <b id="c3z">--:--</b>
                  </span>
                </div>
                <div className="c3w" aria-hidden="true">
                  <span>Sun</span>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>
                <div className="c3g" id="c3g" role="group" aria-label="Pick a date" />
                <div className="c3f">
                  <p id="c3i" aria-live="polite">Pick a date to see open times.</p>
                  <a className="btn p" id="c3c" href="https://calendly.com/shortswiftstudios23/30min" target="_blank" rel="noopener">
                    {"See open times "}
                    <b>↗</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec" style={{ paddingTop: "0" }}>
          <div className="c">
            <div className="rv">
              <p className="crumb" style={{ marginBottom: "12px" }}>
                <b>Or find us here</b>
              </p>
              <h2>Every way to reach the studio.</h2>
            </div>
            <div className="chg">
              <a className="cc rv" href="mailto:hello@yourdomain.com">
                <span>Email</span>
                <i>↗</i>
                <b>hello@yourdomain.com</b>
                <em>Best for briefs and files</em>
              </a>
              <a className="cc rv" href="https://instagram.com/shortswiftstudio" target="_blank" rel="noreferrer">
                <span>Instagram</span>
                <i>↗</i>
                <b>@shortswiftstudio</b>
                <em>See the latest work</em>
              </a>
              <a className="cc rv" href="https://facebook.com/ShortSwiftStudio" target="_blank" rel="noreferrer">
                <span>Facebook</span>
                <i>↗</i>
                <b>ShortSwift Studio</b>
                <em>Message us anytime</em>
              </a>
              <a className="cc rv" href="https://wa.me/8801XXXXXXXXX" target="_blank" rel="noreferrer">
                <span>WhatsApp</span>
                <i>↗</i>
                <b>+880 1XXX-XXXXXX</b>
                <em>Quick questions, fast replies</em>
              </a>
            </div>
          </div>
        </section>
        <section className="sec" style={{ paddingTop: "0" }}>
          <div className="c">
            <div className="rv">
              <p className="crumb" style={{ marginBottom: "12px" }}>
                <b>Questions</b>
              </p>
              <h2>Before you reach out.</h2>
            </div>
            <div className="fq rv">
              <details>
                <summary>Is the first call really free?</summary>
                <p>
                  Yes. It is a 30-minute conversation to understand your goals. No pressure, no obligation.
                </p>
              </details>
              <details>
                <summary>What should I prepare?</summary>
                <p>
                  A rough idea of what you need, your links or channels, and any deadline. We handle the rest.
                </p>
              </details>
              <details>
                <summary>How fast will you reply?</summary>
                <p>
                  Within 24 hours on studio days. Booked calls are confirmed straight away.
                </p>
              </details>
              <details>
                <summary>Do you work with clients outside Bangladesh?</summary>
                <p>
                  Yes. We work remotely with creators and brands worldwide, and calls are set up around your time zone.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
    </Page>
  );
}
