(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{275:function(t,e,n){"use strict";n(10),n(7),n(46),n(34),n(36);var r=n(2),c=(n(38),n(262),n(45),n(5),n(4),n(9),n(21),n(189),n(0)),o=n(59),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=["sm","md","lg","xl"],O=y.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),v=y.reduce((function(t,e){return t["offset"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),j=y.reduce((function(t,e){return t["order"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(O),offset:Object.keys(v),order:Object.keys(j)};function m(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],h)h[e].forEach((function(t){var r=n[t],c=m(e,t,r);c&&d.push(c)}));var c=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!c||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,d)}(),t(n.tag,Object(o.a)(data,{class:d}),c)}})},276:function(t,e,n){"use strict";n(10),n(7);var r=n(2),c=(n(38),n(262),n(45),n(5),n(4),n(9),n(34),n(36),n(189),n(0)),o=n(59),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=["sm","md","lg","xl"],O=["start","end","center"];function v(t,e){return y.reduce((function(n,r){return n[t+Object(l.w)(r)]=e(),n}),{})}var j=function(t){return[].concat(O,["baseline","stretch"]).includes(t)},h=v("align",(function(){return{type:String,default:null,validator:j}})),m=function(t){return[].concat(O,["space-between","space-around"]).includes(t)},w=v("justify",(function(){return{type:String,default:null,validator:m}})),S=function(t){return[].concat(O,["space-between","space-around","stretch"]).includes(t)},P=v("alignContent",(function(){return{type:String,default:null,validator:S}})),_={align:Object.keys(h),justify:Object.keys(w),alignContent:Object.keys(P)},C={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,n){var r=C[t];if(null!=n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return(r+="-".concat(n)).toLowerCase()}}var k=new Map;e.a=c.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:j}},h),{},{justify:{type:String,default:null,validator:m}},w),{},{alignContent:{type:String,default:null,validator:S}},P),render:function(t,e){var n=e.props,data=e.data,c=e.children,l="";for(var f in n)l+=String(n[f]);var d=k.get(l);return d||function(){var t,e;for(e in d=[],_)_[e].forEach((function(t){var r=n[t],c=x(e,t,r);c&&d.push(c)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),k.set(l,d)}(),t(n.tag,Object(o.a)(data,{staticClass:"row",class:d}),c)}})},289:function(t,e,n){},299:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{items:[{facility:"Panjang",changes:"4"},{facility:"Lebar",changes:"3"},{facility:"Meja",changes:"Iya"},{facility:"WiFi",changes:"Iya"},{facility:"Dapur",changes:"Iya"},{facility:"Parkir motor",changes:"Iya"}]}}},c=n(73),o=n(147),l=n.n(o),f=n(275),d=n(276),y=(n(10),n(7),n(5),n(4),n(9),n(2)),O=(n(21),n(289),n(1)),v=n(30),j=n(8);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m=Object(j.a)(v.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(O.f)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"mx-2",attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[n("h3",{staticClass:"mb-8 text-center"},[t._v("Hasil Prediksi")]),t._v(" "),n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("Fasilitas")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("Pilihan")])])]),t._v(" "),n("tbody",[t._l(t.items,(function(e){return n("tr",{key:e},[n("td",[t._v(t._s(e.facility))]),t._v(" "),n("td",[t._v(t._s(e.changes))])])})),t._v(" "),n("tr",[n("td",[t._v("Harga")]),t._v(" "),n("td",[t._v("Rp. 750.000")])])],2)]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:f.a,VRow:d.a,VSimpleTable:m})}}]);