var m=(n,i,o)=>{if(!i.has(n))throw TypeError("Cannot "+o)},a=(n,i,o)=>(m(n,i,"read from private field"),o?o.call(n):i.get(n)),y=(n,i,o)=>{if(i.has(n))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(n):i.set(n,o)},v=(n,i,o,h)=>(m(n,i,"write to private field"),h?h.call(n,o):i.set(n,o),o);(function(){var n;function i(r,e,...t){const s=document.createElement(r);return typeof e=="string"?s.append(o(e)):Array.isArray(e)?s.append(...e):(Object.assign(s,e),Object.assign(s.style,e?.style)),t.length&&s.append(...t),s}function o(r){return document.createTextNode(r)}async function h(){return new Promise(r=>{document.readyState=="loading"?document.addEventListener("DOMContentLoaded",()=>r(),{once:!0}):r()})}class f{constructor(){y(this,n,{})}on(e,t){const s=a(this,n)[e];return s?s.push(t):a(this,n)[e]=[t],this}addListener(e,t){return this.on(e,t)}once(e,t){const s=(...u)=>{this.off(e,s),t(...u)};return this.on(e,s),this}emit(e,...t){const s=a(this,n)[e]||[];for(let u=0;u<s.length;u++)s[u](...t);return Boolean(s.length)}off(e,t){return a(this,n)[e]&&(a(this,n)[e]=a(this,n)[e].filter(s=>s!==t)),this}removeListener(e,t){return this.off(e,t)}removeAllListeners(e){return e?delete a(this,n)[e]:v(this,n,{}),this}eventNames(){return Reflect.ownKeys(a(this,n))}listeners(e){return a(this,n)[e]}listenerCount(e){var t,s;return(s=(t=a(this,n)[e])==null?void 0:t.length)!=null?s:0}}n=new WeakMap;class w extends f{constructor(){super();const{history:e,location:t}=window,{pushState:s,replaceState:u}=e;e.pushState=(...c)=>{s.apply(e,c),this.emit("pushState",t,c[0])},e.replaceState=(...c)=>{u.apply(e,c),this.emit("replaceState",t,c[0])},window.addEventListener("popstate",({state:c})=>{this.emit("popState",t,c)})}}const d=new w,g=".base-movie-main-info_link__YwtP1",S=".styles_mainTitle__IFQyZ";class k{constructor(e,t,s){this.key=e,this.initialValue=t,this.storage=s}get values(){try{const e=this.storage.getItem(this.key);return e?JSON.parse(e):this.initialValue}catch{return this.initialValue}}write(e){e instanceof Function&&(e=e(this.values));try{this.storage.setItem(this.key,JSON.stringify(e))}catch(t){return console.error(`Failed to save (${this.key}):`,t.message),this.initialValue}return e}reset(){this.write(this.initialValue)}}class C extends k{constructor(e,t){super(e,t,localStorage)}}const l=new C("movies",[]);function E(){if(!l.values.length)return;const r=new Blob([JSON.stringify(l.values,null,2)],{type:"text/json"}),e=i("a",{href:URL.createObjectURL(r),download:`kinopoisk-films-${Date.now()}.json`});e.click(),e.remove(),l.reset()}h().then(L),window.addEventListener("keypress",r=>{r.code==="KeyZ"&&confirm(`\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438 \u0443\u0434\u0430\u043B\u0438\u0442\u044C ${l.values.length} \u0444\u0438\u043B\u044C\u043C\u043E\u0432?`)&&E()});async function L(){d.on("popState",p),d.on("pushState",p),d.on("replaceState",p)}async function p(){const r=document.querySelectorAll(g);for(const e of r){const t=e.querySelector(S);t&&t.textContent&&l.write([...new Set([...l.values,t.textContent])])}}})();
