(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[370],{93546:(e,t,r)=>{"use strict";r.d(t,{jF:()=>Ze,Fc:()=>Me,EC:()=>Ne,C2:()=>Qe,Cw:()=>Be,rm:()=>We});var n=r(14293),o=r.n(n),l=r(92742),i=r.n(l),a=r(47037),u=r.n(a),s=r(1469),c=r.n(s),f=r(84596),g=r.n(f),y=r(91175),d=r.n(y),h=r(10928),p=r.n(h),w=r(13311),v=r.n(w),m=r(13218),A=r.n(m),P=r(21915),C=r(43143),O=r(86267),S=r(33506),b=r(81763),x=r.n(b),G=r(31219),k=r(62875),F=r(15565),T=r(98185),M=r(38097),q=r.n(M),j=S.Z.markers.extra,U=j.icons[0],E=j.icons[1],L=j.size[1],Y=S.Z.getGlyphs("fontawesome"),I=function(e,t){var r=e.highlight,n=e.rotation,o=void 0===n?0:n;return r?[new G.default({image:new k.default({anchor:[.5,t],rotation:o,anchorXUnits:"fraction",anchorYUnits:"pixels",src:q(),scale:.5})})]:[]},z=function(e,t){var r,n,o=null==Y?void 0:Y[null==e||null===(r=e.style)||void 0===r?void 0:r.iconGlyph],l="FontAwesome",i=2;return null!=e&&null!==(n=e.style)&&void 0!==n&&n.iconText&&(o=e.style.iconText,l="sans-serif",i=1.6),new F.default({rotation:t,text:o,font:"14px ".concat(l),offsetY:-L*i/3,fill:new T.default({color:"#FFFFFF"})})};const D={extra:{getIcon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o()(e.style&&e.style.rotation)?0:e.style.rotation;return[new G.default({image:new k.default({rotation:t,anchor:[12,12],anchorXUnits:"pixels",anchorYUnits:"pixels",src:E})}),new G.default({image:new k.default({rotation:t,src:U,anchor:[j.size[0]/2,j.size[1]],anchorXUnits:"pixels",anchorYUnits:"pixels",size:j.size,offset:[j.colors.indexOf(e.style.iconColor||"blue")*j.size[0],j.shapes.indexOf(e.style.iconShape||"circle")*j.size[1]]}),text:z(e,t)})].concat(I(e.style,2*(L+15)))}},standard:{getIcon:function(e){var t=e.style,r=e.iconAnchor,n=o()(t&&t.rotation)?0:t.rotation,l=t.iconAnchor||r,i=[new G.default({image:new k.default({anchor:l||[.5,1],anchorXUnits:t.anchorXUnits||(l||0===l?"pixels":"fraction"),anchorYUnits:t.anchorYUnits||(l||0===l?"pixels":"fraction"),size:c()(t.size)?t.size:x()(t.size)?[t.size,t.size]:void 0,rotation:n,anchorOrigin:t.anchorOrigin||"top-left",src:t.iconUrl||t.symbolUrlCustomized||t.symbolUrl})})];t.shadowUrl&&(i=[new G.default({image:new k.default({anchor:[12,41],anchorXUnits:"pixels",anchorYUnits:"pixels",src:t.shadowUrl})}),i[0]]);var a=c()(t.size)?t.size[1]:x()(t.size)?t.size:0;return a=a>32?a+.75*a:L+10,i.concat(I(t,a))}},html:{getIcon:function(){return null}}};var B=r(66287),Q=r(9371),N=r(20767),W=r(52043),Z=r(44538),H=r(82702),J=r(75875),V=r.n(J),X=r(3918),R=r.n(X),K=r(51205),_=r.n(K),$=r(27418),ee=r.n($),te=r(61868);function re(e){return function(e){if(Array.isArray(e))return ne(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return ne(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ne(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){ie(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ie(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ae=[0,153,255,1],ue=new Q.default({radius:5,fill:null,stroke:new N.default({color:"red",width:1})}),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.radius,r=void 0===t?5:t,n=e.fillColor,o=void 0===n?"green":n,l=e.applyToPolygon,i=void 0!==l&&l;return new G.default({image:new Q.default({radius:r,fill:new T.default({color:o})}),geometry:function(e){var t=e.getGeometry(),r=t.getType();if(!i&&"Polygon"===r)return null;var n="Polygon"===r?t.getCoordinates()[0]:t.getCoordinates();return n.length>1?new W.Z(d()(n)):null}})},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.radius,r=void 0===t?5:t,n=e.fillColor,o=void 0===n?"red":n,l=e.applyToPolygon,i=void 0!==l&&l;return new G.default({image:new Q.default({radius:r,fill:new T.default({color:o})}),geometry:function(e){var t=e.getGeometry(),r=t.getType();if(!i&&"Polygon"===r)return null;var n="Polygon"===r?t.getCoordinates()[0]:t.getCoordinates();return new W.Z(n.length>3?n[n.length-("Polygon"===r?2:1)]:p()(n))}})},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return[se(e),ce(t)]},ge=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new G.default({text:new F.default({offsetY:void 0!==e.offsetY?e.offsetY:-4*Math.sqrt(e.fontSize),textAlign:e.textAlign||"center",textBaseline:e.verticalAlign||"middle",text:t||"",font:e.font,fill:new T.default({color:(0,C.qq)(e.stroke||e.color||"#000000",e.opacity||1)}),stroke:e.labelOutlineColor?new N.default({color:(0,C.qq)(e.labelOutlineColor,e.labelOutlineOpacity||1),width:e.labelOutlineWidth||1}):r?new N.default({color:[255,255,255,1],width:2}):null,rotation:e.rotation?e.rotation*Math.PI/180:0}),image:r?new Q.default({radius:5,fill:null,stroke:new N.default({color:(0,C.qq)(e.color||"#0000FF",e.opacity||1),width:e.weight||1})}):null})},ye={color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,radius:10},de={color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,editing:{fill:1}},he={color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,editing:{fill:1}},pe={Marker:{iconColor:"orange",iconShape:"circle",iconGlyph:"comment"},Text:{fontStyle:"normal",fontSize:"14",fontSizeUom:"px",fontFamily:"Arial",fontWeight:"normal",font:"14px Arial",textAlign:"center",color:"#000000",opacity:1},Circle:{color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2},Point:ye,MultiPoint:ye,LineString:de,MultiLineString:de,Polygon:he,MultiPolygon:he},we=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{color:"blue",width:3,lineDash:[6]};return{stroke:new N.default(e.style?e.style.stroke||{color:e.style.color||t.color,lineDash:u()(e.style.dashArray)&&i()(e.style.dashArray).split(" ")||t.lineDash,width:e.style.weight||t.width,lineCap:e.style.lineCap||"round",lineJoin:e.style.lineJoin||"round",lineDashOffset:e.style.dashOffset||0}:le({},t))}},ve=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{color:"rgba(0, 0, 255, 0.1)"};return{fill:new T.default(e.style?e.style.fill||{color:(0,C.qq)(e.style.fillColor,e.style.fillOpacity)||t.color}:le({},t))}},me={Point:function(){return[new G.default({image:ue})]},LineString:function(e){return[new G.default(ee()({},we(e,{color:"blue",width:3})))]},MultiLineString:function(e){return[new G.default(ee()({},we(e,{color:"blue",width:3})))]},MultiPoint:function(){return[new G.default({image:ue})]},MultiPolygon:function(e){return[new G.default(ee()({},we(e),ve(e)))]},Polygon:function(e){return[new G.default(ee()({},we(e),ve(e)))]},GeometryCollection:function(e){return[new G.default(ee()({},we(e),ve(e),{image:new Q.default({radius:10,fill:null,stroke:new N.default({color:"magenta"})})}))]},Circle:function(){return[new G.default({stroke:new N.default({color:"red",width:2}),fill:new T.default({color:"rgba(255,0,0,0.2)"})})]},marker:function(e){return[new G.default({image:new k.default({anchor:[14,41],anchorXUnits:"pixels",anchorYUnits:"pixels",src:_()})}),new G.default({image:new k.default({anchor:[.5,1],anchorXUnits:"fraction",anchorYUnits:"fraction",src:R()}),text:new F.default({text:e.label,scale:1.25,offsetY:8,fill:new T.default({color:"#000000"}),stroke:new N.default({color:"#FFFFFF",width:2})})})]}},Ae=function(e,t){var r=e.getGeometry().getType();return me[r](t&&t.style&&t.style[r]&&{style:le({},t.style[r])}||t||{})};function Pe(e){if(e.style.iconUrl)return D.standard.getIcon(e);var t=e.style.iconLibrary||"extra";return D[t]?D[t].getIcon(e):null}var Ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{style:pe},r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,l=arguments.length>4?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=t.style[e]||t.style;if("MultiLineString"===e||"LineString"===e){var u=[new G.default({stroke:t.style.useSelectedStyle?new N.default({color:[255,255,255,1],width:a.weight+2}):null}),new G.default(a?{stroke:new N.default(a&&a.stroke?a.stroke:{color:(0,C.qq)(t.style&&a.color||"#0000FF",a.opacity||1),lineDash:t.style.highlight?[10]:[0],width:a.weight||1}),image:r?ue:null}:{stroke:new N.default(pe[e]&&pe[e].stroke?pe[e].stroke:{color:(0,C.qq)(t.style&&pe[e].color||"#0000FF",pe[e].opacity||1),lineDash:t.style.highlight?[10]:[0],width:pe[e].weight||1})})],s=t.style.useSelectedStyle?fe({radius:a.weight,applyToPolygon:!0},{radius:a.weight,applyToPolygon:!0}):[];return[].concat(re(s),u)}if(("MultiPoint"===e||"Point"===e)&&(a.iconUrl||a.iconGlyph))return r?new G.default({image:ue}):Pe({style:le(le({},a),{},{highlight:t.style.highlight||t.style.useSelectedStyle})});if("Circle"===e&&i){var c=[new G.default({stroke:t.style.useSelectedStyle?new N.default({color:[255,255,255,1],width:a.weight+4}):null}),new G.default({stroke:new N.default(a&&a.stroke?a.stroke:{color:t.style.useSelectedStyle?ae:(0,C.qq)(t.style&&a.color||"#0000FF",a.opacity||1),lineDash:t.style.highlight?[10]:[0],width:a.weight||1}),fill:new T.default(a.fill?a.fill:{color:(0,C.qq)(t.style&&a.fillColor||"#0000FF",a.fillOpacity||.2)})}),new G.default({image:t.style.useSelectedStyle?new Q.default({radius:3,fill:new T.default(a.fill?a.fill:{color:ae})}):null,geometry:function(e){var t=e.getGeometry();if("Circle"===t.getType()){var r=t.getCenter();return new W.Z(r)}return null}})];return c}if("Text"===e&&a.font)return[ge(a,n[0],t.style.useSelectedStyle||t.style.highlight)];if("MultiPolygon"===e||"Polygon"===e){var f=[new G.default({stroke:t.style.useSelectedStyle?new N.default({color:[255,255,255,1],width:a.weight+2}):null}),new G.default({stroke:new N.default(a.stroke?a.stroke:{color:t.style.useSelectedStyle?ae:(0,C.qq)(t.style&&a.color||"#0000FF",o()(a.opacity)?1:a.opacity),lineDash:t.style.highlight?[10]:[0],width:a.weight||1}),image:r?ue:null,fill:new T.default(a.fill?a.fill:{color:(0,C.qq)(t.style&&a.fillColor||"#0000FF",o()(a.fillOpacity)?1:a.fillOpacity)})})],g=t.style.useSelectedStyle?fe({radius:a.weight,applyToPolygon:!0},{radius:a.weight,applyToPolygon:!0}):[];return[].concat(f,re(g))}return l};function Oe(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(e.styleName&&!e.overrideOLStyle)return function(t){if("marker"===e.styleName)switch(t.getGeometry().getType()){case"Point":case"MultiPoint":return me.marker(e)}return me[e.styleName](e)};var n,l=e.nativeStyle,i=r,a=0,u=e.style&&e.style.type||(e.features&&e.features[0]&&e.features[0].geometry?e.features[0].geometry.type:void 0);if("FeatureCollection"===u||e.features&&e.features[0]&&"FeatureCollection"===e.features[0].type)return function(r){var o=this||r;n=o.getGeometry()&&o.getGeometry().getType();var l=o&&o.getProperties();l&&l.isCircle&&(n="Circle",a=l.radius),l&&l.isText&&(n="Text",i=[l.valueText]);var u=(0,te.t8)("style.useSelectedStyle",l.canEdit,e);return Ce(n,u,t,i,null,a)};if(e&&e.properties&&e.properties.isText)return n="Text",i=[e.properties.valueText],Ce(n,e,t,i,null,a);if(e&&e.properties&&e.properties.isCircle)return n="Circle",a=e.properties.radius,Ce(n,e,t,i,null,a);if(!l&&e.style){if(l={stroke:new N.default(e.style.stroke?e.style.stroke:{color:(0,C.qq)(e.style&&e.style.color||"#0000FF",o()(e.style.opacity)?1:e.style.opacity),lineDash:e.style.lineDash||(e.style.highlight?[10]:[0]),width:e.style.weight||1}),fill:new T.default(e.style.fill?e.style.fill:{color:(0,C.qq)(e.style&&e.style.fillColor||"#0000FF",o()(e.style.fillOpacity)?1:e.style.fillOpacity)})},"Point"!==u&&"MultiPoint"!==u||(l={image:new Q.default(ee()({},l,{radius:e.style.radius||5}))}),e.style.iconUrl||e.style.iconGlyph){var s=Pe(e);return function(t){var r=this||t;switch(n=r.getGeometry().getType()){case"Point":case"MultiPoint":return s;default:return Ae(r,e)}}}return l=new G.default(l),"GeometryCollection"===u?l=function(o){var l,i=this||o;n=i.getGeometry().getType();var a=i.get("textGeometriesIndexes")||[],u=i.get("circles")||[],s=i.get("textValues");return"GeometryCollection"===i.getGeometry().getType()?i.getGeometry().getGeometries().reduce((function(o,i,f){if(("Point"===(n=i.getType())||"MultiPoint"===n)&&a.length&&-1!==a.indexOf(f)){var g=Ce("Text",e,t,[s[a.indexOf(f)]]);return g.setGeometry(i),o.concat([g])}if("Polygon"===n&&u.length&&-1!==u.indexOf(f)){var y=Ce("Circle",e,t,[]);return y.setGeometry(i),o.concat([y])}if("Point"===n||"MultiPoint"===n)return l=Pe({style:le(le({},e.style[n]),{},{highlight:e.style.highlight})}),o.concat(l.map((function(e){return e.setGeometry(i),e})));var d=Ce(n,e,t,r);return c()(d)?d.forEach((function(e){return e.setGeometry(i)})):d.setGeometry(i),o.concat([d])}),[]):"Point"===n||"MultiPoint"===n?(l=Pe({style:le(le({},e.style[n]),{},{highlight:e.style.highlight})}),t?new G.default({image:ue,geometry:i.getGeometry()}):l.map((function(e){return e.setGeometry(i.getGeometry()),e}))):Ce(n,e,t,r)}:("Circle"===u&&(a=e.features&&e.features.length&&e.features[0].properties&&e.features[0].properties.radius||10),Ce(u,e,t,r,l,a))}return l||Ae}function Se(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return be(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?be(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function be(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(r),!0).forEach((function(t){ke(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ke(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Fe={white:[255,255,255,1],blue:[0,153,255,1],width:3},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return(0,B.isCircleStyle)(e)?new Q.default({stroke:t,fill:r,radius:e.radius||5}):null},Me=function(e){if((0,B.isMarkerStyle)(e)){if(e.iconUrl)return D.standard.getIcon({style:e});var t=e.iconLibrary||"extra";if(D[t])return D[t].getIcon({style:e})}return null},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,B.isStrokeStyle)(e)?new N.default(e.stroke&&A()(e.stroke)?e.stroke:{color:e.highlight?Fe.blue:(0,C.qq)(e.color||e.stroke||"#0000FF",o()(e.opacity)?1:e.opacity),width:o()(e.weight)?1:e.weight,lineDash:u()(e.dashArray)&&i()(e.dashArray).split(" ")||c()(e.dashArray)&&e.dashArray||[0],lineCap:e.lineCap||"round",lineJoin:e.lineJoin||"round",lineDashOffset:e.dashOffset||0}):null},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,B.isFillStyle)(e)?new T.default(e.fill&&A()(e.fill)?e.fill:{color:(0,C.qq)(e.fillColor||"#0000FF",o()(e.fillOpacity)?1:e.fillOpacity)}):null},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3?arguments[3]:void 0;return(0,B.isTextStyle)(e)?new F.default({fill:r,offsetY:e.offsetY||-4*Math.sqrt(e.fontSize),rotation:e.textRotationDeg?e.textRotationDeg/180*Math.PI:0,textAlign:e.textAlign||"center",text:e.label||n&&n.properties&&n.properties.valueText||"New",font:e.font||"Arial",stroke:e.highlight?new N.default({color:[255,255,255,1],width:2}):t,image:e.highlight?new Q.default({radius:5,fill:null,stroke:new N.default({color:(0,C.qq)(e.color||"#0000FF",e.opacity||1),width:e.weight||1})}):null}):null},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.radius,r=void 0===t?5:t,n=e.fillColor,o=void 0===n?"green":n,l=e.applyToPolygon,i=void 0!==l&&l;return new G.default({image:new Q.default({radius:r,fill:new T.default({color:o})}),geometry:function(e){var t=e.getGeometry(),r=t.getType();if(!i&&"Polygon"===r)return null;var n="Polygon"===r?t.getCoordinates()[0]:t.getCoordinates();return n.length>1?new W.Z(d()(n)):null}})},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.radius,r=void 0===t?5:t,n=e.fillColor,o=void 0===n?"red":n,l=e.applyToPolygon,i=void 0!==l&&l;return new G.default({image:new Q.default({radius:r,fill:new T.default({color:o})}),geometry:function(e){var t=e.getGeometry(),r=t.getType();if(!i&&"Polygon"===r)return null;var n="Polygon"===r?t.getCoordinates()[0]:t.getCoordinates();return new W.Z(n.length>3?n[n.length-("Polygon"===r?2:1)]:p()(n))}})},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{radius:3,fillColor:"green",applyToPolygon:!0},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{radius:3,fillColor:"red",applyToPolygon:!0},n=[];return v()(e,(function(e){return"startPoint"===e.geometry&&e.filtering}))||n.push(Ee(Ge({},t))),v()(e,(function(e){return"endPoint"===e.geometry&&e.filtering}))||n.push(Le(Ge({},r))),n};(0,B.registerGeometryFunctions)("centerPoint",(function(e){var t=e.getGeometry(),r=e.getProperties().isGeodesic,n=void 0!==r&&r,o=t.getExtent(),l=n?(0,P.qg)(o):t.getCenter&&t.getCenter()||[o[2]-o[0],o[3]-o[1]];return new W.Z(l)}),"Point"),(0,B.registerGeometryFunctions)("lineToArc",(function(e){var t=e.getGeometry().getType();if("LineString"===t||"MultiPoint"===t){var r=e.getGeometry().getCoordinates();return r=(0,O.transformLineToArcs)(r.map((function(e){var t=(0,O.reproject)(e,"EPSG:3857","EPSG:4326");return[t.x,t.y]}))),new Z.Z(r.map((function(e){var t=(0,O.reproject)(e,"EPSG:4326","EPSG:3857");return[t.x,t.y]})))}return e.getGeometry()}),"LineString"),(0,B.registerGeometryFunctions)("startPoint",(function(e){var t=e.getGeometry(),r="Polygon"===t.getType()?t.getCoordinates()[0]:t.getCoordinates();return r.length>1?new W.Z(d()(r)):null}),"Point"),(0,B.registerGeometryFunctions)("endPoint",(function(e){var t=e.getGeometry(),r=t.getType(),n="Polygon"===r?t.getCoordinates()[0]:t.getCoordinates();return new W.Z(n.length>3?n[n.length-("Polygon"===r?2:1)]:p()(n))}),"Point");var Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.geometry?function(t){var r=e.geometry||"centerPoint";return B.geometryFunctions[r].func(t)}:function(e){return e.getGeometry()}},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!!o()(e.filtering)||e.filtering},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{properties:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=ze(t,e);if(n){var o=qe(t),l=je(t),i=Te(t,o,l);if((0,B.isMarkerStyle)(t))return Me(t).map((function(e){return e.setGeometry(Ie(t)),e}));if((0,B.isSymbolStyle)(t))return D.standard.getIcon({style:t}).map((function(e){return e.setGeometry(Ie(t)),e}));var a=Ue(t,o,l,e),u=t.zIndex,s=new G.default({geometry:Ie(t),image:i,text:a,stroke:!a&&!i&&o||null,fill:!a&&!i&&l||null,zIndex:u});return[s].concat(e&&e.properties&&e.properties.canEdit&&!e.properties.isCircle?Ye(r):[])}return new G.default({})},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{properties:{}},t=e.style;if(t){var r=c()(t)?t:g()(t);return r.reduce((function(t,n){return t.concat(De(e,n,r))}),[])}return[]},Qe=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(e.style&&e.style.url)return V().get(e.style.url).then((function(t){return H.Promise.all([(0,B.getStyleParser)(e.style.format),(0,B.getStyleParser)("openlayers")]).then((function(e){var r=Se(e,2),n=r[0],o=r[1];return n.readStyle(t.data).then((function(e){return o.writeStyle(e)}))}))}));if(e.style&&"geostyler"===e.style.format)return(0,B.getStyleParser)("openlayers").then((function(t){return t.writeStyle(e.style.styleObj)}));var n=Oe(e,t,r);return e.asPromise?new H.Promise((function(e){e(n)})):n},Ne=Pe,We=fe,Ze=pe},64250:(e,t,r)=>{"use strict";r.d(t,{a:()=>s});var n=r(1469),o=r.n(n),l=r(86267),i=r(21915),a=r(69669),u=function(e,t,r,n){if(o()(t)&&o()(t[0])&&o()(t[0][0])){var i=(0,l.reproject)(t[0][0],n,r);return Math.sqrt(Math.pow(e[0]-i.x,2)+Math.pow(e[1]-i.y,2))}return 100},s=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;if(!e.getGeometry()||"Polygon"!==e.getGeometry().getType()||e.getProperties().center&&0===e.getProperties().center.length)return e;if(e.getProperties()&&e.getProperties().isCircle&&e.getProperties().center&&e.getProperties().center[0]&&e.getProperties().center[1]){var n,o=e.getGeometry().getExtent();n=e.getProperties().center?[(n=(0,l.reproject)(e.getProperties().center,"EPSG:4326",t)).x,n.y]:(0,i.qg)(o);var s=e.getProperties().crs===t?e.getProperties().radius:u(n,e.getGeometry().getCoordinates(),t,r);return e.setGeometry(new a.Z(n,s)),e}return e}},51205:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAC5ElEQVRYw+2YW4/TMBCF45S0S1luXZCABy5CgLQgwf//S4BYBLTdJLax0fFqmB07nnQfEGqkIydpVH85M+NLjPe++dcPc4Q8Qh4hj5D/AaQJx6H/4TMwB0PeBNwU7EGQAmAtsNfAzoZkgIa0ZgLMa4Aj6CxIAsjhjOCoL5z7Glg1JAOkaicgvQBXuncwJAWjksLtBTWZe04CnYRktUGdilALppZBOgHGZcBzL6OClABvMSVIzyBjazOgrvACf1ydC5mguqAVg6RhdkSWQFj2uxfaq/BrIZOLEWgZdALIDvcMcZLD8ZbLC9de4yR1sYMi4G20S4Q/PWeJYxTOZn5zJXANZHIxAd4JWhPIloTJZhzMQduM89WQ3MUVAE/RnhAXpTycqys3NZALOBbB7kFrgLesQl2h45Fcj8L1tTSohUwuxhy8H/Qg6K7gIs+3kkaigQCOcyEXCHN07wyQazhrmIulvKMQAwMcmLNqyCVyMAI+BuxSMeTk3OPikLY2J1uE+VHQk6ANrhds+tNARqBeaGc72cK550FP4WhXmFmcMGhTwAR1ifOe3EvPqIegFmF+C8gVy0OfAaWQPMR7gF1OQKqGoBjq90HPMP01BUjPOqGFksC4emE48tWQAH0YmvOgF3DST6xieJgHAWxPAHMuNhrImIdvoNOKNWIOcE+UXE0pYAnkX6uhWsgVXDxHdTfCmrEEmMB2zMFimLVOtiiajxiGWrbU52EeCdyOwPEQD8LqyPH9Ti2kgYMf4OhSKB7qYILbBv3CuVTJ11Y80oaseiMWOONc/Y7kJYe0xL2f0BaiFTxknHO5HaMGMublKwxFGzYdWsBF174H/QDknhTHmHHN39iWFnkZx8lPyM8WHfYELmlLKtgWNmFNzQcC1b47gJ4hL19i7o65dhH0Negbca8vONZoP7doIeOC9zXm8RjuL0Gf4d4OYaU5ljo3GYiqzrWQHfJxA6ALhDpVKv9qYeZA8eM3EhfPSCmpuD0AAAAASUVORK5CYII="},38097:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAYAAABqBU3hAAABIUlEQVRIS+3UsYoCMRDG8f8q+EBid5WNnc019la2Vr6Ala1g4SvY+RTXiVdcJQgHV9jJIdhKZCNx2GwyibCNW4bd+X47k6Sg4adoOJ83wNcBsz4CvoGfF4zpEzgCO1mrCmDWpsAC+Af6wD4DMQGWwBUYAF9uLQlww1vli+cMhA1vl7UuEuECqsItNgUhw22tJ4QLGANrwP657LoG4Qt3EV3g4ALMfLZAp2beMYhQuCn/B/SAk9wDQ2CTgYgN/wB+jaTqFKQi1OE+gFnXIpLC6wAaxAqYAfaoVW0hM/NH2+vuAflxTCdCd5Q3PNQBWzgHURseC4gdh+xEMFwD0CKiwrWAWER0eAoghFCFpwJ8CHV4DkAiksJzARYxL2/O+92ufW42SVMYbhcsEwAAAABJRU5ErkJgggAA"}}]);