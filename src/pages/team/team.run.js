// GENERATED from the original shortswift-team-v3.html and then hand-maintained.
// Interactive "scene" code for this page. `rt` (see src/site/runtime.js) tracks every timer,
// observer and listener started here and tears them down when you leave the page.
export default function run(rt) {
  const { $, cam, sci, setTimeout, setInterval, requestAnimationFrame, addEventListener, removeEventListener, IntersectionObserver, document } = rt;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const type = async (el, txt, sp = 28) => { el.classList.add('t'); el.textContent = ''; for (const ch of txt) { el.textContent += ch; await sleep(sp); } el.classList.remove('t'); };
  (function page() {

    document.querySelectorAll('[data-cam]').forEach(e=>e.innerHTML=cam);document.querySelectorAll('[data-sci]').forEach(e=>e.innerHTML=sci);
    /* DATA (placeholders: replace copy, links, stats, quotes) */

    const sleep=ms=>new Promise(r=>setTimeout(r,ms));
    $('#h1').innerHTML=["The","crew","behind","every","brand","we","build."].map((x,i)=>`<span class="w" aria-hidden="true"><span style="--i:${i}"${i>2?' class="lime"':''}>${x}</span></span>`).join('');
    function stm(){}
    /* TEAM DATA (placeholders): HC = headcount per discipline (edit to match your real team). Sums to 14. */
    const ICO=['<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9l5 3-5 3z"/>','<path d="M12 20h9M16.5 3.5l4 4L8 20l-5 1 1-5z"/>','<circle cx="12" cy="12" r="9"/><circle cx="8.5" cy="10" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="15.5" cy="10" r="1"/>','<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>','<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>','<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>'].map(p=>`<svg viewBox="0 0 24 24">${p}</svg>`);
    const DIS=["Editors","Writers","Designers","Strategists","Web developers","Channel managers"],HC=[4,2,3,2,1,2],SUB=["Cut, pace, finish","Scripts and hooks","Identity and visuals","Positioning and growth","Sites that convert","Schedules and community"];
    $('#nm').innerHTML=DIS.map((d,i)=>`<a href="#build" class="tm-t rv" style="--d:${i*.06}s"><div class="tm-i">${ICO[i]}</div><div class="tm-n"><span data-n="${HC[i]}" data-s="">0</span></div><b>${d}</b><small>${SUB[i]}</small></a>`).join('');
    /* SV: services. A: for each service [discipline, level 2=lead 1=support, what they do] */
    const SV=[["Brand Development","Identity, strategy, positioning",[[3,2,"Positioning and brand strategy"],[2,2,"Identity, logo and visual system"],[1,1,"Voice and messaging"]]],
    ["Business Growth","Funnels, strategy, scaling systems",[[3,2,"Funnels and scaling systems"],[1,1,"Offer and copy"],[5,1,"Rollout and reporting"]]],
    ["Social Media Growth","Content, ads, community",[[5,2,"Calendar, uploads and community"],[1,2,"Scripts and hooks"],[0,1,"Reels and shorts"],[2,1,"Thumbnails and post design"],[3,1,"Growth plan"]]],
    ["Website Development","Fast, modern, conversion-focused",[[4,2,"Build and performance"],[2,2,"Interface and layout"],[1,1,"Page copy"],[3,1,"Conversion plan"]]],
    ["Video Editing","Reels, ads, brand films",[[0,2,"Cutting, pacing and finish"],[1,1,"Scripts"],[2,1,"Motion and thumbnails"],[5,1,"Delivery schedule"]]]];
    const ORDER=[3,1,2,4,0,5],sel=new Set([2]);
    $('#sv').innerHTML=SV.map((s,i)=>`<button class="tm-sv" data-i="${i}" aria-pressed="false"><span class="tm-ck"><svg viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5"/></svg></span><span><b>${s[0]}</b><span>${s[1]}</span></span></button>`).join('');
    $('#rw').innerHTML=DIS.map((d,i)=>`<div class="tm-r" data-d="${i}"><div class="tm-i">${ICO[i]}</div><div><div class="tm-h"><b>${d}</b><em></em></div><p></p></div><div class="tm-pp">${'<i></i>'.repeat(2)}</div></div>`).join('');
    let pp=[0,0];
    function upd(){const lv=DIS.map(()=>0),tx=DIS.map(()=>[]);SV.forEach((s,i)=>{if(!sel.has(i))return;s[2].forEach(([d,l,t])=>{lv[d]=Math.max(lv[d],l);tx[d].push(t)})});
    document.querySelectorAll('.tm-sv').forEach(b=>{const on=sel.has(+b.dataset.i);b.classList.toggle('is',on);b.setAttribute('aria-pressed',on)});
    let ppl=0,dn=0;document.querySelectorAll('.tm-r').forEach(r=>{const d=+r.dataset.d,l=lv[d],n=l?Math.min(HC[d],l==2?2:1):0;ppl+=n;if(l)dn++;r.classList.toggle('is',!!l);r.querySelector('em').textContent=l==2?'Lead':l==1?'Support':'Standby';r.querySelector('p').textContent=l?[...new Set(tx[d])].join(' · '):'Not needed for this mix';r.querySelectorAll('.tm-pp i').forEach((p,k)=>p.classList.toggle('f',k<n))});
    document.querySelectorAll('#pr button').forEach((b,i)=>b.classList.toggle('is',PR[i][1].length===sel.size&&PR[i][1].every(x=>sel.has(x))));$('#bf').style.width=ppl/HC.reduce((a,x)=>a+x,0)*100+'%';$('#bc').textContent=`${String(ppl).padStart(2,'0')} OF ${HC.reduce((a,x)=>a+x,0)} CREW MOBILISED`;
    $('#sm').innerHTML=`<div><b>${ppl}</b>People on your squad</div><div><b>${dn}</b>Disciplines</div>`;if(pp[0]!==ppl)$('#sm b').classList.add('pop');pp=[ppl,dn];
    const ch=ORDER.filter(d=>lv[d]);$('#hf').innerHTML=ch.length?ch.map(d=>`<span>${DIS[d]}</span>`).join('<i>→</i>'):'<span style="border-style:dashed;color:var(--mut)">Pick a service to see the handoff</span>'}
    const PR=[["Launch a brand",[0,3]],["Grow a channel",[2,4]],["The full studio",[0,1,2,3,4]],["Clear",[]]];
    $('#pr').innerHTML=PR.map((p,i)=>`<button data-p="${i}">${p[0]}</button>`).join('');$('#pr').onclick=e=>{const b=e.target.closest('button');if(!b)return;sel.clear();PR[+b.dataset.p][1].forEach(x=>sel.add(x));upd()};
    $('#sv').onclick=e=>{const b=e.target.closest('.tm-sv');if(!b)return;const i=+b.dataset.i;sel.has(i)?sel.delete(i):sel.add(i);upd()};upd();
    {let k=0;if(!matchMedia('(prefers-reduced-motion:reduce)').matches)setInterval(()=>{const s=[...document.querySelectorAll('#hf span')];s.forEach((x,i)=>x.classList.toggle('cu',i===k%s.length));k++},1000)}
    /* RULES (placeholders: edit copy) */
    $('#rl').innerHTML=[["One owner per deliverable","Every script, cut, design and page has one person accountable, so nothing gets lost in a group chat."],["Hook before polish","We test the opening seconds and the core idea before anyone spends hours on finish."],["Systems over heroics","Briefs, schedules and checklists mean quality never depends on one late night."],["Stay for the long run","Long-term partnerships and channel takeovers let us learn your audience properly."]].map((r,i)=>`<div class="tm-c rv" style="--d:${i*.06}s"><div class="tm-n">0${i+1}</div><h3>${r[0]}</h3><p>${r[1]}</p></div>`).join('');
    $('#fs').innerHTML=[["TK","Towsif Khan","Founder","Leads the crew and the creative direction: scripting, editing, strategy and channel management."],["MH","Mesbah Hasin","Co-Founder","Keeps the studio running, and has been here since the TSY EditX days."]].map(f=>`<div class="tm-f"><div class="tm-av">${f[0]}</div><div><h3>${f[1]}</h3><p class="r">${f[2]}</p><p>${f[3]}</p><a href="${f[0]==='TK'?'/team/towsif-khan':'/team/mesbah-hasin'}">Read the story →</a></div></div>`).join('');

    /* WAYS TO WORK (placeholders: edit copy) */
    $('#wg').innerHTML=[["Project sprint","A defined brand, site or film, start to finish","A clear scope, one lead and a support squad, delivered on a fixed timeline.",["Scope and timeline agreed up front","Lead plus support squad","Clean handover of every file"],"Launches, rebrands and one-off campaigns"],["Long-term collab","The crew as an extension of your team","A dedicated squad that learns your audience and compounds results month after month.",["Steady weekly rhythm and reporting","Strategy that evolves with the data","One point of contact"],"Brands that want steady, sustainable growth"],["Channel takeover","We run the channel end to end","Scripts, edits, thumbnails, uploads and strategy handled by people who obsess over attention.",["Scripting, editing and thumbnails","Upload schedule and community","Analytics and direction"],"Creators who want to stop juggling everything"]].map((w,i)=>`<div class="tm-w rv" style="--d:${i*.08}s"><div class="tm-i">${ICO[[3,5,0][i]]}</div><small>0${i+1}</small><h3>${w[0]}</h3><p><b style="color:#fff;font-weight:600">${w[1]}.</b> ${w[2]}</p><ul>${w[3].map(x=>`<li>${x}</li>`).join('')}</ul><em><b>Best for:</b> ${w[4]}</em></div>`).join('');
    /* cursor-follow glow */
    if(matchMedia('(hover:hover)').matches)document.addEventListener('pointermove',e=>{const t=e.target.closest('.tm-t,.tm-sv,.tm-c,.tm-f,.tm-w');if(!t)return;const r=t.getBoundingClientRect();t.style.setProperty('--mx',e.clientX-r.left+'px');t.style.setProperty('--my',e.clientY-r.top+'px')});
    /* FOOTER */
    /* MOTION */
    document.querySelectorAll('h2').forEach(h=>{h.setAttribute('aria-label',h.textContent);let n=0;h.innerHTML=h.textContent.split(' ').map(w=>`<span class="hw" aria-hidden="true"><span style="--i:${n++}">${w}</span></span>`).join('')});
    const leads=[...document.querySelectorAll('.lead')].map(l=>{const t=l.textContent;l.setAttribute('aria-label',t);l.innerHTML=t.split(' ').map(w=>`<span aria-hidden="true" style="opacity:.25;transition:opacity .3s">${w}</span>`).join(' ');return [l,[...l.children]]});
    function lead(){leads.forEach(([l,w])=>{const r=l.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;const p=Math.max(0,Math.min(1,(innerHeight*.92-r.top)/(innerHeight*.4)));w.forEach((x,k)=>{x.style.opacity=(.25+.75*Math.max(0,Math.min(1,p*w.length-k))).toFixed(2)})})}
    if(matchMedia('(hover:hover)').matches)document.querySelectorAll('.btn.p').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
    const hd=$('#hd'),bar=$('#bar'),acts=[...document.querySelectorAll('.act')];
    function onS(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;lead();stm();acts.forEach(a=>{const r=a.getBoundingClientRect(),p=Math.max(0,Math.min(1,(innerHeight*.5-r.top)/r.height));a.querySelector('.prg i').style.width=p*100+'%'})}
    let tk=0;addEventListener('scroll',()=>{if(!tk)tk=requestAnimationFrame(()=>{tk=0;onS()})},{passive:true});addEventListener('resize',onS);onS();
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target);const b=e.target.querySelector('.slug b[data-t]');if(b)type(b,b.dataset.t,24)}),{threshold:.2});document.querySelectorAll('.rv,.big').forEach(e=>io.observe(e));
    const io2=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io2.unobserve(e.target);e.target.querySelectorAll('[data-n]').forEach(n=>{const to=+n.dataset.n,dec=String(n.dataset.n).includes('.'),s0=performance.now();(function f(now){const k=Math.min(1,(now-s0)/1800),v=to*(1-Math.pow(1-k,4));n.textContent=(dec?v.toFixed(1):Math.round(v))+n.dataset.s;if(k<1)requestAnimationFrame(f)})(s0)})}),{threshold:.4});io2.observe($('#nm'));


  }());
}
