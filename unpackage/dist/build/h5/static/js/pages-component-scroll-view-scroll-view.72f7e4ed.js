(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-scroll-view-scroll-view"],{2981:function(t,i,l){var e=l("24fb");i=e(!1),i.push([t.i,".scroll-Y[data-v-5267967f]{height:%?300?%}.scroll-view_H[data-v-5267967f]{white-space:nowrap;width:100%}.scroll-view-item[data-v-5267967f]{height:%?300?%;line-height:%?300?%;text-align:center;font-size:%?36?%}.scroll-view-item_H[data-v-5267967f]{display:inline-block;width:100%;height:%?300?%;line-height:%?300?%;text-align:center;font-size:%?36?%}",""]),t.exports=i},"2ff4":function(t,i,l){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var l={data:function(){return{scrollTop:0,old:{scrollTop:0}}},methods:{upper:function(i){t("log",i," at pages/component/scroll-view/scroll-view.vue:48")},lower:function(i){t("log",i," at pages/component/scroll-view/scroll-view.vue:51")},scroll:function(i){t("log",i," at pages/component/scroll-view/scroll-view.vue:54"),this.old.scrollTop=i.detail.scrollTop},goTop:function(t){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=0})),uni.showToast({icon:"none",title:"纵向滚动 scrollTop 值已被修改为 0"})}}};i.default=l}).call(this,l("0de9")["log"])},a063:function(t,i,l){"use strict";l.r(i);var e=l("a631"),o=l("f3b5");for(var n in o)"default"!==n&&function(t){l.d(i,t,(function(){return o[t]}))}(n);l("a2c4");var s,c=l("f0c5"),a=Object(c["a"])(o["default"],e["b"],e["c"],!1,null,"5267967f",null,!1,e["a"],s);i["default"]=a.exports},a2c4:function(t,i,l){"use strict";var e=l("ba75"),o=l.n(e);o.a},a631:function(t,i,l){"use strict";var e,o=function(){var t=this,i=t.$createElement,l=t._self._c||i;return l("v-uni-view",[l("page-head",{attrs:{title:"scroll-view,区域滚动视图"}}),l("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[l("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("Vertical Scroll"),l("v-uni-text",[t._v("\\n纵向滚动")])],1),l("v-uni-view",[l("v-uni-scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-top":t.scrollTop,"scroll-y":"true"},on:{scrolltoupper:function(i){arguments[0]=i=t.$handleEvent(i),t.upper.apply(void 0,arguments)},scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.lower.apply(void 0,arguments)},scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},[l("v-uni-view",{staticClass:"scroll-view-item uni-bg-red",attrs:{id:"demo1"}},[t._v("A")]),l("v-uni-view",{staticClass:"scroll-view-item uni-bg-green",attrs:{id:"demo2"}},[t._v("B")]),l("v-uni-view",{staticClass:"scroll-view-item uni-bg-blue",attrs:{id:"demo3"}},[t._v("C")])],1)],1),l("v-uni-view",{staticClass:"uni-link uni-center uni-common-mt",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goTop.apply(void 0,arguments)}}},[t._v("点击这里返回顶部")]),l("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("Horizontal Scroll"),l("v-uni-text",[t._v("\\n横向滚动")])],1),l("v-uni-view",[l("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true","scroll-left":"120"},on:{scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},[l("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-red",attrs:{id:"demo1"}},[t._v("A")]),l("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-green",attrs:{id:"demo2"}},[t._v("B")]),l("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-blue",attrs:{id:"demo3"}},[t._v("C")])],1)],1),l("v-uni-view",{staticClass:"uni-common-pb"})],1)],1)},n=[];l.d(i,"b",(function(){return o})),l.d(i,"c",(function(){return n})),l.d(i,"a",(function(){return e}))},ba75:function(t,i,l){var e=l("2981");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=l("4f06").default;o("53d9f9f5",e,!0,{sourceMap:!1,shadowMode:!1})},f3b5:function(t,i,l){"use strict";l.r(i);var e=l("2ff4"),o=l.n(e);for(var n in e)"default"!==n&&function(t){l.d(i,t,(function(){return e[t]}))}(n);i["default"]=o.a}}]);