(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3200],{43120:(e,t,r)=>{var n={"./cesium.js":[61133,6180,5560,765,6882,5521,9216,9437],"./leaflet.js":[48507,8363,8674,2770,6259,3596,1263,765,8767,3152,5135,7877,6882,5378,3991,5701,9967,7161],"./openlayers.js":[34637,8363,8674,2770,6259,8672,4634,1324,4738,9139,1280,4171,2575,6715,8920,6932,1704,8471,5604,2445,5986,9174,6920,9284,765,8767,3152,5135,7877,6882,370,9005,3498,9447,6037],"./sink.js":[60620,5442]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(o)))}o.keys=()=>Object.keys(n),o.id=43120,e.exports=o},49243:(e,t,r)=>{"use strict";r.d(t,{y:()=>m});var n=r(47037),o=r.n(n),i=r(14293),a=r.n(i),u=r(49977),c=r(88798),s=r(75875),p=r.n(s),l=r(86267);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.attachJSON,s=n.itemId,y=void 0===s?null:s,d=function(t){return u.Observable.defer((function(){return p().get(e,{params:t})}))},v=function(t){return(0,c.pf)(r,e,t)},m=(0,c.pf)(r,e,t)?v:d;return i&&"application/json"!==t.info_format&&"application/json"!==t.outputFormat?u.Observable.forkJoin(m(t),m(b(b({},t),{},{info_format:"application/json"})).map((function(e){return e.data})).catch((function(){return u.Observable.of({})}))).map((function(e){var t=f(e,2),r=t[0],n=t[1];return b(b({},r),{},{features:n&&n.features&&n.features.filter((function(e){return!!a()(y)||e.id===y})),featuresCrs:n&&n.crs&&(0,l.parseURN)(n.crs)})})):m(t).map((function(e){return e.data})).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{data:o()(e)?e:b(b({},e),{},{features:e.features&&e.features.filter((function(e){return!y||e.id===y}))}),features:e.features&&e.features.filter((function(e){return!y||e.id===y})),featuresCrs:e&&e.crs&&(0,l.parseURN)(e.crs)}}))}},15402:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(45697),o=r.n(n),i=r(24852),a=r.n(i);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function l(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=r(68195).FormattedHTMLMessage,b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(o){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return l(this,e)});function u(){return c(this,u),i.apply(this,arguments)}return t=u,(r=[{key:"render",value:function(){return this.context.intl?a().createElement(d,{id:this.props.msgId,values:this.props.msgParams}):a().createElement("span",null,this.props.msgId||"")}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(a().Component);y(b,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),y(b,"contextTypes",{intl:o().object});const v=b},47359:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(24852),o=r.n(n),i=r(73014),a=r(11196),u=r(67076),c=r(42872),s=r(1469),p=r.n(s),l=r(79870),f=(0,u.compose)((0,u.withStateHandlers)({index:0},{setIndex:function(){return function(e){return{index:e}}}}),(0,u.defaultProps)({index:0,responses:[]}));const y=(0,u.compose)((0,u.defaultProps)({responses:[],container:function(e){var t=e.index,r=e.children;return o().createElement(o().Fragment,null,p()(r)&&r[t]||r)},header:l.Z}),f,a.Yy,a.mI,(0,i.Z)((function(e){return 0===e.responses.length})))(c.Z)},1979:(e,t,r)=>{"use strict";r.d(t,{GA:()=>P,dY:()=>E,yM:()=>k});var n=r(24852),o=r.n(n),i=r(67076),a=r(49977),u=r(18446),c=r.n(u),s=r(23570),p=r.n(s),l=r(47359),f=r(49243),y=r(88798),d=r(24262),b=["rawPos"],v=["PopupSupport","tools"];function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}function h(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var P=function(){return-1!==(0,y.lY)().indexOf("application/json")?"application/json":(0,y.wR)()},S=(0,i.mapPropsStream)((function(e){var t=(0,i.createEventHandler)(),r=t.stream,n=t.handler;return r.withLatestFrom(e.map((function(e){return{map:e.map,layers:e.layers,options:e.options}})).distinctUntilChanged((function(e,t){return c()(e,t)}))).switchMap((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0].point,i=n[1],u=i.map,c=i.layers,s=void 0===c?[]:c,l=i.options,b=(l=void 0===l?{}:l).mapOptions,v=(b=void 0===b?{}:b).mapInfoFormat,m=void 0===v?P():v,h=s.filter((function(e){return(0,d.T4)(e,u.resolution)&&(0,y.y_)(e)})),O=["SLD_BODY"],j=["buffer","cql_filter","filter","propertyName"];return 0===h.length?a.Observable.of({requests:[{}],responses:[{response:{features:[]}}],validResponses:[]}):a.Observable.from(h).mergeMap((function(e){var t=(0,y.Fm)(e,{format:m,map:u,point:o,currentLocale:"en-US"}),r=t.url,n=t.request,i=t.metadata,a=r,c=n,s=g(g({},(0,y.K7)(e,j,O)),c),l=p()();return(0,f.y)(a,s,e).map((function(e){return e.data.exceptions?{reqId:l,exceptions:e.data.exceptions,queryParams:c,layerMetadata:i}:{data:e.data,reqId:l,queryParams:c,layerMetadata:g(g({},i),{},{features:e.features,featuresCrs:e.featuresCrs})}})).catch((function(e){return{error:e.data||e.statusText||e.status,reqId:l,queryParams:c,layerMetadata:i}})).startWith({start:!0,reqId:l,request:s})})).scan((function(e,t){var r=e.requests,n=e.responses,o=e.validResponses;if(t.start){var i=t.reqId,a=t.request;return{requests:r.concat({reqId:i,request:a}),responses:n,validResponses:o}}var u=t.data,c=t.queryParams,s=t.layerMetadata,p=(0,y.Te)(m),l=n.concat({response:u,queryParams:c,layerMetadata:s});return{requests:r,validResponses:p.getValidResponses(l),responses:l}}),{requests:[],responses:[],validResponses:[]})})).startWith({requests:[],responses:[]}).combineLatest(e,(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g(g({},t),{},{mapInfo:e,getFeatureInfoHandler:n})}))})),E=(0,i.branch)((function(e){var t=e.map,r=(t=void 0===t?{}:t).mapInfoControl;return void 0!==r&&r}),(0,i.compose)(S,(0,i.withStateHandlers)({popups:[]},{onClick:function(e,t){var r=t.getFeatureInfoHandler,n=void 0===r?function(){}:r;return function(e,t){var r=e.rawPos,o=void 0===r?[]:r,i=h(e,b);return n({point:i,layerInfo:t}),{popups:[{position:{coordinates:o},id:p()()}]}}},onPopupClose:function(){return function(){return{popups:[]}}}}),(0,i.withPropsOnChange)(["mapInfo","popups"],(function(e){var t=e.mapInfo,r=e.popups,n=e.options,i=(n=void 0===n?{}:n).mapOptions,a=(i=void 0===i?{}:i).mapInfoFormat,u=void 0===a?P():a,c=t.responses,s=t.requests,p=t.validResponses,f=function(){return o().createElement(l.Z,{renderValidOnly:!0,responses:c,requests:s,validResponses:p,format:u,showEmptyMessageGFI:!0,missingResponses:(s||[]).length-(c||[]).length})};return{popups:r.map((function(e){return g(g({},e),{},{component:f})}))}})),(0,i.withPropsOnChange)(["plugins","onPopupClose","popups"],(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.plugins,r=e.popups,n=e.onPopupClose,i=t.PopupSupport,a=t.tools,u=void 0===a?{}:a,c=h(t,v);if(!i)return{};var s=function(e){return o().createElement(i,m({},e,{popups:r,onPopupClose:n}))};return{plugins:g(g({},c),{},{tools:g(g({},u),{},{popup:s})})}})))),k=(0,i.withPropsOnChange)(["onClick","eventHandlers"],(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClick,r=void 0===t?function(){}:t,n=e.eventHandlers,o=void 0===n?{}:n;return{eventHandlers:g(g({},o),{},{onClick:r})}}))},61928:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(24852),o=r.n(n),i=r(45697),a=r.n(i),u=r(47037),c=r.n(u);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}var p=["impl","name"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,r,n,i,a=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(n);if(i){var r=g(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return h(this,e)});function u(){var e;b(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return j(O(e=a.call.apply(a,[this].concat(r))),"getTool",(function(t){var r=e.props.plugins;return c()(t)?{name:t,impl:r.tools[t]}:d({name:t.name,impl:r.tools[t.name]},t)})),j(O(e),"renderLayers",(function(){var t=e.props.map&&e.props.map.projection||"EPSG:3857",r=e.props.plugins.Layer;return e.props.layers.map((function(n,i){return o().createElement(r,{type:n.type,srs:t,position:i,key:n.id||n.name,options:n,env:n.localizedLayerStyles?e.props.env:[]},e.renderLayerContent(n,t))}))})),j(O(e),"renderLayerContent",(function(t,r){if(t.features&&"vector"===t.type){var n=e.props.plugins.Feature;return t.features.map((function(e){return o().createElement(n,{key:e.id,msId:e.id,type:e.type,crs:r,geometry:e.geometry,features:e.features,featuresCrs:t.featuresCrs||"EPSG:4326",layerStyle:t.style,style:e.style||t.style||null,properties:e.properties})}))}return null})),j(O(e),"renderTools",(function(){return e.props.tools.map((function(t){var r=e.getTool(t),n=r.impl,i=r.name,a=f(r,p);return o().createElement(n,l({key:i},a))}))})),e}return t=u,(r=[{key:"render",value:function(){var e=this.props.plugins.Map,t=this.props.map&&this.props.map.projection||"EPSG:3857";return this.props.map&&e?o().createElement(e,l({projectionDefs:this.props.projectionDefs,style:this.props.styleMap,id:this.props.id,zoomControl:!1,center:{x:0,y:0},zoom:1,hookRegister:this.props.hookRegister,mapStateSource:this.props.mapStateSource||this.props.id},this.props.options,this.props.map,{projection:t},this.props.eventHandlers),this.renderLayers(),this.renderTools(),this.props.children):null}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);j(w,"propTypes",{id:a().string,options:a().object,map:a().object,mapStateSource:a().string,eventHandlers:a().object,styleMap:a().object,layers:a().array,hookRegister:a().object,projectionDefs:a().array,plugins:a().any,tools:a().array,getLayerProps:a().func,env:a().array}),j(w,"defaultProps",{id:"__base_map__",options:{},map:{},styleMap:{},tools:[],projectionDefs:[],eventHandlers:{onMapViewChanges:function(){},onClick:function(){},onMouseMove:function(){},onLayerLoading:function(){},onLayerError:function(){}},env:[]});const P=w},7848:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(71703),o=r(22222),i=r(93152);const a=(0,n.connect)((0,o.P1)(i.$v,(function(e){return{mapType:e}})))},91812:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(67076),o=r(38482);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(0,n.compose)((0,n.withStateHandlers)((function(){return{resize:0}}),{onResize:function(e){var t=e.resize,r=void 0===t?0:t;return function(){return{resize:r+1}}}}),(0,o.Z)({debounceTime:e}),(0,n.withProps)((function(e){var t=e.options,r=e.resize;return{options:a(a({},t),{},{resize:r})}})))}},37981:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(67076),o=r(37275),i=r(1469),a=r.n(i);const u=(0,n.withProps)((function(e){var t=e.projectionDefs;return{projectionDefs:a()(t)&&t.length?t:o.ZP.getConfigProp("projectionDefs")||[]}}))},57068:(e,t,r)=>{"use strict";r.d(t,{e:()=>p});var n=r(67076),o=r(82030),i=r(5346),a=r(24852),u=r.n(a),c=r(37275),s=(0,n.withProps)((function(e){var t=e.map;return{projection:e.projection||(t.data&&t.data.map?t.data.map.projection:t&&t.projection)}})),p=(0,n.compose)(s,(0,o.Z)((function(e){var t=e.projectionDefs,r=void 0===t?c.ZP.getConfigProp("projectionDefs")||[]:t,n=e.projection;return n&&0===r.concat([{code:"EPSG:4326"},{code:"EPSG:3857"},{code:"EPSG:900913"}]).filter((function(e){return e.code===n})).length}),(function(e){var t=e.projection;return{glyph:"1-map",style:{width:"100%",height:"100%",display:"flex"},title:u().createElement(i.Z,{msgId:"map.errors.loading.title"}),mainViewStyle:{margin:"auto"},imageStyle:{height:120,width:120,margin:"auto"},description:u().createElement(i.Z,{msgId:"map.errors.loading.projectionError",msgParams:{projection:t}})}})))},19180:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(24852),o=r.n(n),i=r(45697),a=r.n(i);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const v=function(e){var t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(m,t);var n,i,a,u,v=(a=m,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(a);if(u){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function m(){var e;s(this,m);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(y(e=v.call.apply(v,[this].concat(r))),"state",{plugins:{}}),e}return n=m,(i=[{key:"componentDidMount",value:function(){this.setPlugins(this.props),this._isMounted=!0}},{key:"componentWillUpdate",value:function(e){e.mapType!==this.props.mapType&&this.setPlugins(e)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var t=this.state.plugins;return o().createElement(e,c({},this.props,{plugins:t}))}},{key:"setPlugins",value:function(e){var t=this;e.mapType&&r(43120)("./"+e.mapType+".js").then((function(e){t._isMounted&&(t.setState({plugins:e.default()}),t.props.onMapTypeLoaded())}))}}])&&p(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),m}(o().Component);return b(t,"propTypes",{mapType:a().string,onMapTypeLoaded:a().func}),b(t,"defaultProps",{onMapTypeLoaded:function(){}}),t.displayName="".concat(e.displayName,"WithMapType"),t}},69705:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(67076);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u=(0,n.compose)((0,n.withHandlers)({onMapViewChanges:function(e){var t=e.map,r=void 0===t?{}:t,n=e.onMapViewChanges,o=void 0===n?function(){}:n;return function(e,t,n,a,u,c,s,p,l){o(i(i({},r),{},{center:e,bbox:i(i({},r.bbox),n),zoom:t,size:a,mapStateSource:u,projection:c,resolution:p,orientate:l}))}}}),(0,n.withPropsOnChange)(["onMapViewChanges","eventHandlers"],(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onMapViewChanges,r=void 0===t?function(){}:t,n=e.eventHandlers,o=void 0===n?{}:n;return{eventHandlers:i(i({},o),{},{onMapViewChanges:r})}})))},19983:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(24852),o=r.n(n),i=r(45697),a=r.n(i),u=r(52259);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return function(t){var r,i,a,c,p,l,f,y=(null==t||null===(r=t.map)||void 0===r?void 0:r.projection)||"EPSG:3857",d=(null==t||null===(i=t.map)||void 0===i||null===(a=i.mapOptions)||void 0===a||null===(c=a.view)||void 0===c?void 0:c.DPI)||null,b=null==t||null===(p=t.map)||void 0===p||null===(l=p.mapOptions)||void 0===l||null===(f=l.view)||void 0===f?void 0:f.scales,v=(0,n.useMemo)((function(){return b?(0,u.getResolutionsForScales)(b,y,d):null}),[b,y,d]),m=v?s(s({},t),{},{map:s(s({},t.map),{},{mapOptions:s(s({},t.map.mapOptions),{},{view:s(s({},t.map.mapOptions.view),{},{resolutions:v})})})}):t;return o().createElement(e,m)}};l.propTypes={Component:a().element};const f=l},35400:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(24852),o=r.n(n),i=r(14471);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,r=void 0===t?{}:t,n=e.mainViewStyle,a=void 0===n?{}:n,c=e.contentStyle,s=void 0===c?{}:c,p=e.imageStyle,l=void 0===p?{}:p,f=e.glyph,y=void 0===f?"info-sign":f,d=e.iconFit,b=e.title,v=e.tooltip,m=e.tooltipId,h=e.description,O=e.content;return o().createElement("div",{className:"empty-state-container",style:u({height:d?"100%":void 0},r)},o().createElement("div",{key:"main-view",className:"empty-state-main-view",style:u({height:d?"100%":void 0},a)},y?o().createElement("div",{key:"glyph",className:"empty-state-image",style:u({height:d?"100%":void 0},l)},o().createElement(i.Z,{iconFit:d,tooltip:v,tooltipId:m,glyph:y})):null,b?o().createElement("h1",{key:"title"},b):null,h?o().createElement("p",{key:"description",className:"empty-state-description"},h):null),o().createElement("div",{key:"content",className:"empty-state-content",style:s},O))}},14471:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(24852),o=r.n(n),i=r(30294),a=r(96259),u=(0,r(15135).Z)(i.Glyphicon);const c=function(e){var t=e.glyph,r=void 0===t?"info-sign":t,n=e.tooltip,i=e.tooltipId,c=e.iconFit,s=e.padding,p=void 0===s?0:s,l=e.margin,f=void 0===l?0:l;return o().createElement(a.Z,null,(function(e){var t=e.width,a=e.height;return o().createElement(u,{glyph:r,tooltip:n,tooltipId:i,style:{display:"inline-block",padding:p+"px",margin:f+"px",textAlign:"center",fontSize:c?Math.min(t,a)-2*p-2*f:t-2*p-2*f}})}))}},75480:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(24852),o=r.n(n);const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,r=void 0===t?{display:"inline-block"}:t;return o().createElement("div",{style:r,className:"mapstore-inline-loader"})}},82030:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(24852),o=r.n(n),i=r(23560),a=r.n(i),u=r(67076),c=r(35400);const s=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.Z;return(0,u.branch)(e,(function(){return function(e){return o().createElement(r,t&&a()(t)?t(e):t)}}))}},38482:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(24852),o=r.n(n),i=r(23279),a=r.n(i),u=r(45697),c=r.n(u),s=r(80307),p=r.n(s),l=r(91033);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=j(e);if(t){var o=j(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}function O(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.debounceTime,r=e.querySelector,n=e.closest,i=void 0!==n&&n;return function(e){var n;return n=function(n){v(c,n);var u=h(c);function c(e){var n;return y(this,c),w(g(n=u.call(this,e)),"findDomNode",(function(){if(!n.isMounded)return null;var e=p().findDOMNode(g(n));return e&&i&&r?e.closest(r||"*"):e&&(r?e.querySelector(r):e)})),n.width=void 0,n.height=void 0,n.skipOnMount=e.skipOnMount,n.div=null,n.onResize=a()((function(){var e;return(e=n.props).onResize.apply(e,arguments)}),void 0!==t?t:e.debounceTime||1e3),n.ro=new l.Z((function(e){e.forEach((function(e){var t=e.contentRect,r=t.width,o=t.height,i=n.props.handleWidth&&n.width!==r,a=n.props.handleHeight&&n.height!==o;n.skipOnMount||!i&&!a||n.onResize({width:r,height:o}),n.width=r,n.height=o,n.skipOnMount=!1}))})),n}return b(c,[{key:"componentDidMount",value:function(){this.isMounded=!0,this.div=this.findDomNode(),this.div&&this.ro.observe(this.div)}},{key:"componentDidUpdate",value:function(){this.div=this.findDomNode(),this.div&&this.ro.observe(this.div)}},{key:"componentWillUnmount",value:function(){var e=this.findDomNode();e&&this.ro&&this.ro.unobserve&&this.ro.unobserve(e)}},{key:"render",value:function(){return o().createElement(e,this.props)}}]),c}(o().Component),w(n,"propTypes",{handleWidth:c().bool,handleHeight:c().bool,onResize:c().func}),w(n,"defaultProps",{onResize:function(){},handleWidth:!0,handleHeight:!0}),n}}},24684:(e,t,r)=>{"use strict";r.d(t,{F:()=>i,y:()=>a});var n=r(27361),o=r.n(n),i=function(e){return o()(e,"router.location.pathname")||"/"},a=function(e){return o()(e,"router.location.search")||""}}}]);