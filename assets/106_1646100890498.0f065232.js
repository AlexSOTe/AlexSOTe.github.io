import{I as A}from"./51_1646100890498.3a1108a6.js";import{P as S}from"./68_1646100890498.006303ca.js";import{L as v}from"./57_1646100890498.c17fe708.js";import{p as I,a as y}from"./218_1646100890498.d1070b08.js";import{t as s,m as x,a as T}from"./206_1646100890498.c89c2bb9.js";import{e as w,p as B}from"./205_1646100890498.080e9a01.js";import{c as O}from"./208_1646100890498.8327a59a.js";import{d as H,c as t,m as K,n as N}from"./99_1646100890498.1410f50d.js";import{H as _}from"./210_1646100890498.14db90eb.js";const[D,a]=O("action-sheet"),E=w({},I,{title:String,round:s,actions:x(),closeIcon:T("cross"),closeable:s,cancelText:String,description:String,closeOnPopstate:s,closeOnClickAction:Boolean,safeAreaInsetBottom:s}),L=[...y,"round","closeOnPopstate","safeAreaInsetBottom"];var Q=H({name:D,props:E,emits:["select","cancel","update:show"],setup(n,{slots:c,emit:r}){const i=e=>r("update:show",e),l=()=>{i(!1),r("cancel")},u=()=>{if(n.title)return t("div",{class:a("header")},[n.title,n.closeable&&t(A,{name:n.closeIcon,class:[a("close"),_],onClick:l},null)])},f=()=>{if(c.cancel||n.cancelText)return[t("div",{class:a("gap")},null),t("button",{type:"button",class:a("cancel"),onClick:l},[c.cancel?c.cancel():n.cancelText])]},b=(e,o)=>e.loading?t(v,{class:a("loading-icon")},null):c.action?c.action({action:e,index:o}):[t("span",{class:a("name")},[e.name]),e.subname&&t("div",{class:a("subname")},[e.subname])],C=(e,o)=>{const{color:h,loading:d,callback:m,disabled:p,className:k}=e,g=()=>{p||d||(m&&m(e),n.closeOnClickAction&&i(!1),N(()=>r("select",e,o)))};return t("button",{type:"button",style:{color:h},class:[a("item",{loading:d,disabled:p}),k],onClick:g},[b(e,o)])},P=()=>{if(n.description||c.description){const e=c.description?c.description():n.description;return t("div",{class:a("description")},[e])}};return()=>t(S,K({class:a(),position:"bottom","onUpdate:show":i},B(n,L)),{default:()=>{var e;return[u(),P(),t("div",{class:a("content")},[n.actions.map(C),(e=c.default)==null?void 0:e.call(c)]),f()]}})}});export{Q as s};
