(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-fav-fav"],{"0ae0":function(t,e,n){"use strict";n.r(e);var i=n("81fc"),a=n("6e26");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("391c");var c,r=n("f0c5"),l=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"42800673",null,!1,i["a"],c);e["default"]=l.exports},"391c":function(t,e,n){"use strict";var i=n("bd4a"),a=n.n(i);a.a},"6a16":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".uni-fav[data-v-1531b8a4]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:60px;height:25px;line-height:25px;text-align:center;border-radius:3px}.uni-fav--circle[data-v-1531b8a4]{border-radius:30px}.uni-fav-star[data-v-1531b8a4]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nheight:25px;line-height:24px;margin-right:3px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-fav-text[data-v-1531b8a4]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nheight:25px;line-height:25px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}",""]),t.exports=e},"6c5f":function(t,e,n){var i=n("6a16");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("a38e10ac",i,!0,{sourceMap:!1,shadowMode:!1})},"6e26":function(t,e,n){"use strict";n.r(e);var i=n("9977"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"790c":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("dd28")),o={name:"UniFav",components:{uniIcons:a.default},props:{star:{type:[Boolean,String],default:!0},bgColor:{type:String,default:"#eeeeee"},fgColor:{type:String,default:"#666666"},bgColorChecked:{type:String,default:"#007aff"},fgColorChecked:{type:String,default:"#FFFFFF"},circle:{type:[Boolean,String],default:!1},checked:{type:Boolean,default:!1},contentText:{type:Object,default:function(){return{contentDefault:"收藏",contentFav:"已收藏"}}}},watch:{checked:function(){uni.report&&(this.checked?uni.report("收藏","收藏"):uni.report("取消收藏","取消收藏"))}},methods:{onClick:function(){this.$emit("click")}}};e.default=o},"81fc":function(t,e,n){"use strict";var i={uniSection:n("a703").default,uniFav:n("f230").default,uniNavBar:n("269e").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"example-fav"},[n("uni-section",{attrs:{title:"基本用法",type:"line"}}),n("v-uni-view",{staticClass:"example-body example-body-first"},[n("uni-fav",{staticClass:"favBtn",attrs:{checked:t.checkList[0]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favClick(0)}}}),n("uni-fav",{staticClass:"favBtn",attrs:{checked:t.checkList[1],star:!1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favClick(1)}}}),n("uni-fav",{staticClass:"favBtn",attrs:{checked:t.checkList[2],circle:!0,"bg-color":"#dd524d","bg-color-checked":"#007aff","fg-color":"#ffffff","fg-color-checked":"#ffffff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favClick(2)}}}),n("uni-fav",{staticClass:"favBtn",attrs:{checked:t.checkList[3],"bg-color":"#f8f8f8","bg-color-checked":"#eeeeee","fg-color":"#333333","fg-color-checked":"#333333"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favClick(3)}}})],1),n("uni-section",{attrs:{title:"自定义文字",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-fav",{staticClass:"favBtn",attrs:{checked:t.checkList[4],"content-text":t.contentText},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favClick(4)}}})],1),n("uni-section",{attrs:{title:"在自定义导航栏使用",type:"line"}}),n("v-uni-view",{staticClass:"example-body example-body-fullWidth"},[n("uni-nav-bar",{staticStyle:{width:"100%"},attrs:{fixed:!1,"left-icon":"arrowleft",title:"标题",color:"#333333","background-color":"#FFFFFF"}},[n("template",{attrs:{slot:"right"},slot:"right"},[n("uni-fav",{staticClass:"favBtn-nav",attrs:{checked:t.checkList[5],circle:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favClick(5)}}})],1)],2)],1)],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},"904f":function(t,e,n){"use strict";var i=n("6c5f"),a=n.n(i);a.a},"963e":function(t,e,n){"use strict";var i={uniIcons:n("dd28").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-fav",class:[!0===t.circle||"true"===t.circle?"uni-fav--circle":""],style:[{backgroundColor:t.checked?t.bgColorChecked:t.bgColor}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.checked||!0!==t.star&&"true"!==t.star?t._e():n("uni-icons",{staticClass:"uni-fav-star",style:{color:t.checked?t.fgColorChecked:t.fgColor},attrs:{color:t.fgColor,size:"14",type:"star-filled"}}),n("v-uni-text",{staticClass:"uni-fav-text",style:{color:t.checked?t.fgColorChecked:t.fgColor}},[t._v(t._s(t.checked?t.contentText.contentFav:t.contentText.contentDefault))])],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},9977:function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("f230")),o=i(n("269e")),c=i(n("a703")),r={components:{uniFav:a.default,uniNavBar:o.default,uniSection:c.default},data:function(){return{checkList:[!1,!1,!1,!1,!1,!1],contentText:{contentDefault:"追番",contentFav:"已追番"}}},methods:{favClick:function(t){this.checkList[t]=!this.checkList[t],this.$forceUpdate()}}};e.default=r},a1fb:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-42800673]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-42800673]{font-size:14px;line-height:inherit}.example[data-v-42800673]{padding:0 15px 15px}.example-info[data-v-42800673]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-42800673]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-42800673]{padding:0 15px}.example-info[data-v-42800673]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-42800673]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-42800673]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-42800673]{font-size:18px;color:#fff}.word-btn[data-v-42800673]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-42800673]{background-color:#4ca2ff}\n.favBtn[data-v-42800673]{margin:0 %?20?% %?20?% 0}.example-body-fullWidth[data-v-42800673]{padding:%?32?% 0}.example-body-first[data-v-42800673]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.favBtn-nav[data-v-42800673]{\n\t\t/* left:-50rpx;\n */}body.?%PAGE?%[data-v-42800673]{background-color:#efeff4}",""]),t.exports=e},a674:function(t,e,n){"use strict";n.r(e);var i=n("790c"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},bd4a:function(t,e,n){var i=n("a1fb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7efed942",i,!0,{sourceMap:!1,shadowMode:!1})},f230:function(t,e,n){"use strict";n.r(e);var i=n("963e"),a=n("a674");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("904f");var c,r=n("f0c5"),l=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"1531b8a4",null,!1,i["a"],c);e["default"]=l.exports}}]);