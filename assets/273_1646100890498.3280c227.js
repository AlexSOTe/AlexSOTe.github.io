import{r as c}from"./214_1646100890498.871a7092.js";import{g as l,d as m}from"./207_1646100890498.346dc33c.js";function T(t,s,f){let e=0;const o=t.scrollLeft,n=f===0?1:Math.round(f*1e3/16);function r(){t.scrollLeft+=(s-o)/n,++e<n&&c(r)}r()}function L(t,s,f,e){let o=l(t);const n=o<s,r=f===0?1:Math.round(f*1e3/16),i=(s-o)/r;function a(){o+=i,(n&&o>s||!n&&o<s)&&(o=s),m(t,o),n&&o<s||!n&&o>s?c(a):e&&c(e)}a()}export{L as a,T as s};
