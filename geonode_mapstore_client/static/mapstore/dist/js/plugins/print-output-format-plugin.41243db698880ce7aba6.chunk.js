(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6603,31351],{587401:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(675263),o=n.n(r),u=n(124852),i=n.n(u),c=n(757588);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function s(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(l,e);var t,n,r,o,u=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function l(){var e;a(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return b(y(e=u.call.apply(u,[this].concat(n))),"onChange",(function(t){e.props.onChange(t.target.value)})),e}return t=l,(n=[{key:"render",value:function(){var e=this.props.items.map((function(e){return i().createElement("option",{key:e.value,value:e.value},e.name)}));return i().createElement(c.FormGroup,null,this.props.label?i().createElement(c.ControlLabel,null,this.props.label):null,i().createElement(c.FormControl,{ref:"input",value:this.props.selected,componentClass:"select",onChange:this.onChange},e))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(i().Component);b(v,"propTypes",{items:o().array,label:o().string,onChange:o().func,selected:o().string}),b(v,"defaultProps",{items:[],label:"Choice",onChange:function(){},selected:""});const d=v},369987:(e,t,n)=>{"use strict";n.r(t),n.d(t,{OutputFormat:()=>d,default:()=>h});var r=n(124852),o=n.n(r),u=n(675263),i=n.n(u),c=n(322843),l=n(171703),a=n(986069),p=n(86638),f=n(587401),s=n(134049),y=n(145959);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e,t){var n,u,i=e.items,c=e.spec,l=e.onChangeParameter,a=e.defaultFormat,y=void 0===a?"pdf":a,m=e.allowedFormats;return(0,r.useEffect)((function(){(0,s.addTransformer)("outputFormat",(function(e,t){var n,r,o;return Promise.resolve(b(b({},t),{},{outputFormat:null!==(n=null===(r=e.print)||void 0===r||null===(o=r.spec)||void 0===o?void 0:o.outputFormat)&&void 0!==n?n:y}))}))}),[]),o().createElement(o().Fragment,null,o().createElement(f.Z,{selected:null!==(n=null==c?void 0:c.outputFormat)&&void 0!==n?n:y,onChange:function(e){return l("outputFormat",e)},items:(u=i,m?m.filter((function(e){return u.find((function(t){return t.value===e.value}))})):u),label:(0,p.S$)(t.messages,"print.outputFormat")}))};d.contextTypes={messages:i().object};const h=(0,c.rx)("PrintOutputFormat",{component:(0,l.connect)((function(e){var t,n,r,o,u;return{spec:(null==e||null===(t=e.print)||void 0===t?void 0:t.spec)||{},items:null!==(n=null==e||null===(r=e.print)||void 0===r||null===(o=r.capabilities)||void 0===o||null===(u=o.outputFormats)||void 0===u?void 0:u.map((function(e){return{name:e.name,value:e.name}})))&&void 0!==n?n:[{name:"pdf",value:"pdf"}]}}),{onChangeParameter:a.d$})(d),reducers:{print:y.Z},containers:{Print:{priority:1,target:"left-panel",position:3}}})},531351:e=>{var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}}}]);