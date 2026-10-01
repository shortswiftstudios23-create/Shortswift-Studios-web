// GENERATED from the original shortswift-gallery-v4.html and then hand-maintained.
// Interactive "scene" code for this page. `rt` (see src/site/runtime.js) tracks every timer,
// observer and listener started here and tears them down when you leave the page.
export default function run(rt) {
  const { $, cam, sci, setTimeout, setInterval, requestAnimationFrame, addEventListener, removeEventListener, IntersectionObserver, document } = rt;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const type = async (el, txt, sp = 28) => { el.classList.add('t'); el.textContent = ''; for (const ch of txt) { el.textContent += ch; await sleep(sp); } el.classList.remove('t'); };
  (function page() {

    document.querySelectorAll('[data-cam]').forEach(e=>e.innerHTML=cam);document.querySelectorAll('[data-sci]').forEach(e=>e.innerHTML=sci);
    /* DATA (placeholders: replace copy, links, stats, quotes) */

    $('#h1').innerHTML=["Frames","worth","stopping","for."].map((x,i)=>`<span class="w" aria-hidden="true"><span style="--i:${i}"${i>0?' class="lime"':''}>${x}</span></span>`).join('');
    function stm(){}
    /* GALLERY DATA (placeholders): replace t (title), c (category index) and put a real <img> where marked IMAGE SLOT. */
    /* FOUNDERS (SEO): put your photos in an images/ folder next to this file using these exact names, or edit the paths. Keep the alt text descriptive. */
    const FD=[{n:"Towsif Khan",r:"Founder",init:"TK",img:"images/towsif-khan-founder-shortswift-studio.jpg",alt:"Towsif Khan, founder of ShortSwift Studio in Dhaka, Bangladesh",bio:"Started on a slow old laptop and built a studio with a team of 14+ creatives. Leads creative direction, scripting, editing, strategy and channel management.",chips:["Creative direction","Scripting","Video editing","Strategy"]},{n:"Mesbah Hasin",r:"Co-Founder",init:"MH",img:"images/mesbah-hasin-cofounder-shortswift-studio.jpg",alt:"Mesbah Hasin, co-founder of ShortSwift Studio in Dhaka, Bangladesh",bio:"Managed TSY EditX from the early days and stayed through the hardest years. Co-founder of ShortSwift Studio, keeping the team and the work running.",chips:["Operations","Team management","Client relationships"]}];
    const CATS=["Brand","Web","Social","Video","Campaigns","Founders"],DEL=[["Identity","Strategy","Guidelines"],["UI design","Development","Speed"],["Content","Community","Ads"],["Editing","Motion","Delivery"],["Strategy","Content","Launch"],["Leadership","Creative direction","Strategy"]];
    const POS=[[60,80,380,480],[480,40,300,300],[820,120,420,280],[1280,60,340,440],[1660,140,400,320],[100,600,320,320],[460,420,360,480],[860,440,300,400],[1200,560,440,300],[1680,520,340,460],[300,960,420,260],[780,900,380,320],[1220,920,360,300],[1620,880,260,340],[1900,840,240,340]],WW=2200,WH=1260;
    const T=POS.map((p,i)=>({i,x:p[0],y:p[1],w:p[2],h:p[3],c:i>12?5:i%5,t:i>12?FD[i-13].n:'Project name '+String(i+1).padStart(2,'0'),img:i>12?FD[i-13].img:null,alt:i>12?FD[i-13].alt:''}));
    const L='#DFFF00';
    function art(i){let s='';switch(i%8){case 0:s=`<circle cx="50" cy="52" r="36"/><circle cx="50" cy="52" r="24"/><circle cx="50" cy="52" r="11" fill="${L}"/>`;break;case 1:for(let a=0;a<5;a++)for(let b=0;b<5;b++)s+=`<circle cx="${20+a*15}" cy="${20+b*15}" r="2.4" fill="${L}" stroke="none"/>`;break;case 2:for(let k=0;k<6;k++)s+=`<path d="M${14+k*13} 86L${34+k*13} 14"/>`;break;case 3:s=`<path d="M8 72A42 42 0 0 1 92 72Z" fill="${L}" stroke="none"/><path d="M8 82H92"/>`;break;case 4:s=`<rect x="18" y="30" width="48" height="40" rx="9"/><path d="M66 44l16-8v28l-16-8"/><circle cx="38" cy="50" r="7"/>`;break;case 5:s=`<rect x="22" y="22" width="56" height="56" rx="16"/><path d="M44 38l18 12-18 12z" fill="${L}"/>`;break;case 6:[38,62,46,78,54].forEach((h,k)=>s+=`<rect x="${16+k*15}" y="${86-h}" width="9" height="${h}" rx="4" fill="${L}" stroke="none"/>`);break;default:s=`<path d="M6 55C20 20 32 20 44 55S68 90 94 45"/><path d="M6 68C20 40 32 40 44 68S68 96 94 60" opacity=".4"/>`}
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" fill="none" stroke="${L}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s}</svg>`}
    const bg=i=>`radial-gradient(circle at ${[20,80,50,70,30][i%5]}% ${[15,25,90,80,60][i%5]}%,rgba(223,255,0,${(.16+(i%3)*.06).toFixed(2)}),#000 62%)`;
    const tile=(t,st)=>`<button class="gl-t" data-i="${t.i}" style="background:${bg(t.i)};${st}" aria-label="${t.t}, ${CATS[t.c]}"><!-- IMAGE SLOT: replace the svg with <img src="" alt=""> -->${art(t.i)}${t.img?`<img src="${t.img}" alt="${t.alt}" width="600" height="800" loading="lazy" decoding="async" onerror="this.remove()">`:''}<span class="gl-n">${String(t.i+1).padStart(2,'0')}</span><span class="gl-l"><em>${CATS[t.c]}</em><b>${t.t}</b></span></button>`;
    $('#wd').innerHTML=T.map(t=>tile(t,`left:${t.x}px;top:${t.y}px;width:${t.w}px;height:${t.h}px`)).join('');
    $('#gv').innerHTML=T.map(t=>tile(t,'')).join('');
    $('#gmm').innerHTML=T.map(t=>`<b data-i="${t.i}" style="left:${t.x/WW*100}%;top:${t.y/WH*100}%;width:${t.w/WW*100}%;height:${t.h/WH*100}%"></b>`).join('')+'<i id="mv"></i>';
    $('#ch').innerHTML=['All',...CATS].map((x,i)=>`<button class="${i?'':'is'}" data-f="${i-1}" aria-pressed="${!i}">${x}</button>`).join('');
    /* canvas physics */
    const cv=$('#cv'),wd=$('#wd'),fr=$('#fr'),mv=$('#mv');let x=40,y=20,vx=0,vy=0,dr=-.35,drift=true,drag=false,vis=false,K=1,f=-1,view=0;
    const clamp=()=>{const w=cv.clientWidth,h=cv.clientHeight,ww=WW*K,wh=WH*K,pad=30;const lo=(a,b)=>a>=b?[(a-b)/2,(a-b)/2]:[a-b-pad,pad];const [mnx,mxx]=lo(w,ww),[mny,mxy]=lo(h,wh);let hit=false;if(x>mxx){x=mxx;hit=true}if(x<mnx){x=mnx;hit=true}if(y>mxy){y=mxy}if(y<mny){y=mny}return hit};
    const apply=()=>{wd.style.transform=`translate(${x}px,${y}px) scale(${K})`;const w=cv.clientWidth,h=cv.clientHeight;mv.style.left=Math.max(0,-x/(K*WW))*100+'%';mv.style.top=Math.max(0,-y/(K*WH))*100+'%';mv.style.width=Math.min(1,w/(K*WW))*100+'%';mv.style.height=Math.min(1,h/(K*WH))*100+'%'};
    const size=()=>{K=cv.clientWidth<700?.6:1;clamp();apply()};size();addEventListener('resize',size);
    new IntersectionObserver(e=>vis=e[0].isIntersecting&&view===0).observe(fr);
    (function tick(){if(vis&&!drag){if(drift){x+=dr;if(clamp())dr=-dr}else{x+=vx;y+=vy;vx*=.94;vy*=.94;clamp()}apply()}requestAnimationFrame(tick)})();
    let sx,sy,ox,oy,lx,ly,mvd,dt=null;
    cv.addEventListener('pointerdown',e=>{if(e.button)return;drag=true;drift=false;vx=vy=0;sx=lx=e.clientX;sy=ly=e.clientY;ox=x;oy=y;mvd=0;dt=e.target.closest('.gl-t');cv.setPointerCapture(e.pointerId);cv.classList.add('dg')});
    cv.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-sx,dy=e.clientY-sy;mvd=Math.max(mvd,Math.hypot(dx,dy));x=ox+dx;y=oy+dy;clamp();vx=e.clientX-lx;vy=e.clientY-ly;lx=e.clientX;ly=e.clientY;apply()});
    const up=()=>{if(!drag)return;drag=false;cv.classList.remove('dg');if(mvd<6&&dt){open(+dt.dataset.i)}dt=null};
    cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
    cv.addEventListener('keydown',e=>{const d={ArrowLeft:[120,0],ArrowRight:[-120,0],ArrowUp:[0,120],ArrowDown:[0,-120]}[e.key];if(!d)return;e.preventDefault();drift=false;x+=d[0];y+=d[1];clamp();apply()});
    wd.addEventListener('focusin',e=>{const t=e.target.closest('.gl-t');if(!t)return;drift=false;const p=T[+t.dataset.i];x=cv.clientWidth/2-(p.x+p.w/2)*K;y=cv.clientHeight/2-(p.y+p.h/2)*K;clamp();apply()});
    /* cursor bubble */
    const cu=$('#cu');if(matchMedia('(hover:hover)').matches){const lab=e=>{const t=document.elementFromPoint(e.clientX,e.clientY);cu.textContent=t&&t.closest('.gl-t')?'View':'Drag'};cv.addEventListener('pointermove',e=>{cu.style.left=e.clientX+'px';cu.style.top=e.clientY+'px';if(!drag)lab(e);cu.classList.add('on')});cv.addEventListener('pointerenter',()=>cu.classList.add('on'));cv.addEventListener('pointerleave',()=>cu.classList.remove('on'));cv.addEventListener('pointerdown',()=>cu.textContent='Drag');cv.addEventListener('pointerup',lab)}
    /* tile glow */
    document.addEventListener('pointermove',e=>{const t=e.target.closest('.gl-t');if(!t)return;const r=t.getBoundingClientRect(),k=t.closest('.gl-w')?K:1;t.style.setProperty('--mx',(e.clientX-r.left)/k+'px');t.style.setProperty('--my',(e.clientY-r.top)/k+'px')});
    /* filter + view */
    function setF(n){f=n;document.querySelectorAll('#ch button').forEach(b=>{const on=+b.dataset.f===n;b.classList.toggle('is',on);b.setAttribute('aria-pressed',on)});let c=0;document.querySelectorAll('.gl-t').forEach(t=>{const ok=n<0||T[+t.dataset.i].c===n;t.classList.toggle(t.closest('#gv')?'gone':'dim',!ok)});T.forEach(t=>{if(n<0||t.c===n)c++});document.querySelectorAll('#gmm b').forEach(b=>b.classList.toggle('o',n>=0&&T[+b.dataset.i].c!==n));$('#fc').textContent=c+(c==1?' FRAME':' FRAMES')}
    $('#ch').onclick=e=>{const b=e.target.closest('button');if(b)setF(+b.dataset.f)};
    $('#vw').onclick=e=>{const b=e.target.closest('button');if(!b)return;view=+b.dataset.v;document.querySelectorAll('#vw button').forEach(x=>x.classList.toggle('is',x===b));cv.style.display=view?'none':'';document.querySelector('.gl-bt').style.display=view?'none':'';$('#gv').classList.toggle('on',!!view);fr.style.height=view?'auto':'';fr.style.border=view?'0':'';fr.style.background=view?'none':'';fr.style.overflow=view?'visible':'';fr.classList.toggle('ng',!!view);vis=view===0;if(view)cu.classList.remove('on')};
    /* lightbox */
    const lb=$('#lb');let cur=0,opener=null;
    const list=()=>T.filter(t=>f<0||t.c===f);
    function fill(i){const t=T[i],l=list(),n=l.findIndex(q=>q.i===i);cur=i;$('#la').innerHTML=art(i)+(t.img?`<img src="${t.img}" alt="${t.alt}" onerror="this.remove()">`:'');$('#la').style.background=bg(i);$('#li').innerHTML=`<small>${String(n+1).padStart(2,'0')} / ${String(l.length).padStart(2,'0')} · ${CATS[t.c].toUpperCase()}</small><h3>${t.t}</h3><p>Project description placeholder. Add the brief, what we delivered and the result it drove for the client.</p><div class="cp">${DEL[t.c].map(x=>`<span>${x}</span>`).join('')}</div><div class="gl-ct"><button id="pv" aria-label="Previous">←</button><button id="nx" aria-label="Next">→</button><a href="${['/portfolio/brand','/portfolio/web','/portfolio/social','/portfolio/video','/testimonials','/team'][t.c]}">View case study →</a></div>`;$('#pv').onclick=()=>step(-1);$('#nx').onclick=()=>step(1)}
    function open(i){opener=document.activeElement;fill(i);lb.classList.add('on');lb.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';$('#lx').focus()}
    function close(){lb.classList.remove('on');lb.setAttribute('aria-hidden','true');document.body.style.overflow='';opener&&opener.focus&&opener.focus()}
    function step(d){const l=list(),n=l.findIndex(q=>q.i===cur);fill(l[(n+d+l.length)%l.length].i)}
    $('#lx').onclick=close;lb.addEventListener('pointerdown',e=>{if(e.target===lb)close()});
    $('#gv').addEventListener('click',e=>{const t=e.target.closest('.gl-t');if(t)open(+t.dataset.i)});
    addEventListener('keydown',e=>{if(!lb.classList.contains('on'))return;if(e.key=='Escape')close();if(e.key=='ArrowRight')step(1);if(e.key=='ArrowLeft')step(-1);if(e.key=='Tab'){const b=[...lb.querySelectorAll('button,a')],a=b[0],z=b[b.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});
    setF(-1);

    /* marquee under hero */
    $('#mq').innerHTML=[0,1].map(()=>CATS.map(x=>`<span>${x}<i></i></span>`).join('')).join('');
    /* formats (all animation is CSS) */
    $('#fm').innerHTML=[["Vertical reel","9:16 · SOCIAL","Hook in the first second, pace that never drops.",'<div class="mk-r"><div class="p"></div><div class="pl"></div><div class="ac"><i></i><i></i><i></i></div><div class="ln"></div></div>'],["Cinematic film","16:9 · VIDEO","Brand films and long-form with a clean finish.",'<div class="mk-f"><div class="pl"></div><div class="eq"><i></i><i></i><i></i><i></i></div><div class="tl"></div></div>'],["Feed post","1:1 · BRAND","Identity systems that stay recognisable in a scroll.",'<div class="mk-p"><b></b><b></b><b></b><em>+1.2K</em></div>'],["Website","RESPONSIVE · WEB","Fast, clear and built to convert on every device.",'<div class="mk-w"><div class="bar"><i></i><i></i><i></i></div><div class="sc"><div class="h"></div><div class="a"></div><div class="a" style="width:70%"></div><div class="g"><i></i><i></i><i></i></div><div class="g"><i></i><i></i><i></i></div><div class="a"></div></div></div>']].map((f,i)=>`<div class="gl-fc rv" style="--d:${i*.07}s"><div class="gl-mk">${f[3]}</div><h3>${f[0]}</h3><small>${f[1]}</small><p>${f[2]}</p></div>`).join('');


    /* hero portraits + founders spotlight (SEO: real <img>, alt text, figure/figcaption) */
    const pf=(d,cls,eager)=>`<figure class="gl-pf ${cls}" style="margin:0"><span class="mo" aria-hidden="true">${d.init}</span><img src="${d.img}" alt="${d.alt}" width="800" height="1000" ${eager?'loading="eager" fetchpriority="high"':'loading="lazy"'} decoding="async" onerror="this.remove()"><i class="br tl1"></i><i class="br tr1"></i><i class="br bl1"></i><i class="br rb1"></i><figcaption class="gl-tag"><b>${d.n}</b><small>${d.r}</small></figcaption></figure>`;
    $('#hp').innerHTML=pf(FD[0],'a',1)+pf(FD[1],'b',1);
    $('#fd').innerHTML=FD.map((d,i)=>`<article class="gl-fd rv" style="--d:${i*.1}s">${pf(d,'',0)}<div class="gl-fi"><small>${d.r}</small><h3>${d.n}</h3><p>${d.bio}</p><div class="cp">${d.chips.map(x=>`<span>${x}</span>`).join('')}</div><a href="/about">Read the full story →</a></div></article>`).join('');

    const FAQ=[["What does ShortSwift Studio do?", "We are a Dhaka-based brand development and growth agency. Our work covers brand identity and strategy, websites, social media growth and video editing."], ["Who founded ShortSwift Studio?", "Towsif Khan is the founder and Mesbah Hasin is the co-founder. The studio officially opened on 14 January 2022, growing out of the video editing agency TSY EditX, founded on 9 November 2020."], ["Where are you based?", "We are based in Dhaka, Bangladesh, and we work with brands and creators remotely."], ["Can I see full case studies?", "Yes. Every project in this gallery links to a case study in our portfolio, with the brief, what we delivered and the result."], ["How does a project start?", "Book a meeting. We talk through your goals, audience and timeline, then propose the right squad, a plan and a clear scope."], ["Do you take long-term collaborations and channel takeovers?", "Yes. Long-term collaborations, channel takeovers and bigger creative projects are the work we enjoy most."]];
    $('#ql').innerHTML=FAQ.map((f,i)=>`<div class="gl-q${i?'':' open'}"><button aria-expanded="${!i}" aria-controls="fa${i}" id="fq${i}"><span>${f[0]}</span><i aria-hidden="true">+</i></button><div class="gl-a" id="fa${i}" role="region" aria-labelledby="fq${i}"><div><p>${f[1]}</p></div></div></div>`).join('');
    $('#ql').onclick=e=>{const bt=e.target.closest('button');if(!bt)return;const q=bt.parentNode,o=q.classList.contains('open');document.querySelectorAll('.gl-q').forEach(x=>{x.classList.remove('open');x.querySelector('button').setAttribute('aria-expanded',false)});if(!o){q.classList.add('open');bt.setAttribute('aria-expanded',true)}};
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
