<template>
	<view>
        <view class="desc-view">
            <view class="desct-title">
                Description
            </view>
            <view class="desc" ref="desc">
                VMC is a blockchain based open mobility platform, developed to host various mobility service providers into
                a single digital space. The company is building a one-stop shop decentralized solution for a trillion dollar
                mobility market, which enables developers and mobility
                service providers to build dApps that offer services for ride/vehicle sharing, public transport and more.
            </view>
            <view class="read-more" ref="readeMore" @click="handleClick"> read more</view>
        </view>
        <view class="backgroundStyle"></view>
        <view class="info">
            <view class="public-title">General information</view>
            <view class="public-info">
                <view  class="info-left">
                    Main sale
                    <text class="info-left-red">Ended</text>
                </view>
                <view class="right">
                    <view class="info-item gray-circle">March 15, 2019 </view>
                    <view class="info-item gray-circle">March 15, 2019 </view>
                </view>
            </view>
            <view class="public-info">
                <view class="info-left">
                    Private sale
                    <text class="info-left-green">Ongoing</text>
                </view>

                <view class="right">
                    <view class="info-item gray-circle">March 15, 2019 </view>
                    <view class="info-item gray-circle">March 15, 2019 </view>
                </view>
            </view>
            <view class="public-info">
                <view class="info-left">
                    Country of origin:
                </view>

                <view class="right">
                    <view class="info-item border-before">Netherlands </view>
                </view>
            </view>
        </view>
        <view class="backgroundStyle"></view>
        <view class="info">
            <view class="public-title">General information</view>
            <view class="public-info">
                <view class="info-left">
                    Company name:
                </view>
                <view class="right">
                    <view class="info-item">VMC.AI BV </view>
                </view>
            </view>
            <view class="public-info">
                <view class="info-left">
                    Country of incorporation:
                </view>
                <view class="right">
                    <view class="info-item border-before">Netherlands </view>
                </view>
            </view>
            <view class="public-info">
                <view class="info-left">
                    Company address:
                </view>
                <view class="right">
                    <view class="info-item location">
                        Prinsengracht 463-1, 1016 HP, Amsterdam
                    </view>
                </view>
            </view>
            <view class="public-info">
                <view class="info-left">
                    Whitelist:
                </view>
                <view class="right">
                    <view class="info-item gou">
                        Required
                    </view>
                </view>
            </view>

            <view class="public-info">
                <view class="info-left">
                    KYC:
                </view>
                <view class="right">
                    <view class="info-item gou">
                        Required
                    </view>
                </view>
            </view>

            <view class="public-info">
                <view class="info-left">
                    AML:
                </view>
                <view class="right">
                    <view class="info-item gou">
                        Required
                    </view>
                </view>
            </view>
        </view>
        <view class="backgroundStyle"></view>
        <view class="info">
            <view class="public-title">Asset</view>
            <view class="public-info">
                <view class="info-left">
                    Token rights:
                </view>
                <view class="right">
                    <view class="info-item">
                        VMC.AI BV
                    </view>
                </view>
            </view>
        </view>
        <view class="backgroundStyle"></view>
        <view class="info">
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
                    Presale Price::
                </view>
                <view class="right">
                    <view class="info-item">
                        1 VMC-ST = €0.14 - €0.16
                    </view>
                </view>
            </view>
            <view class="public-info">
               <view class="info-left">
                   Bonuses:
               </view>
               <view class="right">
                   <view class="info-item">
                       Option A: For Placement of 1,000–2,000 EUR — 10%
                       Option B: For Placement of 2,001–4,000 EUR — 20%
                       Option C: For Placement of 4,001–6,000 EUR — 30%
                       Option D: For Placement over 6,001 EUR — Negotiable
                   </view>
               </view>
           </view>
        </view>
        <view class="backgroundStyle"></view>
        <view class="date-line">
            <view class="public-title">Additional links</view>
            <view class="date-view" ref="lessLine">
                <view class="date-view-box" v-for="item in 3" :key="item">
                    <view>
                        <view :class="item == 3 ? 'line-item': 'line-item line-style'"></view>
                    </view>
                    <view class="date-view-right">
                        <view class="date-title">Q3 2017</view>
                        <view class="date-desc">
                            Write the first release of the white paper
                        </view>
                    </view>
                </view>
            </view>
            <view class="date-view display-none" ref="moreLine" >
                <view class="date-view-box" v-for="item in 6" :key="item">
                    <view>
                        <view :class="item == 6 ? 'line-item': 'line-item line-style'"></view>
                    </view>
                    <view class="date-view-right">
                        <view class="date-title">Q3 2017</view>
                        <view class="date-desc">
                            Write the first release of the white paper
                        </view>
                    </view>
                </view>
            </view>
            <view class="button-style">
                <view class="public-button" @click="handleLineMore" ref="lineMoreBut">view more</view>
            </view>
        </view>
        <view class="backgroundStyle"></view>
        <view class="team-member">
            <view class="public-title">Team members (13)</view>
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
            <view ref="moreTeam" class="display-none">
                <view class="team-member-view" v-for="item in 6" :key="item">
                    <view class="team-left">
                        <image class="team-left-image" src="https://securityin.oss-cn-hongkong.aliyuncs.com/img/mempic/Smartchem/Christian Römlein.png"></image>
                    </view>
                    <view class="team-right">
                        <view class="member-name">Christian Römlein</view>
                        <view class="member-position">CEO</view>
                     </view>
                </view>
            </view>
            <view class="button-style marginTop">
                <view class="public-button" @click="handleTeamMore" ref="teamMoreButton">Show All</view>
            </view>
        </view>
        <view class="follow-us">
            <view class="follow-title">flow us</view>
            <view class="follow-icon-view">
                <view class="marginRight">
                    <icon class="iconfont icon-telegram" style="font-size: 28px;"></icon>
                </view>
                <view>
                    <icon class="iconfont icon-telegram" style="font-size: 28px;"></icon>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
                showMore: false,
                showLineMore: false,
                showTeamMore: false
			}
		},
		methods: {
            handleTeamMore(){
                let showTeamMore = !this.showTeamMore;
                if(showTeamMore){
                    this.$refs.lessTeam.$el.style.display = "none";
                    this.$refs.moreTeam.$el.style.display = "block";
                    this.$refs.teamMoreButton.$el.innerHTML = "收起";
                } else{
                    this.$refs.lessTeam.$el.style.display = "block";
                    this.$refs.moreTeam.$el.style.display = "none";
                    this.$refs.teamMoreButton.$el.innerHTML = "Show All"
                }
                this.showTeamMore = showTeamMore;
            },

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
            handleLineMore(){
                let showLineMore = !this.showLineMore;

                if(showLineMore){
                    this.$refs.lessLine.$el.style.display = "none"
                    this.$refs.moreLine.$el.style.display = "block"
                    this.$refs.lineMoreBut.$el.innerHTML = "收起"
                } else{
                    this.$refs.lessLine.$el.style.display = "block"
                    this.$refs.moreLine.$el.style.display = "none"

                    this.$refs.lineMoreBut.$el.innerHTML = "reade more"
                }
                this.showLineMore = showLineMore;
            }
		}
	}
</script>

<style>
    @import '/static/iconfont.css';
    .desc-view{
        padding: 0 16px 20px;
    }
    .desct-title{
        color: #343744;
        font-size: 32rpx;
        margin-bottom: 16px;
        margin-top: 32px;
    }
    .desc{
        color: #656B87;
        font-size: 28rpx;
        line-height: 44rpx;
        margin-bottom: 12px;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
    }
    .read-more{
        color: #27ACE0;
        font-size: 28rpx;
        text-decoration: underline;
    }
   
    .info{
        padding: 0 16px;
    }
    .public-title{
        color: #343744;
        font-weight: bold;
        margin: 20px 0 3px;
    }
    .public-info{
        color: #343744;
        font-size: 28rpx;
        padding: 13px 0;
        border-bottom: 1px solid #F4F7FC;
        display: flex;
        justify-content: space-between;

    }
    .info-left-red,.info-left-green{
        margin-left: 15px;
    }
    .info-left{
        white-space: nowrap;
    }
    .info-left-red::before,.info-left-green::before{
        width: 12rpx;
        height: 12rpx;
        border-radius: 50%;
        display: inline-block;
        content: " ";
        margin-right: 5px;
    }
    .info-left-red::before{
        background:#EF3D77 ;
    },
    .info-left-green::before{
        background: #01C0AA;
    }
    .right{
        margin-left: 50px;
    }
    .info-item{
        color: #656B87;
        font-size: 28rpx;
        line-height: 44rpx;
    }
    .gray-circle::before{
        width: 12rpx;
        height: 12rpx;
        background: #656B87;
        border-radius: 50%;
        display: inline-block;
        content: " ";
        margin-right: 5px;
    }
    .border-before::before{
        content: " ";
        width: 32rpx;
        height: 10rpx;
        border-top: 3px solid #AA1A27;
        border-bottom: 3px solid #204385;
        display: inline-block;
        margin-right: 8px;
    }
    .location, .gou{
        position: relative;
    }
    .location::before, .gou::before{
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin-right: 5px;
        position: absolute;
        left: -21px;
    }
    .location::before {
        content: "\e668";
    }

    .gou::before{
        content: "\e603";
    }

    .date-line{
        padding: 0px 16px 20px;
    }
    .display-none{
        display: none;
    }
    .date-view{
        margin-bottom: 32rpx;
        margin-top: 16px;
        overflow:hidden;
    }
    .date-view-box{
        display: flex;
        flex-direction: row;
        overflow: hidden;
    }
    .date-view-right{
        padding-bottom: 32rpx;
        margin-left: 10px;
    }
    .date-title{
        color: #27ACE0;
        font-size: 28rpx;
        margin-bottom: 16rpx;
        margin-top: -5px;
    }
    .date-desc{
        color: #656B87;
        font-size: 28rpx;
        line-height: 44rpx;
    }
    .button-style{
        text-align: center;
    }
    .line-item{
        width: 32rpx;
        height: 32rpx;
        border-radius: 50%;
        background: #27ACE0;
    }
    .line-style{
        position: relative;
    }
    .line-style::after{
        content: "";
        height: 100px;
        border: 1px solid #27ACE0;
        display: inline-block;
        position: absolute;
        left: 14rpx;
    }
    .team-member{
        padding: 0px 16px 112rpx;

    }
    .team-member-view{
        border-bottom: 1px solid #F4F7FC;
        padding: 12px;
        display: flex;
        flex-direction: row;
    }
    .marginTop{
        margin-top: 64rpx;
    }
    .team-left{
        width: 128rpx;
        height: 128rpx;
        border-radius: 50%;
    }
    .team-left-image{
        width: 128rpx;
        height: 128rpx;
        border-radius: 50%;
    }
    .team-right{
        margin-left: 10px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .member-name{
        color: #343744;
        font-size: 28rpx;
    }
    .member-position{
        color:#656B87;
        font-size: 28rpx;
    }
    .follow-us{
        background: #F4F7FC;
        padding: 64rpx  0 96rpx;
        text-align: center;
        height: 284rpx ;
    }
    .follow-title{
        color: #656B87;
        font-size: 28rpx;
    }
    .follow-icon-view{
        display: flex;
        justify-content: center;
        align-items:  center;
        flex-direction: row;
        color: #27ACE0;
    }
    .follow-icon{
        width: 56rpx;
        height: 56rpx;
    }
    .marginRight{
        margin-right: 10px;
    }
</style>
