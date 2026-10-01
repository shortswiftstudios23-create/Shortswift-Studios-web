// GENERATED from the original shortswift-book-a-meeting-v1.html and then hand-maintained.
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

    /* BOOKING PAGE. Calendly link below; every "Book a Meeting" button here scrolls to the brief. */
    const CU='https://calendly.com/shortswiftstudios23/30min';
    document.querySelectorAll('a').forEach(a=>{if(/^Book a Meeting/i.test(a.textContent.trim())){a.href='#brief';a.dataset.go='1'}});
    $('#h1').innerHTML=["Thirty","minutes.","One","clear","next","step."].map((x,i)=>`<span class="w" aria-hidden="true"><span style="--i:${i}"${i>1?' class="lime"':''}>${x}</span></span>`).join('');
    /* LIVE CLOCKS: Dhaka vs the visitor */
    {const fm=tz=>new Intl.DateTimeFormat('en-US',{timeZone:tz,hour:'numeric',minute:'2-digit'}),D=fm('Asia/Dhaka'),Lc=fm(undefined);
    const u=()=>{const n=new Date();$('#ckd').textContent=D.format(n);$('#ckl').textContent=Lc.format(n);const d=-n.getTimezoneOffset()-360,a=Math.abs(d),t=Math.floor(a/60)+'h'+(a%60?' '+a%60+'m':'');$('#ckz').textContent=(Intl.DateTimeFormat().resolvedOptions().timeZone||'Your time').split('/').pop().replace(/_/g,' ');$('#ckn').textContent=d===0?"You're on Dhaka time. Easy.":`Dhaka is ${t} ${d<0?'ahead of':'behind'} you.`};u();setInterval(u,15000)}
    /* BRIEF BUILDER (placeholders: edit topics and stages) */
    const TP=["Brand development","Website development","Social media growth","Video editing","YouTube channel takeover","Something else"],SG=[["Just exploring","Early ideas, no rush"],["I have a project in mind","Scope is taking shape"],["Looking for a long-term partner","Ongoing collaboration"],["I need to start soon","Time-sensitive"]];
    const S={t:[],st:'',note:'',name:'',em:'',lk:''};let step=1;
    $('#chs').innerHTML=TP.map(t=>`<button type="button" aria-pressed="false">${t}</button>`).join('');
    $('#rds').innerHTML=SG.map(s=>`<button type="button" role="radio" aria-checked="false">${s[0]}<span>${s[1]}</span></button>`).join('');
    const set=(id,v)=>{const e=$(id),t=v||'--';if(e.textContent!==t){e.textContent=t;e.classList.remove('f');void e.offsetWidth;e.classList.add('f')}},
    tick=()=>{set('#tn',S.name.trim());set('#tt',S.t.join(', '));set('#ts',S.st);set('#tl',S.lk.trim().replace(/^https?:\/\/(www\.)?/,'').slice(0,34))},
    brief=()=>`Topics: ${S.t.join(', ')||'n/a'}. Stage: ${S.st||'n/a'}.${S.lk.trim()?' Link: '+S.lk.trim()+'.':''}${S.note.trim()?' Notes: '+S.note.trim():''}`;
    $('#chs').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',on);S.t=[...$('#chs').children].filter(x=>x.getAttribute('aria-pressed')==='true').map(x=>x.firstChild.textContent);$('#e1').textContent='';tick()});
    $('#rds').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;[...$('#rds').children].forEach(x=>x.setAttribute('aria-checked',x===b));S.st=b.firstChild.textContent;$('#e2').textContent='';tick()});
    [['#note','note'],['#nm','name'],['#em','em'],['#lk','lk']].forEach(([i,k])=>$(i).addEventListener('input',e=>{S[k]=e.target.value;$('#e3').textContent='';tick()}));
    const ok=n=>{if(n<=step)return true;if(step===1&&!S.t.length){$('#e1').textContent='Pick at least one topic to continue.';return false}
    if(step===2&&!S.st){$('#e2').textContent='Choose where you are right now.';return false}
    if(step===3&&n>3&&(!S.name.trim()||!/^\S+@\S+\.\S+$/.test(S.em.trim()))){$('#e3').textContent=!S.name.trim()?'Please add your name.':'Please enter a valid email.';return false}return true};
    function go(n,sc=true){if(!ok(n))return;step=n;document.querySelectorAll('.bpn').forEach(p=>p.classList.toggle('on',+p.dataset.s===n));[...$('#stp').children].forEach((li,i)=>{li.classList.toggle('on',i+1===Math.min(n,4));li.classList.toggle('dn',i+1<n)});if(n===4)cal();if(sc)$('#brief').scrollIntoView({block:'start'})}
    document.addEventListener('click',e=>{const b=e.target.closest('[data-n]');if(b)go(+b.dataset.n);const g=e.target.closest('[data-go]');if(g){e.preventDefault();if(+g.dataset.go===4){go(4)}else $('#brief').scrollIntoView({block:'start'})}});
    /* CALENDAR: our own animated month view. Every date opens Calendly (new tab) with the brief prefilled. */
    const link=(d)=>{const q=new URLSearchParams();if(d){q.set('month',d.slice(0,7));q.set('date',d)}if(S.name.trim())q.set('name',S.name.trim());if(S.em.trim())q.set('email',S.em.trim());q.set('a1',brief());return CU+'?'+q};
    const now0=new Date(),t0=new Date(now0.getFullYear(),now0.getMonth(),now0.getDate()),cm=new Date(now0.getFullYear(),now0.getMonth(),1);let vm=new Date(cm),first=1;const p2=n=>String(n).padStart(2,'0');
    function cal(){const y=vm.getFullYear(),m=vm.getMonth(),lead0=new Date(y,m,1).getDay(),n=new Date(y,m+1,0).getDate(),mo=$('#km');mo.textContent=vm.toLocaleString('en-US',{month:'long',year:'numeric'});mo.classList.remove('f');void mo.offsetWidth;mo.classList.add('f');
    let h='';for(let i=0;i<lead0;i++)h+='<span></span>';
    for(let d=1;d<=n;d++){const dt=new Date(y,m,d),id=`${y}-${p2(m+1)}-${p2(d)}`,i=lead0+d-1,past=dt<t0,td=+dt===+t0;
    h+=past?`<span class="ps" style="--i:${i}" aria-hidden="true">${d}</span>`:`<a href="${link(id)}" target="_blank" rel="noopener" class="${td?'td':''}" style="--i:${i}" aria-label="${dt.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'})}${td?', today':''}">${d}</a>`}
    const g=$('#kg');g.classList.remove('ani');g.innerHTML=h;void g.offsetWidth;g.classList.add('ani');
    $('#kp').disabled=+vm<=+cm;$('#kn').disabled=vm.getFullYear()*12+vm.getMonth()>=cm.getFullYear()*12+cm.getMonth()+2;$('#kall').href=link();}
    $('#kp').onclick=()=>{vm=new Date(vm.getFullYear(),vm.getMonth()-1,1);cal()};$('#kn').onclick=()=>{vm=new Date(vm.getFullYear(),vm.getMonth()+1,1);cal()};
    $('#kg').addEventListener('click',e=>{const a=e.target.closest('a');if(!a)return;a.classList.add('go');$('#kmsg').innerHTML='Calendly opened in a new tab. Finish your booking there and your invite will arrive by email. <button class="bk" id="cpy2" style="display:inline" onclick="go(3)">Edit my brief</button>';setTimeout(()=>a.classList.remove('go'),900)});
    $('#cpy').onclick=async e=>{const b=e.target,t=brief();try{await navigator.clipboard.writeText(t);b.textContent='copied'}catch(x){b.textContent='select and copy: '+t}};
    addEventListener('message',e=>{if(e.origin==='https://calendly.com'&&e.data&&e.data.event==='calendly.event_scheduled')celebrate()});

    /* THANK YOU: on return from Calendly we ask once, then celebrate. Calendly can also send people straight back with #thanks (see notes). */
    const redM=matchMedia('(prefers-reduced-motion:reduce)').matches;let away=0,hid=0;
    function burst(ox,oy){if(redM)return;const cv=$('#cv'),x=cv.getContext('2d'),d=devicePixelRatio||1,W=innerWidth,H=innerHeight;cv.width=W*d;cv.height=H*d;x.setTransform(d,0,0,d,0,0);const cols=['#DFFF00','#EBFF4D','#fff','#9A9A9A'];
    const P=Array.from({length:150},()=>({x:ox*W,y:oy*H,vx:(Math.random()-.5)*17,vy:-Math.random()*15-4,w:6+Math.random()*7,h:4+Math.random()*6,r:Math.random()*6,vr:(Math.random()-.5)*.4,c:cols[Math.random()*4|0],k:Math.random()<.4}));let t=0;
    (function f(){x.clearRect(0,0,W,H);P.forEach(p=>{p.vy+=.32;p.vx*=.992;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle=p.c;x.globalAlpha=Math.max(0,1-t/200);x.beginPath();if(x.roundRect)x.roundRect(-p.w/2,-p.h/2,p.w,p.h,p.k?p.h/2:1);else x.rect(-p.w/2,-p.h/2,p.w,p.h);x.fill();x.restore()});if(++t<210)requestAnimationFrame(f);else x.clearRect(0,0,W,H)})()}
    const lock=on=>document.body.style.overflow=on?'hidden':'';
    function celebrate(){$('#ask').hidden=true;away=0;const n=S.name.trim().split(/\s+/)[0];$('#cn').textContent=n?', '+n:'';$('#tkt').classList.add('ok');try{sessionStorage.removeItem('ssCal')}catch(e){}
    step=4;go(5,false);const o=$('#cel');o.hidden=false;lock(1);$('#cx').focus({preventScroll:true});burst(.5,.42);setTimeout(()=>burst(.15,.7),380);setTimeout(()=>burst(.85,.7),560)}
    function ask(){if($('#cel').hidden===false)return;$('#ask').hidden=false;lock(1);$('#ay').focus({preventScroll:true})}
    const arm=()=>{away=1;hid=0;try{sessionStorage.setItem('ssCal','1')}catch(e){}};
    document.addEventListener('click',e=>{if(e.target.closest('#kg a,#kall'))arm()});
    const gone=()=>{if(away&&!hid)hid=Date.now()},back=()=>{if(away&&hid&&Date.now()-hid>6000){hid=0;away=0;ask()}};
    document.addEventListener('visibilitychange',()=>document.hidden?gone():back());addEventListener('blur',gone);addEventListener('focus',back);
    $('#ay').onclick=celebrate;$('#an').onclick=()=>{$('#ask').hidden=true;lock(0)};$('#cx').onclick=()=>{$('#cel').hidden=true;lock(0);$('#brief').scrollIntoView({block:'start'})};
    document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!$('#ask').hidden)$('#an').click();else if(!$('#cel').hidden)$('#cx').click()}});
    if(/[#?&](thanks|booked)\b/.test(location.hash+location.search))setTimeout(celebrate,700);
    /* AGENDA DIAL: a working 30-minute clock. Plays on its own; hover a segment to jump there, drag the ring to scrub, or use Play/Pause (placeholders: edit agenda) */
    {const A=[[0,5,"Intro","Intro and your story","Who you are, what you're building and what made you reach out."],[5,15,"Goals","Goals and where attention leaks","We dig into what you want and what's holding it back: hooks, pacing, brand feel or systems."],[15,25,"Plan","Ideas and a rough plan","Concrete ideas for your channel or brand, and what a plan could look like."],[25,30,"Next steps","Clear next steps","What to do next, with or without us. You leave knowing exactly what comes after."]],
    sv=$('#dl'),C=160,R=118,P=(m,r=R)=>{const a=m/30*2*Math.PI-Math.PI/2;return[C+r*Math.cos(a),C+r*Math.sin(a)]},
    ar=(a,b)=>{const p=P(a+.45),q=P(b-.45);return`M${p.map(v=>v.toFixed(1))} A${R} ${R} 0 ${(b-a-.9)/30>.5?1:0} 1 ${q.map(v=>v.toFixed(1))}`};
    let h=`<circle cx="${C}" cy="${C}" r="${R-26}" fill="none" stroke="rgba(255,255,255,.06)"/>`;A.forEach((s,i)=>h+=`<path class="ar" data-i="${i}" pathLength="1" d="${ar(s[0],s[1])}" tabindex="0" role="button" aria-label="${s[3]}, minutes ${s[0]} to ${s[1]}"/>`);
    [0,5,10,15,20,25].forEach(m=>{const[x,y]=P(m,R+28);h+=`<text x="${x.toFixed(1)}" y="${(y+4).toFixed(1)}">${m}</text>`});
    h+=`<line class="ph" id="ph" x1="${C}" y1="${C-R+16}" x2="${C}" y2="${C-R-16}"/><circle class="pd" id="pd" cx="${C}" cy="${C-R}" r="6"/><text class="ct" id="dt" x="${C}" y="${C+8}">00:00</text><text class="cs" id="ds" x="${C}" y="${C+36}">Intro</text><text class="cs" x="${C}" y="${C-28}" style="font-size:11px;letter-spacing:.14em">CALL CLOCK</text>`;sv.innerHTML=h;
    $('#dlr').innerHTML=A.map((s,i)=>`<button type="button" data-i="${i}"><b>${s[0]}–${s[1]} min</b><strong>${s[3]}</strong><span>${s[4]}</span></button>`).join('');
    const pa=[...sv.querySelectorAll('.ar')],bt=[...$('#dlr').children],pp=$('#dpp'),red=matchMedia('(prefers-reduced-motion:reduce)').matches;
    let m=0,play=!red,hold=0,drag=0,vis=0,cur=-1,du=0,last=performance.now();
    const pad=n=>String(n).padStart(2,'0'),seg=x=>{const k=A.findIndex(s=>x>=s[0]&&x<s[1]);return k<0?0:k};
    function render(){const i=seg(m),a=P(m,R-16),b=P(m,R+16),d=P(m,R),t=Math.floor(m*60);$('#ph').setAttribute('x1',a[0]);$('#ph').setAttribute('y1',a[1]);$('#ph').setAttribute('x2',b[0]);$('#ph').setAttribute('y2',b[1]);$('#pd').setAttribute('cx',d[0]);$('#pd').setAttribute('cy',d[1]);$('#dt').textContent=pad(Math.floor(t/60))+':'+pad(t%60);
    if(i!==cur){cur=i;pa.forEach((p,k)=>p.classList.toggle('on',k===i));bt.forEach((x,k)=>x.classList.toggle('on',k===i));$('#ds').textContent=A[i][2]}}
    const setP=()=>{pp.textContent=play?'Pause':'Play';pp.setAttribute('aria-pressed',play)};
    const at=x=>{const r=sv.getBoundingClientRect(),px=(x.clientX-r.left)/r.width*368-24-C,py=(x.clientY-r.top)/r.height*368-24-C;return{d:Math.hypot(px,py),m:((Math.atan2(py,px)+Math.PI/2)/(2*Math.PI)+1)%1*30}};
    const jump=i=>{m=(A[i][0]+A[i][1])/2;render()};
    [...pa,...bt].forEach(e=>{const i=+e.dataset.i;e.addEventListener('pointerenter',()=>{if(drag||performance.now()-du<400)return;hold=1;jump(i)});e.addEventListener('focus',()=>{hold=1;jump(i)});e.addEventListener('blur',()=>hold=0);e.addEventListener('pointerleave',()=>hold=0);e.addEventListener('click',()=>{play=false;setP();jump(i)})});
    sv.addEventListener('pointerdown',e=>{const p=at(e);if(Math.abs(p.d-R*(sv.getBoundingClientRect().width/368))>0&&(p.d<R-34||p.d>R+34))return;drag=1;hold=1;play=false;setP();sv.setPointerCapture(e.pointerId);m=p.m;render()});
    sv.addEventListener('pointermove',e=>{if(drag){m=at(e).m;render()}});const up=()=>{if(drag)du=performance.now();drag=0;hold=0};sv.addEventListener('pointerup',up);sv.addEventListener('pointercancel',up);
    pp.onclick=()=>{play=!play;if(play&&m>=29.95)m=0;setP()};$('#drs').onclick=()=>{m=0;play=true;setP();render()};
    new IntersectionObserver(es=>es.forEach(x=>{vis=x.isIntersecting;if(vis)sv.classList.add('in')})).observe(sv);setP();render();
    (function f(now){const dt=Math.min(.1,(now-last)/1000);last=now;if(vis&&play&&!hold&&!drag){m=(m+dt*1)%30;render()}requestAnimationFrame(f)})(last)}
    /* FAQ (placeholders: edit answers) */
    $('#fq2').innerHTML=[["Is the call really free?","Yes. The 30-minute intro call is free, with no obligation to work with us afterwards."],["What should I prepare?","Nothing is required. If you have a channel, site or brand, have the link handy and think about what you'd like to be different in six months."],["Can I reschedule or cancel?","Yes. Your confirmation email from Calendly has links to change the time or cancel, no questions asked."],["What if none of the times work?","Send us a message through the contact page and we'll find a slot that suits your timezone."],["What happens after the call?","If it's a fit, we'll send a short proposal with scope, timeline and pricing. If not, you still leave with clear ideas you can use."]].map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('');
    $('#fq2').addEventListener('toggle',e=>{if(e.target.open)$('#fq2').querySelectorAll('details').forEach(d=>{if(d!==e.target)d.open=false})},true);
    document.querySelectorAll('[data-tilt]').length;
    /* FOOTER */
    /* MOTION */
    document.querySelectorAll('h2').forEach(h=>{h.setAttribute('aria-label',h.textContent);let n=0;h.innerHTML=h.textContent.split(' ').map(w=>`<span class="hw" aria-hidden="true"><span style="--i:${n++}">${w}</span></span>`).join('')});
    const leads=[...document.querySelectorAll('.lead')].map(l=>{const t=l.textContent;l.setAttribute('aria-label',t);l.innerHTML=t.split(' ').map(w=>`<span aria-hidden="true" style="opacity:.25;transition:opacity .3s">${w}</span>`).join(' ');return [l,[...l.children]]});
    function lead(){leads.forEach(([l,w])=>{const r=l.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;const p=Math.max(0,Math.min(1,(innerHeight*.92-r.top)/(innerHeight*.4)));w.forEach((x,k)=>{x.style.opacity=(.25+.75*Math.max(0,Math.min(1,p*w.length-k))).toFixed(2)})})}
    if(matchMedia('(hover:hover)').matches)document.querySelectorAll('.btn.p').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
    const hd=$('#hd'),bar=$('#bar');function onS(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;lead()}
    let tk=0;addEventListener('scroll',()=>{if(!tk)tk=requestAnimationFrame(()=>{tk=0;onS()})},{passive:true});addEventListener('resize',onS);onS();
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target)}),{threshold:.12});document.querySelectorAll('.rv,.big').forEach(e=>io.observe(e));

  }());
}
