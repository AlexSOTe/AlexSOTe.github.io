import{g as a}from"./206_1646216447691.d6b1c04a.js";import{d as f}from"./210_1646216447691.4d0768a9.js";import{d as u}from"./212_1646216447691.64675068.js";import{s as o}from"./58_1646216447691.c5ac6186.js";function p(t){const r=f(t)+".";return(e,...n)=>{const c=o.messages(),i=a(c,r+e)||a(c,e);return u(i)?i(...n):i}}function s(t,r){return r?typeof r=="string"?` ${t}--${r}`:Array.isArray(r)?r.reduce((e,n)=>e+s(t,n),""):Object.keys(r).reduce((e,n)=>e+(r[n]?s(t,n):""),""):""}function g(t){return(r,e)=>(r&&typeof r!="string"&&(e=r,r=""),r=r?`${t}__${r}`:t,`${r}${s(r,e)}`)}function _(t){const r=`van-${t}`;return[r,g(r),p(r)]}export{_ as c};
