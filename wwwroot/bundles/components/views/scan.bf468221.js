"use strict";(self.webpackChunkvueapp=self.webpackChunkvueapp||[]).push([["components/views/scan"],{3977:(e,r,a)=>{var t=a(4783)(e.id,{esModule:!0,locals:!1});e.hot.dispose(t),e.hot.accept(void 0,t)},291:(e,r,a)=>{a.r(r),a.d(r,{default:()=>s});const t={name:"QrScanner",components:{BarcodeStreamer:a(2686).Z},data:()=>({result:"",errorMsg:"",camera:"rear",noRearCamera:!1,noFrontCamera:!1,reader:""}),watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{switchCamera(){switch(this.camera){case"front":this.camera="rear";break;case"rear":this.camera="front"}},async onDecode(e){this.result=e,this.$emit("scanResult",e)},async onInit(e){try{await e}catch(e){"NotAllowedError"===e.name?this.errorMsg="ERROR: you need to grant camera access permisson":"NotFoundError"===e.name?this.errorMsg="ERROR: no camera on this device":"NotSupportedError"===e.name?this.errorMsg="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===e.name?this.errorMsg="ERROR: is the camera already in use?":"OverconstrainedError"===e.name?this.ererrorMsgror="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===e.name&&(this.errorMsg="ERROR: Stream API is not supported in this browser")}}}};a(3977);const s=(0,a(1900).Z)(t,(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("v-layout",{staticClass:"scanPanel",attrs:{fullscreen:"","justify-center":""}},[a("p",{staticClass:"decode-result"},[e._v("Result222: "),a("b",[e._v(e._s(e.result))])]),e._v(" "),a("BarcodeStreamer",{ref:"StreamReader",on:{decode:e.onDecode}})],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=scan.bf468221.js.map