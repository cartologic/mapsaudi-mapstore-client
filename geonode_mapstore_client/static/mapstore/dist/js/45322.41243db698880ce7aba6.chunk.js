(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[45322],{389912:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r,o=n(124852),i=n(843033);const c=function(e){var t=e.map,n=e.onBoxEnd,c=e.status;return(0,o.useEffect)((function(){"start"===c?(r=new i.Z({condition:function(e){return e.originalEvent.altKey}}),t.addInteraction(r)):"end"===c&&t.removeInteraction(r)}),[c]),(0,o.useEffect)((function(){r&&r.on("boxend",(function(e){n({boxExtent:r.getGeometry().getExtent(),modifiers:{ctrl:e.mapBrowserEvent.pointerEvent.ctrlKey,metaKey:e.mapBrowserEvent.pointerEvent.metaKey}})}))}),[c]),null}},126105:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(124852),o=n.n(r),i=n(180307),c=n.n(i),a=n(675263),u=n.n(a),l=n(193409),s=n(747037),p=n.n(s),f=n(925064),y=n(821751);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function O(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new MutationObserver((function(){e.getMap().getSize()&&(e.setPosition(void 0),e.setPosition(n.coordinates))}));return r.observe(t,{attributes:!0,childList:!0,subtree:!0}),r},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(i){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function u(){var e;v(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return j(w(e=a.call.apply(a,[this].concat(n))),"onPopupClose",(function(t){e.props.onPopupClose(t)})),j(w(e),"renderPopups",(function(){return e.preparePopups().map((function(t){var n,r=t.popup,i=t.id,a=t.component,u=t.content,l=t.props,s=t.containerStyle,d=r.getElement(),b=p()(a)&&y.default[a]||a;return b?n=o().isValidElement(b)&&b||o().createElement(b,l):u&&(n=f.FP(u)?o().createElement("div",{dangerouslySetInnerHTML:{__html:u}}):u),d&&c().createPortal(o().createElement("div",{className:"map-popup-ol",key:i,onMouseUp:e.convertToClick},o().createElement("div",{className:"ol-popup-content-wrapper"},o().createElement("div",{className:"ol-popup-content",style:s},n)),o().createElement("div",{className:"ol-popup-closer",onClick:function(){return e.onPopupClose(i)}},"x")),d)}))})),j(w(e),"update",(function(){(e._popups||[]).map((function(e){var t=e.popup;t.setElement(t.getElement())}))})),j(w(e),"convertToClick",(function(e){var t=new MouseEvent("click",{bubbles:!0});t.stopPropagation=function(){},e.target.dispatchEvent(t)})),j(w(e),"preparePopups",(function(){var t=e.props,n=t.popups,r=void 0===n?[]:n,o=t.map,i=o.getSize();return(e._popups||[]).forEach((function(e){var t=e.popup,n=e.observer;n&&n.disconnect(),t&&o.removeOverlay(t)})),e._popups=r.map((function(e){var t=Math.round(.9*i[0])-40,n=Math.round(.9*i[1])-40,r=e.id,c=e.position.coordinates,a=e.className,u=e.maxWidth,s=void 0===u?t:u,p=e.maxHeight,y=void 0===p?n:p,d=e.autoPan,b=void 0!==d&&d,v=e.autoPanMargin,h=void 0===v?20:v,g=e.offset,O=void 0===g?[0,0]:g,w=e.autoPanAnimation,P=void 0===w?{duration:200}:w,j=s>t?t:s,E=y>n?n:y,_=f.fH(r,a),I=new l.Z({id:r,element:_,autoPan:b,offset:O,autoPanMargin:h,autoPanAnimation:P,positioning:"bottom-center",className:"ol-overlay-container ol-unselectable",position:c});return o.addOverlay(I),m({popup:I,observer:S(I,_,{coordinates:c}),containerStyle:{maxWidth:j,maxHeight:E}},e)})),e._popups})),j(w(e),"stopPropagationOnPointerMove",(function(e){e.stopPropagation()})),e}return t=u,(n=[{key:"UNSAFE_componentWillMount",value:function(){this.props.map&&this.props.map.getOverlayContainerStopEvent().addEventListener("pointermove",this.stopPropagationOnPointerMove)}},{key:"shouldComponentUpdate",value:function(e){return e.popups!==this.props.popups}},{key:"componentWillUnmount",value:function(){this.props.map&&this.props.map.getOverlayContainerStopEvent().removeEventListener("pointermove",this.stopPropagationOnPointerMove)}},{key:"render",value:function(){return o().createElement("div",null,this.renderPopups())}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);j(E,"propTypes",{map:u().object,popups:u().arrayOf(u().object),onPopupClose:u().func}),j(E,"defaultProps",{popups:[],onPopupClose:function(){}})},821751:(e,t,n)=>{"use strict";n.r(t),n.d(t,{IDENTIFY_POPUP:()=>P,default:()=>j});var r=n(124852),o=n.n(r),i=n(173014),c=n(11196),a=n(867076),u=n(171703),l=n(22222),s=n(307877),p=n(921914),f=n(542872),y=n(701469),d=n.n(y),b=n(352353),m=n.n(b),v=n(979870),h=n(800827),g=(0,a.compose)((0,u.connect)((0,l.P1)(s.Qf,(function(e){return{index:e}})),{setIndex:p.oO}),(0,a.defaultProps)({index:0,responses:[]})),O=(0,l.P1)([s.q7,s.o9,s.OK,s.us,s.x0,h.hp,s.vR],(function(e,t,n,r,o,i,c){return{responses:e,validResponses:t,requests:n,format:r,showEmptyMessageGFI:o,missingResponses:(n||[]).length-(e||[]).length,renderValidOnly:i,loaded:c}}));const w=(0,a.compose)((0,u.connect)(O),(0,a.defaultProps)({responses:[],container:function(e){var t=e.index,n=e.children;return o().createElement(o().Fragment,null,d()(n)&&n[t]||n)},header:v.Z}),g,c.Yy,c.mI,(0,i.Z)((function(e){var t=e.loaded;return m()(t)})))(f.Z);var P="identify";const j={identify:w}},532425:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(675263),o=n.n(r),i=n(124852),c=n.n(i);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,n=e.style,r=void 0===n?{}:n,o=e.className,i=e.hidden;return c().createElement("div",{className:o,style:u({width:t,height:t,overflow:"hidden"},r)},!i&&c().createElement("div",{className:"mapstore-".concat(s(t),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const f=p},864385:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ne});var r=n(868195),o=n(675263),i=n.n(o),c=n(957557),a=n.n(c),u=n(867076);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){return(0,u.mapProps)((function(t){return a()(t,e)}))},y={locale:navigator&&navigator.language,formats:{},messages:{},defaultLocale:"en",defaultFormats:{},formatDate:function(e){return e},formatTime:function(e){return e},formatRelative:function(e){return e},formatNumber:function(e){return e},formatPlural:function(e){return e},formatMessage:function(e){return e},formatHTMLMessage:function(e){return e},now:function(){return new Date}},d=n(790596),b=n(145697),m=n(130072),v=n(505904),h=n(722404),g=n(809056),O=n(706909),w=n(124852),P=n.n(w),j=n(51273),S=n(436403),E=n(120767),_=n(898185),I=n(831219),k=n(409371);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},R(e,t)}function Z(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return M(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Z(this,e)});function c(){var e;x(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return N(M(e=i.call.apply(i,[this].concat(n))),"getLayer",(function(){var t;return e.props.map.getLayers().forEach((function(n){e.layersFilter(n)&&(t=n)}),M(e)),t})),N(M(e),"setSelectInteraction",(function(){e._selectInteraction.getActive()||e._selectInteraction.setActive(!0)})),N(M(e),"createSelectInteraction",(function(){e.createStyle(),e._selectInteraction=new j.Z({layers:e.layersFilter,style:e._style,toggleCondition:S.QC}),e._selectInteraction.on("select",e.selectionChange,M(e)),e.props.map.addInteraction(e._selectInteraction)})),N(M(e),"selectionChange",(function(){var t=[];e._selectInteraction.getFeatures().forEach((function(e){t.push(e.getId())})),e.props.updateHighlighted(t,"")})),N(M(e),"cleanSupport",(function(){e._selectInteraction&&e._selectInteraction.getActive()&&(e._selectInteraction.getFeatures().clear(),e.props.updateHighlighted([],""),e._selectInteraction.setActive(!1))})),N(M(e),"layersFilter",(function(t){return e.props.layer&&t.get("msId")===e.props.layer})),N(M(e),"createStyle",(function(){var t=e.props.selectedStyle,n={stroke:new E.default(t.stroke?t.stroke:{color:"blue",width:1}),fill:new _.default(t.fill?t.fill:{color:"blue"})};"Point"===t.type&&(n={image:new k.default(T(T({},n),{},{radius:t.radius||5}))}),e._style=new I.default(n)})),N(M(e),"highlightFeatures",(function(t){var n=e.getLayer(),r=e._selectInteraction.getFeatures();r.clear(),n&&n.getSource().getFeatures().map((function(e){-1!==t.indexOf(e.getId())&&r.push(e)}),M(e))})),e}return t=c,(n=[{key:"componentDidMount",value:function(){this.createSelectInteraction(),"enabled"===this.props.status?this._selectInteraction.setActive(!0):this._selectInteraction.setActive(!1),this.props.features&&this.highlightFeatures(this.props.features)}},{key:"shouldComponentUpdate",value:function(e){var t=this.props;return e.status!==t.status||e.layer!==t.layer||"update"===e.status&&e.features.toString()!==t.features.toString()}},{key:"UNSAFE_componentWillUpdate",value:function(e){switch(e.status){case"enabled":this.setSelectInteraction(e);break;case"disabled":this.cleanSupport();break;case"update":this.highlightFeatures(e.features);break;default:return}}},{key:"componentWillUnmount",value:function(){this._selectInteraction&&(this.cleanSupport(),this._selectInteraction.un("select",this.selectionChange,this),this.props.map.removeInteraction(this._selectInteraction),this._selectInteraction=null,this._style=null)}},{key:"render",value:function(){return null}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(P().Component);N(A,"propTypes",{map:i().object,layer:i().string.isRequired,status:i().oneOf(["disabled","enabled","update"]),updateHighlighted:i().func,selectedStyle:i().object,features:i().array}),N(A,"contextTypes",{messages:i().object}),N(A,"defaultProps",{status:"disabled",updateHighlighted:function(){},selectedStyle:{type:"Point",radius:12,stroke:{width:4,color:"yellow"},fill:{color:"red"}}});var H=n(197016),B=n(429902),U=n(372445),W=n(718369);function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function K(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function Q(e,t){if(t&&("object"===z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return V(e)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){return Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Y(e)}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(r);if(o){var n=Y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Q(this,e)});function c(){var e;K(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return J(V(e=i.call.apply(i,[this].concat(n))),"addDrawInteraction",(function(t){e.drawInteraction&&e.removeDrawInteraction();var n=new H.Z,r=new B.Z({source:n,zIndex:1e6,style:new I.default({fill:new _.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new E.default({color:"#ffcc33",width:2}),image:new k.default({radius:7,fill:new _.default({color:"#ffcc33"})})})});e.props.map.addLayer(r);var o=new U.ZP({source:n,type:t.selection.geomType,style:new I.default({fill:new _.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new E.default({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new k.default({radius:5,stroke:new E.default({color:"rgba(0, 0, 0, 0.7)"}),fill:new _.default({color:"rgba(255, 255, 255, 0.2)"})})})});o.on("drawstart",(function(t){e.sketchFeature=t.feature,n.clear()})),o.on("drawend",(function(){e.updateSelectionState()})),e.props.map.addInteraction(o),e.drawInteraction=o,e.selectionLayer=r,e.setDoubleClickZoomEnabled(!1)})),J(V(e),"removeDrawInteraction",(function(){null!==e.drawInteraction&&(e.props.map.removeInteraction(e.drawInteraction),e.drawInteraction=null,e.props.map.removeLayer(e.selectionLayer),e.sketchFeature=null,setTimeout((function(){return e.setDoubleClickZoomEnabled(!0)}),251))})),J(V(e),"updateSelectionState",(function(){if(e.sketchFeature){var t=e.sketchFeature.getGeometry().getCoordinates(),n={geomType:e.props.selection.geomType,point:"Point"===e.props.selection.geomType?[t[0],t[1]]:null,line:"LineString"===e.props.selection.geomType?t.map((function(e){return[e[0],e[1]]})):null,polygon:"Polygon"===e.props.selection.geomType?e.sketchFeature.getGeometry().getLinearRing(0).getCoordinates().map((function(e){return[e[0],e[1]]})):null};e.props.changeSelectionState(n)}})),J(V(e),"setDoubleClickZoomEnabled",(function(t){for(var n=e.props.map.getInteractions(),r=0;r<n.getLength();r++){var o=n.item(r);if(o instanceof W.Z){o.setActive(t);break}}})),e}return t=c,(n=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.selection.geomType&&e.selection.geomType!==this.props.selection.geomType&&this.addDrawInteraction(e),e.selection.geomType||this.removeDrawInteraction()}},{key:"render",value:function(){return null}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(P().Component);J(X,"propTypes",{map:i().object,projection:i().string,selection:i().object,changeSelectionState:i().func}),J(X,"defaultProps",{selection:{}});var $=n(126105),ee=n(389912),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,u.compose)((0,u.getContext)({intl:i().object}),(0,u.branch)((function(e){return!!e.intl}),r.injectIntl,(0,u.withProps)({intl:y})),(0,u.withPropsOnChange)(["intl"],(function(t){var n=t.intl,r=void 0===n?{}:n;return e.reduce((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return s(s({},e),{},p({},t,r[t]))}),{})})),f(["intl"]))}(["formatNumber"]);const ne={LMap:d.Z,Layer:b.Z,Feature:m.Z,MeasurementSupport:te(v.Z),Overview:h.Z,ScaleBar:g.Z,DrawSupport:O.Z,HighlightFeatureSupport:A,SelectionSupport:X,PopupSupport:$.Z,BoxSelectionSupport:ee.Z}},925064:(e,t,n)=>{"use strict";n.d(t,{fH:()=>i,FP:()=>c,R3:()=>a});var r=n(455877),o=n.n(r),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o()(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms-map-popup",n=document.createElement("div");return n.setAttribute("id",e+"-map-popup"),n.setAttribute("class",t),n},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("<")},a=function(e,t){if(!t)return e;if(t instanceof Node){var n=document.createDocumentFragment();n.appendChild(t),e.appendChild(n)}else c(t)?e.innerHTML=t:e.append(document.createTextNode(String(t)));return e}}}]);