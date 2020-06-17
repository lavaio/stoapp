# hello-uniapp

`uni-app`框架示例，一套代码，同时发行到iOS、Android、H5、小程序等多个平台，请使用手机扫码快速体验`uni-app`的强大功能。

<p align="center">
    <a href="https://m3w.cn/uniapp" target="blank">
        <img src="https://img-cdn-qiniu.dcloud.net.cn/uni-app-qr-all.jpg"/>
    </a>
</p>

`uni-app`官网文档详见[https://uniapp.dcloud.io](https://uniapp.dcloud.io)

更多uni-app的模板、示例详见[插件市场](https://ext.dcloud.net.cn/)




setTabBarItem "底部tabbar，用uni.setTabBarItem的api动态设置文字；"


pages.json不属于vue部分，其中的原生tabbar和原生导航栏里也有文字内容。这部分内容的国际化方案如下：

底部tabbar，用uni.setTabBarItem的api动态设置文字；
顶部的title，用uni.setNavigationBarTitle动态设置文字（如果每个页面都需要设置，可以使用 Vue.mixin）；
如果App端用了titleNView的文字按钮，通用的做法是换成图标，
如果必须使用文字，app端可用setstyle，参考https://ask.dcloud.net.cn/article/35374；h5端用dom操作可动态修改。
当然也可以不使用原生导航栏，前端自定义title（渲染速度没有原生快），也不会涉及这些问题。
