"use strict";(self.webpackChunkvueapp=self.webpackChunkvueapp||[]).push([["components/layout"],{1176:(e,t,i)=>{var s=i(4783)(e.id,{esModule:!0,locals:!1});e.hot.dispose(s),e.hot.accept(void 0,s)},148:(e,t,i)=>{var s=i(4783)(e.id,{esModule:!0,locals:!1});e.hot.dispose(s),e.hot.accept(void 0,s)},7709:(e,t,i)=>{var s=i(4783)(e.id,{esModule:!0,locals:!1});e.hot.dispose(s),e.hot.accept(void 0,s)},2337:(e,t,i)=>{var s=i(4783)(e.id,{esModule:!0,locals:!1});e.hot.dispose(s),e.hot.accept(void 0,s)},4717:(e,t,i)=>{var s=i(4783)(e.id,{esModule:!0,locals:!1});e.hot.dispose(s),e.hot.accept(void 0,s)},339:(e,t,i)=>{var s=i(4783)(e.id,{esModule:!0,locals:!1});e.hot.dispose(s),e.hot.accept(void 0,s)},7678:(e,t,i)=>{var s=i(4783)(e.id,{esModule:!0,locals:!1});e.hot.dispose(s),e.hot.accept(void 0,s)},3430:(e,t,i)=>{i.r(t),i.d(t,{default:()=>M});var s=i(655),r=i(600);let n=class extends r.w3{get sidebar(){return this.$store.getters.sidebar}get device(){return this.$store.getters.device}get showSettings(){return this.$store.getters.showSettings}get needTagsView(){return this.$store.getters.tagsView}get fixedHeader(){return this.$store.getters.fixedHeader}get cachedViews(){return""}get key(){return this.$route.path}};n=(0,s.gn)([(0,r.wA)({name:"AppMain"})],n);const a=n;var l=i(1900);const o=(0,l.Z)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"fill-height"},[i("v-col",[i("transition",{attrs:{name:"fade"}},[i("router-view",{key:e.key})],1)],1)],1)],1)}),[],!1,null,null,null).exports;var c=i(8181),d=i(3753),h=i(6305);let u=class extends r.w3{breadcrumbs=[];onRouteChange(e){e.path.startsWith("/redirect/")||this.getBreadcrumb()}created(){this.getBreadcrumb()}getBreadcrumb(){const e=this.$route.matched.filter((e=>e.meta&&e.meta.title));this.breadcrumbs=e.filter((e=>e.meta&&e.meta.title))}isDashboard(e){const t=e&&e.name;return!!t&&t.trim().toLocaleLowerCase()==="Dashboard".toLocaleLowerCase()}pathCompile(e){const{params:t}=this.$route;return(0,h.MY)(e)(t)}handleLink(e){const{redirect:t,path:i}=e;t?this.$router.push(t).catch((e=>{console.warn(e)})):this.$router.push(this.pathCompile(i)).catch((e=>{console.warn(e)}))}};(0,s.gn)([(0,r.RL)("$route")],u.prototype,"onRouteChange",null),u=(0,s.gn)([(0,r.wA)({name:"Breadcrumb"})],u);const p=u;i(1176);const v=(0,l.Z)(p,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-breadcrumbs",{attrs:{items:e.breadcrumbs},scopedSlots:e._u([{key:"item",fn:function(t){var s=t.item;return[i("v-breadcrumbs-item",{attrs:{href:s.path,link:"",router:"",to:s.path}},[e._v("\n      "+e._s(e.$t("route."+s.meta.title))+"\n    ")])]}}])})}),[],!1,null,"225685a0",null).exports;let m=class extends r.w3{get language(){return c.b.language}handleSetLanguage(e){c.b.SetLanguage(e),this.$i18n.locale=e,this.$root.$i18n.locale=e;const t=this.$route.matched.filter((e=>e.meta&&e.meta.title)),i=t[t.length-1],s=this.$t(`route.${i.meta.title}`);document.title=s}};m=(0,s.gn)([(0,r.wA)({name:"LanguageSelect"})],m);const g=m;const f=(0,l.Z)(g,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-menu",{attrs:{"offset-y":"","close-on-click":"","close-on-content-click":""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[i("v-btn",e._g({attrs:{icon:""}},s),[i("v-icon",[e._v("mdi-translate ")])],1)]}}])},[e._v(" "),i("v-list",{attrs:{dense:""}},[i("v-list-item-group",[i("v-list-item",{attrs:{link:""},on:{click:function(t){return e.handleSetLanguage("en")}}},[i("v-list-item-icon",[i("v-icon",[e._v("mdi-exit-to-app")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v("English")])],1)],1),e._v(" "),i("v-list-item",{attrs:{link:""},on:{click:function(t){return e.handleSetLanguage("zh")}}},[i("v-list-item-icon",[i("v-icon",[e._v("mdi-exit-to-app")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v("Chinese")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports;let w=class extends r.w3{get sidebar(){return this.$store.getters.sidebar}get avatar(){return d.z.avatar}async logout(){await d.z.LogOut(),this.$router.push(`/login?redirect=${this.$route.fullPath}`)}toggleSideBar(){c.b.ToggleSideBar(!1)}};w=(0,s.gn)([(0,r.wA)({name:"Navbar",components:{Breadcrumb:v,LanguageSelect:f}})],w);const V=w;i(148);const _=(0,l.Z)(V,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-toolbar",{staticClass:"navbar",attrs:{light:"",flat:""}},[i("v-app-bar-nav-icon",{nativeOn:{click:function(t){return e.toggleSideBar.apply(null,arguments)}}},[i("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.sidebar.opened,expression:"sidebar.opened"}]},[e._v("mdi-menu-open")]),e._v(" "),i("v-icon",{directives:[{name:"show",rawName:"v-show",value:!e.sidebar.opened,expression:"!sidebar.opened"}]},[e._v("mdi-menu")])],1),e._v(" "),i("v-toolbar-title"),e._v(" "),i("breadcrumb",{staticClass:"breadcrumb-container hidden-xs-only",attrs:{id:"breadcrumb-container"}}),e._v(" "),i("v-spacer"),e._v(" "),i("LanguageSelect"),e._v(" "),i("v-btn",{staticClass:"hidden-xs-only",attrs:{icon:""},nativeOn:{click:function(t){return e.logout.apply(null,arguments)}}},[i("v-icon",[e._v("mdi-exit-to-app")])],1)],1)}),[],!1,null,"0a7be556",null).exports;let b=class extends r.w3{items;created(){this.items=[{title:"dashboard",icon:"mdi-view-dashboard",type:"link",path:"/dashboard/index"},{title:"purchasing.text",icon:"mdi-cart-variant",items:[{type:"link",path:"/error/404",title:"purchasing.quotation"},{type:"link",path:"/error/401",title:"purchasing.product"},{type:"link",path:"/error/404",title:"purchasing.plan"},{type:"link",path:"/error/404",title:"purchasing.order"},{type:"link",path:"/error/404",title:"purchasing.invoice"},{type:"link",path:"/error/404",title:"purchasing.vendor"}]},{title:"production.text",icon:"mdi-cube-outline",items:[{type:"link",path:"/error/401",title:"production.bom"},{type:"link",path:"/error/404",title:"production.defect"},{type:"link",path:"/error/404",title:"production.process"},{type:"link",path:"/error/404",title:"production.job"}]},{title:"sales.text",icon:"mdi-hail",items:[{type:"link",path:"/error/401",title:"sales.quotation"},{type:"link",path:"/error/401",title:"sales.order"},{type:"link",path:"/error/404",title:"sales.customer"}]},{title:"inventory.text",icon:"mdi-package-variant-closed",items:[{type:"link",path:"/error/401",title:"inventory.adjustment"},{type:"link",path:"/error/404",title:"inventory.item"},{type:"link",path:"/error/404",title:"inventory.location"},{type:"link",path:"/error/404",title:"inventory.transfer"}]},{title:"manufacturing.text",icon:"mdi-home-city-outline",items:[{type:"link",path:"/error/401",title:"inventory.adjustment"},{type:"link",path:"/error/404",title:"inventory.location"},{type:"link",path:"/error/404",title:"inventory.transfer"}]},{title:"settings.text",icon:"mdi-cogs",items:[{type:"link",path:"/error/401",title:"inventory.adjustment"},{type:"link",path:"/error/404",title:"inventory.location"},{type:"link",path:"/error/404",title:"inventory.transfer"}]},{title:"errorPages",icon:"mdi-alert-circle-outline",items:[{type:"link",path:"/error/401",title:"page401"},{type:"link",path:"/error/404",title:"page404"},{type:"link",path:"/scan",title:"photos",icon:"mdi-image"}]},{title:"logout",icon:"mdi-exit-to-app",type:"button",func:this.logout}]}async logout(){await d.z.LogOut(),this.$router.push(`/login?redirect=${this.$route.fullPath}`)}goPage=e=>this.$router.push({path:e});isExternal=e=>/^(https?:|mailto:|tel:)/.test(e);triggerMenu(e){e.items||("link"===e.type?this.goPage(e.path):e.func.apply(this))}};b=(0,s.gn)([(0,r.wA)({name:"Sidebar"})],b);const y=b;i(7709);const D=(0,l.Z)(y,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-navigation-drawer",{staticClass:"sidebar",attrs:{permanent:"",fixed:"",width:"260",tag:"nav",clipped:"",app:"",color:"#eaf2f9"}},[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[i("v-img",{attrs:{"lazy-src":"https://cdn.vuetifyjs.com/images/parallax/material.jpg","max-height":"150","max-width":"250",contain:"",src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"}})],1)],1)],1),e._v(" "),i("v-divider"),e._v(" "),i("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(t){return i("v-list-group",{key:t.title,attrs:{"no-action":"",color:"white"},on:{click:function(i){return i.stopPropagation(),e.triggerMenu(t)}},scopedSlots:e._u([{key:"prependIcon",fn:function(){return[i("v-icon",[e._v(e._s(t.icon))])]},proxy:!0},{key:"activator",fn:function(){return[i("v-list-item-title",[e._v(e._s(e.$t("route."+t.title)))])]},proxy:!0},{key:"appendIcon",fn:function(){return[t.items?i("v-icon",[e._v("mdi-chevron-down")]):i("v-icon")]},proxy:!0}],null,!0)},[e._v(" "),e._v(" "),e._v(" "),e._l(t.items,(function(t,s){return i("v-list-item",{key:s,attrs:{link:"",route:"",to:t.path}},[i("v-list-item-title",[e._v(e._s(e.$t("route."+t.title)))])],1)}))],2)})),1)],1)}),[],!1,null,null,null).exports;var E=i(5546),C=i(5493);let k=class extends E.g4{visitedViews=[];cachedViews=[];AddView(e){C.Z.dispatch("AddVisitedView",e),C.Z.dispatch("AddCachedView",e)}AddVisitedView(e){return e}AddCachedView(e){return e}async DelView(e){return C.Z.dispatch("DelVisitedView",e),C.Z.dispatch("DelCachedView",e),{visitedViews:[...this.visitedViews],cachedViews:[...this.cachedViews]}}async DelVisitedView(e){return C.Z.commit("DEL_VISITED_VIEW",e),[...this.visitedViews]}async DelCachedView(e){return C.Z.commit("DEL_CACHED_VIEW",e),[...this.cachedViews]}async DelOthersViews(e){return C.Z.dispatch("DelOthersVisitedViews",e),C.Z.dispatch("DelOthersCachedViews",e),{visitedViews:[...this.visitedViews],cachedViews:[...this.cachedViews]}}async DelOthersVisitedViews(e){return C.Z.commit("DEL_OTHERS_VISITED_VIEWS",e),[...this.visitedViews]}async DelOthersCachedViews(e){return C.Z.commit("DEL_OTHERS_CACHED_VIEWS",e),[...this.cachedViews]}async DelAllViews(e){return C.Z.dispatch("DelAllVisitedViews",e),C.Z.dispatch("DelAllCachedViews",e),{visitedViews:[...this.visitedViews],cachedViews:[...this.cachedViews]}}async DelAllVisitedViews(e){return C.Z.commit("DEL_ALL_VISITED_VIEWS",e),[...this.visitedViews]}async DelAllCachedViews(e){return C.Z.commit("DEL_ALL_CACHED_VIEWS",e),[...this.cachedViews]}UpdateVisitedView(e){return e}ADD_VISITED_VIEW(e){this.visitedViews.some((t=>t.path===e.path))||this.visitedViews.push(Object.assign({},e,{title:e.meta.title||"no-name"}))}ADD_CACHED_VIEW(e){this.cachedViews.includes(e.name)||e.meta.noCache||this.cachedViews.push(e.name)}DEL_VISITED_VIEW(e){for(const[t,i]of this.visitedViews.entries())if(i.path===e.path){this.visitedViews.splice(t,1);break}}DEL_CACHED_VIEW(e){for(const t of this.cachedViews)if(t===e.name){const e=this.cachedViews.indexOf(t);this.cachedViews.splice(e,1);break}}DEL_OTHERS_VISITED_VIEWS(e){for(const[t,i]of this.visitedViews.entries())if(i.path===e.path){this.visitedViews=this.visitedViews.slice(t,t+1);break}}DEL_OTHERS_CACHED_VIEWS(e){for(const t of this.cachedViews)if(t===e.name){const e=this.cachedViews.indexOf(t);this.cachedViews=this.cachedViews.slice(e,e+1);break}}DEL_ALL_VISITED_VIEWS(){this.visitedViews=[]}DEL_ALL_CACHED_VIEWS(){this.cachedViews=[]}UPDATE_VISITED_VIEW(e){for(let t of this.visitedViews)if(t.path===e.path){t=Object.assign(t,e);break}}};(0,s.gn)([E.aU],k.prototype,"AddView",null),(0,s.gn)([(0,E.aU)({commit:"ADD_VISITED_VIEW"})],k.prototype,"AddVisitedView",null),(0,s.gn)([(0,E.aU)({commit:"ADD_CACHED_VIEW"})],k.prototype,"AddCachedView",null),(0,s.gn)([E.aU],k.prototype,"DelView",null),(0,s.gn)([E.aU],k.prototype,"DelVisitedView",null),(0,s.gn)([E.aU],k.prototype,"DelCachedView",null),(0,s.gn)([E.aU],k.prototype,"DelOthersViews",null),(0,s.gn)([E.aU],k.prototype,"DelOthersVisitedViews",null),(0,s.gn)([E.aU],k.prototype,"DelOthersCachedViews",null),(0,s.gn)([E.aU],k.prototype,"DelAllViews",null),(0,s.gn)([E.aU],k.prototype,"DelAllVisitedViews",null),(0,s.gn)([E.aU],k.prototype,"DelAllCachedViews",null),(0,s.gn)([(0,E.aU)({commit:"UPDATE_VISITED_VIEW"})],k.prototype,"UpdateVisitedView",null),(0,s.gn)([E.mm],k.prototype,"ADD_VISITED_VIEW",null),(0,s.gn)([E.mm],k.prototype,"ADD_CACHED_VIEW",null),(0,s.gn)([E.mm],k.prototype,"DEL_VISITED_VIEW",null),(0,s.gn)([E.mm],k.prototype,"DEL_CACHED_VIEW",null),(0,s.gn)([E.mm],k.prototype,"DEL_OTHERS_VISITED_VIEWS",null),(0,s.gn)([E.mm],k.prototype,"DEL_OTHERS_CACHED_VIEWS",null),(0,s.gn)([E.mm],k.prototype,"DEL_ALL_VISITED_VIEWS",null),(0,s.gn)([E.mm],k.prototype,"DEL_ALL_CACHED_VIEWS",null),(0,s.gn)([E.mm],k.prototype,"UPDATE_VISITED_VIEW",null),k=(0,s.gn)([(0,E.Yl)({dynamic:!0,store:C.Z,name:"tagsView"})],k);const $=(0,E.rT)(k);const T={name:"ScrollPane",data:()=>({left:0}),computed:{scrollWrapper(){return this.$refs.scrollContainer.$refs.wrap}},mounted(){this.scrollWrapper.addEventListener("scroll",this.emitScroll,!0)},beforeDestroy(){this.scrollWrapper.removeEventListener("scroll",this.emitScroll)},methods:{handleScroll(e){const t=e.wheelDelta||40*-e.deltaY,i=this.scrollWrapper;i.scrollLeft=i.scrollLeft+t/4},emitScroll(){this.$emit("scroll")},moveToTarget(e){const t=this.$refs.scrollContainer.$el.offsetWidth,i=this.scrollWrapper,s=this.$parent.$refs.tag;let r=null,n=null;if(s.length>0&&(r=s[0],n=s[s.length-1]),r===e)i.scrollLeft=0;else if(n===e)i.scrollLeft=i.scrollWidth-t;else{const r=s.findIndex((t=>t===e)),n=s[r-1],a=s[r+1],l=a.$el.offsetLeft+a.$el.offsetWidth+4,o=n.$el.offsetLeft-4;l>i.scrollLeft+t?i.scrollLeft=l-t:o<i.scrollLeft&&(i.scrollLeft=o)}}}};i(2337);const S={components:{ScrollPane:(0,l.Z)(T,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-scrollbar",{ref:"scrollContainer",staticClass:"scroll-container",attrs:{vertical:!1},nativeOn:{wheel:function(t){return t.preventDefault(),e.handleScroll.apply(null,arguments)}}},[e._t("default")],2)}),[],!1,null,"5cf3ae2e",null).exports},data:()=>({visible:!1,top:0,left:0,selectedTag:{},affixTags:[]}),computed:{visitedViews(){return this.$store.state.tagsView.visitedViews},routes:()=>[]},watch:{$route(){this.addTags(),this.moveToCurrentTag()},visible(e){e?document.body.addEventListener("click",this.closeMenu):document.body.removeEventListener("click",this.closeMenu)}},mounted(){this.initTags(),this.addTags()},methods:{isActive(e){return e.path===this.$route.path},isAffix:e=>e.meta&&e.meta.affix,filterAffixTags:(e,t="/")=>[],initTags(){const e=this.affixTags=this.filterAffixTags(this.routes);for(const t of e)t.name&&$.AddVisitedView(t)},addTags(){const{name:e}=this.$route;return e&&$.AddView(this.$route),!1},moveToCurrentTag(){const e=this.$refs.tag;this.$nextTick((()=>{for(const t of e)if(t.to.path===this.$route.path){this.$refs.scrollPane.moveToTarget(t),t.to.fullPath!==this.$route.fullPath&&$.UpdateVisitedView(this.$route);break}}))},refreshSelectedTag(e){$.DelCachedView(e).then((()=>{const{fullPath:t}=e;this.$nextTick((()=>{this.$router.replace({path:"/redirect"+t})}))}))},closeSelectedTag(e){$.DelView(e).then((({visitedViews:t})=>{this.isActive(e)&&this.toLastView(t,e)}))},closeOthersTags(){this.$router.push(this.selectedTag),$.DelOthersViews(this.selectedTag).then((()=>{this.moveToCurrentTag()}))},closeAllTags(e){$.DelAllViews().then((({visitedViews:t})=>{this.affixTags.some((t=>t.path===e.path))||this.toLastView(t,e)}))},toLastView(e,t){const i=e.slice(-1)[0];i?this.$router.push(i.fullPath):"Dashboard"===t.name?this.$router.replace({path:"/redirect"+t.fullPath}):this.$router.push("/")},openMenu(e,t){const i=this.$el.getBoundingClientRect().left,s=this.$el.offsetWidth-105,r=t.clientX-i+15;this.left=r>s?s:r,this.top=t.clientY,this.visible=!0,this.selectedTag=e},closeMenu(){this.visible=!1},handleScroll(){this.closeMenu()}}};i(4717),i(339);const A=(0,l.Z)(S,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tags-view-container",attrs:{id:"tags-view-container"}},[i("scroll-pane",{ref:"scrollPane",staticClass:"tags-view-wrapper",on:{scroll:e.handleScroll}},e._l(e.visitedViews,(function(t){return i("router-link",{key:t.path,ref:"tag",refInFor:!0,staticClass:"tags-view-item",class:e.isActive(t)?"active":"",attrs:{to:{path:t.path,query:t.query,fullPath:t.fullPath},tag:"span"},nativeOn:{mouseup:function(i){if("button"in i&&1!==i.button)return null;!e.isAffix(t)&&e.closeSelectedTag(t)},contextmenu:function(i){return i.preventDefault(),e.openMenu(t,i)}}},[e._v("\n      "+e._s(e.$t("route."+t.meta.title))+"\n      "),e.isAffix(t)?e._e():i("span",{staticClass:"mdi mdi-close",on:{click:function(i){return i.preventDefault(),i.stopPropagation(),e.closeSelectedTag(t)}}})])})),1),e._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"contextmenu",style:{left:e.left+"px",top:e.top+"px"}},[i("li",{on:{click:function(t){return e.refreshSelectedTag(e.selectedTag)}}},[e._v(e._s(e.$t("general.refresh")))]),e._v(" "),e.isAffix(e.selectedTag)?e._e():i("li",{on:{click:function(t){return e.closeSelectedTag(e.selectedTag)}}},[e._v(e._s(e.$t("general.close")))]),e._v(" "),i("li",{on:{click:e.closeOthersTags}},[e._v(e._s(e.$t("general.closeOthers")))]),e._v(" "),i("li",{on:{click:function(t){return e.closeAllTags(e.selectedTag)}}},[e._v(e._s(e.$t("general.closeAll")))])])],1)}),[],!1,null,"0a608722",null).exports,{body:L}=document;let x=class extends r.w3{get sidebar(){return this.$store.getters.sidebar}get device(){return this.$store.getters.device}onRouteChange(){this.device===c.Y.Mobile&&this.sidebar.opened&&c.b.CloseSideBar(!1)}beforeMount(){window.addEventListener("resize",this.resizeHandler)}beforeDestroy(){window.removeEventListener("resize",this.resizeHandler)}mounted(){this.isMobile()&&(c.b.ToggleDevice(c.Y.Mobile),c.b.CloseSideBar(!0))}isMobile(){return L.getBoundingClientRect().width-3<1024}resizeHandler(){if(!document.hidden){const e=this.isMobile();c.b.ToggleDevice(e?c.Y.Mobile:c.Y.Desktop)}}};(0,s.gn)([(0,r.RL)("$route")],x.prototype,"onRouteChange",null),x=(0,s.gn)([(0,r.wA)({name:"ResizeHandlerMixin"})],x);const I=x;let W=class extends r.w3{get sidebar(){return c.b.sidebar}get device(){return c.b.device}get needTagsView(){return this.$store.getters.tagsView}get classObj(){return{hideSidebar:!this.sidebar.opened,openSidebar:this.sidebar.opened,withoutAnimation:this.sidebar.withoutAnimation,mobile:this.device===c.Y.Mobile}}handleClickOutside(){c.b.CloseSideBar(!1)}};W=(0,s.gn)([(0,r.wA)({name:"Layout",components:{AppMain:o,Navbar:_,Sidebar:D,TagsView:A},mixins:[I]})],W);const O=W;i(7678);const M=(0,l.Z)(O,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.classObj},[0===e.device&&e.sidebar.opened?i("div",{staticClass:"drawer-bg",on:{click:e.handleClickOutside}}):e._e(),e._v(" "),i("Sidebar",{staticClass:"sidebar-container"}),e._v(" "),i("v-main",{staticClass:"main-container"},[i("Navbar"),e._v(" "),i("TagsView"),e._v(" "),i("AppMain")],1)],1)}),[],!1,null,"1db23072",null).exports}}]);
//# sourceMappingURL=layout.2a83e50a.js.map