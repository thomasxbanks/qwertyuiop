/* LXLabs cooper-az-respitool v1.0.0 */
(function(a){"function"==typeof define&&define.amd?define("main",a):a()})(function(){'use strict';var q=Math.round;function a(){return!!((window.cordova||window.PhoneGap||window.phonegap)&&/ios|iphone|ipod|ipad|android/i.test(navigator.userAgent))}function b(a=16){let b="";const c="abcdefghijklmnopqrstuvwxyz0123456789";for(let d=0;d<a;d+=1)b+=c.charAt(Math.floor(Math.random()*c.length));return b}function c(){let a=new Date().getTime();"undefined"!=typeof performance&&"function"==typeof performance.now&&(a+=performance.now());const b=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],e=["x","x","x","x","x","x","x","x","-","x","x","x","x","-","4","x","x","x","-","y","x","x","x","-","x","x","x","x","x","x","x","x","x","x","x","x"];let f="",g=0,h=0|a+4294967295*Math.random();for(;36>g++;){const a=e[g-1],c=15&h,d="x"===a?c:8|3&c;f+="-"===a||"4"===a?a:b[d],h=0==g%8?0|4294967295*Math.random():h>>4}return f}function d(){const a=document.querySelectorAll(".cutaway"),b=()=>a.forEach(a=>A(a));a&&(b(),window.addEventListener("resize",b))}function e(a,b){const{cordova:c}=window,{target:d}=a,{mime:e}=d.dataset||z.defaultMimeType,f=c?"".concat(c.file.applicationDirectory,"www").concat(d.dataset.href):d.dataset.href,g=(a="event")=>{const c={ec:"download",ea:d&&d.dataset.category,el:d&&w(d.textContent.trim())};c.t=a,b.track(c)},h=a=>{g("exception");const b="File (".concat(a,") not found.");alert(b)};c?c.plugins.fileOpener2.open(f,e,{error:()=>h(f),success:()=>g()}):fetch(f).then(a=>{a&&200>=a.status?(g(),window.open(f)):h(f)}).catch(()=>{h(f)})}function f(a){const b=document.querySelectorAll("[data-resource], [data-slidedeck], [data-publications-table]");b&&[...b].forEach(b=>{[...b.querySelectorAll("[data-download]")].forEach(b=>{b.addEventListener("click",b=>e(b,a),!1)})})}function g(){const a=document.querySelector("[data-publications-table]"),b=a?[...a.querySelectorAll("[data-download]")]:[],c=[...document.querySelectorAll(".footnotes_container span")]||[],d=b.concat(c),e=document.querySelector("[name=\"data-sort-cat\"]"),f=document.querySelector("[name=\"data-sort-cpd\"]"),g=a=>{a.style.display="none"},h=a=>{a.style.display=""},i=()=>{const b=[...document.querySelectorAll("[data-download]")],c=b.filter(a=>"none"!==a.style.display),d=!(0<c.length),e="<dialog aria-live=\"assertive\" open class=\"message warning\">".concat(z.message.zeroResults,"</dialog>"),f=a.querySelector(".heading"),g=a.querySelector(".message");g&&g.remove(),d&&f.insertAdjacentHTML("afterend",e)},j=()=>{const a=e.options[e.selectedIndex].value,b=f.options[f.selectedIndex].value;d.forEach(c=>{"Any"===a&&"Any"===b?h(c):"Any"===a&&"Any"!==b?c.dataset.cpd===b?h(c):g(c):"Any"===b&&"Any"!==a?c.dataset.cat===a?h(c):g(c):c.dataset.cat===a&&c.dataset.cpd===b?h(c):g(c)}),i()};if(a&&e&&f){e.addEventListener("change",j),f.addEventListener("change",j);const a=sessionStorage.getItem("publicationsFilterCategory");a&&(e.options.selectedIndex=[...e.options].map((b,c)=>b.value===a?c:null).filter(a=>a).join("")),j()}}function h(){const a=Array.from(document.querySelectorAll(".page-navigation li[data-visible]")),b=localStorage.rowsToShow?JSON.parse(localStorage.rowsToShow):null;b&&a.forEach(a=>{a.setAttribute("data-visible",!!(-1<b.indexOf(a.dataset.target))),a.setAttribute("tabindex",-1<b.indexOf(a.dataset.target)?"":"-1")})}function i(){const a=document.querySelector("[data-page=\"homepage\"]");a&&(localStorage.removeItem("session"),localStorage.removeItem("rowsToShow"),sessionStorage.removeItem("publicationsFilterCategory"),sessionStorage.removeItem("publicationsFilterCompound"))}function j(){const a=document.querySelector(".data_table");if(a){const b=document.querySelector(".masthead"),c=document.querySelector(".page_header.tertiary"),d=a.querySelector("form"),e=a.querySelector(".heading"),f=a.querySelector("[data-download]"),g=()=>{const g=window.getComputedStyle(b,null).getPropertyValue("height"),h=window.getComputedStyle(c,null).getPropertyValue("height"),i=window.getComputedStyle(d,null).getPropertyValue("height"),j=window.getComputedStyle(e,null).getPropertyValue("height"),k=window.getComputedStyle(e,null).getPropertyValue("margin-bottom"),l=window.getComputedStyle(f,null).getPropertyValue("height"),m=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,n=t(g)+t(h)+t(i)+(t(j)+2*t(k));c.style.height="".concat(t(h),"px"),d.style.height="".concat(t(i),"px"),m>n+t(l)?(a.querySelector(".rows").style.height="calc(100vh - ".concat(n,"px)"),document.documentElement.style.overflow="hidden"):(a.querySelector(".rows").style.height="",document.documentElement.style.overflow="")};g(),window.addEventListener("resize",g)}}function k(a){const b=document.querySelector(".references_container"),c={ec:"references",ea:"open",el:"references"};if(b){const d=b.querySelector(".tray-animation"),e=b.querySelector("[data-action=\"open-modal\"]"),f=b.querySelector("[data-action=\"close-modal\"]");e.addEventListener("click",()=>{d.dataset.active=!0,document.documentElement.style.overflow="hidden",a.track(c)}),f.addEventListener("click",()=>{d.dataset.active=!1,document.documentElement.style.overflow=""})}}function l(){const a=[...document.querySelectorAll("[data-save-compound]")];a&&a.forEach(a=>{a.addEventListener("click",a=>{const b=a.currentTarget.dataset.target,c=a.currentTarget.dataset.name,d=z.message.confirmHiddenCompoundData(c);F("".concat(d),b)})})}function m(){G.length&&G.forEach(a=>{a.addEventListener("click",a=>{const b=a.target.closest("article"),c="true"===b.dataset.active;b.dataset.active=!c},!1)})}function n(){const a=document.querySelector("[data-slidedeck]"),b=document.querySelector("[data-resource]"),c=document.querySelector(".four-pillars_container");let d;const e=(a,b)=>{const c=t(u(a,"min-height"));a.style.height=d-b>c?"calc(100vh - ".concat(b,"px)"):""},f=()=>{if(d=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,a){const b=a.getBoundingClientRect().top;e(a,b)}if(b){const a=b.getBoundingClientRect().top+t(u(document.querySelector(".sidebar.last"),"padding-bottom"));e(b,a)}if(c){const a=document.querySelector(".sidebar.last"),b=document.querySelector(".page_header.primary"),c="calc(".concat(u(b,"height")," + ").concat(u(b,"padding-bottom"),")");a.style.paddingTop=c}};f(),window.addEventListener("resize",f)}function o(){const a=document.querySelector(".stop-motion_animation");let b;if(a){const c=document.querySelector(".fallback"),d=Array.from(a.querySelectorAll("img:not(.fallback)"));let e=d.length;a.style.visibility="hidden";const f=()=>{c.dataset.active=!0,a.insertAdjacentElement("afterbegin",c)},g=()=>{c.dataset.active=!1,a.insertAdjacentElement("beforebegin",c),a.querySelector(".fallback")?a.querySelector(".fallback").remove():null},h=()=>{clearInterval(b),f()};let i;const j=()=>{const a=new Date().getTime(),b=a-i;return i=new Date().getTime(),600>b&&0<b},k=z.isPhoneGap?"touchstart":"click",l=document.querySelector("[data-page=\"homepage\"]");l&&l.addEventListener(k,()=>{j()&&h()});const m=()=>{g();b=setInterval(()=>{const b=a.querySelector("img");a.insertAdjacentElement("beforeend",b)},40)},n=()=>{e=0===e?0:e-1,0===e&&(a.style.visibility="visible",m())};d.forEach(a=>{a.complete?n():a.addEventListener("load",n)});const o=document.querySelectorAll(".tray-animation"),p={attributes:!0,childList:!0,subtree:!0},q=function(a){for(const b of a){const a="attributes"===b.type&&"data-active"===b.attributeName;if(a){const a="true"===b.target.dataset.active;a?h():m()}}},r=[];o.forEach((a,b)=>{r.push(new MutationObserver(q)),r[b].observe(a,p)})}}function p(a){const b={ec:"page",ea:"view",el:document.body.dataset.page?document.body.dataset.page:"lxl_no_page"};return a.track(b)}const r=()=>Math.random().toString(36).substr(2,9),s=(c,a)=>c===a,t=a=>parseFloat(a.slice(0,a.length-a.match(/[a-zA-Z%]/g).length)),u=(a,b)=>window.getComputedStyle(a).getPropertyValue(b),v=a=>{let b=0,c=0;for(;a;){if("BODY"===a.tagName){const d=a.scrollLeft||document.documentElement.scrollLeft,e=a.scrollTop||document.documentElement.scrollTop;b+=a.offsetLeft-d+a.clientLeft,c+=a.offsetTop-e+a.clientTop}else b+=a.offsetLeft-a.scrollLeft+a.clientLeft,c+=a.offsetTop-a.scrollTop+a.clientTop;a=a.offsetParent}return{x:b,y:c}},w=a=>a.toString().replace(/[^\w\s]/g," ").replace(/\\n/g," ").replace(/\s+/g," "),x=(()=>{let b=localStorage.getItem("deviceID");return b||(b=[r()],a()?b.unshift("lxl_"):b.unshift("web_"),b=b.join(""),localStorage.setItem("deviceID",b)),b})(),y=((a="session")=>{let b=localStorage.getItem(a);return b||(b=c(),localStorage.setItem(a,b)),b})();var z={isPhoneGap:a(),deviceID:x,sessionID:y,trackingAPI:"https://www.google-analytics.com",trackingKey:"UA-36156565-7",defaultMimeType:"application/vnd.ms-powerpoint",message:{zeroResults:"Sorry, there are no results",confirmHiddenCompoundData:a=>"This will show all the data for <span class=\"force-lowercase\">".concat(a,"</span>. Are you sure?")}};const A=a=>{var b=Math.abs;const c=u(document.documentElement,"--background_color-gradient"),d=a.querySelector("span[id*=\"gradient-\"]")||document.createElement("SPAN");d.id="gradient-".concat(r()),d.style.background=c,d.style.position="absolute",d.style.zIndex="-1",d.style.top="-".concat(b(v(a).y),"px"),d.style.left="-".concat(b(v(a).x),"px"),d.style.width=u(document.body,"width"),d.style.height=u(document.body,"height"),a.style.position="relative",a.style.overflow="hidden",a.insertAdjacentElement("afterbegin",d)},B=()=>{const a=[...document.querySelectorAll(".primary-navigation a")],b=document.body.dataset.nav;a.forEach(a=>{a.dataset.active=s(b,a.dataset.nav)})},C=()=>{const a=document.querySelector("[data-action=\"toggle-nav\"]"),b=document.querySelector("[data-target=\"primary-nav\"]");a&&b&&a.addEventListener("click",()=>{const c="true"===b.dataset.active;document.documentElement.style.overflow=c?"":"hidden",[...b.querySelectorAll("a")].forEach(a=>{a.setAttribute("tabindex",c?"-1":"0")}),a.dataset.active=!c,b.dataset.active=!c})},D=()=>{const a=[...document.querySelectorAll("[data-action=\"publications-link\"]")];a&&a.forEach(a=>{a.addEventListener("click",a=>{const{href:b,cat:c,cpd:d}=a.currentTarget.dataset;sessionStorage.setItem("publicationsFilterCategory",c),sessionStorage.setItem("publicationsFilterCompound",d),window.location.href=b})})},E=()=>{const a=[...document.querySelectorAll("[data-action=\"reset-publications\"]")];a&&a.forEach(a=>{a.addEventListener("click",()=>{sessionStorage.removeItem("publicationsFilterCategory"),sessionStorage.removeItem("publicationsFilterCompound")})})},F=(a,b)=>{const c=document.createElement("SPAN");c.style.position="fixed",c.style.top="0",c.style.left="0",c.style.zIndex="99000",c.style.width="100vw",c.style.height="100vh",c.style.backgroundColor="rgba(0, 0, 0, 0.33)",c.style.display="flex",c.style.alignItems="center",c.style.justifyContent="center";const d="\n    <dialog class=\"message\" open aria-live=\"assertive\">\n      <form>\n        <legend class=\"title\" style=\"text-align: center;\">Confirmation</legend>\n        <fieldset style=\"text-align: center; padding: 0; border: none;\">\n          <label style=\"display: block; padding-bottom: 1em;\">".concat(a,"</label>\n          <button class=\"button\" type=\"button\" data-target=\"reject\">No</button>\n          <button class=\"button\" type=\"button\" data-target=\"confirm\">Yes</button>\n        </fieldset>\n      </form>\n    </dialog>\n  ");c.insertAdjacentHTML("afterbegin",d),document.body.insertAdjacentElement("afterbegin",c);const e=a=>{"confirm"===a.currentTarget.dataset.target&&(window.location.href="".concat(b,"/index.html")),c.remove()},f=c.querySelectorAll("button");f.forEach(a=>{a.addEventListener("click",e)})},G=[...document.querySelectorAll("button[data-show-hidden]")],{trackingAPI:H,trackingKey:I}=z,J=document.querySelector("meta[name='application-name']"),K=J&&J.dataset.name,L=J&&J.dataset.version,M=J&&J.dataset.geoid,N={uid:z.deviceID,cid:z.sessionID,v:1,tid:I,ds:z.isPhoneGap?"app":"web",geoid:M,an:K,av:L};const O=new class{constructor(a="lxl_"){this.prefix=a,Lockr.prefix=this.prefix}static buildParamString(a){const c=Object.assign(N,a);let d=[];return Object.entries(c).forEach(([a,b])=>{d.push("".concat(a,"=").concat(b))}),d.push("z=".concat(b())),d.push("t=event"),d=d.join("&"),d}track(a){const b=this.constructor.buildParamString(a),c=new XMLHttpRequest;Lockr.sadd("hits",b),c.open("HEAD","".concat(H,"/collect")),c.onreadystatechange=()=>{if(4===c.readyState&&200===c.status){if(Lockr.rm("hits"),"sendBeacon"in navigator)navigator.sendBeacon("".concat(H,"/collect"),b);else{const a=new XMLHttpRequest;a.open("POST","".concat(H,"/collect"),!0),a.send(b)}this.constructor.sync()}},c.send()}static sync(){if(0<Lockr.smembers("hits").length){const a=1*new Date/1e3,b=Lockr.smembers("hits"),c=20,d=Lockr.smembers("hits").map((a,d)=>0==d%c?b.slice(d,d+c):null).filter(a=>a);for(let b=0,c=d.length;b<c;b+=1){const c=new XMLHttpRequest;c.open("POST","".concat(H,"/batch"),!0),c.send(d[b].map(b=>-1<b.indexOf("&qt=")?b.replace(/qt=([^&]*)/,"qt=".concat(1e3*q(a-b.match(/qt=([^&]*)/)[1]/1e3))):b).join("\n"))}Lockr.flush()}}maybeSendSavedHits(){const a=new XMLHttpRequest;a.open("HEAD","".concat(H,"/collect")),a.onreadystatechange=()=>{4===a.readyState&&200===a.status&&this.constructor.sync()},a.send()}onDeviceReady(){document.addEventListener("online",this.maybeSendSavedHits.bind(this),!1)}bindEvents(){document.addEventListener("deviceready",this.onDeviceReady.bind(this),!1)}init(){this.bindEvents()}};O.init();const P=()=>{i(),p(O),B(),C(),f(O),h(),l(),o(),m(),D(),E(),g(),j(),n(),k(O),setTimeout(()=>d(),1),document.body.dataset.active=!0};z.isPhoneGap?document.addEventListener("deviceready",P):window.addEventListener("load",P)});
