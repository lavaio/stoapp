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
	</view>
</template>

<script>
	export default {
		data() {
			return {
                newsId: "",
                newsData: []
			}
		},
		methods: {
            formatDate(timeStamp){
                 var da = timeStamp;
                    da = new Date(da);
                    var year = da.getFullYear()+'年';
                    var month = da.getMonth()+1+'月';
                    var date = da.getDate()+'日';
                    console.log([year,month,date].join('-'));
                    return [year,month,date].join('');
            },
			getDetail(newsId){
                console.log(newsId)
                uni.request({
                	url: 'https://securityin.com/api/content?type=Securityin&id=' + newsId ,
                	data: {},
                	success: data => {
                		if (data.statusCode == 200) {
                			console.log(data)
                            if(data.data.data[0].identity){
                                uni.request({
                                    url: 'https://securityin.com/api/search?type=Securityin&q=%2Boption:ch%2Bidentity:'+ data.data.data[0].identity,
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
            }
		},
        onLoad(option) {
        	// TODO 后面把参数名替换成 payload

            console.log(option.id)
            this.newsId = option.id
        	// 目前在某些平台参数会被主动 decode，暂时这样处理。

        	this.getDetail(option.id);
        },
	}
</script>

<style>

.banner-img {
	width: 100%;
    height: 360rpx;
    margin: 20px 16px;
    background: url("~@/static/news_detail_banner.png") no-repeat;
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
