import{o as t}from"./203_1646049679343.df6f371e.js";import{i as u}from"./208_1646049679343.1651ae3e.js";import{x as v,y as a}from"./99_1646049679343.0466afb1.js";function m(e,r){if(!u||!window.IntersectionObserver)return;const o=new IntersectionObserver(s=>{r(s[0].intersectionRatio>0)},{root:document.body}),i=()=>{e.value&&o.observe(e.value)},n=()=>{e.value&&o.unobserve(e.value)};v(n),a(n),t(i)}export{m as u};
