// GENERATED from the original shortswift-contact-v4.html and then hand-maintained.
// Interactive "scene" code for this page. `rt` (see src/site/runtime.js) tracks every timer,
// observer and listener started here and tears them down when you leave the page.
export default function run(rt) {
  const { $, cam, sci, setTimeout, setInterval, requestAnimationFrame, addEventListener, removeEventListener, IntersectionObserver, document } = rt;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const type = async (el, txt, sp = 28) => { el.classList.add('t'); el.textContent = ''; for (const ch of txt) { el.textContent += ch; await sleep(sp); } el.classList.remove('t'); };
  (function page() {


    document.querySelectorAll('[data-cam]').forEach(e=>e.innerHTML=cam);document.querySelectorAll('[data-sci]').forEach(e=>e.innerHTML=sci);
    /* DATA (placeholders: replace copy, links, stats, quotes) */




    /* FOOTER */
    /* MOTION */
    document.querySelectorAll('h2').forEach(h=>{h.setAttribute('aria-label',h.textContent);let n=0;h.innerHTML=h.textContent.split(' ').map(w=>`<span class="hw" aria-hidden="true"><span style="--i:${n++}">${w}</span></span>`).join('')});
    const leads=[...document.querySelectorAll('.lead')].map(l=>{const t=l.textContent;l.setAttribute('aria-label',t);l.innerHTML=t.split(' ').map(w=>`<span aria-hidden="true" style="opacity:.25;transition:opacity .3s">${w}</span>`).join(' ');return [l,[...l.children]]});
    function lead(){leads.forEach(([l,w])=>{const r=l.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;const p=Math.max(0,Math.min(1,(innerHeight*.92-r.top)/(innerHeight*.4)));w.forEach((x,k)=>{x.style.opacity=(.25+.75*Math.max(0,Math.min(1,p*w.length-k))).toFixed(2)})})}
    if(matchMedia('(hover:hover)').matches)document.querySelectorAll('.btn.p').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});

    /* CONTACT PAGE (placeholders: email, phone, hours. Wire the two submit handlers to your backend / Cal.com / Formspree) */
    $('#h1').innerHTML=["Let's","talk","about","your","next","big","move."].map((x,i)=>`<span class="w" aria-hidden="true"><span style="--i:${i}"${i>3?' class="lime"':''}>${x}</span></span>`).join('');
    {const tf=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Dhaka',hour:'numeric',minute:'2-digit',hour12:true}),pf=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Dhaka',hour:'numeric',hour12:false,weekday:'short'});
    const u=()=>{const n=new Date();$('#dc').innerHTML=tf.format(n)+'<small>Dhaka</small>';const P=Object.fromEntries(pf.formatToParts(n).map(p=>[p.type,p.value])),h=+P.hour%24,open=!['Fri','Sat'].includes(P.weekday)&&h>=10&&h<18;$('#on').classList.toggle('off',!open);$('#ons').textContent=open?'Online now':'Offline, back at 10:00 (Sun to Thu)'};u();setInterval(u,20000)}
    const chips=(el,items,multi)=>{el.innerHTML=items.map(x=>`<button type="button" aria-pressed="false">${x}</button>`).join('');[...el.children].forEach(b=>b.onclick=()=>{const on=b.getAttribute('aria-pressed')!=='true';if(!multi)[...el.children].forEach(x=>x.setAttribute('aria-pressed','false'));b.setAttribute('aria-pressed',on)})};
    /* CALENDLY: official inline widget, loaded when the Book tab first opens */
    const CAL='https://calendly.com/shortswiftstudios23/30min';let calOn=0;function loadCal(){return;if(calOn)return;calOn=1;const sc=document.createElement('script');sc.src='https://assets.calendly.com/assets/external/widget.js';sc.async=1;sc.onload=()=>{try{Calendly.initInlineWidget({url:CAL+'?hide_gdpr_banner=1&background_color=0d0d0d&text_color=ffffff&primary_color=dfff00&embed_domain='+(location.hostname||'localhost')+'&embed_type=Inline',parentElement:$('#calw'),prefill:window.CALPRE||{}})}catch(e){}};document.head.appendChild(sc)}
    /* tabs */
    const pill=$('#pill'),tabs=[...document.querySelectorAll('.tabs [role=tab]')];
    function show(k,f){if(k==='book')loadCal();tabs.forEach(t=>{const on=t.dataset.k===k;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1;$('#'+t.getAttribute('aria-controls')).hidden=!on;if(on){pill.style.width=t.offsetWidth+'px';pill.style.transform=`translateX(${t.offsetLeft}px)`;if(f)t.focus()}})}
    tabs.forEach(t=>{t.onclick=()=>show(t.dataset.k);t.onkeydown=e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();show(t.dataset.k==='msg'?'book':'msg',1)}}});
    document.querySelectorAll('[data-go]').forEach(a=>a.addEventListener('click',()=>show(a.dataset.go)));
    addEventListener('resize',()=>show(tabs.find(t=>t.getAttribute('aria-selected')==='true').dataset.k));document.fonts.ready.then(()=>show(location.hash==='#book'?'book':'msg'));show(location.hash==='#book'?'book':'msg');
    /* message form: 5 guided steps with a live brief */
    {const SV=[['Brand Development','Identity, logo, guidelines','<circle cx="9" cy="9" r="5"/><circle cx="15" cy="15" r="5"/>'],['Website Development','Fast, modern, converts','<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 10h18"/>'],['Social Media Growth','Content, ads, community','<path d="M4 5h16v11H9l-5 4z"/>'],['Video Editing','Reels, ads, brand films','<rect x="3" y="6" width="14" height="12" rx="3"/><path d="M17 11l4-2v6l-4-2"/>'],['Something else','Tell us in the last step','<path d="M12 5v14M5 12h14"/>']];
    const S={sv:new Set(),gl:'',sg:'',bd:'',tm:'',hr:'',rp:'Email'},steps=[...document.querySelectorAll('.sp')],LB=['Services','Goal','Budget and timing','Details','You'],N=steps.length;let st=0,mx=0;
    $('#sv').innerHTML=SV.map(x=>`<button type="button" class="svc" aria-pressed="false" data-v="${x[0]}"><span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true">${x[2]}</svg></span><b>${x[0]}</b><small>${x[1]}</small></button>`).join('');
    const set=(id,v,ph)=>{const e=$(id);e.textContent=v||ph;e.classList.toggle('set',!!v)},okE=v=>/^\S+@\S+\.\S+$/.test(v);
    function br(){$('#bs').innerHTML=S.sv.size?[...S.sv].map(v=>`<span class="tg3">${v}</span>`).join(''):'<b>Not chosen yet</b>';set('#bgl',[S.gl,S.sg].filter(Boolean).join(' · '),'Not chosen yet');set('#bb',S.bd,'Not chosen yet');set('#bt',S.tm,'Not chosen yet');set('#bl',$('#fw').value.trim(),'Optional');const n=$('#fn').value.trim(),m=$('#fe').value.trim();set('#bw',n?n+(m?' · '+m:''):'',"You'll add this last");const d=[S.sv.size,S.gl&&S.sg,S.bd&&S.tm,$('#fw').value.trim()||$('#fr').value.trim()||S.hr,n.length>1&&okE(m),$('#fm').value.trim().length>9].filter(Boolean).length,p=Math.round(d/6*100);$('#bp').textContent=p+'%';$('#bpb').style.width=p+'%'}
    [...$('#sv').children].forEach(b=>b.onclick=()=>{const v=b.dataset.v,on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',on);on?S.sv.add(v):S.sv.delete(v);br()});
    const tl=(id,a,k)=>{const el=$(id);el.innerHTML=a.map(x=>`<button type="button" class="tile" role="radio" aria-checked="${S[k]===x}">${x}</button>`).join('');[...el.children].forEach(b=>b.onclick=()=>{[...el.children].forEach(y=>y.setAttribute('aria-checked',y===b));S[k]=b.textContent;br()})};
    tl('#gl',['Get more customers','Grow followers and reach','Launch a new brand','Refresh my brand','Better video content','Not sure yet'],'gl');tl('#sg',['Just starting','Growing','Established'],'sg');
    tl('#bd',['Under $500','$500 to $2k','$2k to $5k','$5k+','Not sure yet'],'bd');tl('#tm',['As soon as possible','Within a month','In 2 to 3 months','Just exploring'],'tm');tl('#hr',['Instagram','Facebook','Referral','Google','Other'],'hr');tl('#rp',['Email','WhatsApp','Phone call'],'rp');
    ['fn','fe','fm','fc','fw','fr','fp'].forEach(i=>$('#'+i).addEventListener('input',e=>{e.target.parentNode.classList.remove('bad');br()}));
    $('#fm').addEventListener('input',()=>$('#cnt').textContent=$('#fm').value.length+' / 600');br();
    $('#dots').innerHTML=LB.map((l,i)=>`<button type="button" class="dt" aria-label="Step ${i+1}: ${l}"></button>`).join('');const dots=[...$('#dots').children];dots.forEach((d,i)=>d.onclick=()=>{if(i<=mx)go(i)});
    function go(n){st=n;mx=Math.max(mx,n);steps.forEach((s,i)=>s.hidden=i!==n);$('#sn').textContent=n+1;$('#sl').textContent=LB[n];dots.forEach((d,i)=>{d.className='dt'+(i===n?' cur':i<=mx?' rch':'');d.setAttribute('aria-current',i===n?'step':'false')});$('#bkb').hidden=!n;$('#nx').innerHTML=n===N-1?'Send message <b>→</b>':'Continue <b>→</b>';$('#fer').textContent='';{const r=$('#f').getBoundingClientRect();if(r.top<90)scrollTo({top:scrollY+r.top-130,behavior:'smooth'})}if(n===N-1)setTimeout(()=>$('#fn').focus({preventScroll:true}),350)}
    go(0);$('#bkb').onclick=()=>go(st-1);$('#f').onsubmit=e=>e.preventDefault();$('#nx').onclick=()=>{try{next()}catch(e){console.error(e);$('#fer').textContent='! Something went wrong. Please email us directly.'}};$('#f').addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.tagName!=='TEXTAREA'){e.preventDefault();$('#nx').click()}});
    const MAIL='hello@yourdomain.com',ENDPOINT='';/* PLACEHOLDER: set MAIL to your inbox. Set ENDPOINT to a Formspree / FormSubmit / API URL to receive briefs silently instead of opening the email app */
    function sendBrief(){const V=i=>$('#'+i).value.trim(),d={services:[...S.sv].join(', '),goal:S.gl,stage:S.sg,budget:S.bd,start:S.tm,link:V('fw'),admired:V('fr'),heard:S.hr,name:V('fn'),email:V('fe'),company:V('fc'),whatsapp:V('fp'),reply:S.rp,message:V('fm')};window.CALPRE={name:d.name,email:d.email};
    if(ENDPOINT){fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)}).catch(()=>{})}
    else{const b=Object.entries(d).map(([k,v])=>k[0].toUpperCase()+k.slice(1)+': '+(v||'-')).join('\n');location.href='mailto:'+MAIL+'?subject='+encodeURIComponent('New project brief from '+d.name)+'&body='+encodeURIComponent(b)}}
    const next=()=>{const er=$('#fer');er.textContent='';
    if(st===0){if(!S.sv.size){er.textContent='! Pick at least one service to continue.';return}return go(1)}
    if(st===1){if(!S.gl||!S.sg){er.textContent='! Choose a goal and where the brand is today.';return}return go(2)}
    if(st===2){if(!S.bd||!S.tm){er.textContent='! Choose a budget and a start time. "Not sure yet" is fine.';return}return go(3)}
    if(st===3)return go(4);
    let bad=0;[['fn',v=>v.trim().length>1,'Please enter your name'],['fe',okE,'Enter a valid email address'],['fm',v=>v.trim().length>9,'Tell us a little more (10+ characters)']].forEach(([id,f,m])=>{const el=$('#'+id),ok=f(el.value.trim());el.parentNode.classList.toggle('bad',!ok);el.parentNode.dataset.e=m;el.setAttribute('aria-invalid',!ok);bad+=!ok});if(bad)return;
    sendBrief();$('#f').hidden=true;$('.stpr2').style.display='none';$('#dots').style.display='none';$('#fok').hidden=false;$('#bh').textContent='Brief sent';$('#fokt').textContent=`Thanks ${$('#fn').value.trim().split(' ')[0]}, we will reply to ${$('#fe').value.trim()} within 24 hours.`}}
    document.querySelectorAll('.cc').forEach(t=>t.addEventListener('pointermove',e=>{const r=t.getBoundingClientRect();t.style.setProperty('--mx',e.clientX-r.left+'px');t.style.setProperty('--my',e.clientY-r.top+'px')}));
    /* SCROLL */
    const hd=$('#hd'),bar=$('#bar');function onS(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;lead()}
    let tk=0;addEventListener('scroll',()=>{if(!tk)tk=requestAnimationFrame(()=>{tk=0;onS()})},{passive:true});addEventListener('resize',onS);onS();
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target)}),{threshold:.12});document.querySelectorAll('.rv,.big').forEach(e=>io.observe(e));

    /* BOOK A MEETING -> Calendly (change CAL_URL) + floating "Book a free call" pill */
    {const CAL_URL='https://calendly.com/shortswiftstudios23/30min';
    document.querySelectorAll('a').forEach(a=>{if(/^Book a (Meeting|free call)/i.test(a.textContent.trim())&&!a.dataset.go){a.href=CAL_URL;a.target='_blank';a.rel='noopener'}});
    if(!document.getElementById('p-book')){const st=document.createElement('style');st.textContent='#fbk0{position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:60;display:flex;align-items:center;gap:10px;padding:13px 20px;border-radius:99px;background:rgba(0,0,0,.72);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1.5px solid #DFFF00;color:#fff;font:600 14px Inter,system-ui,sans-serif;text-decoration:none;box-shadow:0 0 30px rgba(223,255,0,.22);transform:translateY(160%);transition:transform .6s cubic-bezier(.22,1,.36,1),background .3s,color .3s}#fbk0.show{transform:none}#fbk0:hover{background:#DFFF00;color:#000}#fbk0 i{width:8px;height:8px;border-radius:50%;background:#DFFF00;animation:pl0 1.6s infinite}#fbk0:hover i{background:#000}@keyframes pl0{50%{box-shadow:0 0 0 7px rgba(223,255,0,0)}0%{box-shadow:0 0 0 0 rgba(223,255,0,.6)}}#fbk0:focus-visible{outline:3px solid #DFFF00;outline-offset:3px}@media(prefers-reduced-motion:reduce){#fbk0 i{animation:none}}';document.head.appendChild(st);
    const f=document.createElement('a');f.id='fbk0';f.href=CAL_URL;f.target='_blank';f.rel='noopener';f.setAttribute('aria-label','Book a free 30 minute call');f.innerHTML='<i></i>Book a free call';document.body.appendChild(f);
    const t=()=>f.classList.toggle('show',scrollY>700);addEventListener('scroll',t,{passive:true});t()}}

    /* LIVE CALENDAR: follows the visitor's real date; every date links to Calendly */
    {const CU='https://calendly.com/shortswiftstudios23/30min',g=$('#c3g'),P=n=>String(n).padStart(2,'0'),key=d=>d.getFullYear()+'-'+P(d.getMonth()+1)+'-'+P(d.getDate()),MN=['January','February','March','April','May','June','July','August','September','October','November','December'],DN=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let now=new Date(),vy=now.getFullYear(),vm=now.getMonth(),tk0=key(now);
    const link=(d,x)=>{let u=CU+'?month='+d.slice(0,7)+(x?'&date='+d:'');const q=window.CALPRE;if(q&&q.name)u+='&name='+encodeURIComponent(q.name)+'&email='+encodeURIComponent(q.email||'');return u};
    function draw(dir){now=new Date();const t=key(now),first=new Date(vy,vm,1).getDay(),n=new Date(vy,vm+1,0).getDate(),cur=vy===now.getFullYear()&&vm===now.getMonth();
    $('#c3m').innerHTML=MN[vm]+' <b>'+vy+'</b>';$('#c3p').disabled=cur;$('#c3x').disabled=(vy*12+vm)-(now.getFullYear()*12+now.getMonth())>=3;
    let h='<i aria-hidden="true"></i>'.repeat(first);for(let d=1;d<=n;d++){const k=vy+'-'+P(vm+1)+'-'+P(d),dw=new Date(vy,vm,d).getDay(),c=(k<t?'ps ':'')+(k===t?'td ':'')+(dw>4?'wke':''),lab=DN[dw]+', '+d+' '+MN[vm];h+=`<a href="${link(k,1)}" target="_blank" rel="noopener" class="${c}" style="--i:${first+d}" data-l="${lab}" data-k="${k}" aria-label="${lab}${k===t?' (today)':''}"${k<t?' tabindex="-1" aria-disabled="true"':''}>${d}${k===t?'<small>Today</small>':''}</a>`}
    g.innerHTML=h;if(dir){g.style.setProperty('--dir',dir);g.classList.remove('fl');void g.offsetWidth;g.classList.add('fl')}
    const td=g.querySelector('.td'),f=td||g.querySelector('a:not(.ps)');if(f)hov(f)}
    function hov(a){$('#c3i').innerHTML='<b>'+a.dataset.l+'</b> · pick a time on Calendly';$('#c3c').href=link(a.dataset.k,1)}
    g.addEventListener('pointerover',e=>{const a=e.target.closest('a');if(a&&!a.classList.contains('ps'))hov(a)});g.addEventListener('focusin',e=>{const a=e.target.closest('a');if(a)hov(a)});
    $('#c3p').onclick=()=>{vm--;if(vm<0){vm=11;vy--}draw(-1)};$('#c3x').onclick=()=>{vm++;if(vm>11){vm=0;vy++}draw(1)};
    function clock(){const d=new Date(),o={hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false};$('#c3t').textContent=d.toLocaleTimeString('en-GB',o);$('#c3z').textContent=d.toLocaleTimeString('en-GB',{...o,timeZone:'Asia/Dhaka'});if(key(d)!==tk0){tk0=key(d);vy=d.getFullYear();vm=d.getMonth();draw()}}
    draw();clock();setInterval(clock,1000)}

  }());
}
