window.startXgimiScene=window.startXgimiScene||{};window.startXgimiScene['horizon']=async()=>{
const assetNode=window.document.getElementById('xgimi-assets');
const embeddedAssets=window.xgimiEmbeddedAssets||(window.xgimiEmbeddedAssets=assetNode?JSON.parse(assetNode.textContent):await(await fetch('assets-pack.json')).json());
const sceneHost=window.document.getElementById('horizon-frame');
const sceneRoot=sceneHost.attachShadow({mode:'open'});
sceneRoot.innerHTML="\u003cstyle>\n*{box-sizing:border-box}html,body{margin:0;width:100%;height:100%;overflow:hidden}body{font-family:Arial,Helvetica,sans-serif;color:#24231f;background:#bcb8b1}button{font:inherit}canvas{display:block;width:100%;height:100%;touch-action:none;outline:none}#scene{position:absolute;inset:0}header{position:absolute;top:32px;left:38px;right:38px;display:flex;justify-content:space-between;align-items:center;pointer-events:none}.brand{font-weight:700;font-size:23px;letter-spacing:-1.1px}.brand span{font-weight:400;font-size:10px;letter-spacing:2px;margin-left:19px;padding-left:20px;border-left:1px solid #514f4838;vertical-align:middle}.edition{text-align:right;font-size:9px;letter-spacing:2px;line-height:1.8}.edition strong{font-weight:400;font-size:12px;letter-spacing:3px}.caption{position:absolute;left:38px;bottom:115px;pointer-events:none}.caption h1{font-size:13px;font-weight:400;letter-spacing:3.5px;margin:0 0 7px}.caption p{font-size:10px;letter-spacing:1.2px;color:#605d57;margin:0}.toolbar{position:absolute;bottom:33px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:5px;padding:6px;background:#f0ede5c4;backdrop-filter:blur(18px);border:1px solid #fffffe65;border-radius:13px;box-shadow:0 4px 22px #25201614;white-space:nowrap}.toolbar button,.actions button{border:0;cursor:pointer;background:transparent;border-radius:8px;color:#69655e;font-size:11px;padding:12px 17px;transition:background .2s,color .2s}.toolbar button:hover,.actions button:hover{background:#ffffff80;color:#24231f}.toolbar button.active{background:#33312d;color:#fff;box-shadow:0 2px 5px #0002}.divider{height:21px;width:1px;background:#77716530;margin:0 6px}.icon{display:flex;align-items:center;justify-content:center;padding:10px!important;min-width:36px}.icon svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round}.actions{position:absolute;right:32px;bottom:33px;display:flex;gap:4px}.actions button{background:#f0ede58f;border:1px solid #ffffff55;backdrop-filter:blur(10px);padding:12px}.hint{position:absolute;bottom:12px;left:50%;transform:translateX(-50%);font-size:9px;letter-spacing:.9px;color:#6e6860;pointer-events:none}#loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:#c4c0b9;z-index:10;font-size:11px;letter-spacing:3px;transition:opacity .6s}#loading.hide{opacity:0;pointer-events:none}.notice{position:absolute;top:90px;left:50%;transform:translateX(-50%);padding:10px 16px;background:#f5f2ecde;border-radius:8px;font-size:11px;opacity:0;transition:opacity .25s;pointer-events:none}.notice.show{opacity:1}button:focus-visible,.model-switcher a:focus-visible{outline:2px solid #797366;outline-offset:2px}.studio header,.studio .caption,.studio .toolbar,.studio .actions,.studio .hint{display:none}.zen header,.zen .caption,.zen .toolbar,.zen .actions,.zen .hint{opacity:0;pointer-events:none}\n@media(max-width:760px){header{top:22px;left:22px;right:22px}.brand{font-size:21px}.brand span{display:none}.edition{font-size:8px}.edition strong{font-size:10px}.caption{left:22px;bottom:125px}.toolbar{bottom:59px;max-width:96vw;gap:3px;padding:5px}.toolbar button{padding:11px 12px;font-size:10px}.divider{margin:0 2px}.actions{bottom:15px;right:18px}.hint{left:22px;transform:none;bottom:29px;font-size:8px}.caption h1{font-size:11px}.caption p{font-size:9px}}\n@media(prefers-reduced-motion:reduce){*{transition:none!important}}\n\n.model-switcher{z-index:20;pointer-events:auto;position:absolute;top:31px;left:50%;transform:translateX(-50%);display:flex;gap:3px;padding:4px;border:1px solid #ffffff75;border-radius:11px;background:#f0ede5c4;backdrop-filter:blur(18px);box-shadow:0 3px 16px #2520160c}.model-switcher a{display:block;text-decoration:none;border:0;border-radius:7px;background:transparent;color:#69655e;font:inherit;font-size:11px;padding:10px 15px;cursor:pointer;white-space:nowrap}.model-switcher a:hover{background:#ffffff80;color:#24231f}.model-switcher a[aria-pressed=\"true\"]{background:#33312d;color:#fff;box-shadow:0 2px 5px #0002;cursor:default}.studio .model-switcher{display:none}.zen .model-switcher{opacity:0;pointer-events:none}@media(max-width:760px){.model-switcher{top:76px}.model-switcher a{font-size:10px;padding:9px 13px}}\nhtml,body{background:transparent!important}.model-switcher,header,.caption,.toolbar,.actions,.hint,#loading,.notice{display:none!important}canvas{touch-action:pan-y}:host{display:block;position:absolute;overflow:hidden}.scene-body{position:absolute;inset:0}canvas{width:100%;height:100%}\u003c/style>\u003cdiv class=\"scene-body\">\n\u003cmain id=\"scene\" aria-label=\"Interactive 3D projector. Drag to orbit, scroll to zoom.\">\u003c/main>\n\u003cheader>\u003cdiv class=\"brand\">XGIMI\u003cspan>PRODUCT STUDIO\u003c/span>\u003c/div>\u003cdiv class=\"edition\">\u003cstrong>HORIZON\u003c/strong>\u003cbr>PORTABLE PROJECTOR \u00b7 4K\u003c/div>\u003c/header>\n\u003cnav class=\"model-switcher\" aria-label=\"Projector models\">\u003ca href=\"XGIMI-Horizon-Portable.html\" data-model-target=\"horizon\" aria-pressed=\"true\" aria-current=\"page\">Horizon Portable\u003c/a>\u003ca href=\"XGIMI-Short-Throw.html\" data-model-target=\"short-throw\" aria-pressed=\"false\">Short Throw\u003c/a>\u003c/nav>\n\u003cdiv class=\"caption\">\u003ch1>BIGGER STORIES. ANYWHERE.\u003c/h1>\u003cp id=\"view-label\">01 / Three-quarter view\u003c/p>\u003c/div>\n\u003cnav class=\"toolbar\" aria-label=\"Model controls\">\n\u003cbutton data-view=\"hero\" class=\"active\" aria-pressed=\"true\">Overview\u003c/button>\u003cbutton data-view=\"front\" aria-pressed=\"false\">Front\u003c/button>\u003cbutton data-view=\"rear\" aria-pressed=\"false\">Rear\u003c/button>\u003cbutton data-view=\"detail\" aria-pressed=\"false\">Optics\u003c/button>\u003cdiv class=\"divider\">\u003c/div>\n\u003cbutton id=\"rotate\" class=\"icon\" title=\"Auto rotate\" aria-label=\"Auto rotate\" aria-pressed=\"false\">\u003csvg viewBox=\"0 0 24 24\">\u003cpath d=\"M19 7a8 8 0 1 0 1 8M19 3v5h-5\"/>\u003c/svg>\u003c/button>\n\u003c/nav>\n\u003cdiv class=\"actions\">\u003cbutton id=\"save\" class=\"icon\" title=\"Save render as PNG\" aria-label=\"Save render as PNG\">\u003csvg viewBox=\"0 0 24 24\">\u003cpath d=\"M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5\"/>\u003c/svg>\u003c/button>\u003cbutton id=\"zen\" class=\"icon\" title=\"Hide interface (H)\" aria-label=\"Hide interface\">\u003csvg viewBox=\"0 0 24 24\">\u003cpath d=\"M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5\"/>\u003c/svg>\u003c/button>\u003c/div>\n\u003cdiv class=\"hint\">DRAG TO ORBIT \u00b7 SCROLL TO ZOOM \u00b7 H TO HIDE CONTROLS\u003c/div>\u003cdiv class=\"notice\" id=\"notice\" role=\"status\">\u003c/div>\u003cdiv id=\"loading\" role=\"status\">ASSEMBLING HORIZON\u003c/div>\n\u003c/div>";
const sceneBody=sceneRoot.querySelector('.scene-body');
const document=new Proxy(window.document,{get(target,key){if(key==='body')return sceneBody;if(['getElementById','querySelector','querySelectorAll'].includes(key))return sceneRoot[key].bind(sceneRoot);const value=Reflect.get(target,key,target);return typeof value==='function'?value.bind(target):value;}});
let innerWidth=Math.max(1,sceneHost.clientWidth),innerHeight=Math.max(1,sceneHost.clientHeight);
const sceneLifecycle={};
var v6=Object.defineProperty;var e6=(n,f)=>{for(var v in f)v6(n,v,{get:f[v],enumerable:!0})};function k4({THREE:n,gltf:f,grain:v}){let e=new n.MeshPhysicalMaterial({name:"Seated upper rear satin return",color:"#77726c",emissive:"#393733",emissiveIntensity:.35,metalness:.7,roughness:.49,bumpMap:v,bumpScale:8e-4,clearcoat:.05,clearcoatRoughness:.35,envMapIntensity:1,side:n.DoubleSide,fog:!1});f.scene.traverse(t=>{t.name.startsWith("Scoped_rear_upper_tray_shoulder")&&(t.material=e)});for(let t of["Fit_continuous_collar_shoulder","Scoped_front_collar_side_wall"]){let u=f.scene.getObjectByName(t);if(!u)continue;let r=u.material.clone(),b=u.material.onBeforeCompile;r.onBeforeCompile=X=>{b?.(X),X.vertexShader=`varying float scopedShoulderHeight;
`+X.vertexShader,X.vertexShader=X.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
scopedShoulderHeight=position.y;`),X.fragmentShader=`varying float scopedShoulderHeight;
`+X.fragmentShader,X.fragmentShader=X.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(roughnessFactor,.49+.05*(roughnessFactor/.43-.5),smoothstep(3.04,3.25,scopedShoulderHeight));`)},u.material=r}let P=f.scene.getObjectByName("Rear_IO_recessed_tray"),z=f.scene.getObjectByName("Rear_IO_tray_border");for(let t of[P]){let u=t.material,r=e.clone(),b=t.geometry.attributes.uv;t.geometry.setAttribute("upperRearPhotoUV",b.clone()),r.onBeforeCompile=X=>{X.uniforms.upperRearPhoto={value:u.map},X.vertexShader=`attribute vec2 upperRearPhotoUV;varying vec2 upperRearUV;varying float upperRearHeight;
`+X.vertexShader,X.vertexShader=X.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
upperRearUV=upperRearPhotoUV;upperRearHeight=position.y;`),X.fragmentShader=`uniform sampler2D upperRearPhoto;varying vec2 upperRearUV;varying float upperRearHeight;
`+X.fragmentShader,X.fragmentShader=X.fragmentShader.replace("#include <tonemapping_fragment>",`#include <tonemapping_fragment>
gl_FragColor.rgb=mix(texture2D(upperRearPhoto,upperRearUV).rgb,gl_FragColor.rgb,smoothstep(2.72,2.79,upperRearHeight));`)},t.material=r}}function J4({THREE:n,gltf:f,model:v,rearReference:e}){let P=v.getObjectByName("Scoped AC input legend");P&&(P.visible=!1);let z=document.createElement("canvas");z.width=1536,z.height=1024;let t=z.getContext("2d");t.drawImage(e.image,0,0,1536,1024);let u=[[251,449,122,32,378],[403,441,98,39,505],[547,441,94,39,642],[687,441,107,39,795],[835,441,89,39,924],[970,447,67,33,1038],[1080,446,102,34,1183]];for(let[p,l,W,w,T]of u)t.drawImage(e.image,T,l,6,w,p,l,W,w);let r=new n.CanvasTexture(z);r.colorSpace=n.SRGBColorSpace,r.anisotropy=e.anisotropy;let b=f.scene.getObjectByName("Rear_IO_recessed_tray");b.material=b.material.clone(),b.material.map=r;let X=[{px:311,main:"AC IN",y:2},{px:451,main:"USB-A",sub:"5V \u2393 1.5A"},{px:591,main:"HDMI 1",sub:"(eARC)"},{px:736,main:"HDMI 2"},{px:874,main:"USB-C",sub:"(DP)"},{px:1004,main:"LAN",y:2.043},{px:1130,main:"AUDIO OUT",y:2.043}],d=[];function H(p,l,W,w=!1){let T=document.createElement("canvas");T.width=1024,T.height=256;let y=T.getContext("2d");y.font=`300 ${w?156:171}px Arial`,y.fillStyle="#aaa8a3",y.textAlign="center",y.textBaseline="middle",y.fillText(p,512,132);let V=new n.CanvasTexture(T);V.colorSpace=n.SRGBColorSpace,V.anisotropy=8;let M=new n.Mesh(new n.PlaneGeometry(.56,.14),new n.MeshBasicMaterial({map:V,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-1}));M.name="Rear printed legend "+p,M.rotation.y=Math.PI,M.position.set((2.7945-(l-194)/1146*5.589)*1.08,W,-1.532),v.add(M),d.push({text:p,x:M.position.x,y:W,secondary:w})}for(let p of X)H(p.main,p.px,p.y??2.095),p.sub&&H(p.sub,p.px,2.009,!0);let x=v.getObjectByName("Rear printed legend 5V \u2393 1.5A"),c=x.material.map.image.getContext("2d");c.clearRect(0,0,1024,256),c.font="300 156px Arial",c.fillStyle="#aaa8a3",c.textAlign="left",c.textBaseline="middle";let a="5V",j="1.5A",s=78,i=c.measureText(a).width,N=c.measureText(j).width,m=(1024-i-N-s-30)/2;c.fillText(a,m,132),c.fillText(j,m+i+s+30,132),c.fillRect(m+i+18,112,s-8,5);for(let p=0;p<3;p++)c.fillRect(m+i+18+p*25,128,18,5);x.material.map.needsUpdate=!0,v.userData.rearLabelRepair={labels:d,panelBottom:1.91005,minimumInkPadding:.057}}function Y4({THREE:n,gltf:f,model:v,grain:e,rearReference:P,frontalReference:z,targetCamera:t}){let u=new n.MeshPhysicalMaterial({name:"Molded AC inlet insulator",color:"#303336",emissive:"#303336",emissiveIntensity:.1,metalness:0,roughness:.7,bumpMap:e,bumpScale:.0012,clearcoat:.04,clearcoatRoughness:.55,envMapIntensity:.28,side:n.DoubleSide,fog:!1}),r=new n.MeshStandardMaterial({name:"Recessed AC inlet well",color:"#020303",roughness:.93,metalness:0,envMapIntensity:.04,side:n.DoubleSide,fog:!1}),b=new n.MeshPhysicalMaterial({name:"Rounded nickel AC contacts",color:"#c6c7be",metalness:.62,roughness:.29,emissive:"#626359",emissiveIntensity:.12,envMapIntensity:.9,fog:!1}),X=new n.MeshPhysicalMaterial({name:"Continuous rounded front corner",color:"#a09b93",metalness:.78,roughness:.38,bumpMap:e,bumpScale:7e-4,clearcoat:.1,clearcoatRoughness:.28,envMapIntensity:.9,side:n.DoubleSide,fog:!1});f.scene.traverse(N=>{if(N.isMesh&&(N.name.startsWith("Scoped_AC_inlet_molded")&&(N.material=u),N.name.startsWith("Scoped_AC_inlet_cavity")&&(N.material=r),N.name.startsWith("Scoped_AC_inlet_contact")&&(N.material=b),N.name.startsWith("Scoped_front_corner_rounded"))){let m=N.geometry.attributes.position,p=[],l=[],W=new n.Vector3;for(let w=0;w<m.count;w++){W.fromBufferAttribute(m,w),N.localToWorld(W);let T=Math.atan2(-(W.x+2.668)/.483,(W.y-3.0322)/.4132)/(Math.PI/2);l.push(.4*n.MathUtils.smoothstep(T,0,.18)*(1-n.MathUtils.smoothstep(T,.82,1))),W.project(t),p.push((W.x+1)/2,(W.y+1)/2)}N.geometry.setAttribute("cornerPhotoUV",new n.Float32BufferAttribute(p,2)),N.geometry.setAttribute("cornerPhysicalBlend",new n.Float32BufferAttribute(l,1)),X.onBeforeCompile=w=>{w.uniforms.cornerPhoto={value:z},w.vertexShader=`attribute vec2 cornerPhotoUV;attribute float cornerPhysicalBlend;varying vec2 cornerUV;varying float cornerBlend;
`+w.vertexShader,w.vertexShader=w.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
cornerUV=cornerPhotoUV;cornerBlend=cornerPhysicalBlend;`),w.fragmentShader=`uniform sampler2D cornerPhoto;varying vec2 cornerUV;varying float cornerBlend;
`+w.fragmentShader,w.fragmentShader=w.fragmentShader.replace("#include <tonemapping_fragment>",`#include <tonemapping_fragment>
gl_FragColor.rgb=mix(texture2D(cornerPhoto,cornerUV).rgb,gl_FragColor.rgb,cornerBlend);`)},N.material=X}});let d=f.scene.getObjectByName("Rear_IO_recessed_tray"),H=document.createElement("canvas");H.width=1536,H.height=1024;let x=H.getContext("2d");x.drawImage(P.image,0,0,1536,1024),x.drawImage(P.image,380,451,20,27,251,451,122,27);let c=new n.CanvasTexture(H);c.colorSpace=n.SRGBColorSpace,c.anisotropy=P.anisotropy,d.material=d.material.clone(),d.material.map=c;let a=document.createElement("canvas");a.width=512,a.height=128;let j=a.getContext("2d");j.fillStyle="#adaaa6",j.font="300 90px Arial",j.textAlign="center",j.textBaseline="middle",j.fillText("AC IN",256,64);let s=new n.CanvasTexture(a);s.colorSpace=n.SRGBColorSpace,s.anisotropy=8;let i=new n.Mesh(new n.PlaneGeometry(.5,.14),new n.MeshBasicMaterial({map:s,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}));i.name="Scoped AC input legend",i.rotation.y=Math.PI,i.position.set((2.7945-117/1146*5.589)*1.08,2.004,-1.531),v.add(i),v.userData.cornerACRepair={scope:"upper-left front corner / AC input",socketContacts:3}}function S4({THREE:n,gltf:f,model:v,handle:e,handleEdges:P,cropTexture:z}){let t=z(0,1,8,!0),u=z(0,1,8),r=new n.MeshPhysicalMaterial({name:"Fitted graphite leather",map:u,color:"#d3d2cc",roughness:.8,metalness:0,bumpMap:t,bumpScale:.0018,clearcoat:.14,clearcoatRoughness:.6,specularIntensity:.42,envMapIntensity:.35,fog:!1});if(e){e.material=r;let x=e.geometry.attributes.position,c=e.geometry.attributes.normal,a=[];for(let j=0;j<x.count;j++)Math.abs(c.getZ(j))>.5?a.push(x.getX(j)*.42,x.getY(j)*.42):a.push((Math.abs(c.getY(j))>.6?x.getX(j):x.getY(j))*.42,x.getZ(j)*.42);e.geometry.setAttribute("uv",new n.Float32BufferAttribute(a,2))}let X=f.scene.getObjectByName("Scoped_front_collar_side_wall").material;for(let x of P)x.material=new n.MeshPhysicalMaterial({name:"Fine satin handle welt",color:"#898b84",metalness:.72,roughness:.34,envMapIntensity:.9,fog:!1});function d(x){let c=x.geometry.attributes.position,a=x.geometry.attributes.normal,j=[];for(let s=0;s<c.count;s++){let i=c.getX(s),N=c.getY(s),m=c.getZ(s);j.push(...Math.abs(a.getX(s))>.6?[m/1.4,N/1.4]:Math.abs(a.getY(s))>.6?[i/1.4,m/1.4]:[i/1.4,N/1.4])}x.geometry.setAttribute("uv",new n.Float32BufferAttribute(j,2))}let H=[];f.scene.traverse(x=>{if(!x.isMesh)return;let c=x.name.replaceAll("_"," ");if(c.startsWith("Front titanium collar")){let a=x.material,j=a.onBeforeCompile;a.onBeforeCompile=s=>{j.call(a,s),s.fragmentShader=s.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if(abs(collarPosition.x)>2.52||collarPosition.y>3.15||collarPosition.y<.63)discard;`)},a.needsUpdate=!0}else if(c.startsWith("Lower intake rear liner"))x.material=new n.MeshBasicMaterial({name:"Intake cavity shadow",color:"#050605",toneMapped:!1,side:n.DoubleSide,fog:!1}),H.push(x.name);else if(c.startsWith("Fit continuous collar")||c.startsWith("Fit frontal collar"))d(x),x.material=X.clone(),H.push(x.name);else if(c.startsWith("Strap pivot"))x.material=c.includes("seat")?new n.MeshStandardMaterial({name:"Seated hinge housing",color:"#171918",roughness:.7,metalness:.15,envMapIntensity:.3,fog:!1}):new n.MeshPhysicalMaterial({name:"Fixed satin axle",color:"#484b49",roughness:.46,metalness:.65,envMapIntensity:.55,fog:!1}),H.push(x.name);else if(c.startsWith("Lower intake")||c.startsWith("Diagonal intake"))x.material=new n.MeshStandardMaterial({name:"Recessed charcoal intake",color:"#151916",roughness:.72,metalness:.2,envMapIntensity:.22,side:n.DoubleSide,fog:!1}),H.push(x.name);else if(c.startsWith("Scoped cast rounded shell")||c.startsWith("Cast rounded"))for(let a of Array.isArray(x.material)?x.material:[x.material]){let j=a.onBeforeCompile;a.onBeforeCompile=s=>{j.call(a,s),s.vertexShader=`varying vec3 fittedCastPosition;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
fittedCastPosition=position;`),s.fragmentShader=`varying vec3 fittedCastPosition;
`+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if(fittedCastPosition.z>1.539&&(abs(fittedCastPosition.x)>2.52||fittedCastPosition.y>3.15||fittedCastPosition.y<.63))discard;`)},a.needsUpdate=!0}}),v.userData.assemblyFit={repaired:H,scope:"carry handle / fixed hinges / collar shoulder / recessed lower intake"}}function K4({THREE:n,gltf:f,model:v,grain:e,cropTexture:P,reference:z,frontalReference:t,rearReference:u,scopedFabric:r,smoothShell:b,topLogo:X,power:d}){let H=r;H.colorSpace=n.SRGBColorSpace,H.wrapS=H.wrapT=n.RepeatWrapping,H.repeat.set(.9,3.64),H.anisotropy=8;let x=H.clone();x.colorSpace=n.NoColorSpace;let c=document.createElement("canvas");c.width=c.height=256;let a=c.getContext("2d");a.drawImage(z.image,230,560,128,128,0,0,256,256);let j=document.createElement("canvas");j.width=j.height=256;let s=j.getContext("2d");s.filter="blur(5px)",s.drawImage(c,0,0);let i=a.getImageData(0,0,256,256),N=s.getImageData(0,0,256,256).data;for(let q=0;q<i.data.length;q+=4){let k=(i.data[q]+i.data[q+1]+i.data[q+2])/3,J=(N[q]+N[q+1]+N[q+2])/3,S=Math.max(175,Math.min(255,232+(k-J)*1.7));i.data[q]=i.data[q+1]=i.data[q+2]=S}a.putImageData(i,0,0);let m=new n.CanvasTexture(c);m.colorSpace=n.SRGBColorSpace,m.wrapS=m.wrapT=n.RepeatWrapping,m.repeat.set(3,3),m.anisotropy=8;let p=m.clone();p.colorSpace=n.NoColorSpace;let l=()=>new n.MeshPhysicalMaterial({name:"Scoped satin titanium",color:"#77726c",map:m,emissive:"#393733",emissiveIntensity:.35,metalness:.7,roughness:.43,roughnessMap:p,bumpMap:p,bumpScale:.003,clearcoat:.08,clearcoatRoughness:.38,envMapIntensity:1,fog:!1}),W=new n.MeshBasicMaterial({name:"Scoped aperture walls",color:"#070808",toneMapped:!1,fog:!1});function w(q){let k=q.geometry.attributes.position,J=q.geometry.attributes.normal,S=[];for(let B=0;B<k.count;B++){let Y=k.getX(B),nf=k.getY(B),df=k.getZ(B),Zf=Math.abs(J.getX(B)),Yf=Math.abs(J.getY(B));S.push(...Zf>.6?[df/1.4,nf/1.4]:Yf>.65?[Y/1.4,df/1.4]:[Y/1.4,nf/1.4])}q.geometry.setAttribute("uv",new n.Float32BufferAttribute(S,2))}function T(q,k){let J=q.geometry.attributes.position,S=q.userData.savedScopeNormal||q.geometry.attributes.normal,B=[];for(let Y=0;Y<J.count;Y++)B.push(n.MathUtils.smoothstep(J.getZ(Y),1.64,1.8)*n.MathUtils.smoothstep(S.getZ(Y),.1,.4));q.geometry.setAttribute("scopeKeepFront",new n.Float32BufferAttribute(B,1)),k.onBeforeCompile=Y=>{Object.assign(Y.uniforms,{savedFront:{value:z},savedRear:{value:u},savedTarget:{value:t}}),Y.vertexShader=`attribute float scopeKeepFront;attribute vec2 studioFront;attribute vec2 studioRear;attribute float studioBlend;attribute vec2 newFront;attribute float newMix;varying vec3 collarPosition;varying float keepFrontal;varying vec2 oldFrontUV;varying vec2 oldRearUV;varying float oldRearMix;varying vec2 targetUV;varying float targetMix;
`+Y.vertexShader,Y.vertexShader=Y.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
collarPosition=position;keepFrontal=scopeKeepFront;oldFrontUV=studioFront;oldRearUV=studioRear;oldRearMix=studioBlend;targetUV=newFront;targetMix=newMix;`),Y.fragmentShader=`uniform sampler2D savedFront;uniform sampler2D savedRear;uniform sampler2D savedTarget;varying vec3 collarPosition;varying float keepFrontal;varying vec2 oldFrontUV;varying vec2 oldRearUV;varying float oldRearMix;varying vec2 targetUV;varying float targetMix;
`+Y.fragmentShader,Y.fragmentShader=Y.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if(keepFrontal<.99&&(abs(collarPosition.x)>2.52||collarPosition.y>3.15||collarPosition.y<.63))discard;`),Y.fragmentShader=Y.fragmentShader.replace("#include <tonemapping_fragment>",`#include <tonemapping_fragment>
vec3 previousFront=mix(mix(texture2D(savedFront,oldFrontUV).rgb,texture2D(savedRear,oldRearUV).rgb,oldRearMix),texture2D(savedTarget,targetUV).rgb,targetMix);gl_FragColor.rgb=mix(gl_FragColor.rgb,previousFront,keepFrontal);`)}}function y(q,k){let J=q.onBeforeCompile;q.onBeforeCompile=S=>{J.call(q,S),S.vertexShader=`varying vec3 scopedShellPosition;
`+S.vertexShader,S.vertexShader=S.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
scopedShellPosition=position;`),S.fragmentShader=`varying vec3 scopedShellPosition;
`+S.fragmentShader,S.fragmentShader=S.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
float shellLimit=(abs(scopedShellPosition.x)>2.52||scopedShellPosition.y>3.15||scopedShellPosition.y<.63)?1.95:1.68;
if(scopedShellPosition.z`+(k?">=":"<")+"shellLimit)discard;"+(k?"":`
if(abs(scopedShellPosition.x)<2.105&&scopedShellPosition.y<.36&&scopedShellPosition.z>1.68)discard;`))}}let V=[];f.scene.traverse(q=>{if(!q.isMesh)return;let k=q.name.replaceAll("_"," ");if(k.startsWith("Cast rounded"))y(q.material,!1),V.push(q.name);else if(k.startsWith("Scoped cast rounded shell")||k.startsWith("Front titanium collar")){if(k.startsWith("Scoped cast"))b(q.geometry);else{let S=q.geometry.attributes.normal.clone();q.userData.savedScopeNormal=S;let B=q.geometry.attributes.position,Y=q.geometry.attributes.normal;for(let nf=0;nf<Y.count;nf++){let df=B.getX(nf),Zf=B.getY(nf);if(Math.abs(S.getZ(nf))<.4&&(Math.abs(df)>2.55||Zf>3.3||Zf<.5)){let Yf=df-n.MathUtils.clamp(df,-2.693,2.693),f3=Zf-n.MathUtils.clamp(Zf,.705,3.054),z3=new n.Vector3(Yf/.5**2,f3/.423**2,0).normalize();Y.setXYZ(nf,z3.x,z3.y,z3.z)}}}w(q);let J=q.material.name==="scoped_recess_black"?W.clone():l();k.startsWith("Front titanium")?T(q,J):y(J,!0),q.material=J,V.push(q.name)}else if(k.startsWith("Scoped front collar side wall"))w(q),q.material=l(),V.push(q.name);else if(k.startsWith("Perforated"))q.userData.apertureWall||q.name.endsWith("_2")?q.material=W:(w(q),q.material=l()),V.push(q.name);else if(k.startsWith("Speaker inner")||k.startsWith("Lower intake opening"))q.material=new n.MeshBasicMaterial({color:"#050607",fog:!1,toneMapped:!1}),V.push(q.name);else if(k.startsWith("Speaker panel"))w(q),q.material=l(),V.push(q.name);else if(k.startsWith("Rear fabric")){let J=q.userData.scopedUV.clone();for(let S=0;S<J.count;S++)J.setXY(S,J.getX(S)*.46/.7,(1-J.getY(S))*.46/2.83);q.geometry.setAttribute("uv",J),q.material=new n.MeshStandardMaterial({name:"Scoped acoustic fabric",map:H,color:"#dededb",roughness:.95,metalness:0,bumpMap:x,bumpScale:.003,envMapIntensity:.25,side:n.DoubleSide,fog:!1}),V.push(q.name)}else k.startsWith("Scoped rear fabric gasket")||k.startsWith("Scoped roof gasket")?(q.material=W,V.push(q.name)):k.startsWith("Top control")?(q.userData.scopedUV&&q.geometry.setAttribute("uv",q.userData.scopedUV),q.material=new n.MeshPhysicalMaterial({name:"Scoped top graphite",color:"#202121",roughness:.72,metalness:.18,specularIntensity:.12,bumpMap:e,bumpScale:.0012,envMapIntensity:.12,side:n.FrontSide,fog:!1}),V.push(q.name)):k.startsWith("Rubber foot")?(q.material=new n.MeshStandardMaterial({name:"Scoped rubber feet",color:"#111313",roughness:.83,metalness:0,envMapIntensity:.12,fog:!1}),V.push(q.name)):k.startsWith("Foot collar")?(q.material=new n.MeshStandardMaterial({name:"Scoped seated foot collars",color:"#1e2221",roughness:.56,metalness:.25,envMapIntensity:.2,fog:!1}),V.push(q.name)):k.startsWith("Diagonal intake")&&(q.material=new n.MeshStandardMaterial({name:"Scoped intake blades",color:"#282c2b",roughness:.56,metalness:.35,envMapIntensity:.25,fog:!1}),V.push(q.name))});function M(q){let k=.142+.0315*(q+1.45),J=3.02+.44*(q+1.45)/3.13;return k+(3.51-.22)/3.28*(J-k)}for(let[q,k]of[[X,-.612],[d,-.286]])q.visible=!0,q.position.y=M(k)+.006,q.rotation.x=-Math.PI/2-Math.atan(.44/3.13);return v.userData.scopedRepair={regions:V},V}var s9={};e6(s9,{ACESFilmicToneMapping:()=>nn,AddEquation:()=>D7,AddOperation:()=>gu,AdditiveAnimationBlendMode:()=>et,AdditiveBlending:()=>g5,AgXToneMapping:()=>Au,AlphaFormat:()=>$5,AlwaysCompare:()=>Hr,AlwaysDepth:()=>_P,AlwaysStencilFunc:()=>Sz,AmbientLight:()=>GP,AnimationAction:()=>CP,AnimationClip:()=>j7,AnimationLoader:()=>t5,AnimationMixer:()=>a5,AnimationObjectGroup:()=>j5,AnimationUtils:()=>z5,ArcCurve:()=>rP,ArrayCamera:()=>IP,ArrowHelper:()=>J5,AttachedBindMode:()=>Yz,Audio:()=>EP,AudioAnalyser:()=>c5,AudioContext:()=>d8,AudioListener:()=>x5,AudioLoader:()=>d5,AxesHelper:()=>Y5,BackSide:()=>g3,BasicDepthPacking:()=>Pr,BasicShadowMap:()=>_b,BatchedMesh:()=>PP,Bone:()=>ze,BooleanKeyframeTrack:()=>s7,Box2:()=>L5,Box3:()=>D3,Box3Helper:()=>G5,BoxGeometry:()=>Pe,BoxHelper:()=>R5,BufferAttribute:()=>Af,BufferGeometry:()=>kf,BufferGeometryLoader:()=>UP,ByteType:()=>C5,Cache:()=>Av,Camera:()=>Je,CameraHelper:()=>F5,CanvasTexture:()=>Yv,CapsuleGeometry:()=>zP,CatmullRomCurve3:()=>bP,CineonToneMapping:()=>Cu,CircleGeometry:()=>Ce,ClampToEdgeWrapping:()=>uv,Clock:()=>gP,Color:()=>bf,ColorKeyframeTrack:()=>r8,ColorManagement:()=>Qf,CompressedArrayTexture:()=>e5,CompressedCubeTexture:()=>P5,CompressedTexture:()=>Be,CompressedTextureLoader:()=>u5,ConeGeometry:()=>A9,ConstantAlphaFactor:()=>Ku,ConstantColorFactor:()=>Yu,Controls:()=>H8,CubeCamera:()=>A8,CubeReflectionMapping:()=>N7,CubeRefractionMapping:()=>R7,CubeTexture:()=>ne,CubeTextureLoader:()=>r5,CubeUVReflectionMapping:()=>P9,CubicBezierCurve:()=>_9,CubicBezierCurve3:()=>XP,CubicInterpolant:()=>oP,CullFaceBack:()=>U5,CullFaceFront:()=>lu,CullFaceFrontBack:()=>Ab,CullFaceNone:()=>Ou,Curve:()=>Nv,CurvePath:()=>HP,CustomBlending:()=>Lu,CustomToneMapping:()=>Qu,CylinderGeometry:()=>Q9,Cylindrical:()=>O5,Data3DTexture:()=>Ge,DataArrayTexture:()=>Re,DataTexture:()=>rv,DataTextureLoader:()=>b5,DataUtils:()=>Iz,DecrementStencilOp:()=>bX,DecrementWrapStencilOp:()=>dX,DefaultLoadingManager:()=>ir,DepthFormat:()=>oe,DepthStencilFormat:()=>u9,DepthTexture:()=>B9,DetachedBindMode:()=>$u,DirectionalLight:()=>z7,DirectionalLightHelper:()=>M5,DiscreteInterpolant:()=>MP,DodecahedronGeometry:()=>tP,DoubleSide:()=>G3,DstAlphaFactor:()=>Fu,DstColorFactor:()=>Gu,DynamicCopyUsage:()=>lX,DynamicDrawUsage:()=>iX,DynamicReadUsage:()=>yX,EdgesGeometry:()=>uP,EllipseCurve:()=>Qe,EqualCompare:()=>rr,EqualDepth:()=>fn,EqualStencilFunc:()=>cX,EquirectangularReflectionMapping:()=>be,EquirectangularRefractionMapping:()=>s8,Euler:()=>mv,EventDispatcher:()=>hv,ExternalTexture:()=>C9,ExtrudeGeometry:()=>jP,FileLoader:()=>Hv,Float16BufferAttribute:()=>Az,Float32BufferAttribute:()=>sf,FloatType:()=>B3,Fog:()=>Se,FogExp2:()=>$8,FramebufferTexture:()=>v5,FrontSide:()=>vv,Frustum:()=>q7,FrustumArray:()=>eP,GLBufferAttribute:()=>T5,GLSL1:()=>WX,GLSL3:()=>zt,GreaterCompare:()=>br,GreaterDepth:()=>en,GreaterEqualCompare:()=>dr,GreaterEqualDepth:()=>vn,GreaterEqualStencilFunc:()=>NX,GreaterStencilFunc:()=>aX,GridHelper:()=>q5,Group:()=>fv,HalfFloatType:()=>z9,HemisphereLight:()=>$e,HemisphereLightHelper:()=>D5,IcosahedronGeometry:()=>aP,ImageBitmapLoader:()=>X8,ImageLoader:()=>re,ImageUtils:()=>Q8,IncrementStencilOp:()=>rX,IncrementWrapStencilOp:()=>XX,InstancedBufferAttribute:()=>Jv,InstancedBufferGeometry:()=>KP,InstancedInterleavedBuffer:()=>Z5,InstancedMesh:()=>Ie,Int16BufferAttribute:()=>Cz,Int32BufferAttribute:()=>Qz,Int8BufferAttribute:()=>gz,IntType:()=>tn,InterleavedBuffer:()=>H7,InterleavedBufferAttribute:()=>$v,Interpolant:()=>x7,InterpolateDiscrete:()=>ve,InterpolateLinear:()=>ee,InterpolateSmooth:()=>U8,InterpolationSamplingMode:()=>VX,InterpolationSamplingType:()=>wX,InvertStencilOp:()=>HX,KeepStencilOp:()=>C7,KeyframeTrack:()=>dv,LOD:()=>vP,LatheGeometry:()=>mP,Layers:()=>ke,LessCompare:()=>ur,LessDepth:()=>$P,LessEqualCompare:()=>nt,LessEqualDepth:()=>$7,LessEqualStencilFunc:()=>jX,LessStencilFunc:()=>sX,Light:()=>P7,LightProbe:()=>YP,Line:()=>wv,Line3:()=>W5,LineBasicMaterial:()=>M3,LineCurve:()=>$9,LineCurve3:()=>dP,LineDashedMaterial:()=>qP,LineLoop:()=>ge,LineSegments:()=>bv,LinearFilter:()=>Z3,LinearInterpolant:()=>u8,LinearMipMapLinearFilter:()=>eX,LinearMipMapNearestFilter:()=>vX,LinearMipmapLinearFilter:()=>iv,LinearMipmapNearestFilter:()=>Xe,LinearSRGBColorSpace:()=>I3,LinearToneMapping:()=>Eu,LinearTransfer:()=>J9,Loader:()=>R3,LoaderUtils:()=>Sv,LoadingManager:()=>b8,LoopOnce:()=>fr,LoopPingPong:()=>er,LoopRepeat:()=>vr,MOUSE:()=>M7,Material:()=>L3,MaterialLoader:()=>SP,MathUtils:()=>i3,Matrix2:()=>l5,Matrix3:()=>Kf,Matrix4:()=>of,MaxEquation:()=>Vu,Mesh:()=>_f,MeshBasicMaterial:()=>u3,MeshDepthMaterial:()=>z8,MeshDistanceMaterial:()=>t8,MeshLambertMaterial:()=>VP,MeshMatcapMaterial:()=>DP,MeshNormalMaterial:()=>wP,MeshPhongMaterial:()=>WP,MeshPhysicalMaterial:()=>F3,MeshStandardMaterial:()=>ev,MeshToonMaterial:()=>hP,MinEquation:()=>wu,MirroredRepeatWrapping:()=>fe,MixOperation:()=>Iu,MultiplyBlending:()=>B5,MultiplyOperation:()=>x8,NearestFilter:()=>q3,NearestMipMapLinearFilter:()=>fX,NearestMipMapNearestFilter:()=>$b,NearestMipmapLinearFilter:()=>G7,NearestMipmapNearestFilter:()=>c8,NeutralToneMapping:()=>_u,NeverCompare:()=>tr,NeverDepth:()=>AP,NeverStencilFunc:()=>xX,NoBlending:()=>a7,NoColorSpace:()=>Uv,NoToneMapping:()=>m7,NormalAnimationBlendMode:()=>Yn,NormalBlending:()=>_7,NotEqualCompare:()=>Xr,NotEqualDepth:()=>Pn,NotEqualStencilFunc:()=>mX,NumberKeyframeTrack:()=>f7,Object3D:()=>P3,ObjectLoader:()=>X5,ObjectSpaceNormalMap:()=>zr,OctahedronGeometry:()=>n8,OneFactor:()=>qu,OneMinusConstantAlphaFactor:()=>Uu,OneMinusConstantColorFactor:()=>Su,OneMinusDstAlphaFactor:()=>Ru,OneMinusDstColorFactor:()=>ku,OneMinusSrcAlphaFactor:()=>C8,OneMinusSrcColorFactor:()=>Mu,OrthographicCamera:()=>n7,PCFShadowMap:()=>I5,PCFSoftShadowMap:()=>QP,PMREMGenerator:()=>J7,Path:()=>Ae,PerspectiveCamera:()=>j3,Plane:()=>Lv,PlaneGeometry:()=>Xv,PlaneHelper:()=>k5,PointLight:()=>v9,PointLightHelper:()=>V5,Points:()=>Ee,PointsMaterial:()=>te,PolarGridHelper:()=>o5,PolyhedronGeometry:()=>o7,PositionalAudio:()=>s5,PropertyBinding:()=>b3,PropertyMixer:()=>BP,QuadraticBezierCurve:()=>f8,QuadraticBezierCurve3:()=>v8,Quaternion:()=>l3,QuaternionKeyframeTrack:()=>v7,QuaternionLinearInterpolant:()=>FP,RED_GREEN_RGTC2_Format:()=>kn,RED_RGTC1_Format:()=>Rn,REVISION:()=>pu,RGBADepthPacking:()=>nr,RGBAFormat:()=>U3,RGBAIntegerFormat:()=>dn,RGBA_ASTC_10x10_Format:()=>Vn,RGBA_ASTC_10x5_Format:()=>Wn,RGBA_ASTC_10x6_Format:()=>hn,RGBA_ASTC_10x8_Format:()=>wn,RGBA_ASTC_12x10_Format:()=>Dn,RGBA_ASTC_12x12_Format:()=>qn,RGBA_ASTC_4x4_Format:()=>Nn,RGBA_ASTC_5x4_Format:()=>Zn,RGBA_ASTC_5x5_Format:()=>Tn,RGBA_ASTC_6x5_Format:()=>yn,RGBA_ASTC_6x6_Format:()=>pn,RGBA_ASTC_8x5_Format:()=>On,RGBA_ASTC_8x6_Format:()=>ln,RGBA_ASTC_8x8_Format:()=>Ln,RGBA_BPTC_Format:()=>on,RGBA_ETC2_EAC_Format:()=>mn,RGBA_PVRTC_2BPPV1_Format:()=>cn,RGBA_PVRTC_4BPPV1_Format:()=>sn,RGBA_S3TC_DXT1_Format:()=>m8,RGBA_S3TC_DXT3_Format:()=>N8,RGBA_S3TC_DXT5_Format:()=>i8,RGBDepthPacking:()=>nX,RGBFormat:()=>ft,RGBIntegerFormat:()=>PX,RGB_BPTC_SIGNED_Format:()=>Mn,RGB_BPTC_UNSIGNED_Format:()=>Fn,RGB_ETC1_Format:()=>jn,RGB_ETC2_Format:()=>an,RGB_PVRTC_2BPPV1_Format:()=>xn,RGB_PVRTC_4BPPV1_Format:()=>Hn,RGB_S3TC_DXT1_Format:()=>a8,RGDepthPacking:()=>zX,RGFormat:()=>vt,RGIntegerFormat:()=>Xn,RawShaderMaterial:()=>LP,Ray:()=>_v,Raycaster:()=>y5,RectAreaLight:()=>kP,RedFormat:()=>bn,RedIntegerFormat:()=>j8,ReinhardToneMapping:()=>Bu,RenderTarget:()=>U9,RenderTarget3D:()=>m5,RepeatWrapping:()=>Gv,ReplaceStencilOp:()=>uX,ReverseSubtractEquation:()=>hu,RingGeometry:()=>NP,SIGNED_RED_GREEN_RGTC2_Format:()=>Jn,SIGNED_RED_RGTC1_Format:()=>Gn,SRGBColorSpace:()=>X3,SRGBTransfer:()=>H3,Scene:()=>kv,ShaderChunk:()=>Bf,ShaderLib:()=>u7,ShaderMaterial:()=>Q3,ShadowMaterial:()=>lP,Shape:()=>d7,ShapeGeometry:()=>iP,ShapePath:()=>S5,ShapeUtils:()=>Rv,ShortType:()=>Q5,Skeleton:()=>Ue,SkeletonHelper:()=>w5,SkinnedMesh:()=>Ke,Source:()=>Qv,Sphere:()=>w3,SphereGeometry:()=>ue,Spherical:()=>e9,SphericalHarmonics3:()=>JP,SplineCurve:()=>e8,SpotLight:()=>f9,SpotLightHelper:()=>h5,Sprite:()=>fP,SpriteMaterial:()=>E9,SrcAlphaFactor:()=>B8,SrcAlphaSaturateFactor:()=>Ju,SrcColorFactor:()=>ou,StaticCopyUsage:()=>OX,StaticDrawUsage:()=>Y9,StaticReadUsage:()=>TX,StereoCamera:()=>H5,StreamCopyUsage:()=>LX,StreamDrawUsage:()=>ZX,StreamReadUsage:()=>pX,StringKeyframeTrack:()=>c7,SubtractEquation:()=>Wu,SubtractiveBlending:()=>E5,TOUCH:()=>F7,TangentSpaceNormalMap:()=>k7,TetrahedronGeometry:()=>ZP,Texture:()=>T3,TextureLoader:()=>Vv,TextureUtils:()=>K5,Timer:()=>p5,TimestampQuery:()=>hX,TorusGeometry:()=>TP,TorusKnotGeometry:()=>yP,Triangle:()=>Cv,TriangleFanDrawMode:()=>r9,TriangleStripDrawMode:()=>Z8,TrianglesDrawMode:()=>Pt,TubeGeometry:()=>pP,UVMapping:()=>zn,Uint16BufferAttribute:()=>I9,Uint32BufferAttribute:()=>g9,Uint8BufferAttribute:()=>Ez,Uint8ClampedBufferAttribute:()=>Bz,Uniform:()=>N5,UniformsGroup:()=>i5,UniformsLib:()=>jf,UniformsUtils:()=>ar,UnsignedByteType:()=>Kv,UnsignedInt101111Type:()=>_5,UnsignedInt248Type:()=>t9,UnsignedInt5999Type:()=>A5,UnsignedIntType:()=>i7,UnsignedShort4444Type:()=>un,UnsignedShort5551Type:()=>rn,UnsignedShortType:()=>n9,VSMShadowMap:()=>t7,Vector2:()=>g,Vector3:()=>L,Vector4:()=>n3,VectorKeyframeTrack:()=>e7,VideoFrameTexture:()=>f5,VideoTexture:()=>nP,WebGL3DRenderTarget:()=>Uz,WebGLArrayRenderTarget:()=>Kz,WebGLCoordinateSystem:()=>av,WebGLCubeRenderTarget:()=>_8,WebGLRenderTarget:()=>C3,WebGLRenderer:()=>Kn,WebGLUtils:()=>jd,WebGPUCoordinateSystem:()=>Me,WebXRController:()=>Ye,WireframeGeometry:()=>OP,WrapAroundEnding:()=>k9,ZeroCurvatureEnding:()=>Q7,ZeroFactor:()=>Du,ZeroSlopeEnding:()=>A7,ZeroStencilOp:()=>tX,createCanvasElement:()=>cr});var pu="180",M7={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},F7={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ou=0,U5=1,lu=2,Ab=3,_b=0,I5=1,QP=2,t7=3,vv=0,g3=1,G3=2,a7=0,_7=1,g5=2,E5=3,B5=4,Lu=5,D7=100,Wu=101,hu=102,wu=103,Vu=104,Du=200,qu=201,ou=202,Mu=203,B8=204,C8=205,Fu=206,Ru=207,Gu=208,ku=209,Ju=210,Yu=211,Su=212,Ku=213,Uu=214,AP=0,_P=1,$P=2,$7=3,fn=4,vn=5,en=6,Pn=7,x8=0,Iu=1,gu=2,m7=0,Eu=1,Bu=2,Cu=3,nn=4,Qu=5,Au=6,_u=7,Yz="attached",$u="detached",zn=300,N7=301,R7=302,be=303,s8=304,P9=306,Gv=1e3,uv=1001,fe=1002,q3=1003,c8=1004,$b=1004,G7=1005,fX=1005,Z3=1006,Xe=1007,vX=1007,iv=1008,eX=1008,Kv=1009,C5=1010,Q5=1011,n9=1012,tn=1013,i7=1014,B3=1015,z9=1016,un=1017,rn=1018,t9=1020,A5=35902,_5=35899,$5=1021,ft=1022,U3=1023,oe=1026,u9=1027,bn=1028,j8=1029,vt=1030,Xn=1031,PX=1032,dn=1033,a8=33776,m8=33777,N8=33778,i8=33779,Hn=35840,xn=35841,sn=35842,cn=35843,jn=36196,an=37492,mn=37496,Nn=37808,Zn=37809,Tn=37810,yn=37811,pn=37812,On=37813,ln=37814,Ln=37815,Wn=37816,hn=37817,wn=37818,Vn=37819,Dn=37820,qn=37821,on=36492,Mn=36494,Fn=36495,Rn=36283,Gn=36284,kn=36285,Jn=36286,fr=2200,vr=2201,er=2202,ve=2300,ee=2301,U8=2302,Q7=2400,A7=2401,k9=2402,Yn=2500,et=2501,Pt=0,Z8=1,r9=2,Pr=3200,nr=3201,nX=3202,zX=3203,k7=0,zr=1,Uv="",X3="srgb",I3="srgb-linear",J9="linear",H3="srgb",tX=0,C7=7680,uX=7681,rX=7682,bX=7683,XX=34055,dX=34056,HX=5386,xX=512,sX=513,cX=514,jX=515,aX=516,mX=517,NX=518,Sz=519,tr=512,ur=513,rr=514,nt=515,br=516,Xr=517,dr=518,Hr=519,Y9=35044,iX=35048,ZX=35040,TX=35045,yX=35049,pX=35041,OX=35046,lX=35050,LX=35042,WX="100",zt="300 es",av=2e3,Me=2001,hX={COMPUTE:"compute",RENDER:"render"},wX={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},VX={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},hv=class{addEventListener(f,v){this._listeners===void 0&&(this._listeners={});let e=this._listeners;e[f]===void 0&&(e[f]=[]),e[f].indexOf(v)===-1&&e[f].push(v)}hasEventListener(f,v){let e=this._listeners;return e===void 0?!1:e[f]!==void 0&&e[f].indexOf(v)!==-1}removeEventListener(f,v){let e=this._listeners;if(e===void 0)return;let P=e[f];if(P!==void 0){let z=P.indexOf(v);z!==-1&&P.splice(z,1)}}dispatchEvent(f){let v=this._listeners;if(v===void 0)return;let e=v[f.type];if(e!==void 0){f.target=this;let P=e.slice(0);for(let z=0,t=P.length;z<t;z++)P[z].call(this,f);f.target=null}}},A3=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],U4=1234567,qe=Math.PI/180,Fe=180/Math.PI;function Wv(){let n=Math.random()*4294967295|0,f=Math.random()*4294967295|0,v=Math.random()*4294967295|0,e=Math.random()*4294967295|0;return(A3[n&255]+A3[n>>8&255]+A3[n>>16&255]+A3[n>>24&255]+"-"+A3[f&255]+A3[f>>8&255]+"-"+A3[f>>16&15|64]+A3[f>>24&255]+"-"+A3[v&63|128]+A3[v>>8&255]+"-"+A3[v>>16&255]+A3[v>>24&255]+A3[e&255]+A3[e>>8&255]+A3[e>>16&255]+A3[e>>24&255]).toLowerCase()}function Rf(n,f,v){return Math.max(f,Math.min(v,n))}function xr(n,f){return(n%f+f)%f}function P6(n,f,v,e,P){return e+(n-f)*(P-e)/(v-f)}function n6(n,f,v){return n!==f?(v-n)/(f-n):0}function I8(n,f,v){return(1-v)*n+v*f}function z6(n,f,v,e){return I8(n,f,1-Math.exp(-v*e))}function t6(n,f=1){return f-Math.abs(xr(n,f*2)-f)}function u6(n,f,v){return n<=f?0:n>=v?1:(n=(n-f)/(v-f),n*n*(3-2*n))}function r6(n,f,v){return n<=f?0:n>=v?1:(n=(n-f)/(v-f),n*n*n*(n*(n*6-15)+10))}function b6(n,f){return n+Math.floor(Math.random()*(f-n+1))}function X6(n,f){return n+Math.random()*(f-n)}function d6(n){return n*(.5-Math.random())}function H6(n){n!==void 0&&(U4=n);let f=U4+=1831565813;return f=Math.imul(f^f>>>15,f|1),f^=f+Math.imul(f^f>>>7,f|61),((f^f>>>14)>>>0)/4294967296}function x6(n){return n*qe}function s6(n){return n*Fe}function c6(n){return(n&n-1)===0&&n!==0}function j6(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function a6(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function m6(n,f,v,e,P){let z=Math.cos,t=Math.sin,u=z(v/2),r=t(v/2),b=z((f+e)/2),X=t((f+e)/2),d=z((f-e)/2),H=t((f-e)/2),x=z((e-f)/2),c=t((e-f)/2);switch(P){case"XYX":n.set(u*X,r*d,r*H,u*b);break;case"YZY":n.set(r*H,u*X,r*d,u*b);break;case"ZXZ":n.set(r*d,r*H,u*X,u*b);break;case"XZX":n.set(u*X,r*c,r*x,u*b);break;case"YXY":n.set(r*x,u*X,r*c,u*b);break;case"ZYZ":n.set(r*c,r*x,u*X,u*b);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+P)}}function tv(n,f){switch(f.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gf(n,f){switch(f.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var i3={DEG2RAD:qe,RAD2DEG:Fe,generateUUID:Wv,clamp:Rf,euclideanModulo:xr,mapLinear:P6,inverseLerp:n6,lerp:I8,damp:z6,pingpong:t6,smoothstep:u6,smootherstep:r6,randInt:b6,randFloat:X6,randFloatSpread:d6,seededRandom:H6,degToRad:x6,radToDeg:s6,isPowerOfTwo:c6,ceilPowerOfTwo:j6,floorPowerOfTwo:a6,setQuaternionFromProperEuler:m6,normalize:gf,denormalize:tv},g=class n{constructor(f=0,v=0){n.prototype.isVector2=!0,this.x=f,this.y=v}get width(){return this.x}set width(f){this.x=f}get height(){return this.y}set height(f){this.y=f}set(f,v){return this.x=f,this.y=v,this}setScalar(f){return this.x=f,this.y=f,this}setX(f){return this.x=f,this}setY(f){return this.y=f,this}setComponent(f,v){switch(f){case 0:this.x=v;break;case 1:this.y=v;break;default:throw new Error("index is out of range: "+f)}return this}getComponent(f){switch(f){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+f)}}clone(){return new this.constructor(this.x,this.y)}copy(f){return this.x=f.x,this.y=f.y,this}add(f){return this.x+=f.x,this.y+=f.y,this}addScalar(f){return this.x+=f,this.y+=f,this}addVectors(f,v){return this.x=f.x+v.x,this.y=f.y+v.y,this}addScaledVector(f,v){return this.x+=f.x*v,this.y+=f.y*v,this}sub(f){return this.x-=f.x,this.y-=f.y,this}subScalar(f){return this.x-=f,this.y-=f,this}subVectors(f,v){return this.x=f.x-v.x,this.y=f.y-v.y,this}multiply(f){return this.x*=f.x,this.y*=f.y,this}multiplyScalar(f){return this.x*=f,this.y*=f,this}divide(f){return this.x/=f.x,this.y/=f.y,this}divideScalar(f){return this.multiplyScalar(1/f)}applyMatrix3(f){let v=this.x,e=this.y,P=f.elements;return this.x=P[0]*v+P[3]*e+P[6],this.y=P[1]*v+P[4]*e+P[7],this}min(f){return this.x=Math.min(this.x,f.x),this.y=Math.min(this.y,f.y),this}max(f){return this.x=Math.max(this.x,f.x),this.y=Math.max(this.y,f.y),this}clamp(f,v){return this.x=Rf(this.x,f.x,v.x),this.y=Rf(this.y,f.y,v.y),this}clampScalar(f,v){return this.x=Rf(this.x,f,v),this.y=Rf(this.y,f,v),this}clampLength(f,v){let e=this.length();return this.divideScalar(e||1).multiplyScalar(Rf(e,f,v))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(f){return this.x*f.x+this.y*f.y}cross(f){return this.x*f.y-this.y*f.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(f){let v=Math.sqrt(this.lengthSq()*f.lengthSq());if(v===0)return Math.PI/2;let e=this.dot(f)/v;return Math.acos(Rf(e,-1,1))}distanceTo(f){return Math.sqrt(this.distanceToSquared(f))}distanceToSquared(f){let v=this.x-f.x,e=this.y-f.y;return v*v+e*e}manhattanDistanceTo(f){return Math.abs(this.x-f.x)+Math.abs(this.y-f.y)}setLength(f){return this.normalize().multiplyScalar(f)}lerp(f,v){return this.x+=(f.x-this.x)*v,this.y+=(f.y-this.y)*v,this}lerpVectors(f,v,e){return this.x=f.x+(v.x-f.x)*e,this.y=f.y+(v.y-f.y)*e,this}equals(f){return f.x===this.x&&f.y===this.y}fromArray(f,v=0){return this.x=f[v],this.y=f[v+1],this}toArray(f=[],v=0){return f[v]=this.x,f[v+1]=this.y,f}fromBufferAttribute(f,v){return this.x=f.getX(v),this.y=f.getY(v),this}rotateAround(f,v){let e=Math.cos(v),P=Math.sin(v),z=this.x-f.x,t=this.y-f.y;return this.x=z*e-t*P+f.x,this.y=z*P+t*e+f.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},l3=class{constructor(f=0,v=0,e=0,P=1){this.isQuaternion=!0,this._x=f,this._y=v,this._z=e,this._w=P}static slerpFlat(f,v,e,P,z,t,u){let r=e[P+0],b=e[P+1],X=e[P+2],d=e[P+3],H=z[t+0],x=z[t+1],c=z[t+2],a=z[t+3];if(u===0){f[v+0]=r,f[v+1]=b,f[v+2]=X,f[v+3]=d;return}if(u===1){f[v+0]=H,f[v+1]=x,f[v+2]=c,f[v+3]=a;return}if(d!==a||r!==H||b!==x||X!==c){let j=1-u,s=r*H+b*x+X*c+d*a,i=s>=0?1:-1,N=1-s*s;if(N>Number.EPSILON){let p=Math.sqrt(N),l=Math.atan2(p,s*i);j=Math.sin(j*l)/p,u=Math.sin(u*l)/p}let m=u*i;if(r=r*j+H*m,b=b*j+x*m,X=X*j+c*m,d=d*j+a*m,j===1-u){let p=1/Math.sqrt(r*r+b*b+X*X+d*d);r*=p,b*=p,X*=p,d*=p}}f[v]=r,f[v+1]=b,f[v+2]=X,f[v+3]=d}static multiplyQuaternionsFlat(f,v,e,P,z,t){let u=e[P],r=e[P+1],b=e[P+2],X=e[P+3],d=z[t],H=z[t+1],x=z[t+2],c=z[t+3];return f[v]=u*c+X*d+r*x-b*H,f[v+1]=r*c+X*H+b*d-u*x,f[v+2]=b*c+X*x+u*H-r*d,f[v+3]=X*c-u*d-r*H-b*x,f}get x(){return this._x}set x(f){this._x=f,this._onChangeCallback()}get y(){return this._y}set y(f){this._y=f,this._onChangeCallback()}get z(){return this._z}set z(f){this._z=f,this._onChangeCallback()}get w(){return this._w}set w(f){this._w=f,this._onChangeCallback()}set(f,v,e,P){return this._x=f,this._y=v,this._z=e,this._w=P,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(f){return this._x=f.x,this._y=f.y,this._z=f.z,this._w=f.w,this._onChangeCallback(),this}setFromEuler(f,v=!0){let e=f._x,P=f._y,z=f._z,t=f._order,u=Math.cos,r=Math.sin,b=u(e/2),X=u(P/2),d=u(z/2),H=r(e/2),x=r(P/2),c=r(z/2);switch(t){case"XYZ":this._x=H*X*d+b*x*c,this._y=b*x*d-H*X*c,this._z=b*X*c+H*x*d,this._w=b*X*d-H*x*c;break;case"YXZ":this._x=H*X*d+b*x*c,this._y=b*x*d-H*X*c,this._z=b*X*c-H*x*d,this._w=b*X*d+H*x*c;break;case"ZXY":this._x=H*X*d-b*x*c,this._y=b*x*d+H*X*c,this._z=b*X*c+H*x*d,this._w=b*X*d-H*x*c;break;case"ZYX":this._x=H*X*d-b*x*c,this._y=b*x*d+H*X*c,this._z=b*X*c-H*x*d,this._w=b*X*d+H*x*c;break;case"YZX":this._x=H*X*d+b*x*c,this._y=b*x*d+H*X*c,this._z=b*X*c-H*x*d,this._w=b*X*d-H*x*c;break;case"XZY":this._x=H*X*d-b*x*c,this._y=b*x*d-H*X*c,this._z=b*X*c+H*x*d,this._w=b*X*d+H*x*c;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+t)}return v===!0&&this._onChangeCallback(),this}setFromAxisAngle(f,v){let e=v/2,P=Math.sin(e);return this._x=f.x*P,this._y=f.y*P,this._z=f.z*P,this._w=Math.cos(e),this._onChangeCallback(),this}setFromRotationMatrix(f){let v=f.elements,e=v[0],P=v[4],z=v[8],t=v[1],u=v[5],r=v[9],b=v[2],X=v[6],d=v[10],H=e+u+d;if(H>0){let x=.5/Math.sqrt(H+1);this._w=.25/x,this._x=(X-r)*x,this._y=(z-b)*x,this._z=(t-P)*x}else if(e>u&&e>d){let x=2*Math.sqrt(1+e-u-d);this._w=(X-r)/x,this._x=.25*x,this._y=(P+t)/x,this._z=(z+b)/x}else if(u>d){let x=2*Math.sqrt(1+u-e-d);this._w=(z-b)/x,this._x=(P+t)/x,this._y=.25*x,this._z=(r+X)/x}else{let x=2*Math.sqrt(1+d-e-u);this._w=(t-P)/x,this._x=(z+b)/x,this._y=(r+X)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(f,v){let e=f.dot(v)+1;return e<1e-8?(e=0,Math.abs(f.x)>Math.abs(f.z)?(this._x=-f.y,this._y=f.x,this._z=0,this._w=e):(this._x=0,this._y=-f.z,this._z=f.y,this._w=e)):(this._x=f.y*v.z-f.z*v.y,this._y=f.z*v.x-f.x*v.z,this._z=f.x*v.y-f.y*v.x,this._w=e),this.normalize()}angleTo(f){return 2*Math.acos(Math.abs(Rf(this.dot(f),-1,1)))}rotateTowards(f,v){let e=this.angleTo(f);if(e===0)return this;let P=Math.min(1,v/e);return this.slerp(f,P),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(f){return this._x*f._x+this._y*f._y+this._z*f._z+this._w*f._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let f=this.length();return f===0?(this._x=0,this._y=0,this._z=0,this._w=1):(f=1/f,this._x=this._x*f,this._y=this._y*f,this._z=this._z*f,this._w=this._w*f),this._onChangeCallback(),this}multiply(f){return this.multiplyQuaternions(this,f)}premultiply(f){return this.multiplyQuaternions(f,this)}multiplyQuaternions(f,v){let e=f._x,P=f._y,z=f._z,t=f._w,u=v._x,r=v._y,b=v._z,X=v._w;return this._x=e*X+t*u+P*b-z*r,this._y=P*X+t*r+z*u-e*b,this._z=z*X+t*b+e*r-P*u,this._w=t*X-e*u-P*r-z*b,this._onChangeCallback(),this}slerp(f,v){if(v===0)return this;if(v===1)return this.copy(f);let e=this._x,P=this._y,z=this._z,t=this._w,u=t*f._w+e*f._x+P*f._y+z*f._z;if(u<0?(this._w=-f._w,this._x=-f._x,this._y=-f._y,this._z=-f._z,u=-u):this.copy(f),u>=1)return this._w=t,this._x=e,this._y=P,this._z=z,this;let r=1-u*u;if(r<=Number.EPSILON){let x=1-v;return this._w=x*t+v*this._w,this._x=x*e+v*this._x,this._y=x*P+v*this._y,this._z=x*z+v*this._z,this.normalize(),this}let b=Math.sqrt(r),X=Math.atan2(b,u),d=Math.sin((1-v)*X)/b,H=Math.sin(v*X)/b;return this._w=t*d+this._w*H,this._x=e*d+this._x*H,this._y=P*d+this._y*H,this._z=z*d+this._z*H,this._onChangeCallback(),this}slerpQuaternions(f,v,e){return this.copy(f).slerp(v,e)}random(){let f=2*Math.PI*Math.random(),v=2*Math.PI*Math.random(),e=Math.random(),P=Math.sqrt(1-e),z=Math.sqrt(e);return this.set(P*Math.sin(f),P*Math.cos(f),z*Math.sin(v),z*Math.cos(v))}equals(f){return f._x===this._x&&f._y===this._y&&f._z===this._z&&f._w===this._w}fromArray(f,v=0){return this._x=f[v],this._y=f[v+1],this._z=f[v+2],this._w=f[v+3],this._onChangeCallback(),this}toArray(f=[],v=0){return f[v]=this._x,f[v+1]=this._y,f[v+2]=this._z,f[v+3]=this._w,f}fromBufferAttribute(f,v){return this._x=f.getX(v),this._y=f.getY(v),this._z=f.getZ(v),this._w=f.getW(v),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(f){return this._onChangeCallback=f,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(f=0,v=0,e=0){n.prototype.isVector3=!0,this.x=f,this.y=v,this.z=e}set(f,v,e){return e===void 0&&(e=this.z),this.x=f,this.y=v,this.z=e,this}setScalar(f){return this.x=f,this.y=f,this.z=f,this}setX(f){return this.x=f,this}setY(f){return this.y=f,this}setZ(f){return this.z=f,this}setComponent(f,v){switch(f){case 0:this.x=v;break;case 1:this.y=v;break;case 2:this.z=v;break;default:throw new Error("index is out of range: "+f)}return this}getComponent(f){switch(f){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+f)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(f){return this.x=f.x,this.y=f.y,this.z=f.z,this}add(f){return this.x+=f.x,this.y+=f.y,this.z+=f.z,this}addScalar(f){return this.x+=f,this.y+=f,this.z+=f,this}addVectors(f,v){return this.x=f.x+v.x,this.y=f.y+v.y,this.z=f.z+v.z,this}addScaledVector(f,v){return this.x+=f.x*v,this.y+=f.y*v,this.z+=f.z*v,this}sub(f){return this.x-=f.x,this.y-=f.y,this.z-=f.z,this}subScalar(f){return this.x-=f,this.y-=f,this.z-=f,this}subVectors(f,v){return this.x=f.x-v.x,this.y=f.y-v.y,this.z=f.z-v.z,this}multiply(f){return this.x*=f.x,this.y*=f.y,this.z*=f.z,this}multiplyScalar(f){return this.x*=f,this.y*=f,this.z*=f,this}multiplyVectors(f,v){return this.x=f.x*v.x,this.y=f.y*v.y,this.z=f.z*v.z,this}applyEuler(f){return this.applyQuaternion(I4.setFromEuler(f))}applyAxisAngle(f,v){return this.applyQuaternion(I4.setFromAxisAngle(f,v))}applyMatrix3(f){let v=this.x,e=this.y,P=this.z,z=f.elements;return this.x=z[0]*v+z[3]*e+z[6]*P,this.y=z[1]*v+z[4]*e+z[7]*P,this.z=z[2]*v+z[5]*e+z[8]*P,this}applyNormalMatrix(f){return this.applyMatrix3(f).normalize()}applyMatrix4(f){let v=this.x,e=this.y,P=this.z,z=f.elements,t=1/(z[3]*v+z[7]*e+z[11]*P+z[15]);return this.x=(z[0]*v+z[4]*e+z[8]*P+z[12])*t,this.y=(z[1]*v+z[5]*e+z[9]*P+z[13])*t,this.z=(z[2]*v+z[6]*e+z[10]*P+z[14])*t,this}applyQuaternion(f){let v=this.x,e=this.y,P=this.z,z=f.x,t=f.y,u=f.z,r=f.w,b=2*(t*P-u*e),X=2*(u*v-z*P),d=2*(z*e-t*v);return this.x=v+r*b+t*d-u*X,this.y=e+r*X+u*b-z*d,this.z=P+r*d+z*X-t*b,this}project(f){return this.applyMatrix4(f.matrixWorldInverse).applyMatrix4(f.projectionMatrix)}unproject(f){return this.applyMatrix4(f.projectionMatrixInverse).applyMatrix4(f.matrixWorld)}transformDirection(f){let v=this.x,e=this.y,P=this.z,z=f.elements;return this.x=z[0]*v+z[4]*e+z[8]*P,this.y=z[1]*v+z[5]*e+z[9]*P,this.z=z[2]*v+z[6]*e+z[10]*P,this.normalize()}divide(f){return this.x/=f.x,this.y/=f.y,this.z/=f.z,this}divideScalar(f){return this.multiplyScalar(1/f)}min(f){return this.x=Math.min(this.x,f.x),this.y=Math.min(this.y,f.y),this.z=Math.min(this.z,f.z),this}max(f){return this.x=Math.max(this.x,f.x),this.y=Math.max(this.y,f.y),this.z=Math.max(this.z,f.z),this}clamp(f,v){return this.x=Rf(this.x,f.x,v.x),this.y=Rf(this.y,f.y,v.y),this.z=Rf(this.z,f.z,v.z),this}clampScalar(f,v){return this.x=Rf(this.x,f,v),this.y=Rf(this.y,f,v),this.z=Rf(this.z,f,v),this}clampLength(f,v){let e=this.length();return this.divideScalar(e||1).multiplyScalar(Rf(e,f,v))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(f){return this.x*f.x+this.y*f.y+this.z*f.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(f){return this.normalize().multiplyScalar(f)}lerp(f,v){return this.x+=(f.x-this.x)*v,this.y+=(f.y-this.y)*v,this.z+=(f.z-this.z)*v,this}lerpVectors(f,v,e){return this.x=f.x+(v.x-f.x)*e,this.y=f.y+(v.y-f.y)*e,this.z=f.z+(v.z-f.z)*e,this}cross(f){return this.crossVectors(this,f)}crossVectors(f,v){let e=f.x,P=f.y,z=f.z,t=v.x,u=v.y,r=v.z;return this.x=P*r-z*u,this.y=z*t-e*r,this.z=e*u-P*t,this}projectOnVector(f){let v=f.lengthSq();if(v===0)return this.set(0,0,0);let e=f.dot(this)/v;return this.copy(f).multiplyScalar(e)}projectOnPlane(f){return Wt.copy(this).projectOnVector(f),this.sub(Wt)}reflect(f){return this.sub(Wt.copy(f).multiplyScalar(2*this.dot(f)))}angleTo(f){let v=Math.sqrt(this.lengthSq()*f.lengthSq());if(v===0)return Math.PI/2;let e=this.dot(f)/v;return Math.acos(Rf(e,-1,1))}distanceTo(f){return Math.sqrt(this.distanceToSquared(f))}distanceToSquared(f){let v=this.x-f.x,e=this.y-f.y,P=this.z-f.z;return v*v+e*e+P*P}manhattanDistanceTo(f){return Math.abs(this.x-f.x)+Math.abs(this.y-f.y)+Math.abs(this.z-f.z)}setFromSpherical(f){return this.setFromSphericalCoords(f.radius,f.phi,f.theta)}setFromSphericalCoords(f,v,e){let P=Math.sin(v)*f;return this.x=P*Math.sin(e),this.y=Math.cos(v)*f,this.z=P*Math.cos(e),this}setFromCylindrical(f){return this.setFromCylindricalCoords(f.radius,f.theta,f.y)}setFromCylindricalCoords(f,v,e){return this.x=f*Math.sin(v),this.y=e,this.z=f*Math.cos(v),this}setFromMatrixPosition(f){let v=f.elements;return this.x=v[12],this.y=v[13],this.z=v[14],this}setFromMatrixScale(f){let v=this.setFromMatrixColumn(f,0).length(),e=this.setFromMatrixColumn(f,1).length(),P=this.setFromMatrixColumn(f,2).length();return this.x=v,this.y=e,this.z=P,this}setFromMatrixColumn(f,v){return this.fromArray(f.elements,v*4)}setFromMatrix3Column(f,v){return this.fromArray(f.elements,v*3)}setFromEuler(f){return this.x=f._x,this.y=f._y,this.z=f._z,this}setFromColor(f){return this.x=f.r,this.y=f.g,this.z=f.b,this}equals(f){return f.x===this.x&&f.y===this.y&&f.z===this.z}fromArray(f,v=0){return this.x=f[v],this.y=f[v+1],this.z=f[v+2],this}toArray(f=[],v=0){return f[v]=this.x,f[v+1]=this.y,f[v+2]=this.z,f}fromBufferAttribute(f,v){return this.x=f.getX(v),this.y=f.getY(v),this.z=f.getZ(v),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let f=Math.random()*Math.PI*2,v=Math.random()*2-1,e=Math.sqrt(1-v*v);return this.x=e*Math.cos(f),this.y=v,this.z=e*Math.sin(f),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wt=new L,I4=new l3,Kf=class n{constructor(f,v,e,P,z,t,u,r,b){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],f!==void 0&&this.set(f,v,e,P,z,t,u,r,b)}set(f,v,e,P,z,t,u,r,b){let X=this.elements;return X[0]=f,X[1]=P,X[2]=u,X[3]=v,X[4]=z,X[5]=r,X[6]=e,X[7]=t,X[8]=b,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(f){let v=this.elements,e=f.elements;return v[0]=e[0],v[1]=e[1],v[2]=e[2],v[3]=e[3],v[4]=e[4],v[5]=e[5],v[6]=e[6],v[7]=e[7],v[8]=e[8],this}extractBasis(f,v,e){return f.setFromMatrix3Column(this,0),v.setFromMatrix3Column(this,1),e.setFromMatrix3Column(this,2),this}setFromMatrix4(f){let v=f.elements;return this.set(v[0],v[4],v[8],v[1],v[5],v[9],v[2],v[6],v[10]),this}multiply(f){return this.multiplyMatrices(this,f)}premultiply(f){return this.multiplyMatrices(f,this)}multiplyMatrices(f,v){let e=f.elements,P=v.elements,z=this.elements,t=e[0],u=e[3],r=e[6],b=e[1],X=e[4],d=e[7],H=e[2],x=e[5],c=e[8],a=P[0],j=P[3],s=P[6],i=P[1],N=P[4],m=P[7],p=P[2],l=P[5],W=P[8];return z[0]=t*a+u*i+r*p,z[3]=t*j+u*N+r*l,z[6]=t*s+u*m+r*W,z[1]=b*a+X*i+d*p,z[4]=b*j+X*N+d*l,z[7]=b*s+X*m+d*W,z[2]=H*a+x*i+c*p,z[5]=H*j+x*N+c*l,z[8]=H*s+x*m+c*W,this}multiplyScalar(f){let v=this.elements;return v[0]*=f,v[3]*=f,v[6]*=f,v[1]*=f,v[4]*=f,v[7]*=f,v[2]*=f,v[5]*=f,v[8]*=f,this}determinant(){let f=this.elements,v=f[0],e=f[1],P=f[2],z=f[3],t=f[4],u=f[5],r=f[6],b=f[7],X=f[8];return v*t*X-v*u*b-e*z*X+e*u*r+P*z*b-P*t*r}invert(){let f=this.elements,v=f[0],e=f[1],P=f[2],z=f[3],t=f[4],u=f[5],r=f[6],b=f[7],X=f[8],d=X*t-u*b,H=u*r-X*z,x=b*z-t*r,c=v*d+e*H+P*x;if(c===0)return this.set(0,0,0,0,0,0,0,0,0);let a=1/c;return f[0]=d*a,f[1]=(P*b-X*e)*a,f[2]=(u*e-P*t)*a,f[3]=H*a,f[4]=(X*v-P*r)*a,f[5]=(P*z-u*v)*a,f[6]=x*a,f[7]=(e*r-b*v)*a,f[8]=(t*v-e*z)*a,this}transpose(){let f,v=this.elements;return f=v[1],v[1]=v[3],v[3]=f,f=v[2],v[2]=v[6],v[6]=f,f=v[5],v[5]=v[7],v[7]=f,this}getNormalMatrix(f){return this.setFromMatrix4(f).invert().transpose()}transposeIntoArray(f){let v=this.elements;return f[0]=v[0],f[1]=v[3],f[2]=v[6],f[3]=v[1],f[4]=v[4],f[5]=v[7],f[6]=v[2],f[7]=v[5],f[8]=v[8],this}setUvTransform(f,v,e,P,z,t,u){let r=Math.cos(z),b=Math.sin(z);return this.set(e*r,e*b,-e*(r*t+b*u)+t+f,-P*b,P*r,-P*(-b*t+r*u)+u+v,0,0,1),this}scale(f,v){return this.premultiply(ht.makeScale(f,v)),this}rotate(f){return this.premultiply(ht.makeRotation(-f)),this}translate(f,v){return this.premultiply(ht.makeTranslation(f,v)),this}makeTranslation(f,v){return f.isVector2?this.set(1,0,f.x,0,1,f.y,0,0,1):this.set(1,0,f,0,1,v,0,0,1),this}makeRotation(f){let v=Math.cos(f),e=Math.sin(f);return this.set(v,-e,0,e,v,0,0,0,1),this}makeScale(f,v){return this.set(f,0,0,0,v,0,0,0,1),this}equals(f){let v=this.elements,e=f.elements;for(let P=0;P<9;P++)if(v[P]!==e[P])return!1;return!0}fromArray(f,v=0){for(let e=0;e<9;e++)this.elements[e]=f[e+v];return this}toArray(f=[],v=0){let e=this.elements;return f[v]=e[0],f[v+1]=e[1],f[v+2]=e[2],f[v+3]=e[3],f[v+4]=e[4],f[v+5]=e[5],f[v+6]=e[6],f[v+7]=e[7],f[v+8]=e[8],f}clone(){return new this.constructor().fromArray(this.elements)}},ht=new Kf;function sr(n){for(let f=n.length-1;f>=0;--f)if(n[f]>=65535)return!0;return!1}var N6={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function R9(n,f){return new N6[n](f)}function S9(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cr(){let n=S9("canvas");return n.style.display="block",n}var g4={};function K9(n){n in g4||(g4[n]=!0,console.warn(n))}function DX(n,f,v){return new Promise(function(e,P){function z(){switch(n.clientWaitSync(f,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:P();break;case n.TIMEOUT_EXPIRED:setTimeout(z,v);break;default:e()}}setTimeout(z,v)})}var E4=new Kf().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),B4=new Kf().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function i6(){let n={enabled:!0,workingColorSpace:I3,spaces:{},convert:function(P,z,t){return this.enabled===!1||z===t||!z||!t||(this.spaces[z].transfer===H3&&(P.r=V7(P.r),P.g=V7(P.g),P.b=V7(P.b)),this.spaces[z].primaries!==this.spaces[t].primaries&&(P.applyMatrix3(this.spaces[z].toXYZ),P.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===H3&&(P.r=G9(P.r),P.g=G9(P.g),P.b=G9(P.b))),P},workingToColorSpace:function(P,z){return this.convert(P,this.workingColorSpace,z)},colorSpaceToWorking:function(P,z){return this.convert(P,z,this.workingColorSpace)},getPrimaries:function(P){return this.spaces[P].primaries},getTransfer:function(P){return P===Uv?J9:this.spaces[P].transfer},getToneMappingMode:function(P){return this.spaces[P].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(P,z=this.workingColorSpace){return P.fromArray(this.spaces[z].luminanceCoefficients)},define:function(P){Object.assign(this.spaces,P)},_getMatrix:function(P,z,t){return P.copy(this.spaces[z].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(P){return this.spaces[P].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(P=this.workingColorSpace){return this.spaces[P].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(P,z){return K9("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(P,z)},toWorkingColorSpace:function(P,z){return K9("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(P,z)}},f=[.64,.33,.3,.6,.15,.06],v=[.2126,.7152,.0722],e=[.3127,.329];return n.define({[I3]:{primaries:f,whitePoint:e,transfer:J9,toXYZ:E4,fromXYZ:B4,luminanceCoefficients:v,workingColorSpaceConfig:{unpackColorSpace:X3},outputColorSpaceConfig:{drawingBufferColorSpace:X3}},[X3]:{primaries:f,whitePoint:e,transfer:H3,toXYZ:E4,fromXYZ:B4,luminanceCoefficients:v,outputColorSpaceConfig:{drawingBufferColorSpace:X3}}}),n}var Qf=i6();function V7(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function G9(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var a9,Q8=class{static getDataURL(f,v="image/png"){if(/^data:/i.test(f.src)||typeof HTMLCanvasElement>"u")return f.src;let e;if(f instanceof HTMLCanvasElement)e=f;else{a9===void 0&&(a9=S9("canvas")),a9.width=f.width,a9.height=f.height;let P=a9.getContext("2d");f instanceof ImageData?P.putImageData(f,0,0):P.drawImage(f,0,0,f.width,f.height),e=a9}return e.toDataURL(v)}static sRGBToLinear(f){if(typeof HTMLImageElement<"u"&&f instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&f instanceof ImageBitmap){let v=S9("canvas");v.width=f.width,v.height=f.height;let e=v.getContext("2d");e.drawImage(f,0,0,f.width,f.height);let P=e.getImageData(0,0,f.width,f.height),z=P.data;for(let t=0;t<z.length;t++)z[t]=V7(z[t]/255)*255;return e.putImageData(P,0,0),v}else if(f.data){let v=f.data.slice(0);for(let e=0;e<v.length;e++)v instanceof Uint8Array||v instanceof Uint8ClampedArray?v[e]=Math.floor(V7(v[e]/255)*255):v[e]=V7(v[e]);return{data:v,width:f.width,height:f.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),f}},Z6=0,Qv=class{constructor(f=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z6++}),this.uuid=Wv(),this.data=f,this.dataReady=!0,this.version=0}getSize(f){let v=this.data;return typeof HTMLVideoElement<"u"&&v instanceof HTMLVideoElement?f.set(v.videoWidth,v.videoHeight,0):v instanceof VideoFrame?f.set(v.displayHeight,v.displayWidth,0):v!==null?f.set(v.width,v.height,v.depth||0):f.set(0,0,0),f}set needsUpdate(f){f===!0&&this.version++}toJSON(f){let v=f===void 0||typeof f=="string";if(!v&&f.images[this.uuid]!==void 0)return f.images[this.uuid];let e={uuid:this.uuid,url:""},P=this.data;if(P!==null){let z;if(Array.isArray(P)){z=[];for(let t=0,u=P.length;t<u;t++)P[t].isDataTexture?z.push(wt(P[t].image)):z.push(wt(P[t]))}else z=wt(P);e.url=z}return v||(f.images[this.uuid]=e),e}};function wt(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Q8.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var T6=0,Vt=new L,T3=class n extends hv{constructor(f=n.DEFAULT_IMAGE,v=n.DEFAULT_MAPPING,e=uv,P=uv,z=Z3,t=iv,u=U3,r=Kv,b=n.DEFAULT_ANISOTROPY,X=Uv){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T6++}),this.uuid=Wv(),this.name="",this.source=new Qv(f),this.mipmaps=[],this.mapping=v,this.channel=0,this.wrapS=e,this.wrapT=P,this.magFilter=z,this.minFilter=t,this.anisotropy=b,this.format=u,this.internalFormat=null,this.type=r,this.offset=new g(0,0),this.repeat=new g(1,1),this.center=new g(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kf,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=X,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(f&&f.depth&&f.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vt).x}get height(){return this.source.getSize(Vt).y}get depth(){return this.source.getSize(Vt).z}get image(){return this.source.data}set image(f=null){this.source.data=f}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(f,v){this.updateRanges.push({start:f,count:v})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(f){return this.name=f.name,this.source=f.source,this.mipmaps=f.mipmaps.slice(0),this.mapping=f.mapping,this.channel=f.channel,this.wrapS=f.wrapS,this.wrapT=f.wrapT,this.magFilter=f.magFilter,this.minFilter=f.minFilter,this.anisotropy=f.anisotropy,this.format=f.format,this.internalFormat=f.internalFormat,this.type=f.type,this.offset.copy(f.offset),this.repeat.copy(f.repeat),this.center.copy(f.center),this.rotation=f.rotation,this.matrixAutoUpdate=f.matrixAutoUpdate,this.matrix.copy(f.matrix),this.generateMipmaps=f.generateMipmaps,this.premultiplyAlpha=f.premultiplyAlpha,this.flipY=f.flipY,this.unpackAlignment=f.unpackAlignment,this.colorSpace=f.colorSpace,this.renderTarget=f.renderTarget,this.isRenderTargetTexture=f.isRenderTargetTexture,this.isArrayTexture=f.isArrayTexture,this.userData=JSON.parse(JSON.stringify(f.userData)),this.needsUpdate=!0,this}setValues(f){for(let v in f){let e=f[v];if(e===void 0){console.warn(`THREE.Texture.setValues(): parameter '${v}' has value of undefined.`);continue}let P=this[v];if(P===void 0){console.warn(`THREE.Texture.setValues(): property '${v}' does not exist.`);continue}P&&e&&P.isVector2&&e.isVector2||P&&e&&P.isVector3&&e.isVector3||P&&e&&P.isMatrix3&&e.isMatrix3?P.copy(e):this[v]=e}}toJSON(f){let v=f===void 0||typeof f=="string";if(!v&&f.textures[this.uuid]!==void 0)return f.textures[this.uuid];let e={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(f).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(e.userData=this.userData),v||(f.textures[this.uuid]=e),e}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(f){if(this.mapping!==zn)return f;if(f.applyMatrix3(this.matrix),f.x<0||f.x>1)switch(this.wrapS){case Gv:f.x=f.x-Math.floor(f.x);break;case uv:f.x=f.x<0?0:1;break;case fe:Math.abs(Math.floor(f.x)%2)===1?f.x=Math.ceil(f.x)-f.x:f.x=f.x-Math.floor(f.x);break}if(f.y<0||f.y>1)switch(this.wrapT){case Gv:f.y=f.y-Math.floor(f.y);break;case uv:f.y=f.y<0?0:1;break;case fe:Math.abs(Math.floor(f.y)%2)===1?f.y=Math.ceil(f.y)-f.y:f.y=f.y-Math.floor(f.y);break}return this.flipY&&(f.y=1-f.y),f}set needsUpdate(f){f===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(f){f===!0&&this.pmremVersion++}};T3.DEFAULT_IMAGE=null;T3.DEFAULT_MAPPING=zn;T3.DEFAULT_ANISOTROPY=1;var n3=class n{constructor(f=0,v=0,e=0,P=1){n.prototype.isVector4=!0,this.x=f,this.y=v,this.z=e,this.w=P}get width(){return this.z}set width(f){this.z=f}get height(){return this.w}set height(f){this.w=f}set(f,v,e,P){return this.x=f,this.y=v,this.z=e,this.w=P,this}setScalar(f){return this.x=f,this.y=f,this.z=f,this.w=f,this}setX(f){return this.x=f,this}setY(f){return this.y=f,this}setZ(f){return this.z=f,this}setW(f){return this.w=f,this}setComponent(f,v){switch(f){case 0:this.x=v;break;case 1:this.y=v;break;case 2:this.z=v;break;case 3:this.w=v;break;default:throw new Error("index is out of range: "+f)}return this}getComponent(f){switch(f){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+f)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(f){return this.x=f.x,this.y=f.y,this.z=f.z,this.w=f.w!==void 0?f.w:1,this}add(f){return this.x+=f.x,this.y+=f.y,this.z+=f.z,this.w+=f.w,this}addScalar(f){return this.x+=f,this.y+=f,this.z+=f,this.w+=f,this}addVectors(f,v){return this.x=f.x+v.x,this.y=f.y+v.y,this.z=f.z+v.z,this.w=f.w+v.w,this}addScaledVector(f,v){return this.x+=f.x*v,this.y+=f.y*v,this.z+=f.z*v,this.w+=f.w*v,this}sub(f){return this.x-=f.x,this.y-=f.y,this.z-=f.z,this.w-=f.w,this}subScalar(f){return this.x-=f,this.y-=f,this.z-=f,this.w-=f,this}subVectors(f,v){return this.x=f.x-v.x,this.y=f.y-v.y,this.z=f.z-v.z,this.w=f.w-v.w,this}multiply(f){return this.x*=f.x,this.y*=f.y,this.z*=f.z,this.w*=f.w,this}multiplyScalar(f){return this.x*=f,this.y*=f,this.z*=f,this.w*=f,this}applyMatrix4(f){let v=this.x,e=this.y,P=this.z,z=this.w,t=f.elements;return this.x=t[0]*v+t[4]*e+t[8]*P+t[12]*z,this.y=t[1]*v+t[5]*e+t[9]*P+t[13]*z,this.z=t[2]*v+t[6]*e+t[10]*P+t[14]*z,this.w=t[3]*v+t[7]*e+t[11]*P+t[15]*z,this}divide(f){return this.x/=f.x,this.y/=f.y,this.z/=f.z,this.w/=f.w,this}divideScalar(f){return this.multiplyScalar(1/f)}setAxisAngleFromQuaternion(f){this.w=2*Math.acos(f.w);let v=Math.sqrt(1-f.w*f.w);return v<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=f.x/v,this.y=f.y/v,this.z=f.z/v),this}setAxisAngleFromRotationMatrix(f){let v,e,P,z,r=f.elements,b=r[0],X=r[4],d=r[8],H=r[1],x=r[5],c=r[9],a=r[2],j=r[6],s=r[10];if(Math.abs(X-H)<.01&&Math.abs(d-a)<.01&&Math.abs(c-j)<.01){if(Math.abs(X+H)<.1&&Math.abs(d+a)<.1&&Math.abs(c+j)<.1&&Math.abs(b+x+s-3)<.1)return this.set(1,0,0,0),this;v=Math.PI;let N=(b+1)/2,m=(x+1)/2,p=(s+1)/2,l=(X+H)/4,W=(d+a)/4,w=(c+j)/4;return N>m&&N>p?N<.01?(e=0,P=.707106781,z=.707106781):(e=Math.sqrt(N),P=l/e,z=W/e):m>p?m<.01?(e=.707106781,P=0,z=.707106781):(P=Math.sqrt(m),e=l/P,z=w/P):p<.01?(e=.707106781,P=.707106781,z=0):(z=Math.sqrt(p),e=W/z,P=w/z),this.set(e,P,z,v),this}let i=Math.sqrt((j-c)*(j-c)+(d-a)*(d-a)+(H-X)*(H-X));return Math.abs(i)<.001&&(i=1),this.x=(j-c)/i,this.y=(d-a)/i,this.z=(H-X)/i,this.w=Math.acos((b+x+s-1)/2),this}setFromMatrixPosition(f){let v=f.elements;return this.x=v[12],this.y=v[13],this.z=v[14],this.w=v[15],this}min(f){return this.x=Math.min(this.x,f.x),this.y=Math.min(this.y,f.y),this.z=Math.min(this.z,f.z),this.w=Math.min(this.w,f.w),this}max(f){return this.x=Math.max(this.x,f.x),this.y=Math.max(this.y,f.y),this.z=Math.max(this.z,f.z),this.w=Math.max(this.w,f.w),this}clamp(f,v){return this.x=Rf(this.x,f.x,v.x),this.y=Rf(this.y,f.y,v.y),this.z=Rf(this.z,f.z,v.z),this.w=Rf(this.w,f.w,v.w),this}clampScalar(f,v){return this.x=Rf(this.x,f,v),this.y=Rf(this.y,f,v),this.z=Rf(this.z,f,v),this.w=Rf(this.w,f,v),this}clampLength(f,v){let e=this.length();return this.divideScalar(e||1).multiplyScalar(Rf(e,f,v))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(f){return this.x*f.x+this.y*f.y+this.z*f.z+this.w*f.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(f){return this.normalize().multiplyScalar(f)}lerp(f,v){return this.x+=(f.x-this.x)*v,this.y+=(f.y-this.y)*v,this.z+=(f.z-this.z)*v,this.w+=(f.w-this.w)*v,this}lerpVectors(f,v,e){return this.x=f.x+(v.x-f.x)*e,this.y=f.y+(v.y-f.y)*e,this.z=f.z+(v.z-f.z)*e,this.w=f.w+(v.w-f.w)*e,this}equals(f){return f.x===this.x&&f.y===this.y&&f.z===this.z&&f.w===this.w}fromArray(f,v=0){return this.x=f[v],this.y=f[v+1],this.z=f[v+2],this.w=f[v+3],this}toArray(f=[],v=0){return f[v]=this.x,f[v+1]=this.y,f[v+2]=this.z,f[v+3]=this.w,f}fromBufferAttribute(f,v){return this.x=f.getX(v),this.y=f.getY(v),this.z=f.getZ(v),this.w=f.getW(v),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},U9=class extends hv{constructor(f=1,v=1,e={}){super(),e=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Z3,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},e),this.isRenderTarget=!0,this.width=f,this.height=v,this.depth=e.depth,this.scissor=new n3(0,0,f,v),this.scissorTest=!1,this.viewport=new n3(0,0,f,v);let P={width:f,height:v,depth:e.depth},z=new T3(P);this.textures=[];let t=e.count;for(let u=0;u<t;u++)this.textures[u]=z.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(e),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=e.depthTexture,this.samples=e.samples,this.multiview=e.multiview}_setTextureOptions(f={}){let v={minFilter:Z3,generateMipmaps:!1,flipY:!1,internalFormat:null};f.mapping!==void 0&&(v.mapping=f.mapping),f.wrapS!==void 0&&(v.wrapS=f.wrapS),f.wrapT!==void 0&&(v.wrapT=f.wrapT),f.wrapR!==void 0&&(v.wrapR=f.wrapR),f.magFilter!==void 0&&(v.magFilter=f.magFilter),f.minFilter!==void 0&&(v.minFilter=f.minFilter),f.format!==void 0&&(v.format=f.format),f.type!==void 0&&(v.type=f.type),f.anisotropy!==void 0&&(v.anisotropy=f.anisotropy),f.colorSpace!==void 0&&(v.colorSpace=f.colorSpace),f.flipY!==void 0&&(v.flipY=f.flipY),f.generateMipmaps!==void 0&&(v.generateMipmaps=f.generateMipmaps),f.internalFormat!==void 0&&(v.internalFormat=f.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(v)}get texture(){return this.textures[0]}set texture(f){this.textures[0]=f}set depthTexture(f){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),f!==null&&(f.renderTarget=this),this._depthTexture=f}get depthTexture(){return this._depthTexture}setSize(f,v,e=1){if(this.width!==f||this.height!==v||this.depth!==e){this.width=f,this.height=v,this.depth=e;for(let P=0,z=this.textures.length;P<z;P++)this.textures[P].image.width=f,this.textures[P].image.height=v,this.textures[P].image.depth=e,this.textures[P].isArrayTexture=this.textures[P].image.depth>1;this.dispose()}this.viewport.set(0,0,f,v),this.scissor.set(0,0,f,v)}clone(){return new this.constructor().copy(this)}copy(f){this.width=f.width,this.height=f.height,this.depth=f.depth,this.scissor.copy(f.scissor),this.scissorTest=f.scissorTest,this.viewport.copy(f.viewport),this.textures.length=0;for(let v=0,e=f.textures.length;v<e;v++){this.textures[v]=f.textures[v].clone(),this.textures[v].isRenderTargetTexture=!0,this.textures[v].renderTarget=this;let P=Object.assign({},f.textures[v].image);this.textures[v].source=new Qv(P)}return this.depthBuffer=f.depthBuffer,this.stencilBuffer=f.stencilBuffer,this.resolveDepthBuffer=f.resolveDepthBuffer,this.resolveStencilBuffer=f.resolveStencilBuffer,f.depthTexture!==null&&(this.depthTexture=f.depthTexture.clone()),this.samples=f.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},C3=class extends U9{constructor(f=1,v=1,e={}){super(f,v,e),this.isWebGLRenderTarget=!0}},Re=class extends T3{constructor(f=null,v=1,e=1,P=1){super(null),this.isDataArrayTexture=!0,this.image={data:f,width:v,height:e,depth:P},this.magFilter=q3,this.minFilter=q3,this.wrapR=uv,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(f){this.layerUpdates.add(f)}clearLayerUpdates(){this.layerUpdates.clear()}},Kz=class extends C3{constructor(f=1,v=1,e=1,P={}){super(f,v,P),this.isWebGLArrayRenderTarget=!0,this.depth=e,this.texture=new Re(null,f,v,e),this._setTextureOptions(P),this.texture.isRenderTargetTexture=!0}},Ge=class extends T3{constructor(f=null,v=1,e=1,P=1){super(null),this.isData3DTexture=!0,this.image={data:f,width:v,height:e,depth:P},this.magFilter=q3,this.minFilter=q3,this.wrapR=uv,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Uz=class extends C3{constructor(f=1,v=1,e=1,P={}){super(f,v,P),this.isWebGL3DRenderTarget=!0,this.depth=e,this.texture=new Ge(null,f,v,e),this._setTextureOptions(P),this.texture.isRenderTargetTexture=!0}},D3=class{constructor(f=new L(1/0,1/0,1/0),v=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=f,this.max=v}set(f,v){return this.min.copy(f),this.max.copy(v),this}setFromArray(f){this.makeEmpty();for(let v=0,e=f.length;v<e;v+=3)this.expandByPoint(gv.fromArray(f,v));return this}setFromBufferAttribute(f){this.makeEmpty();for(let v=0,e=f.count;v<e;v++)this.expandByPoint(gv.fromBufferAttribute(f,v));return this}setFromPoints(f){this.makeEmpty();for(let v=0,e=f.length;v<e;v++)this.expandByPoint(f[v]);return this}setFromCenterAndSize(f,v){let e=gv.copy(v).multiplyScalar(.5);return this.min.copy(f).sub(e),this.max.copy(f).add(e),this}setFromObject(f,v=!1){return this.makeEmpty(),this.expandByObject(f,v)}clone(){return new this.constructor().copy(this)}copy(f){return this.min.copy(f.min),this.max.copy(f.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(f){return this.isEmpty()?f.set(0,0,0):f.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(f){return this.isEmpty()?f.set(0,0,0):f.subVectors(this.max,this.min)}expandByPoint(f){return this.min.min(f),this.max.max(f),this}expandByVector(f){return this.min.sub(f),this.max.add(f),this}expandByScalar(f){return this.min.addScalar(-f),this.max.addScalar(f),this}expandByObject(f,v=!1){f.updateWorldMatrix(!1,!1);let e=f.geometry;if(e!==void 0){let z=e.getAttribute("position");if(v===!0&&z!==void 0&&f.isInstancedMesh!==!0)for(let t=0,u=z.count;t<u;t++)f.isMesh===!0?f.getVertexPosition(t,gv):gv.fromBufferAttribute(z,t),gv.applyMatrix4(f.matrixWorld),this.expandByPoint(gv);else f.boundingBox!==void 0?(f.boundingBox===null&&f.computeBoundingBox(),$n.copy(f.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),$n.copy(e.boundingBox)),$n.applyMatrix4(f.matrixWorld),this.union($n)}let P=f.children;for(let z=0,t=P.length;z<t;z++)this.expandByObject(P[z],v);return this}containsPoint(f){return f.x>=this.min.x&&f.x<=this.max.x&&f.y>=this.min.y&&f.y<=this.max.y&&f.z>=this.min.z&&f.z<=this.max.z}containsBox(f){return this.min.x<=f.min.x&&f.max.x<=this.max.x&&this.min.y<=f.min.y&&f.max.y<=this.max.y&&this.min.z<=f.min.z&&f.max.z<=this.max.z}getParameter(f,v){return v.set((f.x-this.min.x)/(this.max.x-this.min.x),(f.y-this.min.y)/(this.max.y-this.min.y),(f.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(f){return f.max.x>=this.min.x&&f.min.x<=this.max.x&&f.max.y>=this.min.y&&f.min.y<=this.max.y&&f.max.z>=this.min.z&&f.min.z<=this.max.z}intersectsSphere(f){return this.clampPoint(f.center,gv),gv.distanceToSquared(f.center)<=f.radius*f.radius}intersectsPlane(f){let v,e;return f.normal.x>0?(v=f.normal.x*this.min.x,e=f.normal.x*this.max.x):(v=f.normal.x*this.max.x,e=f.normal.x*this.min.x),f.normal.y>0?(v+=f.normal.y*this.min.y,e+=f.normal.y*this.max.y):(v+=f.normal.y*this.max.y,e+=f.normal.y*this.min.y),f.normal.z>0?(v+=f.normal.z*this.min.z,e+=f.normal.z*this.max.z):(v+=f.normal.z*this.max.z,e+=f.normal.z*this.min.z),v<=-f.constant&&e>=-f.constant}intersectsTriangle(f){if(this.isEmpty())return!1;this.getCenter(w8),fz.subVectors(this.max,w8),m9.subVectors(f.a,w8),N9.subVectors(f.b,w8),i9.subVectors(f.c,w8),S7.subVectors(N9,m9),K7.subVectors(i9,N9),ie.subVectors(m9,i9);let v=[0,-S7.z,S7.y,0,-K7.z,K7.y,0,-ie.z,ie.y,S7.z,0,-S7.x,K7.z,0,-K7.x,ie.z,0,-ie.x,-S7.y,S7.x,0,-K7.y,K7.x,0,-ie.y,ie.x,0];return!Dt(v,m9,N9,i9,fz)||(v=[1,0,0,0,1,0,0,0,1],!Dt(v,m9,N9,i9,fz))?!1:(vz.crossVectors(S7,K7),v=[vz.x,vz.y,vz.z],Dt(v,m9,N9,i9,fz))}clampPoint(f,v){return v.copy(f).clamp(this.min,this.max)}distanceToPoint(f){return this.clampPoint(f,gv).distanceTo(f)}getBoundingSphere(f){return this.isEmpty()?f.makeEmpty():(this.getCenter(f.center),f.radius=this.getSize(gv).length()*.5),f}intersect(f){return this.min.max(f.min),this.max.min(f.max),this.isEmpty()&&this.makeEmpty(),this}union(f){return this.min.min(f.min),this.max.max(f.max),this}applyMatrix4(f){return this.isEmpty()?this:(p7[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(f),p7[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(f),p7[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(f),p7[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(f),p7[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(f),p7[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(f),p7[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(f),p7[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(f),this.setFromPoints(p7),this)}translate(f){return this.min.add(f),this.max.add(f),this}equals(f){return f.min.equals(this.min)&&f.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(f){return this.min.fromArray(f.min),this.max.fromArray(f.max),this}},p7=[new L,new L,new L,new L,new L,new L,new L,new L],gv=new L,$n=new D3,m9=new L,N9=new L,i9=new L,S7=new L,K7=new L,ie=new L,w8=new L,fz=new L,vz=new L,Ze=new L;function Dt(n,f,v,e,P){for(let z=0,t=n.length-3;z<=t;z+=3){Ze.fromArray(n,z);let u=P.x*Math.abs(Ze.x)+P.y*Math.abs(Ze.y)+P.z*Math.abs(Ze.z),r=f.dot(Ze),b=v.dot(Ze),X=e.dot(Ze);if(Math.max(-Math.max(r,b,X),Math.min(r,b,X))>u)return!1}return!0}var y6=new D3,V8=new L,qt=new L,w3=class{constructor(f=new L,v=-1){this.isSphere=!0,this.center=f,this.radius=v}set(f,v){return this.center.copy(f),this.radius=v,this}setFromPoints(f,v){let e=this.center;v!==void 0?e.copy(v):y6.setFromPoints(f).getCenter(e);let P=0;for(let z=0,t=f.length;z<t;z++)P=Math.max(P,e.distanceToSquared(f[z]));return this.radius=Math.sqrt(P),this}copy(f){return this.center.copy(f.center),this.radius=f.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(f){return f.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(f){return f.distanceTo(this.center)-this.radius}intersectsSphere(f){let v=this.radius+f.radius;return f.center.distanceToSquared(this.center)<=v*v}intersectsBox(f){return f.intersectsSphere(this)}intersectsPlane(f){return Math.abs(f.distanceToPoint(this.center))<=this.radius}clampPoint(f,v){let e=this.center.distanceToSquared(f);return v.copy(f),e>this.radius*this.radius&&(v.sub(this.center).normalize(),v.multiplyScalar(this.radius).add(this.center)),v}getBoundingBox(f){return this.isEmpty()?(f.makeEmpty(),f):(f.set(this.center,this.center),f.expandByScalar(this.radius),f)}applyMatrix4(f){return this.center.applyMatrix4(f),this.radius=this.radius*f.getMaxScaleOnAxis(),this}translate(f){return this.center.add(f),this}expandByPoint(f){if(this.isEmpty())return this.center.copy(f),this.radius=0,this;V8.subVectors(f,this.center);let v=V8.lengthSq();if(v>this.radius*this.radius){let e=Math.sqrt(v),P=(e-this.radius)*.5;this.center.addScaledVector(V8,P/e),this.radius+=P}return this}union(f){return f.isEmpty()?this:this.isEmpty()?(this.copy(f),this):(this.center.equals(f.center)===!0?this.radius=Math.max(this.radius,f.radius):(qt.subVectors(f.center,this.center).setLength(f.radius),this.expandByPoint(V8.copy(f.center).add(qt)),this.expandByPoint(V8.copy(f.center).sub(qt))),this)}equals(f){return f.center.equals(this.center)&&f.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(f){return this.radius=f.radius,this.center.fromArray(f.center),this}},O7=new L,ot=new L,ez=new L,U7=new L,Mt=new L,Pz=new L,Ft=new L,_v=class{constructor(f=new L,v=new L(0,0,-1)){this.origin=f,this.direction=v}set(f,v){return this.origin.copy(f),this.direction.copy(v),this}copy(f){return this.origin.copy(f.origin),this.direction.copy(f.direction),this}at(f,v){return v.copy(this.origin).addScaledVector(this.direction,f)}lookAt(f){return this.direction.copy(f).sub(this.origin).normalize(),this}recast(f){return this.origin.copy(this.at(f,O7)),this}closestPointToPoint(f,v){v.subVectors(f,this.origin);let e=v.dot(this.direction);return e<0?v.copy(this.origin):v.copy(this.origin).addScaledVector(this.direction,e)}distanceToPoint(f){return Math.sqrt(this.distanceSqToPoint(f))}distanceSqToPoint(f){let v=O7.subVectors(f,this.origin).dot(this.direction);return v<0?this.origin.distanceToSquared(f):(O7.copy(this.origin).addScaledVector(this.direction,v),O7.distanceToSquared(f))}distanceSqToSegment(f,v,e,P){ot.copy(f).add(v).multiplyScalar(.5),ez.copy(v).sub(f).normalize(),U7.copy(this.origin).sub(ot);let z=f.distanceTo(v)*.5,t=-this.direction.dot(ez),u=U7.dot(this.direction),r=-U7.dot(ez),b=U7.lengthSq(),X=Math.abs(1-t*t),d,H,x,c;if(X>0)if(d=t*r-u,H=t*u-r,c=z*X,d>=0)if(H>=-c)if(H<=c){let a=1/X;d*=a,H*=a,x=d*(d+t*H+2*u)+H*(t*d+H+2*r)+b}else H=z,d=Math.max(0,-(t*H+u)),x=-d*d+H*(H+2*r)+b;else H=-z,d=Math.max(0,-(t*H+u)),x=-d*d+H*(H+2*r)+b;else H<=-c?(d=Math.max(0,-(-t*z+u)),H=d>0?-z:Math.min(Math.max(-z,-r),z),x=-d*d+H*(H+2*r)+b):H<=c?(d=0,H=Math.min(Math.max(-z,-r),z),x=H*(H+2*r)+b):(d=Math.max(0,-(t*z+u)),H=d>0?z:Math.min(Math.max(-z,-r),z),x=-d*d+H*(H+2*r)+b);else H=t>0?-z:z,d=Math.max(0,-(t*H+u)),x=-d*d+H*(H+2*r)+b;return e&&e.copy(this.origin).addScaledVector(this.direction,d),P&&P.copy(ot).addScaledVector(ez,H),x}intersectSphere(f,v){O7.subVectors(f.center,this.origin);let e=O7.dot(this.direction),P=O7.dot(O7)-e*e,z=f.radius*f.radius;if(P>z)return null;let t=Math.sqrt(z-P),u=e-t,r=e+t;return r<0?null:u<0?this.at(r,v):this.at(u,v)}intersectsSphere(f){return f.radius<0?!1:this.distanceSqToPoint(f.center)<=f.radius*f.radius}distanceToPlane(f){let v=f.normal.dot(this.direction);if(v===0)return f.distanceToPoint(this.origin)===0?0:null;let e=-(this.origin.dot(f.normal)+f.constant)/v;return e>=0?e:null}intersectPlane(f,v){let e=this.distanceToPlane(f);return e===null?null:this.at(e,v)}intersectsPlane(f){let v=f.distanceToPoint(this.origin);return v===0||f.normal.dot(this.direction)*v<0}intersectBox(f,v){let e,P,z,t,u,r,b=1/this.direction.x,X=1/this.direction.y,d=1/this.direction.z,H=this.origin;return b>=0?(e=(f.min.x-H.x)*b,P=(f.max.x-H.x)*b):(e=(f.max.x-H.x)*b,P=(f.min.x-H.x)*b),X>=0?(z=(f.min.y-H.y)*X,t=(f.max.y-H.y)*X):(z=(f.max.y-H.y)*X,t=(f.min.y-H.y)*X),e>t||z>P||((z>e||isNaN(e))&&(e=z),(t<P||isNaN(P))&&(P=t),d>=0?(u=(f.min.z-H.z)*d,r=(f.max.z-H.z)*d):(u=(f.max.z-H.z)*d,r=(f.min.z-H.z)*d),e>r||u>P)||((u>e||e!==e)&&(e=u),(r<P||P!==P)&&(P=r),P<0)?null:this.at(e>=0?e:P,v)}intersectsBox(f){return this.intersectBox(f,O7)!==null}intersectTriangle(f,v,e,P,z){Mt.subVectors(v,f),Pz.subVectors(e,f),Ft.crossVectors(Mt,Pz);let t=this.direction.dot(Ft),u;if(t>0){if(P)return null;u=1}else if(t<0)u=-1,t=-t;else return null;U7.subVectors(this.origin,f);let r=u*this.direction.dot(Pz.crossVectors(U7,Pz));if(r<0)return null;let b=u*this.direction.dot(Mt.cross(U7));if(b<0||r+b>t)return null;let X=-u*U7.dot(Ft);return X<0?null:this.at(X/t,z)}applyMatrix4(f){return this.origin.applyMatrix4(f),this.direction.transformDirection(f),this}equals(f){return f.origin.equals(this.origin)&&f.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},of=class n{constructor(f,v,e,P,z,t,u,r,b,X,d,H,x,c,a,j){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],f!==void 0&&this.set(f,v,e,P,z,t,u,r,b,X,d,H,x,c,a,j)}set(f,v,e,P,z,t,u,r,b,X,d,H,x,c,a,j){let s=this.elements;return s[0]=f,s[4]=v,s[8]=e,s[12]=P,s[1]=z,s[5]=t,s[9]=u,s[13]=r,s[2]=b,s[6]=X,s[10]=d,s[14]=H,s[3]=x,s[7]=c,s[11]=a,s[15]=j,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(f){let v=this.elements,e=f.elements;return v[0]=e[0],v[1]=e[1],v[2]=e[2],v[3]=e[3],v[4]=e[4],v[5]=e[5],v[6]=e[6],v[7]=e[7],v[8]=e[8],v[9]=e[9],v[10]=e[10],v[11]=e[11],v[12]=e[12],v[13]=e[13],v[14]=e[14],v[15]=e[15],this}copyPosition(f){let v=this.elements,e=f.elements;return v[12]=e[12],v[13]=e[13],v[14]=e[14],this}setFromMatrix3(f){let v=f.elements;return this.set(v[0],v[3],v[6],0,v[1],v[4],v[7],0,v[2],v[5],v[8],0,0,0,0,1),this}extractBasis(f,v,e){return f.setFromMatrixColumn(this,0),v.setFromMatrixColumn(this,1),e.setFromMatrixColumn(this,2),this}makeBasis(f,v,e){return this.set(f.x,v.x,e.x,0,f.y,v.y,e.y,0,f.z,v.z,e.z,0,0,0,0,1),this}extractRotation(f){let v=this.elements,e=f.elements,P=1/Z9.setFromMatrixColumn(f,0).length(),z=1/Z9.setFromMatrixColumn(f,1).length(),t=1/Z9.setFromMatrixColumn(f,2).length();return v[0]=e[0]*P,v[1]=e[1]*P,v[2]=e[2]*P,v[3]=0,v[4]=e[4]*z,v[5]=e[5]*z,v[6]=e[6]*z,v[7]=0,v[8]=e[8]*t,v[9]=e[9]*t,v[10]=e[10]*t,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,this}makeRotationFromEuler(f){let v=this.elements,e=f.x,P=f.y,z=f.z,t=Math.cos(e),u=Math.sin(e),r=Math.cos(P),b=Math.sin(P),X=Math.cos(z),d=Math.sin(z);if(f.order==="XYZ"){let H=t*X,x=t*d,c=u*X,a=u*d;v[0]=r*X,v[4]=-r*d,v[8]=b,v[1]=x+c*b,v[5]=H-a*b,v[9]=-u*r,v[2]=a-H*b,v[6]=c+x*b,v[10]=t*r}else if(f.order==="YXZ"){let H=r*X,x=r*d,c=b*X,a=b*d;v[0]=H+a*u,v[4]=c*u-x,v[8]=t*b,v[1]=t*d,v[5]=t*X,v[9]=-u,v[2]=x*u-c,v[6]=a+H*u,v[10]=t*r}else if(f.order==="ZXY"){let H=r*X,x=r*d,c=b*X,a=b*d;v[0]=H-a*u,v[4]=-t*d,v[8]=c+x*u,v[1]=x+c*u,v[5]=t*X,v[9]=a-H*u,v[2]=-t*b,v[6]=u,v[10]=t*r}else if(f.order==="ZYX"){let H=t*X,x=t*d,c=u*X,a=u*d;v[0]=r*X,v[4]=c*b-x,v[8]=H*b+a,v[1]=r*d,v[5]=a*b+H,v[9]=x*b-c,v[2]=-b,v[6]=u*r,v[10]=t*r}else if(f.order==="YZX"){let H=t*r,x=t*b,c=u*r,a=u*b;v[0]=r*X,v[4]=a-H*d,v[8]=c*d+x,v[1]=d,v[5]=t*X,v[9]=-u*X,v[2]=-b*X,v[6]=x*d+c,v[10]=H-a*d}else if(f.order==="XZY"){let H=t*r,x=t*b,c=u*r,a=u*b;v[0]=r*X,v[4]=-d,v[8]=b*X,v[1]=H*d+a,v[5]=t*X,v[9]=x*d-c,v[2]=c*d-x,v[6]=u*X,v[10]=a*d+H}return v[3]=0,v[7]=0,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,this}makeRotationFromQuaternion(f){return this.compose(p6,f,O6)}lookAt(f,v,e){let P=this.elements;return Ov.subVectors(f,v),Ov.lengthSq()===0&&(Ov.z=1),Ov.normalize(),I7.crossVectors(e,Ov),I7.lengthSq()===0&&(Math.abs(e.z)===1?Ov.x+=1e-4:Ov.z+=1e-4,Ov.normalize(),I7.crossVectors(e,Ov)),I7.normalize(),nz.crossVectors(Ov,I7),P[0]=I7.x,P[4]=nz.x,P[8]=Ov.x,P[1]=I7.y,P[5]=nz.y,P[9]=Ov.y,P[2]=I7.z,P[6]=nz.z,P[10]=Ov.z,this}multiply(f){return this.multiplyMatrices(this,f)}premultiply(f){return this.multiplyMatrices(f,this)}multiplyMatrices(f,v){let e=f.elements,P=v.elements,z=this.elements,t=e[0],u=e[4],r=e[8],b=e[12],X=e[1],d=e[5],H=e[9],x=e[13],c=e[2],a=e[6],j=e[10],s=e[14],i=e[3],N=e[7],m=e[11],p=e[15],l=P[0],W=P[4],w=P[8],T=P[12],y=P[1],V=P[5],M=P[9],q=P[13],k=P[2],J=P[6],S=P[10],B=P[14],Y=P[3],nf=P[7],df=P[11],Zf=P[15];return z[0]=t*l+u*y+r*k+b*Y,z[4]=t*W+u*V+r*J+b*nf,z[8]=t*w+u*M+r*S+b*df,z[12]=t*T+u*q+r*B+b*Zf,z[1]=X*l+d*y+H*k+x*Y,z[5]=X*W+d*V+H*J+x*nf,z[9]=X*w+d*M+H*S+x*df,z[13]=X*T+d*q+H*B+x*Zf,z[2]=c*l+a*y+j*k+s*Y,z[6]=c*W+a*V+j*J+s*nf,z[10]=c*w+a*M+j*S+s*df,z[14]=c*T+a*q+j*B+s*Zf,z[3]=i*l+N*y+m*k+p*Y,z[7]=i*W+N*V+m*J+p*nf,z[11]=i*w+N*M+m*S+p*df,z[15]=i*T+N*q+m*B+p*Zf,this}multiplyScalar(f){let v=this.elements;return v[0]*=f,v[4]*=f,v[8]*=f,v[12]*=f,v[1]*=f,v[5]*=f,v[9]*=f,v[13]*=f,v[2]*=f,v[6]*=f,v[10]*=f,v[14]*=f,v[3]*=f,v[7]*=f,v[11]*=f,v[15]*=f,this}determinant(){let f=this.elements,v=f[0],e=f[4],P=f[8],z=f[12],t=f[1],u=f[5],r=f[9],b=f[13],X=f[2],d=f[6],H=f[10],x=f[14],c=f[3],a=f[7],j=f[11],s=f[15];return c*(+z*r*d-P*b*d-z*u*H+e*b*H+P*u*x-e*r*x)+a*(+v*r*x-v*b*H+z*t*H-P*t*x+P*b*X-z*r*X)+j*(+v*b*d-v*u*x-z*t*d+e*t*x+z*u*X-e*b*X)+s*(-P*u*X-v*r*d+v*u*H+P*t*d-e*t*H+e*r*X)}transpose(){let f=this.elements,v;return v=f[1],f[1]=f[4],f[4]=v,v=f[2],f[2]=f[8],f[8]=v,v=f[6],f[6]=f[9],f[9]=v,v=f[3],f[3]=f[12],f[12]=v,v=f[7],f[7]=f[13],f[13]=v,v=f[11],f[11]=f[14],f[14]=v,this}setPosition(f,v,e){let P=this.elements;return f.isVector3?(P[12]=f.x,P[13]=f.y,P[14]=f.z):(P[12]=f,P[13]=v,P[14]=e),this}invert(){let f=this.elements,v=f[0],e=f[1],P=f[2],z=f[3],t=f[4],u=f[5],r=f[6],b=f[7],X=f[8],d=f[9],H=f[10],x=f[11],c=f[12],a=f[13],j=f[14],s=f[15],i=d*j*b-a*H*b+a*r*x-u*j*x-d*r*s+u*H*s,N=c*H*b-X*j*b-c*r*x+t*j*x+X*r*s-t*H*s,m=X*a*b-c*d*b+c*u*x-t*a*x-X*u*s+t*d*s,p=c*d*r-X*a*r-c*u*H+t*a*H+X*u*j-t*d*j,l=v*i+e*N+P*m+z*p;if(l===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/l;return f[0]=i*W,f[1]=(a*H*z-d*j*z-a*P*x+e*j*x+d*P*s-e*H*s)*W,f[2]=(u*j*z-a*r*z+a*P*b-e*j*b-u*P*s+e*r*s)*W,f[3]=(d*r*z-u*H*z-d*P*b+e*H*b+u*P*x-e*r*x)*W,f[4]=N*W,f[5]=(X*j*z-c*H*z+c*P*x-v*j*x-X*P*s+v*H*s)*W,f[6]=(c*r*z-t*j*z-c*P*b+v*j*b+t*P*s-v*r*s)*W,f[7]=(t*H*z-X*r*z+X*P*b-v*H*b-t*P*x+v*r*x)*W,f[8]=m*W,f[9]=(c*d*z-X*a*z-c*e*x+v*a*x+X*e*s-v*d*s)*W,f[10]=(t*a*z-c*u*z+c*e*b-v*a*b-t*e*s+v*u*s)*W,f[11]=(X*u*z-t*d*z-X*e*b+v*d*b+t*e*x-v*u*x)*W,f[12]=p*W,f[13]=(X*a*P-c*d*P+c*e*H-v*a*H-X*e*j+v*d*j)*W,f[14]=(c*u*P-t*a*P-c*e*r+v*a*r+t*e*j-v*u*j)*W,f[15]=(t*d*P-X*u*P+X*e*r-v*d*r-t*e*H+v*u*H)*W,this}scale(f){let v=this.elements,e=f.x,P=f.y,z=f.z;return v[0]*=e,v[4]*=P,v[8]*=z,v[1]*=e,v[5]*=P,v[9]*=z,v[2]*=e,v[6]*=P,v[10]*=z,v[3]*=e,v[7]*=P,v[11]*=z,this}getMaxScaleOnAxis(){let f=this.elements,v=f[0]*f[0]+f[1]*f[1]+f[2]*f[2],e=f[4]*f[4]+f[5]*f[5]+f[6]*f[6],P=f[8]*f[8]+f[9]*f[9]+f[10]*f[10];return Math.sqrt(Math.max(v,e,P))}makeTranslation(f,v,e){return f.isVector3?this.set(1,0,0,f.x,0,1,0,f.y,0,0,1,f.z,0,0,0,1):this.set(1,0,0,f,0,1,0,v,0,0,1,e,0,0,0,1),this}makeRotationX(f){let v=Math.cos(f),e=Math.sin(f);return this.set(1,0,0,0,0,v,-e,0,0,e,v,0,0,0,0,1),this}makeRotationY(f){let v=Math.cos(f),e=Math.sin(f);return this.set(v,0,e,0,0,1,0,0,-e,0,v,0,0,0,0,1),this}makeRotationZ(f){let v=Math.cos(f),e=Math.sin(f);return this.set(v,-e,0,0,e,v,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(f,v){let e=Math.cos(v),P=Math.sin(v),z=1-e,t=f.x,u=f.y,r=f.z,b=z*t,X=z*u;return this.set(b*t+e,b*u-P*r,b*r+P*u,0,b*u+P*r,X*u+e,X*r-P*t,0,b*r-P*u,X*r+P*t,z*r*r+e,0,0,0,0,1),this}makeScale(f,v,e){return this.set(f,0,0,0,0,v,0,0,0,0,e,0,0,0,0,1),this}makeShear(f,v,e,P,z,t){return this.set(1,e,z,0,f,1,t,0,v,P,1,0,0,0,0,1),this}compose(f,v,e){let P=this.elements,z=v._x,t=v._y,u=v._z,r=v._w,b=z+z,X=t+t,d=u+u,H=z*b,x=z*X,c=z*d,a=t*X,j=t*d,s=u*d,i=r*b,N=r*X,m=r*d,p=e.x,l=e.y,W=e.z;return P[0]=(1-(a+s))*p,P[1]=(x+m)*p,P[2]=(c-N)*p,P[3]=0,P[4]=(x-m)*l,P[5]=(1-(H+s))*l,P[6]=(j+i)*l,P[7]=0,P[8]=(c+N)*W,P[9]=(j-i)*W,P[10]=(1-(H+a))*W,P[11]=0,P[12]=f.x,P[13]=f.y,P[14]=f.z,P[15]=1,this}decompose(f,v,e){let P=this.elements,z=Z9.set(P[0],P[1],P[2]).length(),t=Z9.set(P[4],P[5],P[6]).length(),u=Z9.set(P[8],P[9],P[10]).length();this.determinant()<0&&(z=-z),f.x=P[12],f.y=P[13],f.z=P[14],Ev.copy(this);let b=1/z,X=1/t,d=1/u;return Ev.elements[0]*=b,Ev.elements[1]*=b,Ev.elements[2]*=b,Ev.elements[4]*=X,Ev.elements[5]*=X,Ev.elements[6]*=X,Ev.elements[8]*=d,Ev.elements[9]*=d,Ev.elements[10]*=d,v.setFromRotationMatrix(Ev),e.x=z,e.y=t,e.z=u,this}makePerspective(f,v,e,P,z,t,u=av,r=!1){let b=this.elements,X=2*z/(v-f),d=2*z/(e-P),H=(v+f)/(v-f),x=(e+P)/(e-P),c,a;if(r)c=z/(t-z),a=t*z/(t-z);else if(u===av)c=-(t+z)/(t-z),a=-2*t*z/(t-z);else if(u===Me)c=-t/(t-z),a=-t*z/(t-z);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return b[0]=X,b[4]=0,b[8]=H,b[12]=0,b[1]=0,b[5]=d,b[9]=x,b[13]=0,b[2]=0,b[6]=0,b[10]=c,b[14]=a,b[3]=0,b[7]=0,b[11]=-1,b[15]=0,this}makeOrthographic(f,v,e,P,z,t,u=av,r=!1){let b=this.elements,X=2/(v-f),d=2/(e-P),H=-(v+f)/(v-f),x=-(e+P)/(e-P),c,a;if(r)c=1/(t-z),a=t/(t-z);else if(u===av)c=-2/(t-z),a=-(t+z)/(t-z);else if(u===Me)c=-1/(t-z),a=-z/(t-z);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return b[0]=X,b[4]=0,b[8]=0,b[12]=H,b[1]=0,b[5]=d,b[9]=0,b[13]=x,b[2]=0,b[6]=0,b[10]=c,b[14]=a,b[3]=0,b[7]=0,b[11]=0,b[15]=1,this}equals(f){let v=this.elements,e=f.elements;for(let P=0;P<16;P++)if(v[P]!==e[P])return!1;return!0}fromArray(f,v=0){for(let e=0;e<16;e++)this.elements[e]=f[e+v];return this}toArray(f=[],v=0){let e=this.elements;return f[v]=e[0],f[v+1]=e[1],f[v+2]=e[2],f[v+3]=e[3],f[v+4]=e[4],f[v+5]=e[5],f[v+6]=e[6],f[v+7]=e[7],f[v+8]=e[8],f[v+9]=e[9],f[v+10]=e[10],f[v+11]=e[11],f[v+12]=e[12],f[v+13]=e[13],f[v+14]=e[14],f[v+15]=e[15],f}},Z9=new L,Ev=new of,p6=new L(0,0,0),O6=new L(1,1,1),I7=new L,nz=new L,Ov=new L,C4=new of,Q4=new l3,mv=class n{constructor(f=0,v=0,e=0,P=n.DEFAULT_ORDER){this.isEuler=!0,this._x=f,this._y=v,this._z=e,this._order=P}get x(){return this._x}set x(f){this._x=f,this._onChangeCallback()}get y(){return this._y}set y(f){this._y=f,this._onChangeCallback()}get z(){return this._z}set z(f){this._z=f,this._onChangeCallback()}get order(){return this._order}set order(f){this._order=f,this._onChangeCallback()}set(f,v,e,P=this._order){return this._x=f,this._y=v,this._z=e,this._order=P,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(f){return this._x=f._x,this._y=f._y,this._z=f._z,this._order=f._order,this._onChangeCallback(),this}setFromRotationMatrix(f,v=this._order,e=!0){let P=f.elements,z=P[0],t=P[4],u=P[8],r=P[1],b=P[5],X=P[9],d=P[2],H=P[6],x=P[10];switch(v){case"XYZ":this._y=Math.asin(Rf(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-X,x),this._z=Math.atan2(-t,z)):(this._x=Math.atan2(H,b),this._z=0);break;case"YXZ":this._x=Math.asin(-Rf(X,-1,1)),Math.abs(X)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(r,b)):(this._y=Math.atan2(-d,z),this._z=0);break;case"ZXY":this._x=Math.asin(Rf(H,-1,1)),Math.abs(H)<.9999999?(this._y=Math.atan2(-d,x),this._z=Math.atan2(-t,b)):(this._y=0,this._z=Math.atan2(r,z));break;case"ZYX":this._y=Math.asin(-Rf(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(H,x),this._z=Math.atan2(r,z)):(this._x=0,this._z=Math.atan2(-t,b));break;case"YZX":this._z=Math.asin(Rf(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-X,b),this._y=Math.atan2(-d,z)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-Rf(t,-1,1)),Math.abs(t)<.9999999?(this._x=Math.atan2(H,b),this._y=Math.atan2(u,z)):(this._x=Math.atan2(-X,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+v)}return this._order=v,e===!0&&this._onChangeCallback(),this}setFromQuaternion(f,v,e){return C4.makeRotationFromQuaternion(f),this.setFromRotationMatrix(C4,v,e)}setFromVector3(f,v=this._order){return this.set(f.x,f.y,f.z,v)}reorder(f){return Q4.setFromEuler(this),this.setFromQuaternion(Q4,f)}equals(f){return f._x===this._x&&f._y===this._y&&f._z===this._z&&f._order===this._order}fromArray(f){return this._x=f[0],this._y=f[1],this._z=f[2],f[3]!==void 0&&(this._order=f[3]),this._onChangeCallback(),this}toArray(f=[],v=0){return f[v]=this._x,f[v+1]=this._y,f[v+2]=this._z,f[v+3]=this._order,f}_onChange(f){return this._onChangeCallback=f,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mv.DEFAULT_ORDER="XYZ";var ke=class{constructor(){this.mask=1}set(f){this.mask=(1<<f|0)>>>0}enable(f){this.mask|=1<<f|0}enableAll(){this.mask=-1}toggle(f){this.mask^=1<<f|0}disable(f){this.mask&=~(1<<f|0)}disableAll(){this.mask=0}test(f){return(this.mask&f.mask)!==0}isEnabled(f){return(this.mask&(1<<f|0))!==0}},l6=0,A4=new L,T9=new l3,l7=new of,zz=new L,D8=new L,L6=new L,W6=new l3,_4=new L(1,0,0),$4=new L(0,1,0),fb=new L(0,0,1),vb={type:"added"},h6={type:"removed"},y9={type:"childadded",child:null},Rt={type:"childremoved",child:null},P3=class n extends hv{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l6++}),this.uuid=Wv(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let f=new L,v=new mv,e=new l3,P=new L(1,1,1);function z(){e.setFromEuler(v,!1)}function t(){v.setFromQuaternion(e,void 0,!1)}v._onChange(z),e._onChange(t),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:f},rotation:{configurable:!0,enumerable:!0,value:v},quaternion:{configurable:!0,enumerable:!0,value:e},scale:{configurable:!0,enumerable:!0,value:P},modelViewMatrix:{value:new of},normalMatrix:{value:new Kf}}),this.matrix=new of,this.matrixWorld=new of,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ke,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(f){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(f),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(f){return this.quaternion.premultiply(f),this}setRotationFromAxisAngle(f,v){this.quaternion.setFromAxisAngle(f,v)}setRotationFromEuler(f){this.quaternion.setFromEuler(f,!0)}setRotationFromMatrix(f){this.quaternion.setFromRotationMatrix(f)}setRotationFromQuaternion(f){this.quaternion.copy(f)}rotateOnAxis(f,v){return T9.setFromAxisAngle(f,v),this.quaternion.multiply(T9),this}rotateOnWorldAxis(f,v){return T9.setFromAxisAngle(f,v),this.quaternion.premultiply(T9),this}rotateX(f){return this.rotateOnAxis(_4,f)}rotateY(f){return this.rotateOnAxis($4,f)}rotateZ(f){return this.rotateOnAxis(fb,f)}translateOnAxis(f,v){return A4.copy(f).applyQuaternion(this.quaternion),this.position.add(A4.multiplyScalar(v)),this}translateX(f){return this.translateOnAxis(_4,f)}translateY(f){return this.translateOnAxis($4,f)}translateZ(f){return this.translateOnAxis(fb,f)}localToWorld(f){return this.updateWorldMatrix(!0,!1),f.applyMatrix4(this.matrixWorld)}worldToLocal(f){return this.updateWorldMatrix(!0,!1),f.applyMatrix4(l7.copy(this.matrixWorld).invert())}lookAt(f,v,e){f.isVector3?zz.copy(f):zz.set(f,v,e);let P=this.parent;this.updateWorldMatrix(!0,!1),D8.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?l7.lookAt(D8,zz,this.up):l7.lookAt(zz,D8,this.up),this.quaternion.setFromRotationMatrix(l7),P&&(l7.extractRotation(P.matrixWorld),T9.setFromRotationMatrix(l7),this.quaternion.premultiply(T9.invert()))}add(f){if(arguments.length>1){for(let v=0;v<arguments.length;v++)this.add(arguments[v]);return this}return f===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",f),this):(f&&f.isObject3D?(f.removeFromParent(),f.parent=this,this.children.push(f),f.dispatchEvent(vb),y9.child=f,this.dispatchEvent(y9),y9.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",f),this)}remove(f){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let v=this.children.indexOf(f);return v!==-1&&(f.parent=null,this.children.splice(v,1),f.dispatchEvent(h6),Rt.child=f,this.dispatchEvent(Rt),Rt.child=null),this}removeFromParent(){let f=this.parent;return f!==null&&f.remove(this),this}clear(){return this.remove(...this.children)}attach(f){return this.updateWorldMatrix(!0,!1),l7.copy(this.matrixWorld).invert(),f.parent!==null&&(f.parent.updateWorldMatrix(!0,!1),l7.multiply(f.parent.matrixWorld)),f.applyMatrix4(l7),f.removeFromParent(),f.parent=this,this.children.push(f),f.updateWorldMatrix(!1,!0),f.dispatchEvent(vb),y9.child=f,this.dispatchEvent(y9),y9.child=null,this}getObjectById(f){return this.getObjectByProperty("id",f)}getObjectByName(f){return this.getObjectByProperty("name",f)}getObjectByProperty(f,v){if(this[f]===v)return this;for(let e=0,P=this.children.length;e<P;e++){let t=this.children[e].getObjectByProperty(f,v);if(t!==void 0)return t}}getObjectsByProperty(f,v,e=[]){this[f]===v&&e.push(this);let P=this.children;for(let z=0,t=P.length;z<t;z++)P[z].getObjectsByProperty(f,v,e);return e}getWorldPosition(f){return this.updateWorldMatrix(!0,!1),f.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(f){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(D8,f,L6),f}getWorldScale(f){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(D8,W6,f),f}getWorldDirection(f){this.updateWorldMatrix(!0,!1);let v=this.matrixWorld.elements;return f.set(v[8],v[9],v[10]).normalize()}raycast(){}traverse(f){f(this);let v=this.children;for(let e=0,P=v.length;e<P;e++)v[e].traverse(f)}traverseVisible(f){if(this.visible===!1)return;f(this);let v=this.children;for(let e=0,P=v.length;e<P;e++)v[e].traverseVisible(f)}traverseAncestors(f){let v=this.parent;v!==null&&(f(v),v.traverseAncestors(f))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(f){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||f)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,f=!0);let v=this.children;for(let e=0,P=v.length;e<P;e++)v[e].updateMatrixWorld(f)}updateWorldMatrix(f,v){let e=this.parent;if(f===!0&&e!==null&&e.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),v===!0){let P=this.children;for(let z=0,t=P.length;z<t;z++)P[z].updateWorldMatrix(!1,!0)}}toJSON(f){let v=f===void 0||typeof f=="string",e={};v&&(f={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},e.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let P={};P.uuid=this.uuid,P.type=this.type,this.name!==""&&(P.name=this.name),this.castShadow===!0&&(P.castShadow=!0),this.receiveShadow===!0&&(P.receiveShadow=!0),this.visible===!1&&(P.visible=!1),this.frustumCulled===!1&&(P.frustumCulled=!1),this.renderOrder!==0&&(P.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(P.userData=this.userData),P.layers=this.layers.mask,P.matrix=this.matrix.toArray(),P.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(P.matrixAutoUpdate=!1),this.isInstancedMesh&&(P.type="InstancedMesh",P.count=this.count,P.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(P.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(P.type="BatchedMesh",P.perObjectFrustumCulled=this.perObjectFrustumCulled,P.sortObjects=this.sortObjects,P.drawRanges=this._drawRanges,P.reservedRanges=this._reservedRanges,P.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),P.instanceInfo=this._instanceInfo.map(u=>({...u})),P.availableInstanceIds=this._availableInstanceIds.slice(),P.availableGeometryIds=this._availableGeometryIds.slice(),P.nextIndexStart=this._nextIndexStart,P.nextVertexStart=this._nextVertexStart,P.geometryCount=this._geometryCount,P.maxInstanceCount=this._maxInstanceCount,P.maxVertexCount=this._maxVertexCount,P.maxIndexCount=this._maxIndexCount,P.geometryInitialized=this._geometryInitialized,P.matricesTexture=this._matricesTexture.toJSON(f),P.indirectTexture=this._indirectTexture.toJSON(f),this._colorsTexture!==null&&(P.colorsTexture=this._colorsTexture.toJSON(f)),this.boundingSphere!==null&&(P.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(P.boundingBox=this.boundingBox.toJSON()));function z(u,r){return u[r.uuid]===void 0&&(u[r.uuid]=r.toJSON(f)),r.uuid}if(this.isScene)this.background&&(this.background.isColor?P.background=this.background.toJSON():this.background.isTexture&&(P.background=this.background.toJSON(f).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(P.environment=this.environment.toJSON(f).uuid);else if(this.isMesh||this.isLine||this.isPoints){P.geometry=z(f.geometries,this.geometry);let u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){let r=u.shapes;if(Array.isArray(r))for(let b=0,X=r.length;b<X;b++){let d=r[b];z(f.shapes,d)}else z(f.shapes,r)}}if(this.isSkinnedMesh&&(P.bindMode=this.bindMode,P.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(z(f.skeletons,this.skeleton),P.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let u=[];for(let r=0,b=this.material.length;r<b;r++)u.push(z(f.materials,this.material[r]));P.material=u}else P.material=z(f.materials,this.material);if(this.children.length>0){P.children=[];for(let u=0;u<this.children.length;u++)P.children.push(this.children[u].toJSON(f).object)}if(this.animations.length>0){P.animations=[];for(let u=0;u<this.animations.length;u++){let r=this.animations[u];P.animations.push(z(f.animations,r))}}if(v){let u=t(f.geometries),r=t(f.materials),b=t(f.textures),X=t(f.images),d=t(f.shapes),H=t(f.skeletons),x=t(f.animations),c=t(f.nodes);u.length>0&&(e.geometries=u),r.length>0&&(e.materials=r),b.length>0&&(e.textures=b),X.length>0&&(e.images=X),d.length>0&&(e.shapes=d),H.length>0&&(e.skeletons=H),x.length>0&&(e.animations=x),c.length>0&&(e.nodes=c)}return e.object=P,e;function t(u){let r=[];for(let b in u){let X=u[b];delete X.metadata,r.push(X)}return r}}clone(f){return new this.constructor().copy(this,f)}copy(f,v=!0){if(this.name=f.name,this.up.copy(f.up),this.position.copy(f.position),this.rotation.order=f.rotation.order,this.quaternion.copy(f.quaternion),this.scale.copy(f.scale),this.matrix.copy(f.matrix),this.matrixWorld.copy(f.matrixWorld),this.matrixAutoUpdate=f.matrixAutoUpdate,this.matrixWorldAutoUpdate=f.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=f.matrixWorldNeedsUpdate,this.layers.mask=f.layers.mask,this.visible=f.visible,this.castShadow=f.castShadow,this.receiveShadow=f.receiveShadow,this.frustumCulled=f.frustumCulled,this.renderOrder=f.renderOrder,this.animations=f.animations.slice(),this.userData=JSON.parse(JSON.stringify(f.userData)),v===!0)for(let e=0;e<f.children.length;e++){let P=f.children[e];this.add(P.clone())}return this}};P3.DEFAULT_UP=new L(0,1,0);P3.DEFAULT_MATRIX_AUTO_UPDATE=!0;P3.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bv=new L,L7=new L,Gt=new L,W7=new L,p9=new L,O9=new L,eb=new L,kt=new L,Jt=new L,Yt=new L,St=new n3,Kt=new n3,Ut=new n3,Cv=class n{constructor(f=new L,v=new L,e=new L){this.a=f,this.b=v,this.c=e}static getNormal(f,v,e,P){P.subVectors(e,v),Bv.subVectors(f,v),P.cross(Bv);let z=P.lengthSq();return z>0?P.multiplyScalar(1/Math.sqrt(z)):P.set(0,0,0)}static getBarycoord(f,v,e,P,z){Bv.subVectors(P,v),L7.subVectors(e,v),Gt.subVectors(f,v);let t=Bv.dot(Bv),u=Bv.dot(L7),r=Bv.dot(Gt),b=L7.dot(L7),X=L7.dot(Gt),d=t*b-u*u;if(d===0)return z.set(0,0,0),null;let H=1/d,x=(b*r-u*X)*H,c=(t*X-u*r)*H;return z.set(1-x-c,c,x)}static containsPoint(f,v,e,P){return this.getBarycoord(f,v,e,P,W7)===null?!1:W7.x>=0&&W7.y>=0&&W7.x+W7.y<=1}static getInterpolation(f,v,e,P,z,t,u,r){return this.getBarycoord(f,v,e,P,W7)===null?(r.x=0,r.y=0,"z"in r&&(r.z=0),"w"in r&&(r.w=0),null):(r.setScalar(0),r.addScaledVector(z,W7.x),r.addScaledVector(t,W7.y),r.addScaledVector(u,W7.z),r)}static getInterpolatedAttribute(f,v,e,P,z,t){return St.setScalar(0),Kt.setScalar(0),Ut.setScalar(0),St.fromBufferAttribute(f,v),Kt.fromBufferAttribute(f,e),Ut.fromBufferAttribute(f,P),t.setScalar(0),t.addScaledVector(St,z.x),t.addScaledVector(Kt,z.y),t.addScaledVector(Ut,z.z),t}static isFrontFacing(f,v,e,P){return Bv.subVectors(e,v),L7.subVectors(f,v),Bv.cross(L7).dot(P)<0}set(f,v,e){return this.a.copy(f),this.b.copy(v),this.c.copy(e),this}setFromPointsAndIndices(f,v,e,P){return this.a.copy(f[v]),this.b.copy(f[e]),this.c.copy(f[P]),this}setFromAttributeAndIndices(f,v,e,P){return this.a.fromBufferAttribute(f,v),this.b.fromBufferAttribute(f,e),this.c.fromBufferAttribute(f,P),this}clone(){return new this.constructor().copy(this)}copy(f){return this.a.copy(f.a),this.b.copy(f.b),this.c.copy(f.c),this}getArea(){return Bv.subVectors(this.c,this.b),L7.subVectors(this.a,this.b),Bv.cross(L7).length()*.5}getMidpoint(f){return f.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(f){return n.getNormal(this.a,this.b,this.c,f)}getPlane(f){return f.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(f,v){return n.getBarycoord(f,this.a,this.b,this.c,v)}getInterpolation(f,v,e,P,z){return n.getInterpolation(f,this.a,this.b,this.c,v,e,P,z)}containsPoint(f){return n.containsPoint(f,this.a,this.b,this.c)}isFrontFacing(f){return n.isFrontFacing(this.a,this.b,this.c,f)}intersectsBox(f){return f.intersectsTriangle(this)}closestPointToPoint(f,v){let e=this.a,P=this.b,z=this.c,t,u;p9.subVectors(P,e),O9.subVectors(z,e),kt.subVectors(f,e);let r=p9.dot(kt),b=O9.dot(kt);if(r<=0&&b<=0)return v.copy(e);Jt.subVectors(f,P);let X=p9.dot(Jt),d=O9.dot(Jt);if(X>=0&&d<=X)return v.copy(P);let H=r*d-X*b;if(H<=0&&r>=0&&X<=0)return t=r/(r-X),v.copy(e).addScaledVector(p9,t);Yt.subVectors(f,z);let x=p9.dot(Yt),c=O9.dot(Yt);if(c>=0&&x<=c)return v.copy(z);let a=x*b-r*c;if(a<=0&&b>=0&&c<=0)return u=b/(b-c),v.copy(e).addScaledVector(O9,u);let j=X*c-x*d;if(j<=0&&d-X>=0&&x-c>=0)return eb.subVectors(z,P),u=(d-X)/(d-X+(x-c)),v.copy(P).addScaledVector(eb,u);let s=1/(j+a+H);return t=a*s,u=H*s,v.copy(e).addScaledVector(p9,t).addScaledVector(O9,u)}equals(f){return f.a.equals(this.a)&&f.b.equals(this.b)&&f.c.equals(this.c)}},qX={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},g7={h:0,s:0,l:0},tz={h:0,s:0,l:0};function It(n,f,v){return v<0&&(v+=1),v>1&&(v-=1),v<1/6?n+(f-n)*6*v:v<1/2?f:v<2/3?n+(f-n)*6*(2/3-v):n}var bf=class{constructor(f,v,e){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(f,v,e)}set(f,v,e){if(v===void 0&&e===void 0){let P=f;P&&P.isColor?this.copy(P):typeof P=="number"?this.setHex(P):typeof P=="string"&&this.setStyle(P)}else this.setRGB(f,v,e);return this}setScalar(f){return this.r=f,this.g=f,this.b=f,this}setHex(f,v=X3){return f=Math.floor(f),this.r=(f>>16&255)/255,this.g=(f>>8&255)/255,this.b=(f&255)/255,Qf.colorSpaceToWorking(this,v),this}setRGB(f,v,e,P=Qf.workingColorSpace){return this.r=f,this.g=v,this.b=e,Qf.colorSpaceToWorking(this,P),this}setHSL(f,v,e,P=Qf.workingColorSpace){if(f=xr(f,1),v=Rf(v,0,1),e=Rf(e,0,1),v===0)this.r=this.g=this.b=e;else{let z=e<=.5?e*(1+v):e+v-e*v,t=2*e-z;this.r=It(t,z,f+1/3),this.g=It(t,z,f),this.b=It(t,z,f-1/3)}return Qf.colorSpaceToWorking(this,P),this}setStyle(f,v=X3){function e(z){z!==void 0&&parseFloat(z)<1&&console.warn("THREE.Color: Alpha component of "+f+" will be ignored.")}let P;if(P=/^(\w+)\(([^\)]*)\)/.exec(f)){let z,t=P[1],u=P[2];switch(t){case"rgb":case"rgba":if(z=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return e(z[4]),this.setRGB(Math.min(255,parseInt(z[1],10))/255,Math.min(255,parseInt(z[2],10))/255,Math.min(255,parseInt(z[3],10))/255,v);if(z=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return e(z[4]),this.setRGB(Math.min(100,parseInt(z[1],10))/100,Math.min(100,parseInt(z[2],10))/100,Math.min(100,parseInt(z[3],10))/100,v);break;case"hsl":case"hsla":if(z=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return e(z[4]),this.setHSL(parseFloat(z[1])/360,parseFloat(z[2])/100,parseFloat(z[3])/100,v);break;default:console.warn("THREE.Color: Unknown color model "+f)}}else if(P=/^\#([A-Fa-f\d]+)$/.exec(f)){let z=P[1],t=z.length;if(t===3)return this.setRGB(parseInt(z.charAt(0),16)/15,parseInt(z.charAt(1),16)/15,parseInt(z.charAt(2),16)/15,v);if(t===6)return this.setHex(parseInt(z,16),v);console.warn("THREE.Color: Invalid hex color "+f)}else if(f&&f.length>0)return this.setColorName(f,v);return this}setColorName(f,v=X3){let e=qX[f.toLowerCase()];return e!==void 0?this.setHex(e,v):console.warn("THREE.Color: Unknown color "+f),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(f){return this.r=f.r,this.g=f.g,this.b=f.b,this}copySRGBToLinear(f){return this.r=V7(f.r),this.g=V7(f.g),this.b=V7(f.b),this}copyLinearToSRGB(f){return this.r=G9(f.r),this.g=G9(f.g),this.b=G9(f.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(f=X3){return Qf.workingToColorSpace(_3.copy(this),f),Math.round(Rf(_3.r*255,0,255))*65536+Math.round(Rf(_3.g*255,0,255))*256+Math.round(Rf(_3.b*255,0,255))}getHexString(f=X3){return("000000"+this.getHex(f).toString(16)).slice(-6)}getHSL(f,v=Qf.workingColorSpace){Qf.workingToColorSpace(_3.copy(this),v);let e=_3.r,P=_3.g,z=_3.b,t=Math.max(e,P,z),u=Math.min(e,P,z),r,b,X=(u+t)/2;if(u===t)r=0,b=0;else{let d=t-u;switch(b=X<=.5?d/(t+u):d/(2-t-u),t){case e:r=(P-z)/d+(P<z?6:0);break;case P:r=(z-e)/d+2;break;case z:r=(e-P)/d+4;break}r/=6}return f.h=r,f.s=b,f.l=X,f}getRGB(f,v=Qf.workingColorSpace){return Qf.workingToColorSpace(_3.copy(this),v),f.r=_3.r,f.g=_3.g,f.b=_3.b,f}getStyle(f=X3){Qf.workingToColorSpace(_3.copy(this),f);let v=_3.r,e=_3.g,P=_3.b;return f!==X3?`color(${f} ${v.toFixed(3)} ${e.toFixed(3)} ${P.toFixed(3)})`:`rgb(${Math.round(v*255)},${Math.round(e*255)},${Math.round(P*255)})`}offsetHSL(f,v,e){return this.getHSL(g7),this.setHSL(g7.h+f,g7.s+v,g7.l+e)}add(f){return this.r+=f.r,this.g+=f.g,this.b+=f.b,this}addColors(f,v){return this.r=f.r+v.r,this.g=f.g+v.g,this.b=f.b+v.b,this}addScalar(f){return this.r+=f,this.g+=f,this.b+=f,this}sub(f){return this.r=Math.max(0,this.r-f.r),this.g=Math.max(0,this.g-f.g),this.b=Math.max(0,this.b-f.b),this}multiply(f){return this.r*=f.r,this.g*=f.g,this.b*=f.b,this}multiplyScalar(f){return this.r*=f,this.g*=f,this.b*=f,this}lerp(f,v){return this.r+=(f.r-this.r)*v,this.g+=(f.g-this.g)*v,this.b+=(f.b-this.b)*v,this}lerpColors(f,v,e){return this.r=f.r+(v.r-f.r)*e,this.g=f.g+(v.g-f.g)*e,this.b=f.b+(v.b-f.b)*e,this}lerpHSL(f,v){this.getHSL(g7),f.getHSL(tz);let e=I8(g7.h,tz.h,v),P=I8(g7.s,tz.s,v),z=I8(g7.l,tz.l,v);return this.setHSL(e,P,z),this}setFromVector3(f){return this.r=f.x,this.g=f.y,this.b=f.z,this}applyMatrix3(f){let v=this.r,e=this.g,P=this.b,z=f.elements;return this.r=z[0]*v+z[3]*e+z[6]*P,this.g=z[1]*v+z[4]*e+z[7]*P,this.b=z[2]*v+z[5]*e+z[8]*P,this}equals(f){return f.r===this.r&&f.g===this.g&&f.b===this.b}fromArray(f,v=0){return this.r=f[v],this.g=f[v+1],this.b=f[v+2],this}toArray(f=[],v=0){return f[v]=this.r,f[v+1]=this.g,f[v+2]=this.b,f}fromBufferAttribute(f,v){return this.r=f.getX(v),this.g=f.getY(v),this.b=f.getZ(v),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_3=new bf;bf.NAMES=qX;var w6=0,L3=class extends hv{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w6++}),this.uuid=Wv(),this.name="",this.type="Material",this.blending=_7,this.side=vv,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=B8,this.blendDst=C8,this.blendEquation=D7,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bf(0,0,0),this.blendAlpha=0,this.depthFunc=$7,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sz,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=C7,this.stencilZFail=C7,this.stencilZPass=C7,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(f){this._alphaTest>0!=f>0&&this.version++,this._alphaTest=f}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(f){if(f!==void 0)for(let v in f){let e=f[v];if(e===void 0){console.warn(`THREE.Material: parameter '${v}' has value of undefined.`);continue}let P=this[v];if(P===void 0){console.warn(`THREE.Material: '${v}' is not a property of THREE.${this.type}.`);continue}P&&P.isColor?P.set(e):P&&P.isVector3&&e&&e.isVector3?P.copy(e):this[v]=e}}toJSON(f){let v=f===void 0||typeof f=="string";v&&(f={textures:{},images:{}});let e={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.color&&this.color.isColor&&(e.color=this.color.getHex()),this.roughness!==void 0&&(e.roughness=this.roughness),this.metalness!==void 0&&(e.metalness=this.metalness),this.sheen!==void 0&&(e.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(e.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(e.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(e.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(e.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(e.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(e.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(e.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(e.shininess=this.shininess),this.clearcoat!==void 0&&(e.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(e.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(e.clearcoatMap=this.clearcoatMap.toJSON(f).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(e.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(f).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(e.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(f).uuid,e.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(e.sheenColorMap=this.sheenColorMap.toJSON(f).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(e.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(f).uuid),this.dispersion!==void 0&&(e.dispersion=this.dispersion),this.iridescence!==void 0&&(e.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(e.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(e.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(e.iridescenceMap=this.iridescenceMap.toJSON(f).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(e.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(f).uuid),this.anisotropy!==void 0&&(e.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(e.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(e.anisotropyMap=this.anisotropyMap.toJSON(f).uuid),this.map&&this.map.isTexture&&(e.map=this.map.toJSON(f).uuid),this.matcap&&this.matcap.isTexture&&(e.matcap=this.matcap.toJSON(f).uuid),this.alphaMap&&this.alphaMap.isTexture&&(e.alphaMap=this.alphaMap.toJSON(f).uuid),this.lightMap&&this.lightMap.isTexture&&(e.lightMap=this.lightMap.toJSON(f).uuid,e.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(e.aoMap=this.aoMap.toJSON(f).uuid,e.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(e.bumpMap=this.bumpMap.toJSON(f).uuid,e.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(e.normalMap=this.normalMap.toJSON(f).uuid,e.normalMapType=this.normalMapType,e.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(e.displacementMap=this.displacementMap.toJSON(f).uuid,e.displacementScale=this.displacementScale,e.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(e.roughnessMap=this.roughnessMap.toJSON(f).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(e.metalnessMap=this.metalnessMap.toJSON(f).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(e.emissiveMap=this.emissiveMap.toJSON(f).uuid),this.specularMap&&this.specularMap.isTexture&&(e.specularMap=this.specularMap.toJSON(f).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(e.specularIntensityMap=this.specularIntensityMap.toJSON(f).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(e.specularColorMap=this.specularColorMap.toJSON(f).uuid),this.envMap&&this.envMap.isTexture&&(e.envMap=this.envMap.toJSON(f).uuid,this.combine!==void 0&&(e.combine=this.combine)),this.envMapRotation!==void 0&&(e.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(e.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(e.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(e.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(e.gradientMap=this.gradientMap.toJSON(f).uuid),this.transmission!==void 0&&(e.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(e.transmissionMap=this.transmissionMap.toJSON(f).uuid),this.thickness!==void 0&&(e.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(e.thicknessMap=this.thicknessMap.toJSON(f).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(e.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(e.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(e.size=this.size),this.shadowSide!==null&&(e.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(e.sizeAttenuation=this.sizeAttenuation),this.blending!==_7&&(e.blending=this.blending),this.side!==vv&&(e.side=this.side),this.vertexColors===!0&&(e.vertexColors=!0),this.opacity<1&&(e.opacity=this.opacity),this.transparent===!0&&(e.transparent=!0),this.blendSrc!==B8&&(e.blendSrc=this.blendSrc),this.blendDst!==C8&&(e.blendDst=this.blendDst),this.blendEquation!==D7&&(e.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(e.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(e.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(e.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(e.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(e.blendAlpha=this.blendAlpha),this.depthFunc!==$7&&(e.depthFunc=this.depthFunc),this.depthTest===!1&&(e.depthTest=this.depthTest),this.depthWrite===!1&&(e.depthWrite=this.depthWrite),this.colorWrite===!1&&(e.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(e.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sz&&(e.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(e.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(e.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==C7&&(e.stencilFail=this.stencilFail),this.stencilZFail!==C7&&(e.stencilZFail=this.stencilZFail),this.stencilZPass!==C7&&(e.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(e.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(e.rotation=this.rotation),this.polygonOffset===!0&&(e.polygonOffset=!0),this.polygonOffsetFactor!==0&&(e.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(e.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(e.linewidth=this.linewidth),this.dashSize!==void 0&&(e.dashSize=this.dashSize),this.gapSize!==void 0&&(e.gapSize=this.gapSize),this.scale!==void 0&&(e.scale=this.scale),this.dithering===!0&&(e.dithering=!0),this.alphaTest>0&&(e.alphaTest=this.alphaTest),this.alphaHash===!0&&(e.alphaHash=!0),this.alphaToCoverage===!0&&(e.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(e.premultipliedAlpha=!0),this.forceSinglePass===!0&&(e.forceSinglePass=!0),this.wireframe===!0&&(e.wireframe=!0),this.wireframeLinewidth>1&&(e.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(e.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(e.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(e.flatShading=!0),this.visible===!1&&(e.visible=!1),this.toneMapped===!1&&(e.toneMapped=!1),this.fog===!1&&(e.fog=!1),Object.keys(this.userData).length>0&&(e.userData=this.userData);function P(z){let t=[];for(let u in z){let r=z[u];delete r.metadata,t.push(r)}return t}if(v){let z=P(f.textures),t=P(f.images);z.length>0&&(e.textures=z),t.length>0&&(e.images=t)}return e}clone(){return new this.constructor().copy(this)}copy(f){this.name=f.name,this.blending=f.blending,this.side=f.side,this.vertexColors=f.vertexColors,this.opacity=f.opacity,this.transparent=f.transparent,this.blendSrc=f.blendSrc,this.blendDst=f.blendDst,this.blendEquation=f.blendEquation,this.blendSrcAlpha=f.blendSrcAlpha,this.blendDstAlpha=f.blendDstAlpha,this.blendEquationAlpha=f.blendEquationAlpha,this.blendColor.copy(f.blendColor),this.blendAlpha=f.blendAlpha,this.depthFunc=f.depthFunc,this.depthTest=f.depthTest,this.depthWrite=f.depthWrite,this.stencilWriteMask=f.stencilWriteMask,this.stencilFunc=f.stencilFunc,this.stencilRef=f.stencilRef,this.stencilFuncMask=f.stencilFuncMask,this.stencilFail=f.stencilFail,this.stencilZFail=f.stencilZFail,this.stencilZPass=f.stencilZPass,this.stencilWrite=f.stencilWrite;let v=f.clippingPlanes,e=null;if(v!==null){let P=v.length;e=new Array(P);for(let z=0;z!==P;++z)e[z]=v[z].clone()}return this.clippingPlanes=e,this.clipIntersection=f.clipIntersection,this.clipShadows=f.clipShadows,this.shadowSide=f.shadowSide,this.colorWrite=f.colorWrite,this.precision=f.precision,this.polygonOffset=f.polygonOffset,this.polygonOffsetFactor=f.polygonOffsetFactor,this.polygonOffsetUnits=f.polygonOffsetUnits,this.dithering=f.dithering,this.alphaTest=f.alphaTest,this.alphaHash=f.alphaHash,this.alphaToCoverage=f.alphaToCoverage,this.premultipliedAlpha=f.premultipliedAlpha,this.forceSinglePass=f.forceSinglePass,this.visible=f.visible,this.toneMapped=f.toneMapped,this.userData=JSON.parse(JSON.stringify(f.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(f){f===!0&&this.version++}},u3=class extends L3{constructor(f){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bf(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mv,this.combine=x8,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(f)}copy(f){return super.copy(f),this.color.copy(f.color),this.map=f.map,this.lightMap=f.lightMap,this.lightMapIntensity=f.lightMapIntensity,this.aoMap=f.aoMap,this.aoMapIntensity=f.aoMapIntensity,this.specularMap=f.specularMap,this.alphaMap=f.alphaMap,this.envMap=f.envMap,this.envMapRotation.copy(f.envMapRotation),this.combine=f.combine,this.reflectivity=f.reflectivity,this.refractionRatio=f.refractionRatio,this.wireframe=f.wireframe,this.wireframeLinewidth=f.wireframeLinewidth,this.wireframeLinecap=f.wireframeLinecap,this.wireframeLinejoin=f.wireframeLinejoin,this.fog=f.fog,this}},w7=V6();function V6(){let n=new ArrayBuffer(4),f=new Float32Array(n),v=new Uint32Array(n),e=new Uint32Array(512),P=new Uint32Array(512);for(let r=0;r<256;++r){let b=r-127;b<-27?(e[r]=0,e[r|256]=32768,P[r]=24,P[r|256]=24):b<-14?(e[r]=1024>>-b-14,e[r|256]=1024>>-b-14|32768,P[r]=-b-1,P[r|256]=-b-1):b<=15?(e[r]=b+15<<10,e[r|256]=b+15<<10|32768,P[r]=13,P[r|256]=13):b<128?(e[r]=31744,e[r|256]=64512,P[r]=24,P[r|256]=24):(e[r]=31744,e[r|256]=64512,P[r]=13,P[r|256]=13)}let z=new Uint32Array(2048),t=new Uint32Array(64),u=new Uint32Array(64);for(let r=1;r<1024;++r){let b=r<<13,X=0;for(;(b&8388608)===0;)b<<=1,X-=8388608;b&=-8388609,X+=947912704,z[r]=b|X}for(let r=1024;r<2048;++r)z[r]=939524096+(r-1024<<13);for(let r=1;r<31;++r)t[r]=r<<23;t[31]=1199570944,t[32]=2147483648;for(let r=33;r<63;++r)t[r]=2147483648+(r-32<<23);t[63]=3347054592;for(let r=1;r<64;++r)r!==32&&(u[r]=1024);return{floatView:f,uint32View:v,baseTable:e,shiftTable:P,mantissaTable:z,exponentTable:t,offsetTable:u}}function jv(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Rf(n,-65504,65504),w7.floatView[0]=n;let f=w7.uint32View[0],v=f>>23&511;return w7.baseTable[v]+((f&8388607)>>w7.shiftTable[v])}function S8(n){let f=n>>10;return w7.uint32View[0]=w7.mantissaTable[w7.offsetTable[f]+(n&1023)]+w7.exponentTable[f],w7.floatView[0]}var Iz=class{static toHalfFloat(f){return jv(f)}static fromHalfFloat(f){return S8(f)}},o3=new L,uz=new g,D6=0,Af=class{constructor(f,v,e=!1){if(Array.isArray(f))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:D6++}),this.name="",this.array=f,this.itemSize=v,this.count=f!==void 0?f.length/v:0,this.normalized=e,this.usage=Y9,this.updateRanges=[],this.gpuType=B3,this.version=0}onUploadCallback(){}set needsUpdate(f){f===!0&&this.version++}setUsage(f){return this.usage=f,this}addUpdateRange(f,v){this.updateRanges.push({start:f,count:v})}clearUpdateRanges(){this.updateRanges.length=0}copy(f){return this.name=f.name,this.array=new f.array.constructor(f.array),this.itemSize=f.itemSize,this.count=f.count,this.normalized=f.normalized,this.usage=f.usage,this.gpuType=f.gpuType,this}copyAt(f,v,e){f*=this.itemSize,e*=v.itemSize;for(let P=0,z=this.itemSize;P<z;P++)this.array[f+P]=v.array[e+P];return this}copyArray(f){return this.array.set(f),this}applyMatrix3(f){if(this.itemSize===2)for(let v=0,e=this.count;v<e;v++)uz.fromBufferAttribute(this,v),uz.applyMatrix3(f),this.setXY(v,uz.x,uz.y);else if(this.itemSize===3)for(let v=0,e=this.count;v<e;v++)o3.fromBufferAttribute(this,v),o3.applyMatrix3(f),this.setXYZ(v,o3.x,o3.y,o3.z);return this}applyMatrix4(f){for(let v=0,e=this.count;v<e;v++)o3.fromBufferAttribute(this,v),o3.applyMatrix4(f),this.setXYZ(v,o3.x,o3.y,o3.z);return this}applyNormalMatrix(f){for(let v=0,e=this.count;v<e;v++)o3.fromBufferAttribute(this,v),o3.applyNormalMatrix(f),this.setXYZ(v,o3.x,o3.y,o3.z);return this}transformDirection(f){for(let v=0,e=this.count;v<e;v++)o3.fromBufferAttribute(this,v),o3.transformDirection(f),this.setXYZ(v,o3.x,o3.y,o3.z);return this}set(f,v=0){return this.array.set(f,v),this}getComponent(f,v){let e=this.array[f*this.itemSize+v];return this.normalized&&(e=tv(e,this.array)),e}setComponent(f,v,e){return this.normalized&&(e=gf(e,this.array)),this.array[f*this.itemSize+v]=e,this}getX(f){let v=this.array[f*this.itemSize];return this.normalized&&(v=tv(v,this.array)),v}setX(f,v){return this.normalized&&(v=gf(v,this.array)),this.array[f*this.itemSize]=v,this}getY(f){let v=this.array[f*this.itemSize+1];return this.normalized&&(v=tv(v,this.array)),v}setY(f,v){return this.normalized&&(v=gf(v,this.array)),this.array[f*this.itemSize+1]=v,this}getZ(f){let v=this.array[f*this.itemSize+2];return this.normalized&&(v=tv(v,this.array)),v}setZ(f,v){return this.normalized&&(v=gf(v,this.array)),this.array[f*this.itemSize+2]=v,this}getW(f){let v=this.array[f*this.itemSize+3];return this.normalized&&(v=tv(v,this.array)),v}setW(f,v){return this.normalized&&(v=gf(v,this.array)),this.array[f*this.itemSize+3]=v,this}setXY(f,v,e){return f*=this.itemSize,this.normalized&&(v=gf(v,this.array),e=gf(e,this.array)),this.array[f+0]=v,this.array[f+1]=e,this}setXYZ(f,v,e,P){return f*=this.itemSize,this.normalized&&(v=gf(v,this.array),e=gf(e,this.array),P=gf(P,this.array)),this.array[f+0]=v,this.array[f+1]=e,this.array[f+2]=P,this}setXYZW(f,v,e,P,z){return f*=this.itemSize,this.normalized&&(v=gf(v,this.array),e=gf(e,this.array),P=gf(P,this.array),z=gf(z,this.array)),this.array[f+0]=v,this.array[f+1]=e,this.array[f+2]=P,this.array[f+3]=z,this}onUpload(f){return this.onUploadCallback=f,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let f={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(f.name=this.name),this.usage!==Y9&&(f.usage=this.usage),f}},gz=class extends Af{constructor(f,v,e){super(new Int8Array(f),v,e)}},Ez=class extends Af{constructor(f,v,e){super(new Uint8Array(f),v,e)}},Bz=class extends Af{constructor(f,v,e){super(new Uint8ClampedArray(f),v,e)}},Cz=class extends Af{constructor(f,v,e){super(new Int16Array(f),v,e)}},I9=class extends Af{constructor(f,v,e){super(new Uint16Array(f),v,e)}},Qz=class extends Af{constructor(f,v,e){super(new Int32Array(f),v,e)}},g9=class extends Af{constructor(f,v,e){super(new Uint32Array(f),v,e)}},Az=class extends Af{constructor(f,v,e){super(new Uint16Array(f),v,e),this.isFloat16BufferAttribute=!0}getX(f){let v=S8(this.array[f*this.itemSize]);return this.normalized&&(v=tv(v,this.array)),v}setX(f,v){return this.normalized&&(v=gf(v,this.array)),this.array[f*this.itemSize]=jv(v),this}getY(f){let v=S8(this.array[f*this.itemSize+1]);return this.normalized&&(v=tv(v,this.array)),v}setY(f,v){return this.normalized&&(v=gf(v,this.array)),this.array[f*this.itemSize+1]=jv(v),this}getZ(f){let v=S8(this.array[f*this.itemSize+2]);return this.normalized&&(v=tv(v,this.array)),v}setZ(f,v){return this.normalized&&(v=gf(v,this.array)),this.array[f*this.itemSize+2]=jv(v),this}getW(f){let v=S8(this.array[f*this.itemSize+3]);return this.normalized&&(v=tv(v,this.array)),v}setW(f,v){return this.normalized&&(v=gf(v,this.array)),this.array[f*this.itemSize+3]=jv(v),this}setXY(f,v,e){return f*=this.itemSize,this.normalized&&(v=gf(v,this.array),e=gf(e,this.array)),this.array[f+0]=jv(v),this.array[f+1]=jv(e),this}setXYZ(f,v,e,P){return f*=this.itemSize,this.normalized&&(v=gf(v,this.array),e=gf(e,this.array),P=gf(P,this.array)),this.array[f+0]=jv(v),this.array[f+1]=jv(e),this.array[f+2]=jv(P),this}setXYZW(f,v,e,P,z){return f*=this.itemSize,this.normalized&&(v=gf(v,this.array),e=gf(e,this.array),P=gf(P,this.array),z=gf(z,this.array)),this.array[f+0]=jv(v),this.array[f+1]=jv(e),this.array[f+2]=jv(P),this.array[f+3]=jv(z),this}},sf=class extends Af{constructor(f,v,e){super(new Float32Array(f),v,e)}},q6=0,Fv=new of,gt=new P3,l9=new L,lv=new D3,q8=new D3,K3=new L,kf=class n extends hv{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q6++}),this.uuid=Wv(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(f){return Array.isArray(f)?this.index=new(sr(f)?g9:I9)(f,1):this.index=f,this}setIndirect(f){return this.indirect=f,this}getIndirect(){return this.indirect}getAttribute(f){return this.attributes[f]}setAttribute(f,v){return this.attributes[f]=v,this}deleteAttribute(f){return delete this.attributes[f],this}hasAttribute(f){return this.attributes[f]!==void 0}addGroup(f,v,e=0){this.groups.push({start:f,count:v,materialIndex:e})}clearGroups(){this.groups=[]}setDrawRange(f,v){this.drawRange.start=f,this.drawRange.count=v}applyMatrix4(f){let v=this.attributes.position;v!==void 0&&(v.applyMatrix4(f),v.needsUpdate=!0);let e=this.attributes.normal;if(e!==void 0){let z=new Kf().getNormalMatrix(f);e.applyNormalMatrix(z),e.needsUpdate=!0}let P=this.attributes.tangent;return P!==void 0&&(P.transformDirection(f),P.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(f){return Fv.makeRotationFromQuaternion(f),this.applyMatrix4(Fv),this}rotateX(f){return Fv.makeRotationX(f),this.applyMatrix4(Fv),this}rotateY(f){return Fv.makeRotationY(f),this.applyMatrix4(Fv),this}rotateZ(f){return Fv.makeRotationZ(f),this.applyMatrix4(Fv),this}translate(f,v,e){return Fv.makeTranslation(f,v,e),this.applyMatrix4(Fv),this}scale(f,v,e){return Fv.makeScale(f,v,e),this.applyMatrix4(Fv),this}lookAt(f){return gt.lookAt(f),gt.updateMatrix(),this.applyMatrix4(gt.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(l9).negate(),this.translate(l9.x,l9.y,l9.z),this}setFromPoints(f){let v=this.getAttribute("position");if(v===void 0){let e=[];for(let P=0,z=f.length;P<z;P++){let t=f[P];e.push(t.x,t.y,t.z||0)}this.setAttribute("position",new sf(e,3))}else{let e=Math.min(f.length,v.count);for(let P=0;P<e;P++){let z=f[P];v.setXYZ(P,z.x,z.y,z.z||0)}f.length>v.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),v.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new D3);let f=this.attributes.position,v=this.morphAttributes.position;if(f&&f.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(f!==void 0){if(this.boundingBox.setFromBufferAttribute(f),v)for(let e=0,P=v.length;e<P;e++){let z=v[e];lv.setFromBufferAttribute(z),this.morphTargetsRelative?(K3.addVectors(this.boundingBox.min,lv.min),this.boundingBox.expandByPoint(K3),K3.addVectors(this.boundingBox.max,lv.max),this.boundingBox.expandByPoint(K3)):(this.boundingBox.expandByPoint(lv.min),this.boundingBox.expandByPoint(lv.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new w3);let f=this.attributes.position,v=this.morphAttributes.position;if(f&&f.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(f){let e=this.boundingSphere.center;if(lv.setFromBufferAttribute(f),v)for(let z=0,t=v.length;z<t;z++){let u=v[z];q8.setFromBufferAttribute(u),this.morphTargetsRelative?(K3.addVectors(lv.min,q8.min),lv.expandByPoint(K3),K3.addVectors(lv.max,q8.max),lv.expandByPoint(K3)):(lv.expandByPoint(q8.min),lv.expandByPoint(q8.max))}lv.getCenter(e);let P=0;for(let z=0,t=f.count;z<t;z++)K3.fromBufferAttribute(f,z),P=Math.max(P,e.distanceToSquared(K3));if(v)for(let z=0,t=v.length;z<t;z++){let u=v[z],r=this.morphTargetsRelative;for(let b=0,X=u.count;b<X;b++)K3.fromBufferAttribute(u,b),r&&(l9.fromBufferAttribute(f,b),K3.add(l9)),P=Math.max(P,e.distanceToSquared(K3))}this.boundingSphere.radius=Math.sqrt(P),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let f=this.index,v=this.attributes;if(f===null||v.position===void 0||v.normal===void 0||v.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let e=v.position,P=v.normal,z=v.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Af(new Float32Array(4*e.count),4));let t=this.getAttribute("tangent"),u=[],r=[];for(let w=0;w<e.count;w++)u[w]=new L,r[w]=new L;let b=new L,X=new L,d=new L,H=new g,x=new g,c=new g,a=new L,j=new L;function s(w,T,y){b.fromBufferAttribute(e,w),X.fromBufferAttribute(e,T),d.fromBufferAttribute(e,y),H.fromBufferAttribute(z,w),x.fromBufferAttribute(z,T),c.fromBufferAttribute(z,y),X.sub(b),d.sub(b),x.sub(H),c.sub(H);let V=1/(x.x*c.y-c.x*x.y);isFinite(V)&&(a.copy(X).multiplyScalar(c.y).addScaledVector(d,-x.y).multiplyScalar(V),j.copy(d).multiplyScalar(x.x).addScaledVector(X,-c.x).multiplyScalar(V),u[w].add(a),u[T].add(a),u[y].add(a),r[w].add(j),r[T].add(j),r[y].add(j))}let i=this.groups;i.length===0&&(i=[{start:0,count:f.count}]);for(let w=0,T=i.length;w<T;++w){let y=i[w],V=y.start,M=y.count;for(let q=V,k=V+M;q<k;q+=3)s(f.getX(q+0),f.getX(q+1),f.getX(q+2))}let N=new L,m=new L,p=new L,l=new L;function W(w){p.fromBufferAttribute(P,w),l.copy(p);let T=u[w];N.copy(T),N.sub(p.multiplyScalar(p.dot(T))).normalize(),m.crossVectors(l,T);let V=m.dot(r[w])<0?-1:1;t.setXYZW(w,N.x,N.y,N.z,V)}for(let w=0,T=i.length;w<T;++w){let y=i[w],V=y.start,M=y.count;for(let q=V,k=V+M;q<k;q+=3)W(f.getX(q+0)),W(f.getX(q+1)),W(f.getX(q+2))}}computeVertexNormals(){let f=this.index,v=this.getAttribute("position");if(v!==void 0){let e=this.getAttribute("normal");if(e===void 0)e=new Af(new Float32Array(v.count*3),3),this.setAttribute("normal",e);else for(let H=0,x=e.count;H<x;H++)e.setXYZ(H,0,0,0);let P=new L,z=new L,t=new L,u=new L,r=new L,b=new L,X=new L,d=new L;if(f)for(let H=0,x=f.count;H<x;H+=3){let c=f.getX(H+0),a=f.getX(H+1),j=f.getX(H+2);P.fromBufferAttribute(v,c),z.fromBufferAttribute(v,a),t.fromBufferAttribute(v,j),X.subVectors(t,z),d.subVectors(P,z),X.cross(d),u.fromBufferAttribute(e,c),r.fromBufferAttribute(e,a),b.fromBufferAttribute(e,j),u.add(X),r.add(X),b.add(X),e.setXYZ(c,u.x,u.y,u.z),e.setXYZ(a,r.x,r.y,r.z),e.setXYZ(j,b.x,b.y,b.z)}else for(let H=0,x=v.count;H<x;H+=3)P.fromBufferAttribute(v,H+0),z.fromBufferAttribute(v,H+1),t.fromBufferAttribute(v,H+2),X.subVectors(t,z),d.subVectors(P,z),X.cross(d),e.setXYZ(H+0,X.x,X.y,X.z),e.setXYZ(H+1,X.x,X.y,X.z),e.setXYZ(H+2,X.x,X.y,X.z);this.normalizeNormals(),e.needsUpdate=!0}}normalizeNormals(){let f=this.attributes.normal;for(let v=0,e=f.count;v<e;v++)K3.fromBufferAttribute(f,v),K3.normalize(),f.setXYZ(v,K3.x,K3.y,K3.z)}toNonIndexed(){function f(u,r){let b=u.array,X=u.itemSize,d=u.normalized,H=new b.constructor(r.length*X),x=0,c=0;for(let a=0,j=r.length;a<j;a++){u.isInterleavedBufferAttribute?x=r[a]*u.data.stride+u.offset:x=r[a]*X;for(let s=0;s<X;s++)H[c++]=b[x++]}return new Af(H,X,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let v=new n,e=this.index.array,P=this.attributes;for(let u in P){let r=P[u],b=f(r,e);v.setAttribute(u,b)}let z=this.morphAttributes;for(let u in z){let r=[],b=z[u];for(let X=0,d=b.length;X<d;X++){let H=b[X],x=f(H,e);r.push(x)}v.morphAttributes[u]=r}v.morphTargetsRelative=this.morphTargetsRelative;let t=this.groups;for(let u=0,r=t.length;u<r;u++){let b=t[u];v.addGroup(b.start,b.count,b.materialIndex)}return v}toJSON(){let f={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(f.uuid=this.uuid,f.type=this.type,this.name!==""&&(f.name=this.name),Object.keys(this.userData).length>0&&(f.userData=this.userData),this.parameters!==void 0){let r=this.parameters;for(let b in r)r[b]!==void 0&&(f[b]=r[b]);return f}f.data={attributes:{}};let v=this.index;v!==null&&(f.data.index={type:v.array.constructor.name,array:Array.prototype.slice.call(v.array)});let e=this.attributes;for(let r in e){let b=e[r];f.data.attributes[r]=b.toJSON(f.data)}let P={},z=!1;for(let r in this.morphAttributes){let b=this.morphAttributes[r],X=[];for(let d=0,H=b.length;d<H;d++){let x=b[d];X.push(x.toJSON(f.data))}X.length>0&&(P[r]=X,z=!0)}z&&(f.data.morphAttributes=P,f.data.morphTargetsRelative=this.morphTargetsRelative);let t=this.groups;t.length>0&&(f.data.groups=JSON.parse(JSON.stringify(t)));let u=this.boundingSphere;return u!==null&&(f.data.boundingSphere=u.toJSON()),f}clone(){return new this.constructor().copy(this)}copy(f){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let v={};this.name=f.name;let e=f.index;e!==null&&this.setIndex(e.clone());let P=f.attributes;for(let b in P){let X=P[b];this.setAttribute(b,X.clone(v))}let z=f.morphAttributes;for(let b in z){let X=[],d=z[b];for(let H=0,x=d.length;H<x;H++)X.push(d[H].clone(v));this.morphAttributes[b]=X}this.morphTargetsRelative=f.morphTargetsRelative;let t=f.groups;for(let b=0,X=t.length;b<X;b++){let d=t[b];this.addGroup(d.start,d.count,d.materialIndex)}let u=f.boundingBox;u!==null&&(this.boundingBox=u.clone());let r=f.boundingSphere;return r!==null&&(this.boundingSphere=r.clone()),this.drawRange.start=f.drawRange.start,this.drawRange.count=f.drawRange.count,this.userData=f.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pb=new of,Te=new _v,rz=new w3,nb=new L,bz=new L,Xz=new L,dz=new L,Et=new L,Hz=new L,zb=new L,xz=new L,_f=class extends P3{constructor(f=new kf,v=new u3){super(),this.isMesh=!0,this.type="Mesh",this.geometry=f,this.material=v,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(f,v){return super.copy(f,v),f.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=f.morphTargetInfluences.slice()),f.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},f.morphTargetDictionary)),this.material=Array.isArray(f.material)?f.material.slice():f.material,this.geometry=f.geometry,this}updateMorphTargets(){let v=this.geometry.morphAttributes,e=Object.keys(v);if(e.length>0){let P=v[e[0]];if(P!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let z=0,t=P.length;z<t;z++){let u=P[z].name||String(z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=z}}}}getVertexPosition(f,v){let e=this.geometry,P=e.attributes.position,z=e.morphAttributes.position,t=e.morphTargetsRelative;v.fromBufferAttribute(P,f);let u=this.morphTargetInfluences;if(z&&u){Hz.set(0,0,0);for(let r=0,b=z.length;r<b;r++){let X=u[r],d=z[r];X!==0&&(Et.fromBufferAttribute(d,f),t?Hz.addScaledVector(Et,X):Hz.addScaledVector(Et.sub(v),X))}v.add(Hz)}return v}raycast(f,v){let e=this.geometry,P=this.material,z=this.matrixWorld;P!==void 0&&(e.boundingSphere===null&&e.computeBoundingSphere(),rz.copy(e.boundingSphere),rz.applyMatrix4(z),Te.copy(f.ray).recast(f.near),!(rz.containsPoint(Te.origin)===!1&&(Te.intersectSphere(rz,nb)===null||Te.origin.distanceToSquared(nb)>(f.far-f.near)**2))&&(Pb.copy(z).invert(),Te.copy(f.ray).applyMatrix4(Pb),!(e.boundingBox!==null&&Te.intersectsBox(e.boundingBox)===!1)&&this._computeIntersections(f,v,Te)))}_computeIntersections(f,v,e){let P,z=this.geometry,t=this.material,u=z.index,r=z.attributes.position,b=z.attributes.uv,X=z.attributes.uv1,d=z.attributes.normal,H=z.groups,x=z.drawRange;if(u!==null)if(Array.isArray(t))for(let c=0,a=H.length;c<a;c++){let j=H[c],s=t[j.materialIndex],i=Math.max(j.start,x.start),N=Math.min(u.count,Math.min(j.start+j.count,x.start+x.count));for(let m=i,p=N;m<p;m+=3){let l=u.getX(m),W=u.getX(m+1),w=u.getX(m+2);P=sz(this,s,f,e,b,X,d,l,W,w),P&&(P.faceIndex=Math.floor(m/3),P.face.materialIndex=j.materialIndex,v.push(P))}}else{let c=Math.max(0,x.start),a=Math.min(u.count,x.start+x.count);for(let j=c,s=a;j<s;j+=3){let i=u.getX(j),N=u.getX(j+1),m=u.getX(j+2);P=sz(this,t,f,e,b,X,d,i,N,m),P&&(P.faceIndex=Math.floor(j/3),v.push(P))}}else if(r!==void 0)if(Array.isArray(t))for(let c=0,a=H.length;c<a;c++){let j=H[c],s=t[j.materialIndex],i=Math.max(j.start,x.start),N=Math.min(r.count,Math.min(j.start+j.count,x.start+x.count));for(let m=i,p=N;m<p;m+=3){let l=m,W=m+1,w=m+2;P=sz(this,s,f,e,b,X,d,l,W,w),P&&(P.faceIndex=Math.floor(m/3),P.face.materialIndex=j.materialIndex,v.push(P))}}else{let c=Math.max(0,x.start),a=Math.min(r.count,x.start+x.count);for(let j=c,s=a;j<s;j+=3){let i=j,N=j+1,m=j+2;P=sz(this,t,f,e,b,X,d,i,N,m),P&&(P.faceIndex=Math.floor(j/3),v.push(P))}}}};function o6(n,f,v,e,P,z,t,u){let r;if(f.side===g3?r=e.intersectTriangle(t,z,P,!0,u):r=e.intersectTriangle(P,z,t,f.side===vv,u),r===null)return null;xz.copy(u),xz.applyMatrix4(n.matrixWorld);let b=v.ray.origin.distanceTo(xz);return b<v.near||b>v.far?null:{distance:b,point:xz.clone(),object:n}}function sz(n,f,v,e,P,z,t,u,r,b){n.getVertexPosition(u,bz),n.getVertexPosition(r,Xz),n.getVertexPosition(b,dz);let X=o6(n,f,v,e,bz,Xz,dz,zb);if(X){let d=new L;Cv.getBarycoord(zb,bz,Xz,dz,d),P&&(X.uv=Cv.getInterpolatedAttribute(P,u,r,b,d,new g)),z&&(X.uv1=Cv.getInterpolatedAttribute(z,u,r,b,d,new g)),t&&(X.normal=Cv.getInterpolatedAttribute(t,u,r,b,d,new L),X.normal.dot(e.direction)>0&&X.normal.multiplyScalar(-1));let H={a:u,b:r,c:b,normal:new L,materialIndex:0};Cv.getNormal(bz,Xz,dz,H.normal),X.face=H,X.barycoord=d}return X}var Pe=class n extends kf{constructor(f=1,v=1,e=1,P=1,z=1,t=1){super(),this.type="BoxGeometry",this.parameters={width:f,height:v,depth:e,widthSegments:P,heightSegments:z,depthSegments:t};let u=this;P=Math.floor(P),z=Math.floor(z),t=Math.floor(t);let r=[],b=[],X=[],d=[],H=0,x=0;c("z","y","x",-1,-1,e,v,f,t,z,0),c("z","y","x",1,-1,e,v,-f,t,z,1),c("x","z","y",1,1,f,e,v,P,t,2),c("x","z","y",1,-1,f,e,-v,P,t,3),c("x","y","z",1,-1,f,v,e,P,z,4),c("x","y","z",-1,-1,f,v,-e,P,z,5),this.setIndex(r),this.setAttribute("position",new sf(b,3)),this.setAttribute("normal",new sf(X,3)),this.setAttribute("uv",new sf(d,2));function c(a,j,s,i,N,m,p,l,W,w,T){let y=m/W,V=p/w,M=m/2,q=p/2,k=l/2,J=W+1,S=w+1,B=0,Y=0,nf=new L;for(let df=0;df<S;df++){let Zf=df*V-q;for(let Yf=0;Yf<J;Yf++){let f3=Yf*y-M;nf[a]=f3*i,nf[j]=Zf*N,nf[s]=k,b.push(nf.x,nf.y,nf.z),nf[a]=0,nf[j]=0,nf[s]=l>0?1:-1,X.push(nf.x,nf.y,nf.z),d.push(Yf/W),d.push(1-df/w),B+=1}}for(let df=0;df<w;df++)for(let Zf=0;Zf<W;Zf++){let Yf=H+Zf+J*df,f3=H+Zf+J*(df+1),z3=H+(Zf+1)+J*(df+1),t3=H+(Zf+1)+J*df;r.push(Yf,f3,t3),r.push(f3,z3,t3),Y+=6}u.addGroup(x,Y,T),x+=Y,H+=B}}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}static fromJSON(f){return new n(f.width,f.height,f.depth,f.widthSegments,f.heightSegments,f.depthSegments)}};function b9(n){let f={};for(let v in n){f[v]={};for(let e in n[v]){let P=n[v][e];P&&(P.isColor||P.isMatrix3||P.isMatrix4||P.isVector2||P.isVector3||P.isVector4||P.isTexture||P.isQuaternion)?P.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),f[v][e]=null):f[v][e]=P.clone():Array.isArray(P)?f[v][e]=P.slice():f[v][e]=P}}return f}function Pv(n){let f={};for(let v=0;v<n.length;v++){let e=b9(n[v]);for(let P in e)f[P]=e[P]}return f}function M6(n){let f=[];for(let v=0;v<n.length;v++)f.push(n[v].clone());return f}function jr(n){let f=n.getRenderTarget();return f===null?n.outputColorSpace:f.isXRRenderTarget===!0?f.texture.colorSpace:Qf.workingColorSpace}var ar={clone:b9,merge:Pv},F6=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R6=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Q3=class extends L3{constructor(f){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F6,this.fragmentShader=R6,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,f!==void 0&&this.setValues(f)}copy(f){return super.copy(f),this.fragmentShader=f.fragmentShader,this.vertexShader=f.vertexShader,this.uniforms=b9(f.uniforms),this.uniformsGroups=M6(f.uniformsGroups),this.defines=Object.assign({},f.defines),this.wireframe=f.wireframe,this.wireframeLinewidth=f.wireframeLinewidth,this.fog=f.fog,this.lights=f.lights,this.clipping=f.clipping,this.extensions=Object.assign({},f.extensions),this.glslVersion=f.glslVersion,this}toJSON(f){let v=super.toJSON(f);v.glslVersion=this.glslVersion,v.uniforms={};for(let P in this.uniforms){let t=this.uniforms[P].value;t&&t.isTexture?v.uniforms[P]={type:"t",value:t.toJSON(f).uuid}:t&&t.isColor?v.uniforms[P]={type:"c",value:t.getHex()}:t&&t.isVector2?v.uniforms[P]={type:"v2",value:t.toArray()}:t&&t.isVector3?v.uniforms[P]={type:"v3",value:t.toArray()}:t&&t.isVector4?v.uniforms[P]={type:"v4",value:t.toArray()}:t&&t.isMatrix3?v.uniforms[P]={type:"m3",value:t.toArray()}:t&&t.isMatrix4?v.uniforms[P]={type:"m4",value:t.toArray()}:v.uniforms[P]={value:t}}Object.keys(this.defines).length>0&&(v.defines=this.defines),v.vertexShader=this.vertexShader,v.fragmentShader=this.fragmentShader,v.lights=this.lights,v.clipping=this.clipping;let e={};for(let P in this.extensions)this.extensions[P]===!0&&(e[P]=!0);return Object.keys(e).length>0&&(v.extensions=e),v}},Je=class extends P3{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new of,this.projectionMatrix=new of,this.projectionMatrixInverse=new of,this.coordinateSystem=av,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(f,v){return super.copy(f,v),this.matrixWorldInverse.copy(f.matrixWorldInverse),this.projectionMatrix.copy(f.projectionMatrix),this.projectionMatrixInverse.copy(f.projectionMatrixInverse),this.coordinateSystem=f.coordinateSystem,this}getWorldDirection(f){return super.getWorldDirection(f).negate()}updateMatrixWorld(f){super.updateMatrixWorld(f),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(f,v){super.updateWorldMatrix(f,v),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},E7=new L,tb=new g,ub=new g,j3=class extends Je{constructor(f=50,v=1,e=.1,P=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=f,this.zoom=1,this.near=e,this.far=P,this.focus=10,this.aspect=v,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(f,v){return super.copy(f,v),this.fov=f.fov,this.zoom=f.zoom,this.near=f.near,this.far=f.far,this.focus=f.focus,this.aspect=f.aspect,this.view=f.view===null?null:Object.assign({},f.view),this.filmGauge=f.filmGauge,this.filmOffset=f.filmOffset,this}setFocalLength(f){let v=.5*this.getFilmHeight()/f;this.fov=Fe*2*Math.atan(v),this.updateProjectionMatrix()}getFocalLength(){let f=Math.tan(qe*.5*this.fov);return .5*this.getFilmHeight()/f}getEffectiveFOV(){return Fe*2*Math.atan(Math.tan(qe*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(f,v,e){E7.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),v.set(E7.x,E7.y).multiplyScalar(-f/E7.z),E7.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(E7.x,E7.y).multiplyScalar(-f/E7.z)}getViewSize(f,v){return this.getViewBounds(f,tb,ub),v.subVectors(ub,tb)}setViewOffset(f,v,e,P,z,t){this.aspect=f/v,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=f,this.view.fullHeight=v,this.view.offsetX=e,this.view.offsetY=P,this.view.width=z,this.view.height=t,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let f=this.near,v=f*Math.tan(qe*.5*this.fov)/this.zoom,e=2*v,P=this.aspect*e,z=-.5*P,t=this.view;if(this.view!==null&&this.view.enabled){let r=t.fullWidth,b=t.fullHeight;z+=t.offsetX*P/r,v-=t.offsetY*e/b,P*=t.width/r,e*=t.height/b}let u=this.filmOffset;u!==0&&(z+=f*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(z,z+P,v,v-e,f,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(f){let v=super.toJSON(f);return v.object.fov=this.fov,v.object.zoom=this.zoom,v.object.near=this.near,v.object.far=this.far,v.object.focus=this.focus,v.object.aspect=this.aspect,this.view!==null&&(v.object.view=Object.assign({},this.view)),v.object.filmGauge=this.filmGauge,v.object.filmOffset=this.filmOffset,v}},L9=-90,W9=1,A8=class extends P3{constructor(f,v,e){super(),this.type="CubeCamera",this.renderTarget=e,this.coordinateSystem=null,this.activeMipmapLevel=0;let P=new j3(L9,W9,f,v);P.layers=this.layers,this.add(P);let z=new j3(L9,W9,f,v);z.layers=this.layers,this.add(z);let t=new j3(L9,W9,f,v);t.layers=this.layers,this.add(t);let u=new j3(L9,W9,f,v);u.layers=this.layers,this.add(u);let r=new j3(L9,W9,f,v);r.layers=this.layers,this.add(r);let b=new j3(L9,W9,f,v);b.layers=this.layers,this.add(b)}updateCoordinateSystem(){let f=this.coordinateSystem,v=this.children.concat(),[e,P,z,t,u,r]=v;for(let b of v)this.remove(b);if(f===av)e.up.set(0,1,0),e.lookAt(1,0,0),P.up.set(0,1,0),P.lookAt(-1,0,0),z.up.set(0,0,-1),z.lookAt(0,1,0),t.up.set(0,0,1),t.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),r.up.set(0,1,0),r.lookAt(0,0,-1);else if(f===Me)e.up.set(0,-1,0),e.lookAt(-1,0,0),P.up.set(0,-1,0),P.lookAt(1,0,0),z.up.set(0,0,1),z.lookAt(0,1,0),t.up.set(0,0,-1),t.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),r.up.set(0,-1,0),r.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+f);for(let b of v)this.add(b),b.updateMatrixWorld()}update(f,v){this.parent===null&&this.updateMatrixWorld();let{renderTarget:e,activeMipmapLevel:P}=this;this.coordinateSystem!==f.coordinateSystem&&(this.coordinateSystem=f.coordinateSystem,this.updateCoordinateSystem());let[z,t,u,r,b,X]=this.children,d=f.getRenderTarget(),H=f.getActiveCubeFace(),x=f.getActiveMipmapLevel(),c=f.xr.enabled;f.xr.enabled=!1;let a=e.texture.generateMipmaps;e.texture.generateMipmaps=!1,f.setRenderTarget(e,0,P),f.render(v,z),f.setRenderTarget(e,1,P),f.render(v,t),f.setRenderTarget(e,2,P),f.render(v,u),f.setRenderTarget(e,3,P),f.render(v,r),f.setRenderTarget(e,4,P),f.render(v,b),e.texture.generateMipmaps=a,f.setRenderTarget(e,5,P),f.render(v,X),f.setRenderTarget(d,H,x),f.xr.enabled=c,e.texture.needsPMREMUpdate=!0}},ne=class extends T3{constructor(f=[],v=N7,e,P,z,t,u,r,b,X){super(f,v,e,P,z,t,u,r,b,X),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(f){this.image=f}},_8=class extends C3{constructor(f=1,v={}){super(f,f,v),this.isWebGLCubeRenderTarget=!0;let e={width:f,height:f,depth:1},P=[e,e,e,e,e,e];this.texture=new ne(P),this._setTextureOptions(v),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(f,v){this.texture.type=v.type,this.texture.colorSpace=v.colorSpace,this.texture.generateMipmaps=v.generateMipmaps,this.texture.minFilter=v.minFilter,this.texture.magFilter=v.magFilter;let e={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},P=new Pe(5,5,5),z=new Q3({name:"CubemapFromEquirect",uniforms:b9(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:g3,blending:a7});z.uniforms.tEquirect.value=v;let t=new _f(P,z),u=v.minFilter;return v.minFilter===iv&&(v.minFilter=Z3),new A8(1,10,this).update(f,t),v.minFilter=u,t.geometry.dispose(),t.material.dispose(),this}clear(f,v=!0,e=!0,P=!0){let z=f.getRenderTarget();for(let t=0;t<6;t++)f.setRenderTarget(this,t),f.clear(v,e,P);f.setRenderTarget(z)}},fv=class extends P3{constructor(){super(),this.isGroup=!0,this.type="Group"}},G6={type:"move"},Ye=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fv,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fv,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fv,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(f){return this._targetRay!==null&&this._targetRay.dispatchEvent(f),this._grip!==null&&this._grip.dispatchEvent(f),this._hand!==null&&this._hand.dispatchEvent(f),this}connect(f){if(f&&f.hand){let v=this._hand;if(v)for(let e of f.hand.values())this._getHandJoint(v,e)}return this.dispatchEvent({type:"connected",data:f}),this}disconnect(f){return this.dispatchEvent({type:"disconnected",data:f}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(f,v,e){let P=null,z=null,t=null,u=this._targetRay,r=this._grip,b=this._hand;if(f&&v.session.visibilityState!=="visible-blurred"){if(b&&f.hand){t=!0;for(let a of f.hand.values()){let j=v.getJointPose(a,e),s=this._getHandJoint(b,a);j!==null&&(s.matrix.fromArray(j.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,s.jointRadius=j.radius),s.visible=j!==null}let X=b.joints["index-finger-tip"],d=b.joints["thumb-tip"],H=X.position.distanceTo(d.position),x=.02,c=.005;b.inputState.pinching&&H>x+c?(b.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:f.handedness,target:this})):!b.inputState.pinching&&H<=x-c&&(b.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:f.handedness,target:this}))}else r!==null&&f.gripSpace&&(z=v.getPose(f.gripSpace,e),z!==null&&(r.matrix.fromArray(z.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,z.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(z.linearVelocity)):r.hasLinearVelocity=!1,z.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(z.angularVelocity)):r.hasAngularVelocity=!1));u!==null&&(P=v.getPose(f.targetRaySpace,e),P===null&&z!==null&&(P=z),P!==null&&(u.matrix.fromArray(P.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,P.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(P.linearVelocity)):u.hasLinearVelocity=!1,P.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(P.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(G6)))}return u!==null&&(u.visible=P!==null),r!==null&&(r.visible=z!==null),b!==null&&(b.visible=t!==null),this}_getHandJoint(f,v){if(f.joints[v.jointName]===void 0){let e=new fv;e.matrixAutoUpdate=!1,e.visible=!1,f.joints[v.jointName]=e,f.add(e)}return f.joints[v.jointName]}},$8=class n{constructor(f,v=25e-5){this.isFogExp2=!0,this.name="",this.color=new bf(f),this.density=v}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Se=class n{constructor(f,v=1,e=1e3){this.isFog=!0,this.name="",this.color=new bf(f),this.near=v,this.far=e}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},kv=class extends P3{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mv,this.environmentIntensity=1,this.environmentRotation=new mv,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(f,v){return super.copy(f,v),f.background!==null&&(this.background=f.background.clone()),f.environment!==null&&(this.environment=f.environment.clone()),f.fog!==null&&(this.fog=f.fog.clone()),this.backgroundBlurriness=f.backgroundBlurriness,this.backgroundIntensity=f.backgroundIntensity,this.backgroundRotation.copy(f.backgroundRotation),this.environmentIntensity=f.environmentIntensity,this.environmentRotation.copy(f.environmentRotation),f.overrideMaterial!==null&&(this.overrideMaterial=f.overrideMaterial.clone()),this.matrixAutoUpdate=f.matrixAutoUpdate,this}toJSON(f){let v=super.toJSON(f);return this.fog!==null&&(v.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(v.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(v.object.backgroundIntensity=this.backgroundIntensity),v.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(v.object.environmentIntensity=this.environmentIntensity),v.object.environmentRotation=this.environmentRotation.toArray(),v}},H7=class{constructor(f,v){this.isInterleavedBuffer=!0,this.array=f,this.stride=v,this.count=f!==void 0?f.length/v:0,this.usage=Y9,this.updateRanges=[],this.version=0,this.uuid=Wv()}onUploadCallback(){}set needsUpdate(f){f===!0&&this.version++}setUsage(f){return this.usage=f,this}addUpdateRange(f,v){this.updateRanges.push({start:f,count:v})}clearUpdateRanges(){this.updateRanges.length=0}copy(f){return this.array=new f.array.constructor(f.array),this.count=f.count,this.stride=f.stride,this.usage=f.usage,this}copyAt(f,v,e){f*=this.stride,e*=v.stride;for(let P=0,z=this.stride;P<z;P++)this.array[f+P]=v.array[e+P];return this}set(f,v=0){return this.array.set(f,v),this}clone(f){f.arrayBuffers===void 0&&(f.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wv()),f.arrayBuffers[this.array.buffer._uuid]===void 0&&(f.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let v=new this.array.constructor(f.arrayBuffers[this.array.buffer._uuid]),e=new this.constructor(v,this.stride);return e.setUsage(this.usage),e}onUpload(f){return this.onUploadCallback=f,this}toJSON(f){return f.arrayBuffers===void 0&&(f.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wv()),f.arrayBuffers[this.array.buffer._uuid]===void 0&&(f.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},zv=new L,$v=class n{constructor(f,v,e,P=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=f,this.itemSize=v,this.offset=e,this.normalized=P}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(f){this.data.needsUpdate=f}applyMatrix4(f){for(let v=0,e=this.data.count;v<e;v++)zv.fromBufferAttribute(this,v),zv.applyMatrix4(f),this.setXYZ(v,zv.x,zv.y,zv.z);return this}applyNormalMatrix(f){for(let v=0,e=this.count;v<e;v++)zv.fromBufferAttribute(this,v),zv.applyNormalMatrix(f),this.setXYZ(v,zv.x,zv.y,zv.z);return this}transformDirection(f){for(let v=0,e=this.count;v<e;v++)zv.fromBufferAttribute(this,v),zv.transformDirection(f),this.setXYZ(v,zv.x,zv.y,zv.z);return this}getComponent(f,v){let e=this.array[f*this.data.stride+this.offset+v];return this.normalized&&(e=tv(e,this.array)),e}setComponent(f,v,e){return this.normalized&&(e=gf(e,this.array)),this.data.array[f*this.data.stride+this.offset+v]=e,this}setX(f,v){return this.normalized&&(v=gf(v,this.array)),this.data.array[f*this.data.stride+this.offset]=v,this}setY(f,v){return this.normalized&&(v=gf(v,this.array)),this.data.array[f*this.data.stride+this.offset+1]=v,this}setZ(f,v){return this.normalized&&(v=gf(v,this.array)),this.data.array[f*this.data.stride+this.offset+2]=v,this}setW(f,v){return this.normalized&&(v=gf(v,this.array)),this.data.array[f*this.data.stride+this.offset+3]=v,this}getX(f){let v=this.data.array[f*this.data.stride+this.offset];return this.normalized&&(v=tv(v,this.array)),v}getY(f){let v=this.data.array[f*this.data.stride+this.offset+1];return this.normalized&&(v=tv(v,this.array)),v}getZ(f){let v=this.data.array[f*this.data.stride+this.offset+2];return this.normalized&&(v=tv(v,this.array)),v}getW(f){let v=this.data.array[f*this.data.stride+this.offset+3];return this.normalized&&(v=tv(v,this.array)),v}setXY(f,v,e){return f=f*this.data.stride+this.offset,this.normalized&&(v=gf(v,this.array),e=gf(e,this.array)),this.data.array[f+0]=v,this.data.array[f+1]=e,this}setXYZ(f,v,e,P){return f=f*this.data.stride+this.offset,this.normalized&&(v=gf(v,this.array),e=gf(e,this.array),P=gf(P,this.array)),this.data.array[f+0]=v,this.data.array[f+1]=e,this.data.array[f+2]=P,this}setXYZW(f,v,e,P,z){return f=f*this.data.stride+this.offset,this.normalized&&(v=gf(v,this.array),e=gf(e,this.array),P=gf(P,this.array),z=gf(z,this.array)),this.data.array[f+0]=v,this.data.array[f+1]=e,this.data.array[f+2]=P,this.data.array[f+3]=z,this}clone(f){if(f===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let v=[];for(let e=0;e<this.count;e++){let P=e*this.data.stride+this.offset;for(let z=0;z<this.itemSize;z++)v.push(this.data.array[P+z])}return new Af(new this.array.constructor(v),this.itemSize,this.normalized)}else return f.interleavedBuffers===void 0&&(f.interleavedBuffers={}),f.interleavedBuffers[this.data.uuid]===void 0&&(f.interleavedBuffers[this.data.uuid]=this.data.clone(f)),new n(f.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(f){if(f===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let v=[];for(let e=0;e<this.count;e++){let P=e*this.data.stride+this.offset;for(let z=0;z<this.itemSize;z++)v.push(this.data.array[P+z])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:v,normalized:this.normalized}}else return f.interleavedBuffers===void 0&&(f.interleavedBuffers={}),f.interleavedBuffers[this.data.uuid]===void 0&&(f.interleavedBuffers[this.data.uuid]=this.data.toJSON(f)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},E9=class extends L3{constructor(f){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bf(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(f)}copy(f){return super.copy(f),this.color.copy(f.color),this.map=f.map,this.alphaMap=f.alphaMap,this.rotation=f.rotation,this.sizeAttenuation=f.sizeAttenuation,this.fog=f.fog,this}},h9,o8=new L,w9=new L,V9=new L,D9=new g,M8=new g,oX=new of,cz=new L,F8=new L,jz=new L,rb=new g,Bt=new g,bb=new g,fP=class extends P3{constructor(f=new E9){if(super(),this.isSprite=!0,this.type="Sprite",h9===void 0){h9=new kf;let v=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),e=new H7(v,5);h9.setIndex([0,1,2,0,2,3]),h9.setAttribute("position",new $v(e,3,0,!1)),h9.setAttribute("uv",new $v(e,2,3,!1))}this.geometry=h9,this.material=f,this.center=new g(.5,.5),this.count=1}raycast(f,v){f.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),w9.setFromMatrixScale(this.matrixWorld),oX.copy(f.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(f.camera.matrixWorldInverse,this.matrixWorld),V9.setFromMatrixPosition(this.modelViewMatrix),f.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&w9.multiplyScalar(-V9.z);let e=this.material.rotation,P,z;e!==0&&(z=Math.cos(e),P=Math.sin(e));let t=this.center;az(cz.set(-.5,-.5,0),V9,t,w9,P,z),az(F8.set(.5,-.5,0),V9,t,w9,P,z),az(jz.set(.5,.5,0),V9,t,w9,P,z),rb.set(0,0),Bt.set(1,0),bb.set(1,1);let u=f.ray.intersectTriangle(cz,F8,jz,!1,o8);if(u===null&&(az(F8.set(-.5,.5,0),V9,t,w9,P,z),Bt.set(0,1),u=f.ray.intersectTriangle(cz,jz,F8,!1,o8),u===null))return;let r=f.ray.origin.distanceTo(o8);r<f.near||r>f.far||v.push({distance:r,point:o8.clone(),uv:Cv.getInterpolation(o8,cz,F8,jz,rb,Bt,bb,new g),face:null,object:this})}copy(f,v){return super.copy(f,v),f.center!==void 0&&this.center.copy(f.center),this.material=f.material,this}};function az(n,f,v,e,P,z){D9.subVectors(n,v).addScalar(.5).multiply(e),P!==void 0?(M8.x=z*D9.x-P*D9.y,M8.y=P*D9.x+z*D9.y):M8.copy(D9),n.copy(f),n.x+=M8.x,n.y+=M8.y,n.applyMatrix4(oX)}var mz=new L,Xb=new L,vP=class extends P3{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(f){super.copy(f,!1);let v=f.levels;for(let e=0,P=v.length;e<P;e++){let z=v[e];this.addLevel(z.object.clone(),z.distance,z.hysteresis)}return this.autoUpdate=f.autoUpdate,this}addLevel(f,v=0,e=0){v=Math.abs(v);let P=this.levels,z;for(z=0;z<P.length&&!(v<P[z].distance);z++);return P.splice(z,0,{distance:v,hysteresis:e,object:f}),this.add(f),this}removeLevel(f){let v=this.levels;for(let e=0;e<v.length;e++)if(v[e].distance===f){let P=v.splice(e,1);return this.remove(P[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(f){let v=this.levels;if(v.length>0){let e,P;for(e=1,P=v.length;e<P;e++){let z=v[e].distance;if(v[e].object.visible&&(z-=z*v[e].hysteresis),f<z)break}return v[e-1].object}return null}raycast(f,v){if(this.levels.length>0){mz.setFromMatrixPosition(this.matrixWorld);let P=f.ray.origin.distanceTo(mz);this.getObjectForDistance(P).raycast(f,v)}}update(f){let v=this.levels;if(v.length>1){mz.setFromMatrixPosition(f.matrixWorld),Xb.setFromMatrixPosition(this.matrixWorld);let e=mz.distanceTo(Xb)/f.zoom;v[0].object.visible=!0;let P,z;for(P=1,z=v.length;P<z;P++){let t=v[P].distance;if(v[P].object.visible&&(t-=t*v[P].hysteresis),e>=t)v[P-1].object.visible=!1,v[P].object.visible=!0;else break}for(this._currentLevel=P-1;P<z;P++)v[P].object.visible=!1}}toJSON(f){let v=super.toJSON(f);this.autoUpdate===!1&&(v.object.autoUpdate=!1),v.object.levels=[];let e=this.levels;for(let P=0,z=e.length;P<z;P++){let t=e[P];v.object.levels.push({object:t.object.uuid,distance:t.distance,hysteresis:t.hysteresis})}return v}},db=new L,Hb=new n3,xb=new n3,k6=new L,sb=new of,Nz=new L,Ct=new w3,cb=new of,Qt=new _v,Ke=class extends _f{constructor(f,v){super(f,v),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yz,this.bindMatrix=new of,this.bindMatrixInverse=new of,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let f=this.geometry;this.boundingBox===null&&(this.boundingBox=new D3),this.boundingBox.makeEmpty();let v=f.getAttribute("position");for(let e=0;e<v.count;e++)this.getVertexPosition(e,Nz),this.boundingBox.expandByPoint(Nz)}computeBoundingSphere(){let f=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new w3),this.boundingSphere.makeEmpty();let v=f.getAttribute("position");for(let e=0;e<v.count;e++)this.getVertexPosition(e,Nz),this.boundingSphere.expandByPoint(Nz)}copy(f,v){return super.copy(f,v),this.bindMode=f.bindMode,this.bindMatrix.copy(f.bindMatrix),this.bindMatrixInverse.copy(f.bindMatrixInverse),this.skeleton=f.skeleton,f.boundingBox!==null&&(this.boundingBox=f.boundingBox.clone()),f.boundingSphere!==null&&(this.boundingSphere=f.boundingSphere.clone()),this}raycast(f,v){let e=this.material,P=this.matrixWorld;e!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ct.copy(this.boundingSphere),Ct.applyMatrix4(P),f.ray.intersectsSphere(Ct)!==!1&&(cb.copy(P).invert(),Qt.copy(f.ray).applyMatrix4(cb),!(this.boundingBox!==null&&Qt.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(f,v,Qt)))}getVertexPosition(f,v){return super.getVertexPosition(f,v),this.applyBoneTransform(f,v),v}bind(f,v){this.skeleton=f,v===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),v=this.matrixWorld),this.bindMatrix.copy(v),this.bindMatrixInverse.copy(v).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let f=new n3,v=this.geometry.attributes.skinWeight;for(let e=0,P=v.count;e<P;e++){f.fromBufferAttribute(v,e);let z=1/f.manhattanLength();z!==1/0?f.multiplyScalar(z):f.set(1,0,0,0),v.setXYZW(e,f.x,f.y,f.z,f.w)}}updateMatrixWorld(f){super.updateMatrixWorld(f),this.bindMode===Yz?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$u?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(f,v){let e=this.skeleton,P=this.geometry;Hb.fromBufferAttribute(P.attributes.skinIndex,f),xb.fromBufferAttribute(P.attributes.skinWeight,f),db.copy(v).applyMatrix4(this.bindMatrix),v.set(0,0,0);for(let z=0;z<4;z++){let t=xb.getComponent(z);if(t!==0){let u=Hb.getComponent(z);sb.multiplyMatrices(e.bones[u].matrixWorld,e.boneInverses[u]),v.addScaledVector(k6.copy(db).applyMatrix4(sb),t)}}return v.applyMatrix4(this.bindMatrixInverse)}},ze=class extends P3{constructor(){super(),this.isBone=!0,this.type="Bone"}},rv=class extends T3{constructor(f=null,v=1,e=1,P,z,t,u,r,b=q3,X=q3,d,H){super(null,t,u,r,b,X,P,z,d,H),this.isDataTexture=!0,this.image={data:f,width:v,height:e},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},jb=new of,J6=new of,Ue=class n{constructor(f=[],v=[]){this.uuid=Wv(),this.bones=f.slice(0),this.boneInverses=v,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let f=this.bones,v=this.boneInverses;if(this.boneMatrices=new Float32Array(f.length*16),v.length===0)this.calculateInverses();else if(f.length!==v.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let e=0,P=this.bones.length;e<P;e++)this.boneInverses.push(new of)}}calculateInverses(){this.boneInverses.length=0;for(let f=0,v=this.bones.length;f<v;f++){let e=new of;this.bones[f]&&e.copy(this.bones[f].matrixWorld).invert(),this.boneInverses.push(e)}}pose(){for(let f=0,v=this.bones.length;f<v;f++){let e=this.bones[f];e&&e.matrixWorld.copy(this.boneInverses[f]).invert()}for(let f=0,v=this.bones.length;f<v;f++){let e=this.bones[f];e&&(e.parent&&e.parent.isBone?(e.matrix.copy(e.parent.matrixWorld).invert(),e.matrix.multiply(e.matrixWorld)):e.matrix.copy(e.matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale))}}update(){let f=this.bones,v=this.boneInverses,e=this.boneMatrices,P=this.boneTexture;for(let z=0,t=f.length;z<t;z++){let u=f[z]?f[z].matrixWorld:J6;jb.multiplyMatrices(u,v[z]),jb.toArray(e,z*16)}P!==null&&(P.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let f=Math.sqrt(this.bones.length*4);f=Math.ceil(f/4)*4,f=Math.max(f,4);let v=new Float32Array(f*f*4);v.set(this.boneMatrices);let e=new rv(v,f,f,U3,B3);return e.needsUpdate=!0,this.boneMatrices=v,this.boneTexture=e,this}getBoneByName(f){for(let v=0,e=this.bones.length;v<e;v++){let P=this.bones[v];if(P.name===f)return P}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(f,v){this.uuid=f.uuid;for(let e=0,P=f.bones.length;e<P;e++){let z=f.bones[e],t=v[z];t===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",z),t=new ze),this.bones.push(t),this.boneInverses.push(new of().fromArray(f.boneInverses[e]))}return this.init(),this}toJSON(){let f={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};f.uuid=this.uuid;let v=this.bones,e=this.boneInverses;for(let P=0,z=v.length;P<z;P++){let t=v[P];f.bones.push(t.uuid);let u=e[P];f.boneInverses.push(u.toArray())}return f}},Jv=class extends Af{constructor(f,v,e,P=1){super(f,v,e),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=P}copy(f){return super.copy(f),this.meshPerAttribute=f.meshPerAttribute,this}toJSON(){let f=super.toJSON();return f.meshPerAttribute=this.meshPerAttribute,f.isInstancedBufferAttribute=!0,f}},q9=new of,ab=new of,iz=[],mb=new D3,Y6=new of,R8=new _f,G8=new w3,Ie=class extends _f{constructor(f,v,e){super(f,v),this.isInstancedMesh=!0,this.instanceMatrix=new Jv(new Float32Array(e*16),16),this.instanceColor=null,this.morphTexture=null,this.count=e,this.boundingBox=null,this.boundingSphere=null;for(let P=0;P<e;P++)this.setMatrixAt(P,Y6)}computeBoundingBox(){let f=this.geometry,v=this.count;this.boundingBox===null&&(this.boundingBox=new D3),f.boundingBox===null&&f.computeBoundingBox(),this.boundingBox.makeEmpty();for(let e=0;e<v;e++)this.getMatrixAt(e,q9),mb.copy(f.boundingBox).applyMatrix4(q9),this.boundingBox.union(mb)}computeBoundingSphere(){let f=this.geometry,v=this.count;this.boundingSphere===null&&(this.boundingSphere=new w3),f.boundingSphere===null&&f.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let e=0;e<v;e++)this.getMatrixAt(e,q9),G8.copy(f.boundingSphere).applyMatrix4(q9),this.boundingSphere.union(G8)}copy(f,v){return super.copy(f,v),this.instanceMatrix.copy(f.instanceMatrix),f.morphTexture!==null&&(this.morphTexture=f.morphTexture.clone()),f.instanceColor!==null&&(this.instanceColor=f.instanceColor.clone()),this.count=f.count,f.boundingBox!==null&&(this.boundingBox=f.boundingBox.clone()),f.boundingSphere!==null&&(this.boundingSphere=f.boundingSphere.clone()),this}getColorAt(f,v){v.fromArray(this.instanceColor.array,f*3)}getMatrixAt(f,v){v.fromArray(this.instanceMatrix.array,f*16)}getMorphAt(f,v){let e=v.morphTargetInfluences,P=this.morphTexture.source.data.data,z=e.length+1,t=f*z+1;for(let u=0;u<e.length;u++)e[u]=P[t+u]}raycast(f,v){let e=this.matrixWorld,P=this.count;if(R8.geometry=this.geometry,R8.material=this.material,R8.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),G8.copy(this.boundingSphere),G8.applyMatrix4(e),f.ray.intersectsSphere(G8)!==!1))for(let z=0;z<P;z++){this.getMatrixAt(z,q9),ab.multiplyMatrices(e,q9),R8.matrixWorld=ab,R8.raycast(f,iz);for(let t=0,u=iz.length;t<u;t++){let r=iz[t];r.instanceId=z,r.object=this,v.push(r)}iz.length=0}}setColorAt(f,v){this.instanceColor===null&&(this.instanceColor=new Jv(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),v.toArray(this.instanceColor.array,f*3)}setMatrixAt(f,v){v.toArray(this.instanceMatrix.array,f*16)}setMorphAt(f,v){let e=v.morphTargetInfluences,P=e.length+1;this.morphTexture===null&&(this.morphTexture=new rv(new Float32Array(P*this.count),P,this.count,bn,B3));let z=this.morphTexture.source.data.data,t=0;for(let b=0;b<e.length;b++)t+=e[b];let u=this.geometry.morphTargetsRelative?1:1-t,r=P*f;z[r]=u,z.set(e,r+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},At=new L,S6=new L,K6=new Kf,Lv=class{constructor(f=new L(1,0,0),v=0){this.isPlane=!0,this.normal=f,this.constant=v}set(f,v){return this.normal.copy(f),this.constant=v,this}setComponents(f,v,e,P){return this.normal.set(f,v,e),this.constant=P,this}setFromNormalAndCoplanarPoint(f,v){return this.normal.copy(f),this.constant=-v.dot(this.normal),this}setFromCoplanarPoints(f,v,e){let P=At.subVectors(e,v).cross(S6.subVectors(f,v)).normalize();return this.setFromNormalAndCoplanarPoint(P,f),this}copy(f){return this.normal.copy(f.normal),this.constant=f.constant,this}normalize(){let f=1/this.normal.length();return this.normal.multiplyScalar(f),this.constant*=f,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(f){return this.normal.dot(f)+this.constant}distanceToSphere(f){return this.distanceToPoint(f.center)-f.radius}projectPoint(f,v){return v.copy(f).addScaledVector(this.normal,-this.distanceToPoint(f))}intersectLine(f,v){let e=f.delta(At),P=this.normal.dot(e);if(P===0)return this.distanceToPoint(f.start)===0?v.copy(f.start):null;let z=-(f.start.dot(this.normal)+this.constant)/P;return z<0||z>1?null:v.copy(f.start).addScaledVector(e,z)}intersectsLine(f){let v=this.distanceToPoint(f.start),e=this.distanceToPoint(f.end);return v<0&&e>0||e<0&&v>0}intersectsBox(f){return f.intersectsPlane(this)}intersectsSphere(f){return f.intersectsPlane(this)}coplanarPoint(f){return f.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(f,v){let e=v||K6.getNormalMatrix(f),P=this.coplanarPoint(At).applyMatrix4(f),z=this.normal.applyMatrix3(e).normalize();return this.constant=-P.dot(z),this}translate(f){return this.constant-=f.dot(this.normal),this}equals(f){return f.normal.equals(this.normal)&&f.constant===this.constant}clone(){return new this.constructor().copy(this)}},ye=new w3,U6=new g(.5,.5),Zz=new L,q7=class{constructor(f=new Lv,v=new Lv,e=new Lv,P=new Lv,z=new Lv,t=new Lv){this.planes=[f,v,e,P,z,t]}set(f,v,e,P,z,t){let u=this.planes;return u[0].copy(f),u[1].copy(v),u[2].copy(e),u[3].copy(P),u[4].copy(z),u[5].copy(t),this}copy(f){let v=this.planes;for(let e=0;e<6;e++)v[e].copy(f.planes[e]);return this}setFromProjectionMatrix(f,v=av,e=!1){let P=this.planes,z=f.elements,t=z[0],u=z[1],r=z[2],b=z[3],X=z[4],d=z[5],H=z[6],x=z[7],c=z[8],a=z[9],j=z[10],s=z[11],i=z[12],N=z[13],m=z[14],p=z[15];if(P[0].setComponents(b-t,x-X,s-c,p-i).normalize(),P[1].setComponents(b+t,x+X,s+c,p+i).normalize(),P[2].setComponents(b+u,x+d,s+a,p+N).normalize(),P[3].setComponents(b-u,x-d,s-a,p-N).normalize(),e)P[4].setComponents(r,H,j,m).normalize(),P[5].setComponents(b-r,x-H,s-j,p-m).normalize();else if(P[4].setComponents(b-r,x-H,s-j,p-m).normalize(),v===av)P[5].setComponents(b+r,x+H,s+j,p+m).normalize();else if(v===Me)P[5].setComponents(r,H,j,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+v);return this}intersectsObject(f){if(f.boundingSphere!==void 0)f.boundingSphere===null&&f.computeBoundingSphere(),ye.copy(f.boundingSphere).applyMatrix4(f.matrixWorld);else{let v=f.geometry;v.boundingSphere===null&&v.computeBoundingSphere(),ye.copy(v.boundingSphere).applyMatrix4(f.matrixWorld)}return this.intersectsSphere(ye)}intersectsSprite(f){ye.center.set(0,0,0);let v=U6.distanceTo(f.center);return ye.radius=.7071067811865476+v,ye.applyMatrix4(f.matrixWorld),this.intersectsSphere(ye)}intersectsSphere(f){let v=this.planes,e=f.center,P=-f.radius;for(let z=0;z<6;z++)if(v[z].distanceToPoint(e)<P)return!1;return!0}intersectsBox(f){let v=this.planes;for(let e=0;e<6;e++){let P=v[e];if(Zz.x=P.normal.x>0?f.max.x:f.min.x,Zz.y=P.normal.y>0?f.max.y:f.min.y,Zz.z=P.normal.z>0?f.max.z:f.min.z,P.distanceToPoint(Zz)<0)return!1}return!0}containsPoint(f){let v=this.planes;for(let e=0;e<6;e++)if(v[e].distanceToPoint(f)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},b7=new of,X7=new q7,eP=class n{constructor(){this.coordinateSystem=av}intersectsObject(f,v){if(!v.isArrayCamera||v.cameras.length===0)return!1;for(let e=0;e<v.cameras.length;e++){let P=v.cameras[e];if(b7.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),X7.setFromProjectionMatrix(b7,P.coordinateSystem,P.reversedDepth),X7.intersectsObject(f))return!0}return!1}intersectsSprite(f,v){if(!v||!v.cameras||v.cameras.length===0)return!1;for(let e=0;e<v.cameras.length;e++){let P=v.cameras[e];if(b7.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),X7.setFromProjectionMatrix(b7,P.coordinateSystem,P.reversedDepth),X7.intersectsSprite(f))return!0}return!1}intersectsSphere(f,v){if(!v||!v.cameras||v.cameras.length===0)return!1;for(let e=0;e<v.cameras.length;e++){let P=v.cameras[e];if(b7.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),X7.setFromProjectionMatrix(b7,P.coordinateSystem,P.reversedDepth),X7.intersectsSphere(f))return!0}return!1}intersectsBox(f,v){if(!v||!v.cameras||v.cameras.length===0)return!1;for(let e=0;e<v.cameras.length;e++){let P=v.cameras[e];if(b7.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),X7.setFromProjectionMatrix(b7,P.coordinateSystem,P.reversedDepth),X7.intersectsBox(f))return!0}return!1}containsPoint(f,v){if(!v||!v.cameras||v.cameras.length===0)return!1;for(let e=0;e<v.cameras.length;e++){let P=v.cameras[e];if(b7.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),X7.setFromProjectionMatrix(b7,P.coordinateSystem,P.reversedDepth),X7.containsPoint(f))return!0}return!1}clone(){return new n}};function _t(n,f){return n-f}function I6(n,f){return n.z-f.z}function g6(n,f){return f.z-n.z}var Hu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(f,v,e,P){let z=this.pool,t=this.list;this.index>=z.length&&z.push({start:-1,count:-1,z:-1,index:-1});let u=z[this.index];t.push(u),this.index++,u.start=f,u.count=v,u.z=e,u.index=P}reset(){this.list.length=0,this.index=0}},cv=new of,E6=new bf(1,1,1),Nb=new q7,B6=new eP,Tz=new D3,pe=new w3,k8=new L,ib=new L,C6=new L,$t=new Hu,$3=new _f,yz=[];function Q6(n,f,v=0){let e=f.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==f.array.constructor){let P=n.count;for(let z=0;z<P;z++)for(let t=0;t<e;t++)f.setComponent(z+v,t,n.getComponent(z,t))}else f.array.set(n.array,v*e);f.needsUpdate=!0}function Oe(n,f){if(n.constructor!==f.constructor){let v=Math.min(n.length,f.length);for(let e=0;e<v;e++)f[e]=n[e]}else{let v=Math.min(n.length,f.length);f.set(new n.constructor(n.buffer,0,v))}}var PP=class extends _f{constructor(f,v,e=v*2,P){super(new kf,P),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=f,this._maxVertexCount=v,this._maxIndexCount=e,this._multiDrawCounts=new Int32Array(f),this._multiDrawStarts=new Int32Array(f),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let f=Math.sqrt(this._maxInstanceCount*4);f=Math.ceil(f/4)*4,f=Math.max(f,4);let v=new Float32Array(f*f*4),e=new rv(v,f,f,U3,B3);this._matricesTexture=e}_initIndirectTexture(){let f=Math.sqrt(this._maxInstanceCount);f=Math.ceil(f);let v=new Uint32Array(f*f),e=new rv(v,f,f,j8,i7);this._indirectTexture=e}_initColorsTexture(){let f=Math.sqrt(this._maxInstanceCount);f=Math.ceil(f);let v=new Float32Array(f*f*4).fill(1),e=new rv(v,f,f,U3,B3);e.colorSpace=Qf.workingColorSpace,this._colorsTexture=e}_initializeGeometry(f){let v=this.geometry,e=this._maxVertexCount,P=this._maxIndexCount;if(this._geometryInitialized===!1){for(let z in f.attributes){let t=f.getAttribute(z),{array:u,itemSize:r,normalized:b}=t,X=new u.constructor(e*r),d=new Af(X,r,b);v.setAttribute(z,d)}if(f.getIndex()!==null){let z=e>65535?new Uint32Array(P):new Uint16Array(P);v.setIndex(new Af(z,1))}this._geometryInitialized=!0}}_validateGeometry(f){let v=this.geometry;if(!!f.getIndex()!=!!v.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let e in v.attributes){if(!f.hasAttribute(e))throw new Error(`THREE.BatchedMesh: Added geometry missing "${e}". All geometries must have consistent attributes.`);let P=f.getAttribute(e),z=v.getAttribute(e);if(P.itemSize!==z.itemSize||P.normalized!==z.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(f){let v=this._instanceInfo;if(f<0||f>=v.length||v[f].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${f}. Instance is either out of range or has been deleted.`)}validateGeometryId(f){let v=this._geometryInfo;if(f<0||f>=v.length||v[f].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${f}. Geometry is either out of range or has been deleted.`)}setCustomSort(f){return this.customSort=f,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new D3);let f=this.boundingBox,v=this._instanceInfo;f.makeEmpty();for(let e=0,P=v.length;e<P;e++){if(v[e].active===!1)continue;let z=v[e].geometryIndex;this.getMatrixAt(e,cv),this.getBoundingBoxAt(z,Tz).applyMatrix4(cv),f.union(Tz)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new w3);let f=this.boundingSphere,v=this._instanceInfo;f.makeEmpty();for(let e=0,P=v.length;e<P;e++){if(v[e].active===!1)continue;let z=v[e].geometryIndex;this.getMatrixAt(e,cv),this.getBoundingSphereAt(z,pe).applyMatrix4(cv),f.union(pe)}}addInstance(f){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let e={visible:!0,active:!0,geometryIndex:f},P=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(_t),P=this._availableInstanceIds.shift(),this._instanceInfo[P]=e):(P=this._instanceInfo.length,this._instanceInfo.push(e));let z=this._matricesTexture;cv.identity().toArray(z.image.data,P*16),z.needsUpdate=!0;let t=this._colorsTexture;return t&&(E6.toArray(t.image.data,P*4),t.needsUpdate=!0),this._visibilityChanged=!0,P}addGeometry(f,v=-1,e=-1){this._initializeGeometry(f),this._validateGeometry(f);let P={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},z=this._geometryInfo;P.vertexStart=this._nextVertexStart,P.reservedVertexCount=v===-1?f.getAttribute("position").count:v;let t=f.getIndex();if(t!==null&&(P.indexStart=this._nextIndexStart,P.reservedIndexCount=e===-1?t.count:e),P.indexStart!==-1&&P.indexStart+P.reservedIndexCount>this._maxIndexCount||P.vertexStart+P.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let r;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(_t),r=this._availableGeometryIds.shift(),z[r]=P):(r=this._geometryCount,this._geometryCount++,z.push(P)),this.setGeometryAt(r,f),this._nextIndexStart=P.indexStart+P.reservedIndexCount,this._nextVertexStart=P.vertexStart+P.reservedVertexCount,r}setGeometryAt(f,v){if(f>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(v);let e=this.geometry,P=e.getIndex()!==null,z=e.getIndex(),t=v.getIndex(),u=this._geometryInfo[f];if(P&&t.count>u.reservedIndexCount||v.attributes.position.count>u.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let r=u.vertexStart,b=u.reservedVertexCount;u.vertexCount=v.getAttribute("position").count;for(let X in e.attributes){let d=v.getAttribute(X),H=e.getAttribute(X);Q6(d,H,r);let x=d.itemSize;for(let c=d.count,a=b;c<a;c++){let j=r+c;for(let s=0;s<x;s++)H.setComponent(j,s,0)}H.needsUpdate=!0,H.addUpdateRange(r*x,b*x)}if(P){let X=u.indexStart,d=u.reservedIndexCount;u.indexCount=v.getIndex().count;for(let H=0;H<t.count;H++)z.setX(X+H,r+t.getX(H));for(let H=t.count,x=d;H<x;H++)z.setX(X+H,r);z.needsUpdate=!0,z.addUpdateRange(X,u.reservedIndexCount)}return u.start=P?u.indexStart:u.vertexStart,u.count=P?u.indexCount:u.vertexCount,u.boundingBox=null,v.boundingBox!==null&&(u.boundingBox=v.boundingBox.clone()),u.boundingSphere=null,v.boundingSphere!==null&&(u.boundingSphere=v.boundingSphere.clone()),this._visibilityChanged=!0,f}deleteGeometry(f){let v=this._geometryInfo;if(f>=v.length||v[f].active===!1)return this;let e=this._instanceInfo;for(let P=0,z=e.length;P<z;P++)e[P].active&&e[P].geometryIndex===f&&this.deleteInstance(P);return v[f].active=!1,this._availableGeometryIds.push(f),this._visibilityChanged=!0,this}deleteInstance(f){return this.validateInstanceId(f),this._instanceInfo[f].active=!1,this._availableInstanceIds.push(f),this._visibilityChanged=!0,this}optimize(){let f=0,v=0,e=this._geometryInfo,P=e.map((t,u)=>u).sort((t,u)=>e[t].vertexStart-e[u].vertexStart),z=this.geometry;for(let t=0,u=e.length;t<u;t++){let r=P[t],b=e[r];if(b.active!==!1){if(z.index!==null){if(b.indexStart!==v){let{indexStart:X,vertexStart:d,reservedIndexCount:H}=b,x=z.index,c=x.array,a=f-d;for(let j=X;j<X+H;j++)c[j]=c[j]+a;x.array.copyWithin(v,X,X+H),x.addUpdateRange(v,H),b.indexStart=v}v+=b.reservedIndexCount}if(b.vertexStart!==f){let{vertexStart:X,reservedVertexCount:d}=b,H=z.attributes;for(let x in H){let c=H[x],{array:a,itemSize:j}=c;a.copyWithin(f*j,X*j,(X+d)*j),c.addUpdateRange(f*j,d*j)}b.vertexStart=f}f+=b.reservedVertexCount,b.start=z.index?b.indexStart:b.vertexStart,this._nextIndexStart=z.index?b.indexStart+b.reservedIndexCount:0,this._nextVertexStart=b.vertexStart+b.reservedVertexCount}}return this}getBoundingBoxAt(f,v){if(f>=this._geometryCount)return null;let e=this.geometry,P=this._geometryInfo[f];if(P.boundingBox===null){let z=new D3,t=e.index,u=e.attributes.position;for(let r=P.start,b=P.start+P.count;r<b;r++){let X=r;t&&(X=t.getX(X)),z.expandByPoint(k8.fromBufferAttribute(u,X))}P.boundingBox=z}return v.copy(P.boundingBox),v}getBoundingSphereAt(f,v){if(f>=this._geometryCount)return null;let e=this.geometry,P=this._geometryInfo[f];if(P.boundingSphere===null){let z=new w3;this.getBoundingBoxAt(f,Tz),Tz.getCenter(z.center);let t=e.index,u=e.attributes.position,r=0;for(let b=P.start,X=P.start+P.count;b<X;b++){let d=b;t&&(d=t.getX(d)),k8.fromBufferAttribute(u,d),r=Math.max(r,z.center.distanceToSquared(k8))}z.radius=Math.sqrt(r),P.boundingSphere=z}return v.copy(P.boundingSphere),v}setMatrixAt(f,v){this.validateInstanceId(f);let e=this._matricesTexture,P=this._matricesTexture.image.data;return v.toArray(P,f*16),e.needsUpdate=!0,this}getMatrixAt(f,v){return this.validateInstanceId(f),v.fromArray(this._matricesTexture.image.data,f*16)}setColorAt(f,v){return this.validateInstanceId(f),this._colorsTexture===null&&this._initColorsTexture(),v.toArray(this._colorsTexture.image.data,f*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(f,v){return this.validateInstanceId(f),v.fromArray(this._colorsTexture.image.data,f*4)}setVisibleAt(f,v){return this.validateInstanceId(f),this._instanceInfo[f].visible===v?this:(this._instanceInfo[f].visible=v,this._visibilityChanged=!0,this)}getVisibleAt(f){return this.validateInstanceId(f),this._instanceInfo[f].visible}setGeometryIdAt(f,v){return this.validateInstanceId(f),this.validateGeometryId(v),this._instanceInfo[f].geometryIndex=v,this}getGeometryIdAt(f){return this.validateInstanceId(f),this._instanceInfo[f].geometryIndex}getGeometryRangeAt(f,v={}){this.validateGeometryId(f);let e=this._geometryInfo[f];return v.vertexStart=e.vertexStart,v.vertexCount=e.vertexCount,v.reservedVertexCount=e.reservedVertexCount,v.indexStart=e.indexStart,v.indexCount=e.indexCount,v.reservedIndexCount=e.reservedIndexCount,v.start=e.start,v.count=e.count,v}setInstanceCount(f){let v=this._availableInstanceIds,e=this._instanceInfo;for(v.sort(_t);v[v.length-1]===e.length-1;)e.pop(),v.pop();if(f<e.length)throw new Error(`BatchedMesh: Instance ids outside the range ${f} are being used. Cannot shrink instance count.`);let P=new Int32Array(f),z=new Int32Array(f);Oe(this._multiDrawCounts,P),Oe(this._multiDrawStarts,z),this._multiDrawCounts=P,this._multiDrawStarts=z,this._maxInstanceCount=f;let t=this._indirectTexture,u=this._matricesTexture,r=this._colorsTexture;t.dispose(),this._initIndirectTexture(),Oe(t.image.data,this._indirectTexture.image.data),u.dispose(),this._initMatricesTexture(),Oe(u.image.data,this._matricesTexture.image.data),r&&(r.dispose(),this._initColorsTexture(),Oe(r.image.data,this._colorsTexture.image.data))}setGeometrySize(f,v){let e=[...this._geometryInfo].filter(u=>u.active);if(Math.max(...e.map(u=>u.vertexStart+u.reservedVertexCount))>f)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${v}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...e.map(r=>r.indexStart+r.reservedIndexCount))>v)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${v}. Cannot shrink further.`);let z=this.geometry;z.dispose(),this._maxVertexCount=f,this._maxIndexCount=v,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new kf,this._initializeGeometry(z));let t=this.geometry;z.index&&Oe(z.index.array,t.index.array);for(let u in z.attributes)Oe(z.attributes[u].array,t.attributes[u].array)}raycast(f,v){let e=this._instanceInfo,P=this._geometryInfo,z=this.matrixWorld,t=this.geometry;$3.material=this.material,$3.geometry.index=t.index,$3.geometry.attributes=t.attributes,$3.geometry.boundingBox===null&&($3.geometry.boundingBox=new D3),$3.geometry.boundingSphere===null&&($3.geometry.boundingSphere=new w3);for(let u=0,r=e.length;u<r;u++){if(!e[u].visible||!e[u].active)continue;let b=e[u].geometryIndex,X=P[b];$3.geometry.setDrawRange(X.start,X.count),this.getMatrixAt(u,$3.matrixWorld).premultiply(z),this.getBoundingBoxAt(b,$3.geometry.boundingBox),this.getBoundingSphereAt(b,$3.geometry.boundingSphere),$3.raycast(f,yz);for(let d=0,H=yz.length;d<H;d++){let x=yz[d];x.object=this,x.batchId=u,v.push(x)}yz.length=0}$3.material=null,$3.geometry.index=null,$3.geometry.attributes={},$3.geometry.setDrawRange(0,1/0)}copy(f){return super.copy(f),this.geometry=f.geometry.clone(),this.perObjectFrustumCulled=f.perObjectFrustumCulled,this.sortObjects=f.sortObjects,this.boundingBox=f.boundingBox!==null?f.boundingBox.clone():null,this.boundingSphere=f.boundingSphere!==null?f.boundingSphere.clone():null,this._geometryInfo=f._geometryInfo.map(v=>({...v,boundingBox:v.boundingBox!==null?v.boundingBox.clone():null,boundingSphere:v.boundingSphere!==null?v.boundingSphere.clone():null})),this._instanceInfo=f._instanceInfo.map(v=>({...v})),this._availableInstanceIds=f._availableInstanceIds.slice(),this._availableGeometryIds=f._availableGeometryIds.slice(),this._nextIndexStart=f._nextIndexStart,this._nextVertexStart=f._nextVertexStart,this._geometryCount=f._geometryCount,this._maxInstanceCount=f._maxInstanceCount,this._maxVertexCount=f._maxVertexCount,this._maxIndexCount=f._maxIndexCount,this._geometryInitialized=f._geometryInitialized,this._multiDrawCounts=f._multiDrawCounts.slice(),this._multiDrawStarts=f._multiDrawStarts.slice(),this._indirectTexture=f._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=f._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=f._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(f,v,e,P,z){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let t=P.getIndex(),u=t===null?1:t.array.BYTES_PER_ELEMENT,r=this._instanceInfo,b=this._multiDrawStarts,X=this._multiDrawCounts,d=this._geometryInfo,H=this.perObjectFrustumCulled,x=this._indirectTexture,c=x.image.data,a=e.isArrayCamera?B6:Nb;H&&!e.isArrayCamera&&(cv.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).multiply(this.matrixWorld),Nb.setFromProjectionMatrix(cv,e.coordinateSystem,e.reversedDepth));let j=0;if(this.sortObjects){cv.copy(this.matrixWorld).invert(),k8.setFromMatrixPosition(e.matrixWorld).applyMatrix4(cv),ib.set(0,0,-1).transformDirection(e.matrixWorld).transformDirection(cv);for(let N=0,m=r.length;N<m;N++)if(r[N].visible&&r[N].active){let p=r[N].geometryIndex;this.getMatrixAt(N,cv),this.getBoundingSphereAt(p,pe).applyMatrix4(cv);let l=!1;if(H&&(l=!a.intersectsSphere(pe,e)),!l){let W=d[p],w=C6.subVectors(pe.center,k8).dot(ib);$t.push(W.start,W.count,w,N)}}let s=$t.list,i=this.customSort;i===null?s.sort(z.transparent?g6:I6):i.call(this,s,e);for(let N=0,m=s.length;N<m;N++){let p=s[N];b[j]=p.start*u,X[j]=p.count,c[j]=p.index,j++}$t.reset()}else for(let s=0,i=r.length;s<i;s++)if(r[s].visible&&r[s].active){let N=r[s].geometryIndex,m=!1;if(H&&(this.getMatrixAt(s,cv),this.getBoundingSphereAt(N,pe).applyMatrix4(cv),m=!a.intersectsSphere(pe,e)),!m){let p=d[N];b[j]=p.start*u,X[j]=p.count,c[j]=s,j++}}x.needsUpdate=!0,this._multiDrawCount=j,this._visibilityChanged=!1}onBeforeShadow(f,v,e,P,z,t){this.onBeforeRender(f,null,P,z,t)}},M3=class extends L3{constructor(f){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bf(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(f)}copy(f){return super.copy(f),this.color.copy(f.color),this.map=f.map,this.linewidth=f.linewidth,this.linecap=f.linecap,this.linejoin=f.linejoin,this.fog=f.fog,this}},_z=new L,$z=new L,Zb=new of,J8=new _v,pz=new w3,fu=new L,Tb=new L,wv=class extends P3{constructor(f=new kf,v=new M3){super(),this.isLine=!0,this.type="Line",this.geometry=f,this.material=v,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(f,v){return super.copy(f,v),this.material=Array.isArray(f.material)?f.material.slice():f.material,this.geometry=f.geometry,this}computeLineDistances(){let f=this.geometry;if(f.index===null){let v=f.attributes.position,e=[0];for(let P=1,z=v.count;P<z;P++)_z.fromBufferAttribute(v,P-1),$z.fromBufferAttribute(v,P),e[P]=e[P-1],e[P]+=_z.distanceTo($z);f.setAttribute("lineDistance",new sf(e,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(f,v){let e=this.geometry,P=this.matrixWorld,z=f.params.Line.threshold,t=e.drawRange;if(e.boundingSphere===null&&e.computeBoundingSphere(),pz.copy(e.boundingSphere),pz.applyMatrix4(P),pz.radius+=z,f.ray.intersectsSphere(pz)===!1)return;Zb.copy(P).invert(),J8.copy(f.ray).applyMatrix4(Zb);let u=z/((this.scale.x+this.scale.y+this.scale.z)/3),r=u*u,b=this.isLineSegments?2:1,X=e.index,H=e.attributes.position;if(X!==null){let x=Math.max(0,t.start),c=Math.min(X.count,t.start+t.count);for(let a=x,j=c-1;a<j;a+=b){let s=X.getX(a),i=X.getX(a+1),N=Oz(this,f,J8,r,s,i,a);N&&v.push(N)}if(this.isLineLoop){let a=X.getX(c-1),j=X.getX(x),s=Oz(this,f,J8,r,a,j,c-1);s&&v.push(s)}}else{let x=Math.max(0,t.start),c=Math.min(H.count,t.start+t.count);for(let a=x,j=c-1;a<j;a+=b){let s=Oz(this,f,J8,r,a,a+1,a);s&&v.push(s)}if(this.isLineLoop){let a=Oz(this,f,J8,r,c-1,x,c-1);a&&v.push(a)}}}updateMorphTargets(){let v=this.geometry.morphAttributes,e=Object.keys(v);if(e.length>0){let P=v[e[0]];if(P!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let z=0,t=P.length;z<t;z++){let u=P[z].name||String(z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=z}}}}};function Oz(n,f,v,e,P,z,t){let u=n.geometry.attributes.position;if(_z.fromBufferAttribute(u,P),$z.fromBufferAttribute(u,z),v.distanceSqToSegment(_z,$z,fu,Tb)>e)return;fu.applyMatrix4(n.matrixWorld);let b=f.ray.origin.distanceTo(fu);if(!(b<f.near||b>f.far))return{distance:b,point:Tb.clone().applyMatrix4(n.matrixWorld),index:t,face:null,faceIndex:null,barycoord:null,object:n}}var yb=new L,pb=new L,bv=class extends wv{constructor(f,v){super(f,v),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let f=this.geometry;if(f.index===null){let v=f.attributes.position,e=[];for(let P=0,z=v.count;P<z;P+=2)yb.fromBufferAttribute(v,P),pb.fromBufferAttribute(v,P+1),e[P]=P===0?0:e[P-1],e[P+1]=e[P]+yb.distanceTo(pb);f.setAttribute("lineDistance",new sf(e,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ge=class extends wv{constructor(f,v){super(f,v),this.isLineLoop=!0,this.type="LineLoop"}},te=class extends L3{constructor(f){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bf(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(f)}copy(f){return super.copy(f),this.color.copy(f.color),this.map=f.map,this.alphaMap=f.alphaMap,this.size=f.size,this.sizeAttenuation=f.sizeAttenuation,this.fog=f.fog,this}},Ob=new of,xu=new _v,lz=new w3,Lz=new L,Ee=class extends P3{constructor(f=new kf,v=new te){super(),this.isPoints=!0,this.type="Points",this.geometry=f,this.material=v,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(f,v){return super.copy(f,v),this.material=Array.isArray(f.material)?f.material.slice():f.material,this.geometry=f.geometry,this}raycast(f,v){let e=this.geometry,P=this.matrixWorld,z=f.params.Points.threshold,t=e.drawRange;if(e.boundingSphere===null&&e.computeBoundingSphere(),lz.copy(e.boundingSphere),lz.applyMatrix4(P),lz.radius+=z,f.ray.intersectsSphere(lz)===!1)return;Ob.copy(P).invert(),xu.copy(f.ray).applyMatrix4(Ob);let u=z/((this.scale.x+this.scale.y+this.scale.z)/3),r=u*u,b=e.index,d=e.attributes.position;if(b!==null){let H=Math.max(0,t.start),x=Math.min(b.count,t.start+t.count);for(let c=H,a=x;c<a;c++){let j=b.getX(c);Lz.fromBufferAttribute(d,j),lb(Lz,j,r,P,f,v,this)}}else{let H=Math.max(0,t.start),x=Math.min(d.count,t.start+t.count);for(let c=H,a=x;c<a;c++)Lz.fromBufferAttribute(d,c),lb(Lz,c,r,P,f,v,this)}}updateMorphTargets(){let v=this.geometry.morphAttributes,e=Object.keys(v);if(e.length>0){let P=v[e[0]];if(P!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let z=0,t=P.length;z<t;z++){let u=P[z].name||String(z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=z}}}}};function lb(n,f,v,e,P,z,t){let u=xu.distanceSqToPoint(n);if(u<v){let r=new L;xu.closestPointToPoint(n,r),r.applyMatrix4(e);let b=P.ray.origin.distanceTo(r);if(b<P.near||b>P.far)return;z.push({distance:b,distanceToRay:Math.sqrt(u),point:r,index:f,face:null,faceIndex:null,barycoord:null,object:t})}}var nP=class extends T3{constructor(f,v,e,P,z=Z3,t=Z3,u,r,b){super(f,v,e,P,z,t,u,r,b),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let X=this;function d(){X.needsUpdate=!0,X._requestVideoFrameCallbackId=f.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in f&&(this._requestVideoFrameCallbackId=f.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){let f=this.image;"requestVideoFrameCallback"in f===!1&&f.readyState>=f.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}},f5=class extends nP{constructor(f,v,e,P,z,t,u,r){super({},f,v,e,P,z,t,u,r),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(f){this.image=f,this.needsUpdate=!0}},v5=class extends T3{constructor(f,v){super({width:f,height:v}),this.isFramebufferTexture=!0,this.magFilter=q3,this.minFilter=q3,this.generateMipmaps=!1,this.needsUpdate=!0}},Be=class extends T3{constructor(f,v,e,P,z,t,u,r,b,X,d,H){super(null,t,u,r,b,X,P,z,d,H),this.isCompressedTexture=!0,this.image={width:v,height:e},this.mipmaps=f,this.flipY=!1,this.generateMipmaps=!1}},e5=class extends Be{constructor(f,v,e,P,z,t){super(f,v,e,z,t),this.isCompressedArrayTexture=!0,this.image.depth=P,this.wrapR=uv,this.layerUpdates=new Set}addLayerUpdate(f){this.layerUpdates.add(f)}clearLayerUpdates(){this.layerUpdates.clear()}},P5=class extends Be{constructor(f,v,e){super(void 0,f[0].width,f[0].height,v,e,N7),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=f}},Yv=class extends T3{constructor(f,v,e,P,z,t,u,r,b){super(f,v,e,P,z,t,u,r,b),this.isCanvasTexture=!0,this.needsUpdate=!0}},B9=class extends T3{constructor(f,v,e=i7,P,z,t,u=q3,r=q3,b,X=oe,d=1){if(X!==oe&&X!==u9)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let H={width:f,height:v,depth:d};super(H,P,z,t,u,r,X,e,b),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(f){return super.copy(f),this.source=new Qv(Object.assign({},f.image)),this.compareFunction=f.compareFunction,this}toJSON(f){let v=super.toJSON(f);return this.compareFunction!==null&&(v.compareFunction=this.compareFunction),v}},C9=class extends T3{constructor(f=null){super(),this.sourceTexture=f,this.isExternalTexture=!0}copy(f){return super.copy(f),this.sourceTexture=f.sourceTexture,this}},zP=class n extends kf{constructor(f=1,v=1,e=4,P=8,z=1){super(),this.type="CapsuleGeometry",this.parameters={radius:f,height:v,capSegments:e,radialSegments:P,heightSegments:z},v=Math.max(0,v),e=Math.max(1,Math.floor(e)),P=Math.max(3,Math.floor(P)),z=Math.max(1,Math.floor(z));let t=[],u=[],r=[],b=[],X=v/2,d=Math.PI/2*f,H=v,x=2*d+H,c=e*2+z,a=P+1,j=new L,s=new L;for(let i=0;i<=c;i++){let N=0,m=0,p=0,l=0;if(i<=e){let T=i/e,y=T*Math.PI/2;m=-X-f*Math.cos(y),p=f*Math.sin(y),l=-f*Math.cos(y),N=T*d}else if(i<=e+z){let T=(i-e)/z;m=-X+T*v,p=f,l=0,N=d+T*H}else{let T=(i-e-z)/e,y=T*Math.PI/2;m=X+f*Math.sin(y),p=f*Math.cos(y),l=f*Math.sin(y),N=d+H+T*d}let W=Math.max(0,Math.min(1,N/x)),w=0;i===0?w=.5/P:i===c&&(w=-.5/P);for(let T=0;T<=P;T++){let y=T/P,V=y*Math.PI*2,M=Math.sin(V),q=Math.cos(V);s.x=-p*q,s.y=m,s.z=p*M,u.push(s.x,s.y,s.z),j.set(-p*q,l,p*M),j.normalize(),r.push(j.x,j.y,j.z),b.push(y+w,W)}if(i>0){let T=(i-1)*a;for(let y=0;y<P;y++){let V=T+y,M=T+y+1,q=i*a+y,k=i*a+y+1;t.push(V,M,q),t.push(M,k,q)}}}this.setIndex(t),this.setAttribute("position",new sf(u,3)),this.setAttribute("normal",new sf(r,3)),this.setAttribute("uv",new sf(b,2))}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}static fromJSON(f){return new n(f.radius,f.height,f.capSegments,f.radialSegments,f.heightSegments)}},Ce=class n extends kf{constructor(f=1,v=32,e=0,P=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:f,segments:v,thetaStart:e,thetaLength:P},v=Math.max(3,v);let z=[],t=[],u=[],r=[],b=new L,X=new g;t.push(0,0,0),u.push(0,0,1),r.push(.5,.5);for(let d=0,H=3;d<=v;d++,H+=3){let x=e+d/v*P;b.x=f*Math.cos(x),b.y=f*Math.sin(x),t.push(b.x,b.y,b.z),u.push(0,0,1),X.x=(t[H]/f+1)/2,X.y=(t[H+1]/f+1)/2,r.push(X.x,X.y)}for(let d=1;d<=v;d++)z.push(d,d+1,0);this.setIndex(z),this.setAttribute("position",new sf(t,3)),this.setAttribute("normal",new sf(u,3)),this.setAttribute("uv",new sf(r,2))}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}static fromJSON(f){return new n(f.radius,f.segments,f.thetaStart,f.thetaLength)}},Q9=class n extends kf{constructor(f=1,v=1,e=1,P=32,z=1,t=!1,u=0,r=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:f,radiusBottom:v,height:e,radialSegments:P,heightSegments:z,openEnded:t,thetaStart:u,thetaLength:r};let b=this;P=Math.floor(P),z=Math.floor(z);let X=[],d=[],H=[],x=[],c=0,a=[],j=e/2,s=0;i(),t===!1&&(f>0&&N(!0),v>0&&N(!1)),this.setIndex(X),this.setAttribute("position",new sf(d,3)),this.setAttribute("normal",new sf(H,3)),this.setAttribute("uv",new sf(x,2));function i(){let m=new L,p=new L,l=0,W=(v-f)/e;for(let w=0;w<=z;w++){let T=[],y=w/z,V=y*(v-f)+f;for(let M=0;M<=P;M++){let q=M/P,k=q*r+u,J=Math.sin(k),S=Math.cos(k);p.x=V*J,p.y=-y*e+j,p.z=V*S,d.push(p.x,p.y,p.z),m.set(J,W,S).normalize(),H.push(m.x,m.y,m.z),x.push(q,1-y),T.push(c++)}a.push(T)}for(let w=0;w<P;w++)for(let T=0;T<z;T++){let y=a[T][w],V=a[T+1][w],M=a[T+1][w+1],q=a[T][w+1];(f>0||T!==0)&&(X.push(y,V,q),l+=3),(v>0||T!==z-1)&&(X.push(V,M,q),l+=3)}b.addGroup(s,l,0),s+=l}function N(m){let p=c,l=new g,W=new L,w=0,T=m===!0?f:v,y=m===!0?1:-1;for(let M=1;M<=P;M++)d.push(0,j*y,0),H.push(0,y,0),x.push(.5,.5),c++;let V=c;for(let M=0;M<=P;M++){let k=M/P*r+u,J=Math.cos(k),S=Math.sin(k);W.x=T*S,W.y=j*y,W.z=T*J,d.push(W.x,W.y,W.z),H.push(0,y,0),l.x=J*.5+.5,l.y=S*.5*y+.5,x.push(l.x,l.y),c++}for(let M=0;M<P;M++){let q=p+M,k=V+M;m===!0?X.push(k,k+1,q):X.push(k+1,k,q),w+=3}b.addGroup(s,w,m===!0?1:2),s+=w}}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}static fromJSON(f){return new n(f.radiusTop,f.radiusBottom,f.height,f.radialSegments,f.heightSegments,f.openEnded,f.thetaStart,f.thetaLength)}},A9=class n extends Q9{constructor(f=1,v=1,e=32,P=1,z=!1,t=0,u=Math.PI*2){super(0,f,v,e,P,z,t,u),this.type="ConeGeometry",this.parameters={radius:f,height:v,radialSegments:e,heightSegments:P,openEnded:z,thetaStart:t,thetaLength:u}}static fromJSON(f){return new n(f.radius,f.height,f.radialSegments,f.heightSegments,f.openEnded,f.thetaStart,f.thetaLength)}},o7=class n extends kf{constructor(f=[],v=[],e=1,P=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:f,indices:v,radius:e,detail:P};let z=[],t=[];u(P),b(e),X(),this.setAttribute("position",new sf(z,3)),this.setAttribute("normal",new sf(z.slice(),3)),this.setAttribute("uv",new sf(t,2)),P===0?this.computeVertexNormals():this.normalizeNormals();function u(i){let N=new L,m=new L,p=new L;for(let l=0;l<v.length;l+=3)x(v[l+0],N),x(v[l+1],m),x(v[l+2],p),r(N,m,p,i)}function r(i,N,m,p){let l=p+1,W=[];for(let w=0;w<=l;w++){W[w]=[];let T=i.clone().lerp(m,w/l),y=N.clone().lerp(m,w/l),V=l-w;for(let M=0;M<=V;M++)M===0&&w===l?W[w][M]=T:W[w][M]=T.clone().lerp(y,M/V)}for(let w=0;w<l;w++)for(let T=0;T<2*(l-w)-1;T++){let y=Math.floor(T/2);T%2===0?(H(W[w][y+1]),H(W[w+1][y]),H(W[w][y])):(H(W[w][y+1]),H(W[w+1][y+1]),H(W[w+1][y]))}}function b(i){let N=new L;for(let m=0;m<z.length;m+=3)N.x=z[m+0],N.y=z[m+1],N.z=z[m+2],N.normalize().multiplyScalar(i),z[m+0]=N.x,z[m+1]=N.y,z[m+2]=N.z}function X(){let i=new L;for(let N=0;N<z.length;N+=3){i.x=z[N+0],i.y=z[N+1],i.z=z[N+2];let m=j(i)/2/Math.PI+.5,p=s(i)/Math.PI+.5;t.push(m,1-p)}c(),d()}function d(){for(let i=0;i<t.length;i+=6){let N=t[i+0],m=t[i+2],p=t[i+4],l=Math.max(N,m,p),W=Math.min(N,m,p);l>.9&&W<.1&&(N<.2&&(t[i+0]+=1),m<.2&&(t[i+2]+=1),p<.2&&(t[i+4]+=1))}}function H(i){z.push(i.x,i.y,i.z)}function x(i,N){let m=i*3;N.x=f[m+0],N.y=f[m+1],N.z=f[m+2]}function c(){let i=new L,N=new L,m=new L,p=new L,l=new g,W=new g,w=new g;for(let T=0,y=0;T<z.length;T+=9,y+=6){i.set(z[T+0],z[T+1],z[T+2]),N.set(z[T+3],z[T+4],z[T+5]),m.set(z[T+6],z[T+7],z[T+8]),l.set(t[y+0],t[y+1]),W.set(t[y+2],t[y+3]),w.set(t[y+4],t[y+5]),p.copy(i).add(N).add(m).divideScalar(3);let V=j(p);a(l,y+0,i,V),a(W,y+2,N,V),a(w,y+4,m,V)}}function a(i,N,m,p){p<0&&i.x===1&&(t[N]=i.x-1),m.x===0&&m.z===0&&(t[N]=p/2/Math.PI+.5)}function j(i){return Math.atan2(i.z,-i.x)}function s(i){return Math.atan2(-i.y,Math.sqrt(i.x*i.x+i.z*i.z))}}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}static fromJSON(f){return new n(f.vertices,f.indices,f.radius,f.details)}},tP=class n extends o7{constructor(f=1,v=0){let e=(1+Math.sqrt(5))/2,P=1/e,z=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-P,-e,0,-P,e,0,P,-e,0,P,e,-P,-e,0,-P,e,0,P,-e,0,P,e,0,-e,0,-P,e,0,-P,-e,0,P,e,0,P],t=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(z,t,f,v),this.type="DodecahedronGeometry",this.parameters={radius:f,detail:v}}static fromJSON(f){return new n(f.radius,f.detail)}},Wz=new L,hz=new L,vu=new L,wz=new Cv,uP=class extends kf{constructor(f=null,v=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:f,thresholdAngle:v},f!==null){let P=Math.pow(10,4),z=Math.cos(qe*v),t=f.getIndex(),u=f.getAttribute("position"),r=t?t.count:u.count,b=[0,0,0],X=["a","b","c"],d=new Array(3),H={},x=[];for(let c=0;c<r;c+=3){t?(b[0]=t.getX(c),b[1]=t.getX(c+1),b[2]=t.getX(c+2)):(b[0]=c,b[1]=c+1,b[2]=c+2);let{a,b:j,c:s}=wz;if(a.fromBufferAttribute(u,b[0]),j.fromBufferAttribute(u,b[1]),s.fromBufferAttribute(u,b[2]),wz.getNormal(vu),d[0]=`${Math.round(a.x*P)},${Math.round(a.y*P)},${Math.round(a.z*P)}`,d[1]=`${Math.round(j.x*P)},${Math.round(j.y*P)},${Math.round(j.z*P)}`,d[2]=`${Math.round(s.x*P)},${Math.round(s.y*P)},${Math.round(s.z*P)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let i=0;i<3;i++){let N=(i+1)%3,m=d[i],p=d[N],l=wz[X[i]],W=wz[X[N]],w=`${m}_${p}`,T=`${p}_${m}`;T in H&&H[T]?(vu.dot(H[T].normal)<=z&&(x.push(l.x,l.y,l.z),x.push(W.x,W.y,W.z)),H[T]=null):w in H||(H[w]={index0:b[i],index1:b[N],normal:vu.clone()})}}for(let c in H)if(H[c]){let{index0:a,index1:j}=H[c];Wz.fromBufferAttribute(u,a),hz.fromBufferAttribute(u,j),x.push(Wz.x,Wz.y,Wz.z),x.push(hz.x,hz.y,hz.z)}this.setAttribute("position",new sf(x,3))}}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}},Nv=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(f,v){let e=this.getUtoTmapping(f);return this.getPoint(e,v)}getPoints(f=5){let v=[];for(let e=0;e<=f;e++)v.push(this.getPoint(e/f));return v}getSpacedPoints(f=5){let v=[];for(let e=0;e<=f;e++)v.push(this.getPointAt(e/f));return v}getLength(){let f=this.getLengths();return f[f.length-1]}getLengths(f=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===f+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let v=[],e,P=this.getPoint(0),z=0;v.push(0);for(let t=1;t<=f;t++)e=this.getPoint(t/f),z+=e.distanceTo(P),v.push(z),P=e;return this.cacheArcLengths=v,v}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(f,v=null){let e=this.getLengths(),P=0,z=e.length,t;v?t=v:t=f*e[z-1];let u=0,r=z-1,b;for(;u<=r;)if(P=Math.floor(u+(r-u)/2),b=e[P]-t,b<0)u=P+1;else if(b>0)r=P-1;else{r=P;break}if(P=r,e[P]===t)return P/(z-1);let X=e[P],H=e[P+1]-X,x=(t-X)/H;return(P+x)/(z-1)}getTangent(f,v){let P=f-1e-4,z=f+1e-4;P<0&&(P=0),z>1&&(z=1);let t=this.getPoint(P),u=this.getPoint(z),r=v||(t.isVector2?new g:new L);return r.copy(u).sub(t).normalize(),r}getTangentAt(f,v){let e=this.getUtoTmapping(f);return this.getTangent(e,v)}computeFrenetFrames(f,v=!1){let e=new L,P=[],z=[],t=[],u=new L,r=new of;for(let x=0;x<=f;x++){let c=x/f;P[x]=this.getTangentAt(c,new L)}z[0]=new L,t[0]=new L;let b=Number.MAX_VALUE,X=Math.abs(P[0].x),d=Math.abs(P[0].y),H=Math.abs(P[0].z);X<=b&&(b=X,e.set(1,0,0)),d<=b&&(b=d,e.set(0,1,0)),H<=b&&e.set(0,0,1),u.crossVectors(P[0],e).normalize(),z[0].crossVectors(P[0],u),t[0].crossVectors(P[0],z[0]);for(let x=1;x<=f;x++){if(z[x]=z[x-1].clone(),t[x]=t[x-1].clone(),u.crossVectors(P[x-1],P[x]),u.length()>Number.EPSILON){u.normalize();let c=Math.acos(Rf(P[x-1].dot(P[x]),-1,1));z[x].applyMatrix4(r.makeRotationAxis(u,c))}t[x].crossVectors(P[x],z[x])}if(v===!0){let x=Math.acos(Rf(z[0].dot(z[f]),-1,1));x/=f,P[0].dot(u.crossVectors(z[0],z[f]))>0&&(x=-x);for(let c=1;c<=f;c++)z[c].applyMatrix4(r.makeRotationAxis(P[c],x*c)),t[c].crossVectors(P[c],z[c])}return{tangents:P,normals:z,binormals:t}}clone(){return new this.constructor().copy(this)}copy(f){return this.arcLengthDivisions=f.arcLengthDivisions,this}toJSON(){let f={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return f.arcLengthDivisions=this.arcLengthDivisions,f.type=this.type,f}fromJSON(f){return this.arcLengthDivisions=f.arcLengthDivisions,this}},Qe=class extends Nv{constructor(f=0,v=0,e=1,P=1,z=0,t=Math.PI*2,u=!1,r=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=f,this.aY=v,this.xRadius=e,this.yRadius=P,this.aStartAngle=z,this.aEndAngle=t,this.aClockwise=u,this.aRotation=r}getPoint(f,v=new g){let e=v,P=Math.PI*2,z=this.aEndAngle-this.aStartAngle,t=Math.abs(z)<Number.EPSILON;for(;z<0;)z+=P;for(;z>P;)z-=P;z<Number.EPSILON&&(t?z=0:z=P),this.aClockwise===!0&&!t&&(z===P?z=-P:z=z-P);let u=this.aStartAngle+f*z,r=this.aX+this.xRadius*Math.cos(u),b=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){let X=Math.cos(this.aRotation),d=Math.sin(this.aRotation),H=r-this.aX,x=b-this.aY;r=H*X-x*d+this.aX,b=H*d+x*X+this.aY}return e.set(r,b)}copy(f){return super.copy(f),this.aX=f.aX,this.aY=f.aY,this.xRadius=f.xRadius,this.yRadius=f.yRadius,this.aStartAngle=f.aStartAngle,this.aEndAngle=f.aEndAngle,this.aClockwise=f.aClockwise,this.aRotation=f.aRotation,this}toJSON(){let f=super.toJSON();return f.aX=this.aX,f.aY=this.aY,f.xRadius=this.xRadius,f.yRadius=this.yRadius,f.aStartAngle=this.aStartAngle,f.aEndAngle=this.aEndAngle,f.aClockwise=this.aClockwise,f.aRotation=this.aRotation,f}fromJSON(f){return super.fromJSON(f),this.aX=f.aX,this.aY=f.aY,this.xRadius=f.xRadius,this.yRadius=f.yRadius,this.aStartAngle=f.aStartAngle,this.aEndAngle=f.aEndAngle,this.aClockwise=f.aClockwise,this.aRotation=f.aRotation,this}},rP=class extends Qe{constructor(f,v,e,P,z,t){super(f,v,e,e,P,z,t),this.isArcCurve=!0,this.type="ArcCurve"}};function mr(){let n=0,f=0,v=0,e=0;function P(z,t,u,r){n=z,f=u,v=-3*z+3*t-2*u-r,e=2*z-2*t+u+r}return{initCatmullRom:function(z,t,u,r,b){P(t,u,b*(u-z),b*(r-t))},initNonuniformCatmullRom:function(z,t,u,r,b,X,d){let H=(t-z)/b-(u-z)/(b+X)+(u-t)/X,x=(u-t)/X-(r-t)/(X+d)+(r-u)/d;H*=X,x*=X,P(t,u,H,x)},calc:function(z){let t=z*z,u=t*z;return n+f*z+v*t+e*u}}}var Vz=new L,eu=new mr,Pu=new mr,nu=new mr,bP=class extends Nv{constructor(f=[],v=!1,e="centripetal",P=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=f,this.closed=v,this.curveType=e,this.tension=P}getPoint(f,v=new L){let e=v,P=this.points,z=P.length,t=(z-(this.closed?0:1))*f,u=Math.floor(t),r=t-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/z)+1)*z:r===0&&u===z-1&&(u=z-2,r=1);let b,X;this.closed||u>0?b=P[(u-1)%z]:(Vz.subVectors(P[0],P[1]).add(P[0]),b=Vz);let d=P[u%z],H=P[(u+1)%z];if(this.closed||u+2<z?X=P[(u+2)%z]:(Vz.subVectors(P[z-1],P[z-2]).add(P[z-1]),X=Vz),this.curveType==="centripetal"||this.curveType==="chordal"){let x=this.curveType==="chordal"?.5:.25,c=Math.pow(b.distanceToSquared(d),x),a=Math.pow(d.distanceToSquared(H),x),j=Math.pow(H.distanceToSquared(X),x);a<1e-4&&(a=1),c<1e-4&&(c=a),j<1e-4&&(j=a),eu.initNonuniformCatmullRom(b.x,d.x,H.x,X.x,c,a,j),Pu.initNonuniformCatmullRom(b.y,d.y,H.y,X.y,c,a,j),nu.initNonuniformCatmullRom(b.z,d.z,H.z,X.z,c,a,j)}else this.curveType==="catmullrom"&&(eu.initCatmullRom(b.x,d.x,H.x,X.x,this.tension),Pu.initCatmullRom(b.y,d.y,H.y,X.y,this.tension),nu.initCatmullRom(b.z,d.z,H.z,X.z,this.tension));return e.set(eu.calc(r),Pu.calc(r),nu.calc(r)),e}copy(f){super.copy(f),this.points=[];for(let v=0,e=f.points.length;v<e;v++){let P=f.points[v];this.points.push(P.clone())}return this.closed=f.closed,this.curveType=f.curveType,this.tension=f.tension,this}toJSON(){let f=super.toJSON();f.points=[];for(let v=0,e=this.points.length;v<e;v++){let P=this.points[v];f.points.push(P.toArray())}return f.closed=this.closed,f.curveType=this.curveType,f.tension=this.tension,f}fromJSON(f){super.fromJSON(f),this.points=[];for(let v=0,e=f.points.length;v<e;v++){let P=f.points[v];this.points.push(new L().fromArray(P))}return this.closed=f.closed,this.curveType=f.curveType,this.tension=f.tension,this}};function Lb(n,f,v,e,P){let z=(e-f)*.5,t=(P-v)*.5,u=n*n,r=n*u;return(2*v-2*e+z+t)*r+(-3*v+3*e-2*z-t)*u+z*n+v}function A6(n,f){let v=1-n;return v*v*f}function _6(n,f){return 2*(1-n)*n*f}function $6(n,f){return n*n*f}function g8(n,f,v,e){return A6(n,f)+_6(n,v)+$6(n,e)}function fH(n,f){let v=1-n;return v*v*v*f}function vH(n,f){let v=1-n;return 3*v*v*n*f}function eH(n,f){return 3*(1-n)*n*n*f}function PH(n,f){return n*n*n*f}function E8(n,f,v,e,P){return fH(n,f)+vH(n,v)+eH(n,e)+PH(n,P)}var _9=class extends Nv{constructor(f=new g,v=new g,e=new g,P=new g){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=f,this.v1=v,this.v2=e,this.v3=P}getPoint(f,v=new g){let e=v,P=this.v0,z=this.v1,t=this.v2,u=this.v3;return e.set(E8(f,P.x,z.x,t.x,u.x),E8(f,P.y,z.y,t.y,u.y)),e}copy(f){return super.copy(f),this.v0.copy(f.v0),this.v1.copy(f.v1),this.v2.copy(f.v2),this.v3.copy(f.v3),this}toJSON(){let f=super.toJSON();return f.v0=this.v0.toArray(),f.v1=this.v1.toArray(),f.v2=this.v2.toArray(),f.v3=this.v3.toArray(),f}fromJSON(f){return super.fromJSON(f),this.v0.fromArray(f.v0),this.v1.fromArray(f.v1),this.v2.fromArray(f.v2),this.v3.fromArray(f.v3),this}},XP=class extends Nv{constructor(f=new L,v=new L,e=new L,P=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=f,this.v1=v,this.v2=e,this.v3=P}getPoint(f,v=new L){let e=v,P=this.v0,z=this.v1,t=this.v2,u=this.v3;return e.set(E8(f,P.x,z.x,t.x,u.x),E8(f,P.y,z.y,t.y,u.y),E8(f,P.z,z.z,t.z,u.z)),e}copy(f){return super.copy(f),this.v0.copy(f.v0),this.v1.copy(f.v1),this.v2.copy(f.v2),this.v3.copy(f.v3),this}toJSON(){let f=super.toJSON();return f.v0=this.v0.toArray(),f.v1=this.v1.toArray(),f.v2=this.v2.toArray(),f.v3=this.v3.toArray(),f}fromJSON(f){return super.fromJSON(f),this.v0.fromArray(f.v0),this.v1.fromArray(f.v1),this.v2.fromArray(f.v2),this.v3.fromArray(f.v3),this}},$9=class extends Nv{constructor(f=new g,v=new g){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=f,this.v2=v}getPoint(f,v=new g){let e=v;return f===1?e.copy(this.v2):(e.copy(this.v2).sub(this.v1),e.multiplyScalar(f).add(this.v1)),e}getPointAt(f,v){return this.getPoint(f,v)}getTangent(f,v=new g){return v.subVectors(this.v2,this.v1).normalize()}getTangentAt(f,v){return this.getTangent(f,v)}copy(f){return super.copy(f),this.v1.copy(f.v1),this.v2.copy(f.v2),this}toJSON(){let f=super.toJSON();return f.v1=this.v1.toArray(),f.v2=this.v2.toArray(),f}fromJSON(f){return super.fromJSON(f),this.v1.fromArray(f.v1),this.v2.fromArray(f.v2),this}},dP=class extends Nv{constructor(f=new L,v=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=f,this.v2=v}getPoint(f,v=new L){let e=v;return f===1?e.copy(this.v2):(e.copy(this.v2).sub(this.v1),e.multiplyScalar(f).add(this.v1)),e}getPointAt(f,v){return this.getPoint(f,v)}getTangent(f,v=new L){return v.subVectors(this.v2,this.v1).normalize()}getTangentAt(f,v){return this.getTangent(f,v)}copy(f){return super.copy(f),this.v1.copy(f.v1),this.v2.copy(f.v2),this}toJSON(){let f=super.toJSON();return f.v1=this.v1.toArray(),f.v2=this.v2.toArray(),f}fromJSON(f){return super.fromJSON(f),this.v1.fromArray(f.v1),this.v2.fromArray(f.v2),this}},f8=class extends Nv{constructor(f=new g,v=new g,e=new g){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=f,this.v1=v,this.v2=e}getPoint(f,v=new g){let e=v,P=this.v0,z=this.v1,t=this.v2;return e.set(g8(f,P.x,z.x,t.x),g8(f,P.y,z.y,t.y)),e}copy(f){return super.copy(f),this.v0.copy(f.v0),this.v1.copy(f.v1),this.v2.copy(f.v2),this}toJSON(){let f=super.toJSON();return f.v0=this.v0.toArray(),f.v1=this.v1.toArray(),f.v2=this.v2.toArray(),f}fromJSON(f){return super.fromJSON(f),this.v0.fromArray(f.v0),this.v1.fromArray(f.v1),this.v2.fromArray(f.v2),this}},v8=class extends Nv{constructor(f=new L,v=new L,e=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=f,this.v1=v,this.v2=e}getPoint(f,v=new L){let e=v,P=this.v0,z=this.v1,t=this.v2;return e.set(g8(f,P.x,z.x,t.x),g8(f,P.y,z.y,t.y),g8(f,P.z,z.z,t.z)),e}copy(f){return super.copy(f),this.v0.copy(f.v0),this.v1.copy(f.v1),this.v2.copy(f.v2),this}toJSON(){let f=super.toJSON();return f.v0=this.v0.toArray(),f.v1=this.v1.toArray(),f.v2=this.v2.toArray(),f}fromJSON(f){return super.fromJSON(f),this.v0.fromArray(f.v0),this.v1.fromArray(f.v1),this.v2.fromArray(f.v2),this}},e8=class extends Nv{constructor(f=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=f}getPoint(f,v=new g){let e=v,P=this.points,z=(P.length-1)*f,t=Math.floor(z),u=z-t,r=P[t===0?t:t-1],b=P[t],X=P[t>P.length-2?P.length-1:t+1],d=P[t>P.length-3?P.length-1:t+2];return e.set(Lb(u,r.x,b.x,X.x,d.x),Lb(u,r.y,b.y,X.y,d.y)),e}copy(f){super.copy(f),this.points=[];for(let v=0,e=f.points.length;v<e;v++){let P=f.points[v];this.points.push(P.clone())}return this}toJSON(){let f=super.toJSON();f.points=[];for(let v=0,e=this.points.length;v<e;v++){let P=this.points[v];f.points.push(P.toArray())}return f}fromJSON(f){super.fromJSON(f),this.points=[];for(let v=0,e=f.points.length;v<e;v++){let P=f.points[v];this.points.push(new g().fromArray(P))}return this}},n5=Object.freeze({__proto__:null,ArcCurve:rP,CatmullRomCurve3:bP,CubicBezierCurve:_9,CubicBezierCurve3:XP,EllipseCurve:Qe,LineCurve:$9,LineCurve3:dP,QuadraticBezierCurve:f8,QuadraticBezierCurve3:v8,SplineCurve:e8}),HP=class extends Nv{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(f){this.curves.push(f)}closePath(){let f=this.curves[0].getPoint(0),v=this.curves[this.curves.length-1].getPoint(1);if(!f.equals(v)){let e=f.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new n5[e](v,f))}return this}getPoint(f,v){let e=f*this.getLength(),P=this.getCurveLengths(),z=0;for(;z<P.length;){if(P[z]>=e){let t=P[z]-e,u=this.curves[z],r=u.getLength(),b=r===0?0:1-t/r;return u.getPointAt(b,v)}z++}return null}getLength(){let f=this.getCurveLengths();return f[f.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let f=[],v=0;for(let e=0,P=this.curves.length;e<P;e++)v+=this.curves[e].getLength(),f.push(v);return this.cacheLengths=f,f}getSpacedPoints(f=40){let v=[];for(let e=0;e<=f;e++)v.push(this.getPoint(e/f));return this.autoClose&&v.push(v[0]),v}getPoints(f=12){let v=[],e;for(let P=0,z=this.curves;P<z.length;P++){let t=z[P],u=t.isEllipseCurve?f*2:t.isLineCurve||t.isLineCurve3?1:t.isSplineCurve?f*t.points.length:f,r=t.getPoints(u);for(let b=0;b<r.length;b++){let X=r[b];e&&e.equals(X)||(v.push(X),e=X)}}return this.autoClose&&v.length>1&&!v[v.length-1].equals(v[0])&&v.push(v[0]),v}copy(f){super.copy(f),this.curves=[];for(let v=0,e=f.curves.length;v<e;v++){let P=f.curves[v];this.curves.push(P.clone())}return this.autoClose=f.autoClose,this}toJSON(){let f=super.toJSON();f.autoClose=this.autoClose,f.curves=[];for(let v=0,e=this.curves.length;v<e;v++){let P=this.curves[v];f.curves.push(P.toJSON())}return f}fromJSON(f){super.fromJSON(f),this.autoClose=f.autoClose,this.curves=[];for(let v=0,e=f.curves.length;v<e;v++){let P=f.curves[v];this.curves.push(new n5[P.type]().fromJSON(P))}return this}},Ae=class extends HP{constructor(f){super(),this.type="Path",this.currentPoint=new g,f&&this.setFromPoints(f)}setFromPoints(f){this.moveTo(f[0].x,f[0].y);for(let v=1,e=f.length;v<e;v++)this.lineTo(f[v].x,f[v].y);return this}moveTo(f,v){return this.currentPoint.set(f,v),this}lineTo(f,v){let e=new $9(this.currentPoint.clone(),new g(f,v));return this.curves.push(e),this.currentPoint.set(f,v),this}quadraticCurveTo(f,v,e,P){let z=new f8(this.currentPoint.clone(),new g(f,v),new g(e,P));return this.curves.push(z),this.currentPoint.set(e,P),this}bezierCurveTo(f,v,e,P,z,t){let u=new _9(this.currentPoint.clone(),new g(f,v),new g(e,P),new g(z,t));return this.curves.push(u),this.currentPoint.set(z,t),this}splineThru(f){let v=[this.currentPoint.clone()].concat(f),e=new e8(v);return this.curves.push(e),this.currentPoint.copy(f[f.length-1]),this}arc(f,v,e,P,z,t){let u=this.currentPoint.x,r=this.currentPoint.y;return this.absarc(f+u,v+r,e,P,z,t),this}absarc(f,v,e,P,z,t){return this.absellipse(f,v,e,e,P,z,t),this}ellipse(f,v,e,P,z,t,u,r){let b=this.currentPoint.x,X=this.currentPoint.y;return this.absellipse(f+b,v+X,e,P,z,t,u,r),this}absellipse(f,v,e,P,z,t,u,r){let b=new Qe(f,v,e,P,z,t,u,r);if(this.curves.length>0){let d=b.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(b);let X=b.getPoint(1);return this.currentPoint.copy(X),this}copy(f){return super.copy(f),this.currentPoint.copy(f.currentPoint),this}toJSON(){let f=super.toJSON();return f.currentPoint=this.currentPoint.toArray(),f}fromJSON(f){return super.fromJSON(f),this.currentPoint.fromArray(f.currentPoint),this}},d7=class extends Ae{constructor(f){super(f),this.uuid=Wv(),this.type="Shape",this.holes=[]}getPointsHoles(f){let v=[];for(let e=0,P=this.holes.length;e<P;e++)v[e]=this.holes[e].getPoints(f);return v}extractPoints(f){return{shape:this.getPoints(f),holes:this.getPointsHoles(f)}}copy(f){super.copy(f),this.holes=[];for(let v=0,e=f.holes.length;v<e;v++){let P=f.holes[v];this.holes.push(P.clone())}return this}toJSON(){let f=super.toJSON();f.uuid=this.uuid,f.holes=[];for(let v=0,e=this.holes.length;v<e;v++){let P=this.holes[v];f.holes.push(P.toJSON())}return f}fromJSON(f){super.fromJSON(f),this.uuid=f.uuid,this.holes=[];for(let v=0,e=f.holes.length;v<e;v++){let P=f.holes[v];this.holes.push(new Ae().fromJSON(P))}return this}};function nH(n,f,v=2){let e=f&&f.length,P=e?f[0]*v:n.length,z=MX(n,0,P,v,!0),t=[];if(!z||z.next===z.prev)return t;let u,r,b;if(e&&(z=bH(n,f,z,v)),n.length>80*v){u=1/0,r=1/0;let X=-1/0,d=-1/0;for(let H=v;H<P;H+=v){let x=n[H],c=n[H+1];x<u&&(u=x),c<r&&(r=c),x>X&&(X=x),c>d&&(d=c)}b=Math.max(X-u,d-r),b=b!==0?32767/b:0}return xP(z,t,v,u,r,b,0),t}function MX(n,f,v,e,P){let z;if(P===iH(n,f,v,e)>0)for(let t=f;t<v;t+=e)z=Wb(t/e|0,n[t],n[t+1],z);else for(let t=v-e;t>=f;t-=e)z=Wb(t/e|0,n[t],n[t+1],z);return z&&P8(z,z.next)&&(cP(z),z=z.next),z}function _e(n,f){if(!n)return n;f||(f=n);let v=n,e;do if(e=!1,!v.steiner&&(P8(v,v.next)||O3(v.prev,v,v.next)===0)){if(cP(v),v=f=v.prev,v===v.next)break;e=!0}else v=v.next;while(e||v!==f);return f}function xP(n,f,v,e,P,z,t){if(!n)return;!t&&z&&sH(n,e,P,z);let u=n;for(;n.prev!==n.next;){let r=n.prev,b=n.next;if(z?tH(n,e,P,z):zH(n)){f.push(r.i,n.i,b.i),cP(n),n=b.next,u=b.next;continue}if(n=b,n===u){t?t===1?(n=uH(_e(n),f),xP(n,f,v,e,P,z,2)):t===2&&rH(n,f,v,e,P,z):xP(_e(n),f,v,e,P,z,1);break}}}function zH(n){let f=n.prev,v=n,e=n.next;if(O3(f,v,e)>=0)return!1;let P=f.x,z=v.x,t=e.x,u=f.y,r=v.y,b=e.y,X=Math.min(P,z,t),d=Math.min(u,r,b),H=Math.max(P,z,t),x=Math.max(u,r,b),c=e.next;for(;c!==f;){if(c.x>=X&&c.x<=H&&c.y>=d&&c.y<=x&&K8(P,u,z,r,t,b,c.x,c.y)&&O3(c.prev,c,c.next)>=0)return!1;c=c.next}return!0}function tH(n,f,v,e){let P=n.prev,z=n,t=n.next;if(O3(P,z,t)>=0)return!1;let u=P.x,r=z.x,b=t.x,X=P.y,d=z.y,H=t.y,x=Math.min(u,r,b),c=Math.min(X,d,H),a=Math.max(u,r,b),j=Math.max(X,d,H),s=su(x,c,f,v,e),i=su(a,j,f,v,e),N=n.prevZ,m=n.nextZ;for(;N&&N.z>=s&&m&&m.z<=i;){if(N.x>=x&&N.x<=a&&N.y>=c&&N.y<=j&&N!==P&&N!==t&&K8(u,X,r,d,b,H,N.x,N.y)&&O3(N.prev,N,N.next)>=0||(N=N.prevZ,m.x>=x&&m.x<=a&&m.y>=c&&m.y<=j&&m!==P&&m!==t&&K8(u,X,r,d,b,H,m.x,m.y)&&O3(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;N&&N.z>=s;){if(N.x>=x&&N.x<=a&&N.y>=c&&N.y<=j&&N!==P&&N!==t&&K8(u,X,r,d,b,H,N.x,N.y)&&O3(N.prev,N,N.next)>=0)return!1;N=N.prevZ}for(;m&&m.z<=i;){if(m.x>=x&&m.x<=a&&m.y>=c&&m.y<=j&&m!==P&&m!==t&&K8(u,X,r,d,b,H,m.x,m.y)&&O3(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function uH(n,f){let v=n;do{let e=v.prev,P=v.next.next;!P8(e,P)&&RX(e,v,v.next,P)&&sP(e,P)&&sP(P,e)&&(f.push(e.i,v.i,P.i),cP(v),cP(v.next),v=n=P),v=v.next}while(v!==n);return _e(v)}function rH(n,f,v,e,P,z){let t=n;do{let u=t.next.next;for(;u!==t.prev;){if(t.i!==u.i&&aH(t,u)){let r=GX(t,u);t=_e(t,t.next),r=_e(r,r.next),xP(t,f,v,e,P,z,0),xP(r,f,v,e,P,z,0);return}u=u.next}t=t.next}while(t!==n)}function bH(n,f,v,e){let P=[];for(let z=0,t=f.length;z<t;z++){let u=f[z]*e,r=z<t-1?f[z+1]*e:n.length,b=MX(n,u,r,e,!1);b===b.next&&(b.steiner=!0),P.push(jH(b))}P.sort(XH);for(let z=0;z<P.length;z++)v=dH(P[z],v);return v}function XH(n,f){let v=n.x-f.x;if(v===0&&(v=n.y-f.y,v===0)){let e=(n.next.y-n.y)/(n.next.x-n.x),P=(f.next.y-f.y)/(f.next.x-f.x);v=e-P}return v}function dH(n,f){let v=HH(n,f);if(!v)return f;let e=GX(v,n);return _e(e,e.next),_e(v,v.next)}function HH(n,f){let v=f,e=n.x,P=n.y,z=-1/0,t;if(P8(n,v))return v;do{if(P8(n,v.next))return v.next;if(P<=v.y&&P>=v.next.y&&v.next.y!==v.y){let d=v.x+(P-v.y)*(v.next.x-v.x)/(v.next.y-v.y);if(d<=e&&d>z&&(z=d,t=v.x<v.next.x?v:v.next,d===e))return t}v=v.next}while(v!==f);if(!t)return null;let u=t,r=t.x,b=t.y,X=1/0;v=t;do{if(e>=v.x&&v.x>=r&&e!==v.x&&FX(P<b?e:z,P,r,b,P<b?z:e,P,v.x,v.y)){let d=Math.abs(P-v.y)/(e-v.x);sP(v,n)&&(d<X||d===X&&(v.x>t.x||v.x===t.x&&xH(t,v)))&&(t=v,X=d)}v=v.next}while(v!==u);return t}function xH(n,f){return O3(n.prev,n,f.prev)<0&&O3(f.next,n,n.next)<0}function sH(n,f,v,e){let P=n;do P.z===0&&(P.z=su(P.x,P.y,f,v,e)),P.prevZ=P.prev,P.nextZ=P.next,P=P.next;while(P!==n);P.prevZ.nextZ=null,P.prevZ=null,cH(P)}function cH(n){let f,v=1;do{let e=n,P;n=null;let z=null;for(f=0;e;){f++;let t=e,u=0;for(let b=0;b<v&&(u++,t=t.nextZ,!!t);b++);let r=v;for(;u>0||r>0&&t;)u!==0&&(r===0||!t||e.z<=t.z)?(P=e,e=e.nextZ,u--):(P=t,t=t.nextZ,r--),z?z.nextZ=P:n=P,P.prevZ=z,z=P;e=t}z.nextZ=null,v*=2}while(f>1);return n}function su(n,f,v,e,P){return n=(n-v)*P|0,f=(f-e)*P|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,f=(f|f<<8)&16711935,f=(f|f<<4)&252645135,f=(f|f<<2)&858993459,f=(f|f<<1)&1431655765,n|f<<1}function jH(n){let f=n,v=n;do(f.x<v.x||f.x===v.x&&f.y<v.y)&&(v=f),f=f.next;while(f!==n);return v}function FX(n,f,v,e,P,z,t,u){return(P-t)*(f-u)>=(n-t)*(z-u)&&(n-t)*(e-u)>=(v-t)*(f-u)&&(v-t)*(z-u)>=(P-t)*(e-u)}function K8(n,f,v,e,P,z,t,u){return!(n===t&&f===u)&&FX(n,f,v,e,P,z,t,u)}function aH(n,f){return n.next.i!==f.i&&n.prev.i!==f.i&&!mH(n,f)&&(sP(n,f)&&sP(f,n)&&NH(n,f)&&(O3(n.prev,n,f.prev)||O3(n,f.prev,f))||P8(n,f)&&O3(n.prev,n,n.next)>0&&O3(f.prev,f,f.next)>0)}function O3(n,f,v){return(f.y-n.y)*(v.x-f.x)-(f.x-n.x)*(v.y-f.y)}function P8(n,f){return n.x===f.x&&n.y===f.y}function RX(n,f,v,e){let P=qz(O3(n,f,v)),z=qz(O3(n,f,e)),t=qz(O3(v,e,n)),u=qz(O3(v,e,f));return!!(P!==z&&t!==u||P===0&&Dz(n,v,f)||z===0&&Dz(n,e,f)||t===0&&Dz(v,n,e)||u===0&&Dz(v,f,e))}function Dz(n,f,v){return f.x<=Math.max(n.x,v.x)&&f.x>=Math.min(n.x,v.x)&&f.y<=Math.max(n.y,v.y)&&f.y>=Math.min(n.y,v.y)}function qz(n){return n>0?1:n<0?-1:0}function mH(n,f){let v=n;do{if(v.i!==n.i&&v.next.i!==n.i&&v.i!==f.i&&v.next.i!==f.i&&RX(v,v.next,n,f))return!0;v=v.next}while(v!==n);return!1}function sP(n,f){return O3(n.prev,n,n.next)<0?O3(n,f,n.next)>=0&&O3(n,n.prev,f)>=0:O3(n,f,n.prev)<0||O3(n,n.next,f)<0}function NH(n,f){let v=n,e=!1,P=(n.x+f.x)/2,z=(n.y+f.y)/2;do v.y>z!=v.next.y>z&&v.next.y!==v.y&&P<(v.next.x-v.x)*(z-v.y)/(v.next.y-v.y)+v.x&&(e=!e),v=v.next;while(v!==n);return e}function GX(n,f){let v=cu(n.i,n.x,n.y),e=cu(f.i,f.x,f.y),P=n.next,z=f.prev;return n.next=f,f.prev=n,v.next=P,P.prev=v,e.next=v,v.prev=e,z.next=e,e.prev=z,e}function Wb(n,f,v,e){let P=cu(n,f,v);return e?(P.next=e.next,P.prev=e,e.next.prev=P,e.next=P):(P.prev=P,P.next=P),P}function cP(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function cu(n,f,v){return{i:n,x:f,y:v,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function iH(n,f,v,e){let P=0;for(let z=f,t=v-e;z<v;z+=e)P+=(n[t]-n[z])*(n[z+1]+n[t+1]),t=z;return P}var ju=class{static triangulate(f,v,e=2){return nH(f,v,e)}},Rv=class n{static area(f){let v=f.length,e=0;for(let P=v-1,z=0;z<v;P=z++)e+=f[P].x*f[z].y-f[z].x*f[P].y;return e*.5}static isClockWise(f){return n.area(f)<0}static triangulateShape(f,v){let e=[],P=[],z=[];hb(f),wb(e,f);let t=f.length;v.forEach(hb);for(let r=0;r<v.length;r++)P.push(t),t+=v[r].length,wb(e,v[r]);let u=ju.triangulate(e,P);for(let r=0;r<u.length;r+=3)z.push(u.slice(r,r+3));return z}};function hb(n){let f=n.length;f>2&&n[f-1].equals(n[0])&&n.pop()}function wb(n,f){for(let v=0;v<f.length;v++)n.push(f[v].x),n.push(f[v].y)}var jP=class n extends kf{constructor(f=new d7([new g(.5,.5),new g(-.5,.5),new g(-.5,-.5),new g(.5,-.5)]),v={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:f,options:v},f=Array.isArray(f)?f:[f];let e=this,P=[],z=[];for(let u=0,r=f.length;u<r;u++){let b=f[u];t(b)}this.setAttribute("position",new sf(P,3)),this.setAttribute("uv",new sf(z,2)),this.computeVertexNormals();function t(u){let r=[],b=v.curveSegments!==void 0?v.curveSegments:12,X=v.steps!==void 0?v.steps:1,d=v.depth!==void 0?v.depth:1,H=v.bevelEnabled!==void 0?v.bevelEnabled:!0,x=v.bevelThickness!==void 0?v.bevelThickness:.2,c=v.bevelSize!==void 0?v.bevelSize:x-.1,a=v.bevelOffset!==void 0?v.bevelOffset:0,j=v.bevelSegments!==void 0?v.bevelSegments:3,s=v.extrudePath,i=v.UVGenerator!==void 0?v.UVGenerator:ZH,N,m=!1,p,l,W,w;s&&(N=s.getSpacedPoints(X),m=!0,H=!1,p=s.computeFrenetFrames(X,!1),l=new L,W=new L,w=new L),H||(j=0,x=0,c=0,a=0);let T=u.extractPoints(b),y=T.shape,V=T.holes;if(!Rv.isClockWise(y)){y=y.reverse();for(let vf=0,_=V.length;vf<_;vf++){let A=V[vf];Rv.isClockWise(A)&&(V[vf]=A.reverse())}}function q(vf){let A=10000000000000001e-36,Q=vf[0];for(let Hf=1;Hf<=vf.length;Hf++){let Pf=Hf%vf.length,xf=vf[Pf],Uf=xf.x-Q.x,Sf=xf.y-Q.y,h=Uf*Uf+Sf*Sf,Z=Math.max(Math.abs(xf.x),Math.abs(xf.y),Math.abs(Q.x),Math.abs(Q.y)),G=A*Z*Z;if(h<=G){vf.splice(Pf,1),Hf--;continue}Q=xf}}q(y),V.forEach(q);let k=V.length,J=y;for(let vf=0;vf<k;vf++){let _=V[vf];y=y.concat(_)}function S(vf,_,A){return _||console.error("THREE.ExtrudeGeometry: vec does not exist"),vf.clone().addScaledVector(_,A)}let B=y.length;function Y(vf,_,A){let Q,Hf,Pf,xf=vf.x-_.x,Uf=vf.y-_.y,Sf=A.x-vf.x,h=A.y-vf.y,Z=xf*xf+Uf*Uf,G=xf*h-Uf*Sf;if(Math.abs(G)>Number.EPSILON){let I=Math.sqrt(Z),ff=Math.sqrt(Sf*Sf+h*h),E=_.x-Uf/I,wf=_.y+xf/I,Xf=A.x-h/ff,Lf=A.y+Sf/ff,Wf=((Xf-E)*h-(Lf-wf)*Sf)/(xf*h-Uf*Sf);Q=E+xf*Wf-vf.x,Hf=wf+Uf*Wf-vf.y;let zf=Q*Q+Hf*Hf;if(zf<=2)return new g(Q,Hf);Pf=Math.sqrt(zf/2)}else{let I=!1;xf>Number.EPSILON?Sf>Number.EPSILON&&(I=!0):xf<-Number.EPSILON?Sf<-Number.EPSILON&&(I=!0):Math.sign(Uf)===Math.sign(h)&&(I=!0),I?(Q=-Uf,Hf=xf,Pf=Math.sqrt(Z)):(Q=xf,Hf=Uf,Pf=Math.sqrt(Z/2))}return new g(Q/Pf,Hf/Pf)}let nf=[];for(let vf=0,_=J.length,A=_-1,Q=vf+1;vf<_;vf++,A++,Q++)A===_&&(A=0),Q===_&&(Q=0),nf[vf]=Y(J[vf],J[A],J[Q]);let df=[],Zf,Yf=nf.concat();for(let vf=0,_=k;vf<_;vf++){let A=V[vf];Zf=[];for(let Q=0,Hf=A.length,Pf=Hf-1,xf=Q+1;Q<Hf;Q++,Pf++,xf++)Pf===Hf&&(Pf=0),xf===Hf&&(xf=0),Zf[Q]=Y(A[Q],A[Pf],A[xf]);df.push(Zf),Yf=Yf.concat(Zf)}let f3;if(j===0)f3=Rv.triangulateShape(J,V);else{let vf=[],_=[];for(let A=0;A<j;A++){let Q=A/j,Hf=x*Math.cos(Q*Math.PI/2),Pf=c*Math.sin(Q*Math.PI/2)+a;for(let xf=0,Uf=J.length;xf<Uf;xf++){let Sf=S(J[xf],nf[xf],Pf);Df(Sf.x,Sf.y,-Hf),Q===0&&vf.push(Sf)}for(let xf=0,Uf=k;xf<Uf;xf++){let Sf=V[xf];Zf=df[xf];let h=[];for(let Z=0,G=Sf.length;Z<G;Z++){let I=S(Sf[Z],Zf[Z],Pf);Df(I.x,I.y,-Hf),Q===0&&h.push(I)}Q===0&&_.push(h)}}f3=Rv.triangulateShape(vf,_)}let z3=f3.length,t3=c+a;for(let vf=0;vf<B;vf++){let _=H?S(y[vf],Yf[vf],t3):y[vf];m?(W.copy(p.normals[0]).multiplyScalar(_.x),l.copy(p.binormals[0]).multiplyScalar(_.y),w.copy(N[0]).add(W).add(l),Df(w.x,w.y,w.z)):Df(_.x,_.y,0)}for(let vf=1;vf<=X;vf++)for(let _=0;_<B;_++){let A=H?S(y[_],Yf[_],t3):y[_];m?(W.copy(p.normals[vf]).multiplyScalar(A.x),l.copy(p.binormals[vf]).multiplyScalar(A.y),w.copy(N[vf]).add(W).add(l),Df(w.x,w.y,w.z)):Df(A.x,A.y,d/X*vf)}for(let vf=j-1;vf>=0;vf--){let _=vf/j,A=x*Math.cos(_*Math.PI/2),Q=c*Math.sin(_*Math.PI/2)+a;for(let Hf=0,Pf=J.length;Hf<Pf;Hf++){let xf=S(J[Hf],nf[Hf],Q);Df(xf.x,xf.y,d+A)}for(let Hf=0,Pf=V.length;Hf<Pf;Hf++){let xf=V[Hf];Zf=df[Hf];for(let Uf=0,Sf=xf.length;Uf<Sf;Uf++){let h=S(xf[Uf],Zf[Uf],Q);m?Df(h.x,h.y+N[X-1].y,N[X-1].x+A):Df(h.x,h.y,d+A)}}}C(),ef();function C(){let vf=P.length/3;if(H){let _=0,A=B*_;for(let Q=0;Q<z3;Q++){let Hf=f3[Q];lf(Hf[2]+A,Hf[1]+A,Hf[0]+A)}_=X+j*2,A=B*_;for(let Q=0;Q<z3;Q++){let Hf=f3[Q];lf(Hf[0]+A,Hf[1]+A,Hf[2]+A)}}else{for(let _=0;_<z3;_++){let A=f3[_];lf(A[2],A[1],A[0])}for(let _=0;_<z3;_++){let A=f3[_];lf(A[0]+B*X,A[1]+B*X,A[2]+B*X)}}e.addGroup(vf,P.length/3-vf,0)}function ef(){let vf=P.length/3,_=0;yf(J,_),_+=J.length;for(let A=0,Q=V.length;A<Q;A++){let Hf=V[A];yf(Hf,_),_+=Hf.length}e.addGroup(vf,P.length/3-vf,1)}function yf(vf,_){let A=vf.length;for(;--A>=0;){let Q=A,Hf=A-1;Hf<0&&(Hf=vf.length-1);for(let Pf=0,xf=X+j*2;Pf<xf;Pf++){let Uf=B*Pf,Sf=B*(Pf+1),h=_+Q+Uf,Z=_+Hf+Uf,G=_+Hf+Sf,I=_+Q+Sf;v3(h,Z,G,I)}}}function Df(vf,_,A){r.push(vf),r.push(_),r.push(A)}function lf(vf,_,A){a3(vf),a3(_),a3(A);let Q=P.length/3,Hf=i.generateTopUV(e,P,Q-3,Q-2,Q-1);D(Hf[0]),D(Hf[1]),D(Hf[2])}function v3(vf,_,A,Q){a3(vf),a3(_),a3(Q),a3(_),a3(A),a3(Q);let Hf=P.length/3,Pf=i.generateSideWallUV(e,P,Hf-6,Hf-3,Hf-2,Hf-1);D(Pf[0]),D(Pf[1]),D(Pf[3]),D(Pf[1]),D(Pf[2]),D(Pf[3])}function a3(vf){P.push(r[vf*3+0]),P.push(r[vf*3+1]),P.push(r[vf*3+2])}function D(vf){z.push(vf.x),z.push(vf.y)}}}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}toJSON(){let f=super.toJSON(),v=this.parameters.shapes,e=this.parameters.options;return TH(v,e,f)}static fromJSON(f,v){let e=[];for(let z=0,t=f.shapes.length;z<t;z++){let u=v[f.shapes[z]];e.push(u)}let P=f.options.extrudePath;return P!==void 0&&(f.options.extrudePath=new n5[P.type]().fromJSON(P)),new n(e,f.options)}},ZH={generateTopUV:function(n,f,v,e,P){let z=f[v*3],t=f[v*3+1],u=f[e*3],r=f[e*3+1],b=f[P*3],X=f[P*3+1];return[new g(z,t),new g(u,r),new g(b,X)]},generateSideWallUV:function(n,f,v,e,P,z){let t=f[v*3],u=f[v*3+1],r=f[v*3+2],b=f[e*3],X=f[e*3+1],d=f[e*3+2],H=f[P*3],x=f[P*3+1],c=f[P*3+2],a=f[z*3],j=f[z*3+1],s=f[z*3+2];return Math.abs(u-X)<Math.abs(t-b)?[new g(t,1-r),new g(b,1-d),new g(H,1-c),new g(a,1-s)]:[new g(u,1-r),new g(X,1-d),new g(x,1-c),new g(j,1-s)]}};function TH(n,f,v){if(v.shapes=[],Array.isArray(n))for(let e=0,P=n.length;e<P;e++){let z=n[e];v.shapes.push(z.uuid)}else v.shapes.push(n.uuid);return v.options=Object.assign({},f),f.extrudePath!==void 0&&(v.options.extrudePath=f.extrudePath.toJSON()),v}var aP=class n extends o7{constructor(f=1,v=0){let e=(1+Math.sqrt(5))/2,P=[-1,e,0,1,e,0,-1,-e,0,1,-e,0,0,-1,e,0,1,e,0,-1,-e,0,1,-e,e,0,-1,e,0,1,-e,0,-1,-e,0,1],z=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(P,z,f,v),this.type="IcosahedronGeometry",this.parameters={radius:f,detail:v}}static fromJSON(f){return new n(f.radius,f.detail)}},mP=class n extends kf{constructor(f=[new g(0,-.5),new g(.5,0),new g(0,.5)],v=12,e=0,P=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:f,segments:v,phiStart:e,phiLength:P},v=Math.floor(v),P=Rf(P,0,Math.PI*2);let z=[],t=[],u=[],r=[],b=[],X=1/v,d=new L,H=new g,x=new L,c=new L,a=new L,j=0,s=0;for(let i=0;i<=f.length-1;i++)switch(i){case 0:j=f[i+1].x-f[i].x,s=f[i+1].y-f[i].y,x.x=s*1,x.y=-j,x.z=s*0,a.copy(x),x.normalize(),r.push(x.x,x.y,x.z);break;case f.length-1:r.push(a.x,a.y,a.z);break;default:j=f[i+1].x-f[i].x,s=f[i+1].y-f[i].y,x.x=s*1,x.y=-j,x.z=s*0,c.copy(x),x.x+=a.x,x.y+=a.y,x.z+=a.z,x.normalize(),r.push(x.x,x.y,x.z),a.copy(c)}for(let i=0;i<=v;i++){let N=e+i*X*P,m=Math.sin(N),p=Math.cos(N);for(let l=0;l<=f.length-1;l++){d.x=f[l].x*m,d.y=f[l].y,d.z=f[l].x*p,t.push(d.x,d.y,d.z),H.x=i/v,H.y=l/(f.length-1),u.push(H.x,H.y);let W=r[3*l+0]*m,w=r[3*l+1],T=r[3*l+0]*p;b.push(W,w,T)}}for(let i=0;i<v;i++)for(let N=0;N<f.length-1;N++){let m=N+i*f.length,p=m,l=m+f.length,W=m+f.length+1,w=m+1;z.push(p,l,w),z.push(W,w,l)}this.setIndex(z),this.setAttribute("position",new sf(t,3)),this.setAttribute("uv",new sf(u,2)),this.setAttribute("normal",new sf(b,3))}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}static fromJSON(f){return new n(f.points,f.segments,f.phiStart,f.phiLength)}},n8=class n extends o7{constructor(f=1,v=0){let e=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],P=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(e,P,f,v),this.type="OctahedronGeometry",this.parameters={radius:f,detail:v}}static fromJSON(f){return new n(f.radius,f.detail)}},Xv=class n extends kf{constructor(f=1,v=1,e=1,P=1){super(),this.type="PlaneGeometry",this.parameters={width:f,height:v,widthSegments:e,heightSegments:P};let z=f/2,t=v/2,u=Math.floor(e),r=Math.floor(P),b=u+1,X=r+1,d=f/u,H=v/r,x=[],c=[],a=[],j=[];for(let s=0;s<X;s++){let i=s*H-t;for(let N=0;N<b;N++){let m=N*d-z;c.push(m,-i,0),a.push(0,0,1),j.push(N/u),j.push(1-s/r)}}for(let s=0;s<r;s++)for(let i=0;i<u;i++){let N=i+b*s,m=i+b*(s+1),p=i+1+b*(s+1),l=i+1+b*s;x.push(N,m,l),x.push(m,p,l)}this.setIndex(x),this.setAttribute("position",new sf(c,3)),this.setAttribute("normal",new sf(a,3)),this.setAttribute("uv",new sf(j,2))}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}static fromJSON(f){return new n(f.width,f.height,f.widthSegments,f.heightSegments)}},NP=class n extends kf{constructor(f=.5,v=1,e=32,P=1,z=0,t=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:f,outerRadius:v,thetaSegments:e,phiSegments:P,thetaStart:z,thetaLength:t},e=Math.max(3,e),P=Math.max(1,P);let u=[],r=[],b=[],X=[],d=f,H=(v-f)/P,x=new L,c=new g;for(let a=0;a<=P;a++){for(let j=0;j<=e;j++){let s=z+j/e*t;x.x=d*Math.cos(s),x.y=d*Math.sin(s),r.push(x.x,x.y,x.z),b.push(0,0,1),c.x=(x.x/v+1)/2,c.y=(x.y/v+1)/2,X.push(c.x,c.y)}d+=H}for(let a=0;a<P;a++){let j=a*(e+1);for(let s=0;s<e;s++){let i=s+j,N=i,m=i+e+1,p=i+e+2,l=i+1;u.push(N,m,l),u.push(m,p,l)}}this.setIndex(u),this.setAttribute("position",new sf(r,3)),this.setAttribute("normal",new sf(b,3)),this.setAttribute("uv",new sf(X,2))}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}static fromJSON(f){return new n(f.innerRadius,f.outerRadius,f.thetaSegments,f.phiSegments,f.thetaStart,f.thetaLength)}},iP=class n extends kf{constructor(f=new d7([new g(0,.5),new g(-.5,-.5),new g(.5,-.5)]),v=12){super(),this.type="ShapeGeometry",this.parameters={shapes:f,curveSegments:v};let e=[],P=[],z=[],t=[],u=0,r=0;if(Array.isArray(f)===!1)b(f);else for(let X=0;X<f.length;X++)b(f[X]),this.addGroup(u,r,X),u+=r,r=0;this.setIndex(e),this.setAttribute("position",new sf(P,3)),this.setAttribute("normal",new sf(z,3)),this.setAttribute("uv",new sf(t,2));function b(X){let d=P.length/3,H=X.extractPoints(v),x=H.shape,c=H.holes;Rv.isClockWise(x)===!1&&(x=x.reverse());for(let j=0,s=c.length;j<s;j++){let i=c[j];Rv.isClockWise(i)===!0&&(c[j]=i.reverse())}let a=Rv.triangulateShape(x,c);for(let j=0,s=c.length;j<s;j++){let i=c[j];x=x.concat(i)}for(let j=0,s=x.length;j<s;j++){let i=x[j];P.push(i.x,i.y,0),z.push(0,0,1),t.push(i.x,i.y)}for(let j=0,s=a.length;j<s;j++){let i=a[j],N=i[0]+d,m=i[1]+d,p=i[2]+d;e.push(N,m,p),r+=3}}}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}toJSON(){let f=super.toJSON(),v=this.parameters.shapes;return yH(v,f)}static fromJSON(f,v){let e=[];for(let P=0,z=f.shapes.length;P<z;P++){let t=v[f.shapes[P]];e.push(t)}return new n(e,f.curveSegments)}};function yH(n,f){if(f.shapes=[],Array.isArray(n))for(let v=0,e=n.length;v<e;v++){let P=n[v];f.shapes.push(P.uuid)}else f.shapes.push(n.uuid);return f}var ue=class n extends kf{constructor(f=1,v=32,e=16,P=0,z=Math.PI*2,t=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:f,widthSegments:v,heightSegments:e,phiStart:P,phiLength:z,thetaStart:t,thetaLength:u},v=Math.max(3,Math.floor(v)),e=Math.max(2,Math.floor(e));let r=Math.min(t+u,Math.PI),b=0,X=[],d=new L,H=new L,x=[],c=[],a=[],j=[];for(let s=0;s<=e;s++){let i=[],N=s/e,m=0;s===0&&t===0?m=.5/v:s===e&&r===Math.PI&&(m=-.5/v);for(let p=0;p<=v;p++){let l=p/v;d.x=-f*Math.cos(P+l*z)*Math.sin(t+N*u),d.y=f*Math.cos(t+N*u),d.z=f*Math.sin(P+l*z)*Math.sin(t+N*u),c.push(d.x,d.y,d.z),H.copy(d).normalize(),a.push(H.x,H.y,H.z),j.push(l+m,1-N),i.push(b++)}X.push(i)}for(let s=0;s<e;s++)for(let i=0;i<v;i++){let N=X[s][i+1],m=X[s][i],p=X[s+1][i],l=X[s+1][i+1];(s!==0||t>0)&&x.push(N,m,l),(s!==e-1||r<Math.PI)&&x.push(m,p,l)}this.setIndex(x),this.setAttribute("position",new sf(c,3)),this.setAttribute("normal",new sf(a,3)),this.setAttribute("uv",new sf(j,2))}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}static fromJSON(f){return new n(f.radius,f.widthSegments,f.heightSegments,f.phiStart,f.phiLength,f.thetaStart,f.thetaLength)}},ZP=class n extends o7{constructor(f=1,v=0){let e=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],P=[2,1,0,0,3,2,1,3,0,2,3,1];super(e,P,f,v),this.type="TetrahedronGeometry",this.parameters={radius:f,detail:v}}static fromJSON(f){return new n(f.radius,f.detail)}},TP=class n extends kf{constructor(f=1,v=.4,e=12,P=48,z=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:f,tube:v,radialSegments:e,tubularSegments:P,arc:z},e=Math.floor(e),P=Math.floor(P);let t=[],u=[],r=[],b=[],X=new L,d=new L,H=new L;for(let x=0;x<=e;x++)for(let c=0;c<=P;c++){let a=c/P*z,j=x/e*Math.PI*2;d.x=(f+v*Math.cos(j))*Math.cos(a),d.y=(f+v*Math.cos(j))*Math.sin(a),d.z=v*Math.sin(j),u.push(d.x,d.y,d.z),X.x=f*Math.cos(a),X.y=f*Math.sin(a),H.subVectors(d,X).normalize(),r.push(H.x,H.y,H.z),b.push(c/P),b.push(x/e)}for(let x=1;x<=e;x++)for(let c=1;c<=P;c++){let a=(P+1)*x+c-1,j=(P+1)*(x-1)+c-1,s=(P+1)*(x-1)+c,i=(P+1)*x+c;t.push(a,j,i),t.push(j,s,i)}this.setIndex(t),this.setAttribute("position",new sf(u,3)),this.setAttribute("normal",new sf(r,3)),this.setAttribute("uv",new sf(b,2))}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}static fromJSON(f){return new n(f.radius,f.tube,f.radialSegments,f.tubularSegments,f.arc)}},yP=class n extends kf{constructor(f=1,v=.4,e=64,P=8,z=2,t=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:f,tube:v,tubularSegments:e,radialSegments:P,p:z,q:t},e=Math.floor(e),P=Math.floor(P);let u=[],r=[],b=[],X=[],d=new L,H=new L,x=new L,c=new L,a=new L,j=new L,s=new L;for(let N=0;N<=e;++N){let m=N/e*z*Math.PI*2;i(m,z,t,f,x),i(m+.01,z,t,f,c),j.subVectors(c,x),s.addVectors(c,x),a.crossVectors(j,s),s.crossVectors(a,j),a.normalize(),s.normalize();for(let p=0;p<=P;++p){let l=p/P*Math.PI*2,W=-v*Math.cos(l),w=v*Math.sin(l);d.x=x.x+(W*s.x+w*a.x),d.y=x.y+(W*s.y+w*a.y),d.z=x.z+(W*s.z+w*a.z),r.push(d.x,d.y,d.z),H.subVectors(d,x).normalize(),b.push(H.x,H.y,H.z),X.push(N/e),X.push(p/P)}}for(let N=1;N<=e;N++)for(let m=1;m<=P;m++){let p=(P+1)*(N-1)+(m-1),l=(P+1)*N+(m-1),W=(P+1)*N+m,w=(P+1)*(N-1)+m;u.push(p,l,w),u.push(l,W,w)}this.setIndex(u),this.setAttribute("position",new sf(r,3)),this.setAttribute("normal",new sf(b,3)),this.setAttribute("uv",new sf(X,2));function i(N,m,p,l,W){let w=Math.cos(N),T=Math.sin(N),y=p/m*N,V=Math.cos(y);W.x=l*(2+V)*.5*w,W.y=l*(2+V)*T*.5,W.z=l*Math.sin(y)*.5}}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}static fromJSON(f){return new n(f.radius,f.tube,f.tubularSegments,f.radialSegments,f.p,f.q)}},pP=class n extends kf{constructor(f=new v8(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),v=64,e=1,P=8,z=!1){super(),this.type="TubeGeometry",this.parameters={path:f,tubularSegments:v,radius:e,radialSegments:P,closed:z};let t=f.computeFrenetFrames(v,z);this.tangents=t.tangents,this.normals=t.normals,this.binormals=t.binormals;let u=new L,r=new L,b=new g,X=new L,d=[],H=[],x=[],c=[];a(),this.setIndex(c),this.setAttribute("position",new sf(d,3)),this.setAttribute("normal",new sf(H,3)),this.setAttribute("uv",new sf(x,2));function a(){for(let N=0;N<v;N++)j(N);j(z===!1?v:0),i(),s()}function j(N){X=f.getPointAt(N/v,X);let m=t.normals[N],p=t.binormals[N];for(let l=0;l<=P;l++){let W=l/P*Math.PI*2,w=Math.sin(W),T=-Math.cos(W);r.x=T*m.x+w*p.x,r.y=T*m.y+w*p.y,r.z=T*m.z+w*p.z,r.normalize(),H.push(r.x,r.y,r.z),u.x=X.x+e*r.x,u.y=X.y+e*r.y,u.z=X.z+e*r.z,d.push(u.x,u.y,u.z)}}function s(){for(let N=1;N<=v;N++)for(let m=1;m<=P;m++){let p=(P+1)*(N-1)+(m-1),l=(P+1)*N+(m-1),W=(P+1)*N+m,w=(P+1)*(N-1)+m;c.push(p,l,w),c.push(l,W,w)}}function i(){for(let N=0;N<=v;N++)for(let m=0;m<=P;m++)b.x=N/v,b.y=m/P,x.push(b.x,b.y)}}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}toJSON(){let f=super.toJSON();return f.path=this.parameters.path.toJSON(),f}static fromJSON(f){return new n(new n5[f.path.type]().fromJSON(f.path),f.tubularSegments,f.radius,f.radialSegments,f.closed)}},OP=class extends kf{constructor(f=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:f},f!==null){let v=[],e=new Set,P=new L,z=new L;if(f.index!==null){let t=f.attributes.position,u=f.index,r=f.groups;r.length===0&&(r=[{start:0,count:u.count,materialIndex:0}]);for(let b=0,X=r.length;b<X;++b){let d=r[b],H=d.start,x=d.count;for(let c=H,a=H+x;c<a;c+=3)for(let j=0;j<3;j++){let s=u.getX(c+j),i=u.getX(c+(j+1)%3);P.fromBufferAttribute(t,s),z.fromBufferAttribute(t,i),Vb(P,z,e)===!0&&(v.push(P.x,P.y,P.z),v.push(z.x,z.y,z.z))}}}else{let t=f.attributes.position;for(let u=0,r=t.count/3;u<r;u++)for(let b=0;b<3;b++){let X=3*u+b,d=3*u+(b+1)%3;P.fromBufferAttribute(t,X),z.fromBufferAttribute(t,d),Vb(P,z,e)===!0&&(v.push(P.x,P.y,P.z),v.push(z.x,z.y,z.z))}}this.setAttribute("position",new sf(v,3))}}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}};function Vb(n,f,v){let e=`${n.x},${n.y},${n.z}-${f.x},${f.y},${f.z}`,P=`${f.x},${f.y},${f.z}-${n.x},${n.y},${n.z}`;return v.has(e)===!0||v.has(P)===!0?!1:(v.add(e),v.add(P),!0)}var Db=Object.freeze({__proto__:null,BoxGeometry:Pe,CapsuleGeometry:zP,CircleGeometry:Ce,ConeGeometry:A9,CylinderGeometry:Q9,DodecahedronGeometry:tP,EdgesGeometry:uP,ExtrudeGeometry:jP,IcosahedronGeometry:aP,LatheGeometry:mP,OctahedronGeometry:n8,PlaneGeometry:Xv,PolyhedronGeometry:o7,RingGeometry:NP,ShapeGeometry:iP,SphereGeometry:ue,TetrahedronGeometry:ZP,TorusGeometry:TP,TorusKnotGeometry:yP,TubeGeometry:pP,WireframeGeometry:OP}),lP=class extends L3{constructor(f){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new bf(0),this.transparent=!0,this.fog=!0,this.setValues(f)}copy(f){return super.copy(f),this.color.copy(f.color),this.fog=f.fog,this}},LP=class extends Q3{constructor(f){super(f),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ev=class extends L3{constructor(f){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bf(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bf(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=k7,this.normalScale=new g(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mv,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(f)}copy(f){return super.copy(f),this.defines={STANDARD:""},this.color.copy(f.color),this.roughness=f.roughness,this.metalness=f.metalness,this.map=f.map,this.lightMap=f.lightMap,this.lightMapIntensity=f.lightMapIntensity,this.aoMap=f.aoMap,this.aoMapIntensity=f.aoMapIntensity,this.emissive.copy(f.emissive),this.emissiveMap=f.emissiveMap,this.emissiveIntensity=f.emissiveIntensity,this.bumpMap=f.bumpMap,this.bumpScale=f.bumpScale,this.normalMap=f.normalMap,this.normalMapType=f.normalMapType,this.normalScale.copy(f.normalScale),this.displacementMap=f.displacementMap,this.displacementScale=f.displacementScale,this.displacementBias=f.displacementBias,this.roughnessMap=f.roughnessMap,this.metalnessMap=f.metalnessMap,this.alphaMap=f.alphaMap,this.envMap=f.envMap,this.envMapRotation.copy(f.envMapRotation),this.envMapIntensity=f.envMapIntensity,this.wireframe=f.wireframe,this.wireframeLinewidth=f.wireframeLinewidth,this.wireframeLinecap=f.wireframeLinecap,this.wireframeLinejoin=f.wireframeLinejoin,this.flatShading=f.flatShading,this.fog=f.fog,this}},F3=class extends ev{constructor(f){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new g(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rf(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(v){this.ior=(1+.4*v)/(1-.4*v)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bf(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bf(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bf(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(f)}get anisotropy(){return this._anisotropy}set anisotropy(f){this._anisotropy>0!=f>0&&this.version++,this._anisotropy=f}get clearcoat(){return this._clearcoat}set clearcoat(f){this._clearcoat>0!=f>0&&this.version++,this._clearcoat=f}get iridescence(){return this._iridescence}set iridescence(f){this._iridescence>0!=f>0&&this.version++,this._iridescence=f}get dispersion(){return this._dispersion}set dispersion(f){this._dispersion>0!=f>0&&this.version++,this._dispersion=f}get sheen(){return this._sheen}set sheen(f){this._sheen>0!=f>0&&this.version++,this._sheen=f}get transmission(){return this._transmission}set transmission(f){this._transmission>0!=f>0&&this.version++,this._transmission=f}copy(f){return super.copy(f),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=f.anisotropy,this.anisotropyRotation=f.anisotropyRotation,this.anisotropyMap=f.anisotropyMap,this.clearcoat=f.clearcoat,this.clearcoatMap=f.clearcoatMap,this.clearcoatRoughness=f.clearcoatRoughness,this.clearcoatRoughnessMap=f.clearcoatRoughnessMap,this.clearcoatNormalMap=f.clearcoatNormalMap,this.clearcoatNormalScale.copy(f.clearcoatNormalScale),this.dispersion=f.dispersion,this.ior=f.ior,this.iridescence=f.iridescence,this.iridescenceMap=f.iridescenceMap,this.iridescenceIOR=f.iridescenceIOR,this.iridescenceThicknessRange=[...f.iridescenceThicknessRange],this.iridescenceThicknessMap=f.iridescenceThicknessMap,this.sheen=f.sheen,this.sheenColor.copy(f.sheenColor),this.sheenColorMap=f.sheenColorMap,this.sheenRoughness=f.sheenRoughness,this.sheenRoughnessMap=f.sheenRoughnessMap,this.transmission=f.transmission,this.transmissionMap=f.transmissionMap,this.thickness=f.thickness,this.thicknessMap=f.thicknessMap,this.attenuationDistance=f.attenuationDistance,this.attenuationColor.copy(f.attenuationColor),this.specularIntensity=f.specularIntensity,this.specularIntensityMap=f.specularIntensityMap,this.specularColor.copy(f.specularColor),this.specularColorMap=f.specularColorMap,this}},WP=class extends L3{constructor(f){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new bf(16777215),this.specular=new bf(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bf(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=k7,this.normalScale=new g(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mv,this.combine=x8,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(f)}copy(f){return super.copy(f),this.color.copy(f.color),this.specular.copy(f.specular),this.shininess=f.shininess,this.map=f.map,this.lightMap=f.lightMap,this.lightMapIntensity=f.lightMapIntensity,this.aoMap=f.aoMap,this.aoMapIntensity=f.aoMapIntensity,this.emissive.copy(f.emissive),this.emissiveMap=f.emissiveMap,this.emissiveIntensity=f.emissiveIntensity,this.bumpMap=f.bumpMap,this.bumpScale=f.bumpScale,this.normalMap=f.normalMap,this.normalMapType=f.normalMapType,this.normalScale.copy(f.normalScale),this.displacementMap=f.displacementMap,this.displacementScale=f.displacementScale,this.displacementBias=f.displacementBias,this.specularMap=f.specularMap,this.alphaMap=f.alphaMap,this.envMap=f.envMap,this.envMapRotation.copy(f.envMapRotation),this.combine=f.combine,this.reflectivity=f.reflectivity,this.refractionRatio=f.refractionRatio,this.wireframe=f.wireframe,this.wireframeLinewidth=f.wireframeLinewidth,this.wireframeLinecap=f.wireframeLinecap,this.wireframeLinejoin=f.wireframeLinejoin,this.flatShading=f.flatShading,this.fog=f.fog,this}},hP=class extends L3{constructor(f){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new bf(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bf(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=k7,this.normalScale=new g(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(f)}copy(f){return super.copy(f),this.color.copy(f.color),this.map=f.map,this.gradientMap=f.gradientMap,this.lightMap=f.lightMap,this.lightMapIntensity=f.lightMapIntensity,this.aoMap=f.aoMap,this.aoMapIntensity=f.aoMapIntensity,this.emissive.copy(f.emissive),this.emissiveMap=f.emissiveMap,this.emissiveIntensity=f.emissiveIntensity,this.bumpMap=f.bumpMap,this.bumpScale=f.bumpScale,this.normalMap=f.normalMap,this.normalMapType=f.normalMapType,this.normalScale.copy(f.normalScale),this.displacementMap=f.displacementMap,this.displacementScale=f.displacementScale,this.displacementBias=f.displacementBias,this.alphaMap=f.alphaMap,this.wireframe=f.wireframe,this.wireframeLinewidth=f.wireframeLinewidth,this.wireframeLinecap=f.wireframeLinecap,this.wireframeLinejoin=f.wireframeLinejoin,this.fog=f.fog,this}},wP=class extends L3{constructor(f){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=k7,this.normalScale=new g(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(f)}copy(f){return super.copy(f),this.bumpMap=f.bumpMap,this.bumpScale=f.bumpScale,this.normalMap=f.normalMap,this.normalMapType=f.normalMapType,this.normalScale.copy(f.normalScale),this.displacementMap=f.displacementMap,this.displacementScale=f.displacementScale,this.displacementBias=f.displacementBias,this.wireframe=f.wireframe,this.wireframeLinewidth=f.wireframeLinewidth,this.flatShading=f.flatShading,this}},VP=class extends L3{constructor(f){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new bf(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bf(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=k7,this.normalScale=new g(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mv,this.combine=x8,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(f)}copy(f){return super.copy(f),this.color.copy(f.color),this.map=f.map,this.lightMap=f.lightMap,this.lightMapIntensity=f.lightMapIntensity,this.aoMap=f.aoMap,this.aoMapIntensity=f.aoMapIntensity,this.emissive.copy(f.emissive),this.emissiveMap=f.emissiveMap,this.emissiveIntensity=f.emissiveIntensity,this.bumpMap=f.bumpMap,this.bumpScale=f.bumpScale,this.normalMap=f.normalMap,this.normalMapType=f.normalMapType,this.normalScale.copy(f.normalScale),this.displacementMap=f.displacementMap,this.displacementScale=f.displacementScale,this.displacementBias=f.displacementBias,this.specularMap=f.specularMap,this.alphaMap=f.alphaMap,this.envMap=f.envMap,this.envMapRotation.copy(f.envMapRotation),this.combine=f.combine,this.reflectivity=f.reflectivity,this.refractionRatio=f.refractionRatio,this.wireframe=f.wireframe,this.wireframeLinewidth=f.wireframeLinewidth,this.wireframeLinecap=f.wireframeLinecap,this.wireframeLinejoin=f.wireframeLinejoin,this.flatShading=f.flatShading,this.fog=f.fog,this}},z8=class extends L3{constructor(f){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(f)}copy(f){return super.copy(f),this.depthPacking=f.depthPacking,this.map=f.map,this.alphaMap=f.alphaMap,this.displacementMap=f.displacementMap,this.displacementScale=f.displacementScale,this.displacementBias=f.displacementBias,this.wireframe=f.wireframe,this.wireframeLinewidth=f.wireframeLinewidth,this}},t8=class extends L3{constructor(f){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(f)}copy(f){return super.copy(f),this.map=f.map,this.alphaMap=f.alphaMap,this.displacementMap=f.displacementMap,this.displacementScale=f.displacementScale,this.displacementBias=f.displacementBias,this}},DP=class extends L3{constructor(f){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new bf(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=k7,this.normalScale=new g(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(f)}copy(f){return super.copy(f),this.defines={MATCAP:""},this.color.copy(f.color),this.matcap=f.matcap,this.map=f.map,this.bumpMap=f.bumpMap,this.bumpScale=f.bumpScale,this.normalMap=f.normalMap,this.normalMapType=f.normalMapType,this.normalScale.copy(f.normalScale),this.displacementMap=f.displacementMap,this.displacementScale=f.displacementScale,this.displacementBias=f.displacementBias,this.alphaMap=f.alphaMap,this.flatShading=f.flatShading,this.fog=f.fog,this}},qP=class extends M3{constructor(f){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(f)}copy(f){return super.copy(f),this.scale=f.scale,this.dashSize=f.dashSize,this.gapSize=f.gapSize,this}};function De(n,f){return!n||n.constructor===f?n:typeof f.BYTES_PER_ELEMENT=="number"?new f(n):Array.prototype.slice.call(n)}function kX(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function JX(n){function f(P,z){return n[P]-n[z]}let v=n.length,e=new Array(v);for(let P=0;P!==v;++P)e[P]=P;return e.sort(f),e}function au(n,f,v){let e=n.length,P=new n.constructor(e);for(let z=0,t=0;t!==e;++z){let u=v[z]*f;for(let r=0;r!==f;++r)P[t++]=n[u+r]}return P}function Nr(n,f,v,e){let P=1,z=n[0];for(;z!==void 0&&z[e]===void 0;)z=n[P++];if(z===void 0)return;let t=z[e];if(t!==void 0)if(Array.isArray(t))do t=z[e],t!==void 0&&(f.push(z.time),v.push(...t)),z=n[P++];while(z!==void 0);else if(t.toArray!==void 0)do t=z[e],t!==void 0&&(f.push(z.time),t.toArray(v,v.length)),z=n[P++];while(z!==void 0);else do t=z[e],t!==void 0&&(f.push(z.time),v.push(t)),z=n[P++];while(z!==void 0)}function pH(n,f,v,e,P=30){let z=n.clone();z.name=f;let t=[];for(let r=0;r<z.tracks.length;++r){let b=z.tracks[r],X=b.getValueSize(),d=[],H=[];for(let x=0;x<b.times.length;++x){let c=b.times[x]*P;if(!(c<v||c>=e)){d.push(b.times[x]);for(let a=0;a<X;++a)H.push(b.values[x*X+a])}}d.length!==0&&(b.times=De(d,b.times.constructor),b.values=De(H,b.values.constructor),t.push(b))}z.tracks=t;let u=1/0;for(let r=0;r<z.tracks.length;++r)u>z.tracks[r].times[0]&&(u=z.tracks[r].times[0]);for(let r=0;r<z.tracks.length;++r)z.tracks[r].shift(-1*u);return z.resetDuration(),z}function OH(n,f=0,v=n,e=30){e<=0&&(e=30);let P=v.tracks.length,z=f/e;for(let t=0;t<P;++t){let u=v.tracks[t],r=u.ValueTypeName;if(r==="bool"||r==="string")continue;let b=n.tracks.find(function(s){return s.name===u.name&&s.ValueTypeName===r});if(b===void 0)continue;let X=0,d=u.getValueSize();u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(X=d/3);let H=0,x=b.getValueSize();b.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(H=x/3);let c=u.times.length-1,a;if(z<=u.times[0]){let s=X,i=d-X;a=u.values.slice(s,i)}else if(z>=u.times[c]){let s=c*d+X,i=s+d-X;a=u.values.slice(s,i)}else{let s=u.createInterpolant(),i=X,N=d-X;s.evaluate(z),a=s.resultBuffer.slice(i,N)}r==="quaternion"&&new l3().fromArray(a).normalize().conjugate().toArray(a);let j=b.times.length;for(let s=0;s<j;++s){let i=s*x+H;if(r==="quaternion")l3.multiplyQuaternionsFlat(b.values,i,a,0,b.values,i);else{let N=x-H*2;for(let m=0;m<N;++m)b.values[i+m]-=a[m]}}}return n.blendMode=et,n}var z5=class{static convertArray(f,v){return De(f,v)}static isTypedArray(f){return kX(f)}static getKeyframeOrder(f){return JX(f)}static sortedArray(f,v,e){return au(f,v,e)}static flattenJSON(f,v,e,P){Nr(f,v,e,P)}static subclip(f,v,e,P,z=30){return pH(f,v,e,P,z)}static makeClipAdditive(f,v=0,e=f,P=30){return OH(f,v,e,P)}},x7=class{constructor(f,v,e,P){this.parameterPositions=f,this._cachedIndex=0,this.resultBuffer=P!==void 0?P:new v.constructor(e),this.sampleValues=v,this.valueSize=e,this.settings=null,this.DefaultSettings_={}}evaluate(f){let v=this.parameterPositions,e=this._cachedIndex,P=v[e],z=v[e-1];f:{v:{let t;e:{P:if(!(f<P)){for(let u=e+2;;){if(P===void 0){if(f<z)break P;return e=v.length,this._cachedIndex=e,this.copySampleValue_(e-1)}if(e===u)break;if(z=P,P=v[++e],f<P)break v}t=v.length;break e}if(!(f>=z)){let u=v[1];f<u&&(e=2,z=u);for(let r=e-2;;){if(z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(e===r)break;if(P=z,z=v[--e-1],f>=z)break v}t=e,e=0;break e}break f}for(;e<t;){let u=e+t>>>1;f<v[u]?t=u:e=u+1}if(P=v[e],z=v[e-1],z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(P===void 0)return e=v.length,this._cachedIndex=e,this.copySampleValue_(e-1)}this._cachedIndex=e,this.intervalChanged_(e,z,P)}return this.interpolate_(e,z,f,P)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(f){let v=this.resultBuffer,e=this.sampleValues,P=this.valueSize,z=f*P;for(let t=0;t!==P;++t)v[t]=e[z+t];return v}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oP=class extends x7{constructor(f,v,e,P){super(f,v,e,P),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Q7,endingEnd:Q7}}intervalChanged_(f,v,e){let P=this.parameterPositions,z=f-2,t=f+1,u=P[z],r=P[t];if(u===void 0)switch(this.getSettings_().endingStart){case A7:z=f,u=2*v-e;break;case k9:z=P.length-2,u=v+P[z]-P[z+1];break;default:z=f,u=e}if(r===void 0)switch(this.getSettings_().endingEnd){case A7:t=f,r=2*e-v;break;case k9:t=1,r=e+P[1]-P[0];break;default:t=f-1,r=v}let b=(e-v)*.5,X=this.valueSize;this._weightPrev=b/(v-u),this._weightNext=b/(r-e),this._offsetPrev=z*X,this._offsetNext=t*X}interpolate_(f,v,e,P){let z=this.resultBuffer,t=this.sampleValues,u=this.valueSize,r=f*u,b=r-u,X=this._offsetPrev,d=this._offsetNext,H=this._weightPrev,x=this._weightNext,c=(e-v)/(P-v),a=c*c,j=a*c,s=-H*j+2*H*a-H*c,i=(1+H)*j+(-1.5-2*H)*a+(-.5+H)*c+1,N=(-1-x)*j+(1.5+x)*a+.5*c,m=x*j-x*a;for(let p=0;p!==u;++p)z[p]=s*t[X+p]+i*t[b+p]+N*t[r+p]+m*t[d+p];return z}},u8=class extends x7{constructor(f,v,e,P){super(f,v,e,P)}interpolate_(f,v,e,P){let z=this.resultBuffer,t=this.sampleValues,u=this.valueSize,r=f*u,b=r-u,X=(e-v)/(P-v),d=1-X;for(let H=0;H!==u;++H)z[H]=t[b+H]*d+t[r+H]*X;return z}},MP=class extends x7{constructor(f,v,e,P){super(f,v,e,P)}interpolate_(f){return this.copySampleValue_(f-1)}},dv=class{constructor(f,v,e,P){if(f===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(v===void 0||v.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+f);this.name=f,this.times=De(v,this.TimeBufferType),this.values=De(e,this.ValueBufferType),this.setInterpolation(P||this.DefaultInterpolation)}static toJSON(f){let v=f.constructor,e;if(v.toJSON!==this.toJSON)e=v.toJSON(f);else{e={name:f.name,times:De(f.times,Array),values:De(f.values,Array)};let P=f.getInterpolation();P!==f.DefaultInterpolation&&(e.interpolation=P)}return e.type=f.ValueTypeName,e}InterpolantFactoryMethodDiscrete(f){return new MP(this.times,this.values,this.getValueSize(),f)}InterpolantFactoryMethodLinear(f){return new u8(this.times,this.values,this.getValueSize(),f)}InterpolantFactoryMethodSmooth(f){return new oP(this.times,this.values,this.getValueSize(),f)}setInterpolation(f){let v;switch(f){case ve:v=this.InterpolantFactoryMethodDiscrete;break;case ee:v=this.InterpolantFactoryMethodLinear;break;case U8:v=this.InterpolantFactoryMethodSmooth;break}if(v===void 0){let e="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(f!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(e);return console.warn("THREE.KeyframeTrack:",e),this}return this.createInterpolant=v,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ve;case this.InterpolantFactoryMethodLinear:return ee;case this.InterpolantFactoryMethodSmooth:return U8}}getValueSize(){return this.values.length/this.times.length}shift(f){if(f!==0){let v=this.times;for(let e=0,P=v.length;e!==P;++e)v[e]+=f}return this}scale(f){if(f!==1){let v=this.times;for(let e=0,P=v.length;e!==P;++e)v[e]*=f}return this}trim(f,v){let e=this.times,P=e.length,z=0,t=P-1;for(;z!==P&&e[z]<f;)++z;for(;t!==-1&&e[t]>v;)--t;if(++t,z!==0||t!==P){z>=t&&(t=Math.max(t,1),z=t-1);let u=this.getValueSize();this.times=e.slice(z,t),this.values=this.values.slice(z*u,t*u)}return this}validate(){let f=!0,v=this.getValueSize();v-Math.floor(v)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),f=!1);let e=this.times,P=this.values,z=e.length;z===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),f=!1);let t=null;for(let u=0;u!==z;u++){let r=e[u];if(typeof r=="number"&&isNaN(r)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,r),f=!1;break}if(t!==null&&t>r){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,r,t),f=!1;break}t=r}if(P!==void 0&&kX(P))for(let u=0,r=P.length;u!==r;++u){let b=P[u];if(isNaN(b)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,b),f=!1;break}}return f}optimize(){let f=this.times.slice(),v=this.values.slice(),e=this.getValueSize(),P=this.getInterpolation()===U8,z=f.length-1,t=1;for(let u=1;u<z;++u){let r=!1,b=f[u],X=f[u+1];if(b!==X&&(u!==1||b!==f[0]))if(P)r=!0;else{let d=u*e,H=d-e,x=d+e;for(let c=0;c!==e;++c){let a=v[d+c];if(a!==v[H+c]||a!==v[x+c]){r=!0;break}}}if(r){if(u!==t){f[t]=f[u];let d=u*e,H=t*e;for(let x=0;x!==e;++x)v[H+x]=v[d+x]}++t}}if(z>0){f[t]=f[z];for(let u=z*e,r=t*e,b=0;b!==e;++b)v[r+b]=v[u+b];++t}return t!==f.length?(this.times=f.slice(0,t),this.values=v.slice(0,t*e)):(this.times=f,this.values=v),this}clone(){let f=this.times.slice(),v=this.values.slice(),e=this.constructor,P=new e(this.name,f,v);return P.createInterpolant=this.createInterpolant,P}};dv.prototype.ValueTypeName="";dv.prototype.TimeBufferType=Float32Array;dv.prototype.ValueBufferType=Float32Array;dv.prototype.DefaultInterpolation=ee;var s7=class extends dv{constructor(f,v,e){super(f,v,e)}};s7.prototype.ValueTypeName="bool";s7.prototype.ValueBufferType=Array;s7.prototype.DefaultInterpolation=ve;s7.prototype.InterpolantFactoryMethodLinear=void 0;s7.prototype.InterpolantFactoryMethodSmooth=void 0;var r8=class extends dv{constructor(f,v,e,P){super(f,v,e,P)}};r8.prototype.ValueTypeName="color";var f7=class extends dv{constructor(f,v,e,P){super(f,v,e,P)}};f7.prototype.ValueTypeName="number";var FP=class extends x7{constructor(f,v,e,P){super(f,v,e,P)}interpolate_(f,v,e,P){let z=this.resultBuffer,t=this.sampleValues,u=this.valueSize,r=(e-v)/(P-v),b=f*u;for(let X=b+u;b!==X;b+=4)l3.slerpFlat(z,0,t,b-u,t,b,r);return z}},v7=class extends dv{constructor(f,v,e,P){super(f,v,e,P)}InterpolantFactoryMethodLinear(f){return new FP(this.times,this.values,this.getValueSize(),f)}};v7.prototype.ValueTypeName="quaternion";v7.prototype.InterpolantFactoryMethodSmooth=void 0;var c7=class extends dv{constructor(f,v,e){super(f,v,e)}};c7.prototype.ValueTypeName="string";c7.prototype.ValueBufferType=Array;c7.prototype.DefaultInterpolation=ve;c7.prototype.InterpolantFactoryMethodLinear=void 0;c7.prototype.InterpolantFactoryMethodSmooth=void 0;var e7=class extends dv{constructor(f,v,e,P){super(f,v,e,P)}};e7.prototype.ValueTypeName="vector";var j7=class{constructor(f="",v=-1,e=[],P=Yn){this.name=f,this.tracks=e,this.duration=v,this.blendMode=P,this.uuid=Wv(),this.userData={},this.duration<0&&this.resetDuration()}static parse(f){let v=[],e=f.tracks,P=1/(f.fps||1);for(let t=0,u=e.length;t!==u;++t)v.push(LH(e[t]).scale(P));let z=new this(f.name,f.duration,v,f.blendMode);return z.uuid=f.uuid,z.userData=JSON.parse(f.userData||"{}"),z}static toJSON(f){let v=[],e=f.tracks,P={name:f.name,duration:f.duration,tracks:v,uuid:f.uuid,blendMode:f.blendMode,userData:JSON.stringify(f.userData)};for(let z=0,t=e.length;z!==t;++z)v.push(dv.toJSON(e[z]));return P}static CreateFromMorphTargetSequence(f,v,e,P){let z=v.length,t=[];for(let u=0;u<z;u++){let r=[],b=[];r.push((u+z-1)%z,u,(u+1)%z),b.push(0,1,0);let X=JX(r);r=au(r,1,X),b=au(b,1,X),!P&&r[0]===0&&(r.push(z),b.push(b[0])),t.push(new f7(".morphTargetInfluences["+v[u].name+"]",r,b).scale(1/e))}return new this(f,-1,t)}static findByName(f,v){let e=f;if(!Array.isArray(f)){let P=f;e=P.geometry&&P.geometry.animations||P.animations}for(let P=0;P<e.length;P++)if(e[P].name===v)return e[P];return null}static CreateClipsFromMorphTargetSequences(f,v,e){let P={},z=/^([\w-]*?)([\d]+)$/;for(let u=0,r=f.length;u<r;u++){let b=f[u],X=b.name.match(z);if(X&&X.length>1){let d=X[1],H=P[d];H||(P[d]=H=[]),H.push(b)}}let t=[];for(let u in P)t.push(this.CreateFromMorphTargetSequence(u,P[u],v,e));return t}static parseAnimation(f,v){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!f)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let e=function(d,H,x,c,a){if(x.length!==0){let j=[],s=[];Nr(x,j,s,c),j.length!==0&&a.push(new d(H,j,s))}},P=[],z=f.name||"default",t=f.fps||30,u=f.blendMode,r=f.length||-1,b=f.hierarchy||[];for(let d=0;d<b.length;d++){let H=b[d].keys;if(!(!H||H.length===0))if(H[0].morphTargets){let x={},c;for(c=0;c<H.length;c++)if(H[c].morphTargets)for(let a=0;a<H[c].morphTargets.length;a++)x[H[c].morphTargets[a]]=-1;for(let a in x){let j=[],s=[];for(let i=0;i!==H[c].morphTargets.length;++i){let N=H[c];j.push(N.time),s.push(N.morphTarget===a?1:0)}P.push(new f7(".morphTargetInfluence["+a+"]",j,s))}r=x.length*t}else{let x=".bones["+v[d].name+"]";e(e7,x+".position",H,"pos",P),e(v7,x+".quaternion",H,"rot",P),e(e7,x+".scale",H,"scl",P)}}return P.length===0?null:new this(z,r,P,u)}resetDuration(){let f=this.tracks,v=0;for(let e=0,P=f.length;e!==P;++e){let z=this.tracks[e];v=Math.max(v,z.times[z.times.length-1])}return this.duration=v,this}trim(){for(let f=0;f<this.tracks.length;f++)this.tracks[f].trim(0,this.duration);return this}validate(){let f=!0;for(let v=0;v<this.tracks.length;v++)f=f&&this.tracks[v].validate();return f}optimize(){for(let f=0;f<this.tracks.length;f++)this.tracks[f].optimize();return this}clone(){let f=[];for(let e=0;e<this.tracks.length;e++)f.push(this.tracks[e].clone());let v=new this.constructor(this.name,this.duration,f,this.blendMode);return v.userData=JSON.parse(JSON.stringify(this.userData)),v}toJSON(){return this.constructor.toJSON(this)}};function lH(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return f7;case"vector":case"vector2":case"vector3":case"vector4":return e7;case"color":return r8;case"quaternion":return v7;case"bool":case"boolean":return s7;case"string":return c7}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function LH(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let f=lH(n.type);if(n.times===void 0){let v=[],e=[];Nr(n.keys,v,e,"value"),n.times=v,n.values=e}return f.parse!==void 0?f.parse(n):new f(n.name,n.times,n.values,n.interpolation)}var Av={enabled:!1,files:{},add:function(n,f){this.enabled!==!1&&(this.files[n]=f)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},b8=class{constructor(f,v,e){let P=this,z=!1,t=0,u=0,r,b=[];this.onStart=void 0,this.onLoad=f,this.onProgress=v,this.onError=e,this.abortController=new AbortController,this.itemStart=function(X){u++,z===!1&&P.onStart!==void 0&&P.onStart(X,t,u),z=!0},this.itemEnd=function(X){t++,P.onProgress!==void 0&&P.onProgress(X,t,u),t===u&&(z=!1,P.onLoad!==void 0&&P.onLoad())},this.itemError=function(X){P.onError!==void 0&&P.onError(X)},this.resolveURL=function(X){return r?r(X):X},this.setURLModifier=function(X){return r=X,this},this.addHandler=function(X,d){return b.push(X,d),this},this.removeHandler=function(X){let d=b.indexOf(X);return d!==-1&&b.splice(d,2),this},this.getHandler=function(X){for(let d=0,H=b.length;d<H;d+=2){let x=b[d],c=b[d+1];if(x.global&&(x.lastIndex=0),x.test(X))return c}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ir=new b8,R3=class{constructor(f){this.manager=f!==void 0?f:ir,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(f,v){let e=this;return new Promise(function(P,z){e.load(f,P,v,z)})}parse(){}setCrossOrigin(f){return this.crossOrigin=f,this}setWithCredentials(f){return this.withCredentials=f,this}setPath(f){return this.path=f,this}setResourcePath(f){return this.resourcePath=f,this}setRequestHeader(f){return this.requestHeader=f,this}abort(){return this}};R3.DEFAULT_MATERIAL_NAME="__DEFAULT";var h7={},mu=class extends Error{constructor(f,v){super(f),this.response=v}},Hv=class extends R3{constructor(f){super(f),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(f,v,e,P){f===void 0&&(f=""),this.path!==void 0&&(f=this.path+f),f=this.manager.resolveURL(f);let z=Av.get(`file:${f}`);if(z!==void 0)return this.manager.itemStart(f),setTimeout(()=>{v&&v(z),this.manager.itemEnd(f)},0),z;if(h7[f]!==void 0){h7[f].push({onLoad:v,onProgress:e,onError:P});return}h7[f]=[],h7[f].push({onLoad:v,onProgress:e,onError:P});let t=new Request(f,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),u=this.mimeType,r=this.responseType;fetch(t).then(b=>{if(b.status===200||b.status===0){if(b.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||b.body===void 0||b.body.getReader===void 0)return b;let X=h7[f],d=b.body.getReader(),H=b.headers.get("X-File-Size")||b.headers.get("Content-Length"),x=H?parseInt(H):0,c=x!==0,a=0,j=new ReadableStream({start(s){i();function i(){d.read().then(({done:N,value:m})=>{if(N)s.close();else{a+=m.byteLength;let p=new ProgressEvent("progress",{lengthComputable:c,loaded:a,total:x});for(let l=0,W=X.length;l<W;l++){let w=X[l];w.onProgress&&w.onProgress(p)}s.enqueue(m),i()}},N=>{s.error(N)})}}});return new Response(j)}else throw new mu(`fetch for "${b.url}" responded with ${b.status}: ${b.statusText}`,b)}).then(b=>{switch(r){case"arraybuffer":return b.arrayBuffer();case"blob":return b.blob();case"document":return b.text().then(X=>new DOMParser().parseFromString(X,u));case"json":return b.json();default:if(u==="")return b.text();{let d=/charset="?([^;"\s]*)"?/i.exec(u),H=d&&d[1]?d[1].toLowerCase():void 0,x=new TextDecoder(H);return b.arrayBuffer().then(c=>x.decode(c))}}}).then(b=>{Av.add(`file:${f}`,b);let X=h7[f];delete h7[f];for(let d=0,H=X.length;d<H;d++){let x=X[d];x.onLoad&&x.onLoad(b)}}).catch(b=>{let X=h7[f];if(X===void 0)throw this.manager.itemError(f),b;delete h7[f];for(let d=0,H=X.length;d<H;d++){let x=X[d];x.onError&&x.onError(b)}this.manager.itemError(f)}).finally(()=>{this.manager.itemEnd(f)}),this.manager.itemStart(f)}setResponseType(f){return this.responseType=f,this}setMimeType(f){return this.mimeType=f,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},t5=class extends R3{constructor(f){super(f)}load(f,v,e,P){let z=this,t=new Hv(this.manager);t.setPath(this.path),t.setRequestHeader(this.requestHeader),t.setWithCredentials(this.withCredentials),t.load(f,function(u){try{v(z.parse(JSON.parse(u)))}catch(r){P?P(r):console.error(r),z.manager.itemError(f)}},e,P)}parse(f){let v=[];for(let e=0;e<f.length;e++){let P=j7.parse(f[e]);v.push(P)}return v}},u5=class extends R3{constructor(f){super(f)}load(f,v,e,P){let z=this,t=[],u=new Be,r=new Hv(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(z.withCredentials);let b=0;function X(d){r.load(f[d],function(H){let x=z.parse(H,!0);t[d]={width:x.width,height:x.height,format:x.format,mipmaps:x.mipmaps},b+=1,b===6&&(x.mipmapCount===1&&(u.minFilter=Z3),u.image=t,u.format=x.format,u.needsUpdate=!0,v&&v(u))},e,P)}if(Array.isArray(f))for(let d=0,H=f.length;d<H;++d)X(d);else r.load(f,function(d){let H=z.parse(d,!0);if(H.isCubemap){let x=H.mipmaps.length/H.mipmapCount;for(let c=0;c<x;c++){t[c]={mipmaps:[]};for(let a=0;a<H.mipmapCount;a++)t[c].mipmaps.push(H.mipmaps[c*H.mipmapCount+a]),t[c].format=H.format,t[c].width=H.width,t[c].height=H.height}u.image=t}else u.image.width=H.width,u.image.height=H.height,u.mipmaps=H.mipmaps;H.mipmapCount===1&&(u.minFilter=Z3),u.format=H.format,u.needsUpdate=!0,v&&v(u)},e,P);return u}},o9=new WeakMap,re=class extends R3{constructor(f){super(f)}load(f,v,e,P){this.path!==void 0&&(f=this.path+f),f=this.manager.resolveURL(f);let z=this,t=Av.get(`image:${f}`);if(t!==void 0){if(t.complete===!0)z.manager.itemStart(f),setTimeout(function(){v&&v(t),z.manager.itemEnd(f)},0);else{let d=o9.get(t);d===void 0&&(d=[],o9.set(t,d)),d.push({onLoad:v,onError:P})}return t}let u=S9("img");function r(){X(),v&&v(this);let d=o9.get(this)||[];for(let H=0;H<d.length;H++){let x=d[H];x.onLoad&&x.onLoad(this)}o9.delete(this),z.manager.itemEnd(f)}function b(d){X(),P&&P(d),Av.remove(`image:${f}`);let H=o9.get(this)||[];for(let x=0;x<H.length;x++){let c=H[x];c.onError&&c.onError(d)}o9.delete(this),z.manager.itemError(f),z.manager.itemEnd(f)}function X(){u.removeEventListener("load",r,!1),u.removeEventListener("error",b,!1)}return u.addEventListener("load",r,!1),u.addEventListener("error",b,!1),f.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),Av.add(`image:${f}`,u),z.manager.itemStart(f),u.src=f,u}},r5=class extends R3{constructor(f){super(f)}load(f,v,e,P){let z=new ne;z.colorSpace=X3;let t=new re(this.manager);t.setCrossOrigin(this.crossOrigin),t.setPath(this.path);let u=0;function r(b){t.load(f[b],function(X){z.images[b]=X,u++,u===6&&(z.needsUpdate=!0,v&&v(z))},void 0,P)}for(let b=0;b<f.length;++b)r(b);return z}},b5=class extends R3{constructor(f){super(f)}load(f,v,e,P){let z=this,t=new rv,u=new Hv(this.manager);return u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setPath(this.path),u.setWithCredentials(z.withCredentials),u.load(f,function(r){let b;try{b=z.parse(r)}catch(X){if(P!==void 0)P(X);else{console.error(X);return}}b.image!==void 0?t.image=b.image:b.data!==void 0&&(t.image.width=b.width,t.image.height=b.height,t.image.data=b.data),t.wrapS=b.wrapS!==void 0?b.wrapS:uv,t.wrapT=b.wrapT!==void 0?b.wrapT:uv,t.magFilter=b.magFilter!==void 0?b.magFilter:Z3,t.minFilter=b.minFilter!==void 0?b.minFilter:Z3,t.anisotropy=b.anisotropy!==void 0?b.anisotropy:1,b.colorSpace!==void 0&&(t.colorSpace=b.colorSpace),b.flipY!==void 0&&(t.flipY=b.flipY),b.format!==void 0&&(t.format=b.format),b.type!==void 0&&(t.type=b.type),b.mipmaps!==void 0&&(t.mipmaps=b.mipmaps,t.minFilter=iv),b.mipmapCount===1&&(t.minFilter=Z3),b.generateMipmaps!==void 0&&(t.generateMipmaps=b.generateMipmaps),t.needsUpdate=!0,v&&v(t,b)},e,P),t}},Vv=class extends R3{constructor(f){super(f)}load(f,v,e,P){let z=new T3,t=new re(this.manager);return t.setCrossOrigin(this.crossOrigin),t.setPath(this.path),t.load(f,function(u){z.image=u,z.needsUpdate=!0,v!==void 0&&v(z)},e,P),z}},P7=class extends P3{constructor(f,v=1){super(),this.isLight=!0,this.type="Light",this.color=new bf(f),this.intensity=v}dispose(){}copy(f,v){return super.copy(f,v),this.color.copy(f.color),this.intensity=f.intensity,this}toJSON(f){let v=super.toJSON(f);return v.object.color=this.color.getHex(),v.object.intensity=this.intensity,this.groundColor!==void 0&&(v.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(v.object.distance=this.distance),this.angle!==void 0&&(v.object.angle=this.angle),this.decay!==void 0&&(v.object.decay=this.decay),this.penumbra!==void 0&&(v.object.penumbra=this.penumbra),this.shadow!==void 0&&(v.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(v.object.target=this.target.uuid),v}},$e=class extends P7{constructor(f,v,e){super(f,e),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(P3.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bf(v)}copy(f,v){return super.copy(f,v),this.groundColor.copy(f.groundColor),this}},zu=new of,qb=new L,ob=new L,RP=class{constructor(f){this.camera=f,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new g(512,512),this.mapType=Kv,this.map=null,this.mapPass=null,this.matrix=new of,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new q7,this._frameExtents=new g(1,1),this._viewportCount=1,this._viewports=[new n3(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(f){let v=this.camera,e=this.matrix;qb.setFromMatrixPosition(f.matrixWorld),v.position.copy(qb),ob.setFromMatrixPosition(f.target.matrixWorld),v.lookAt(ob),v.updateMatrixWorld(),zu.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zu,v.coordinateSystem,v.reversedDepth),v.reversedDepth?e.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):e.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),e.multiply(zu)}getViewport(f){return this._viewports[f]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(f){return this.camera=f.camera.clone(),this.intensity=f.intensity,this.bias=f.bias,this.radius=f.radius,this.autoUpdate=f.autoUpdate,this.needsUpdate=f.needsUpdate,this.normalBias=f.normalBias,this.blurSamples=f.blurSamples,this.mapSize.copy(f.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let f={};return this.intensity!==1&&(f.intensity=this.intensity),this.bias!==0&&(f.bias=this.bias),this.normalBias!==0&&(f.normalBias=this.normalBias),this.radius!==1&&(f.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(f.mapSize=this.mapSize.toArray()),f.camera=this.camera.toJSON(!1).object,delete f.camera.matrix,f}},Nu=class extends RP{constructor(){super(new j3(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(f){let v=this.camera,e=Fe*2*f.angle*this.focus,P=this.mapSize.width/this.mapSize.height*this.aspect,z=f.distance||v.far;(e!==v.fov||P!==v.aspect||z!==v.far)&&(v.fov=e,v.aspect=P,v.far=z,v.updateProjectionMatrix()),super.updateMatrices(f)}copy(f){return super.copy(f),this.focus=f.focus,this}},f9=class extends P7{constructor(f,v,e=0,P=Math.PI/3,z=0,t=2){super(f,v),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(P3.DEFAULT_UP),this.updateMatrix(),this.target=new P3,this.distance=e,this.angle=P,this.penumbra=z,this.decay=t,this.map=null,this.shadow=new Nu}get power(){return this.intensity*Math.PI}set power(f){this.intensity=f/Math.PI}dispose(){this.shadow.dispose()}copy(f,v){return super.copy(f,v),this.distance=f.distance,this.angle=f.angle,this.penumbra=f.penumbra,this.decay=f.decay,this.target=f.target.clone(),this.shadow=f.shadow.clone(),this}},Mb=new of,Y8=new L,tu=new L,iu=class extends RP{constructor(){super(new j3(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new g(4,2),this._viewportCount=6,this._viewports=[new n3(2,1,1,1),new n3(0,1,1,1),new n3(3,1,1,1),new n3(1,1,1,1),new n3(3,0,1,1),new n3(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(f,v=0){let e=this.camera,P=this.matrix,z=f.distance||e.far;z!==e.far&&(e.far=z,e.updateProjectionMatrix()),Y8.setFromMatrixPosition(f.matrixWorld),e.position.copy(Y8),tu.copy(e.position),tu.add(this._cubeDirections[v]),e.up.copy(this._cubeUps[v]),e.lookAt(tu),e.updateMatrixWorld(),P.makeTranslation(-Y8.x,-Y8.y,-Y8.z),Mb.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mb,e.coordinateSystem,e.reversedDepth)}},v9=class extends P7{constructor(f,v,e=0,P=2){super(f,v),this.isPointLight=!0,this.type="PointLight",this.distance=e,this.decay=P,this.shadow=new iu}get power(){return this.intensity*4*Math.PI}set power(f){this.intensity=f/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(f,v){return super.copy(f,v),this.distance=f.distance,this.decay=f.decay,this.shadow=f.shadow.clone(),this}},n7=class extends Je{constructor(f=-1,v=1,e=1,P=-1,z=.1,t=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=f,this.right=v,this.top=e,this.bottom=P,this.near=z,this.far=t,this.updateProjectionMatrix()}copy(f,v){return super.copy(f,v),this.left=f.left,this.right=f.right,this.top=f.top,this.bottom=f.bottom,this.near=f.near,this.far=f.far,this.zoom=f.zoom,this.view=f.view===null?null:Object.assign({},f.view),this}setViewOffset(f,v,e,P,z,t){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=f,this.view.fullHeight=v,this.view.offsetX=e,this.view.offsetY=P,this.view.width=z,this.view.height=t,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let f=(this.right-this.left)/(2*this.zoom),v=(this.top-this.bottom)/(2*this.zoom),e=(this.right+this.left)/2,P=(this.top+this.bottom)/2,z=e-f,t=e+f,u=P+v,r=P-v;if(this.view!==null&&this.view.enabled){let b=(this.right-this.left)/this.view.fullWidth/this.zoom,X=(this.top-this.bottom)/this.view.fullHeight/this.zoom;z+=b*this.view.offsetX,t=z+b*this.view.width,u-=X*this.view.offsetY,r=u-X*this.view.height}this.projectionMatrix.makeOrthographic(z,t,u,r,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(f){let v=super.toJSON(f);return v.object.zoom=this.zoom,v.object.left=this.left,v.object.right=this.right,v.object.top=this.top,v.object.bottom=this.bottom,v.object.near=this.near,v.object.far=this.far,this.view!==null&&(v.object.view=Object.assign({},this.view)),v}},Zu=class extends RP{constructor(){super(new n7(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},z7=class extends P7{constructor(f,v){super(f,v),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(P3.DEFAULT_UP),this.updateMatrix(),this.target=new P3,this.shadow=new Zu}dispose(){this.shadow.dispose()}copy(f){return super.copy(f),this.target=f.target.clone(),this.shadow=f.shadow.clone(),this}},GP=class extends P7{constructor(f,v){super(f,v),this.isAmbientLight=!0,this.type="AmbientLight"}},kP=class extends P7{constructor(f,v,e=10,P=10){super(f,v),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=e,this.height=P}get power(){return this.intensity*this.width*this.height*Math.PI}set power(f){this.intensity=f/(this.width*this.height*Math.PI)}copy(f){return super.copy(f),this.width=f.width,this.height=f.height,this}toJSON(f){let v=super.toJSON(f);return v.object.width=this.width,v.object.height=this.height,v}},JP=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let f=0;f<9;f++)this.coefficients.push(new L)}set(f){for(let v=0;v<9;v++)this.coefficients[v].copy(f[v]);return this}zero(){for(let f=0;f<9;f++)this.coefficients[f].set(0,0,0);return this}getAt(f,v){let e=f.x,P=f.y,z=f.z,t=this.coefficients;return v.copy(t[0]).multiplyScalar(.282095),v.addScaledVector(t[1],.488603*P),v.addScaledVector(t[2],.488603*z),v.addScaledVector(t[3],.488603*e),v.addScaledVector(t[4],1.092548*(e*P)),v.addScaledVector(t[5],1.092548*(P*z)),v.addScaledVector(t[6],.315392*(3*z*z-1)),v.addScaledVector(t[7],1.092548*(e*z)),v.addScaledVector(t[8],.546274*(e*e-P*P)),v}getIrradianceAt(f,v){let e=f.x,P=f.y,z=f.z,t=this.coefficients;return v.copy(t[0]).multiplyScalar(.886227),v.addScaledVector(t[1],2*.511664*P),v.addScaledVector(t[2],2*.511664*z),v.addScaledVector(t[3],2*.511664*e),v.addScaledVector(t[4],2*.429043*e*P),v.addScaledVector(t[5],2*.429043*P*z),v.addScaledVector(t[6],.743125*z*z-.247708),v.addScaledVector(t[7],2*.429043*e*z),v.addScaledVector(t[8],.429043*(e*e-P*P)),v}add(f){for(let v=0;v<9;v++)this.coefficients[v].add(f.coefficients[v]);return this}addScaledSH(f,v){for(let e=0;e<9;e++)this.coefficients[e].addScaledVector(f.coefficients[e],v);return this}scale(f){for(let v=0;v<9;v++)this.coefficients[v].multiplyScalar(f);return this}lerp(f,v){for(let e=0;e<9;e++)this.coefficients[e].lerp(f.coefficients[e],v);return this}equals(f){for(let v=0;v<9;v++)if(!this.coefficients[v].equals(f.coefficients[v]))return!1;return!0}copy(f){return this.set(f.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(f,v=0){let e=this.coefficients;for(let P=0;P<9;P++)e[P].fromArray(f,v+P*3);return this}toArray(f=[],v=0){let e=this.coefficients;for(let P=0;P<9;P++)e[P].toArray(f,v+P*3);return f}static getBasisAt(f,v){let e=f.x,P=f.y,z=f.z;v[0]=.282095,v[1]=.488603*P,v[2]=.488603*z,v[3]=.488603*e,v[4]=1.092548*e*P,v[5]=1.092548*P*z,v[6]=.315392*(3*z*z-1),v[7]=1.092548*e*z,v[8]=.546274*(e*e-P*P)}},YP=class extends P7{constructor(f=new JP,v=1){super(void 0,v),this.isLightProbe=!0,this.sh=f}copy(f){return super.copy(f),this.sh.copy(f.sh),this}fromJSON(f){return this.intensity=f.intensity,this.sh.fromArray(f.sh),this}toJSON(f){let v=super.toJSON(f);return v.object.sh=this.sh.toArray(),v}},SP=class n extends R3{constructor(f){super(f),this.textures={}}load(f,v,e,P){let z=this,t=new Hv(z.manager);t.setPath(z.path),t.setRequestHeader(z.requestHeader),t.setWithCredentials(z.withCredentials),t.load(f,function(u){try{v(z.parse(JSON.parse(u)))}catch(r){P?P(r):console.error(r),z.manager.itemError(f)}},e,P)}parse(f){let v=this.textures;function e(z){return v[z]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",z),v[z]}let P=this.createMaterialFromType(f.type);if(f.uuid!==void 0&&(P.uuid=f.uuid),f.name!==void 0&&(P.name=f.name),f.color!==void 0&&P.color!==void 0&&P.color.setHex(f.color),f.roughness!==void 0&&(P.roughness=f.roughness),f.metalness!==void 0&&(P.metalness=f.metalness),f.sheen!==void 0&&(P.sheen=f.sheen),f.sheenColor!==void 0&&(P.sheenColor=new bf().setHex(f.sheenColor)),f.sheenRoughness!==void 0&&(P.sheenRoughness=f.sheenRoughness),f.emissive!==void 0&&P.emissive!==void 0&&P.emissive.setHex(f.emissive),f.specular!==void 0&&P.specular!==void 0&&P.specular.setHex(f.specular),f.specularIntensity!==void 0&&(P.specularIntensity=f.specularIntensity),f.specularColor!==void 0&&P.specularColor!==void 0&&P.specularColor.setHex(f.specularColor),f.shininess!==void 0&&(P.shininess=f.shininess),f.clearcoat!==void 0&&(P.clearcoat=f.clearcoat),f.clearcoatRoughness!==void 0&&(P.clearcoatRoughness=f.clearcoatRoughness),f.dispersion!==void 0&&(P.dispersion=f.dispersion),f.iridescence!==void 0&&(P.iridescence=f.iridescence),f.iridescenceIOR!==void 0&&(P.iridescenceIOR=f.iridescenceIOR),f.iridescenceThicknessRange!==void 0&&(P.iridescenceThicknessRange=f.iridescenceThicknessRange),f.transmission!==void 0&&(P.transmission=f.transmission),f.thickness!==void 0&&(P.thickness=f.thickness),f.attenuationDistance!==void 0&&(P.attenuationDistance=f.attenuationDistance),f.attenuationColor!==void 0&&P.attenuationColor!==void 0&&P.attenuationColor.setHex(f.attenuationColor),f.anisotropy!==void 0&&(P.anisotropy=f.anisotropy),f.anisotropyRotation!==void 0&&(P.anisotropyRotation=f.anisotropyRotation),f.fog!==void 0&&(P.fog=f.fog),f.flatShading!==void 0&&(P.flatShading=f.flatShading),f.blending!==void 0&&(P.blending=f.blending),f.combine!==void 0&&(P.combine=f.combine),f.side!==void 0&&(P.side=f.side),f.shadowSide!==void 0&&(P.shadowSide=f.shadowSide),f.opacity!==void 0&&(P.opacity=f.opacity),f.transparent!==void 0&&(P.transparent=f.transparent),f.alphaTest!==void 0&&(P.alphaTest=f.alphaTest),f.alphaHash!==void 0&&(P.alphaHash=f.alphaHash),f.depthFunc!==void 0&&(P.depthFunc=f.depthFunc),f.depthTest!==void 0&&(P.depthTest=f.depthTest),f.depthWrite!==void 0&&(P.depthWrite=f.depthWrite),f.colorWrite!==void 0&&(P.colorWrite=f.colorWrite),f.blendSrc!==void 0&&(P.blendSrc=f.blendSrc),f.blendDst!==void 0&&(P.blendDst=f.blendDst),f.blendEquation!==void 0&&(P.blendEquation=f.blendEquation),f.blendSrcAlpha!==void 0&&(P.blendSrcAlpha=f.blendSrcAlpha),f.blendDstAlpha!==void 0&&(P.blendDstAlpha=f.blendDstAlpha),f.blendEquationAlpha!==void 0&&(P.blendEquationAlpha=f.blendEquationAlpha),f.blendColor!==void 0&&P.blendColor!==void 0&&P.blendColor.setHex(f.blendColor),f.blendAlpha!==void 0&&(P.blendAlpha=f.blendAlpha),f.stencilWriteMask!==void 0&&(P.stencilWriteMask=f.stencilWriteMask),f.stencilFunc!==void 0&&(P.stencilFunc=f.stencilFunc),f.stencilRef!==void 0&&(P.stencilRef=f.stencilRef),f.stencilFuncMask!==void 0&&(P.stencilFuncMask=f.stencilFuncMask),f.stencilFail!==void 0&&(P.stencilFail=f.stencilFail),f.stencilZFail!==void 0&&(P.stencilZFail=f.stencilZFail),f.stencilZPass!==void 0&&(P.stencilZPass=f.stencilZPass),f.stencilWrite!==void 0&&(P.stencilWrite=f.stencilWrite),f.wireframe!==void 0&&(P.wireframe=f.wireframe),f.wireframeLinewidth!==void 0&&(P.wireframeLinewidth=f.wireframeLinewidth),f.wireframeLinecap!==void 0&&(P.wireframeLinecap=f.wireframeLinecap),f.wireframeLinejoin!==void 0&&(P.wireframeLinejoin=f.wireframeLinejoin),f.rotation!==void 0&&(P.rotation=f.rotation),f.linewidth!==void 0&&(P.linewidth=f.linewidth),f.dashSize!==void 0&&(P.dashSize=f.dashSize),f.gapSize!==void 0&&(P.gapSize=f.gapSize),f.scale!==void 0&&(P.scale=f.scale),f.polygonOffset!==void 0&&(P.polygonOffset=f.polygonOffset),f.polygonOffsetFactor!==void 0&&(P.polygonOffsetFactor=f.polygonOffsetFactor),f.polygonOffsetUnits!==void 0&&(P.polygonOffsetUnits=f.polygonOffsetUnits),f.dithering!==void 0&&(P.dithering=f.dithering),f.alphaToCoverage!==void 0&&(P.alphaToCoverage=f.alphaToCoverage),f.premultipliedAlpha!==void 0&&(P.premultipliedAlpha=f.premultipliedAlpha),f.forceSinglePass!==void 0&&(P.forceSinglePass=f.forceSinglePass),f.visible!==void 0&&(P.visible=f.visible),f.toneMapped!==void 0&&(P.toneMapped=f.toneMapped),f.userData!==void 0&&(P.userData=f.userData),f.vertexColors!==void 0&&(typeof f.vertexColors=="number"?P.vertexColors=f.vertexColors>0:P.vertexColors=f.vertexColors),f.uniforms!==void 0)for(let z in f.uniforms){let t=f.uniforms[z];switch(P.uniforms[z]={},t.type){case"t":P.uniforms[z].value=e(t.value);break;case"c":P.uniforms[z].value=new bf().setHex(t.value);break;case"v2":P.uniforms[z].value=new g().fromArray(t.value);break;case"v3":P.uniforms[z].value=new L().fromArray(t.value);break;case"v4":P.uniforms[z].value=new n3().fromArray(t.value);break;case"m3":P.uniforms[z].value=new Kf().fromArray(t.value);break;case"m4":P.uniforms[z].value=new of().fromArray(t.value);break;default:P.uniforms[z].value=t.value}}if(f.defines!==void 0&&(P.defines=f.defines),f.vertexShader!==void 0&&(P.vertexShader=f.vertexShader),f.fragmentShader!==void 0&&(P.fragmentShader=f.fragmentShader),f.glslVersion!==void 0&&(P.glslVersion=f.glslVersion),f.extensions!==void 0)for(let z in f.extensions)P.extensions[z]=f.extensions[z];if(f.lights!==void 0&&(P.lights=f.lights),f.clipping!==void 0&&(P.clipping=f.clipping),f.size!==void 0&&(P.size=f.size),f.sizeAttenuation!==void 0&&(P.sizeAttenuation=f.sizeAttenuation),f.map!==void 0&&(P.map=e(f.map)),f.matcap!==void 0&&(P.matcap=e(f.matcap)),f.alphaMap!==void 0&&(P.alphaMap=e(f.alphaMap)),f.bumpMap!==void 0&&(P.bumpMap=e(f.bumpMap)),f.bumpScale!==void 0&&(P.bumpScale=f.bumpScale),f.normalMap!==void 0&&(P.normalMap=e(f.normalMap)),f.normalMapType!==void 0&&(P.normalMapType=f.normalMapType),f.normalScale!==void 0){let z=f.normalScale;Array.isArray(z)===!1&&(z=[z,z]),P.normalScale=new g().fromArray(z)}return f.displacementMap!==void 0&&(P.displacementMap=e(f.displacementMap)),f.displacementScale!==void 0&&(P.displacementScale=f.displacementScale),f.displacementBias!==void 0&&(P.displacementBias=f.displacementBias),f.roughnessMap!==void 0&&(P.roughnessMap=e(f.roughnessMap)),f.metalnessMap!==void 0&&(P.metalnessMap=e(f.metalnessMap)),f.emissiveMap!==void 0&&(P.emissiveMap=e(f.emissiveMap)),f.emissiveIntensity!==void 0&&(P.emissiveIntensity=f.emissiveIntensity),f.specularMap!==void 0&&(P.specularMap=e(f.specularMap)),f.specularIntensityMap!==void 0&&(P.specularIntensityMap=e(f.specularIntensityMap)),f.specularColorMap!==void 0&&(P.specularColorMap=e(f.specularColorMap)),f.envMap!==void 0&&(P.envMap=e(f.envMap)),f.envMapRotation!==void 0&&P.envMapRotation.fromArray(f.envMapRotation),f.envMapIntensity!==void 0&&(P.envMapIntensity=f.envMapIntensity),f.reflectivity!==void 0&&(P.reflectivity=f.reflectivity),f.refractionRatio!==void 0&&(P.refractionRatio=f.refractionRatio),f.lightMap!==void 0&&(P.lightMap=e(f.lightMap)),f.lightMapIntensity!==void 0&&(P.lightMapIntensity=f.lightMapIntensity),f.aoMap!==void 0&&(P.aoMap=e(f.aoMap)),f.aoMapIntensity!==void 0&&(P.aoMapIntensity=f.aoMapIntensity),f.gradientMap!==void 0&&(P.gradientMap=e(f.gradientMap)),f.clearcoatMap!==void 0&&(P.clearcoatMap=e(f.clearcoatMap)),f.clearcoatRoughnessMap!==void 0&&(P.clearcoatRoughnessMap=e(f.clearcoatRoughnessMap)),f.clearcoatNormalMap!==void 0&&(P.clearcoatNormalMap=e(f.clearcoatNormalMap)),f.clearcoatNormalScale!==void 0&&(P.clearcoatNormalScale=new g().fromArray(f.clearcoatNormalScale)),f.iridescenceMap!==void 0&&(P.iridescenceMap=e(f.iridescenceMap)),f.iridescenceThicknessMap!==void 0&&(P.iridescenceThicknessMap=e(f.iridescenceThicknessMap)),f.transmissionMap!==void 0&&(P.transmissionMap=e(f.transmissionMap)),f.thicknessMap!==void 0&&(P.thicknessMap=e(f.thicknessMap)),f.anisotropyMap!==void 0&&(P.anisotropyMap=e(f.anisotropyMap)),f.sheenColorMap!==void 0&&(P.sheenColorMap=e(f.sheenColorMap)),f.sheenRoughnessMap!==void 0&&(P.sheenRoughnessMap=e(f.sheenRoughnessMap)),P}setTextures(f){return this.textures=f,this}createMaterialFromType(f){return n.createMaterialFromType(f)}static createMaterialFromType(f){let v={ShadowMaterial:lP,SpriteMaterial:E9,RawShaderMaterial:LP,ShaderMaterial:Q3,PointsMaterial:te,MeshPhysicalMaterial:F3,MeshStandardMaterial:ev,MeshPhongMaterial:WP,MeshToonMaterial:hP,MeshNormalMaterial:wP,MeshLambertMaterial:VP,MeshDepthMaterial:z8,MeshDistanceMaterial:t8,MeshBasicMaterial:u3,MeshMatcapMaterial:DP,LineDashedMaterial:qP,LineBasicMaterial:M3,Material:L3};return new v[f]}},Sv=class{static extractUrlBase(f){let v=f.lastIndexOf("/");return v===-1?"./":f.slice(0,v+1)}static resolveURL(f,v){return typeof f!="string"||f===""?"":(/^https?:\/\//i.test(v)&&/^\//.test(f)&&(v=v.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(f)||/^data:.*,.*$/i.test(f)||/^blob:.*$/i.test(f)?f:v+f)}},KP=class extends kf{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(f){return super.copy(f),this.instanceCount=f.instanceCount,this}toJSON(){let f=super.toJSON();return f.instanceCount=this.instanceCount,f.isInstancedBufferGeometry=!0,f}},UP=class extends R3{constructor(f){super(f)}load(f,v,e,P){let z=this,t=new Hv(z.manager);t.setPath(z.path),t.setRequestHeader(z.requestHeader),t.setWithCredentials(z.withCredentials),t.load(f,function(u){try{v(z.parse(JSON.parse(u)))}catch(r){P?P(r):console.error(r),z.manager.itemError(f)}},e,P)}parse(f){let v={},e={};function P(x,c){if(v[c]!==void 0)return v[c];let j=x.interleavedBuffers[c],s=z(x,j.buffer),i=R9(j.type,s),N=new H7(i,j.stride);return N.uuid=j.uuid,v[c]=N,N}function z(x,c){if(e[c]!==void 0)return e[c];let j=x.arrayBuffers[c],s=new Uint32Array(j).buffer;return e[c]=s,s}let t=f.isInstancedBufferGeometry?new KP:new kf,u=f.data.index;if(u!==void 0){let x=R9(u.type,u.array);t.setIndex(new Af(x,1))}let r=f.data.attributes;for(let x in r){let c=r[x],a;if(c.isInterleavedBufferAttribute){let j=P(f.data,c.data);a=new $v(j,c.itemSize,c.offset,c.normalized)}else{let j=R9(c.type,c.array),s=c.isInstancedBufferAttribute?Jv:Af;a=new s(j,c.itemSize,c.normalized)}c.name!==void 0&&(a.name=c.name),c.usage!==void 0&&a.setUsage(c.usage),t.setAttribute(x,a)}let b=f.data.morphAttributes;if(b)for(let x in b){let c=b[x],a=[];for(let j=0,s=c.length;j<s;j++){let i=c[j],N;if(i.isInterleavedBufferAttribute){let m=P(f.data,i.data);N=new $v(m,i.itemSize,i.offset,i.normalized)}else{let m=R9(i.type,i.array);N=new Af(m,i.itemSize,i.normalized)}i.name!==void 0&&(N.name=i.name),a.push(N)}t.morphAttributes[x]=a}f.data.morphTargetsRelative&&(t.morphTargetsRelative=!0);let d=f.data.groups||f.data.drawcalls||f.data.offsets;if(d!==void 0)for(let x=0,c=d.length;x!==c;++x){let a=d[x];t.addGroup(a.start,a.count,a.materialIndex)}let H=f.data.boundingSphere;return H!==void 0&&(t.boundingSphere=new w3().fromJSON(H)),f.name&&(t.name=f.name),f.userData&&(t.userData=f.userData),t}},X5=class extends R3{constructor(f){super(f)}load(f,v,e,P){let z=this,t=this.path===""?Sv.extractUrlBase(f):this.path;this.resourcePath=this.resourcePath||t;let u=new Hv(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(f,function(r){let b=null;try{b=JSON.parse(r)}catch(d){P!==void 0&&P(d),console.error("THREE:ObjectLoader: Can't parse "+f+".",d.message);return}let X=b.metadata;if(X===void 0||X.type===void 0||X.type.toLowerCase()==="geometry"){P!==void 0&&P(new Error("THREE.ObjectLoader: Can't load "+f)),console.error("THREE.ObjectLoader: Can't load "+f);return}z.parse(b,v)},e,P)}async loadAsync(f,v){let e=this,P=this.path===""?Sv.extractUrlBase(f):this.path;this.resourcePath=this.resourcePath||P;let z=new Hv(this.manager);z.setPath(this.path),z.setRequestHeader(this.requestHeader),z.setWithCredentials(this.withCredentials);let t=await z.loadAsync(f,v),u=JSON.parse(t),r=u.metadata;if(r===void 0||r.type===void 0||r.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+f);return await e.parseAsync(u)}parse(f,v){let e=this.parseAnimations(f.animations),P=this.parseShapes(f.shapes),z=this.parseGeometries(f.geometries,P),t=this.parseImages(f.images,function(){v!==void 0&&v(b)}),u=this.parseTextures(f.textures,t),r=this.parseMaterials(f.materials,u),b=this.parseObject(f.object,z,r,u,e),X=this.parseSkeletons(f.skeletons,b);if(this.bindSkeletons(b,X),this.bindLightTargets(b),v!==void 0){let d=!1;for(let H in t)if(t[H].data instanceof HTMLImageElement){d=!0;break}d===!1&&v(b)}return b}async parseAsync(f){let v=this.parseAnimations(f.animations),e=this.parseShapes(f.shapes),P=this.parseGeometries(f.geometries,e),z=await this.parseImagesAsync(f.images),t=this.parseTextures(f.textures,z),u=this.parseMaterials(f.materials,t),r=this.parseObject(f.object,P,u,t,v),b=this.parseSkeletons(f.skeletons,r);return this.bindSkeletons(r,b),this.bindLightTargets(r),r}parseShapes(f){let v={};if(f!==void 0)for(let e=0,P=f.length;e<P;e++){let z=new d7().fromJSON(f[e]);v[z.uuid]=z}return v}parseSkeletons(f,v){let e={},P={};if(v.traverse(function(z){z.isBone&&(P[z.uuid]=z)}),f!==void 0)for(let z=0,t=f.length;z<t;z++){let u=new Ue().fromJSON(f[z],P);e[u.uuid]=u}return e}parseGeometries(f,v){let e={};if(f!==void 0){let P=new UP;for(let z=0,t=f.length;z<t;z++){let u,r=f[z];switch(r.type){case"BufferGeometry":case"InstancedBufferGeometry":u=P.parse(r);break;default:r.type in Db?u=Db[r.type].fromJSON(r,v):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${r.type}"`)}u.uuid=r.uuid,r.name!==void 0&&(u.name=r.name),r.userData!==void 0&&(u.userData=r.userData),e[r.uuid]=u}}return e}parseMaterials(f,v){let e={},P={};if(f!==void 0){let z=new SP;z.setTextures(v);for(let t=0,u=f.length;t<u;t++){let r=f[t];e[r.uuid]===void 0&&(e[r.uuid]=z.parse(r)),P[r.uuid]=e[r.uuid]}}return P}parseAnimations(f){let v={};if(f!==void 0)for(let e=0;e<f.length;e++){let P=f[e],z=j7.parse(P);v[z.uuid]=z}return v}parseImages(f,v){let e=this,P={},z;function t(r){return e.manager.itemStart(r),z.load(r,function(){e.manager.itemEnd(r)},void 0,function(){e.manager.itemError(r),e.manager.itemEnd(r)})}function u(r){if(typeof r=="string"){let b=r,X=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(b)?b:e.resourcePath+b;return t(X)}else return r.data?{data:R9(r.type,r.data),width:r.width,height:r.height}:null}if(f!==void 0&&f.length>0){let r=new b8(v);z=new re(r),z.setCrossOrigin(this.crossOrigin);for(let b=0,X=f.length;b<X;b++){let d=f[b],H=d.url;if(Array.isArray(H)){let x=[];for(let c=0,a=H.length;c<a;c++){let j=H[c],s=u(j);s!==null&&(s instanceof HTMLImageElement?x.push(s):x.push(new rv(s.data,s.width,s.height)))}P[d.uuid]=new Qv(x)}else{let x=u(d.url);P[d.uuid]=new Qv(x)}}}return P}async parseImagesAsync(f){let v=this,e={},P;async function z(t){if(typeof t=="string"){let u=t,r=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(u)?u:v.resourcePath+u;return await P.loadAsync(r)}else return t.data?{data:R9(t.type,t.data),width:t.width,height:t.height}:null}if(f!==void 0&&f.length>0){P=new re(this.manager),P.setCrossOrigin(this.crossOrigin);for(let t=0,u=f.length;t<u;t++){let r=f[t],b=r.url;if(Array.isArray(b)){let X=[];for(let d=0,H=b.length;d<H;d++){let x=b[d],c=await z(x);c!==null&&(c instanceof HTMLImageElement?X.push(c):X.push(new rv(c.data,c.width,c.height)))}e[r.uuid]=new Qv(X)}else{let X=await z(r.url);e[r.uuid]=new Qv(X)}}}return e}parseTextures(f,v){function e(z,t){return typeof z=="number"?z:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",z),t[z])}let P={};if(f!==void 0)for(let z=0,t=f.length;z<t;z++){let u=f[z];u.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',u.uuid),v[u.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",u.image);let r=v[u.image],b=r.data,X;Array.isArray(b)?(X=new ne,b.length===6&&(X.needsUpdate=!0)):(b&&b.data?X=new rv:X=new T3,b&&(X.needsUpdate=!0)),X.source=r,X.uuid=u.uuid,u.name!==void 0&&(X.name=u.name),u.mapping!==void 0&&(X.mapping=e(u.mapping,WH)),u.channel!==void 0&&(X.channel=u.channel),u.offset!==void 0&&X.offset.fromArray(u.offset),u.repeat!==void 0&&X.repeat.fromArray(u.repeat),u.center!==void 0&&X.center.fromArray(u.center),u.rotation!==void 0&&(X.rotation=u.rotation),u.wrap!==void 0&&(X.wrapS=e(u.wrap[0],Fb),X.wrapT=e(u.wrap[1],Fb)),u.format!==void 0&&(X.format=u.format),u.internalFormat!==void 0&&(X.internalFormat=u.internalFormat),u.type!==void 0&&(X.type=u.type),u.colorSpace!==void 0&&(X.colorSpace=u.colorSpace),u.minFilter!==void 0&&(X.minFilter=e(u.minFilter,Rb)),u.magFilter!==void 0&&(X.magFilter=e(u.magFilter,Rb)),u.anisotropy!==void 0&&(X.anisotropy=u.anisotropy),u.flipY!==void 0&&(X.flipY=u.flipY),u.generateMipmaps!==void 0&&(X.generateMipmaps=u.generateMipmaps),u.premultiplyAlpha!==void 0&&(X.premultiplyAlpha=u.premultiplyAlpha),u.unpackAlignment!==void 0&&(X.unpackAlignment=u.unpackAlignment),u.compareFunction!==void 0&&(X.compareFunction=u.compareFunction),u.userData!==void 0&&(X.userData=u.userData),P[u.uuid]=X}return P}parseObject(f,v,e,P,z){let t;function u(H){return v[H]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",H),v[H]}function r(H){if(H!==void 0){if(Array.isArray(H)){let x=[];for(let c=0,a=H.length;c<a;c++){let j=H[c];e[j]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",j),x.push(e[j])}return x}return e[H]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",H),e[H]}}function b(H){return P[H]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",H),P[H]}let X,d;switch(f.type){case"Scene":t=new kv,f.background!==void 0&&(Number.isInteger(f.background)?t.background=new bf(f.background):t.background=b(f.background)),f.environment!==void 0&&(t.environment=b(f.environment)),f.fog!==void 0&&(f.fog.type==="Fog"?t.fog=new Se(f.fog.color,f.fog.near,f.fog.far):f.fog.type==="FogExp2"&&(t.fog=new $8(f.fog.color,f.fog.density)),f.fog.name!==""&&(t.fog.name=f.fog.name)),f.backgroundBlurriness!==void 0&&(t.backgroundBlurriness=f.backgroundBlurriness),f.backgroundIntensity!==void 0&&(t.backgroundIntensity=f.backgroundIntensity),f.backgroundRotation!==void 0&&t.backgroundRotation.fromArray(f.backgroundRotation),f.environmentIntensity!==void 0&&(t.environmentIntensity=f.environmentIntensity),f.environmentRotation!==void 0&&t.environmentRotation.fromArray(f.environmentRotation);break;case"PerspectiveCamera":t=new j3(f.fov,f.aspect,f.near,f.far),f.focus!==void 0&&(t.focus=f.focus),f.zoom!==void 0&&(t.zoom=f.zoom),f.filmGauge!==void 0&&(t.filmGauge=f.filmGauge),f.filmOffset!==void 0&&(t.filmOffset=f.filmOffset),f.view!==void 0&&(t.view=Object.assign({},f.view));break;case"OrthographicCamera":t=new n7(f.left,f.right,f.top,f.bottom,f.near,f.far),f.zoom!==void 0&&(t.zoom=f.zoom),f.view!==void 0&&(t.view=Object.assign({},f.view));break;case"AmbientLight":t=new GP(f.color,f.intensity);break;case"DirectionalLight":t=new z7(f.color,f.intensity),t.target=f.target||"";break;case"PointLight":t=new v9(f.color,f.intensity,f.distance,f.decay);break;case"RectAreaLight":t=new kP(f.color,f.intensity,f.width,f.height);break;case"SpotLight":t=new f9(f.color,f.intensity,f.distance,f.angle,f.penumbra,f.decay),t.target=f.target||"";break;case"HemisphereLight":t=new $e(f.color,f.groundColor,f.intensity);break;case"LightProbe":t=new YP().fromJSON(f);break;case"SkinnedMesh":X=u(f.geometry),d=r(f.material),t=new Ke(X,d),f.bindMode!==void 0&&(t.bindMode=f.bindMode),f.bindMatrix!==void 0&&t.bindMatrix.fromArray(f.bindMatrix),f.skeleton!==void 0&&(t.skeleton=f.skeleton);break;case"Mesh":X=u(f.geometry),d=r(f.material),t=new _f(X,d);break;case"InstancedMesh":X=u(f.geometry),d=r(f.material);let H=f.count,x=f.instanceMatrix,c=f.instanceColor;t=new Ie(X,d,H),t.instanceMatrix=new Jv(new Float32Array(x.array),16),c!==void 0&&(t.instanceColor=new Jv(new Float32Array(c.array),c.itemSize));break;case"BatchedMesh":X=u(f.geometry),d=r(f.material),t=new PP(f.maxInstanceCount,f.maxVertexCount,f.maxIndexCount,d),t.geometry=X,t.perObjectFrustumCulled=f.perObjectFrustumCulled,t.sortObjects=f.sortObjects,t._drawRanges=f.drawRanges,t._reservedRanges=f.reservedRanges,t._geometryInfo=f.geometryInfo.map(a=>{let j=null,s=null;return a.boundingBox!==void 0&&(j=new D3().fromJSON(a.boundingBox)),a.boundingSphere!==void 0&&(s=new w3().fromJSON(a.boundingSphere)),{...a,boundingBox:j,boundingSphere:s}}),t._instanceInfo=f.instanceInfo,t._availableInstanceIds=f._availableInstanceIds,t._availableGeometryIds=f._availableGeometryIds,t._nextIndexStart=f.nextIndexStart,t._nextVertexStart=f.nextVertexStart,t._geometryCount=f.geometryCount,t._maxInstanceCount=f.maxInstanceCount,t._maxVertexCount=f.maxVertexCount,t._maxIndexCount=f.maxIndexCount,t._geometryInitialized=f.geometryInitialized,t._matricesTexture=b(f.matricesTexture.uuid),t._indirectTexture=b(f.indirectTexture.uuid),f.colorsTexture!==void 0&&(t._colorsTexture=b(f.colorsTexture.uuid)),f.boundingSphere!==void 0&&(t.boundingSphere=new w3().fromJSON(f.boundingSphere)),f.boundingBox!==void 0&&(t.boundingBox=new D3().fromJSON(f.boundingBox));break;case"LOD":t=new vP;break;case"Line":t=new wv(u(f.geometry),r(f.material));break;case"LineLoop":t=new ge(u(f.geometry),r(f.material));break;case"LineSegments":t=new bv(u(f.geometry),r(f.material));break;case"PointCloud":case"Points":t=new Ee(u(f.geometry),r(f.material));break;case"Sprite":t=new fP(r(f.material));break;case"Group":t=new fv;break;case"Bone":t=new ze;break;default:t=new P3}if(t.uuid=f.uuid,f.name!==void 0&&(t.name=f.name),f.matrix!==void 0?(t.matrix.fromArray(f.matrix),f.matrixAutoUpdate!==void 0&&(t.matrixAutoUpdate=f.matrixAutoUpdate),t.matrixAutoUpdate&&t.matrix.decompose(t.position,t.quaternion,t.scale)):(f.position!==void 0&&t.position.fromArray(f.position),f.rotation!==void 0&&t.rotation.fromArray(f.rotation),f.quaternion!==void 0&&t.quaternion.fromArray(f.quaternion),f.scale!==void 0&&t.scale.fromArray(f.scale)),f.up!==void 0&&t.up.fromArray(f.up),f.castShadow!==void 0&&(t.castShadow=f.castShadow),f.receiveShadow!==void 0&&(t.receiveShadow=f.receiveShadow),f.shadow&&(f.shadow.intensity!==void 0&&(t.shadow.intensity=f.shadow.intensity),f.shadow.bias!==void 0&&(t.shadow.bias=f.shadow.bias),f.shadow.normalBias!==void 0&&(t.shadow.normalBias=f.shadow.normalBias),f.shadow.radius!==void 0&&(t.shadow.radius=f.shadow.radius),f.shadow.mapSize!==void 0&&t.shadow.mapSize.fromArray(f.shadow.mapSize),f.shadow.camera!==void 0&&(t.shadow.camera=this.parseObject(f.shadow.camera))),f.visible!==void 0&&(t.visible=f.visible),f.frustumCulled!==void 0&&(t.frustumCulled=f.frustumCulled),f.renderOrder!==void 0&&(t.renderOrder=f.renderOrder),f.userData!==void 0&&(t.userData=f.userData),f.layers!==void 0&&(t.layers.mask=f.layers),f.children!==void 0){let H=f.children;for(let x=0;x<H.length;x++)t.add(this.parseObject(H[x],v,e,P,z))}if(f.animations!==void 0){let H=f.animations;for(let x=0;x<H.length;x++){let c=H[x];t.animations.push(z[c])}}if(f.type==="LOD"){f.autoUpdate!==void 0&&(t.autoUpdate=f.autoUpdate);let H=f.levels;for(let x=0;x<H.length;x++){let c=H[x],a=t.getObjectByProperty("uuid",c.object);a!==void 0&&t.addLevel(a,c.distance,c.hysteresis)}}return t}bindSkeletons(f,v){Object.keys(v).length!==0&&f.traverse(function(e){if(e.isSkinnedMesh===!0&&e.skeleton!==void 0){let P=v[e.skeleton];P===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",e.skeleton):e.bind(P,e.bindMatrix)}})}bindLightTargets(f){f.traverse(function(v){if(v.isDirectionalLight||v.isSpotLight){let e=v.target,P=f.getObjectByProperty("uuid",e);P!==void 0?v.target=P:v.target=new P3}})}},WH={UVMapping:zn,CubeReflectionMapping:N7,CubeRefractionMapping:R7,EquirectangularReflectionMapping:be,EquirectangularRefractionMapping:s8,CubeUVReflectionMapping:P9},Fb={RepeatWrapping:Gv,ClampToEdgeWrapping:uv,MirroredRepeatWrapping:fe},Rb={NearestFilter:q3,NearestMipmapNearestFilter:c8,NearestMipmapLinearFilter:G7,LinearFilter:Z3,LinearMipmapNearestFilter:Xe,LinearMipmapLinearFilter:iv},uu=new WeakMap,X8=class extends R3{constructor(f){super(f),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(f){return this.options=f,this}load(f,v,e,P){f===void 0&&(f=""),this.path!==void 0&&(f=this.path+f),f=this.manager.resolveURL(f);let z=this,t=Av.get(`image-bitmap:${f}`);if(t!==void 0){if(z.manager.itemStart(f),t.then){t.then(b=>{if(uu.has(t)===!0)P&&P(uu.get(t)),z.manager.itemError(f),z.manager.itemEnd(f);else return v&&v(b),z.manager.itemEnd(f),b});return}return setTimeout(function(){v&&v(t),z.manager.itemEnd(f)},0),t}let u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader,u.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let r=fetch(f,u).then(function(b){return b.blob()}).then(function(b){return createImageBitmap(b,Object.assign(z.options,{colorSpaceConversion:"none"}))}).then(function(b){return Av.add(`image-bitmap:${f}`,b),v&&v(b),z.manager.itemEnd(f),b}).catch(function(b){P&&P(b),uu.set(r,b),Av.remove(`image-bitmap:${f}`),z.manager.itemError(f),z.manager.itemEnd(f)});Av.add(`image-bitmap:${f}`,r),z.manager.itemStart(f)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},oz,d8=class{static getContext(){return oz===void 0&&(oz=new(window.AudioContext||window.webkitAudioContext)),oz}static setContext(f){oz=f}},d5=class extends R3{constructor(f){super(f)}load(f,v,e,P){let z=this,t=new Hv(this.manager);t.setResponseType("arraybuffer"),t.setPath(this.path),t.setRequestHeader(this.requestHeader),t.setWithCredentials(this.withCredentials),t.load(f,function(r){try{let b=r.slice(0);d8.getContext().decodeAudioData(b,function(d){v(d)}).catch(u)}catch(b){u(b)}},e,P);function u(r){P?P(r):console.error(r),z.manager.itemError(f)}}},Gb=new of,kb=new of,le=new of,H5=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new j3,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new j3,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(f){let v=this._cache;if(v.focus!==f.focus||v.fov!==f.fov||v.aspect!==f.aspect*this.aspect||v.near!==f.near||v.far!==f.far||v.zoom!==f.zoom||v.eyeSep!==this.eyeSep){v.focus=f.focus,v.fov=f.fov,v.aspect=f.aspect*this.aspect,v.near=f.near,v.far=f.far,v.zoom=f.zoom,v.eyeSep=this.eyeSep,le.copy(f.projectionMatrix);let P=v.eyeSep/2,z=P*v.near/v.focus,t=v.near*Math.tan(qe*v.fov*.5)/v.zoom,u,r;kb.elements[12]=-P,Gb.elements[12]=P,u=-t*v.aspect+z,r=t*v.aspect+z,le.elements[0]=2*v.near/(r-u),le.elements[8]=(r+u)/(r-u),this.cameraL.projectionMatrix.copy(le),u=-t*v.aspect-z,r=t*v.aspect-z,le.elements[0]=2*v.near/(r-u),le.elements[8]=(r+u)/(r-u),this.cameraR.projectionMatrix.copy(le)}this.cameraL.matrixWorld.copy(f.matrixWorld).multiply(kb),this.cameraR.matrixWorld.copy(f.matrixWorld).multiply(Gb)}},IP=class extends j3{constructor(f=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=f}},gP=class{constructor(f=!0){this.autoStart=f,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let f=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let v=performance.now();f=(v-this.oldTime)/1e3,this.oldTime=v,this.elapsedTime+=f}return f}},Le=new L,ru=new l3,hH=new L,We=new L,he=new L,x5=class extends P3{constructor(){super(),this.type="AudioListener",this.context=d8.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new gP}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(f){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=f,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(f){return this.gain.gain.setTargetAtTime(f,this.context.currentTime,.01),this}updateMatrixWorld(f){super.updateMatrixWorld(f);let v=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Le,ru,hH),We.set(0,0,-1).applyQuaternion(ru),he.set(0,1,0).applyQuaternion(ru),v.positionX){let e=this.context.currentTime+this.timeDelta;v.positionX.linearRampToValueAtTime(Le.x,e),v.positionY.linearRampToValueAtTime(Le.y,e),v.positionZ.linearRampToValueAtTime(Le.z,e),v.forwardX.linearRampToValueAtTime(We.x,e),v.forwardY.linearRampToValueAtTime(We.y,e),v.forwardZ.linearRampToValueAtTime(We.z,e),v.upX.linearRampToValueAtTime(he.x,e),v.upY.linearRampToValueAtTime(he.y,e),v.upZ.linearRampToValueAtTime(he.z,e)}else v.setPosition(Le.x,Le.y,Le.z),v.setOrientation(We.x,We.y,We.z,he.x,he.y,he.z)}},EP=class extends P3{constructor(f){super(),this.type="Audio",this.listener=f,this.context=f.context,this.gain=this.context.createGain(),this.gain.connect(f.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(f){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=f,this.connect(),this}setMediaElementSource(f){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(f),this.connect(),this}setMediaStreamSource(f){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(f),this.connect(),this}setBuffer(f){return this.buffer=f,this.sourceType="buffer",this.autoplay&&this.play(),this}play(f=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+f;let v=this.context.createBufferSource();return v.buffer=this.buffer,v.loop=this.loop,v.loopStart=this.loopStart,v.loopEnd=this.loopEnd,v.onended=this.onEnded.bind(this),v.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=v,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(f=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+f),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let f=1,v=this.filters.length;f<v;f++)this.filters[f-1].connect(this.filters[f]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let f=1,v=this.filters.length;f<v;f++)this.filters[f-1].disconnect(this.filters[f]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(f){return f||(f=[]),this._connected===!0?(this.disconnect(),this.filters=f.slice(),this.connect()):this.filters=f.slice(),this}setDetune(f){return this.detune=f,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(f){return this.setFilters(f?[f]:[])}setPlaybackRate(f){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=f,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(f){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=f,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(f){return this.loopStart=f,this}setLoopEnd(f){return this.loopEnd=f,this}getVolume(){return this.gain.gain.value}setVolume(f){return this.gain.gain.setTargetAtTime(f,this.context.currentTime,.01),this}copy(f,v){return super.copy(f,v),f.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=f.autoplay,this.buffer=f.buffer,this.detune=f.detune,this.loop=f.loop,this.loopStart=f.loopStart,this.loopEnd=f.loopEnd,this.offset=f.offset,this.duration=f.duration,this.playbackRate=f.playbackRate,this.hasPlaybackControl=f.hasPlaybackControl,this.sourceType=f.sourceType,this.filters=f.filters.slice(),this)}clone(f){return new this.constructor(this.listener).copy(this,f)}},we=new L,Jb=new l3,wH=new L,Ve=new L,s5=class extends EP{constructor(f){super(f),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(f){return this.panner.refDistance=f,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(f){return this.panner.rolloffFactor=f,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(f){return this.panner.distanceModel=f,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(f){return this.panner.maxDistance=f,this}setDirectionalCone(f,v,e){return this.panner.coneInnerAngle=f,this.panner.coneOuterAngle=v,this.panner.coneOuterGain=e,this}updateMatrixWorld(f){if(super.updateMatrixWorld(f),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(we,Jb,wH),Ve.set(0,0,1).applyQuaternion(Jb);let v=this.panner;if(v.positionX){let e=this.context.currentTime+this.listener.timeDelta;v.positionX.linearRampToValueAtTime(we.x,e),v.positionY.linearRampToValueAtTime(we.y,e),v.positionZ.linearRampToValueAtTime(we.z,e),v.orientationX.linearRampToValueAtTime(Ve.x,e),v.orientationY.linearRampToValueAtTime(Ve.y,e),v.orientationZ.linearRampToValueAtTime(Ve.z,e)}else v.setPosition(we.x,we.y,we.z),v.setOrientation(Ve.x,Ve.y,Ve.z)}},c5=class{constructor(f,v=2048){this.analyser=f.context.createAnalyser(),this.analyser.fftSize=v,this.data=new Uint8Array(this.analyser.frequencyBinCount),f.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let f=0,v=this.getFrequencyData();for(let e=0;e<v.length;e++)f+=v[e];return f/v.length}},BP=class{constructor(f,v,e){this.binding=f,this.valueSize=e;let P,z,t;switch(v){case"quaternion":P=this._slerp,z=this._slerpAdditive,t=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(e*6),this._workIndex=5;break;case"string":case"bool":P=this._select,z=this._select,t=this._setAdditiveIdentityOther,this.buffer=new Array(e*5);break;default:P=this._lerp,z=this._lerpAdditive,t=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(e*5)}this._mixBufferRegion=P,this._mixBufferRegionAdditive=z,this._setIdentity=t,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(f,v){let e=this.buffer,P=this.valueSize,z=f*P+P,t=this.cumulativeWeight;if(t===0){for(let u=0;u!==P;++u)e[z+u]=e[u];t=v}else{t+=v;let u=v/t;this._mixBufferRegion(e,z,0,u,P)}this.cumulativeWeight=t}accumulateAdditive(f){let v=this.buffer,e=this.valueSize,P=e*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(v,P,0,f,e),this.cumulativeWeightAdditive+=f}apply(f){let v=this.valueSize,e=this.buffer,P=f*v+v,z=this.cumulativeWeight,t=this.cumulativeWeightAdditive,u=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,z<1){let r=v*this._origIndex;this._mixBufferRegion(e,P,r,1-z,v)}t>0&&this._mixBufferRegionAdditive(e,P,this._addIndex*v,1,v);for(let r=v,b=v+v;r!==b;++r)if(e[r]!==e[r+v]){u.setValue(e,P);break}}saveOriginalState(){let f=this.binding,v=this.buffer,e=this.valueSize,P=e*this._origIndex;f.getValue(v,P);for(let z=e,t=P;z!==t;++z)v[z]=v[P+z%e];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let f=this.valueSize*3;this.binding.setValue(this.buffer,f)}_setAdditiveIdentityNumeric(){let f=this._addIndex*this.valueSize,v=f+this.valueSize;for(let e=f;e<v;e++)this.buffer[e]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let f=this._origIndex*this.valueSize,v=this._addIndex*this.valueSize;for(let e=0;e<this.valueSize;e++)this.buffer[v+e]=this.buffer[f+e]}_select(f,v,e,P,z){if(P>=.5)for(let t=0;t!==z;++t)f[v+t]=f[e+t]}_slerp(f,v,e,P){l3.slerpFlat(f,v,f,v,f,e,P)}_slerpAdditive(f,v,e,P,z){let t=this._workIndex*z;l3.multiplyQuaternionsFlat(f,t,f,v,f,e),l3.slerpFlat(f,v,f,v,f,t,P)}_lerp(f,v,e,P,z){let t=1-P;for(let u=0;u!==z;++u){let r=v+u;f[r]=f[r]*t+f[e+u]*P}}_lerpAdditive(f,v,e,P,z){for(let t=0;t!==z;++t){let u=v+t;f[u]=f[u]+f[e+t]*P}}},Zr="\\[\\]\\.:\\/",VH=new RegExp("["+Zr+"]","g"),Tr="[^"+Zr+"]",DH="[^"+Zr.replace("\\.","")+"]",qH=/((?:WC+[\/:])*)/.source.replace("WC",Tr),oH=/(WCOD+)?/.source.replace("WCOD",DH),MH=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tr),FH=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tr),RH=new RegExp("^"+qH+oH+MH+FH+"$"),GH=["material","materials","bones","map"],Tu=class{constructor(f,v,e){let P=e||b3.parseTrackName(v);this._targetGroup=f,this._bindings=f.subscribe_(v,P)}getValue(f,v){this.bind();let e=this._targetGroup.nCachedObjects_,P=this._bindings[e];P!==void 0&&P.getValue(f,v)}setValue(f,v){let e=this._bindings;for(let P=this._targetGroup.nCachedObjects_,z=e.length;P!==z;++P)e[P].setValue(f,v)}bind(){let f=this._bindings;for(let v=this._targetGroup.nCachedObjects_,e=f.length;v!==e;++v)f[v].bind()}unbind(){let f=this._bindings;for(let v=this._targetGroup.nCachedObjects_,e=f.length;v!==e;++v)f[v].unbind()}},b3=class n{constructor(f,v,e){this.path=v,this.parsedPath=e||n.parseTrackName(v),this.node=n.findNode(f,this.parsedPath.nodeName),this.rootNode=f,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(f,v,e){return f&&f.isAnimationObjectGroup?new n.Composite(f,v,e):new n(f,v,e)}static sanitizeNodeName(f){return f.replace(/\s/g,"_").replace(VH,"")}static parseTrackName(f){let v=RH.exec(f);if(v===null)throw new Error("PropertyBinding: Cannot parse trackName: "+f);let e={nodeName:v[2],objectName:v[3],objectIndex:v[4],propertyName:v[5],propertyIndex:v[6]},P=e.nodeName&&e.nodeName.lastIndexOf(".");if(P!==void 0&&P!==-1){let z=e.nodeName.substring(P+1);GH.indexOf(z)!==-1&&(e.nodeName=e.nodeName.substring(0,P),e.objectName=z)}if(e.propertyName===null||e.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+f);return e}static findNode(f,v){if(v===void 0||v===""||v==="."||v===-1||v===f.name||v===f.uuid)return f;if(f.skeleton){let e=f.skeleton.getBoneByName(v);if(e!==void 0)return e}if(f.children){let e=function(z){for(let t=0;t<z.length;t++){let u=z[t];if(u.name===v||u.uuid===v)return u;let r=e(u.children);if(r)return r}return null},P=e(f.children);if(P)return P}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(f,v){f[v]=this.targetObject[this.propertyName]}_getValue_array(f,v){let e=this.resolvedProperty;for(let P=0,z=e.length;P!==z;++P)f[v++]=e[P]}_getValue_arrayElement(f,v){f[v]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(f,v){this.resolvedProperty.toArray(f,v)}_setValue_direct(f,v){this.targetObject[this.propertyName]=f[v]}_setValue_direct_setNeedsUpdate(f,v){this.targetObject[this.propertyName]=f[v],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(f,v){this.targetObject[this.propertyName]=f[v],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(f,v){let e=this.resolvedProperty;for(let P=0,z=e.length;P!==z;++P)e[P]=f[v++]}_setValue_array_setNeedsUpdate(f,v){let e=this.resolvedProperty;for(let P=0,z=e.length;P!==z;++P)e[P]=f[v++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(f,v){let e=this.resolvedProperty;for(let P=0,z=e.length;P!==z;++P)e[P]=f[v++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(f,v){this.resolvedProperty[this.propertyIndex]=f[v]}_setValue_arrayElement_setNeedsUpdate(f,v){this.resolvedProperty[this.propertyIndex]=f[v],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(f,v){this.resolvedProperty[this.propertyIndex]=f[v],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(f,v){this.resolvedProperty.fromArray(f,v)}_setValue_fromArray_setNeedsUpdate(f,v){this.resolvedProperty.fromArray(f,v),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(f,v){this.resolvedProperty.fromArray(f,v),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(f,v){this.bind(),this.getValue(f,v)}_setValue_unbound(f,v){this.bind(),this.setValue(f,v)}bind(){let f=this.node,v=this.parsedPath,e=v.objectName,P=v.propertyName,z=v.propertyIndex;if(f||(f=n.findNode(this.rootNode,v.nodeName),this.node=f),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!f){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(e){let b=v.objectIndex;switch(e){case"materials":if(!f.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!f.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}f=f.material.materials;break;case"bones":if(!f.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}f=f.skeleton.bones;for(let X=0;X<f.length;X++)if(f[X].name===b){b=X;break}break;case"map":if("map"in f){f=f.map;break}if(!f.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!f.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}f=f.material.map;break;default:if(f[e]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}f=f[e]}if(b!==void 0){if(f[b]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,f);return}f=f[b]}}let t=f[P];if(t===void 0){let b=v.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+b+"."+P+" but it wasn't found.",f);return}let u=this.Versioning.None;this.targetObject=f,f.isMaterial===!0?u=this.Versioning.NeedsUpdate:f.isObject3D===!0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let r=this.BindingType.Direct;if(z!==void 0){if(P==="morphTargetInfluences"){if(!f.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!f.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}f.morphTargetDictionary[z]!==void 0&&(z=f.morphTargetDictionary[z])}r=this.BindingType.ArrayElement,this.resolvedProperty=t,this.propertyIndex=z}else t.fromArray!==void 0&&t.toArray!==void 0?(r=this.BindingType.HasFromToArray,this.resolvedProperty=t):Array.isArray(t)?(r=this.BindingType.EntireArray,this.resolvedProperty=t):this.propertyName=P;this.getValue=this.GetterByBindingType[r],this.setValue=this.SetterByBindingTypeAndVersioning[r][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};b3.Composite=Tu;b3.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};b3.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};b3.prototype.GetterByBindingType=[b3.prototype._getValue_direct,b3.prototype._getValue_array,b3.prototype._getValue_arrayElement,b3.prototype._getValue_toArray];b3.prototype.SetterByBindingTypeAndVersioning=[[b3.prototype._setValue_direct,b3.prototype._setValue_direct_setNeedsUpdate,b3.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[b3.prototype._setValue_array,b3.prototype._setValue_array_setNeedsUpdate,b3.prototype._setValue_array_setMatrixWorldNeedsUpdate],[b3.prototype._setValue_arrayElement,b3.prototype._setValue_arrayElement_setNeedsUpdate,b3.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[b3.prototype._setValue_fromArray,b3.prototype._setValue_fromArray_setNeedsUpdate,b3.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var j5=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Wv(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let f={};this._indicesByUUID=f;for(let e=0,P=arguments.length;e!==P;++e)f[arguments[e].uuid]=e;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let v=this;this.stats={objects:{get total(){return v._objects.length},get inUse(){return this.total-v.nCachedObjects_}},get bindingsPerObject(){return v._bindings.length}}}add(){let f=this._objects,v=this._indicesByUUID,e=this._paths,P=this._parsedPaths,z=this._bindings,t=z.length,u,r=f.length,b=this.nCachedObjects_;for(let X=0,d=arguments.length;X!==d;++X){let H=arguments[X],x=H.uuid,c=v[x];if(c===void 0){c=r++,v[x]=c,f.push(H);for(let a=0,j=t;a!==j;++a)z[a].push(new b3(H,e[a],P[a]))}else if(c<b){u=f[c];let a=--b,j=f[a];v[j.uuid]=c,f[c]=j,v[x]=a,f[a]=H;for(let s=0,i=t;s!==i;++s){let N=z[s],m=N[a],p=N[c];N[c]=m,p===void 0&&(p=new b3(H,e[s],P[s])),N[a]=p}}else f[c]!==u&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=b}remove(){let f=this._objects,v=this._indicesByUUID,e=this._bindings,P=e.length,z=this.nCachedObjects_;for(let t=0,u=arguments.length;t!==u;++t){let r=arguments[t],b=r.uuid,X=v[b];if(X!==void 0&&X>=z){let d=z++,H=f[d];v[H.uuid]=X,f[X]=H,v[b]=d,f[d]=r;for(let x=0,c=P;x!==c;++x){let a=e[x],j=a[d],s=a[X];a[X]=j,a[d]=s}}}this.nCachedObjects_=z}uncache(){let f=this._objects,v=this._indicesByUUID,e=this._bindings,P=e.length,z=this.nCachedObjects_,t=f.length;for(let u=0,r=arguments.length;u!==r;++u){let b=arguments[u],X=b.uuid,d=v[X];if(d!==void 0)if(delete v[X],d<z){let H=--z,x=f[H],c=--t,a=f[c];v[x.uuid]=d,f[d]=x,v[a.uuid]=H,f[H]=a,f.pop();for(let j=0,s=P;j!==s;++j){let i=e[j],N=i[H],m=i[c];i[d]=N,i[H]=m,i.pop()}}else{let H=--t,x=f[H];H>0&&(v[x.uuid]=d),f[d]=x,f.pop();for(let c=0,a=P;c!==a;++c){let j=e[c];j[d]=j[H],j.pop()}}}this.nCachedObjects_=z}subscribe_(f,v){let e=this._bindingsIndicesByPath,P=e[f],z=this._bindings;if(P!==void 0)return z[P];let t=this._paths,u=this._parsedPaths,r=this._objects,b=r.length,X=this.nCachedObjects_,d=new Array(b);P=z.length,e[f]=P,t.push(f),u.push(v),z.push(d);for(let H=X,x=r.length;H!==x;++H){let c=r[H];d[H]=new b3(c,f,v)}return d}unsubscribe_(f){let v=this._bindingsIndicesByPath,e=v[f];if(e!==void 0){let P=this._paths,z=this._parsedPaths,t=this._bindings,u=t.length-1,r=t[u],b=f[u];v[b]=e,t[e]=r,t.pop(),z[e]=z[u],z.pop(),P[e]=P[u],P.pop()}}},CP=class{constructor(f,v,e=null,P=v.blendMode){this._mixer=f,this._clip=v,this._localRoot=e,this.blendMode=P;let z=v.tracks,t=z.length,u=new Array(t),r={endingStart:Q7,endingEnd:Q7};for(let b=0;b!==t;++b){let X=z[b].createInterpolant(null);u[b]=X,X.settings=r}this._interpolantSettings=r,this._interpolants=u,this._propertyBindings=new Array(t),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=vr,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(f){return this._startTime=f,this}setLoop(f,v){return this.loop=f,this.repetitions=v,this}setEffectiveWeight(f){return this.weight=f,this._effectiveWeight=this.enabled?f:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(f){return this._scheduleFading(f,0,1)}fadeOut(f){return this._scheduleFading(f,1,0)}crossFadeFrom(f,v,e=!1){if(f.fadeOut(v),this.fadeIn(v),e===!0){let P=this._clip.duration,z=f._clip.duration,t=z/P,u=P/z;f.warp(1,t,v),this.warp(u,1,v)}return this}crossFadeTo(f,v,e=!1){return f.crossFadeFrom(this,v,e)}stopFading(){let f=this._weightInterpolant;return f!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(f)),this}setEffectiveTimeScale(f){return this.timeScale=f,this._effectiveTimeScale=this.paused?0:f,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(f){return this.timeScale=this._clip.duration/f,this.stopWarping()}syncWith(f){return this.time=f.time,this.timeScale=f.timeScale,this.stopWarping()}halt(f){return this.warp(this._effectiveTimeScale,0,f)}warp(f,v,e){let P=this._mixer,z=P.time,t=this.timeScale,u=this._timeScaleInterpolant;u===null&&(u=P._lendControlInterpolant(),this._timeScaleInterpolant=u);let r=u.parameterPositions,b=u.sampleValues;return r[0]=z,r[1]=z+e,b[0]=f/t,b[1]=v/t,this}stopWarping(){let f=this._timeScaleInterpolant;return f!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(f)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(f,v,e,P){if(!this.enabled){this._updateWeight(f);return}let z=this._startTime;if(z!==null){let r=(f-z)*e;r<0||e===0?v=0:(this._startTime=null,v=e*r)}v*=this._updateTimeScale(f);let t=this._updateTime(v),u=this._updateWeight(f);if(u>0){let r=this._interpolants,b=this._propertyBindings;switch(this.blendMode){case et:for(let X=0,d=r.length;X!==d;++X)r[X].evaluate(t),b[X].accumulateAdditive(u);break;case Yn:default:for(let X=0,d=r.length;X!==d;++X)r[X].evaluate(t),b[X].accumulate(P,u)}}}_updateWeight(f){let v=0;if(this.enabled){v=this.weight;let e=this._weightInterpolant;if(e!==null){let P=e.evaluate(f)[0];v*=P,f>e.parameterPositions[1]&&(this.stopFading(),P===0&&(this.enabled=!1))}}return this._effectiveWeight=v,v}_updateTimeScale(f){let v=0;if(!this.paused){v=this.timeScale;let e=this._timeScaleInterpolant;if(e!==null){let P=e.evaluate(f)[0];v*=P,f>e.parameterPositions[1]&&(this.stopWarping(),v===0?this.paused=!0:this.timeScale=v)}}return this._effectiveTimeScale=v,v}_updateTime(f){let v=this._clip.duration,e=this.loop,P=this.time+f,z=this._loopCount,t=e===er;if(f===0)return z===-1?P:t&&(z&1)===1?v-P:P;if(e===fr){z===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));f:{if(P>=v)P=v;else if(P<0)P=0;else{this.time=P;break f}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=P,this._mixer.dispatchEvent({type:"finished",action:this,direction:f<0?-1:1})}}else{if(z===-1&&(f>=0?(z=0,this._setEndings(!0,this.repetitions===0,t)):this._setEndings(this.repetitions===0,!0,t)),P>=v||P<0){let u=Math.floor(P/v);P-=v*u,z+=Math.abs(u);let r=this.repetitions-z;if(r<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,P=f>0?v:0,this.time=P,this._mixer.dispatchEvent({type:"finished",action:this,direction:f>0?1:-1});else{if(r===1){let b=f<0;this._setEndings(b,!b,t)}else this._setEndings(!1,!1,t);this._loopCount=z,this.time=P,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:u})}}else this.time=P;if(t&&(z&1)===1)return v-P}return P}_setEndings(f,v,e){let P=this._interpolantSettings;e?(P.endingStart=A7,P.endingEnd=A7):(f?P.endingStart=this.zeroSlopeAtStart?A7:Q7:P.endingStart=k9,v?P.endingEnd=this.zeroSlopeAtEnd?A7:Q7:P.endingEnd=k9)}_scheduleFading(f,v,e){let P=this._mixer,z=P.time,t=this._weightInterpolant;t===null&&(t=P._lendControlInterpolant(),this._weightInterpolant=t);let u=t.parameterPositions,r=t.sampleValues;return u[0]=z,r[0]=v,u[1]=z+f,r[1]=e,this}},kH=new Float32Array(1),a5=class extends hv{constructor(f){super(),this._root=f,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(f,v){let e=f._localRoot||this._root,P=f._clip.tracks,z=P.length,t=f._propertyBindings,u=f._interpolants,r=e.uuid,b=this._bindingsByRootAndName,X=b[r];X===void 0&&(X={},b[r]=X);for(let d=0;d!==z;++d){let H=P[d],x=H.name,c=X[x];if(c!==void 0)++c.referenceCount,t[d]=c;else{if(c=t[d],c!==void 0){c._cacheIndex===null&&(++c.referenceCount,this._addInactiveBinding(c,r,x));continue}let a=v&&v._propertyBindings[d].binding.parsedPath;c=new BP(b3.create(e,x,a),H.ValueTypeName,H.getValueSize()),++c.referenceCount,this._addInactiveBinding(c,r,x),t[d]=c}u[d].resultBuffer=c.buffer}}_activateAction(f){if(!this._isActiveAction(f)){if(f._cacheIndex===null){let e=(f._localRoot||this._root).uuid,P=f._clip.uuid,z=this._actionsByClip[P];this._bindAction(f,z&&z.knownActions[0]),this._addInactiveAction(f,P,e)}let v=f._propertyBindings;for(let e=0,P=v.length;e!==P;++e){let z=v[e];z.useCount++===0&&(this._lendBinding(z),z.saveOriginalState())}this._lendAction(f)}}_deactivateAction(f){if(this._isActiveAction(f)){let v=f._propertyBindings;for(let e=0,P=v.length;e!==P;++e){let z=v[e];--z.useCount===0&&(z.restoreOriginalState(),this._takeBackBinding(z))}this._takeBackAction(f)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let f=this;this.stats={actions:{get total(){return f._actions.length},get inUse(){return f._nActiveActions}},bindings:{get total(){return f._bindings.length},get inUse(){return f._nActiveBindings}},controlInterpolants:{get total(){return f._controlInterpolants.length},get inUse(){return f._nActiveControlInterpolants}}}}_isActiveAction(f){let v=f._cacheIndex;return v!==null&&v<this._nActiveActions}_addInactiveAction(f,v,e){let P=this._actions,z=this._actionsByClip,t=z[v];if(t===void 0)t={knownActions:[f],actionByRoot:{}},f._byClipCacheIndex=0,z[v]=t;else{let u=t.knownActions;f._byClipCacheIndex=u.length,u.push(f)}f._cacheIndex=P.length,P.push(f),t.actionByRoot[e]=f}_removeInactiveAction(f){let v=this._actions,e=v[v.length-1],P=f._cacheIndex;e._cacheIndex=P,v[P]=e,v.pop(),f._cacheIndex=null;let z=f._clip.uuid,t=this._actionsByClip,u=t[z],r=u.knownActions,b=r[r.length-1],X=f._byClipCacheIndex;b._byClipCacheIndex=X,r[X]=b,r.pop(),f._byClipCacheIndex=null;let d=u.actionByRoot,H=(f._localRoot||this._root).uuid;delete d[H],r.length===0&&delete t[z],this._removeInactiveBindingsForAction(f)}_removeInactiveBindingsForAction(f){let v=f._propertyBindings;for(let e=0,P=v.length;e!==P;++e){let z=v[e];--z.referenceCount===0&&this._removeInactiveBinding(z)}}_lendAction(f){let v=this._actions,e=f._cacheIndex,P=this._nActiveActions++,z=v[P];f._cacheIndex=P,v[P]=f,z._cacheIndex=e,v[e]=z}_takeBackAction(f){let v=this._actions,e=f._cacheIndex,P=--this._nActiveActions,z=v[P];f._cacheIndex=P,v[P]=f,z._cacheIndex=e,v[e]=z}_addInactiveBinding(f,v,e){let P=this._bindingsByRootAndName,z=this._bindings,t=P[v];t===void 0&&(t={},P[v]=t),t[e]=f,f._cacheIndex=z.length,z.push(f)}_removeInactiveBinding(f){let v=this._bindings,e=f.binding,P=e.rootNode.uuid,z=e.path,t=this._bindingsByRootAndName,u=t[P],r=v[v.length-1],b=f._cacheIndex;r._cacheIndex=b,v[b]=r,v.pop(),delete u[z],Object.keys(u).length===0&&delete t[P]}_lendBinding(f){let v=this._bindings,e=f._cacheIndex,P=this._nActiveBindings++,z=v[P];f._cacheIndex=P,v[P]=f,z._cacheIndex=e,v[e]=z}_takeBackBinding(f){let v=this._bindings,e=f._cacheIndex,P=--this._nActiveBindings,z=v[P];f._cacheIndex=P,v[P]=f,z._cacheIndex=e,v[e]=z}_lendControlInterpolant(){let f=this._controlInterpolants,v=this._nActiveControlInterpolants++,e=f[v];return e===void 0&&(e=new u8(new Float32Array(2),new Float32Array(2),1,kH),e.__cacheIndex=v,f[v]=e),e}_takeBackControlInterpolant(f){let v=this._controlInterpolants,e=f.__cacheIndex,P=--this._nActiveControlInterpolants,z=v[P];f.__cacheIndex=P,v[P]=f,z.__cacheIndex=e,v[e]=z}clipAction(f,v,e){let P=v||this._root,z=P.uuid,t=typeof f=="string"?j7.findByName(P,f):f,u=t!==null?t.uuid:f,r=this._actionsByClip[u],b=null;if(e===void 0&&(t!==null?e=t.blendMode:e=Yn),r!==void 0){let d=r.actionByRoot[z];if(d!==void 0&&d.blendMode===e)return d;b=r.knownActions[0],t===null&&(t=b._clip)}if(t===null)return null;let X=new CP(this,t,v,e);return this._bindAction(X,b),this._addInactiveAction(X,u,z),X}existingAction(f,v){let e=v||this._root,P=e.uuid,z=typeof f=="string"?j7.findByName(e,f):f,t=z?z.uuid:f,u=this._actionsByClip[t];return u!==void 0&&u.actionByRoot[P]||null}stopAllAction(){let f=this._actions,v=this._nActiveActions;for(let e=v-1;e>=0;--e)f[e].stop();return this}update(f){f*=this.timeScale;let v=this._actions,e=this._nActiveActions,P=this.time+=f,z=Math.sign(f),t=this._accuIndex^=1;for(let b=0;b!==e;++b)v[b]._update(P,f,z,t);let u=this._bindings,r=this._nActiveBindings;for(let b=0;b!==r;++b)u[b].apply(t);return this}setTime(f){this.time=0;for(let v=0;v<this._actions.length;v++)this._actions[v].time=0;return this.update(f)}getRoot(){return this._root}uncacheClip(f){let v=this._actions,e=f.uuid,P=this._actionsByClip,z=P[e];if(z!==void 0){let t=z.knownActions;for(let u=0,r=t.length;u!==r;++u){let b=t[u];this._deactivateAction(b);let X=b._cacheIndex,d=v[v.length-1];b._cacheIndex=null,b._byClipCacheIndex=null,d._cacheIndex=X,v[X]=d,v.pop(),this._removeInactiveBindingsForAction(b)}delete P[e]}}uncacheRoot(f){let v=f.uuid,e=this._actionsByClip;for(let t in e){let u=e[t].actionByRoot,r=u[v];r!==void 0&&(this._deactivateAction(r),this._removeInactiveAction(r))}let P=this._bindingsByRootAndName,z=P[v];if(z!==void 0)for(let t in z){let u=z[t];u.restoreOriginalState(),this._removeInactiveBinding(u)}}uncacheAction(f,v){let e=this.existingAction(f,v);e!==null&&(this._deactivateAction(e),this._removeInactiveAction(e))}},m5=class extends U9{constructor(f=1,v=1,e=1,P={}){super(f,v,P),this.isRenderTarget3D=!0,this.depth=e,this.texture=new Ge(null,f,v,e),this._setTextureOptions(P),this.texture.isRenderTargetTexture=!0}},N5=class n{constructor(f){this.value=f}clone(){return new n(this.value.clone===void 0?this.value:this.value.clone())}},JH=0,i5=class extends hv{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:JH++}),this.name="",this.usage=Y9,this.uniforms=[]}add(f){return this.uniforms.push(f),this}remove(f){let v=this.uniforms.indexOf(f);return v!==-1&&this.uniforms.splice(v,1),this}setName(f){return this.name=f,this}setUsage(f){return this.usage=f,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(f){this.name=f.name,this.usage=f.usage;let v=f.uniforms;this.uniforms.length=0;for(let e=0,P=v.length;e<P;e++){let z=Array.isArray(v[e])?v[e]:[v[e]];for(let t=0;t<z.length;t++)this.uniforms.push(z[t].clone())}return this}clone(){return new this.constructor().copy(this)}},Z5=class extends H7{constructor(f,v,e=1){super(f,v),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=e}copy(f){return super.copy(f),this.meshPerAttribute=f.meshPerAttribute,this}clone(f){let v=super.clone(f);return v.meshPerAttribute=this.meshPerAttribute,v}toJSON(f){let v=super.toJSON(f);return v.isInstancedInterleavedBuffer=!0,v.meshPerAttribute=this.meshPerAttribute,v}},T5=class{constructor(f,v,e,P,z,t=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=f,this.type=v,this.itemSize=e,this.elementSize=P,this.count=z,this.normalized=t,this.version=0}set needsUpdate(f){f===!0&&this.version++}setBuffer(f){return this.buffer=f,this}setType(f,v){return this.type=f,this.elementSize=v,this}setItemSize(f){return this.itemSize=f,this}setCount(f){return this.count=f,this}},Yb=new of,y5=class{constructor(f,v,e=0,P=1/0){this.ray=new _v(f,v),this.near=e,this.far=P,this.camera=null,this.layers=new ke,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(f,v){this.ray.set(f,v)}setFromCamera(f,v){v.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(v.matrixWorld),this.ray.direction.set(f.x,f.y,.5).unproject(v).sub(this.ray.origin).normalize(),this.camera=v):v.isOrthographicCamera?(this.ray.origin.set(f.x,f.y,(v.near+v.far)/(v.near-v.far)).unproject(v),this.ray.direction.set(0,0,-1).transformDirection(v.matrixWorld),this.camera=v):console.error("THREE.Raycaster: Unsupported camera type: "+v.type)}setFromXRController(f){return Yb.identity().extractRotation(f.matrixWorld),this.ray.origin.setFromMatrixPosition(f.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yb),this}intersectObject(f,v=!0,e=[]){return yu(f,this,e,v),e.sort(Sb),e}intersectObjects(f,v=!0,e=[]){for(let P=0,z=f.length;P<z;P++)yu(f[P],this,e,v);return e.sort(Sb),e}};function Sb(n,f){return n.distance-f.distance}function yu(n,f,v,e){let P=!0;if(n.layers.test(f.layers)&&n.raycast(f,v)===!1&&(P=!1),P===!0&&e===!0){let z=n.children;for(let t=0,u=z.length;t<u;t++)yu(z[t],f,v,!0)}}var p5=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(f){this._document=f,f.hidden!==void 0&&(this._pageVisibilityHandler=YH.bind(this),f.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(f){return this._timescale=f,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(f){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(f!==void 0?f:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function YH(){this._document.hidden===!1&&this.reset()}var e9=class{constructor(f=1,v=0,e=0){this.radius=f,this.phi=v,this.theta=e}set(f,v,e){return this.radius=f,this.phi=v,this.theta=e,this}copy(f){return this.radius=f.radius,this.phi=f.phi,this.theta=f.theta,this}makeSafe(){return this.phi=Rf(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(f){return this.setFromCartesianCoords(f.x,f.y,f.z)}setFromCartesianCoords(f,v,e){return this.radius=Math.sqrt(f*f+v*v+e*e),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(f,e),this.phi=Math.acos(Rf(v/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},O5=class{constructor(f=1,v=0,e=0){this.radius=f,this.theta=v,this.y=e}set(f,v,e){return this.radius=f,this.theta=v,this.y=e,this}copy(f){return this.radius=f.radius,this.theta=f.theta,this.y=f.y,this}setFromVector3(f){return this.setFromCartesianCoords(f.x,f.y,f.z)}setFromCartesianCoords(f,v,e){return this.radius=Math.sqrt(f*f+e*e),this.theta=Math.atan2(f,e),this.y=v,this}clone(){return new this.constructor().copy(this)}},l5=class n{constructor(f,v,e,P){n.prototype.isMatrix2=!0,this.elements=[1,0,0,1],f!==void 0&&this.set(f,v,e,P)}identity(){return this.set(1,0,0,1),this}fromArray(f,v=0){for(let e=0;e<4;e++)this.elements[e]=f[e+v];return this}set(f,v,e,P){let z=this.elements;return z[0]=f,z[2]=v,z[1]=e,z[3]=P,this}},Kb=new g,L5=class{constructor(f=new g(1/0,1/0),v=new g(-1/0,-1/0)){this.isBox2=!0,this.min=f,this.max=v}set(f,v){return this.min.copy(f),this.max.copy(v),this}setFromPoints(f){this.makeEmpty();for(let v=0,e=f.length;v<e;v++)this.expandByPoint(f[v]);return this}setFromCenterAndSize(f,v){let e=Kb.copy(v).multiplyScalar(.5);return this.min.copy(f).sub(e),this.max.copy(f).add(e),this}clone(){return new this.constructor().copy(this)}copy(f){return this.min.copy(f.min),this.max.copy(f.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(f){return this.isEmpty()?f.set(0,0):f.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(f){return this.isEmpty()?f.set(0,0):f.subVectors(this.max,this.min)}expandByPoint(f){return this.min.min(f),this.max.max(f),this}expandByVector(f){return this.min.sub(f),this.max.add(f),this}expandByScalar(f){return this.min.addScalar(-f),this.max.addScalar(f),this}containsPoint(f){return f.x>=this.min.x&&f.x<=this.max.x&&f.y>=this.min.y&&f.y<=this.max.y}containsBox(f){return this.min.x<=f.min.x&&f.max.x<=this.max.x&&this.min.y<=f.min.y&&f.max.y<=this.max.y}getParameter(f,v){return v.set((f.x-this.min.x)/(this.max.x-this.min.x),(f.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(f){return f.max.x>=this.min.x&&f.min.x<=this.max.x&&f.max.y>=this.min.y&&f.min.y<=this.max.y}clampPoint(f,v){return v.copy(f).clamp(this.min,this.max)}distanceToPoint(f){return this.clampPoint(f,Kb).distanceTo(f)}intersect(f){return this.min.max(f.min),this.max.min(f.max),this.isEmpty()&&this.makeEmpty(),this}union(f){return this.min.min(f.min),this.max.max(f.max),this}translate(f){return this.min.add(f),this.max.add(f),this}equals(f){return f.min.equals(this.min)&&f.max.equals(this.max)}},Ub=new L,Mz=new L,M9=new L,F9=new L,bu=new L,SH=new L,KH=new L,W5=class{constructor(f=new L,v=new L){this.start=f,this.end=v}set(f,v){return this.start.copy(f),this.end.copy(v),this}copy(f){return this.start.copy(f.start),this.end.copy(f.end),this}getCenter(f){return f.addVectors(this.start,this.end).multiplyScalar(.5)}delta(f){return f.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(f,v){return this.delta(v).multiplyScalar(f).add(this.start)}closestPointToPointParameter(f,v){Ub.subVectors(f,this.start),Mz.subVectors(this.end,this.start);let e=Mz.dot(Mz),z=Mz.dot(Ub)/e;return v&&(z=Rf(z,0,1)),z}closestPointToPoint(f,v,e){let P=this.closestPointToPointParameter(f,v);return this.delta(e).multiplyScalar(P).add(this.start)}distanceSqToLine3(f,v=SH,e=KH){let P=10000000000000001e-32,z,t,u=this.start,r=f.start,b=this.end,X=f.end;M9.subVectors(b,u),F9.subVectors(X,r),bu.subVectors(u,r);let d=M9.dot(M9),H=F9.dot(F9),x=F9.dot(bu);if(d<=P&&H<=P)return v.copy(u),e.copy(r),v.sub(e),v.dot(v);if(d<=P)z=0,t=x/H,t=Rf(t,0,1);else{let c=M9.dot(bu);if(H<=P)t=0,z=Rf(-c/d,0,1);else{let a=M9.dot(F9),j=d*H-a*a;j!==0?z=Rf((a*x-c*H)/j,0,1):z=0,t=(a*z+x)/H,t<0?(t=0,z=Rf(-c/d,0,1)):t>1&&(t=1,z=Rf((a-c)/d,0,1))}}return v.copy(u).add(M9.multiplyScalar(z)),e.copy(r).add(F9.multiplyScalar(t)),v.sub(e),v.dot(v)}applyMatrix4(f){return this.start.applyMatrix4(f),this.end.applyMatrix4(f),this}equals(f){return f.start.equals(this.start)&&f.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Ib=new L,h5=class extends P3{constructor(f,v){super(),this.light=f,this.matrixAutoUpdate=!1,this.color=v,this.type="SpotLightHelper";let e=new kf,P=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let t=0,u=1,r=32;t<r;t++,u++){let b=t/r*Math.PI*2,X=u/r*Math.PI*2;P.push(Math.cos(b),Math.sin(b),1,Math.cos(X),Math.sin(X),1)}e.setAttribute("position",new sf(P,3));let z=new M3({fog:!1,toneMapped:!1});this.cone=new bv(e,z),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);let f=this.light.distance?this.light.distance:1e3,v=f*Math.tan(this.light.angle);this.cone.scale.set(v,v,f),Ib.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Ib),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},B7=new L,Fz=new of,Xu=new of,w5=class extends bv{constructor(f){let v=YX(f),e=new kf,P=[],z=[];for(let b=0;b<v.length;b++){let X=v[b];X.parent&&X.parent.isBone&&(P.push(0,0,0),P.push(0,0,0),z.push(0,0,0),z.push(0,0,0))}e.setAttribute("position",new sf(P,3)),e.setAttribute("color",new sf(z,3));let t=new M3({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(e,t),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=f,this.bones=v,this.matrix=f.matrixWorld,this.matrixAutoUpdate=!1;let u=new bf(255),r=new bf(65280);this.setColors(u,r)}updateMatrixWorld(f){let v=this.bones,e=this.geometry,P=e.getAttribute("position");Xu.copy(this.root.matrixWorld).invert();for(let z=0,t=0;z<v.length;z++){let u=v[z];u.parent&&u.parent.isBone&&(Fz.multiplyMatrices(Xu,u.matrixWorld),B7.setFromMatrixPosition(Fz),P.setXYZ(t,B7.x,B7.y,B7.z),Fz.multiplyMatrices(Xu,u.parent.matrixWorld),B7.setFromMatrixPosition(Fz),P.setXYZ(t+1,B7.x,B7.y,B7.z),t+=2)}e.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(f)}setColors(f,v){let P=this.geometry.getAttribute("color");for(let z=0;z<P.count;z+=2)P.setXYZ(z,f.r,f.g,f.b),P.setXYZ(z+1,v.r,v.g,v.b);return P.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};function YX(n){let f=[];n.isBone===!0&&f.push(n);for(let v=0;v<n.children.length;v++)f.push(...YX(n.children[v]));return f}var V5=class extends _f{constructor(f,v,e){let P=new ue(v,4,2),z=new u3({wireframe:!0,fog:!1,toneMapped:!1});super(P,z),this.light=f,this.color=e,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},UH=new L,gb=new bf,Eb=new bf,D5=class extends P3{constructor(f,v,e){super(),this.light=f,this.matrix=f.matrixWorld,this.matrixAutoUpdate=!1,this.color=e,this.type="HemisphereLightHelper";let P=new n8(v);P.rotateY(Math.PI*.5),this.material=new u3({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let z=P.getAttribute("position"),t=new Float32Array(z.count*3);P.setAttribute("color",new Af(t,3)),this.add(new _f(P,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let f=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let v=f.geometry.getAttribute("color");gb.copy(this.light.color),Eb.copy(this.light.groundColor);for(let e=0,P=v.count;e<P;e++){let z=e<P/2?gb:Eb;v.setXYZ(e,z.r,z.g,z.b)}v.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),f.lookAt(UH.setFromMatrixPosition(this.light.matrixWorld).negate())}},q5=class extends bv{constructor(f=10,v=10,e=4473924,P=8947848){e=new bf(e),P=new bf(P);let z=v/2,t=f/v,u=f/2,r=[],b=[];for(let H=0,x=0,c=-u;H<=v;H++,c+=t){r.push(-u,0,c,u,0,c),r.push(c,0,-u,c,0,u);let a=H===z?e:P;a.toArray(b,x),x+=3,a.toArray(b,x),x+=3,a.toArray(b,x),x+=3,a.toArray(b,x),x+=3}let X=new kf;X.setAttribute("position",new sf(r,3)),X.setAttribute("color",new sf(b,3));let d=new M3({vertexColors:!0,toneMapped:!1});super(X,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},o5=class extends bv{constructor(f=10,v=16,e=8,P=64,z=4473924,t=8947848){z=new bf(z),t=new bf(t);let u=[],r=[];if(v>1)for(let d=0;d<v;d++){let H=d/v*(Math.PI*2),x=Math.sin(H)*f,c=Math.cos(H)*f;u.push(0,0,0),u.push(x,0,c);let a=d&1?z:t;r.push(a.r,a.g,a.b),r.push(a.r,a.g,a.b)}for(let d=0;d<e;d++){let H=d&1?z:t,x=f-f/e*d;for(let c=0;c<P;c++){let a=c/P*(Math.PI*2),j=Math.sin(a)*x,s=Math.cos(a)*x;u.push(j,0,s),r.push(H.r,H.g,H.b),a=(c+1)/P*(Math.PI*2),j=Math.sin(a)*x,s=Math.cos(a)*x,u.push(j,0,s),r.push(H.r,H.g,H.b)}}let b=new kf;b.setAttribute("position",new sf(u,3)),b.setAttribute("color",new sf(r,3));let X=new M3({vertexColors:!0,toneMapped:!1});super(b,X),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Bb=new L,Rz=new L,Cb=new L,M5=class extends P3{constructor(f,v,e){super(),this.light=f,this.matrix=f.matrixWorld,this.matrixAutoUpdate=!1,this.color=e,this.type="DirectionalLightHelper",v===void 0&&(v=1);let P=new kf;P.setAttribute("position",new sf([-v,v,0,v,v,0,v,-v,0,-v,-v,0,-v,v,0],3));let z=new M3({fog:!1,toneMapped:!1});this.lightPlane=new wv(P,z),this.add(this.lightPlane),P=new kf,P.setAttribute("position",new sf([0,0,0,0,0,1],3)),this.targetLine=new wv(P,z),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Bb.setFromMatrixPosition(this.light.matrixWorld),Rz.setFromMatrixPosition(this.light.target.matrixWorld),Cb.subVectors(Rz,Bb),this.lightPlane.lookAt(Rz),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Rz),this.targetLine.scale.z=Cb.length()}},Gz=new L,h3=new Je,F5=class extends bv{constructor(f){let v=new kf,e=new M3({color:16777215,vertexColors:!0,toneMapped:!1}),P=[],z=[],t={};u("n1","n2"),u("n2","n4"),u("n4","n3"),u("n3","n1"),u("f1","f2"),u("f2","f4"),u("f4","f3"),u("f3","f1"),u("n1","f1"),u("n2","f2"),u("n3","f3"),u("n4","f4"),u("p","n1"),u("p","n2"),u("p","n3"),u("p","n4"),u("u1","u2"),u("u2","u3"),u("u3","u1"),u("c","t"),u("p","c"),u("cn1","cn2"),u("cn3","cn4"),u("cf1","cf2"),u("cf3","cf4");function u(c,a){r(c),r(a)}function r(c){P.push(0,0,0),z.push(0,0,0),t[c]===void 0&&(t[c]=[]),t[c].push(P.length/3-1)}v.setAttribute("position",new sf(P,3)),v.setAttribute("color",new sf(z,3)),super(v,e),this.type="CameraHelper",this.camera=f,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=f.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=t,this.update();let b=new bf(16755200),X=new bf(16711680),d=new bf(43775),H=new bf(16777215),x=new bf(3355443);this.setColors(b,X,d,H,x)}setColors(f,v,e,P,z){let u=this.geometry.getAttribute("color");return u.setXYZ(0,f.r,f.g,f.b),u.setXYZ(1,f.r,f.g,f.b),u.setXYZ(2,f.r,f.g,f.b),u.setXYZ(3,f.r,f.g,f.b),u.setXYZ(4,f.r,f.g,f.b),u.setXYZ(5,f.r,f.g,f.b),u.setXYZ(6,f.r,f.g,f.b),u.setXYZ(7,f.r,f.g,f.b),u.setXYZ(8,f.r,f.g,f.b),u.setXYZ(9,f.r,f.g,f.b),u.setXYZ(10,f.r,f.g,f.b),u.setXYZ(11,f.r,f.g,f.b),u.setXYZ(12,f.r,f.g,f.b),u.setXYZ(13,f.r,f.g,f.b),u.setXYZ(14,f.r,f.g,f.b),u.setXYZ(15,f.r,f.g,f.b),u.setXYZ(16,f.r,f.g,f.b),u.setXYZ(17,f.r,f.g,f.b),u.setXYZ(18,f.r,f.g,f.b),u.setXYZ(19,f.r,f.g,f.b),u.setXYZ(20,f.r,f.g,f.b),u.setXYZ(21,f.r,f.g,f.b),u.setXYZ(22,f.r,f.g,f.b),u.setXYZ(23,f.r,f.g,f.b),u.setXYZ(24,v.r,v.g,v.b),u.setXYZ(25,v.r,v.g,v.b),u.setXYZ(26,v.r,v.g,v.b),u.setXYZ(27,v.r,v.g,v.b),u.setXYZ(28,v.r,v.g,v.b),u.setXYZ(29,v.r,v.g,v.b),u.setXYZ(30,v.r,v.g,v.b),u.setXYZ(31,v.r,v.g,v.b),u.setXYZ(32,e.r,e.g,e.b),u.setXYZ(33,e.r,e.g,e.b),u.setXYZ(34,e.r,e.g,e.b),u.setXYZ(35,e.r,e.g,e.b),u.setXYZ(36,e.r,e.g,e.b),u.setXYZ(37,e.r,e.g,e.b),u.setXYZ(38,P.r,P.g,P.b),u.setXYZ(39,P.r,P.g,P.b),u.setXYZ(40,z.r,z.g,z.b),u.setXYZ(41,z.r,z.g,z.b),u.setXYZ(42,z.r,z.g,z.b),u.setXYZ(43,z.r,z.g,z.b),u.setXYZ(44,z.r,z.g,z.b),u.setXYZ(45,z.r,z.g,z.b),u.setXYZ(46,z.r,z.g,z.b),u.setXYZ(47,z.r,z.g,z.b),u.setXYZ(48,z.r,z.g,z.b),u.setXYZ(49,z.r,z.g,z.b),u.needsUpdate=!0,this}update(){let f=this.geometry,v=this.pointMap,e=1,P=1,z,t;if(h3.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)z=1,t=0;else if(this.camera.coordinateSystem===av)z=-1,t=1;else if(this.camera.coordinateSystem===Me)z=0,t=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);V3("c",v,f,h3,0,0,z),V3("t",v,f,h3,0,0,t),V3("n1",v,f,h3,-e,-P,z),V3("n2",v,f,h3,e,-P,z),V3("n3",v,f,h3,-e,P,z),V3("n4",v,f,h3,e,P,z),V3("f1",v,f,h3,-e,-P,t),V3("f2",v,f,h3,e,-P,t),V3("f3",v,f,h3,-e,P,t),V3("f4",v,f,h3,e,P,t),V3("u1",v,f,h3,e*.7,P*1.1,z),V3("u2",v,f,h3,-e*.7,P*1.1,z),V3("u3",v,f,h3,0,P*2,z),V3("cf1",v,f,h3,-e,0,t),V3("cf2",v,f,h3,e,0,t),V3("cf3",v,f,h3,0,-P,t),V3("cf4",v,f,h3,0,P,t),V3("cn1",v,f,h3,-e,0,z),V3("cn2",v,f,h3,e,0,z),V3("cn3",v,f,h3,0,-P,z),V3("cn4",v,f,h3,0,P,z),f.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function V3(n,f,v,e,P,z,t){Gz.set(P,z,t).unproject(e);let u=f[n];if(u!==void 0){let r=v.getAttribute("position");for(let b=0,X=u.length;b<X;b++)r.setXYZ(u[b],Gz.x,Gz.y,Gz.z)}}var kz=new D3,R5=class extends bv{constructor(f,v=16776960){let e=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),P=new Float32Array(24),z=new kf;z.setIndex(new Af(e,1)),z.setAttribute("position",new Af(P,3)),super(z,new M3({color:v,toneMapped:!1})),this.object=f,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&kz.setFromObject(this.object),kz.isEmpty())return;let f=kz.min,v=kz.max,e=this.geometry.attributes.position,P=e.array;P[0]=v.x,P[1]=v.y,P[2]=v.z,P[3]=f.x,P[4]=v.y,P[5]=v.z,P[6]=f.x,P[7]=f.y,P[8]=v.z,P[9]=v.x,P[10]=f.y,P[11]=v.z,P[12]=v.x,P[13]=v.y,P[14]=f.z,P[15]=f.x,P[16]=v.y,P[17]=f.z,P[18]=f.x,P[19]=f.y,P[20]=f.z,P[21]=v.x,P[22]=f.y,P[23]=f.z,e.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(f){return this.object=f,this.update(),this}copy(f,v){return super.copy(f,v),this.object=f.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},G5=class extends bv{constructor(f,v=16776960){let e=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),P=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],z=new kf;z.setIndex(new Af(e,1)),z.setAttribute("position",new sf(P,3)),super(z,new M3({color:v,toneMapped:!1})),this.box=f,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(f){let v=this.box;v.isEmpty()||(v.getCenter(this.position),v.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(f))}dispose(){this.geometry.dispose(),this.material.dispose()}},k5=class extends wv{constructor(f,v=1,e=16776960){let P=e,z=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],t=new kf;t.setAttribute("position",new sf(z,3)),t.computeBoundingSphere(),super(t,new M3({color:P,toneMapped:!1})),this.type="PlaneHelper",this.plane=f,this.size=v;let u=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],r=new kf;r.setAttribute("position",new sf(u,3)),r.computeBoundingSphere(),this.add(new _f(r,new u3({color:P,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(f){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(f)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},Qb=new L,Jz,du,J5=class extends P3{constructor(f=new L(0,0,1),v=new L(0,0,0),e=1,P=16776960,z=e*.2,t=z*.2){super(),this.type="ArrowHelper",Jz===void 0&&(Jz=new kf,Jz.setAttribute("position",new sf([0,0,0,0,1,0],3)),du=new A9(.5,1,5,1),du.translate(0,-.5,0)),this.position.copy(v),this.line=new wv(Jz,new M3({color:P,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new _f(du,new u3({color:P,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(f),this.setLength(e,z,t)}setDirection(f){if(f.y>.99999)this.quaternion.set(0,0,0,1);else if(f.y<-.99999)this.quaternion.set(1,0,0,0);else{Qb.set(f.z,0,-f.x).normalize();let v=Math.acos(f.y);this.quaternion.setFromAxisAngle(Qb,v)}}setLength(f,v=f*.2,e=v*.2){this.line.scale.set(1,Math.max(1e-4,f-v),1),this.line.updateMatrix(),this.cone.scale.set(e,v,e),this.cone.position.y=f,this.cone.updateMatrix()}setColor(f){this.line.material.color.set(f),this.cone.material.color.set(f)}copy(f){return super.copy(f,!1),this.line.copy(f.line),this.cone.copy(f.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Y5=class extends bv{constructor(f=1){let v=[0,0,0,f,0,0,0,0,0,0,f,0,0,0,0,0,0,f],e=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],P=new kf;P.setAttribute("position",new sf(v,3)),P.setAttribute("color",new sf(e,3));let z=new M3({vertexColors:!0,toneMapped:!1});super(P,z),this.type="AxesHelper"}setColors(f,v,e){let P=new bf,z=this.geometry.attributes.color.array;return P.set(f),P.toArray(z,0),P.toArray(z,3),P.set(v),P.toArray(z,6),P.toArray(z,9),P.set(e),P.toArray(z,12),P.toArray(z,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},S5=class{constructor(){this.type="ShapePath",this.color=new bf,this.subPaths=[],this.currentPath=null}moveTo(f,v){return this.currentPath=new Ae,this.subPaths.push(this.currentPath),this.currentPath.moveTo(f,v),this}lineTo(f,v){return this.currentPath.lineTo(f,v),this}quadraticCurveTo(f,v,e,P){return this.currentPath.quadraticCurveTo(f,v,e,P),this}bezierCurveTo(f,v,e,P,z,t){return this.currentPath.bezierCurveTo(f,v,e,P,z,t),this}splineThru(f){return this.currentPath.splineThru(f),this}toShapes(f){function v(s){let i=[];for(let N=0,m=s.length;N<m;N++){let p=s[N],l=new d7;l.curves=p.curves,i.push(l)}return i}function e(s,i){let N=i.length,m=!1;for(let p=N-1,l=0;l<N;p=l++){let W=i[p],w=i[l],T=w.x-W.x,y=w.y-W.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(W=i[l],T=-T,w=i[p],y=-y),s.y<W.y||s.y>w.y)continue;if(s.y===W.y){if(s.x===W.x)return!0}else{let V=y*(s.x-W.x)-T*(s.y-W.y);if(V===0)return!0;if(V<0)continue;m=!m}}else{if(s.y!==W.y)continue;if(w.x<=s.x&&s.x<=W.x||W.x<=s.x&&s.x<=w.x)return!0}}return m}let P=Rv.isClockWise,z=this.subPaths;if(z.length===0)return[];let t,u,r,b=[];if(z.length===1)return u=z[0],r=new d7,r.curves=u.curves,b.push(r),b;let X=!P(z[0].getPoints());X=f?!X:X;let d=[],H=[],x=[],c=0,a;H[c]=void 0,x[c]=[];for(let s=0,i=z.length;s<i;s++)u=z[s],a=u.getPoints(),t=P(a),t=f?!t:t,t?(!X&&H[c]&&c++,H[c]={s:new d7,p:a},H[c].s.curves=u.curves,X&&c++,x[c]=[]):x[c].push({h:u,p:a[0]});if(!H[0])return v(z);if(H.length>1){let s=!1,i=0;for(let N=0,m=H.length;N<m;N++)d[N]=[];for(let N=0,m=H.length;N<m;N++){let p=x[N];for(let l=0;l<p.length;l++){let W=p[l],w=!0;for(let T=0;T<H.length;T++)e(W.p,H[T].p)&&(N!==T&&i++,w?(w=!1,d[T].push(W)):s=!0);w&&d[N].push(W)}}i>0&&s===!1&&(x=d)}let j;for(let s=0,i=H.length;s<i;s++){r=H[s].s,b.push(r),j=x[s];for(let N=0,m=j.length;N<m;N++)r.holes.push(j[N].h)}return b}},H8=class extends hv{constructor(f,v=null){super(),this.object=f,this.domElement=v,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(f){if(f===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=f}disconnect(){}dispose(){}update(){}};function IH(n,f){let v=n.image&&n.image.width?n.image.width/n.image.height:1;return v>f?(n.repeat.x=1,n.repeat.y=v/f,n.offset.x=0,n.offset.y=(1-n.repeat.y)/2):(n.repeat.x=f/v,n.repeat.y=1,n.offset.x=(1-n.repeat.x)/2,n.offset.y=0),n}function gH(n,f){let v=n.image&&n.image.width?n.image.width/n.image.height:1;return v>f?(n.repeat.x=f/v,n.repeat.y=1,n.offset.x=(1-n.repeat.x)/2,n.offset.y=0):(n.repeat.x=1,n.repeat.y=v/f,n.offset.x=0,n.offset.y=(1-n.repeat.y)/2),n}function EH(n){return n.repeat.x=1,n.repeat.y=1,n.offset.x=0,n.offset.y=0,n}function tt(n,f,v,e){let P=BH(e);switch(v){case $5:return n*f;case bn:return n*f/P.components*P.byteLength;case j8:return n*f/P.components*P.byteLength;case vt:return n*f*2/P.components*P.byteLength;case Xn:return n*f*2/P.components*P.byteLength;case ft:return n*f*3/P.components*P.byteLength;case U3:return n*f*4/P.components*P.byteLength;case dn:return n*f*4/P.components*P.byteLength;case a8:case m8:return Math.floor((n+3)/4)*Math.floor((f+3)/4)*8;case N8:case i8:return Math.floor((n+3)/4)*Math.floor((f+3)/4)*16;case xn:case cn:return Math.max(n,16)*Math.max(f,8)/4;case Hn:case sn:return Math.max(n,8)*Math.max(f,8)/2;case jn:case an:return Math.floor((n+3)/4)*Math.floor((f+3)/4)*8;case mn:return Math.floor((n+3)/4)*Math.floor((f+3)/4)*16;case Nn:return Math.floor((n+3)/4)*Math.floor((f+3)/4)*16;case Zn:return Math.floor((n+4)/5)*Math.floor((f+3)/4)*16;case Tn:return Math.floor((n+4)/5)*Math.floor((f+4)/5)*16;case yn:return Math.floor((n+5)/6)*Math.floor((f+4)/5)*16;case pn:return Math.floor((n+5)/6)*Math.floor((f+5)/6)*16;case On:return Math.floor((n+7)/8)*Math.floor((f+4)/5)*16;case ln:return Math.floor((n+7)/8)*Math.floor((f+5)/6)*16;case Ln:return Math.floor((n+7)/8)*Math.floor((f+7)/8)*16;case Wn:return Math.floor((n+9)/10)*Math.floor((f+4)/5)*16;case hn:return Math.floor((n+9)/10)*Math.floor((f+5)/6)*16;case wn:return Math.floor((n+9)/10)*Math.floor((f+7)/8)*16;case Vn:return Math.floor((n+9)/10)*Math.floor((f+9)/10)*16;case Dn:return Math.floor((n+11)/12)*Math.floor((f+9)/10)*16;case qn:return Math.floor((n+11)/12)*Math.floor((f+11)/12)*16;case on:case Mn:case Fn:return Math.ceil(n/4)*Math.ceil(f/4)*16;case Rn:case Gn:return Math.ceil(n/4)*Math.ceil(f/4)*8;case kn:case Jn:return Math.ceil(n/4)*Math.ceil(f/4)*16}throw new Error(`Unable to determine texture byte length for ${v} format.`)}function BH(n){switch(n){case Kv:case C5:return{byteLength:1,components:1};case n9:case Q5:case z9:return{byteLength:2,components:1};case un:case rn:return{byteLength:2,components:4};case i7:case tn:case B3:return{byteLength:4,components:1};case A5:case _5:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}var K5=class{static contain(f,v){return IH(f,v)}static cover(f,v){return gH(f,v)}static fill(f){return EH(f)}static getByteLength(f,v,e,P){return tt(f,v,e,P)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function dd(){let n=null,f=!1,v=null,e=null;function P(z,t){v(z,t),e=n.requestAnimationFrame(P)}return{start:function(){f!==!0&&v!==null&&(e=n.requestAnimationFrame(P),f=!0)},stop:function(){n.cancelAnimationFrame(e),f=!1},setAnimationLoop:function(z){v=z},setContext:function(z){n=z}}}function CH(n){let f=new WeakMap;function v(u,r){let b=u.array,X=u.usage,d=b.byteLength,H=n.createBuffer();n.bindBuffer(r,H),n.bufferData(r,b,X),u.onUploadCallback();let x;if(b instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&b instanceof Float16Array)x=n.HALF_FLOAT;else if(b instanceof Uint16Array)u.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(b instanceof Int16Array)x=n.SHORT;else if(b instanceof Uint32Array)x=n.UNSIGNED_INT;else if(b instanceof Int32Array)x=n.INT;else if(b instanceof Int8Array)x=n.BYTE;else if(b instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(b instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+b);return{buffer:H,type:x,bytesPerElement:b.BYTES_PER_ELEMENT,version:u.version,size:d}}function e(u,r,b){let X=r.array,d=r.updateRanges;if(n.bindBuffer(b,u),d.length===0)n.bufferSubData(b,0,X);else{d.sort((x,c)=>x.start-c.start);let H=0;for(let x=1;x<d.length;x++){let c=d[H],a=d[x];a.start<=c.start+c.count+1?c.count=Math.max(c.count,a.start+a.count-c.start):(++H,d[H]=a)}d.length=H+1;for(let x=0,c=d.length;x<c;x++){let a=d[x];n.bufferSubData(b,a.start*X.BYTES_PER_ELEMENT,X,a.start,a.count)}r.clearUpdateRanges()}r.onUploadCallback()}function P(u){return u.isInterleavedBufferAttribute&&(u=u.data),f.get(u)}function z(u){u.isInterleavedBufferAttribute&&(u=u.data);let r=f.get(u);r&&(n.deleteBuffer(r.buffer),f.delete(u))}function t(u,r){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){let X=f.get(u);(!X||X.version<u.version)&&f.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}let b=f.get(u);if(b===void 0)f.set(u,v(u,r));else if(b.version<u.version){if(b.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");e(b.buffer,u,r),b.version=u.version}}return{get:P,remove:z,update:t}}var QH=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AH=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_H=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$H=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,z2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,b2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,X2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,d2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,H2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,m2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,N2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,i2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Z2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,T2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l2="gl_FragColor = linearToOutputTexel( gl_FragColor );",L2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,h2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,V2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,q2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,G2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,S2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,K2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,B2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,C2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,A2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ex=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,px=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ox=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fs=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vs=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,es=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ps=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ns=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zs=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ts=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,us=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rs=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bs=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xs=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ds=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hs=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xs=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ss=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cs=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,js=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,as=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ms=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ns=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,is=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zs=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ts=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ys=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ps=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Os=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ls=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ls=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ws=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bf={alphahash_fragment:QH,alphahash_pars_fragment:AH,alphamap_fragment:_H,alphamap_pars_fragment:$H,alphatest_fragment:f2,alphatest_pars_fragment:v2,aomap_fragment:e2,aomap_pars_fragment:P2,batching_pars_vertex:n2,batching_vertex:z2,begin_vertex:t2,beginnormal_vertex:u2,bsdfs:r2,iridescence_fragment:b2,bumpmap_pars_fragment:X2,clipping_planes_fragment:d2,clipping_planes_pars_fragment:H2,clipping_planes_pars_vertex:x2,clipping_planes_vertex:s2,color_fragment:c2,color_pars_fragment:j2,color_pars_vertex:a2,color_vertex:m2,common:N2,cube_uv_reflection_fragment:i2,defaultnormal_vertex:Z2,displacementmap_pars_vertex:T2,displacementmap_vertex:y2,emissivemap_fragment:p2,emissivemap_pars_fragment:O2,colorspace_fragment:l2,colorspace_pars_fragment:L2,envmap_fragment:W2,envmap_common_pars_fragment:h2,envmap_pars_fragment:w2,envmap_pars_vertex:V2,envmap_physical_pars_fragment:S2,envmap_vertex:D2,fog_vertex:q2,fog_pars_vertex:o2,fog_fragment:M2,fog_pars_fragment:F2,gradientmap_pars_fragment:R2,lightmap_pars_fragment:G2,lights_lambert_fragment:k2,lights_lambert_pars_fragment:J2,lights_pars_begin:Y2,lights_toon_fragment:K2,lights_toon_pars_fragment:U2,lights_phong_fragment:I2,lights_phong_pars_fragment:g2,lights_physical_fragment:E2,lights_physical_pars_fragment:B2,lights_fragment_begin:C2,lights_fragment_maps:Q2,lights_fragment_end:A2,logdepthbuf_fragment:_2,logdepthbuf_pars_fragment:$2,logdepthbuf_pars_vertex:fx,logdepthbuf_vertex:vx,map_fragment:ex,map_pars_fragment:Px,map_particle_fragment:nx,map_particle_pars_fragment:zx,metalnessmap_fragment:tx,metalnessmap_pars_fragment:ux,morphinstance_vertex:rx,morphcolor_vertex:bx,morphnormal_vertex:Xx,morphtarget_pars_vertex:dx,morphtarget_vertex:Hx,normal_fragment_begin:xx,normal_fragment_maps:sx,normal_pars_fragment:cx,normal_pars_vertex:jx,normal_vertex:ax,normalmap_pars_fragment:mx,clearcoat_normal_fragment_begin:Nx,clearcoat_normal_fragment_maps:ix,clearcoat_pars_fragment:Zx,iridescence_pars_fragment:Tx,opaque_fragment:yx,packing:px,premultiplied_alpha_fragment:Ox,project_vertex:lx,dithering_fragment:Lx,dithering_pars_fragment:Wx,roughnessmap_fragment:hx,roughnessmap_pars_fragment:wx,shadowmap_pars_fragment:Vx,shadowmap_pars_vertex:Dx,shadowmap_vertex:qx,shadowmask_pars_fragment:ox,skinbase_vertex:Mx,skinning_pars_vertex:Fx,skinning_vertex:Rx,skinnormal_vertex:Gx,specularmap_fragment:kx,specularmap_pars_fragment:Jx,tonemapping_fragment:Yx,tonemapping_pars_fragment:Sx,transmission_fragment:Kx,transmission_pars_fragment:Ux,uv_pars_fragment:Ix,uv_pars_vertex:gx,uv_vertex:Ex,worldpos_vertex:Bx,background_vert:Cx,background_frag:Qx,backgroundCube_vert:Ax,backgroundCube_frag:_x,cube_vert:$x,cube_frag:fs,depth_vert:vs,depth_frag:es,distanceRGBA_vert:Ps,distanceRGBA_frag:ns,equirect_vert:zs,equirect_frag:ts,linedashed_vert:us,linedashed_frag:rs,meshbasic_vert:bs,meshbasic_frag:Xs,meshlambert_vert:ds,meshlambert_frag:Hs,meshmatcap_vert:xs,meshmatcap_frag:ss,meshnormal_vert:cs,meshnormal_frag:js,meshphong_vert:as,meshphong_frag:ms,meshphysical_vert:Ns,meshphysical_frag:is,meshtoon_vert:Zs,meshtoon_frag:Ts,points_vert:ys,points_frag:ps,shadow_vert:Os,shadow_frag:ls,sprite_vert:Ls,sprite_frag:Ws},jf={common:{diffuse:{value:new bf(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kf},alphaMap:{value:null},alphaMapTransform:{value:new Kf},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kf}},envmap:{envMap:{value:null},envMapRotation:{value:new Kf},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kf}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kf}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kf},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kf},normalScale:{value:new g(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kf},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kf}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kf}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kf}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bf(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bf(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kf},alphaTest:{value:0},uvTransform:{value:new Kf}},sprite:{diffuse:{value:new bf(16777215)},opacity:{value:1},center:{value:new g(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kf},alphaMap:{value:null},alphaMapTransform:{value:new Kf},alphaTest:{value:0}}},u7={basic:{uniforms:Pv([jf.common,jf.specularmap,jf.envmap,jf.aomap,jf.lightmap,jf.fog]),vertexShader:Bf.meshbasic_vert,fragmentShader:Bf.meshbasic_frag},lambert:{uniforms:Pv([jf.common,jf.specularmap,jf.envmap,jf.aomap,jf.lightmap,jf.emissivemap,jf.bumpmap,jf.normalmap,jf.displacementmap,jf.fog,jf.lights,{emissive:{value:new bf(0)}}]),vertexShader:Bf.meshlambert_vert,fragmentShader:Bf.meshlambert_frag},phong:{uniforms:Pv([jf.common,jf.specularmap,jf.envmap,jf.aomap,jf.lightmap,jf.emissivemap,jf.bumpmap,jf.normalmap,jf.displacementmap,jf.fog,jf.lights,{emissive:{value:new bf(0)},specular:{value:new bf(1118481)},shininess:{value:30}}]),vertexShader:Bf.meshphong_vert,fragmentShader:Bf.meshphong_frag},standard:{uniforms:Pv([jf.common,jf.envmap,jf.aomap,jf.lightmap,jf.emissivemap,jf.bumpmap,jf.normalmap,jf.displacementmap,jf.roughnessmap,jf.metalnessmap,jf.fog,jf.lights,{emissive:{value:new bf(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bf.meshphysical_vert,fragmentShader:Bf.meshphysical_frag},toon:{uniforms:Pv([jf.common,jf.aomap,jf.lightmap,jf.emissivemap,jf.bumpmap,jf.normalmap,jf.displacementmap,jf.gradientmap,jf.fog,jf.lights,{emissive:{value:new bf(0)}}]),vertexShader:Bf.meshtoon_vert,fragmentShader:Bf.meshtoon_frag},matcap:{uniforms:Pv([jf.common,jf.bumpmap,jf.normalmap,jf.displacementmap,jf.fog,{matcap:{value:null}}]),vertexShader:Bf.meshmatcap_vert,fragmentShader:Bf.meshmatcap_frag},points:{uniforms:Pv([jf.points,jf.fog]),vertexShader:Bf.points_vert,fragmentShader:Bf.points_frag},dashed:{uniforms:Pv([jf.common,jf.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bf.linedashed_vert,fragmentShader:Bf.linedashed_frag},depth:{uniforms:Pv([jf.common,jf.displacementmap]),vertexShader:Bf.depth_vert,fragmentShader:Bf.depth_frag},normal:{uniforms:Pv([jf.common,jf.bumpmap,jf.normalmap,jf.displacementmap,{opacity:{value:1}}]),vertexShader:Bf.meshnormal_vert,fragmentShader:Bf.meshnormal_frag},sprite:{uniforms:Pv([jf.sprite,jf.fog]),vertexShader:Bf.sprite_vert,fragmentShader:Bf.sprite_frag},background:{uniforms:{uvTransform:{value:new Kf},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bf.background_vert,fragmentShader:Bf.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kf}},vertexShader:Bf.backgroundCube_vert,fragmentShader:Bf.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bf.cube_vert,fragmentShader:Bf.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bf.equirect_vert,fragmentShader:Bf.equirect_frag},distanceRGBA:{uniforms:Pv([jf.common,jf.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bf.distanceRGBA_vert,fragmentShader:Bf.distanceRGBA_frag},shadow:{uniforms:Pv([jf.lights,jf.fog,{color:{value:new bf(0)},opacity:{value:1}}]),vertexShader:Bf.shadow_vert,fragmentShader:Bf.shadow_frag}};u7.physical={uniforms:Pv([u7.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kf},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kf},clearcoatNormalScale:{value:new g(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kf},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kf},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kf},sheen:{value:0},sheenColor:{value:new bf(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kf},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kf},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kf},transmissionSamplerSize:{value:new g},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kf},attenuationDistance:{value:0},attenuationColor:{value:new bf(0)},specularColor:{value:new bf(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kf},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kf},anisotropyVector:{value:new g},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kf}}]),vertexShader:Bf.meshphysical_vert,fragmentShader:Bf.meshphysical_frag};var ut={r:0,b:0,g:0},X9=new mv,hs=new of;function ws(n,f,v,e,P,z,t){let u=new bf(0),r=z===!0?0:1,b,X,d=null,H=0,x=null;function c(N){let m=N.isScene===!0?N.background:null;return m&&m.isTexture&&(m=(N.backgroundBlurriness>0?v:f).get(m)),m}function a(N){let m=!1,p=c(N);p===null?s(u,r):p&&p.isColor&&(s(p,1),m=!0);let l=n.xr.getEnvironmentBlendMode();l==="additive"?e.buffers.color.setClear(0,0,0,1,t):l==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,t),(n.autoClear||m)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function j(N,m){let p=c(m);p&&(p.isCubeTexture||p.mapping===P9)?(X===void 0&&(X=new _f(new Pe(1,1,1),new Q3({name:"BackgroundCubeMaterial",uniforms:b9(u7.backgroundCube.uniforms),vertexShader:u7.backgroundCube.vertexShader,fragmentShader:u7.backgroundCube.fragmentShader,side:g3,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),X.geometry.deleteAttribute("uv"),X.onBeforeRender=function(l,W,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(X.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),P.update(X)),X9.copy(m.backgroundRotation),X9.x*=-1,X9.y*=-1,X9.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(X9.y*=-1,X9.z*=-1),X.material.uniforms.envMap.value=p,X.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,X.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,X.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,X.material.uniforms.backgroundRotation.value.setFromMatrix4(hs.makeRotationFromEuler(X9)),X.material.toneMapped=Qf.getTransfer(p.colorSpace)!==H3,(d!==p||H!==p.version||x!==n.toneMapping)&&(X.material.needsUpdate=!0,d=p,H=p.version,x=n.toneMapping),X.layers.enableAll(),N.unshift(X,X.geometry,X.material,0,0,null)):p&&p.isTexture&&(b===void 0&&(b=new _f(new Xv(2,2),new Q3({name:"BackgroundMaterial",uniforms:b9(u7.background.uniforms),vertexShader:u7.background.vertexShader,fragmentShader:u7.background.fragmentShader,side:vv,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),b.geometry.deleteAttribute("normal"),Object.defineProperty(b.material,"map",{get:function(){return this.uniforms.t2D.value}}),P.update(b)),b.material.uniforms.t2D.value=p,b.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,b.material.toneMapped=Qf.getTransfer(p.colorSpace)!==H3,p.matrixAutoUpdate===!0&&p.updateMatrix(),b.material.uniforms.uvTransform.value.copy(p.matrix),(d!==p||H!==p.version||x!==n.toneMapping)&&(b.material.needsUpdate=!0,d=p,H=p.version,x=n.toneMapping),b.layers.enableAll(),N.unshift(b,b.geometry,b.material,0,0,null))}function s(N,m){N.getRGB(ut,jr(n)),e.buffers.color.setClear(ut.r,ut.g,ut.b,m,t)}function i(){X!==void 0&&(X.geometry.dispose(),X.material.dispose(),X=void 0),b!==void 0&&(b.geometry.dispose(),b.material.dispose(),b=void 0)}return{getClearColor:function(){return u},setClearColor:function(N,m=1){u.set(N),r=m,s(u,r)},getClearAlpha:function(){return r},setClearAlpha:function(N){r=N,s(u,r)},render:a,addToRenderList:j,dispose:i}}function Vs(n,f){let v=n.getParameter(n.MAX_VERTEX_ATTRIBS),e={},P=H(null),z=P,t=!1;function u(y,V,M,q,k){let J=!1,S=d(q,M,V);z!==S&&(z=S,b(z.object)),J=x(y,q,M,k),J&&c(y,q,M,k),k!==null&&f.update(k,n.ELEMENT_ARRAY_BUFFER),(J||t)&&(t=!1,m(y,V,M,q),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,f.get(k).buffer))}function r(){return n.createVertexArray()}function b(y){return n.bindVertexArray(y)}function X(y){return n.deleteVertexArray(y)}function d(y,V,M){let q=M.wireframe===!0,k=e[y.id];k===void 0&&(k={},e[y.id]=k);let J=k[V.id];J===void 0&&(J={},k[V.id]=J);let S=J[q];return S===void 0&&(S=H(r()),J[q]=S),S}function H(y){let V=[],M=[],q=[];for(let k=0;k<v;k++)V[k]=0,M[k]=0,q[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:M,attributeDivisors:q,object:y,attributes:{},index:null}}function x(y,V,M,q){let k=z.attributes,J=V.attributes,S=0,B=M.getAttributes();for(let Y in B)if(B[Y].location>=0){let df=k[Y],Zf=J[Y];if(Zf===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(Zf=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(Zf=y.instanceColor)),df===void 0||df.attribute!==Zf||Zf&&df.data!==Zf.data)return!0;S++}return z.attributesNum!==S||z.index!==q}function c(y,V,M,q){let k={},J=V.attributes,S=0,B=M.getAttributes();for(let Y in B)if(B[Y].location>=0){let df=J[Y];df===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(df=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(df=y.instanceColor));let Zf={};Zf.attribute=df,df&&df.data&&(Zf.data=df.data),k[Y]=Zf,S++}z.attributes=k,z.attributesNum=S,z.index=q}function a(){let y=z.newAttributes;for(let V=0,M=y.length;V<M;V++)y[V]=0}function j(y){s(y,0)}function s(y,V){let M=z.newAttributes,q=z.enabledAttributes,k=z.attributeDivisors;M[y]=1,q[y]===0&&(n.enableVertexAttribArray(y),q[y]=1),k[y]!==V&&(n.vertexAttribDivisor(y,V),k[y]=V)}function i(){let y=z.newAttributes,V=z.enabledAttributes;for(let M=0,q=V.length;M<q;M++)V[M]!==y[M]&&(n.disableVertexAttribArray(M),V[M]=0)}function N(y,V,M,q,k,J,S){S===!0?n.vertexAttribIPointer(y,V,M,k,J):n.vertexAttribPointer(y,V,M,q,k,J)}function m(y,V,M,q){a();let k=q.attributes,J=M.getAttributes(),S=V.defaultAttributeValues;for(let B in J){let Y=J[B];if(Y.location>=0){let nf=k[B];if(nf===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(nf=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(nf=y.instanceColor)),nf!==void 0){let df=nf.normalized,Zf=nf.itemSize,Yf=f.get(nf);if(Yf===void 0)continue;let f3=Yf.buffer,z3=Yf.type,t3=Yf.bytesPerElement,C=z3===n.INT||z3===n.UNSIGNED_INT||nf.gpuType===tn;if(nf.isInterleavedBufferAttribute){let ef=nf.data,yf=ef.stride,Df=nf.offset;if(ef.isInstancedInterleavedBuffer){for(let lf=0;lf<Y.locationSize;lf++)s(Y.location+lf,ef.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ef.meshPerAttribute*ef.count)}else for(let lf=0;lf<Y.locationSize;lf++)j(Y.location+lf);n.bindBuffer(n.ARRAY_BUFFER,f3);for(let lf=0;lf<Y.locationSize;lf++)N(Y.location+lf,Zf/Y.locationSize,z3,df,yf*t3,(Df+Zf/Y.locationSize*lf)*t3,C)}else{if(nf.isInstancedBufferAttribute){for(let ef=0;ef<Y.locationSize;ef++)s(Y.location+ef,nf.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=nf.meshPerAttribute*nf.count)}else for(let ef=0;ef<Y.locationSize;ef++)j(Y.location+ef);n.bindBuffer(n.ARRAY_BUFFER,f3);for(let ef=0;ef<Y.locationSize;ef++)N(Y.location+ef,Zf/Y.locationSize,z3,df,Zf*t3,Zf/Y.locationSize*ef*t3,C)}}else if(S!==void 0){let df=S[B];if(df!==void 0)switch(df.length){case 2:n.vertexAttrib2fv(Y.location,df);break;case 3:n.vertexAttrib3fv(Y.location,df);break;case 4:n.vertexAttrib4fv(Y.location,df);break;default:n.vertexAttrib1fv(Y.location,df)}}}}i()}function p(){w();for(let y in e){let V=e[y];for(let M in V){let q=V[M];for(let k in q)X(q[k].object),delete q[k];delete V[M]}delete e[y]}}function l(y){if(e[y.id]===void 0)return;let V=e[y.id];for(let M in V){let q=V[M];for(let k in q)X(q[k].object),delete q[k];delete V[M]}delete e[y.id]}function W(y){for(let V in e){let M=e[V];if(M[y.id]===void 0)continue;let q=M[y.id];for(let k in q)X(q[k].object),delete q[k];delete M[y.id]}}function w(){T(),t=!0,z!==P&&(z=P,b(z.object))}function T(){P.geometry=null,P.program=null,P.wireframe=!1}return{setup:u,reset:w,resetDefaultState:T,dispose:p,releaseStatesOfGeometry:l,releaseStatesOfProgram:W,initAttributes:a,enableAttribute:j,disableUnusedAttributes:i}}function Ds(n,f,v){let e;function P(b){e=b}function z(b,X){n.drawArrays(e,b,X),v.update(X,e,1)}function t(b,X,d){d!==0&&(n.drawArraysInstanced(e,b,X,d),v.update(X,e,d))}function u(b,X,d){if(d===0)return;f.get("WEBGL_multi_draw").multiDrawArraysWEBGL(e,b,0,X,0,d);let x=0;for(let c=0;c<d;c++)x+=X[c];v.update(x,e,1)}function r(b,X,d,H){if(d===0)return;let x=f.get("WEBGL_multi_draw");if(x===null)for(let c=0;c<b.length;c++)t(b[c],X[c],H[c]);else{x.multiDrawArraysInstancedWEBGL(e,b,0,X,0,H,0,d);let c=0;for(let a=0;a<d;a++)c+=X[a]*H[a];v.update(c,e,1)}}this.setMode=P,this.render=z,this.renderInstances=t,this.renderMultiDraw=u,this.renderMultiDrawInstances=r}function qs(n,f,v,e){let P;function z(){if(P!==void 0)return P;if(f.has("EXT_texture_filter_anisotropic")===!0){let W=f.get("EXT_texture_filter_anisotropic");P=n.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else P=0;return P}function t(W){return!(W!==U3&&e.convert(W)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(W){let w=W===z9&&(f.has("EXT_color_buffer_half_float")||f.has("EXT_color_buffer_float"));return!(W!==Kv&&e.convert(W)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&W!==B3&&!w)}function r(W){if(W==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";W="mediump"}return W==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let b=v.precision!==void 0?v.precision:"highp",X=r(b);X!==b&&(console.warn("THREE.WebGLRenderer:",b,"not supported, using",X,"instead."),b=X);let d=v.logarithmicDepthBuffer===!0,H=v.reversedDepthBuffer===!0&&f.has("EXT_clip_control"),x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),c=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),a=n.getParameter(n.MAX_TEXTURE_SIZE),j=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),s=n.getParameter(n.MAX_VERTEX_ATTRIBS),i=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),N=n.getParameter(n.MAX_VARYING_VECTORS),m=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),p=c>0,l=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:z,getMaxPrecision:r,textureFormatReadable:t,textureTypeReadable:u,precision:b,logarithmicDepthBuffer:d,reversedDepthBuffer:H,maxTextures:x,maxVertexTextures:c,maxTextureSize:a,maxCubemapSize:j,maxAttributes:s,maxVertexUniforms:i,maxVaryings:N,maxFragmentUniforms:m,vertexTextures:p,maxSamples:l}}function os(n){let f=this,v=null,e=0,P=!1,z=!1,t=new Lv,u=new Kf,r={value:null,needsUpdate:!1};this.uniform=r,this.numPlanes=0,this.numIntersection=0,this.init=function(d,H){let x=d.length!==0||H||e!==0||P;return P=H,e=d.length,x},this.beginShadows=function(){z=!0,X(null)},this.endShadows=function(){z=!1},this.setGlobalState=function(d,H){v=X(d,H,0)},this.setState=function(d,H,x){let c=d.clippingPlanes,a=d.clipIntersection,j=d.clipShadows,s=n.get(d);if(!P||c===null||c.length===0||z&&!j)z?X(null):b();else{let i=z?0:e,N=i*4,m=s.clippingState||null;r.value=m,m=X(c,H,N,x);for(let p=0;p!==N;++p)m[p]=v[p];s.clippingState=m,this.numIntersection=a?this.numPlanes:0,this.numPlanes+=i}};function b(){r.value!==v&&(r.value=v,r.needsUpdate=e>0),f.numPlanes=e,f.numIntersection=0}function X(d,H,x,c){let a=d!==null?d.length:0,j=null;if(a!==0){if(j=r.value,c!==!0||j===null){let s=x+a*4,i=H.matrixWorldInverse;u.getNormalMatrix(i),(j===null||j.length<s)&&(j=new Float32Array(s));for(let N=0,m=x;N!==a;++N,m+=4)t.copy(d[N]).applyMatrix4(i,u),t.normal.toArray(j,m),j[m+3]=t.constant}r.value=j,r.needsUpdate=!0}return f.numPlanes=a,f.numIntersection=0,j}}function Ms(n){let f=new WeakMap;function v(t,u){return u===be?t.mapping=N7:u===s8&&(t.mapping=R7),t}function e(t){if(t&&t.isTexture){let u=t.mapping;if(u===be||u===s8)if(f.has(t)){let r=f.get(t).texture;return v(r,t.mapping)}else{let r=t.image;if(r&&r.height>0){let b=new _8(r.height);return b.fromEquirectangularTexture(n,t),f.set(t,b),t.addEventListener("dispose",P),v(b.texture,t.mapping)}else return null}}return t}function P(t){let u=t.target;u.removeEventListener("dispose",P);let r=f.get(u);r!==void 0&&(f.delete(u),r.dispose())}function z(){f=new WeakMap}return{get:e,dispose:z}}var y8=4,SX=[.125,.215,.35,.446,.526,.582],x9=20,yr=new n7,KX=new bf,pr=null,Or=0,lr=0,Lr=!1,H9=(1+Math.sqrt(5))/2,T8=1/H9,UX=[new L(-H9,T8,0),new L(H9,T8,0),new L(-T8,0,H9),new L(T8,0,H9),new L(0,H9,-T8),new L(0,H9,T8),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Fs=new L,J7=class{constructor(f){this._renderer=f,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(f,v=0,e=.1,P=100,z={}){let{size:t=256,position:u=Fs}=z;pr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(t);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(f,e,P,r,u),v>0&&this._blur(r,0,0,v),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(f,v=null){return this._fromTexture(f,v)}fromCubemap(f,v=null){return this._fromTexture(f,v)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=EX(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gX(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(f){this._lodMax=Math.floor(Math.log2(f)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let f=0;f<this._lodPlanes.length;f++)this._lodPlanes[f].dispose()}_cleanup(f){this._renderer.setRenderTarget(pr,Or,lr),this._renderer.xr.enabled=Lr,f.scissorTest=!1,rt(f,0,0,f.width,f.height)}_fromTexture(f,v){f.mapping===N7||f.mapping===R7?this._setSize(f.image.length===0?16:f.image[0].width||f.image[0].image.width):this._setSize(f.image.width/4),pr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let e=v||this._allocateTargets();return this._textureToCubeUV(f,e),this._applyPMREM(e),this._cleanup(e),e}_allocateTargets(){let f=3*Math.max(this._cubeSize,112),v=4*this._cubeSize,e={magFilter:Z3,minFilter:Z3,generateMipmaps:!1,type:z9,format:U3,colorSpace:I3,depthBuffer:!1},P=IX(f,v,e);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==f||this._pingPongRenderTarget.height!==v){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=IX(f,v,e);let{_lodMax:z}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rs(z)),this._blurMaterial=Gs(z,f,v)}return P}_compileMaterial(f){let v=new _f(this._lodPlanes[0],f);this._renderer.compile(v,yr)}_sceneToCubeUV(f,v,e,P,z){let r=new j3(90,1,v,e),b=[1,-1,1,1,1,1],X=[1,1,1,-1,-1,-1],d=this._renderer,H=d.autoClear,x=d.toneMapping;d.getClearColor(KX),d.toneMapping=m7,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(P),d.clearDepth(),d.setRenderTarget(null));let a=new u3({name:"PMREM.Background",side:g3,depthWrite:!1,depthTest:!1}),j=new _f(new Pe,a),s=!1,i=f.background;i?i.isColor&&(a.color.copy(i),f.background=null,s=!0):(a.color.copy(KX),s=!0);for(let N=0;N<6;N++){let m=N%3;m===0?(r.up.set(0,b[N],0),r.position.set(z.x,z.y,z.z),r.lookAt(z.x+X[N],z.y,z.z)):m===1?(r.up.set(0,0,b[N]),r.position.set(z.x,z.y,z.z),r.lookAt(z.x,z.y+X[N],z.z)):(r.up.set(0,b[N],0),r.position.set(z.x,z.y,z.z),r.lookAt(z.x,z.y,z.z+X[N]));let p=this._cubeSize;rt(P,m*p,N>2?p:0,p,p),d.setRenderTarget(P),s&&d.render(j,r),d.render(f,r)}j.geometry.dispose(),j.material.dispose(),d.toneMapping=x,d.autoClear=H,f.background=i}_textureToCubeUV(f,v){let e=this._renderer,P=f.mapping===N7||f.mapping===R7;P?(this._cubemapMaterial===null&&(this._cubemapMaterial=EX()),this._cubemapMaterial.uniforms.flipEnvMap.value=f.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gX());let z=P?this._cubemapMaterial:this._equirectMaterial,t=new _f(this._lodPlanes[0],z),u=z.uniforms;u.envMap.value=f;let r=this._cubeSize;rt(v,0,0,3*r,2*r),e.setRenderTarget(v),e.render(t,yr)}_applyPMREM(f){let v=this._renderer,e=v.autoClear;v.autoClear=!1;let P=this._lodPlanes.length;for(let z=1;z<P;z++){let t=Math.sqrt(this._sigmas[z]*this._sigmas[z]-this._sigmas[z-1]*this._sigmas[z-1]),u=UX[(P-z-1)%UX.length];this._blur(f,z-1,z,t,u)}v.autoClear=e}_blur(f,v,e,P,z){let t=this._pingPongRenderTarget;this._halfBlur(f,t,v,e,P,"latitudinal",z),this._halfBlur(t,f,e,e,P,"longitudinal",z)}_halfBlur(f,v,e,P,z,t,u){let r=this._renderer,b=this._blurMaterial;t!=="latitudinal"&&t!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let X=3,d=new _f(this._lodPlanes[P],b),H=b.uniforms,x=this._sizeLods[e]-1,c=isFinite(z)?Math.PI/(2*x):2*Math.PI/(2*x9-1),a=z/c,j=isFinite(z)?1+Math.floor(X*a):x9;j>x9&&console.warn(`sigmaRadians, ${z}, is too large and will clip, as it requested ${j} samples when the maximum is set to ${x9}`);let s=[],i=0;for(let W=0;W<x9;++W){let w=W/a,T=Math.exp(-w*w/2);s.push(T),W===0?i+=T:W<j&&(i+=2*T)}for(let W=0;W<s.length;W++)s[W]=s[W]/i;H.envMap.value=f.texture,H.samples.value=j,H.weights.value=s,H.latitudinal.value=t==="latitudinal",u&&(H.poleAxis.value=u);let{_lodMax:N}=this;H.dTheta.value=c,H.mipInt.value=N-e;let m=this._sizeLods[P],p=3*m*(P>N-y8?P-N+y8:0),l=4*(this._cubeSize-m);rt(v,p,l,3*m,2*m),r.setRenderTarget(v),r.render(d,yr)}};function Rs(n){let f=[],v=[],e=[],P=n,z=n-y8+1+SX.length;for(let t=0;t<z;t++){let u=Math.pow(2,P);v.push(u);let r=1/u;t>n-y8?r=SX[t-n+y8-1]:t===0&&(r=0),e.push(r);let b=1/(u-2),X=-b,d=1+b,H=[X,X,d,X,d,d,X,X,d,d,X,d],x=6,c=6,a=3,j=2,s=1,i=new Float32Array(a*c*x),N=new Float32Array(j*c*x),m=new Float32Array(s*c*x);for(let l=0;l<x;l++){let W=l%3*2/3-1,w=l>2?0:-1,T=[W,w,0,W+2/3,w,0,W+2/3,w+1,0,W,w,0,W+2/3,w+1,0,W,w+1,0];i.set(T,a*c*l),N.set(H,j*c*l);let y=[l,l,l,l,l,l];m.set(y,s*c*l)}let p=new kf;p.setAttribute("position",new Af(i,a)),p.setAttribute("uv",new Af(N,j)),p.setAttribute("faceIndex",new Af(m,s)),f.push(p),P>y8&&P--}return{lodPlanes:f,sizeLods:v,sigmas:e}}function IX(n,f,v){let e=new C3(n,f,v);return e.texture.mapping=P9,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function rt(n,f,v,e,P){n.viewport.set(f,v,e,P),n.scissor.set(f,v,e,P)}function Gs(n,f,v){let e=new Float32Array(x9),P=new L(0,1,0);return new Q3({name:"SphericalGaussianBlur",defines:{n:x9,CUBEUV_TEXEL_WIDTH:1/f,CUBEUV_TEXEL_HEIGHT:1/v,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:P}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:a7,depthTest:!1,depthWrite:!1})}function gX(){return new Q3({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:a7,depthTest:!1,depthWrite:!1})}function EX(){return new Q3({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:a7,depthTest:!1,depthWrite:!1})}function Rr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ks(n){let f=new WeakMap,v=null;function e(u){if(u&&u.isTexture){let r=u.mapping,b=r===be||r===s8,X=r===N7||r===R7;if(b||X){let d=f.get(u),H=d!==void 0?d.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==H)return v===null&&(v=new J7(n)),d=b?v.fromEquirectangular(u,d):v.fromCubemap(u,d),d.texture.pmremVersion=u.pmremVersion,f.set(u,d),d.texture;if(d!==void 0)return d.texture;{let x=u.image;return b&&x&&x.height>0||X&&x&&P(x)?(v===null&&(v=new J7(n)),d=b?v.fromEquirectangular(u):v.fromCubemap(u),d.texture.pmremVersion=u.pmremVersion,f.set(u,d),u.addEventListener("dispose",z),d.texture):null}}}return u}function P(u){let r=0,b=6;for(let X=0;X<b;X++)u[X]!==void 0&&r++;return r===b}function z(u){let r=u.target;r.removeEventListener("dispose",z);let b=f.get(r);b!==void 0&&(f.delete(r),b.dispose())}function t(){f=new WeakMap,v!==null&&(v.dispose(),v=null)}return{get:e,dispose:t}}function Js(n){let f={};function v(e){if(f[e]!==void 0)return f[e];let P;switch(e){case"WEBGL_depth_texture":P=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":P=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":P=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":P=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:P=n.getExtension(e)}return f[e]=P,P}return{has:function(e){return v(e)!==null},init:function(){v("EXT_color_buffer_float"),v("WEBGL_clip_cull_distance"),v("OES_texture_float_linear"),v("EXT_color_buffer_half_float"),v("WEBGL_multisampled_render_to_texture"),v("WEBGL_render_shared_exponent")},get:function(e){let P=v(e);return P===null&&K9("THREE.WebGLRenderer: "+e+" extension not supported."),P}}}function Ys(n,f,v,e){let P={},z=new WeakMap;function t(d){let H=d.target;H.index!==null&&f.remove(H.index);for(let c in H.attributes)f.remove(H.attributes[c]);H.removeEventListener("dispose",t),delete P[H.id];let x=z.get(H);x&&(f.remove(x),z.delete(H)),e.releaseStatesOfGeometry(H),H.isInstancedBufferGeometry===!0&&delete H._maxInstanceCount,v.memory.geometries--}function u(d,H){return P[H.id]===!0||(H.addEventListener("dispose",t),P[H.id]=!0,v.memory.geometries++),H}function r(d){let H=d.attributes;for(let x in H)f.update(H[x],n.ARRAY_BUFFER)}function b(d){let H=[],x=d.index,c=d.attributes.position,a=0;if(x!==null){let i=x.array;a=x.version;for(let N=0,m=i.length;N<m;N+=3){let p=i[N+0],l=i[N+1],W=i[N+2];H.push(p,l,l,W,W,p)}}else if(c!==void 0){let i=c.array;a=c.version;for(let N=0,m=i.length/3-1;N<m;N+=3){let p=N+0,l=N+1,W=N+2;H.push(p,l,l,W,W,p)}}else return;let j=new(sr(H)?g9:I9)(H,1);j.version=a;let s=z.get(d);s&&f.remove(s),z.set(d,j)}function X(d){let H=z.get(d);if(H){let x=d.index;x!==null&&H.version<x.version&&b(d)}else b(d);return z.get(d)}return{get:u,update:r,getWireframeAttribute:X}}function Ss(n,f,v){let e;function P(H){e=H}let z,t;function u(H){z=H.type,t=H.bytesPerElement}function r(H,x){n.drawElements(e,x,z,H*t),v.update(x,e,1)}function b(H,x,c){c!==0&&(n.drawElementsInstanced(e,x,z,H*t,c),v.update(x,e,c))}function X(H,x,c){if(c===0)return;f.get("WEBGL_multi_draw").multiDrawElementsWEBGL(e,x,0,z,H,0,c);let j=0;for(let s=0;s<c;s++)j+=x[s];v.update(j,e,1)}function d(H,x,c,a){if(c===0)return;let j=f.get("WEBGL_multi_draw");if(j===null)for(let s=0;s<H.length;s++)b(H[s]/t,x[s],a[s]);else{j.multiDrawElementsInstancedWEBGL(e,x,0,z,H,0,a,0,c);let s=0;for(let i=0;i<c;i++)s+=x[i]*a[i];v.update(s,e,1)}}this.setMode=P,this.setIndex=u,this.render=r,this.renderInstances=b,this.renderMultiDraw=X,this.renderMultiDrawInstances=d}function Ks(n){let f={geometries:0,textures:0},v={frame:0,calls:0,triangles:0,points:0,lines:0};function e(z,t,u){switch(v.calls++,t){case n.TRIANGLES:v.triangles+=u*(z/3);break;case n.LINES:v.lines+=u*(z/2);break;case n.LINE_STRIP:v.lines+=u*(z-1);break;case n.LINE_LOOP:v.lines+=u*z;break;case n.POINTS:v.points+=u*z;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",t);break}}function P(){v.calls=0,v.triangles=0,v.points=0,v.lines=0}return{memory:f,render:v,programs:null,autoReset:!0,reset:P,update:e}}function Us(n,f,v){let e=new WeakMap,P=new n3;function z(t,u,r){let b=t.morphTargetInfluences,X=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=X!==void 0?X.length:0,H=e.get(u);if(H===void 0||H.count!==d){let y=function(){w.dispose(),e.delete(u),u.removeEventListener("dispose",y)};var x=y;H!==void 0&&H.texture.dispose();let c=u.morphAttributes.position!==void 0,a=u.morphAttributes.normal!==void 0,j=u.morphAttributes.color!==void 0,s=u.morphAttributes.position||[],i=u.morphAttributes.normal||[],N=u.morphAttributes.color||[],m=0;c===!0&&(m=1),a===!0&&(m=2),j===!0&&(m=3);let p=u.attributes.position.count*m,l=1;p>f.maxTextureSize&&(l=Math.ceil(p/f.maxTextureSize),p=f.maxTextureSize);let W=new Float32Array(p*l*4*d),w=new Re(W,p,l,d);w.type=B3,w.needsUpdate=!0;let T=m*4;for(let V=0;V<d;V++){let M=s[V],q=i[V],k=N[V],J=p*l*4*V;for(let S=0;S<M.count;S++){let B=S*T;c===!0&&(P.fromBufferAttribute(M,S),W[J+B+0]=P.x,W[J+B+1]=P.y,W[J+B+2]=P.z,W[J+B+3]=0),a===!0&&(P.fromBufferAttribute(q,S),W[J+B+4]=P.x,W[J+B+5]=P.y,W[J+B+6]=P.z,W[J+B+7]=0),j===!0&&(P.fromBufferAttribute(k,S),W[J+B+8]=P.x,W[J+B+9]=P.y,W[J+B+10]=P.z,W[J+B+11]=k.itemSize===4?P.w:1)}}H={count:d,texture:w,size:new g(p,l)},e.set(u,H),u.addEventListener("dispose",y)}if(t.isInstancedMesh===!0&&t.morphTexture!==null)r.getUniforms().setValue(n,"morphTexture",t.morphTexture,v);else{let c=0;for(let j=0;j<b.length;j++)c+=b[j];let a=u.morphTargetsRelative?1:1-c;r.getUniforms().setValue(n,"morphTargetBaseInfluence",a),r.getUniforms().setValue(n,"morphTargetInfluences",b)}r.getUniforms().setValue(n,"morphTargetsTexture",H.texture,v),r.getUniforms().setValue(n,"morphTargetsTextureSize",H.size)}return{update:z}}function Is(n,f,v,e){let P=new WeakMap;function z(r){let b=e.render.frame,X=r.geometry,d=f.get(r,X);if(P.get(d)!==b&&(f.update(d),P.set(d,b)),r.isInstancedMesh&&(r.hasEventListener("dispose",u)===!1&&r.addEventListener("dispose",u),P.get(r)!==b&&(v.update(r.instanceMatrix,n.ARRAY_BUFFER),r.instanceColor!==null&&v.update(r.instanceColor,n.ARRAY_BUFFER),P.set(r,b))),r.isSkinnedMesh){let H=r.skeleton;P.get(H)!==b&&(H.update(),P.set(H,b))}return d}function t(){P=new WeakMap}function u(r){let b=r.target;b.removeEventListener("dispose",u),v.remove(b.instanceMatrix),b.instanceColor!==null&&v.remove(b.instanceColor)}return{update:z,dispose:t}}var Hd=new T3,BX=new B9(1,1),xd=new Re,sd=new Ge,cd=new ne,CX=[],QX=[],AX=new Float32Array(16),_X=new Float32Array(9),$X=new Float32Array(4);function O8(n,f,v){let e=n[0];if(e<=0||e>0)return n;let P=f*v,z=CX[P];if(z===void 0&&(z=new Float32Array(P),CX[P]=z),f!==0){e.toArray(z,0);for(let t=1,u=0;t!==f;++t)u+=v,n[t].toArray(z,u)}return z}function k3(n,f){if(n.length!==f.length)return!1;for(let v=0,e=n.length;v<e;v++)if(n[v]!==f[v])return!1;return!0}function J3(n,f){for(let v=0,e=f.length;v<e;v++)n[v]=f[v]}function Xt(n,f){let v=QX[f];v===void 0&&(v=new Int32Array(f),QX[f]=v);for(let e=0;e!==f;++e)v[e]=n.allocateTextureUnit();return v}function gs(n,f){let v=this.cache;v[0]!==f&&(n.uniform1f(this.addr,f),v[0]=f)}function Es(n,f){let v=this.cache;if(f.x!==void 0)(v[0]!==f.x||v[1]!==f.y)&&(n.uniform2f(this.addr,f.x,f.y),v[0]=f.x,v[1]=f.y);else{if(k3(v,f))return;n.uniform2fv(this.addr,f),J3(v,f)}}function Bs(n,f){let v=this.cache;if(f.x!==void 0)(v[0]!==f.x||v[1]!==f.y||v[2]!==f.z)&&(n.uniform3f(this.addr,f.x,f.y,f.z),v[0]=f.x,v[1]=f.y,v[2]=f.z);else if(f.r!==void 0)(v[0]!==f.r||v[1]!==f.g||v[2]!==f.b)&&(n.uniform3f(this.addr,f.r,f.g,f.b),v[0]=f.r,v[1]=f.g,v[2]=f.b);else{if(k3(v,f))return;n.uniform3fv(this.addr,f),J3(v,f)}}function Cs(n,f){let v=this.cache;if(f.x!==void 0)(v[0]!==f.x||v[1]!==f.y||v[2]!==f.z||v[3]!==f.w)&&(n.uniform4f(this.addr,f.x,f.y,f.z,f.w),v[0]=f.x,v[1]=f.y,v[2]=f.z,v[3]=f.w);else{if(k3(v,f))return;n.uniform4fv(this.addr,f),J3(v,f)}}function Qs(n,f){let v=this.cache,e=f.elements;if(e===void 0){if(k3(v,f))return;n.uniformMatrix2fv(this.addr,!1,f),J3(v,f)}else{if(k3(v,e))return;$X.set(e),n.uniformMatrix2fv(this.addr,!1,$X),J3(v,e)}}function As(n,f){let v=this.cache,e=f.elements;if(e===void 0){if(k3(v,f))return;n.uniformMatrix3fv(this.addr,!1,f),J3(v,f)}else{if(k3(v,e))return;_X.set(e),n.uniformMatrix3fv(this.addr,!1,_X),J3(v,e)}}function _s(n,f){let v=this.cache,e=f.elements;if(e===void 0){if(k3(v,f))return;n.uniformMatrix4fv(this.addr,!1,f),J3(v,f)}else{if(k3(v,e))return;AX.set(e),n.uniformMatrix4fv(this.addr,!1,AX),J3(v,e)}}function $s(n,f){let v=this.cache;v[0]!==f&&(n.uniform1i(this.addr,f),v[0]=f)}function fc(n,f){let v=this.cache;if(f.x!==void 0)(v[0]!==f.x||v[1]!==f.y)&&(n.uniform2i(this.addr,f.x,f.y),v[0]=f.x,v[1]=f.y);else{if(k3(v,f))return;n.uniform2iv(this.addr,f),J3(v,f)}}function vc(n,f){let v=this.cache;if(f.x!==void 0)(v[0]!==f.x||v[1]!==f.y||v[2]!==f.z)&&(n.uniform3i(this.addr,f.x,f.y,f.z),v[0]=f.x,v[1]=f.y,v[2]=f.z);else{if(k3(v,f))return;n.uniform3iv(this.addr,f),J3(v,f)}}function ec(n,f){let v=this.cache;if(f.x!==void 0)(v[0]!==f.x||v[1]!==f.y||v[2]!==f.z||v[3]!==f.w)&&(n.uniform4i(this.addr,f.x,f.y,f.z,f.w),v[0]=f.x,v[1]=f.y,v[2]=f.z,v[3]=f.w);else{if(k3(v,f))return;n.uniform4iv(this.addr,f),J3(v,f)}}function Pc(n,f){let v=this.cache;v[0]!==f&&(n.uniform1ui(this.addr,f),v[0]=f)}function nc(n,f){let v=this.cache;if(f.x!==void 0)(v[0]!==f.x||v[1]!==f.y)&&(n.uniform2ui(this.addr,f.x,f.y),v[0]=f.x,v[1]=f.y);else{if(k3(v,f))return;n.uniform2uiv(this.addr,f),J3(v,f)}}function zc(n,f){let v=this.cache;if(f.x!==void 0)(v[0]!==f.x||v[1]!==f.y||v[2]!==f.z)&&(n.uniform3ui(this.addr,f.x,f.y,f.z),v[0]=f.x,v[1]=f.y,v[2]=f.z);else{if(k3(v,f))return;n.uniform3uiv(this.addr,f),J3(v,f)}}function tc(n,f){let v=this.cache;if(f.x!==void 0)(v[0]!==f.x||v[1]!==f.y||v[2]!==f.z||v[3]!==f.w)&&(n.uniform4ui(this.addr,f.x,f.y,f.z,f.w),v[0]=f.x,v[1]=f.y,v[2]=f.z,v[3]=f.w);else{if(k3(v,f))return;n.uniform4uiv(this.addr,f),J3(v,f)}}function uc(n,f,v){let e=this.cache,P=v.allocateTextureUnit();e[0]!==P&&(n.uniform1i(this.addr,P),e[0]=P);let z;this.type===n.SAMPLER_2D_SHADOW?(BX.compareFunction=nt,z=BX):z=Hd,v.setTexture2D(f||z,P)}function rc(n,f,v){let e=this.cache,P=v.allocateTextureUnit();e[0]!==P&&(n.uniform1i(this.addr,P),e[0]=P),v.setTexture3D(f||sd,P)}function bc(n,f,v){let e=this.cache,P=v.allocateTextureUnit();e[0]!==P&&(n.uniform1i(this.addr,P),e[0]=P),v.setTextureCube(f||cd,P)}function Xc(n,f,v){let e=this.cache,P=v.allocateTextureUnit();e[0]!==P&&(n.uniform1i(this.addr,P),e[0]=P),v.setTexture2DArray(f||xd,P)}function dc(n){switch(n){case 5126:return gs;case 35664:return Es;case 35665:return Bs;case 35666:return Cs;case 35674:return Qs;case 35675:return As;case 35676:return _s;case 5124:case 35670:return $s;case 35667:case 35671:return fc;case 35668:case 35672:return vc;case 35669:case 35673:return ec;case 5125:return Pc;case 36294:return nc;case 36295:return zc;case 36296:return tc;case 35678:case 36198:case 36298:case 36306:case 35682:return uc;case 35679:case 36299:case 36307:return rc;case 35680:case 36300:case 36308:case 36293:return bc;case 36289:case 36303:case 36311:case 36292:return Xc}}function Hc(n,f){n.uniform1fv(this.addr,f)}function xc(n,f){let v=O8(f,this.size,2);n.uniform2fv(this.addr,v)}function sc(n,f){let v=O8(f,this.size,3);n.uniform3fv(this.addr,v)}function cc(n,f){let v=O8(f,this.size,4);n.uniform4fv(this.addr,v)}function jc(n,f){let v=O8(f,this.size,4);n.uniformMatrix2fv(this.addr,!1,v)}function ac(n,f){let v=O8(f,this.size,9);n.uniformMatrix3fv(this.addr,!1,v)}function mc(n,f){let v=O8(f,this.size,16);n.uniformMatrix4fv(this.addr,!1,v)}function Nc(n,f){n.uniform1iv(this.addr,f)}function ic(n,f){n.uniform2iv(this.addr,f)}function Zc(n,f){n.uniform3iv(this.addr,f)}function Tc(n,f){n.uniform4iv(this.addr,f)}function yc(n,f){n.uniform1uiv(this.addr,f)}function pc(n,f){n.uniform2uiv(this.addr,f)}function Oc(n,f){n.uniform3uiv(this.addr,f)}function lc(n,f){n.uniform4uiv(this.addr,f)}function Lc(n,f,v){let e=this.cache,P=f.length,z=Xt(v,P);k3(e,z)||(n.uniform1iv(this.addr,z),J3(e,z));for(let t=0;t!==P;++t)v.setTexture2D(f[t]||Hd,z[t])}function Wc(n,f,v){let e=this.cache,P=f.length,z=Xt(v,P);k3(e,z)||(n.uniform1iv(this.addr,z),J3(e,z));for(let t=0;t!==P;++t)v.setTexture3D(f[t]||sd,z[t])}function hc(n,f,v){let e=this.cache,P=f.length,z=Xt(v,P);k3(e,z)||(n.uniform1iv(this.addr,z),J3(e,z));for(let t=0;t!==P;++t)v.setTextureCube(f[t]||cd,z[t])}function wc(n,f,v){let e=this.cache,P=f.length,z=Xt(v,P);k3(e,z)||(n.uniform1iv(this.addr,z),J3(e,z));for(let t=0;t!==P;++t)v.setTexture2DArray(f[t]||xd,z[t])}function Vc(n){switch(n){case 5126:return Hc;case 35664:return xc;case 35665:return sc;case 35666:return cc;case 35674:return jc;case 35675:return ac;case 35676:return mc;case 5124:case 35670:return Nc;case 35667:case 35671:return ic;case 35668:case 35672:return Zc;case 35669:case 35673:return Tc;case 5125:return yc;case 36294:return pc;case 36295:return Oc;case 36296:return lc;case 35678:case 36198:case 36298:case 36306:case 35682:return Lc;case 35679:case 36299:case 36307:return Wc;case 35680:case 36300:case 36308:case 36293:return hc;case 36289:case 36303:case 36311:case 36292:return wc}}var hr=class{constructor(f,v,e){this.id=f,this.addr=e,this.cache=[],this.type=v.type,this.setValue=dc(v.type)}},wr=class{constructor(f,v,e){this.id=f,this.addr=e,this.cache=[],this.type=v.type,this.size=v.size,this.setValue=Vc(v.type)}},Vr=class{constructor(f){this.id=f,this.seq=[],this.map={}}setValue(f,v,e){let P=this.seq;for(let z=0,t=P.length;z!==t;++z){let u=P[z];u.setValue(f,v[u.id],e)}}},Wr=/(\w+)(\])?(\[|\.)?/g;function fd(n,f){n.seq.push(f),n.map[f.id]=f}function Dc(n,f,v){let e=n.name,P=e.length;for(Wr.lastIndex=0;;){let z=Wr.exec(e),t=Wr.lastIndex,u=z[1],r=z[2]==="]",b=z[3];if(r&&(u=u|0),b===void 0||b==="["&&t+2===P){fd(v,b===void 0?new hr(u,n,f):new wr(u,n,f));break}else{let d=v.map[u];d===void 0&&(d=new Vr(u),fd(v,d)),v=d}}}var p8=class{constructor(f,v){this.seq=[],this.map={};let e=f.getProgramParameter(v,f.ACTIVE_UNIFORMS);for(let P=0;P<e;++P){let z=f.getActiveUniform(v,P),t=f.getUniformLocation(v,z.name);Dc(z,t,this)}}setValue(f,v,e,P){let z=this.map[v];z!==void 0&&z.setValue(f,e,P)}setOptional(f,v,e){let P=v[e];P!==void 0&&this.setValue(f,e,P)}static upload(f,v,e,P){for(let z=0,t=v.length;z!==t;++z){let u=v[z],r=e[u.id];r.needsUpdate!==!1&&u.setValue(f,r.value,P)}}static seqWithValue(f,v){let e=[];for(let P=0,z=f.length;P!==z;++P){let t=f[P];t.id in v&&e.push(t)}return e}};function vd(n,f,v){let e=n.createShader(f);return n.shaderSource(e,v),n.compileShader(e),e}var qc=37297,oc=0;function Mc(n,f){let v=n.split(`
`),e=[],P=Math.max(f-6,0),z=Math.min(f+6,v.length);for(let t=P;t<z;t++){let u=t+1;e.push(`${u===f?">":" "} ${u}: ${v[t]}`)}return e.join(`
`)}var ed=new Kf;function Fc(n){Qf._getMatrix(ed,Qf.workingColorSpace,n);let f=`mat3( ${ed.elements.map(v=>v.toFixed(4))} )`;switch(Qf.getTransfer(n)){case J9:return[f,"LinearTransferOETF"];case H3:return[f,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[f,"LinearTransferOETF"]}}function Pd(n,f,v){let e=n.getShaderParameter(f,n.COMPILE_STATUS),z=(n.getShaderInfoLog(f)||"").trim();if(e&&z==="")return"";let t=/ERROR: 0:(\d+)/.exec(z);if(t){let u=parseInt(t[1]);return v.toUpperCase()+`

`+z+`

`+Mc(n.getShaderSource(f),u)}else return z}function Rc(n,f){let v=Fc(f);return[`vec4 ${n}( vec4 value ) {`,`	return ${v[1]}( vec4( value.rgb * ${v[0]}, value.a ) );`,"}"].join(`
`)}function Gc(n,f){let v;switch(f){case Eu:v="Linear";break;case Bu:v="Reinhard";break;case Cu:v="Cineon";break;case nn:v="ACESFilmic";break;case Au:v="AgX";break;case _u:v="Neutral";break;case Qu:v="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",f),v="Linear"}return"vec3 "+n+"( vec3 color ) { return "+v+"ToneMapping( color ); }"}var bt=new L;function kc(){Qf.getLuminanceCoefficients(bt);let n=bt.x.toFixed(4),f=bt.y.toFixed(4),v=bt.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${f}, ${v} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jc(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sn).join(`
`)}function Yc(n){let f=[];for(let v in n){let e=n[v];e!==!1&&f.push("#define "+v+" "+e)}return f.join(`
`)}function Sc(n,f){let v={},e=n.getProgramParameter(f,n.ACTIVE_ATTRIBUTES);for(let P=0;P<e;P++){let z=n.getActiveAttrib(f,P),t=z.name,u=1;z.type===n.FLOAT_MAT2&&(u=2),z.type===n.FLOAT_MAT3&&(u=3),z.type===n.FLOAT_MAT4&&(u=4),v[t]={type:z.type,location:n.getAttribLocation(f,t),locationSize:u}}return v}function Sn(n){return n!==""}function nd(n,f){let v=f.numSpotLightShadows+f.numSpotLightMaps-f.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,f.numDirLights).replace(/NUM_SPOT_LIGHTS/g,f.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,f.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,v).replace(/NUM_RECT_AREA_LIGHTS/g,f.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,f.numPointLights).replace(/NUM_HEMI_LIGHTS/g,f.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,f.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,f.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,f.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,f.numPointLightShadows)}function zd(n,f){return n.replace(/NUM_CLIPPING_PLANES/g,f.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,f.numClippingPlanes-f.numClipIntersection)}var Kc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dr(n){return n.replace(Kc,Ic)}var Uc=new Map;function Ic(n,f){let v=Bf[f];if(v===void 0){let e=Uc.get(f);if(e!==void 0)v=Bf[e],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',f,e);else throw new Error("Can not resolve #include <"+f+">")}return Dr(v)}var gc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function td(n){return n.replace(gc,Ec)}function Ec(n,f,v,e){let P="";for(let z=parseInt(f);z<parseInt(v);z++)P+=e.replace(/\[\s*i\s*\]/g,"[ "+z+" ]").replace(/UNROLLED_LOOP_INDEX/g,z);return P}function ud(n){let f=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?f+=`
#define HIGH_PRECISION`:n.precision==="mediump"?f+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(f+=`
#define LOW_PRECISION`),f}function Bc(n){let f="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===I5?f="SHADOWMAP_TYPE_PCF":n.shadowMapType===QP?f="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===t7&&(f="SHADOWMAP_TYPE_VSM"),f}function Cc(n){let f="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case N7:case R7:f="ENVMAP_TYPE_CUBE";break;case P9:f="ENVMAP_TYPE_CUBE_UV";break}return f}function Qc(n){let f="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case R7:f="ENVMAP_MODE_REFRACTION";break}return f}function Ac(n){let f="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case x8:f="ENVMAP_BLENDING_MULTIPLY";break;case Iu:f="ENVMAP_BLENDING_MIX";break;case gu:f="ENVMAP_BLENDING_ADD";break}return f}function _c(n){let f=n.envMapCubeUVHeight;if(f===null)return null;let v=Math.log2(f)-2,e=1/f;return{texelWidth:1/(3*Math.max(Math.pow(2,v),112)),texelHeight:e,maxMip:v}}function $c(n,f,v,e){let P=n.getContext(),z=v.defines,t=v.vertexShader,u=v.fragmentShader,r=Bc(v),b=Cc(v),X=Qc(v),d=Ac(v),H=_c(v),x=Jc(v),c=Yc(z),a=P.createProgram(),j,s,i=v.glslVersion?"#version "+v.glslVersion+`
`:"";v.isRawShaderMaterial?(j=["#define SHADER_TYPE "+v.shaderType,"#define SHADER_NAME "+v.shaderName,c].filter(Sn).join(`
`),j.length>0&&(j+=`
`),s=["#define SHADER_TYPE "+v.shaderType,"#define SHADER_NAME "+v.shaderName,c].filter(Sn).join(`
`),s.length>0&&(s+=`
`)):(j=[ud(v),"#define SHADER_TYPE "+v.shaderType,"#define SHADER_NAME "+v.shaderName,c,v.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",v.batching?"#define USE_BATCHING":"",v.batchingColor?"#define USE_BATCHING_COLOR":"",v.instancing?"#define USE_INSTANCING":"",v.instancingColor?"#define USE_INSTANCING_COLOR":"",v.instancingMorph?"#define USE_INSTANCING_MORPH":"",v.useFog&&v.fog?"#define USE_FOG":"",v.useFog&&v.fogExp2?"#define FOG_EXP2":"",v.map?"#define USE_MAP":"",v.envMap?"#define USE_ENVMAP":"",v.envMap?"#define "+X:"",v.lightMap?"#define USE_LIGHTMAP":"",v.aoMap?"#define USE_AOMAP":"",v.bumpMap?"#define USE_BUMPMAP":"",v.normalMap?"#define USE_NORMALMAP":"",v.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",v.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",v.displacementMap?"#define USE_DISPLACEMENTMAP":"",v.emissiveMap?"#define USE_EMISSIVEMAP":"",v.anisotropy?"#define USE_ANISOTROPY":"",v.anisotropyMap?"#define USE_ANISOTROPYMAP":"",v.clearcoatMap?"#define USE_CLEARCOATMAP":"",v.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",v.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",v.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",v.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",v.specularMap?"#define USE_SPECULARMAP":"",v.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",v.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",v.roughnessMap?"#define USE_ROUGHNESSMAP":"",v.metalnessMap?"#define USE_METALNESSMAP":"",v.alphaMap?"#define USE_ALPHAMAP":"",v.alphaHash?"#define USE_ALPHAHASH":"",v.transmission?"#define USE_TRANSMISSION":"",v.transmissionMap?"#define USE_TRANSMISSIONMAP":"",v.thicknessMap?"#define USE_THICKNESSMAP":"",v.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",v.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",v.mapUv?"#define MAP_UV "+v.mapUv:"",v.alphaMapUv?"#define ALPHAMAP_UV "+v.alphaMapUv:"",v.lightMapUv?"#define LIGHTMAP_UV "+v.lightMapUv:"",v.aoMapUv?"#define AOMAP_UV "+v.aoMapUv:"",v.emissiveMapUv?"#define EMISSIVEMAP_UV "+v.emissiveMapUv:"",v.bumpMapUv?"#define BUMPMAP_UV "+v.bumpMapUv:"",v.normalMapUv?"#define NORMALMAP_UV "+v.normalMapUv:"",v.displacementMapUv?"#define DISPLACEMENTMAP_UV "+v.displacementMapUv:"",v.metalnessMapUv?"#define METALNESSMAP_UV "+v.metalnessMapUv:"",v.roughnessMapUv?"#define ROUGHNESSMAP_UV "+v.roughnessMapUv:"",v.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+v.anisotropyMapUv:"",v.clearcoatMapUv?"#define CLEARCOATMAP_UV "+v.clearcoatMapUv:"",v.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+v.clearcoatNormalMapUv:"",v.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+v.clearcoatRoughnessMapUv:"",v.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+v.iridescenceMapUv:"",v.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+v.iridescenceThicknessMapUv:"",v.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+v.sheenColorMapUv:"",v.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+v.sheenRoughnessMapUv:"",v.specularMapUv?"#define SPECULARMAP_UV "+v.specularMapUv:"",v.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+v.specularColorMapUv:"",v.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+v.specularIntensityMapUv:"",v.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+v.transmissionMapUv:"",v.thicknessMapUv?"#define THICKNESSMAP_UV "+v.thicknessMapUv:"",v.vertexTangents&&v.flatShading===!1?"#define USE_TANGENT":"",v.vertexColors?"#define USE_COLOR":"",v.vertexAlphas?"#define USE_COLOR_ALPHA":"",v.vertexUv1s?"#define USE_UV1":"",v.vertexUv2s?"#define USE_UV2":"",v.vertexUv3s?"#define USE_UV3":"",v.pointsUvs?"#define USE_POINTS_UV":"",v.flatShading?"#define FLAT_SHADED":"",v.skinning?"#define USE_SKINNING":"",v.morphTargets?"#define USE_MORPHTARGETS":"",v.morphNormals&&v.flatShading===!1?"#define USE_MORPHNORMALS":"",v.morphColors?"#define USE_MORPHCOLORS":"",v.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+v.morphTextureStride:"",v.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+v.morphTargetsCount:"",v.doubleSided?"#define DOUBLE_SIDED":"",v.flipSided?"#define FLIP_SIDED":"",v.shadowMapEnabled?"#define USE_SHADOWMAP":"",v.shadowMapEnabled?"#define "+r:"",v.sizeAttenuation?"#define USE_SIZEATTENUATION":"",v.numLightProbes>0?"#define USE_LIGHT_PROBES":"",v.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",v.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sn).join(`
`),s=[ud(v),"#define SHADER_TYPE "+v.shaderType,"#define SHADER_NAME "+v.shaderName,c,v.useFog&&v.fog?"#define USE_FOG":"",v.useFog&&v.fogExp2?"#define FOG_EXP2":"",v.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",v.map?"#define USE_MAP":"",v.matcap?"#define USE_MATCAP":"",v.envMap?"#define USE_ENVMAP":"",v.envMap?"#define "+b:"",v.envMap?"#define "+X:"",v.envMap?"#define "+d:"",H?"#define CUBEUV_TEXEL_WIDTH "+H.texelWidth:"",H?"#define CUBEUV_TEXEL_HEIGHT "+H.texelHeight:"",H?"#define CUBEUV_MAX_MIP "+H.maxMip+".0":"",v.lightMap?"#define USE_LIGHTMAP":"",v.aoMap?"#define USE_AOMAP":"",v.bumpMap?"#define USE_BUMPMAP":"",v.normalMap?"#define USE_NORMALMAP":"",v.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",v.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",v.emissiveMap?"#define USE_EMISSIVEMAP":"",v.anisotropy?"#define USE_ANISOTROPY":"",v.anisotropyMap?"#define USE_ANISOTROPYMAP":"",v.clearcoat?"#define USE_CLEARCOAT":"",v.clearcoatMap?"#define USE_CLEARCOATMAP":"",v.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",v.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",v.dispersion?"#define USE_DISPERSION":"",v.iridescence?"#define USE_IRIDESCENCE":"",v.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",v.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",v.specularMap?"#define USE_SPECULARMAP":"",v.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",v.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",v.roughnessMap?"#define USE_ROUGHNESSMAP":"",v.metalnessMap?"#define USE_METALNESSMAP":"",v.alphaMap?"#define USE_ALPHAMAP":"",v.alphaTest?"#define USE_ALPHATEST":"",v.alphaHash?"#define USE_ALPHAHASH":"",v.sheen?"#define USE_SHEEN":"",v.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",v.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",v.transmission?"#define USE_TRANSMISSION":"",v.transmissionMap?"#define USE_TRANSMISSIONMAP":"",v.thicknessMap?"#define USE_THICKNESSMAP":"",v.vertexTangents&&v.flatShading===!1?"#define USE_TANGENT":"",v.vertexColors||v.instancingColor||v.batchingColor?"#define USE_COLOR":"",v.vertexAlphas?"#define USE_COLOR_ALPHA":"",v.vertexUv1s?"#define USE_UV1":"",v.vertexUv2s?"#define USE_UV2":"",v.vertexUv3s?"#define USE_UV3":"",v.pointsUvs?"#define USE_POINTS_UV":"",v.gradientMap?"#define USE_GRADIENTMAP":"",v.flatShading?"#define FLAT_SHADED":"",v.doubleSided?"#define DOUBLE_SIDED":"",v.flipSided?"#define FLIP_SIDED":"",v.shadowMapEnabled?"#define USE_SHADOWMAP":"",v.shadowMapEnabled?"#define "+r:"",v.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",v.numLightProbes>0?"#define USE_LIGHT_PROBES":"",v.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",v.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",v.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",v.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",v.toneMapping!==m7?"#define TONE_MAPPING":"",v.toneMapping!==m7?Bf.tonemapping_pars_fragment:"",v.toneMapping!==m7?Gc("toneMapping",v.toneMapping):"",v.dithering?"#define DITHERING":"",v.opaque?"#define OPAQUE":"",Bf.colorspace_pars_fragment,Rc("linearToOutputTexel",v.outputColorSpace),kc(),v.useDepthPacking?"#define DEPTH_PACKING "+v.depthPacking:"",`
`].filter(Sn).join(`
`)),t=Dr(t),t=nd(t,v),t=zd(t,v),u=Dr(u),u=nd(u,v),u=zd(u,v),t=td(t),u=td(u),v.isRawShaderMaterial!==!0&&(i=`#version 300 es
`,j=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+j,s=["#define varying in",v.glslVersion===zt?"":"layout(location = 0) out highp vec4 pc_fragColor;",v.glslVersion===zt?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+s);let N=i+j+t,m=i+s+u,p=vd(P,P.VERTEX_SHADER,N),l=vd(P,P.FRAGMENT_SHADER,m);P.attachShader(a,p),P.attachShader(a,l),v.index0AttributeName!==void 0?P.bindAttribLocation(a,0,v.index0AttributeName):v.morphTargets===!0&&P.bindAttribLocation(a,0,"position"),P.linkProgram(a);function W(V){if(n.debug.checkShaderErrors){let M=P.getProgramInfoLog(a)||"",q=P.getShaderInfoLog(p)||"",k=P.getShaderInfoLog(l)||"",J=M.trim(),S=q.trim(),B=k.trim(),Y=!0,nf=!0;if(P.getProgramParameter(a,P.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(P,a,p,l);else{let df=Pd(P,p,"vertex"),Zf=Pd(P,l,"fragment");console.error("THREE.WebGLProgram: Shader Error "+P.getError()+" - VALIDATE_STATUS "+P.getProgramParameter(a,P.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+J+`
`+df+`
`+Zf)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(S===""||B==="")&&(nf=!1);nf&&(V.diagnostics={runnable:Y,programLog:J,vertexShader:{log:S,prefix:j},fragmentShader:{log:B,prefix:s}})}P.deleteShader(p),P.deleteShader(l),w=new p8(P,a),T=Sc(P,a)}let w;this.getUniforms=function(){return w===void 0&&W(this),w};let T;this.getAttributes=function(){return T===void 0&&W(this),T};let y=v.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=P.getProgramParameter(a,qc)),y},this.destroy=function(){e.releaseStatesOfProgram(this),P.deleteProgram(a),this.program=void 0},this.type=v.shaderType,this.name=v.shaderName,this.id=oc++,this.cacheKey=f,this.usedTimes=1,this.program=a,this.vertexShader=p,this.fragmentShader=l,this}var f1=0,qr=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(f){let v=f.vertexShader,e=f.fragmentShader,P=this._getShaderStage(v),z=this._getShaderStage(e),t=this._getShaderCacheForMaterial(f);return t.has(P)===!1&&(t.add(P),P.usedTimes++),t.has(z)===!1&&(t.add(z),z.usedTimes++),this}remove(f){let v=this.materialCache.get(f);for(let e of v)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(f),this}getVertexShaderID(f){return this._getShaderStage(f.vertexShader).id}getFragmentShaderID(f){return this._getShaderStage(f.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(f){let v=this.materialCache,e=v.get(f);return e===void 0&&(e=new Set,v.set(f,e)),e}_getShaderStage(f){let v=this.shaderCache,e=v.get(f);return e===void 0&&(e=new or(f),v.set(f,e)),e}},or=class{constructor(f){this.id=f1++,this.code=f,this.usedTimes=0}};function v1(n,f,v,e,P,z,t){let u=new ke,r=new qr,b=new Set,X=[],d=P.logarithmicDepthBuffer,H=P.vertexTextures,x=P.precision,c={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function a(T){return b.add(T),T===0?"uv":`uv${T}`}function j(T,y,V,M,q){let k=M.fog,J=q.geometry,S=T.isMeshStandardMaterial?M.environment:null,B=(T.isMeshStandardMaterial?v:f).get(T.envMap||S),Y=B&&B.mapping===P9?B.image.height:null,nf=c[T.type];T.precision!==null&&(x=P.getMaxPrecision(T.precision),x!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",x,"instead."));let df=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Zf=df!==void 0?df.length:0,Yf=0;J.morphAttributes.position!==void 0&&(Yf=1),J.morphAttributes.normal!==void 0&&(Yf=2),J.morphAttributes.color!==void 0&&(Yf=3);let f3,z3,t3,C;if(nf){let d3=u7[nf];f3=d3.vertexShader,z3=d3.fragmentShader}else f3=T.vertexShader,z3=T.fragmentShader,r.update(T),t3=r.getVertexShaderID(T),C=r.getFragmentShaderID(T);let ef=n.getRenderTarget(),yf=n.state.buffers.depth.getReversed(),Df=q.isInstancedMesh===!0,lf=q.isBatchedMesh===!0,v3=!!T.map,a3=!!T.matcap,D=!!B,vf=!!T.aoMap,_=!!T.lightMap,A=!!T.bumpMap,Q=!!T.normalMap,Hf=!!T.displacementMap,Pf=!!T.emissiveMap,xf=!!T.metalnessMap,Uf=!!T.roughnessMap,Sf=T.anisotropy>0,h=T.clearcoat>0,Z=T.dispersion>0,G=T.iridescence>0,I=T.sheen>0,ff=T.transmission>0,E=Sf&&!!T.anisotropyMap,wf=h&&!!T.clearcoatMap,Xf=h&&!!T.clearcoatNormalMap,Lf=h&&!!T.clearcoatRoughnessMap,Wf=G&&!!T.iridescenceMap,zf=G&&!!T.iridescenceThicknessMap,Nf=I&&!!T.sheenColorMap,Gf=I&&!!T.sheenRoughnessMap,Vf=!!T.specularMap,af=!!T.specularColorMap,Ef=!!T.specularIntensityMap,o=ff&&!!T.transmissionMap,rf=ff&&!!T.thicknessMap,cf=!!T.gradientMap,pf=!!T.alphaMap,tf=T.alphaTest>0,$=!!T.alphaHash,hf=!!T.extensions,If=m7;T.toneMapped&&(ef===null||ef.isXRRenderTarget===!0)&&(If=n.toneMapping);let m3={shaderID:nf,shaderType:T.type,shaderName:T.name,vertexShader:f3,fragmentShader:z3,defines:T.defines,customVertexShaderID:t3,customFragmentShaderID:C,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:x,batching:lf,batchingColor:lf&&q._colorsTexture!==null,instancing:Df,instancingColor:Df&&q.instanceColor!==null,instancingMorph:Df&&q.morphTexture!==null,supportsVertexTextures:H,outputColorSpace:ef===null?n.outputColorSpace:ef.isXRRenderTarget===!0?ef.texture.colorSpace:I3,alphaToCoverage:!!T.alphaToCoverage,map:v3,matcap:a3,envMap:D,envMapMode:D&&B.mapping,envMapCubeUVHeight:Y,aoMap:vf,lightMap:_,bumpMap:A,normalMap:Q,displacementMap:H&&Hf,emissiveMap:Pf,normalMapObjectSpace:Q&&T.normalMapType===zr,normalMapTangentSpace:Q&&T.normalMapType===k7,metalnessMap:xf,roughnessMap:Uf,anisotropy:Sf,anisotropyMap:E,clearcoat:h,clearcoatMap:wf,clearcoatNormalMap:Xf,clearcoatRoughnessMap:Lf,dispersion:Z,iridescence:G,iridescenceMap:Wf,iridescenceThicknessMap:zf,sheen:I,sheenColorMap:Nf,sheenRoughnessMap:Gf,specularMap:Vf,specularColorMap:af,specularIntensityMap:Ef,transmission:ff,transmissionMap:o,thicknessMap:rf,gradientMap:cf,opaque:T.transparent===!1&&T.blending===_7&&T.alphaToCoverage===!1,alphaMap:pf,alphaTest:tf,alphaHash:$,combine:T.combine,mapUv:v3&&a(T.map.channel),aoMapUv:vf&&a(T.aoMap.channel),lightMapUv:_&&a(T.lightMap.channel),bumpMapUv:A&&a(T.bumpMap.channel),normalMapUv:Q&&a(T.normalMap.channel),displacementMapUv:Hf&&a(T.displacementMap.channel),emissiveMapUv:Pf&&a(T.emissiveMap.channel),metalnessMapUv:xf&&a(T.metalnessMap.channel),roughnessMapUv:Uf&&a(T.roughnessMap.channel),anisotropyMapUv:E&&a(T.anisotropyMap.channel),clearcoatMapUv:wf&&a(T.clearcoatMap.channel),clearcoatNormalMapUv:Xf&&a(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lf&&a(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Wf&&a(T.iridescenceMap.channel),iridescenceThicknessMapUv:zf&&a(T.iridescenceThicknessMap.channel),sheenColorMapUv:Nf&&a(T.sheenColorMap.channel),sheenRoughnessMapUv:Gf&&a(T.sheenRoughnessMap.channel),specularMapUv:Vf&&a(T.specularMap.channel),specularColorMapUv:af&&a(T.specularColorMap.channel),specularIntensityMapUv:Ef&&a(T.specularIntensityMap.channel),transmissionMapUv:o&&a(T.transmissionMap.channel),thicknessMapUv:rf&&a(T.thicknessMap.channel),alphaMapUv:pf&&a(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Q||Sf),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!J.attributes.uv&&(v3||pf),fog:!!k,useFog:T.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yf,skinning:q.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Zf,morphTextureStride:Yf,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:t.numPlanes,numClipIntersection:t.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:If,decodeVideoTexture:v3&&T.map.isVideoTexture===!0&&Qf.getTransfer(T.map.colorSpace)===H3,decodeVideoTextureEmissive:Pf&&T.emissiveMap.isVideoTexture===!0&&Qf.getTransfer(T.emissiveMap.colorSpace)===H3,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===G3,flipSided:T.side===g3,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:hf&&T.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(hf&&T.extensions.multiDraw===!0||lf)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return m3.vertexUv1s=b.has(1),m3.vertexUv2s=b.has(2),m3.vertexUv3s=b.has(3),b.clear(),m3}function s(T){let y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(let V in T.defines)y.push(V),y.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(i(y,T),N(y,T),y.push(n.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function i(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function N(T,y){u.disableAll(),y.supportsVertexTextures&&u.enable(0),y.instancing&&u.enable(1),y.instancingColor&&u.enable(2),y.instancingMorph&&u.enable(3),y.matcap&&u.enable(4),y.envMap&&u.enable(5),y.normalMapObjectSpace&&u.enable(6),y.normalMapTangentSpace&&u.enable(7),y.clearcoat&&u.enable(8),y.iridescence&&u.enable(9),y.alphaTest&&u.enable(10),y.vertexColors&&u.enable(11),y.vertexAlphas&&u.enable(12),y.vertexUv1s&&u.enable(13),y.vertexUv2s&&u.enable(14),y.vertexUv3s&&u.enable(15),y.vertexTangents&&u.enable(16),y.anisotropy&&u.enable(17),y.alphaHash&&u.enable(18),y.batching&&u.enable(19),y.dispersion&&u.enable(20),y.batchingColor&&u.enable(21),y.gradientMap&&u.enable(22),T.push(u.mask),u.disableAll(),y.fog&&u.enable(0),y.useFog&&u.enable(1),y.flatShading&&u.enable(2),y.logarithmicDepthBuffer&&u.enable(3),y.reversedDepthBuffer&&u.enable(4),y.skinning&&u.enable(5),y.morphTargets&&u.enable(6),y.morphNormals&&u.enable(7),y.morphColors&&u.enable(8),y.premultipliedAlpha&&u.enable(9),y.shadowMapEnabled&&u.enable(10),y.doubleSided&&u.enable(11),y.flipSided&&u.enable(12),y.useDepthPacking&&u.enable(13),y.dithering&&u.enable(14),y.transmission&&u.enable(15),y.sheen&&u.enable(16),y.opaque&&u.enable(17),y.pointsUvs&&u.enable(18),y.decodeVideoTexture&&u.enable(19),y.decodeVideoTextureEmissive&&u.enable(20),y.alphaToCoverage&&u.enable(21),T.push(u.mask)}function m(T){let y=c[T.type],V;if(y){let M=u7[y];V=ar.clone(M.uniforms)}else V=T.uniforms;return V}function p(T,y){let V;for(let M=0,q=X.length;M<q;M++){let k=X[M];if(k.cacheKey===y){V=k,++V.usedTimes;break}}return V===void 0&&(V=new $c(n,y,T,z),X.push(V)),V}function l(T){if(--T.usedTimes===0){let y=X.indexOf(T);X[y]=X[X.length-1],X.pop(),T.destroy()}}function W(T){r.remove(T)}function w(){r.dispose()}return{getParameters:j,getProgramCacheKey:s,getUniforms:m,acquireProgram:p,releaseProgram:l,releaseShaderCache:W,programs:X,dispose:w}}function e1(){let n=new WeakMap;function f(t){return n.has(t)}function v(t){let u=n.get(t);return u===void 0&&(u={},n.set(t,u)),u}function e(t){n.delete(t)}function P(t,u,r){n.get(t)[u]=r}function z(){n=new WeakMap}return{has:f,get:v,remove:e,update:P,dispose:z}}function P1(n,f){return n.groupOrder!==f.groupOrder?n.groupOrder-f.groupOrder:n.renderOrder!==f.renderOrder?n.renderOrder-f.renderOrder:n.material.id!==f.material.id?n.material.id-f.material.id:n.z!==f.z?n.z-f.z:n.id-f.id}function rd(n,f){return n.groupOrder!==f.groupOrder?n.groupOrder-f.groupOrder:n.renderOrder!==f.renderOrder?n.renderOrder-f.renderOrder:n.z!==f.z?f.z-n.z:n.id-f.id}function bd(){let n=[],f=0,v=[],e=[],P=[];function z(){f=0,v.length=0,e.length=0,P.length=0}function t(d,H,x,c,a,j){let s=n[f];return s===void 0?(s={id:d.id,object:d,geometry:H,material:x,groupOrder:c,renderOrder:d.renderOrder,z:a,group:j},n[f]=s):(s.id=d.id,s.object=d,s.geometry=H,s.material=x,s.groupOrder=c,s.renderOrder=d.renderOrder,s.z=a,s.group=j),f++,s}function u(d,H,x,c,a,j){let s=t(d,H,x,c,a,j);x.transmission>0?e.push(s):x.transparent===!0?P.push(s):v.push(s)}function r(d,H,x,c,a,j){let s=t(d,H,x,c,a,j);x.transmission>0?e.unshift(s):x.transparent===!0?P.unshift(s):v.unshift(s)}function b(d,H){v.length>1&&v.sort(d||P1),e.length>1&&e.sort(H||rd),P.length>1&&P.sort(H||rd)}function X(){for(let d=f,H=n.length;d<H;d++){let x=n[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:v,transmissive:e,transparent:P,init:z,push:u,unshift:r,finish:X,sort:b}}function n1(){let n=new WeakMap;function f(e,P){let z=n.get(e),t;return z===void 0?(t=new bd,n.set(e,[t])):P>=z.length?(t=new bd,z.push(t)):t=z[P],t}function v(){n=new WeakMap}return{get:f,dispose:v}}function z1(){let n={};return{get:function(f){if(n[f.id]!==void 0)return n[f.id];let v;switch(f.type){case"DirectionalLight":v={direction:new L,color:new bf};break;case"SpotLight":v={position:new L,direction:new L,color:new bf,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":v={position:new L,color:new bf,distance:0,decay:0};break;case"HemisphereLight":v={direction:new L,skyColor:new bf,groundColor:new bf};break;case"RectAreaLight":v={color:new bf,position:new L,halfWidth:new L,halfHeight:new L};break}return n[f.id]=v,v}}}function t1(){let n={};return{get:function(f){if(n[f.id]!==void 0)return n[f.id];let v;switch(f.type){case"DirectionalLight":v={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new g};break;case"SpotLight":v={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new g};break;case"PointLight":v={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new g,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[f.id]=v,v}}}var u1=0;function r1(n,f){return(f.castShadow?2:0)-(n.castShadow?2:0)+(f.map?1:0)-(n.map?1:0)}function b1(n){let f=new z1,v=t1(),e={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let b=0;b<9;b++)e.probe.push(new L);let P=new L,z=new of,t=new of;function u(b){let X=0,d=0,H=0;for(let T=0;T<9;T++)e.probe[T].set(0,0,0);let x=0,c=0,a=0,j=0,s=0,i=0,N=0,m=0,p=0,l=0,W=0;b.sort(r1);for(let T=0,y=b.length;T<y;T++){let V=b[T],M=V.color,q=V.intensity,k=V.distance,J=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)X+=M.r*q,d+=M.g*q,H+=M.b*q;else if(V.isLightProbe){for(let S=0;S<9;S++)e.probe[S].addScaledVector(V.sh.coefficients[S],q);W++}else if(V.isDirectionalLight){let S=f.get(V);if(S.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let B=V.shadow,Y=v.get(V);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,e.directionalShadow[x]=Y,e.directionalShadowMap[x]=J,e.directionalShadowMatrix[x]=V.shadow.matrix,i++}e.directional[x]=S,x++}else if(V.isSpotLight){let S=f.get(V);S.position.setFromMatrixPosition(V.matrixWorld),S.color.copy(M).multiplyScalar(q),S.distance=k,S.coneCos=Math.cos(V.angle),S.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),S.decay=V.decay,e.spot[a]=S;let B=V.shadow;if(V.map&&(e.spotLightMap[p]=V.map,p++,B.updateMatrices(V),V.castShadow&&l++),e.spotLightMatrix[a]=B.matrix,V.castShadow){let Y=v.get(V);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,e.spotShadow[a]=Y,e.spotShadowMap[a]=J,m++}a++}else if(V.isRectAreaLight){let S=f.get(V);S.color.copy(M).multiplyScalar(q),S.halfWidth.set(V.width*.5,0,0),S.halfHeight.set(0,V.height*.5,0),e.rectArea[j]=S,j++}else if(V.isPointLight){let S=f.get(V);if(S.color.copy(V.color).multiplyScalar(V.intensity),S.distance=V.distance,S.decay=V.decay,V.castShadow){let B=V.shadow,Y=v.get(V);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,Y.shadowCameraNear=B.camera.near,Y.shadowCameraFar=B.camera.far,e.pointShadow[c]=Y,e.pointShadowMap[c]=J,e.pointShadowMatrix[c]=V.shadow.matrix,N++}e.point[c]=S,c++}else if(V.isHemisphereLight){let S=f.get(V);S.skyColor.copy(V.color).multiplyScalar(q),S.groundColor.copy(V.groundColor).multiplyScalar(q),e.hemi[s]=S,s++}}j>0&&(n.has("OES_texture_float_linear")===!0?(e.rectAreaLTC1=jf.LTC_FLOAT_1,e.rectAreaLTC2=jf.LTC_FLOAT_2):(e.rectAreaLTC1=jf.LTC_HALF_1,e.rectAreaLTC2=jf.LTC_HALF_2)),e.ambient[0]=X,e.ambient[1]=d,e.ambient[2]=H;let w=e.hash;(w.directionalLength!==x||w.pointLength!==c||w.spotLength!==a||w.rectAreaLength!==j||w.hemiLength!==s||w.numDirectionalShadows!==i||w.numPointShadows!==N||w.numSpotShadows!==m||w.numSpotMaps!==p||w.numLightProbes!==W)&&(e.directional.length=x,e.spot.length=a,e.rectArea.length=j,e.point.length=c,e.hemi.length=s,e.directionalShadow.length=i,e.directionalShadowMap.length=i,e.pointShadow.length=N,e.pointShadowMap.length=N,e.spotShadow.length=m,e.spotShadowMap.length=m,e.directionalShadowMatrix.length=i,e.pointShadowMatrix.length=N,e.spotLightMatrix.length=m+p-l,e.spotLightMap.length=p,e.numSpotLightShadowsWithMaps=l,e.numLightProbes=W,w.directionalLength=x,w.pointLength=c,w.spotLength=a,w.rectAreaLength=j,w.hemiLength=s,w.numDirectionalShadows=i,w.numPointShadows=N,w.numSpotShadows=m,w.numSpotMaps=p,w.numLightProbes=W,e.version=u1++)}function r(b,X){let d=0,H=0,x=0,c=0,a=0,j=X.matrixWorldInverse;for(let s=0,i=b.length;s<i;s++){let N=b[s];if(N.isDirectionalLight){let m=e.directional[d];m.direction.setFromMatrixPosition(N.matrixWorld),P.setFromMatrixPosition(N.target.matrixWorld),m.direction.sub(P),m.direction.transformDirection(j),d++}else if(N.isSpotLight){let m=e.spot[x];m.position.setFromMatrixPosition(N.matrixWorld),m.position.applyMatrix4(j),m.direction.setFromMatrixPosition(N.matrixWorld),P.setFromMatrixPosition(N.target.matrixWorld),m.direction.sub(P),m.direction.transformDirection(j),x++}else if(N.isRectAreaLight){let m=e.rectArea[c];m.position.setFromMatrixPosition(N.matrixWorld),m.position.applyMatrix4(j),t.identity(),z.copy(N.matrixWorld),z.premultiply(j),t.extractRotation(z),m.halfWidth.set(N.width*.5,0,0),m.halfHeight.set(0,N.height*.5,0),m.halfWidth.applyMatrix4(t),m.halfHeight.applyMatrix4(t),c++}else if(N.isPointLight){let m=e.point[H];m.position.setFromMatrixPosition(N.matrixWorld),m.position.applyMatrix4(j),H++}else if(N.isHemisphereLight){let m=e.hemi[a];m.direction.setFromMatrixPosition(N.matrixWorld),m.direction.transformDirection(j),a++}}}return{setup:u,setupView:r,state:e}}function Xd(n){let f=new b1(n),v=[],e=[];function P(X){b.camera=X,v.length=0,e.length=0}function z(X){v.push(X)}function t(X){e.push(X)}function u(){f.setup(v)}function r(X){f.setupView(v,X)}let b={lightsArray:v,shadowsArray:e,camera:null,lights:f,transmissionRenderTarget:{}};return{init:P,state:b,setupLights:u,setupLightsView:r,pushLight:z,pushShadow:t}}function X1(n){let f=new WeakMap;function v(P,z=0){let t=f.get(P),u;return t===void 0?(u=new Xd(n),f.set(P,[u])):z>=t.length?(u=new Xd(n),t.push(u)):u=t[z],u}function e(){f=new WeakMap}return{get:v,dispose:e}}var d1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function x1(n,f,v){let e=new q7,P=new g,z=new g,t=new n3,u=new z8({depthPacking:nr}),r=new t8,b={},X=v.maxTextureSize,d={[vv]:g3,[g3]:vv,[G3]:G3},H=new Q3({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new g},radius:{value:4}},vertexShader:d1,fragmentShader:H1}),x=H.clone();x.defines.HORIZONTAL_PASS=1;let c=new kf;c.setAttribute("position",new Af(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let a=new _f(c,H),j=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=I5;let s=this.type;this.render=function(l,W,w){if(j.enabled===!1||j.autoUpdate===!1&&j.needsUpdate===!1||l.length===0)return;let T=n.getRenderTarget(),y=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),M=n.state;M.setBlending(a7),M.buffers.depth.getReversed()===!0?M.buffers.color.setClear(0,0,0,0):M.buffers.color.setClear(1,1,1,1),M.buffers.depth.setTest(!0),M.setScissorTest(!1);let q=s!==t7&&this.type===t7,k=s===t7&&this.type!==t7;for(let J=0,S=l.length;J<S;J++){let B=l[J],Y=B.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;P.copy(Y.mapSize);let nf=Y.getFrameExtents();if(P.multiply(nf),z.copy(Y.mapSize),(P.x>X||P.y>X)&&(P.x>X&&(z.x=Math.floor(X/nf.x),P.x=z.x*nf.x,Y.mapSize.x=z.x),P.y>X&&(z.y=Math.floor(X/nf.y),P.y=z.y*nf.y,Y.mapSize.y=z.y)),Y.map===null||q===!0||k===!0){let Zf=this.type!==t7?{minFilter:q3,magFilter:q3}:{};Y.map!==null&&Y.map.dispose(),Y.map=new C3(P.x,P.y,Zf),Y.map.texture.name=B.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let df=Y.getViewportCount();for(let Zf=0;Zf<df;Zf++){let Yf=Y.getViewport(Zf);t.set(z.x*Yf.x,z.y*Yf.y,z.x*Yf.z,z.y*Yf.w),M.viewport(t),Y.updateMatrices(B,Zf),e=Y.getFrustum(),m(W,w,Y.camera,B,this.type)}Y.isPointLightShadow!==!0&&this.type===t7&&i(Y,w),Y.needsUpdate=!1}s=this.type,j.needsUpdate=!1,n.setRenderTarget(T,y,V)};function i(l,W){let w=f.update(a);H.defines.VSM_SAMPLES!==l.blurSamples&&(H.defines.VSM_SAMPLES=l.blurSamples,x.defines.VSM_SAMPLES=l.blurSamples,H.needsUpdate=!0,x.needsUpdate=!0),l.mapPass===null&&(l.mapPass=new C3(P.x,P.y)),H.uniforms.shadow_pass.value=l.map.texture,H.uniforms.resolution.value=l.mapSize,H.uniforms.radius.value=l.radius,n.setRenderTarget(l.mapPass),n.clear(),n.renderBufferDirect(W,null,w,H,a,null),x.uniforms.shadow_pass.value=l.mapPass.texture,x.uniforms.resolution.value=l.mapSize,x.uniforms.radius.value=l.radius,n.setRenderTarget(l.map),n.clear(),n.renderBufferDirect(W,null,w,x,a,null)}function N(l,W,w,T){let y=null,V=w.isPointLight===!0?l.customDistanceMaterial:l.customDepthMaterial;if(V!==void 0)y=V;else if(y=w.isPointLight===!0?r:u,n.localClippingEnabled&&W.clipShadows===!0&&Array.isArray(W.clippingPlanes)&&W.clippingPlanes.length!==0||W.displacementMap&&W.displacementScale!==0||W.alphaMap&&W.alphaTest>0||W.map&&W.alphaTest>0||W.alphaToCoverage===!0){let M=y.uuid,q=W.uuid,k=b[M];k===void 0&&(k={},b[M]=k);let J=k[q];J===void 0&&(J=y.clone(),k[q]=J,W.addEventListener("dispose",p)),y=J}if(y.visible=W.visible,y.wireframe=W.wireframe,T===t7?y.side=W.shadowSide!==null?W.shadowSide:W.side:y.side=W.shadowSide!==null?W.shadowSide:d[W.side],y.alphaMap=W.alphaMap,y.alphaTest=W.alphaToCoverage===!0?.5:W.alphaTest,y.map=W.map,y.clipShadows=W.clipShadows,y.clippingPlanes=W.clippingPlanes,y.clipIntersection=W.clipIntersection,y.displacementMap=W.displacementMap,y.displacementScale=W.displacementScale,y.displacementBias=W.displacementBias,y.wireframeLinewidth=W.wireframeLinewidth,y.linewidth=W.linewidth,w.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let M=n.properties.get(y);M.light=w}return y}function m(l,W,w,T,y){if(l.visible===!1)return;if(l.layers.test(W.layers)&&(l.isMesh||l.isLine||l.isPoints)&&(l.castShadow||l.receiveShadow&&y===t7)&&(!l.frustumCulled||e.intersectsObject(l))){l.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,l.matrixWorld);let q=f.update(l),k=l.material;if(Array.isArray(k)){let J=q.groups;for(let S=0,B=J.length;S<B;S++){let Y=J[S],nf=k[Y.materialIndex];if(nf&&nf.visible){let df=N(l,nf,T,y);l.onBeforeShadow(n,l,W,w,q,df,Y),n.renderBufferDirect(w,null,q,df,l,Y),l.onAfterShadow(n,l,W,w,q,df,Y)}}}else if(k.visible){let J=N(l,k,T,y);l.onBeforeShadow(n,l,W,w,q,J,null),n.renderBufferDirect(w,null,q,J,l,null),l.onAfterShadow(n,l,W,w,q,J,null)}}let M=l.children;for(let q=0,k=M.length;q<k;q++)m(M[q],W,w,T,y)}function p(l){l.target.removeEventListener("dispose",p);for(let w in b){let T=b[w],y=l.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}var s1={[AP]:_P,[$P]:en,[fn]:Pn,[$7]:vn,[_P]:AP,[en]:$P,[Pn]:fn,[vn]:$7};function c1(n,f){function v(){let o=!1,rf=new n3,cf=null,pf=new n3(0,0,0,0);return{setMask:function(tf){cf!==tf&&!o&&(n.colorMask(tf,tf,tf,tf),cf=tf)},setLocked:function(tf){o=tf},setClear:function(tf,$,hf,If,m3){m3===!0&&(tf*=If,$*=If,hf*=If),rf.set(tf,$,hf,If),pf.equals(rf)===!1&&(n.clearColor(tf,$,hf,If),pf.copy(rf))},reset:function(){o=!1,cf=null,pf.set(-1,0,0,0)}}}function e(){let o=!1,rf=!1,cf=null,pf=null,tf=null;return{setReversed:function($){if(rf!==$){let hf=f.get("EXT_clip_control");$?hf.clipControlEXT(hf.LOWER_LEFT_EXT,hf.ZERO_TO_ONE_EXT):hf.clipControlEXT(hf.LOWER_LEFT_EXT,hf.NEGATIVE_ONE_TO_ONE_EXT),rf=$;let If=tf;tf=null,this.setClear(If)}},getReversed:function(){return rf},setTest:function($){$?ef(n.DEPTH_TEST):yf(n.DEPTH_TEST)},setMask:function($){cf!==$&&!o&&(n.depthMask($),cf=$)},setFunc:function($){if(rf&&($=s1[$]),pf!==$){switch($){case AP:n.depthFunc(n.NEVER);break;case _P:n.depthFunc(n.ALWAYS);break;case $P:n.depthFunc(n.LESS);break;case $7:n.depthFunc(n.LEQUAL);break;case fn:n.depthFunc(n.EQUAL);break;case vn:n.depthFunc(n.GEQUAL);break;case en:n.depthFunc(n.GREATER);break;case Pn:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pf=$}},setLocked:function($){o=$},setClear:function($){tf!==$&&(rf&&($=1-$),n.clearDepth($),tf=$)},reset:function(){o=!1,cf=null,pf=null,tf=null,rf=!1}}}function P(){let o=!1,rf=null,cf=null,pf=null,tf=null,$=null,hf=null,If=null,m3=null;return{setTest:function(d3){o||(d3?ef(n.STENCIL_TEST):yf(n.STENCIL_TEST))},setMask:function(d3){rf!==d3&&!o&&(n.stencilMask(d3),rf=d3)},setFunc:function(d3,y7,r7){(cf!==d3||pf!==y7||tf!==r7)&&(n.stencilFunc(d3,y7,r7),cf=d3,pf=y7,tf=r7)},setOp:function(d3,y7,r7){($!==d3||hf!==y7||If!==r7)&&(n.stencilOp(d3,y7,r7),$=d3,hf=y7,If=r7)},setLocked:function(d3){o=d3},setClear:function(d3){m3!==d3&&(n.clearStencil(d3),m3=d3)},reset:function(){o=!1,rf=null,cf=null,pf=null,tf=null,$=null,hf=null,If=null,m3=null}}}let z=new v,t=new e,u=new P,r=new WeakMap,b=new WeakMap,X={},d={},H=new WeakMap,x=[],c=null,a=!1,j=null,s=null,i=null,N=null,m=null,p=null,l=null,W=new bf(0,0,0),w=0,T=!1,y=null,V=null,M=null,q=null,k=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),S=!1,B=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),S=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),S=B>=2);let nf=null,df={},Zf=n.getParameter(n.SCISSOR_BOX),Yf=n.getParameter(n.VIEWPORT),f3=new n3().fromArray(Zf),z3=new n3().fromArray(Yf);function t3(o,rf,cf,pf){let tf=new Uint8Array(4),$=n.createTexture();n.bindTexture(o,$),n.texParameteri(o,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(o,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let hf=0;hf<cf;hf++)o===n.TEXTURE_3D||o===n.TEXTURE_2D_ARRAY?n.texImage3D(rf,0,n.RGBA,1,1,pf,0,n.RGBA,n.UNSIGNED_BYTE,tf):n.texImage2D(rf+hf,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,tf);return $}let C={};C[n.TEXTURE_2D]=t3(n.TEXTURE_2D,n.TEXTURE_2D,1),C[n.TEXTURE_CUBE_MAP]=t3(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),C[n.TEXTURE_2D_ARRAY]=t3(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),C[n.TEXTURE_3D]=t3(n.TEXTURE_3D,n.TEXTURE_3D,1,1),z.setClear(0,0,0,1),t.setClear(1),u.setClear(0),ef(n.DEPTH_TEST),t.setFunc($7),A(!1),Q(U5),ef(n.CULL_FACE),vf(a7);function ef(o){X[o]!==!0&&(n.enable(o),X[o]=!0)}function yf(o){X[o]!==!1&&(n.disable(o),X[o]=!1)}function Df(o,rf){return d[o]!==rf?(n.bindFramebuffer(o,rf),d[o]=rf,o===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=rf),o===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=rf),!0):!1}function lf(o,rf){let cf=x,pf=!1;if(o){cf=H.get(rf),cf===void 0&&(cf=[],H.set(rf,cf));let tf=o.textures;if(cf.length!==tf.length||cf[0]!==n.COLOR_ATTACHMENT0){for(let $=0,hf=tf.length;$<hf;$++)cf[$]=n.COLOR_ATTACHMENT0+$;cf.length=tf.length,pf=!0}}else cf[0]!==n.BACK&&(cf[0]=n.BACK,pf=!0);pf&&n.drawBuffers(cf)}function v3(o){return c!==o?(n.useProgram(o),c=o,!0):!1}let a3={[D7]:n.FUNC_ADD,[Wu]:n.FUNC_SUBTRACT,[hu]:n.FUNC_REVERSE_SUBTRACT};a3[wu]=n.MIN,a3[Vu]=n.MAX;let D={[Du]:n.ZERO,[qu]:n.ONE,[ou]:n.SRC_COLOR,[B8]:n.SRC_ALPHA,[Ju]:n.SRC_ALPHA_SATURATE,[Gu]:n.DST_COLOR,[Fu]:n.DST_ALPHA,[Mu]:n.ONE_MINUS_SRC_COLOR,[C8]:n.ONE_MINUS_SRC_ALPHA,[ku]:n.ONE_MINUS_DST_COLOR,[Ru]:n.ONE_MINUS_DST_ALPHA,[Yu]:n.CONSTANT_COLOR,[Su]:n.ONE_MINUS_CONSTANT_COLOR,[Ku]:n.CONSTANT_ALPHA,[Uu]:n.ONE_MINUS_CONSTANT_ALPHA};function vf(o,rf,cf,pf,tf,$,hf,If,m3,d3){if(o===a7){a===!0&&(yf(n.BLEND),a=!1);return}if(a===!1&&(ef(n.BLEND),a=!0),o!==Lu){if(o!==j||d3!==T){if((s!==D7||m!==D7)&&(n.blendEquation(n.FUNC_ADD),s=D7,m=D7),d3)switch(o){case _7:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case g5:n.blendFunc(n.ONE,n.ONE);break;case E5:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case B5:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",o);break}else switch(o){case _7:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case g5:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case E5:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case B5:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",o);break}i=null,N=null,p=null,l=null,W.set(0,0,0),w=0,j=o,T=d3}return}tf=tf||rf,$=$||cf,hf=hf||pf,(rf!==s||tf!==m)&&(n.blendEquationSeparate(a3[rf],a3[tf]),s=rf,m=tf),(cf!==i||pf!==N||$!==p||hf!==l)&&(n.blendFuncSeparate(D[cf],D[pf],D[$],D[hf]),i=cf,N=pf,p=$,l=hf),(If.equals(W)===!1||m3!==w)&&(n.blendColor(If.r,If.g,If.b,m3),W.copy(If),w=m3),j=o,T=!1}function _(o,rf){o.side===G3?yf(n.CULL_FACE):ef(n.CULL_FACE);let cf=o.side===g3;rf&&(cf=!cf),A(cf),o.blending===_7&&o.transparent===!1?vf(a7):vf(o.blending,o.blendEquation,o.blendSrc,o.blendDst,o.blendEquationAlpha,o.blendSrcAlpha,o.blendDstAlpha,o.blendColor,o.blendAlpha,o.premultipliedAlpha),t.setFunc(o.depthFunc),t.setTest(o.depthTest),t.setMask(o.depthWrite),z.setMask(o.colorWrite);let pf=o.stencilWrite;u.setTest(pf),pf&&(u.setMask(o.stencilWriteMask),u.setFunc(o.stencilFunc,o.stencilRef,o.stencilFuncMask),u.setOp(o.stencilFail,o.stencilZFail,o.stencilZPass)),Pf(o.polygonOffset,o.polygonOffsetFactor,o.polygonOffsetUnits),o.alphaToCoverage===!0?ef(n.SAMPLE_ALPHA_TO_COVERAGE):yf(n.SAMPLE_ALPHA_TO_COVERAGE)}function A(o){y!==o&&(o?n.frontFace(n.CW):n.frontFace(n.CCW),y=o)}function Q(o){o!==Ou?(ef(n.CULL_FACE),o!==V&&(o===U5?n.cullFace(n.BACK):o===lu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):yf(n.CULL_FACE),V=o}function Hf(o){o!==M&&(S&&n.lineWidth(o),M=o)}function Pf(o,rf,cf){o?(ef(n.POLYGON_OFFSET_FILL),(q!==rf||k!==cf)&&(n.polygonOffset(rf,cf),q=rf,k=cf)):yf(n.POLYGON_OFFSET_FILL)}function xf(o){o?ef(n.SCISSOR_TEST):yf(n.SCISSOR_TEST)}function Uf(o){o===void 0&&(o=n.TEXTURE0+J-1),nf!==o&&(n.activeTexture(o),nf=o)}function Sf(o,rf,cf){cf===void 0&&(nf===null?cf=n.TEXTURE0+J-1:cf=nf);let pf=df[cf];pf===void 0&&(pf={type:void 0,texture:void 0},df[cf]=pf),(pf.type!==o||pf.texture!==rf)&&(nf!==cf&&(n.activeTexture(cf),nf=cf),n.bindTexture(o,rf||C[o]),pf.type=o,pf.texture=rf)}function h(){let o=df[nf];o!==void 0&&o.type!==void 0&&(n.bindTexture(o.type,null),o.type=void 0,o.texture=void 0)}function Z(){try{n.compressedTexImage2D(...arguments)}catch(o){console.error("THREE.WebGLState:",o)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(o){console.error("THREE.WebGLState:",o)}}function I(){try{n.texSubImage2D(...arguments)}catch(o){console.error("THREE.WebGLState:",o)}}function ff(){try{n.texSubImage3D(...arguments)}catch(o){console.error("THREE.WebGLState:",o)}}function E(){try{n.compressedTexSubImage2D(...arguments)}catch(o){console.error("THREE.WebGLState:",o)}}function wf(){try{n.compressedTexSubImage3D(...arguments)}catch(o){console.error("THREE.WebGLState:",o)}}function Xf(){try{n.texStorage2D(...arguments)}catch(o){console.error("THREE.WebGLState:",o)}}function Lf(){try{n.texStorage3D(...arguments)}catch(o){console.error("THREE.WebGLState:",o)}}function Wf(){try{n.texImage2D(...arguments)}catch(o){console.error("THREE.WebGLState:",o)}}function zf(){try{n.texImage3D(...arguments)}catch(o){console.error("THREE.WebGLState:",o)}}function Nf(o){f3.equals(o)===!1&&(n.scissor(o.x,o.y,o.z,o.w),f3.copy(o))}function Gf(o){z3.equals(o)===!1&&(n.viewport(o.x,o.y,o.z,o.w),z3.copy(o))}function Vf(o,rf){let cf=b.get(rf);cf===void 0&&(cf=new WeakMap,b.set(rf,cf));let pf=cf.get(o);pf===void 0&&(pf=n.getUniformBlockIndex(rf,o.name),cf.set(o,pf))}function af(o,rf){let pf=b.get(rf).get(o);r.get(rf)!==pf&&(n.uniformBlockBinding(rf,pf,o.__bindingPointIndex),r.set(rf,pf))}function Ef(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),t.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),X={},nf=null,df={},d={},H=new WeakMap,x=[],c=null,a=!1,j=null,s=null,i=null,N=null,m=null,p=null,l=null,W=new bf(0,0,0),w=0,T=!1,y=null,V=null,M=null,q=null,k=null,f3.set(0,0,n.canvas.width,n.canvas.height),z3.set(0,0,n.canvas.width,n.canvas.height),z.reset(),t.reset(),u.reset()}return{buffers:{color:z,depth:t,stencil:u},enable:ef,disable:yf,bindFramebuffer:Df,drawBuffers:lf,useProgram:v3,setBlending:vf,setMaterial:_,setFlipSided:A,setCullFace:Q,setLineWidth:Hf,setPolygonOffset:Pf,setScissorTest:xf,activeTexture:Uf,bindTexture:Sf,unbindTexture:h,compressedTexImage2D:Z,compressedTexImage3D:G,texImage2D:Wf,texImage3D:zf,updateUBOMapping:Vf,uniformBlockBinding:af,texStorage2D:Xf,texStorage3D:Lf,texSubImage2D:I,texSubImage3D:ff,compressedTexSubImage2D:E,compressedTexSubImage3D:wf,scissor:Nf,viewport:Gf,reset:Ef}}function j1(n,f,v,e,P,z,t){let u=f.has("WEBGL_multisampled_render_to_texture")?f.get("WEBGL_multisampled_render_to_texture"):null,r=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),b=new g,X=new WeakMap,d,H=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function c(h,Z){return x?new OffscreenCanvas(h,Z):S9("canvas")}function a(h,Z,G){let I=1,ff=Sf(h);if((ff.width>G||ff.height>G)&&(I=G/Math.max(ff.width,ff.height)),I<1)if(typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&h instanceof ImageBitmap||typeof VideoFrame<"u"&&h instanceof VideoFrame){let E=Math.floor(I*ff.width),wf=Math.floor(I*ff.height);d===void 0&&(d=c(E,wf));let Xf=Z?c(E,wf):d;return Xf.width=E,Xf.height=wf,Xf.getContext("2d").drawImage(h,0,0,E,wf),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ff.width+"x"+ff.height+") to ("+E+"x"+wf+")."),Xf}else return"data"in h&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ff.width+"x"+ff.height+")."),h;return h}function j(h){return h.generateMipmaps}function s(h){n.generateMipmap(h)}function i(h){return h.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:h.isWebGL3DRenderTarget?n.TEXTURE_3D:h.isWebGLArrayRenderTarget||h.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function N(h,Z,G,I,ff=!1){if(h!==null){if(n[h]!==void 0)return n[h];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+h+"'")}let E=Z;if(Z===n.RED&&(G===n.FLOAT&&(E=n.R32F),G===n.HALF_FLOAT&&(E=n.R16F),G===n.UNSIGNED_BYTE&&(E=n.R8)),Z===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(E=n.R8UI),G===n.UNSIGNED_SHORT&&(E=n.R16UI),G===n.UNSIGNED_INT&&(E=n.R32UI),G===n.BYTE&&(E=n.R8I),G===n.SHORT&&(E=n.R16I),G===n.INT&&(E=n.R32I)),Z===n.RG&&(G===n.FLOAT&&(E=n.RG32F),G===n.HALF_FLOAT&&(E=n.RG16F),G===n.UNSIGNED_BYTE&&(E=n.RG8)),Z===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(E=n.RG8UI),G===n.UNSIGNED_SHORT&&(E=n.RG16UI),G===n.UNSIGNED_INT&&(E=n.RG32UI),G===n.BYTE&&(E=n.RG8I),G===n.SHORT&&(E=n.RG16I),G===n.INT&&(E=n.RG32I)),Z===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(E=n.RGB8UI),G===n.UNSIGNED_SHORT&&(E=n.RGB16UI),G===n.UNSIGNED_INT&&(E=n.RGB32UI),G===n.BYTE&&(E=n.RGB8I),G===n.SHORT&&(E=n.RGB16I),G===n.INT&&(E=n.RGB32I)),Z===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(E=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(E=n.RGBA16UI),G===n.UNSIGNED_INT&&(E=n.RGBA32UI),G===n.BYTE&&(E=n.RGBA8I),G===n.SHORT&&(E=n.RGBA16I),G===n.INT&&(E=n.RGBA32I)),Z===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(E=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(E=n.R11F_G11F_B10F)),Z===n.RGBA){let wf=ff?J9:Qf.getTransfer(I);G===n.FLOAT&&(E=n.RGBA32F),G===n.HALF_FLOAT&&(E=n.RGBA16F),G===n.UNSIGNED_BYTE&&(E=wf===H3?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(E=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(E=n.RGB5_A1)}return(E===n.R16F||E===n.R32F||E===n.RG16F||E===n.RG32F||E===n.RGBA16F||E===n.RGBA32F)&&f.get("EXT_color_buffer_float"),E}function m(h,Z){let G;return h?Z===null||Z===i7||Z===t9?G=n.DEPTH24_STENCIL8:Z===B3?G=n.DEPTH32F_STENCIL8:Z===n9&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):Z===null||Z===i7||Z===t9?G=n.DEPTH_COMPONENT24:Z===B3?G=n.DEPTH_COMPONENT32F:Z===n9&&(G=n.DEPTH_COMPONENT16),G}function p(h,Z){return j(h)===!0||h.isFramebufferTexture&&h.minFilter!==q3&&h.minFilter!==Z3?Math.log2(Math.max(Z.width,Z.height))+1:h.mipmaps!==void 0&&h.mipmaps.length>0?h.mipmaps.length:h.isCompressedTexture&&Array.isArray(h.image)?Z.mipmaps.length:1}function l(h){let Z=h.target;Z.removeEventListener("dispose",l),w(Z),Z.isVideoTexture&&X.delete(Z)}function W(h){let Z=h.target;Z.removeEventListener("dispose",W),y(Z)}function w(h){let Z=e.get(h);if(Z.__webglInit===void 0)return;let G=h.source,I=H.get(G);if(I){let ff=I[Z.__cacheKey];ff.usedTimes--,ff.usedTimes===0&&T(h),Object.keys(I).length===0&&H.delete(G)}e.remove(h)}function T(h){let Z=e.get(h);n.deleteTexture(Z.__webglTexture);let G=h.source,I=H.get(G);delete I[Z.__cacheKey],t.memory.textures--}function y(h){let Z=e.get(h);if(h.depthTexture&&(h.depthTexture.dispose(),e.remove(h.depthTexture)),h.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(Z.__webglFramebuffer[I]))for(let ff=0;ff<Z.__webglFramebuffer[I].length;ff++)n.deleteFramebuffer(Z.__webglFramebuffer[I][ff]);else n.deleteFramebuffer(Z.__webglFramebuffer[I]);Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer[I])}else{if(Array.isArray(Z.__webglFramebuffer))for(let I=0;I<Z.__webglFramebuffer.length;I++)n.deleteFramebuffer(Z.__webglFramebuffer[I]);else n.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let I=0;I<Z.__webglColorRenderbuffer.length;I++)Z.__webglColorRenderbuffer[I]&&n.deleteRenderbuffer(Z.__webglColorRenderbuffer[I]);Z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}let G=h.textures;for(let I=0,ff=G.length;I<ff;I++){let E=e.get(G[I]);E.__webglTexture&&(n.deleteTexture(E.__webglTexture),t.memory.textures--),e.remove(G[I])}e.remove(h)}let V=0;function M(){V=0}function q(){let h=V;return h>=P.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+h+" texture units while this GPU supports only "+P.maxTextures),V+=1,h}function k(h){let Z=[];return Z.push(h.wrapS),Z.push(h.wrapT),Z.push(h.wrapR||0),Z.push(h.magFilter),Z.push(h.minFilter),Z.push(h.anisotropy),Z.push(h.internalFormat),Z.push(h.format),Z.push(h.type),Z.push(h.generateMipmaps),Z.push(h.premultiplyAlpha),Z.push(h.flipY),Z.push(h.unpackAlignment),Z.push(h.colorSpace),Z.join()}function J(h,Z){let G=e.get(h);if(h.isVideoTexture&&xf(h),h.isRenderTargetTexture===!1&&h.isExternalTexture!==!0&&h.version>0&&G.__version!==h.version){let I=h.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{C(G,h,Z);return}}else h.isExternalTexture&&(G.__webglTexture=h.sourceTexture?h.sourceTexture:null);v.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+Z)}function S(h,Z){let G=e.get(h);if(h.isRenderTargetTexture===!1&&h.version>0&&G.__version!==h.version){C(G,h,Z);return}v.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+Z)}function B(h,Z){let G=e.get(h);if(h.isRenderTargetTexture===!1&&h.version>0&&G.__version!==h.version){C(G,h,Z);return}v.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+Z)}function Y(h,Z){let G=e.get(h);if(h.version>0&&G.__version!==h.version){ef(G,h,Z);return}v.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+Z)}let nf={[Gv]:n.REPEAT,[uv]:n.CLAMP_TO_EDGE,[fe]:n.MIRRORED_REPEAT},df={[q3]:n.NEAREST,[c8]:n.NEAREST_MIPMAP_NEAREST,[G7]:n.NEAREST_MIPMAP_LINEAR,[Z3]:n.LINEAR,[Xe]:n.LINEAR_MIPMAP_NEAREST,[iv]:n.LINEAR_MIPMAP_LINEAR},Zf={[tr]:n.NEVER,[Hr]:n.ALWAYS,[ur]:n.LESS,[nt]:n.LEQUAL,[rr]:n.EQUAL,[dr]:n.GEQUAL,[br]:n.GREATER,[Xr]:n.NOTEQUAL};function Yf(h,Z){if(Z.type===B3&&f.has("OES_texture_float_linear")===!1&&(Z.magFilter===Z3||Z.magFilter===Xe||Z.magFilter===G7||Z.magFilter===iv||Z.minFilter===Z3||Z.minFilter===Xe||Z.minFilter===G7||Z.minFilter===iv)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(h,n.TEXTURE_WRAP_S,nf[Z.wrapS]),n.texParameteri(h,n.TEXTURE_WRAP_T,nf[Z.wrapT]),(h===n.TEXTURE_3D||h===n.TEXTURE_2D_ARRAY)&&n.texParameteri(h,n.TEXTURE_WRAP_R,nf[Z.wrapR]),n.texParameteri(h,n.TEXTURE_MAG_FILTER,df[Z.magFilter]),n.texParameteri(h,n.TEXTURE_MIN_FILTER,df[Z.minFilter]),Z.compareFunction&&(n.texParameteri(h,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(h,n.TEXTURE_COMPARE_FUNC,Zf[Z.compareFunction])),f.has("EXT_texture_filter_anisotropic")===!0){if(Z.magFilter===q3||Z.minFilter!==G7&&Z.minFilter!==iv||Z.type===B3&&f.has("OES_texture_float_linear")===!1)return;if(Z.anisotropy>1||e.get(Z).__currentAnisotropy){let G=f.get("EXT_texture_filter_anisotropic");n.texParameterf(h,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(Z.anisotropy,P.getMaxAnisotropy())),e.get(Z).__currentAnisotropy=Z.anisotropy}}}function f3(h,Z){let G=!1;h.__webglInit===void 0&&(h.__webglInit=!0,Z.addEventListener("dispose",l));let I=Z.source,ff=H.get(I);ff===void 0&&(ff={},H.set(I,ff));let E=k(Z);if(E!==h.__cacheKey){ff[E]===void 0&&(ff[E]={texture:n.createTexture(),usedTimes:0},t.memory.textures++,G=!0),ff[E].usedTimes++;let wf=ff[h.__cacheKey];wf!==void 0&&(ff[h.__cacheKey].usedTimes--,wf.usedTimes===0&&T(Z)),h.__cacheKey=E,h.__webglTexture=ff[E].texture}return G}function z3(h,Z,G){return Math.floor(Math.floor(h/G)/Z)}function t3(h,Z,G,I){let E=h.updateRanges;if(E.length===0)v.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,G,I,Z.data);else{E.sort((zf,Nf)=>zf.start-Nf.start);let wf=0;for(let zf=1;zf<E.length;zf++){let Nf=E[wf],Gf=E[zf],Vf=Nf.start+Nf.count,af=z3(Gf.start,Z.width,4),Ef=z3(Nf.start,Z.width,4);Gf.start<=Vf+1&&af===Ef&&z3(Gf.start+Gf.count-1,Z.width,4)===af?Nf.count=Math.max(Nf.count,Gf.start+Gf.count-Nf.start):(++wf,E[wf]=Gf)}E.length=wf+1;let Xf=n.getParameter(n.UNPACK_ROW_LENGTH),Lf=n.getParameter(n.UNPACK_SKIP_PIXELS),Wf=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,Z.width);for(let zf=0,Nf=E.length;zf<Nf;zf++){let Gf=E[zf],Vf=Math.floor(Gf.start/4),af=Math.ceil(Gf.count/4),Ef=Vf%Z.width,o=Math.floor(Vf/Z.width),rf=af,cf=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ef),n.pixelStorei(n.UNPACK_SKIP_ROWS,o),v.texSubImage2D(n.TEXTURE_2D,0,Ef,o,rf,cf,G,I,Z.data)}h.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Xf),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Lf),n.pixelStorei(n.UNPACK_SKIP_ROWS,Wf)}}function C(h,Z,G){let I=n.TEXTURE_2D;(Z.isDataArrayTexture||Z.isCompressedArrayTexture)&&(I=n.TEXTURE_2D_ARRAY),Z.isData3DTexture&&(I=n.TEXTURE_3D);let ff=f3(h,Z),E=Z.source;v.bindTexture(I,h.__webglTexture,n.TEXTURE0+G);let wf=e.get(E);if(E.version!==wf.__version||ff===!0){v.activeTexture(n.TEXTURE0+G);let Xf=Qf.getPrimaries(Qf.workingColorSpace),Lf=Z.colorSpace===Uv?null:Qf.getPrimaries(Z.colorSpace),Wf=Z.colorSpace===Uv||Xf===Lf?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,Z.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,Z.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wf);let zf=a(Z.image,!1,P.maxTextureSize);zf=Uf(Z,zf);let Nf=z.convert(Z.format,Z.colorSpace),Gf=z.convert(Z.type),Vf=N(Z.internalFormat,Nf,Gf,Z.colorSpace,Z.isVideoTexture);Yf(I,Z);let af,Ef=Z.mipmaps,o=Z.isVideoTexture!==!0,rf=wf.__version===void 0||ff===!0,cf=E.dataReady,pf=p(Z,zf);if(Z.isDepthTexture)Vf=m(Z.format===u9,Z.type),rf&&(o?v.texStorage2D(n.TEXTURE_2D,1,Vf,zf.width,zf.height):v.texImage2D(n.TEXTURE_2D,0,Vf,zf.width,zf.height,0,Nf,Gf,null));else if(Z.isDataTexture)if(Ef.length>0){o&&rf&&v.texStorage2D(n.TEXTURE_2D,pf,Vf,Ef[0].width,Ef[0].height);for(let tf=0,$=Ef.length;tf<$;tf++)af=Ef[tf],o?cf&&v.texSubImage2D(n.TEXTURE_2D,tf,0,0,af.width,af.height,Nf,Gf,af.data):v.texImage2D(n.TEXTURE_2D,tf,Vf,af.width,af.height,0,Nf,Gf,af.data);Z.generateMipmaps=!1}else o?(rf&&v.texStorage2D(n.TEXTURE_2D,pf,Vf,zf.width,zf.height),cf&&t3(Z,zf,Nf,Gf)):v.texImage2D(n.TEXTURE_2D,0,Vf,zf.width,zf.height,0,Nf,Gf,zf.data);else if(Z.isCompressedTexture)if(Z.isCompressedArrayTexture){o&&rf&&v.texStorage3D(n.TEXTURE_2D_ARRAY,pf,Vf,Ef[0].width,Ef[0].height,zf.depth);for(let tf=0,$=Ef.length;tf<$;tf++)if(af=Ef[tf],Z.format!==U3)if(Nf!==null)if(o){if(cf)if(Z.layerUpdates.size>0){let hf=tt(af.width,af.height,Z.format,Z.type);for(let If of Z.layerUpdates){let m3=af.data.subarray(If*hf/af.data.BYTES_PER_ELEMENT,(If+1)*hf/af.data.BYTES_PER_ELEMENT);v.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tf,0,0,If,af.width,af.height,1,Nf,m3)}Z.clearLayerUpdates()}else v.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tf,0,0,0,af.width,af.height,zf.depth,Nf,af.data)}else v.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tf,Vf,af.width,af.height,zf.depth,0,af.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else o?cf&&v.texSubImage3D(n.TEXTURE_2D_ARRAY,tf,0,0,0,af.width,af.height,zf.depth,Nf,Gf,af.data):v.texImage3D(n.TEXTURE_2D_ARRAY,tf,Vf,af.width,af.height,zf.depth,0,Nf,Gf,af.data)}else{o&&rf&&v.texStorage2D(n.TEXTURE_2D,pf,Vf,Ef[0].width,Ef[0].height);for(let tf=0,$=Ef.length;tf<$;tf++)af=Ef[tf],Z.format!==U3?Nf!==null?o?cf&&v.compressedTexSubImage2D(n.TEXTURE_2D,tf,0,0,af.width,af.height,Nf,af.data):v.compressedTexImage2D(n.TEXTURE_2D,tf,Vf,af.width,af.height,0,af.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):o?cf&&v.texSubImage2D(n.TEXTURE_2D,tf,0,0,af.width,af.height,Nf,Gf,af.data):v.texImage2D(n.TEXTURE_2D,tf,Vf,af.width,af.height,0,Nf,Gf,af.data)}else if(Z.isDataArrayTexture)if(o){if(rf&&v.texStorage3D(n.TEXTURE_2D_ARRAY,pf,Vf,zf.width,zf.height,zf.depth),cf)if(Z.layerUpdates.size>0){let tf=tt(zf.width,zf.height,Z.format,Z.type);for(let $ of Z.layerUpdates){let hf=zf.data.subarray($*tf/zf.data.BYTES_PER_ELEMENT,($+1)*tf/zf.data.BYTES_PER_ELEMENT);v.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,zf.width,zf.height,1,Nf,Gf,hf)}Z.clearLayerUpdates()}else v.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,zf.width,zf.height,zf.depth,Nf,Gf,zf.data)}else v.texImage3D(n.TEXTURE_2D_ARRAY,0,Vf,zf.width,zf.height,zf.depth,0,Nf,Gf,zf.data);else if(Z.isData3DTexture)o?(rf&&v.texStorage3D(n.TEXTURE_3D,pf,Vf,zf.width,zf.height,zf.depth),cf&&v.texSubImage3D(n.TEXTURE_3D,0,0,0,0,zf.width,zf.height,zf.depth,Nf,Gf,zf.data)):v.texImage3D(n.TEXTURE_3D,0,Vf,zf.width,zf.height,zf.depth,0,Nf,Gf,zf.data);else if(Z.isFramebufferTexture){if(rf)if(o)v.texStorage2D(n.TEXTURE_2D,pf,Vf,zf.width,zf.height);else{let tf=zf.width,$=zf.height;for(let hf=0;hf<pf;hf++)v.texImage2D(n.TEXTURE_2D,hf,Vf,tf,$,0,Nf,Gf,null),tf>>=1,$>>=1}}else if(Ef.length>0){if(o&&rf){let tf=Sf(Ef[0]);v.texStorage2D(n.TEXTURE_2D,pf,Vf,tf.width,tf.height)}for(let tf=0,$=Ef.length;tf<$;tf++)af=Ef[tf],o?cf&&v.texSubImage2D(n.TEXTURE_2D,tf,0,0,Nf,Gf,af):v.texImage2D(n.TEXTURE_2D,tf,Vf,Nf,Gf,af);Z.generateMipmaps=!1}else if(o){if(rf){let tf=Sf(zf);v.texStorage2D(n.TEXTURE_2D,pf,Vf,tf.width,tf.height)}cf&&v.texSubImage2D(n.TEXTURE_2D,0,0,0,Nf,Gf,zf)}else v.texImage2D(n.TEXTURE_2D,0,Vf,Nf,Gf,zf);j(Z)&&s(I),wf.__version=E.version,Z.onUpdate&&Z.onUpdate(Z)}h.__version=Z.version}function ef(h,Z,G){if(Z.image.length!==6)return;let I=f3(h,Z),ff=Z.source;v.bindTexture(n.TEXTURE_CUBE_MAP,h.__webglTexture,n.TEXTURE0+G);let E=e.get(ff);if(ff.version!==E.__version||I===!0){v.activeTexture(n.TEXTURE0+G);let wf=Qf.getPrimaries(Qf.workingColorSpace),Xf=Z.colorSpace===Uv?null:Qf.getPrimaries(Z.colorSpace),Lf=Z.colorSpace===Uv||wf===Xf?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,Z.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,Z.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lf);let Wf=Z.isCompressedTexture||Z.image[0].isCompressedTexture,zf=Z.image[0]&&Z.image[0].isDataTexture,Nf=[];for(let $=0;$<6;$++)!Wf&&!zf?Nf[$]=a(Z.image[$],!0,P.maxCubemapSize):Nf[$]=zf?Z.image[$].image:Z.image[$],Nf[$]=Uf(Z,Nf[$]);let Gf=Nf[0],Vf=z.convert(Z.format,Z.colorSpace),af=z.convert(Z.type),Ef=N(Z.internalFormat,Vf,af,Z.colorSpace),o=Z.isVideoTexture!==!0,rf=E.__version===void 0||I===!0,cf=ff.dataReady,pf=p(Z,Gf);Yf(n.TEXTURE_CUBE_MAP,Z);let tf;if(Wf){o&&rf&&v.texStorage2D(n.TEXTURE_CUBE_MAP,pf,Ef,Gf.width,Gf.height);for(let $=0;$<6;$++){tf=Nf[$].mipmaps;for(let hf=0;hf<tf.length;hf++){let If=tf[hf];Z.format!==U3?Vf!==null?o?cf&&v.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,hf,0,0,If.width,If.height,Vf,If.data):v.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,hf,Ef,If.width,If.height,0,If.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):o?cf&&v.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,hf,0,0,If.width,If.height,Vf,af,If.data):v.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,hf,Ef,If.width,If.height,0,Vf,af,If.data)}}}else{if(tf=Z.mipmaps,o&&rf){tf.length>0&&pf++;let $=Sf(Nf[0]);v.texStorage2D(n.TEXTURE_CUBE_MAP,pf,Ef,$.width,$.height)}for(let $=0;$<6;$++)if(zf){o?cf&&v.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Nf[$].width,Nf[$].height,Vf,af,Nf[$].data):v.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ef,Nf[$].width,Nf[$].height,0,Vf,af,Nf[$].data);for(let hf=0;hf<tf.length;hf++){let m3=tf[hf].image[$].image;o?cf&&v.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,hf+1,0,0,m3.width,m3.height,Vf,af,m3.data):v.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,hf+1,Ef,m3.width,m3.height,0,Vf,af,m3.data)}}else{o?cf&&v.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Vf,af,Nf[$]):v.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ef,Vf,af,Nf[$]);for(let hf=0;hf<tf.length;hf++){let If=tf[hf];o?cf&&v.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,hf+1,0,0,Vf,af,If.image[$]):v.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,hf+1,Ef,Vf,af,If.image[$])}}}j(Z)&&s(n.TEXTURE_CUBE_MAP),E.__version=ff.version,Z.onUpdate&&Z.onUpdate(Z)}h.__version=Z.version}function yf(h,Z,G,I,ff,E){let wf=z.convert(G.format,G.colorSpace),Xf=z.convert(G.type),Lf=N(G.internalFormat,wf,Xf,G.colorSpace),Wf=e.get(Z),zf=e.get(G);if(zf.__renderTarget=Z,!Wf.__hasExternalTextures){let Nf=Math.max(1,Z.width>>E),Gf=Math.max(1,Z.height>>E);ff===n.TEXTURE_3D||ff===n.TEXTURE_2D_ARRAY?v.texImage3D(ff,E,Lf,Nf,Gf,Z.depth,0,wf,Xf,null):v.texImage2D(ff,E,Lf,Nf,Gf,0,wf,Xf,null)}v.bindFramebuffer(n.FRAMEBUFFER,h),Pf(Z)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,I,ff,zf.__webglTexture,0,Hf(Z)):(ff===n.TEXTURE_2D||ff>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ff<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,I,ff,zf.__webglTexture,E),v.bindFramebuffer(n.FRAMEBUFFER,null)}function Df(h,Z,G){if(n.bindRenderbuffer(n.RENDERBUFFER,h),Z.depthBuffer){let I=Z.depthTexture,ff=I&&I.isDepthTexture?I.type:null,E=m(Z.stencilBuffer,ff),wf=Z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Xf=Hf(Z);Pf(Z)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xf,E,Z.width,Z.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xf,E,Z.width,Z.height):n.renderbufferStorage(n.RENDERBUFFER,E,Z.width,Z.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wf,n.RENDERBUFFER,h)}else{let I=Z.textures;for(let ff=0;ff<I.length;ff++){let E=I[ff],wf=z.convert(E.format,E.colorSpace),Xf=z.convert(E.type),Lf=N(E.internalFormat,wf,Xf,E.colorSpace),Wf=Hf(Z);G&&Pf(Z)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Wf,Lf,Z.width,Z.height):Pf(Z)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Wf,Lf,Z.width,Z.height):n.renderbufferStorage(n.RENDERBUFFER,Lf,Z.width,Z.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function lf(h,Z){if(Z&&Z.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(v.bindFramebuffer(n.FRAMEBUFFER,h),!(Z.depthTexture&&Z.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let I=e.get(Z.depthTexture);I.__renderTarget=Z,(!I.__webglTexture||Z.depthTexture.image.width!==Z.width||Z.depthTexture.image.height!==Z.height)&&(Z.depthTexture.image.width=Z.width,Z.depthTexture.image.height=Z.height,Z.depthTexture.needsUpdate=!0),J(Z.depthTexture,0);let ff=I.__webglTexture,E=Hf(Z);if(Z.depthTexture.format===oe)Pf(Z)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ff,0,E):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ff,0);else if(Z.depthTexture.format===u9)Pf(Z)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ff,0,E):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ff,0);else throw new Error("Unknown depthTexture format")}function v3(h){let Z=e.get(h),G=h.isWebGLCubeRenderTarget===!0;if(Z.__boundDepthTexture!==h.depthTexture){let I=h.depthTexture;if(Z.__depthDisposeCallback&&Z.__depthDisposeCallback(),I){let ff=()=>{delete Z.__boundDepthTexture,delete Z.__depthDisposeCallback,I.removeEventListener("dispose",ff)};I.addEventListener("dispose",ff),Z.__depthDisposeCallback=ff}Z.__boundDepthTexture=I}if(h.depthTexture&&!Z.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let I=h.texture.mipmaps;I&&I.length>0?lf(Z.__webglFramebuffer[0],h):lf(Z.__webglFramebuffer,h)}else if(G){Z.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(v.bindFramebuffer(n.FRAMEBUFFER,Z.__webglFramebuffer[I]),Z.__webglDepthbuffer[I]===void 0)Z.__webglDepthbuffer[I]=n.createRenderbuffer(),Df(Z.__webglDepthbuffer[I],h,!1);else{let ff=h.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,E=Z.__webglDepthbuffer[I];n.bindRenderbuffer(n.RENDERBUFFER,E),n.framebufferRenderbuffer(n.FRAMEBUFFER,ff,n.RENDERBUFFER,E)}}else{let I=h.texture.mipmaps;if(I&&I.length>0?v.bindFramebuffer(n.FRAMEBUFFER,Z.__webglFramebuffer[0]):v.bindFramebuffer(n.FRAMEBUFFER,Z.__webglFramebuffer),Z.__webglDepthbuffer===void 0)Z.__webglDepthbuffer=n.createRenderbuffer(),Df(Z.__webglDepthbuffer,h,!1);else{let ff=h.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,E=Z.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,E),n.framebufferRenderbuffer(n.FRAMEBUFFER,ff,n.RENDERBUFFER,E)}}v.bindFramebuffer(n.FRAMEBUFFER,null)}function a3(h,Z,G){let I=e.get(h);Z!==void 0&&yf(I.__webglFramebuffer,h,h.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&v3(h)}function D(h){let Z=h.texture,G=e.get(h),I=e.get(Z);h.addEventListener("dispose",W);let ff=h.textures,E=h.isWebGLCubeRenderTarget===!0,wf=ff.length>1;if(wf||(I.__webglTexture===void 0&&(I.__webglTexture=n.createTexture()),I.__version=Z.version,t.memory.textures++),E){G.__webglFramebuffer=[];for(let Xf=0;Xf<6;Xf++)if(Z.mipmaps&&Z.mipmaps.length>0){G.__webglFramebuffer[Xf]=[];for(let Lf=0;Lf<Z.mipmaps.length;Lf++)G.__webglFramebuffer[Xf][Lf]=n.createFramebuffer()}else G.__webglFramebuffer[Xf]=n.createFramebuffer()}else{if(Z.mipmaps&&Z.mipmaps.length>0){G.__webglFramebuffer=[];for(let Xf=0;Xf<Z.mipmaps.length;Xf++)G.__webglFramebuffer[Xf]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(wf)for(let Xf=0,Lf=ff.length;Xf<Lf;Xf++){let Wf=e.get(ff[Xf]);Wf.__webglTexture===void 0&&(Wf.__webglTexture=n.createTexture(),t.memory.textures++)}if(h.samples>0&&Pf(h)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],v.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Xf=0;Xf<ff.length;Xf++){let Lf=ff[Xf];G.__webglColorRenderbuffer[Xf]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Xf]);let Wf=z.convert(Lf.format,Lf.colorSpace),zf=z.convert(Lf.type),Nf=N(Lf.internalFormat,Wf,zf,Lf.colorSpace,h.isXRRenderTarget===!0),Gf=Hf(h);n.renderbufferStorageMultisample(n.RENDERBUFFER,Gf,Nf,h.width,h.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xf,n.RENDERBUFFER,G.__webglColorRenderbuffer[Xf])}n.bindRenderbuffer(n.RENDERBUFFER,null),h.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Df(G.__webglDepthRenderbuffer,h,!0)),v.bindFramebuffer(n.FRAMEBUFFER,null)}}if(E){v.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture),Yf(n.TEXTURE_CUBE_MAP,Z);for(let Xf=0;Xf<6;Xf++)if(Z.mipmaps&&Z.mipmaps.length>0)for(let Lf=0;Lf<Z.mipmaps.length;Lf++)yf(G.__webglFramebuffer[Xf][Lf],h,Z,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Xf,Lf);else yf(G.__webglFramebuffer[Xf],h,Z,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Xf,0);j(Z)&&s(n.TEXTURE_CUBE_MAP),v.unbindTexture()}else if(wf){for(let Xf=0,Lf=ff.length;Xf<Lf;Xf++){let Wf=ff[Xf],zf=e.get(Wf),Nf=n.TEXTURE_2D;(h.isWebGL3DRenderTarget||h.isWebGLArrayRenderTarget)&&(Nf=h.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),v.bindTexture(Nf,zf.__webglTexture),Yf(Nf,Wf),yf(G.__webglFramebuffer,h,Wf,n.COLOR_ATTACHMENT0+Xf,Nf,0),j(Wf)&&s(Nf)}v.unbindTexture()}else{let Xf=n.TEXTURE_2D;if((h.isWebGL3DRenderTarget||h.isWebGLArrayRenderTarget)&&(Xf=h.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),v.bindTexture(Xf,I.__webglTexture),Yf(Xf,Z),Z.mipmaps&&Z.mipmaps.length>0)for(let Lf=0;Lf<Z.mipmaps.length;Lf++)yf(G.__webglFramebuffer[Lf],h,Z,n.COLOR_ATTACHMENT0,Xf,Lf);else yf(G.__webglFramebuffer,h,Z,n.COLOR_ATTACHMENT0,Xf,0);j(Z)&&s(Xf),v.unbindTexture()}h.depthBuffer&&v3(h)}function vf(h){let Z=h.textures;for(let G=0,I=Z.length;G<I;G++){let ff=Z[G];if(j(ff)){let E=i(h),wf=e.get(ff).__webglTexture;v.bindTexture(E,wf),s(E),v.unbindTexture()}}}let _=[],A=[];function Q(h){if(h.samples>0){if(Pf(h)===!1){let Z=h.textures,G=h.width,I=h.height,ff=n.COLOR_BUFFER_BIT,E=h.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wf=e.get(h),Xf=Z.length>1;if(Xf)for(let Wf=0;Wf<Z.length;Wf++)v.bindFramebuffer(n.FRAMEBUFFER,wf.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wf,n.RENDERBUFFER,null),v.bindFramebuffer(n.FRAMEBUFFER,wf.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wf,n.TEXTURE_2D,null,0);v.bindFramebuffer(n.READ_FRAMEBUFFER,wf.__webglMultisampledFramebuffer);let Lf=h.texture.mipmaps;Lf&&Lf.length>0?v.bindFramebuffer(n.DRAW_FRAMEBUFFER,wf.__webglFramebuffer[0]):v.bindFramebuffer(n.DRAW_FRAMEBUFFER,wf.__webglFramebuffer);for(let Wf=0;Wf<Z.length;Wf++){if(h.resolveDepthBuffer&&(h.depthBuffer&&(ff|=n.DEPTH_BUFFER_BIT),h.stencilBuffer&&h.resolveStencilBuffer&&(ff|=n.STENCIL_BUFFER_BIT)),Xf){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wf.__webglColorRenderbuffer[Wf]);let zf=e.get(Z[Wf]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,zf,0)}n.blitFramebuffer(0,0,G,I,0,0,G,I,ff,n.NEAREST),r===!0&&(_.length=0,A.length=0,_.push(n.COLOR_ATTACHMENT0+Wf),h.depthBuffer&&h.resolveDepthBuffer===!1&&(_.push(E),A.push(E),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_))}if(v.bindFramebuffer(n.READ_FRAMEBUFFER,null),v.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Xf)for(let Wf=0;Wf<Z.length;Wf++){v.bindFramebuffer(n.FRAMEBUFFER,wf.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wf,n.RENDERBUFFER,wf.__webglColorRenderbuffer[Wf]);let zf=e.get(Z[Wf]).__webglTexture;v.bindFramebuffer(n.FRAMEBUFFER,wf.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wf,n.TEXTURE_2D,zf,0)}v.bindFramebuffer(n.DRAW_FRAMEBUFFER,wf.__webglMultisampledFramebuffer)}else if(h.depthBuffer&&h.resolveDepthBuffer===!1&&r){let Z=h.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Z])}}}function Hf(h){return Math.min(P.maxSamples,h.samples)}function Pf(h){let Z=e.get(h);return h.samples>0&&f.has("WEBGL_multisampled_render_to_texture")===!0&&Z.__useRenderToTexture!==!1}function xf(h){let Z=t.render.frame;X.get(h)!==Z&&(X.set(h,Z),h.update())}function Uf(h,Z){let G=h.colorSpace,I=h.format,ff=h.type;return h.isCompressedTexture===!0||h.isVideoTexture===!0||G!==I3&&G!==Uv&&(Qf.getTransfer(G)===H3?(I!==U3||ff!==Kv)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),Z}function Sf(h){return typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement?(b.width=h.naturalWidth||h.width,b.height=h.naturalHeight||h.height):typeof VideoFrame<"u"&&h instanceof VideoFrame?(b.width=h.displayWidth,b.height=h.displayHeight):(b.width=h.width,b.height=h.height),b}this.allocateTextureUnit=q,this.resetTextureUnits=M,this.setTexture2D=J,this.setTexture2DArray=S,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=a3,this.setupRenderTarget=D,this.updateRenderTargetMipmap=vf,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=v3,this.setupFrameBufferTexture=yf,this.useMultisampledRTT=Pf}function jd(n,f){function v(e,P=Uv){let z,t=Qf.getTransfer(P);if(e===Kv)return n.UNSIGNED_BYTE;if(e===un)return n.UNSIGNED_SHORT_4_4_4_4;if(e===rn)return n.UNSIGNED_SHORT_5_5_5_1;if(e===A5)return n.UNSIGNED_INT_5_9_9_9_REV;if(e===_5)return n.UNSIGNED_INT_10F_11F_11F_REV;if(e===C5)return n.BYTE;if(e===Q5)return n.SHORT;if(e===n9)return n.UNSIGNED_SHORT;if(e===tn)return n.INT;if(e===i7)return n.UNSIGNED_INT;if(e===B3)return n.FLOAT;if(e===z9)return n.HALF_FLOAT;if(e===$5)return n.ALPHA;if(e===ft)return n.RGB;if(e===U3)return n.RGBA;if(e===oe)return n.DEPTH_COMPONENT;if(e===u9)return n.DEPTH_STENCIL;if(e===bn)return n.RED;if(e===j8)return n.RED_INTEGER;if(e===vt)return n.RG;if(e===Xn)return n.RG_INTEGER;if(e===dn)return n.RGBA_INTEGER;if(e===a8||e===m8||e===N8||e===i8)if(t===H3)if(z=f.get("WEBGL_compressed_texture_s3tc_srgb"),z!==null){if(e===a8)return z.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(e===m8)return z.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(e===N8)return z.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(e===i8)return z.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(z=f.get("WEBGL_compressed_texture_s3tc"),z!==null){if(e===a8)return z.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===m8)return z.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===N8)return z.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===i8)return z.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(e===Hn||e===xn||e===sn||e===cn)if(z=f.get("WEBGL_compressed_texture_pvrtc"),z!==null){if(e===Hn)return z.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===xn)return z.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===sn)return z.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===cn)return z.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(e===jn||e===an||e===mn)if(z=f.get("WEBGL_compressed_texture_etc"),z!==null){if(e===jn||e===an)return t===H3?z.COMPRESSED_SRGB8_ETC2:z.COMPRESSED_RGB8_ETC2;if(e===mn)return t===H3?z.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:z.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(e===Nn||e===Zn||e===Tn||e===yn||e===pn||e===On||e===ln||e===Ln||e===Wn||e===hn||e===wn||e===Vn||e===Dn||e===qn)if(z=f.get("WEBGL_compressed_texture_astc"),z!==null){if(e===Nn)return t===H3?z.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:z.COMPRESSED_RGBA_ASTC_4x4_KHR;if(e===Zn)return t===H3?z.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:z.COMPRESSED_RGBA_ASTC_5x4_KHR;if(e===Tn)return t===H3?z.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:z.COMPRESSED_RGBA_ASTC_5x5_KHR;if(e===yn)return t===H3?z.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:z.COMPRESSED_RGBA_ASTC_6x5_KHR;if(e===pn)return t===H3?z.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:z.COMPRESSED_RGBA_ASTC_6x6_KHR;if(e===On)return t===H3?z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:z.COMPRESSED_RGBA_ASTC_8x5_KHR;if(e===ln)return t===H3?z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:z.COMPRESSED_RGBA_ASTC_8x6_KHR;if(e===Ln)return t===H3?z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:z.COMPRESSED_RGBA_ASTC_8x8_KHR;if(e===Wn)return t===H3?z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:z.COMPRESSED_RGBA_ASTC_10x5_KHR;if(e===hn)return t===H3?z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:z.COMPRESSED_RGBA_ASTC_10x6_KHR;if(e===wn)return t===H3?z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:z.COMPRESSED_RGBA_ASTC_10x8_KHR;if(e===Vn)return t===H3?z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:z.COMPRESSED_RGBA_ASTC_10x10_KHR;if(e===Dn)return t===H3?z.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:z.COMPRESSED_RGBA_ASTC_12x10_KHR;if(e===qn)return t===H3?z.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:z.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(e===on||e===Mn||e===Fn)if(z=f.get("EXT_texture_compression_bptc"),z!==null){if(e===on)return t===H3?z.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:z.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(e===Mn)return z.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(e===Fn)return z.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(e===Rn||e===Gn||e===kn||e===Jn)if(z=f.get("EXT_texture_compression_rgtc"),z!==null){if(e===Rn)return z.COMPRESSED_RED_RGTC1_EXT;if(e===Gn)return z.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(e===kn)return z.COMPRESSED_RED_GREEN_RGTC2_EXT;if(e===Jn)return z.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return e===t9?n.UNSIGNED_INT_24_8:n[e]!==void 0?n[e]:null}return{convert:v}}var a1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mr=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(f,v){if(this.texture===null){let e=new C9(f.texture);(f.depthNear!==v.depthNear||f.depthFar!==v.depthFar)&&(this.depthNear=f.depthNear,this.depthFar=f.depthFar),this.texture=e}}getMesh(f){if(this.texture!==null&&this.mesh===null){let v=f.cameras[0].viewport,e=new Q3({vertexShader:a1,fragmentShader:m1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:v.z},depthHeight:{value:v.w}}});this.mesh=new _f(new Xv(20,20),e)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fr=class extends hv{constructor(f,v){super();let e=this,P=null,z=1,t=null,u="local-floor",r=1,b=null,X=null,d=null,H=null,x=null,c=null,a=typeof XRWebGLBinding<"u",j=new Mr,s={},i=v.getContextAttributes(),N=null,m=null,p=[],l=[],W=new g,w=null,T=new j3;T.viewport=new n3;let y=new j3;y.viewport=new n3;let V=[T,y],M=new IP,q=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let ef=p[C];return ef===void 0&&(ef=new Ye,p[C]=ef),ef.getTargetRaySpace()},this.getControllerGrip=function(C){let ef=p[C];return ef===void 0&&(ef=new Ye,p[C]=ef),ef.getGripSpace()},this.getHand=function(C){let ef=p[C];return ef===void 0&&(ef=new Ye,p[C]=ef),ef.getHandSpace()};function J(C){let ef=l.indexOf(C.inputSource);if(ef===-1)return;let yf=p[ef];yf!==void 0&&(yf.update(C.inputSource,C.frame,b||t),yf.dispatchEvent({type:C.type,data:C.inputSource}))}function S(){P.removeEventListener("select",J),P.removeEventListener("selectstart",J),P.removeEventListener("selectend",J),P.removeEventListener("squeeze",J),P.removeEventListener("squeezestart",J),P.removeEventListener("squeezeend",J),P.removeEventListener("end",S),P.removeEventListener("inputsourceschange",B);for(let C=0;C<p.length;C++){let ef=l[C];ef!==null&&(l[C]=null,p[C].disconnect(ef))}q=null,k=null,j.reset();for(let C in s)delete s[C];f.setRenderTarget(N),x=null,H=null,d=null,P=null,m=null,t3.stop(),e.isPresenting=!1,f.setPixelRatio(w),f.setSize(W.width,W.height,!1),e.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){z=C,e.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){u=C,e.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return b||t},this.setReferenceSpace=function(C){b=C},this.getBaseLayer=function(){return H!==null?H:x},this.getBinding=function(){return d===null&&a&&(d=new XRWebGLBinding(P,v)),d},this.getFrame=function(){return c},this.getSession=function(){return P},this.setSession=async function(C){if(P=C,P!==null){if(N=f.getRenderTarget(),P.addEventListener("select",J),P.addEventListener("selectstart",J),P.addEventListener("selectend",J),P.addEventListener("squeeze",J),P.addEventListener("squeezestart",J),P.addEventListener("squeezeend",J),P.addEventListener("end",S),P.addEventListener("inputsourceschange",B),i.xrCompatible!==!0&&await v.makeXRCompatible(),w=f.getPixelRatio(),f.getSize(W),a&&"createProjectionLayer"in XRWebGLBinding.prototype){let yf=null,Df=null,lf=null;i.depth&&(lf=i.stencil?v.DEPTH24_STENCIL8:v.DEPTH_COMPONENT24,yf=i.stencil?u9:oe,Df=i.stencil?t9:i7);let v3={colorFormat:v.RGBA8,depthFormat:lf,scaleFactor:z};d=this.getBinding(),H=d.createProjectionLayer(v3),P.updateRenderState({layers:[H]}),f.setPixelRatio(1),f.setSize(H.textureWidth,H.textureHeight,!1),m=new C3(H.textureWidth,H.textureHeight,{format:U3,type:Kv,depthTexture:new B9(H.textureWidth,H.textureHeight,Df,void 0,void 0,void 0,void 0,void 0,void 0,yf),stencilBuffer:i.stencil,colorSpace:f.outputColorSpace,samples:i.antialias?4:0,resolveDepthBuffer:H.ignoreDepthValues===!1,resolveStencilBuffer:H.ignoreDepthValues===!1})}else{let yf={antialias:i.antialias,alpha:!0,depth:i.depth,stencil:i.stencil,framebufferScaleFactor:z};x=new XRWebGLLayer(P,v,yf),P.updateRenderState({baseLayer:x}),f.setPixelRatio(1),f.setSize(x.framebufferWidth,x.framebufferHeight,!1),m=new C3(x.framebufferWidth,x.framebufferHeight,{format:U3,type:Kv,colorSpace:f.outputColorSpace,stencilBuffer:i.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(r),b=null,t=await P.requestReferenceSpace(u),t3.setContext(P),t3.start(),e.isPresenting=!0,e.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(P!==null)return P.environmentBlendMode},this.getDepthTexture=function(){return j.getDepthTexture()};function B(C){for(let ef=0;ef<C.removed.length;ef++){let yf=C.removed[ef],Df=l.indexOf(yf);Df>=0&&(l[Df]=null,p[Df].disconnect(yf))}for(let ef=0;ef<C.added.length;ef++){let yf=C.added[ef],Df=l.indexOf(yf);if(Df===-1){for(let v3=0;v3<p.length;v3++)if(v3>=l.length){l.push(yf),Df=v3;break}else if(l[v3]===null){l[v3]=yf,Df=v3;break}if(Df===-1)break}let lf=p[Df];lf&&lf.connect(yf)}}let Y=new L,nf=new L;function df(C,ef,yf){Y.setFromMatrixPosition(ef.matrixWorld),nf.setFromMatrixPosition(yf.matrixWorld);let Df=Y.distanceTo(nf),lf=ef.projectionMatrix.elements,v3=yf.projectionMatrix.elements,a3=lf[14]/(lf[10]-1),D=lf[14]/(lf[10]+1),vf=(lf[9]+1)/lf[5],_=(lf[9]-1)/lf[5],A=(lf[8]-1)/lf[0],Q=(v3[8]+1)/v3[0],Hf=a3*A,Pf=a3*Q,xf=Df/(-A+Q),Uf=xf*-A;if(ef.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(Uf),C.translateZ(xf),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),lf[10]===-1)C.projectionMatrix.copy(ef.projectionMatrix),C.projectionMatrixInverse.copy(ef.projectionMatrixInverse);else{let Sf=a3+xf,h=D+xf,Z=Hf-Uf,G=Pf+(Df-Uf),I=vf*D/h*Sf,ff=_*D/h*Sf;C.projectionMatrix.makePerspective(Z,G,I,ff,Sf,h),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function Zf(C,ef){ef===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(ef.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(P===null)return;let ef=C.near,yf=C.far;j.texture!==null&&(j.depthNear>0&&(ef=j.depthNear),j.depthFar>0&&(yf=j.depthFar)),M.near=y.near=T.near=ef,M.far=y.far=T.far=yf,(q!==M.near||k!==M.far)&&(P.updateRenderState({depthNear:M.near,depthFar:M.far}),q=M.near,k=M.far),M.layers.mask=C.layers.mask|6,T.layers.mask=M.layers.mask&3,y.layers.mask=M.layers.mask&5;let Df=C.parent,lf=M.cameras;Zf(M,Df);for(let v3=0;v3<lf.length;v3++)Zf(lf[v3],Df);lf.length===2?df(M,T,y):M.projectionMatrix.copy(T.projectionMatrix),Yf(C,M,Df)};function Yf(C,ef,yf){yf===null?C.matrix.copy(ef.matrixWorld):(C.matrix.copy(yf.matrixWorld),C.matrix.invert(),C.matrix.multiply(ef.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(ef.projectionMatrix),C.projectionMatrixInverse.copy(ef.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=Fe*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(H===null&&x===null))return r},this.setFoveation=function(C){r=C,H!==null&&(H.fixedFoveation=C),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=C)},this.hasDepthSensing=function(){return j.texture!==null},this.getDepthSensingMesh=function(){return j.getMesh(M)},this.getCameraTexture=function(C){return s[C]};let f3=null;function z3(C,ef){if(X=ef.getViewerPose(b||t),c=ef,X!==null){let yf=X.views;x!==null&&(f.setRenderTargetFramebuffer(m,x.framebuffer),f.setRenderTarget(m));let Df=!1;yf.length!==M.cameras.length&&(M.cameras.length=0,Df=!0);for(let D=0;D<yf.length;D++){let vf=yf[D],_=null;if(x!==null)_=x.getViewport(vf);else{let Q=d.getViewSubImage(H,vf);_=Q.viewport,D===0&&(f.setRenderTargetTextures(m,Q.colorTexture,Q.depthStencilTexture),f.setRenderTarget(m))}let A=V[D];A===void 0&&(A=new j3,A.layers.enable(D),A.viewport=new n3,V[D]=A),A.matrix.fromArray(vf.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(vf.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(_.x,_.y,_.width,_.height),D===0&&(M.matrix.copy(A.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Df===!0&&M.cameras.push(A)}let lf=P.enabledFeatures;if(lf&&lf.includes("depth-sensing")&&P.depthUsage=="gpu-optimized"&&a){d=e.getBinding();let D=d.getDepthInformation(yf[0]);D&&D.isValid&&D.texture&&j.init(D,P.renderState)}if(lf&&lf.includes("camera-access")&&a){f.state.unbindTexture(),d=e.getBinding();for(let D=0;D<yf.length;D++){let vf=yf[D].camera;if(vf){let _=s[vf];_||(_=new C9,s[vf]=_);let A=d.getCameraImage(vf);_.sourceTexture=A}}}}for(let yf=0;yf<p.length;yf++){let Df=l[yf],lf=p[yf];Df!==null&&lf!==void 0&&lf.update(Df,ef,b||t)}f3&&f3(C,ef),ef.detectedPlanes&&e.dispatchEvent({type:"planesdetected",data:ef}),c=null}let t3=new dd;t3.setAnimationLoop(z3),this.setAnimationLoop=function(C){f3=C},this.dispose=function(){}}},d9=new mv,N1=new of;function i1(n,f){function v(j,s){j.matrixAutoUpdate===!0&&j.updateMatrix(),s.value.copy(j.matrix)}function e(j,s){s.color.getRGB(j.fogColor.value,jr(n)),s.isFog?(j.fogNear.value=s.near,j.fogFar.value=s.far):s.isFogExp2&&(j.fogDensity.value=s.density)}function P(j,s,i,N,m){s.isMeshBasicMaterial||s.isMeshLambertMaterial?z(j,s):s.isMeshToonMaterial?(z(j,s),d(j,s)):s.isMeshPhongMaterial?(z(j,s),X(j,s)):s.isMeshStandardMaterial?(z(j,s),H(j,s),s.isMeshPhysicalMaterial&&x(j,s,m)):s.isMeshMatcapMaterial?(z(j,s),c(j,s)):s.isMeshDepthMaterial?z(j,s):s.isMeshDistanceMaterial?(z(j,s),a(j,s)):s.isMeshNormalMaterial?z(j,s):s.isLineBasicMaterial?(t(j,s),s.isLineDashedMaterial&&u(j,s)):s.isPointsMaterial?r(j,s,i,N):s.isSpriteMaterial?b(j,s):s.isShadowMaterial?(j.color.value.copy(s.color),j.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}function z(j,s){j.opacity.value=s.opacity,s.color&&j.diffuse.value.copy(s.color),s.emissive&&j.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(j.map.value=s.map,v(s.map,j.mapTransform)),s.alphaMap&&(j.alphaMap.value=s.alphaMap,v(s.alphaMap,j.alphaMapTransform)),s.bumpMap&&(j.bumpMap.value=s.bumpMap,v(s.bumpMap,j.bumpMapTransform),j.bumpScale.value=s.bumpScale,s.side===g3&&(j.bumpScale.value*=-1)),s.normalMap&&(j.normalMap.value=s.normalMap,v(s.normalMap,j.normalMapTransform),j.normalScale.value.copy(s.normalScale),s.side===g3&&j.normalScale.value.negate()),s.displacementMap&&(j.displacementMap.value=s.displacementMap,v(s.displacementMap,j.displacementMapTransform),j.displacementScale.value=s.displacementScale,j.displacementBias.value=s.displacementBias),s.emissiveMap&&(j.emissiveMap.value=s.emissiveMap,v(s.emissiveMap,j.emissiveMapTransform)),s.specularMap&&(j.specularMap.value=s.specularMap,v(s.specularMap,j.specularMapTransform)),s.alphaTest>0&&(j.alphaTest.value=s.alphaTest);let i=f.get(s),N=i.envMap,m=i.envMapRotation;N&&(j.envMap.value=N,d9.copy(m),d9.x*=-1,d9.y*=-1,d9.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(d9.y*=-1,d9.z*=-1),j.envMapRotation.value.setFromMatrix4(N1.makeRotationFromEuler(d9)),j.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,j.reflectivity.value=s.reflectivity,j.ior.value=s.ior,j.refractionRatio.value=s.refractionRatio),s.lightMap&&(j.lightMap.value=s.lightMap,j.lightMapIntensity.value=s.lightMapIntensity,v(s.lightMap,j.lightMapTransform)),s.aoMap&&(j.aoMap.value=s.aoMap,j.aoMapIntensity.value=s.aoMapIntensity,v(s.aoMap,j.aoMapTransform))}function t(j,s){j.diffuse.value.copy(s.color),j.opacity.value=s.opacity,s.map&&(j.map.value=s.map,v(s.map,j.mapTransform))}function u(j,s){j.dashSize.value=s.dashSize,j.totalSize.value=s.dashSize+s.gapSize,j.scale.value=s.scale}function r(j,s,i,N){j.diffuse.value.copy(s.color),j.opacity.value=s.opacity,j.size.value=s.size*i,j.scale.value=N*.5,s.map&&(j.map.value=s.map,v(s.map,j.uvTransform)),s.alphaMap&&(j.alphaMap.value=s.alphaMap,v(s.alphaMap,j.alphaMapTransform)),s.alphaTest>0&&(j.alphaTest.value=s.alphaTest)}function b(j,s){j.diffuse.value.copy(s.color),j.opacity.value=s.opacity,j.rotation.value=s.rotation,s.map&&(j.map.value=s.map,v(s.map,j.mapTransform)),s.alphaMap&&(j.alphaMap.value=s.alphaMap,v(s.alphaMap,j.alphaMapTransform)),s.alphaTest>0&&(j.alphaTest.value=s.alphaTest)}function X(j,s){j.specular.value.copy(s.specular),j.shininess.value=Math.max(s.shininess,1e-4)}function d(j,s){s.gradientMap&&(j.gradientMap.value=s.gradientMap)}function H(j,s){j.metalness.value=s.metalness,s.metalnessMap&&(j.metalnessMap.value=s.metalnessMap,v(s.metalnessMap,j.metalnessMapTransform)),j.roughness.value=s.roughness,s.roughnessMap&&(j.roughnessMap.value=s.roughnessMap,v(s.roughnessMap,j.roughnessMapTransform)),s.envMap&&(j.envMapIntensity.value=s.envMapIntensity)}function x(j,s,i){j.ior.value=s.ior,s.sheen>0&&(j.sheenColor.value.copy(s.sheenColor).multiplyScalar(s.sheen),j.sheenRoughness.value=s.sheenRoughness,s.sheenColorMap&&(j.sheenColorMap.value=s.sheenColorMap,v(s.sheenColorMap,j.sheenColorMapTransform)),s.sheenRoughnessMap&&(j.sheenRoughnessMap.value=s.sheenRoughnessMap,v(s.sheenRoughnessMap,j.sheenRoughnessMapTransform))),s.clearcoat>0&&(j.clearcoat.value=s.clearcoat,j.clearcoatRoughness.value=s.clearcoatRoughness,s.clearcoatMap&&(j.clearcoatMap.value=s.clearcoatMap,v(s.clearcoatMap,j.clearcoatMapTransform)),s.clearcoatRoughnessMap&&(j.clearcoatRoughnessMap.value=s.clearcoatRoughnessMap,v(s.clearcoatRoughnessMap,j.clearcoatRoughnessMapTransform)),s.clearcoatNormalMap&&(j.clearcoatNormalMap.value=s.clearcoatNormalMap,v(s.clearcoatNormalMap,j.clearcoatNormalMapTransform),j.clearcoatNormalScale.value.copy(s.clearcoatNormalScale),s.side===g3&&j.clearcoatNormalScale.value.negate())),s.dispersion>0&&(j.dispersion.value=s.dispersion),s.iridescence>0&&(j.iridescence.value=s.iridescence,j.iridescenceIOR.value=s.iridescenceIOR,j.iridescenceThicknessMinimum.value=s.iridescenceThicknessRange[0],j.iridescenceThicknessMaximum.value=s.iridescenceThicknessRange[1],s.iridescenceMap&&(j.iridescenceMap.value=s.iridescenceMap,v(s.iridescenceMap,j.iridescenceMapTransform)),s.iridescenceThicknessMap&&(j.iridescenceThicknessMap.value=s.iridescenceThicknessMap,v(s.iridescenceThicknessMap,j.iridescenceThicknessMapTransform))),s.transmission>0&&(j.transmission.value=s.transmission,j.transmissionSamplerMap.value=i.texture,j.transmissionSamplerSize.value.set(i.width,i.height),s.transmissionMap&&(j.transmissionMap.value=s.transmissionMap,v(s.transmissionMap,j.transmissionMapTransform)),j.thickness.value=s.thickness,s.thicknessMap&&(j.thicknessMap.value=s.thicknessMap,v(s.thicknessMap,j.thicknessMapTransform)),j.attenuationDistance.value=s.attenuationDistance,j.attenuationColor.value.copy(s.attenuationColor)),s.anisotropy>0&&(j.anisotropyVector.value.set(s.anisotropy*Math.cos(s.anisotropyRotation),s.anisotropy*Math.sin(s.anisotropyRotation)),s.anisotropyMap&&(j.anisotropyMap.value=s.anisotropyMap,v(s.anisotropyMap,j.anisotropyMapTransform))),j.specularIntensity.value=s.specularIntensity,j.specularColor.value.copy(s.specularColor),s.specularColorMap&&(j.specularColorMap.value=s.specularColorMap,v(s.specularColorMap,j.specularColorMapTransform)),s.specularIntensityMap&&(j.specularIntensityMap.value=s.specularIntensityMap,v(s.specularIntensityMap,j.specularIntensityMapTransform))}function c(j,s){s.matcap&&(j.matcap.value=s.matcap)}function a(j,s){let i=f.get(s).light;j.referencePosition.value.setFromMatrixPosition(i.matrixWorld),j.nearDistance.value=i.shadow.camera.near,j.farDistance.value=i.shadow.camera.far}return{refreshFogUniforms:e,refreshMaterialUniforms:P}}function Z1(n,f,v,e){let P={},z={},t=[],u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function r(i,N){let m=N.program;e.uniformBlockBinding(i,m)}function b(i,N){let m=P[i.id];m===void 0&&(c(i),m=X(i),P[i.id]=m,i.addEventListener("dispose",j));let p=N.program;e.updateUBOMapping(i,p);let l=f.render.frame;z[i.id]!==l&&(H(i),z[i.id]=l)}function X(i){let N=d();i.__bindingPointIndex=N;let m=n.createBuffer(),p=i.__size,l=i.usage;return n.bindBuffer(n.UNIFORM_BUFFER,m),n.bufferData(n.UNIFORM_BUFFER,p,l),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,N,m),m}function d(){for(let i=0;i<u;i++)if(t.indexOf(i)===-1)return t.push(i),i;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function H(i){let N=P[i.id],m=i.uniforms,p=i.__cache;n.bindBuffer(n.UNIFORM_BUFFER,N);for(let l=0,W=m.length;l<W;l++){let w=Array.isArray(m[l])?m[l]:[m[l]];for(let T=0,y=w.length;T<y;T++){let V=w[T];if(x(V,l,T,p)===!0){let M=V.__offset,q=Array.isArray(V.value)?V.value:[V.value],k=0;for(let J=0;J<q.length;J++){let S=q[J],B=a(S);typeof S=="number"||typeof S=="boolean"?(V.__data[0]=S,n.bufferSubData(n.UNIFORM_BUFFER,M+k,V.__data)):S.isMatrix3?(V.__data[0]=S.elements[0],V.__data[1]=S.elements[1],V.__data[2]=S.elements[2],V.__data[3]=0,V.__data[4]=S.elements[3],V.__data[5]=S.elements[4],V.__data[6]=S.elements[5],V.__data[7]=0,V.__data[8]=S.elements[6],V.__data[9]=S.elements[7],V.__data[10]=S.elements[8],V.__data[11]=0):(S.toArray(V.__data,k),k+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(i,N,m,p){let l=i.value,W=N+"_"+m;if(p[W]===void 0)return typeof l=="number"||typeof l=="boolean"?p[W]=l:p[W]=l.clone(),!0;{let w=p[W];if(typeof l=="number"||typeof l=="boolean"){if(w!==l)return p[W]=l,!0}else if(w.equals(l)===!1)return w.copy(l),!0}return!1}function c(i){let N=i.uniforms,m=0,p=16;for(let W=0,w=N.length;W<w;W++){let T=Array.isArray(N[W])?N[W]:[N[W]];for(let y=0,V=T.length;y<V;y++){let M=T[y],q=Array.isArray(M.value)?M.value:[M.value];for(let k=0,J=q.length;k<J;k++){let S=q[k],B=a(S),Y=m%p,nf=Y%B.boundary,df=Y+nf;m+=nf,df!==0&&p-df<B.storage&&(m+=p-df),M.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=m,m+=B.storage}}}let l=m%p;return l>0&&(m+=p-l),i.__size=m,i.__cache={},this}function a(i){let N={boundary:0,storage:0};return typeof i=="number"||typeof i=="boolean"?(N.boundary=4,N.storage=4):i.isVector2?(N.boundary=8,N.storage=8):i.isVector3||i.isColor?(N.boundary=16,N.storage=12):i.isVector4?(N.boundary=16,N.storage=16):i.isMatrix3?(N.boundary=48,N.storage=48):i.isMatrix4?(N.boundary=64,N.storage=64):i.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",i),N}function j(i){let N=i.target;N.removeEventListener("dispose",j);let m=t.indexOf(N.__bindingPointIndex);t.splice(m,1),n.deleteBuffer(P[N.id]),delete P[N.id],delete z[N.id]}function s(){for(let i in P)n.deleteBuffer(P[i]);t=[],P={},z={}}return{bind:r,update:b,dispose:s}}var Kn=class{constructor(f={}){let{canvas:v=cr(),context:e=null,depth:P=!0,stencil:z=!1,alpha:t=!1,antialias:u=!1,premultipliedAlpha:r=!0,preserveDrawingBuffer:b=!1,powerPreference:X="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:H=!1}=f;this.isWebGLRenderer=!0;let x;if(e!==null){if(typeof WebGLRenderingContext<"u"&&e instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=e.getContextAttributes().alpha}else x=t;let c=new Uint32Array(4),a=new Int32Array(4),j=null,s=null,i=[],N=[];this.domElement=v,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=m7,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let m=this,p=!1;this._outputColorSpace=X3;let l=0,W=0,w=null,T=-1,y=null,V=new n3,M=new n3,q=null,k=new bf(0),J=0,S=v.width,B=v.height,Y=1,nf=null,df=null,Zf=new n3(0,0,S,B),Yf=new n3(0,0,S,B),f3=!1,z3=new q7,t3=!1,C=!1,ef=new of,yf=new L,Df=new n3,lf={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},v3=!1;function a3(){return w===null?Y:1}let D=e;function vf(O,F){return v.getContext(O,F)}try{let O={alpha:!0,depth:P,stencil:z,antialias:u,premultipliedAlpha:r,preserveDrawingBuffer:b,powerPreference:X,failIfMajorPerformanceCaveat:d};if("setAttribute"in v&&v.setAttribute("data-engine",`three.js r${"180"}`),v.addEventListener("webglcontextlost",cf,!1),v.addEventListener("webglcontextrestored",pf,!1),v.addEventListener("webglcontextcreationerror",tf,!1),D===null){let F="webgl2";if(D=vf(F,O),D===null)throw vf(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let _,A,Q,Hf,Pf,xf,Uf,Sf,h,Z,G,I,ff,E,wf,Xf,Lf,Wf,zf,Nf,Gf,Vf,af,Ef;function o(){_=new Js(D),_.init(),Vf=new jd(D,_),A=new qs(D,_,f,Vf),Q=new c1(D,_),A.reversedDepthBuffer&&H&&Q.buffers.depth.setReversed(!0),Hf=new Ks(D),Pf=new e1,xf=new j1(D,_,Q,Pf,A,Vf,Hf),Uf=new Ms(m),Sf=new ks(m),h=new CH(D),af=new Vs(D,h),Z=new Ys(D,h,Hf,af),G=new Is(D,Z,h,Hf),zf=new Us(D,A,xf),Xf=new os(Pf),I=new v1(m,Uf,Sf,_,A,af,Xf),ff=new i1(m,Pf),E=new n1,wf=new X1(_),Wf=new ws(m,Uf,Sf,Q,G,x,r),Lf=new x1(m,G,A),Ef=new Z1(D,Hf,A,Q),Nf=new Ds(D,_,Hf),Gf=new Ss(D,_,Hf),Hf.programs=I.programs,m.capabilities=A,m.extensions=_,m.properties=Pf,m.renderLists=E,m.shadowMap=Lf,m.state=Q,m.info=Hf}o();let rf=new Fr(m,D);this.xr=rf,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let O=_.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){let O=_.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(O){O!==void 0&&(Y=O,this.setSize(S,B,!1))},this.getSize=function(O){return O.set(S,B)},this.setSize=function(O,F,K=!0){if(rf.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=O,B=F,v.width=Math.floor(O*Y),v.height=Math.floor(F*Y),K===!0&&(v.style.width=O+"px",v.style.height=F+"px"),this.setViewport(0,0,O,F)},this.getDrawingBufferSize=function(O){return O.set(S*Y,B*Y).floor()},this.setDrawingBufferSize=function(O,F,K){S=O,B=F,Y=K,v.width=Math.floor(O*K),v.height=Math.floor(F*K),this.setViewport(0,0,O,F)},this.getCurrentViewport=function(O){return O.copy(V)},this.getViewport=function(O){return O.copy(Zf)},this.setViewport=function(O,F,K,U){O.isVector4?Zf.set(O.x,O.y,O.z,O.w):Zf.set(O,F,K,U),Q.viewport(V.copy(Zf).multiplyScalar(Y).round())},this.getScissor=function(O){return O.copy(Yf)},this.setScissor=function(O,F,K,U){O.isVector4?Yf.set(O.x,O.y,O.z,O.w):Yf.set(O,F,K,U),Q.scissor(M.copy(Yf).multiplyScalar(Y).round())},this.getScissorTest=function(){return f3},this.setScissorTest=function(O){Q.setScissorTest(f3=O)},this.setOpaqueSort=function(O){nf=O},this.setTransparentSort=function(O){df=O},this.getClearColor=function(O){return O.copy(Wf.getClearColor())},this.setClearColor=function(){Wf.setClearColor(...arguments)},this.getClearAlpha=function(){return Wf.getClearAlpha()},this.setClearAlpha=function(){Wf.setClearAlpha(...arguments)},this.clear=function(O=!0,F=!0,K=!0){let U=0;if(O){let R=!1;if(w!==null){let uf=w.texture.format;R=uf===dn||uf===Xn||uf===j8}if(R){let uf=w.texture.type,mf=uf===Kv||uf===i7||uf===n9||uf===t9||uf===un||uf===rn,Of=Wf.getClearColor(),Tf=Wf.getClearAlpha(),Ff=Of.r,Jf=Of.g,qf=Of.b;mf?(c[0]=Ff,c[1]=Jf,c[2]=qf,c[3]=Tf,D.clearBufferuiv(D.COLOR,0,c)):(a[0]=Ff,a[1]=Jf,a[2]=qf,a[3]=Tf,D.clearBufferiv(D.COLOR,0,a))}else U|=D.COLOR_BUFFER_BIT}F&&(U|=D.DEPTH_BUFFER_BIT),K&&(U|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){v.removeEventListener("webglcontextlost",cf,!1),v.removeEventListener("webglcontextrestored",pf,!1),v.removeEventListener("webglcontextcreationerror",tf,!1),Wf.dispose(),E.dispose(),wf.dispose(),Pf.dispose(),Uf.dispose(),Sf.dispose(),G.dispose(),af.dispose(),Ef.dispose(),I.dispose(),rf.dispose(),rf.removeEventListener("sessionstart",r7),rf.removeEventListener("sessionend",q4),me.stop()};function cf(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function pf(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;let O=Hf.autoReset,F=Lf.enabled,K=Lf.autoUpdate,U=Lf.needsUpdate,R=Lf.type;o(),Hf.autoReset=O,Lf.enabled=F,Lf.autoUpdate=K,Lf.needsUpdate=U,Lf.type=R}function tf(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function $(O){let F=O.target;F.removeEventListener("dispose",$),hf(F)}function hf(O){If(O),Pf.remove(O)}function If(O){let F=Pf.get(O).programs;F!==void 0&&(F.forEach(function(K){I.releaseProgram(K)}),O.isShaderMaterial&&I.releaseShaderCache(O))}this.renderBufferDirect=function(O,F,K,U,R,uf){F===null&&(F=lf);let mf=R.isMesh&&R.matrixWorld.determinant()<0,Of=Cd(O,F,K,U,R);Q.setMaterial(U,mf);let Tf=K.index,Ff=1;if(U.wireframe===!0){if(Tf=Z.getWireframeAttribute(K),Tf===void 0)return;Ff=2}let Jf=K.drawRange,qf=K.attributes.position,e3=Jf.start*Ff,x3=(Jf.start+Jf.count)*Ff;uf!==null&&(e3=Math.max(e3,uf.start*Ff),x3=Math.min(x3,(uf.start+uf.count)*Ff)),Tf!==null?(e3=Math.max(e3,0),x3=Math.min(x3,Tf.count)):qf!=null&&(e3=Math.max(e3,0),x3=Math.min(x3,qf.count));let W3=x3-e3;if(W3<0||W3===1/0)return;af.setup(R,U,Of,K,Tf);let N3,c3=Nf;if(Tf!==null&&(N3=h.get(Tf),c3=Gf,c3.setIndex(N3)),R.isMesh)U.wireframe===!0?(Q.setLineWidth(U.wireframeLinewidth*a3()),c3.setMode(D.LINES)):c3.setMode(D.TRIANGLES);else if(R.isLine){let Mf=U.linewidth;Mf===void 0&&(Mf=1),Q.setLineWidth(Mf*a3()),R.isLineSegments?c3.setMode(D.LINES):R.isLineLoop?c3.setMode(D.LINE_LOOP):c3.setMode(D.LINE_STRIP)}else R.isPoints?c3.setMode(D.POINTS):R.isSprite&&c3.setMode(D.TRIANGLES);if(R.isBatchedMesh)if(R._multiDrawInstances!==null)K9("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),c3.renderMultiDrawInstances(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount,R._multiDrawInstances);else if(_.get("WEBGL_multi_draw"))c3.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{let Mf=R._multiDrawStarts,y3=R._multiDrawCounts,r3=R._multiDrawCount,yv=Tf?h.get(Tf).bytesPerElement:1,j9=Pf.get(U).currentProgram.getUniforms();for(let pv=0;pv<r3;pv++)j9.setValue(D,"_gl_DrawID",pv),c3.render(Mf[pv]/yv,y3[pv])}else if(R.isInstancedMesh)c3.renderInstances(e3,W3,R.count);else if(K.isInstancedBufferGeometry){let Mf=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,y3=Math.min(K.instanceCount,Mf);c3.renderInstances(e3,W3,y3)}else c3.render(e3,W3)};function m3(O,F,K){O.transparent===!0&&O.side===G3&&O.forceSinglePass===!1?(O.side=g3,O.needsUpdate=!0,_n(O,F,K),O.side=vv,O.needsUpdate=!0,_n(O,F,K),O.side=G3):_n(O,F,K)}this.compile=function(O,F,K=null){K===null&&(K=O),s=wf.get(K),s.init(F),N.push(s),K.traverseVisible(function(R){R.isLight&&R.layers.test(F.layers)&&(s.pushLight(R),R.castShadow&&s.pushShadow(R))}),O!==K&&O.traverseVisible(function(R){R.isLight&&R.layers.test(F.layers)&&(s.pushLight(R),R.castShadow&&s.pushShadow(R))}),s.setupLights();let U=new Set;return O.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;let uf=R.material;if(uf)if(Array.isArray(uf))for(let mf=0;mf<uf.length;mf++){let Of=uf[mf];m3(Of,K,R),U.add(Of)}else m3(uf,K,R),U.add(uf)}),s=N.pop(),U},this.compileAsync=function(O,F,K=null){let U=this.compile(O,F,K);return new Promise(R=>{function uf(){if(U.forEach(function(mf){Pf.get(mf).currentProgram.isReady()&&U.delete(mf)}),U.size===0){R(O);return}setTimeout(uf,10)}_.get("KHR_parallel_shader_compile")!==null?uf():setTimeout(uf,10)})};let d3=null;function y7(O){d3&&d3(O)}function r7(){me.stop()}function q4(){me.start()}let me=new dd;me.setAnimationLoop(y7),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(O){d3=O,rf.setAnimationLoop(O),O===null?me.stop():me.start()},rf.addEventListener("sessionstart",r7),rf.addEventListener("sessionend",q4),this.render=function(O,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),rf.enabled===!0&&rf.isPresenting===!0&&(rf.cameraAutoUpdate===!0&&rf.updateCamera(F),F=rf.getCamera()),O.isScene===!0&&O.onBeforeRender(m,O,F,w),s=wf.get(O,N.length),s.init(F),N.push(s),ef.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),z3.setFromProjectionMatrix(ef,av,F.reversedDepth),C=this.localClippingEnabled,t3=Xf.init(this.clippingPlanes,C),j=E.get(O,i.length),j.init(),i.push(j),rf.enabled===!0&&rf.isPresenting===!0){let uf=m.xr.getDepthSensingMesh();uf!==null&&lt(uf,F,-1/0,m.sortObjects)}lt(O,F,0,m.sortObjects),j.finish(),m.sortObjects===!0&&j.sort(nf,df),v3=rf.enabled===!1||rf.isPresenting===!1||rf.hasDepthSensing()===!1,v3&&Wf.addToRenderList(j,O),this.info.render.frame++,t3===!0&&Xf.beginShadows();let K=s.state.shadowsArray;Lf.render(K,O,F),t3===!0&&Xf.endShadows(),this.info.autoReset===!0&&this.info.reset();let U=j.opaque,R=j.transmissive;if(s.setupLights(),F.isArrayCamera){let uf=F.cameras;if(R.length>0)for(let mf=0,Of=uf.length;mf<Of;mf++){let Tf=uf[mf];M4(U,R,O,Tf)}v3&&Wf.render(O);for(let mf=0,Of=uf.length;mf<Of;mf++){let Tf=uf[mf];o4(j,O,Tf,Tf.viewport)}}else R.length>0&&M4(U,R,O,F),v3&&Wf.render(O),o4(j,O,F);w!==null&&W===0&&(xf.updateMultisampleRenderTarget(w),xf.updateRenderTargetMipmap(w)),O.isScene===!0&&O.onAfterRender(m,O,F),af.resetDefaultState(),T=-1,y=null,N.pop(),N.length>0?(s=N[N.length-1],t3===!0&&Xf.setGlobalState(m.clippingPlanes,s.state.camera)):s=null,i.pop(),i.length>0?j=i[i.length-1]:j=null};function lt(O,F,K,U){if(O.visible===!1)return;if(O.layers.test(F.layers)){if(O.isGroup)K=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(F);else if(O.isLight)s.pushLight(O),O.castShadow&&s.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||z3.intersectsSprite(O)){U&&Df.setFromMatrixPosition(O.matrixWorld).applyMatrix4(ef);let mf=G.update(O),Of=O.material;Of.visible&&j.push(O,mf,Of,K,Df.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||z3.intersectsObject(O))){let mf=G.update(O),Of=O.material;if(U&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),Df.copy(O.boundingSphere.center)):(mf.boundingSphere===null&&mf.computeBoundingSphere(),Df.copy(mf.boundingSphere.center)),Df.applyMatrix4(O.matrixWorld).applyMatrix4(ef)),Array.isArray(Of)){let Tf=mf.groups;for(let Ff=0,Jf=Tf.length;Ff<Jf;Ff++){let qf=Tf[Ff],e3=Of[qf.materialIndex];e3&&e3.visible&&j.push(O,mf,e3,K,Df.z,qf)}}else Of.visible&&j.push(O,mf,Of,K,Df.z,null)}}let uf=O.children;for(let mf=0,Of=uf.length;mf<Of;mf++)lt(uf[mf],F,K,U)}function o4(O,F,K,U){let R=O.opaque,uf=O.transmissive,mf=O.transparent;s.setupLightsView(K),t3===!0&&Xf.setGlobalState(m.clippingPlanes,K),U&&Q.viewport(V.copy(U)),R.length>0&&An(R,F,K),uf.length>0&&An(uf,F,K),mf.length>0&&An(mf,F,K),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function M4(O,F,K,U){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;s.state.transmissionRenderTarget[U.id]===void 0&&(s.state.transmissionRenderTarget[U.id]=new C3(1,1,{generateMipmaps:!0,type:_.has("EXT_color_buffer_half_float")||_.has("EXT_color_buffer_float")?z9:Kv,minFilter:iv,samples:4,stencilBuffer:z,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qf.workingColorSpace}));let uf=s.state.transmissionRenderTarget[U.id],mf=U.viewport||V;uf.setSize(mf.z*m.transmissionResolutionScale,mf.w*m.transmissionResolutionScale);let Of=m.getRenderTarget(),Tf=m.getActiveCubeFace(),Ff=m.getActiveMipmapLevel();m.setRenderTarget(uf),m.getClearColor(k),J=m.getClearAlpha(),J<1&&m.setClearColor(16777215,.5),m.clear(),v3&&Wf.render(K);let Jf=m.toneMapping;m.toneMapping=m7;let qf=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),s.setupLightsView(U),t3===!0&&Xf.setGlobalState(m.clippingPlanes,U),An(O,K,U),xf.updateMultisampleRenderTarget(uf),xf.updateRenderTargetMipmap(uf),_.has("WEBGL_multisampled_render_to_texture")===!1){let e3=!1;for(let x3=0,W3=F.length;x3<W3;x3++){let N3=F[x3],c3=N3.object,Mf=N3.geometry,y3=N3.material,r3=N3.group;if(y3.side===G3&&c3.layers.test(U.layers)){let yv=y3.side;y3.side=g3,y3.needsUpdate=!0,F4(c3,K,U,Mf,y3,r3),y3.side=yv,y3.needsUpdate=!0,e3=!0}}e3===!0&&(xf.updateMultisampleRenderTarget(uf),xf.updateRenderTargetMipmap(uf))}m.setRenderTarget(Of,Tf,Ff),m.setClearColor(k,J),qf!==void 0&&(U.viewport=qf),m.toneMapping=Jf}function An(O,F,K){let U=F.isScene===!0?F.overrideMaterial:null;for(let R=0,uf=O.length;R<uf;R++){let mf=O[R],Of=mf.object,Tf=mf.geometry,Ff=mf.group,Jf=mf.material;Jf.allowOverride===!0&&U!==null&&(Jf=U),Of.layers.test(K.layers)&&F4(Of,F,K,Tf,Jf,Ff)}}function F4(O,F,K,U,R,uf){O.onBeforeRender(m,F,K,U,R,uf),O.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),R.onBeforeRender(m,F,K,U,O,uf),R.transparent===!0&&R.side===G3&&R.forceSinglePass===!1?(R.side=g3,R.needsUpdate=!0,m.renderBufferDirect(K,F,U,R,O,uf),R.side=vv,R.needsUpdate=!0,m.renderBufferDirect(K,F,U,R,O,uf),R.side=G3):m.renderBufferDirect(K,F,U,R,O,uf),O.onAfterRender(m,F,K,U,R,uf)}function _n(O,F,K){F.isScene!==!0&&(F=lf);let U=Pf.get(O),R=s.state.lights,uf=s.state.shadowsArray,mf=R.state.version,Of=I.getParameters(O,R.state,uf,F,K),Tf=I.getProgramCacheKey(Of),Ff=U.programs;U.environment=O.isMeshStandardMaterial?F.environment:null,U.fog=F.fog,U.envMap=(O.isMeshStandardMaterial?Sf:Uf).get(O.envMap||U.environment),U.envMapRotation=U.environment!==null&&O.envMap===null?F.environmentRotation:O.envMapRotation,Ff===void 0&&(O.addEventListener("dispose",$),Ff=new Map,U.programs=Ff);let Jf=Ff.get(Tf);if(Jf!==void 0){if(U.currentProgram===Jf&&U.lightsStateVersion===mf)return G4(O,Of),Jf}else Of.uniforms=I.getUniforms(O),O.onBeforeCompile(Of,m),Jf=I.acquireProgram(Of,Tf),Ff.set(Tf,Jf),U.uniforms=Of.uniforms;let qf=U.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(qf.clippingPlanes=Xf.uniform),G4(O,Of),U.needsLights=Ad(O),U.lightsStateVersion=mf,U.needsLights&&(qf.ambientLightColor.value=R.state.ambient,qf.lightProbe.value=R.state.probe,qf.directionalLights.value=R.state.directional,qf.directionalLightShadows.value=R.state.directionalShadow,qf.spotLights.value=R.state.spot,qf.spotLightShadows.value=R.state.spotShadow,qf.rectAreaLights.value=R.state.rectArea,qf.ltc_1.value=R.state.rectAreaLTC1,qf.ltc_2.value=R.state.rectAreaLTC2,qf.pointLights.value=R.state.point,qf.pointLightShadows.value=R.state.pointShadow,qf.hemisphereLights.value=R.state.hemi,qf.directionalShadowMap.value=R.state.directionalShadowMap,qf.directionalShadowMatrix.value=R.state.directionalShadowMatrix,qf.spotShadowMap.value=R.state.spotShadowMap,qf.spotLightMatrix.value=R.state.spotLightMatrix,qf.spotLightMap.value=R.state.spotLightMap,qf.pointShadowMap.value=R.state.pointShadowMap,qf.pointShadowMatrix.value=R.state.pointShadowMatrix),U.currentProgram=Jf,U.uniformsList=null,Jf}function R4(O){if(O.uniformsList===null){let F=O.currentProgram.getUniforms();O.uniformsList=p8.seqWithValue(F.seq,O.uniforms)}return O.uniformsList}function G4(O,F){let K=Pf.get(O);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function Cd(O,F,K,U,R){F.isScene!==!0&&(F=lf),xf.resetTextureUnits();let uf=F.fog,mf=U.isMeshStandardMaterial?F.environment:null,Of=w===null?m.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:I3,Tf=(U.isMeshStandardMaterial?Sf:Uf).get(U.envMap||mf),Ff=U.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Jf=!!K.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),qf=!!K.morphAttributes.position,e3=!!K.morphAttributes.normal,x3=!!K.morphAttributes.color,W3=m7;U.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(W3=m.toneMapping);let N3=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,c3=N3!==void 0?N3.length:0,Mf=Pf.get(U),y3=s.state.lights;if(t3===!0&&(C===!0||O!==y)){let nv=O===y&&U.id===T;Xf.setState(U,O,nv)}let r3=!1;U.version===Mf.__version?(Mf.needsLights&&Mf.lightsStateVersion!==y3.state.version||Mf.outputColorSpace!==Of||R.isBatchedMesh&&Mf.batching===!1||!R.isBatchedMesh&&Mf.batching===!0||R.isBatchedMesh&&Mf.batchingColor===!0&&R.colorTexture===null||R.isBatchedMesh&&Mf.batchingColor===!1&&R.colorTexture!==null||R.isInstancedMesh&&Mf.instancing===!1||!R.isInstancedMesh&&Mf.instancing===!0||R.isSkinnedMesh&&Mf.skinning===!1||!R.isSkinnedMesh&&Mf.skinning===!0||R.isInstancedMesh&&Mf.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&Mf.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&Mf.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&Mf.instancingMorph===!1&&R.morphTexture!==null||Mf.envMap!==Tf||U.fog===!0&&Mf.fog!==uf||Mf.numClippingPlanes!==void 0&&(Mf.numClippingPlanes!==Xf.numPlanes||Mf.numIntersection!==Xf.numIntersection)||Mf.vertexAlphas!==Ff||Mf.vertexTangents!==Jf||Mf.morphTargets!==qf||Mf.morphNormals!==e3||Mf.morphColors!==x3||Mf.toneMapping!==W3||Mf.morphTargetsCount!==c3)&&(r3=!0):(r3=!0,Mf.__version=U.version);let yv=Mf.currentProgram;r3===!0&&(yv=_n(U,F,R));let j9=!1,pv=!1,h8=!1,p3=yv.getUniforms(),ov=Mf.uniforms;if(Q.useProgram(yv.program)&&(j9=!0,pv=!0,h8=!0),U.id!==T&&(T=U.id,pv=!0),j9||y!==O){Q.buffers.depth.getReversed()&&O.reversedDepth!==!0&&(O._reversedDepth=!0,O.updateProjectionMatrix()),p3.setValue(D,"projectionMatrix",O.projectionMatrix),p3.setValue(D,"viewMatrix",O.matrixWorldInverse);let sv=p3.map.cameraPosition;sv!==void 0&&sv.setValue(D,yf.setFromMatrixPosition(O.matrixWorld)),A.logarithmicDepthBuffer&&p3.setValue(D,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&p3.setValue(D,"isOrthographic",O.isOrthographicCamera===!0),y!==O&&(y=O,pv=!0,h8=!0)}if(R.isSkinnedMesh){p3.setOptional(D,R,"bindMatrix"),p3.setOptional(D,R,"bindMatrixInverse");let nv=R.skeleton;nv&&(nv.boneTexture===null&&nv.computeBoneTexture(),p3.setValue(D,"boneTexture",nv.boneTexture,xf))}R.isBatchedMesh&&(p3.setOptional(D,R,"batchingTexture"),p3.setValue(D,"batchingTexture",R._matricesTexture,xf),p3.setOptional(D,R,"batchingIdTexture"),p3.setValue(D,"batchingIdTexture",R._indirectTexture,xf),p3.setOptional(D,R,"batchingColorTexture"),R._colorsTexture!==null&&p3.setValue(D,"batchingColorTexture",R._colorsTexture,xf));let Mv=K.morphAttributes;if((Mv.position!==void 0||Mv.normal!==void 0||Mv.color!==void 0)&&zf.update(R,K,yv),(pv||Mf.receiveShadow!==R.receiveShadow)&&(Mf.receiveShadow=R.receiveShadow,p3.setValue(D,"receiveShadow",R.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(ov.envMap.value=Tf,ov.flipEnvMap.value=Tf.isCubeTexture&&Tf.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&F.environment!==null&&(ov.envMapIntensity.value=F.environmentIntensity),pv&&(p3.setValue(D,"toneMappingExposure",m.toneMappingExposure),Mf.needsLights&&Qd(ov,h8),uf&&U.fog===!0&&ff.refreshFogUniforms(ov,uf),ff.refreshMaterialUniforms(ov,U,Y,B,s.state.transmissionRenderTarget[O.id]),p8.upload(D,R4(Mf),ov,xf)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(p8.upload(D,R4(Mf),ov,xf),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&p3.setValue(D,"center",R.center),p3.setValue(D,"modelViewMatrix",R.modelViewMatrix),p3.setValue(D,"normalMatrix",R.normalMatrix),p3.setValue(D,"modelMatrix",R.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let nv=U.uniformsGroups;for(let sv=0,Lt=nv.length;sv<Lt;sv++){let Ne=nv[sv];Ef.update(Ne,yv),Ef.bind(Ne,yv)}}return yv}function Qd(O,F){O.ambientLightColor.needsUpdate=F,O.lightProbe.needsUpdate=F,O.directionalLights.needsUpdate=F,O.directionalLightShadows.needsUpdate=F,O.pointLights.needsUpdate=F,O.pointLightShadows.needsUpdate=F,O.spotLights.needsUpdate=F,O.spotLightShadows.needsUpdate=F,O.rectAreaLights.needsUpdate=F,O.hemisphereLights.needsUpdate=F}function Ad(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return l},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(O,F,K){let U=Pf.get(O);U.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),Pf.get(O.texture).__webglTexture=F,Pf.get(O.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:K,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,F){let K=Pf.get(O);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0};let _d=D.createFramebuffer();this.setRenderTarget=function(O,F=0,K=0){w=O,l=F,W=K;let U=!0,R=null,uf=!1,mf=!1;if(O){let Tf=Pf.get(O);if(Tf.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(D.FRAMEBUFFER,null),U=!1;else if(Tf.__webglFramebuffer===void 0)xf.setupRenderTarget(O);else if(Tf.__hasExternalTextures)xf.rebindTextures(O,Pf.get(O.texture).__webglTexture,Pf.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){let qf=O.depthTexture;if(Tf.__boundDepthTexture!==qf){if(qf!==null&&Pf.has(qf)&&(O.width!==qf.image.width||O.height!==qf.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");xf.setupDepthRenderbuffer(O)}}let Ff=O.texture;(Ff.isData3DTexture||Ff.isDataArrayTexture||Ff.isCompressedArrayTexture)&&(mf=!0);let Jf=Pf.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(Jf[F])?R=Jf[F][K]:R=Jf[F],uf=!0):O.samples>0&&xf.useMultisampledRTT(O)===!1?R=Pf.get(O).__webglMultisampledFramebuffer:Array.isArray(Jf)?R=Jf[K]:R=Jf,V.copy(O.viewport),M.copy(O.scissor),q=O.scissorTest}else V.copy(Zf).multiplyScalar(Y).floor(),M.copy(Yf).multiplyScalar(Y).floor(),q=f3;if(K!==0&&(R=_d),Q.bindFramebuffer(D.FRAMEBUFFER,R)&&U&&Q.drawBuffers(O,R),Q.viewport(V),Q.scissor(M),Q.setScissorTest(q),uf){let Tf=Pf.get(O.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Tf.__webglTexture,K)}else if(mf){let Tf=F;for(let Ff=0;Ff<O.textures.length;Ff++){let Jf=Pf.get(O.textures[Ff]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ff,Jf.__webglTexture,K,Tf)}}else if(O!==null&&K!==0){let Tf=Pf.get(O.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Tf.__webglTexture,K)}T=-1},this.readRenderTargetPixels=function(O,F,K,U,R,uf,mf,Of=0){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tf=Pf.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&mf!==void 0&&(Tf=Tf[mf]),Tf){Q.bindFramebuffer(D.FRAMEBUFFER,Tf);try{let Ff=O.textures[Of],Jf=Ff.format,qf=Ff.type;if(!A.textureFormatReadable(Jf)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(qf)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=O.width-U&&K>=0&&K<=O.height-R&&(O.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Of),D.readPixels(F,K,U,R,Vf.convert(Jf),Vf.convert(qf),uf))}finally{let Ff=w!==null?Pf.get(w).__webglFramebuffer:null;Q.bindFramebuffer(D.FRAMEBUFFER,Ff)}}},this.readRenderTargetPixelsAsync=async function(O,F,K,U,R,uf,mf,Of=0){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tf=Pf.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&mf!==void 0&&(Tf=Tf[mf]),Tf)if(F>=0&&F<=O.width-U&&K>=0&&K<=O.height-R){Q.bindFramebuffer(D.FRAMEBUFFER,Tf);let Ff=O.textures[Of],Jf=Ff.format,qf=Ff.type;if(!A.textureFormatReadable(Jf))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(qf))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let e3=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,e3),D.bufferData(D.PIXEL_PACK_BUFFER,uf.byteLength,D.STREAM_READ),O.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Of),D.readPixels(F,K,U,R,Vf.convert(Jf),Vf.convert(qf),0);let x3=w!==null?Pf.get(w).__webglFramebuffer:null;Q.bindFramebuffer(D.FRAMEBUFFER,x3);let W3=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await DX(D,W3,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,e3),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,uf),D.deleteBuffer(e3),D.deleteSync(W3),uf}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(O,F=null,K=0){let U=Math.pow(2,-K),R=Math.floor(O.image.width*U),uf=Math.floor(O.image.height*U),mf=F!==null?F.x:0,Of=F!==null?F.y:0;xf.setTexture2D(O,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,mf,Of,R,uf),Q.unbindTexture()};let $d=D.createFramebuffer(),f6=D.createFramebuffer();this.copyTextureToTexture=function(O,F,K=null,U=null,R=0,uf=null){uf===null&&(R!==0?(K9("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),uf=R,R=0):uf=0);let mf,Of,Tf,Ff,Jf,qf,e3,x3,W3,N3=O.isCompressedTexture?O.mipmaps[uf]:O.image;if(K!==null)mf=K.max.x-K.min.x,Of=K.max.y-K.min.y,Tf=K.isBox3?K.max.z-K.min.z:1,Ff=K.min.x,Jf=K.min.y,qf=K.isBox3?K.min.z:0;else{let Mv=Math.pow(2,-R);mf=Math.floor(N3.width*Mv),Of=Math.floor(N3.height*Mv),O.isDataArrayTexture?Tf=N3.depth:O.isData3DTexture?Tf=Math.floor(N3.depth*Mv):Tf=1,Ff=0,Jf=0,qf=0}U!==null?(e3=U.x,x3=U.y,W3=U.z):(e3=0,x3=0,W3=0);let c3=Vf.convert(F.format),Mf=Vf.convert(F.type),y3;F.isData3DTexture?(xf.setTexture3D(F,0),y3=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(xf.setTexture2DArray(F,0),y3=D.TEXTURE_2D_ARRAY):(xf.setTexture2D(F,0),y3=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let r3=D.getParameter(D.UNPACK_ROW_LENGTH),yv=D.getParameter(D.UNPACK_IMAGE_HEIGHT),j9=D.getParameter(D.UNPACK_SKIP_PIXELS),pv=D.getParameter(D.UNPACK_SKIP_ROWS),h8=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,N3.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,N3.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ff),D.pixelStorei(D.UNPACK_SKIP_ROWS,Jf),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qf);let p3=O.isDataArrayTexture||O.isData3DTexture,ov=F.isDataArrayTexture||F.isData3DTexture;if(O.isDepthTexture){let Mv=Pf.get(O),nv=Pf.get(F),sv=Pf.get(Mv.__renderTarget),Lt=Pf.get(nv.__renderTarget);Q.bindFramebuffer(D.READ_FRAMEBUFFER,sv.__webglFramebuffer),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ne=0;Ne<Tf;Ne++)p3&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pf.get(O).__webglTexture,R,qf+Ne),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pf.get(F).__webglTexture,uf,W3+Ne)),D.blitFramebuffer(Ff,Jf,mf,Of,e3,x3,mf,Of,D.DEPTH_BUFFER_BIT,D.NEAREST);Q.bindFramebuffer(D.READ_FRAMEBUFFER,null),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(R!==0||O.isRenderTargetTexture||Pf.has(O)){let Mv=Pf.get(O),nv=Pf.get(F);Q.bindFramebuffer(D.READ_FRAMEBUFFER,$d),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,f6);for(let sv=0;sv<Tf;sv++)p3?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mv.__webglTexture,R,qf+sv):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mv.__webglTexture,R),ov?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,nv.__webglTexture,uf,W3+sv):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,nv.__webglTexture,uf),R!==0?D.blitFramebuffer(Ff,Jf,mf,Of,e3,x3,mf,Of,D.COLOR_BUFFER_BIT,D.NEAREST):ov?D.copyTexSubImage3D(y3,uf,e3,x3,W3+sv,Ff,Jf,mf,Of):D.copyTexSubImage2D(y3,uf,e3,x3,Ff,Jf,mf,Of);Q.bindFramebuffer(D.READ_FRAMEBUFFER,null),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ov?O.isDataTexture||O.isData3DTexture?D.texSubImage3D(y3,uf,e3,x3,W3,mf,Of,Tf,c3,Mf,N3.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(y3,uf,e3,x3,W3,mf,Of,Tf,c3,N3.data):D.texSubImage3D(y3,uf,e3,x3,W3,mf,Of,Tf,c3,Mf,N3):O.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,uf,e3,x3,mf,Of,c3,Mf,N3.data):O.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,uf,e3,x3,N3.width,N3.height,c3,N3.data):D.texSubImage2D(D.TEXTURE_2D,uf,e3,x3,mf,Of,c3,Mf,N3);D.pixelStorei(D.UNPACK_ROW_LENGTH,r3),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yv),D.pixelStorei(D.UNPACK_SKIP_PIXELS,j9),D.pixelStorei(D.UNPACK_SKIP_ROWS,pv),D.pixelStorei(D.UNPACK_SKIP_IMAGES,h8),uf===0&&F.generateMipmaps&&D.generateMipmap(y3),Q.unbindTexture()},this.initRenderTarget=function(O){Pf.get(O).__webglFramebuffer===void 0&&xf.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?xf.setTextureCube(O,0):O.isData3DTexture?xf.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?xf.setTexture2DArray(O,0):xf.setTexture2D(O,0),Q.unbindTexture()},this.resetState=function(){l=0,W=0,w=null,Q.reset(),af.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return av}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(f){this._outputColorSpace=f;let v=this.getContext();v.drawingBufferColorSpace=Qf._getDrawingBufferColorSpace(f),v.unpackColorSpace=Qf._getUnpackColorSpace()}};var ad={type:"change"},kr={type:"start"},Nd={type:"end"},dt=new _v,md=new Lv,T1=Math.cos(70*i3.DEG2RAD),Y3=new L,Zv=2*Math.PI,s3={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gr=1e-6,Ht=class extends H8{constructor(f,v=null){super(f,v),this.state=s3.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:M7.ROTATE,MIDDLE:M7.DOLLY,RIGHT:M7.PAN},this.touches={ONE:F7.ROTATE,TWO:F7.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new l3,this._lastTargetPosition=new L,this._quat=new l3().setFromUnitVectors(f.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new e9,this._sphericalDelta=new e9,this._scale=1,this._panOffset=new L,this._rotateStart=new g,this._rotateEnd=new g,this._rotateDelta=new g,this._panStart=new g,this._panEnd=new g,this._panDelta=new g,this._dollyStart=new g,this._dollyEnd=new g,this._dollyDelta=new g,this._dollyDirection=new L,this._mouse=new g,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=p1.bind(this),this._onPointerDown=y1.bind(this),this._onPointerUp=O1.bind(this),this._onContextMenu=D1.bind(this),this._onMouseWheel=W1.bind(this),this._onKeyDown=h1.bind(this),this._onTouchStart=w1.bind(this),this._onTouchMove=V1.bind(this),this._onMouseDown=l1.bind(this),this._onMouseMove=L1.bind(this),this._interceptControlDown=q1.bind(this),this._interceptControlUp=o1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(f){super.connect(f),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(f){f.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=f}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ad),this.update(),this.state=s3.NONE}update(f=null){let v=this.object.position;Y3.copy(v).sub(this.target),Y3.applyQuaternion(this._quat),this._spherical.setFromVector3(Y3),this.autoRotate&&this.state===s3.NONE&&this._rotateLeft(this._getAutoRotationAngle(f)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let e=this.minAzimuthAngle,P=this.maxAzimuthAngle;isFinite(e)&&isFinite(P)&&(e<-Math.PI?e+=Zv:e>Math.PI&&(e-=Zv),P<-Math.PI?P+=Zv:P>Math.PI&&(P-=Zv),e<=P?this._spherical.theta=Math.max(e,Math.min(P,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(e+P)/2?Math.max(e,this._spherical.theta):Math.min(P,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let z=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let t=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),z=t!=this._spherical.radius}if(Y3.setFromSpherical(this._spherical),Y3.applyQuaternion(this._quatInverse),v.copy(this.target).add(Y3),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let t=null;if(this.object.isPerspectiveCamera){let u=Y3.length();t=this._clampDistance(u*this._scale);let r=u-t;this.object.position.addScaledVector(this._dollyDirection,r),this.object.updateMatrixWorld(),z=!!r}else if(this.object.isOrthographicCamera){let u=new L(this._mouse.x,this._mouse.y,0);u.unproject(this.object);let r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),z=r!==this.object.zoom;let b=new L(this._mouse.x,this._mouse.y,0);b.unproject(this.object),this.object.position.sub(b).add(u),this.object.updateMatrixWorld(),t=Y3.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;t!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(t).add(this.object.position):(dt.origin.copy(this.object.position),dt.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dt.direction))<T1?this.object.lookAt(this.target):(md.setFromNormalAndCoplanarPoint(this.object.up,this.target),dt.intersectPlane(md,this.target))))}else if(this.object.isOrthographicCamera){let t=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),t!==this.object.zoom&&(this.object.updateProjectionMatrix(),z=!0)}return this._scale=1,this._performCursorZoom=!1,z||this._lastPosition.distanceToSquared(this.object.position)>Gr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gr||this._lastTargetPosition.distanceToSquared(this.target)>Gr?(this.dispatchEvent(ad),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(f){return f!==null?Zv/60*this.autoRotateSpeed*f:Zv/60/60*this.autoRotateSpeed}_getZoomScale(f){let v=Math.abs(f*.01);return Math.pow(.95,this.zoomSpeed*v)}_rotateLeft(f){this._sphericalDelta.theta-=f}_rotateUp(f){this._sphericalDelta.phi-=f}_panLeft(f,v){Y3.setFromMatrixColumn(v,0),Y3.multiplyScalar(-f),this._panOffset.add(Y3)}_panUp(f,v){this.screenSpacePanning===!0?Y3.setFromMatrixColumn(v,1):(Y3.setFromMatrixColumn(v,0),Y3.crossVectors(this.object.up,Y3)),Y3.multiplyScalar(f),this._panOffset.add(Y3)}_pan(f,v){let e=this.domElement;if(this.object.isPerspectiveCamera){let P=this.object.position;Y3.copy(P).sub(this.target);let z=Y3.length();z*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*f*z/e.clientHeight,this.object.matrix),this._panUp(2*v*z/e.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(f*(this.object.right-this.object.left)/this.object.zoom/e.clientWidth,this.object.matrix),this._panUp(v*(this.object.top-this.object.bottom)/this.object.zoom/e.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(f){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=f:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(f){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=f:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(f,v){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let e=this.domElement.getBoundingClientRect(),P=f-e.left,z=v-e.top,t=e.width,u=e.height;this._mouse.x=P/t*2-1,this._mouse.y=-(z/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(f){return Math.max(this.minDistance,Math.min(this.maxDistance,f))}_handleMouseDownRotate(f){this._rotateStart.set(f.clientX,f.clientY)}_handleMouseDownDolly(f){this._updateZoomParameters(f.clientX,f.clientX),this._dollyStart.set(f.clientX,f.clientY)}_handleMouseDownPan(f){this._panStart.set(f.clientX,f.clientY)}_handleMouseMoveRotate(f){this._rotateEnd.set(f.clientX,f.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let v=this.domElement;this._rotateLeft(Zv*this._rotateDelta.x/v.clientHeight),this._rotateUp(Zv*this._rotateDelta.y/v.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(f){this._dollyEnd.set(f.clientX,f.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(f){this._panEnd.set(f.clientX,f.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(f){this._updateZoomParameters(f.clientX,f.clientY),f.deltaY<0?this._dollyIn(this._getZoomScale(f.deltaY)):f.deltaY>0&&this._dollyOut(this._getZoomScale(f.deltaY)),this.update()}_handleKeyDown(f){let v=!1;switch(f.code){case this.keys.UP:f.ctrlKey||f.metaKey||f.shiftKey?this.enableRotate&&this._rotateUp(Zv*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),v=!0;break;case this.keys.BOTTOM:f.ctrlKey||f.metaKey||f.shiftKey?this.enableRotate&&this._rotateUp(-Zv*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),v=!0;break;case this.keys.LEFT:f.ctrlKey||f.metaKey||f.shiftKey?this.enableRotate&&this._rotateLeft(Zv*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),v=!0;break;case this.keys.RIGHT:f.ctrlKey||f.metaKey||f.shiftKey?this.enableRotate&&this._rotateLeft(-Zv*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),v=!0;break}v&&(f.preventDefault(),this.update())}_handleTouchStartRotate(f){if(this._pointers.length===1)this._rotateStart.set(f.pageX,f.pageY);else{let v=this._getSecondPointerPosition(f),e=.5*(f.pageX+v.x),P=.5*(f.pageY+v.y);this._rotateStart.set(e,P)}}_handleTouchStartPan(f){if(this._pointers.length===1)this._panStart.set(f.pageX,f.pageY);else{let v=this._getSecondPointerPosition(f),e=.5*(f.pageX+v.x),P=.5*(f.pageY+v.y);this._panStart.set(e,P)}}_handleTouchStartDolly(f){let v=this._getSecondPointerPosition(f),e=f.pageX-v.x,P=f.pageY-v.y,z=Math.sqrt(e*e+P*P);this._dollyStart.set(0,z)}_handleTouchStartDollyPan(f){this.enableZoom&&this._handleTouchStartDolly(f),this.enablePan&&this._handleTouchStartPan(f)}_handleTouchStartDollyRotate(f){this.enableZoom&&this._handleTouchStartDolly(f),this.enableRotate&&this._handleTouchStartRotate(f)}_handleTouchMoveRotate(f){if(this._pointers.length==1)this._rotateEnd.set(f.pageX,f.pageY);else{let e=this._getSecondPointerPosition(f),P=.5*(f.pageX+e.x),z=.5*(f.pageY+e.y);this._rotateEnd.set(P,z)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let v=this.domElement;this._rotateLeft(Zv*this._rotateDelta.x/v.clientHeight),this._rotateUp(Zv*this._rotateDelta.y/v.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(f){if(this._pointers.length===1)this._panEnd.set(f.pageX,f.pageY);else{let v=this._getSecondPointerPosition(f),e=.5*(f.pageX+v.x),P=.5*(f.pageY+v.y);this._panEnd.set(e,P)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(f){let v=this._getSecondPointerPosition(f),e=f.pageX-v.x,P=f.pageY-v.y,z=Math.sqrt(e*e+P*P);this._dollyEnd.set(0,z),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let t=(f.pageX+v.x)*.5,u=(f.pageY+v.y)*.5;this._updateZoomParameters(t,u)}_handleTouchMoveDollyPan(f){this.enableZoom&&this._handleTouchMoveDolly(f),this.enablePan&&this._handleTouchMovePan(f)}_handleTouchMoveDollyRotate(f){this.enableZoom&&this._handleTouchMoveDolly(f),this.enableRotate&&this._handleTouchMoveRotate(f)}_addPointer(f){this._pointers.push(f.pointerId)}_removePointer(f){delete this._pointerPositions[f.pointerId];for(let v=0;v<this._pointers.length;v++)if(this._pointers[v]==f.pointerId){this._pointers.splice(v,1);return}}_isTrackingPointer(f){for(let v=0;v<this._pointers.length;v++)if(this._pointers[v]==f.pointerId)return!0;return!1}_trackPointer(f){let v=this._pointerPositions[f.pointerId];v===void 0&&(v=new g,this._pointerPositions[f.pointerId]=v),v.set(f.pageX,f.pageY)}_getSecondPointerPosition(f){let v=f.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[v]}_customWheelEvent(f){let v=f.deltaMode,e={clientX:f.clientX,clientY:f.clientY,deltaY:f.deltaY};switch(v){case 1:e.deltaY*=16;break;case 2:e.deltaY*=100;break}return f.ctrlKey&&!this._controlActive&&(e.deltaY*=10),e}};function y1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function p1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function O1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nd),this.state=s3.NONE;break;case 1:let f=this._pointers[0],v=this._pointerPositions[f];this._onTouchStart({pointerId:f,pageX:v.x,pageY:v.y});break}}function l1(n){let f;switch(n.button){case 0:f=this.mouseButtons.LEFT;break;case 1:f=this.mouseButtons.MIDDLE;break;case 2:f=this.mouseButtons.RIGHT;break;default:f=-1}switch(f){case M7.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=s3.DOLLY;break;case M7.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=s3.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=s3.ROTATE}break;case M7.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=s3.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=s3.PAN}break;default:this.state=s3.NONE}this.state!==s3.NONE&&this.dispatchEvent(kr)}function L1(n){switch(this.state){case s3.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case s3.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case s3.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function W1(n){this.enabled===!1||this.enableZoom===!1||this.state!==s3.NONE||(n.preventDefault(),this.dispatchEvent(kr),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Nd))}function h1(n){this.enabled!==!1&&this._handleKeyDown(n)}function w1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case F7.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=s3.TOUCH_ROTATE;break;case F7.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=s3.TOUCH_PAN;break;default:this.state=s3.NONE}break;case 2:switch(this.touches.TWO){case F7.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=s3.TOUCH_DOLLY_PAN;break;case F7.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=s3.TOUCH_DOLLY_ROTATE;break;default:this.state=s3.NONE}break;default:this.state=s3.NONE}this.state!==s3.NONE&&this.dispatchEvent(kr)}function V1(n){switch(this._trackPointer(n),this.state){case s3.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case s3.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case s3.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case s3.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=s3.NONE}}function D1(n){this.enabled!==!1&&n.preventDefault()}function q1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function o1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Jr(n,f){if(f===Pt)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(f===r9||f===Z8){let v=n.getIndex();if(v===null){let t=[],u=n.getAttribute("position");if(u!==void 0){for(let r=0;r<u.count;r++)t.push(r);n.setIndex(t),v=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let e=v.count-2,P=[];if(f===r9)for(let t=1;t<=e;t++)P.push(v.getX(0)),P.push(v.getX(t)),P.push(v.getX(t+1));else for(let t=0;t<e;t++)t%2===0?(P.push(v.getX(t)),P.push(v.getX(t+1)),P.push(v.getX(t+2))):(P.push(v.getX(t+2)),P.push(v.getX(t+1)),P.push(v.getX(t)));P.length/3!==e&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let z=n.clone();return z.setIndex(P),z.clearGroups(),z}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",f),n}var xt=class extends R3{constructor(f){super(f),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(v){return new Er(v)}),this.register(function(v){return new Br(v)}),this.register(function(v){return new P4(v)}),this.register(function(v){return new n4(v)}),this.register(function(v){return new z4(v)}),this.register(function(v){return new Qr(v)}),this.register(function(v){return new Ar(v)}),this.register(function(v){return new _r(v)}),this.register(function(v){return new $r(v)}),this.register(function(v){return new gr(v)}),this.register(function(v){return new f4(v)}),this.register(function(v){return new Cr(v)}),this.register(function(v){return new e4(v)}),this.register(function(v){return new v4(v)}),this.register(function(v){return new Ur(v)}),this.register(function(v){return new t4(v)}),this.register(function(v){return new u4(v)})}load(f,v,e,P){let z=this,t;if(this.resourcePath!=="")t=this.resourcePath;else if(this.path!==""){let b=Sv.extractUrlBase(f);t=Sv.resolveURL(b,this.path)}else t=Sv.extractUrlBase(f);this.manager.itemStart(f);let u=function(b){P?P(b):console.error(b),z.manager.itemError(f),z.manager.itemEnd(f)},r=new Hv(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(f,function(b){try{z.parse(b,t,function(X){v(X),z.manager.itemEnd(f)},u)}catch(X){u(X)}},e,u)}setDRACOLoader(f){return this.dracoLoader=f,this}setKTX2Loader(f){return this.ktx2Loader=f,this}setMeshoptDecoder(f){return this.meshoptDecoder=f,this}register(f){return this.pluginCallbacks.indexOf(f)===-1&&this.pluginCallbacks.push(f),this}unregister(f){return this.pluginCallbacks.indexOf(f)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(f),1),this}parse(f,v,e,P){let z,t={},u={},r=new TextDecoder;if(typeof f=="string")z=JSON.parse(f);else if(f instanceof ArrayBuffer)if(r.decode(new Uint8Array(f,0,4))===pd){try{t[$f.KHR_BINARY_GLTF]=new r4(f)}catch(d){P&&P(d);return}z=JSON.parse(t[$f.KHR_BINARY_GLTF].content)}else z=JSON.parse(r.decode(f));else z=f;if(z.asset===void 0||z.asset.version[0]<2){P&&P(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let b=new c4(z,{path:v||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});b.fileLoader.setRequestHeader(this.requestHeader);for(let X=0;X<this.pluginCallbacks.length;X++){let d=this.pluginCallbacks[X](b);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[d.name]=d,t[d.name]=!0}if(z.extensionsUsed)for(let X=0;X<z.extensionsUsed.length;++X){let d=z.extensionsUsed[X],H=z.extensionsRequired||[];switch(d){case $f.KHR_MATERIALS_UNLIT:t[d]=new Ir;break;case $f.KHR_DRACO_MESH_COMPRESSION:t[d]=new b4(z,this.dracoLoader);break;case $f.KHR_TEXTURE_TRANSFORM:t[d]=new X4;break;case $f.KHR_MESH_QUANTIZATION:t[d]=new d4;break;default:H.indexOf(d)>=0&&u[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}b.setExtensions(t),b.setPlugins(u),b.parse(e,P)}parseAsync(f,v){let e=this;return new Promise(function(P,z){e.parse(f,v,P,z)})}};function M1(){let n={};return{get:function(f){return n[f]},add:function(f,v){n[f]=v},remove:function(f){delete n[f]},removeAll:function(){n={}}}}var $f={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ur=class{constructor(f){this.parser=f,this.name=$f.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let f=this.parser,v=this.parser.json.nodes||[];for(let e=0,P=v.length;e<P;e++){let z=v[e];z.extensions&&z.extensions[this.name]&&z.extensions[this.name].light!==void 0&&f._addNodeRef(this.cache,z.extensions[this.name].light)}}_loadLight(f){let v=this.parser,e="light:"+f,P=v.cache.get(e);if(P)return P;let z=v.json,r=((z.extensions&&z.extensions[this.name]||{}).lights||[])[f],b,X=new bf(16777215);r.color!==void 0&&X.setRGB(r.color[0],r.color[1],r.color[2],I3);let d=r.range!==void 0?r.range:0;switch(r.type){case"directional":b=new z7(X),b.target.position.set(0,0,-1),b.add(b.target);break;case"point":b=new v9(X),b.distance=d;break;case"spot":b=new f9(X),b.distance=d,r.spot=r.spot||{},r.spot.innerConeAngle=r.spot.innerConeAngle!==void 0?r.spot.innerConeAngle:0,r.spot.outerConeAngle=r.spot.outerConeAngle!==void 0?r.spot.outerConeAngle:Math.PI/4,b.angle=r.spot.outerConeAngle,b.penumbra=1-r.spot.innerConeAngle/r.spot.outerConeAngle,b.target.position.set(0,0,-1),b.add(b.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+r.type)}return b.position.set(0,0,0),Z7(b,r),r.intensity!==void 0&&(b.intensity=r.intensity),b.name=v.createUniqueName(r.name||"light_"+f),P=Promise.resolve(b),v.cache.add(e,P),P}getDependency(f,v){if(f==="light")return this._loadLight(v)}createNodeAttachment(f){let v=this,e=this.parser,z=e.json.nodes[f],u=(z.extensions&&z.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(r){return e._getNodeRef(v.cache,u,r)})}},Ir=class{constructor(){this.name=$f.KHR_MATERIALS_UNLIT}getMaterialType(){return u3}extendParams(f,v,e){let P=[];f.color=new bf(1,1,1),f.opacity=1;let z=v.pbrMetallicRoughness;if(z){if(Array.isArray(z.baseColorFactor)){let t=z.baseColorFactor;f.color.setRGB(t[0],t[1],t[2],I3),f.opacity=t[3]}z.baseColorTexture!==void 0&&P.push(e.assignTexture(f,"map",z.baseColorTexture,X3))}return Promise.all(P)}},gr=class{constructor(f){this.parser=f,this.name=$f.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(f,v){let P=this.parser.json.materials[f];if(!P.extensions||!P.extensions[this.name])return Promise.resolve();let z=P.extensions[this.name].emissiveStrength;return z!==void 0&&(v.emissiveIntensity=z),Promise.resolve()}},Er=class{constructor(f){this.parser=f,this.name=$f.KHR_MATERIALS_CLEARCOAT}getMaterialType(f){let e=this.parser.json.materials[f];return!e.extensions||!e.extensions[this.name]?null:F3}extendMaterialParams(f,v){let e=this.parser,P=e.json.materials[f];if(!P.extensions||!P.extensions[this.name])return Promise.resolve();let z=[],t=P.extensions[this.name];if(t.clearcoatFactor!==void 0&&(v.clearcoat=t.clearcoatFactor),t.clearcoatTexture!==void 0&&z.push(e.assignTexture(v,"clearcoatMap",t.clearcoatTexture)),t.clearcoatRoughnessFactor!==void 0&&(v.clearcoatRoughness=t.clearcoatRoughnessFactor),t.clearcoatRoughnessTexture!==void 0&&z.push(e.assignTexture(v,"clearcoatRoughnessMap",t.clearcoatRoughnessTexture)),t.clearcoatNormalTexture!==void 0&&(z.push(e.assignTexture(v,"clearcoatNormalMap",t.clearcoatNormalTexture)),t.clearcoatNormalTexture.scale!==void 0)){let u=t.clearcoatNormalTexture.scale;v.clearcoatNormalScale=new g(u,u)}return Promise.all(z)}},Br=class{constructor(f){this.parser=f,this.name=$f.KHR_MATERIALS_DISPERSION}getMaterialType(f){let e=this.parser.json.materials[f];return!e.extensions||!e.extensions[this.name]?null:F3}extendMaterialParams(f,v){let P=this.parser.json.materials[f];if(!P.extensions||!P.extensions[this.name])return Promise.resolve();let z=P.extensions[this.name];return v.dispersion=z.dispersion!==void 0?z.dispersion:0,Promise.resolve()}},Cr=class{constructor(f){this.parser=f,this.name=$f.KHR_MATERIALS_IRIDESCENCE}getMaterialType(f){let e=this.parser.json.materials[f];return!e.extensions||!e.extensions[this.name]?null:F3}extendMaterialParams(f,v){let e=this.parser,P=e.json.materials[f];if(!P.extensions||!P.extensions[this.name])return Promise.resolve();let z=[],t=P.extensions[this.name];return t.iridescenceFactor!==void 0&&(v.iridescence=t.iridescenceFactor),t.iridescenceTexture!==void 0&&z.push(e.assignTexture(v,"iridescenceMap",t.iridescenceTexture)),t.iridescenceIor!==void 0&&(v.iridescenceIOR=t.iridescenceIor),v.iridescenceThicknessRange===void 0&&(v.iridescenceThicknessRange=[100,400]),t.iridescenceThicknessMinimum!==void 0&&(v.iridescenceThicknessRange[0]=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(v.iridescenceThicknessRange[1]=t.iridescenceThicknessMaximum),t.iridescenceThicknessTexture!==void 0&&z.push(e.assignTexture(v,"iridescenceThicknessMap",t.iridescenceThicknessTexture)),Promise.all(z)}},Qr=class{constructor(f){this.parser=f,this.name=$f.KHR_MATERIALS_SHEEN}getMaterialType(f){let e=this.parser.json.materials[f];return!e.extensions||!e.extensions[this.name]?null:F3}extendMaterialParams(f,v){let e=this.parser,P=e.json.materials[f];if(!P.extensions||!P.extensions[this.name])return Promise.resolve();let z=[];v.sheenColor=new bf(0,0,0),v.sheenRoughness=0,v.sheen=1;let t=P.extensions[this.name];if(t.sheenColorFactor!==void 0){let u=t.sheenColorFactor;v.sheenColor.setRGB(u[0],u[1],u[2],I3)}return t.sheenRoughnessFactor!==void 0&&(v.sheenRoughness=t.sheenRoughnessFactor),t.sheenColorTexture!==void 0&&z.push(e.assignTexture(v,"sheenColorMap",t.sheenColorTexture,X3)),t.sheenRoughnessTexture!==void 0&&z.push(e.assignTexture(v,"sheenRoughnessMap",t.sheenRoughnessTexture)),Promise.all(z)}},Ar=class{constructor(f){this.parser=f,this.name=$f.KHR_MATERIALS_TRANSMISSION}getMaterialType(f){let e=this.parser.json.materials[f];return!e.extensions||!e.extensions[this.name]?null:F3}extendMaterialParams(f,v){let e=this.parser,P=e.json.materials[f];if(!P.extensions||!P.extensions[this.name])return Promise.resolve();let z=[],t=P.extensions[this.name];return t.transmissionFactor!==void 0&&(v.transmission=t.transmissionFactor),t.transmissionTexture!==void 0&&z.push(e.assignTexture(v,"transmissionMap",t.transmissionTexture)),Promise.all(z)}},_r=class{constructor(f){this.parser=f,this.name=$f.KHR_MATERIALS_VOLUME}getMaterialType(f){let e=this.parser.json.materials[f];return!e.extensions||!e.extensions[this.name]?null:F3}extendMaterialParams(f,v){let e=this.parser,P=e.json.materials[f];if(!P.extensions||!P.extensions[this.name])return Promise.resolve();let z=[],t=P.extensions[this.name];v.thickness=t.thicknessFactor!==void 0?t.thicknessFactor:0,t.thicknessTexture!==void 0&&z.push(e.assignTexture(v,"thicknessMap",t.thicknessTexture)),v.attenuationDistance=t.attenuationDistance||1/0;let u=t.attenuationColor||[1,1,1];return v.attenuationColor=new bf().setRGB(u[0],u[1],u[2],I3),Promise.all(z)}},$r=class{constructor(f){this.parser=f,this.name=$f.KHR_MATERIALS_IOR}getMaterialType(f){let e=this.parser.json.materials[f];return!e.extensions||!e.extensions[this.name]?null:F3}extendMaterialParams(f,v){let P=this.parser.json.materials[f];if(!P.extensions||!P.extensions[this.name])return Promise.resolve();let z=P.extensions[this.name];return v.ior=z.ior!==void 0?z.ior:1.5,Promise.resolve()}},f4=class{constructor(f){this.parser=f,this.name=$f.KHR_MATERIALS_SPECULAR}getMaterialType(f){let e=this.parser.json.materials[f];return!e.extensions||!e.extensions[this.name]?null:F3}extendMaterialParams(f,v){let e=this.parser,P=e.json.materials[f];if(!P.extensions||!P.extensions[this.name])return Promise.resolve();let z=[],t=P.extensions[this.name];v.specularIntensity=t.specularFactor!==void 0?t.specularFactor:1,t.specularTexture!==void 0&&z.push(e.assignTexture(v,"specularIntensityMap",t.specularTexture));let u=t.specularColorFactor||[1,1,1];return v.specularColor=new bf().setRGB(u[0],u[1],u[2],I3),t.specularColorTexture!==void 0&&z.push(e.assignTexture(v,"specularColorMap",t.specularColorTexture,X3)),Promise.all(z)}},v4=class{constructor(f){this.parser=f,this.name=$f.EXT_MATERIALS_BUMP}getMaterialType(f){let e=this.parser.json.materials[f];return!e.extensions||!e.extensions[this.name]?null:F3}extendMaterialParams(f,v){let e=this.parser,P=e.json.materials[f];if(!P.extensions||!P.extensions[this.name])return Promise.resolve();let z=[],t=P.extensions[this.name];return v.bumpScale=t.bumpFactor!==void 0?t.bumpFactor:1,t.bumpTexture!==void 0&&z.push(e.assignTexture(v,"bumpMap",t.bumpTexture)),Promise.all(z)}},e4=class{constructor(f){this.parser=f,this.name=$f.KHR_MATERIALS_ANISOTROPY}getMaterialType(f){let e=this.parser.json.materials[f];return!e.extensions||!e.extensions[this.name]?null:F3}extendMaterialParams(f,v){let e=this.parser,P=e.json.materials[f];if(!P.extensions||!P.extensions[this.name])return Promise.resolve();let z=[],t=P.extensions[this.name];return t.anisotropyStrength!==void 0&&(v.anisotropy=t.anisotropyStrength),t.anisotropyRotation!==void 0&&(v.anisotropyRotation=t.anisotropyRotation),t.anisotropyTexture!==void 0&&z.push(e.assignTexture(v,"anisotropyMap",t.anisotropyTexture)),Promise.all(z)}},P4=class{constructor(f){this.parser=f,this.name=$f.KHR_TEXTURE_BASISU}loadTexture(f){let v=this.parser,e=v.json,P=e.textures[f];if(!P.extensions||!P.extensions[this.name])return null;let z=P.extensions[this.name],t=v.options.ktx2Loader;if(!t){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return v.loadTextureImage(f,z.source,t)}},n4=class{constructor(f){this.parser=f,this.name=$f.EXT_TEXTURE_WEBP}loadTexture(f){let v=this.name,e=this.parser,P=e.json,z=P.textures[f];if(!z.extensions||!z.extensions[v])return null;let t=z.extensions[v],u=P.images[t.source],r=e.textureLoader;if(u.uri){let b=e.options.manager.getHandler(u.uri);b!==null&&(r=b)}return e.loadTextureImage(f,t.source,r)}},z4=class{constructor(f){this.parser=f,this.name=$f.EXT_TEXTURE_AVIF}loadTexture(f){let v=this.name,e=this.parser,P=e.json,z=P.textures[f];if(!z.extensions||!z.extensions[v])return null;let t=z.extensions[v],u=P.images[t.source],r=e.textureLoader;if(u.uri){let b=e.options.manager.getHandler(u.uri);b!==null&&(r=b)}return e.loadTextureImage(f,t.source,r)}},t4=class{constructor(f){this.name=$f.EXT_MESHOPT_COMPRESSION,this.parser=f}loadBufferView(f){let v=this.parser.json,e=v.bufferViews[f];if(e.extensions&&e.extensions[this.name]){let P=e.extensions[this.name],z=this.parser.getDependency("buffer",P.buffer),t=this.parser.options.meshoptDecoder;if(!t||!t.supported){if(v.extensionsRequired&&v.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return z.then(function(u){let r=P.byteOffset||0,b=P.byteLength||0,X=P.count,d=P.byteStride,H=new Uint8Array(u,r,b);return t.decodeGltfBufferAsync?t.decodeGltfBufferAsync(X,d,H,P.mode,P.filter).then(function(x){return x.buffer}):t.ready.then(function(){let x=new ArrayBuffer(X*d);return t.decodeGltfBuffer(new Uint8Array(x),X,d,H,P.mode,P.filter),x})})}else return null}},u4=class{constructor(f){this.name=$f.EXT_MESH_GPU_INSTANCING,this.parser=f}createNodeMesh(f){let v=this.parser.json,e=v.nodes[f];if(!e.extensions||!e.extensions[this.name]||e.mesh===void 0)return null;let P=v.meshes[e.mesh];for(let b of P.primitives)if(b.mode!==Iv.TRIANGLES&&b.mode!==Iv.TRIANGLE_STRIP&&b.mode!==Iv.TRIANGLE_FAN&&b.mode!==void 0)return null;let t=e.extensions[this.name].attributes,u=[],r={};for(let b in t)u.push(this.parser.getDependency("accessor",t[b]).then(X=>(r[b]=X,r[b])));return u.length<1?null:(u.push(this.parser.createNodeMesh(f)),Promise.all(u).then(b=>{let X=b.pop(),d=X.isGroup?X.children:[X],H=b[0].count,x=[];for(let c of d){let a=new of,j=new L,s=new l3,i=new L(1,1,1),N=new Ie(c.geometry,c.material,H);for(let m=0;m<H;m++)r.TRANSLATION&&j.fromBufferAttribute(r.TRANSLATION,m),r.ROTATION&&s.fromBufferAttribute(r.ROTATION,m),r.SCALE&&i.fromBufferAttribute(r.SCALE,m),N.setMatrixAt(m,a.compose(j,s,i));for(let m in r)if(m==="_COLOR_0"){let p=r[m];N.instanceColor=new Jv(p.array,p.itemSize,p.normalized)}else m!=="TRANSLATION"&&m!=="ROTATION"&&m!=="SCALE"&&c.geometry.setAttribute(m,r[m]);P3.prototype.copy.call(N,c),this.parser.assignFinalMaterial(N),x.push(N)}return X.isGroup?(X.clear(),X.add(...x),X):x[0]}))}},pd="glTF",Un=12,id={JSON:1313821514,BIN:5130562},r4=class{constructor(f){this.name=$f.KHR_BINARY_GLTF,this.content=null,this.body=null;let v=new DataView(f,0,Un),e=new TextDecoder;if(this.header={magic:e.decode(new Uint8Array(f.slice(0,4))),version:v.getUint32(4,!0),length:v.getUint32(8,!0)},this.header.magic!==pd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let P=this.header.length-Un,z=new DataView(f,Un),t=0;for(;t<P;){let u=z.getUint32(t,!0);t+=4;let r=z.getUint32(t,!0);if(t+=4,r===id.JSON){let b=new Uint8Array(f,Un+t,u);this.content=e.decode(b)}else if(r===id.BIN){let b=Un+t;this.body=f.slice(b,b+u)}t+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},b4=class{constructor(f,v){if(!v)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$f.KHR_DRACO_MESH_COMPRESSION,this.json=f,this.dracoLoader=v,this.dracoLoader.preload()}decodePrimitive(f,v){let e=this.json,P=this.dracoLoader,z=f.extensions[this.name].bufferView,t=f.extensions[this.name].attributes,u={},r={},b={};for(let X in t){let d=x4[X]||X.toLowerCase();u[d]=t[X]}for(let X in f.attributes){let d=x4[X]||X.toLowerCase();if(t[X]!==void 0){let H=e.accessors[f.attributes[X]],x=l8[H.componentType];b[d]=x.name,r[d]=H.normalized===!0}}return v.getDependency("bufferView",z).then(function(X){return new Promise(function(d,H){P.decodeDracoFile(X,function(x){for(let c in x.attributes){let a=x.attributes[c],j=r[c];j!==void 0&&(a.normalized=j)}d(x)},u,b,I3,H)})})}},X4=class{constructor(){this.name=$f.KHR_TEXTURE_TRANSFORM}extendTexture(f,v){return(v.texCoord===void 0||v.texCoord===f.channel)&&v.offset===void 0&&v.rotation===void 0&&v.scale===void 0||(f=f.clone(),v.texCoord!==void 0&&(f.channel=v.texCoord),v.offset!==void 0&&f.offset.fromArray(v.offset),v.rotation!==void 0&&(f.rotation=v.rotation),v.scale!==void 0&&f.repeat.fromArray(v.scale),f.needsUpdate=!0),f}},d4=class{constructor(){this.name=$f.KHR_MESH_QUANTIZATION}},st=class extends x7{constructor(f,v,e,P){super(f,v,e,P)}copySampleValue_(f){let v=this.resultBuffer,e=this.sampleValues,P=this.valueSize,z=f*P*3+P;for(let t=0;t!==P;t++)v[t]=e[z+t];return v}interpolate_(f,v,e,P){let z=this.resultBuffer,t=this.sampleValues,u=this.valueSize,r=u*2,b=u*3,X=P-v,d=(e-v)/X,H=d*d,x=H*d,c=f*b,a=c-b,j=-2*x+3*H,s=x-H,i=1-j,N=s-H+d;for(let m=0;m!==u;m++){let p=t[a+m+u],l=t[a+m+r]*X,W=t[c+m+u],w=t[c+m]*X;z[m]=i*p+N*l+j*W+s*w}return z}},F1=new l3,H4=class extends st{interpolate_(f,v,e,P){let z=super.interpolate_(f,v,e,P);return F1.fromArray(z).normalize().toArray(z),z}},Iv={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},l8={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zd={9728:q3,9729:Z3,9984:c8,9985:Xe,9986:G7,9987:iv},Td={33071:uv,33648:fe,10497:Gv},Yr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},x4={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},de={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},R1={CUBICSPLINE:void 0,LINEAR:ee,STEP:ve},Sr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function G1(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ev({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vv})),n.DefaultMaterial}function c9(n,f,v){for(let e in v.extensions)n[e]===void 0&&(f.userData.gltfExtensions=f.userData.gltfExtensions||{},f.userData.gltfExtensions[e]=v.extensions[e])}function Z7(n,f){f.extras!==void 0&&(typeof f.extras=="object"?Object.assign(n.userData,f.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+f.extras))}function k1(n,f,v){let e=!1,P=!1,z=!1;for(let b=0,X=f.length;b<X;b++){let d=f[b];if(d.POSITION!==void 0&&(e=!0),d.NORMAL!==void 0&&(P=!0),d.COLOR_0!==void 0&&(z=!0),e&&P&&z)break}if(!e&&!P&&!z)return Promise.resolve(n);let t=[],u=[],r=[];for(let b=0,X=f.length;b<X;b++){let d=f[b];if(e){let H=d.POSITION!==void 0?v.getDependency("accessor",d.POSITION):n.attributes.position;t.push(H)}if(P){let H=d.NORMAL!==void 0?v.getDependency("accessor",d.NORMAL):n.attributes.normal;u.push(H)}if(z){let H=d.COLOR_0!==void 0?v.getDependency("accessor",d.COLOR_0):n.attributes.color;r.push(H)}}return Promise.all([Promise.all(t),Promise.all(u),Promise.all(r)]).then(function(b){let X=b[0],d=b[1],H=b[2];return e&&(n.morphAttributes.position=X),P&&(n.morphAttributes.normal=d),z&&(n.morphAttributes.color=H),n.morphTargetsRelative=!0,n})}function J1(n,f){if(n.updateMorphTargets(),f.weights!==void 0)for(let v=0,e=f.weights.length;v<e;v++)n.morphTargetInfluences[v]=f.weights[v];if(f.extras&&Array.isArray(f.extras.targetNames)){let v=f.extras.targetNames;if(n.morphTargetInfluences.length===v.length){n.morphTargetDictionary={};for(let e=0,P=v.length;e<P;e++)n.morphTargetDictionary[v[e]]=e}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Y1(n){let f,v=n.extensions&&n.extensions[$f.KHR_DRACO_MESH_COMPRESSION];if(v?f="draco:"+v.bufferView+":"+v.indices+":"+Kr(v.attributes):f=n.indices+":"+Kr(n.attributes)+":"+n.mode,n.targets!==void 0)for(let e=0,P=n.targets.length;e<P;e++)f+=":"+Kr(n.targets[e]);return f}function Kr(n){let f="",v=Object.keys(n).sort();for(let e=0,P=v.length;e<P;e++)f+=v[e]+":"+n[v[e]]+";";return f}function s4(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function S1(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var K1=new of,c4=class{constructor(f={},v={}){this.json=f,this.extensions={},this.plugins={},this.options=v,this.cache=new M1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let e=!1,P=-1,z=!1,t=-1;if(typeof navigator<"u"){let u=navigator.userAgent;e=/^((?!chrome|android).)*safari/i.test(u)===!0;let r=u.match(/Version\/(\d+)/);P=e&&r?parseInt(r[1],10):-1,z=u.indexOf("Firefox")>-1,t=z?u.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||e&&P<17||z&&t<98?this.textureLoader=new Vv(this.options.manager):this.textureLoader=new X8(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Hv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(f){this.extensions=f}setPlugins(f){this.plugins=f}parse(f,v){let e=this,P=this.json,z=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(t){return t._markDefs&&t._markDefs()}),Promise.all(this._invokeAll(function(t){return t.beforeRoot&&t.beforeRoot()})).then(function(){return Promise.all([e.getDependencies("scene"),e.getDependencies("animation"),e.getDependencies("camera")])}).then(function(t){let u={scene:t[0][P.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:P.asset,parser:e,userData:{}};return c9(z,u,P),Z7(u,P),Promise.all(e._invokeAll(function(r){return r.afterRoot&&r.afterRoot(u)})).then(function(){for(let r of u.scenes)r.updateMatrixWorld();f(u)})}).catch(v)}_markDefs(){let f=this.json.nodes||[],v=this.json.skins||[],e=this.json.meshes||[];for(let P=0,z=v.length;P<z;P++){let t=v[P].joints;for(let u=0,r=t.length;u<r;u++)f[t[u]].isBone=!0}for(let P=0,z=f.length;P<z;P++){let t=f[P];t.mesh!==void 0&&(this._addNodeRef(this.meshCache,t.mesh),t.skin!==void 0&&(e[t.mesh].isSkinnedMesh=!0)),t.camera!==void 0&&this._addNodeRef(this.cameraCache,t.camera)}}_addNodeRef(f,v){v!==void 0&&(f.refs[v]===void 0&&(f.refs[v]=f.uses[v]=0),f.refs[v]++)}_getNodeRef(f,v,e){if(f.refs[v]<=1)return e;let P=e.clone(),z=(t,u)=>{let r=this.associations.get(t);r!=null&&this.associations.set(u,r);for(let[b,X]of t.children.entries())z(X,u.children[b])};return z(e,P),P.name+="_instance_"+f.uses[v]++,P}_invokeOne(f){let v=Object.values(this.plugins);v.push(this);for(let e=0;e<v.length;e++){let P=f(v[e]);if(P)return P}return null}_invokeAll(f){let v=Object.values(this.plugins);v.unshift(this);let e=[];for(let P=0;P<v.length;P++){let z=f(v[P]);z&&e.push(z)}return e}getDependency(f,v){let e=f+":"+v,P=this.cache.get(e);if(!P){switch(f){case"scene":P=this.loadScene(v);break;case"node":P=this._invokeOne(function(z){return z.loadNode&&z.loadNode(v)});break;case"mesh":P=this._invokeOne(function(z){return z.loadMesh&&z.loadMesh(v)});break;case"accessor":P=this.loadAccessor(v);break;case"bufferView":P=this._invokeOne(function(z){return z.loadBufferView&&z.loadBufferView(v)});break;case"buffer":P=this.loadBuffer(v);break;case"material":P=this._invokeOne(function(z){return z.loadMaterial&&z.loadMaterial(v)});break;case"texture":P=this._invokeOne(function(z){return z.loadTexture&&z.loadTexture(v)});break;case"skin":P=this.loadSkin(v);break;case"animation":P=this._invokeOne(function(z){return z.loadAnimation&&z.loadAnimation(v)});break;case"camera":P=this.loadCamera(v);break;default:if(P=this._invokeOne(function(z){return z!=this&&z.getDependency&&z.getDependency(f,v)}),!P)throw new Error("Unknown type: "+f);break}this.cache.add(e,P)}return P}getDependencies(f){let v=this.cache.get(f);if(!v){let e=this,P=this.json[f+(f==="mesh"?"es":"s")]||[];v=Promise.all(P.map(function(z,t){return e.getDependency(f,t)})),this.cache.add(f,v)}return v}loadBuffer(f){let v=this.json.buffers[f],e=this.fileLoader;if(v.type&&v.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+v.type+" buffer type is not supported.");if(v.uri===void 0&&f===0)return Promise.resolve(this.extensions[$f.KHR_BINARY_GLTF].body);let P=this.options;return new Promise(function(z,t){e.load(Sv.resolveURL(v.uri,P.path),z,void 0,function(){t(new Error('THREE.GLTFLoader: Failed to load buffer "'+v.uri+'".'))})})}loadBufferView(f){let v=this.json.bufferViews[f];return this.getDependency("buffer",v.buffer).then(function(e){let P=v.byteLength||0,z=v.byteOffset||0;return e.slice(z,z+P)})}loadAccessor(f){let v=this,e=this.json,P=this.json.accessors[f];if(P.bufferView===void 0&&P.sparse===void 0){let t=Yr[P.type],u=l8[P.componentType],r=P.normalized===!0,b=new u(P.count*t);return Promise.resolve(new Af(b,t,r))}let z=[];return P.bufferView!==void 0?z.push(this.getDependency("bufferView",P.bufferView)):z.push(null),P.sparse!==void 0&&(z.push(this.getDependency("bufferView",P.sparse.indices.bufferView)),z.push(this.getDependency("bufferView",P.sparse.values.bufferView))),Promise.all(z).then(function(t){let u=t[0],r=Yr[P.type],b=l8[P.componentType],X=b.BYTES_PER_ELEMENT,d=X*r,H=P.byteOffset||0,x=P.bufferView!==void 0?e.bufferViews[P.bufferView].byteStride:void 0,c=P.normalized===!0,a,j;if(x&&x!==d){let s=Math.floor(H/x),i="InterleavedBuffer:"+P.bufferView+":"+P.componentType+":"+s+":"+P.count,N=v.cache.get(i);N||(a=new b(u,s*x,P.count*x/X),N=new H7(a,x/X),v.cache.add(i,N)),j=new $v(N,r,H%x/X,c)}else u===null?a=new b(P.count*r):a=new b(u,H,P.count*r),j=new Af(a,r,c);if(P.sparse!==void 0){let s=Yr.SCALAR,i=l8[P.sparse.indices.componentType],N=P.sparse.indices.byteOffset||0,m=P.sparse.values.byteOffset||0,p=new i(t[1],N,P.sparse.count*s),l=new b(t[2],m,P.sparse.count*r);u!==null&&(j=new Af(j.array.slice(),j.itemSize,j.normalized)),j.normalized=!1;for(let W=0,w=p.length;W<w;W++){let T=p[W];if(j.setX(T,l[W*r]),r>=2&&j.setY(T,l[W*r+1]),r>=3&&j.setZ(T,l[W*r+2]),r>=4&&j.setW(T,l[W*r+3]),r>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}j.normalized=c}return j})}loadTexture(f){let v=this.json,e=this.options,z=v.textures[f].source,t=v.images[z],u=this.textureLoader;if(t.uri){let r=e.manager.getHandler(t.uri);r!==null&&(u=r)}return this.loadTextureImage(f,z,u)}loadTextureImage(f,v,e){let P=this,z=this.json,t=z.textures[f],u=z.images[v],r=(u.uri||u.bufferView)+":"+t.sampler;if(this.textureCache[r])return this.textureCache[r];let b=this.loadImageSource(v,e).then(function(X){X.flipY=!1,X.name=t.name||u.name||"",X.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(X.name=u.uri);let H=(z.samplers||{})[t.sampler]||{};return X.magFilter=Zd[H.magFilter]||Z3,X.minFilter=Zd[H.minFilter]||iv,X.wrapS=Td[H.wrapS]||Gv,X.wrapT=Td[H.wrapT]||Gv,X.generateMipmaps=!X.isCompressedTexture&&X.minFilter!==q3&&X.minFilter!==Z3,P.associations.set(X,{textures:f}),X}).catch(function(){return null});return this.textureCache[r]=b,b}loadImageSource(f,v){let e=this,P=this.json,z=this.options;if(this.sourceCache[f]!==void 0)return this.sourceCache[f].then(d=>d.clone());let t=P.images[f],u=self.URL||self.webkitURL,r=t.uri||"",b=!1;if(t.bufferView!==void 0)r=e.getDependency("bufferView",t.bufferView).then(function(d){b=!0;let H=new Blob([d],{type:t.mimeType});return r=u.createObjectURL(H),r});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+f+" is missing URI and bufferView");let X=Promise.resolve(r).then(function(d){return new Promise(function(H,x){let c=H;v.isImageBitmapLoader===!0&&(c=function(a){let j=new T3(a);j.needsUpdate=!0,H(j)}),v.load(Sv.resolveURL(d,z.path),c,void 0,x)})}).then(function(d){return b===!0&&u.revokeObjectURL(r),Z7(d,t),d.userData.mimeType=t.mimeType||S1(t.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",r),d});return this.sourceCache[f]=X,X}assignTexture(f,v,e,P){let z=this;return this.getDependency("texture",e.index).then(function(t){if(!t)return null;if(e.texCoord!==void 0&&e.texCoord>0&&(t=t.clone(),t.channel=e.texCoord),z.extensions[$f.KHR_TEXTURE_TRANSFORM]){let u=e.extensions!==void 0?e.extensions[$f.KHR_TEXTURE_TRANSFORM]:void 0;if(u){let r=z.associations.get(t);t=z.extensions[$f.KHR_TEXTURE_TRANSFORM].extendTexture(t,u),z.associations.set(t,r)}}return P!==void 0&&(t.colorSpace=P),f[v]=t,t})}assignFinalMaterial(f){let v=f.geometry,e=f.material,P=v.attributes.tangent===void 0,z=v.attributes.color!==void 0,t=v.attributes.normal===void 0;if(f.isPoints){let u="PointsMaterial:"+e.uuid,r=this.cache.get(u);r||(r=new te,L3.prototype.copy.call(r,e),r.color.copy(e.color),r.map=e.map,r.sizeAttenuation=!1,this.cache.add(u,r)),e=r}else if(f.isLine){let u="LineBasicMaterial:"+e.uuid,r=this.cache.get(u);r||(r=new M3,L3.prototype.copy.call(r,e),r.color.copy(e.color),r.map=e.map,this.cache.add(u,r)),e=r}if(P||z||t){let u="ClonedMaterial:"+e.uuid+":";P&&(u+="derivative-tangents:"),z&&(u+="vertex-colors:"),t&&(u+="flat-shading:");let r=this.cache.get(u);r||(r=e.clone(),z&&(r.vertexColors=!0),t&&(r.flatShading=!0),P&&(r.normalScale&&(r.normalScale.y*=-1),r.clearcoatNormalScale&&(r.clearcoatNormalScale.y*=-1)),this.cache.add(u,r),this.associations.set(r,this.associations.get(e))),e=r}f.material=e}getMaterialType(){return ev}loadMaterial(f){let v=this,e=this.json,P=this.extensions,z=e.materials[f],t,u={},r=z.extensions||{},b=[];if(r[$f.KHR_MATERIALS_UNLIT]){let d=P[$f.KHR_MATERIALS_UNLIT];t=d.getMaterialType(),b.push(d.extendParams(u,z,v))}else{let d=z.pbrMetallicRoughness||{};if(u.color=new bf(1,1,1),u.opacity=1,Array.isArray(d.baseColorFactor)){let H=d.baseColorFactor;u.color.setRGB(H[0],H[1],H[2],I3),u.opacity=H[3]}d.baseColorTexture!==void 0&&b.push(v.assignTexture(u,"map",d.baseColorTexture,X3)),u.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,u.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(b.push(v.assignTexture(u,"metalnessMap",d.metallicRoughnessTexture)),b.push(v.assignTexture(u,"roughnessMap",d.metallicRoughnessTexture))),t=this._invokeOne(function(H){return H.getMaterialType&&H.getMaterialType(f)}),b.push(Promise.all(this._invokeAll(function(H){return H.extendMaterialParams&&H.extendMaterialParams(f,u)})))}z.doubleSided===!0&&(u.side=G3);let X=z.alphaMode||Sr.OPAQUE;if(X===Sr.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,X===Sr.MASK&&(u.alphaTest=z.alphaCutoff!==void 0?z.alphaCutoff:.5)),z.normalTexture!==void 0&&t!==u3&&(b.push(v.assignTexture(u,"normalMap",z.normalTexture)),u.normalScale=new g(1,1),z.normalTexture.scale!==void 0)){let d=z.normalTexture.scale;u.normalScale.set(d,d)}if(z.occlusionTexture!==void 0&&t!==u3&&(b.push(v.assignTexture(u,"aoMap",z.occlusionTexture)),z.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=z.occlusionTexture.strength)),z.emissiveFactor!==void 0&&t!==u3){let d=z.emissiveFactor;u.emissive=new bf().setRGB(d[0],d[1],d[2],I3)}return z.emissiveTexture!==void 0&&t!==u3&&b.push(v.assignTexture(u,"emissiveMap",z.emissiveTexture,X3)),Promise.all(b).then(function(){let d=new t(u);return z.name&&(d.name=z.name),Z7(d,z),v.associations.set(d,{materials:f}),z.extensions&&c9(P,d,z),d})}createUniqueName(f){let v=b3.sanitizeNodeName(f||"");return v in this.nodeNamesUsed?v+"_"+ ++this.nodeNamesUsed[v]:(this.nodeNamesUsed[v]=0,v)}loadGeometries(f){let v=this,e=this.extensions,P=this.primitiveCache;function z(u){return e[$f.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,v).then(function(r){return yd(r,u,v)})}let t=[];for(let u=0,r=f.length;u<r;u++){let b=f[u],X=Y1(b),d=P[X];if(d)t.push(d.promise);else{let H;b.extensions&&b.extensions[$f.KHR_DRACO_MESH_COMPRESSION]?H=z(b):H=yd(new kf,b,v),P[X]={primitive:b,promise:H},t.push(H)}}return Promise.all(t)}loadMesh(f){let v=this,e=this.json,P=this.extensions,z=e.meshes[f],t=z.primitives,u=[];for(let r=0,b=t.length;r<b;r++){let X=t[r].material===void 0?G1(this.cache):this.getDependency("material",t[r].material);u.push(X)}return u.push(v.loadGeometries(t)),Promise.all(u).then(function(r){let b=r.slice(0,r.length-1),X=r[r.length-1],d=[];for(let x=0,c=X.length;x<c;x++){let a=X[x],j=t[x],s,i=b[x];if(j.mode===Iv.TRIANGLES||j.mode===Iv.TRIANGLE_STRIP||j.mode===Iv.TRIANGLE_FAN||j.mode===void 0)s=z.isSkinnedMesh===!0?new Ke(a,i):new _f(a,i),s.isSkinnedMesh===!0&&s.normalizeSkinWeights(),j.mode===Iv.TRIANGLE_STRIP?s.geometry=Jr(s.geometry,Z8):j.mode===Iv.TRIANGLE_FAN&&(s.geometry=Jr(s.geometry,r9));else if(j.mode===Iv.LINES)s=new bv(a,i);else if(j.mode===Iv.LINE_STRIP)s=new wv(a,i);else if(j.mode===Iv.LINE_LOOP)s=new ge(a,i);else if(j.mode===Iv.POINTS)s=new Ee(a,i);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+j.mode);Object.keys(s.geometry.morphAttributes).length>0&&J1(s,z),s.name=v.createUniqueName(z.name||"mesh_"+f),Z7(s,z),j.extensions&&c9(P,s,j),v.assignFinalMaterial(s),d.push(s)}for(let x=0,c=d.length;x<c;x++)v.associations.set(d[x],{meshes:f,primitives:x});if(d.length===1)return z.extensions&&c9(P,d[0],z),d[0];let H=new fv;z.extensions&&c9(P,H,z),v.associations.set(H,{meshes:f});for(let x=0,c=d.length;x<c;x++)H.add(d[x]);return H})}loadCamera(f){let v,e=this.json.cameras[f],P=e[e.type];if(!P){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return e.type==="perspective"?v=new j3(i3.radToDeg(P.yfov),P.aspectRatio||1,P.znear||1,P.zfar||2e6):e.type==="orthographic"&&(v=new n7(-P.xmag,P.xmag,P.ymag,-P.ymag,P.znear,P.zfar)),e.name&&(v.name=this.createUniqueName(e.name)),Z7(v,e),Promise.resolve(v)}loadSkin(f){let v=this.json.skins[f],e=[];for(let P=0,z=v.joints.length;P<z;P++)e.push(this._loadNodeShallow(v.joints[P]));return v.inverseBindMatrices!==void 0?e.push(this.getDependency("accessor",v.inverseBindMatrices)):e.push(null),Promise.all(e).then(function(P){let z=P.pop(),t=P,u=[],r=[];for(let b=0,X=t.length;b<X;b++){let d=t[b];if(d){u.push(d);let H=new of;z!==null&&H.fromArray(z.array,b*16),r.push(H)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',v.joints[b])}return new Ue(u,r)})}loadAnimation(f){let v=this.json,e=this,P=v.animations[f],z=P.name?P.name:"animation_"+f,t=[],u=[],r=[],b=[],X=[];for(let d=0,H=P.channels.length;d<H;d++){let x=P.channels[d],c=P.samplers[x.sampler],a=x.target,j=a.node,s=P.parameters!==void 0?P.parameters[c.input]:c.input,i=P.parameters!==void 0?P.parameters[c.output]:c.output;a.node!==void 0&&(t.push(this.getDependency("node",j)),u.push(this.getDependency("accessor",s)),r.push(this.getDependency("accessor",i)),b.push(c),X.push(a))}return Promise.all([Promise.all(t),Promise.all(u),Promise.all(r),Promise.all(b),Promise.all(X)]).then(function(d){let H=d[0],x=d[1],c=d[2],a=d[3],j=d[4],s=[];for(let N=0,m=H.length;N<m;N++){let p=H[N],l=x[N],W=c[N],w=a[N],T=j[N];if(p===void 0)continue;p.updateMatrix&&p.updateMatrix();let y=e._createAnimationTracks(p,l,W,w,T);if(y)for(let V=0;V<y.length;V++)s.push(y[V])}let i=new j7(z,void 0,s);return Z7(i,P),i})}createNodeMesh(f){let v=this.json,e=this,P=v.nodes[f];return P.mesh===void 0?null:e.getDependency("mesh",P.mesh).then(function(z){let t=e._getNodeRef(e.meshCache,P.mesh,z);return P.weights!==void 0&&t.traverse(function(u){if(u.isMesh)for(let r=0,b=P.weights.length;r<b;r++)u.morphTargetInfluences[r]=P.weights[r]}),t})}loadNode(f){let v=this.json,e=this,P=v.nodes[f],z=e._loadNodeShallow(f),t=[],u=P.children||[];for(let b=0,X=u.length;b<X;b++)t.push(e.getDependency("node",u[b]));let r=P.skin===void 0?Promise.resolve(null):e.getDependency("skin",P.skin);return Promise.all([z,Promise.all(t),r]).then(function(b){let X=b[0],d=b[1],H=b[2];H!==null&&X.traverse(function(x){x.isSkinnedMesh&&x.bind(H,K1)});for(let x=0,c=d.length;x<c;x++)X.add(d[x]);return X})}_loadNodeShallow(f){let v=this.json,e=this.extensions,P=this;if(this.nodeCache[f]!==void 0)return this.nodeCache[f];let z=v.nodes[f],t=z.name?P.createUniqueName(z.name):"",u=[],r=P._invokeOne(function(b){return b.createNodeMesh&&b.createNodeMesh(f)});return r&&u.push(r),z.camera!==void 0&&u.push(P.getDependency("camera",z.camera).then(function(b){return P._getNodeRef(P.cameraCache,z.camera,b)})),P._invokeAll(function(b){return b.createNodeAttachment&&b.createNodeAttachment(f)}).forEach(function(b){u.push(b)}),this.nodeCache[f]=Promise.all(u).then(function(b){let X;if(z.isBone===!0?X=new ze:b.length>1?X=new fv:b.length===1?X=b[0]:X=new P3,X!==b[0])for(let d=0,H=b.length;d<H;d++)X.add(b[d]);if(z.name&&(X.userData.name=z.name,X.name=t),Z7(X,z),z.extensions&&c9(e,X,z),z.matrix!==void 0){let d=new of;d.fromArray(z.matrix),X.applyMatrix4(d)}else z.translation!==void 0&&X.position.fromArray(z.translation),z.rotation!==void 0&&X.quaternion.fromArray(z.rotation),z.scale!==void 0&&X.scale.fromArray(z.scale);if(!P.associations.has(X))P.associations.set(X,{});else if(z.mesh!==void 0&&P.meshCache.refs[z.mesh]>1){let d=P.associations.get(X);P.associations.set(X,{...d})}return P.associations.get(X).nodes=f,X}),this.nodeCache[f]}loadScene(f){let v=this.extensions,e=this.json.scenes[f],P=this,z=new fv;e.name&&(z.name=P.createUniqueName(e.name)),Z7(z,e),e.extensions&&c9(v,z,e);let t=e.nodes||[],u=[];for(let r=0,b=t.length;r<b;r++)u.push(P.getDependency("node",t[r]));return Promise.all(u).then(function(r){for(let X=0,d=r.length;X<d;X++)z.add(r[X]);let b=X=>{let d=new Map;for(let[H,x]of P.associations)(H instanceof L3||H instanceof T3)&&d.set(H,x);return X.traverse(H=>{let x=P.associations.get(H);x!=null&&d.set(H,x)}),d};return P.associations=b(z),z})}_createAnimationTracks(f,v,e,P,z){let t=[],u=f.name?f.name:f.uuid,r=[];de[z.path]===de.weights?f.traverse(function(H){H.morphTargetInfluences&&r.push(H.name?H.name:H.uuid)}):r.push(u);let b;switch(de[z.path]){case de.weights:b=f7;break;case de.rotation:b=v7;break;case de.translation:case de.scale:b=e7;break;default:switch(e.itemSize){case 1:b=f7;break;case 2:case 3:default:b=e7;break}break}let X=P.interpolation!==void 0?R1[P.interpolation]:ee,d=this._getArrayFromAccessor(e);for(let H=0,x=r.length;H<x;H++){let c=new b(r[H]+"."+de[z.path],v.array,d,X);P.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(c),t.push(c)}return t}_getArrayFromAccessor(f){let v=f.array;if(f.normalized){let e=s4(v.constructor),P=new Float32Array(v.length);for(let z=0,t=v.length;z<t;z++)P[z]=v[z]*e;v=P}return v}_createCubicSplineTrackInterpolant(f){f.createInterpolant=function(e){let P=this instanceof v7?H4:st;return new P(this.times,this.values,this.getValueSize()/3,e)},f.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function U1(n,f,v){let e=f.attributes,P=new D3;if(e.POSITION!==void 0){let u=v.json.accessors[e.POSITION],r=u.min,b=u.max;if(r!==void 0&&b!==void 0){if(P.set(new L(r[0],r[1],r[2]),new L(b[0],b[1],b[2])),u.normalized){let X=s4(l8[u.componentType]);P.min.multiplyScalar(X),P.max.multiplyScalar(X)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let z=f.targets;if(z!==void 0){let u=new L,r=new L;for(let b=0,X=z.length;b<X;b++){let d=z[b];if(d.POSITION!==void 0){let H=v.json.accessors[d.POSITION],x=H.min,c=H.max;if(x!==void 0&&c!==void 0){if(r.setX(Math.max(Math.abs(x[0]),Math.abs(c[0]))),r.setY(Math.max(Math.abs(x[1]),Math.abs(c[1]))),r.setZ(Math.max(Math.abs(x[2]),Math.abs(c[2]))),H.normalized){let a=s4(l8[H.componentType]);r.multiplyScalar(a)}u.max(r)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}P.expandByVector(u)}n.boundingBox=P;let t=new w3;P.getCenter(t.center),t.radius=P.min.distanceTo(P.max)/2,n.boundingSphere=t}function yd(n,f,v){let e=f.attributes,P=[];function z(t,u){return v.getDependency("accessor",t).then(function(r){n.setAttribute(u,r)})}for(let t in e){let u=x4[t]||t.toLowerCase();u in n.attributes||P.push(z(e[t],u))}if(f.indices!==void 0&&!n.index){let t=v.getDependency("accessor",f.indices).then(function(u){n.setIndex(u)});P.push(t)}return Qf.workingColorSpace!==I3&&"COLOR_0"in e&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qf.workingColorSpace}" not supported.`),Z7(n,f),U1(n,f,v),Promise.all(P).then(function(){return f.targets!==void 0?k1(n,f.targets,v):n})}var He={glbGzip:embeddedAssets["horizon-glbGzip"],atlas:embeddedAssets["horizon-atlas"],referenceFront:embeddedAssets["horizon-referenceFront"],studioFront:embeddedAssets["horizon-studioFront"],targetFront:embeddedAssets["horizon-targetFront"],referenceRear:embeddedAssets["horizon-referenceRear"],scopedCloth:embeddedAssets["horizon-scopedCloth"]};var g1=document.getElementById("scene"),Cf=new Kn({alpha:!0,antialias:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance"});Cf.info.autoReset=!1;Cf.setPixelRatio(Math.min(devicePixelRatio,1.5));Cf.setSize(innerWidth,innerHeight);Cf.outputColorSpace=X3;Cf.toneMapping=nn;Cf.toneMappingExposure=.92;Cf.shadowMap.enabled=!1;Cf.shadowMap.type=QP;Cf.domElement.setAttribute("aria-label","3D model of XGIMI Horizon projector");Cf.domElement.tabIndex=0;g1.appendChild(Cf.domElement);var Tv=new kv;Tv.background=null;Tv.fog=new Se("#aca7a0",26,72);function Od(n){let f=document.createElement("canvas");f.width=256,f.height=192;let v=f.getContext("2d"),e=v.createImageData(f.width,f.height),P=[0,.195,.586,.879,1],z=n?[[[126,120,112],[175,165,155],[147,140,132]],[[144,134,126],[197,188,178],[180,171,162]],[[183,173,165],[206,196,185],[202,192,184]],[[192,181,174],[166,155,147],[193,183,174]],[[164,153,147],[143,133,129],[168,157,149]]]:[[[187,180,177],[173,168,163],[161,155,151]],[[199,191,188],[199,194,190],[174,167,162]],[[215,210,205],[220,213,207],[200,194,187]],[[198,191,187],[170,163,157],[155,150,146]],[[189,184,182],[150,141,139],[176,169,167]]];for(let u=0;u<f.height;u++){let r=u/(f.height-1),b=0;for(;b<3&&r>P[b+1];)b++;let X=i3.smoothstep(r,P[b],P[b+1]);for(let d=0;d<f.width;d++){let H=d/(f.width-1),x=H<.5?0:1,c=i3.smoothstep(H,x*.5,(x+1)*.5);for(let a=0;a<3;a++){let j=i3.lerp(z[b][x][a],z[b][x+1][a],c),s=i3.lerp(z[b+1][x][a],z[b+1][x+1][a],c),i=n?30*Math.exp(-((H-.8)**2/.043+(r-.22)**2/.027)):0;e.data[(u*f.width+d)*4+a]=i3.lerp(j,s,X)+i}e.data[(u*f.width+d)*4+3]=255}}v.putImageData(e,0,0);let t=new Yv(f);return t.colorSpace=X3,t}var at={front:{value:Od(!1)},rear:{value:Od(!0)},viewMix:{value:1},resolution:{value:new g(innerWidth,innerHeight)}},wd=new u3({side:g3,fog:!1,toneMapped:!1});wd.onBeforeCompile=n=>{Object.assign(n.uniforms,at),n.fragmentShader=`uniform sampler2D front;uniform sampler2D rear;uniform float viewMix;uniform vec2 resolution;
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
vec2 studioUV=gl_FragCoord.xy/resolution;diffuseColor.rgb=mix(texture2D(rear,studioUV).rgb,texture2D(front,studioUV).rgb,viewMix);`)};var E1=new _f(new ue(95,64,32),wd);E1.visible=false;Tv.add(E1);var E3=new j3(19,innerWidth/innerHeight,.1,400),S3=new Ht(E3,Cf.domElement);S3.enableDamping=!0;S3.dampingFactor=.065;S3.enablePan=!1;S3.minDistance=5;S3.maxDistance=65;S3.minPolarAngle=.12;S3.maxPolarAngle=Math.PI*.56;S3.autoRotateSpeed=.55;var Vd=new J7(Cf),p4=new kv;p4.background=new bf("#202021");function it(n,f,v,e,P,z){let t=new _f(new Xv(n,f),new u3({color:new bf(e).multiplyScalar(P),side:G3}));t.position.set(...v),z&&t.rotation.set(...z),p4.add(t)}it(12,10,[-7,5,4],"#fffaf4",2.6,[0,Math.PI/2,0]);it(4,8,[8,3,1],"#f2f3f6",1.4,[0,-Math.PI/2,0]);it(10,7,[0,8,0],"#fffaf4",2,[Math.PI/2,0,0]);it(5,2,[-1,1,9],"#e4cbc5",1,[0,Math.PI,0]);Tv.environment=Vd.fromScene(p4,.035).texture;Vd.dispose();Tv.environmentIntensity=1;var B1=new $e("#f1ede4","#393832",.85);Tv.add(B1);function C1(n,f,v,e){let P=new z7(e,f);return P.position.set(...n),P.target.position.set(0,1.4,0),Tv.add(P,P.target),P.castShadow=!0,P.shadow.mapSize.set(2048,2048),P.shadow.camera.left=-8,P.shadow.camera.right=8,P.shadow.camera.top=8,P.shadow.camera.bottom=-8,P.shadow.normalBias=.025,P.shadow.bias=-3e-4,P.shadow.radius=v,P}C1([-5,8,7],2.4,4,"#fff6e9");var Dd=new z7("#eef0f7",1);Dd.position.set(6,5,1);Tv.add(Dd);var qd=new z7("#fff9ef",1.1);qd.position.set(1,7,-6);Tv.add(qd);function Q1(){let n=document.createElement("canvas");n.width=n.height=512;let f=n.getContext("2d");return f.filter="blur(24px)",f.fillStyle="rgba(0,0,0,.92)",f.beginPath(),f.roundRect(66,74,380,360,54),f.fill(),f.filter="none",new Yv(n)}var O4=new _f(new Xv(9.5,5),new u3({map:Q1(),transparent:!0,depthWrite:!1,opacity:.46,fog:!1,toneMapped:!1}));O4.rotation.x=-Math.PI/2;O4.position.y=.003;Tv.add(O4);var qv=new fv;qv.name="Horizon projector";Tv.add(qv);var l4="hero",Dv=null,od=!1,A1=await new Vv().loadAsync(He.atlas);function se(n,f,v,e=!1){let P=A1.image,z=document.createElement("canvas");z.width=z.height=512,z.getContext("2d").drawImage(P,n*P.width/2+8,f*P.height/2+8,P.width/2-16,P.height/2-16,0,0,512,512);let u=new Yv(z);return u.colorSpace=e?Uv:X3,u.wrapS=u.wrapT=Gv,u.repeat.set(v,v),u.anisotropy=Cf.capabilities.getMaxAnisotropy(),u}var En=se(0,0,4,!0),j4=se(1,0,4,!0),_1=se(0,1,2,!0),$1=se(1,1,5,!0),fj=new Uint8Array(await(await fetch(He.glbGzip)).arrayBuffer()),vj=await new Response(new Blob([fj]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer(),xv=await new Promise((n,f)=>new xt().parse(vj,"",n,f));qv.add(xv.scene);function ej(n){let f=n.attributes.position,v=n.index?.array,e=[],P=new Map;for(let u=0;u<f.count;u++){let r=Math.round(f.getX(u)*1e5)+","+Math.round(f.getY(u)*1e5)+","+Math.round(f.getZ(u)*1e5),b=P.get(r);b||(b=[0,0,0],P.set(r,b)),e[u]=b}let z=v?v.length:f.count;for(let u=0;u<z;u+=3){let r=v?v[u]:u,b=v?v[u+1]:u+1,X=v?v[u+2]:u+2,d=f.getX(b)-f.getX(r),H=f.getY(b)-f.getY(r),x=f.getZ(b)-f.getZ(r),c=f.getX(X)-f.getX(r),a=f.getY(X)-f.getY(r),j=f.getZ(X)-f.getZ(r),s=H*j-x*a,i=x*c-d*j,N=d*a-H*c;for(let m of[r,b,X]){let p=e[m];p[0]+=s,p[1]+=i,p[2]+=N}}let t=new Float32Array(f.count*3);for(let u=0;u<f.count;u++){let r=e[u],b=Math.hypot(...r)||1;t[u*3]=r[0]/b,t[u*3+1]=r[1]/b,t[u*3+2]=r[2]/b}n.setAttribute("normal",new Af(t,3))}xv.scene.traverse(n=>{if(!n.isMesh)return;if((n.name.startsWith("Rear_fabric")||n.name.startsWith("Top_control"))&&(n.userData.scopedUV=n.geometry.attributes.uv.clone()),n.castShadow=!0,n.receiveShadow=!0,Array.isArray(n.material)){n.material=n.material.map((v,e)=>e===0?new ev({color:"#65615b",metalness:.35,roughness:.45,bumpMap:j4,bumpScale:.004,envMapIntensity:.35,fog:!1}):new u3({color:"#080807",fog:!1,toneMapped:!1}));return}let f=n.material;if((n.name.startsWith("Perforated")||n.parent?.name.startsWith("Perforated"))&&(f.name==="recess_black"||f.name==="scoped_recess_black")){n.userData.apertureWall=!0,n.material=new u3({color:"#080807",fog:!1,toneMapped:!1});return}if(f.envMapIntensity=.5,f.fog=!1,n.name.startsWith("Diagonal_intake")||n.name.startsWith("Diagonal intake")){n.material=new u3({color:"#242423",fog:!1,toneMapped:!1});return}if(n.name.startsWith("Foot_collar")){n.material=new ev({color:"#242522",metalness:.72,roughness:.35,envMapIntensity:.25,fog:!1});return}if(n.name.toLowerCase().includes("foot")){n.material=new ev({color:"#101110",metalness:0,roughness:.88,envMapIntensity:.1,fog:!1});return}if(n.name.startsWith("Speaker_inner")||n.name.startsWith("Speaker inner")){n.material=new u3({color:"#080807",fog:!1,toneMapped:!1});return}if(n.name.startsWith("Top_control")||n.name.startsWith("Top control")){n.material=new ev({color:"#272624",metalness:.12,roughness:.68,envMapIntensity:.18,bumpMap:En,bumpScale:.015,fog:!1});return}if(f.name==="powder_graphite"&&(f.bumpMap=En,f.bumpScale=.026,f.roughness=.43,f.metalness=.38),(n.name.startsWith("Rear_exhaust")||n.name.startsWith("Rear exhaust"))&&(n.material=f.clone(),n.material.color.set("#242522"),n.material.metalness=.35,n.material.roughness=.5),(n.name.startsWith("Perforated")||n.parent?.name.startsWith("Perforated"))&&f.name==="satin_titanium"){n.material=new ev({color:"#65615b",metalness:.35,roughness:.45,bumpMap:j4,bumpScale:.004,envMapIntensity:.35,fog:!1});return}f.name==="satin_titanium"&&(f.color.set("#8a8782"),f.bumpMap=j4,f.bumpScale=.006,f.roughness=.45,f.metalness=.65,f.envMapIntensity=.8),(n.name.startsWith("Cast_rounded")||n.name.startsWith("Cast rounded"))&&(n.material=f.clone(),n.material.bumpMap=null,n.material.normalMap=null),f.name==="polished_titanium"&&(f.roughness=.22,f.metalness=.95,f.envMapIntensity=.85),f.name==="handle_leather"&&(f.bumpMap=_1,f.bumpScale=.018,f.roughness=.78,f.metalness=0,f.map=se(0,1,2),f.color.set("#514d49")),f.name==="acoustic_fabric"&&(f.map=se(1,1,5),f.color.set("#e0dfda"),f.bumpMap=$1,f.bumpScale=.038)});var mt=document.createElement("canvas");mt.width=mt.height=128;var L4=mt.getContext("2d"),Zt=L4.createRadialGradient(64,64,23,64,64,64);Zt.addColorStop(0,"rgba(0,0,0,.9)");Zt.addColorStop(.65,"rgba(0,0,0,.4)");Zt.addColorStop(1,"rgba(0,0,0,0)");L4.fillStyle=Zt;L4.fillRect(0,0,128,128);var Pj=new Yv(mt);xv.scene.traverse(n=>{if(!n.isMesh||!n.name.startsWith("Rubber_foot"))return;n.updateWorldMatrix(!0,!1),n.geometry.computeBoundingBox();let f=n.geometry.boundingBox.getCenter(new L);n.localToWorld(f);let v=new _f(new Xv(1.25,1.15),new u3({map:Pj,transparent:!0,opacity:.9,depthWrite:!1,fog:!1}));v.rotation.x=-Math.PI/2,v.position.set(f.x,.009,f.z),Tv.add(v)});function Md(n){let f=i3.clamp((-0-n+.3)/2.2,0,1);return .2+(3.504*.9-.2)*(1-.16*f*f*(3-2*f))}function W4(n,f,v,e,P,z=!1){let t=document.createElement("canvas");t.width=2048,t.height=Math.round(2048*v/f);let u=t.getContext("2d");u.scale(t.width/f,t.height/v),e(u);let r=new Yv(t);r.colorSpace=X3,r.anisotropy=8;let b=new _f(new Xv(f,v),new u3({map:r,transparent:!0,depthWrite:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-1}));return b.name=n,b.position.set(P[0]*1.15,P[1]*.9,P[2]),b.scale.set(1.15,.9,1),z&&(b.rotation.y=Math.PI),qv.add(b),b}function T7(n,f,v,e,P,z=.025,t="#a8a69e",u=300){n.fillStyle=t,n.font=`${u} ${P}px Arial`;for(let r of f)n.fillText(r,v,e),v+=n.measureText(r).width+z}W4("Front etched markings",5.38,2.94,n=>{T7(n,"XGIMI",.35,.58,.148,.001,"#bdbcb4",600),T7(n,"HORIZON",.35,.85,.06,.027),T7(n,"PORTABLE",.35,.965,.06,.027),T7(n,"PROJECTOR",.35,1.08,.06,.027),n.fillStyle="#aba99f",n.fillRect(.35,1.24,.18,.006),T7(n,"BIGGER",.35,2.36,.058,.03),T7(n,"STORIES",.35,2.48,.058,.03),T7(n,"ANYWHERE",.35,2.6,.058,.03),T7(n,"4K",4.48,1.88,.102,.022),T7(n,"\u2013",4.83,1.88,.063,.02),T7(n,"ULTRA HD",4.48,2.01,.059,.008)},[0,1.86,2.052]);var nj=[["AC IN",-2.02],["USB-A",-1.39],["HDMI 1",-.77],["HDMI 2",-.15],["USB-C",.45],["LAN",1.03],["AUDIO OUT",1.6]];W4("Rear engraved IO legends",4.87,.82,n=>{n.textAlign="center",n.fillStyle="#bab8b0",n.font=".057px Arial";for(let[f,v]of nj)n.fillText(f,v+2.435,.64);n.font=".043px Arial",n.fillText("5V \u2393 1.5A",-1.39+2.435,.72),n.fillText("(eARC)",-.77+2.435,.72),n.fillText("(DP)",.45+2.435,.72),n.lineWidth=.006,n.strokeStyle="#aaa99f",n.strokeRect(4.57,.16,.052,.06),n.beginPath(),n.arc(4.596,.157,.018,Math.PI,0),n.stroke()},[0,2.66,-2.046],!0);var Bn=W4("Top logo",1.6,.4,n=>{n.fillStyle="#a2a096",n.textAlign="center",n.font="600 .13px Arial",n.fillText("XGIMI",.8,.21)},[0,3.52,-.95]);Bn.rotation.x=-Math.PI/2;Bn.position.y=Md(-.95)+.015;Bn.position.z=-.612;var Cn=new _f(new Ce(.055,32),new ev({color:"#101110",roughness:.4,metalness:.3}));Cn.rotation.x=-Math.PI/2;Cn.position.set(0,Md(-.58)+.015,-.286);qv.add(Cn);var Qn=await new Vv().loadAsync(He.referenceFront);Qn.colorSpace=X3;Qn.anisotropy=8;var je=await new Vv().loadAsync(He.targetFront);je.colorSpace=X3;je.anisotropy=Cf.capabilities.getMaxAnisotropy();var Y7={minX:-3.1165,maxX:3.1165,minY:.36948974,maxY:3.4183806},Nt=new g(0,(Y7.minY+Y7.maxY)/2),ce=new j3(19,1.5,.1,400);ce.position.set(.0378,2.1214,18.58);ce.lookAt(.0378,2.1214,0);ce.updateMatrixWorld();function ld(n,f=!1){n.updateWorldMatrix(!0,!1);let v=n.geometry.attributes.position,e=[],P=new L;for(let z=0;z<v.count;z++)P.fromBufferAttribute(v,z),n.localToWorld(P),f?(P.project(ce),e.push((P.x+1)/2,(P.y+1)/2)):e.push((183.5+(P.x-Y7.minX)/(Y7.maxX-Y7.minX)*1155)/1536,1-(836.5-(P.y-Y7.minY)/(Y7.maxY-Y7.minY)*564)/1024);n.geometry.setAttribute("uv",new sf(e,2))}function zj(n){let f=n.includes("glass")||n.includes("coated"),v=/pupil|focal|meniscus/.test(n),e=new F3({map:je,color:16777215,metalness:f?.55:.88,roughness:n.includes("Fine")?.36:f?.18:.28,clearcoat:f?1:.32,clearcoatRoughness:.045,iridescence:f?.65:.1,iridescenceIOR:1.42,iridescenceThicknessRange:[220,390],envMapIntensity:f?.52:.24,side:G3,fog:!1,toneMapped:!1});return e.onBeforeCompile=P=>{P.fragmentShader=P.fragmentShader.replace("#include <opaque_fragment>",`outgoingLight = diffuseColor.rgb * ${v?.96:f?.62:.86} + reflectedLight.directSpecular * .08 + reflectedLight.indirectSpecular * ${v?.1:f?.65:.25} + clearcoatSpecularIndirect * .06;
#include <opaque_fragment>`)},e}function tj(n){n.geometry.computeBoundingBox();let f=n.geometry.boundingBox,v=(f.min.z+f.max.z)/2,e=i3.clamp((2.105-v)/.903,0,1);n.geometry.translate(.065*e,-.038*e,0)}var h4=[];xv.scene.traverse(n=>{if(!n.isMesh)return;let f=n.name.replaceAll("_"," ");f.startsWith("Front black inset")&&(ld(n),n.material=new u3({map:je,side:G3,fog:!1,toneMapped:!1})),/^(Lens |Inner optical|Fine machined|Optical retention)/.test(f)&&(f.includes("polished outer lip")||tj(n),ld(n,!0),n.material=zj(f),(f.includes("focal ring")||f.includes("pupil ring"))&&(n.material.roughness=.43),f.includes("retention focal ring")&&(n.visible=!1),h4.push(n))});function Fd(n,f,v,e,P,z=!1){let t=[],u=[],r=[],b=[],H=[];for(let a=0;a<=36;a++){let j=f*a/36;H.push([j,e*(1-(j/f)**2),"front"])}if(z){H.push([f,0,"edge"],[f,-.03,"edge"],[f,-.03,"back"]);for(let a=35;a>=0;a--){let j=f*a/36;H.push([j,-.03-.025*(1-(j/f)**2),"back"])}}for(let a=0;a<H.length;a++){let[j,s,i]=H[a];for(let N=0;N<=192;N++){let m=N/192*Math.PI*2,p=j*Math.cos(m),l=j*Math.sin(m);t.push(p,l,s),u.push(N/192,a/(H.length-1));let W=i==="edge"?new L(Math.cos(m),Math.sin(m),0):i==="back"?new L(.05*p/f**2,.05*l/f**2,-1):new L(2*e*p/f**2,2*e*l/f**2,1);W.normalize(),r.push(W.x,W.y,W.z)}}for(let a=0;a<H.length-1;a++)for(let j=0;j<192;j++){let s=a*193+j;b.push(s,s+192+1,s+1,s+1,s+192+1,s+192+2)}let x=new kf;x.setAttribute("position",new sf(t,3)),x.setAttribute("uv",new sf(u,2)),x.setIndex(b),x.setAttribute("normal",new sf(r,3));let c=new _f(x,P);return c.name=n,c.position.set(Nt.x,Nt.y,v),c.scale.set(.965,1.0015,1),c.userData.closedOpticalVolume=z,qv.add(c),h4.push(c),c}var w4=new kv;w4.background=new bf("#010204");function V4(n,f,v,e,P){let z=document.createElement("canvas");z.width=128,z.height=256;let t=z.getContext("2d");t.scale(.64,1.28);let u=t.createRadialGradient(100,100,0,100,100,100);u.addColorStop(0,"#ffffff"),u.addColorStop(.42,"#dddddd"),u.addColorStop(.8,"#303030"),u.addColorStop(1,"#000000"),t.fillStyle=u,t.fillRect(0,0,200,200);let r=new Yv(z);r.colorSpace=X3;let b=new _f(new Xv(n,f),new u3({map:r,color:new bf(e).multiplyScalar(P),side:G3}));return b.position.set(...v),b.lookAt(0,0,0),w4.add(b),b}V4(3.8,6,[-4.5,3.5,6],"#e3aca6",2);V4(1.8,4,[-2.5,2.4,7],"#cbb3df",1.2);V4(2,3,[4,-3,7],"#709ca8",.65);var Rd=new J7(Cf),uj=Rd.fromScene(w4,.001).texture;Rd.dispose();var rj=new F3({color:"#eeeeff",metalness:0,roughness:.009,transmission:1,thickness:.02,ior:1.52,attenuationColor:"#d9d9ed",attenuationDistance:1.8,clearcoat:.1,clearcoatRoughness:.025,iridescence:.12,iridescenceIOR:1.38,iridescenceThicknessRange:[170,310],envMap:uj,envMapIntensity:.025,side:vv,fog:!1,toneMapped:!1}),Jj=Fd("Closed convex dielectric front lens",.398,1.478,.011,rj,!0),ct=.48,jt=.116365,W8=new L(.065,Nt.y-.038,1.28);function bj(){let v=new Float32Array(4718592),e=document.createElement("canvas");e.width=1536,e.height=1024;let P=e.getContext("2d");P.drawImage(je.image,0,0);let z=P.getImageData(0,0,1536,1024).data,t=ce.position.clone().sub(W8).normalize(),u=new L,r=new L,b=new L,X=c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4;for(let c=0;c<768;c++){let a=((c+.5)/768-.5)*Math.PI,j=Math.sin(a),s=Math.cos(a);for(let i=0;i<1536;i++){let N=((i+.5)/1536-.5)*Math.PI*2;u.set(s*Math.cos(N),j,s*Math.sin(N)),r.copy(u).add(t).normalize();let m=r.x/r.z*ct**2/(2*jt),p=r.y/r.z*ct**2/(2*jt),l=Math.hypot(m,p),W=(c*1536+i)*4;if(v[W+3]=1,r.z<=.001||!Number.isFinite(l))continue;let w=Math.min(l,.275),T=Math.exp(-Math.max(0,l-.275)/.085),y=l>.275?.275/l:1;b.set(W8.x+m*y*.965,W8.y+p*y*1.0015,W8.z+jt*(1-(w/ct)**2)).project(ce);let V=i3.clamp(Math.round((b.x+1)*768),0,1535),M=i3.clamp(Math.round((1-b.y)*512),0,1023),q=(M*1536+V)*4,k=Math.max(0,r.dot(t)),J=((1.52-1)/(1.52+1))**2,S=J+(1-J)*(1-k)**5,B=.04+.96*(1-k)**5,Y=S*(1-.7*B)+.7*B,nf=V>=770&&V<=775&&M>=556&&M<=561&&Math.min(z[q],z[q+1],z[q+2])>180?6.5:1;for(let df=0;df<3;df++)v[W+df]=X(z[q+df]/255)*T*nf/Y}}let d=new rv(v,1536,768,U3,B3);d.mapping=be,d.needsUpdate=!0;let H=new J7(Cf),x=H.fromEquirectangular(d).texture;return H.dispose(),d.dispose(),x}var Xj=bj(),dj=new F3({color:"#000000",metalness:0,roughness:.009,ior:1.52,clearcoat:.7,clearcoatRoughness:.009,envMap:Xj,envMapIntensity:1,fog:!1,side:vv,toneMapped:!1}),Hj=Fd("Continuous coated optical meniscus",ct,W8.z,jt,dj,!0);Hj.position.copy(W8);xv.scene.traverse(n=>{/^(Inner_optical_(pupil|rear_meniscus|focal|cavity)|Optical_retention_(pupil|focal))/.test(n.name)&&(n.visible=!1)});var Gd=await new Vv().loadAsync(He.studioFront);Gd.colorSpace=X3;at.front.value=Gd;var Ld=qv.getObjectByName("Front etched markings");Ld&&(Ld.visible=!1);xv.scene.traverse(n=>{n.name.startsWith("Autofocus")&&(n.visible=!1)});var ae=await new Vv().loadAsync(He.referenceRear);ae.colorSpace=X3;ae.anisotropy=Cf.capabilities.getMaxAnisotropy();function a4(n,f){n.updateWorldMatrix(!0,!1);let v=n.geometry.attributes.position,e=n.geometry.attributes.uv,P=[],z=new L;for(let t=0;t<v.count;t++){z.fromBufferAttribute(v,t),n.localToWorld(z);let u,r;if(f==="io"){let b=(2.7945-z.x/1.08)/5.589,X=(z.y-1.81125)/.83344;u=194+b*1146,r=492-X*149}else if(f==="vent"){let b=(2.789-z.x/1.08)/5.578,X=(z.y-.48228)/1.25362;u=208+b*1122,r=733-X*223}else{let b=(e.getX(t)-.5)*5.7,X=(1-e.getY(t))*3.3,d=(.25-b)/.5,H=(X-.415)/3.05;u=(z.x>0?47:1363)+d*124,r=762-H*443}P.push(u/1536,1-r/1024)}n.geometry.setAttribute("uv",new sf(P,2)),n.material=new u3({map:ae,side:G3,toneMapped:!1,fog:!1})}xv.scene.traverse(n=>{if(!n.isMesh)return;let f=n.name.replaceAll("_"," ");if((f.startsWith("Rear IO")||["AC IN","USB-A","HDMI 1","HDMI 2","USB-C","LAN","AUDIO OUT","LOCK"].some(v=>f.startsWith(v)))&&a4(n,"io"),(f.startsWith("Rear exhaust")||f.startsWith("Rear cross"))&&a4(n,"vent"),f.startsWith("Rear fabric")&&a4(n,"shell"),f.startsWith("Top control")){n.updateWorldMatrix(!0,!1);let v=n.geometry.attributes.position,e=[],P=new L;for(let z=0;z<v.count;z++){P.fromBufferAttribute(v,z),n.localToWorld(P);let t=i3.clamp((1.397-P.z)/2.45,0,1),u=1+.2*t,r=(2.875-P.x/(u*(1+.12*t)))/5.75;e.push(i3.lerp(300+r*960,108+r*1322,t)/1536,1-i3.lerp(236,294,t**1.7)/1024)}n.geometry.setAttribute("uv",new sf(e,2)),n.material=new u3({map:ae,fog:!1,toneMapped:!1})}});var Wd=qv.getObjectByName("Rear engraved IO legends");Wd&&(Wd.visible=!1);Bn.visible=!1;Cn.visible=!1;var Tt=new j3(18.7,1.5,.1,400);Tt.position.set(10.36,.9,14.29);Tt.lookAt(.16,2.06,-.11);Tt.updateMatrixWorld();var yt=new j3(20.1,1.5,.1,400);yt.position.set(0,3.15,-17.2);yt.lookAt(0,1.58,0);yt.updateMatrixWorld();var pt=document.createElement("canvas");pt.width=1536;pt.height=1024;var kd=pt.getContext("2d");kd.filter="blur(6px)";kd.drawImage(Qn.image,0,0,1536,1024);var D4=new Yv(pt);D4.colorSpace=X3;D4.anisotropy=8;function hd(n,f=!1){n.updateWorldMatrix(!0,!1);let v=n.geometry.attributes.position,e=n.geometry.attributes.normal,P=[],z=[],t=[],u=[],r=[],b=new L,X=new L,d=new L;for(let x=0;x<v.count;x++){b.fromBufferAttribute(v,x),n.localToWorld(b),X.fromBufferAttribute(e,x).transformDirection(n.matrixWorld),d.copy(b).project(ce),u.push((d.x+1)/2,(d.y+1)/2),r.push(i3.smoothstep(b.z,1.2,1.9)),d.copy(b),b.x<0&&(f||b.z<1.55)&&(d.x=-b.x),d.project(Tt),P.push((d.x+1)/2,(d.y+1)/2),d.copy(b).project(yt);let c=d.x*.5*1.039+.5,a=1-((1-(d.y+1)/2)*1024-230)*1.028/1024-230/1024;z.push(c,a),t.push(Math.max(1-i3.smoothstep(X.z,-.7,-.12),i3.smoothstep(-b.z,.55,1.1)*i3.smoothstep(X.y,.18,.65)))}n.geometry.setAttribute("newFront",new sf(u,2)),n.geometry.setAttribute("newMix",new sf(r,1)),n.geometry.setAttribute("studioFront",new sf(P,2)),n.geometry.setAttribute("studioRear",new sf(z,2)),n.geometry.setAttribute("studioBlend",new sf(t,1));let H=new u3({map:f?D4:Qn,fog:!1,toneMapped:!1});H.onBeforeCompile=x=>{x.uniforms.rearSkin={value:ae},x.uniforms.frontalSkin={value:je},x.vertexShader=`attribute vec2 newFront;attribute float newMix;varying vec2 newSkinUV;varying float newSkinMix;attribute vec2 studioFront;attribute vec2 studioRear;attribute float studioBlend;varying vec2 frontSkinUV;varying vec2 rearSkinUV;varying float rearSkinBlend;
`+x.vertexShader,x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
newSkinUV=newFront;newSkinMix=newMix;frontSkinUV=studioFront;rearSkinUV=studioRear;rearSkinBlend=studioBlend;`),x.fragmentShader=`uniform sampler2D frontalSkin;varying vec2 newSkinUV;varying float newSkinMix;uniform sampler2D rearSkin;varying vec2 frontSkinUV;varying vec2 rearSkinUV;varying float rearSkinBlend;
`+x.fragmentShader,x.fragmentShader=x.fragmentShader.replace("#include <map_fragment>","diffuseColor*=mix(mix(texture2D(map,frontSkinUV),texture2D(rearSkin,rearSkinUV),rearSkinBlend),texture2D(frontalSkin,newSkinUV),newSkinMix);")},Array.isArray(n.material)?n.material[0]=H:n.material=H}xv.scene.traverse(n=>{if(!n.isMesh)return;let f=n.name.replaceAll("_"," ");["Cast rounded","Front titanium collar","Front outer highlight","Rear titanium surround","Rear IO tray border","Speaker panel edge"].some(v=>f.startsWith(v))&&hd(n),f.startsWith("Perforated")&&!n.userData.apertureWall&&hd(n,!0),f.startsWith("Front inner seam")&&(n.visible=!1)});var xj=await new Vv().loadAsync(He.scopedCloth);K4({THREE:s9,gltf:xv,model:qv,grain:En,cropTexture:se,reference:Qn,frontalReference:je,rearReference:ae,scopedFabric:xj,smoothShell:ej,topLogo:Bn,power:Cn});S4({THREE:s9,gltf:xv,model:qv,handle:null,handleEdges:[],cropTexture:se});Y4({THREE:s9,gltf:xv,model:qv,grain:En,rearReference:ae,frontalReference:je,targetCamera:ce});J4({THREE:s9,gltf:xv,model:qv,rearReference:ae});k4({THREE:s9,gltf:xv,grain:En});var Ot=new fv;Ot.scale.y=-1;Ot.position.y=-.012;var Jd=new kv;Jd.add(Ot);xv.scene.updateWorldMatrix(!0,!0);xv.scene.traverse(n=>{if(!n.isMesh||!["Cast_rounded","Front_black","Rear_black","Rear_fabric","Rubber_foot","Foot_collar"].some(e=>n.name.startsWith(e)))return;let f=Array.isArray(n.material)?n.material[0]:n.material,v=new _f(n.geometry,new u3({map:n.name.startsWith("Cast_rounded")?null:f.map||null,color:n.name.startsWith("Cast_rounded")?"#292622":f.map?"#ffffff":"#302d2a",fog:!1,toneMapped:!1}));v.matrix.copy(n.matrixWorld),v.matrix.decompose(v.position,v.quaternion,v.scale);for(let e of Array.isArray(v.material)?v.material:[v.material])e.transparent=!0,e.opacity=.12,e.depthWrite=!1,e.side=vv,e.fog=!1,e.onBeforeCompile=P=>{P.vertexShader=`varying float mirrorY;
`+P.vertexShader,P.vertexShader=P.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
mirrorY=abs((modelMatrix*vec4(position,1.)).y);`),P.fragmentShader=`varying float mirrorY;
`+P.fragmentShader,P.fragmentShader=P.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a*=exp(-mirrorY*2.2);`)};Ot.add(v)});var In=new C3(512,342,{depthBuffer:!0}),m4=new C3(512,342,{depthBuffer:!1}),T4=new C3(512,342,{depthBuffer:!1}),N4=new n7(-1,1,1,-1,0,1),y4=new kv,Yd=new kv,Sd="varying vec2 screenUV;void main(){screenUV=uv;gl_Position=vec4(position.xy,0.,1.);}",gn=new Q3({uniforms:{source:{value:In.texture},stepUV:{value:new g}},vertexShader:Sd,fragmentShader:"uniform sampler2D source;uniform vec2 stepUV;varying vec2 screenUV;void main(){vec4 c=texture2D(source,screenUV)*.19648255;c+=(texture2D(source,screenUV+stepUV*1.4117647)+texture2D(source,screenUV-stepUV*1.4117647))*.29690696;c+=(texture2D(source,screenUV+stepUV*3.2941176)+texture2D(source,screenUV-stepUV*3.2941176))*.09447040;c+=(texture2D(source,screenUV+stepUV*5.1764706)+texture2D(source,screenUV-stepUV*5.1764706))*.01038136;gl_FragColor=c;}",depthTest:!1,depthWrite:!1,toneMapped:!1});y4.add(new _f(new Xv(2,2),gn));var sj=new Q3({uniforms:{source:{value:T4.texture}},vertexShader:Sd,fragmentShader:"uniform sampler2D source;varying vec2 screenUV;void main(){vec4 c=texture2D(source,screenUV);gl_FragColor=vec4(c.rgb/max(c.a,.001),c.a);}",transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1});Yd.add(new _f(new Xv(2,2),sj));function Kd(){Cf.info.reset();let n=512,f=Math.round(n*innerHeight/innerWidth);if(In.height!==f)for(let v of[In,m4,T4])v.setSize(n,f);Cf.setClearColor(0,0),Cf.setRenderTarget(In),Cf.render(Jd,E3),gn.uniforms.source.value=In.texture,gn.uniforms.stepUV.value.set(1.5/n,0),Cf.setRenderTarget(m4),Cf.render(y4,N4),gn.uniforms.source.value=m4.texture,gn.uniforms.stepUV.value.set(0,1.5/f),Cf.setRenderTarget(T4),Cf.render(y4,N4),Cf.setRenderTarget(null),Cf.render(Tv,E3),Cf.autoClear=!1,Cf.render(Yd,N4),Cf.autoClear=!0}var Ud={hero:{p:[10.36,.9,14.29],t:[.16,2.06,-.11],fov:18.7,label:"01 / Three-quarter view",fold:0},front:{p:[.0378,2.1214,18.58],t:[.0378,2.1214,0],fov:19,label:"02 / Front elevation",fold:0},rear:{p:[0,3.15,-17.2],t:[0,1.58,0],fov:20.1,label:"03 / Rear connections",fold:1},detail:{p:[2.9,2.4,8.3],t:[0,1.893,1.81],fov:20,label:"04 / Optical assembly",fold:0}};function xe(n,f=!1){let v=Ud[n];if(!v)return;l4=n,S3.autoRotate=!1,Id("rotate",!1);let e=innerWidth/innerHeight<1?Math.max(1.8,1.55/(innerWidth/innerHeight)):1,P=new L(...v.t),z=new L(...v.p).sub(P).multiplyScalar(e).add(P);f?(E3.position.copy(z),S3.target.copy(P),E3.fov=v.fov,E3.updateProjectionMatrix(),S3.update(),Dv=null):Dv={start:performance.now(),p0:E3.position.clone(),p1:z,t0:S3.target.clone(),t1:P,f0:E3.fov,f1:v.fov},document.querySelectorAll("[data-view]").forEach(t=>{t.classList.toggle("active",t.dataset.view===n),t.setAttribute("aria-pressed",String(t.dataset.view===n))}),document.getElementById("view-label").textContent=v.label}function Id(n,f){let v=document.getElementById(n);v.classList.toggle("active",f),v.setAttribute("aria-pressed",String(f))}document.querySelectorAll("[data-view]").forEach(n=>n.onclick=()=>xe(n.dataset.view));document.getElementById("rotate").onclick=()=>{Dv=null,S3.autoRotate=!S3.autoRotate,Id("rotate",S3.autoRotate)};var gd=()=>document.body.classList.toggle("zen");document.getElementById("zen").onclick=gd;document.addEventListener("keydown",n=>{n.key.toLowerCase()==="h"&&gd(),n.key==="Escape"&&document.body.classList.remove("zen"),n.key==="1"&&xe("hero"),n.key==="2"&&xe("front"),n.key==="3"&&xe("rear"),n.key==="4"&&xe("detail")});S3.addEventListener("start",()=>{Dv=null,document.querySelectorAll("[data-view]").forEach(n=>{n.classList.remove("active"),n.setAttribute("aria-pressed","false")}),document.getElementById("view-label").textContent="Free orbit / Explore every detail"});document.getElementById("save").onclick=()=>{Kd();let n=document.createElement("a");n.href=Cf.domElement.toDataURL("image/png"),n.download="Horizon-"+l4+".png",n.click();let f=document.getElementById("notice");f.textContent="Render saved",f.classList.add("show"),setTimeout(()=>f.classList.remove("show"),2200)};var Ed=new URLSearchParams(location.search);Ed.has("studio")&&document.body.classList.add("studio");xe(Ed.get("view")||"front",!0);addEventListener("resize",()=>{Cf.setSize(innerWidth,innerHeight),E3.aspect=innerWidth/innerHeight,E3.updateProjectionMatrix(),innerWidth<760&&xe(l4,!0)});var L8={frames:0,fps:0,triangles:0,calls:0},i4=performance.now(),Z4=0;function Bd(n){requestAnimationFrame(Bd);if(sceneLifecycle.sceneActive===false||document.hidden)return;if(sceneLifecycle.shouldSceneRender&&!sceneLifecycle.shouldSceneRender(n))return;if(sceneLifecycle.beforeSceneFrame)sceneLifecycle.beforeSceneFrame(n);if(Dv){let v=Math.min(1,(n-Dv.start)/1150),e=v<.5?4*v*v*v:1-(-2*v+2)**3/2;E3.position.lerpVectors(Dv.p0,Dv.p1,e),S3.target.lerpVectors(Dv.t0,Dv.t1,e),E3.fov=i3.lerp(Dv.f0,Dv.f1,e),E3.updateProjectionMatrix(),v===1&&(Dv=null)}S3.update();let f=i3.smoothstep(E3.position.z/E3.position.length(),-.2,.2);at.viewMix.value=f,at.resolution.value.set(Cf.domElement.width,Cf.domElement.height),E3.position.y<.25&&(E3.position.y=.25),Kd(),sceneLifecycle.afterSceneFrame?.(),Z4++,L8.frames++,n-i4>1e3&&(L8.fps=Z4*1e3/(n-i4),Z4=0,i4=n,L8.triangles=Cf.info.render.triangles,L8.calls=Cf.info.render.calls,Cf.domElement.dataset.fps=L8.fps.toFixed(1))}requestAnimationFrame(Bd);od=!0;document.getElementById("loading").classList.add("hide");sceneLifecycle.projector={opticalCenter:Nt,opticalMeshes:h4,faceBounds:Y7,renderer:Cf,scene:Tv,camera:E3,controls:S3,model:qv,stats:L8,ready:od,chooseView:xe,setStudio:n=>document.body.classList.toggle("studio",n),views:Ud};
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */

const product=sceneLifecycle.projector;
sceneLifecycle.sceneActive=true;
product.renderer.setSize(innerWidth,innerHeight);
product.camera.aspect=innerWidth/innerHeight;
product.camera.updateProjectionMatrix();
let cinematic={p:product.camera.position.toArray(),t:product.controls.target.toArray(),fov:product.camera.fov};
let free=false,reduced=false,lastFrame=0,dirtyUntil=performance.now()+2000;
let story='',storyStarted=performance.now(),revealStarted=performance.now(),playhead=184,goalFrame=196,scrolling=0,pointerScale=1,damping=11,screenScale=1,revealDuration=1100,cinePose=null,poseKey='',activeSince=performance.now(),lastViewOffset='',live=false;
let pointer={x:0,y:0},follow={x:0,y:0},clock=0,presentationHover=false,hoverWeight=0;
// Interactive rotation: the page gives a goal (radians) and the camera follows it around a pivot on a
// critically damped spring, so the product turns in place, never overshoots and rests completely still.
const orbit={yaw:{x:0,v:0},pitch:{x:0,v:0},goal:[0,0],omega:9,busy:false};
const settle=(s,goal,omega,dt)=>{const c1=s.x-goal,c2=s.v+omega*c1,e=Math.exp(-omega*dt);s.x=goal+(c1+c2*dt)*e;s.v=(c2-omega*(c1+c2*dt))*e;if(Math.abs(s.x-goal)<2e-5&&Math.abs(s.v)<2e-4){s.x=goal;s.v=0}};
const Vector=product.camera.position.constructor;
const pivot=new Vector(),orbitAxis=new Vector();
const currentOffset=new Vector(),desiredOffset=new Vector(),target=new Vector(),right=new Vector();
const basePosition=product.model.position.clone(),baseQuaternion=product.model.quaternion.clone();
const Quaternion=product.model.quaternion.constructor,tilt=new Quaternion();
const orbitLimits={minDistance:product.controls.minDistance,maxDistance:product.controls.maxDistance,minPolarAngle:product.controls.minPolarAngle,maxPolarAngle:product.controls.maxPolarAngle};
const axisX=new Vector(1,0,0),axisY=new Vector(0,1,0),axisZ=new Vector(0,0,1);
const pitchQuat=new Quaternion(),yawQuat=new Quaternion(),rollQuat=new Quaternion();
product.controls.enableZoom=false;
product.controls.enabled=false;
product.controls.enableDamping=true;
product.controls.autoRotate=false;
product.configure=(state)=>{
 if(state.width&&state.height&&(innerWidth!==state.width||innerHeight!==state.height)){
 innerWidth=state.width;innerHeight=state.height;product.renderer.setSize(innerWidth,innerHeight);product.camera.aspect=innerWidth/innerHeight;product.camera.updateProjectionMatrix();dirtyUntil=performance.now()+1500;
 }

 Dv=null;
 if(state.p&&state.p.some((v,i)=>Math.abs(v-cinematic.p[i])>.0001)||state.t&&state.t.some((v,i)=>Math.abs(v-cinematic.t[i])>.0001)||state.fov!==undefined&&Math.abs(state.fov-cinematic.fov)>.0001||state.view||state.finish&&state.finish!==product.finish||state.active===true&&sceneLifecycle.sceneActive===false)dirtyUntil=performance.now()+1500;
 if(state.reduced!==undefined)reduced=state.reduced;
 if(state.story!==undefined&&state.story!==story){story=state.story;storyStarted=performance.now();hoverWeight=0;product.model.position.copy(basePosition);product.model.quaternion.copy(baseQuaternion);}
 if(state.frame!==undefined)goalFrame=state.frame;
 if(state.scrolling!==undefined)scrolling=state.scrolling;
 if(state.pointer){if(state.pointer.x!==pointer.x||state.pointer.y!==pointer.y)activeSince=performance.now();pointer=state.pointer;if(story==='presentation'&&presentationHover)dirtyUntil=performance.now()+900;}
 if(state.presentationHover!==undefined&&presentationHover!==state.presentationHover){presentationHover=state.presentationHover;dirtyUntil=performance.now()+1200;}
 if(state.pointerScale!==undefined)pointerScale=state.pointerScale;
 // Presentation-only tuning from the page: follow damping, authored lateral travel, and when the reveal plays.
 if(state.damping!==undefined)damping=state.damping;
 if(state.screenScale!==undefined)screenScale=state.screenScale;
 // 'cine' story: the page supplies the exact camera pose every frame:
 //   {p,t,fov,roll, intro (weight of the authored arrival on load),
 //    orbit:[yaw,pitch] (interactive rotation goal, radians), tilt (0..1 weight applied after damping, so the
 //    page can switch the rotation off exactly, e.g. as a scroll sequence starts), pivot, stiff (spring rate)}.
 // Nothing moves by itself: once the pose and the rotation have settled, the story stops rendering.
 // live: something on screen changes by itself (the projected film), so the cine story keeps rendering.
 if(state.live!==undefined)live=!!state.live;
 if(state.cine!==undefined){cinePose=state.cine;const c=state.cine,key=c?c.p.join()+c.t.join()+c.fov+'|'+(c.tilt||0).toFixed(4):'';if(key!==poseKey){poseKey=key;activeSince=performance.now();dirtyUntil=performance.now()+300;}
  const g=c&&c.orbit||[0,0];if(g[0]!==orbit.goal[0]||g[1]!==orbit.goal[1]){orbit.goal=[g[0],g[1]];dirtyUntil=Math.max(dirtyUntil,performance.now()+200)}if(c&&c.stiff)orbit.omega=c.stiff;}
 if(state.reveal){revealStarted=performance.now();revealDuration=state.reveal===true?1100:state.reveal;playhead=184;dirtyUntil=performance.now()+revealDuration+400;}
 // Frame the landing with an off-axis projection; keep the authored camera above the original floor.
 if(state.viewOffset!==undefined){const v=state.viewOffset,vk=v?[v.width,v.height,Math.round(v.x),Math.round(v.y)].join():'';if(vk!==lastViewOffset){lastViewOffset=vk;dirtyUntil=Math.max(dirtyUntil,performance.now()+300);}if(v)product.camera.setViewOffset(v.width,v.height,v.x,v.y,v.width,v.height);else product.camera.clearViewOffset();}
 if(state.finish&&product.setFinish&&state.finish!==product.finish)product.setFinish(state.finish);
 if(state.active!==undefined)sceneLifecycle.sceneActive=state.active;
 if(state.free!==undefined){free=state.free;Object.assign(product.controls,free?orbitLimits:{minDistance:.01,maxDistance:Infinity,minPolarAngle:.01,maxPolarAngle:Math.PI-.01});if(free)product.camera.up.set(0,1,0);product.controls.enabled=free;product.controls.enableZoom=false;product.renderer.domElement.style.touchAction='pan-y';product.renderer.domElement.tabIndex=free?0:-1;}
 if(state.p)cinematic={p:state.p,t:state.t,fov:state.fov};
 if(state.view){product.chooseView(state.view,reduced);cinematic={p:product.camera.position.toArray(),t:product.controls.target.toArray(),fov:product.camera.fov};}
 if(state.rotate!==undefined)product.controls.autoRotate=state.rotate;
};
function authoredPose(sequence,start,frame){
 const index=Math.max(0,Math.min(sequence.length-1,frame-start)),a=Math.floor(index),b=Math.min(a+1,sequence.length-1),u=index-a;
 return sequence[a].map((v,i)=>v+(sequence[b][i]-v)*u);
}
sceneLifecycle.beforeSceneFrame=(now)=>{
 const dt=lastFrame?Math.min((now-lastFrame)/1000,.06):1/60;lastFrame=now;clock+=dt;
 if(free)return;
 const cam=product.camera,ctrl=product.controls,motion=window.xgimiMotion;
 const pointerMix=reduced?1:1-Math.pow(1-(story==='final'?.04:story==='hero'||story==='flight'||story==='cine'?.03:.08),60*dt);
 follow.x+=(pointer.x-follow.x)*pointerMix;follow.y+=(pointer.y-follow.y)*pointerMix;
 product.story3d?.tick?.(now);
 if(story==='cine'&&cinePose){
  const c=cinePose,w=c.intro||0;
  target.set(...c.t);desiredOffset.set(...c.p).sub(target);
  let r=Math.max(.001,desiredOffset.length()),th=Math.atan2(desiredOffset.x,desiredOffset.z),ph=Math.acos(Math.max(-1,Math.min(1,desiredOffset.y/r))),roll=c.roll||0;
  const plane=2*r*Math.tan(c.fov*Math.PI/360);
  // The authored arrival plays on top of the page pose when the projector first appears.
  if(motion&&!reduced&&w>0){const reveal=Math.min(1,(now-revealStarted)/revealDuration);if(reveal<1){const a=authoredPose(motion.flight,184,184+12*(1-Math.pow(1-reveal,4)));th+=a[0]*w;ph+=a[1]*w;r*=1+(a[2]-1)*w;roll+=a[5]*w;right.set(Math.cos(th),0,-Math.sin(th));target.addScaledVector(right,-a[3]*plane*w);target.y-=a[4]*plane*w;}}
  ph=Math.max(.04,Math.min(Math.PI-.04,ph));
  ctrl.target.copy(target);
  cam.position.set(r*Math.sin(ph)*Math.sin(th),r*Math.cos(ph),r*Math.sin(ph)*Math.cos(th)).add(target);
  // Interactive rotation: camera and target turn together about the pivot, so the product stays exactly
  // where the layout put it and only its angle changes. Applied weight is exact (no lag when it is 0).
  if(reduced){orbit.yaw.x=orbit.goal[0];orbit.pitch.x=orbit.goal[1];orbit.yaw.v=orbit.pitch.v=0}
  else{settle(orbit.yaw,orbit.goal[0],orbit.omega,dt);settle(orbit.pitch,orbit.goal[1],orbit.omega,dt)}
  orbit.busy=orbit.yaw.x!==orbit.goal[0]||orbit.pitch.x!==orbit.goal[1];
  const tw=c.tilt||0,yaw=orbit.yaw.x*tw,pitch=orbit.pitch.x*tw;
  if(yaw||pitch){
   pivot.set(...(c.pivot||c.t));
   cam.position.sub(pivot).applyAxisAngle(axisY,yaw);ctrl.target.sub(pivot).applyAxisAngle(axisY,yaw);
   orbitAxis.copy(cam.position).sub(ctrl.target);orbitAxis.set(orbitAxis.z,0,-orbitAxis.x).normalize(); // the camera's right, level with the floor
   cam.position.applyAxisAngle(orbitAxis,-pitch).add(pivot);ctrl.target.applyAxisAngle(orbitAxis,-pitch).add(pivot);
  }
  cam.up.set(-Math.sin(roll),Math.cos(roll),0);
  if(Math.abs(cam.fov-c.fov)>1e-4){cam.fov=c.fov;}cam.updateProjectionMatrix();
  product.renderer.domElement.dataset.motion='cine';
  return;
 }
 desiredOffset.set(...cinematic.p).sub(new Vector(...cinematic.t));target.set(...cinematic.t);
 let goalRadius=desiredOffset.length(),goalTheta=Math.atan2(desiredOffset.x,desiredOffset.z),goalPhi=Math.acos(Math.max(-1,Math.min(1,desiredOffset.y/goalRadius))),roll=0;
 let authored=null,frame=196;
 if(story==='presentation'){playhead=goalFrame;hoverWeight+=(Number(presentationHover&&!reduced)-hoverWeight)*(1-Math.exp(-dt*7));goalTheta+=follow.x*2.5*Math.PI/180*hoverWeight;goalPhi+=follow.y*1.5*Math.PI/180*hoverWeight;}
 if(motion&&!reduced&&(story==='hero'||story==='flight')){
  const reveal=Math.min(1,(now-revealStarted)/revealDuration);
  if(reveal<1){playhead=184+12*(1-Math.pow(1-reveal,4));if(goalFrame>196)playhead+=(goalFrame-196)*reveal*reveal;}
  else playhead+=(goalFrame-playhead)*(1-Math.pow(1-(innerWidth<700?.2:.03),60*dt));
  frame=playhead;authored=authoredPose(motion.flight,184,frame);
 }else if(motion&&!reduced&&story==='final'){
  const progress=Math.min(1,(now-storyStarted)/4000);frame=855+140*(1-Math.pow(1-progress,3));authored=authoredPose(motion.landing,855,frame);
 }
 if(authored){goalTheta+=authored[0];goalPhi+=authored[1];goalRadius*=authored[2];roll=authored[5];}
 goalPhi=Math.max(.06,Math.min(Math.PI-.06,goalPhi));
 const planeHeight=2*goalRadius*Math.tan(cinematic.fov*Math.PI/360);
 right.set(Math.cos(goalTheta),0,-Math.sin(goalTheta));
 if(authored){target.addScaledVector(right,-authored[3]*planeHeight*(story==='flight'?screenScale:1));target.y-=authored[4]*planeHeight;}
 // Content stages: the cursor turns the product a few degrees (it follows the cursor, as a drag would).
 // No bob, no roll, no sideways slide: when the cursor rests, so does the product.
 if(!reduced&&story&&story!=='models'&&story!=='presentation'){goalTheta-=follow.x*5*Math.PI/180;goalPhi-=follow.y*2.6*Math.PI/180;}
 // The reference timeline already contains its easing; sample it directly for flight/landing.
 const mix=reduced||authored||story==='presentation'?1:1-Math.exp(-dt*(story==='features'?6:damping));
 currentOffset.copy(cam.position).sub(ctrl.target);
 const radius=Math.max(.001,currentOffset.length()),theta=Math.atan2(currentOffset.x,currentOffset.z),phi=Math.acos(Math.max(-1,Math.min(1,currentOffset.y/radius)));
 const delta=Math.atan2(Math.sin(goalTheta-theta),Math.cos(goalTheta-theta));
 const r=radius+(goalRadius-radius)*mix,p=phi+(goalPhi-phi)*mix,t=theta+delta*mix;
 ctrl.target.lerp(target,mix);
 cam.position.set(r*Math.sin(p)*Math.sin(t),r*Math.cos(p),r*Math.sin(p)*Math.cos(t)).add(ctrl.target);
 cam.up.set(-Math.sin(roll),Math.cos(roll),0);
 cam.fov+=(cinematic.fov-cam.fov)*mix;cam.updateProjectionMatrix();
 product.renderer.domElement.dataset.motion=story||'explorer';
 product.renderer.domElement.dataset.hover=story==='presentation'&&presentationHover?'true':'false';
 product.renderer.domElement.dataset.frame=frame.toFixed(2);
};
window.projectors=window.projectors||{};window.projectors['horizon']=product;window.dispatchEvent(new CustomEvent('xgimi-model-ready',{detail:'horizon'}));
addEventListener('keydown',e=>{if(e.key==='Escape')parent.postMessage({type:'xgimi-escape'},location.origin==='null'?'*':location.origin);});
// Render only while something is changing. (The content stages follow the cursor with their own damping.)
sceneLifecycle.shouldSceneRender=(now)=>product.controls.autoRotate||now<dirtyUntil||(story==='cine'?live||orbit.busy:(!free&&!reduced&&!!story&&(story==='presentation'?presentationHover||hoverWeight>.001:Math.abs(follow.x-pointer.x)+Math.abs(follow.y-pointer.y)>.0015||now-activeSince<700)));
addEventListener('resize',()=>{dirtyUntil=performance.now()+1500;});
product.controls.addEventListener('change',()=>{dirtyUntil=performance.now()+900;});
product.controls.addEventListener('start',()=>window.dispatchEvent(new CustomEvent('xgimi-orbit',{detail:'horizon'})));
// invalidate(): something changed outside the camera (a texture swap); draw a few frames.
product.invalidate=()=>{dirtyUntil=Math.max(dirtyUntil,performance.now()+400)};
product.projectPoints=(points)=>{product.camera.updateMatrixWorld();return points.map(point=>{const v=new Vector(...point).project(product.camera);return [(v.x+1)/2,(1-v.y)/2];});};
if('horizon'==='short')product.views.controls={p:[3.8,11,15],t:[.73,2.5,1.9],fov:18,label:'05 / Tactile controls'};

document.querySelector('script[type="module"]')?.remove();

// Initialization is separate from a successfully drawn, visible product frame.
let confirmedFrames=0,renderConfirmed=false;
sceneLifecycle.afterSceneFrame=()=>{
 const canvas=product.renderer.domElement;
 if(renderConfirmed||canvas.width<32||canvas.height<32||product.renderer.getContext().isContextLost()||product.renderer.info.render.triangles===0)return;
 if(++confirmedFrames<2)return;
 renderConfirmed=true;canvas.dataset.rendered='true';
 window.dispatchEvent(new CustomEvent('xgimi-model-rendered',{detail:'horizon'}));
};
product.renderer.domElement.addEventListener('webglcontextlost',()=>{
 renderConfirmed=false;confirmedFrames=0;
 window.dispatchEvent(new CustomEvent('xgimi-model-unavailable',{detail:'horizon'}));
});
product.renderer.domElement.addEventListener('webglcontextrestored',()=>{dirtyUntil=performance.now()+2000;sceneLifecycle.sceneActive=true;});

// Finish transitions for either projector runtime (appended by scripts/apply-adapter.py).
// A finish change is shown as a seam on screen: every affected mesh gets a twin (same geometry, other
// finish), and two clipping planes through the camera split them along one vertical screen line.
// Geometry is never edited; twins share it, and everything returns to the explorer's own state after.
product.finishFX=(()=>{
 const renderer=product.renderer,scene=product.scene,V=product.camera.position.constructor;
 // Plane-shaped objects (the short-throw bundle exposes no Plane class). Material.clone() clones a material's
 // planes, so they answer clone(); a cloned twin is given its own plane afterwards anyway.
 const keep=()=>({normal:new V(1,0,0),constant:1e7,clone(){return this}});
 const planeA=keep(),planeB=keep(); // A clips the original finish, B the twin finish
 const pairs=[],aMats=new Set(),bMats=new Set();
 let mode='a',seam=.5,newSide='left',ready=false;
 const C=new V(),P=new V(),U=new V(),N=new V();
 // pairs: [{mesh, twinMaterial}] — the original keeps its own material(s); the twin wears the other finish.
 function init(list){
  if(ready)return;renderer.localClippingEnabled=true;
  for(const {mesh,material} of list){
   const twin=mesh.clone(false);twin.material=material;twin.visible=false;twin.name=mesh.name+' (finish twin)';
   mesh.parent.add(twin);pairs.push({mesh,twin,visible:mesh.visible});
   arm(Array.isArray(mesh.material)?mesh.material:[mesh.material]);
   (Array.isArray(material)?material:[material]).forEach(m=>bMats.add(m));
  }
  for(const m of bMats){m.clippingPlanes=[planeB];m.needsUpdate=true}
  ready=true;
 }
 // arm(materials): give original materials their clipping plane. Doing this at load, when everything
 // compiles for the first time anyway, means building the twins later does not recompile the originals.
 function arm(materials){renderer.localClippingEnabled=true;for(const m of materials)if(!aMats.has(m)){aMats.add(m);m.clippingPlanes=[planeA];m.needsUpdate=true}}
 const reset=p=>{p.normal.set(1,0,0);p.constant=1e7};
 // Planes are rebuilt from the camera that actually renders the frame, so the seam never lags.
 const prior=scene.onBeforeRender;
 scene.onBeforeRender=function(r,s,camera,...rest){
  prior?.call(this,r,s,camera,...rest);
  if(!ready||mode!=='wipe'){reset(planeA);reset(planeB);return}
  camera.updateMatrixWorld();C.setFromMatrixPosition(camera.matrixWorld);U.setFromMatrixColumn(camera.matrixWorld,1).normalize();
  P.set(seam*2-1,0,.5).unproject(camera).sub(C).normalize();N.crossVectors(P,U).normalize(); // N points to screen-right
  const c=-N.dot(C),left=newSide==='left';
  // B (new finish) keeps the side the seam has already passed; A keeps the rest.
  planeB.normal.copy(N).multiplyScalar(left?-1:1);planeB.constant=left?-c:c;
  planeA.normal.copy(N).multiplyScalar(left?1:-1);planeA.constant=left?c:-c;
 };
 // state: {mode:'a'|'b'|'wipe', seam:0..1 (screen x of the seam), newSide:'left'|'right'}
 let lazy=null,prep=null;
 function set(state){
  if(!ready&&lazy){while(prep&&prep());const build=lazy;lazy=null;init(build())}
  if(!ready)return;
  if(state.seam!==undefined)seam=state.seam;if(state.newSide)newSide=state.newSide;
  if(state.mode&&state.mode!==mode){mode=state.mode;
   for(const p of pairs){p.mesh.visible=mode==='b'?false:p.visible;p.twin.visible=mode!=='a'}}
 }
 // economy({glass, trs}): glass:false hides transmissive meshes while they are fully masked on screen, so
 // three skips its transmission pass; trs sets the transmission buffer scale (null restores the original).
 const trs0=renderer.transmissionResolutionScale;let hiddenGlass=null;
 function economy({glass=true,trs=null}={}){
  if(!glass&&!hiddenGlass){hiddenGlass=[];scene.traverse(o=>{if(o.isMesh&&o.visible&&(Array.isArray(o.material)?o.material:[o.material]).some(m=>m.transmission>0)){o.visible=false;hiddenGlass.push(o)}})}
  else if(glass&&hiddenGlass){hiddenGlass.forEach(o=>o.visible=true);hiddenGlass=null}
  if(trs0!==undefined){const want=trs??trs0;if(renderer.transmissionResolutionScale!==want)renderer.transmissionResolutionScale=want}
 }
 // prewarm(): link the twins' programs while idle, a few materials per call, so neither the first wipe nor
 // the warm-up itself holds a frame for long. Returns true while there is more to do.
 // compile() alone would build the twins without their clipping variant (the renderer only sets clipping
 // state per material while drawing), so each step draws a frame with the seam off-screen: the twins are
 // clipped away entirely and the pixels are unchanged.
 let warmQueue=null;
 function prewarm(){
  if(!ready&&lazy){if(prep&&prep())return true;const build=lazy;lazy=null;init(build());return true}
  if(!ready)return false;
  if(!warmQueue){const groups=new Map();for(const p of pairs){const m=p.twin.material,k=Array.isArray(m)?m.map(x=>x.uuid).join():m.uuid;if(!groups.has(k))groups.set(k,[]);groups.get(k).push(p)}warmQueue=[...groups.values()]}
  if(mode!=='a')return warmQueue.length>0;
  const batch=warmQueue.splice(0,2).flat();if(!batch.length)return false;
  const keep=[seam,newSide];mode='wipe';seam=-2;newSide='left';batch.forEach(p=>p.twin.visible=true);
  try{renderer.render(scene,product.camera)}finally{batch.forEach(p=>p.twin.visible=false);mode='a';[seam,newSide]=keep}
  return warmQueue.length>0;
 }
 // later(fn, step): build the twin list on first use, once the runtime has finished setting up its materials.
 // step() does one slice of any preparation the list needs and returns true while there is more.
 return {init,set,arm,economy,prewarm,later:(fn,step)=>{lazy=fn;prep=step||null},get ready(){return ready},get mode(){return mode},get seamPast(){return newSide==='left'?seam:1-seam},_debug:{planeA,planeB,pairs,aMats,bMats}};
})();

// Story layer for the portable projector, appended to the horizon runtime after the adapter
// (scripts/apply-adapter.py). It uses the runtime's own Three.js namespace, renderer, lights and
// lens meshes so both scroll stories stay consistent with the original model. Model geometry and
// materials are never edited: lens parts move only as rigid bodies and are restored exactly at
// explode 0, and every light/fog/material value touched here is restored when the story resets.
product.story3d=(()=>{
 const T=s9;
 const scene=product.scene,model=product.model;
 const AXIS_Y=1.894,AXIS_X=0;
 const smooth=(a,b,v)=>{const t=Math.min(1,Math.max(0,(v-a)/(b-a)));return t*t*(3-2*t)};
 model.updateMatrixWorld(true);

 /* ── Engineered lens ──────────────────────────────────────────────────────
    A precision assembly dimensioned from the model's own lens (each part's radius and depth),
    aligned exactly on the optical axis. It stands in for the model lens only while the lens story
    runs; everywhere else the original meshes are shown untouched. */
 const AX=AXIS_X,AY=AXIS_Y,clamp01=v=>Math.min(1,Math.max(0,v)),smoother=t=>t*t*t*(t*(t*6-15)+10);
 const originals=product.opticalMeshes.map(mesh=>({mesh,vis0:mesh.visible}));
 const frontGlass={mesh:product.opticalMeshes.find(m=>/^Closed convex/i.test(m.name))};
 const coarse=window.matchMedia('(pointer:coarse)').matches;
 const tex=(w,h,draw,repeat)=>{const c=window.document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);const t=new T.CanvasTexture(c);t.wrapS=t.wrapT=T.RepeatWrapping;if(repeat)t.repeat.set(...repeat);t.anisotropy=8;return t};
 // Microsurface: fine grain and a few faint hairlines, never more than ~12% roughness variation.
 const micro=tex(512,512,(g,w,h)=>{const img=g.createImageData(w,h);for(let i=0;i<w*h;i++){const v=226+Math.random()*29;img.data[i*4]=img.data[i*4+1]=img.data[i*4+2]=v;img.data[i*4+3]=255}g.putImageData(img,0,0);g.strokeStyle='#ffffff';g.globalAlpha=.1;g.lineWidth=.6;for(let k=0;k<22;k++){g.beginPath();g.moveTo(Math.random()*w,Math.random()*h);g.lineTo(Math.random()*w,Math.random()*h);g.stroke()}},[4,1]);
 const pbr=o=>new T.MeshPhysicalMaterial({vertexColors:true,roughnessMap:micro,...o});
 const mat={
  polished:pbr({color:'#e4e0d8',metalness:1,roughness:.1,envMapIntensity:1.5}),
  brushed:pbr({color:'#c7c2b9',metalness:1,roughness:.3,anisotropy:.85}),
  anodized:pbr({color:'#19191c',metalness:.86,roughness:.34,anisotropy:.5,clearcoat:.3,clearcoatRoughness:.28}),
  knurl:pbr({color:'#3a3a3e',metalness:.95,roughness:.3,clearcoat:.2,side:T.DoubleSide}),
  oxide:pbr({color:'#1a1a1c',metalness:.82,roughness:.42,clearcoat:.2,clearcoatRoughness:.45}),
  copper:pbr({color:'#c98c64',metalness:1,roughness:.24,anisotropy:.5}),
  coated:pbr({color:'#2a2531',metalness:.72,roughness:.22,clearcoat:.65,clearcoatRoughness:.12,iridescence:1,iridescenceIOR:1.72,iridescenceThicknessRange:[330,820]}),
  matte:pbr({color:'#121213',metalness:.25,roughness:.74}),
  stainless:pbr({color:'#d3d3d6',metalness:1,roughness:.16}),
  ink:new T.MeshPhysicalMaterial({color:'#0e0e0f',metalness:0,roughness:.58}),
 };
 // Optical glass with multi-layer coatings. The two faces of an element carry different coating thicknesses
 // (coat: [front, back] in nm), so one soft box comes back in two colours, as it does off a real lens.
 const glass=({tint='#ffffff',ior=1.52,coat=[520,640],thick=.2,atten=3.2,dispersion=0})=>coat.map(nm=>new T.MeshPhysicalMaterial({color:tint,metalness:0,roughness:.012,transmission:1,thickness:thick,ior,dispersion,iridescence:1,iridescenceIOR:1.9,iridescenceThicknessRange:[100,nm],specularIntensity:1,envMapIntensity:1.6,attenuationColor:new T.Color(tint),attenuationDistance:atten}));
 const withAO=(g,v=1)=>{const n=g.attributes.position.count;g.setAttribute('color',new T.Float32BufferAttribute(new Float32Array(n*3).fill(v),3));return g};

 // Machined part: a closed [r,z] section revolved about the axis. Every corner gets a micro-bevel and
 // every facet keeps its own normal, so edges catch thin, crisp highlights. Bores and back faces are
 // pre-darkened (cheap baked occlusion).
 function machined(section,{bevel=.0055,seg=200,face=.97}={}){
  const pts=[],n0=section.length;
  for(let i=0;i<n0;i++){const p=section[i],a=section[(i-1+n0)%n0],c=section[(i+1)%n0],da=Math.hypot(a[0]-p[0],a[1]-p[1]),dc=Math.hypot(c[0]-p[0],c[1]-p[1]),k=p[2]?0:Math.min(bevel,da*.3,dc*.3);
   pts.push([p[0]+(a[0]-p[0])/da*k,p[1]+(a[1]-p[1])/da*k],[p[0]+(c[0]-p[0])/dc*k,p[1]+(c[1]-p[1])/dc*k])}
  const pos=[],nor=[],uv=[],col=[],idx=[],n=pts.length;let total=0;const run=[0];
  for(let i=0;i<n;i++){const a=pts[i],b=pts[(i+1)%n];total+=Math.hypot(b[0]-a[0],b[1]-a[1]);run.push(total)}
  for(let i=0;i<n;i++){
   const a=pts[i],b=pts[(i+1)%n],dr=b[0]-a[0],dz=b[1]-a[1],len=Math.hypot(dr,dz);if(len<1e-7)continue;
   const nr=dz/len,nz=-dr/len,occ=nr<-.5?.56:nz<-.5?.7:nr>.5?1:nz>.5?face:.86,base=pos.length/3;
   for(let j=0;j<=seg;j++){const th=j/seg*Math.PI*2,c=Math.cos(th),s=Math.sin(th);
    for(const [p,v] of [[a,run[i]],[b,run[i+1]]]){pos.push(p[0]*c,p[0]*s,p[1]);nor.push(nr*c,nr*s,nz);uv.push(j/seg,v/total);col.push(occ,occ,occ)}}
   for(let j=0;j<seg;j++){const k=base+j*2;idx.push(k,k+2,k+1,k+1,k+2,k+3)}
  }
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('normal',new T.Float32BufferAttribute(nor,3));
  g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setAttribute('color',new T.Float32BufferAttribute(col,3));g.setIndex(idx);return g;
 }
 // Smooth optical surface (open profile) with averaged normals; used for both faces of a lens.
 function surface(profile,seg=220){
  const pos=[],nor=[],uv=[],idx=[],n=profile.length,nrm=[];
  for(let i=0;i<n;i++){const a=profile[Math.max(0,i-1)],b=profile[Math.min(n-1,i+1)],dr=b[0]-a[0],dz=b[1]-a[1],l=Math.hypot(dr,dz)||1;nrm.push([dz/l,-dr/l])}
  for(let i=0;i<n;i++)for(let j=0;j<=seg;j++){const th=j/seg*Math.PI*2,c=Math.cos(th),s=Math.sin(th),[r,z]=profile[i],[nr,nz]=nrm[i];pos.push(r*c,r*s,z);nor.push(nr*c,nr*s,nz);uv.push(j/seg,i/(n-1))}
  for(let i=0;i<n-1;i++)for(let j=0;j<seg;j++){const k=i*(seg+1)+j;idx.push(k,k+1,k+seg+1,k+seg+1,k+1,k+seg+2)}
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('normal',new T.Float32BufferAttribute(nor,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);return g;
 }
 // Spherical lens element: R semi-diameter, tc centre thickness, R1/R2 radii (R1>0 convex front,
 // R2>0 convex back, negative = concave, Infinity = plano). Polished edge bevels, blackened rim.
 function lensElement({R,tc,R1,R2,material,bevel=.012,z=0}){
  const sag=(Rc,r)=>isFinite(Rc)?Math.sign(Rc)*(Math.abs(Rc)-Math.sqrt(Math.max(0,Rc*Rc-r*r))):0;
  const zf=r=>z+tc/2-sag(R1,r),zb=r=>z-tc/2+sag(R2,r),N=48,rb=R-bevel;
  const back=[],front=[];
  for(let i=0;i<=N;i++){const r=rb*i/N;back.push([r,zb(r)])}back.push([R,zb(rb)+bevel*.8]);
  front.push([R,zf(rb)-bevel*.8]);for(let i=N;i>=0;i--){const r=rb*i/N;front.push([r,zf(r)])}
  const group=new T.Group();
  group.add(new T.Mesh(surface(back),material[1]),new T.Mesh(surface(front),material[0]));
  const rim=new T.Mesh(withAO(surface([[R,zb(rb)+bevel*.8],[R,zf(rb)-bevel*.8]],220)),mat.ink);group.add(rim);
  group.children.forEach(m=>m.renderOrder=2);
  return group;
 }
 // Retaining ring with spanner notches (through-cut), extruded with real bevels.
 function retainer(ri,ro,z0,z1,notches=2){
  const shape=new T.Shape();shape.absarc(0,0,ro,0,Math.PI*2,false);
  const hole=new T.Path(),N=180,w=.11;
  for(let i=0;i<=N;i++){const a=i/N*Math.PI*2;let r=ri;for(let k=0;k<notches;k++){const c=k/notches*Math.PI*2;if(Math.abs(Math.atan2(Math.sin(a-c),Math.cos(a-c)))<w/2)r=ri+(ro-ri)*.48}i?hole.lineTo(r*Math.cos(a),r*Math.sin(a)):hole.moveTo(r*Math.cos(a),r*Math.sin(a))}
  shape.holes.push(hole);const b=Math.min(.004,(z1-z0)*.22);
  const g=new T.ExtrudeGeometry(shape,{depth:z1-z0-2*b,bevelEnabled:true,bevelThickness:b,bevelSize:b,bevelSegments:2,curveSegments:180});g.translate(0,0,z0+b);return withAO(g,.92);
 }
 // Straight knurling as real geometry: flat facets so every ridge throws its own highlight.
 function knurl(r0,depth,z0,z1,count){
  const pos=[],nor=[],idx=[];
  for(let k=0;k<count;k++){const a0=k/count*Math.PI*2,am=(k+.5)/count*Math.PI*2,a1=(k+1)/count*Math.PI*2;
   for(const [pa,ra,pb,rb] of [[a0,r0,am,r0+depth],[am,r0+depth,a1,r0]]){
    const ax=Math.cos(pa)*ra,ay=Math.sin(pa)*ra,bx=Math.cos(pb)*rb,by=Math.sin(pb)*rb,ex=bx-ax,ey=by-ay,l=Math.hypot(ex,ey),nx=ey/l,ny=-ex/l,base=pos.length/3;
    pos.push(ax,ay,z0,bx,by,z0,ax,ay,z1,bx,by,z1);for(let q=0;q<4;q++)nor.push(nx,ny,0);idx.push(base,base+1,base+2,base+2,base+1,base+3)}}
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('normal',new T.Float32BufferAttribute(nor,3));g.setIndex(idx);
  const uv=new Float32Array(pos.length/3*2);g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));return withAO(g,1);
 }
 // Nine-blade iris: overlapping blades whose straight inner edges form the aperture polygon.
 function iris(z,count=9,apothem=.205,outer=.545){
  const group=new T.Group();
  for(let i=0;i<count;i++){
   const phi=i/count*Math.PI*2+.17,n=[Math.cos(phi),Math.sin(phi)],t=[-Math.sin(phi),Math.cos(phi)],half=apothem*Math.tan(Math.PI/count);
   const p0=[n[0]*apothem-t[0]*half*1.05,n[1]*apothem-t[1]*half*1.05],p1=[n[0]*apothem+t[0]*half*2.6,n[1]*apothem+t[1]*half*2.6];
   const s=new T.Shape();s.moveTo(...p0);s.lineTo(...p1);
   const a1=Math.atan2(p1[1],p1[0])+.22,a0=Math.atan2(p0[1],p0[0])-.08;s.absarc(0,0,outer,a1,a0,true);s.lineTo(...p0);
   const g=new T.ExtrudeGeometry(s,{depth:.0045,bevelEnabled:true,bevelThickness:.0008,bevelSize:.0008,bevelSegments:1,curveSegments:24});
   g.translate(0,0,z-.012+i*.0026);group.add(new T.Mesh(withAO(g,.9),mat.oxide));
  }
  return group;
 }

 const kit=new T.Group();kit.name='Engineered lens';kit.visible=false;kit.position.set(AX,AY,0);model.add(kit);
 const comps=[];
 const part=(name,{z0,zt,radius,turn=0,glass=false},...meshes)=>{const g=new T.Group();g.name=name;meshes.forEach(m=>g.add(m));kit.add(g);const c={group:g,name,z0,zt,radius,turn,glass};comps.push(c);return c};
 const M=(geometry,material)=>new T.Mesh(geometry,material);

 // Thread runs for a lathe section: a fine sawtooth up an outer wall (z rising) or down a bore (z falling).
 const thread=(r,za,zb,d=.0065,pitch=.0125)=>{const n=Math.max(2,Math.round(Math.abs(zb-za)/pitch)),out=[];for(let i=0;i<n;i++){const z=za+(zb-za)*i/n,zm=za+(zb-za)*(i+.5)/n;out.push([r,z,1],[r-d,zm,1])}out.push([r,zb,1]);return out};
 const bore=(r,za,zb)=>thread(r,za,zb,-.0065);
 const cut=(ri,ro,z0,z1,n,m=mat.oxide)=>M(retainer(ri,ro,z0,z1,n),m);
 // The assembly, front to back, built the way a projection lens is: each glass element sits on a seat in its
 // own threaded cell and is held from the front by a slotted retaining ring, so every part can leave along
 // the axis without passing through another.
 part('Polished outer lip',{z0:2.03,zt:0,radius:1.196},M(machined([[1.0,1.95],[1.15,1.95],...thread(1.15,1.955,1.995),[1.15,2.0],[1.196,2.0],[1.196,2.085],[1.176,2.105],[1.075,2.105],[1.0,2.035]]),mat.polished));
 part('Knurled focus barrel',{z0:1.8,zt:0,radius:1.151},
  M(machined([[.985,1.66],[1.1,1.66],[1.135,1.69],[1.135,1.95],[.985,1.95],...bore(.985,1.93,1.7),[.985,1.68]]),mat.anodized),
  M(knurl(1.135,.016,1.745,1.885,176),mat.knurl),
  M(machined([[1.135,1.733],[1.154,1.733],[1.154,1.743],[1.135,1.743]],{bevel:.002}),mat.polished),
  M(machined([[1.135,1.887],[1.154,1.887],[1.154,1.897],[1.135,1.897]],{bevel:.002}),mat.polished));
 part('Copper optical mount',{z0:1.84,zt:0,radius:.775},cut(.715,.775,1.812,1.868,4,mat.copper));
 part('Convex front element',{z0:1.835,zt:0,radius:.77,glass:true},lensElement({R:.77,tc:.27,R1:1.6,R2:Infinity,z:1.835,material:glass({tint:'#f4fff8',ior:1.6,coat:[520,640],thick:.27,atten:2.4,dispersion:.25})}));
 part('Front lens cell',{z0:1.74,zt:0,radius:.97},
  M(machined([[.68,1.6],[.97,1.6],[.97,1.868],[.78,1.868],...bore(.78,1.86,1.8),[.78,1.7],[.68,1.7]],{face:.6}),mat.anodized),
  M(machined([[.785,1.868],[.97,1.868],[.97,1.882],[.962,1.89],[.8,1.89],[.785,1.878]]),mat.brushed));
 part('Coated inner cone',{z0:1.55,zt:0,radius:.93},M(machined([[.52,1.5],[.93,1.5],[.93,1.6],[.68,1.6],[.52,1.515]],{bevel:.004}),mat.coated));
 part('Retaining ring',{z0:1.37,zt:0,radius:.615},cut(.57,.615,1.35,1.39,2));
 part('Coated meniscus',{z0:1.44,zt:0,radius:.61,glass:true},lensElement({R:.61,tc:.16,R1:1.0,R2:-1.6,z:1.4408,material:glass({tint:'#d6c8f4',ior:1.66,coat:[340,640],thick:.16,atten:1.1})}));
 part('Middle barrel',{z0:1.3,zt:0,radius:.9},M(machined([[.5,1.1],[.84,1.1],...thread(.84,1.105,1.195),[.84,1.2],[.9,1.2],[.9,1.42],[.86,1.42],...thread(.86,1.425,1.495),[.86,1.5],[.62,1.5],...bore(.62,1.49,1.4),[.62,1.24],[.5,1.24]],{face:.6}),mat.anodized),
  M(machined([[.9,1.27],[.905,1.27],[.905,1.35],[.9,1.35]],{bevel:.002}),mat.oxide));
 part('Nine-blade iris',{z0:1.03,zt:0,radius:.86},M(machined([[.6,.98],[.86,.98],[.86,1.08],[.6,1.08]],{face:.6}),mat.anodized),iris(1.03,9,.23,.645),M(withAO(new T.CylinderGeometry(.016,.016,.06,16).rotateX(Math.PI/2).translate(.878,0,1.03)),mat.stainless));
 part('Rear retainer',{z0:.89,zt:0,radius:.545},cut(.5,.545,.875,.91,2));
 const crownZ=.849;
 part('Cemented doublet',{z0:.8,zt:0,radius:.54,glass:true},
  lensElement({R:.54,tc:.28,R1:1.1,R2:1.4,z:crownZ,material:glass({tint:'#f2fbff',ior:1.52,coat:[260,520],thick:.28})}),
  lensElement({R:.54,tc:.06,R1:-1.4,R2:-5,z:crownZ-.17,bevel:.006,material:glass({tint:'#ffeeda',ior:1.74,coat:[430,430],thick:.12,atten:1.8})}));
 part('Rear barrel',{z0:.73,zt:0,radius:.8},M(machined([[.44,.5],[.7,.5],...thread(.7,.505,.585),[.7,.62],[.8,.66],[.8,.88],...thread(.8,.885,.955),[.8,.96],[.55,.96],...bore(.55,.95,.9),[.55,.62],[.44,.62]],{face:.6}),mat.anodized));
 part('Field element',{z0:.445,zt:0,radius:.42,glass:true},lensElement({R:.42,tc:.15,R1:.9,R2:Infinity,z:.445,material:glass({tint:'#fff6ea',ior:1.52,coat:[520,260],thick:.15})}));
 const lugs=[0,1,2].map(k=>{const a=k/3*Math.PI*2+.4;return M(withAO(new T.BoxGeometry(.05,.12,.03).translate(.8,0,.317).rotateZ(a),.9),mat.stainless)});
 part('Rear mount flange',{z0:.38,zt:0,radius:.82},M(machined([[.36,.3],[.8,.3],[.8,.335],[.66,.36],...thread(.66,.365,.455),[.66,.46],[.43,.46],[.43,.37],[.36,.37]]),mat.stainless),...lugs);
 // The body's lens socket stays in place: a threaded helicoid at the mouth, a stainless mount flange with its
 // screws, a baffled bore and, at the bottom, the dark window of the light engine.
 const socket=new T.Group();socket.name='Lens socket';kit.add(socket);
 socket.add(M(machined([[0,.24],[1.19,.24],[1.19,1.94],[1.165,1.94],...bore(1.165,1.93,1.67,),[1.165,1.63],[1.165,.3],[0,.3]],{bevel:.004}),mat.matte));
 socket.add(M(machined([[1.165,1.93],[1.196,1.93],[1.196,2.0],[1.165,2.0]],{bevel:.004}),mat.stainless));
 socket.add(M(machined([[1.0,1.58],[1.165,1.58],[1.165,1.63],[1.012,1.63],[1.0,1.618]],{bevel:.004}),mat.stainless));
 for(let k=0;k<6;k++){const a=k/6*Math.PI*2+.26;socket.add(M(withAO(new T.CylinderGeometry(.026,.026,.016,20).rotateX(Math.PI/2).translate(1.086,0,1.636).rotateZ(a)),mat.oxide))}
 for(const z of [.7,.95,1.2,1.42])socket.add(M(machined([[1.12,z],[1.165,z],[1.165,z+.02],[1.12,z+.02]],{bevel:.002}),mat.matte));
 socket.add(M(machined([[.34,.3],[.46,.3],[.46,.325],[.34,.325]],{bevel:.004}),mat.stainless));
 socket.add(M(withAO(new T.CircleGeometry(.34,64).translate(0,0,.308)),new T.MeshPhysicalMaterial({color:'#06070b',metalness:0,roughness:.04,clearcoat:1,clearcoatRoughness:.03,iridescence:1,iridescenceIOR:1.4,iridescenceThicknessRange:[380,380],envMapIntensity:1.6})));

 // Exploded layout, as in an engineering drawing: functional groups with tight spacing inside a group
 // and a clear gap between groups, so every element reads without the column becoming a corridor.
 const groups=[['Rear mount flange','Field element'],['Rear barrel','Cemented doublet','Rear retainer'],['Nine-blade iris'],
  ['Middle barrel','Coated meniscus','Retaining ring'],['Coated inner cone'],['Front lens cell','Convex front element','Copper optical mount'],
  ['Knurled focus barrel'],['Polished outer lip']];
 const extent=new T.Box3();
 for(const c of comps){extent.setFromObject(c.group);c.zc=(extent.min.z+extent.max.z)/2;c.half=(extent.max.z-extent.min.z)/2}
 let cursor=2.3;
 groups.forEach((names,gi)=>{if(gi)cursor+=.2;names.forEach((name,i)=>{const c=comps.find(x=>x.name===name);if(!c)return;if(i)cursor+=.07;c.zt=c.zc+(cursor+c.half-c.zc);c.target=cursor+c.half;cursor+=2*c.half})});
 for(const c of comps)c.z0=c.zc;
 // Disassembly runs front to back with a gentle stagger.
 const span=[Math.min(...comps.map(c=>c.target-c.half))-.04,Math.max(...comps.map(c=>c.target+c.half))+.04];
 const byFront=[...comps].sort((a,b)=>b.z0-a.z0);byFront.forEach((c,i)=>c.order=i/(byFront.length-1));
 let kitOn=false,kitState=-1;
 // A scene change (model lens ↔ engineered lens) counts as on screen only when the GPU has finished the first
 // frame drawn after it; the page keeps its black cover up until then (see settled()).
 const swap={pending:false,fence:null,since:0};
 function afterMainRender(){
  if(!swap.pending||swap.fence)return;const gl=product.renderer.getContext();
  if(!gl.fenceSync){swap.pending=false;return}swap.fence=gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE,0);gl.flush();
 }
 function settled(){
  if(!swap.pending)return true;const gl=product.renderer.getContext();
  if(swap.fence){const state=gl.clientWaitSync(swap.fence,0,0);if(state===gl.ALREADY_SIGNALED||state===gl.CONDITION_SATISFIED){gl.deleteSync(swap.fence);swap.fence=null;swap.pending=false;return true}}
  if(performance.now()-swap.since>1500){if(swap.fence)gl.deleteSync(swap.fence);swap.fence=null;swap.pending=false;return true} // never hold the page hostage
  product.invalidate?.();return false;
 }
 function setKit(on,e){
  if(on!==kitOn){kitOn=on;kit.visible=on;for(const o of originals)o.mesh.visible=on?false:o.vis0;kitState=-1;swap.pending=true;swap.since=performance.now();product.invalidate?.()}
  if(!on||Math.abs(e-kitState)<1e-6)return;kitState=e;
  for(const c of comps){const t=smoother(clamp01((e-c.order*.34)/.66));c.group.position.z=(c.target-c.zc)*t} // straight along the shared axis: nothing turns
 }
 const compByName=re=>comps.find(c=>re.test(c.name));
 const anchorOf=re=>{const c=compByName(re);return c?(side='above')=>[AX,AY+(side==='below'?-1:1)*Math.max(c.radius,1)*1.04,c.zc+c.group.position.z]:null};

 // Studio for the lens: big soft boxes and strip lights, so glass and metal carry real reflections.
 const lensEnv=(()=>{const s=new T.Scene();s.background=new T.Color('#020202');
  // Soft boxes fall off toward their edges, as diffused light does: reflections become gradients, not flat cards.
  const soft=(()=>{const c=window.document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d'),grd=g.createRadialGradient(64,64,0,64,64,90);grd.addColorStop(0,'#fff');grd.addColorStop(.45,'#cfcfcf');grd.addColorStop(1,'#2e2e2e');g.fillStyle=grd;g.fillRect(0,0,128,128);const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;return t})();
  const box=(w,h,pos,power,color='#ffffff')=>{const m=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({color:new T.Color(color).multiplyScalar(power),map:soft,side:T.DoubleSide}));m.position.set(...pos);m.lookAt(0,0,0);s.add(m)};
  box(7,4.5,[-6,7,7],5.2);box(1.3,10,[-8.5,1.5,-3],7,'#edf1ff');box(1.3,10,[8.5,2,-1],5.5,'#fff0de');box(11,1,[0,10,-2],2.2);box(4,2.2,[4,-2,8],1.1,'#ffe5c8');box(40,40,[0,-10,0],.07,'#a07e5c');
  // Large panel in the mirror direction of the glass faces for the three-quarter camera: one clean highlight per element.
  box(5.5,6.5,[9,2.6,6],3.4,'#f4f6ff');box(2.2,6,[2,3,-9],2.4,'#ffe9d2');
  const pm=new T.PMREMGenerator(product.renderer),t=pm.fromScene(s,.012).texture;pm.dispose();return t})();
 // The lens and cinema looks re-aim the projector's own three directional lights instead of adding
 // lights: every material's cost scales with light count, so the scene keeps the original rig size.
 const lensRig=[{position:[-6,8,9],color:'#ffffff',intensity:1.5},{position:[-9,3,-5],color:'#dfe7ff',intensity:2.4},{position:[9,4,-3],color:'#ffe6cc',intensity:1.7}];
 const lensLights=[];

 /* ── Lens render path: HDR multisampled target → depth of field, vignette, dither ──
    Active only while the lens story runs; the runtime's own render loop is otherwise untouched. */
 const post=(()=>{
  const renderer=product.renderer,TAPS=coarse?14:24,size=new T.Vector2();
  const material=new T.ShaderMaterial({defines:{TAPS},
   uniforms:{tColor:{value:null},tDepth:{value:null},uRes:{value:new T.Vector2(1,1)},uFocus:{value:10},uAperture:{value:0},uMaxCoC:{value:8},uNear:{value:.1},uFar:{value:400},uTime:{value:0},uVignette:{value:.3},uGain:{value:1}},
   vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',
   fragmentShader:`uniform sampler2D tColor,tDepth;uniform vec2 uRes;uniform float uFocus,uAperture,uMaxCoC,uNear,uFar,uTime,uVignette,uGain;varying vec2 vUv;
float lin(float d){float z=d*2.-1.;return 2.*uNear*uFar/(uFar+uNear-z*(uFar-uNear));}
float coc(float z){return clamp(uAperture*abs(z-uFocus)/max(z,.001),0.,1.)*uMaxCoC;}
void main(){
 vec3 c0=texture2D(tColor,vUv).rgb;float z0=lin(texture2D(tDepth,vUv).x),k0=coc(z0);vec3 sum=c0;float wsum=1.;
 if(uAperture>.001){for(int i=0;i<TAPS;i++){float fi=float(i)+.5,r=sqrt(fi/float(TAPS))*uMaxCoC,a=fi*2.39996323;
  vec2 uv=vUv+vec2(cos(a),sin(a))*r/uRes;float zs=lin(texture2D(tDepth,uv).x),ks=coc(zs);if(zs>z0)ks=min(ks,k0);
  float w=clamp(ks-r+1.,0.,1.);sum+=texture2D(tColor,uv).rgb*w;wsum+=w;}}
 vec3 col=sum/wsum;vec2 q=vUv-.5;q.x*=uRes.x/uRes.y;col*=mix(1.,smoothstep(1.1,.22,length(q)),uVignette)*uGain;
 gl_FragColor=vec4(col,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 gl_FragColor.rgb+=(fract(sin(dot(gl_FragCoord.xy+fract(uTime)*91.7,vec2(12.9898,78.233)))*43758.5453)-.5)/255.;
}`,depthTest:false,depthWrite:false});
  const quad=new T.Mesh(new T.PlaneGeometry(2,2),material);quad.frustumCulled=false;const qScene=new T.Scene();qScene.add(quad);const qCam=new T.OrthographicCamera(-1,1,1,-1,0,1);
  const base=renderer.render,pr0=renderer.getPixelRatio(),exposure0=renderer.toneMappingExposure,trs0=renderer.transmissionResolutionScale??1;
  let rt=null,on=false,broken=false,prTarget=pr0,prNow=pr0,ema=16,slow=0,fast=0,last=0,msaa=2,locked=false;
  renderer.render=function(sc,camera){
   if(sc!==scene&&sc!==qScene)adoptPass(sc,camera);
   if(!on||broken||sc!==scene||renderer.getRenderTarget()!==null){const direct=sc===scene&&renderer.getRenderTarget()===null;base.call(this,sc,camera);if(direct)afterMainRender();return}
   try{
    renderer.getDrawingBufferSize(size);const w=size.x|0,h=size.y|0;
    if(!rt||rt.width!==w||rt.height!==h){rt?.dispose();rt=new T.WebGLRenderTarget(w,h,{type:T.HalfFloatType,samples:msaa,depthTexture:new T.DepthTexture(w,h)})}
    renderer.setRenderTarget(rt);base.call(this,sc,camera);renderer.setRenderTarget(null);
    const u=material.uniforms;u.tColor.value=rt.texture;u.tDepth.value=rt.depthTexture;u.uRes.value.set(w,h);u.uNear.value=camera.near;u.uFar.value=camera.far;u.uMaxCoC.value=(coarse?5:8)*prNow/1.5;
    base.call(this,qScene,qCam);afterMainRender();
   }catch(error){broken=true;console.warn('Lens render path disabled:',error);renderer.setRenderTarget(null);base.call(this,sc,camera)}
  };
  function set(next){
   if(next===on)return;on=next;
   if(on){prTarget=Math.min(window.devicePixelRatio||1,coarse?1.5:2);prNow=locked?prNow:Math.min(prTarget,1.5);if(renderer.getPixelRatio()!==prNow)renderer.setPixelRatio(prNow);if('transmissionResolutionScale' in renderer)renderer.transmissionResolutionScale=.8;renderer.toneMappingExposure=exposure0*1.06;ema=16;slow=fast=0}
   else{if(renderer.getPixelRatio()!==pr0)renderer.setPixelRatio(pr0);if('transmissionResolutionScale' in renderer)renderer.transmissionResolutionScale=trs0;renderer.toneMappingExposure=exposure0}
  }
  // Adaptive resolution: step the pixel ratio down when frames run long, back up when there is headroom.
  function tick(now){
   material.uniforms.uTime.value=now/1000;if(!on||locked){last=0;return}
   const dt=last?now-last:16;last=now;if(dt>120)return;ema+=(dt-ema)*.08;
   if(ema>21){slow++;fast=0}else if(ema<14.2){fast++;slow=0}else slow=fast=0;
   if(slow>45&&prNow>1.25){prNow=Math.max(1.25,prNow-.25);renderer.setPixelRatio(prNow);slow=0;ema=16}
   else if(fast>150&&prNow<prTarget){prNow=Math.min(prTarget,prNow+.25);renderer.setPixelRatio(prNow);fast=0}
  }
  // tune(): benchmarking/quality hook — pin the pixel ratio, change DOF taps or transmission scale.
  function tune({pr,taps,trs,samples}={}){if(pr){locked=true;prNow=pr;if(on)renderer.setPixelRatio(pr)}if(pr===0)locked=false;if(taps){material.defines.TAPS=taps;material.needsUpdate=true}if(trs)renderer.transmissionResolutionScale=trs;if(samples!==undefined){msaa=samples;rt?.dispose();rt=null}}
  // Allocate the HDR target while the page is idle, so switching the lens path on never stalls a frame.
  function prewarm(){try{renderer.getDrawingBufferSize(size);const w=size.x|0,h=size.y|0;if(w<2||h<2)return;if(!rt||rt.width!==w||rt.height!==h){rt?.dispose();rt=new T.WebGLRenderTarget(w,h,{type:T.HalfFloatType,samples:msaa,depthTexture:new T.DepthTexture(w,h)})}const prev=renderer.getRenderTarget();renderer.setRenderTarget(rt);renderer.clear();renderer.setRenderTarget(prev)}catch(e){}}
  (window.requestIdleCallback||setTimeout)(prewarm,{timeout:3000});
  return {scene:qScene,camera:qCam,set,tick,tune,prewarm,gain:g=>{material.uniforms.uGain.value=g},focus:(f,a)=>{material.uniforms.uFocus.value=f;material.uniforms.uAperture.value=a},get pixelRatio(){return prNow},get on(){return on},get target(){return rt}};
 })();
 /* ── The runtime's floor reflection ──
    Each frame the runtime draws a mirrored, simplified copy of the projector into a small target, blurs it and
    pastes it over the finished picture. Two corrections, made on the passes as the runtime hands them over:
    - the paste goes *behind* what is already drawn (weighted by the frame's remaining transparency), so the
      blur can no longer spill onto the product's own lower edge: unnoticeable on graphite, a grey smudge on
      porcelain;
    - the mirrored copy follows the finish, so a porcelain projector does not cast a graphite reflection. */
 // The front panel is unlit, so the lens story's dimmed studio never reached it: this gain lowers it with the rig.
 const photoGain={value:1};
 const reflection={scene:null,parts:[],light:null};
 function adoptPass(sc,camera){
  if(sc.userData.xgAdopted){if(sc===reflection.scene)tintReflection();return}
  sc.userData.xgAdopted=true;const target=product.renderer.getRenderTarget();
  if(target!==null&&camera===product.camera){ // the mirrored copy
   const byGeometry=new Map();model.traverse(o=>{if(o.isMesh&&!byGeometry.has(o.geometry))byGeometry.set(o.geometry,o.name)});
   reflection.scene=sc;sc.traverse(o=>{if(!o.isMesh||!o.material?.color)return;const name=byGeometry.get(o.geometry)||'';
    if(/^(Cast_rounded|Front_black)/.test(name))reflection.parts.push({m:o.material,dark:o.material.color.clone(),map:o.material.map,light:new T.Color(name.startsWith('Cast')?'#cdc8bf':'#dedbd4')})});
   tintReflection();
  }else if(target===null){ // the paste
   sc.traverse(o=>{const m=o.isMesh&&o.material;if(!m||!m.isShaderMaterial||!/c\.rgb\/max\(c\.a/.test(m.fragmentShader))return;
    m.fragmentShader=m.fragmentShader.replace(/gl_FragColor=vec4\(c\.rgb\/max\(c\.a,\.001\),c\.a\);/,'gl_FragColor=c;'); // keep the blurred target premultiplied
    m.blending=T.CustomBlending;m.blendSrc=m.blendSrcAlpha=T.OneMinusDstAlphaFactor;m.blendDst=m.blendDstAlpha=T.OneFactor;m.needsUpdate=true});
  }
 }
 function tintReflection(){
  const fx=product.finishFX,light=!!fx&&(fx.mode==='b'||fx.mode==='wipe'&&fx.seamPast>.5);
  if(light===reflection.light)return;reflection.light=light;
  for(const p of reflection.parts){p.m.color.copy(light?p.light:p.dark);const map=light?null:p.map;if(p.m.map!==map){p.m.map=map;p.m.needsUpdate=true}}
 }
 // Refraction stays physical (three's transmission), but the glass only needs to refract the lens parts and
 // the backdrop: during that extra pass the projector body is skipped (draw count 0), which removes the
 // cost of rendering 1.6M triangles twice. The body still renders normally in the main pass.
 model.traverse(o=>{
  if(!o.isMesh)return;let p=o;while(p&&p!==kit)p=p.parent;if(p===kit)return;
  const before=o.onBeforeRender,after=o.onAfterRender;
  o.onBeforeRender=function(r,sc,cam,geo,m,g){before.call(this,r,sc,cam,geo,m,g);const target=r.getRenderTarget();if(post.on&&target&&target!==post.target&&sc===scene){this.__skip=geo.drawRange.count;geo.drawRange.count=0}};
  o.onAfterRender=function(r,sc,cam,geo,m,g){if(this.__skip!==undefined){geo.drawRange.count=this.__skip;this.__skip=undefined}after.call(this,r,sc,cam,geo,m,g)};
 });

 /* ── Finishes for the portable design: materials only (twins share the geometry) ──
    The model is textured from two product photographs: a front view on the front panel and lens, and a
    three-quarter view on the enclosure. A finish therefore cannot be one recolour: every physical
    component is handled on its own. Porcelain changes the enclosure, the front panel, the titanium trims
    and the top surface; the lens assembly, sensor, lettering ink, vents, feet and ports keep their own
    materials. */
 (()=>{
  // clone() drops shader hooks, and the model's scoped parts shape themselves in onBeforeCompile (the cast
  // shell is cut around the aperture there), so every variant runs the source hook first, then its own.
  const variant=(src,tag,extra)=>{const m=src.clone(),hook=src.onBeforeCompile,key=src.customProgramCacheKey();const base=unlitBase.get(src);if(base)m.color.copy(base); // never inherit a dimmed colour
   
   m.onBeforeCompile=(sh,r)=>{hook.call(src,sh,r);extra?.(sh)};m.customProgramCacheKey=()=>'xgimi-porcelain-'+tag+'|'+key;return m};
  const maxAniso=product.renderer.capabilities.getMaxAnisotropy();
  const sm=(a,b,v)=>{const t=Math.min(1,Math.max(0,(v-a)/(b-a)));return t*t*(3-2*t)};

  /* Front panel image for a finish, built from the front photograph at twice its resolution.
     - lettering: found by local contrast against the panel around it (so soft reflections are never mistaken
       for print), then re-inked crisply;
     - sensor window and lens surround: the photograph's own pixels, masked to their exact shapes;
     - panel: the finish colour with baked studio shading (light from above, the lens and sensor seated in
       soft contact shadow, a shallow falloff at the edge). */
  function panelJob(mesh,finish){
   let tex=null;const img=mesh.material.map.image;const it=(function*(){
   const g=mesh.geometry,uv=g.attributes.uv,pos=g.attributes.position,p=new T.Vector3();
   let u0=1,u1=0,v0=1,v1=0,x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;
   for(let i=0;i<uv.count;i++){const u=uv.getX(i),v=uv.getY(i);p.fromBufferAttribute(pos,i).applyMatrix4(mesh.matrixWorld);
    if(u<u0)u0=u;if(u>u1)u1=u;if(v<v0)v0=v;if(v>v1)v1=v;if(p.x<x0)x0=p.x;if(p.x>x1)x1=p.x;if(p.y<y0)y0=p.y;if(p.y>y1)y1=p.y}
   const W=img.width,H=img.height,rx=Math.round(u0*W),ry=Math.round((1-v1)*H),rw=Math.round((u1-u0)*W),rh=Math.round((v1-v0)*H),S=2,cw=rw*S,ch=rh*S;
   const c=window.document.createElement('canvas');c.width=cw;c.height=ch;const ctx=c.getContext('2d',{willReadFrequently:true});
   ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';ctx.drawImage(img,rx,ry,rw,rh,0,0,cw,ch);
   const im=ctx.getImageData(0,0,cw,ch),a=im.data,n=cw*ch,L=new Float32Array(n);
   for(let i=0,k=0;i<n;i++,k+=4)L[i]=(.2126*a[k]+.7152*a[k+1]+.0722*a[k+2])/255;
   yield;
   // Model coordinates of every column and row.
   const WX=new Float32Array(cw),WY=new Float32Array(ch);for(let X=0;X<cw;X++)WX[X]=x0+(X/cw)*(x1-x0);for(let Y=0;Y<ch;Y++)WY[Y]=y1-(Y/ch)*(y1-y0);
   // Sensor window: the dense near-black capsule on the right of the panel, found in the photograph itself
   // (rows and columns that are mostly dark; stray dark pixels around the lettering do not count).
   const X0=Math.max(0,Math.round((1.5-x0)/(x1-x0)*cw)),X1=Math.min(cw,Math.round((3-x0)/(x1-x0)*cw)),Y0=Math.max(0,Math.round((y1-2.5)/(y1-y0)*ch)),Y1=Math.min(ch,Math.round((y1-1.5)/(y1-y0)*ch));
   const rows=new Uint16Array(ch),cols=new Uint16Array(cw);let rmax=0,cmax=0;
   for(let Y=Y0;Y<Y1;Y++)for(let X=X0;X<X1;X++)if(L[Y*cw+X]<.045){rows[Y]++;cols[X]++}
   for(let Y=Y0;Y<Y1;Y++)if(rows[Y]>rmax)rmax=rows[Y];for(let X=X0;X<X1;X++)if(cols[X]>cmax)cmax=cols[X];
   let sx0=-1,sx1=-1,sy0=-1,sy1=-1;
   for(let Y=Y0;Y<Y1;Y++)if(rows[Y]>rmax*.5){if(sy0<0)sy0=Y;sy1=Y}
   for(let X=X0;X<X1;X++)if(cols[X]>cmax*.5){if(sx0<0)sx0=X;sx1=X}
   const has=rmax>20&&sx1>sx0,scx=(sx0+sx1)/2,scy=(sy0+sy1)/2,shx=(sx1-sx0)/2+S,sr=(sy1-sy0)/2+S,reach=60*S;
   // distance outside the sensor window in photo pixels (large when nowhere near it)
   const pill=(X,Y)=>{const ax=Math.abs(X-scx),ay=Math.abs(Y-scy);if(!has||ax>shx+reach||ay>sr+reach)return 1e3;const dx=Math.max(0,ax-(shx-sr));return (Math.sqrt(dx*dx+ay*ay)-sr)/S};
   yield;
   // Local panel tone: the 20th-percentile luminance of each cell (print covers well under a fifth of one),
   // measured on the panel only: the lens and the sensor window are left out, and cells they cover take
   // their tone from neighbours. The grid is then upscaled by the canvas (bilinear) to a per-pixel map.
   const cell=48,gw=Math.ceil(cw/cell),gh=Math.ceil(ch/cell),G=new Float32Array(gw*gh).fill(-1),hist=new Uint16Array(128);
   for(let gy=0;gy<gh;gy++)for(let gx=0;gx<gw;gx++){hist.fill(0);let cnt=0;const ye=Math.min(ch,(gy+1)*cell),xe=Math.min(cw,(gx+1)*cell);
    for(let Y=gy*cell;Y<ye;Y+=2){const dy=WY[Y]-AXIS_Y;for(let X=gx*cell;X<xe;X+=2){const dx=WX[X]-AXIS_X;if(dx*dx+dy*dy<1.61||pill(X,Y)<4)continue;hist[Math.min(127,L[Y*cw+X]*128|0)]++;cnt++}}
    if(cnt<cell*cell/16)continue;let acc=0,k=0;while(k<127&&(acc+=hist[k])<cnt*.2)k++;G[gy*gw+gx]=(k+.5)/128}
   for(let pass=0,open=true;open&&pass<gw+gh;pass++){open=false;const N=G.slice();
    for(let gy=0;gy<gh;gy++)for(let gx=0;gx<gw;gx++){if(G[gy*gw+gx]>=0)continue;let sum=0,c2=0;
     for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const nx=gx+dx,ny=gy+dy;if(nx>=0&&ny>=0&&nx<gw&&ny<gh&&G[ny*gw+nx]>=0){sum+=G[ny*gw+nx];c2++}}
     if(c2)N[gy*gw+gx]=sum/c2;else open=true}
    G.set(N)}
   yield;
   const gc=window.document.createElement('canvas');gc.width=gw;gc.height=gh;const gx2=gc.getContext('2d'),gi=gx2.createImageData(gw,gh);
   for(let i=0;i<gw*gh;i++){const v=Math.round(Math.max(0,G[i])*255);gi.data[i*4]=gi.data[i*4+1]=gi.data[i*4+2]=v;gi.data[i*4+3]=255}gx2.putImageData(gi,0,0);
   const bc=window.document.createElement('canvas');bc.width=cw;bc.height=ch;const bx=bc.getContext('2d',{willReadFrequently:true});bx.imageSmoothingEnabled=true;bx.imageSmoothingQuality='low'; // plain bilinear is what is wanted, and it is fast
   bx.drawImage(gc,0,0,gw,gh,0,0,gw*cell,gh*cell);const BG=bx.getImageData(0,0,cw,ch).data;
   yield;
   const porcelain=finish==='porcelain',base=[231,229,224],ink=[26,26,28],cxw=(x0+x1)/2,cyw=(y0+y1)/2,hw=(x1-x0)/2,hh=(y1-y0)/2,cr=.52;
   for(let Y=0,i=0,k=0;Y<ch;Y++){if(Y&&Y%220===0)yield;const y=WY[Y],ty=Y/ch,dyl=y-AXIS_Y,qy=Math.abs(y-cyw)-(hh-cr);for(let X=0;X<cw;X++,i++,k+=4){
    const x=WX[X],dxl=x-AXIS_X,rl=Math.sqrt(dxl*dxl+dyl*dyl),e=pill(X,Y);
    // The sensor window (with its chamfer highlight) keeps the photograph. The lens opening is a hole in the
    // panel, so it is painted through: dark lens pixels left there would bleed out under texture filtering.
    const keep=e<1.4?1:e<2.6?1-sm(1.4,2.6,e):0;
    if(keep>=1)continue;
    // distance inside the panel's rounded outline, in model units
    const qx=Math.abs(x-cxw)-(hw-cr),inside=cr-(Math.sqrt(Math.max(qx,0)**2+Math.max(qy,0)**2)+Math.min(Math.max(qx,qy),0));
    const d=L[i]-BG[k]/255,print=d>.12&&inside>.1?sm(.12,.27,d)*sm(.1,.2,inside)*(1-keep):0;
    if(!porcelain){ // graphite: the photograph, with its blotchy mottling calmed and its lettering sharpened
     if(inside>.06&&rl>1.2&&L[i]>.004){const t=BG[k]/255,f=(t+(L[i]-t)*.4)/L[i],w=(1-keep)*sm(.06,.14,inside)*(1-sm(.05,.12,d));
      a[k]+=(Math.min(255,a[k]*f)-a[k])*w;a[k+1]+=(Math.min(255,a[k+1]*f)-a[k+1])*w;a[k+2]+=(Math.min(255,a[k+2]*f)-a[k+2])*w}
     if(d>.2){const m=sm(.2,.44,d)*sm(.1,.2,inside)*(1-keep)*.8;a[k]+=(224-a[k])*m;a[k+1]+=(222-a[k+1])*m;a[k+2]+=(216-a[k+2])*m} // stroke cores only: the type keeps its weight
     continue}
    let shade=1-.075*ty*ty-.012*(x-cxw)/hw;                              // light from above, a touch more on the left
    if(rl<1.9)shade*=1-.1*Math.exp(-Math.max(0,rl-1.2)/.13);             // the lens barrel seats in a soft shadow
    if(e<16)shade*=1-.2*Math.exp(-Math.max(0,e)/2.4);                    // so does the sensor window
    if(inside<.4)shade*=1-.07*Math.exp(-Math.max(0,inside)/.07);         // shallow falloff into the surround
    const o=1-keep,q=1-print;
    a[k]+=(base[0]*shade*q+ink[0]*print-a[k])*o;a[k+1]+=(base[1]*shade*q+ink[1]*print-a[k+1])*o;a[k+2]+=(base[2]*shade*q+ink[2]*print-a[k+2])*o}}
   yield;ctx.putImageData(im,0,0);
   const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;t.anisotropy=maxAniso;
   t.repeat.set(1/(u1-u0),1/(v1-v0));t.offset.set(-u0/(u1-u0),-v0/(v1-v0)); // the panel's UVs address this region of the photograph
   tex=t;
   })();
   // step(): one slice of the work, true while there is more; texture(): the result, finishing the work if needed.
   const step=()=>{if(!tex)it.next();return !tex};
   return {step,texture(){while(step());return tex}};
  }

  // Enclosure: the baked photograph remapped by luminance, so the porcelain keeps the studio light and shade.
  // The range stops short of pure white (nothing clips) and near-black recesses, vents and cavities stay dark.
  const porcelainBake=src=>variant(src,'bake',sh=>{sh.fragmentShader=sh.fragmentShader.replace('#include <map_fragment>','#include <map_fragment>\n{float L=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));float t=pow(clamp(L/.17,0.,1.),.66);vec3 p=mix(vec3(.3,.295,.285),vec3(.8,.795,.778),t);diffuseColor.rgb=mix(diffuseColor.rgb,p,smoothstep(.0035,.012,L));}')});
  // Speaker fabric: the weave keeps its contrast, lifted to a light warm grey.
  const porcelainFabric=src=>{const m=variant(src,'fabric',sh=>{sh.fragmentShader=sh.fragmentShader.replace('#include <map_fragment>','#include <map_fragment>\n{float L=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));diffuseColor.rgb=mix(vec3(.3,.295,.285),vec3(.76,.752,.735),clamp(L/.22,0.,1.));}')});return m};
  const tint=(src,color,roughness,metalness)=>{const m=variant(src,'tint');m.color=new T.Color(color);if(roughness!==undefined)m.roughness=roughness;if(metalness!==undefined)m.metalness=metalness;return m};
  // The photographs are seen at glancing angles all the time: anisotropic filtering keeps them sharp there.
  const photos=new Set();model.traverse(o=>{const m=o.isMesh&&!Array.isArray(o.material)&&o.material;if(m&&m.map&&m.map.image&&m.map.image.width>=1024)photos.add(m.map)});
  for(const t of photos)if(t.anisotropy<maxAniso){t.anisotropy=maxAniso;t.needsUpdate=true}
  // Which meshes change with the finish, and how. Their original materials are armed for the seam now, at
  // load; the twins themselves (and the 2.6 M-pixel panel image) are built later, in idle slices.
  const parts=[];
  model.traverse(o=>{
   if(!o.isMesh||Array.isArray(o.material))return;let q=o;while(q&&q!==kit)q=q.parent;if(q===kit)return;
   // One "satin titanium" material covers both body-coloured parts and true trim, so parts are sorted by name:
   // on a porcelain unit the shells, grilles and rear tray are painted, and only the front collar stays metal.
   const m=o.material,n=o.name,kind=/^(Cast_rounded_enclosure|Front_outer_highlight|Rear_titanium_surround|Rear_IO_tray_border)$/.test(n)&&m.map?'enclosure'
    :n==='Front_black_inset'&&m.map?'panel'
    :/^(Scoped_cast_rounded_shell|Perforated_speaker_grille|Speaker_panel_edge|Rear_IO_recessed_tray|Scoped_rear_upper_tray_shoulder)/.test(n)?'body'
    :/^(Front_titanium_collar|Fit_continuous_collar_shoulder|Scoped_front_collar_side_wall|Fit_frontal_collar_bevel)/.test(n)?'trim'
    :/top graphite/i.test(m.name||'')?'top'
    :/acoustic fabric/i.test(m.name||'')&&m.map?'fabric'
    :/^Speaker_inner_backing/.test(n)?'backing'
    :n==='Top logo'&&m.map?'legend':null; // the one light print that lands on porcelain; rear legends sit in the black connector bay
   if(kind)parts.push({mesh:o,kind});
  });
  /* ── Brand ── The product photographs carry the maker's name as pixels. The front panel's wordmark is
     painted out (the panel's own tone, sampled above and below it) and the XGIMI wordmark set in its place,
     at the same height and left edge, in the photograph's own ink colour; the top logo is redrawn. Every later
     step (panel images for both finishes, the lens parts that share this photograph) starts from the result. */
  const WORDMARK={w:350,h:64,paths:['M0 0h21l13 23-6 6L0 0zM72 0H51L38 23l6 6L72 0zM0 64h21l13-23-6-6L0 64zM72 64H51L38 41l6-6L72 64zM32 29h8l3 3-3 3h-8l-3-3z','M84 0h14v64H84z','M150 0c-23 0-40 12-40 32s17 32 40 32h37V29h-40v12h26v10h-23c-16 0-26-7-26-19s10-19 26-19h37V0zM200 0h14v64h-14zM228 64V0h17l30 38L305 0h17v64h-14V20l-33 41-33-41v44zM336 0h14v64h-14z']};
  // Draws the XGIMI wordmark into a 2D context: left edge x, top y, cap height h.
  const drawWordmark=(ctx,x,y,h,color)=>{ctx.save();ctx.translate(x,y);ctx.scale(h/WORDMARK.h,h/WORDMARK.h);ctx.fillStyle=color;for(const d of WORDMARK.paths)ctx.fill(new window.Path2D(d));ctx.restore()};
  product.renderer.domElement.setAttribute('aria-label','3D model of the XGIMI Portable projector');
  (()=>{
   const pm=parts.find(p=>p.kind==='panel');if(!pm)return;const tex=pm.mesh.material.map,im=tex.image;if(!im||!im.width)return;
   const g=pm.mesh.geometry,uv=g.attributes.uv,pos=g.attributes.position,v=new T.Vector3();let a0=null,a1=null;
   for(let i=0;i<uv.count;i++){v.fromBufferAttribute(pos,i).applyMatrix4(pm.mesh.matrixWorld);const q={x:v.x,y:v.y,u:uv.getX(i),v:uv.getY(i)};if(!a0||q.x<a0.x)a0=q;if(!a1||q.x>a1.x)a1=q}
   let b0=null,b1=null;for(let i=0;i<uv.count;i++){v.fromBufferAttribute(pos,i).applyMatrix4(pm.mesh.matrixWorld);const q={y:v.y,v:uv.getY(i)};if(!b0||q.y<b0.y)b0=q;if(!b1||q.y>b1.y)b1=q}
   const W=im.width,H=im.height,X=x=>(a0.u+(x-a0.x)*(a1.u-a0.u)/(a1.x-a0.x))*W,Y=y=>(1-(b0.v+(y-b0.y)*(b1.v-b0.v)/(b1.y-b0.y)))*H;
   const c=window.document.createElement('canvas');c.width=W;c.height=H;const ctx=c.getContext('2d',{willReadFrequently:true});ctx.drawImage(im,0,0);
   // search window around the old wordmark (model units), then its exact bounds from the bright pixels
   const x0=Math.floor(X(-2.86)),x1=Math.ceil(X(-1.9)),y0=Math.floor(Y(3.02)),y1=Math.ceil(Y(2.68)),w=x1-x0,h=y1-y0;if(w<8||h<8)return;
   const d=ctx.getImageData(x0,y0,w,h),p=d.data,L=i=>(.2126*p[i]+.7152*p[i+1]+.0722*p[i+2])/255;
   let base=0;for(let x=0;x<w;x++)base+=L(x*4)+L(((h-1)*w+x)*4);base/=2*w;
   let lx0=w,lx1=0,ly0=h,ly1=0,ink=[0,0,0],n=0;
   for(let y=0;y<h;y++)for(let x=0;x<w;x++){const i=(y*w+x)*4,l=L(i);if(l>base+.16){if(x<lx0)lx0=x;if(x>lx1)lx1=x;if(y<ly0)ly0=y;if(y>ly1)ly1=y}if(l>base+.45){ink[0]+=p[i];ink[1]+=p[i+1];ink[2]+=p[i+2];n++}}
   if(lx1<=lx0||!n)return;
   // paint the old mark out: each column blends the panel tone just above the window into the tone just below it
   for(let x=0;x<w;x++){const t=x*4,b=((h-1)*w+x)*4;for(let y=1;y<h-1;y++){const i=(y*w+x)*4,k=y/(h-1);for(let ch=0;ch<3;ch++)p[i+ch]=p[t+ch]*(1-k)+p[b+ch]*k}}
   ctx.putImageData(d,x0,y0);
   drawWordmark(ctx,x0+lx0,y0+ly0,ly1-ly0+1,`rgb(${ink.map(q=>Math.round(q/n)).join(',')})`);
   tex.image=c;tex.needsUpdate=true;
  })();
  model.traverse(o=>{ // the small logo on the top surface
   if(o.name!=='Top logo'||!o.material?.map?.image?.getContext)return;const c=o.material.map.image,ctx=c.getContext('2d');
   ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,c.width,c.height);const h=c.height*.2,w=h*WORDMARK.w/WORDMARK.h;drawWordmark(ctx,(c.width-w)/2,c.height*.5-h/2,h,'#a2a096');o.material.map.needsUpdate=true});
  const panel=parts.find(p=>p.kind==='panel'),job=panel?panelJob(panel.mesh,'porcelain'):null;
  if(panel){
   // The front panel is an unlit photograph, so on its own it never answers the camera. A faint gloss does:
   // the reflection of one broad softbox, weighted by Fresnel, drifting across the face as the view moves.
   const m=panel.mesh.material,gloss=(add,mul)=>sh=>{sh.uniforms.uXgGloss={value:new T.Vector2(add,mul)};sh.uniforms.uXgGain=photoGain;
    sh.vertexShader='varying vec3 vXgW;varying vec3 vXgN;\n'+sh.vertexShader.replace('#include <project_vertex>','vXgW=(modelMatrix*vec4(transformed,1.)).xyz;vXgN=normalize(mat3(modelMatrix)*normal);\n#include <project_vertex>');
    sh.fragmentShader='uniform vec2 uXgGloss;uniform float uXgGain;varying vec3 vXgW;varying vec3 vXgN;\n'+sh.fragmentShader.replace('#include <map_fragment>','#include <map_fragment>\n{vec3 V=normalize(cameraPosition-vXgW);vec3 N=normalize(vXgN);if(dot(N,V)<0.)N=-N;vec3 R=reflect(-V,N);float fres=.45+3.2*pow(1.-clamp(dot(N,V),0.,1.),3.);float band=exp(-pow((R.x+.16)/.36,2.))*smoothstep(-.4,.45,R.y)*fres;diffuseColor.rgb=(diffuseColor.rgb*(1.+uXgGloss.y*(band-.35))+vec3(1.,.985,.955)*uXgGloss.x*band)*uXgGain;}')};
   m.onBeforeCompile=gloss(.014,0);m.customProgramCacheKey=()=>'xgimi-panel-gloss';m.needsUpdate=true;
   // Graphite panel image, built in idle slices after load, then swapped in (same photograph, cleaner surface).
   const g=panelJob(panel.mesh,'graphite'),idle=fn=>'requestIdleCallback' in window?window.requestIdleCallback(fn,{timeout:2500}):window.setTimeout(fn,120);
   const tick=()=>{if(g.step())idle(tick);else{m.map=g.texture();product.invalidate?.()}};idle(tick);
  }
  // Titanium trims: a slightly tighter highlight, so edges read as machined metal rather than paint.
  for(const p of parts)if((p.kind==='trim'||p.kind==='body')&&!p.mesh.material.userData.xgTrim){const m=p.mesh.material;m.userData.xgTrim=true;m.roughness=Math.max(.3,m.roughness-.05);if('clearcoat' in m){m.clearcoat=.14;m.clearcoatRoughness=.3}m.envMapIntensity=1.18}
  product.finishFX?.arm(parts.map(p=>p.mesh.material));
  product.finishFX?.later(()=>{
   const made=new Map();
   return parts.map(({mesh,kind})=>{const m=mesh.material,key=kind+m.uuid;let w=made.get(key);
    if(!w){
     if(kind==='enclosure')w=porcelainBake(m);
     else if(kind==='panel'){w=variant(m,'panel',sh=>{sh.uniforms.uXgGloss={value:new T.Vector2(0,.05)}});w.map=job.texture()} // same gloss, as shading rather than added light
     else if(kind==='body'){w=tint(m,'#e4e1da',.5,.05);if('clearcoat' in w){w.clearcoat=.06;w.clearcoatRoughness=.45}w.envMapIntensity=.9;if(w.emissive)w.emissiveIntensity=.2} // painted, not metal: it must stay light in shadow
     else if(kind==='trim')w=tint(m,'#cdc8bf',.32,.72);
     else if(kind==='fabric')w=porcelainFabric(m);
     else if(kind==='legend'){w=variant(m,'ink');w.color=new T.Color('#2a2a2c')}
     else if(kind==='backing'){w=variant(m,'cloth');w.color=new T.Color('#8f8a83')} // grey cloth behind the white grille: black here turns the perforation into moiré at small sizes
     else w=tint(m,'#e6e3dd',.5,0);
     made.set(key,w)}
    return {mesh,material:w}});
  },()=>job?job.step():false);
 })();

 /* ── Cinema set ─────────────────────────────────────────────────────── */
 const cinema=new T.Group();cinema.visible=false;scene.add(cinema);
 const SCREEN={w:30,h:30*941/1672,y:9.4,z:46};
 const radial=(inner,outer)=>{const c=window.document.createElement('canvas');c.width=c.height=256;const g=c.getContext('2d'),grd=g.createRadialGradient(128,128,0,128,128,128);grd.addColorStop(0,inner);grd.addColorStop(.35,inner.replace(/[\d.]+\)$/,m=>(parseFloat(m)*.45)+')'));grd.addColorStop(1,outer);g.fillStyle=grd;g.fillRect(0,0,256,256);const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;return t};
 const glowTex=radial('rgba(255,236,206,1)','rgba(255,236,206,0)');
 // The floor fades out radially, so the set never shows an edge against the graphite background.
 const fade=(()=>{const c=window.document.createElement('canvas');c.width=c.height=256;const g=c.getContext('2d'),grd=g.createRadialGradient(128,128,0,128,128,128);grd.addColorStop(0,'#fff');grd.addColorStop(.55,'#8a8a8a');grd.addColorStop(1,'#000');g.fillStyle=grd;g.fillRect(0,0,256,256);return new T.CanvasTexture(c)})();
 const floorMat=new T.MeshStandardMaterial({color:'#151311',roughness:.86,metalness:0,transparent:true,opacity:0,alphaMap:fade,depthWrite:false});
 const floor=new T.Mesh(new T.PlaneGeometry(110,130),floorMat);floor.rotation.x=-Math.PI/2;floor.position.set(0,-.004,24);floor.renderOrder=-1;cinema.add(floor);
 /* The screen is a fixed-frame projection screen hung a little off a plaster wall: a matte surface in a slim
    black aluminium frame. Its light does what light from a real screen does: it falls off toward the corners of
    the fabric, washes the wall behind the frame, and comes back off the floor as a soft, stretched reflection. */
 const FRAME={w:.26,d:.34,off:.62};
 const surf={value:1},lit={value:0},room={value:0},screenMap={value:null};
 const maskMat=new T.MeshBasicMaterial({color:'#030303',fog:false,toneMapped:false,transparent:true,opacity:0});
 const mask=new T.Mesh(new T.PlaneGeometry(SCREEN.w+FRAME.w*2-.04,SCREEN.h+FRAME.w*2-.04),maskMat);mask.position.set(0,SCREEN.y,SCREEN.z+FRAME.d-.05);mask.rotation.y=Math.PI;cinema.add(mask);
 const screenMat=new T.MeshBasicMaterial({color:'#000000',fog:false,toneMapped:false});
 screenMat.onBeforeCompile=sh=>{sh.uniforms.uSurf=surf;const uv='vMapUv';
  sh.fragmentShader='uniform float uSurf;\n'+sh.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
  #ifdef USE_MAP
  {vec2 q=${uv}-.5;float fall=1.-uSurf*.5*dot(q,q);vec2 w=${uv}*vec2(1500.,844.);float fine=smoothstep(1.4,.35,fwidth(w.x));
   float weave=sin(w.x*3.14159)*sin(w.y*3.14159)*.022*fine*uSurf;
   diffuseColor.rgb=diffuseColor.rgb*fall*(1.+weave)+diffuse*uSurf*vec3(.016,.014,.012);}
  #endif`)};
 const screenMesh=new T.Mesh(new T.PlaneGeometry(SCREEN.w,SCREEN.h),screenMat);screenMesh.position.set(0,SCREEN.y,SCREEN.z);screenMesh.rotation.y=Math.PI;cinema.add(screenMesh);
 const frameMat=new T.MeshStandardMaterial({color:'#0b0b0c',roughness:.52,metalness:.7});
 const frame=new T.Group();cinema.add(frame);
 {const bar=(w,h,x,y)=>{const m=new T.Mesh(new T.BoxGeometry(w,h,FRAME.d),frameMat);m.position.set(x,SCREEN.y+y,SCREEN.z-.07+FRAME.d/2);frame.add(m)},W=SCREEN.w,H=SCREEN.h,f=FRAME.w;
  bar(W+2*f,f,0,H/2+f/2);bar(W+2*f,f,0,-H/2-f/2);bar(f,H,-W/2-f/2,0);bar(f,H,W/2+f/2,0);}
 const WALL_Z=SCREEN.z+FRAME.off;
 const setShader=(vertex,fragment,extra={})=>new T.ShaderMaterial({uniforms:{uLit:lit,uRoom:room,uMap:screenMap,uHalf:{value:new T.Vector2(SCREEN.w/2,SCREEN.h/2)},uC:{value:new T.Vector3(0,SCREEN.y,SCREEN.z)},...extra},vertexShader:vertex,fragmentShader:fragment,transparent:true,depthWrite:false,fog:false,toneMapped:false});
 // Wall: the background tone, plus the screen's spill. The frame stands off the wall, so the wall is darkest
 // right behind the frame edge and the glow blooms a little further out, warmer low down where the dunes are.
 const haloMat=setShader('varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}',
  `uniform float uLit,uRoom;uniform vec2 uHalf;uniform vec3 uC;varying vec3 vW;
  float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
  void main(){vec2 p=vW.xy-uC.xy,e=abs(p)-uHalf;float d=length(max(e,0.))+min(max(e.x,e.y),0.);
   float gap=smoothstep(.05,1.,d);float glow=(.2*exp(-max(d,0.)/2.2)+.075*exp(-max(d,0.)/8.))*gap;
   float low=smoothstep(uHalf.y,-uHalf.y,p.y);vec3 tint=mix(vec3(.62,.6,.78),vec3(1.,.62,.33),low*.85+.1);
   float plaster=.9+.2*n(vW.xy*1.7)+.08*n(vW.xy*9.);
   vec3 col=vec3(.0033)+tint*glow*uLit*plaster*.5*(smoothstep(-.2,2.2,vW.y)*.45+.55);
   gl_FragColor=vec4(col,uRoom);
   #include <colorspace_fragment>
  }`);
 const halo=new T.Mesh(new T.PlaneGeometry(700,300),haloMat);halo.position.set(0,150,WALL_Z);halo.rotation.y=Math.PI;halo.renderOrder=-2;cinema.add(halo);
 // Floor: a satin surface. Each point mirrors the wall point its view ray bounces to; where that lands on the
 // screen it shows the film, blurred more the further the bounce travels, and strongest at grazing angles.
 const spillMat=setShader('varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}',
  `uniform float uLit,uRoom;uniform vec2 uHalf;uniform vec3 uC;uniform sampler2D uMap;uniform float uHasMap;varying vec3 vW;
  vec3 film(vec2 q){vec2 uv=vec2(.5-q.x/(2.*uHalf.x),.5+q.y/(2.*uHalf.y));vec2 e=abs(q)-uHalf;float inside=1.-smoothstep(-.6,.25,max(e.x,e.y));
   vec3 c=uHasMap>.5?texture2D(uMap,clamp(uv,.002,.998)).rgb:vec3(.5,.36,.25);return c*inside;}
  void main(){vec3 v=normalize(vW-cameraPosition);vec3 r=vec3(v.x,-v.y,v.z);if(r.z<=.0001)discard;
   float t=(uC.z-vW.z)/r.z;vec3 hit=vW+r*t;vec2 q=hit.xy-uC.xy;float blur=.22+t*.05;vec3 acc=vec3(0.);
   for(int i=0;i<20;i++){float fi=float(i)+.5,a=fi*2.39996,rad=sqrt(fi/20.);acc+=film(q+vec2(cos(a)*.7,sin(a)*1.7)*rad*blur);}
   acc/=20.;float fres=.05+.95*pow(1.-max(-v.y,0.),5.);float reach=exp(-t*.016);
   float diffuse=.022*exp(-length(vec2(vW.x*.6,(uC.z-vW.z)))/11.);
   vec3 col=acc*fres*reach*.8+vec3(1.,.66,.4)*diffuse;
   float edge=smoothstep(0.,6.,uC.z+${FRAME.off.toFixed(2)}-vW.z)*.25+.75;
   gl_FragColor=vec4(col*uLit*uRoom*edge,1.);
   #include <colorspace_fragment>
  }`,{uHasMap:{value:0}});
 spillMat.blending=T.AdditiveBlending;
 const spill=new T.Mesh(new T.PlaneGeometry(150,70),spillMat);spill.rotation.x=-Math.PI/2;spill.position.set(0,.012,WALL_Z-35);cinema.add(spill);
 // Where wall meets floor: a thin dark shadow line, so the room has a corner rather than a horizon.
 const skirt=new T.Mesh(new T.PlaneGeometry(700,.5),new T.MeshBasicMaterial({color:'#000000',transparent:true,opacity:0,fog:false,toneMapped:false,depthWrite:false}));skirt.position.set(0,.25,WALL_Z-.02);skirt.rotation.y=Math.PI;skirt.renderOrder=-1;cinema.add(skirt);
 let screenTexture=null;
 function setScreenImage(url){if(!url||screenTexture)return;screenTexture=new T.TextureLoader().load(url,t=>{t.colorSpace=T.SRGBColorSpace;t.anisotropy=product.renderer.capabilities.getMaxAnisotropy();product.renderer.initTexture?.(t);screenMat.map=t;screenMat.needsUpdate=true;if(!screenMap.value){screenMap.value=t;spillMat.uniforms.uHasMap.value=1}})}
 // The film itself: the page's own <video> (the same element that becomes the full-screen film) drives the
 // screen, so the projected picture and the hand-off are one continuous piece of footage. The still poster
 // stays on the screen until the video has a frame to show.
 let screenVideo=null;
 function setScreenVideo(video){
  if(!video||screenVideo)return;screenVideo=video;
  const attach=()=>{const t=T.VideoTexture?new T.VideoTexture(video):new T.Texture(video);t.colorSpace=T.SRGBColorSpace;t.generateMipmaps=false;t.minFilter=t.magFilter=T.LinearFilter;
   if(!T.VideoTexture){const tick=()=>{t.needsUpdate=true;video.requestVideoFrameCallback?.(tick)};video.requestVideoFrameCallback?.(tick)}
   product.renderer.initTexture?.(t);screenMat.map=t;screenMat.needsUpdate=true;screenMap.value=t;spillMat.uniforms.uHasMap.value=1}; // upload now, not on the first lit frame
  if(video.readyState>=2)attach();else video.addEventListener('loadeddata',attach,{once:true});
 }

 // Projected beam: a soft frustum from the exit pupil to the screen, shaded as a thin volume.
 const lensFront=new T.Vector3(AXIS_X,AXIS_Y,2.14);
 const aperture=[[-.27,.16],[.27,.16],[.27,-.16],[-.27,-.16]].map(([x,y])=>new T.Vector3(AXIS_X+x,AXIS_Y+y,lensFront.z));
 const corners=[[-1,1],[1,1],[1,-1],[-1,-1]].map(([x,y])=>new T.Vector3(x*SCREEN.w/2,SCREEN.y+y*SCREEN.h/2,SCREEN.z-.08));
 const beamGeo=(()=>{const g=new T.BufferGeometry(),pos=[],ab=[],idx=[],L=48,S=12;let base=0;
  for(let f=0;f<4;f++){const a0=aperture[f],a1=aperture[(f+1)%4],b0=corners[f],b1=corners[(f+1)%4];
   for(let i=0;i<=L;i++){const v=i/L;for(let j=0;j<=S;j++){const u=j/S,p=a0.clone().lerp(a1,u).lerp(b0.clone().lerp(b1,u),v);pos.push(p.x,p.y,p.z);ab.push(u,v)}}
   for(let i=0;i<L;i++)for(let j=0;j<S;j++){const k=base+i*(S+1)+j;idx.push(k,k+S+1,k+1,k+1,k+S+1,k+S+2)}base+=(L+1)*(S+1)}
  g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('aB',new T.Float32BufferAttribute(ab,2));g.setIndex(idx);g.computeVertexNormals();return g})();
 const beamMat=new T.ShaderMaterial({
  uniforms:{uPower:{value:0},uReach:{value:0},uTime:{value:0},uNear:{value:new T.Color('#fff4e2')},uFar:{value:new T.Color('#f2b37c')}},
  vertexShader:'attribute vec2 aB;varying vec2 vB;varying vec3 vN;varying vec3 vV;varying vec3 vW;void main(){vB=aB;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;vN=normalize(mat3(modelMatrix)*normal);vV=cameraPosition-w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}',
  fragmentShader:'uniform float uPower,uReach,uTime;uniform vec3 uNear,uFar;varying vec2 vB;varying vec3 vN;varying vec3 vV;varying vec3 vW;'+
   'float h(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}float n3(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(h(i),h(i+vec3(1,0,0)),f.x),mix(h(i+vec3(0,1,0)),h(i+vec3(1,1,0)),f.x),f.y),mix(mix(h(i+vec3(0,0,1)),h(i+vec3(1,0,1)),f.x),mix(h(i+vec3(0,1,1)),h(i+vec3(1,1,1)),f.x),f.y),f.z);}'+
   'void main(){float u=vB.x,v=vB.y;float edge=smoothstep(0.,.42,u)*smoothstep(1.,.58,u);float face=pow(abs(dot(normalize(vN),normalize(vV))),1.15);'+
   'float reach=smoothstep(uReach+.002,uReach-.07,v);float fall=mix(1.,.2,pow(v,.6))*smoothstep(0.,.025,v);'+
   'float dust=.78+.22*n3(vW*.75+vec3(0.,uTime*.06,uTime*.035))+.08*n3(vW*3.1-vec3(uTime*.1));'+
   'float a=uPower*edge*face*reach*fall*dust*.3;gl_FragColor=vec4(mix(uNear,uFar,smoothstep(0.,1.,v)),a);}',
  transparent:true,depthWrite:false,blending:T.AdditiveBlending,side:T.DoubleSide,fog:false,toneMapped:false});
 const beam=new T.Mesh(beamGeo,beamMat);beam.visible=false;beam.renderOrder=3;cinema.add(beam);
 // Lens power-on: an exit-pupil glow, a soft camera-facing flare and an emissive front element.
 const pupilMat=new T.MeshBasicMaterial({map:glowTex,color:'#ffe9c9',blending:T.AdditiveBlending,transparent:true,opacity:0,depthWrite:false,fog:false,toneMapped:false});
 const pupil=new T.Mesh(new T.CircleGeometry(.62,64),pupilMat);pupil.position.set(AXIS_X,AXIS_Y,1.53);pupil.visible=false;model.add(pupil);
 const flareMat=new T.SpriteMaterial({map:glowTex,color:'#ffe6c4',blending:T.AdditiveBlending,transparent:true,opacity:0,depthWrite:false,fog:false,toneMapped:false});
 const flare=new T.Sprite(flareMat);flare.position.copy(lensFront).add(new T.Vector3(0,0,.12));flare.scale.set(2.8,2.8,1);flare.visible=false;model.add(flare);

 /* ── Darkness: dim the studio rig and fog, restore it exactly afterwards. ── */
 const rig=[],directional=[];scene.traverse(o=>{if(o.isLight){const entry={light:o,intensity:o.intensity,color:o.color.clone(),position:o.position.clone()};rig.push(entry);if(o.isDirectionalLight)directional.push(entry)}});
 const cinemaRig=[{position:[0,SCREEN.y,SCREEN.z],color:'#f1b07a'},{position:[-9,8,-12],color:'#aebcd8'}];
 // Stories render over an opaque graphite backdrop: glass then refracts darkness (a transparent canvas
 // makes transmissive glass composite as a pale, additive disc), and the amber glow lives in the frame.
 /* ── Into the lens ──
    The camera's last metres are a straight push along the optical axis. The lens centre is measured from
    the model's own front element, and a black iris anchored there (drawn over everything, so it grows in
    true perspective with the push) spreads from the pupil until the whole frame is black. Scenes change
    only behind that black. */
 const lensCenter=(()=>{const g=frontGlass.mesh;if(!g)return [AXIS_X,AXIS_Y,1.5];g.geometry.computeBoundingBox();const b=g.geometry.boundingBox.clone().applyMatrix4(g.matrixWorld);return [(b.min.x+b.max.x)/2,(b.min.y+b.max.y)/2,b.max.z+.012]})();
 const shadeMat=new T.ShaderMaterial({uniforms:{uR:{value:0}},
  vertexShader:'varying vec2 vP;void main(){vP=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:'uniform float uR;varying vec2 vP;void main(){float r=length(vP);gl_FragColor=vec4(0.,0.,0.,1.-smoothstep(uR,uR+.1+.42*uR,r));}',
  transparent:true,depthTest:false,depthWrite:false,fog:false,toneMapped:false});
 const shade=new T.Mesh(new T.CircleGeometry(4.2,96),shadeMat);shade.position.set(...lensCenter);shade.renderOrder=999;shade.frustumCulled=false;shade.visible=false;shade.name='Lens shade';scene.add(shade);
 // The enclosure and front panel are unlit photographs: lights cannot dim them, so their colour is scaled
 // instead when the lens studio fades up from darkness.
 const unlit=[];model.traverse(o=>{if(!o.isMesh)return;let q=o;while(q&&q!==kit)q=q.parent;if(q===kit)return;
  for(const m of (Array.isArray(o.material)?o.material:[o.material]))if(m&&m.isMeshBasicMaterial&&m.color&&!unlit.some(u=>u.m===m))unlit.push({m,base:m.color.clone()})});
 const unlitBase=new Map(unlit.map(u=>[u.m,u.base]));
 let bodyGain=1;const setBodyGain=g=>{if(Math.abs(g-bodyGain)<1e-4)return;bodyGain=g;for(const u of unlit)u.m.color.copy(u.base).multiplyScalar(g)};
 const backdrops=[null,(()=>{const c=window.document.createElement('canvas');c.width=512;c.height=320;const g=c.getContext('2d');g.fillStyle='#0a0a0a';g.fillRect(0,0,512,320);const grd=g.createRadialGradient(300,166,0,300,166,290);grd.addColorStop(0,'rgba(226,188,150,.3)');grd.addColorStop(.28,'rgba(212,163,115,.12)');grd.addColorStop(.58,'rgba(212,163,115,.03)');grd.addColorStop(1,'rgba(212,163,115,0)');g.fillStyle=grd;g.fillRect(0,0,512,320);const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;return t})(),new T.Color('#0b0b0b')];
 const envMap0=scene.environment,env0=scene.environmentIntensity??1,fog0=scene.fog?{color:scene.fog.color.clone(),near:scene.fog.near,far:scene.fog.far}:null,fogDark=new T.Color('#0b0b0b');
 const glassEmissive=frontGlass?{color:frontGlass.mesh.material.emissive.clone(),intensity:frontGlass.mesh.material.emissiveIntensity}:null;
 const cam=product.camera,camDir=new T.Vector3();
 const state={explode:0,spin:0,dark:0,power:0,reach:0,screen:0,beam:1,backdrop:0,kit:false,focus:10,aperture:0,iris:0,reveal:1,surface:1};
 function update(next){
  Object.assign(state,next);
  const bg=backdrops[state.backdrop|0]??null;if(scene.background!==bg)scene.background=bg;
  setKit(state.kit,state.explode);post.set(state.kit);post.focus(state.focus,state.aperture);
  const d=state.dark,studio=state.kit?1-d:0;
  // Lens reveal (0 = darkness, 1 = the full studio): the rims find the edges first, then the environment and
  // the key light; the projector body comes up last. A master dimmer on the render path holds true black at 0.
  const rv=state.kit?clamp01(state.reveal??1):1,stage=(a,b)=>rv>=1?1:smooth(a,b,rv);
  post.gain(state.kit?stage(0,.3):1);setBodyGain(state.kit?stage(.45,1):1);
  if('backgroundIntensity' in scene)scene.backgroundIntensity=state.kit?stage(.3,1):1;
  const ir=state.kit?0:state.iris||0;shade.visible=ir>.002;shadeMat.uniforms.uR.value=ir;
  photoGain.value=state.kit?state.panel??.34:1; // the front panel's print stays in shadow in the lens studio (and darker still behind the intro copy)
  for(const r of rig){r.light.position.copy(r.position);r.light.color.copy(r.color);r.light.intensity=r.intensity*(1-.84*d)*(state.kit?.38*stage(.3,1):1)}
  if(state.kit)directional.forEach((r,i)=>{const l=lensRig[i];if(!l)return;r.light.position.set(...l.position);r.light.color.set(l.color);r.light.intensity=l.intensity*studio*(i===0?stage(.35,1):i===1?stage(0,.55):stage(.1,.65))});
  else if(d>.003)directional.forEach((r,i)=>{const c=cinemaRig[i];if(!c)return;r.light.position.set(...c.position);r.light.color.set(c.color);r.light.intensity=i===0?1.5*state.screen*d:.75*d});
  const env=state.kit?lensEnv:envMap0;if(scene.environment!==env)scene.environment=env;
  scene.environmentIntensity=env0*(1-.78*d)*(state.kit?Math.pow(stage(.15,1),1.5):1);
  if(fog0){scene.fog.color.copy(fog0.color).lerp(fogDark,d);scene.fog.near=fog0.near+40*d;scene.fog.far=fog0.far+190*d}
  cinema.visible=d>.003;floorMat.opacity=d;maskMat.opacity=d;
  const s=state.screen;screenMat.color.setScalar(s*.98);lit.value=s;room.value=d;surf.value=state.surface??1;skirt.material.opacity=.55*d;
  const p=state.power;
  pupil.visible=flare.visible=p>.002;pupilMat.opacity=.9*p;
  camDir.copy(cam.position).sub(lensFront).normalize();
  flareMat.opacity=p*.75*smooth(-.1,.85,camDir.z);
  if(frontGlass&&glassEmissive){const m=frontGlass.mesh.material;if(p>.002){m.emissive.set('#ffe6c0');m.emissiveIntensity=1.3*p}else{m.emissive.copy(glassEmissive.color);m.emissiveIntensity=glassEmissive.intensity}}
  beam.visible=p>.002&&state.reach>.002&&state.beam>.002;beamMat.uniforms.uPower.value=p*state.beam;beamMat.uniforms.uReach.value=state.reach;
 }
 // Warm every shader variant the stories need, in the background: the scene renders tone-mapped to the
 // screen normally but linear into the HDR target during the lens story, so each material has two programs.
 (()=>{const r=product.renderer;if(!r.compileAsync)return;const warm=new T.WebGLRenderTarget(4,4,{type:T.HalfFloatType}),prev=r.getRenderTarget(),k=kit.visible,c=cinema.visible;
  kit.visible=cinema.visible=shade.visible=true;const jobs=[];
  try{r.setRenderTarget(warm);jobs.push(r.compileAsync(scene,product.camera));r.setRenderTarget(prev);jobs.push(r.compileAsync(scene,product.camera),r.compileAsync(post.scene,post.camera))}catch(e){r.setRenderTarget(prev)}
  kit.visible=k;cinema.visible=c;shade.visible=false;
  // Once compiled, draw the scene once into a tiny target with the lens kit and cinema set visible: this uploads
  // their geometry and textures (and sizes the transmission buffer) while idle, not on the first story frame.
  Promise.allSettled(jobs).then(()=>(window.requestIdleCallback||setTimeout)(()=>{try{const k2=kit.visible,c2=cinema.visible,before=r.getRenderTarget();kit.visible=cinema.visible=shade.visible=true;r.setRenderTarget(warm);r.render(scene,product.camera);r.setRenderTarget(before);kit.visible=k2;cinema.visible=c2;shade.visible=shadeMat.uniforms.uR.value>.002}catch(e){}warm.dispose()},{timeout:4000}));})();
 function reset(){update({explode:0,spin:0,dark:0,power:0,reach:0,screen:0,beam:1,backdrop:0,kit:false,aperture:0,iris:0,reveal:1})}
 return {
  update,reset,settled,setScreenImage,setScreenVideo,lensCenter,columnSpan:span,screen:{...SCREEN},post,_debug:{kit,comps,mat,rig,scene},axis:[AXIS_X,AXIS_Y],lensFront:lensFront.toArray(),
  anchors:{lip:anchorOf(/^Polished outer lip/),focus:anchorOf(/^Knurled/),copper:anchorOf(/^Copper/),cone:anchorOf(/^Coated inner cone/),front:anchorOf(/^Convex front/),iris:anchorOf(/^Nine-blade iris/),doublet:anchorOf(/^Cemented doublet/),meniscus:anchorOf(/^Coated meniscus/),barrel:anchorOf(/^Middle barrel/),field:anchorOf(/^Field/)},
  tick(now){beamMat.uniforms.uTime.value=now/1000;post.tick(now)},
 };
})();

document.addEventListener('visibilitychange',()=>{dirtyUntil=performance.now()+1500;});

};