import{v as E}from"./12_1646100890498.7f52eedd.js";import{c as C}from"./113_1646100890498.04e3c85e.js";import{C as S}from"./136_1646100890498.c6e22de8.js";import{a as T,d as _,r as z}from"./214_1646100890498.871a7092.js";import{u as O}from"./216_1646100890498.5d157cb4.js";import{u as B}from"./238_1646100890498.e2123210.js";import{C as H}from"./25_1646100890498.028f8d79.js";import{c as N}from"./208_1646100890498.8327a59a.js";import{e as j,p as y}from"./205_1646100890498.080e9a01.js";import{n as A,t as k}from"./206_1646100890498.c89c2bb9.js";import{d as D,a as x,w as I,c as l,m as K,n as V,u as Y}from"./99_1646100890498.1410f50d.js";import{a as m}from"./221_1646100890498.ed3f8858.js";const[$,i]=N("collapse-item"),q=["icon","title","value","label","right-icon"],F=j({},C,{name:A,isLink:k,disabled:Boolean,readonly:Boolean,lazyRender:k});var ne=D({name:$,props:F,setup(a,{slots:c}){const t=m(),d=m(),{parent:u,index:v}=T(S);if(!u)return;const p=x(()=>{var e;return(e=a.name)!=null?e:v.value}),r=x(()=>u.isExpanded(p.value)),o=m(r.value),L=B(()=>o.value||!a.lazyRender),h=()=>{r.value?t.value&&(t.value.style.height=""):o.value=!1};I(r,(e,s)=>{if(s===null)return;e&&(o.value=!0),(e?V:z)(()=>{if(!d.value||!t.value)return;const{offsetHeight:n}=d.value;if(n){const g=`${n}px`;t.value.style.height=e?"0":g,_(()=>{t.value&&(t.value.style.height=e?g:"0")})}else h()})});const b=(e=!r.value)=>{u.toggle(p.value,e)},w=()=>{!a.disabled&&!a.readonly&&b()},P=()=>{const{border:e,disabled:s,readonly:f}=a,n=y(a,Object.keys(C));return f&&(n.isLink=!1),(s||f)&&(n.clickable=!1),l(H,K({role:"button",class:i("title",{disabled:s,expanded:r.value,borderless:!e}),"aria-expanded":String(r.value),onClick:w},n),y(c,q))},R=L(()=>{var e;return Y(l("div",{ref:t,class:i("wrapper"),onTransitionend:h},[l("div",{ref:d,class:i("content")},[(e=c.default)==null?void 0:e.call(c)])]),[[E,o.value]])});return O({toggle:b}),()=>l("div",{class:[i({border:v.value&&a.border})]},[P(),R()])}});export{ne as s};
