(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[49528],{370646:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>E});var r=t(893379),o=t.n(r),i=t(289010);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var p=t(727418),a=t.n(p),s=t(171703),c=t(22222),l=t(675263),u=t.n(l),f=t(124852),d=t.n(f),b=t(472986),m=t.n(b);function g(n){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},g(n)}function y(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function h(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function x(n,e){return x=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},x(n,e)}function w(n,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function v(n){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},v(n)}function O(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.e(79509).then(t.bind(t,634903));var P=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&x(n,e)}(p,n);var e,t,r,o,i=(r=p,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,e=v(r);if(o){var t=v(this).constructor;n=Reflect.construct(e,arguments,t)}else n=e.apply(this,arguments);return w(this,n)});function p(){return y(this,p),i.apply(this,arguments)}return e=p,(t=[{key:"render",value:function(){return this.props.loading?d().createElement("div",{className:this.props.className,id:this.props.id},d().createElement(m(),{noFadeIn:!0,overrideSpinnerClassName:"spinner",spinnerName:this.props.spinner})):null}}])&&h(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),p}(d().Component);O(P,"propTypes",{id:u().string,loading:u().bool,className:u().string,spinner:u().string}),O(P,"defaultProps",{id:"mapstore-globalspinner",loading:!1,className:"ms2-loading",spinner:"circle"});const _=P;var j=t(675110),k=(0,c.P1)([j.l2],(function(n){return{loading:n&&n.some((function(n){return n.loading}))}})),S=(0,s.connect)(k)(_);const E={MapLoadingPlugin:a()(S,{Toolbar:{name:"maploading",position:1,tool:!0,priority:1}}),reducers:{}}},289010:(n,e,t)=>{"use strict";t.d(e,{Z:()=>i});var r=t(923645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,".msgapi #mapstore-globalspinner  {\n    width: 28px;\n    height: 28px;\n    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);\n    background-color: white;\n    background-size: 80px 80px;\n    background-repeat: no-repeat;\n    border-radius: 4px;\n    border: 1px solid #999;\n    z-index: 10;\n    top: 90px;\n    left: 2px;\n    position: absolute;\n    margin: 8px;\n}\n\n.msgapi #mapstore-globalspinner .circle-wrapper {\n    margin-left: 2px;\n    margin-top: 1px;\n}\n\n.msgapi #mapstore-toolbar #mapstore-globalspinner {\n    position: static;\n    width: 42px;\n    margin: 0;\n    margin-top: 0;\n    height: 35px;\n    box-shadow: none;\n}\n\n.msgapi .ms2-loading .sk-circle-wrapper {\n     width: 30px;\n     height: 30px;\n     margin-left: 10px !important;\n     margin-top: 10px !important;\n }\n",""]);const i=o}}]);