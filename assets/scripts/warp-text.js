// Warp Text for the oversized XGIMI wordmarks (hero and footer).
//
// A plain-JavaScript adaptation of React Bits' "Warp Text" (https://reactbits.dev/text-animations/warp-text,
// © David Haz, MIT + Commons Clause). The fragment shader keeps the original's structure: a pointer lens
// that bulges the text, ripple rings inside it and a refraction split along the warp. It is drawn here with
// raw WebGL2 (no React, no OGL) and samples the existing wordmark image instead of rasterising typed text,
// so font, scale, colour and position are exactly the page's own.
//
// Differences from the original, on purpose:
//   - no ambient noise drift and no idle wandering lens: nothing moves unless the cursor does;
//   - the ripple advances with pointer travel, not with time, so it settles when the cursor rests;
//   - the refraction split fades with the lens, so the mark is perfectly sharp at rest;
//   - the loop stops once everything has settled; touch-only devices and reduced motion keep the image.
(()=>{
 const hosts=[...document.querySelectorAll('[data-warp]')];if(!hosts.length)return;
 const reduce=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover: hover) and (pointer: fine)');
 const VERT=`#version 300 es
in vec2 position;
out vec2 vUv;
void main(){vUv=position*.5+.5;gl_Position=vec4(position,0.,1.);}`;
 const FRAG=`#version 300 es
precision highp float;
uniform sampler2D uTextTexture;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uPointerActive;
uniform float uTime;
uniform float uPointerInfluence;
uniform float uPointerStrength;
uniform float uRefraction;
uniform float uRipple;
uniform float uRippleFrequency;
in vec2 vUv;
out vec4 fragColor;

vec4 sampleText(vec2 uv){
  if(uv.x<0.||uv.x>1.||uv.y<0.||uv.y>1.)return vec4(0.);
  return texture(uTextTexture,uv);
}

void main(){
  vec2 uv=vUv;
  float aspect=uResolution.x/max(uResolution.y,1.);

  vec2 pointerDelta=uv-uPointer;
  vec2 aspectDelta=vec2(pointerDelta.x*aspect,pointerDelta.y);
  float dist=length(aspectDelta);
  float radius=max(uPointerInfluence,.001);
  float t=clamp(dist/radius,0.,1.);
  float lens=smoothstep(radius,0.,dist)*uPointerActive;
  float bulge=t*(1.-t)*(1.-t)*6.75*uPointerActive;
  vec2 dir=dist>.0001?vec2(aspectDelta.x/aspect,aspectDelta.y)/dist:vec2(0.);

  float rippleWave=sin(dist*uRippleFrequency-uTime*4.2)*.5+.5;
  float rippleRing=(rippleWave-.5)*uRipple;
  vec2 pointerWarp=-dir*bulge*uPointerStrength*.045;
  pointerWarp+=dir*rippleRing*bulge*uPointerStrength*.016;

  vec2 displaced=uv+pointerWarp;
  float splitLen=length(pointerWarp);
  vec2 splitDir=splitLen>.00001?pointerWarp/splitLen:vec2(.7071,.7071);
  vec2 split=splitDir*uRefraction*.16*(.35+lens*1.65)*uPointerActive;

  vec4 base=sampleText(displaced);
  vec4 plus=sampleText(displaced+split),minus=sampleText(displaced-split);
  float a=max(max(plus.a,base.a),minus.a);
  vec3 color=vec3(plus.r*plus.a,base.g*base.a,minus.b*minus.a)/max(a,.0001)+lens*base.a*.055;
  fragColor=vec4(color,a);
}`;

 function create(host){
  const img=host.querySelector('img');if(!img)return null;
  const opt=(key,fallback)=>{const v=parseFloat(host.dataset[key]);return Number.isFinite(v)?v:fallback};
  // React Bits defaults are tuned for a paragraph-sized block; a single wide wordmark wants a broader, calmer lens.
  const P={influence:opt('warpInfluence',1.05),strength:opt('warpStrength',1),refraction:opt('warpRefraction',.006),ripple:opt('warpRipple',.18),frequency:opt('warpFrequency',7.5)};
  let canvas=null,gl=null,program=null,texture=null,uniforms={},raf=0,visible=false,ready=false,last=0,pad=0,version=0;
  const pointer={x:.5,y:.5,tx:.5,ty:.5,active:0,goal:0,flow:0,time:0};

  function build(){
   if(canvas||reduce.matches||!fine.matches)return;
   canvas=document.createElement('canvas');canvas.className='warp-canvas';canvas.setAttribute('aria-hidden','true');
   gl=canvas.getContext('webgl2',{alpha:true,premultipliedAlpha:false,antialias:false,powerPreference:'low-power'});
   if(!gl){canvas=null;return}
   const shader=(type,source)=>{const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s};
   try{
    program=gl.createProgram();gl.attachShader(program,shader(gl.VERTEX_SHADER,VERT));gl.attachShader(program,shader(gl.FRAGMENT_SHADER,FRAG));gl.bindAttribLocation(program,0,'position');gl.linkProgram(program);
    if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program));
   }catch(error){console.warn('WarpText: shader could not be built.',error);dispose();return}
   gl.useProgram(program);
   const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);gl.enableVertexAttribArray(0);gl.vertexAttribPointer(0,2,gl.FLOAT,false,0,0);
   for(const name of ['uTextTexture','uResolution','uPointer','uPointerActive','uTime','uPointerInfluence','uPointerStrength','uRefraction','uRipple','uRippleFrequency'])uniforms[name]=gl.getUniformLocation(program,name);
   texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);
   for(const [k,v] of [[gl.TEXTURE_MIN_FILTER,gl.LINEAR],[gl.TEXTURE_MAG_FILTER,gl.LINEAR],[gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE],[gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE]])gl.texParameteri(gl.TEXTURE_2D,k,v);
   gl.disable(gl.BLEND);gl.disable(gl.DEPTH_TEST);gl.clearColor(0,0,0,0);
   gl.uniform1i(uniforms.uTextTexture,0);gl.uniform1f(uniforms.uPointerInfluence,P.influence);gl.uniform1f(uniforms.uPointerStrength,P.strength);gl.uniform1f(uniforms.uRefraction,P.refraction);gl.uniform1f(uniforms.uRipple,P.ripple);gl.uniform1f(uniforms.uRippleFrequency,P.frequency);
   canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();dispose()});
   host.appendChild(canvas);rasterize();
  }

  // The mark is drawn from the page's own image, at device resolution, with the image's own CSS filter.
  async function rasterize(){
   if(!canvas)return;const v=++version;
   try{await img.decode?.()}catch{}
   if(!canvas||v!==version)return;
   const w=img.offsetWidth,h=img.offsetHeight;if(w<2||h<2)return;
   const dpr=Math.min(window.devicePixelRatio||1,2);pad=Math.max(8,Math.round(h*.09));
   const cw=Math.round((w+pad*2)*dpr),ch=Math.round((h+pad*2)*dpr);
   const source=document.createElement('canvas');source.width=cw;source.height=ch;const ctx=source.getContext('2d');
   const filter=getComputedStyle(img).filter;let filtered=false;
   if(filter&&filter!=='none'&&'filter' in ctx){ctx.filter=filter;filtered=true}
   ctx.imageSmoothingQuality='high';ctx.drawImage(img,pad*dpr,pad*dpr,w*dpr,h*dpr);
   canvas.classList.toggle('keeps-filter',!filtered&&filter!=='none'); // older engines: the element carries the filter instead
   canvas.style.setProperty('--warp-pad',pad+'px');canvas.width=cw;canvas.height=ch;
   try{
    gl.viewport(0,0,cw,ch);gl.bindTexture(gl.TEXTURE_2D,texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false);
    gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,source);
   }catch(error){console.warn('WarpText: the wordmark could not be used as a texture.',error);dispose();return}
   gl.uniform2f(uniforms.uResolution,cw,ch);
   ready=true;host.classList.add('is-warp');draw();
  }

  function draw(){
   if(!ready)return;
   gl.uniform2f(uniforms.uPointer,pointer.x,pointer.y);gl.uniform1f(uniforms.uPointerActive,pointer.active);gl.uniform1f(uniforms.uTime,pointer.time);
   gl.clear(gl.COLOR_BUFFER_BIT);gl.drawArrays(gl.TRIANGLES,0,3);
  }

  function frame(now){
   raf=0;if(!ready||!visible)return;
   const dt=Math.min(.05,last?(now-last)/1000:1/60);last=now;
   const follow=1-Math.exp(-dt*(pointer.goal?8:3)),px=pointer.x,py=pointer.y;
   pointer.x+=(pointer.tx-pointer.x)*follow;pointer.y+=(pointer.ty-pointer.y)*follow;
   pointer.active+=(pointer.goal-pointer.active)*(1-Math.exp(-dt*4.5));
   // The ripple is carried by the cursor's own travel and comes to rest with it.
   const aspect=canvas.width/Math.max(1,canvas.height),travel=Math.hypot((pointer.x-px)*aspect,pointer.y-py);
   pointer.flow+=(travel/Math.max(dt,1e-3)-pointer.flow)*(1-Math.exp(-dt*5));pointer.time+=Math.min(pointer.flow,3)*dt*1.6;
   draw();
   const settled=Math.abs(pointer.goal-pointer.active)<.002&&Math.hypot(pointer.tx-pointer.x,pointer.ty-pointer.y)<.0004&&pointer.flow<.004;
   if(settled){pointer.active=pointer.goal;pointer.flow=0;last=0;draw()}else raf=requestAnimationFrame(frame);
  }
  const wake=()=>{if(!raf&&ready&&visible)raf=requestAnimationFrame(frame)};

  function onMove(event){
   if(!ready||!visible||event.pointerType==='touch')return;
   const r=canvas.getBoundingClientRect();if(r.width<2||r.height<2)return;
   const x=(event.clientX-r.left)/r.width,y=1-(event.clientY-r.top)/r.height,reach=P.influence*.6,ax=r.height/r.width;
   // Only while the cursor is on or beside the mark; hidden marks (scrolled or faded away) do not react.
   const inside=x>-reach*ax&&x<1+reach*ax&&y>-reach&&y<1+reach&&parseFloat(getComputedStyle(host).opacity)>.01;
   if(inside){if(!pointer.goal&&pointer.active<.02){pointer.x=x;pointer.y=y}pointer.tx=x;pointer.ty=y;pointer.goal=1;wake()}
   else if(pointer.goal){pointer.goal=0;wake()}
  }
  const onLeave=()=>{if(pointer.goal){pointer.goal=0;wake()}};

  function dispose(){
   if(raf)cancelAnimationFrame(raf);raf=0;ready=false;version++;host.classList.remove('is-warp');
   if(gl){try{gl.getExtension('WEBGL_lose_context')?.loseContext()}catch{}}
   canvas?.remove();canvas=null;gl=null;program=null;texture=null;uniforms={};pointer.active=pointer.goal=pointer.flow=0;
  }

  // A context is held only while the mark is on screen.
  new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)build();else dispose()},{rootMargin:'120px'}).observe(host);
  new ResizeObserver(()=>{if(canvas)rasterize()}).observe(img);
  addEventListener('pointermove',onMove,{passive:true});document.addEventListener('pointerleave',onLeave);addEventListener('blur',onLeave);
  const policy=()=>{if(reduce.matches||!fine.matches)dispose();else if(visible)build()};
  reduce.addEventListener('change',policy);fine.addEventListener('change',policy);
  return {dispose};
 }
 window.xgimiWarp=hosts.map(create);
})();
