import{v as T}from"./12_1646049679343.7ec6ec6f.js";import{T as _}from"./199_1646049679343.5503f87d.js";import{a as y}from"./203_1646049679343.df6f371e.js";import{u as P}from"./245_1646049679343.17659f7b.js";import{u as g}from"./205_1646049679343.05f3d086.js";import{r as B}from"./206_1646049679343.cb74e795.js";import{T as R}from"./263_1646049679343.48e52edc.js";import{S as A}from"./88_1646049679343.303d86c3.js";import{c as N}from"./211_1646049679343.3e0ed98b.js";import{e as C}from"./208_1646049679343.1651ae3e.js";import{n as b,u as E,t as I}from"./209_1646049679343.78ce7a55.js";import{d as k,a as z,w as K,p as V,c as l,u as Y,n as $}from"./99_1646049679343.0466afb1.js";import{a as j}from"./224_1646049679343.202f23d2.js";const[D,s]=N("tab"),L=C({},B,{dot:Boolean,name:b,badge:b,title:String,disabled:Boolean,titleClass:E,titleStyle:[String,Object],showZeroBadge:I});var te=k({name:D,props:L,setup(n,{slots:t}){const o=P(),i=j(!1),{parent:e,index:u}=y(_);if(!e)return;const d=()=>{var a;return(a=n.name)!=null?a:u.value},w=()=>{i.value=!0,e.props.lazyRender&&$(()=>{e.onRendered(d(),n.title)})},r=z(()=>{const a=d()===e.currentName.value;return a&&!i.value&&w(),a});return K(()=>n.title,()=>{e.setLine(),e.scrollIntoView()}),V(R,r),()=>{var a;const p=`${e.id}-${u.value}`,{animated:m,swipeable:h,scrollspy:c,lazyRender:S}=e.props;if(!t.default&&!m)return;const f=c||r.value;if(m||h)return l(A,{id:o,role:"tabpanel",class:s("panel-wrapper",{inactive:!r.value}),tabindex:r.value?0:-1,"aria-hidden":!r.value,"aria-labelledby":p},{default:()=>{var v;return[l("div",{class:s("panel")},[(v=t.default)==null?void 0:v.call(t)])]}});const x=i.value||c||!S?(a=t.default)==null?void 0:a.call(t):null;return g({id:o}),Y(l("div",{id:o,role:"tabpanel",class:s("panel"),tabindex:f?0:-1,"aria-labelledby":p},[x]),[[T,f]])}}});export{te as s};
