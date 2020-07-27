<template>
	<view>
        <view class="banner">
            <image  v-if="newsData.cover" class="banner-img" :src="newsData.cover"></image>
            <image  v-else  class="banner-img" src="/static/news_bg.png" ></image>
        </view>
        <view class="news-detail-content">
            <view class="">
                <view class="news-detail-title">{{newsData.title}}</view>
                <view class="news-detail-author-date">
                    <text class="news-detail-author">{{newsData.author}}</text>
                    <text class="news-detail-date"> {{newsData.updated_at ? formatDate(newsData.updated_at) : formatDate(newsData.created_at)}}</text>
                </view>
                <view class="news-content"  v-html="newsData.content">
                    {{newsData.content}}
                </view>
            </view>
        </view>
        <mpvue-picker
        	:themeColor="themeColor"
        	ref="mpvuePicker"
        	:mode="mode"
        	:deepLength="deepLength"
        	:pickerValueDefault="pickerValueDefault"
        	@onConfirm="onConfirm"
        	@onCancel="onCancel"
        	:pickerValueArray="pickerValueArray"
        ></mpvue-picker>
	</view>
</template>

<script>
    import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue';
    var util = require('../../../common/util.js');
	export default {
        components: {
            mpvuePicker
        },
		data() {
			return {
                newsId: "",
                newsData: {
                    title: "",
                    updated_at: "",
                    cover: "",
                    content: "",
                },
                themeColor: '#007AFF',
                mode: '',
                deepLength: 1,
                pickerValueDefault: [0],
                pickerValueArray: [
                	{
                		label: '中文',
                		value: "zh-CN"
                	},
                	{
                		label: '英文',
                		value: "en-US"
                	}
                ],
			}
		},

        onLoad(option){
            // TODO 后面把参数名替换成 payload

            this.newsId = option.id
            this.slug = option.slug
            // 目前在某些平台参数会被主动 decode，暂时这样处理。

            this.getDetail(option.id, option.slug);

        },


        onReady(option){
            let language  = uni.getStorageSync('language');
            if( language == "en-US"){
                // this.setStyle(0, "英文");
                document.getElementsByClassName('uni-btn-icon')[1].innerText = "英文";
                this.$i18n.locale = "en-US";
                util.setTabBar("en-US","新闻详情", "News Detail")
            } else{
                // this.setStyle(0, "中文");
                document.getElementsByClassName('uni-btn-icon')[1].innerText = "中文";
                this.$i18n.locale = "zh-CN";
                util.setTabBar("zh-CN","新闻详情", "News Detail")
            }
        },


		methods: {
            formatDate(timeStamp){
                if(timeStamp){
                   var da = timeStamp;
                   da = new Date(da);
                   var year = da.getFullYear()+'年';
                   var month = da.getMonth()+1+'月';
                   var date = da.getDate()+'日';
                   return [year,month,date].join('');
                } else{
                    return ""
                }

            },

            getDetail(newsId){
                let lang = 1;
                let Pagelanguage  = uni.getStorageSync('language');
                if( Pagelanguage == "en-US"){
                    lang = 0;
                } else {
                    lang = 1;
                }
                // uni.request({
                	// url: "https://47.56.131.174/api/cms/v1/article/"+newsId,
                	// data: {
                 //        lang: lang,
                 //    },
                	// success: data => {
                 //        console.log(data)
                	// 	if (data.data && data.data.code == 0) {
                 //            this.newsData = data.data.data;
                	// 	} else {
                            uni.request({
                                url: 'http://47.56.131.174/api/cms/v1/article/0',
                                data: {
                                    lang: lang,
                                    slug: this.slug
                                },
                                success: dataSource => {
                                    console.log(dataSource)
                                    this.newsData = dataSource.data.data;
                                },
                                fail: (dataSource, code) => {
                                	console.log('fail' + JSON.stringify(dataSource));
                                }
                            })
                        // }
                	// },
                	// fail: (data, code) => {
                	// 	console.log('fail' + JSON.stringify(data));
                	// }
                // })
            },
            onCancel(){

            },
            	// 单列
            showSinglePicker() {
                this.mode = 'selector';
                this.deepLength = 1;
                this.pickerValueDefault = [0];
                this.$refs.mpvuePicker.show();
            },
            onConfirm(e) {
                this.$i18n.locale = e.value[0];
                this.setStyle(0, e.label);
                uni.setStorageSync('language', e.value[0]);
                util.setTabBar(this.$i18n.locale,"新闻详情", "News Detail")
                this.getDetail(this.newsId, this.slug)
            },
            /**
                * 修改导航栏buttons
                * index[number] 修改的buttons 下标索引，最右边索引为0
                * text[string] 需要修改的text 内容
                */
            setStyle(index, text) {
            	let pages = getCurrentPages();
            	let page = pages[pages.length - 1];
            	if (text.length > 3) {
            		text = text.substr(0, 3) + '...';
            	}
            	// #ifdef APP-PLUS
            	let currentWebview = page.$getAppWebview();
            	let titleNView = currentWebview.getStyle().titleNView;
            	// 添加文字过长截取为3个字符，请根据自己业务需求更改
            	titleNView.buttons[0].text = text;
            	currentWebview.setStyle({
            		titleNView: titleNView
            	});
            	// #endif
            	// #ifdef H5
            	// h5 临时方案
            	document.getElementsByClassName('uni-btn-icon')[1].innerText = text;
            	// #endif
            },
            onBackPress() {
                if (this.$refs.mpvuePicker.showPicker) {
                    this.$refs.mpvuePicker.pickerCancel();
                    return true;
                }
            },
            onUnload() {
                if (this.$refs.mpvuePicker.showPicker) {
                    this.$refs.mpvuePicker.pickerCancel();
                }
            },
            onNavigationBarButtonTap(e) {
                if (e.index === 0) {
                    this.showSinglePicker();
                }
            }
		},
	}
</script>

<style>

.banner {
    width: 688rpx;
    height: 360rpx;
    margin: 20px auto;
    /* background: url("~@/static/news_detail_banner.png") no-repeat; */
}
.banner-img{
    width: 100%;
    height: 100%;
}
.news-detail-content{
    padding: 0 16px 20px;
}

.news-detail-title{
    color: #343744;
    font-size: 36rpx;
    line-height: 50rpx;
    margin-bottom: 11px;
}
.news-detail-author-date{
    margin-bottom: 12px;
}
.news-detail-author{
    color: #27ACE0;
    font-size: 28rpx;
    margin-right: 10px;
}
.news-detail-date{
    color: #8A8E9E;
    font-size: 28rpx;
}
.news-content{
	overflow: hidden;
}
</style>
