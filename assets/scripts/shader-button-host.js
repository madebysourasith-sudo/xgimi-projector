// Vanilla host for the owner's exact ShaderButtons study document.
// The archived source, its Three.js build, shaders, particles and physics stay intact.
(()=>{
 const host=document.getElementById('hero-shader-button');if(!host)return;
 const studyIds=['liquid-glass','intelligence','holo-foil','particles','voice-orb','water','dither-hold','lava-lamp','gold','ink'];
 const sourceNode=document.getElementById('shader-button-source');
 async function source(){
  if(sourceNode){const response=await fetch(JSON.parse(sourceNode.textContent));if(!response.ok)throw Error('Shader source failed: '+response.status);return await response.text();}
  return await(await fetch('effects/star-portal/src/shaders/shader-buttons/sources/shader-buttons.html')).text();
 }
 let frame=null,visible=true,disposed=false,navigationTimer=0,revision=0;
 // The host may tint the study at the document boundary (CSS filter only) to sit in the page palette.
 const tint=(key,fallback)=>Number.isFinite(parseFloat(host.dataset[key]))?parseFloat(host.dataset[key]):fallback;
 const options={variant:host.dataset.variant||'particles',mode:host.dataset.mode||'dark',hue:tint('hue',0),saturation:tint('saturation',1),brightness:tint('brightness',1)};
 // Only layout, typography and CTA copy are changed at the document boundary.
 function focusedDocument(original,config){
  const params=new URLSearchParams({only:config.variant,zoom:'4',theme:config.mode});
  const font=[...document.querySelectorAll('style')].map(s=>s.textContent.match(/@font-face\{font-family:Outfit;[^}]+\}/)?.[0]||'').find(Boolean)||'';
  const css=`${font}
html,body,main{height:100%;min-height:100%;overflow:hidden;background:transparent!important;color-scheme:light!important}
main{max-width:none;padding:0;display:block}
.list-header,.list-footer,.number,.study-meta,.button-row>span:last-child{display:none!important}
.button-list{width:100%;height:100%;display:block}
.button-row,.magnified .button-row{width:100%;height:100%;min-height:0;padding:0;border:0;display:block}
.stage-frame,.magnified .stage-frame{position:absolute;inset:0;width:100%;height:100%;overflow:hidden;grid-column:auto;grid-row:auto}
.stage,.magnified .stage{width:100%;height:100%!important;min-width:0!important}
.artboard{transform:translate(-50%,-50%) scale(var(--xgimi-study-scale, .5))!important}
.artboard.s-particles .ps-btn{font-family:Outfit,sans-serif;font-weight:500;font-size:var(--xgimi-label-size,34px);letter-spacing:0;min-height:var(--xgimi-hit-height,136px)}
.artboard.s-particles .ps-btn:focus-visible{outline-width:4px;outline-offset:10px}
`;
  const bridge=`<script>(()=>{
const fit=()=>{const s=Math.min(innerWidth/760,innerHeight/300);document.documentElement.style.setProperty('--xgimi-study-scale',s);document.documentElement.style.setProperty('--xgimi-label-size',(17/s)+'px');document.documentElement.style.setProperty('--xgimi-hit-height',Math.max(136,52/s)+'px')};fit();addEventListener('resize',fit);new ResizeObserver(fit).observe(document.documentElement);
const label=document.querySelector('.ps-label'),done=document.querySelector('.ps-done');if(label)label.textContent='Buy now';if(done){done.lastChild.textContent='Opening…';}document.querySelector('.ps-btn')?.setAttribute('aria-label','Buy now');
const status=document.getElementById('status');if(status)new MutationObserver(()=>{if(status.textContent==='You’re on the list')status.textContent='Opening the shop'}).observe(status,{childList:true});
const button=document.querySelector('.ps-btn');if(button)new MutationObserver(()=>{if(button.classList.contains('is-done'))parent.postMessage({type:'xgimi-shader-cta'},'*')}).observe(button,{attributes:true,attributeFilter:['class']});
addEventListener('pagehide',()=>{for(const c of document.querySelectorAll('canvas')){if(c._three){c._three.dispose();c._three.forceContextLoss();}}},{once:true});
parent.postMessage({type:document.querySelector('[data-renderer=fallback]')?'xgimi-shader-unavailable':'xgimi-shader-ready'},'*');
})();<\/script>`;
  return original.replace('</style>',css+'</style>')
   .replace('const params=new URLSearchParams(location.search);',`const params=new URLSearchParams(${JSON.stringify(params.toString())});`)
   .replace('</body>',bridge+'</body>');
 }
 function unmount(){revision++;if(frame){frame.remove();frame=null;}host.dataset.state='paused';}
 async function mount(){
  if(frame||disposed||!visible)return;const version=++revision;host.dataset.state='loading';
  try{const authored=await source();if(disposed||!visible||version!==revision)return;
   frame=document.createElement('iframe');frame.title='Buy now — Particle Swarm';frame.setAttribute('sandbox','allow-scripts');frame.loading='eager';
   frame.style.filter=`hue-rotate(${options.hue}deg) saturate(${options.saturation}) brightness(${options.brightness})`;
   frame.srcdoc=focusedDocument(authored,options);host.appendChild(frame);
  }catch(error){host.dataset.state='unavailable';console.error('ShaderButtons failed:',error);}
 }
 function message(event){
  if(!frame||event.source!==frame.contentWindow)return;
  if(event.data?.type==='xgimi-shader-ready')host.dataset.state='ready';
  if(event.data?.type==='xgimi-shader-unavailable'){unmount();host.dataset.state='unavailable';}
  if(event.data?.type==='xgimi-shader-cta'){
   clearTimeout(navigationTimer);navigationTimer=setTimeout(()=>{
    const target=document.getElementById('final');target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});history.replaceState(null,'','#final');
   },matchMedia('(prefers-reduced-motion: reduce)').matches?0:450);
  }
 }
 addEventListener('message',message);
 const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible&&!document.hidden)mount();else unmount();},{rootMargin:'80px'});observer.observe(host);
 function visibility(){if(document.hidden)unmount();else if(visible)mount();}document.addEventListener('visibilitychange',visibility);
 // Public family boundary; only the selected study allocates a renderer.
 window.ShaderButtons=(config={})=>{if(config.variant&&!studyIds.includes(config.variant))throw Error('Unsupported shader study');Object.assign(options,config);unmount();mount();};
 addEventListener('pagehide',()=>{disposed=true;clearTimeout(navigationTimer);observer.disconnect();removeEventListener('message',message);document.removeEventListener('visibilitychange',visibility);unmount();},{once:true});
 mount();
})();
