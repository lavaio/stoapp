(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-slider-slider"],{2410:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"slider 滑块"}},methods:{sliderChange:function(n){console.log("value 发生变化："+n.detail.value)}}};e.default=i},ad35:function(n,e,t){"use strict";t.r(e);var i=t("2410"),a=t.n(i);for(var u in i)"default"!==u&&function(n){t.d(e,n,(function(){return i[n]}))}(u);e["default"]=a.a},ba6c:function(n,e,t){"use strict";var i,a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",[t("page-head",{attrs:{title:n.title}}),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"uni-title"},[n._v("显示当前value")]),t("v-uni-view",[t("v-uni-slider",{attrs:{value:"50","show-value":!0},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.sliderChange.apply(void 0,arguments)}}})],1),t("v-uni-view",{staticClass:"uni-title"},[n._v("设置步进step跳动")]),t("v-uni-view",[t("v-uni-slider",{attrs:{value:"60",step:"5"},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.sliderChange.apply(void 0,arguments)}}})],1),t("v-uni-view",{staticClass:"uni-title"},[n._v("设置最小/最大值")]),t("v-uni-view",[t("v-uni-slider",{attrs:{value:"100",min:"50",max:"200","show-value":!0},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.sliderChange.apply(void 0,arguments)}}})],1),t("v-uni-view",{staticClass:"uni-title"},[n._v("不同颜色和大小的滑块")]),t("v-uni-view",[t("v-uni-slider",{attrs:{value:"50",activeColor:"#FFCC33",backgroundColor:"#000000","block-color":"#8A6DE9","block-size":"20"},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.sliderChange.apply(void 0,arguments)}}})],1)],1)],1)},u=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return i}))},e986:function(n,e,t){"use strict";t.r(e);var i=t("ba6c"),a=t("ad35");for(var u in a)"default"!==u&&function(n){t.d(e,n,(function(){return a[n]}))}(u);var l,r=t("f0c5"),v=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],l);e["default"]=v.exports}}]);