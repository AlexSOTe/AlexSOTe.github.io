import{g as s,a as m}from"./209_1646100890498.c2b067c9.js";import{c as u}from"./208_1646100890498.8327a59a.js";import{c as r,d,a as p}from"./99_1646100890498.1410f50d.js";import{e as f}from"./205_1646100890498.080e9a01.js";import{n as o,a as S}from"./206_1646100890498.c89c2bb9.js";const[x,n]=u("loading"),g=Array(12).fill(null).map((e,a)=>r("i",{class:n("line",String(a+1))},null)),v=r("svg",{class:n("circular"),viewBox:"25 25 50 50"},[r("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),y={size:o,type:S("circular"),color:String,vertical:Boolean,textSize:o,textColor:String};var I=d({name:x,props:y,setup(e,{slots:a}){const l=p(()=>f({color:e.color},s(e.size))),i=()=>{var t;if(a.default)return r("span",{class:n("text"),style:{fontSize:m(e.textSize),color:(t=e.textColor)!=null?t:e.color}},[a.default()])};return()=>{const{type:t,vertical:c}=e;return r("div",{class:n([t,{vertical:c}])},[r("span",{class:n("spinner",t),style:l.value},[t==="spinner"?g:v]),i()])}}});export{I as s};
