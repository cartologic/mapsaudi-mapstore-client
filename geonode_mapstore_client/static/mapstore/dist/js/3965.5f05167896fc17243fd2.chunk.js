(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3965],{56307:t=>{t.exports=window.L},33965:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>O});var r=o(56307),n=o.n(r),i=(o(80687),o(42122),o(32818),o(23493)),s=o.n(i),a=o(14293),c=o.n(a),l=o(99405),u=o(11847);function p(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function h(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?p(Object(o),!0).forEach((function(e){f(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function f(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}n().Control.MSLocate=n().Control.Locate.extend({setMap:function(t){this._map=t,this._layer=this.options.layer||new(n().LayerGroup),this._layer.addTo(t),this._event=void 0,this._prevBounds=null;var e={};n().extend(e,this.options.circleStyle,this.options.followCircleStyle),this.options.followCircleStyle=e,this._resetVariables(),this._map.on("unload",this._unload,this)},setLocateOptions:function(t){this.options.locateOptions=h({},t)},_activate:function(){this._active||(this._map.locate(this.options.locateOptions),this._active=!0,this._map.on("locationfound",this.onLocationChange(),this),this._map.on("locationerror",this._onLocationError,this),this._map.on("dragstart",this._onDrag,this))},onLocationChange:function(){return this.options.locateOptions.rateControl?s()(this._onLocationFound,this.options.locateOptions.rateControl):this._onLocationFound},_drawMarker:function(){var t,e,o=this._event||{},r=o.accuracy,i=o.latlng,s=o.heading,a=o.speed;void 0===r&&(r=0);var c,l,p=this._isFollowing();if(this.options.drawCircle){var h=p?this.options.followCircleStyle:this.options.circleStyle;this._circle?this._circle.setLatLng(i).setRadius(r).setStyle(h):this._circle=n().circle(i,r,h).addTo(this._layer)}this.options.metric?(c=r.toFixed(0),l=this.options.strings.metersUnit):(c=(3.2808399*r).toFixed(0),l=this.options.strings.feetUnit),this.options.drawMarker&&(this._marker&&this._map.removeLayer(this._marker),this.setFollowMarkerStyle(i,s,a));var f=null===(t=this.options)||void 0===t||null===(e=t.strings)||void 0===e?void 0:e.popup;if(this.options.showPopup&&f&&this._marker&&this._marker.bindPopup(n().Util.template(f,{distance:c,unit:l}))._popup.setLatLng(i),"true"===(0,u.vl)(window.location.search).locateDebug){var d=document.getElementById("LEAFLET_LOCATION_DEBUG");d||((d=document.createElement("div")).setAttribute("id","LEAFLET_LOCATION_DEBUG"),d.setAttribute("style","position: absolute; bottom: 0; width: 100%; height: 200px; z-index:100000; background: rgba(5,5,5,.5)"),document.body.appendChild(d)),d.innerHTML="<pre>\n                Position: ".concat(i,",\n                Heading: ").concat(s,"\n                speed: ").concat(a,"\n            </pre>")}},_setClasses:function(t){return this._map.fire("locatestatus",{state:t}),t},_updateContainerStyle:function(){this._isFollowing()?this._setClasses("following"):this._active&&this._setClasses("active")},_cleanClasses:function(){return null},setStrings:function(t){this.options.strings=h(h({},this.options.strings),t)},removeMarker:function(){this._marker&&this._map.removeLayer(this._marker)},setFollowMarkerStyle:function(t,e,o){var r="#2A93EE";this.removeMarker();var i={icon:n().divIcon({className:"div-heading-icon",opacity:1,iconSize:70,fillOpacity:1,html:!c()(e)&&o>this.options.locateOptions.speedThreshold?(0,l.w)({color:r,strokeWidth:2}):(0,l.B)({color:r,strokeWidth:2})}),rotationOrigin:"center center"};this._marker=n().marker(t,h(h({},i),{},{rotationAngle:e})).addTo(this._layer)}});const d=n().Control.MSLocate;function g(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function y(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?v(Object(o),!0).forEach((function(e){m(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function m(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var b={follow:!0,remainActive:!0,stopFollowingOnDrag:!0,locateOptions:{speedThreshold:.8,maximumAge:2e3,enableHighAccuracy:!0,timeout:1e4,maxZoom:18,watch:!0}};function w(t){return y(y(y({},b),t),{},{locateOptions:y(y({},b.locateOptions),t.locateOptions)})}const O=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,o;return e=t,(o=[{key:"start",value:function(t){var e=this,o=t.map,r=t.options,n=t.status,i=t.onStateChange,s=t.onLocationError;o&&(this.locate=new d(w(r)),this.locate.setMap(o),o.on("locatestatus",(function(t){return e.locateControlState(t,{onStateChange:i})})),this.locate.options.onLocationError=s,this.locate.options.onLocationOutsideMapBounds=s),n.enabled&&this.locate.start(),this.status=n}},{key:"update",value:function(t){var e=t.status,o=t.messages,r=t.options;this.fol=!1,"ENABLED"!==e||this.locate._active?"FOLLOWING"===e&&this.locate._active&&!this.locate._following?(this.fol=!0,this.locate.stop(),this.locate.start()):"DISABLED"===e&&(this.locate._following=!1,this.locate.stop()):this.locate.start(),this.locate.setStrings(o),"DISABLED"!==e&&this.locate.drawMarker&&this.locate.drawMarker(this.locate._map),this.locate.setLocateOptions(w(r).locateOptions),this.status=e}},{key:"clear",value:function(){}},{key:"locateControlState",value:function(t,e){var o=e.onStateChange;"requesting"===t.state&&"LOCATING"!==this.status?o("LOCATING"):"following"!==t.state||this.fol?"active"===t.state&&"ENABLED"!==this.status&&o("ENABLED"):o("FOLLOWING")}}])&&g(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}()},99405:(t,e,o)=>{"use strict";function r(t){var e=t.color,o=void 0===e?"#2A93EE":e,r=t.svgAttributes,n=t.strokeWidth,i=void 0===n?8:n;return'<svg xmlns="http://www.w3.org/2000/svg" '.concat(r,' viewBox="0 0 100 100" xml:space="preserve">\n\t\t<g transform="matrix(0.2 0 0 0.2 49.8 50.19)">\n            <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -65 -65)" x1="65" y1="130" x2="65" y2="0">\n                <stop offset="100%" style="stop-color:rgba(0, 132, 202, 1);"/>\n                <stop offset="100%" style="stop-color:rgba(0, 0, 255, 1);"/>\n            </linearGradient>\n            <circle style="stroke: rgb(255,255,255); stroke-width: ').concat(i,"; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ").concat(o,'; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" cx="0" cy="0" r="65"/>\n        </g>\n        <g transform="matrix(-0.12 -0.22 0.22 -0.12 47.11 20.53)">\n            <polygon style="stroke: rgb(255,255,255); stroke-width: ').concat(i,"; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ").concat(o,'; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" points="0,-42.5 50,42.5 -50,42.5 "/>\n        </g>\n    </svg>')}function n(t){var e=t.color,o=void 0===e?"#2A93EE":e,r=t.svgAttributes,n=t.strokeWidth,i=void 0===n?8:n;return'<svg xmlns="http://www.w3.org/2000/svg" '.concat(r,' viewBox="0 0 100 100" xml:space="preserve">\n\t\t<g transform="matrix(0.2 0 0 0.2 49.8 50.19)">\n            <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -65 -65)" x1="65" y1="130" x2="65" y2="0">\n                <stop offset="100%" style="stop-color:rgba(0, 132, 202, 1);"/>\n                <stop offset="100%" style="stop-color:rgba(0, 0, 255, 1);"/>\n            </linearGradient>\n            <circle style="stroke: rgb(255,255,255); stroke-width: ').concat(i,"; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ").concat(o,'; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" cx="0" cy="0" r="65"/>\n        </g>\n    </svg>')}o.d(e,{w:()=>r,B:()=>n})},11847:(t,e,o)=>{"use strict";o.d(e,{ij:()=>v,w0:()=>y,vl:()=>m,K2:()=>b,Nw:()=>w});var r=o(8575),n=o(1469),i=o.n(n),s=o(47037),a=o.n(s),c=o(18446),l=o.n(c),u=o(89734),p=o.n(u),h=o(13311),f=o.n(h),d=o(64210);function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}var v=function(t){if(!t)return{};var e=!(0===t.indexOf("http")),o=e?[]:t.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(e){var r=window.location;o[1]=r.protocol,o[3]=r.hostname,o[4]=r.port,o[5]=t}o[4]=""!==o[4]&&o[4]?o[4]:"https:"===o[1]?"443":"80",o[5]=o[5]?o[5]:t.slice(o[0].length);var n,i,s=(i=6,function(t){if(Array.isArray(t))return t}(n=o)||function(t,e){var o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var r,n,i=[],s=!0,a=!1;try{for(o=o.call(t);!(s=(r=o.next()).done)&&(i.push(r.value),!e||i.length!==e);s=!0);}catch(t){a=!0,n=t}finally{try{s||null==o.return||o.return()}finally{if(a)throw n}}return i}}(n,i)||function(t,e){if(t){if("string"==typeof t)return g(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?g(t,e):void 0}}(n,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=s[1],c=s[3],l=s[4],u=s[5],p=0===u.indexOf("/")?u.split("/")[1]:"";return{protocol:a,domain:c,port:l,rootPath:u,applicationRootPath:p}},y=function(t,e){var o=i()(t)?t[0]:t,n=i()(e)?e[0]:e;if(o===n)return!0;if(!o||!n)return!1;if(!a()(o)||!a()(n))return!1;var s=r.parse(o),c=r.parse(n),u=v(o),h=v(n),f=u.protocol===h.protocol,d=u.domain===h.domain,g=u.port===h.port,y=s.pathname===c.pathname,m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t===e)return!0;if(!t&&!e)return!0;var o=t?t.split("&").filter((function(t){return!!t})):[],r=e?e.split("&").filter((function(t){return!!t})):[];return l()(p()(o),p()(r))}(s.query,c.query);return f&&g&&d&&y&&m},m=function(t){return d.Qc(t)},b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/^(http(s{0,1}):\/\/)+?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,o=new RegExp(e);return o.test(t)},w=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/^(http(s{0,1}):\/\/)+?[\w.\-{}]+(?:\.[\w\.-]+)+[\w\-\._~\/\;\.\%\:\&\=\?{}]+$/,r=new RegExp(o),n=r.test(t);if(!n)return!1;if(n&&!e)return!0;if(n&&e){var i=/\{(.*?)\}/.test(t);return 0===e.filter((function(t){return f()(i,t)})).length}return!1}}}]);