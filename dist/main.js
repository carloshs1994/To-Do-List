(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"body {\n  margin: 0;\n  width: 100vw;\n  height: 100vh;\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n  width: 500px;\n  height: auto;\n  background-color: rgb(200, 200, 200);\n  display: flex;\n  flex-direction: column;\n  gap: 0.5px;\n  border: none;\n  box-shadow: rgba(100, 100, 111, 0.2) 0.001px 7px 29px 0.001px;\n}\n\nli,\nform {\n  background-color: #fff;\n  width: calc(100% - 26px);\n  height: 50px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  border: none;\n  padding: 0 13px;\n  gap: 5px;\n}\n\nform {\n  padding: 0;\n  width: 100%;\n  justify-content: space-between;\n}\n\nli.hello p {\n  opacity: 0.7;\n}\n\nli button {\n  height: 20%;\n  background: none;\n  border: none;\n}\n\nli img,\nli form button img,\nli.hello img {\n  height: 10px;\n  margin-left: auto;\n  opacity: 0.4;\n}\n\ninput#enter-task {\n  width: 90%;\n  height: 35px;\n  border: none;\n  padding-left: 3px;\n}\n\ninput::placeholder {\n  font-style: italic;\n}\n\ninput#task {\n  outline: 2px solid #808080a8;\n  outline-style: auto;\n}\n\nli.hello input.task-text {\n  width: 85%;\n  height: 35px;\n  border: none;\n  padding-left: 3px;\n  font-size: 18px;\n}\n\n.clear {\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.85);\n}\n\nli.clear a {\n  text-decoration: none;\n  color: #808080c7;\n  font-weight: 100;\n}\n\nli.clear a:hover {\n  color: #000;\n  text-decoration: underline;\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},412:(e,n,t)=>{e.exports=t.p+"d529b620fd57a0e412bd.svg"},380:(e,n,t)=>{e.exports=t.p+"8fc369e9e780a8840c20.png"},330:(e,n,t)=>{e.exports=t.p+"9dc210e856863a8dd9f0.svg"},179:(e,n,t)=>{e.exports=t.p+"96ae42b30b69a72a189a.svg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var g=t(330),m=t(412),v=t(179),y=t(380);document.querySelector("form");const x=document.querySelector("ul.placeholder");let b=0;class k{constructor(e,n,t){this.description=e,this.completed=n,this.index=t}}function w(e,n,t,r){b=e.listOfTasks.length;const o=new k(n,!1,b),a=document.createElement("li");e.addNewTask(o),document.querySelectorAll(".hello").forEach((e=>e.remove())),document.querySelectorAll(".clear").forEach((e=>e.remove())),function(e,n){e.listOfTasks.forEach((e=>{const t=document.createElement("li");t.innerHTML=`\n      <input type="checkbox" id="task" name="task-${e.index+1}">\n      <input type="text" value="${e.description}" id="${e.index}" class="task-text">\n      <img class="${e.index}" src="${n}" alt="Delete or Drag and drop">\n    `,t.classList.add("hello"),x.appendChild(t)}))}(e,t),a.innerHTML='\n    <a href="#">Clear all completed</a>\n  ',a.className="clear",x.appendChild(a),document.querySelectorAll(".hello").forEach((n=>{n.addEventListener("keyup",(n=>{console.log(e.listOfTasks[n.target.id].description),console.log("it is working!",parseInt(n.target.id)),e.listOfTasks[n.target.id].description=n.target.value,console.log(e.listOfTasks[n.target.id].description)}))})),document.querySelectorAll("li.hello img").forEach((o=>{o.addEventListener("click",(o=>{o.target.src===r?function(e,n,t,r,o){console.log("before delete",e.listOfTasks.length),new Promise((t=>{b=e.listOfTasks.length;for(let t=0;t<b;t+=1)if(n===e.listOfTasks[t].index){e.listOfTasks.splice(t,1);break}console.log("The promise is fullfiled!"),t(e)})).then((e=>{e.listOfTasks.length=b-1,console.log(e.listOfTasks.length),w(e,t,r,o)}))}(e,parseInt(o.target.className),n,t,r):o.target.src===t&&(o.target.src=r)}))}))}const T=new class{constructor(){this.listOfTasks=[]}addNewTask(e){return this.listOfTasks.push(e)}},E=document.querySelector("#enter-task");document.getElementById("sync-icon").src=g,document.getElementById("enter-icon").src=y,document.querySelector("form").addEventListener("submit",(e=>{e.preventDefault(),w(T,E.value,m,v),E.value=""}))})()})();