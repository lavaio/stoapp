(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-search-bar-search-bar"],{"0009":function(e,t,n){"use strict";n.r(t);var i=n("3241"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"150e":function(e,t,n){"use strict";n.r(t);var i=n("fe43"),a=n("0009");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("4cfd");var r,c=n("f0c5"),l=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"42927b5c",null,!1,i["a"],r);t["default"]=l.exports},"2c24":function(e,t,n){var i=n("db53");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("49e62e92",i,!0,{sourceMap:!1,shadowMode:!1})},"2c39":function(e,t,n){var i=n("84cf");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("2ccc78fd",i,!0,{sourceMap:!1,shadowMode:!1})},3241:function(e,t,n){"use strict";var i=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("90f7")),o=i(n("a703")),r={components:{uniSearchBar:a.default,uniSection:o.default},data:function(){return{searchVal:""}},methods:{search:function(e){uni.showToast({title:"搜索："+e.value,icon:"none"})},input:function(e){this.searchVal=e.value},cancel:function(e){uni.showToast({title:"点击取消，输入值为："+e.value,icon:"none"})}},onBackPress:function(){}};t.default=r},"377a":function(e,t,n){"use strict";var i={uniIcons:n("dd28").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-searchbar"},[n("v-uni-view",{staticClass:"uni-searchbar__box",style:{borderRadius:e.radius+"px",backgroundColor:e.bgColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.searchClick.apply(void 0,arguments)}}},[n("uni-icons",{staticClass:"uni-searchbar__box-icon-search",attrs:{color:"#999999",size:"18",type:"search"}}),e.show?n("v-uni-input",{staticClass:"uni-searchbar__box-search-input",attrs:{focus:e.showSync,placeholder:e.placeholder,maxlength:e.maxlength,"confirm-type":"search",type:"text"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)}},model:{value:e.searchVal,callback:function(t){e.searchVal=t},expression:"searchVal"}}):n("v-uni-text",{staticClass:"uni-searchbar__text-placeholder"},[e._v(e._s(e.placeholder))]),e.show&&("always"===e.clearButton||"auto"===e.clearButton&&""!==e.searchVal)?n("v-uni-view",{staticClass:"uni-searchbar__box-icon-clear",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}}},[n("uni-icons",{attrs:{color:"#999999",size:"24",type:"clear"}})],1):e._e()],1),"always"===e.cancelButton||e.show&&"auto"===e.cancelButton?n("v-uni-text",{staticClass:"uni-searchbar__cancel",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}},[e._v(e._s(e.cancelText))]):e._e()],1)},o=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))},"4cfd":function(e,t,n){"use strict";var i=n("2c24"),a=n.n(i);a.a},5655:function(e,t,n){"use strict";var i=n("ee07"),a=n.n(i);a.a},6157:function(e,t,n){"use strict";n.r(t);var i=n("b150"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"6b6d":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".uni-searchbar[data-v-4f7b7dd5]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;position:relative;padding:%?16?%;background-color:#fff}.uni-searchbar__box[data-v-4f7b7dd5]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;\noverflow:hidden;position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:36px;padding:5px 8px 5px 0;border-width:.5px;border-style:solid;border-color:#e5e5e5}.uni-searchbar__box-icon-search[data-v-4f7b7dd5]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:32px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:grey}.uni-searchbar__box-search-input[data-v-4f7b7dd5]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#333}.uni-searchbar__box-icon-clear[data-v-4f7b7dd5]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:24px;padding-left:5px}.uni-searchbar__text-placeholder[data-v-4f7b7dd5]{font-size:%?28?%;color:grey;margin-left:5px}.uni-searchbar__cancel[data-v-4f7b7dd5]{padding-left:10px;line-height:36px;font-size:14px;color:#333}",""]),e.exports=t},"6c1f":function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[e.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:e.type})],1):e._e(),n("v-uni-view",{staticClass:"uni-section__content"},[n("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!e.subTitle}},[e._v(e._s(e.title))]),e.subTitle?n("v-uni-text",{staticClass:"uni-section__content-sub"},[e._v(e._s(e.subTitle))]):e._e()],1),e._t("default")],2)},o=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))},"7d72":function(e,t,n){"use strict";var i=n("2c39"),a=n.n(i);a.a},"84cf":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'.uni-section[data-v-96183f54]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section[data-v-96183f54]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n.uni-section__head[data-v-96183f54]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-96183f54]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-96183f54]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-96183f54]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-96183f54]{font-size:%?28?%;color:#333}.distraction[data-v-96183f54]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-96183f54]{font-size:%?24?%;color:#999}',""]),e.exports=t},"8c5f":function(e,t,n){"use strict";n.r(t);var i=n("b796"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"90f7":function(e,t,n){"use strict";n.r(t);var i=n("377a"),a=n("6157");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("5655");var r,c=n("f0c5"),l=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"4f7b7dd5",null,!1,i["a"],r);t["default"]=l.exports},a703:function(e,t,n){"use strict";n.r(t);var i=n("6c1f"),a=n("8c5f");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("7d72");var r,c=n("f0c5"),l=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"96183f54",null,!1,i["a"],r);t["default"]=l.exports},b150:function(e,t,n){"use strict";var i=n("ee27");n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("dd28")),o={name:"UniSearchBar",components:{uniIcons:a.default},props:{placeholder:{type:String,default:"请输入搜索内容"},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:"取消"},bgColor:{type:String,default:"#F8F8F8"},maxlength:{type:[Number,String],default:100}},data:function(){return{show:!1,showSync:!1,searchVal:""}},watch:{searchVal:function(){this.$emit("input",{value:this.searchVal})}},methods:{searchClick:function(){var e=this;this.show||(this.searchVal="",this.show=!0,this.$nextTick((function(){e.showSync=!0})))},clear:function(){this.searchVal=""},cancel:function(){this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,uni.hideKeyboard()},confirm:function(){uni.hideKeyboard(),this.$emit("confirm",{value:this.searchVal})}}};t.default=o},b796:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(e){uni.report&&""!==e&&uni.report("title",e)}},methods:{onClick:function(){this.$emit("click")}}};t.default=i},db53:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-42927b5c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-42927b5c]{font-size:14px;line-height:inherit}.example[data-v-42927b5c]{padding:0 15px 15px}.example-info[data-v-42927b5c]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-42927b5c]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-42927b5c]{padding:0 15px}.example-info[data-v-42927b5c]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-42927b5c]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-42927b5c]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-42927b5c]{font-size:18px;color:#fff}.word-btn[data-v-42927b5c]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-42927b5c]{background-color:#4ca2ff}.search-result[data-v-42927b5c]{margin-top:10px;margin-bottom:20px;text-align:center}.search-result-text[data-v-42927b5c]{text-align:center;font-size:14px}.example-body[data-v-42927b5c]{\ndisplay:block;\npadding:0}body.?%PAGE?%[data-v-42927b5c]{background-color:#efeff4}",""]),e.exports=t},ee07:function(e,t,n){var i=n("6b6d");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("a02e3c8e",i,!0,{sourceMap:!1,shadowMode:!1})},fe43:function(e,t,n){"use strict";var i={uniSection:n("a703").default,uniSearchBar:n("90f7").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("uni-section",{attrs:{title:"基本用法",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-search-bar",{on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.input.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"search-result"},[n("v-uni-text",{staticClass:"search-result-text"},[e._v("当前输入为："+e._s(e.searchVal))])],1)],1),n("uni-section",{attrs:{title:"自定义样式",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-search-bar",{attrs:{placeholder:"自定义placeholder"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}}),n("uni-search-bar",{attrs:{placeholder:"自定义背景色",bgColor:"#EEEEEE"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}}),n("uni-search-bar",{attrs:{radius:"100",placeholder:"自定义圆角"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}})],1),n("uni-section",{attrs:{title:"控制清除/取消按钮",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-search-bar",{attrs:{radius:"5",placeholder:"一直显示",clearButton:"always",cancelButton:"always"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}}),n("uni-search-bar",{attrs:{radius:"5",placeholder:"自动显示隐藏",clearButton:"auto",cancelButton:"auto"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}}),n("uni-search-bar",{attrs:{radius:"100",placeholder:"一直不显示",clearButton:"none",cancelButton:"none"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}})],1)],1)},o=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))}}]);