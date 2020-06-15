<template>
	<view>
        <view class="sto-list-market">
            <view class="pub-title">Trading History</view>
            <view class="sto-list-market-view" v-for="(item, index) in tableData" :key="item.id">
                <view class="sto-list-market-top">
                    <view class="sto-list-market-top-left">
                        <image class="sto-list-market-image" :src="item.logo"></image>
                        <view class="sto-list-market-top-info">
                            <text class="sto-list-market-num">
                                {{item.companyName}}
                            </text>
                            <view class="sto-list-market-company">{{item.smallNmae}}</view>
                        </view>
                    </view>
                    <view class="sto-list-market-top-right">
                        <view :class="item.change >0 ? 'price up-color':item.change == 0? 'price static-color':'price down-color'">
                            {{item.price}}
                        </view>
                        <view class="color-gray">$9,057,297.27</view>
                    </view>
                </view>
                <view class="sto-list-market-bottom">
                    <view>
                        <text class="change-color"> Change：
                            <view :class="item.change >0 ? 'change-num up-color':item.change == 0? 'change-num static-color':'change-num down-color'">
                                <icon :class="item.change >0 ? 'iconfont iconshang':item.change == 0? 'iconfont iconzuoyou':'iconfont iconxia'" ></icon>
                                0.3%
                            </view>
                        </text>
                    </view>
                    <view>
                      <text class="change-color">
                        24 Volume：
                        <text class="change-num sto-list-margin static-color">
                            0.3%
                        </text>
                      </text>
                    </view>
                </view>
            </view>
            <view style="text-align: center;">
                <view class="public-button margin-top">See More</view>
            </view>
        </view>
        <view class="backgroundStyle"></view>


        <view class="info">
            <view class="pub-title">Trading History</view>
            <view class="public-title">Token details</view>
            <view class="public-info" v-for="item in 3" :key="item">
                <view class="info-left">
                    Available for sale:
                </view>
                <view class="right">
                    <view class="info-item">
                        45 000 000 (45%)
                    </view>
                </view>
            </view>
        </view>
        <view class="backgroundStyle"></view>

        <view class="info">
            <view class="public-title">Fundraise Information</view>
            <view class="public-info" v-for="item in 3" :key="item">
                <view class="info-left">
                    Total Raise:
                </view>
                <view class="right">
                    <view class="info-item">
                        45 000 000 (45%)
                    </view>
                </view>
            </view>
        </view>
        <view class="backgroundStyle"></view>

        <view class="desc-view">
            <view class="pub-title">About</view>
            <view class="desct-title">
                Description
            </view>
            <view class="desc" ref="desc">
                VMC is a blockchain based open mobility platform, developed to host various mobility service providers into
                a single digital space. The company is building a one-stop shop decentralized solution for a trillion dollar
                mobility market, which enables developers and mobility
                service providers to build dApps that offer services for ride/vehicle sharing, public transport and more.
            </view>
            <!-- <view class="read-more" ref="readeMore" @click="handleClick"> read more</view> -->
        </view>
        <view class="backgroundStyle"></view>

        <view class="desc-view">
            <view class="desct-title">
                Overview
            </view>
            <view class="desc" ref="desc">
                Detroit, one of the fastest growing major cities in America and best kept real estate secrets, is rich with history, and possesses a colorful cultural fabric. Despite being among the 15 largest metro areas in the US, Detroit drivers spend the least amount of time in traffic during peak periods. Beyond automotive innovation, Detroit is home to dozens of startup incubators, and is surging on Inc.’s list of top 50 cities to start a business*. Root for the Lions, Tigers, Pistons and Red Wings, or enjoy the outdoors with over 200 miles of hiking trails nearby, 9 state parks, and over 3200 miles of coastline to explore.
                There’s something for everyone here, because Detroit is for everybody.
            </view>
        </view>

        <view class="backgroundStyle"></view>

        <view class="team-member">
            <view class="pub-title"> Advisors</view>
            <view ref="lessTeam">
                <view class="team-member-view" v-for="item in 3" :key="item">
                    <view class="team-left">
                        <image class="team-left-image" src="https://securityin.oss-cn-hongkong.aliyuncs.com/img/mempic/Smartchem/Christian Römlein.png"></image>
                    </view>
                    <view class="team-right">
                        <view class="member-name">Christian Römlein</view>
                        <view class="member-position">CEO</view>
                        <view class="team-icon-style">
                            <icon class="iconfont icon-telegram" ></icon>
                            <icon class="iconfont icon-telegram marginLeft"></icon>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="backgroundStyle"></view>
        <view class="news">
            <view class="pub-title">News</view>
            <view class="news-item" v-for="item in 4" :key="item">
                <view class="news-item-left">
                    <image class="news-image" src="@/static/news_item.jpg"></image>
                </view>
                <view class="news-item-right">
                    <view class="news-desc">
                        SPiCE VC Launches Liquid VC Fund With Tradable …
                    </view>
                    <view class="buttonStyle">Show All</view>
                </view>
            </view>
        </view>
        <view class="backgroundStyle"></view>
        <view class="pie-style">
            <view class="pub-title">Press</view>

            <view class="qiun-columns">
                <view class="qiun-charts qiun-rows" >
                    <canvas canvas-id="canvasPie" id="canvasPie" class="charts-pie"></canvas>
                    <view class="qiun-bg-white charts-right">
                        <view>
                            <block v-for="(item, index) in piearr" :key="index">
                                <view class="qiun-rows legend-itme">
                                    <view class="legend-itme-point" :style="{'background-color':item.color}"></view>
                                    <view class="legend-itme-text">{{item.name}}:{{item.data}}人</view>
                                </view>
                            </block>
                        </view>
                    </view>
                </view>
            </view>

        </view>
        <!-- <view class="backgroundStyle"></view> -->

    </view>
</template>

<script>
    import uCharts from '@/components/u-charts/u-charts.js';

	export default {
		data() {
			return {
                showMore: false,
                chartData: {
                  "series": [{
                	"name": "Reserve",
                	"data": 50
                  }, {
                	"name": "Datacenter Build",
                	"data": 30
                  }, {
                	"name": "三班",
                	"data": 20
                  }, {
                	"name": "四班",
                	"data": 18
                  }, {
                	"name": "五班",
                	"data": 8,
                  }]
                },
                cWidth:'',
                cHeight:'',
                pixelRatio:1,
                serverData:'',
                piearr:[],

                tableData:[
                    {
                            "logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/tzero.png",
                            "companyName":   "tZERO" ,
                            "companyNameLink": "https://www.tzero.com/",
                            "smallNmae": "TZROP",
                            "smallNmaeLink": "https://www.tzero.com/",
                            "marketCap": "$26,008,327.50",
                            "price": "$1.25",
                            "change": "0",
                            "volume": "$4,051.00",
                            "exchange": "tZERO",
                            "priceSrc": "1.jpg"
                        },
                        {
                            "logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/blockchaincapital.jpg",
                            "companyName":   "Blockchain Capital" ,
                            "companyNameLink": "http://www.blockchaincapital.com/",
                            "smallNmae": "BCAP",
                            "smallNmaeLink": "http://www.blockchaincapital.com/",
                            "marketCap": "$9,057,297.27",
                            "price": "$1.49",
                            "change": "10.37",
                            "volume": "$596.00",
                            "exchange": "OpenFinance",
                            "priceSrc": "2.jpg"
                        },
                        {
                            "logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/spice.jpg",
                            "companyName":   "SPiCE VC" ,
                            "companyNameLink": "https://spicevc.com",
                            "smallNmae": "SPiCE",
                            "smallNmaeLink": "https://spicevc.com",
                            "marketCap": "$8,126,101.44",
                            "price": "$0.96",
                            "change": "0",
                            "volume": "$132.48",
                            "exchange": "OpenFinance",
                            "priceSrc": "3.jpg"
                        },
                        {
                            "logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/lotto.jpg",
                            "companyName":   "Lottery.com" ,
                            "companyNameLink": "https://lottery.com/",
                            "smallNmae": "LDCC",
                            "smallNmaeLink": "https://lottery.com/",
                            "marketCap": "$4,278,768.50",
                            "price": "$0.10",
                            "change": "0",
                            "volume": "$567.00",
                            "exchange": "OpenFinance",
                            "priceSrc": "4.jpg"
                        }, {
                            "logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/mt-pelerin-icon.png",
                            "companyName":   "Mt Pelerin" ,
                            "companyNameLink": "https://www.mtpelerin.com/",
                            "smallNmae": "MPS",
                            "smallNmaeLink": "https://www.mtpelerin.com/",
                            "marketCap": "	$1,580,000.00",
                            "price": "$3.16",
                            "change": "-11.98",
                            "volume": "$338.06",
                            "exchange": "Uniswap",
                            "priceSrc": "5.jpg"
                        },
                        {
                            "logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/22x.png",
                            "companyName":   "22X Fund" ,
                            "companyNameLink": "https://www.22xfund.com",
                            "smallNmae": "22X",
                            "smallNmaeLink": "https://www.22xfund.com",
                            "marketCap": "$1,543,370.40",
                            "price": "$0.30",
                            "change": "-40",
                            "volume": "$30.00",
                            "exchange": "OpenFinance",
                            "priceSrc": "6.jpg"
                        },
                        {
                            "logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/protos.jpg",
                            "companyName":   "Protos" ,
                            "companyNameLink": "http://protosmanagement.com/",
                            "smallNmae": "PRTS",
                            "smallNmaeLink": "http://protosmanagement.com/",
                            "marketCap": "$1,507,579.20",
                            "price": "$0.45",
                            "change": "0",
                            "volume": "$20.25",
                            "exchange": "OpenFinance",
                            "priceSrc": "7.jpg"
                        },
                        {
                            "logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/realt.jpg",
                            "companyName":   "16200 Fullerton Ave Detroit MI" ,
                            "companyNameLink": "https://realt.co/product/16200-fullerton-ave-detroit-mi-48227/",
                            "smallNmae": "RealT",
                            "smallNmaeLink": "https://realt.co/product/16200-fullerton-ave-detroit-mi-48227/",
                            "marketCap": "$650,370.00",
                            "price": "$171.15",
                            "change": "-0.83",
                            "volume": "$1,000.78",
                            "exchange": "Uniswap",
                            "priceSrc": "8.jpg"
                        },
                        {
                            "logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/realt.jpg",
                            "companyName":   "1002428 Appoline St" ,
                            "companyNameLink": "https://realt.co/product",
                            "smallNmae": "RealT",
                            "smallNmaeLink": "https://realt.co/product",
                            "marketCap": "$144,860.00",
                            "price": "$1744.86",
                            "change": "0.54",
                            "volume": "$726.00",
                            "exchange": "Uniswap",
                            "priceSrc": "9.jpg"
                        },
                        {
                            "logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/realt.jpg",
                            "companyName":   "9943 Marlowe Street, Detroit, MI" ,
                            "companyNameLink": "https://realt.co/product",
                            "smallNmae": "RealT",
                            "smallNmaeLink": "https://realt.co/product",
                            "marketCap": "$71,690.00",
                            "price": "$71.69",
                            "change": "2.68",
                            "volume": "$0.00",
                            "exchange": "Uniswap",
                            "priceSrc": "10.jpg"
                        },
                        {
                            "logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/realt.jpg",
                            "companyName":   "20200 Lesure St Detroit MI 48235" ,
                            "companyNameLink": "https://realt.co/product",
                            "smallNmae": "RealT",
                            "smallNmaeLink": "https://realt.co/product",
                            "marketCap": "$69,290.00",
                            "price": "$69.29",
                            "change": "0.55",
                            "volume": "$208.92",
                            "exchange": "Uniswap",
                            "priceSrc": "11.jpg"
                        },
                        {
                            "logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/realt.jpg",
                            "companyName":   "9336 Patton St Detroit" ,
                            "companyNameLink": "https://realt.co/product",
                            "smallNmae": "RealT",
                            "smallNmaeLink": "https://realt.co/product",
                            "marketCap": "$62,950.00",
                            "price": "$62.95",
                            "change": "-1.5",
                            "volume": "$126.37",
                            "exchange": "Uniswap",
                            "priceSrc": "12.jpg"
                        },
                        {
                            "logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/realt.jpg",
                            "companyName":   "942 Audubon Rd Detroit MI" ,
                            "companyNameLink": "https://realt.co/product",
                            "smallNmae": "RealT",
                            "smallNmaeLink": "https://realt.co/product",
                            "marketCap": "$59,122.50",
                            "price": "$78.83",
                            "change": "-1.67",
                            "volume": "$0.00",
                            "exchange": "Uniswap",
                            "priceSrc": "13.jpg"
                        }
                ]
			}
		},
        mounted() {
            this.cWidth=uni.upx2px(400);
            this.cHeight=uni.upx2px(400);
            this.showPie("canvasPie", this.chartData);
        },


		methods: {
            handleClick(){
                let showMore = !this.showMore;
                if(showMore){
                    this.$refs.desc.$el.style.webkitLineClamp = "unset"
                    this.$refs.readeMore.$el.innerHTML = "收起"
                } else{
                    this.$refs.desc.$el.style.webkitLineClamp = "6";
                    this.$refs.readeMore.$el.innerHTML = "reade more"
                }
                this.showMore = showMore;
            },
            showPie(canvasId, chartData){
                const _self = this;
                let canvaPie = new uCharts({
                     $this:_self,
                    canvasId: canvasId,
                    type: 'pie',
                    colors: ["#F7C137","#5AD8A6", "#5D7092", "#8C54FF", "#2E5BFF"],
                    fontSize:13,
                    legend: {
                        show: false
                    },
                    background:'#FFFFFF',
                    pixelRatio:_self.pixelRatio,
                    series: chartData.series,
                    animation: true,
                    width: _self.cWidth*_self.pixelRatio,
                    height: _self.cHeight*_self.pixelRatio,
                    dataLabel: false,

                });
                this.piearr=canvaPie.opts.series;
            },
		},
	}
</script>

<style>
    @import '/static/iconfont.css';
    .team-icon-style{
        color: #27ACE0;
    }
    .marginLeft{
        margin-left: 10px;
    }
    .news{
        padding: 0 16px 20px;
    }
    .news-item{
        padding: 12px 0;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #F4F7FC;
    }
    .buttonStyle{
        text-align: center;
        width: 160rpx;
        height: 64rpx;
        line-height: 64rpx;
        color: #FFFFFF;
        font-size: 24rpx;
        background:linear-gradient(90deg,rgba(49,205,186,1) 0%,rgba(40,170,226,1) 100%);
        border-radius: 8px;
        float: right;
    }
    .news-item-right{
        height: 160rpx;
        padding-left: 12px;
    }
    .news-image{
        width: 204rpx;
        height: 160rpx;
    }
    .news-item-left{
        width: 204rpx;
        height: 160rpx;
    }
    .news-desc{
        color: #656B87;
        font-size: 28rpx;
        line-height: 44rpx;

        overflow: hidden;
         text-overflow: ellipsis;
         display: -webkit-box;
         -webkit-line-clamp: 2;
         -webkit-box-orient: vertical;
    }
    .pie-style{

    }
    .pie-view{
        width: 100%;
        border: 1px solid yellow;
        height: 100px;
    }


    .qiun-padding{padding:2%; width:96%;}
    .qiun-wrap{display:flex; flex-wrap:wrap;}
    .qiun-rows{display:flex; flex-direction:row !important;}
    .qiun-columns{display:flex; flex-direction:column !important;}
    .qiun-bg-white{background:#FFFFFF;}
    .qiun-charts{
        width: 750upx;
        height:400upx;
        background-color: #FFFFFF;
        display: flex;
    }

    .charts-pie{
        /* width: 300upx; */
        width: 50%;
        height:400upx;
        background-color: #FFFFFF;
    }

    .charts-right{
        display:flex;
        align-items:center;
        height:400upx;
        background-color: #FFFFFF;
        margin-left: 10px;
    }
    .legend-itme{
        /* width: 300upx; */
        margin-left: -10upx;
        height: 70upx;
        align-items:center;
    }
    .legend-itme-point{width: 20upx; height:20upx; margin: 15upx;  border: 1px solid #FFFFFF; border-radius: 20upx;background-color: #000000;}
    .legend-itme-text{height:50upx;line-height: 50upx;color: #666666;font-size: 26upx;}


</style>
