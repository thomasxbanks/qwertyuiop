/* LXLabs cooper-az-respitool v1.0.0 */
(function(a){"function"==typeof define&&define.amd?define("main",a):a()})(function(){'use strict';var q=Math.round;function a(){return!!((window.cordova||window.PhoneGap||window.phonegap)&&/ios|iphone|ipod|ipad|android/i.test(navigator.userAgent))}function b(a=16){let b="";const c="abcdefghijklmnopqrstuvwxyz0123456789";for(let d=0;d<a;d+=1)b+=c.charAt(Math.floor(Math.random()*c.length));return b}function c(){let a=new Date().getTime();"undefined"!=typeof performance&&"function"==typeof performance.now&&(a+=performance.now());const b=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],e=["x","x","x","x","x","x","x","x","-","x","x","x","x","-","4","x","x","x","-","y","x","x","x","-","x","x","x","x","x","x","x","x","x","x","x","x"];let f="",g=0,h=0|a+4294967295*Math.random();for(;36>g++;){const a=e[g-1],c=15&h,d="x"===a?c:8|3&c;f+="-"===a||"4"===a?a:b[d],h=0==g%8?0|4294967295*Math.random():h>>4}return f}function d(){const a=document.querySelectorAll(".cutaway");a&&a.forEach(a=>z(a))}function e(a,b){const{cordova:c}=window,{target:d}=a,{mime:e}=d.dataset||y.defaultMimeType,f=c?"".concat(c.file.applicationDirectory,"www").concat(d.dataset.href):d.dataset.href,g=(a="event")=>{const c={ea:d&&d.dataset.category,el:d&&d.textContent.trim()},e=Object.assign({},y.trackingDefaults.download,c);e.t=a,b.track(e)},h=a=>{g("exception");const b="File (".concat(a,") not found.");alert(b)};c?c.plugins.fileOpener2.open(f,e,{error:()=>h(f),success:()=>g()}):fetch(f).then(a=>{a&&200>=a.status?(g(),window.open(f)):h(f)}).catch(()=>{h(f)})}function f(a){const b=document.querySelectorAll("[data-resource], [data-slidedeck], [data-publications-table]");b&&[...b].forEach(b=>{[...b.querySelectorAll("[data-download]")].forEach(b=>{b.addEventListener("click",b=>e(b,a),!1)})})}function g(){const a=document.querySelector("[data-publications-table]"),b=a?[...a.querySelectorAll("[data-download]")]:[],c=document.querySelector("[name=\"data-sort-cat\"]"),d=document.querySelector("[name=\"data-sort-cpd\"]"),e=a=>{a.style.display="none"},f=a=>{a.style.display=""},g=()=>{const b=[...document.querySelectorAll("[data-download]")],c=b.filter(a=>"none"!==a.style.display),d=!(0<c.length),e="<dialog aria-live=\"assertive\" open class=\"message warning\">".concat(y.message.zeroResults,"</dialog>"),f=a.querySelector(".heading"),g=a.querySelector(".message");g&&g.remove(),d&&f.insertAdjacentHTML("afterend",e)},h=()=>{const a=c.options[c.selectedIndex].value,h=d.options[d.selectedIndex].value;b.forEach(b=>{"Any"===a&&"Any"===h?f(b):"Any"===a&&"Any"!==h?b.dataset.cpd===h?f(b):e(b):"Any"===h&&"Any"!==a?b.dataset.cat===a?f(b):e(b):b.dataset.cat===a&&b.dataset.cpd===h?f(b):e(b)}),g()};if(a&&c&&d){c.addEventListener("change",h),d.addEventListener("change",h);const a=sessionStorage.getItem("publicationsFilterCategory");a&&(c.options.selectedIndex=[...c.options].map((b,c)=>b.value===a?c:null).filter(a=>a).join("")),h()}}function h(){const a=Array.from(document.querySelectorAll(".grid"));a&&a.forEach(a=>{const b=a.querySelector(".content");b&&(b.style.opacity=1)})}function i(){const a=Array.from(document.querySelectorAll(".page-navigation li[data-visible]")),b=localStorage.rowsToShow?JSON.parse(localStorage.rowsToShow):null;b&&a.forEach(a=>{a.setAttribute("data-visible",!!(-1<b.indexOf(a.dataset.target))),a.setAttribute("tabindex",-1<b.indexOf(a.dataset.target)?"":"-1")})}function j(){const a=document.querySelector("[data-page=\"homepage\"]");a&&(localStorage.removeItem("session"),localStorage.removeItem("rowsToShow"),sessionStorage.removeItem("publicationsFilterCategory"),sessionStorage.removeItem("publicationsFilterCompound"))}function k(){const a=document.querySelector("[data-resource]");if(a){const b=a.getBoundingClientRect().top,c=4*u(v(document.documentElement,"font-size"));a.style.maxHeight="calc(100vh - ".concat(b-c,"px)")}}function l(){const a=[...document.querySelectorAll("[data-save-compound]")];a&&a.forEach(a=>{a.addEventListener("click",a=>{const b=a.currentTarget.dataset.target,c=a.currentTarget.dataset.name,d=y.message.confirmHiddenCompoundData(c);E("".concat(d),b)})})}function m(){F.length&&F.forEach(a=>{a.addEventListener("click",a=>{const b=a.target.closest("article"),c="true"===b.dataset.active;b.dataset.active=!c},!1)})}function n(){const a=document.querySelector("[data-slidedeck]");if(a){const b=a.getBoundingClientRect().top,c=u(v(document.documentElement,"font-size"));a.style.height="calc(100vh - ".concat(b-c,"px)")}}function o(){const a=document.querySelector(".stop-motion_animation");let b;if(a&&"true"===document.body.dataset.active){const c=document.querySelector(".fallback"),d=Array.from(a.querySelectorAll("img:not(.fallback)"));let e=d.length;const f=()=>{clearInterval(b),d.forEach(a=>a.remove()),c.dataset.active=!0,a.insertAdjacentElement("afterbegin",c)};let g;const h=()=>{const a=new Date().getTime(),b=a-g,c=600>b&&0<b;return g=new Date().getTime(),s(c?"double tap":"tap"),c},i=x()?"touchstart":"click",j=document.querySelector("[data-page=\"homepage\"]");j&&j.addEventListener(i,()=>h()?f():null);const k=()=>{b=setInterval(()=>{const b=a.querySelector("img");a.insertAdjacentElement("beforeend",b)},40)},l=()=>{e=0===e?0:e-1,0===e&&k()};d.forEach(a=>{a.complete?l():a.addEventListener("load",l)})}}function p(a){const b={cd:document.body.dataset.page?document.body.dataset.page:"lxl_no_page"},c=Object.assign({},y.trackingDefaults.page,b);return a.track(c)}const r=()=>Math.random().toString(36).substr(2,9),s=a=>{let b=document.querySelector("#".concat("console-log-thomasxbanks-15483629641046188460")),c=[];b?c=[b.innerHTML]:(b=document.createElement("pre"),b.id="console-log-thomasxbanks-15483629641046188460",b.style.position="fixed",b.style.bottom=0,b.style.left="1rem",b.style.zIndex=54950,b.style.backgroundColor="rgba(48, 10, 36, 0.95)",b.style.color="rgba(255,255,255,0.95)",b.style.fontFamily="Courier New, monospace",b.style.fontSize="1rem",b.style.lineHeight="1.6em",b.style.padding="1rem",b.style.maxWidth="calc(50% - 2rem)",b.style.maxHeight="calc(100vh - 7rem)",b.style.overflow="auto");const d=a=>{"string"==typeof a?c.push(a):Object.keys(a).forEach(b=>{d(a[b])})};d(a),b.innerHTML="".concat(c.join("<br/>")),document.body.insertAdjacentElement("beforeend",b)},t=(c,a)=>c===a,u=a=>parseFloat(a.slice(0,a.length-a.match(/[a-zA-Z%]/g).length)),v=(a,b)=>window.getComputedStyle(a).getPropertyValue(b),w=a=>{let b=0,c=0;for(;a;){if("BODY"==a.tagName){const d=a.scrollLeft||document.documentElement.scrollLeft,e=a.scrollTop||document.documentElement.scrollTop;b+=a.offsetLeft-d+a.clientLeft,c+=a.offsetTop-e+a.clientTop}else b+=a.offsetLeft-a.scrollLeft+a.clientLeft,c+=a.offsetTop-a.scrollTop+a.clientTop;a=a.offsetParent}return{x:b,y:c}},x=()=>{const a=["(",["-webkit-","-moz-","-o-","-ms-"].join("touch-enabled),("),"heartz",")"].join("");return function(a){return window.matchMedia(a).matches}(a)};var y={deviceID:(()=>{let b=localStorage.getItem("deviceID");return b||(b=[r()],a()?b.unshift("lxl_"):b.unshift("web_"),b=b.join(""),localStorage.setItem("deviceID",b)),b})(),isPhoneGap:a(),sessionID:((a="session")=>{let b=localStorage.getItem(a);return b||(b=c(),localStorage.setItem(a,b)),b})(),defaultMimeType:"application/vnd.ms-powerpoint",trackingDefaults:{download:{ea:"",ec:"document",el:"",t:"event"},page:{el:"view",t:"screenview"}},message:{zeroResults:"Sorry, there are no results",confirmHiddenCompoundData:a=>"This will show all the data for ".concat(a,". Are you sure?")}};const z=a=>{var b=Math.abs;const c=v(document.documentElement,"--background_color-gradient"),d=a.querySelector("span[id*=\"gradient-\"]")||document.createElement("SPAN");d.id="gradient-".concat(r()),d.style.background=c,d.style.position="absolute",d.style.zIndex="-1",d.style.top="".concat(-b(w(a).y),"px"),d.style.left="".concat(-b(w(a).x),"px"),d.style.width="100vw",d.style.height="100vh",a.style.position="relative",a.style.overflow="hidden",a.insertAdjacentElement("afterbegin",d)},A=()=>{const a=[...document.querySelectorAll(".primary-navigation a")],b=document.body.dataset.nav;a.forEach(a=>{a.dataset.active=t(b,a.dataset.nav)})},B=()=>{const a=document.querySelector("[data-action=\"toggle-nav\"]"),b=document.querySelector("[data-target=\"primary-nav\"]");a&&b&&a.addEventListener("click",()=>{const c="true"===b.dataset.active;document.documentElement.style.overflow=c?"":"hidden",[...b.querySelectorAll("a")].forEach(a=>{a.setAttribute("tabindex",c?"-1":"0")}),a.dataset.active=!c,b.dataset.active=!c})},C=()=>{const a=[...document.querySelectorAll("[data-action=\"publications-link\"]")];a&&a.forEach(a=>{a.addEventListener("click",a=>{const{href:b,cat:c,cpd:d}=a.currentTarget.dataset;sessionStorage.setItem("publicationsFilterCategory",c),sessionStorage.setItem("publicationsFilterCompound",d),window.location.href=b})})},D=()=>{const a=[...document.querySelectorAll("[data-action=\"reset-publications\"]")];a&&a.forEach(a=>{a.addEventListener("click",()=>{sessionStorage.removeItem("publicationsFilterCategory"),sessionStorage.removeItem("publicationsFilterCompound")})})},E=(a,b)=>{const c=document.createElement("SPAN");c.style.position="fixed",c.style.top="0",c.style.left="0",c.style.zIndex="99000",c.style.width="100vw",c.style.height="100vh",c.style.backgroundColor="rgba(0, 0, 0, 0.33)",c.style.display="flex",c.style.alignItems="center",c.style.justifyContent="center";const d="\n    <dialog class=\"message\" open aria-live=\"assertive\">\n      <form>\n        <legend class=\"title\" style=\"text-align: center;\">Confirmation</legend>\n        <fieldset style=\"text-align: center; padding: 0; border: none;\">\n          <label style=\"display: block; padding-bottom: 1em;\">".concat(a,"</label>\n          <button type=\"button\" data-target=\"reject\">No</button>\n          <button type=\"button\" data-target=\"confirm\">Yes</button>\n        </fieldset>\n      </form>\n    </dialog>\n  ");c.insertAdjacentHTML("afterbegin",d),document.body.insertAdjacentElement("afterbegin",c);const e=a=>{"confirm"===a.currentTarget.dataset.target&&(window.location.href="".concat(b,"/index.html")),c.remove()},f=c.querySelectorAll("button");f.forEach(a=>{a.addEventListener("click",e)})},F=[...document.querySelectorAll("button[data-show-hidden]")],G="https://www.google-analytics.com",H=document.querySelector("meta[name='application-name']"),I=H&&H.dataset.name,J=H&&H.dataset.version,K=H&&H.dataset.geoid,L={v:1,tid:"UA-36156565-7",ds:y.isPhoneGap?"app":"web",geoid:K,an:I,av:J,uid:y.deviceID,cid:y.sessionID};class M{constructor(a="lxl_"){this.prefix=a,Lockr.prefix=this.prefix}static buildParamString(a){let b="";return Object.entries(Object.assign(L,a)).forEach(([a,c])=>{b+="".concat(a,"=").concat(c,"&")}),b=b.slice(0,-1),b}track(a){const c=this.constructor.buildParamString(a),d=b(),e=new XMLHttpRequest;e.open("HEAD","".concat(G,"/collect")),e.onreadystatechange=()=>{if(4===e.readyState&&200!==e.status&&Lockr.sadd("hits",encodeURI("".concat(c,"z=").concat(d))),4===e.readyState&&200===e.status){if("sendBeacon"in navigator)navigator.sendBeacon("".concat(G,"/collect"),encodeURI("".concat(c,"z=").concat(d)));else{const a=new XMLHttpRequest;a.open("POST","".concat(G,"/collect"),!0),a.send(encodeURI("".concat(c,"z=").concat(d)))}this.constructor.sync()}},e.send()}static sync(){if(0<Lockr.smembers("hits").length){const a=1*new Date/1e3,b=Lockr.smembers("hits"),c=20,d=Lockr.smembers("hits").map((a,d)=>0==d%c?b.slice(d,d+c):null).filter(a=>a);for(let b=0,c=d.length;b<c;b+=1){const c=new XMLHttpRequest;c.open("POST","".concat(G,"/batch"),!0),c.send(d[b].map(b=>-1<b.indexOf("&qt=")?b.replace(/qt=([^&]*)/,"qt=".concat(1e3*q(a-b.match(/qt=([^&]*)/)[1]/1e3))):b).join("\n"))}Lockr.flush()}}maybeSendSavedHits(){const a=new XMLHttpRequest;a.open("HEAD","".concat(G,"/collect")),a.onreadystatechange=()=>{4===a.readyState&&200===a.status&&this.constructor.sync()},a.send()}onDeviceReady(){document.addEventListener("online",this.maybeSendSavedHits.bind(this),!1)}bindEvents(){document.addEventListener("deviceready",this.onDeviceReady.bind(this),!1)}init(){this.bindEvents()}}const N=()=>{document.body.dataset.active=!0,j(),h();const a=new M;a.init(),p(a),A(),B(),f(a),i(),l(),o(),m(),C(),D(),g(),k(),n(),d()};y.isPhoneGap?document.addEventListener("deviceready",N):window.addEventListener("load",N)});
