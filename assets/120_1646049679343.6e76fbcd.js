import{u}from"./203_1646049679343.df6f371e.js";import{c as m}from"./211_1646049679343.3e0ed98b.js";import{t as p}from"./209_1646049679343.78ce7a55.js";import{d as f,c as g}from"./99_1646049679343.0466afb1.js";import{B as V}from"./213_1646049679343.2e029cf6.js";const[d,b]=m("collapse"),h=Symbol(d),C={border:p,accordion:Boolean,modelValue:{type:[String,Number,Array],default:""}};var x=f({name:d,props:C,emits:["change","update:modelValue"],setup(a,{emit:s,slots:c}){const{linkChildren:n}=u(h),r=e=>{s("change",e),s("update:modelValue",e)};return n({toggle:(e,t)=>{const{accordion:o,modelValue:l}=a;r(o?e===l?"":e:t?l.concat(e):l.filter(i=>i!==e))},isExpanded:e=>{const{accordion:t,modelValue:o}=a;return t?o===e:o.includes(e)}}),()=>{var e;return g("div",{class:[b(),{[V]:a.border}]},[(e=c.default)==null?void 0:e.call(c)])}}});export{h as C,x as s};
