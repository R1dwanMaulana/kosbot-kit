(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{189:function(e,t,r){"use strict";var n=r(94);t.a=n.a},190:function(e,t,r){},191:function(e,t,r){"use strict";r(7);var n=r(2),o=(r(19),r(4),r(118),r(0)),l=r(26),c=r(1);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=["sm","md","lg","xl"],v=f.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}),m=f.reduce((e,t)=>(e["offset"+Object(c.w)(t)]={type:[String,Number],default:null},e),{}),y=f.reduce((e,t)=>(e["order"+Object(c.w)(t)]={type:[String,Number],default:null},e),{}),O={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(y)};function j(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var _=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:h(h(h(h({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}}),render(e,t){var{props:r,data:data,children:n,parent:o}=t,c="";for(var d in r)c+=String(r[d]);var h=_.get(c);return h||function(){var e;for(e in h=[],O)O[e].forEach(t=>{var n=r[t],o=j(e,t,n);o&&h.push(o)});var t=h.some(e=>e.startsWith("col-"));h.push({col:!t||!r.cols,["col-".concat(r.cols)]:r.cols,["offset-".concat(r.offset)]:r.offset,["order-".concat(r.order)]:r.order,["align-self-".concat(r.alignSelf)]:r.alignSelf}),_.set(c,h)}(),e(r.tag,Object(l.a)(data,{class:h}),n)}})},192:function(e,t,r){"use strict";r(7);var n=r(2),o=(r(19),r(4),r(118),r(0)),l=r(26),c=r(1);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=["sm","md","lg","xl"],v=["start","end","center"];function m(e,t){return f.reduce((r,n)=>(r[e+Object(c.w)(n)]=t(),r),{})}var y=e=>[...v,"baseline","stretch"].includes(e),O=m("align",()=>({type:String,default:null,validator:y})),j=e=>[...v,"space-between","space-around"].includes(e),_=m("justify",()=>({type:String,default:null,validator:j})),w=e=>[...v,"space-between","space-around","stretch"].includes(e),C=m("alignContent",()=>({type:String,default:null,validator:w})),k={align:Object.keys(O),justify:Object.keys(_),alignContent:Object.keys(C)},B={align:"align",justify:"justify",alignContent:"align-content"};function S(e,t,r){var n=B[e];if(null!=r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var P=new Map;t.a=o.a.extend({name:"v-row",functional:!0,props:h(h(h({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},O),{},{justify:{type:String,default:null,validator:j}},_),{},{alignContent:{type:String,default:null,validator:w}},C),render(e,t){var{props:r,data:data,children:n}=t,o="";for(var c in r)o+=String(r[c]);var d=P.get(o);return d||function(){var e;for(e in d=[],k)k[e].forEach(t=>{var n=r[t],o=S(e,t,n);o&&d.push(o)});d.push({"no-gutters":r.noGutters,"row--dense":r.dense,["align-".concat(r.align)]:r.align,["justify-".concat(r.justify)]:r.justify,["align-content-".concat(r.alignContent)]:r.alignContent}),P.set(o,d)}(),e(r.tag,Object(l.a)(data,{staticClass:"row",class:d}),n)}})},193:function(e,t,r){"use strict";var n=r(0),o=(r(7),r(4),r(2)),l=(r(190),r(90)),c=r(9),d=r(46),h=r(92),f=r(10),v=r(1),m=r(6);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var O=Object(m.a)(c.a,Object(d.b)(["absolute","fixed","top","bottom"]),h.a,f.a).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(v.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(v.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){return{opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity),[this.isReversed?"right":"left"]:Object(v.f)(this.normalizedValue,"%"),width:Object(v.f)(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition(){return this.indeterminate?l.c:l.d},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(v.f)(this.normalizedBuffer,"%")),e}},methods:{genContent(){var slot=Object(v.n)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(this.reactive){var{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100}},normalize:e=>e<0?0:e>100?100:parseFloat(e)},render(e){return e("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(v.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});t.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(O,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},195:function(e,t,r){},196:function(e,t,r){},217:function(e,t,r){"use strict";r.r(t);var n=r(32),o=r(89),l=r.n(o),c=(r(7),r(4),r(2)),d=(r(195),r(91)),h=r(189),f=r(39),v=r(18),m=r(10),y=r(0).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),O=r(6),j=r(5);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C=Object(O.a)(d.a,v.a,y).extend({name:"v-alert",props:{border:{type:String,validator:e=>["top","right","bottom","left"].includes(e)},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:e=>"string"==typeof e||!1===e},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:e=>["info","error","success","warning"].includes(e)},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:{["v-alert__border--".concat(this.border)]:!0}};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible(){if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(h.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(f.a,{props:{color:e}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(f.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){var e=w(w({},d.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(e["v-alert--border-".concat(this.border)]=!0),e},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||m.a.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(j.a)("outline","outlined",this)},methods:{genWrapper(){var e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},e)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){var data={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(e){var t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}}),k=(r(196),r(193)),B=r(31);function S(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var $=Object(O.a)(k.a,B.a,d.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return P(P({"v-card":!0},B.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},d.a.options.computed.classes.call(this))},styles(){var style=P({},d.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress(){var e=k.a.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){var{tag:t,data:data}=this.generateRouteLink();return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}}),x=r(191),E=r(192),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-card",{attrs:{elevation:"4",rounded:"lg"}},[r("div",{staticClass:"text-center mx-3 py-10"},[r("img",{attrs:{src:"/about.jpg",alt:"logo kosbot",height:"200"}}),e._v(" "),r("h2",[e._v("\n          Apikasi prediksi harga kost, praktis dari web browser + support\n          install (app native)\n        ")]),e._v(" "),r("p",{staticClass:"mt-8"},[e._v("Sumber data :")]),e._v(" "),r("li",[r("span",{staticClass:"text--light-blue accent-3 font-weight-bold"},[r("a",{staticClass:"text-decoration-none",attrs:{href:"https://mamikos.com"}},[e._v("Mamikos")])]),e._v("\n          untuk sumber data kost kota Malang\n        ")]),e._v(" "),r("v-alert",{staticClass:"mt-5",attrs:{border:"top",type:"warning",outlined:""}},[e._v("\n          Apabila Anda ingin menyampaikan saran, kritik, dan menemukan\n          kesalahan pada aplikasi. bisa dijelaskan di halaman Github issue\n        ")]),e._v(" "),r("h5",{staticClass:"mt-15 font-weight-regular"},[e._v("\n          Contents licensed under CC BY-NC-SA 4.0. "),r("br"),e._v("Made using Nuxt.js\n          and Vuetify. Hosted on Vercel. "),r("br"),e._v("\n          MIT License © 2021 - present | Ridwan Maulana.\n        ")])],1)])],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VAlert:C,VCard:$,VCol:x.a,VRow:E.a})}}]);