"use strict";(self.webpackChunkvueapp=self.webpackChunkvueapp||[]).push([["app"],{6308:(e,t,o)=>{var n=o(4783)(e.id,{esModule:!0,locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},8568:(e,t,o)=>{var n=o(538);const r={name:"App",metaInfo:{htmlAttrs:{lang:o(8181).b.language}}};const a=(0,o(1900).Z)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",[t("router-view")],1)}),[],!1,null,null,null).exports;var s=o(5464),i=o.n(s),c=o(2226),l=(o(4495),o(1171)),d=o(5471);n.default.use(i(),{icons:{iconfont:"mdi"},theme:{primary:"#3f51b5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c",light:{primary:"#3f51b5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}},lang:{locales:{enLocale:l.Z,zhLocale:d.Z},current:(0,c.K)(),t:(e,...t)=>c.Z.t(e,t)}});const u=new(i())({icons:{iconfont:"mdi"},theme:{primary:"#3f51b5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c",light:{primary:"#3f51b5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}},lang:{locales:{enLocale:l.Z,zhLocale:d.Z},current:(0,c.K)(),t:(e,...t)=>c.Z.t(e,t)}});var p=o(3468),m=o(5493),g=o(4865),h=o.n(g),E=o(3753);h().configure({showSpinner:!0});const f=["/login","/auth-redirect","/scan"],S=e=>{if(c.Z.te(`route.${e}`)){return`${c.Z.t(`route.${e}`)}`}return""};p.ZP.beforeEach((async(e,t,o)=>{if(h().start(),console.log(e.path),document.title=S(e.meta.title),E.z.token)if("/login"===e.path)h().done(),o({path:"/dashboard"});else if(0===E.z.roles.length)try{await E.z.GetUserInfo(),o({...e,replace:!0})}catch(t){console.log(t),E.z.ResetToken(),o(`/login?redirect=${e.path}`),h().done()}else o();else-1!==f.indexOf(e.path)?o():(h().done(),o(`/login?redirect=${e.path}`))})),p.ZP.afterEach((e=>{h().done(),console.log(e.path),document.title=S(e.meta.title)}));var T=o(4720),b=o.n(T);o(2669),o(6308);n.default.config.productionTip=!0,n.default.use(b(),{i18n:(e,t)=>c.Z.t(e,t)}),n.default.prototype.$notify=T.Notification,n.default.config.productionTip=!0;new n.default({vuetify:u,router:p.ZP,store:m.Z,i18n:c.Z,render:e=>e(a)}).$mount("#app")},3468:(e,t,o)=>{o.d(t,{PV:()=>p,ZP:()=>m});var n=o(538),r=o(8345),a=o(7356),s=o(4155);const i=()=>Promise.all([o.e("styles"),o.e("vendor"),o.e("components/layout")]).then(o.bind(o,3430)),c=r.Z.prototype.push;r.Z.prototype.push=function(e){return c.call(this,e).catch((e=>e))},n.default.use(r.Z),n.default.use(a.Z,{keyName:"metaInfo",refreshOnceOnNavigation:!0});const l=[{path:"/redirect",component:()=>Promise.all([o.e("styles"),o.e("vendor"),o.e("components/layout")]).then(o.bind(o,3430)),meta:{hidden:!0},children:[{path:"/redirect/:path*",component:()=>o.e("components/views/redirect").then(o.bind(o,2057))}]},{path:"/login",name:"PageLogin",component:()=>Promise.all([o.e("styles"),o.e("vendor"),o.e("src_components_Adapter_BarcodeStreamer_vue"),o.e("components/views/login")]).then(o.bind(o,2828)),meta:{hidden:!0,title:"login",metaTags:[{name:"description",content:"The about page of our example app."},{property:"og:description",content:"The about page of our example app."}]}},{path:"/",component:i,redirect:"/login"},{path:"/dashboard",component:i,redirect:"/dashboard/index",children:[{path:"index",component:()=>o.e("components/views/dashboard").then(o.bind(o,2204)),name:"Dashboard",meta:{title:"dashboard",icon:"dashboard",affix:!0,noCache:!0}}]},{path:"*",redirect:"/error/404",meta:{hidden:!0}},{path:"/error",component:i,redirect:"noredirect",meta:{title:"errorPages",icon:"404"},children:[{path:"401",component:()=>o.e("components/views/error-page-401").then(o.bind(o,6223)),name:"Page401",meta:{title:"page401",noCache:!0}},{path:"404",component:()=>o.e("components/views/error-page-404").then(o.bind(o,9031)),name:"Page404",meta:{title:"page404",noCache:!0}}]},{path:"/scan",name:"Scanner",component:()=>Promise.all([o.e("styles"),o.e("vendor"),o.e("src_components_Adapter_BarcodeStreamer_vue"),o.e("components/views/scan")]).then(o.bind(o,291)),meta:{hidden:!0,title:"Scanner"}}],d=()=>new r.Z({mode:"history",scrollBehavior:(e,t,o)=>o||{x:0,y:0},base:s.env.BASE_URL,routes:l}),u=d();function p(){const e=d();u.matcher=e.matcher}const m=u},5493:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(538),r=o(629);const a={sidebar:e=>e.app.sidebar,language:e=>e.app.language,size:e=>e.app.size,device:e=>e.app.device,visitedViews:e=>e.tagsView.visitedViews,cachedViews:e=>e.tagsView.cachedViews,token:e=>e.user.token,avatar:e=>e.user.avatar,name:e=>e.user.name,introduction:e=>e.user.introduction,status:e=>e.user.status,roles:e=>e.user.roles,tagsView:e=>!0};n.default.use(r.ZP);const s=new r.ZP.Store({getters:a})},8181:(e,t,o)=>{o.d(t,{Y:()=>n,b:()=>d});var n,r=o(655),a=o(5546),s=o(1348),i=o(2226),c=o(5493);!function(e){e[e.Mobile=0]="Mobile",e[e.Desktop=1]="Desktop"}(n||(n={}));let l=class extends a.g4{sidebar={opened:"closed"!==(0,s.dd)(),withoutAnimation:!1};device=n.Desktop;language=(0,i.K)();size="medium";TOGGLE_SIDEBAR(e){this.sidebar.opened=!this.sidebar.opened,this.sidebar.withoutAnimation=e,this.sidebar.opened?(0,s.Ue)("opened"):(0,s.Ue)("closed")}CLOSE_SIDEBAR(e){this.sidebar.opened=!1,this.sidebar.withoutAnimation=e,(0,s.Ue)("closed")}TOGGLE_DEVICE(e){this.device=e}SET_LANGUAGE(e){this.language=e,(0,s.m0)(this.language)}SET_SIZE(e){this.size=e}ToggleSideBar(e){this.TOGGLE_SIDEBAR(e)}CloseSideBar(e){this.CLOSE_SIDEBAR(e)}ToggleDevice(e){this.TOGGLE_DEVICE(e)}SetLanguage(e){this.SET_LANGUAGE(e)}SetSize(e){this.SET_SIZE(e)}};(0,r.gn)([a.mm],l.prototype,"TOGGLE_SIDEBAR",null),(0,r.gn)([a.mm],l.prototype,"CLOSE_SIDEBAR",null),(0,r.gn)([a.mm],l.prototype,"TOGGLE_DEVICE",null),(0,r.gn)([a.mm],l.prototype,"SET_LANGUAGE",null),(0,r.gn)([a.mm],l.prototype,"SET_SIZE",null),(0,r.gn)([a.aU],l.prototype,"ToggleSideBar",null),(0,r.gn)([a.aU],l.prototype,"CloseSideBar",null),(0,r.gn)([a.aU],l.prototype,"ToggleDevice",null),(0,r.gn)([a.aU],l.prototype,"SetLanguage",null),(0,r.gn)([a.aU],l.prototype,"SetSize",null),l=(0,r.gn)([(0,a.Yl)({dynamic:!0,store:c.Z,name:"app"})],l);const d=(0,a.rT)(l)},3753:(e,t,o)=>{o.d(t,{z:()=>p});var n=o(655),r=o(5546),a=o(5493),s=o(3468),i=o(9669);const c=o.n(i)().create({baseURL:"https://uatapi.twin2u.com",timeout:5e3});c.interceptors.request.use((e=>(e||(e={}),e.headers||(e.headers={}),p.token&&(e.headers["X-Access-Token"]=p.token),e)),(e=>Promise.reject(e))),c.interceptors.response.use((e=>{e.data;return e}),(e=>(console.log(e.response.status),console.log(e.message),Promise.reject(e))));const l=c;var d=o(1348);let u=class extends r.g4{token=(0,d.LP)()||"";name="";status="";avatar="";introduction="";roles="";email="";SET_TOKEN(e){this.token=e}SET_NAME(e){this.name=e}SET_STATUS(e){this.status=e}SET_AVATAR(e){this.avatar=e}SET_INTRODUCTION(e){this.introduction=e}SET_ROLES(e){this.roles=e}SET_EMAIL(e){this.email=e}async Login(e){let{username:t,password:o}=e;t=t.trim();try{const{data:e}=await(e=>l({url:"/Login/Login2",method:"post",data:e}))({Username:t,SecretKey:o,SecureTokenId:"1A553669"});return(0,d.o4)(e.Token),this.SET_TOKEN(e.Token),this.SET_NAME(e.UserName),{result:!0,message:""}}catch(e){return{result:!1,message:e.message}}}ResetToken(){this.SET_TOKEN(""),this.SET_ROLES("")}async GetUserInfo(){if(""===this.token)throw Error("GetUserInfo: token is undefined!");const e={roles:"Admin",name:"Demo",avatar:"",introduction:"",email:""};if(!e)throw Error("Verification failed, please Login again.");const{roles:t,name:o,avatar:n,introduction:r,email:a}=e;if(!t||t.length<=0)throw Error("GetUserInfo: roles must be a non-null array!");this.SET_ROLES(t),this.SET_NAME(o),this.SET_AVATAR(n),this.SET_INTRODUCTION(r),this.SET_EMAIL(a)}async LogOut(){if(""===this.token)throw Error("LogOut: token is undefined!");(0,d.gy)(),(0,s.PV)(),this.SET_TOKEN("")}};(0,n.gn)([r.mm],u.prototype,"SET_TOKEN",null),(0,n.gn)([r.mm],u.prototype,"SET_NAME",null),(0,n.gn)([r.mm],u.prototype,"SET_STATUS",null),(0,n.gn)([r.mm],u.prototype,"SET_AVATAR",null),(0,n.gn)([r.mm],u.prototype,"SET_INTRODUCTION",null),(0,n.gn)([r.mm],u.prototype,"SET_ROLES",null),(0,n.gn)([r.mm],u.prototype,"SET_EMAIL",null),(0,n.gn)([r.aU],u.prototype,"Login",null),(0,n.gn)([r.aU],u.prototype,"ResetToken",null),(0,n.gn)([r.aU],u.prototype,"GetUserInfo",null),(0,n.gn)([r.aU],u.prototype,"LogOut",null),u=(0,n.gn)([(0,r.Yl)({dynamic:!0,store:a.Z,name:"user"})],u);const p=(0,r.rT)(u)},1348:(e,t,o)=>{o.d(t,{G3:()=>c,LP:()=>u,Ue:()=>s,dd:()=>a,gy:()=>m,m0:()=>l,o4:()=>p});var n=o(1955);const r="sidebar_status",a=()=>n.Z.get(r),s=e=>n.Z.set(r,e),i="language",c=()=>n.Z.get(i),l=e=>n.Z.set(i,e),d="token",u=()=>n.Z.get(d),p=e=>n.Z.set(d,e),m=()=>n.Z.remove(d)},1171:(e,t,o)=>{o.d(t,{Z:()=>n});const n={route:{login:"Login",dashboard:"Dashboard",errorPages:"Error",page401:"Error 401",page404:"Error 404",photos:"Photos",logout:"Logout",purchasing:{text:"Purchasing",product:"Product Management",plan:"Purchase Plan",order:"Purchase Order",quotation:"Quotation Request",invoice:"Purchase Invoice",vendor:"Vendor Management"},production:{text:"Production",bom:"Bill of Material (BOM)",defect:"Defect Management",process:"Process Management",job:"Job Order"},sales:{text:"Sales",quotation:"Sales Quotation",order:"Sales Order",document:"Sales Documents",customer:"Customer Management"},inventory:{text:"Inventory",adjustment:"Inventory Adjustment",location:"Location Management",transfer:"Transfer Document",item:"Item Management"},manufacturing:{text:"Manufacturing"},settings:{text:"Settings"}},message:{success:"Success",warning:"Warning",info:"Info",username:"Username",password:"Password",login:"Login"},required:{username:"Required Username",password:"Required Password",minCharacters:"Min {0} characters"},general:{close:"Close",closeAll:"Close All",closeOthers:"Close Others",refresh:"Refresh"},el:{table:{sumText:"Summary"}}}},2226:(e,t,o)=>{o.d(t,{K:()=>l,Z:()=>d});var n=o(538),r=o(7152),a=o(1348),s=o(1171),i=o(5471);n.default.use(r.Z);const c={en:{...s.Z},zh:{...i.Z}},l=()=>{const e=(0,a.G3)();return e||"en"},d=new r.Z({locale:l(),messages:c})},5471:(e,t,o)=>{o.d(t,{Z:()=>n});const n={route:{login:"登入",dashboard:"仪表板",errorPages:"错误",page401:"错误 401",page404:"错误 404",photos:"照片",logout:"登出",purchasing:{text:"购买",product:"产品管理",plan:"采购计划",order:"采购订单",quotation:"报价请求",invoice:"采购发票",vendor:"供应商管理"},production:{text:"生产",bom:"物料清单 (BOM)",defect:"缺陷管理",process:"流程管理",job:"工作订单"},sales:{text:"销售",quotation:"销售报价",order:"销售订单",document:"销售文件",customer:"客户管理"},inventory:{text:"库存",adjustment:"库存调整",location:"位置管理",transfer:"移交文件",item:"物品管理"},manufacturing:{text:"制造业"},settings:{text:"设置"}},message:{success:"成功",warning:"警告",info:"信息",username:"用户名",password:"密码",login:"登入"},required:{username:"必须填写用户名",password:"必须填写密码",minCharacters:"最少{0}个字符"},general:{close:"关闭",closeAll:"全部关闭",closeOthers:"其他关闭",refresh:"刷新"},el:{table:{sumText:"总结"}}}}},e=>{e.O(0,["styles","elementUI","vuetify","vendor"],(()=>{return t=8568,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=app.af036de1.js.map