(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7272],{32420:(e,t,r)=>{"use strict";r.d(t,{DH:()=>v,dN:()=>d,Bm:()=>O,FU:()=>m,v$:()=>g});var n=r(75875),o=r.n(n),c=r(72500),i=r.n(c),a=r(27418),u=r.n(a),l=["version"];function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(e,t){return o().get(e+"?service=WFS&version=1.1.0&request=GetFeature",{params:u()({outputFormat:"application/json"},t)}).then((function(e){return"object"!==s(e.data)?JSON.parse(e.data):e.data}))},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.version,n=void 0===r?"1.1.0":r,o=i().parse(e,!0);return i().format(u()({},o,{query:u()({service:"WFS",version:n,request:"GetCapabilities"},o.query)}))},O=function(e,t,r){return o().get(function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.version,o=void 0===n?"1.1.0":n,c=f(r,l),a=i().parse(e,!0);return i().format(u()({},a,{query:u()(b({service:"WFS",typeName:t,version:o,request:"GetFeature"},c),a.query)}))}(e,t,r))},m=function(e){return o().get(d(e))},g=function(e,t){return o().get(function(e,t){var r=i().parse(e,!0);return i().format(b(b({},r),{},{search:void 0,query:b(b({},r.query),{},{service:"WFS",version:"1.1.0",typeName:t,outputFormat:"application/json",request:"DescribeFeatureType"})}))}(e,t)).then((function(e){return e.data}))}},96829:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(45697),o=r.n(n),c=r(24852),i=r.n(c),a=r(30294);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function p(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(u,e);var t,r,n,o,c=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(n);if(o){var r=y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return p(this,e)});function u(){var e;l(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return v(b(e=c.call.apply(c,[this].concat(r))),"onChange",(function(){e.props.onChange(!e.refs.input.props.checked)})),v(b(e),"isEnabled",(function(){return e.props.isEnabled?e.props.isEnabled(e.props.layouts):0===e.props.layouts.length||e.props.layouts.some((function(t){return t.name.match(e.props.enableRegex)}))})),e}return t=u,(r=[{key:"render",value:function(){return i().createElement(a.Checkbox,{disabled:!this.isEnabled(),ref:"input",checked:this.props.checked,onChange:this.onChange},this.props.label)}}])&&f(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(i().Component);v(d,"propTypes",{layouts:o().array,enableRegex:o().oneOfType([o().object,o().string]),label:o().string,onChange:o().func,checked:o().bool,isEnabled:o().func}),v(d,"defaultProps",{layouts:[],enableRegex:/^.*$/,label:"Option",onChange:function(){},checked:!1});const O=d},32395:(e,t,r)=>{"use strict";r.d(t,{W:()=>y});var n=r(24852),o=r.n(n),c=r(45697),i=r.n(c),a=r(22843),u=r(86638),l=r(96829),f=r(27361),s=r.n(f);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=function(e,t){var r=e.spec,c=e.property,i=e.label,f=e.onChangeParameter,y=e.enabled,v=void 0===y||y,d=e.actions,O=e.path,m=void 0===O?"params.":O,g=e.additionalProperty,h=void 0===g||g,j=m+c;return(0,n.useEffect)((function(){var e;h&&(null==d||d.addParameter(c,null!==(e=s()(r,j))&&void 0!==e&&e))}),[]),(0,a.CU)({},function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),"{"+v+"}")?o().createElement(l.Z,{checked:!!s()(r,j),label:(0,u.S$)(t.messages,i),onChange:function(e){return f(j,e)}}):null};y.contextTypes={messages:i().object}},1842:(e,t,r)=>{"use strict";r.r(t),r.d(t,{defaultFormat:()=>m,Scale:()=>h,default:()=>j});var n=r(24852),o=r.n(n),c=r(32395),i=r(22843),a=r(71703),u=r(86069),l=r(5346),f=r(34049),s=r(20289),p=r(45959),b=["map","scale","locale","label","optionLabel","actions","onAddParameter"];function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US",r=new Intl.NumberFormat(t,{maximumFractionDigits:0}).format(e);return"1:".concat(r)}var g=function(e){var t,r,n,o,c,i;return{spec:null!==(t=null==e||null===(r=e.print)||void 0===r?void 0:r.spec)&&void 0!==t?t:{},scale:null==e||null===(n=e.print)||void 0===n||null===(o=n.map)||void 0===o?void 0:o.scale,locale:null!==(c=null==e||null===(i=e.locale)||void 0===i?void 0:i.current)&&void 0!==c?c:"en-US"}},h=function(e){var t,r=e.map,i=e.scale,a=e.locale,u=e.label,s=void 0===u?"print.scale":u,p=e.optionLabel,v=void 0===p?"print.includeScale":p,O=(e.actions,e.onAddParameter),h=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,b),j=e.format||m;return(0,n.useEffect)((function(){var e;(0,f.addTransformer)("scale",(e=j,function(t,r){var n,o,c=null==r||null===(n=r.pages)||void 0===n||null===(o=n[0])||void 0===o?void 0:o.scale,i=g(t).locale;return Promise.resolve(d(d({},r),{},{mapScale:null!=r&&r.includeScale?"".concat(e(c,i,!0)):""}))}),4)}),[]),o().createElement("div",{id:"print-scale"},o().createElement("div",{style:{float:"left",marginRight:5}},o().createElement(l.Z,{msgId:s})," ",j(null!==(t=null==r?void 0:r.scale)&&void 0!==t?t:i,a)),o().createElement(c.W,y({},h,{actions:{addParameter:O},property:"includeScale",label:v})))};const j=(0,i.rx)("PrintScale",{component:(0,a.connect)(g,{onChangeParameter:u.d$,onAddParameter:u.eT})(h),reducers:{locale:s.Z,print:p.Z},containers:{Print:{priority:1,target:"left-panel",position:3}}})},8316:(e,t,r)=>{"use strict";r.d(t,{Pz:()=>i,Ps:()=>a,KV:()=>u});var n=r(22222),o=r(91175),c=r.n(o),i=function(e){return e.locale&&e.locale.current||"en-US"},a=function(e){return e.locale&&e.locale.messages||{}},u=(0,n.P1)([i],(function(e){return c()(e.split("-"))}))},53231:(e,t,r)=>{"use strict";r.d(t,{h:()=>n});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.length?e.map((function(e){var t=e.name,r=e.value;return"".concat(t,":").concat(r)})).join(";"):""}},69199:(e,t,r)=>{var n=r(89881),o=r(98612);e.exports=function(e,t){var r=-1,c=o(e)?Array(e.length):[];return n(e,(function(e,n,o){c[++r]=t(e,n,o)})),c}},82689:(e,t,r)=>{var n=r(29932),o=r(97786),c=r(67206),i=r(69199),a=r(71131),u=r(7518),l=r(85022),f=r(6557),s=r(1469);e.exports=function(e,t,r){t=t.length?n(t,(function(e){return s(e)?function(t){return o(t,1===e.length?e[0]:e)}:e})):[f];var p=-1;t=n(t,u(c));var b=i(e,(function(e,r,o){return{criteria:n(t,(function(t){return t(e)})),index:++p,value:e}}));return a(b,(function(e,t){return l(e,t,r)}))}},71131:e=>{e.exports=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}},26393:(e,t,r)=>{var n=r(33448);e.exports=function(e,t){if(e!==t){var r=void 0!==e,o=null===e,c=e==e,i=n(e),a=void 0!==t,u=null===t,l=t==t,f=n(t);if(!u&&!f&&!i&&e>t||i&&a&&l&&!u&&!f||o&&a&&l||!r&&l||!c)return 1;if(!o&&!i&&!f&&e<t||f&&r&&c&&!o&&!i||u&&r&&c||!a&&c||!l)return-1}return 0}},85022:(e,t,r)=>{var n=r(26393);e.exports=function(e,t,r){for(var o=-1,c=e.criteria,i=t.criteria,a=c.length,u=r.length;++o<a;){var l=n(c[o],i[o]);if(l)return o>=u?l:l*("desc"==r[o]?-1:1)}return e.index-t.index}},52353:e=>{e.exports=function(e){return void 0===e}},89734:(e,t,r)=>{var n=r(21078),o=r(82689),c=r(5976),i=r(16612),a=c((function(e,t){if(null==e)return[];var r=t.length;return r>1&&i(e,t[0],t[1])?t=[]:r>2&&i(t[0],t[1],t[2])&&(t=[t[0]]),o(e,n(t,1),[])}));e.exports=a}}]);