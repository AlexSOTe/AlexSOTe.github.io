import{c as S,b as P,e as f}from"./215_1646216447691.3104614a.js";import{u as $}from"./273_1646216447691.b80fb75b.js";import{i as k,g as T}from"./208_1646216447691.23e9e31f.js";import{c as R}from"./209_1646216447691.386e9d21.js";import{n as I,a as N,b as h}from"./207_1646216447691.060563d6.js";import{d as z,a as l,w as B,c as x}from"./99_1646216447691.16221a66.js";import{a as C,r as E}from"./226_1646216447691.ad238de2.js";import{u as H,b as V}from"./210_1646216447691.4d0768a9.js";import{e as _}from"./206_1646216447691.d6b1c04a.js";const[j,F]=R("sticky"),L={zIndex:I,position:N("top"),container:Object,offsetTop:h(0),offsetBottom:h(0)};var Q=z({name:j,props:L,emits:["scroll","change"],setup(r,{emit:m,slots:d}){const n=C(),g=S(n),t=E({fixed:!1,width:0,height:0,transform:0}),i=l(()=>H(r.position==="top"?r.offsetTop:r.offsetBottom)),v=l(()=>{const{fixed:e,height:c,width:o}=t;if(e)return{width:`${o}px`,height:`${c}px`}}),w=l(()=>{if(!t.fixed)return;const e=_(V(r.zIndex),{width:`${t.width}px`,height:`${t.height}px`,[r.position]:`${i.value}px`});return t.transform&&(e.transform=`translate3d(0, ${t.transform}px, 0)`),e}),b=e=>m("scroll",{scrollTop:e,isFixed:t.fixed}),u=()=>{if(!n.value||k(n))return;const{container:e,position:c}=r,o=f(n),y=T(window);if(t.width=o.width,t.height=o.height,c==="top")if(e){const s=f(e),a=s.bottom-i.value-t.height;t.fixed=i.value>o.top&&s.bottom>0,t.transform=a<0?a:0}else t.fixed=i.value>o.top;else{const{clientHeight:s}=document.documentElement;if(e){const a=f(e),p=s-a.top-i.value-t.height;t.fixed=s-i.value<o.bottom&&s>a.top,t.transform=p<0?-p:0}else t.fixed=s-i.value<o.bottom}b(y)};return B(()=>t.fixed,e=>m("change",e)),P("scroll",u,{target:g}),$(n,u),()=>{var e;return x("div",{ref:n,style:v.value},[x("div",{class:F({fixed:t.fixed}),style:w.value},[(e=d.default)==null?void 0:e.call(d)])])}}});export{Q as s};
