function u(t,e){const n=Object.create(null),o=t.split(",");for(let s=0;s<o.length;s++)n[o[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const h="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",P=u(h);function T(t){return!!t||t===""}function m(t){if(c(t)){const e={};for(let n=0;n<t.length;n++){const o=t[n],s=r(o)?S(o):m(o);if(s)for(const p in s)e[p]=s[p]}return e}else{if(r(t))return t;if(i(t))return t}}const b=/;(?![^(]*\))/g,O=/:(.+)/;function S(t){const e={};return t.split(b).forEach(n=>{if(n){const o=n.split(O);o.length>1&&(e[o[0].trim()]=o[1].trim())}}),e}function j(t){let e="";if(r(t))e=t;else if(c(t))for(let n=0;n<t.length;n++){const o=j(t[n]);o&&(e+=o+" ")}else if(i(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _=t=>r(t)?t:t==null?"":c(t)||i(t)&&(t.toString===y||!l(t.toString))?JSON.stringify(t,g,2):String(t),g=(t,e)=>e&&e.__v_isRef?g(t,e.value):A(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[o,s])=>(n[`${o} =>`]=s,n),{})}:R(e)?{[`Set(${e.size})`]:[...e.values()]}:i(e)&&!c(e)&&!B(e)?String(e):e,C={},U=[],V=()=>{},F=()=>!1,w=/^on[^a-z]/,$=t=>w.test(t),x=t=>t.startsWith("onUpdate:"),D=Object.assign,I=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},z=Object.prototype.hasOwnProperty,L=(t,e)=>z.call(t,e),c=Array.isArray,A=t=>a(t)==="[object Map]",R=t=>a(t)==="[object Set]",l=t=>typeof t=="function",r=t=>typeof t=="string",k=t=>typeof t=="symbol",i=t=>t!==null&&typeof t=="object",G=t=>i(t)&&l(t.then)&&l(t.catch),y=Object.prototype.toString,a=t=>y.call(t),H=t=>a(t).slice(8,-1),B=t=>a(t)==="[object Object]",J=t=>r(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,K=u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),f=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},E=/-(\w)/g,Y=f(t=>t.replace(E,(e,n)=>n?n.toUpperCase():"")),M=/\B([A-Z])/g,q=f(t=>t.replace(M,"-$1").toLowerCase()),N=f(t=>t.charAt(0).toUpperCase()+t.slice(1)),W=f(t=>t?`on${N(t)}`:""),Z=(t,e)=>!Object.is(t,e),Q=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},X=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},v=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let d;const tt=()=>d||(d=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});export{m as A,R as B,B as C,tt as D,C as E,K as F,Q as G,G as H,W as I,V as N,r as a,$ as b,x as c,c as d,D as e,Y as f,N as g,q as h,l as i,P as j,T as k,i as l,_ as m,k as n,H as o,Z as p,X as q,L as r,A as s,v as t,J as u,u as v,I as w,F as x,U as y,j as z};
