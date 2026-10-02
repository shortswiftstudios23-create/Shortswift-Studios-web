// GENERATED from the original portfolio-web-v2.html and then hand-maintained.
// Interactive "scene" code for this page. `rt` (see src/site/runtime.js) tracks every timer,
// observer and listener started here and tears them down when you leave the page.
export default function run(rt) {
  const { $, cam, sci, setTimeout, setInterval, requestAnimationFrame, addEventListener, removeEventListener, IntersectionObserver, document } = rt;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const type = async (el, txt, sp = 28) => { el.classList.add('t'); el.textContent = ''; for (const ch of txt) { el.textContent += ch; await sleep(sp); } el.classList.remove('t'); };
  (function page() {

    document.querySelectorAll('[data-cam]').forEach(e=>e.innerHTML=cam);document.querySelectorAll('[data-sci]').forEach(e=>e.innerHTML=sci);
    /* DATA (placeholders: replace copy, links, stats, quotes) */


    const CUR=1,H1=["Websites","that","look","right","everywhere."],LM=3;

    const io2=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io2.unobserve(e.target);e.target.querySelectorAll('[data-n]').forEach(n=>{const to=+n.dataset.n,dec=String(n.dataset.n).includes('.'),s0=performance.now();(function f(now){const k=Math.min(1,(now-s0)/1800),v=to*(1-Math.pow(1-k,4));n.textContent=(dec?v.toFixed(1):Math.round(v))+n.dataset.s;if(k<1)requestAnimationFrame(f)})(s0)})}),{threshold:.4});
    const PORT=[["Brand Development","/portfolio/brand","Identity, strategy and positioning","Screenshots"],["Website Development","/portfolio/web","Live sites on desktop, tablet and mobile","Live websites"],["Social Media Growth","/portfolio/social","Content, ads and community results","Screenshots"],["Video Editing","/portfolio/video","Reels, ads and brand films","Videos"]];
    $('#pix').innerHTML=PORT.map((p,i)=>`<a href="${p[1]}" class="${i===CUR?'on':''}"><i>0${i+1}</i><b>${p[0]}</b><span>${p[2]} · ${p[3]}</span><em>→</em></a>`).join('');
    {const n=PORT[(CUR+1)%4];$('#nxt').innerHTML=`<a class="nxt" href="${n[1]}"><small>NEXT PORTFOLIO</small><h3>${n[0]}</h3><p>${n[2]}</p><span class="ar">→</span></a>`}
    $('#h1').innerHTML=H1.map((x,i)=>`<span class="w" aria-hidden="true"><span style="--i:${i}"${i>=LM?' class="lime"':''}>${x}</span></span>`).join('');$('#h1').setAttribute('aria-label',H1.join(' '));
    /* LIGHTBOX */
    const LB={items:[],i:0,el:$('#lb'),open(items,i,title,cap){this.items=items;this.title=title;this.cap=cap;this.el.classList.add('open');document.body.style.overflow='hidden';$('#lbth').innerHTML=items.map((it,k)=>`<button aria-label="Image ${k+1}" style="${it.src?`background-image:url('${it.src}')`:''}">${it.html?`<svg viewBox="0 0 400 300">${it.html}</svg>`:''}</button>`).join('');[...$('#lbth').children].forEach((b,k)=>b.onclick=()=>this.show(k));this.show(i||0);$('#lbx').focus()},
    show(i){const n=this.items.length;this.i=(i+n)%n;const it=this.items[this.i];$('#lbs').innerHTML=it.src?`<img src="${it.src}" alt="${this.title}">`:`<div class="lba"><svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">${it.html}</svg></div>`;$('#lbt').textContent=this.title;$('#lbd').textContent=this.cap||'';$('#lbk').textContent=`${String(this.i+1).padStart(2,'0')} / ${String(n).padStart(2,'0')}`;[...$('#lbth').children].forEach((b,k)=>b.classList.toggle('on',k===this.i));$('#lbp').style.display=$('#lbn').style.display=n>1?'':'none'},
    close(){this.el.classList.remove('open');document.body.style.overflow=''}};
    $('#lbx').onclick=()=>LB.close();$('#lbp').onclick=()=>LB.show(LB.i-1);$('#lbn').onclick=()=>LB.show(LB.i+1);$('#lb').addEventListener('click',e=>{if(e.target.id==='lb'||e.target.id==='lbs')LB.close()});
    addEventListener('keydown',e=>{if(!$('#lb').classList.contains('open'))return;if(e.key==='Escape')LB.close();if(e.key==='ArrowRight')LB.show(LB.i+1);if(e.key==='ArrowLeft')LB.show(LB.i-1)});
    {let x0=null;$('#lbs').addEventListener('pointerdown',e=>x0=e.clientX);$('#lbs').addEventListener('pointerup',e=>{if(x0===null)return;const d=e.clientX-x0;x0=null;if(Math.abs(d)>50)LB.show(LB.i+(d<0?1:-1))})}
    /* placeholder art */
    const AC='#DFFF00';
    function brandArt(i){const v=((i%4)+4)%4;return [`<rect x="150" y="80" width="100" height="100" rx="28" fill="none" stroke="${AC}" stroke-width="4"/><rect x="124" y="54" width="152" height="152" rx="40" fill="none" stroke="${AC}" stroke-opacity=".4" stroke-width="2"/><circle cx="200" cy="130" r="12" fill="${AC}"/><rect x="120" y="230" width="160" height="8" rx="4" fill="#fff" fill-opacity=".3"/>`,
    `<text x="120" y="170" font-size="96" font-weight="700" fill="#fff" font-family="Bricolage Grotesque,Inter,sans-serif">A<tspan fill="${AC}">a</tspan></text><g><circle cx="130" cy="215" r="16" fill="${AC}"/><circle cx="176" cy="215" r="16" fill="#fff"/><circle cx="222" cy="215" r="16" fill="#141414" stroke="#fff" stroke-opacity=".3"/><circle cx="268" cy="215" r="16" fill="${AC}" fill-opacity=".4"/></g>`,
    `<rect x="90" y="100" width="90" height="90" rx="26" fill="none" stroke="${AC}" stroke-width="4"/><path d="M118 172l44-44M162 172l-44-44" stroke="${AC}" stroke-width="4" stroke-linecap="round"/><rect x="200" y="122" width="110" height="14" rx="7" fill="#fff"/><rect x="200" y="146" width="80" height="10" rx="5" fill="${AC}" fill-opacity=".7"/>`,
    `<g transform="rotate(-6 200 150)"><rect x="90" y="90" width="170" height="100" rx="14" fill="#141414" stroke="#fff" stroke-opacity=".25"/><rect x="108" y="112" width="60" height="8" rx="4" fill="#fff" fill-opacity=".5"/><rect x="108" y="130" width="90" height="6" rx="3" fill="#fff" fill-opacity=".25"/></g><g transform="rotate(7 220 170)"><rect x="140" y="120" width="170" height="100" rx="14" fill="${AC}"/><rect x="158" y="144" width="60" height="8" rx="4" fill="#000" fill-opacity=".8"/><rect x="158" y="162" width="90" height="6" rx="3" fill="#000" fill-opacity=".4"/></g>`][v]}
    function phoneArt(i){return `<rect width="225" height="400" fill="#0D0D0D"/><rect x="16" y="20" width="193" height="30" rx="15" fill="#141414"/><circle cx="34" cy="35" r="9" fill="${AC}"/><rect x="52" y="30" width="60" height="6" rx="3" fill="#fff" fill-opacity=".5"/><rect x="52" y="40" width="40" height="5" rx="2.5" fill="#fff" fill-opacity=".25"/><rect x="16" y="62" width="193" height="150" rx="16" fill="${AC}" fill-opacity=".85"/><path d="M40 188L80 150L110 168L150 120L190 100" fill="none" stroke="#000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".7"/><text x="16" y="250" font-size="34" font-weight="700" fill="${AC}" font-family="Bricolage Grotesque,Inter,sans-serif">+${[212,148,96][i%3]}%</text><text x="16" y="270" font-size="12" fill="#9A9A9A" font-family="Inter,sans-serif">Reach · 90 days</text><rect x="16" y="290" width="193" height="8" rx="4" fill="#fff" fill-opacity=".18"/><rect x="16" y="306" width="140" height="8" rx="4" fill="#fff" fill-opacity=".12"/><circle cx="30" cy="350" r="9" fill="${AC}"/><rect x="48" y="346" width="40" height="8" rx="4" fill="#fff" fill-opacity=".3"/>`}
    function socialArt(i){const P=['M30 210 L90 190 L140 200 L200 140 L260 120 L320 60 L370 40','M30 220 L100 210 L160 170 L220 175 L280 110 L370 70','M30 200 L80 210 L150 150 L210 130 L270 90 L370 50'][i%3];return `<rect x="24" y="24" width="352" height="252" rx="20" fill="#0D0D0D" stroke="#fff" stroke-opacity=".12"/><text x="44" y="56" font-size="13" fill="#9A9A9A" font-family="Inter,sans-serif">Reach · last 90 days</text><text x="44" y="96" font-size="34" font-weight="700" fill="${AC}" font-family="Bricolage Grotesque,Inter,sans-serif">+${[212,148,96][i%3]}%</text><path d="${P}" fill="none" stroke="${AC}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" transform="translate(0,20)"/><path d="M30 246H370" stroke="#fff" stroke-opacity=".12"/><g fill="#fff" fill-opacity=".2"><rect x="44" y="252" width="40" height="8" rx="4"/><rect x="150" y="252" width="40" height="8" rx="4"/><rect x="256" y="252" width="40" height="8" rx="4"/></g>`}
    /* HOW TO ADD YOUR WEBSITES
       Paste each live link into url. Set embed:false if a site blocks being embedded (it will open in Snapshot mode).
       Optional: shots:{desktop:'images/web/a-desktop.jpg',tablet:'images/web/a-tablet.jpg',phone:'images/web/a-mobile.jpg'} to use your own screenshots.
       With url left empty you will see a demo site so you can try the device switcher. */
    const WEB=[{n:'Vulcan Sportswear',t:'E-commerce',url:'https://vulcansportswear.com/',embed:true,shots:null},{n:'Hengyu DAC 211',t:'Luxury car showroom',url:'https://www.hengyudac211.com/',embed:true,shots:null},{n:'Ayah Scents',t:'Fragrance store',url:'https://ayah-scents.vercel.app/',embed:true,shots:null}];
    const DEV={desktop:{w:1280,h:800,bz:0,top:36,bd:1},tablet:{w:820,h:1100,bz:14,top:0,bd:2},phone:{w:390,h:844,bz:11,top:0,bd:2}};
    const FAKE=`<!doctype html><meta name=viewport content="width=device-width,initial-scale=1"><style>*{box-sizing:border-box}body{margin:0;background:#050505;color:#fff;font:15px/1.5 system-ui,sans-serif}nav{display:flex;justify-content:space-between;align-items:center;padding:18px 5vw;border-bottom:1px solid #1d1d1d}nav b{color:#DFFF00}nav span{color:#777;font-size:13px}.h{padding:9vw 5vw 6vw}h1{font-size:clamp(28px,5vw,64px);line-height:1.02;margin:0 0 14px;letter-spacing:-.03em;max-width:12ch}h1 i{color:#DFFF00;font-style:normal}p{color:#8a8a8a;max-width:34em}.b{display:inline-block;background:#DFFF00;color:#000;padding:11px 20px;border-radius:99px;font-weight:600;margin-top:12px}.g{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;padding:0 5vw 6vw}.g div{height:120px;border-radius:18px;border:1px solid #222;background:radial-gradient(circle at 30% 20%,#DFFF0033,transparent 60%),#0e0e0e}</style><nav><b>yourbrand</b><span>Work · About · Contact</span></nav><div class=h><h1>Your website, <i>live here.</i></h1><p>Paste your link into the WEB list and this frame shows the real site on desktop, tablet and mobile.</p><a class=b>Get started</a></div><div class=g><div></div><div></div><div></div><div></div></div>`;
    let wi=0,dv='desktop',md='live';const scr=$('#scr'),dev=$('#dev');
    $('#wpk').innerHTML=WEB.map((w,i)=>`<button class="wt${i?'':' on'}" role="tab"><i>0${i+1}</i><div><b>${w.n}</b><span>${w.t}</span></div></button>`).join('');
    [...$('#wpk').children].forEach((b,i)=>b.onclick=()=>{wi=i;[...$('#wpk').children].forEach(x=>x.classList.toggle('on',x===b));md=WEB[i].embed===false?'shot':'live';syncMode();load()});
    function syncMode(){[...$('#msg').children].forEach(b=>b.classList.toggle('on',b.dataset.m===md))}
    [...$('#dsg').children].forEach(b=>b.onclick=()=>{dv=b.dataset.d;[...$('#dsg').children].forEach(x=>x.classList.toggle('on',x===b));fit(true)});
    [...$('#msg').children].forEach(b=>b.onclick=()=>{md=b.dataset.m;syncMode();load()});
    function fit(anim){const d=DEV[dv],v=$('#wview'),aw=v.clientWidth-40,ah=v.clientHeight-40,s=Math.min((aw-2*d.bz-2*d.bd)/d.w,(ah-2*d.bz-d.top-2*d.bd)/d.h,1);
    dev.className='dev '+(dv==='phone'?'phone':dv);dev.style.width=(d.w*s+2*d.bz+2*d.bd)+'px';dev.style.height=(d.h*s+2*d.bz+d.top+2*d.bd)+'px';scr.style.width=d.w*s+'px';scr.style.height=d.h*s+'px';
    const el=scr.querySelector('iframe,img.snap');if(el){el.style.width=d.w+'px';el.style.height=d.h+'px';el.style.transform=`scale(${s})`}if(md==='shot'&&scr.dataset.dv!==dv)load()}
    function load(){const w=WEB[wi],d=DEV[dv],url=w.url;$('#wn').textContent=w.n;const u=$('#wu');u.textContent=url||'Demo site: paste a link to replace it';u.href=url||'#';$('#wo').href=url||'#';$('#wo').style.display=url?'':'none';$('#wbar').textContent=url||'yourbrand.com';
    scr.dataset.dv=dv;scr.innerHTML='<div class="ld" id="ld">Loading preview…</div>';const done=()=>$('#ld')&&$('#ld').classList.add('h');setTimeout(done,9000);
    if(md==='live'||!url){const f=document.createElement('iframe');f.title=w.n;f.loading='lazy';f.setAttribute('sandbox','allow-scripts allow-same-origin allow-forms allow-popups');f.onload=done;if(url)f.src=url;else f.srcdoc=FAKE;scr.appendChild(f)}
    else{const im=document.createElement('img');im.className='snap';im.alt=w.n+' snapshot';const own=w.shots&&w.shots[dv];im.src=own||`https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=${d.w}&h=${d.h}`;im.onload=done;scr.appendChild(im)}
    fit()}
    addEventListener('resize',()=>fit());load();
    /* FOOTER */
    /* MOTION */
    document.querySelectorAll('h2').forEach(h=>{h.setAttribute('aria-label',h.textContent);let n=0;h.innerHTML=h.textContent.split(' ').map(w=>`<span class="hw" aria-hidden="true"><span style="--i:${n++}">${w}</span></span>`).join('')});
    const leads=[...document.querySelectorAll('.lead')].map(l=>{const t=l.textContent;l.setAttribute('aria-label',t);l.innerHTML=t.split(' ').map(w=>`<span aria-hidden="true" style="opacity:.25;transition:opacity .3s">${w}</span>`).join(' ');return [l,[...l.children]]});
    function lead(){leads.forEach(([l,w])=>{const r=l.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;const p=Math.max(0,Math.min(1,(innerHeight*.92-r.top)/(innerHeight*.4)));w.forEach((x,k)=>{x.style.opacity=(.25+.75*Math.max(0,Math.min(1,p*w.length-k))).toFixed(2)})})}
    if(matchMedia('(hover:hover)').matches)document.querySelectorAll('.btn.p').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});

    const hd=$('#hd'),bar=$('#bar');
    function onS(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;lead()}
    let tk=0;addEventListener('scroll',()=>{if(!tk)tk=requestAnimationFrame(()=>{tk=0;onS()})},{passive:true});addEventListener('resize',onS);onS();
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target)}),{threshold:.12});document.querySelectorAll('.rv,.big').forEach(e=>io.observe(e));
    window.watchRV=el=>io.observe(el);
    document.querySelectorAll('[data-obs]').forEach(e=>io2.observe(e));
    /* PORTFOLIO v2: glow on cards, count-up in results band */
    document.querySelectorAll('.px2').forEach(t=>t.addEventListener('pointermove',e=>{const r=t.getBoundingClientRect();t.style.setProperty('--mx',e.clientX-r.left+'px');t.style.setProperty('--my',e.clientY-r.top+'px')}));
    {const b=document.querySelector('.rband');if(b&&!matchMedia('(prefers-reduced-motion:reduce)').matches)new IntersectionObserver((es,o)=>es.forEach(e=>{if(!e.isIntersecting)return;o.disconnect();b.querySelectorAll('b').forEach(n=>{const m=n.textContent.match(/^(\D*)(\d+)(.*)$/);if(!m)return;const to=+m[2],t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/1500);n.textContent=m[1]+Math.round(to*(1-Math.pow(1-k,4)))+m[3];if(k<1)requestAnimationFrame(f)})(t0)})}),{threshold:.5}).observe(b)}
    {const s=document.querySelector('.stp');if(s)new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){s.classList.add('in');o.disconnect()}}),{threshold:.3}).observe(s)}

  }());
}
