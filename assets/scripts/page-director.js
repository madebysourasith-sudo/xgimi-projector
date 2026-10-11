// Page director: one paint loop composes the fixed 3D layer with every chapter.
// Daylight hero → inside the lens (exploded view) → projector to cinema (into the picture) → studio → everyday → compare → dusk.
// GSAP ScrollTrigger smooths the story scroll (scrub) and choreographs chapter typography; the 3D itself runs
// inside the original projector runtime (scene-adapter.template.js + scene-story.horizon.js).
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
const smooth=(a,b,v)=>{const t=clamp((v-a)/(b-a));return t*t*(3-2*t)};
const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
const lerp=(a,b,t)=>a+(b-a)*t;
const DEG=Math.PI/180;
const root=document.documentElement;
const reduceQuery=matchMedia('(prefers-reduced-motion: reduce)');
// Phones and portrait tablets share the stacked composition (same query as the compact block in styles.css).
const compactQuery=matchMedia('(max-width:760px),(max-width:1100px) and (max-aspect-ratio:4/5)');
let cine=!reduceQuery.matches;
root.classList.toggle('rm',!cine);
const G=window.gsap,ST=window.ScrollTrigger,hasGSAP=!!(G&&ST);
if(hasGSAP)G.registerPlugin(ST);

const frames={short:$('#short-frame'),horizon:$('#horizon-frame')};
const ready={short:false,horizon:false};
let selected='horizon',currentView='hero',finish='black',feature='movie',rotating=false,zoom=1,raf=0;
const lastKeys={short:'',horizon:''};
const placement={short:{scene:'',op:0,layout:null,inactive:false},horizon:{scene:'',op:0,layout:null,inactive:false}};
let pointer={x:0,y:0},lastScrollY=scrollY,scrollEnergy=0,lastPaint=performance.now(),aliveUntil=0,revealed=false;

const nav=$('.site-nav'),menuButton=$('#menu-toggle'),menu=$('#site-menu'),themeMeta=$('meta[name="theme-color"]');
const hero=$('#hero'),heroSlot=$('.hero-slot'),blackout=$('#blackout');
const lensSection=$('#lens'),lensTrack=$('.lens-track'),lensAtmos=$('.lens-atmos'),lensStage=$('.lens-stage'),lensVisual=$('.lens-visual');
const cinemaSection=$('#experience'),cinemaTrack=$('.cinema-track'),cinemaBackdrop=$('.cinema-backdrop'),cinemaStage=$('.cinema-stage'),cinemaVisual=$('.cinema-visual'),cinemaOutroText=$('.cinema-outro [data-split]');
const lensTags=$$('.lens-tags .tag');
const modelsSection=$('#models'),featuresSection=$('#features'),finalSection=$('#final');
const showcaseTrack=$('.showcase-track'),scAtmos=$('.showcase-atmos'),scStage=$('.showcase-stage');
const chapters=[...$$('main>section'),$('.site-footer')];

const sourceViews={
 short:{hero:{p:[7.8545731681,5.8332877586,18.8686297429],t:[-.460063681,1.207031332,0],fov:17.31616295},front:{p:[0,1.6,22.5],t:[0,1.5,.4],fov:20},rear:{p:[0,1.94,-23],t:[0,1.42,0],fov:15.8},detail:{p:[3.4,3.8,11.7],t:[.15,1.58,3.8],fov:29}},
 horizon:{hero:{p:[10.36,.9,14.29],t:[.16,2.06,-.11],fov:18.7},front:{p:[.0378,2.1214,18.58],t:[.0378,2.1214,0],fov:19},rear:{p:[0,3.15,-17.2],t:[0,1.58,0],fov:20.1},detail:{p:[2.9,2.4,8.3],t:[0,1.893,1.81],fov:20}}
};
const productData={short:{index:'XGIMI Short-throw',headline:'A wider<br>perspective.',description:'A low, wide enclosure with a prominent optical assembly. Explore its sculpted surfaces, ventilation details, and rear connection panel.',facts:['Wide enclosure','Layered lens barrel','Two finishes']},horizon:{index:'XGIMI Portable',headline:'A new<br>point of view.',description:'A compact enclosure with integrated front optics. Explore the textile surfaces, sculpted controls, and rear connection panel.',facts:['Compact enclosure','Integrated optics','Two finishes']}};
const featureData={movie:{label:'Immersive viewing',title:'Make room<br>for the story.',copy:'Give your favourite films and shared evenings a place of their own. Home projection brings the idea of a cinema into your everyday surroundings.'},design:{label:'Design & craftsmanship',title:'Considered.<br>From every angle.',copy:'A satin enclosure, perforated speaker grilles and a lens set flush into the front. Made to feel at home among the objects you choose to live with.'},space:{label:'Connected',title:'Your room.<br>Your way to watch.',copy:'Power, HDMI, USB and network sit together on the rear panel, so one tidy run of cables is all it takes to set up where you like to watch.'}};

/* ── small helpers ── */
const written=new WeakMap();
function put(el,prop,value){if(!el)return;let cache=written.get(el);if(!cache)written.set(el,cache={});if(cache[prop]===value)return;cache[prop]=value;if(prop.startsWith('--'))el.style.setProperty(prop,value);else el.style[prop]=value}
function configure(model,state){window.projectors?.[model]?.configure(state)}
function insetRect(r,k){const w=r.width*k,h=r.height*k;return {left:r.left+(r.width-w)/2,top:r.top+(r.height-h)/2,width:w,height:h,right:r.left+(r.width+w)/2,bottom:r.top+(r.height+h)/2}}
function rectOf(el){const r=el.getBoundingClientRect();return {left:r.left,top:r.top,width:r.width,height:r.height,bottom:r.bottom,right:r.right}}
function project(model,points){try{return window.projectors?.[model]?.projectPoints?.(points)}catch{return null}}
const story3d=()=>window.projectors?.horizon?.story3d;

/* ── model loading (unchanged contract with the original runtimes) ── */
function showProductPreview(model){
 ready[model]=false;frames[model].classList.remove('is-visible','is-interactive');frames[model].dataset.rendered='false';
 if(model==='horizon'){$$('[data-preview="horizon"]').forEach(image=>image.classList.remove('is-loaded'));$('#scene-status').hidden=true;}
 $('#viewer-loading').hidden=true;
}
function loadModel(model){
 if(frames[model].dataset.loading)return;frames[model].dataset.loading='true';
 // Give the embedded image a paint before allocating textures and building the 3D scene.
 requestAnimationFrame(()=>requestAnimationFrame(()=>{
  const start=window.startXgimiScene?.[model];
  if(!start){showProductPreview(model);return;}
  start().catch(error=>{console.error('Projector scene failed:',error);showProductPreview(model)});
 }));
}

/* ── navigation, menu, scrolling ── */
let menuOpen=false,menuTimer=0;
function setMenu(open,{focus=true}={}){
 if(open===menuOpen)return;menuOpen=open;clearTimeout(menuTimer);
 menuButton.setAttribute('aria-expanded',String(open));menuButton.querySelector('.menu-button-label').textContent=open?'Close':'Menu';
 nav.classList.toggle('is-menu',open);refreshMenuEdge();
 if(open){menu.hidden=false;nav.classList.remove('is-hidden');root.style.overflow='hidden';requestAnimationFrame(()=>requestAnimationFrame(()=>menu.classList.add('is-open')));menuTimer=setTimeout(()=>menu.querySelector('a')?.focus({preventScroll:true}),cine?420:0);}
 else{menu.classList.remove('is-open');root.style.overflow='';menuTimer=setTimeout(()=>{menu.hidden=true},cine?900:0);if(focus)menuButton.focus({preventScroll:true});}
 schedule();
}
menu.querySelectorAll('.menu-links a').forEach((a,i)=>a.style.setProperty('--i',i));
menuButton.addEventListener('click',()=>setMenu(!menuOpen));

/* ── Menu button edge ──
   A stippled pill outline in the manner of the hero CTA's particle border: a dense line of fine grains with a
   little dust around it. It is drawn once (and again when the button's size or colour changes); on hover the
   grains draw in closer. No animation loop, no second WebGL context. */
// One button language for the whole page, taken from the hero call to action: a pill drawn as a stippled
// edge with the faintest body, which gathers when it is hovered or focused. Each button draws its own edge
// on a small 2D canvas in its current text colour, and only redraws when it changes.
function stippleEdge(el,seed0=7){
 const canvas=el.querySelector('.pill-edge')||el.insertBefore(Object.assign(document.createElement('canvas'),{className:'pill-edge'}),el.firstChild);canvas.setAttribute('aria-hidden','true');
 let tight=0,goal=0,raf=0;
 function draw(){
  const w=el.offsetWidth,h=el.offsetHeight,pad=10;if(w<4||h<4)return;
  const dpr=Math.min(window.devicePixelRatio||1,3),cw=Math.round((w+pad*2)*dpr),ch=Math.round((h+pad*2)*dpr);
  if(canvas.width!==cw||canvas.height!==ch){canvas.width=cw;canvas.height=ch}
  const ctx=canvas.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w+pad*2,h+pad*2);ctx.translate(pad,pad);
  ctx.fillStyle=getComputedStyle(el).color;
  // The pill as one closed path, addressed by arc length (top edge, right cap, bottom edge, left cap).
  const R=h/2-.75,line=w-h,per=2*line+2*Math.PI*R,cy=h/2;
  const at=s=>{if(s<line)return [h/2+s,cy-R,0,-1];s-=line;if(s<Math.PI*R){const a=s/R-Math.PI/2;return [w-h/2+R*Math.cos(a),cy+R*Math.sin(a),Math.cos(a),Math.sin(a)]}
   s-=Math.PI*R;if(s<line)return [w-h/2-s,cy+R,0,1];s-=line;const a=s/R+Math.PI/2;return [h/2+R*Math.cos(a),cy+R*Math.sin(a),Math.cos(a),Math.sin(a)]};
  let seed=seed0;const rand=()=>{seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296},gauss=()=>(rand()+rand()+rand()+rand()-2)*.87;
  const spread=lerp(.85,.45,tight),drift=lerp(3.6,2,tight),ink=lerp(.42,.62,tight);
  ctx.globalAlpha=lerp(.04,.075,tight);ctx.beginPath();ctx.roundRect(.75,.75,w-1.5,h-1.5,R);ctx.fill();      // the faintest body, as in the CTA
  for(let i=0,n=Math.round(per*3.2);i<n;i++){const [x,y,nx,ny]=at(rand()*per),o=gauss()*spread,size=.55+rand()*.55;ctx.globalAlpha=ink*(.35+rand()*.65);ctx.fillRect(x+nx*o-size/2,y+ny*o-size/2,size,size)}
  for(let i=0,n=Math.round(per*.9);i<n;i++){const [x,y,nx,ny]=at(rand()*per),g=gauss(),o=(g<0?g*.45:g)*drift+.6,size=.45+rand()*.5;ctx.globalAlpha=.07+rand()*.2;ctx.fillRect(x+nx*o-size/2,y+ny*o-size/2,size,size)}
  ctx.globalAlpha=1;el.classList.add('has-edge');
 }
 function tighten(next){
  goal=next;if(!cine){tight=goal;draw();return}
  if(raf)return;const step=()=>{tight+=(goal-tight)*.2;if(Math.abs(goal-tight)<.01)tight=goal;draw();raf=tight===goal?0:requestAnimationFrame(step)};raf=requestAnimationFrame(step);
 }
 for(const [type,g] of [['pointerenter',1],['pointerleave',0],['focus',1],['blur',0]])el.addEventListener(type,()=>tighten(g));
 new ResizeObserver(draw).observe(el);draw();
 return draw;
}
const pillEdges=[menuButton,...$$('.pill')].map((el,i)=>stippleEdge(el,7+i*13));
const drawEdges=()=>pillEdges.forEach(draw=>draw());
document.fonts?.ready.then(drawEdges);
// Colour follows the surrounding tone (a CSS transition), so redraw as it starts and once it has settled.
function refreshMenuEdge(){drawEdges();setTimeout(drawEdges,280);setTimeout(drawEdges,560)}
document.addEventListener('keydown',e=>{
 if(!menuOpen)return;
 if(e.key==='Escape'){e.preventDefault();setMenu(false);return;}
 if(e.key==='Tab'){const items=[menuButton,...menu.querySelectorAll('a')],i=items.indexOf(document.activeElement);if(e.shiftKey&&i<=0){e.preventDefault();items[items.length-1].focus()}else if(!e.shiftKey&&i===items.length-1){e.preventDefault();items[0].focus()}else if(i<0){e.preventDefault();items[0].focus()}}
});

let navigationRaf=0;
function scrollToY(to,{duration}={}){
 cancelAnimationFrame(navigationRaf);to=clamp(to,0,root.scrollHeight-innerHeight);
 if(!cine){scrollTo({top:to,behavior:'instant'});return;}
 const from=scrollY,distance=Math.abs(to-from),time=duration||clamp(700+distance/innerHeight*110,800,2200),start=performance.now();
 function tick(now){const t=Math.min(1,(now-start)/time);scrollTo({top:from+(to-from)*ease(t),behavior:'instant'});if(t<1)navigationRaf=requestAnimationFrame(tick);else navigationRaf=0;}
 navigationRaf=requestAnimationFrame(tick);
}
for(const type of ['wheel','touchstart','keydown'])addEventListener(type,()=>{if(navigationRaf){cancelAnimationFrame(navigationRaf);navigationRaf=0}},{passive:true});
function scrollToTarget(target){scrollToY(target===hero?0:target.getBoundingClientRect().top+scrollY-(parseFloat(getComputedStyle(target).scrollMarginTop)||0))}
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
 const target=document.querySelector(a.getAttribute('href'));if(!target)return;e.preventDefault();
 const go=()=>{scrollToTarget(target);history.replaceState(null,'',a.getAttribute('href'));};
 if(menuOpen){setMenu(false,{focus:false});setTimeout(go,cine?260:0);}else go();
}));

/* ── Shop ──
   Prices and the checkout address live here. Until CHECKOUT is set, a Buy button says so instead of
   pretending to take an order. The chosen design and finish are passed on as ?product=…&finish=…. */
const STORE={currency:'$',checkout:'',products:{horizon:{name:'XGIMI Portable',price:1299},short:{name:'XGIMI Short-throw',price:1899}}};
const money=v=>STORE.currency+v.toLocaleString('en-US');
$$('[data-price]').forEach(el=>{el.textContent=money(STORE.products[el.dataset.price].price)});
$$('[data-from-price]').forEach(el=>{el.textContent='from '+money(STORE.products[el.dataset.fromPrice].price)});
const buyCards=$$('.buy-card');
function pickProduct(id){buyCards.forEach(card=>card.classList.toggle('is-picked',card.dataset.product===id))}
buyCards.forEach(card=>{
 const buttons=[...card.querySelectorAll('[data-buy-finish]')],status=card.querySelector('.buy-status');
 buttons.forEach(b=>b.addEventListener('click',()=>buttons.forEach(x=>x.setAttribute('aria-pressed',String(x===b)))));
 card.querySelector('[data-buy]').addEventListener('click',e=>{
  e.preventDefault();e.stopImmediatePropagation();
  const chosen=buttons.find(b=>b.getAttribute('aria-pressed')==='true')?.dataset.buyFinish==='white'?'porcelain':'graphite';
  if(STORE.checkout)location.href=STORE.checkout+(STORE.checkout.includes('?')?'&':'?')+'product='+card.dataset.product+'&finish='+chosen;
  else status.textContent='Checkout is not connected yet.';
 },true);
});
$$('[data-pick]').forEach(a=>a.addEventListener('click',()=>pickProduct(a.dataset.pick)));

/* ── interactions: models, views, finishes, features ── */
function syncViews(){$$('[data-view]').forEach(b=>{const on=b.dataset.view===currentView;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});$('#auto-rotate').setAttribute('aria-pressed',String(rotating))}
function crossfade(inner,update){if(!cine||!inner){update();return;}inner.classList.add('is-switching');clearTimeout(inner._swap);inner._swap=setTimeout(()=>{update();inner.classList.remove('is-switching')},240)}
function moveTabIndicator(){const on=$('.model-tabs [aria-selected="true"]'),bar=$('.tab-indicator');if(!on||!bar)return;bar.style.setProperty('--tx',on.offsetLeft-5+'px');bar.style.setProperty('--tw',on.offsetWidth+'px')}
function setTabs(list,active){list.forEach(b=>{const on=b===active;b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1})}
function chooseModel(model,{animate=true}={}){
 loadModel(model);const changed=selected!==model;selected=model;
 $$('[data-slot="selected"] [data-preview="horizon"]').forEach(image=>image.hidden=model!=='horizon');
 currentView='hero';zoom=1;rotating=false;lastKeys.short=lastKeys.horizon='';
 setTabs($$('[data-model]'),$(`[data-model="${model}"]`));moveTabIndicator();
 const d=productData[model];
 const update=()=>{$('#model-index').textContent=d.index;$('#model-headline').innerHTML=d.headline;$('#model-description').textContent=d.description;$('#model-facts').replaceChildren(...d.facts.map(text=>{const s=document.createElement('span');s.textContent=text;return s}))};
 if(changed&&animate)crossfade($('.model-copy-inner'),update);else update();
 $('#model-panel').setAttribute('aria-labelledby','tab-'+model);$('#viewer-loading').hidden=ready[model];syncViews();schedule();
}
$$('[data-model]').forEach(b=>b.addEventListener('click',()=>chooseModel(b.dataset.model)));
$$('[data-explore]').forEach(b=>b.addEventListener('click',()=>{chooseModel(b.dataset.explore,{animate:false});scrollToTarget(modelsSection)}));
$$('[data-view]').forEach(b=>b.addEventListener('click',()=>{currentView=b.dataset.view;rotating=false;zoom=1;lastKeys[selected]='';syncViews();schedule()}));
// One finish choice for the explorer, applied to whichever design is shown (the short-throw through its own
// runtime, the portable through its finish twins; see the frame loop).
$$('[data-finish]').forEach(b=>b.addEventListener('click',()=>{finish=b.dataset.finish;configure('short',{finish});schedule();$$('[data-finish]').forEach(x=>{const on=x.dataset.finish===finish;x.setAttribute('aria-pressed',String(on));x.classList.toggle('active',on)})}));
$$('[data-zoom]').forEach(b=>b.addEventListener('click',()=>{zoom=clamp(zoom*(b.dataset.zoom==='in'?.88:1.14),.7,1.4);lastKeys[selected]='';schedule()}));
$('#auto-rotate').addEventListener('click',()=>{rotating=!rotating;configure(selected,{free:true,rotate:rotating});syncViews()});
$('#reset-view').addEventListener('click',()=>{currentView='hero';zoom=1;rotating=false;lastKeys[selected]='';syncViews();schedule()});
// Keep the projector in view while visitors use the camera controls.
$$('.explorer-toolbar button').forEach(button=>button.addEventListener('click',()=>{const stage=$('.studio-stage'),rect=stage.getBoundingClientRect();if(rect.top<0||rect.bottom>innerHeight+2)scrollToY(rect.top+scrollY-Math.max(16,(innerHeight-rect.height)/2))}));
// 04 Everyday. Unpinned (reduced motion, short viewports) the three blocks are tabs. Pinned, the section
// holds while the page scrolls and the blocks arrive one after another: each list entry appears as its
// block comes up, the copy hands over at the boundary, and the projector turns to the matching view.
const featureTabs=$$('[data-feature]'),featureKeys=featureTabs.map(b=>b.dataset.feature),featureInner=$('.feature-copy-inner'),featureTrack=$('.features-track');
const FEATURE_CUTS=[.335,.67];let featuresPinned=false;
function setFeature(key,fade){
 if(feature===key)return;feature=key;lastKeys[selected]='';const b=featureTabs[featureKeys.indexOf(key)],d=featureData[key];
 setTabs(featureTabs,b);$('#feature-panel').setAttribute('aria-labelledby',b.id);
 const write=()=>{$('#feature-label').textContent=d.label;$('#feature-title').innerHTML=d.title;$('#feature-description').textContent=d.copy};
 if(fade)crossfade(featureInner,write);else write();schedule();
}
function applyFeatures(p){
 const i=p<FEATURE_CUTS[0]?0:p<FEATURE_CUTS[1]?1:2;setFeature(featureKeys[i],false);
 // The copy is clear at each boundary, so the text changes while nothing is showing.
 const gap=Math.min(...FEATURE_CUTS.map(c=>Math.abs(p-c))),o=smooth(.006,.05,gap),side=FEATURE_CUTS.some(c=>p>=c&&p-c<.05)?1:-1;
 featureInner.style.opacity=o.toFixed(3);featureInner.style.transform=o<1?`translate3d(0,${((1-o)*14*side).toFixed(2)}px,0)`:'';
 featureTabs.forEach((b,k)=>{const r=k?smooth(FEATURE_CUTS[k-1]-.085,FEATURE_CUTS[k-1]-.012,p):1;b.style.opacity=r.toFixed(3);b.style.transform=r<1?`translate3d(0,${((1-r)*16).toFixed(2)}px,0)`:'';b.style.pointerEvents=r>.5?'':'none'});
}
function resetFeatures(){$('.features-grid').style.top='';featureInner.style.opacity=featureInner.style.transform='';featureTabs.forEach(b=>{b.style.opacity=b.style.transform=b.style.pointerEvents=''})}
featureTabs.forEach((b,k)=>b.addEventListener('click',()=>{
 if(!featuresPinned){setFeature(b.dataset.feature,true);return}
 const st=featureTrack._st;if(st)scrollToY(st.start+(st.end-st.start)*[.17,.5,.84][k]);
}));
// Arrow-key navigation follows tab semantics; every view stays available to touch and keyboard users.
$$('[role="tablist"]').forEach(list=>list.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key))return;const tabs=[...list.querySelectorAll('[role="tab"]')],index=tabs.indexOf(document.activeElement);if(index<0)return;e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?tabs.length-1:(index+(['ArrowLeft','ArrowUp'].includes(e.key)?-1:1)+tabs.length)%tabs.length;tabs[next].focus();tabs[next].click()}));

/* ── camera framing ── */
function fitView(model,view,rect,scene){const v=sourceViews[model][view]||sourceViews[model].hero;const aspect=Math.max(.35,rect.width/rect.height),reference=model==='short'?(scene==='features'?1.45:1.95):(scene==='hero'?1.55:scene==='features'?1.3:1.8);const fov=2*Math.atan(Math.tan(v.fov*Math.PI/360)*Math.max(1,reference/aspect))*180/Math.PI;const p=v.p.map((x,i)=>v.t[i]+(x-v.t[i])*(scene==='models'?zoom:1));return {p,t:[...v.t],fov:Math.min(fov,75)}}
// Orbit between poses around the target instead of cutting through the product.
function orbitMix(a,b,t){
 const target=a.t.map((v,i)=>lerp(v,b.t[i],t)),oa=a.p.map((v,i)=>v-a.t[i]),ob=b.p.map((v,i)=>v-b.t[i]);
 const ra=Math.hypot(...oa),rb=Math.hypot(...ob),ta=Math.atan2(oa[0],oa[2]),tb=Math.atan2(ob[0],ob[2]),pa=Math.acos(clamp(oa[1]/ra,-1,1)),pb=Math.acos(clamp(ob[1]/rb,-1,1));
 const r=Math.exp(lerp(Math.log(ra),Math.log(rb),t)),theta=ta+Math.atan2(Math.sin(tb-ta),Math.cos(tb-ta))*t,phi=lerp(pa,pb,t);
 return {p:[target[0]+r*Math.sin(phi)*Math.sin(theta),target[1]+r*Math.cos(phi),target[2]+r*Math.sin(phi)*Math.cos(theta)],t:target,fov:lerp(a.fov,b.fov,t)};
}
// Full-window canvas, product framed into its slot with an off-axis projection.
function frameIntoSlot(goal,layout,W,H){
 const ratio=H/Math.max(1,layout.height);goal.fov=2*Math.atan(Math.tan(goal.fov*Math.PI/360)*ratio)*180/Math.PI;
 const dx=(layout.left+layout.width/2-W/2)/W,dy=(layout.top+layout.height/2-H/2)/H;
 goal.viewOffset={width:W,height:H,x:-dx*W,y:-dy*H};return goal;
}

/* ── story camera: authored keyframes in spherical form, framed per aspect ── */
function sph(t,az,el,d,fov){const a=az*DEG,e=el*DEG;return {t:[...t],p:[t[0]+d*Math.cos(e)*Math.sin(a),t[1]+d*Math.sin(e),t[2]+d*Math.cos(e)*Math.cos(a)],fov}}
// Smallest distance that keeps every point inside the frame for this view direction and aspect.
function fitDistance(t,az,el,fov,aspect,points,margin=.86){
 const a=az*DEG,e=el*DEG,f=[-Math.cos(e)*Math.sin(a),-Math.sin(e),-Math.cos(e)*Math.cos(a)];
 let r=[f[2],0,-f[0]];const rl=Math.hypot(...r)||1;r=r.map(v=>v/rl);const u=[r[1]*f[2]-r[2]*f[1],r[2]*f[0]-r[0]*f[2],r[0]*f[1]-r[1]*f[0]];
 const ty=Math.tan(fov*DEG/2)*margin,tx=ty*aspect;let d=0;
 for(const q of points){const v=[q[0]-t[0],q[1]-t[1],q[2]-t[2]],x=v[0]*r[0]+v[1]*r[1]+v[2]*r[2],y=v[0]*u[0]+v[1]*u[1]+v[2]*u[2],z=v[0]*f[0]+v[1]*f[1]+v[2]*f[2];d=Math.max(d,Math.abs(x)/tx-z,Math.abs(y)/ty-z)}
 return d;
}
// Slide a pose (camera and target together) along its own screen axes, in world units.
function shiftPose(pose,sx,sy){const o=pose.p.map((v,i)=>v-pose.t[i]),l=Math.hypot(...o),f=o.map(v=>-v/l);let r=[f[2],0,-f[0]];const rl=Math.hypot(...r)||1;r=r.map(v=>v/rl);const u=[r[1]*f[2]-r[2]*f[1],r[2]*f[0]-r[0]*f[2],r[0]*f[1]-r[1]*f[0]];// r points to screen-left and u to screen-down here, so moving the camera along +r/+u slides the subject right/up.
 const d=r.map((v,i)=>v*sx+u[i]*sy);return {...pose,p:pose.p.map((v,i)=>v+d[i]),t:pose.t.map((v,i)=>v+d[i])}}
function keyAt(keys,x){
 let i=0;while(i<keys.length-2&&x>keys[i+1][0])i++;
 const [a0,pa]=keys[i],[a1,pb]=keys[i+1];return orbitMix(pa,pb,ease(clamp((x-a0)/Math.max(1e-4,a1-a0))));
}
let storyKeys=null,storyKeysFor='';
function buildStoryKeys(aspect,compact){
 const s3=story3d();if(!s3)return null;
 const [z0,z1]=s3.columnSpan,ay=s3.axis[1],R=1.24,len=z1-z0,mid=(z0+z1)/2,sc=s3.screen;
 const column=(a,b)=>{const pts=[];for(const z of [a,b])for(const [dx,dy] of [[R,0],[-R,0],[0,R],[0,-R]])pts.push([dx,ay+dy,z]);return pts};
 const body=[];for(const x of [-4.8,4.8])for(const y of [0,3.5])for(const z of [-2.6,2.6])body.push([x,y,z]);
 const view=(t,az,el,fov,pts,m)=>sph(t,az,el,fitDistance(t,az,el,fov,aspect,pts,m),fov);
 // Product-photography angle: a calm three-quarter view that shows the glass faces, not a side elevation.
 const L=compact?{az:-14,el:56,fov:38}:{az:-71,el:8,fov:30};
 // Out of the darkness: the assembled lens at three-quarters, right of the intro copy (below it on phones).
 const reveal=shiftPose(sph([0,ay,2.45],compact?-12:-33,compact?27:7,compact?7.6:6.5,compact?36:30),compact?0:.95,compact?-.42:0);
 // Start of the cinema chapter: on wide screens the projector sits right of the intro copy, not behind it.
 const begin=shiftPose(view([0,1.75,.1],compact?-30:-42,compact?16:11,compact?40:30,body,compact?.8:.74),compact?0:2.1,0);
 const coverFov=compact?44:34,tf=Math.tan(coverFov*DEG/2),dCover=Math.min((sc.h/2)/tf,(sc.w/2)/(tf*aspect))*.985;
 const cover={t:[0,sc.y,sc.z],p:[0,sc.y,sc.z-dCover],fov:coverFov};
 return {
  coverScale:1/.985,lensCenter:s3.lensCenter,lensFace:s3.lensFront[2],
  // The camera drifts out slowly while the lights come up, then swings to the drawing view as the parts separate.
 lens:[[LENS.cut,reveal],[.16,shiftPose(sph([0,ay,2.5],compact?-13:-36,compact?28:7,compact?8:6.95,compact?36:30),compact?0:.95,compact?-.42:0)],
   [.34,view([0,ay,mid],L.az,L.el,L.fov,column(z0-.2,z1+.2),.88)],
   [.47,view([0,ay,mid+len*.14],L.az-3,L.el-1.5,L.fov,column(mid-len*.14,z1+.15),.9)],
   [.63,view([0,ay,mid-len*.17],L.az+5,L.el+1.5,L.fov,column(z0-.15,mid+len*.14),.9)],
   [.8,shiftPose(sph([0,ay,1.9],compact?-22:-34,compact?16:9,compact?12.5:8.4,compact?38:30),compact?0:1.25,compact?-1.5:-.8)],[1,begin]],
  cinema:[[0,begin],
   [.16,view([0,1.9,.6],compact?-50:-62,compact?14:10,compact?42:30,body,compact?.62:.6)],
   [.38,sph([0,2.8,5],compact?-114:-118,compact?18:14,compact?27:19,compact?44:32)],
   [.6,sph([0,compact?5.6:4.4,compact?17:15],-172,compact?12:9,compact?35:28,compact?48:36)],
   [.88,cover],[1,cover]],
 };
}
// Where the lens story's opening and close sit on its track (fractions of the track).
//   pushEnd: the push into the lens is complete      cut: the scenes change, behind black
//   lights: the lens studio fades up                 dip/back: lights down, and the room returns for the cinema
const LENS={pushEnd:.045,cut:.027,lights:[.043,.14],dip:[.9,.94],back:.946},PUSH_STOP=.5;
// Scroll story state for a given smoothed scroll position (hero → lens → cinema), shared by 3D and type.
// Everything the 3D does in the story is a pure function of that one value: deterministic, reversible.
function storyState(y,heroPose,keys,lensTop,lensLen,cinemaTop,cinemaLen,W,H){
 const s={pose:null,vo:null,intro:0,tilt:0,cover:0,story:{explode:0,spin:0,dark:0,power:0,reach:0,screen:0,beam:1,backdrop:0,kit:false,focus:10,aperture:0,iris:0,reveal:1},opacity:1,p:-1,q:-1,u:-1};
 if(y<lensTop+LENS.cut*lensLen){
  // Hero → lens: one straight push along the optical axis into the lens. The camera sits on the axis from
  // the first frame (the hero framing is kept by shifting the picture, not the camera), looks straight down
  // it throughout, and only its distance changes. The lens settles on the centre of the view as it grows.
  const u=s.u=clamp(y/(lensTop+LENS.pushEnd*lensLen)),C=keys.lensCenter,tanH=Math.tan(heroPose.fov*DEG/2);
  const k=(H/2)/((heroPose.p[2]-keys.lensFace)*tanH);              // pixels per unit at the lens face, in the hero view
  const vx=heroPose.viewOffset.x-(C[0]-heroPose.p[0])*k,vy=heroPose.viewOffset.y-(heroPose.p[1]-C[1])*k;
  const D0=heroPose.p[2]-C[2],D=D0*Math.pow(PUSH_STOP/D0,Math.pow(clamp(u/.95),1.55)),c=ease(smooth(0,.5,u));
  s.pose={p:[C[0],C[1],C[2]+D],t:[C[0],C[1],C[2]+D-1],fov:heroPose.fov};
  s.vo={width:W,height:H,x:vx*(1-c),y:vy*(1-c)};
  s.tilt=1-smooth(0,.05,u);s.intro=1-smooth(0,.08,u);           // the cursor lets go before the push begins
  s.story.iris=1.9*Math.pow(smooth(.74,.94,u),1.5);              // the dark pupil spreads over the whole frame
  s.cover=smooth(.885,.925,u);
 }else if(y<cinemaTop){
  const p=s.p=clamp((y-lensTop)/lensLen),dip=smooth(LENS.dip[0],LENS.dip[1],p);
  s.pose=keyAt(keys.lens,p);
  s.story.kit=p<LENS.back;s.story.reveal=smooth(LENS.lights[0],LENS.lights[1],p)*(1-dip);
  s.story.panel=lerp(.03,.34,smooth(.19,.3,p));                  // the panel's print waits in shadow until the intro copy has gone
  s.story.explode=smooth(.17,.36,p)*(1-smooth(.64,.8,p));s.story.dark=smooth(.82,1,p);s.story.backdrop=p<LENS.dip[1]?1:2;
  s.story.aperture=lerp(.42,.8,smooth(.16,.34,p))*(1-.35*smooth(.64,.8,p))*(1-smooth(.84,.93,p));
  // Black holds across both scene changes: after the push, and before the room returns for the cinema.
  s.cover=Math.max(1-smooth(.036,.047,p),smooth(LENS.dip[0]+.005,LENS.dip[1],p)*(1-smooth(.956,.996,p)));
 }else{
  const q=s.q=clamp((y-cinemaTop)/cinemaLen);
  s.pose=keyAt(keys.cinema,q);
  Object.assign(s.story,{dark:1,power:smooth(.04,.13,q),reach:ease(smooth(.1,.3,q)),screen:smooth(.25,.37,q),beam:1-smooth(.8,.9,q),backdrop:2,surface:1-smooth(.66,.86,q)});
  s.opacity=1-smooth(.895,.935,q);
 }
 if(s.pose)s.story.focus=Math.hypot(...s.pose.p.map((v,i)=>v-s.pose.t[i]));
 return s;
}

/* ── Showcase: both designs, graphite and porcelain ──
   A product film in four moments. A finish changes under a light sweep (3D twins split by a camera-plane
   clip at the sweep line) while the studio wall moves between two light states; the camera glides sideways
   from one design to the other; the two meet in a closing lineup. One caption at a time, always bottom-left. */
const H_BOUNDS=[[-4.75,0,-2.5],[4.75,3.48,2.5]],H_CENTER=[0,1.72,0];
const corners=b=>{const pts=[];for(const x of [b[0][0],b[1][0]])for(const y of [b[0][1],b[1][1]])for(const z of [b[0][2],b[1][2]])pts.push([x,y,z]);return pts};
const lerpRect=(a,b,t)=>({left:lerp(a.left,b.left,t),top:lerp(a.top,b.top,t),width:lerp(a.width,b.width,t),height:lerp(a.height,b.height,t)});
const showScroll={p:0},prewarmed={};
// Transitions on the showcase timeline (showScroll.p); the moments sit between them.
const SC={sweep1:[.24,.36],glide:[.47,.6],sweep2:[.71,.83],lineup:[.88,.98]};
let showcaseActive=false;
function stageSlots(W,H,compact){
 return compact
  ?{intro:{left:W*.04,top:H*.33,width:W*.92,height:H*.38},center:{left:W*.04,top:H*.24,width:W*.92,height:H*.42},a:{left:W*.06,top:H*.13,width:W*.88,height:H*.26},b:{left:W*.06,top:H*.5,width:W*.88,height:H*.27}}
  :{intro:{left:W*.3,top:H*.2,width:W*.64,height:H*.6},center:{left:W*.14,top:H*.13,width:W*.72,height:H*.63},a:{left:W*.03,top:H*.15,width:W*.46,height:H*.6},b:{left:W*.51,top:H*.15,width:W*.46,height:H*.6}};
}
function showPose(model,p,aspect,compact){
 const sp=window.projectors?.short,sb=sp?.bounds||[[-4.4,0,-3.1],[4.4,2.9,4.5]];
 const sc=[(sb[0][0]+sb[1][0])/2,(sb[0][1]+sb[1][1])/2,(sb[0][2]+sb[1][2])/2],fov=compact?34:26,m=compact?.84:.8;
 const fitH=(az,el)=>()=>sph(H_CENTER,az,el,fitDistance(H_CENTER,az,el,fov,aspect,corners(H_BOUNDS),m),fov);
 const fitS=(az,el)=>()=>sph(sc,az,el,fitDistance(sc,az,el,fov,aspect,corners(sb),m),fov);
 // A slow, constant orbit through each moment (linear between keys, so it never stops and starts).
 const keys=model==='horizon'
  ?[[0,fitH(-52,12)],[.14,fitH(-42,10)],[.25,fitH(-33,9)],[.35,fitH(-24,8)],[.47,fitH(-14,7)],[.6,fitH(-6,6)],[.88,fitH(-38,10)],[1,fitH(-27,9)]]
  :[[.47,fitS(50,9)],[.6,fitS(40,9)],[.72,fitS(31,9)],[.82,fitS(22,8)],[.88,fitS(15,8)],[1,fitS(25,8)]];
 let i=0;while(i<keys.length-2&&p>keys[i+1][0])i++;
 const [a0,fa]=keys[i],[a1,fb]=keys[i+1];
 return orbitMix(fa(),fb(),clamp((p-a0)/Math.max(1e-4,a1-a0)));
}
// Shader warm-up for the finish twins, one small idle-time step at a time.
function warmStep(model){const go=()=>{if(window.projectors?.[model]?.finishFX?.prewarm?.())warmStep(model)};'requestIdleCallback' in window?requestIdleCallback(go,{timeout:1200}):setTimeout(go,80)}
function hideFrame(model){const frame=frames[model],state=placement[model];if(!state.inactive){configure(model,{active:false,rotate:false});state.inactive=true}state.layout=null;state.scene='';state.op=0;put(frame,'opacity','0');frame.classList.remove('is-visible','is-interactive');frame.tabIndex=-1}
function paintShowcase(W,H,compact,dt,staticMode){
 const p=staticMode?1:showScroll.p,slots=stageSlots(W,H,compact);
 // The pinned layer may be arriving or leaving: the products travel with it and are clipped to it.
 const box=rectOf(scAtmos),dy=staticMode?0:box.top,clip=`inset(${Math.max(0,box.top).toFixed(1)}px 0px ${Math.max(0,H-box.bottom).toFixed(1)}px 0px)`;
 let hSlot,sSlot,hOp=0,sOp=0,hMode='a',sMode='b',seam=.5,side='left',stone=0,sweep=null,lx=.5;
 if(staticMode){
  const rs=$$('.sc-slot');hSlot=rectOf(rs[0]);sSlot=rectOf(rs[1]);hOp=sOp=1;hMode='b';sMode='a';
 }else{
  const shift=(r,dx)=>({...r,left:r.left+dx});
  // The sweep travels across the product's own silhouette (its projected bounds), not the empty slot.
  const across=(t,model,slot)=>{const b=model==='horizon'?H_BOUNDS:window.projectors?.short?.bounds,q=b&&project(model,corners(b));
   const xs=q?.length?q.map(v=>v[0]):[(slot.left+slot.width*.2)/W,(slot.left+slot.width*.8)/W],x0=Math.min(...xs)-.015,x1=Math.max(...xs)+.015;return x0+(x1-x0)*t};
  const g=ease(smooth(SC.glide[0],SC.glide[1],p)),l=ease(smooth(SC.lineup[0],SC.lineup[1],p));
  // Portable: settles from the intro framing, glides out to the left, returns for the lineup.
  hSlot=p<SC.glide[0]?lerpRect(slots.intro,slots.center,ease(smooth(.02,.15,p))):p<SC.lineup[0]?shift(slots.center,-W*1.02*g):lerpRect(shift(slots.a,-W*.62),slots.a,l);
  hOp=p<SC.glide[1]||p>=SC.lineup[0]?1:0;
  // Short-throw: glides in from the right, then steps aside for the lineup.
  sSlot=p<SC.lineup[0]?shift(slots.center,W*1.02*(1-g)):lerpRect(slots.center,slots.b,l);
  sOp=p>=SC.glide[0]?1:0;
  // Finishes change under a light sweep that crosses the product left to right.
  const t1=smooth(SC.sweep1[0],SC.sweep1[1],p),t2=smooth(SC.sweep2[0],SC.sweep2[1],p);
  hMode=p<SC.sweep1[0]?'a':p<SC.sweep1[1]?'wipe':'b';
  sMode=p<SC.sweep2[0]?'b':p<SC.sweep2[1]?'wipe':'a';
  if(hMode==='wipe'){seam=across(t1,'horizon',hSlot);side='left';sweep={t:t1,slot:hSlot}}
  if(sMode==='wipe'){seam=across(t2,'short',sSlot);side='right';sweep={t:t2,slot:sSlot}}
  // The wall: porcelain moments sit in a warmer, deeper light state; the key light rides the sweep.
  stone=ease(t1)*(1-ease(t2));
  if(sweep)lx=.5+(seam-.5)*Math.sin(Math.PI*sweep.t);
 }
 put(scAtmos,'--sc-stone',stone.toFixed(4));put(scAtmos,'--lx',(lx*100).toFixed(2)+'%');
 if(sweep){const s=sweep.slot;put(scStage,'--sw-x',(seam*W).toFixed(1)+'px');put(scStage,'--sw-top',(s.top+dy+s.height*.1).toFixed(1)+'px');put(scStage,'--sw-h',(s.height*.8).toFixed(1)+'px');put(scStage,'--sw-o',(.85*Math.sin(Math.PI*sweep.t)).toFixed(3))}
 else put(scStage,'--sw-o','0');
 const sp=window.projectors?.short;if(sp&&sp.finish!=='black')sp.setFinish('black');
 for(const [model,op,slot,mode] of [['horizon',hOp,hSlot,hMode],['short',sOp,sSlot,sMode]]){
  if(!ready[model]||op<.003||!slot){hideFrame(model);continue}
  const frame=frames[model],state=placement[model];state.inactive=false;
  if(state.scene!=='showcase'){state.scene='showcase';state.op=0;lastKeys[model]=''}
  state.op+=(1-state.op)*(cine?1-Math.exp(-dt*6):1);
  frame.classList.add('is-visible');frame.classList.remove('is-interactive');frame.tabIndex=-1;
  for(const property of ['left','top'])put(frame,property,'0px');put(frame,'width',W+'px');put(frame,'height',H+'px');
  put(frame,'opacity',(op*state.op).toFixed(3));put(frame,'clipPath',clip);put(frame,'webkitMaskImage','none');put(frame,'maskImage','none');
  const placed={...slot,top:slot.top+dy};
  const goal=frameIntoSlot({...showPose(model,p,slot.width/slot.height,compact)},placed,W,H);
  configure(model,{active:true,story:'cine',reduced:!cine,width:W,height:H,viewOffset:goal.viewOffset,free:false,rotate:false,pointer,scrolling:scrollEnergy,live:false,cine:{p:goal.p,t:goal.t,fov:goal.fov}});
  window.projectors?.[model]?.finishFX?.set({mode,seam,newSide:side});
  window.projectors?.[model]?.finishFX?.economy?.({trs:model==='short'?.5:null});
  lastKeys[model]='showcase';
 }
 return 0;
}

/* ── The film: one <video> for the projected picture and the full-screen hand-off ──
   It is fetched as a blob, so looping and seeking work from any server and from the single-file export. */
const movieVideo=$('.movie video');let movieState='idle';
function prepareMovie(){
 if(!movieVideo||movieState!=='idle')return;movieState='loading';const src=movieVideo.dataset.src;
 const use=url=>{movieVideo.preload='auto';movieVideo.src=url;movieVideo.load();movieState='ready'};
 fetch(src).then(r=>r.blob()).then(b=>use(URL.createObjectURL(b))).catch(()=>use(src));
}
function driveMovie(want){
 if(!movieVideo||movieState!=='ready')return;
 if(want&&movieVideo.paused)movieVideo.play().catch(()=>{});else if(!want&&!movieVideo.paused)movieVideo.pause();
}

/* ── GSAP: smoothed story scroll + chapter typography ── */
const storyScroll={y:scrollY};
let storyTween=null,timelines=[];
const docTop=el=>el.getBoundingClientRect().top+scrollY;
const storyEnd=()=>Math.max(1,docTop(cinemaTrack)+cinemaTrack.offsetHeight-innerHeight);
function buildScrollStory(){
 storyTween?.scrollTrigger?.kill();storyTween?.kill();storyTween=null;
 G&&G.set&&G.set('.sc-head,.sc-cap,.sc-pair,.model-copy-inner,.explorer-toolbar,#features .display-xl,.feature-tabs,.feature-copy,#specifications .display-xl,.comparison-wrap tr,.final-title .line,.buy-card>*,.footer-word',{clearProps:'all'});
 timelines.forEach(t=>{t.scrollTrigger?.kill();t.kill()});timelines=[];
 featuresPinned=false;featuresSection.classList.remove('features-pinned');featureTrack._st=null;featureTrack.style.height='';resetFeatures();
 if(!hasGSAP)return;
 G.set('.story-intro,.story-outro,.cinema-caption',{clearProps:'all'});
 if(!cine)return;
 // The 3D follows a scrubbed copy of the scroll position, so camera moves glide rather than step.
 storyTween=G.fromTo(storyScroll,{y:0},{y:storyEnd,ease:'none',scrollTrigger:{start:0,end:storyEnd,scrub:.85,invalidateOnRefresh:true}});
 const chapter=trigger=>({trigger,start:'top top',end:'bottom bottom',scrub:.85,invalidateOnRefresh:true});
 const lens=G.timeline({scrollTrigger:chapter(lensTrack),defaults:{ease:'power2.inOut'}});
 // The intro arrives with the lights, after the black; the outro leaves before the lights go down.
 lens.fromTo('.lens-intro',{autoAlpha:0,y:28},{autoAlpha:1,y:0,duration:.045},.058)
  .to('.lens-intro',{autoAlpha:0,y:-44,duration:.04},.142)
  .fromTo('.lens-outro',{autoAlpha:0,y:32},{autoAlpha:1,y:0,duration:.06},.765)
  .to('.lens-outro',{autoAlpha:0,y:-26,duration:.04},.865)
  .set({},{},1);
 const film=G.timeline({scrollTrigger:chapter(cinemaTrack),defaults:{ease:'power2.inOut'}});
 film.to('.cinema-intro',{autoAlpha:0,y:-56,duration:.06},.135)
  .fromTo('.cinema-caption',{autoAlpha:0,y:26},{autoAlpha:1,y:0,duration:.05},.6)
  .to('.cinema-caption',{autoAlpha:0,y:-18,duration:.04},.72)
  .fromTo('.cinema-outro',{autoAlpha:0,y:32},{autoAlpha:1,y:0,duration:.045},.935)
  .set({},{},1);
 // Lower chapters: each arrives on the scroll itself (scrubbed, so it runs backwards too).
 const arrive=(trigger,start='top 86%',end='top 42%')=>({trigger,start,end,scrub:.7,invalidateOnRefresh:true});
 const sweep=(targets,vars,st)=>{const t=G.fromTo(targets,vars[0],{...vars[1],scrollTrigger:st});timelines.push(t);return t};
 // 03 Explore: the stage copy and toolbar settle as the stage reaches the middle of the view.
 sweep('.model-copy-inner',[{autoAlpha:0,x:-40},{autoAlpha:1,x:0,ease:'power2.out'}],arrive('.studio-stage','top 70%','top 22%'));
 sweep('.explorer-toolbar',[{autoAlpha:0},{autoAlpha:1,ease:'none'}],arrive('.studio-stage','top 45%','top 12%'));
 // 04 Everyday: the headline slides across; the list and the copy come in from either side of the product.
 sweep('#features .display-xl',[{xPercent:6},{xPercent:0,ease:'none'}],arrive('#features','top 95%','top 20%'));
 sweep('.feature-tabs',[{autoAlpha:0,x:-48},{autoAlpha:1,x:0,ease:'power2.out'}],arrive('.features-grid','top 80%','top 36%'));
 sweep('.feature-copy',[{autoAlpha:0,x:48},{autoAlpha:1,x:0,ease:'power2.out'}],arrive('.features-grid','top 80%','top 36%'));
 // …then the section holds, and its three blocks follow the scroll (only where the stage fits the viewport).
 {const grid=$('.features-grid'),gh=grid.offsetHeight,navSpace=innerWidth<900?76:24;
  if(gh+navSpace+16<=innerHeight){
   featuresPinned=true;featuresSection.classList.add('features-pinned');const top=Math.max(navSpace,Math.round((innerHeight-gh)/2));grid.style.top=top+'px';featureTrack.style.height=Math.round(gh+innerHeight*(innerWidth<900?1.9:2.3))+'px';
   const fp={p:0},tw=G.fromTo(fp,{p:0},{p:1,ease:'none',onUpdate:()=>applyFeatures(fp.p),scrollTrigger:{trigger:featureTrack,start:()=>'top '+top+'px',end:()=>'bottom '+(top+grid.offsetHeight)+'px',scrub:.6,invalidateOnRefresh:true}});
   timelines.push(tw);featureTrack._st=tw.scrollTrigger;applyFeatures(0);
  }}
 // 05 Compare: the table builds row by row.
 sweep('#specifications .display-xl',[{xPercent:6},{xPercent:0,ease:'none'}],arrive('#specifications','top 95%','top 20%'));
 sweep('.comparison-wrap thead tr,.comparison-wrap tbody tr',[{autoAlpha:0,y:30},{autoAlpha:1,y:0,stagger:.14,ease:'power2.out'}],arrive('.comparison-wrap','top 84%','top 24%'));
 // 06 Buy: the two lines of the title close in from opposite sides; the products rise under them.
 sweep('.final-title .line:first-child',[{xPercent:-9},{xPercent:0,ease:'none'}],arrive('#final','top 92%','top 18%'));
 sweep('.final-title .line:last-child',[{xPercent:9},{xPercent:0,ease:'none'}],arrive('#final','top 92%','top 18%'));
 sweep('.buy-card>*',[{autoAlpha:0,y:36},{autoAlpha:1,y:0,stagger:.06,ease:'power2.out'}],arrive('.buy-grid','top 92%','top 55%'));
 // Footer: the wordmark rises into place as the page ends.
 sweep('.footer-word',[{yPercent:34},{yPercent:0,ease:'none'}],{trigger:'.site-footer',start:'top bottom',end:'bottom bottom',scrub:.7,invalidateOnRefresh:true});
 // Showcase: a smoothed progress for the 3D, and the editorial copy timed to the same states.
 const showTween=G.fromTo(showScroll,{p:0},{p:1,ease:'none',scrollTrigger:{trigger:showcaseTrack,start:'top top',end:'bottom bottom',scrub:.85,invalidateOnRefresh:true}});
 const show=G.timeline({scrollTrigger:{trigger:showcaseTrack,start:'top top',end:'bottom bottom',scrub:.85,invalidateOnRefresh:true},defaults:{ease:'power2.inOut'}});
 const cap=n=>`.sc-cap[data-cap="${n}"]`;
 show.to('.sc-head',{autoAlpha:0,y:-40,duration:.04},.085)
  // Each caption leaves before the next transition starts, and arrives as that transition settles.
  .fromTo(cap(1),{autoAlpha:0,y:22},{autoAlpha:1,y:0,duration:.03},.115).to(cap(1),{autoAlpha:0,y:-16,duration:.025},.222)
  .fromTo(cap(2),{autoAlpha:0,y:22},{autoAlpha:1,y:0,duration:.03},.342).to(cap(2),{autoAlpha:0,y:-16,duration:.025},.443)
  .fromTo(cap(3),{autoAlpha:0,y:22},{autoAlpha:1,y:0,duration:.03},.598).to(cap(3),{autoAlpha:0,y:-16,duration:.025},.692)
  .fromTo(cap(4),{autoAlpha:0,y:22},{autoAlpha:1,y:0,duration:.03},.812).to(cap(4),{autoAlpha:0,y:-16,duration:.025},.866)
  .fromTo('.sc-pair',{autoAlpha:0,y:22},{autoAlpha:1,y:0,duration:.035},.945)
  .set({},{},1);
 timelines.push(lens,film,show,showTween);
}

/* ── reveals ── */
const pendingReveals=new Set();
function stagger(){
 $$('[data-split]').forEach(el=>el.querySelectorAll('.line').forEach((line,i)=>line.style.setProperty('--i',i)));
 const groups=new Map();$$('[data-reveal],[data-split]').forEach(el=>{const p=el.parentElement;if(!groups.has(p))groups.set(p,[]);groups.get(p).push(el)});
 groups.forEach(list=>list.forEach((el,i)=>{if(!el.style.getPropertyValue('--d'))el.style.setProperty('--d',(i*.09).toFixed(2)+'s')}));
}
const io='IntersectionObserver' in window?new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-in');pendingReveals.delete(entry.target);io.unobserve(entry.target)}}),{rootMargin:'0px 0px -10% 0px'}):null;
function armReveals(){
 $$('[data-reveal],[data-split]').forEach(el=>{
  if(el.closest('.hero')||(cine&&el===cinemaOutroText))return;
  if(!cine){el.classList.add('is-in');return;}
  pendingReveals.add(el);io?.observe(el);
 });
}
function revealPending(H){if(!pendingReveals.size)return;for(const el of pendingReveals){const r=el.getBoundingClientRect();if(r.top<H*.92&&r.bottom>0&&r.width>0){el.classList.add('is-in');pendingReveals.delete(el);io?.unobserve(el)}}}

/* ── anchored component tags ── */
function placeTags(tags,W,H,pointFor,visibility){
 const s3=story3d(),placed=[];
 for(const [i,tag] of tags.entries()){
  const v=visibility(tag,i);let shown=v>.003;
  if(shown){
   const world=pointFor(tag.dataset.anchor,s3,tag.dataset.side),xy=world&&project('horizon',[world])?.[0];
   if(!xy){shown=false}else{const x=xy[0]*W,y=xy[1]*H;if(x<-40||x>W+40||y<-40||y>H+40)shown=false;else{put(tag,'--tx',x.toFixed(1)+'px');put(tag,'--ty',y.toFixed(1)+'px');const label=tag._label??=tag.querySelector('span'),lw=label.offsetWidth+44;let left=compactQuery.matches?i%2===1:x>W*.66;if(!left&&x+lw>W-10)left=true;else if(left&&x-lw<10)left=false;tag.classList.toggle('is-left',left);
     // Never let two labels collide: a tag whose label box overlaps one already shown waits its turn.
     const top=tag.dataset.side==='below'?y+16:y-52,box=[left?x-lw:x,top,left?x:x+lw,top+26];if(placed.some(b=>box[0]<b[2]+6&&box[2]>b[0]-6&&box[1]<b[3]+4&&box[3]>b[1]-4))shown=false;else placed.push(box)}}
  }
  put(tag,'opacity',shown?v.toFixed(3):'0');put(tag,'--draw',shown?smooth(0,1,v*1.4).toFixed(3):'0');
 }
}

/* ── the paint loop ── */
let navHidden=false,lastTone='',lastChapter='',frameCount=0,lastStoryY=-1,storyActive=false,screenImageSet=false;
function paint(now){
 raf=0;frameCount++;
 const dt=Math.min((now-lastPaint)/1000,.06);lastPaint=now;
 const W=innerWidth,H=innerHeight;if(W<2||H<2){schedule();return;}
 const sy=scrollY,dy=sy-lastScrollY,moved=Math.abs(dy)/H;lastScrollY=sy;
 scrollEnergy=Math.max(moved,scrollEnergy*Math.exp(-dt*8));
 if(moved>0)aliveUntil=now+1400;
 const compact=compactQuery.matches;let needsFrames=false;
 if(!hasGSAP||!cine||!storyTween)storyScroll.y=sy;
 const y=storyScroll.y;if(Math.abs(y-lastStoryY)>.05){needsFrames=true;lastStoryY=y}

 // Chapter geometry (document coordinates for the tracks).
 const heroR=rectOf(hero),lensR=rectOf(lensTrack),cinemaR=rectOf(cinemaTrack),modelsR=rectOf(modelsSection),featuresR=rectOf(featuresSection),finalR=rectOf(finalSection);
 const lensTop=lensR.top+sy,lensLen=Math.max(1,lensR.height-H),cinemaTop=cinemaR.top+sy,cinemaLen=Math.max(1,cinemaR.height-H);
 const s3=story3d();
 if(s3&&!screenImageSet&&movieVideo){s3.setScreenImage(movieVideo.poster);s3.setScreenVideo?.(movieVideo);screenImageSet=true}
 // The film loads as the story approaches and plays only while it can be seen (pausing never rewinds it).
 if(cine&&sy>lensTop-H*1.5)prepareMovie();
 driveMovie(cine&&!document.hidden&&sy>cinemaTop-H*1.2&&sy<cinemaTop+cinemaLen+H*1.3);
 const keyId=[W,H,compact,!!s3].join('|');if(keyId!==storyKeysFor&&s3){storyKeys=buildStoryKeys(W/H,compact);storyKeysFor=keyId}

 // Hero: lights go down as the camera travels into the lens.
 const dim=cine?smooth(0,H*.82,sy):0;
 put(hero,'--dim',dim.toFixed(4));put(hero,'--hero-out',(cine?smooth(0,H*.13,sy):0).toFixed(4));put(hero,'--hero-shift',cine?Math.round(Math.min(sy,H*1.2)):0);
 const rgb=[230,224,215].map(v=>Math.round(lerp(v,11,dim)));
 put(lensSection,'--exp-top',cine?`rgb(${rgb.join(',')})`:'rgb(11,11,11)');

 // Which chapter owns the projector right now?
 const mid=H*.5;let scene='';
 if(cine){if(sy<cinemaTop+cinemaLen+H*.3&&(y<cinemaTop||(y-cinemaTop)/cinemaLen<.935)&&storyKeys)scene='story';}
 else if(heroR.bottom>H*.3)scene='hero';
 else{const lv=rectOf(lensVisual),cv=rectOf(cinemaVisual);if(lv.top<H*.75&&lv.bottom>H*.25)scene='lens-static';else if(cv.top<H*.75&&cv.bottom>H*.25)scene='cinema-static'}
 const scR=rectOf(showcaseTrack);
 // The showcase owns the products while its pinned layer covers most of the view (arriving or leaving).
 if(!scene&&cine&&scR.top<H*.5&&scR.bottom>H*.4)scene='showcase';
 if(!scene&&!cine){const slotsR=rectOf($('.sc-static'));if(slotsR.top<H*.8&&slotsR.bottom>H*.2)scene='showcase-static'}
 // The short-throw loads in the background so the showcase never waits for it. Setting a model up blocks the
 // page for a moment, so it starts while the page is at rest inside the story (never during the push into
 // the lens or a moving camera), or at the latest when the showcase is a few screens away.
 if(!frames.short.dataset.loading&&((sy>lensTop+lensLen*.12&&scrollEnergy<.0004&&now>aliveUntil-800&&Math.abs(y-sy)<2)||scR.top<H*3))loadModel('short');
 if(scR.top<H*2.5&&scR.bottom>-H)for(const m of ['horizon','short'])if(ready[m]&&!prewarmed[m]){prewarmed[m]=true;warmStep(m)}
 if(!scene){if(finalR.top<H*.62)scene='final';else if(modelsR.top<=mid&&modelsR.bottom>=mid)scene='models';else if(featuresR.top<=mid&&featuresR.bottom>=mid)scene='features';}

 // Story state (3D + chapter chrome).
 let st=null;
 if(scene==='story'){
  // The hero framing is taken where the layout put the product at the top of the page (it stays there while
  // the copy scrolls away).
  const fixed=rectOf(heroSlot);fixed.top+=sy;
  const heroPose=frameIntoSlot(fitView('horizon','front',fixed,'hero'),fixed,W,H);
  st=storyState(y,heroPose,storyKeys,lensTop,lensLen,cinemaTop,cinemaLen,W,H);
 }else if(scene==='lens-static'||scene==='cinema-static'){
  const slot=rectOf(scene==='lens-static'?lensVisual:cinemaVisual),keys=s3?buildStoryKeys(slot.width/slot.height,compact):null;
  if(keys){const pose=scene==='lens-static'?keyAt(keys.lens,.32):keyAt(keys.cinema,.5);st={pose:frameIntoSlot({...pose},slot,W,H),slot,intro:0,tilt:0,cover:0,opacity:1,story:scene==='lens-static'?{explode:1,spin:0,dark:0,power:0,reach:0,screen:0,beam:1,backdrop:1,kit:true,aperture:.55,iris:0,reveal:1,focus:Math.hypot(...pose.p.map((v,i)=>v-pose.t[i]))}:{explode:0,spin:0,dark:1,power:1,reach:1,screen:1,beam:1,backdrop:2,kit:false,aperture:0,iris:0,reveal:1}}}
  else scene='';
 }
 const storyScene=scene==='story'||scene==='lens-static'||scene==='cinema-static';
 if(s3){if(storyScene){s3.update(st.story);storyActive=true}else if(storyActive){s3.reset();storyActive=false}}

 // Chapter chrome driven by the same smoothed story.
 if(cine){
  const p=clamp((y-lensTop)/lensLen),q=clamp((y-cinemaTop)/cinemaLen);
  put(lensStage,'--note',(smooth(.28,.34,p)*(1-smooth(.62,.68,p))).toFixed(3));
  put(lensAtmos,'--glow','0');
  // The black cover follows the story, and is also held across each scene change until the first frame after
  // it is really on screen (a GPU hitch can never expose the change), then lifts over a short fade at least.
  let cover=0;
  if(scene==='story'&&st){
   if(st.story.kit!==coverState.kit){if(coverState.kit!==null){coverState.held=true;coverState.since=now}coverState.kit=st.story.kit}
   if(coverState.held&&(s3?.settled?.()??true)&&now-coverState.since>50){coverState.held=false;coverState.lift=now}
   const hold=coverState.held?1:clamp(1-(now-coverState.lift)/280);
   cover=Math.max(st.cover,hold);if(hold>0)needsFrames=true;
  }else coverState.kit=null;
  put(blackout,'opacity',cover.toFixed(3));
  put(cinemaBackdrop,'--movie',q>.875?'1':'0');
  put(cinemaBackdrop,'--movie-s',((storyKeys?.coverScale||1)*(1+.12*ease(smooth(.93,1,q)))).toFixed(4));
  put(cinemaBackdrop,'--movie-outro',smooth(.93,.99,q).toFixed(3));
  cinemaOutroText?.classList.toggle('is-in',q>.94);
  put(cinemaStage,'--stage-in',(1-smooth(0,.5,(H-cinemaR.bottom)/H)).toFixed(3));
  // Phones stack the intro above the projector: it stays hidden while it scrolls past the held product.
  put(cinemaStage,'--intro-in',compact?smooth(H*.15,0,cinemaR.top).toFixed(3):'1');
  const lensOn=scene==='story'&&y>=lensTop&&y<cinemaTop;
  placeTags(lensTags,W,H,(key,s,side)=>s?.anchors?.[key]?.(side),(tag,i)=>{if(!lensOn)return 0;const a=tag.dataset.set==='a'?[.36,.53]:[.53,.67],start=a[0]+i%3*.014;return smooth(start,start+.03,p)*(1-smooth(a[1]-.03,a[1],p))});
  if(scene==='story'&&s3&&ready.horizon){const lp=project('horizon',[s3.lensFront])?.[0];if(lp){put(lensAtmos,'--lx',(lp[0]*W).toFixed(1)+'px');put(lensAtmos,'--ly',(lp[1]*H).toFixed(1)+'px')}}
 }

 let settling=false,inkCover=0;
 const showcaseScene=scene==='showcase'||scene==='showcase-static';
 if(showcaseScene){inkCover=paintShowcase(W,H,compact,dt,scene==='showcase-static');showcaseActive=true;needsFrames=needsFrames||now<aliveUntil}
 else if(showcaseActive){showcaseActive=false;for(const m of ['horizon','short']){window.projectors?.[m]?.finishFX?.set({mode:'a'});window.projectors?.[m]?.finishFX?.economy?.()}configure('short',{finish});lastKeys.short=lastKeys.horizon=''}
 // Outside the showcase the portable wears porcelain only where the explorer's finish choice applies
 // (the explorer and the feature stage below it); every authored chapter stays graphite.
 if(!showcaseScene){const fx=window.projectors?.horizon?.finishFX,want=finish==='white'&&selected==='horizon'&&(scene==='models'||scene==='features')?'b':'a';
  if(fx&&fx.mode!==want&&(fx.ready||want==='b')){fx.set({mode:want});window.projectors.horizon.invalidate?.()}}
 for(const model of (showcaseScene?[]:['short','horizon'])){
  const frame=frames[model],state=placement[model];
  const owns=scene==='hero'||storyScene?model==='horizon':(scene==='models'||scene==='features')?model===selected:false;
  let slot=null;
  if(owns)slot=scene==='hero'?heroSlot:scene==='models'?$('#explorer-slot'):scene==='features'?$('.feature-visual .model-slot'):null;
  let rect=scene==='story'?{left:0,top:0,width:W,height:H,right:W,bottom:H}:st?.slot||(slot?rectOf(slot):null);
  if(!owns)rect=null;
  let sceneOpacity=st?.opacity??1,story=scene==='models'?'':storyScene?'cine':scene==='hero'?'flight':scene,clip='none',mask='none';
  if(rect&&(scene==='lens-static'||scene==='cinema-static'))clip=`inset(${Math.max(0,Math.round(rect.top))}px ${Math.max(0,Math.round(W-rect.right))}px ${Math.max(0,Math.round(H-rect.bottom))}px ${Math.max(0,Math.round(rect.left))}px round 8px)`;
  if(rect&&scene==='features'){const cx=rect.left+rect.width/2,cy=rect.top+rect.height/2;mask=`radial-gradient(ellipse ${Math.round(rect.width*.7)}px ${Math.round(rect.height*.74)}px at ${Math.round(cx)}px ${Math.round(cy)}px,#000 70%,transparent 100%)`}
  const shown=!!rect&&rect.top+rect.height>0&&rect.top<H&&rect.width>0&&sceneOpacity>.003;
  if(!shown){
   if(!state.inactive){configure(model,{active:false,rotate:false});state.inactive=true}
   state.layout=null;state.scene='';state.op=0;put(frame,'opacity','0');frame.classList.remove('is-visible','is-interactive');frame.tabIndex=-1;continue;
  }
  state.inactive=false;
  const sceneKey=storyScene?'story':scene;
  if(state.scene!==sceneKey){state.scene=sceneKey;state.op=0;state.layout=null;lastKeys[model]='';}
  // Content-following scenes glide a touch behind the page (restrained parallax); the explorer stays locked.
  const follow=cine&&(scene==='features'||scene==='final')?1-Math.pow(1-.16,dt*60):1;
  if(!state.layout)state.layout={...rect};
  const layout=state.layout;
  for(const property of ['left','top','width','height']){layout[property]+=(rect[property]-layout[property])*follow;if(Math.abs(rect[property]-layout[property])>.5)settling=true}
  const target=ready[model]?1:0;state.op+=(target-state.op)*(cine?1-Math.exp(-dt*6):1);if(Math.abs(target-state.op)>.004)settling=true;else state.op=target;
  frame.classList.toggle('is-visible',ready[model]);
  frame.classList.toggle('is-interactive',scene==='models'&&ready[model]);
  frame.tabIndex=scene==='models'&&ready[model]?0:-1;
  put(frame,'opacity',(state.op*sceneOpacity).toFixed(3));
  const viewport=scene==='models'?layout:{left:0,top:0,width:W,height:H};
  for(const property of ['left','top','width','height'])put(frame,property,Math.round(viewport[property])+'px');
  put(frame,'clipPath',clip);put(frame,'webkitMaskImage',mask);put(frame,'maskImage',mask);

  if(storyScene&&model==='horizon'){
   if(ready.horizon&&!revealed&&cine&&sy<lensTop){revealed=true;configure('horizon',{reveal:1900})}
   const pose=st.pose,vo=scene==='story'?st.vo:pose.viewOffset;
   // The cursor and drag turn the projector only while it rests in the hero; scroll sequences own the camera.
   const turn=heroOrbit();
   configure('horizon',{active:true,story:'cine',reduced:!cine,width:W,height:H,viewOffset:vo||null,free:false,rotate:false,pointer,scrolling:scrollEnergy,live:st.story.power>.01&&st.opacity>.01,cine:{p:pose.p,t:pose.t,fov:pose.fov,intro:st.intro,tilt:st.tilt,orbit:turn.goal,stiff:turn.stiff,pivot:H_CENTER}});
   // Keep painting only while the story moves (scroll smoothing, pointer, tags); the scene sleeps otherwise.
   lastKeys.horizon='story';if(now<aliveUntil)needsFrames=true;continue;
  }
  const view=scene==='hero'?'front':scene==='models'?currentView:scene==='features'?(feature==='design'?'hero':feature==='space'?'rear':'front'):'hero';
  const framing=layout;
  let goal=fitView(model,view,framing,scene);
  if(scene!=='models')goal=frameIntoSlot(goal,framing,W,H);
  configure(model,{active:true,viewOffset:goal.viewOffset||null,reduced:!cine,width:Math.round(viewport.width),height:Math.round(viewport.height),story,frame:196,screenScale:0,damping:11,pointer,pointerScale:scene==='final'?layout.height/H:1,scrolling:scrollEnergy});
  const key=[scene,view,Math.round(layout.width),Math.round(layout.height),Math.round(layout.left),Math.round(layout.top),zoom].join('|');
  if(key!==lastKeys[model]){
   lastKeys[model]=key;
   configure(model,{p:goal.p,t:goal.t,fov:goal.fov,active:true,free:false,rotate:false,reduced:!cine,finish:model==='short'?finish:undefined});
   if(scene==='models')setTimeout(()=>{if(lastKeys[model]===key&&placement[model].scene==='models'&&selected===model)configure(model,{free:true,rotate:rotating})},cine?1100:80);
  }
 }

 // Navigation tone, chapter, progress, auto-hide.
 let tone='light',chapter=chapters[0];
 for(const section of chapters){const r=section.getBoundingClientRect();if(r.top<=36&&r.bottom>36){tone=section.dataset.tone||'dark';if(section===hero&&dim>.5)tone='dark';if(section===modelsSection&&showcaseScene&&inkCover>.5)tone='dark';}if(r.top<=H*.42&&r.bottom>H*.42)chapter=section}
 if(chapter.classList.contains('site-footer'))chapter=finalSection;
 if(tone!==lastTone){lastTone=tone;nav.dataset.tone=tone;refreshMenuEdge();themeMeta?.setAttribute('content',tone==='dark'?'#0b0b0b':'#f4f1ec')}
 const chapterKey=chapter.dataset.chapter||'00';
 if(chapterKey!==lastChapter){
  lastChapter=chapterKey;$('.nav-chapter-index').textContent=chapterKey;const title=$('.nav-chapter-title');title.textContent=chapter.dataset.title||'';
  if(cine&&frameCount>2)title.animate?.([{transform:'translateY(100%)',opacity:0},{transform:'none',opacity:1}],{duration:650,easing:'cubic-bezier(.16,1,.3,1)'});
 }
 put(nav,'--progress',(sy/Math.max(1,root.scrollHeight-H)).toFixed(4));
 nav.classList.toggle('is-scrolled',sy>12);
 if(!menuOpen&&!nav.contains(document.activeElement)){if(dy>3&&sy>H*.7)navHidden=true;else if(dy<-3||sy<H*.4)navHidden=false}else navHidden=false;
 nav.classList.toggle('is-hidden',navHidden&&cine);

 // Finale: the rule draws across and the warm light rises as the section arrives (both directions).
 if(cine)put(finalSection,'--final-in',ease(clamp((H*.92-finalR.top)/(H*.6))).toFixed(4));
 if(frameCount%4===0)revealPending(H);

 if(settling||scrollEnergy>.001||needsFrames||navigationRaf||now<aliveUntil)schedule();
}
function schedule(){if(!raf)raf=requestAnimationFrame(paint)}

/* ── events ── */
addEventListener('scroll',schedule,{passive:true});
const coverState={kit:null,held:false,since:0,lift:-1e9};
/* ── Hero: the projector turns with the cursor and can be dragged ──
   Only goals are set here (radians). The scene follows them on a critically damped spring, around the
   product's own centre, and holds perfectly still when nothing is touching it. */
const heroTurn={drag:[0,0],dragging:false,id:-1,x:0,y:0,until:0};
const HOVER={yaw:6*DEG,pitch:3.2*DEG},REACH={yaw:56*DEG,up:22*DEG,down:4.5*DEG};   // a hint from the cursor; more, with resistance, under a drag
const softLimit=(v,limit)=>limit*Math.tanh(v/limit);
function heroOrbit(){
 if(heroTurn.dragging)return {goal:[softLimit(heroTurn.drag[0],REACH.yaw),softLimit(heroTurn.drag[1],heroTurn.drag[1]>0?REACH.up:REACH.down)],stiff:16};
 // The product follows the cursor as it would follow a drag: its face turns towards the pointer.
 return {goal:[-pointer.x*HOVER.yaw,pointer.y*HOVER.pitch],stiff:performance.now()<heroTurn.until?4.5:8};
}
if(heroSlot){
 const release=e=>{if(e.pointerId!==heroTurn.id)return;heroTurn.dragging=false;heroTurn.id=-1;heroTurn.until=performance.now()+1500;heroSlot.classList.remove('is-grabbing');aliveUntil=performance.now()+1800;schedule()};
 heroSlot.addEventListener('pointerdown',e=>{
  if(!cine||e.button>0||scrollY>innerHeight*.05)return;
  const from=heroOrbit().goal;heroTurn.drag=[from[0],from[1]];                       // start from where the cursor already holds it
  heroTurn.dragging=true;heroTurn.id=e.pointerId;heroTurn.x=e.clientX;heroTurn.y=e.clientY;
  try{heroSlot.setPointerCapture(e.pointerId)}catch{}heroSlot.classList.add('is-grabbing');schedule();
 });
 heroSlot.addEventListener('pointermove',e=>{
  if(!heroTurn.dragging||e.pointerId!==heroTurn.id)return;
  const k=1.9/Math.max(260,heroSlot.offsetWidth);                                     // the slot's width is about 110° of travel
  heroTurn.drag[0]-=(e.clientX-heroTurn.x)*k;if(e.pointerType!=='touch')heroTurn.drag[1]+=(e.clientY-heroTurn.y)*k*.6;
  heroTurn.x=e.clientX;heroTurn.y=e.clientY;aliveUntil=performance.now()+600;schedule();
 });
 for(const type of ['pointerup','pointercancel','lostpointercapture'])heroSlot.addEventListener(type,release);
 // Scrolling takes the camera back at once.
 addEventListener('scroll',()=>{if(heroTurn.dragging&&scrollY>innerHeight*.05)release({pointerId:heroTurn.id})},{passive:true});
}
addEventListener('pointermove',event=>{if(event.pointerType==='touch')return;pointer={x:clamp(event.clientX/innerWidth*2-1,-1,1),y:clamp(event.clientY/innerHeight*2-1,-1,1)};aliveUntil=performance.now()+600;schedule()},{passive:true});
document.addEventListener('pointerleave',()=>{pointer={x:0,y:0};schedule()});
addEventListener('resize',()=>{lastKeys.short=lastKeys.horizon='';placement.short.layout=placement.horizon.layout=null;storyKeysFor='';moveTabIndicator();schedule()});
document.addEventListener('visibilitychange',()=>{if(!document.hidden){lastPaint=performance.now();schedule()}});
reduceQuery.addEventListener?.('change',()=>{cine=!reduceQuery.matches;root.classList.toggle('rm',!cine);lastKeys.short=lastKeys.horizon='';if(!cine)$$('[data-reveal],[data-split]').forEach(el=>el.classList.add('is-in'));buildScrollStory();ST?.refresh();schedule()});
function sceneReady(model){ready[model]=true;frames[model].dataset.ready='true';lastKeys[model]='';$('#viewer-loading').hidden=ready[selected];storyKeysFor='';schedule()}
addEventListener('xgimi-model-ready',event=>sceneReady(event.detail));
addEventListener('xgimi-model-rendered',event=>{
 const model=event.detail;frames[model].dataset.rendered='true';
 if(!ready[model])sceneReady(model);
 if(model==='horizon'){$$('[data-preview="horizon"]').forEach(image=>image.classList.add('is-loaded'));$('#scene-status').hidden=true;}
});
addEventListener('xgimi-model-unavailable',event=>showProductPreview(event.detail));
addEventListener('xgimi-orbit',()=>$$('[data-view]').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')}));
if(hasGSAP){G.ticker.add(()=>{if(storyTween&&Math.abs(storyScroll.y-lastStoryY)>.05)schedule()});addEventListener('load',()=>ST.refresh())}

/* ── start ── */
// The ink layer carries the same copy as the paper layer, so text inverts exactly at the seam.
stagger();armReveals();buildScrollStory();
loadModel('horizon');
chooseModel('horizon',{animate:false});
let started=false;
function intro(){
 if(started)return;started=true;root.classList.add('is-ready');
 const items=[['.hero-headline',.25],['.hero-subtitle',.6],['.hero-actions',.72]];
 for(const [selector,delay] of items){const el=$(selector);if(!el)continue;el.style.setProperty('--d',delay+'s');el.classList.add('is-in')}
 moveTabIndicator();ST?.refresh();schedule();
}
(document.fonts?.ready||Promise.resolve()).then(()=>requestAnimationFrame(intro));
setTimeout(intro,1200);
schedule();
