import{r as c}from"./217_1646106533728.095bf57e.js";import{g as l,d as m}from"./223_1646106533728.9e9ea4ab.js";function T(t,s,f){let e=0;const o=t.scrollLeft,n=f===0?1:Math.round(f*1e3/16);function r(){t.scrollLeft+=(s-o)/n,++e<n&&c(r)}r()}function L(t,s,f,e){let o=l(t);const n=o<s,r=f===0?1:Math.round(f*1e3/16),i=(s-o)/r;function a(){o+=i,(n&&o>s||!n&&o<s)&&(o=s),m(t,o),n&&o<s||!n&&o>s?c(a):e&&c(e)}a()}export{L as a,T as s};
