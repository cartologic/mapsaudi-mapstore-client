(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[68980],{921914:(e,t,n)=>{"use strict";n.d(t,{XL:()=>o,km:()=>i,Ih:()=>a,Xw:()=>c,Pn:()=>u,DZ:()=>s,e8:()=>l,E0:()=>p,F9:()=>f,X_:()=>d,pb:()=>y,qb:()=>m,Re:()=>b,ih:()=>h,xy:()=>v,jL:()=>g,oz:()=>E,ph:()=>O,lF:()=>w,gG:()=>_,cb:()=>P,GI:()=>I,B1:()=>D,fv:()=>N,gc:()=>T,zX:()=>j,ZF:()=>S,Zb:()=>R,DW:()=>C,Xp:()=>F,Fm:()=>x,sV:()=>A,Mn:()=>M,LU:()=>G,XP:()=>k,WU:()=>K,JB:()=>L,g:()=>U,ws:()=>Y,HP:()=>H,aN:()=>q,Pg:()=>V,u0:()=>W,TM:()=>B,PM:()=>X,lK:()=>z,sv:()=>Q,MO:()=>J,oO:()=>$,Mc:()=>ee,Zw:()=>te,RA:()=>ne,am:()=>re,ZM:()=>oe,wm:()=>ie,Y$:()=>ae,Qu:()=>ce,kT:()=>ue});var r=n(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",a="EXCEPTIONS_FEATURE_INFO",c="CHANGE_MAPINFO_STATE",u="NEW_MAPINFO_REQUEST",s="PURGE_MAPINFO_RESULTS",l="CHANGE_MAPINFO_FORMAT",p="SHOW_MAPINFO_MARKER",f="HIDE_MAPINFO_MARKER",d="SHOW_REVERSE_GEOCODE",y="HIDE_REVERSE_GEOCODE",m="GET_VECTOR_INFO",b="NO_QUERYABLE_LAYERS",h="CLEAR_WARNING",v="FEATURE_INFO_CLICK",g="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",E="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",O="TOGGLE_MAPINFO_STATE",w="UPDATE_CENTER_TO_MARKER",_="IDENTIFY:CHANGE_PAGE",P="IDENTIFY:CLOSE_IDENTIFY",I="IDENTIFY:CHANGE_FORMAT",D="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",N="IDENTIFY:EDIT_LAYER_FEATURES",T="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",j="IDENTIFY:SET_MAP_TRIGGER",S="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",R="IDENTIFY:SET_SHOW_IN_MAP_POPUP",C="IDENTIFY:IDENTIFY_IS_MOUNTED",F="IDENTIFY:INIT_PLUGIN";function x(e,t,n,r,i){return{type:o,data:t,reqId:e,requestParams:n,layerMetadata:r,layer:i}}function A(e,t,n,r){return{type:i,error:t,reqId:e,requestParams:n,layerMetadata:r}}function M(e,t,n,r){return{type:a,reqId:e,exceptions:t,requestParams:n,layerMetadata:r}}function G(){return{type:b}}function k(){return{type:h}}function K(e,t){return{type:u,reqId:e,request:t}}function L(e,t,n,r){return{type:m,layer:e,request:t,metadata:n,queryableLayers:r}}function U(){return{type:s}}function Y(e){return{type:l,infoFormat:e}}function H(){return{type:p}}function q(){return{type:f}}function Z(e){return{type:d,reverseGeocodeData:e.data}}function V(e){return function(t){r.Z.reverseGeocode(e).then((function(e){t(Z(e))})).catch((function(e){t(Z(e))}))}}function W(){return{type:y}}function B(){return{type:O}}function X(e){return{type:w,status:e}}function z(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:v,point:e,layer:t,filterNameList:n,overrideParams:r,itemId:o}}function Q(e){return{type:g,point:e}}function J(e){return{type:E,enabled:e}}function $(e){return{type:_,index:e}}var ee=function(){return{type:P}},te=function(e){return{type:I,format:e}},ne=function(e){return{type:D,showCoordinateEditor:e}},re=function(e){return{type:N,layer:e}},oe=function(e){return{type:T,query:e}},ie=function(e){return{type:j,trigger:e}},ae=function(e){return{type:R,value:e}},ce=function(e){return{type:C,isMounted:e}},ue=function(e){return{type:F,cfg:e}}},647310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(375875),o=n.n(r),i=n(472500),a=n.n(i),c=n(727418),u=n.n(c),s={format:"json",bounded:0,polygon_geojson:1,priority:5};const l={geocode:function(e,t){var n=u()({q:e},s,t||{}),r=a().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(e,t){var n=u()({lat:e.lat,lon:e.lng},t||{},s),r=a().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}},799509:(e,t,n)=>{"use strict";n.d(t,{Z:()=>J});var r=n(124852),o=n.n(r),i=n(675263),a=n.n(i),c=n(548403),u=n.n(c),s=n(757588),l=n(794192);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function m(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(c,e);var t,n,r,i,a=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(i){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function c(){var e;f(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(b(e=a.call.apply(a,[this].concat(n))),"verifyOnKeyDownEvent",(function(t){69===t.keyCode&&t.preventDefault(),13===t.keyCode&&(t.preventDefault(),t.stopPropagation(),e.props.onKeyDown(t))})),v(b(e),"validateDecimalLon",(function(t){var n=e.props.constraints[e.props.format].lon.min,r=e.props.constraints[e.props.format].lon.max,o=parseFloat(t);return isNaN(o)||o<n||o>r?"error":null})),v(b(e),"validateDecimalLat",(function(t){var n=e.props.constraints[e.props.format].lat.min,r=e.props.constraints[e.props.format].lat.max,o=parseFloat(t);return isNaN(o)||o<n||o>r?"error":null})),e}return t=c,(n=[{key:"render",value:function(){var e=this,t=this.props,n=t.coordinate,r=t.value,i=t.onChange,a=t.disabled,c="validateDecimal"+u()(n);return o().createElement(s.FormGroup,{validationState:this[c](r)},o().createElement(l.Z,{disabled:a,key:n,value:r,placeholder:n,onChange:function(t){""===t?i(""):null===e[c](t)?i(t):i(r)},onKeyDown:this.verifyOnKeyDownEvent,step:1,validateNameFunc:this[c],type:"number"}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(o().Component);v(g,"propTypes",{idx:a().number,value:a().number,constraints:a().object,format:a().string,coordinate:a().string,onChange:a().func,onKeyDown:a().func,onSubmit:a().func,disabled:a().bool}),v(g,"defaultProps",{format:"decimal",coordinate:"lat",constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},onKeyDown:function(){},disabled:!1});const E=g;var O=n(414293),w=n.n(O),_=n(867076);const P=(0,_.withProps)((function(e){var t=e.coordinate,n=void 0===t?"lat":t;return{maxDegrees:"lat"===n?90:180,directions:"lat"===n?["N","S"]:["E","W"]}}));var I=n(562395);const D=(0,_.compose)((0,_.withProps)((function(e){return{isValid:""!==e.value}})),(0,_.withState)("initial","setInitial",{}),(0,_.withProps)((function(e){var t=e.isValid,n=e.initial,r=e.degrees,o=e.minutes,i=e.seconds;return t||""===r&&""===o&&""===i?{}:n})),(0,_.withHandlers)({onChange:function(e){return function(t){var n=t.degrees,r=t.minutes,o=t.seconds,i=t.direction;isNaN(n)?e.setInitial({degrees:"",minutes:r,seconds:o,direction:i}):isNaN(r)?e.setInitial({degrees:n,minutes:"",seconds:o,direction:i}):isNaN(o)&&e.setInitial({degrees:n,minutes:r,seconds:"",direction:i}),e.onChange({degrees:n,minutes:r,seconds:o,direction:i})}}}));function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){M(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function F(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var G="degrees",k="seconds",K="minutes",L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(c,e);var t,n,r,i,a=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(i){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return F(this,e)});function c(){var e;S(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return M(x(e=a.call.apply(a,[this].concat(n))),"onChange",(function(t,n){var r=e.getUpdatedCoordinateValue(t,n);e.props.onChange(r)})),M(x(e),"getUpdatedCoordinateValue",(function(t,n){try{var r=M({degrees:e.props.degrees,minutes:e.props.minutes,seconds:e.props.seconds,direction:e.props.direction},t,t===G?Math.min(n,e.props.maxDegrees):n),o=r.seconds,i=r.minutes+e.getSexagesimalStep(o),a=Math.min(e.props.maxDegrees,r.degrees+e.getSexagesimalStep(i)),c=r.direction;return o=e.roundToNextSexagesimalStep(o),i=e.roundToNextSexagesimalStep(i),a===e.props.maxDegrees&&(i=0,o=0),c=a<0?c===e.props.directions[0]?e.props.directions[1]:e.props.directions[0]:c,-1===a&&(r.degrees<0&&r.minutes>=0?a=r.degrees:r.minutes<0&&r.degrees<=0?(a=0,i=r.minutes):(a=0,i=0,o=1e-4)),{degrees:a,minutes:i,seconds:o,direction:c}}catch(e){return null}})),M(x(e),"getSexagesimalStep",(function(e){return e>=60?1:e<0?-1:0})),M(x(e),"getInputStyle",(function(e){return isNaN(e)||""===e?{borderColor:"#a94442"}:{}})),M(x(e),"getNewValue",(function(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G;if(""===t)n="";else{var o=r===k?parseFloat(t):parseInt(t,10),i=r===G?e.props.maxDegrees:60;n=Math.round(10*o)/10<i?o:e.props[r]}return n})),M(x(e),"verifyOnKeyDownEvent",(function(t){var n;69===t.keyCode&&t.preventDefault(),"0"===(null==t||null===(n=t.target)||void 0===n?void 0:n.value)&&t.target.setSelectionRange(-1,-1),13===t.keyCode&&(t.preventDefault(),t.stopPropagation(),e.props.onKeyDown())})),M(x(e),"roundToNextSexagesimalStep",(function(e){return e<0?60+e:e>=60?e-60:e})),M(x(e),"isValid",(function(t){var n=t.minutes,r=t.seconds,o=t.degrees,i=t.direction;return!w()(n)&&n>0&&n<60&&!w()(r)&&r>0&&r<60&&!w()(o)&&o>0&&o<e.props.maxDegrees&&i})),e}return t=c,(n=[{key:"render",value:function(){var e,t,n,r=this,i={padding:0,textAlign:"center",borderRight:"none"},a=this.getInputStyle(this.props.degrees),c=this.getInputStyle(this.props.minutes),u=this.getInputStyle(this.props.seconds),p={position:"relative",top:0,overflow:"visible",zIndex:3,left:-25,width:0,height:0},f=(null!==(e=null==this||null===(t=this.props)||void 0===t||null===(n=t.aeronauticalOptions)||void 0===n?void 0:n.seconds)&&void 0!==e?e:{}).step;return o().createElement(s.FormGroup,{style:{display:"inline-flex"}},o().createElement("div",{className:G,style:{width:40,display:"flex"}},o().createElement(l.Z,{key:this.props.coordinate+G,value:this.props.degrees,disabled:this.props.disabled,placeholder:"d",onChange:function(e){return r.onChange(G,r.getNewValue(e))},step:1,size:3,max:this.props.maxDegrees,min:-1,onKeyDown:function(e){r.verifyOnKeyDownEvent(e)},style:j(j({width:"100%"},i),a),type:"number"}),o().createElement("span",{style:p},"°")),o().createElement("div",{className:K,style:{width:40,display:"flex"}},o().createElement(l.Z,{disabled:this.props.disabled,key:this.props.coordinate+K,placeholder:"m",size:3,value:this.props.minutes,onChange:function(e){return r.onChange(K,r.getNewValue(e,K))},max:60,min:-1,onKeyDown:function(e){r.verifyOnKeyDownEvent(e)},style:j(j({width:"100%"},i),c),step:1,type:"number"}),o().createElement("span",{style:p},"′")),o().createElement("div",{className:k,style:{display:"flex"}},o().createElement(l.Z,{disabled:this.props.disabled,key:this.props.coordinate+k,value:this.props.seconds,placeholder:"s",onChange:function(e){return r.onChange(k,r.getNewValue(e,k))},step:f,max:60,onKeyDown:function(e){r.verifyOnKeyDownEvent(e)},min:-1,style:j(j({width:"100%"},i),u),type:"number"}),o().createElement("span",{style:p},"″")),o().createElement("div",{className:"direction-select"},o().createElement(s.FormControl,{disabled:this.props.disabled,componentClass:"select",placeholder:"select",value:this.props.direction,onChange:function(e){return r.onChange("direction",e.target.value)},style:{paddingLeft:4,paddingRight:4,flex:"1 1 0%"}},this.props.directions.map((function(e){return o().createElement("option",{key:e,value:e},e)})))))}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(o().Component);M(L,"propTypes",{idx:a().number,maxDegrees:a().number,degrees:a().number,minutes:a().number,seconds:a().number,directions:a().array,direction:a().string,aeronauticalOptions:a().object,coordinate:a().string,onChange:a().func,onKeyDown:a().func,disabled:a().bool}),M(L,"defaultProps",{coordinate:"lat",maxDegrees:90,directions:["N","S"],aeronauticalOptions:{seconds:{decimals:4,step:1e-4}},onKeyDown:function(){},disabled:!1});const U=(0,_.compose)(P,I.Z,D)(L),Y=(0,_.compose)((0,_.withHandlers)({onChange:function(e){var t=e.onChange,n=void 0===t?function(){}:t,r=e.maxLatitude,o=void 0===r?89.9997222222:r,i=e.coordinate;return function(e){return n(Math.abs(parseFloat(e))>o&&"lat"===i?Math.sign(e)*o:e)}}}));function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function q(){return q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W(e,t){return W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},W(e,t)}function B(e,t){if(t&&("object"===H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&W(e,t)}(c,e);var t,n,r,i,a=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=X(r);if(i){var n=X(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function c(){return Z(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e=this.props.format;return"decimal"===e||w()(e)?o().createElement(E,q({},this.props,{format:this.props.format||"decimal"})):o().createElement(U,this.props)}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(o().Component);z(Q,"propTypes",{idx:a().number,value:a().number,constraints:a().object,format:a().string,aeronauticalOptions:a().object,coordinate:a().string,onChange:a().func,onKeyDown:a().func}),z(Q,"defaultProps",{format:"decimal",constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}}});const J=Y(Q)},562395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(807654),o=n.n(r),i=n(59854),a=n.n(i),c=n(867076);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l=(0,c.compose)((0,c.withProps)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},function(e,t){var n,r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).seconds,i=e>=0?Math.floor(e):Math.ceil(e),c=Math.abs(60*(e-i)),u=Math.floor(c),s=60*(c-u),l=a()(s,null!==(n=null==r?void 0:r.decimals)&&void 0!==n?n:4);return i=Math.abs(i),60===l&&(u++,l=0),60===u&&(i++,u=0),o()(i)||""===e?{degrees:"",minutes:"",seconds:"",direction:t?"E":"N"}:{degrees:i,minutes:u,seconds:l,direction:e<0?t?"W":"S":t?"E":"N"}}(e.value,"lon"===e.coordinate,e.aeronauticalOptions))})),(0,c.withHandlers)({onChange:function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.degrees,r=t.minutes,i=t.seconds,a=t.direction,c=0,u=0,s=0;void 0===n&&void 0===r&&void 0===i&&e.onChange(void 0),o()(n)||(c=n),o()(r)||(u=r),o()(i)||(s=i);var l=c+u/60+s/3600;(l>0&&("S"===a||"W"===a)||l<0&&("N"===a||"E"===a))&&(l*=-1),e.onChange(l.toPrecision(12))}}}))},777900:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(757588),o=n(815135),i=n(124852),a=n.n(i),c=n(423570),u=n.n(c);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var l=(0,o.Z)(r.DropdownButton),p={disabled:!1,className:"square-button-md",noCaret:!0,idDropDown:u()()};const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.menuOptions,n=void 0===t?[]:t,o=e.buttonConfig,i=void 0===o?{}:o;return a().createElement(l,s({},p,i),n.length?n.map((function(e,t){var n=e.glyph,o=e.text,i=e.onClick,c=e.active,u=void 0!==c&&c;return a().createElement(r.MenuItem,{active:u,eventKey:t,onClick:i,key:t},n&&a().createElement(r.Glyphicon,{glyph:n})," ",o)})):null)}}}]);