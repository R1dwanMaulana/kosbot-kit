(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{211:function(t,e,n){"use strict";var r=n(2),o=(n(17),n(8),n(9),n(6),n(128),n(0)),c=n(32),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=v.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}),O=v.reduce(((t,e)=>(t["offset"+Object(l.x)(e)]={type:[String,Number],default:null},t)),{}),j=v.reduce(((t,e)=>(t["order"+Object(l.x)(e)]={type:[String,Number],default:null},t)),{}),m={col:Object.keys(y),offset:Object.keys(O),order:Object.keys(j)};function w(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var h=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},O),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}}),render(t,e){var{props:n,data:data,children:r,parent:o}=e,l="";for(var f in n)l+=String(n[f]);var d=h.get(l);return d||function(){var t;for(t in d=[],m)m[t].forEach((e=>{var r=n[e],o=w(t,e,r);o&&d.push(o)}));var e=d.some((t=>t.startsWith("col-")));d.push({col:!e||!n.cols,["col-".concat(n.cols)]:n.cols,["offset-".concat(n.offset)]:n.offset,["order-".concat(n.order)]:n.order,["align-self-".concat(n.alignSelf)]:n.alignSelf}),h.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),r)}})},212:function(t,e,n){"use strict";var r=n(2),o=(n(17),n(8),n(9),n(6),n(128),n(0)),c=n(32),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=["start","end","center"];function O(t,e){return v.reduce(((n,r)=>(n[t+Object(l.x)(r)]=e(),n)),{})}var j=t=>[...y,"baseline","stretch"].includes(t),m=O("align",(()=>({type:String,default:null,validator:j}))),w=t=>[...y,"space-between","space-around"].includes(t),h=O("justify",(()=>({type:String,default:null,validator:w}))),S=t=>[...y,"space-between","space-around","stretch"].includes(t),k=O("alignContent",(()=>({type:String,default:null,validator:S}))),_={align:Object.keys(m),justify:Object.keys(h),alignContent:Object.keys(k)},C={align:"align",justify:"justify",alignContent:"align-content"};function P(t,e,n){var r=C[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var x=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:j}},m),{},{justify:{type:String,default:null,validator:w}},h),{},{alignContent:{type:String,default:null,validator:S}},k),render(t,e){var{props:n,data:data,children:r}=e,o="";for(var l in n)o+=String(n[l]);var f=x.get(o);return f||function(){var t;for(t in f=[],_)_[t].forEach((e=>{var r=n[e],o=P(t,e,r);o&&f.push(o)}));f.push({"no-gutters":n.noGutters,"row--dense":n.dense,["align-".concat(n.align)]:n.align,["justify-".concat(n.justify)]:n.justify,["align-content-".concat(n.alignContent)]:n.alignContent}),x.set(o,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),r)}})},243:function(t,e,n){"use strict";n.r(e);var r={data:()=>({items:[{src:"/Slider_Kosbot_1.png"},{src:"/Slider_Kosbot_2.png"},{src:"/Slider_Kosbot_3.png"}]})},o=n(37),c=n(98),l=n.n(c),f=n(106),d=n(211),v=n(87),y=n(212),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[n("img",{attrs:{src:"/header.jpg",alt:"",width:"350"}}),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"mx-2"},[n("h2",{staticClass:"mt-10"},[t._v("Kosbot")]),t._v(" "),n("p",{staticClass:"text-justify"},[t._v("\n        Kosbot adalah aplikasi berbasis web app dengan teknologi\n        "),n("strong",[t._v("AI")]),t._v(" untuk memprediksi harga kost di kota Malang.\n        Aplikasi ini dapat membantu Anda untuk mencari kost yang tepat.\n      ")]),t._v(" "),n("br"),t._v(" "),n("nuxt-link",{staticClass:"text-decoration-none",attrs:{to:"/menu"}},[n("v-btn",{staticClass:"\n            white--text\n            rounded-lg\n            pr-1\n            pl-2\n            text-subtitle-2 text-caption\n            font-weight-medium\n          ",attrs:{depressed:"",color:"pink lighten-1",elevation:"10"}},[t._v("\n          Coba sekarang\n          "),n("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:f.a,VCol:d.a,VIcon:v.a,VRow:y.a})}}]);