import{g as r,e as l}from"./214_1646100890498.871a7092.js";import{c as a}from"./211_1646100890498.89a1c9e1.js";import{u as p}from"./221_1646100890498.ed3f8858.js";function f(o){const t="scrollTop"in o?o.scrollTop:o.pageYOffset;return Math.max(t,0)}function s(o,t){"scrollTop"in o?o.scrollTop=t:o.scrollTo(o.scrollX,t)}function e(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function d(o){s(window,o),s(document.body,o)}function S(o,t){if(o===window)return 0;const n=t?f(t):e();return l(o).top+n}const u=a();function h(){u&&d(e())}const w=o=>o.stopPropagation();function b(o,t){(typeof o.cancelable!="boolean"||o.cancelable)&&o.preventDefault(),t&&w(o)}function y(o){const t=p(o);if(!t)return!1;const n=window.getComputedStyle(t),i=n.display==="none",c=t.offsetParent===null&&n.position!=="fixed";return i||c}const{width:O,height:x}=r();export{x as a,S as b,e as c,s as d,f as g,y as i,b as p,h as r,d as s,O as w};
