import{n as U,l as A,o as gt,p as V,q as Rt,d as w,r as H,i as mt,N as Et,s as z,u as Y,e as vt,v as bt}from"./100_1646101018013.15e24e29.js";let d;class re{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&d&&(this.parent=d,this.index=(d.scopes||(d.scopes=[])).push(this)-1)}run(e){if(this.active)try{return d=this,e()}finally{d=this.parent}}on(){d=this}off(){d=this.parent}stop(e){if(this.active){let s,r;for(s=0,r=this.effects.length;s<r;s++)this.effects[s].stop();for(s=0,r=this.cleanups.length;s<r;s++)this.cleanups[s]();if(this.scopes)for(s=0,r=this.scopes.length;s<r;s++)this.scopes[s].stop(!0);if(this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function St(t,e=d){e&&e.active&&e.effects.push(t)}const $=t=>{const e=new Set(t);return e.w=0,e.n=0,e},st=t=>(t.w&R)>0,nt=t=>(t.n&R)>0,It=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=R},Mt=t=>{const{deps:e}=t;if(e.length){let s=0;for(let r=0;r<e.length;r++){const n=e[r];st(n)&&!nt(n)?n.delete(t):e[s++]=n,n.w&=~R,n.n&=~R}e.length=s}},N=new WeakMap;let b=0,R=1;const W=30;let l;const E=Symbol(""),j=Symbol("");class Tt{constructor(e,s=null,r){this.fn=e,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,St(this,r)}run(){if(!this.active)return this.fn();let e=l,s=g;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=l,l=this,g=!0,R=1<<++b,b<=W?It(this):Q(this),this.fn()}finally{b<=W&&Mt(this),R=1<<--b,l=this.parent,g=s,this.parent=void 0}}stop(){this.active&&(Q(this),this.onStop&&this.onStop(),this.active=!1)}}function Q(t){const{deps:e}=t;if(e.length){for(let s=0;s<e.length;s++)e[s].delete(t);e.length=0}}let g=!0;const rt=[];function xt(){rt.push(g),g=!1}function Kt(){const t=rt.pop();g=t===void 0?!0:t}function u(t,e,s){if(g&&l){let r=N.get(t);r||N.set(t,r=new Map);let n=r.get(s);n||r.set(s,n=$()),it(n)}}function it(t,e){let s=!1;b<=W?nt(t)||(t.n|=R,s=!st(t)):s=!t.has(l),s&&(t.add(l),l.deps.push(t))}function m(t,e,s,r,n,i){const c=N.get(t);if(!c)return;let a=[];if(e==="clear")a=[...c.values()];else if(s==="length"&&w(t))c.forEach((f,h)=>{(h==="length"||h>=r)&&a.push(f)});else switch(s!==void 0&&a.push(c.get(s)),e){case"add":w(t)?Y(s)&&a.push(c.get("length")):(a.push(c.get(E)),z(t)&&a.push(c.get(j)));break;case"delete":w(t)||(a.push(c.get(E)),z(t)&&a.push(c.get(j)));break;case"set":z(t)&&a.push(c.get(E));break}if(a.length===1)a[0]&&D(a[0]);else{const f=[];for(const h of a)h&&f.push(...h);D($(f))}}function D(t,e){for(const s of w(t)?t:[...t])(s!==l||s.allowRecurse)&&(s.scheduler?s.scheduler():s.run())}const Pt=bt("__proto__,__v_isRef,__isVue"),ct=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(U)),Ot=y(),zt=y(!1,!0),At=y(!0),X=Ht();function Ht(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...s){const r=o(this);for(let i=0,c=this.length;i<c;i++)u(r,"get",i+"");const n=r[e](...s);return n===-1||n===!1?r[e](...s.map(o)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...s){xt();const r=o(this)[e].apply(this,s);return Kt(),r}}),t}function y(t=!1,e=!1){return function(r,n,i){if(n==="__v_isReactive")return!t;if(n==="__v_isReadonly")return t;if(n==="__v_isShallow")return e;if(n==="__v_raw"&&i===(t?e?Lt:lt:e?ut:ft).get(r))return r;const c=w(r);if(!t&&c&&H(X,n))return Reflect.get(X,n,i);const a=Reflect.get(r,n,i);return(U(n)?ct.has(n):Pt(n))||(t||u(r,"get",n),e)?a:p(a)?!c||!Y(n)?a.value:a:A(a)?t?dt(a):ht(a):a}}const Ct=at(),Gt=at(!0);function at(t=!1){return function(s,r,n,i){let c=s[r];if(S(c)&&p(c)&&!p(n))return!1;if(!t&&!S(n)&&(Zt(n)||(n=o(n),c=o(c)),!w(s)&&p(c)&&!p(n)))return c.value=n,!0;const a=w(s)&&Y(r)?Number(r)<s.length:H(s,r),f=Reflect.set(s,r,n,i);return s===o(i)&&(a?V(n,c)&&m(s,"set",r,n):m(s,"add",r,n)),f}}function Nt(t,e){const s=H(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&s&&m(t,"delete",e,void 0),r}function Wt(t,e){const s=Reflect.has(t,e);return(!U(e)||!ct.has(e))&&u(t,"has",e),s}function jt(t){return u(t,"iterate",w(t)?"length":E),Reflect.ownKeys(t)}const ot={get:Ot,set:Ct,deleteProperty:Nt,has:Wt,ownKeys:jt},Dt={get:At,set(t,e){return!0},deleteProperty(t,e){return!0}},Ut=vt({},ot,{get:zt,set:Gt}),B=t=>t,C=t=>Reflect.getPrototypeOf(t);function T(t,e,s=!1,r=!1){t=t.__v_raw;const n=o(t),i=o(e);e!==i&&!s&&u(n,"get",e),!s&&u(n,"get",i);const{has:c}=C(n),a=r?B:s?L:I;if(c.call(n,e))return a(t.get(e));if(c.call(n,i))return a(t.get(i));t!==n&&t.get(e)}function x(t,e=!1){const s=this.__v_raw,r=o(s),n=o(t);return t!==n&&!e&&u(r,"has",t),!e&&u(r,"has",n),t===n?s.has(t):s.has(t)||s.has(n)}function K(t,e=!1){return t=t.__v_raw,!e&&u(o(t),"iterate",E),Reflect.get(t,"size",t)}function Z(t){t=o(t);const e=o(this);return C(e).has.call(e,t)||(e.add(t),m(e,"add",t,t)),this}function k(t,e){e=o(e);const s=o(this),{has:r,get:n}=C(s);let i=r.call(s,t);i||(t=o(t),i=r.call(s,t));const c=n.call(s,t);return s.set(t,e),i?V(e,c)&&m(s,"set",t,e):m(s,"add",t,e),this}function tt(t){const e=o(this),{has:s,get:r}=C(e);let n=s.call(e,t);n||(t=o(t),n=s.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return n&&m(e,"delete",t,void 0),i}function et(){const t=o(this),e=t.size!==0,s=t.clear();return e&&m(t,"clear",void 0,void 0),s}function P(t,e){return function(r,n){const i=this,c=i.__v_raw,a=o(c),f=e?B:t?L:I;return!t&&u(a,"iterate",E),c.forEach((h,v)=>r.call(n,f(h),f(v),i))}}function O(t,e,s){return function(...r){const n=this.__v_raw,i=o(n),c=z(i),a=t==="entries"||t===Symbol.iterator&&c,f=t==="keys"&&c,h=n[t](...r),v=s?B:e?L:I;return!e&&u(i,"iterate",f?j:E),{next(){const{value:M,done:G}=h.next();return G?{value:M,done:G}:{value:a?[v(M[0]),v(M[1])]:v(M),done:G}},[Symbol.iterator](){return this}}}}function _(t){return function(...e){return t==="delete"?!1:this}}function Vt(){const t={get(i){return T(this,i)},get size(){return K(this)},has:x,add:Z,set:k,delete:tt,clear:et,forEach:P(!1,!1)},e={get(i){return T(this,i,!1,!0)},get size(){return K(this)},has:x,add:Z,set:k,delete:tt,clear:et,forEach:P(!1,!0)},s={get(i){return T(this,i,!0)},get size(){return K(this,!0)},has(i){return x.call(this,i,!0)},add:_("add"),set:_("set"),delete:_("delete"),clear:_("clear"),forEach:P(!0,!1)},r={get(i){return T(this,i,!0,!0)},get size(){return K(this,!0)},has(i){return x.call(this,i,!0)},add:_("add"),set:_("set"),delete:_("delete"),clear:_("clear"),forEach:P(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=O(i,!1,!1),s[i]=O(i,!0,!1),e[i]=O(i,!1,!0),r[i]=O(i,!0,!0)}),[t,s,e,r]}const[Yt,$t,yt,Bt]=Vt();function F(t,e){const s=e?t?Bt:yt:t?$t:Yt;return(r,n,i)=>n==="__v_isReactive"?!t:n==="__v_isReadonly"?t:n==="__v_raw"?r:Reflect.get(H(s,n)&&n in r?s:r,n,i)}const Ft={get:F(!1,!1)},qt={get:F(!1,!0)},Jt={get:F(!0,!1)},ft=new WeakMap,ut=new WeakMap,lt=new WeakMap,Lt=new WeakMap;function Qt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xt(t){return t.__v_skip||!Object.isExtensible(t)?0:Qt(gt(t))}function ht(t){return S(t)?t:q(t,!1,ot,Ft,ft)}function ie(t){return q(t,!1,Ut,qt,ut)}function dt(t){return q(t,!0,Dt,Jt,lt)}function q(t,e,s,r,n){if(!A(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=n.get(t);if(i)return i;const c=Xt(t);if(c===0)return t;const a=new Proxy(t,c===2?r:s);return n.set(t,a),a}function J(t){return S(t)?J(t.__v_raw):!!(t&&t.__v_isReactive)}function S(t){return!!(t&&t.__v_isReadonly)}function Zt(t){return!!(t&&t.__v_isShallow)}function ce(t){return J(t)||S(t)}function o(t){const e=t&&t.__v_raw;return e?o(e):t}function ae(t){return Rt(t,"__v_skip",!0),t}const I=t=>A(t)?ht(t):t,L=t=>A(t)?dt(t):t;function pt(t){g&&l&&(t=o(t),it(t.dep||(t.dep=$())))}function _t(t,e){t=o(t),t.dep&&D(t.dep)}function p(t){return!!(t&&t.__v_isRef===!0)}function oe(t){return wt(t,!1)}function fe(t){return wt(t,!0)}function wt(t,e){return p(t)?t:new kt(t,e)}class kt{constructor(e,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?e:o(e),this._value=s?e:I(e)}get value(){return pt(this),this._value}set value(e){e=this.__v_isShallow?e:o(e),V(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:I(e),_t(this))}}function te(t){return p(t)?t.value:t}const ee={get:(t,e,s)=>te(Reflect.get(t,e,s)),set:(t,e,s,r)=>{const n=t[e];return p(n)&&!p(s)?(n.value=s,!0):Reflect.set(t,e,s,r)}};function ue(t){return J(t)?t:new Proxy(t,ee)}class se{constructor(e,s,r,n){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Tt(e,()=>{this._dirty||(this._dirty=!0,_t(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=r}get value(){const e=o(this);return pt(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function le(t,e,s=!1){let r,n;const i=mt(t);return i?(r=t,n=Et):(r=t.get,n=t.set),new se(r,n,i||!n,s)}Promise.resolve();export{re as E,Tt as R,oe as a,Zt as b,J as c,ce as d,le as e,xt as f,Kt as g,u as h,p as i,ie as j,m as k,ae as m,ue as p,ht as r,fe as s,o as t,te as u};
