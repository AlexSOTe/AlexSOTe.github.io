import{a as h}from"./287_1646100890498.86c99514.js";class l{constructor(i,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=i,this.hook=s;const n={};if(i.settings)for(const e in i.settings){const t=i.settings[e];n[e]=t.defaultValue}const o=`__vue-devtools-plugin-settings__${i.id}`;let a=Object.assign({},n);try{const e=localStorage.getItem(o),t=JSON.parse(e);Object.assign(a,t)}catch{}this.fallbacks={getSettings(){return a},setSettings(e){try{localStorage.setItem(o,JSON.stringify(e))}catch{}a=e}},s&&s.on(h,(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...r)=>{this.onQueue.push({method:t,args:r})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:t==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...r)=>(this.targetQueue.push({method:t,args:r,resolve:()=>{}}),this.fallbacks[t](...r)):(...r)=>new Promise(g=>{this.targetQueue.push({method:t,args:r,resolve:g})})})}async setRealTarget(i){this.target=i;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}export{l as A};
