(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7708],{39980:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(67294),o=r.n(n),i=r(45697),a=r.n(i),u=r(21222);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m,b,d,g=/^[\s\S]*<body>([\s\S]*)<\/body>[\s\S]*$/i,v=/(<style[\s\=\w\/\"]*>[^<]*<\/style>)/i,O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(c,e);var t,r,n,i,a=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(n);if(i){var r=y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return p(this,e)});function c(){return l(this,c),a.apply(this,arguments)}return t=c,(r=[{key:"shouldComponentUpdate",value:function(e){return e.response!==this.props.response}},{key:"render",value:function(){var e=this.props.response||"",t=v.exec(e),r=t&&2===t.length?v.exec(e)[1]:"";r=r.replace(/body[,]+/g,"");var n=e.replace(g,"$1").trim();return o().createElement(u.Z,{html:r+n})}}])&&s(t.prototype,r),c}(o().Component);m=O,b="propTypes",d={response:a().string},b in m?Object.defineProperty(m,b,{value:d,enumerable:!0,configurable:!0,writable:!0}):m[b]=d;const h=O},40562:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E});var n=r(67294),o=r.n(n),i=r(18093),a=r(96486),u=r(59286),c=r(21222),l=r(45697),s=r.n(l),f=r(61239);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=["exclude","titleStyle","listStyle","componentStyle","title","feature"],P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(c,e);var t,r,n,i,u=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(i){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return d(this,e)});function c(){var e;y(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return O(g(e=u.call.apply(u,[this].concat(r))),"getBodyItems",(function(){return Object.keys(e.props).filter(e.toExclude).map((function(t){var r=e.renderProperty(e.props[t]);return o().createElement("tr",{key:t,style:e.props.listStyle},o().createElement("td",null,t),o().createElement("td",null,(0,f.Y)(r)?o().createElement("span",{dangerouslySetInnerHTML:{__html:r}}):r))}))})),O(g(e),"renderHeader",(function(){return e.props.title?o().createElement("thead",{key:e.props.title,style:e.props.titleStyle,className:"ms-properties-viewer-title"},o().createElement("tr",null,o().createElement("th",{colSpan:"2"},e.props.title))):null})),O(g(e),"renderBody",(function(){var t=e.getBodyItems();return 0===t.length?null:o().createElement("tbody",{className:"ms-properties-viewer-body"},t)})),O(g(e),"renderProperty",(function(e){return(0,a.isString)(e)?e:JSON.stringify(e)})),O(g(e),"toExclude",(function(t){return-1===h.concat(e.props.exclude).indexOf(t)})),e}return t=c,(r=[{key:"render",value:function(){return o().createElement("table",{className:"ms-properties-viewer",style:this.props.componentStyle},this.renderHeader(),this.renderBody())}}])&&m(t.prototype,r),c}(o().Component);O(P,"displayName","PropertiesViewer"),O(P,"propTypes",{title:s().string,exclude:s().array,titleStyle:s().object,listStyle:s().object,componentStyle:s().object}),O(P,"defaultProps",{exclude:[],titleStyle:{},listStyle:{},componentStyle:{}});const j=P;function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var S={TEMPLATE:function(e){var t=e.layer,r=void 0===t?{}:t,n=e.response;return o().createElement("div",{className:"ms-template-viewer"},n.features.map((function(e,t){return o().createElement("div",{key:t},o().createElement(c.Z,{html:(0,a.template)((0,u.getCleanTemplate)(r.featureInfo&&r.featureInfo.template||"",e,/\$\{.*?\}/g,2,1))(e)}))})))},PROPERTIES:function(e){var t=e.response,r=e.layer,n=e.rowViewer,i=r&&r.rowViewer||n||j;return o().createElement("div",{className:"mapstore-json-viewer"},((null==t?void 0:t.features)||[]).map((function(e,t){return o().createElement(i,w({key:t,feature:e,title:e.id+"",exclude:["bbox"]},e.properties))})))}};const E=(0,i.shouldUpdate)((function(e,t){return t.response!==e.response}))((function(e){var t=e.layer&&e.layer.featureInfo&&e.layer.featureInfo.format&&e.layer.featureInfo.template&&"<p><br></p>"!==e.layer.featureInfo.template&&e.layer.featureInfo.format||"PROPERTIES",r=S[t]||S.PROPERTIES;return o().createElement(r,e)}))},529:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(45697),o=r.n(n),i=r(67294),a=r.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y,m,b,d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(n);if(o){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function u(){return c(this,u),i.apply(this,arguments)}return t=u,(r=[{key:"shouldComponentUpdate",value:function(e){return e.response!==this.props.response}},{key:"render",value:function(){return a().createElement("pre",null,this.props.response)}}])&&l(t.prototype,r),u}(a().Component);y=d,m="propTypes",b={response:o().string},m in y?Object.defineProperty(y,m,{value:b,enumerable:!0,configurable:!0,writable:!0}):y[m]=b;const g=d},21222:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(45697),o=r.n(n),i=r(67294),a=r.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(n);if(o){var r=y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function u(){var e;c(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return m(p(e=i.call.apply(i,[this].concat(r))),"getSourceCode",(function(){return{__html:e.props.html}})),e}return t=u,(r=[{key:"render",value:function(){return a().createElement("div",{id:this.props.id,dangerouslySetInnerHTML:this.getSourceCode()})}}])&&l(t.prototype,r),u}(a().Component);m(b,"propTypes",{html:o().string,id:o().string});const d=b},93152:(e,t,r)=>{"use strict";r.d(t,{$v:()=>o,c0:()=>i,m6:()=>a,tH:()=>u});var n=r(96486),o=function(e){return e&&e.maptype&&e.maptype.mapType||"leaflet"},i=function(e){return"cesium"===o(e)},a=function(e){return"openlayers"===o(e)},u=function(e){return(0,n.get)(e,"maptype.last2dMapType")||"leaflet"}},53005:(e,t,r)=>{"use strict";r.d(t,{O7:()=>n,so:()=>o,cX:()=>l});var n={TEXT:"text/plain",HTML:"text/html",JSONP:"text/javascript",PROPERTIES:"application/json",JSON:"application/json",GML2:"application/vnd.ogc.gml",GML3:"application/vnd.ogc.gml/3.1.1",TEMPLATE:"application/json"},o={"text/plain":"TEXT","text/html":"HTML","text/javascript":"JSONP","application/json":"JSON","application/vnd.ogc.gml":"GML2","application/vnd.ogc.gml/3.1.1":"GML3"},i=/^[\s\S]*<gml:featureMembers[^>]*>([\s\S]*)<\/gml:featureMembers>[\s\S]*$/i,a=/^[\s\S]*<body[^>]*>([\s\S]*)<\/body>[\s\S]*$/i;function u(e){if("string"==typeof e.response&&0!==e.response.indexOf("<?xml")){var t=e.response.match(a);return e.layerMetadata&&e.layerMetadata.regex?t&&t[1]&&t[1].match(e.layerMetadata.regex):t&&t[1]&&t[1].trim().length>0}return!1}function c(e){if("string"==typeof e.response&&-1!==e.response.indexOf("<?xml")){var t=e.response.match(i);return t&&t[1]&&t[1].trim().length>0}return!1}var l={HTML:{getValidResponses:function(e){return e.filter(u)},getNoValidResponses:function(e){return e.filter((function(e){return!u(e)}))}},TEXT:{getValidResponses:function(e){return e.filter((function(e){return""!==e.response&&"string"==typeof e.response&&0!==e.response.indexOf("no features were found")&&"string"==typeof e.response&&0!==e.response.indexOf("<?xml")}))},getNoValidResponses:function(e){return e.filter((function(e){return""===e.response||"string"==typeof e.response&&0===e.response.indexOf("no features were found")||e.response&&"string"==typeof e.response&&0===e.response.indexOf("<?xml")}))}},JSON:{getValidResponses:function(e){return e.filter((function(e){return e.response&&e.response.features&&e.response.features.length}))},getNoValidResponses:function(e){return e.filter((function(e){return e.response&&e.response.features&&0===e.response.features.length}))}},PROPERTIES:{getValidResponses:function(e){return e.filter((function(e){return e.response&&e.response.features&&e.response.features.length}))},getNoValidResponses:function(e){return e.filter((function(e){return e.response&&e.response.features&&0===e.response.features.length}))}},GML3:{getValidResponses:function(e){return e.filter(c)},getNoValidResponses:function(e){return e.filter((function(e){return!c(e)}))}},TEMPLATE:{getValidResponses:function(e){return e.filter((function(e){return e.response&&e.response.features&&e.response.features.length}))},getNoValidResponses:function(e){return e.filter((function(e){return e.response&&e.response.features&&0===e.response.features.length}))}}}},53231:(e,t,r)=>{"use strict";r.r(t),r.d(t,{generateEnvString:()=>n});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.length?e.map((function(e){var t=e.name,r=e.value;return"".concat(t,":").concat(r)})).join(";"):""}},7412:(e,t,r)=>{"use strict";r.d(t,{eq:()=>R,lY:()=>x,wR:()=>T,su:()=>I,Fm:()=>A,pf:()=>F,Te:()=>q,Qm:()=>M,y_:()=>V,gA:()=>L,K7:()=>C});var n,o=r(53005),i=r(60130),a=r.n(i),u=r(96486),c=r(3918),l=r.n(c),s=r(40562),f=r(39980),p=r(529),y=r(6402),m=r.n(y),b=r(80009),d=r.n(b),g=r(35433),v=r.n(g),O=r(50948),h=r.n(O);function P(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R=function(){return Object.keys(o.O7).filter((function(e){return-1!==n.AVAILABLE_FORMAT.indexOf(e)})).reduce((function(e,t){return e[t]=o.O7[t],e}),{})},x=function(){return Object.keys(n.getAvailableInfoFormat()).map((function(e){return o.O7[e]}))},T=function(){return o.O7[n.AVAILABLE_FORMAT[0]]},I=function(e,t,r,o,i){return S({type:"vector",visibility:!0,name:e||"GetFeatureInfo",styleName:r||"marker",label:i,features:n.clickedPointToGeoJson(t)},o)},A=function(e,t){if(n.services[e.type]){var r=n.getDefaultInfoFormatValueFromLayer(e,t),o=n.getLayerFeatureInfoViewer(e),i=n.getLayerFeatureInfo(e);return n.services[e.type].buildRequest(e,t,r,o,i)}return{}},F=function(e,t,r){return n.services[e.type]&&n.services[e.type].getIdentifyFlow?n.services[e.type].getIdentifyFlow(e,t,r):null},q=function(e){var t={getValidResponses:function(e){return e},getNoValidResponses:function(){return[]}};return{getValidResponses:function(r){return r.reduce((function(r,n){if(n){var i;n.queryParams&&n.queryParams.hasOwnProperty("info_format")&&(i=n.queryParams.info_format),n.queryParams&&n.queryParams.hasOwnProperty("outputFormat")&&(i=n.queryParams.outputFormat);var a=(o.cX[n.format||o.so[i]||o.so[e]]||t).getValidResponses([n]);return[].concat(P(r),P(a))}return P(r)}),[])},getNoValidResponses:function(r){return r.reduce((function(r,n){if(n){var i;n.queryParams&&n.queryParams.hasOwnProperty("info_format")&&(i=n.queryParams.info_format),n.queryParams&&n.queryParams.hasOwnProperty("outputFormat")&&(i=n.queryParams.outputFormat);var a=(o.cX[n.format||o.so[i]||o.so[e]]||t).getNoValidResponses([n]);return[].concat(P(r),P(a))}return P(r)}),[])}}},M=function(){var e;return E(e={},o.O7.PROPERTIES,s.Z),E(e,o.O7.JSON,s.Z),E(e,o.O7.HTML,f.Z),E(e,o.O7.TEXT,p.Z),e},V=function(e){var t;return e.visibility&&n.services[e.type]&&(void 0===e.queryable||e.queryable)&&"background"!==e.group&&"HIDDEN"!==(null==e||null===(t=e.featureInfo)||void 0===t?void 0:t.format)},k={wfs:m(),wms:d(),wmts:v(),vector:h()},L=function(e){return n.VIEWERS[e]?n.VIEWERS[e]:null},C=function(e,t,r){var n=t||[],o=r||[];return Object.keys(e).reduce((function(t,r){if("params"!==r&&-1!==n.indexOf(r))t[r]=e[r];else if("params"===r&&o.length>0){var i=e[r];Object.keys(i).forEach((function(e){-1===(0,u.findIndex)(o,(function(t){return t===e}))&&(t[e]=i[e])}),{})}return t}),{})};n={AVAILABLE_FORMAT:["TEXT","PROPERTIES","HTML","TEMPLATE"],getAvailableInfoFormatLabels:function(){return Object.keys(n.getAvailableInfoFormat())},getAvailableInfoFormat:R,getDefaultInfoFormatValue:T,clickedPointToGeoJson:function(e){if(!e)return[];if("Feature"===e.type){var t=[a()(e)];return e&&e.geometry&&"Point"!==e.geometry.type&&t.push(e),t}return void 0===e.lng||void 0===e.lat?e.features||[]:[].concat(P(e.features||[]),[{id:"get-feature-info-point",type:"Feature",geometry:{type:"Point",coordinates:[parseFloat(e.lng),parseFloat(e.lat)]},style:[{iconUrl:l(),iconAnchor:[12,41],iconSize:[25,41]}]}])},services:k,getDefaultInfoFormatValueFromLayer:function(e,t){return e.featureInfo&&e.featureInfo.format&&o.O7[e.featureInfo.format]||t.format||n.getDefaultInfoFormatValue()},getLayerFeatureInfoViewer:function(e){return e.featureInfo&&e.featureInfo.viewer?e.featureInfo.viewer:{}},getLayerFeatureInfo:function(e){return e&&e.featureInfo&&S({},e.featureInfo)||{}},VIEWERS:{}}},61239:(e,t,r)=>{"use strict";r.d(t,{Y:()=>n,v:()=>o});var n=function(e){return new RegExp("<(.|\\n)*?>","g").test(e)},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;return t.test(e)}},38848:(e,t,r)=>{"use strict";r.r(t),r.d(t,{needsReload:()=>l,toDescribeURL:()=>s,extractGeometryType:()=>f,extractGeometryAttributeName:()=>p});var n=r(43378),o=r(8575),i=r(96486);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e,t){var r=u(u({},(0,n.optionsToVendorParams)(e)||{}),{},{_v_:e._v_}),o=u(u({},(0,n.optionsToVendorParams)(t)||{}),{},{_v_:t._v_});return["_v_","CQL_FILTER","VIEWPARAMS"].reduce((function(e,t){return r[t]!==o[t]||e}),!1)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=e.search,n=void 0===r?{}:r,i=e.url,a=e.describeFeatureTypeURL,c=o.parse(a||n.url||i,!0);return o.format(u(u({},c),{},{search:void 0,query:u(u({},c.query),{},{service:"WFS",version:"1.1.0",typeName:t,outputFormat:"application/json",request:"DescribeFeatureType"})}))},f=function(e){var t=(0,i.get)(e,"featureTypes[0].properties")||[];return t&&(0,i.head)(t.filter((function(e){return 0===e.type.indexOf("gml:")})).map((function(e){return e.type.split(":")[1]})))},p=function(e){var t=(0,i.get)(e,"featureTypes[0].properties")||[];return t&&(0,i.head)(t.filter((function(e){return 0===e.type.indexOf("gml:")})).map((function(e){return e.name})))}},50948:(e,t,r)=>{var n=r(52259).getCurrentResolution,o=r(14293);e.exports={buildRequest:function(e,t){var r,i,a,u;return{request:{lat:t.point.latlng.lat,lng:t.point.latlng.lng},metadata:{fields:(null===(r=e.features)||void 0===r||null===(i=r[0])||void 0===i?void 0:i.properties)&&Object.keys(e.features[0].properties)||[],title:e.name,resolution:o(null==t||null===(a=t.map)||void 0===a?void 0:a.resolution)?(null==t||null===(u=t.map)||void 0===u?void 0:u.zoom)&&n(t.map.zoom,0,21,96):t.map.resolution,buffer:t.buffer||2,units:t.map&&t.map.units,rowViewer:e.rowViewer,viewer:e.viewer},url:""}}}},6402:(e,t,r)=>{function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=r(89255).Observable,u=r(90183).normalizeSRS,c=r(24262).getLayerUrl,l=r(96486).isObject,s=r(43378).optionsToVendorParams,f=r(32420),p=f.describeFeatureType,y=f.getFeature,m=r(38848).extractGeometryAttributeName,b=r(33044).addAuthenticationToSLD,d=r(27418);e.exports={buildRequest:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.map,n=void 0===r?{}:r,i=t.point,a=t.currentLocale,s=t.params,f=t.maxItems,p=void 0===f?10:f,y=arguments.length>3?arguments[3]:void 0,m=arguments.length>4?arguments[4]:void 0;return{request:b(o({point:i,service:"WFS",version:"1.1.1",request:"GetFeature",outputFormat:"application/json",exceptions:"application/json",id:e.id,typeName:e.name,srs:u(n.projection)||"EPSG:4326",feature_count:p},d({params:s})),e),metadata:{title:l(e.title)?e.title[a]||e.title.default:e.title,regex:e.featureInfoRegex,viewer:y,featureInfo:m},url:c(e).replace(/[?].*$/g,"")}},getIdentifyFlow:function(e,t,r){var n=r.point,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,["point"]),i=function(e){var t,r,n=null==e||null===(t=e.geometricFilter)||void 0===t||null===(r=t.value)||void 0===r?void 0:r.geometry;if(n)return n;var o=e.latlng.lng;return{coordinates:[o-360*Math.floor(o/360+.5),e.latlng.lat],projection:"EPSG:4326",type:"Point"}}(n);return a.defer((function(){return p(e.url,e.name).then((function(r){var n=m(r),a=s({layerFilter:e.layerFilter,filterObj:{spatialField:{attribute:n,operation:"INTERSECTS",geometry:i}},params:d({},e.baseParams,e.params,o)});return y(t,e.name,a)}))}))}}},80009:(e,t,r)=>{function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=r(52259).getCurrentResolution,u=r(90183),c=u.reproject,l=u.getProjectedBBox,s=u.normalizeSRS,f=r(24262).getLayerUrl,p=r(96486),y=p.isObject,m=p.isNil,b=r(43378).optionsToVendorParams,d=r(53231).generateEnvString,g=r(33044).addAuthenticationToSLD,v=r(27418);e.exports={buildRequest:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.sizeBBox,n=t.map,i=void 0===n?{}:n,u=t.point,p=t.currentLocale,O=t.params,h=t.maxItems,P=void 0===h?10:h,j=t.env,w=arguments.length>2?arguments[2]:void 0,S=arguments.length>3?arguments[3]:void 0,E=arguments.length>4?arguments[4]:void 0,R=r&&r.height||101,x=r&&r.width||101,T=[R,x],I=0,A=m(i.resolution)?a(Math.ceil(i.zoom),0,21,96):i.resolution,F=u.latlng.lng,q=F-360*Math.floor(F/360+.5),M={x:q,y:u.latlng.lat},V=c(M,"EPSG:4326",i.projection),k=l(V,A,I,T,null),L=e.name;e.queryLayers&&(L=e.queryLayers.join(","));var C=d(j),D=b({layerFilter:e.layerFilter,filterObj:e.filterObj,params:v({},e.baseParams,e.params,O)});return{request:g(o({service:"WMS",version:"1.1.1",request:"GetFeatureInfo",exceptions:"application/json",id:e.id,layers:e.name,query_layers:L,styles:e.style,x:x%2==1?Math.ceil(x/2):x/2,y:x%2==1?Math.ceil(x/2):x/2,height:R,width:x,srs:s(i.projection)||"EPSG:4326",bbox:k.minx+","+k.miny+","+k.maxx+","+k.maxy,feature_count:P,info_format:w,ENV:C},v({},D)),e),metadata:{title:y(e.title)?e.title[p]||e.title.default:e.title,regex:e.featureInfoRegex,viewer:S,featureInfo:E},url:f(e).replace(/[?].*$/g,"")}}}},35433:(e,t,r)=>{function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=r(52259),u=a.getCurrentResolution,c=a.getResolutions,l=r(90183),s=l.reproject,f=l.normalizeSRS,p=r(7294),y=p.getTileMatrixSet,m=p.limitMatrix,b=p.getMatrixIds,d=p.getDefaultMatrixId,g=r(24262).getLayerUrl,v=r(43378).optionsToVendorParams,O=r(96486),h=O.isObject,P=O.isNil,j=r(27418);e.exports={buildRequest:function(e,t){var r=P(t.map.resolution)?u(Math.round(t.map.zoom),0,21,96):t.map.resolution,n=e.resolutions||c(),i=e.tileSize||256,a=[e.originX||-20037508.3428,e.originY||20037508.3428],l=t.point.latlng.lng,p={x:l-360*Math.floor(l/360+.5),y:t.point.latlng.lat},O=s(p,"EPSG:4326",t.map.projection),w=f(e.srs||t.map.projection||"EPSG:3857",e.allowedSRS),S=y(e.tileMatrixSet,w,e.allowedSRS,e.matrixIds),E=(O.x-a[0])/(r*i),R=(a[1]-O.y)/(r*i),x=Math.floor(E),T=Math.floor(R),I=Math.floor((E-x)*i),A=Math.floor((R-T)*i),F=m(e.matrixIds&&b(e.matrixIds,S||w)||d(e),n.length),q=v({layerFilter:e.layerFilter,filterObj:e.filterObj,params:j({},e.baseParams,e.params,t.params)});return{request:o(o({service:"WMTS",request:"GetFeatureInfo",layer:e.name,infoformat:t.format,style:e.style||""},j({},q)),{},{tilecol:x,tilerow:T,tilematrix:F[Math.round(t.map.zoom)],tilematrixset:S,i:I,j:A}),metadata:{title:h(e.title)?e.title[t.currentLocale]||e.title.default:e.title,regex:e.featureInfoRegex},url:g(e).replace(/[?].*$/g,"")}}}},3918:e=>{e.exports="data:image/png;base64,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"}}]);