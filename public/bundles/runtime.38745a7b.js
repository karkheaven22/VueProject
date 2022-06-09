(()=>{"use strict";var e,r,n,t={},o={};function i(e){var r=o[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var n=o[e]={id:e,exports:{}};try{var c={id:e,module:n,factory:t[e],require:i};i.i.forEach((function(e){e(c)})),n=c.module,c.factory.call(n.exports,n,n.exports,c.require)}catch(e){throw n.error=e,e}return n.exports}i.m=t,i.c=o,i.i=[],e=[],i.O=(r,n,t,o)=>{if(!n){var c=1/0;for(s=0;s<e.length;s++){for(var[n,t,o]=e[s],d=!0,a=0;a<n.length;a++)(!1&o||c>=o)&&Object.keys(i.O).every((e=>i.O[e](n[a])))?n.splice(a--,1):(d=!1,o<c&&(c=o));if(d){e.splice(s--,1);var u=t();void 0!==u&&(r=u)}}return r}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,t,o]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var n in r)i.o(r,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,n)=>(i.f[n](e,r),r)),[])),i.u=e=>"bundles/"+e+"."+{"components/layout":"7783d761","components/views/redirect":"0d5377f4",src_components_Adapter_BarcodeStreamer_vue:"cf107321","components/views/login":"4b031f63","components/views/dashboard":"f8d592b7","components/views/error-page-401":"4a757852","components/views/error-page-404":"ade40cc4","components/views/scan":"fef9a136"}[e]+".js",i.hu=e=>e+"."+i.h()+".hot-update.js",i.hmrF=()=>"runtime."+i.h()+".hot-update.json",i.h=()=>"9270d2b1ac78f1326f57",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},n="vueapp:",i.l=(e,t,o,c)=>{if(r[e])r[e].push(t);else{var d,a;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var l=u[s];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+o){d=l;break}}d||(a=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.setAttribute("data-webpack",n+o),d.src=e),r[e]=[t];var f=(n,t)=>{d.onerror=d.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(t))),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),a&&document.head.appendChild(d)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,r,n,t={},o=i.c,c=[],d=[],a="idle",u=0,s=[];function l(e){a=e;for(var r=[],n=0;n<d.length;n++)r[n]=d[n].call(null,e);return Promise.all(r)}function f(){0==--u&&l("ready").then((function(){if(0===u){var e=s;s=[];for(var r=0;r<e.length;r++)e[r]()}}))}function p(e){if("idle"!==a)throw new Error("check() is only allowed in idle status");return l("check").then(i.hmrM).then((function(n){return n?l("prepare").then((function(){var t=[];return r=[],Promise.all(Object.keys(i.hmrC).reduce((function(e,o){return i.hmrC[o](n.c,n.r,n.m,e,r,t),e}),[])).then((function(){return r=function(){return e?v(e):l("ready").then((function(){return t}))},0===u?r():new Promise((function(e){s.push((function(){e(r())}))}));var r}))})):l(m()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==a?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+a+")")})):v(e)}function v(e){e=e||{},m();var t=r.map((function(r){return r(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return l("abort").then((function(){throw o[0]}));var i=l("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var c,d=l("apply"),a=function(e){c||(c=e)},u=[];return t.forEach((function(e){if(e.apply){var r=e.apply(a);if(r)for(var n=0;n<r.length;n++)u.push(r[n])}})),Promise.all([i,d]).then((function(){return c?l("fail").then((function(){throw c})):n?v(e).then((function(e){return u.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):l("idle").then((function(){return u}))}))}function m(){if(n)return r||(r=[]),Object.keys(i.hmrI).forEach((function(e){n.forEach((function(n){i.hmrI[e](n,r)}))})),n=void 0,!0}i.hmrD=t,i.i.push((function(s){var v,m,y,g,b=s.module,w=function(r,n){var t=o[n];if(!t)return r;var i=function(i){if(t.hot.active){if(o[i]){var d=o[i].parents;-1===d.indexOf(n)&&d.push(n)}else c=[n],e=i;-1===t.children.indexOf(i)&&t.children.push(i)}else console.warn("[HMR] unexpected require("+i+") from disposed module "+n),c=[];return r(i)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(n){r[e]=n}}};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&"e"!==s&&Object.defineProperty(i,s,d(s));return i.e=function(e){return function(e){switch(a){case"ready":l("prepare");case"prepare":return u++,e.then(f,f),e;default:return e}}(r.e(e))},i}(s.require,s.id);b.hot=(v=s.id,m=b,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){c=m.parents.slice(),e=y?void 0:v,i(v)},active:!0,accept:function(e,r,n){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=r||function(){},g._acceptedErrorHandlers[e[t]]=n;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,a){case"idle":r=[],Object.keys(i.hmrI).forEach((function(e){i.hmrI[e](v,r)})),l("ready");break;case"ready":Object.keys(i.hmrI).forEach((function(e){i.hmrI[e](v,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(v)}},check:p,apply:h,status:function(e){if(!e)return a;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var r=d.indexOf(e);r>=0&&d.splice(r,1)},data:t[v]},e=void 0,g),b.parents=c,b.children=[],c=[],s.require=w})),i.hmrC={},i.hmrI={}})(),i.p="/",(()=>{var e,r=i.hmrS_jsonp=i.hmrS_jsonp||{runtime:0,styles:0};i.f.j=(e,n)=>{var t=i.o(r,e)?r[e]:void 0;if(0!==t)if(t)n.push(t[2]);else if(/^(runtime|styles)$/.test(e))r[e]=0;else{var o=new Promise(((n,o)=>t=r[e]=[n,o]));n.push(t[2]=o);var c=i.p+i.u(e),d=new Error;i.l(c,(n=>{if(i.o(r,e)&&(0!==(t=r[e])&&(r[e]=void 0),t)){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",d.name="ChunkLoadError",d.type=o,d.request=c,t[1](d)}}),"chunk-"+e,e)}};var n,t,o,c,d={};function a(r,n){return e=n,new Promise(((e,n)=>{d[r]=e;var t=i.p+i.hu(r),o=new Error;i.l(t,(e=>{if(d[r]){d[r]=void 0;var t=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;o.message="Loading hot update chunk "+r+" failed.\n("+t+": "+i+")",o.name="ChunkLoadError",o.type=t,o.request=i,n(o)}}))}))}function u(e){function d(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),c=o.id,d=o.chain,u=i.c[c];if(u&&(!u.hot._selfAccepted||u.hot._selfInvalidated)){if(u.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:c};if(u.hot._main)return{type:"unaccepted",chain:d,moduleId:c};for(var s=0;s<u.parents.length;s++){var l=u.parents[s],f=i.c[l];if(f){if(f.hot._declinedDependencies[c])return{type:"declined",chain:d.concat([l]),moduleId:c,parentId:l};-1===r.indexOf(l)&&(f.hot._acceptedDependencies[c]?(n[l]||(n[l]=[]),a(n[l],[c])):(delete n[l],r.push(l),t.push({chain:d.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function a(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}i.f&&delete i.f.jsonpHmr,n=void 0;var u={},s=[],l={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in t)if(i.o(t,p)){var h,v=t[p],m=!1,y=!1,g=!1,b="";switch((h=v?d(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(h),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in l[p]=v,a(s,h.outdatedModules),h.outdatedDependencies)i.o(h.outdatedDependencies,p)&&(u[p]||(u[p]=[]),a(u[p],h.outdatedDependencies[p]));g&&(a(s,[h.moduleId]),l[p]=f)}t=void 0;for(var w,_=[],E=0;E<s.length;E++){var I=s[E],k=i.c[I];k&&(k.hot._selfAccepted||k.hot._main)&&l[I]!==f&&!k.hot._selfInvalidated&&_.push({module:I,require:k.hot._requireSelf,errorHandler:k.hot._selfAccepted})}return{dispose:function(){var e;o.forEach((function(e){delete r[e]})),o=void 0;for(var n,t=s.slice();t.length>0;){var c=t.pop(),d=i.c[c];if(d){var a={},l=d.hot._disposeHandlers;for(E=0;E<l.length;E++)l[E].call(null,a);for(i.hmrD[c]=a,d.hot.active=!1,delete i.c[c],delete u[c],E=0;E<d.children.length;E++){var f=i.c[d.children[E]];f&&((e=f.parents.indexOf(c))>=0&&f.parents.splice(e,1))}}}for(var p in u)if(i.o(u,p)&&(d=i.c[p]))for(w=u[p],E=0;E<w.length;E++)n=w[E],(e=d.children.indexOf(n))>=0&&d.children.splice(e,1)},apply:function(r){for(var n in l)i.o(l,n)&&(i.m[n]=l[n]);for(var t=0;t<c.length;t++)c[t](i);for(var o in u)if(i.o(u,o)){var d=i.c[o];if(d){w=u[o];for(var a=[],f=[],p=[],h=0;h<w.length;h++){var v=w[h],m=d.hot._acceptedDependencies[v],y=d.hot._acceptedErrorHandlers[v];if(m){if(-1!==a.indexOf(m))continue;a.push(m),f.push(y),p.push(v)}}for(var g=0;g<a.length;g++)try{a[g].call(null,w)}catch(n){if("function"==typeof f[g])try{f[g](n,{moduleId:o,dependencyId:p[g]})}catch(t){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:o,dependencyId:p[g],error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:o,dependencyId:p[g],error:n}),e.ignoreErrored||r(n)}}}for(var b=0;b<_.length;b++){var E=_[b],I=E.module;try{E.require(I)}catch(n){if("function"==typeof E.errorHandler)try{E.errorHandler(n,{moduleId:I,module:i.c[I]})}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:I,error:n}),e.ignoreErrored||r(n)}}return s}}}self.webpackHotUpdatevueapp=(r,n,o)=>{for(var a in n)i.o(n,a)&&(t[a]=n[a],e&&e.push(a));o&&c.push(o),d[r]&&(d[r](),d[r]=void 0)},i.hmrI.jsonp=function(e,r){t||(t={},c=[],o=[],r.push(u)),i.o(t,e)||(t[e]=i.m[e])},i.hmrC.jsonp=function(e,d,s,l,f,p){f.push(u),n={},o=d,t=s.reduce((function(e,r){return e[r]=!1,e}),{}),c=[],e.forEach((function(e){i.o(r,e)&&void 0!==r[e]?(l.push(a(e,p)),n[e]=!0):n[e]=!1})),i.f&&(i.f.jsonpHmr=function(e,r){n&&i.o(n,e)&&!n[e]&&(r.push(a(e)),n[e]=!0)})},i.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(i.p+i.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},i.O.j=e=>0===r[e];var s=(e,n)=>{var t,o,[c,d,a]=n,u=0;if(c.some((e=>0!==r[e]))){for(t in d)i.o(d,t)&&(i.m[t]=d[t]);if(a)var s=a(i)}for(e&&e(n);u<c.length;u++)o=c[u],i.o(r,o)&&r[o]&&r[o][0](),r[o]=0;return i.O(s)},l=self.webpackChunkvueapp=self.webpackChunkvueapp||[];l.forEach(s.bind(null,0)),l.push=s.bind(null,l.push.bind(l))})()})();
//# sourceMappingURL=runtime.38745a7b.js.map