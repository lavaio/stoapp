<template>
	<view>
        	<!-- <image class="banner-img" src="/static/news_bg.png"></image> -->
        <view class="banner-img"></view>
        <view class="news-detail-content">
            <view class="" v-for="newItem in newsData"  v-bind:key="newItem.id">
                <view class="news-detail-title">{{newItem.title}}</view>
                <view class="news-detail-author-date">
                    <text class="news-detail-author">{{newItem.author}}</text>
                    <text class="news-detail-date"> {{formatDate(newItem.timestamp)}} </text>
                </view>
                <view   v-html="newItem.content">
                    {{newItem.content}}
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
                newsData: [],

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

        // onLoad(option){
        //     // TODO 后面把参数名替换成 payload

        //     this.newsId = option.id
        //     // 目前在某些平台参数会被主动 decode，暂时这样处理。

        //     this.getDetail(option.id);

        // },
        
        
        onLoad(option){
            this.newsId = option.id
            // 目前在某些平台参数会被主动 decode，暂时这样处理。
            
            this.getDetail(option.id);
            
            
            
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
                 var da = timeStamp;
                    da = new Date(da);
                    var year = da.getFullYear()+'年';
                    var month = da.getMonth()+1+'月';
                    var date = da.getDate()+'日';
                    return [year,month,date].join('');
            },
			getDetail(newsId){
                uni.request({
                	url: 'https://securityin.com/api/content?type=Securityin&id=' + newsId ,
                	data: {},
                	success: data => {
                		if (data.statusCode == 200) {
                            if(data.data.data[0].identity){
                                let language= "ch"
                                if( this.$i18n.locale == "zh-CN"){
                                    language="ch"
                                } else {
                                    language= "en"
                                }
                                uni.request({
                                    url: 'https://securityin.com/api/search?type=Securityin&q=%2Boption:'+ language +'%2Bidentity:'+ data.data.data[0].identity,
                                    data: {},
                                    success: dataSource => {
                                        console.log(dataSource)
                                        this.newsData = dataSource.data.data;
                                    },
                                    fail: (dataSource, code) => {
                                    	console.log('fail' + JSON.stringify(dataSource));
                                    }
                                })
                            } else {
                                this.newsData = data.data.data;
                            }

                		}
                	},
                	fail: (data, code) => {
                		console.log('fail' + JSON.stringify(data));
                	}
                })
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

.banner-img {
	width: 100%;
    height: 360rpx;
    margin: 20px 16px;
    background: url("~@/static/news_detail_banner.png") no-repeat;
	background-size: contain;
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
}
.news-detail-date{
    color: #8A8E9E;
    font-size: 28rpx;
    margin-left: 10px;
}
</style>
