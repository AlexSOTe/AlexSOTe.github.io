import{i as T,A as x,a as y,p as N,g as b,n as L,v as k,x as P,w as R,z as C,C as _}from"./99_1646100890498.1410f50d.js";import{a as l,r as m,i as A,u as h}from"./221_1646100890498.ed3f8858.js";var f=typeof window!="undefined";function g(e){return f?requestAnimationFrame(e):-1}function V(e){g(()=>g(e))}var M=e=>e===window,E=(e,n)=>({top:0,left:0,right:e,bottom:n,width:e,height:n}),j=e=>{const n=h(e);if(M(n)){const t=n.innerWidth,i=n.innerHeight;return E(t,i)}return(n==null?void 0:n.getBoundingClientRect)?n.getBoundingClientRect():E(0,0)};function F(e){const n=T(e,null);if(n){const t=C(),{link:i,unlink:r,internalChildren:o}=n;i(t),x(()=>r(t));const s=y(()=>o.indexOf(t));return{parent:n,index:s}}return{parent:null,index:l(-1)}}function S(e){const n=[],t=i=>{Array.isArray(i)&&i.forEach(r=>{var o;_(r)&&(n.push(r),((o=r.component)==null?void 0:o.subTree)&&(n.push(r.component.subTree),t(r.component.subTree.children)),r.children&&t(r.children))})};return t(e),n}function D(e,n,t){const i=S(e.subTree.children);t.sort((o,s)=>i.indexOf(o.vnode)-i.indexOf(s.vnode));const r=t.map(o=>o.proxy);n.sort((o,s)=>{const c=r.indexOf(o),a=r.indexOf(s);return c-a})}function U(e){const n=m([]),t=m([]),i=C();return{children:n,linkChildren:o=>{N(e,Object.assign({link:a=>{a.proxy&&(t.push(a),n.push(a.proxy),D(i,n,t))},unlink:a=>{const u=t.indexOf(a);n.splice(u,1),t.splice(u,1)},children:n,internalChildren:t},o))}}}function B(e){let n;b(()=>{e(),L(()=>{n=!0})}),k(()=>{n&&e()})}function q(e,n,t={}){if(!f)return;const{target:i=window,passive:r=!1,capture:o=!1}=t;let s;const c=u=>{const d=h(u);d&&!s&&(d.addEventListener(e,n,{capture:o,passive:r}),s=!0)},a=u=>{const d=h(u);d&&s&&(d.removeEventListener(e,n,o),s=!1)};x(()=>a(i)),P(()=>a(i)),B(()=>c(i)),A(i)&&R(i,(u,d)=>{a(d),c(u)})}var v,w;function J(){if(!v&&(v=l(0),w=l(0),f)){const e=()=>{v.value=window.innerWidth,w.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:v,height:w}}var Y=/scroll|auto/i,O=f?window:void 0;function I(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function W(e,n=O){let t=e;for(;t&&t!==n&&I(t);){const{overflowY:i}=window.getComputedStyle(t);if(Y.test(i))return t;t=t.parentNode}return n}function K(e,n=O){const t=l();return b(()=>{e.value&&(t.value=W(e.value,n))}),t}var p;function G(){if(!p&&(p=l("visible"),f)){const e=()=>{p.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return p}var Q=Symbol("van-field");export{Q as C,F as a,q as b,K as c,V as d,j as e,G as f,J as g,W as h,B as o,g as r,U as u};
