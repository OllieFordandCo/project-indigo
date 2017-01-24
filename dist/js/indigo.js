"use strict";System.register([],function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i,o;return{setters:[],execute:function(){i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),e("App",o=function(){function e(){n(this,e),this._importedElements=[];var t=this;t.updateElements(),indigoConfig.router?this.initRouter():window.dispatchEvent(new CustomEvent("systemReady"))}return i(e,[{key:"initRouter",value:function(){var e=this;Promise.all([System["import"]("director.js"),System["import"]("router.js")]).then(function(t){var n=t[0],i=t[1];window.router=n(i.routes).configure(i.routerConfig).init(),console.log("Router Initialised as a window global..."),document.documentElement.className="js",e.captureLinks(),window.dispatchEvent(new CustomEvent("systemReady"))},function(e){console.log(e),console.log("The router couldn't be loaded, default navigation."),window.dispatchEvent(new CustomEvent("systemReady"))})}},{key:"initSocial",value:function(){System["import"]("think-async.js").then(function(e){e.add("instagram","//platform.instagram.com/en_US/embeds.js",function(){window.addEventListener("viewUpdated",function(e){window.instgrm&&instgrm.Embeds.process()})}),e.add("twitter","//platform.twitter.com/widgets.js",function(e){})})}},{key:"lazyLoadElements",value:function(e){e=void 0==e?[].slice.call(document.querySelectorAll("[data-import]")):e;var t=this;e.forEach(function(e){var n=void 0,i=new RegExp(" +","g");if(n=e.hasAttribute("is")?e.getAttribute("is").replace(i,"-").toLowerCase():e.tagName.replace(i,"-").toLowerCase(),console.log(t.importedElements.indexOf(n)),t.importedElements.indexOf(n)==-1){var o=document.createElement("link"),r=e.dataset["import"];delete e.dataset["import"],o.rel="import",""==r?o.href=window.indigo.dist_url+"/components/"+n+".html":o.href=window.indigo.dist_url+"/components/"+r,document.head.appendChild(o),t.importedElements=n}})}},{key:"updateElements",value:function(e){e=void 0==e?[].slice.call(document.querySelectorAll("[data-import]")):e,e.length>0&&this.lazyLoadElements(e)}},{key:"animateElement",value:function(e){window.requestAnimationFrame(function(){var t=e.dataset.animate;return void 0!=e&&(t&&e.classList.add("animate--"+t),void e.removeAttribute("unresolved"))})}},{key:"onClickEventHandler",value:function(e){if(console.log("System is handling link event"),e.target.href.indexOf(window.indigo.site_url)>-1){e.preventDefault(),console.log("router");var t=e.target;t.href!==window.location.href&&window.router.setRoute(e.target.href)}}},{key:"captureLinks",value:function(e){if(indigoConfig.router){e=void 0==e?document.querySelectorAll("a[href]"):e;for(var t in e)if(e[t]instanceof Node&&"#"!==e[t].getAttribute("href")){if(e[t].hasAttribute("data-prevent-default"))e[t].addEventListener("click",function(e){e.preventDefault()});else{if(e[t].attached)continue;e[t].addEventListener("click",this.onClickEventHandler),e[t].attached=!0}console.log(e[t])}}}},{key:"importedElements",get:function(){return this._importedElements},set:function(e){this._importedElements.push(e)}}],[{key:"getCustomElementName",value:function(e){return e.replace(/ +/g,"-").toLowerCase()}}]),e}()),e("App",o)}}});