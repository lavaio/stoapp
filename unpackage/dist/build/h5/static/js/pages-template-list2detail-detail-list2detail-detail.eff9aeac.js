(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-list2detail-detail-list2detail-detail"],{1033:function(e,t,i){"use strict";(function(e){i("c975"),i("13d5"),i("4d63"),i("ac1f"),i("25f0"),i("466d"),i("5319"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,a=/^<\/([-A-Za-z0-9_]+)[^>]*>/,r=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,s=h("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),o=h("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),l=h("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),c=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),d=h("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),u=h("script,style");function f(e,t){var i,f,h,p=[],v=e;p.last=function(){return this[this.length-1]};while(e){if(f=!0,p.last()&&u[p.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+p.last()+"[^>]*>"),(function(e,i){return i=i.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),t.chars&&t.chars(i),""})),g("",p.last());else if(0==e.indexOf("\x3c!--")?(i=e.indexOf("--\x3e"),i>=0&&(t.comment&&t.comment(e.substring(4,i)),e=e.substring(i+3),f=!1)):0==e.indexOf("</")?(h=e.match(a),h&&(e=e.substring(h[0].length),h[0].replace(a,g),f=!1)):0==e.indexOf("<")&&(h=e.match(n),h&&(e=e.substring(h[0].length),h[0].replace(n,m),f=!1)),f){i=e.indexOf("<");var b=i<0?e:e.substring(0,i);e=i<0?"":e.substring(i),t.chars&&t.chars(b)}if(e==v)throw"Parse Error: "+e;v=e}function m(e,i,n,a){if(i=i.toLowerCase(),o[i])while(p.last()&&l[p.last()])g("",p.last());if(c[i]&&p.last()==i&&g("",i),a=s[i]||!!a,a||p.push(i),t.start){var u=[];n.replace(r,(function(e,t){var i=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:d[t]?t:"";u.push({name:t,value:i,escaped:i.replace(/(^|[^\\])"/g,'$1\\"')})})),t.start&&t.start(i,u,a)}}function g(e,i){if(i){for(n=p.length-1;n>=0;n--)if(p[n]==i)break}else var n=0;if(n>=0){for(var a=p.length-1;a>=n;a--)t.end&&t.end(p[a]);p.length=n}}g()}function h(e){for(var t={},i=e.split(","),n=0;n<i.length;n++)t[i[n]]=!0;return t}function p(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function v(e){return e.reduce((function(e,t){var i=t.value,n=t.name;return e[n]?e[n]=e[n]+" "+i:e[n]=i,e}),{})}function b(t){t=p(t);var i=[],n={node:"root",children:[]};return f(t,{start:function(e,t,a){var r={name:e};if(0!==t.length&&(r.attrs=v(t)),a){var s=i[0]||n;s.children||(s.children=[]),s.children.push(r)}else i.unshift(r)},end:function(t){var a=i.shift();if(a.name!==t&&e("error","invalid state: mismatch end tag"," at common/html-parser.js:303"),0===i.length)n.children.push(a);else{var r=i[0];r.children||(r.children=[]),r.children.push(a)}},chars:function(e){var t={type:"text",text:e};if(0===i.length)n.children.push(t);else{var a=i[0];a.children||(a.children=[]),a.children.push(t)}},comment:function(e){var t={node:"comment",text:e},n=i[0];n.children||(n.children=[]),n.children.push(t)}}),n.children}var m=b;t.default=m}).call(this,i("0de9")["log"])},"306c":function(e,t,i){var n=i("cfd9");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("3fd77db5",n,!0,{sourceMap:!1,shadowMode:!1})},3434:function(e,t,i){"use strict";(function(e){var n=i("ee27");i("c975"),i("d81d"),i("4e82"),i("ac1f"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("1033")),r="/pages/template/list2detail-detail/list2detail-detail";function s(e){for(var t=[],i=0,n=e.length;i<n;i++)switch(e[i]){case"weixin":t.push({text:"分享到微信好友",id:"weixin",sort:0}),t.push({text:"分享到微信朋友圈",id:"weixin",sort:1});break;default:break}return t.sort((function(e,t){return e.sort-t.sort})),t}var o={data:function(){return{title:"",banner:{},htmlNodes:[]}},onLoad:function(e){var t=e.detailDate||e.payload;try{this.banner=JSON.parse(decodeURIComponent(t))}catch(i){this.banner=JSON.parse(t)}uni.setNavigationBarTitle({title:this.banner.title}),this.getDetail()},onShareAppMessage:function(){return{title:this.banner.title,path:r+"?detailDate="+JSON.stringify(this.banner)}},onNavigationBarButtonTap:function(e){var t=this,i=e.index;if(0===i){uni.getProvider({service:"share",success:function(e){if(e.provider&&e.provider.length&&~e.provider.indexOf("weixin")){var i=s(e.provider);uni.showActionSheet({itemList:i.map((function(e){return e.text})),success:function(e){var i=e.tapIndex;uni.share({provider:"weixin",type:0,title:t.banner.title,scene:0===i?"WXSceneSession":"WXSenceTimeline",href:"https://uniapp.dcloud.io/h5"+r+"?detailDate="+JSON.stringify(t.banner),imageUrl:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png"})}})}else uni.showToast({title:"未检测到可用的微信分享服务"})},fail:function(e){uni.showToast({title:"获取分享服务失败"})}})}},methods:{getDetail:function(){var t=this;uni.request({url:"https://unidemo.dcloud.net.cn/api/news/36kr/"+this.banner.post_id,success:function(e){if(200==e.statusCode){var i=e.data.content.replace(/\\/g,"").replace(/<img/g,'<img style="display:none;"');t.htmlNodes=(0,a.default)(i)}},fail:function(){e("log","fail"," at pages/template/list2detail-detail/list2detail-detail.vue:132")}})}}};t.default=o}).call(this,i("0de9")["log"])},"57d2":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"banner"},[i("v-uni-image",{staticClass:"banner-img",attrs:{src:e.banner.cover}}),i("v-uni-view",{staticClass:"banner-title"},[e._v(e._s(e.banner.title))])],1),i("v-uni-view",{staticClass:"article-meta"},[i("v-uni-text",{staticClass:"article-author"},[e._v(e._s(e.banner.author_name))]),i("v-uni-text",{staticClass:"article-text"},[e._v("发表于")]),i("v-uni-text",{staticClass:"article-time"},[e._v(e._s(e.banner.published_at))])],1),i("v-uni-view",{staticClass:"article-content"},[i("v-uni-rich-text",{attrs:{nodes:e.htmlNodes}})],1)],1)},r=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}))},9539:function(e,t,i){"use strict";i.r(t);var n=i("3434"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},ba24:function(e,t,i){"use strict";var n=i("306c"),a=i.n(n);a.a},cfd9:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".banner[data-v-b35c45de]{height:%?360?%;overflow:hidden;position:relative;background-color:#ccc}.banner-img[data-v-b35c45de]{width:100%}.banner-title[data-v-b35c45de]{max-height:%?84?%;overflow:hidden;position:absolute;left:%?30?%;bottom:%?30?%;width:90%;font-size:%?32?%;font-weight:400;line-height:%?42?%;color:#fff;z-index:11}.article-meta[data-v-b35c45de]{padding:%?20?% %?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;color:grey}.article-text[data-v-b35c45de]{font-size:%?26?%;line-height:%?50?%;margin:0 %?20?%}.article-author[data-v-b35c45de],\n.article-time[data-v-b35c45de]{font-size:%?30?%}.article-content[data-v-b35c45de]{padding:0 %?30?%;overflow:hidden;font-size:%?30?%;margin-bottom:%?30?%}",""]),e.exports=t},f8d8:function(e,t,i){"use strict";i.r(t);var n=i("57d2"),a=i("9539");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("ba24");var s,o=i("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"b35c45de",null,!1,n["a"],s);t["default"]=l.exports}}]);