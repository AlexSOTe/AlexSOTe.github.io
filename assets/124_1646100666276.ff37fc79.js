import{s as Ze,u as X,r as He,a as Je}from"./225_1646100666276.c7ac1d51.js";import{a as I,i as B,n as et,d as Le,h as Be,p as ae,w as tt}from"./99_1646100666276.bd8cb57b.js";/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const je=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",K=e=>je?Symbol(e):"_vr_"+e,nt=K("rvlm"),we=K("rvd"),J=K("r"),pe=K("rl"),fe=K("rvl"),q=typeof window!="undefined";function rt(e){return e.__esModule||je&&e[Symbol.toStringTag]==="Module"}const A=Object.assign;function ce(e,t){const n={};for(const r in t){const s=t[r];n[r]=Array.isArray(s)?s.map(e):e(s)}return n}const D=()=>{},st=/\/$/,ot=e=>e.replace(st,"");function le(e,t,n="/"){let r,s={},l="",d="";const g=t.indexOf("?"),i=t.indexOf("#",g>-1?g:0);return g>-1&&(r=t.slice(0,g),l=t.slice(g+1,i>-1?i:t.length),s=e(l)),i>-1&&(r=r||t.slice(0,i),d=t.slice(i,t.length)),r=lt(r!=null?r:t,n),{fullPath:r+(l&&"?")+l+d,path:r,query:s,hash:d}}function it(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ae(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function at(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&z(t.matched[r],n.matched[s])&&qe(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function qe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ct(e[n],t[n]))return!1;return!0}function ct(e,t){return Array.isArray(e)?Se(e,t):Array.isArray(t)?Se(t,e):e===t}function Se(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function lt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,l,d;for(l=0;l<r.length;l++)if(d=r[l],!(s===1||d==="."))if(d==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(l-(l===r.length?1:0)).join("/")}var W;(function(e){e.pop="pop",e.push="push"})(W||(W={}));var F;(function(e){e.back="back",e.forward="forward",e.unknown=""})(F||(F={}));function ut(e){if(!e)if(q){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ot(e)}const ft=/^[^#]+#/;function ht(e,t){return e.replace(ft,"#")+t}function dt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ee=()=>({left:window.pageXOffset,top:window.pageYOffset});function pt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=dt(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ke(e,t){return(history.state?history.state.position-t:-1)+e}const he=new Map;function mt(e,t){he.set(e,t)}function gt(e){const t=he.get(e);return he.delete(e),t}let yt=()=>location.protocol+"//"+location.host;function ze(e,t){const{pathname:n,search:r,hash:s}=t,l=e.indexOf("#");if(l>-1){let g=s.includes(e.slice(l))?e.slice(l).length:1,i=s.slice(g);return i[0]!=="/"&&(i="/"+i),Ae(i,"")}return Ae(n,e)+r+s}function vt(e,t,n,r){let s=[],l=[],d=null;const g=({state:c})=>{const y=ze(e,location),v=n.value,C=t.value;let k=0;if(c){if(n.value=y,t.value=c,d&&d===v){d=null;return}k=C?c.position-C.position:0}else r(y);s.forEach(w=>{w(n.value,v,{delta:k,type:W.pop,direction:k?k>0?F.forward:F.back:F.unknown})})};function i(){d=n.value}function u(c){s.push(c);const y=()=>{const v=s.indexOf(c);v>-1&&s.splice(v,1)};return l.push(y),y}function a(){const{history:c}=window;!c.state||c.replaceState(A({},c.state,{scroll:ee()}),"")}function f(){for(const c of l)c();l=[],window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",a)}return window.addEventListener("popstate",g),window.addEventListener("beforeunload",a),{pauseListeners:i,listen:u,destroy:f}}function Ce(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ee():null}}function Rt(e){const{history:t,location:n}=window,r={value:ze(e,n)},s={value:t.state};s.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(i,u,a){const f=e.indexOf("#"),c=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+i:yt()+e+i;try{t[a?"replaceState":"pushState"](u,"",c),s.value=u}catch(y){console.error(y),n[a?"replace":"assign"](c)}}function d(i,u){const a=A({},t.state,Ce(s.value.back,i,s.value.forward,!0),u,{position:s.value.position});l(i,a,!0),r.value=i}function g(i,u){const a=A({},s.value,t.state,{forward:i,scroll:ee()});l(a.current,a,!0);const f=A({},Ce(r.value,i,null),{position:a.position+1},u);l(i,f,!1),r.value=i}return{location:r,state:s,push:g,replace:d}}function Et(e){e=ut(e);const t=Rt(e),n=vt(e,t.state,t.location,t.replace);function r(l,d=!0){d||n.pauseListeners(),history.go(l)}const s=A({location:"",base:e,go:r,createHref:ht.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function ln(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Et(e)}function Pt(e){return typeof e=="string"||e&&typeof e=="object"}function Ge(e){return typeof e=="string"||typeof e=="symbol"}const T={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ke=K("nf");var be;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(be||(be={}));function G(e,t){return A(new Error,{type:e,[Ke]:!0},t)}function L(e,t){return e instanceof Error&&Ke in e&&(t==null||!!(e.type&t))}const _e="[^/]+?",wt={sensitive:!1,strict:!1,start:!0,end:!0},At=/[.+*?^${}()[\]/\\]/g;function St(e,t){const n=A({},wt,t),r=[];let s=n.start?"^":"";const l=[];for(const u of e){const a=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const c=u[f];let y=40+(n.sensitive?.25:0);if(c.type===0)f||(s+="/"),s+=c.value.replace(At,"\\$&"),y+=40;else if(c.type===1){const{value:v,repeatable:C,optional:k,regexp:w}=c;l.push({name:v,repeatable:C,optional:k});const P=w||_e;if(P!==_e){y+=10;try{new RegExp(`(${P})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${v}" (${P}): `+x.message)}}let O=C?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;f||(O=k&&u.length<2?`(?:/${O})`:"/"+O),k&&(O+="?"),s+=O,y+=20,k&&(y+=-8),C&&(y+=-20),P===".*"&&(y+=-50)}a.push(y)}r.push(a)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const d=new RegExp(s,n.sensitive?"":"i");function g(u){const a=u.match(d),f={};if(!a)return null;for(let c=1;c<a.length;c++){const y=a[c]||"",v=l[c-1];f[v.name]=y&&v.repeatable?y.split("/"):y}return f}function i(u){let a="",f=!1;for(const c of e){(!f||!a.endsWith("/"))&&(a+="/"),f=!1;for(const y of c)if(y.type===0)a+=y.value;else if(y.type===1){const{value:v,repeatable:C,optional:k}=y,w=v in u?u[v]:"";if(Array.isArray(w)&&!C)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const P=Array.isArray(w)?w.join("/"):w;if(!P)if(k)c.length<2&&(a.endsWith("/")?a=a.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);a+=P}}return a}return{re:d,score:r,keys:l,parse:g,stringify:i}}function kt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Ct(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const l=kt(r[n],s[n]);if(l)return l;n++}return s.length-r.length}const bt={type:0,value:""},_t=/[a-zA-Z0-9_]/;function Ot(e){if(!e)return[[]];if(e==="/")return[[bt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let l;function d(){l&&s.push(l),l=[]}let g=0,i,u="",a="";function f(){!u||(n===0?l.push({type:0,value:u}):n===1||n===2||n===3?(l.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:a,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),u="")}function c(){u+=i}for(;g<e.length;){if(i=e[g++],i==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:i==="/"?(u&&f(),d()):i===":"?(f(),n=1):c();break;case 4:c(),n=r;break;case 1:i==="("?n=2:_t.test(i)?c():(f(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&g--);break;case 2:i===")"?a[a.length-1]=="\\"?a=a.slice(0,-1)+i:n=3:a+=i;break;case 3:f(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&g--,a="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),d(),s}function xt(e,t,n){const r=St(Ot(e.path),n),s=A(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Mt(e,t){const n=[],r=new Map;t=xe({strict:!1,end:!0,sensitive:!1},t);function s(a){return r.get(a)}function l(a,f,c){const y=!c,v=It(a);v.aliasOf=c&&c.record;const C=xe(t,a),k=[v];if("alias"in a){const O=typeof a.alias=="string"?[a.alias]:a.alias;for(const x of O)k.push(A({},v,{components:c?c.record.components:v.components,path:x,aliasOf:c?c.record:v}))}let w,P;for(const O of k){const{path:x}=O;if(f&&x[0]!=="/"){const H=f.record.path,N=H[H.length-1]==="/"?"":"/";O.path=f.record.path+(x&&N+x)}if(w=xt(O,f,C),c?c.alias.push(w):(P=P||w,P!==w&&P.alias.push(w),y&&a.name&&!Oe(w)&&d(a.name)),"children"in v){const H=v.children;for(let N=0;N<H.length;N++)l(H[N],w,c&&c.children[N])}c=c||w,i(w)}return P?()=>{d(P)}:D}function d(a){if(Ge(a)){const f=r.get(a);f&&(r.delete(a),n.splice(n.indexOf(f),1),f.children.forEach(d),f.alias.forEach(d))}else{const f=n.indexOf(a);f>-1&&(n.splice(f,1),a.record.name&&r.delete(a.record.name),a.children.forEach(d),a.alias.forEach(d))}}function g(){return n}function i(a){let f=0;for(;f<n.length&&Ct(a,n[f])>=0;)f++;n.splice(f,0,a),a.record.name&&!Oe(a)&&r.set(a.record.name,a)}function u(a,f){let c,y={},v,C;if("name"in a&&a.name){if(c=r.get(a.name),!c)throw G(1,{location:a});C=c.record.name,y=A(Nt(f.params,c.keys.filter(P=>!P.optional).map(P=>P.name)),a.params),v=c.stringify(y)}else if("path"in a)v=a.path,c=n.find(P=>P.re.test(v)),c&&(y=c.parse(v),C=c.record.name);else{if(c=f.name?r.get(f.name):n.find(P=>P.re.test(f.path)),!c)throw G(1,{location:a,currentLocation:f});C=c.record.name,y=A({},f.params,a.params),v=c.stringify(y)}const k=[];let w=c;for(;w;)k.unshift(w.record),w=w.parent;return{name:C,path:v,params:y,matched:k,meta:$t(k)}}return e.forEach(a=>l(a)),{addRoute:l,resolve:u,removeRoute:d,getRoutes:g,getRecordMatcher:s}}function Nt(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function It(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Tt(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Tt(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Oe(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $t(e){return e.reduce((t,n)=>A(t,n.meta),{})}function xe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Ve=/#/g,Ht=/&/g,Lt=/\//g,Bt=/=/g,jt=/\?/g,Ue=/\+/g,qt=/%5B/g,zt=/%5D/g,Qe=/%5E/g,Gt=/%60/g,De=/%7B/g,Kt=/%7C/g,Fe=/%7D/g,Vt=/%20/g;function me(e){return encodeURI(""+e).replace(Kt,"|").replace(qt,"[").replace(zt,"]")}function Ut(e){return me(e).replace(De,"{").replace(Fe,"}").replace(Qe,"^")}function de(e){return me(e).replace(Ue,"%2B").replace(Vt,"+").replace(Ve,"%23").replace(Ht,"%26").replace(Gt,"`").replace(De,"{").replace(Fe,"}").replace(Qe,"^")}function Qt(e){return de(e).replace(Bt,"%3D")}function Dt(e){return me(e).replace(Ve,"%23").replace(jt,"%3F")}function Ft(e){return e==null?"":Dt(e).replace(Lt,"%2F")}function Z(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Wt(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const l=r[s].replace(Ue," "),d=l.indexOf("="),g=Z(d<0?l:l.slice(0,d)),i=d<0?null:Z(l.slice(d+1));if(g in t){let u=t[g];Array.isArray(u)||(u=t[g]=[u]),u.push(i)}else t[g]=i}return t}function Me(e){let t="";for(let n in e){const r=e[n];if(n=Qt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(l=>l&&de(l)):[r&&de(r)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function Yt(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}function Q(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function $(e,t,n,r,s){const l=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((d,g)=>{const i=f=>{f===!1?g(G(4,{from:n,to:t})):f instanceof Error?g(f):Pt(f)?g(G(2,{from:t,to:f})):(l&&r.enterCallbacks[s]===l&&typeof f=="function"&&l.push(f),d())},u=e.call(r&&r.instances[s],t,n,i);let a=Promise.resolve(u);e.length<3&&(a=a.then(i)),a.catch(f=>g(f))})}function ue(e,t,n,r){const s=[];for(const l of e)for(const d in l.components){let g=l.components[d];if(!(t!=="beforeRouteEnter"&&!l.instances[d]))if(Xt(g)){const u=(g.__vccOpts||g)[t];u&&s.push($(u,n,r,l,d))}else{let i=g();s.push(()=>i.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${l.path}"`));const a=rt(u)?u.default:u;l.components[d]=a;const c=(a.__vccOpts||a)[t];return c&&$(c,n,r,l,d)()}))}}return s}function Xt(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ne(e){const t=B(J),n=B(pe),r=I(()=>t.resolve(X(e.to))),s=I(()=>{const{matched:i}=r.value,{length:u}=i,a=i[u-1],f=n.matched;if(!a||!f.length)return-1;const c=f.findIndex(z.bind(null,a));if(c>-1)return c;const y=Ie(i[u-2]);return u>1&&Ie(a)===y&&f[f.length-1].path!==y?f.findIndex(z.bind(null,i[u-2])):c}),l=I(()=>s.value>-1&&tn(n.params,r.value.params)),d=I(()=>s.value>-1&&s.value===n.matched.length-1&&qe(n.params,r.value.params));function g(i={}){return en(i)?t[X(e.replace)?"replace":"push"](X(e.to)).catch(D):Promise.resolve()}return{route:r,href:I(()=>r.value.href),isActive:l,isExactActive:d,navigate:g}}const Zt=Le({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ne,setup(e,{slots:t}){const n=He(Ne(e)),{options:r}=B(J),s=I(()=>({[Te(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Te(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:Be("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},l)}}}),Jt=Zt;function en(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function tn(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((l,d)=>l!==s[d]))return!1}return!0}function Ie(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Te=(e,t,n)=>e!=null?e:t!=null?t:n,nn=Le({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=B(fe),s=I(()=>e.route||r.value),l=B(we,0),d=I(()=>s.value.matched[l]);ae(we,l+1),ae(nt,d),ae(fe,s);const g=Je();return tt(()=>[g.value,d.value,e.name],([i,u,a],[f,c,y])=>{u&&(u.instances[a]=i,c&&c!==u&&i&&i===f&&(u.leaveGuards.size||(u.leaveGuards=c.leaveGuards),u.updateGuards.size||(u.updateGuards=c.updateGuards))),i&&u&&(!c||!z(u,c)||!f)&&(u.enterCallbacks[a]||[]).forEach(v=>v(i))},{flush:"post"}),()=>{const i=s.value,u=d.value,a=u&&u.components[e.name],f=e.name;if(!a)return $e(n.default,{Component:a,route:i});const c=u.props[e.name],y=c?c===!0?i.params:typeof c=="function"?c(i):c:null,C=Be(a,A({},y,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(u.instances[f]=null)},ref:g}));return $e(n.default,{Component:C,route:i})||C}}});function $e(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const rn=nn;function un(e){const t=Mt(e.routes,e),n=e.parseQuery||Wt,r=e.stringifyQuery||Me,s=e.history,l=Q(),d=Q(),g=Q(),i=Ze(T);let u=T;q&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const a=ce.bind(null,o=>""+o),f=ce.bind(null,Ft),c=ce.bind(null,Z);function y(o,p){let h,m;return Ge(o)?(h=t.getRecordMatcher(o),m=p):m=o,t.addRoute(m,h)}function v(o){const p=t.getRecordMatcher(o);p&&t.removeRoute(p)}function C(){return t.getRoutes().map(o=>o.record)}function k(o){return!!t.getRecordMatcher(o)}function w(o,p){if(p=A({},p||i.value),typeof o=="string"){const R=le(n,o,p.path),_=t.resolve({path:R.path},p),U=s.createHref(R.fullPath);return A(R,_,{params:c(_.params),hash:Z(R.hash),redirectedFrom:void 0,href:U})}let h;if("path"in o)h=A({},o,{path:le(n,o.path,p.path).path});else{const R=A({},o.params);for(const _ in R)R[_]==null&&delete R[_];h=A({},o,{params:f(o.params)}),p.params=f(p.params)}const m=t.resolve(h,p),S=o.hash||"";m.params=a(c(m.params));const b=it(r,A({},o,{hash:Ut(S),path:m.path})),E=s.createHref(b);return A({fullPath:b,hash:S,query:r===Me?Yt(o.query):o.query||{}},m,{redirectedFrom:void 0,href:E})}function P(o){return typeof o=="string"?le(n,o,i.value.path):A({},o)}function O(o,p){if(u!==o)return G(8,{from:p,to:o})}function x(o){return V(o)}function H(o){return x(A(P(o),{replace:!0}))}function N(o){const p=o.matched[o.matched.length-1];if(p&&p.redirect){const{redirect:h}=p;let m=typeof h=="function"?h(o):h;return typeof m=="string"&&(m=m.includes("?")||m.includes("#")?m=P(m):{path:m},m.params={}),A({query:o.query,hash:o.hash,params:o.params},m)}}function V(o,p){const h=u=w(o),m=i.value,S=o.state,b=o.force,E=o.replace===!0,R=N(h);if(R)return V(A(P(R),{state:S,force:b,replace:E}),p||h);const _=h;_.redirectedFrom=p;let U;return!b&&at(r,m,h)&&(U=G(16,{to:_,from:m}),Pe(m,m,!0,!1)),(U?Promise.resolve(U):ge(_,m)).catch(M=>L(M)?M:re(M,_,m)).then(M=>{if(M){if(L(M,2))return V(A(P(M.to),{state:S,force:b,replace:E}),p||_)}else M=ve(_,m,!0,E,S);return ye(_,m,M),M})}function We(o,p){const h=O(o,p);return h?Promise.reject(h):Promise.resolve()}function ge(o,p){let h;const[m,S,b]=sn(o,p);h=ue(m.reverse(),"beforeRouteLeave",o,p);for(const R of m)R.leaveGuards.forEach(_=>{h.push($(_,o,p))});const E=We.bind(null,o,p);return h.push(E),j(h).then(()=>{h=[];for(const R of l.list())h.push($(R,o,p));return h.push(E),j(h)}).then(()=>{h=ue(S,"beforeRouteUpdate",o,p);for(const R of S)R.updateGuards.forEach(_=>{h.push($(_,o,p))});return h.push(E),j(h)}).then(()=>{h=[];for(const R of o.matched)if(R.beforeEnter&&!p.matched.includes(R))if(Array.isArray(R.beforeEnter))for(const _ of R.beforeEnter)h.push($(_,o,p));else h.push($(R.beforeEnter,o,p));return h.push(E),j(h)}).then(()=>(o.matched.forEach(R=>R.enterCallbacks={}),h=ue(b,"beforeRouteEnter",o,p),h.push(E),j(h))).then(()=>{h=[];for(const R of d.list())h.push($(R,o,p));return h.push(E),j(h)}).catch(R=>L(R,8)?R:Promise.reject(R))}function ye(o,p,h){for(const m of g.list())m(o,p,h)}function ve(o,p,h,m,S){const b=O(o,p);if(b)return b;const E=p===T,R=q?history.state:{};h&&(m||E?s.replace(o.fullPath,A({scroll:E&&R&&R.scroll},S)):s.push(o.fullPath,S)),i.value=o,Pe(o,p,h,E),Ee()}let te;function Ye(){te=s.listen((o,p,h)=>{const m=w(o),S=N(m);if(S){V(A(S,{replace:!0}),m).catch(D);return}u=m;const b=i.value;q&&mt(ke(b.fullPath,h.delta),ee()),ge(m,b).catch(E=>L(E,12)?E:L(E,2)?(V(E.to,m).then(R=>{L(R,20)&&!h.delta&&h.type===W.pop&&s.go(-1,!1)}).catch(D),Promise.reject()):(h.delta&&s.go(-h.delta,!1),re(E,m,b))).then(E=>{E=E||ve(m,b,!1),E&&(h.delta?s.go(-h.delta,!1):h.type===W.pop&&L(E,20)&&s.go(-1,!1)),ye(m,b,E)}).catch(D)})}let ne=Q(),Re=Q(),Y;function re(o,p,h){Ee(o);const m=Re.list();return m.length?m.forEach(S=>S(o,p,h)):console.error(o),Promise.reject(o)}function Xe(){return Y&&i.value!==T?Promise.resolve():new Promise((o,p)=>{ne.add([o,p])})}function Ee(o){Y||(Y=!0,Ye(),ne.list().forEach(([p,h])=>o?h(o):p()),ne.reset())}function Pe(o,p,h,m){const{scrollBehavior:S}=e;if(!q||!S)return Promise.resolve();const b=!h&&gt(ke(o.fullPath,0))||(m||!h)&&history.state&&history.state.scroll||null;return et().then(()=>S(o,p,b)).then(E=>E&&pt(E)).catch(E=>re(E,o,p))}const se=o=>s.go(o);let oe;const ie=new Set;return{currentRoute:i,addRoute:y,removeRoute:v,hasRoute:k,getRoutes:C,resolve:w,options:e,push:x,replace:H,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:l.add,beforeResolve:d.add,afterEach:g.add,onError:Re.add,isReady:Xe,install(o){const p=this;o.component("RouterLink",Jt),o.component("RouterView",rn),o.config.globalProperties.$router=p,Object.defineProperty(o.config.globalProperties,"$route",{enumerable:!0,get:()=>X(i)}),q&&!oe&&i.value===T&&(oe=!0,x(s.location).catch(S=>{}));const h={};for(const S in T)h[S]=I(()=>i.value[S]);o.provide(J,p),o.provide(pe,He(h)),o.provide(fe,i);const m=o.unmount;ie.add(o),o.unmount=function(){ie.delete(o),ie.size<1&&(u=T,te&&te(),i.value=T,oe=!1,Y=!1),m()}}}}function j(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function sn(e,t){const n=[],r=[],s=[],l=Math.max(t.matched.length,e.matched.length);for(let d=0;d<l;d++){const g=t.matched[d];g&&(e.matched.find(u=>z(u,g))?r.push(g):n.push(g));const i=e.matched[d];i&&(t.matched.find(u=>z(u,i))||s.push(i))}return[n,r,s]}function fn(){return B(J)}function hn(){return B(pe)}export{hn as a,ln as b,un as c,fn as u};
