import{T as c,v as u}from"./10_1645865269747.a9809b67.js";import{u as d}from"./239_1645865269747.5b5069a6.js";import{g as f}from"./216_1645865269747.74b6ade3.js";import{d as v,e as r,w as y}from"./11_1645865269747.66203b6b.js";import{e as p,n as h}from"./212_1645865269747.b7db011c.js";import{c as w}from"./215_1645865269747.41f851cb.js";import{n,u as z,t as s}from"./213_1645865269747.1937370e.js";import{i as S}from"./218_1645865269747.147180cd.js";import{p as x}from"./214_1645865269747.95b2722e.js";const[D,N]=w("overlay"),P={show:Boolean,zIndex:n,duration:n,className:z,lockScroll:s,lazyRender:s,customStyle:Object};var B=v({name:D,props:P,setup(e,{slots:o}){const m=d(()=>e.show||!e.lazyRender),i=a=>{x(a,!0)},l=m(()=>{var a;const t=p(f(e.zIndex),e.customStyle);return S(e.duration)&&(t.animationDuration=`${e.duration}s`),y(r("div",{style:t,class:[N(),e.className],onTouchmove:e.lockScroll?i:h},[(a=o.default)==null?void 0:a.call(o)]),[[u,e.show]])});return()=>r(c,{name:"van-fade",appear:!0},{default:l})}});export{B as s};
