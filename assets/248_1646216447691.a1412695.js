import{e as s,d as a,b as u}from"./212_1646216447691.64675068.js";import{c,s as f}from"./208_1646216447691.23e9e31f.js";function m(t){return Array.isArray(t)?!t.length:t===0?!1:!t}function l(t,n){return!(n.required&&m(t)||n.pattern&&!n.pattern.test(String(t)))}function h(t,n){return new Promise(i=>{const e=n.validator(t,n);if(s(e)){e.then(i);return}i(e)})}function d(t,n){const{message:i}=n;return a(i)?i(t,n):i||""}function y({target:t}){t.composing=!0}function x({target:t}){t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}function S(t,n){const i=c();t.style.height="auto";let e=t.scrollHeight;if(u(n)){const{maxHeight:r,minHeight:o}=n;r!==void 0&&(e=Math.min(e,r)),o!==void 0&&(e=Math.max(e,o))}e&&(t.style.height=`${e}px`,f(i))}function R(t){return t==="number"?{type:"text",inputmode:"decimal"}:t==="digit"?{type:"tel",inputmode:"numeric"}:{type:t}}function T(t){return[...t].length}function b(t,n){return[...t].slice(0,n).join("")}export{h as a,S as b,T as c,b as d,x as e,d as g,R as m,l as r,y as s};
