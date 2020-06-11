<template>
	<view>
        <view class="sto-list-market">
            <view class="pub-title">STO Being Traded</view>
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
                    </view>
                </view>
            </view>
        </view>
        <view class="backgroundStyle"></view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
                showMore: false,
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
		}
	}
</script>

<style>

</style>
