"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3013],{9335:function(e,t,l){var o=l(2739),r=l(1376),n=l(4354),a=l(4132),s=l(9847),c=l(5783),i=l(9039),b=l(2010),d=l(1372);const u=(0,l(2810).mi)([-73.98189,40.76805]),p="rgba(120, 120, 120, 1)",f="Columbus Circle";let g=null;const w=(e,t,l,o)=>{e.fillStyle="rgba(255,0,0,1)",e.strokeStyle=o,e.lineWidth=1,e.textAlign="center",e.textBaseline="middle",e.font="bold 30px verdana",e.filter="drop-shadow(7px 7px 2px #e81)",e.fillText(f,t,l),e.strokeText(f,t,l)},x=new o.Z({geometry:new a.Z(u,50)});x.set("label-color",p),x.setStyle(new i.ZP({renderer(e,t){const[[l,o],[r,n]]=e,a=t.context,s=r-l,c=n-o,i=Math.sqrt(s*s+c*c),b=1.4*i,d=a.createRadialGradient(l,o,0,l,o,b);d.addColorStop(0,"rgba(255,0,0,0)"),d.addColorStop(.6,"rgba(255,0,0,0.2)"),d.addColorStop(1,"rgba(255,0,0,0.8)"),a.beginPath(),a.arc(l,o,i,0,2*Math.PI,!0),a.fillStyle=d,a.fill(),a.strokeStyle="rgba(255,0,0,1)",a.stroke(),w(a,l,o,x.get("label-color"))},hitDetectionRenderer(e,t){const[l,o]=e[0],r=t.context;w(r,l,o,x.get("label-color"))}}));const h=new r.Z({layers:[new b.Z({source:new s.Z,visible:!0}),new d.Z({source:new c.Z({features:[x]})})],target:"map",view:new n.ZP({center:u,zoom:19})});h.on("pointermove",(e=>{const t=h.forEachFeatureAtPixel(e.pixel,(e=>(e.set("label-color","rgba(255,255,255,1)"),e)));g&&g!=t&&g.set("label-color",p),g=t}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(9335)}]);
//# sourceMappingURL=custom-hit-detection-renderer.js.map