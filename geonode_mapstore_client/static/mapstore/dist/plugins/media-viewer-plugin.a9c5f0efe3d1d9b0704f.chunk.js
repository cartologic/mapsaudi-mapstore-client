(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2184],{92761:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>S});var r=t(24852),a=t.n(r),o=t(22843),i=t(82017),u=t(15402),l=t(32425),c=t(75875),s=t.n(c),d=["jpg","jpeg","png"],f=["mp4","mpg","avi","m4v","mp2","3gp","flv","vdo","afl","mpga","webm"];function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(u)throw a}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?m(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function v(){return(v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var g={image:i.ZP,video:i.ZP,pdf:function(e){var n=e.src,t=p((0,r.useState)(null),2),o=t[0],i=t[1],u=p((0,r.useState)(!1),2),c=u[0],d=u[1];return(0,r.useEffect)((function(){d(!0),function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"application/pdf";return s().get(e,{responseType:"blob"}).then((function(e){var t=e.data,r=new Blob([t],{type:n});return URL.createObjectURL(r)}))}(n).then((function(e){d(!1),i(e)})).finally((function(){d(!1)}))}),[]),c?a().createElement("div",{className:"pdf-loader"},a().createElement(l.Z,{size:70})):a().createElement("iframe",{className:"gn-pdf-viewer",type:"application/pdf",frameBorder:"0",scrolling:"auto",height:"100%",width:"100%",src:o})},unsupported:i.ZP},w={video:{mode:"view",inView:!0,fit:"contain"},image:{fit:"contain",enableFullscreen:!0,loaderComponent:function(){return a().createElement("div",{className:"pdf-loader"},a().createElement(l.Z,{size:70}))}},pdf:{},unsupported:{showCaption:!0,caption:a().createElement("h3",{className:"unsupported-media-caption"},a().createElement(u.Z,{msgId:"viewer.document.unSupportedMedia"})),enableFullscreen:!1}};var h=t(71703),y=t(22222),b=t(72036),E=(0,h.connect)((0,y.P1)([function(e){var n;return(null==e||null===(n=e.gnresource)||void 0===n?void 0:n.data)||null},function(e){var n;return(null==e||null===(n=e.gnresource)||void 0===n?void 0:n.loading)||!1}],(function(e,n,t){return{resource:e,loading:n,editMode:t}})))((function(e){var n,t=e.resource;if(t){var r="pdf"===(n=t.extension)?"pdf":d.includes(n)?"image":f.includes(n)?"video":"unsupported",o=g[r];return a().createElement(a().Fragment,null,a().createElement(o,v({mediaType:r},w[r],{description:t.abstract,id:t.pk,thumbnail:t.thumbnail_url,src:"unsupported"===r?t.thumbnail_url:t.href})))}return null})),j=(0,h.connect)((0,y.P1)([],(function(){return{}})),{})((function(){return a().createElement("div",{className:"gn-media-viewer"},a().createElement(E,null))}));const S=(0,o.rx)("MediaViewer",{component:j,containers:{ViewerLayout:{name:"MediaViewer",priority:1}},epics:{},reducers:{gnresource:b.Z}})},90874:(e,n,t)=>{"use strict";var r=t(95318);n.__esModule=!0,n.default=void 0;var a,o=r(t(50139)),i="clearTimeout",u=function(e){var n=(new Date).getTime(),t=Math.max(0,16-(n-c)),r=setTimeout(e,t);return c=n,r},l=function(e,n){return e+(e?n[0].toUpperCase()+n.substr(1):n)+"AnimationFrame"};o.default&&["","webkit","moz","o","ms"].some((function(e){var n=l(e,"request");if(n in window)return i=l(e,"cancel"),u=function(e){return window[n](e)}}));var c=(new Date).getTime();(a=function(e){return u(e)}).cancel=function(e){window[i]&&"function"==typeof window[i]&&window[i](e)};var s=a;n.default=s,e.exports=n.default}}]);