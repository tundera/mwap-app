(()=>{"use strict";var x={4314:(n,o,e)=>{var t=e(2685);console.log("Hello from custom client entrypoint!"),(0,t.Z)()},1483:(n,o,e)=>{e.r(o),e.d(o,{default:()=>d});var t=e(1995),c=e(6335);const l=(0,c.D8)(()=>e.e(372).then(e.bind(e,9190)),{__chunkId:"pages_about_tsx"});function a(p){return t.createElement(l,p)}const m=(0,c.D8)(()=>e.e(646).then(e.bind(e,8412)),{__chunkId:"pages_home_tsx"});function i(p){return t.createElement(m,p)}const u=(0,c.D8)(()=>Promise.all([e.e(216),e.e(183)]).then(e.bind(e,2967)),{__chunkId:"pages_teams_tsx"});function s(p){return t.createElement(u,p)}const d=[{component:i,exact:!0,path:"/"},{component:a,path:"/about"},{component:s,path:"/teams"}]},3974:(n,o,e)=>{e.r(o),e.d(o,{default:()=>j});var t=e(1995),c=e(9640),l=e(7978),a=e(8521),m=e(7432),i=e(4704),u=e(6520),s=e(2813),d=e(3392),p=e(606),h=e(1784),f=e(6851),g=e(2153),w=e(835),C=e(9384),O=e(2896),y=e(7097),b=e(3151);function T(){const E=(0,i.useColorModeValue)("gray.800","white"),v=(0,u.q)(),{toggleColorMode:z}=(0,i.useColorMode)(),M=(0,i.useColorModeValue)("dark","light"),U=(0,i.useColorModeValue)("white","gray.800"),S=(0,i.useColorModeValue)(y.TLr,y.Mei);return t.createElement(t.Fragment,null,t.createElement(i.chakra.header,{bg:E,w:"full",px:{base:2,sm:4},py:4,shadow:"md",color:U},t.createElement(a.k,{alignItems:"center",justifyContent:"space-between",mx:"auto"},t.createElement(a.k,null,t.createElement(s.r,{href:"/",title:"Mwap App Home Page",display:"flex",alignItems:"center",mx:"4",_hover:{color:"#61dbfb"},_focus:{color:"#61dbfb"}},t.createElement(y.huN,{size:"32"}),t.createElement(d.TX,null,"mwap")),t.createElement(p.X,{as:"h1",fontSize:"2xl",fontWeight:"bold"},"mwap")),t.createElement(h.Ug,{display:"flex",alignItems:"center",spacing:1},t.createElement(h.Ug,{spacing:1,mr:1,display:{base:"none",md:"inline-flex"}},t.createElement(f.z,{as:b.rU,to:"/",variant:"ghost",color:"current",_hover:{color:"#61dbfb"},_focus:{color:"#61dbfb"}},"Home"),t.createElement(f.z,{as:b.rU,to:`/about?message=${encodeURI("Test Message From Search")}`,variant:"ghost",color:"current",_hover:{color:"#61dbfb"},_focus:{color:"#61dbfb"}},"About"),t.createElement(f.z,{as:b.rU,to:"/teams",variant:"ghost",color:"current",_hover:{color:"#61dbfb"},_focus:{color:"#61dbfb"}},"Teams")),t.createElement(g.h,{size:"md",fontSize:"lg","aria-label":`Switch to ${M} mode`,variant:"ghost",color:"current",ml:{base:"0",md:"3"},onClick:z,icon:t.createElement(S,null)}),t.createElement(w.xu,{display:{base:"inline-flex",md:"none"}},t.createElement(g.h,{display:{base:"flex",md:"none"},"aria-label":"Open menu",fontSize:"20px",color:(0,i.useColorModeValue)("gray.800","inherit"),variant:"ghost",icon:t.createElement(O.qTj,null),onClick:v.onOpen}),t.createElement(h.gC,{pos:"absolute",top:0,left:0,right:0,display:v.isOpen?"flex":"none",flexDirection:"column",p:2,pb:4,m:2,bg:E,spacing:3,rounded:"sm",shadow:"sm"},t.createElement(C.P,{"aria-label":"Close menu",onClick:v.onClose}),t.createElement(f.z,{as:b.rU,to:"/",w:"full",variant:"ghost"},"Home"),t.createElement(f.z,{as:b.rU,to:`/about?message=${encodeURI("Test Message From Search")}`,w:"full",variant:"ghost"},"About"),t.createElement(f.z,{as:b.rU,to:"/teams",w:"full",variant:"ghost"},"Teams")))))))}const j=({children:E})=>{const{title:v}=(0,m.U2)("app-shell",{});return t.createElement(l.x,null,t.createElement(m.pU,null),t.createElement(c.q,{htmlAttributes:{lang:"en"},defaultTitle:"@mwap minimal example",titleTemplate:"%s | @mwap minimal example"},t.createElement("meta",{name:"description",content:"A minimal example demonstrating the @mwap framework."}),t.createElement("meta",{charSet:"UTF-8"}),t.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),t.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),t.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),t.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),t.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),t.createElement("link",{rel:"manifest",href:"/site.webmanifest"})),t.createElement(T,null),t.createElement(a.k,{direction:"column",alignItems:"center",justifyContent:"center",w:"full",minH:"100vh"},t.createElement("h1",null,v),t.createElement(t.Suspense,{fallback:""},E)))}}},k={};function r(n){var o=k[n];if(o!==void 0)return o.exports;var e=k[n]={id:n,loaded:!1,exports:{}};return x[n](e,e.exports,r),e.loaded=!0,e.exports}r.m=x,(()=>{var n=[];r.O=(o,e,t,c)=>{if(e){c=c||0;for(var l=n.length;l>0&&n[l-1][2]>c;l--)n[l]=n[l-1];n[l]=[e,t,c];return}for(var a=Infinity,l=0;l<n.length;l++){for(var[e,t,c]=n[l],m=!0,i=0;i<e.length;i++)(c&!1||a>=c)&&Object.keys(r.O).every(h=>r.O[h](e[i]))?e.splice(i--,1):(m=!1,c<a&&(a=c));m&&(n.splice(l--,1),o=t())}return o}})(),(()=>{r.n=n=>{var o=n&&n.__esModule?()=>n.default:()=>n;return r.d(o,{a:o}),o}})(),(()=>{r.d=(n,o)=>{for(var e in o)r.o(o,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:o[e]})}})(),(()=>{r.f={},r.e=n=>Promise.all(Object.keys(r.f).reduce((o,e)=>(r.f[e](n,o),o),[]))})(),(()=>{r.u=n=>""+n+"."+{"183":"e5a7eb4f61e16ff4d482","372":"eb78d81d663265b255b1","646":"571e64a0a7c51d8ae35a"}[n]+".js"})(),(()=>{r.miniCssF=n=>{}})(),(()=>{r.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(n){if(typeof window=="object")return window}}()})(),(()=>{r.o=(n,o)=>Object.prototype.hasOwnProperty.call(n,o)})(),(()=>{var n={},o="mwap-app:";r.l=(e,t,c,l)=>{if(n[e]){n[e].push(t);return}var a,m;if(c!==void 0)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var s=i[u];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+c){a=s;break}}a||(m=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",o+c),a.src=e),n[e]=[t];var d=(h,f)=>{a.onerror=a.onload=null,clearTimeout(p);var g=n[e];if(delete n[e],a.parentNode&&a.parentNode.removeChild(a),g&&g.forEach(w=>w(f)),h)return h(f)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),m&&document.head.appendChild(a)}})(),(()=>{r.r=n=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}})(),(()=>{r.nmd=n=>(n.paths=[],n.children||(n.children=[]),n)})(),(()=>{r.p="/.mwap/"})(),(()=>{var n={179:0};r.f.j=(t,c)=>{var l=r.o(n,t)?n[t]:void 0;if(l!==0)if(l)c.push(l[2]);else{var a=new Promise((s,d)=>l=n[t]=[s,d]);c.push(l[2]=a);var m=r.p+r.u(t),i=new Error,u=s=>{if(r.o(n,t)&&(l=n[t],l!==0&&(n[t]=void 0),l)){var d=s&&(s.type==="load"?"missing":s.type),p=s&&s.target&&s.target.src;i.message="Loading chunk "+t+` failed.
(`+d+": "+p+")",i.name="ChunkLoadError",i.type=d,i.request=p,l[1](i)}};r.l(m,u,"chunk-"+t,t)}},r.O.j=t=>n[t]===0;var o=(t,c)=>{var[l,a,m]=c,i,u,s=0;for(i in a)r.o(a,i)&&(r.m[i]=a[i]);for(m&&m(r),t&&t(c);s<l.length;s++)u=l[s],r.o(n,u)&&n[u]&&n[u][0](),n[l[s]]=0;r.O()},e=self.webpackChunkmwap_app=self.webpackChunkmwap_app||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))})();var _=r.O(void 0,[216],()=>r(4314));_=r.O(_)})();
