(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{192:function(t,e,r){"use strict";r(7);var n=r(2),c=(r(19),r(4),r(118),r(0)),o=r(26),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=["sm","md","lg","xl"],v=y.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}),O=y.reduce((t,e)=>(t["offset"+Object(l.w)(e)]={type:[String,Number],default:null},t),{}),h=y.reduce((t,e)=>(t["order"+Object(l.w)(e)]={type:[String,Number],default:null},t),{}),j={col:Object.keys(v),offset:Object.keys(O),order:Object.keys(h)};function m(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},O),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}}),render(t,e){var{props:r,data:data,children:n,parent:c}=e,l="";for(var f in r)l+=String(r[f]);var d=w.get(l);return d||function(){var t;for(t in d=[],j)j[t].forEach(e=>{var n=r[e],c=m(t,e,n);c&&d.push(c)});var e=d.some(t=>t.startsWith("col-"));d.push({col:!e||!r.cols,["col-".concat(r.cols)]:r.cols,["offset-".concat(r.offset)]:r.offset,["order-".concat(r.order)]:r.order,["align-self-".concat(r.alignSelf)]:r.alignSelf}),w.set(l,d)}(),t(r.tag,Object(o.a)(data,{class:d}),n)}})},193:function(t,e,r){"use strict";r(7);var n=r(2),c=(r(19),r(4),r(118),r(0)),o=r(26),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=["sm","md","lg","xl"],v=["start","end","center"];function O(t,e){return y.reduce((r,n)=>(r[t+Object(l.w)(n)]=e(),r),{})}var h=t=>[...v,"baseline","stretch"].includes(t),j=O("align",()=>({type:String,default:null,validator:h})),m=t=>[...v,"space-between","space-around"].includes(t),w=O("justify",()=>({type:String,default:null,validator:m})),S=t=>[...v,"space-between","space-around","stretch"].includes(t),P=O("alignContent",()=>({type:String,default:null,validator:S})),_={align:Object.keys(j),justify:Object.keys(w),alignContent:Object.keys(P)},C={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,r){var n=C[t];if(null!=r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return(n+="-".concat(r)).toLowerCase()}}var k=new Map;e.a=c.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},j),{},{justify:{type:String,default:null,validator:m}},w),{},{alignContent:{type:String,default:null,validator:S}},P),render(t,e){var{props:r,data:data,children:n}=e,c="";for(var l in r)c+=String(r[l]);var f=k.get(c);return f||function(){var t;for(t in f=[],_)_[t].forEach(e=>{var n=r[e],c=x(t,e,n);c&&f.push(c)});f.push({"no-gutters":r.noGutters,"row--dense":r.dense,["align-".concat(r.align)]:r.align,["justify-".concat(r.justify)]:r.justify,["align-content-".concat(r.alignContent)]:r.alignContent}),k.set(c,f)}(),t(r.tag,Object(o.a)(data,{staticClass:"row",class:f}),n)}})},206:function(t,e,r){},216:function(t,e,r){"use strict";r.r(e);var n={data:()=>({items:[{facility:"Panjang",changes:"4"},{facility:"Lebar",changes:"3"},{facility:"Meja",changes:"Iya"},{facility:"WiFi",changes:"Iya"},{facility:"Dapur",changes:"Iya"},{facility:"Parkir motor",changes:"Iya"}]})},c=r(34),o=r(90),l=r.n(o),f=r(192),d=r(193),y=(r(7),r(4),r(2)),v=(r(206),r(1)),O=r(10),h=r(6);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m=Object(h.a)(O.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(v.f)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"mx-2",attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("h3",{staticClass:"mb-8 text-center"},[t._v("Hasil Prediksi")]),t._v(" "),r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("Fasilitas")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("Pilihan")])])]),t._v(" "),r("tbody",[t._l(t.items,(function(e){return r("tr",{key:e},[r("td",[t._v(t._s(e.facility))]),t._v(" "),r("td",[t._v(t._s(e.changes))])])})),t._v(" "),r("tr",[r("td",[t._v("Harga")]),t._v(" "),r("td",[t._v("Rp. 750.000")])])],2)]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:f.a,VRow:d.a,VSimpleTable:m})}}]);