/* LXLabs cooper-az-respitool v1.0.0 */
(function(a){"function"==typeof define&&define.amd?define("main",a):a()})(function(){'use strict';var q=Math.round;function a(){return!!((window.cordova||window.PhoneGap||window.phonegap)&&/ios|iphone|ipod|ipad|android/i.test(navigator.userAgent))}function b(a=16){let b="";const c="abcdefghijklmnopqrstuvwxyz0123456789";for(let d=0;d<a;d+=1)b+=c.charAt(Math.floor(Math.random()*c.length));return b}function c(){let a=new Date().getTime();"undefined"!=typeof performance&&"function"==typeof performance.now&&(a+=performance.now());const b=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],e=["x","x","x","x","x","x","x","x","-","x","x","x","x","-","4","x","x","x","-","y","x","x","x","-","x","x","x","x","x","x","x","x","x","x","x","x"];let f="",g=0,h=0|a+4294967295*Math.random();for(;36>g++;){const a=e[g-1],c=15&h,d="x"===a?c:8|3&c;f+="-"===a||"4"===a?a:b[d],h=0==g%8?0|4294967295*Math.random():h>>4}return f}function d(){const a=document.querySelectorAll(".cutaway");a&&a.forEach(a=>x(a))}function e(a,b){const{cordova:c}=window,{target:d}=a,{mime:e}=d.dataset||w.defaultMimeType,f=c?"".concat(c.file.applicationDirectory,"www").concat(d.dataset.href):d.dataset.href,g=(a="event")=>{const c={ea:d&&d.dataset.category,el:d&&d.textContent.trim()},e=Object.assign({},w.trackingDefaults.download,c);e.t=a,b.track(e)},h=a=>{g("exception");const b="File (".concat(a,") not found.");alert(b)};c?c.plugins.fileOpener2.open(f,e,{error:()=>h(f),success:()=>g()}):fetch(f).then(a=>{a&&200>=a.status?(g(),window.open(f)):h(f)}).catch(()=>{h(f)})}function f(a){const b=document.querySelectorAll("[data-resource], [data-slidedeck], [data-publications-table]");b&&[...b].forEach(b=>{[...b.querySelectorAll("[data-download]")].forEach(b=>{b.addEventListener("click",b=>e(b,a),!1)})})}function g(){const a=document.querySelector("[data-publications-table]"),b=a?[...a.querySelectorAll("[data-download]")]:[],c=[...document.querySelectorAll(".footnotes_container span")]||[],d=b.concat(c),e=document.querySelector("[name=\"data-sort-cat\"]"),f=document.querySelector("[name=\"data-sort-cpd\"]"),g=a=>{a.style.display="none"},h=a=>{a.style.display=""},i=()=>{const b=[...document.querySelectorAll("[data-download]")],c=b.filter(a=>"none"!==a.style.display),d=!(0<c.length),e="<dialog aria-live=\"assertive\" open class=\"message warning\">".concat(w.message.zeroResults,"</dialog>"),f=a.querySelector(".heading"),g=a.querySelector(".message");g&&g.remove(),d&&f.insertAdjacentHTML("afterend",e)},j=()=>{const a=e.options[e.selectedIndex].value,b=f.options[f.selectedIndex].value;d.forEach(c=>{"Any"===a&&"Any"===b?h(c):"Any"===a&&"Any"!==b?c.dataset.cpd===b?h(c):g(c):"Any"===b&&"Any"!==a?c.dataset.cat===a?h(c):g(c):c.dataset.cat===a&&c.dataset.cpd===b?h(c):g(c)}),i()};if(a&&e&&f){e.addEventListener("change",j),f.addEventListener("change",j);const a=sessionStorage.getItem("publicationsFilterCategory");a&&(e.options.selectedIndex=[...e.options].map((b,c)=>b.value===a?c:null).filter(a=>a).join("")),j()}}function h(){const a=Array.from(document.querySelectorAll(".page-navigation li[data-visible]")),b=localStorage.rowsToShow?JSON.parse(localStorage.rowsToShow):null;b&&a.forEach(a=>{a.setAttribute("data-visible",!!(-1<b.indexOf(a.dataset.target))),a.setAttribute("tabindex",-1<b.indexOf(a.dataset.target)?"":"-1")})}function i(){const a=document.querySelector("[data-page=\"homepage\"]");a&&(localStorage.removeItem("session"),localStorage.removeItem("rowsToShow"),sessionStorage.removeItem("publicationsFilterCategory"),sessionStorage.removeItem("publicationsFilterCompound"))}function j(){const a=document.querySelector(".references_container");if(a){const b=a.querySelector(".tray-animation"),c=a.querySelector("[data-action=\"open-modal\"]"),d=a.querySelector("[data-action=\"close-modal\"]");c.addEventListener("click",()=>{b.dataset.active=!0}),d.addEventListener("click",()=>{b.dataset.active=!1})}}function k(){const a=document.querySelector("[data-resource]");if(a){const b=a.getBoundingClientRect().top,c=t(u(document.documentElement,"font-size"));a.style.maxHeight="calc(100vh - ".concat(b-c,"px)")}}function l(){const a=[...document.querySelectorAll("[data-save-compound]")];a&&a.forEach(a=>{a.addEventListener("click",a=>{const b=a.currentTarget.dataset.target,c=a.currentTarget.dataset.name,d=w.message.confirmHiddenCompoundData(c);C("".concat(d),b)})})}function m(){D.length&&D.forEach(a=>{a.addEventListener("click",a=>{const b=a.target.closest("article"),c="true"===b.dataset.active;b.dataset.active=!c},!1)})}function n(){const a=document.querySelector("[data-slidedeck]");if(a){const b=a.getBoundingClientRect().top,c=t(u(document.documentElement,"font-size"));a.style.height="calc(100vh - ".concat(b-c,"px)")}}function o(){const a=document.querySelector(".stop-motion_animation");let b;if(a){const c=document.querySelector(".fallback"),d=Array.from(a.querySelectorAll("img:not(.fallback)"));let e=d.length;a.style.visibility="hidden";const f=()=>{c.dataset.active=!0,a.insertAdjacentElement("afterbegin",c)},g=()=>{c.dataset.active=!1,a.insertAdjacentElement("beforebegin",c),a.querySelector(".fallback")?a.querySelector(".fallback").remove():null},h=()=>{clearInterval(b),f()};let i;const j=()=>{const a=new Date().getTime(),b=a-i;return i=new Date().getTime(),600>b&&0<b},k=w.isPhoneGap?"touchstart":"click",l=document.querySelector("[data-page=\"homepage\"]");l&&l.addEventListener(k,()=>{j()&&h()});const m=()=>{g();b=setInterval(()=>{const b=a.querySelector("img");a.insertAdjacentElement("beforeend",b)},40)},n=()=>{e=0===e?0:e-1,0===e&&(a.style.visibility="visible",m())};d.forEach(a=>{a.complete?n():a.addEventListener("load",n)});const o=document.querySelectorAll(".tray-animation"),p={attributes:!0,childList:!0,subtree:!0},q=function(a){for(const b of a){const a="attributes"===b.type&&"data-active"===b.attributeName;if(a){const a="true"===b.target.dataset.active;a?h():m()}}},r=[];o.forEach((a,b)=>{r.push(new MutationObserver(q)),r[b].observe(a,p)})}}function p(a){const b={cd:document.body.dataset.page?document.body.dataset.page:"lxl_no_page"},c=Object.assign({},w.trackingDefaults.page,b);return a.track(c)}const r=()=>Math.random().toString(36).substr(2,9),s=(c,a)=>c===a,t=a=>parseFloat(a.slice(0,a.length-a.match(/[a-zA-Z%]/g).length)),u=(a,b)=>window.getComputedStyle(a).getPropertyValue(b),v=a=>{let b=0,c=0;for(;a;){if("BODY"===a.tagName){const d=a.scrollLeft||document.documentElement.scrollLeft,e=a.scrollTop||document.documentElement.scrollTop;b+=a.offsetLeft-d+a.clientLeft,c+=a.offsetTop-e+a.clientTop}else b+=a.offsetLeft-a.scrollLeft+a.clientLeft,c+=a.offsetTop-a.scrollTop+a.clientTop;a=a.offsetParent}return{x:b,y:c}};var w={deviceID:(()=>{let b=localStorage.getItem("deviceID");return b||(b=[r()],a()?b.unshift("lxl_"):b.unshift("web_"),b=b.join(""),localStorage.setItem("deviceID",b)),b})(),isPhoneGap:a(),sessionID:((a="session")=>{let b=localStorage.getItem(a);return b||(b=c(),localStorage.setItem(a,b)),b})(),defaultMimeType:"application/vnd.ms-powerpoint",trackingDefaults:{download:{ea:"",ec:"document",el:"",t:"event"},page:{el:"view",t:"screenview"}},message:{zeroResults:"Sorry, there are no results",confirmHiddenCompoundData:a=>"This will show all the data for <span class=\"force-lowercase\">".concat(a,"</span>. Are you sure?")}};const x=a=>{var b=Math.abs;const c=u(document.documentElement,"--background_color-gradient"),d=a.querySelector("span[id*=\"gradient-\"]")||document.createElement("SPAN");d.id="gradient-".concat(r()),d.style.background=c,d.style.position="absolute",d.style.zIndex="-1",d.style.top="".concat(-b(v(a).y),"px"),d.style.left="".concat(-b(v(a).x),"px"),d.style.width="100vw",d.style.height="100vh",a.style.position="relative",a.style.overflow="hidden",a.insertAdjacentElement("afterbegin",d)},y=()=>{const a=[...document.querySelectorAll(".primary-navigation a")],b=document.body.dataset.nav;a.forEach(a=>{a.dataset.active=s(b,a.dataset.nav)})},z=()=>{const a=document.querySelector("[data-action=\"toggle-nav\"]"),b=document.querySelector("[data-target=\"primary-nav\"]");a&&b&&a.addEventListener("click",()=>{const c="true"===b.dataset.active;document.documentElement.style.overflow=c?"":"hidden",[...b.querySelectorAll("a")].forEach(a=>{a.setAttribute("tabindex",c?"-1":"0")}),a.dataset.active=!c,b.dataset.active=!c})},A=()=>{const a=[...document.querySelectorAll("[data-action=\"publications-link\"]")];a&&a.forEach(a=>{a.addEventListener("click",a=>{const{href:b,cat:c,cpd:d}=a.currentTarget.dataset;sessionStorage.setItem("publicationsFilterCategory",c),sessionStorage.setItem("publicationsFilterCompound",d),window.location.href=b})})},B=()=>{const a=[...document.querySelectorAll("[data-action=\"reset-publications\"]")];a&&a.forEach(a=>{a.addEventListener("click",()=>{sessionStorage.removeItem("publicationsFilterCategory"),sessionStorage.removeItem("publicationsFilterCompound")})})},C=(a,b)=>{const c=document.createElement("SPAN");c.style.position="fixed",c.style.top="0",c.style.left="0",c.style.zIndex="99000",c.style.width="100vw",c.style.height="100vh",c.style.backgroundColor="rgba(0, 0, 0, 0.33)",c.style.display="flex",c.style.alignItems="center",c.style.justifyContent="center";const d="\n    <dialog class=\"message\" open aria-live=\"assertive\">\n      <form>\n        <legend class=\"title\" style=\"text-align: center;\">Confirmation</legend>\n        <fieldset style=\"text-align: center; padding: 0; border: none;\">\n          <label style=\"display: block; padding-bottom: 1em;\">".concat(a,"</label>\n          <button class=\"button\" type=\"button\" data-target=\"reject\">No</button>\n          <button class=\"button\" type=\"button\" data-target=\"confirm\">Yes</button>\n        </fieldset>\n      </form>\n    </dialog>\n  ");c.insertAdjacentHTML("afterbegin",d),document.body.insertAdjacentElement("afterbegin",c);const e=a=>{"confirm"===a.currentTarget.dataset.target&&(window.location.href="".concat(b,"/index.html")),c.remove()},f=c.querySelectorAll("button");f.forEach(a=>{a.addEventListener("click",e)})},D=[...document.querySelectorAll("button[data-show-hidden]")],E="https://www.google-analytics.com",F=document.querySelector("meta[name='application-name']"),G=F&&F.dataset.name,H=F&&F.dataset.version,I=F&&F.dataset.geoid,J={v:1,tid:"UA-36156565-7",ds:w.isPhoneGap?"app":"web",geoid:I,an:G,av:H,uid:w.deviceID,cid:w.sessionID};class K{constructor(a="lxl_"){this.prefix=a,Lockr.prefix=this.prefix}static buildParamString(a){let b="";return Object.entries(Object.assign(J,a)).forEach(([a,c])=>{b+="".concat(a,"=").concat(c,"&")}),b=b.slice(0,-1),b}track(a){const c=this.constructor.buildParamString(a),d=b(),e=new XMLHttpRequest;e.open("HEAD","".concat(E,"/collect")),e.onreadystatechange=()=>{if(4===e.readyState&&200!==e.status&&Lockr.sadd("hits",encodeURI("".concat(c,"z=").concat(d))),4===e.readyState&&200===e.status){if("sendBeacon"in navigator)navigator.sendBeacon("".concat(E,"/collect"),encodeURI("".concat(c,"z=").concat(d)));else{const a=new XMLHttpRequest;a.open("POST","".concat(E,"/collect"),!0),a.send(encodeURI("".concat(c,"z=").concat(d)))}this.constructor.sync()}},e.send()}static sync(){if(0<Lockr.smembers("hits").length){const a=1*new Date/1e3,b=Lockr.smembers("hits"),c=20,d=Lockr.smembers("hits").map((a,d)=>0==d%c?b.slice(d,d+c):null).filter(a=>a);for(let b=0,c=d.length;b<c;b+=1){const c=new XMLHttpRequest;c.open("POST","".concat(E,"/batch"),!0),c.send(d[b].map(b=>-1<b.indexOf("&qt=")?b.replace(/qt=([^&]*)/,"qt=".concat(1e3*q(a-b.match(/qt=([^&]*)/)[1]/1e3))):b).join("\n"))}Lockr.flush()}}maybeSendSavedHits(){const a=new XMLHttpRequest;a.open("HEAD","".concat(E,"/collect")),a.onreadystatechange=()=>{4===a.readyState&&200===a.status&&this.constructor.sync()},a.send()}onDeviceReady(){document.addEventListener("online",this.maybeSendSavedHits.bind(this),!1)}bindEvents(){document.addEventListener("deviceready",this.onDeviceReady.bind(this),!1)}init(){this.bindEvents()}}const L=()=>{i();const a=new K;a.init(),p(a),y(),z(),f(a),h(),l(),o(),m(),A(),B(),g(),k(),n(),d(),j(),document.body.dataset.active=!0};w.isPhoneGap?(document.documentElement.classList.remove("with-statusbar-overlay"),document.addEventListener("deviceready",L)):window.addEventListener("load",L)});
