"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6348],{8551:function(e,n,o){var t=o(1376),r=o(9847),s=o(2010),a=o(4354);const c=new t.Z({layers:[new s.Z({source:new r.Z})],target:"map",view:new a.ZP({center:[0,0],zoom:2})}),i=function(){const e='const e=self;e.onmessage=s=>{console.log("version worker received message:",s.data),e.postMessage("version: latest")};';return new Worker("undefined"==typeof Blob?"data:application/javascript;base64,"+Buffer.from(e,"binary").toString("base64"):URL.createObjectURL(new Blob([e],{type:"application/javascript"})))}();i.addEventListener("error",(function(e){console.error("worker error",e)})),i.addEventListener("message",(function(e){console.log("message from worker:",e.data)})),c.on("moveend",(function(e){const n=e.frameState.viewState;i.postMessage({zoom:n.zoom,center:n.center})}))}},function(e){var n=function(n){return e(e.s=n)};n(9877),n(8551)}]);
//# sourceMappingURL=worker.js.map