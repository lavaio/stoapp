(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-search-input-nav-search-input"],{"163f":function(n,i,t){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t={data:function(){return{showSwiper:!1,imgUrls:["https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg","https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"]}},onNavigationBarSearchInputClicked:function(i){n("log","事件执行了"," at pages/template/nav-search-input/nav-search-input.vue:42"),uni.navigateTo({url:"/pages/template/nav-search-input/detail/detail"})},onNavigationBarButtonTap:function(){uni.showModal({title:"提示",content:"用户点击了功能按钮，这里仅做展示。",success:function(i){i.confirm&&n("log","用户点击了确定"," at pages/template/nav-search-input/nav-search-input.vue:56")}})}};i.default=t}).call(this,t("0de9")["log"])},"2e96":function(n,i,t){"use strict";var e,a=function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("v-uni-view",{staticClass:"page"},[t("v-uni-swiper",{attrs:{"indicator-dots":"true"}},n._l(n.imgUrls,(function(n,i){return t("v-uni-swiper-item",{key:i},[t("v-uni-image",{attrs:{src:n}})],1)})),1),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"uni-title"},[t("v-uni-view",[n._v("本示例为导航栏带搜索框完整功能演示，主要演示有：")]),t("v-uni-view",[n._v("1. 导航栏为 transparent 模式，向上滑动页面，导航栏会从透明变为实色。")]),t("v-uni-view",[n._v("2. 点击搜索框跳转到搜索页面。")]),t("v-uni-view",[n._v("3. 点击导航栏右侧按钮实现关联操作。")]),t("v-uni-view",[n._v("4. 搜索页面为提示词搜索，输入内容实时显示关联词。")]),t("v-uni-view",[n._v("5. 搜索结果根据搜索内容高亮显示文字。")]),t("v-uni-view",[n._v("6. 点击搜索列表或者软键盘搜索按钮，会将结果保存到搜索历史列表。")]),t("v-uni-view",[n._v("7. 点击删除图标，清空历史搜索列表。")]),t("v-uni-view",[n._v("Tips")]),t("v-uni-view",[n._v("1. 本示例目前仅支持 App 端")]),t("v-uni-view",[n._v("2. 所有示例均为演示使用，具体逻辑需要自己实现。")])],1)],1),t("v-uni-view",{staticStyle:{height:"1000rpx"}})],1)},u=[];t.d(i,"b",(function(){return a})),t.d(i,"c",(function(){return u})),t.d(i,"a",(function(){return e}))},"4ffc":function(n,i,t){"use strict";t.r(i);var e=t("2e96"),a=t("8ac9");for(var u in a)"default"!==u&&function(n){t.d(i,n,(function(){return a[n]}))}(u);t("5d5d");var r,v=t("f0c5"),c=Object(v["a"])(a["default"],e["b"],e["c"],!1,null,"fd6eb846",null,!1,e["a"],r);i["default"]=c.exports},"5d5d":function(n,i,t){"use strict";var e=t("a800"),a=t.n(e);a.a},"8ac9":function(n,i,t){"use strict";t.r(i);var e=t("163f"),a=t.n(e);for(var u in e)"default"!==u&&function(n){t.d(i,n,(function(){return e[n]}))}(u);i["default"]=a.a},a800:function(n,i,t){var e=t("e59d");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=t("4f06").default;a("61ad6ba7",e,!0,{sourceMap:!1,shadowMode:!1})},e59d:function(n,i,t){var e=t("24fb");i=e(!1),i.push([n.i,"uni-image[data-v-fd6eb846],\r\nuni-swiper[data-v-fd6eb846],\r\n.img-view[data-v-fd6eb846]{width:%?750?%;height:%?500?%}.page-section-title[data-v-fd6eb846]{margin-top:%?50?%}",""]),n.exports=i}}]);