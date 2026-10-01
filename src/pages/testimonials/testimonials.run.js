// GENERATED from the original shortswift-testimonials-v4.html and then hand-maintained.
// Interactive "scene" code for this page. `rt` (see src/site/runtime.js) tracks every timer,
// observer and listener started here and tears them down when you leave the page.
export default function run(rt) {
  const { $, cam, sci, setTimeout, setInterval, requestAnimationFrame, addEventListener, removeEventListener, IntersectionObserver, document } = rt;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const type = async (el, txt, sp = 28) => { el.classList.add('t'); el.textContent = ''; for (const ch of txt) { el.textContent += ch; await sleep(sp); } el.classList.remove('t'); };
  (function page() {

    document.querySelectorAll('[data-cam]').forEach(e=>e.innerHTML=cam);document.querySelectorAll('[data-sci]').forEach(e=>e.innerHTML=sci);
    /* DATA (placeholders: replace copy, links, stats, quotes) */

    $('#h1').innerHTML=["Don't","take","our","word","for","it."].map((x,i)=>`<span class="w" aria-hidden="true"><span style="--i:${i}"${i>1&&i<4?' class="lime"':''}>${x}</span></span>`).join('');
    function stm(){}
    /* TESTIMONIAL DATA: every name, quote, company and result below is a PLACEHOLDER. Replace with real client words (with permission). */
    const SVN=["Brand Development","Business Growth","Social Media Growth","Website Development","Video Editing"];
    const TH=[["Gaming creator","",2,[["c","Honestly, I was ready to give up on the channel."],["c","Then you rebuilt the first 30 seconds of every video."],["s","That is where most viewers decide. Did retention move?"],["c","Watch time is up and uploads finally feel calm."]]],
    ["Skincare founder","",0,[["c","The new identity finally looks like the business we run."],["s","Glad it lands. Did the team get it right away?"],["c","Instantly. Customers now recognise us before they read the name."]]],
    ["E-commerce marketer","",3,[["c","The site launched a day early. That has never happened to us."],["s","Anything you want tweaked before we hand over?"],["c","Nothing. Enquiries doubled in the first month."]]]];
    const bd=$('#bd');let run=0,paused=false;const sl=ms=>new Promise(r=>setTimeout(r,ms));
    $('#dt').innerHTML=TH.map((t,i)=>`<button aria-label="Conversation ${i+1}" data-i="${i}"></button>`).join('');
    const hold=async id=>{while(paused&&id===run)await sl(200)};
    async function play(i){const id=++run,t=TH[i];document.querySelectorAll('#dt button').forEach((b,k)=>b.classList.toggle('is',k===i));
    bd.classList.add('o');await sl(300);if(id!==run)return;bd.innerHTML='<div class="ts-dv">TODAY</div>';bd.classList.remove('o');
    $('#pn').textContent=t[0];$('#pa').textContent=t[0].split(' ').map(x=>x[0]).join('');$('#pt').textContent=SVN[t[2]];
    for(const [w,tx] of t[3]){await hold(id);if(id!==run)return;
     const ty=document.createElement('div');ty.className='ts-ty'+(w=='s'?' s':'');ty.innerHTML='<i></i><i></i><i></i>';bd.appendChild(ty);if(w=='c')$('#ps').textContent='typing…';await sl(1000);if(id!==run)return;ty.remove();$('#ps').textContent='Online';
     const m=document.createElement('div');m.className='ts-m'+(w=='s'?' s':'');m.textContent=tx;bd.appendChild(m);
     while(bd.scrollHeight>bd.clientHeight&&bd.children.length>2)bd.removeChild(bd.firstChild);
     await sl(1400);if(id!==run)return}
    const sn=document.createElement('div');sn.className='ts-sn';sn.textContent='SEEN · 10:'+(41+i*6);bd.appendChild(sn);const tt=$('#tt');tt.classList.add('on');setTimeout(()=>tt.classList.remove('on'),2800);
    await sl(3200);await hold(id);if(id===run)play((i+1)%TH.length)}
    $('#dt').onclick=e=>{const b=e.target.closest('button');if(b){paused=false;$('#pb').textContent='Pause';$('#pb').setAttribute('aria-pressed','false');play(+b.dataset.i)}};
    $('#pb').onclick=()=>{paused=!paused;$('#pb').textContent=paused?'Play':'Pause';$('#pb').setAttribute('aria-pressed',paused)};
    play(0);
    /* SCORECARD (placeholders) */
    $('#nm').innerHTML=[["Communication",4.9],["Quality of work",5],["Speed of delivery",4.8],["Results",4.9]].map(d=>`<div class="ts-d rv"><div class="ts-rg"><svg viewBox="0 0 120 120"><circle class="bg" cx="60" cy="60" r="52"/><circle class="f" cx="60" cy="60" r="52" style="--p:${d[1]/5}"/></svg><b><span data-n="${d[1].toFixed(1)}" data-s="">0</span></b></div><h3>${d[0]}</h3><small>OUT OF 5</small></div>`).join('');
    /* CLIENT STORIES (placeholders: replace quotes, names, metrics, chart points) */
    const ST=[["Social Media Growth",2,"Working with the crew felt like adding a whole creative department overnight. The channel finally has a rhythm.","Gaming creator","Channel, 420K subscribers","",[[180,"+","%","Watch time",0],[12,"","","Uploads per month",0],[3.4,"","x","Monthly subscriber growth",1]],"M0 100 C40 96 60 92 90 88 S140 80 170 74 S220 50 260 36 S340 14 400 6","SUBSCRIBERS, FIRST 6 MONTHS",["Scripting","Editing","Thumbnails","Channel management"]],
    ["Brand Development",0,"The new identity finally looks like the business we run. Customers recognise us before they even read the name.","Skincare brand founder","D2C brand","",[[6,""," wks","From brief to full rebrand",0],[2,"","x","Inbound enquiries",0],[91,"","%","Say it feels on-brand",0]],"M0 98 C50 96 90 90 130 84 S190 70 230 52 S330 24 400 12","INBOUND ENQUIRIES, FIRST 6 MONTHS",["Positioning","Identity","Brand guidelines"]],
    ["Website Development",3,"The site launched a day early, loads instantly and finally converts. That has never happened to us before.","Marketing lead","E-commerce brand","",[[1.2,"","s","Average load time",1],[2,"","x","Enquiries per month",0],[40,"+","%","Conversion rate",0]],"M0 94 C40 92 80 96 120 80 S200 60 250 44 S340 22 400 10","MONTHLY ENQUIRIES, FIRST 6 MONTHS",["UI design","Development","Conversion strategy"]]];
    const cnt=(el,to,dec,pre,suf)=>{const s0=performance.now();(function f(n){const k=Math.min(1,(n-s0)/1400),v=to*(1-Math.pow(1-k,4));el.textContent=pre+(dec?v.toFixed(1):Math.round(v))+suf;if(k<1)requestAnimationFrame(f)})(s0)};
    $('#tb').insertAdjacentHTML('beforeend',ST.map((s,i)=>`<button role="tab" data-i="${i}">${s[0]}</button>`).join(''));
    const QI='<svg viewBox="0 0 32 32"><path d="M4 18c0-7 4-12 10-13v4c-3 1-5 3-5 6h5v10H4zm14 0c0-7 4-12 10-13v4c-3 1-5 3-5 6h5v10H18z"/></svg>';
    let si=0,hv=false,tm;
    function go(i,first){si=i;const s=ST[i],st=$('#st');document.querySelectorAll('#tb button').forEach((b,k)=>{b.classList.toggle('is',k===i);b.setAttribute('aria-selected',k===i)});const bt=document.querySelectorAll('#tb button')[i],ind=$('#tbi');ind.style.width=bt.offsetWidth+'px';ind.style.transform=`translateX(${bt.offsetLeft}px)`;
    const pg=$('#pg');pg.style.transition='none';pg.style.width='0';pg.offsetWidth;pg.style.transition='width 9s linear';pg.style.width='100%';clearTimeout(tm);tm=setTimeout(function n(){if(hv){tm=setTimeout(n,1000);return}go((si+1)%ST.length)},9000);
    const draw=()=>{st.innerHTML=`<div class="ts-ql"><small>CASE 0${i+1} · ${s[0]}</small>${QI}<p class="ts-bq">${s[2]}</p><div class="ts-cp">${s[9].map(x=>`<span>${x}</span>`).join('')}</div><div class="ts-by"><div class="ts-av">${s[3].split(' ').map(x=>x[0]).join('').slice(0,2)}</div><div><b>${s[3]}</b><span>${s[4]}</span></div></div></div><div class="ts-rt"><div class="ts-mx">${s[6].map(m=>`<div><b data-m>0</b><span>${m[3]}</span></div>`).join('')}</div><div class="ts-sp"><small>${s[8]}</small><svg viewBox="0 0 400 110"><defs><linearGradient id="tg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DFFF00" stop-opacity=".3"/><stop offset="1" stop-color="#DFFF00" stop-opacity="0"/></linearGradient></defs><path class="ar" d="${s[7]}L400 110L0 110Z"/><path class="ln" pathLength="1" d="${s[7]}"/><circle class="dt" cx="400" cy="${s[7].split(' ').pop()}" r="5"/></svg><div class="ts-ax"><span>M1</span><span>M2</span><span>M3</span><span>M4</span><span>M5</span><span>M6</span></div></div></div>`;
     st.querySelectorAll('[data-m]').forEach((e,k)=>{const m=s[6][k];cnt(e,m[0],m[4],m[1],m[2])});requestAnimationFrame(()=>requestAnimationFrame(()=>st.querySelector('.ts-sp').classList.add('go')))};
    if(first){draw()}else{st.classList.add('o');setTimeout(()=>{draw();st.classList.remove('o')},300)}}
    $('#tb').onclick=e=>{const b=e.target.closest('button');if(b)go(+b.dataset.i)};$('#st').addEventListener('pointerenter',()=>hv=true);$('#st').addEventListener('pointerleave',()=>hv=false);
    go(0,true);addEventListener('resize',()=>go(si,true));
    /* WALL (placeholders) */
    const Q=[["Working with the crew felt like adding a whole creative department overnight.","Founder","Skincare brand","+3x reach"],["They understood our audience faster than agencies ten times their size.","Marketing lead","Fintech startup","+180% engagement"],["Our new site is faster, cleaner and finally converts.","Owner","Restaurant group","2x enquiries"],["Every edit came back sharper than the brief, and always on time.","Creator","Gaming channel, 420K subs","+64% watch time"],["They gave our funnel structure we never had, and the numbers followed.","CEO","E-commerce brand","+40% conversions"],["The rebrand made us look like the company we always wanted to be.","Co-founder","Fashion label","Rebranded in 6 weeks"],["Reliable, honest and genuinely obsessed with what holds attention.","Channel owner","Education channel","12 uploads a month"],["Clear communication, no drama, and results we can actually see.","Director","Real estate firm","98% retention"],["Reels that people actually finish. That alone changed our month.","Brand manager","Consumer electronics","+2.1M views"],["They treated our channel like it was their own.","Creator","Lifestyle vlogs","3.4x growth"]];
    const STAR='<svg viewBox="0 0 24 24"><path d="M12 2l3 7 7 .6-5.3 4.7 1.6 7.2L12 17.8 5.7 21.5l1.6-7.2L2 9.6 9 9z"/></svg>',S5=STAR.repeat(5);$('#s5a').innerHTML=S5;
    const qc=q=>`<figure class="ts-q"><div class="ts-s5">${S5}</div><blockquote>${q[0]}</blockquote><span class="ts-rs">${q[3]}</span><figcaption class="ts-by"><div class="ts-av">${q[2].split(' ').map(x=>x[0]).join('').slice(0,2)}</div><div><b>${q[1]}</b><span>${q[2]}</span></div></figcaption></figure>`;
    const row=(a,r)=>`<div class="ts-row${r?' r':''}"><div class="ts-tr">${a.map(qc).join('')}${a.map(qc).join('')}</div></div>`;
    $('#rows').innerHTML=row(Q.slice(0,5))+row(Q.slice(5),1);
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
