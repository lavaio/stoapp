(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["components-tabDescribe-tabDescribe"],{"0cd9":function(t,i,e){var a=e("8989");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("1431f9d4",a,!0,{sourceMap:!1,shadowMode:!1})},"2d34":function(t,i,e){"use strict";e.r(i);var a=e("7255"),s=e("c031");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("9660");var o,l=e("f0c5"),v=Object(l["a"])(s["default"],a["b"],a["c"],!1,null,"09df7ad4",null,!1,a["a"],o);i["default"]=v.exports},"5caf":function(t,i,e){"use strict";(function(t){e("4de4"),e("d81d"),e("b64b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{showMore:!1,showLineMore:!1,showTeamMore:!1}},props:{stoItem:{}},computed:{computTimeLine:function(){var t=this.stoItem["milestones"][0],i={};return Object.keys(t).map((function(e,a){a<3&&(i[e]=t[e])})),i},computTeamMember:function(){return this.stoItem["team members"].filter((function(t,i){return i<4}))}},onLoad:function(){t("log","////////////"," at components/tabDescribe/tabDescribe.vue:327")},methods:{handleTeamMore:function(){var t=!this.showTeamMore;t?(this.$refs.lessTeam.$el.style.display="none",this.$refs.moreTeam.$el.style.display="block",this.$refs.teamMoreButton.$el.innerHTML="Collapse"):(this.$refs.lessTeam.$el.style.display="block",this.$refs.moreTeam.$el.style.display="none",this.$refs.teamMoreButton.$el.innerHTML="Show All"),this.showTeamMore=t},handleClick:function(){var t=!this.showMore;t?(this.$refs.desc.$el.style.webkitLineClamp="unset",this.$refs.readeMore.$el.innerHTML="Collapse"):(this.$refs.desc.$el.style.webkitLineClamp="6",this.$refs.readeMore.$el.innerHTML="reade more"),this.showMore=t},handleLineMore:function(){var t=!this.showLineMore;t?(this.$refs.lessLine.$el.style.display="none",this.$refs.moreLine.$el.style.display="block",this.$refs.lineMoreBut.$el.innerHTML="Collapse"):(this.$refs.lessLine.$el.style.display="block",this.$refs.moreLine.$el.style.display="none",this.$refs.lineMoreBut.$el.innerHTML="reade more"),this.showLineMore=t}}};i.default=a}).call(this,e("0de9")["log"])},7255:function(t,i,e){"use strict";var a,s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"desc-view"},[e("v-uni-view",{staticClass:"desct-title"},[t._v("Description")]),e("v-uni-view",{ref:"desc",staticClass:"desc"},[t._v(t._s(t.stoItem.description))]),e("v-uni-view",{ref:"readeMore",staticClass:"read-more",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleClick.apply(void 0,arguments)}}},[t._v("read more")])],1),e("v-uni-view",{staticClass:"backgroundStyle"}),e("v-uni-view",{staticClass:"backgroundStyle"}),e("v-uni-view",{staticClass:"info"},[e("v-uni-view",{staticClass:"public-title"},[t._v("Legal")]),e("v-uni-view",{staticClass:"public-info"},[e("v-uni-view",{staticClass:"info-left"},[t._v("Company name:")]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"info-item"},[t._v(t._s(t.stoItem["Company name"]))])],1)],1),e("v-uni-view",{staticClass:"public-info"},[e("v-uni-view",{staticClass:"info-left"},[t._v("Country of incorporation:")]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"info-item border-before"},[t._v(t._s(t.stoItem["Country of incorporation"]))])],1)],1),e("v-uni-view",{staticClass:"public-info"},[e("v-uni-view",{staticClass:"info-left"},[t._v("Company address:")]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"info-item location"},[t._v(t._s(t.stoItem["Company address"]))])],1)],1),e("v-uni-view",{staticClass:"public-info"},[e("v-uni-view",{staticClass:"info-left"},[t._v("Whitelist:")]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{class:t.stoItem.WhiteList?"info-item gou":"info-item"},[t._v("Required")])],1)],1),e("v-uni-view",{staticClass:"public-info"},[e("v-uni-view",{staticClass:"info-left"},[t._v("KYC:")]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{class:t.stoItem.KYC?"info-item gou":"info-item"},[t._v("Required")])],1)],1)],1),e("v-uni-view",{staticClass:"backgroundStyle"}),e("v-uni-view",{staticClass:"info"},[e("v-uni-view",{staticClass:"public-title"},[t._v("Asset")]),e("v-uni-view",{staticClass:"public-info"},[e("v-uni-view",{staticClass:"info-left"},[t._v("Token rights:")]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"info-item"},[t._v("VMC.AI BV")])],1)],1)],1),e("v-uni-view",{staticClass:"backgroundStyle"}),e("v-uni-view",{staticClass:"info"},[e("v-uni-view",{staticClass:"public-title"},[t._v("Token details")]),e("v-uni-view",{staticClass:"public-info"},[e("v-uni-view",{staticClass:"info-left"},[t._v("Symbol:")]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"info-item"},[t._v(t._s(t.stoItem["Symbol"]))])],1)],1),e("v-uni-view",{staticClass:"public-info"},[e("v-uni-view",{staticClass:"info-left"},[t._v("Available for sale:")]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"info-item"},[t._v(t._s(t.stoItem["Available for sale"]))])],1)],1),e("v-uni-view",{staticClass:"public-info"},[e("v-uni-view",{staticClass:"info-left"},[t._v("Total supply tokens:")]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"info-item"},[t._v(t._s(t.stoItem["Total supply tokens"]))])],1)],1)],1),e("v-uni-view",{staticClass:"backgroundStyle"}),e("v-uni-view",{staticClass:"info"},[e("v-uni-view",{staticClass:"public-title"},[t._v("Fundraise Information")]),e("v-uni-view",{staticClass:"public-info"},[e("v-uni-view",{staticClass:"info-left"},[t._v("Minimum goal:")]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"info-item"},[t._v(t._s(t.stoItem["Minimum goal"]))])],1)],1),e("v-uni-view",{staticClass:"public-info"},[e("v-uni-view",{staticClass:"info-left"},[t._v("Fundraising goal:")]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"info-item"},[t._v(t._s(t.stoItem["Fundraising goal"]))])],1)],1),e("v-uni-view",{staticClass:"public-info"},[e("v-uni-view",{staticClass:"info-left"},[t._v("Min investment:")]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"info-item"},[t._v(t._s(t.stoItem["Min investment"]))])],1)],1),e("v-uni-view",{staticClass:"public-info"},[e("v-uni-view",{staticClass:"info-left"},[t._v("Bonuses:")]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"info-item"},[t._v("1 VMC-ST = €0.14 - €0.16")])],1)],1),e("v-uni-view",{staticClass:"public-info"},[e("v-uni-view",{staticClass:"info-left"},[t._v("Bonuses:")]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"info-item"},[t._v(t._s(t.stoItem["Bonuses"]))])],1)],1)],1),e("v-uni-view",{staticClass:"backgroundStyle"}),t.stoItem["milestones"]&&t.stoItem["milestones"].length?e("v-uni-view",{staticClass:"date-line"},[e("v-uni-view",{staticClass:"public-title"},[t._v("Milestones")]),e("v-uni-view",{ref:"lessLine",staticClass:"date-view"},t._l(t.computTimeLine,(function(i,a,s){return e("v-uni-view",{key:s,staticClass:"date-view-box"},[e("v-uni-view",[e("v-uni-view",{class:2==s?"line-item":"line-item line-style"})],1),e("v-uni-view",{staticClass:"date-view-right"},[e("v-uni-view",{staticClass:"date-title"},[t._v(t._s(a))]),e("v-uni-view",{staticClass:"date-desc"},[t._v(t._s(i))])],1)],1)})),1),e("v-uni-view",{ref:"moreLine",staticClass:"date-view display-none"},t._l(t.stoItem["milestones"][0],(function(i,a,s){return e("v-uni-view",{key:s,staticClass:"date-view-box"},[e("v-uni-view",[e("v-uni-view",{class:s==Object.keys(t.stoItem["milestones"][0]).length-1?"line-item":"line-item line-style"})],1),e("v-uni-view",{staticClass:"date-view-right"},[e("v-uni-view",{staticClass:"date-title"},[t._v(t._s(a))]),e("v-uni-view",{staticClass:"date-desc"},[t._v(t._s(i))])],1)],1)})),1),t.stoItem["milestones"]&&t.stoItem["milestones"].length?e("v-uni-view",{staticClass:"button-style"},[e("v-uni-view",{ref:"lineMoreBut",staticClass:"public-button",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleLineMore.apply(void 0,arguments)}}},[t._v("view more")])],1):t._e()],1):t._e(),e("v-uni-view",{staticClass:"backgroundStyle"}),e("v-uni-view",{staticClass:"team-member"},[e("v-uni-view",{staticClass:"public-title"},[t._v("Team members "+t._s(t.stoItem["team members"].length))]),e("v-uni-view",{ref:"lessTeam"},t._l(t.computTeamMember,(function(i,a){return e("v-uni-view",{key:a,staticClass:"team-member-view"},[e("v-uni-view",{staticClass:"team-left"},[e("v-uni-image",{staticClass:"team-left-image",attrs:{src:i["ImgURL"]}})],1),e("v-uni-view",{staticClass:"team-right"},[e("v-uni-view",{staticClass:"member-name"},[t._v(t._s(i["Name"]))]),e("v-uni-view",{staticClass:"member-position"},[t._v(t._s(i["Post"]))])],1)],1)})),1),e("v-uni-view",{ref:"moreTeam",staticClass:"display-none"},t._l(t.stoItem["team members"],(function(i,a){return e("v-uni-view",{key:a,staticClass:"team-member-view"},[e("v-uni-view",{staticClass:"team-left"},[e("v-uni-image",{staticClass:"team-left-image",attrs:{src:i["ImgURL"]}})],1),e("v-uni-view",{staticClass:"team-right"},[e("v-uni-view",{staticClass:"member-name"},[t._v(t._s(i["Name"]))]),e("v-uni-view",{staticClass:"member-position"},[t._v(t._s(i["Post"]))])],1)],1)})),1),e("v-uni-view",{staticClass:"button-style marginTop"},[e("v-uni-view",{ref:"teamMoreButton",staticClass:"public-button",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleTeamMore.apply(void 0,arguments)}}},[t._v("Show All")])],1)],1),e("v-uni-view",{staticClass:"follow-us"},[e("v-uni-view",{staticClass:"follow-title"},[t._v("flow us")]),e("v-uni-view",{staticClass:"follow-icon-view"},[e("v-uni-view",{staticClass:"marginRight"},[e("v-uni-icon",{staticClass:"iconfont icon-telegram",staticStyle:{"font-size":"28px"}})],1),e("v-uni-view",[e("v-uni-icon",{staticClass:"iconfont icon-telegram",staticStyle:{"font-size":"28px"}})],1)],1)],1)],1)},n=[];e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}))},8989:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@font-face{font-family:iconfont;src:url(//at.alicdn.com/t/font_1855664_9sptomyzv7b.eot?t=1592274273727); /* IE9 */src:url(//at.alicdn.com/t/font_1855664_9sptomyzv7b.eot?t=1592274273727#iefix) format("embedded-opentype"),url("data:application/x-font-woff2;charset=utf-8;base64,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") format("woff2"),url(//at.alicdn.com/t/font_1855664_9sptomyzv7b.woff?t=1592274273727) format("woff"),url(//at.alicdn.com/t/font_1855664_9sptomyzv7b.ttf?t=1592274273727) format("truetype"),url(//at.alicdn.com/t/font_1855664_9sptomyzv7b.svg?t=1592274273727#iconfont) format("svg") /* iOS 4.1- */}.iconfont[data-v-09df7ad4]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.iconyiwen[data-v-09df7ad4]:before{content:"\\e790"}.icon-telegram[data-v-09df7ad4]:before{content:"\\e7e0"}.iconcoordinates_fill[data-v-09df7ad4]:before{content:"\\e668"}.iconcheckmark[data-v-09df7ad4]:before{content:"\\e603"}.iconarrow-down[data-v-09df7ad4]:before{content:"\\e601"}.iconIcon-KeyboardArrow-Down-Rounded[data-v-09df7ad4]:before{content:"\\e602"}.icondanxuankuang[data-v-09df7ad4]:before{content:"\\e637"}.iconshang[data-v-09df7ad4]:before{content:"\\e698"}.iconxia[data-v-09df7ad4]:before{content:"\\e699"}.iconzuoyou[data-v-09df7ad4]:before{content:"\\e69a"}.iconshouye[data-v-09df7ad4]:before{content:"\\e600"}.desc-view[data-v-09df7ad4]{padding:0 16px 20px}.desct-title[data-v-09df7ad4]{color:#343744;font-size:%?32?%;margin-bottom:16px;margin-top:32px}.desc[data-v-09df7ad4]{color:#656b87;font-size:%?28?%;line-height:%?44?%;margin-bottom:12px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:6;-webkit-box-orient:vertical}.read-more[data-v-09df7ad4]{color:#27ace0;font-size:%?28?%;text-decoration:underline}.info[data-v-09df7ad4]{padding:0 16px}.public-title[data-v-09df7ad4]{color:#343744;font-weight:700;margin:20px 0 3px}.public-info[data-v-09df7ad4]{color:#343744;font-size:%?28?%;padding:13px 0;border-bottom:1px solid #f4f7fc;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.info-left-red[data-v-09df7ad4],.info-left-green[data-v-09df7ad4]{margin-left:15px}.info-left[data-v-09df7ad4]{white-space:nowrap}.info-left-red[data-v-09df7ad4]::before,.info-left-green[data-v-09df7ad4]::before{width:%?12?%;height:%?12?%;border-radius:50%;display:inline-block;content:" ";margin-right:5px}.info-left-red[data-v-09df7ad4]::before{background:#ef3d77}.info-left-green[data-v-09df7ad4]::before{background:#01c0aa}.right[data-v-09df7ad4]{margin-left:50px}.info-item[data-v-09df7ad4]{color:#656b87;font-size:%?28?%;line-height:%?44?%}.gray-circle[data-v-09df7ad4]::before{width:%?12?%;height:%?12?%;background:#656b87;border-radius:50%;display:inline-block;content:" ";margin-right:5px}.border-before[data-v-09df7ad4]::before{content:" ";width:%?32?%;height:%?10?%;border-top:3px solid #aa1a27;border-bottom:3px solid #204385;display:inline-block;margin-right:8px}.location[data-v-09df7ad4], .gou[data-v-09df7ad4]{position:relative}.location[data-v-09df7ad4]::before, .gou[data-v-09df7ad4]::before{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin-right:5px;position:absolute;left:-21px}.location[data-v-09df7ad4]::before{content:"\\e668"}.gou[data-v-09df7ad4]::before{content:"\\e603"}.date-line[data-v-09df7ad4]{padding:0 16px 20px}.display-none[data-v-09df7ad4]{display:none}.date-view[data-v-09df7ad4]{margin-bottom:%?32?%;margin-top:16px;overflow:hidden}.date-view-box[data-v-09df7ad4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;overflow:hidden}.date-view-right[data-v-09df7ad4]{padding-bottom:%?32?%;margin-left:10px}.date-title[data-v-09df7ad4]{color:#27ace0;font-size:%?28?%;margin-bottom:%?16?%;margin-top:-5px}.date-desc[data-v-09df7ad4]{color:#656b87;font-size:%?28?%;line-height:%?44?%}.button-style[data-v-09df7ad4]{text-align:center}.line-item[data-v-09df7ad4]{width:%?32?%;height:%?32?%;border-radius:50%;background:#27ace0}.line-style[data-v-09df7ad4]{position:relative}.line-style[data-v-09df7ad4]::after{content:"";height:130px;border:1px solid #27ace0;display:inline-block;position:absolute;left:%?14?%}.team-member[data-v-09df7ad4]{padding:0 16px %?112?%}.team-member-view[data-v-09df7ad4]{border-bottom:1px solid #f4f7fc;padding:12px 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.marginTop[data-v-09df7ad4]{margin-top:%?64?%}.team-left[data-v-09df7ad4]{width:%?128?%;height:%?128?%;border-radius:50%}.team-left-image[data-v-09df7ad4]{width:%?128?%;height:%?128?%;border-radius:50%}.team-right[data-v-09df7ad4]{margin-left:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.member-name[data-v-09df7ad4]{color:#343744;font-size:%?28?%}.member-position[data-v-09df7ad4]{color:#656b87;font-size:%?28?%}.follow-us[data-v-09df7ad4]{background:#f4f7fc;padding:%?64?% 0 %?96?%;text-align:center;height:%?284?%}.follow-title[data-v-09df7ad4]{color:#656b87;font-size:%?28?%}.follow-icon-view[data-v-09df7ad4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;color:#27ace0}.follow-icon[data-v-09df7ad4]{width:%?56?%;height:%?56?%}.marginRight[data-v-09df7ad4]{margin-right:10px}',""]),t.exports=i},9660:function(t,i,e){"use strict";var a=e("0cd9"),s=e.n(a);s.a},c031:function(t,i,e){"use strict";e.r(i);var a=e("5caf"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a}}]);