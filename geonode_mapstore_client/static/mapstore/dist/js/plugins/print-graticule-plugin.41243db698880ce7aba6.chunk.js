(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[22084,31351],{496829:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(675263),o=r.n(n),l=r(124852),a=r.n(l),c=r(757588);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function s(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(i,e);var t,r,n,o,l=(n=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(n);if(o){var r=b(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return s(this,e)});function i(){var e;u(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return d(y(e=l.call.apply(l,[this].concat(r))),"onChange",(function(){e.props.onChange(!e.refs.input.props.checked)})),d(y(e),"isEnabled",(function(){return e.props.isEnabled?e.props.isEnabled(e.props.layouts):0===e.props.layouts.length||e.props.layouts.some((function(t){return t.name.match(e.props.enableRegex)}))})),e}return t=i,(r=[{key:"render",value:function(){return a().createElement(c.Checkbox,{disabled:!this.isEnabled(),ref:"input",checked:this.props.checked,onChange:this.onChange},this.props.label)}}])&&f(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(a().Component);d(h,"propTypes",{layouts:o().array,enableRegex:o().oneOfType([o().object,o().string]),label:o().string,onChange:o().func,checked:o().bool,isEnabled:o().func}),d(h,"defaultProps",{layouts:[],enableRegex:/^.*$/,label:"Option",onChange:function(){},checked:!1});const v=h},113123:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Graticule:()=>g,default:()=>O});var n=r(124852),o=r.n(n),l=r(322843),a=r(171703),c=r(986069),i=r(832395),u=r(145959),f=r(134049),p=["style","labels","labelStyle","labelXStyle","labelYStyle","frame","frameStyle","labelFormatter"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function y(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){var t=e.style,r=e.labels,l=e.labelStyle,a=e.labelXStyle,c=e.labelYStyle,u=e.frame,b=e.frameStyle,d=e.labelFormatter,v=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,p);return(0,n.useEffect)((function(){(0,f.addMapTransformer)("graticule",function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,a=arguments.length>6?arguments[6]:void 0;return function(c,i){var u,f,p;return null!==(u=c.print)&&void 0!==u&&null!==(f=u.spec)&&void 0!==f&&null!==(p=f.params)&&void 0!==p&&p.graticule?h(h({},i),{},{layers:[].concat(y(i.layers),[{type:"graticule",visibility:!0,labels:t,frame:!!o,frameRatio:o,frameStyle:l,style:e,labelXStyle:r,labelYStyle:n,xLabelFormatter:a,yLabelFormatter:a}])}):i}}(t,r,a||l,c||l,null!=u?u:0,b,d))}),[]),o().createElement(i.W,s({property:"graticule",label:"print.graticule"},v))};const O=(0,l.rx)("PrintGraticule",{component:(0,a.connect)((function(e){var t;return{spec:(null==e||null===(t=e.print)||void 0===t?void 0:t.spec)||{}}}),{onChangeParameter:c.d$})(g),reducers:{print:u.Z},containers:{Print:{priority:1,target:"left-panel",position:5}}})},832395:(e,t,r)=>{"use strict";r.d(t,{W:()=>b});var n=r(124852),o=r.n(n),l=r(675263),a=r.n(l),c=r(322843),i=r(86638),u=r(496829),f=r(227361),p=r.n(f);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e,t){var r=e.spec,l=e.property,a=e.label,f=e.onChangeParameter,b=e.enabled,d=void 0===b||b,h=e.actions,v=e.path,g=void 0===v?"params.":v,O=e.additionalProperty,m=void 0===O||O,j=g+l;return(0,n.useEffect)((function(){var e;m&&(null==h||h.addParameter(l,null!==(e=p()(r,j))&&void 0!==e&&e))}),[]),(0,c.CU)({},function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),"{"+d+"}")?o().createElement(u.Z,{checked:!!p()(r,j),label:(0,i.S$)(t.messages,a),onChange:function(e){return f(j,e)}}):null};b.contextTypes={messages:a().object}},531351:e=>{var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}}}]);