/* LXLabs cooper-az-respitool v1.0.0 */
(function(a){"function"==typeof define&&define.amd?define("main",a):a()})(function(){'use strict';var n=Math.round;function a(){return!!((window.cordova||window.PhoneGap||window.phonegap)&&/ios|iphone|ipod|ipad|android/i.test(navigator.userAgent))}function b(a=16){let b="";const c="abcdefghijklmnopqrstuvwxyz0123456789";for(let d=0;d<a;d+=1)b+=c.charAt(Math.floor(Math.random()*c.length));return b}function c(){let a=new Date().getTime();"undefined"!=typeof performance&&"function"==typeof performance.now&&(a+=performance.now());const b=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],e=["x","x","x","x","x","x","x","x","-","x","x","x","x","-","4","x","x","x","-","y","x","x","x","-","x","x","x","x","x","x","x","x","x","x","x","x"];let f="",g=0,h=0|a+4294967295*Math.random();for(;36>g++;){const a=e[g-1],c=15&h,d="x"===a?c:8|3&c;f+="-"===a||"4"===a?a:b[d],h=0==g%8?0|4294967295*Math.random():h>>4}return f}function d(a,b){const{cordova:c}=window,{target:d}=a,{mime:e}=d.dataset||p.defaultMimeType,f=c?"".concat(c.file.applicationDirectory,"www").concat(d.dataset.href):d.dataset.href,g=(a="event")=>{const c={ea:d&&d.dataset.category,el:d&&d.textContent.trim()},e=Object.assign({},p.trackingDefaults.download,c);e.t=a,b.track(e)},h=a=>{g("exception");const b="File (".concat(a,") not found.");alert(b)};c?c.plugins.fileOpener2.open(f,e,{error:()=>h(f),success:()=>g()}):fetch(f).then(a=>{a&&200>=a.status?(g(),window.open(f)):h(f)}).catch(()=>{h(f)})}function e(a){const b=document.querySelectorAll("[data-resource], [data-slidedeck], [data-publications-table]");b&&[...b].forEach(b=>{[...b.querySelectorAll("[data-download]")].forEach(b=>{b.addEventListener("click",b=>d(b,a),!1)})})}function f(){const a=document.querySelector("[data-publications-table]"),b=a?[...a.querySelectorAll("[data-download]")]:[],c=document.querySelector("[name=\"data-sort-cat\"]"),d=document.querySelector("[name=\"data-sort-cpd\"]"),e=a=>{a.style.display="none"},f=a=>{a.style.display=""},g=()=>{const b=[...document.querySelectorAll("[data-download]")],c=b.filter(a=>"none"!==a.style.display),d=!(0<c.length),e="<dialog aria-live=\"assertive\" open class=\"message warning\">".concat(p.message.zeroResults,"</dialog>"),f=a.querySelector(".heading"),g=a.querySelector(".message");g&&g.remove(),d&&f.insertAdjacentHTML("afterend",e)},h=()=>{const a=c.options[c.selectedIndex].value,h=d.options[d.selectedIndex].value;b.forEach(b=>{"Any"===a&&"Any"===h?f(b):"Any"===a&&"Any"!==h?b.dataset.cpd===h?f(b):e(b):"Any"===h&&"Any"!==a?b.dataset.cat===a?f(b):e(b):b.dataset.cat===a&&b.dataset.cpd===h?f(b):e(b)}),g()};if(a&&c&&d){c.addEventListener("change",h),d.addEventListener("change",h);const a=sessionStorage.getItem("publicationsFilterCategory");a&&(c.options.selectedIndex=[...c.options].map((b,c)=>b.value===a?c:null).filter(a=>a).join(""));const b=sessionStorage.getItem("publicationsFilterCompound");b&&(d.options.selectedIndex=[...d.options].map((a,c)=>a.value===b?c:null).filter(a=>a).join("")),h()}}function g(){const a=Array.from(document.querySelectorAll(".grid"));a&&a.forEach(a=>{const b=a.querySelector(".content");b&&(b.style.opacity=1)})}function h(){const a=Array.from(document.querySelectorAll(".page-navigation li[data-visible]")),b=localStorage.rowsToShow?JSON.parse(localStorage.rowsToShow):null;b&&a.forEach(a=>{a.setAttribute("data-visible",!!(-1<b.indexOf(a.dataset.target))),a.setAttribute("tabindex",-1<b.indexOf(a.dataset.target)?"":"-1")})}function i(){const a=document.querySelector("[data-page=\"homepage\"]");a&&(localStorage.removeItem("session"),localStorage.removeItem("rowsToShow"),sessionStorage.removeItem("publicationsFilterCategory"),sessionStorage.removeItem("publicationsFilterCompound"))}function j(){const a=Array.from(document.querySelectorAll("[data-action=\"save-compound-data\"]"));a&&a.forEach(a=>{a.addEventListener("click",a=>{const b=a.currentTarget.dataset.target;if(confirm("This will show all of the data for ".concat(b,". Are you sure?"))){const a=localStorage.getItem("rowsToShow");if(a){const c=JSON.parse(a);-1===c.indexOf(b)&&(c.push(b),localStorage.setItem("rowsToShow",JSON.stringify(c)),document.location.reload())}else localStorage.setItem("rowsToShow",JSON.stringify([b])),document.location.reload()}})})}function k(){q.length&&q.forEach(a=>{a.addEventListener("click",a=>{const b=a.target.closest("article"),c=b.querySelectorAll("[hidden]");b.dataset.active=!0,c.length&&[...c].forEach(a=>{a.hidden&&(a.hidden=!1)})},!1)})}function l(){const a=document.querySelector(".stop-motion_animation");if(a&&"true"===document.body.dataset.active){const b=Array.from(a.querySelectorAll("img:not(.fallback)"));let c=b.length;const d=()=>{setInterval(()=>{const b=a.querySelector("img");a.insertAdjacentElement("beforeend",b)},40)},e=()=>{const b=a.querySelector(".fallback");b.style.transition="opacity ease ".concat(2500,"ms"),b.style.opacity=0,setTimeout(()=>{b.outerHTML="",d()},2500)},f=()=>{c=0===c?0:c-1,0===c&&e()};b.forEach(a=>{a.complete?f():a.addEventListener("load",f)})}}function m(a){const b={cd:document.body.dataset.page?document.body.dataset.page:"lxl_no_page"},c=Object.assign({},p.trackingDefaults.page,b);return a.track(c)}const o=()=>Math.random().toString(36).substr(2,9);var p={deviceID:(()=>{let b=localStorage.getItem("deviceID");return b||(b=[o()],a()?b.unshift("lxl_"):b.unshift("web_"),b=b.join(""),localStorage.setItem("deviceID",b)),b})(),isPhoneGap:a(),sessionID:((a="session")=>{let b=localStorage.getItem(a);return b||(b=c(),localStorage.setItem(a,b)),b})(),defaultMimeType:"application/vnd.ms-powerpoint",trackingDefaults:{download:{ea:"",ec:"document",el:"",t:"event"},page:{el:"view",t:"screenview"}},message:{zeroResults:"Sorry, there are no results"}};const q=[...document.querySelectorAll("button[data-show-hidden]")],r="https://www.google-analytics.com",s=document.querySelector("meta[name='application-name']"),t=s&&s.dataset.name,u=s&&s.dataset.version,v=s&&s.dataset.geoid,w={v:1,tid:"UA-36156565-7",ds:p.isPhoneGap?"app":"web",geoid:v,an:t,av:u,uid:p.deviceID,cid:p.sessionID};class x{constructor(a="lxl_"){this.prefix=a,Lockr.prefix=this.prefix}static buildParamString(a){let b="";return Object.entries(Object.assign(w,a)).forEach(([a,c])=>{b+="".concat(a,"=").concat(c,"&")}),b=b.slice(0,-1),b}track(a){const c=this.constructor.buildParamString(a),d=b(),e=new XMLHttpRequest;e.open("HEAD","".concat(r,"/collect")),e.onreadystatechange=()=>{if(4===e.readyState&&200!==e.status&&Lockr.sadd("hits",encodeURI("".concat(c,"z=").concat(d))),4===e.readyState&&200===e.status){if("sendBeacon"in navigator)navigator.sendBeacon("".concat(r,"/collect"),encodeURI("".concat(c,"z=").concat(d)));else{const a=new XMLHttpRequest;a.open("POST","".concat(r,"/collect"),!0),a.send(encodeURI("".concat(c,"z=").concat(d)))}this.constructor.sync()}},e.send()}static sync(){if(0<Lockr.smembers("hits").length){const a=1*new Date/1e3,b=Lockr.smembers("hits"),c=20,d=Lockr.smembers("hits").map((a,d)=>0==d%c?b.slice(d,d+c):null).filter(a=>a);for(let b=0,c=d.length;b<c;b+=1){const c=new XMLHttpRequest;c.open("POST","".concat(r,"/batch"),!0),c.send(d[b].map(b=>-1<b.indexOf("&qt=")?b.replace(/qt=([^&]*)/,"qt=".concat(1e3*n(a-b.match(/qt=([^&]*)/)[1]/1e3))):b).join("\n"))}Lockr.flush()}}maybeSendSavedHits(){const a=new XMLHttpRequest;a.open("HEAD","".concat(r,"/collect")),a.onreadystatechange=()=>{4===a.readyState&&200===a.status&&this.constructor.sync()},a.send()}onDeviceReady(){document.addEventListener("online",this.maybeSendSavedHits.bind(this),!1)}bindEvents(){document.addEventListener("deviceready",this.onDeviceReady.bind(this),!1)}init(){this.bindEvents()}}const y=()=>{document.body.dataset.active=!0,i(),g();const a=new x;a.init(),m(a),e(a),h(),j(),l(),k(),f();const b=[...document.querySelectorAll("[data-action=\"publications-link\"]")];b&&b.forEach(a=>{a.addEventListener("click",a=>{const{href:b,cat:c,cpd:d}=a.currentTarget.dataset;sessionStorage.setItem("publicationsFilterCategory",c),sessionStorage.setItem("publicationsFilterCompound",d),window.location.href=b})});const c=[...document.querySelectorAll("[data-action=\"reset-publications\"]")];c&&c.forEach(a=>{a.addEventListener("click",()=>{sessionStorage.removeItem("publicationsFilterCategory"),sessionStorage.removeItem("publicationsFilterCompound")})})};p.isPhoneGap?document.addEventListener("deviceready",y):window.addEventListener("load",y)});
