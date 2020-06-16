<template>
	<view class="sto-detail">
        <view class="head-view">
            <view class="image-view">
                <view class="head-image">
                    <image class="image-style" :src="stoItem['logo_urk']"></image>
                </view>
                <view class="image-content">
                    <view class="company-name">{{stoItem['token name']}}</view>
                    <view class="company-desc">{{stoItem['brief']}}</view>
                    <view class="progress">
                        <icon class='iconfont icondanxuankuang' style="font-size: 24rpx;"></icon>
                        <text class="progress-text">Uncoming </text>
                    </view>
                </view>
            </view>
            <view class="tag">
                <view class="tag-percent">
                    <view class="tag-item tag-back">PROFILE</view>
                    <view class="percent">{{stoItem.profile}}</view>
                </view>
                <view class="tag-item tag-back tag-border" v-for="(tag,index) in stoItem['industry tags']"  :key="index">
                    {{tag}}
                </view>
            </view>
            <view class="rank">
                <view class="rank-text">Interest  Rank</view>
                <icon class="iconfont iconyiwen" style="color: #B4B6BF; font-size: 18px;"></icon>
            </view>
            <!-- <view class="head-logo-box">
                <view class="head-logo-view">
                    <image class="head-logo" src="https://securityin.oss-cn-hongkong.aliyuncs.com/img/logo/Smartchem/Smartchem.png"></image>
                </view>
                <view class="head-logo-view">
                    <image class="head-logo" src="https://securityin.oss-cn-hongkong.aliyuncs.com/img/logo/Smartchem/Smartchem.png"></image>
                </view>
            </view> -->
            <view class="period">
                <view class="period-view">
                    <view class="period-item">
                        <view class="period-name">Rank</view>
                        <view class="first-period-num">
                          {{stoItem.interests && stoItem.interests.length? stoItem.interests[0].Rank : ""}}

                        </view>
                    </view>
                </view>
                <view class="period-view">
                    <view class="period-item">
                        <view class="period-name">24H</view>
                        <view class="period-num">
                            {{stoItem.interests && stoItem.interests.length? stoItem.interests[0].OneDay : ""}}
                        </view>
                    </view>
                </view>
                <view class="period-view">
                    <view class="period-item">
                        <view class="period-name">7D</view>
                        <view class="period-num">
                            {{stoItem.interests && stoItem.interests.length? stoItem.interests[0].OneWeek : ""}}

                        </view>
                    </view>
                </view>
                <view class="period-view">
                    <view class="period-item">
                        <view class="period-name">1M</view>
                        <view class="period-num">
                            {{stoItem.interests && stoItem.interests.length? stoItem.interests[0].OneMonth : ""}}

                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="tabs">
            <view class="tabs-view">
                <view
                    v-for="(item,index) in tabBars"
                    :key="index"
                    :data-tab-id="item.id"
                    v-bind:id="item.id"
                    @click="handleTab"
                    :class="currentTabId == item.id ? 'tab-item-active tab-item' : 'tab-item'"
                >
                    {{item.name}}
                </view>
            </view>
        </view>
        <tabDescribe   v-if="currentTabId == 'Description'" :stoItem="stoItem">

        </tabDescribe>
       <tabDetail v-if="currentTabId== 'Details' ">

        </tabDetail>

        <tabMilestones v-if="currentTabId== 'Milestones' ">

         </tabMilestones>

        <tabTeamMember v-if="currentTabId== 'TeamMember' "></tabTeamMember>


	</view>
</template>

<script>
    import uLink from "@/components/uLink.vue"
    import tabDescribe from "@/components/tabDescribe/tabDescribe.vue"
    import tabDetail from "@/components/tabDetail/tabDetail.vue"
    import tabMilestones from "@/components/tabMilestones/tabMilestones.vue"
    import tabTeamMember from "@/components/tabTeamMember/tabTeamMember.vue"


	export default {
        comments:{
            tabDescribe,
            tabDetail,
            tabMilestones,
            tabTeamMember
        },
		data() {
			return {
                tabBars: [{
                        name: 'Description',
                        id: 'Description'
                    }
                    // {
                    //     name: 'Details',
                    //     id: 'Details'
                    // }, {
                    //     name: 'Milestones',
                    //     id: 'Milestones'
                    // }, {
                    //     name: 'Team members',
                    //     id: 'TeamMember'
                    // }
                ],
                tokenName: "",
                stoItem: [],
                currentTabId: "Description",
			}
		},
        mounted(){
            this.getStoDetail();
        },
		methods: {
            handleTab(e){
                this.currentTabId = e.target.id;
            },
            getStoDetail(){
                const that = this;
                uni.request({
                	url: "https://securityin.com/api/sto/"+ that.tokenName,
                	data: {},
                	success: data => {
                        this.stoItem = data.data.data;
                        console.log(this.stoItem)
                	},
                	fail: (data, code) => {
                		console.log('fail' + JSON.stringify(data));
                	}
                });
            }
		},
        onLoad: function (option) {
            this.tokenName = option.tokenName;

            // const item = JSON.parse(decodeURIComponent(option.item));
            // console.log(item)


        }
	}
</script>
<style>
    @import '/static/iconfont.css';
    .sto-detail{
    }
    .head-view{
        box-shadow:0px 8px 30px 0px rgba(24,98,204,0.09);
        border-radius:8px;
        margin: 20px 16px 40px;
        padding: 16px 12px ;
        background: #FFFFFF;
    }
    .image-view{
        display: flex;
        flex-direction: row;
    }
    .head-image{
        width: 128rpx;
        height: 128rpx;
    }
    .image-style{
        width: 128rpx;
        height: 128rpx;
    }
    .image-content{
        margin-left: 10px;
        /* height: 128rpx; */
    }
    .company-name{
        color: #343744;
        font-size: 40rpx;
        font-weight: bold;
        height: 56rpx;
        line-height: 56rpx;
        margin-bottom: 5px;
    }
    .company-desc{
        color: #343744;
        font-size: 24rpx;
        line-height: 28rpx;
    }
    .progress{
        color: #01C0AA;
        font-size: 24rpx;
        height: 40rpx;
        line-height: 40rpx;

    }
    .progress-text{
        margin-left: 10px;
    }
    .tag{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        border-bottom: 1px solid #F4F7FC;
        padding-bottom: 16px;
    }
    .tag-percent{
        display: flex;
        flex-direction: row;
        border-radius: 4rpx;
    }
    .tag-item{
        padding: 0 16rpx;
        font-size: 24rpx;
        height: 32rpx;
        line-height: 32rpx;
        font-weight: bold;
        color: #FFFFFF;
        margin-top: 13px;
    }
    .percent{
        background: #27ACE0;
        color: #FFFFFF;
        padding: 0 20rpx;
        border-radius: 0 4rpx 4rpx 0;
        line-height: 32rpx;
        height: 32rpx;
        margin-top: 13px;
    }
    .tag-back{
         background: #8A8E9E;
    }
    .tag-border{
        border-radius: 4rpx;
    }
    .rank{
        border-bottom: 1px solid #F4F7FC;
        height: 80rpx;
        line-height: 80rpx;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        padding-right: 10px;
    }
    .rank-text{
        color: #343744;
        font-size: 28rpx;
    }
    .head-logo-box{
        border-bottom: 1px solid #F4F7FC;
        height: 80rpx;
        line-height: 80rpx;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .head-logo-view{
        padding-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .head-logo{
        height: 56rpx;
        width: 56rpx;
        border-radius: 50%;
    }
    .period{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 13px;
    }
    .period-name{
        color: #8A8E9E;
        font-size: 28rpx;
        margin-bottom:6px ;
        text-align: center;
    }
    .period-num{
        color:#EE2E6B ;
        font-size: 24rpx;
    }
    .first-period-num{
        color: #FFFFFF ;
        font-size: 24rpx;
        background: #000000;
        text-align: center;
        border-radius: 4px;
    }







</style>
