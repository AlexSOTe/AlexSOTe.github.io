import{S as u}from"./86_1646049679343.f98d4c2c.js";import{c as f}from"./211_1646049679343.3e0ed98b.js";import{d as w,w as b,g as h,c as s}from"./99_1646049679343.0466afb1.js";import{c as t,n as v}from"./209_1646049679343.78ce7a55.js";import{a as C}from"./224_1646049679343.202f23d2.js";const[g,c]=f("tabs");var x=w({name:g,props:{count:t(Number),inited:Boolean,animated:Boolean,duration:t(v),swipeable:Boolean,lazyRender:Boolean,currentIndex:t(Number)},emits:["change"],setup(e,{emit:d,slots:o}){const r=C(),l=a=>d("change",a),m=()=>{var a;const n=(a=o.default)==null?void 0:a.call(o);return e.animated||e.swipeable?s(u,{ref:r,loop:!1,class:c("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:l},{default:()=>[n]}):n},i=a=>{const n=r.value;n&&n.state.active!==a&&n.swipeTo(a,{immediate:!e.inited})};return b(()=>e.currentIndex,i),h(()=>{i(e.currentIndex)}),()=>s("div",{class:c("content",{animated:e.animated||e.swipeable})},[m()])}});export{x as s};
