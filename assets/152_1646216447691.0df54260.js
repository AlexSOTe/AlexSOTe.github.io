import{N as c}from"./247_1646216447691.b51c83eb.js";import{c as s}from"./209_1646216447691.386e9d21.js";import{a as d,n as p}from"./207_1646216447691.060563d6.js";import{d as f,c as t}from"./99_1646216447691.16221a66.js";import{g}from"./210_1646216447691.4d0768a9.js";const[u,i]=s("empty"),l=["error","search","default"],S={image:d("default"),imageSize:p,description:String};var k=f({name:u,props:S,setup(n,{slots:r}){const a=()=>{if(r.image)return r.image();let{image:e}=n;return e==="network"?c:(l.includes(e)&&(e=`https://img.yzcdn.cn/vant/empty-image-${e}.png`),t("img",{src:e},null))},m=()=>{const e=r.description?r.description():n.description;if(e)return t("p",{class:i("description")},[e])},o=()=>{if(r.default)return t("div",{class:i("bottom")},[r.default()])};return()=>t("div",{class:i()},[t("div",{class:i("image"),style:g(n.imageSize)},[a()]),m(),o()])}});export{k as s};
