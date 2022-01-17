(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,"body {\n  margin: 0;\n  width: 100vw;\n  height: 100vh;\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n  width: 500px;\n  height: auto;\n  background-color: rgb(200, 200, 200);\n  display: flex;\n  flex-direction: column;\n  gap: 0.5px;\n  border: none;\n  box-shadow: rgba(100, 100, 111, 0.2) 0.001px 7px 29px 0.001px;\n}\n\nli,\nform {\n  background-color: #fff;\n  width: calc(100% - 26px);\n  height: 50px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  border: none;\n  padding: 0 13px;\n  gap: 5px;\n}\n\nform {\n  padding: 0;\n  width: 100%;\n  justify-content: space-between;\n}\n\nli.hello p {\n  opacity: 0.7;\n}\n\nli button {\n  height: 20%;\n  background: none;\n  border: none;\n}\n\nli img,\nli form button img,\nli.hello img {\n  height: 10px;\n  margin-left: auto;\n  opacity: 0.4;\n}\n\ninput#enter-task {\n  width: 90%;\n  height: 35px;\n  border: none;\n  padding-left: 3px;\n}\n\ninput::placeholder {\n  font-style: italic;\n}\n\ninput#task {\n  outline: 2px solid #808080a8;\n  outline-style: auto;\n}\n\nli.hello input.task-text {\n  width: 85%;\n  height: 35px;\n  border: none;\n  padding-left: 3px;\n  font-size: 18px;\n}\n\n.clear {\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.85);\n}\n\nli.clear a {\n  text-decoration: none;\n  color: #808080c7;\n  font-weight: 100;\n}\n\nli.clear a:hover {\n  color: #000;\n  text-decoration: underline;\n}\n\n.checked-task {\n  text-decoration: line-through;\n  color: #808080a8;\n}\n\n.dragging {\n  border: 1px solid #000;\n}\n",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(c[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var l=e[i],s=r.base?l[0]+r.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var p=n(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var l=r(e,o),s=0;s<a.length;s++){var d=n(a[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},412:(e,t,n)=>{e.exports=n.p+"d529b620fd57a0e412bd.svg"},380:(e,t,n)=>{e.exports=n.p+"8fc369e9e780a8840c20.png"},330:(e,t,n)=>{e.exports=n.p+"9dc210e856863a8dd9f0.svg"},179:(e,t,n)=>{e.exports=n.p+"96ae42b30b69a72a189a.svg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),c=n.n(a),i=n(565),l=n.n(i),s=n(216),d=n.n(s),u=n(589),p=n.n(u),f=n(426),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var g=n(330),m=n(412),v=n(179),y=n(380);function x(e){localStorage.setItem("To-Do-List",JSON.stringify(e))}function b(){document.querySelectorAll(".hello").forEach((e=>e.remove())),document.querySelectorAll(".clear").forEach((e=>e.remove()))}function S(e,t){const n=document.querySelector("ul.placeholder"),r=document.createElement("li");localStorage.clear(),x(t),t.forEach((t=>{const r=document.createElement("li");r.innerHTML=`\n      <input type="checkbox" id="task">\n      <input type="text" value="${t.description}" id="${t.index}" class="task-text">\n      <img class="${t.index}" src="${e}" alt="Delete or Drag and drop">\n    `,r.classList.add("hello"),r.draggable=!0,n.appendChild(r),t.completed&&"task-text checked-task"!==r.children[1].className&&(r.children[0].checked=!0,r.children[1].classList.add("checked-task"))})),r.innerHTML='\n    <a href="#">Clear all completed</a>\n  ',r.className="clear",n.appendChild(r)}class E{constructor(e,t,n){this.description=e,this.completed=t,this.index=n}}const k=document.querySelector("#enter-task");let w=[];function L(){!function(e,t){const n=document.querySelectorAll(".hello"),r=document.querySelector(".placeholder");n.forEach((n=>{n.addEventListener("dragstart",(()=>{n.classList.add("dragging")})),n.addEventListener("dragend",(()=>{n.classList.remove("dragging"),r.querySelectorAll(".hello").forEach(((n,r)=>{let o=!1;"task-text checked-task"===n.children[1].className&&(o=!0);const a=new e(n.children[1].value,o,r);t[r]=a})),localStorage.clear(),localStorage.setItem("To-Do-List",JSON.stringify(t))}))})),r.addEventListener("dragover",(e=>{e.preventDefault();const t=document.querySelector(".dragging"),n=[...r.querySelectorAll(".hello:not(.dragging)")],o=document.querySelector(".clear"),a=n.reduce(((t,n)=>{const r=n.getBoundingClientRect();let o=e.clientY-r.top-25;return o<0&&o>t.offset?{offset:o,element:n}:t}),{offset:Number.NEGATIVE_INFINITY}).element;null==a?r.insertBefore(t,o):r.insertBefore(t,a)}))}(E,w),document.querySelector(".clear").addEventListener("click",(()=>{w=function(e){return(e=e.filter((e=>!1===e.completed))).forEach(((e,t)=>{e.index=t})),e}(w),b(),S(m,w),L()})),document.querySelectorAll("#task").forEach((e=>{e.addEventListener("change",(e=>{w=function(e,t){return e.target.parentNode.children[1].classList.toggle("checked-task"),e.target.checked?t[e.target.parentNode.children[1].id].completed=!0:e.target.checked||(t[e.target.parentNode.children[1].id].completed=!1),t}(e,w),localStorage.clear(),x(w)}))})),document.querySelectorAll(".hello").forEach((e=>{e.addEventListener("keyup",(e=>{w[e.target.id].description=e.target.value,localStorage.clear(),x(w)}))})),document.querySelectorAll("li.hello img").forEach((e=>{e.addEventListener("click",(e=>{e.target.src===v?(function(e,t,n){for(let n=0;n<t.length;n+=1)e===t[n].index&&t.splice(n,1);t.forEach(((e,t)=>{e.index=t})),b(),S(n,t)}(parseInt(e.target.className,10),w,m),L()):e.target.src===m&&(e.target.src=v)}))}))}document.getElementById("sync-icon").src=g,document.getElementById("enter-icon").src=y,document.querySelector("form").addEventListener("submit",(e=>{e.preventDefault(),function(e){const t=new E(e,!1,w.length);w.push(t),b(),S(m,w),L()}(k.value),k.value=""})),0!==localStorage.length&&(JSON.parse(localStorage.getItem("To-Do-List")).forEach((e=>{w.push(e)})),b(),S(m,w),L())})()})();