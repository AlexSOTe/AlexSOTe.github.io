import{u as Z,f as ee,d as x}from"./203_1646049679343.df6f371e.js";import{u as te}from"./264_1646049679343.93950f5c.js";import{u as ae}from"./205_1646049679343.05f3d086.js";import{o as ie}from"./267_1646049679343.2433c9d1.js";import{w as oe,a as ne,i as H,p as le}from"./210_1646049679343.57e9ac64.js";import{c as ce}from"./211_1646049679343.3e0ed98b.js";import{d as se,a as u,w as T,g as ue,v as re,x as ve,y as fe,c as P,n as he}from"./99_1646049679343.0466afb1.js";import{a as de,r as me}from"./224_1646049679343.202f23d2.js";import{t as M,n as N,b as O}from"./209_1646049679343.78ce7a55.js";import{c as z}from"./212_1646049679343.9e42ae67.js";const[W,k]=ce("swipe"),ge={loop:M,width:N,height:N,vertical:Boolean,autoplay:O(0),duration:O(500),touchable:M,lazyRender:Boolean,initialSwipe:O(0),indicatorColor:String,showIndicators:M,stopPropagation:M},we=Symbol(W);var Ae=se({name:W,props:ge,emits:["change"],setup(a,{emit:X,slots:p}){const h=de(),t=me({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),s=te(),{children:d,linkChildren:V}=Z(we),i=u(()=>d.length),r=u(()=>t[a.vertical?"height":"width"]),f=u(()=>a.vertical?s.deltaY.value:s.deltaX.value),g=u(()=>t.rect?(a.vertical?t.rect.height:t.rect.width)-r.value*i.value:0),K=u(()=>Math.ceil(Math.abs(g.value)/r.value)),A=u(()=>i.value*r.value),S=u(()=>(t.active+i.value)%i.value),I=u(()=>{const e=a.vertical?"vertical":"horizontal";return s.direction.value===e}),L=u(()=>{const e={transitionDuration:`${t.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${t.offset}px)`};if(r.value){const n=a.vertical?"height":"width",o=a.vertical?"width":"height";e[n]=`${A.value}px`,e[o]=a[o]?`${a[o]}px`:""}return e}),U=e=>{const{active:n}=t;return e?a.loop?z(n+e,-1,i.value):z(n+e,0,K.value):n},_=(e,n=0)=>{let o=e*r.value;a.loop||(o=Math.min(o,-g.value));let c=n-o;return a.loop||(c=z(c,g.value,0)),c},v=({pace:e=0,offset:n=0,emitChange:o})=>{if(i.value<=1)return;const{active:c}=t,l=U(e),y=_(l,n);if(a.loop){if(d[0]&&y!==g.value){const D=y<g.value;d[0].setOffset(D?A.value:0)}if(d[i.value-1]&&y!==0){const D=y>0;d[i.value-1].setOffset(D?-A.value:0)}}t.active=l,t.offset=y,o&&l!==c&&X("change",S.value)},C=()=>{t.swiping=!0,t.active<=-1?v({pace:i.value}):t.active>=i.value&&v({pace:-i.value})},j=()=>{C(),s.reset(),x(()=>{t.swiping=!1,v({pace:-1,emitChange:!0})})},B=()=>{C(),s.reset(),x(()=>{t.swiping=!1,v({pace:1,emitChange:!0})})};let E;const w=()=>clearTimeout(E),b=()=>{w(),a.autoplay>0&&i.value>1&&(E=setTimeout(()=>{B(),b()},+a.autoplay))},m=(e=+a.initialSwipe)=>{if(!h.value)return;const n=()=>{var o,c;if(!H(h)){const l={width:h.value.offsetWidth,height:h.value.offsetHeight};t.rect=l,t.width=+((o=a.width)!=null?o:l.width),t.height=+((c=a.height)!=null?c:l.height)}i.value&&(e=Math.min(i.value-1,e)),t.active=e,t.swiping=!0,t.offset=_(e),d.forEach(l=>{l.setOffset(0)}),b()};H(h)?he().then(n):n()},$=()=>m(t.active);let R;const q=e=>{!a.touchable||(s.start(e),R=Date.now(),w(),C())},F=e=>{a.touchable&&t.swiping&&(s.move(e),I.value&&(le(e,a.stopPropagation),v({offset:f.value})))},Y=()=>{if(!a.touchable||!t.swiping)return;const e=Date.now()-R,n=f.value/e;if((Math.abs(n)>.25||Math.abs(f.value)>r.value/2)&&I.value){const c=a.vertical?s.offsetY.value:s.offsetX.value;let l=0;a.loop?l=c>0?f.value>0?-1:1:0:l=-Math[f.value>0?"ceil":"floor"](f.value/r.value),v({pace:l,emitChange:!0})}else f.value&&v({pace:0});t.swiping=!1,b()},G=(e,n={})=>{C(),s.reset(),x(()=>{let o;a.loop&&e===i.value?o=t.active===0?0:e:o=e%i.value,n.immediate?x(()=>{t.swiping=!1}):t.swiping=!1,v({pace:o-t.active,emitChange:!0})})},J=(e,n)=>{const o=n===S.value,c=o?{backgroundColor:a.indicatorColor}:void 0;return P("i",{style:c,class:k("indicator",{active:o})},null)},Q=()=>{if(p.indicator)return p.indicator({active:S.value,total:i.value});if(a.showIndicators&&i.value>1)return P("div",{class:k("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(J)])};return ae({prev:j,next:B,state:t,resize:$,swipeTo:G}),V({size:r,props:a,count:i,activeIndicator:S}),T(()=>a.initialSwipe,e=>m(+e)),T(i,()=>m(t.active)),T(()=>a.autoplay,b),T([oe,ne],$),T(ee(),e=>{e==="visible"?b():w()}),ue(m),re(()=>m(t.active)),ie(()=>m(t.active)),ve(w),fe(w),()=>{var e;return P("div",{ref:h,class:k()},[P("div",{style:L.value,class:k("track",{vertical:a.vertical}),onTouchstart:q,onTouchmove:F,onTouchend:Y,onTouchcancel:Y},[(e=p.default)==null?void 0:e.call(p)]),Q()])}}});export{we as S,Ae as s};
