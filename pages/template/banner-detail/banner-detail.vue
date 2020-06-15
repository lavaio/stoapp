<template>
	<view>
        <view class="head">
            <view class="top">
                <view class="top-left">
                    <image class="top-left" src="https://s3.amazonaws.com/stm-public-local/sto/manualsync/upload_2y10wy9Zcoq7Qs1vMIzQkykEs0YlglhFgd2GhzfDGbsOsv8PkXQF5Kq.png"></image>
                </view>
                <view class="top-right">
                    <view class="top-title">La Estancia Holdings, Ltd</view>
                    <view class="tag-view">
                        <view class="tag blue-tag" v-for="item in 3" :key="item">Real Estate</view>
                        <view class="tag yellow-tag">Real Estate</view>
                    </view>
                </view>
            </view>
            <view class="num">
                <view class="num-item">
                    <text class="number">$10,000,000</text>
                    <text class="num-desc">Mini Investment</text>
                </view>
                <view class="num-item">
                    <text class="number">$10</text>
                    <text class="num-desc">Mini Investment</text>
                </view>
                <view class="num-item">
                    <text class="number">$10,000,000</text>
                    <text class="num-desc">Mini Investment</text>
                </view>
                <view class="num-item">
                    <text class="number">$10</text>
                    <text class="num-desc">Mini Investment</text>
                </view>
            </view>
            <view class="head-desc-view">
                <view class="head-desc" ref="headDesc">
                    Real estate backed digital securities portfolios of trophy properties (US$10M/$20M/$45M) under long-term commercial leases.
                </view>
                <view class="readeMore" @click="headMore" ref="headReadeMore"> reade more</view>
            </view>
        </view>
        <view class="flex-wraper">
            <view class="flex-view">
                <view class="flex-item" v-for="item in 6" :key="item">
                    <view class="flex-item-top">
                        <view class="flex-height">$64,990</view>
                        <view class="flex-percent">(0.15%)</view>
                    </view>
                    <view class="flex-item-bottom">Market Cap</view>
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
        <tabOverview v-if="currentTabId == 'overview'"></tabOverview>

	</view>
</template>

<script>
    import tabOverview from "@/components/tabOverview/tabOverview.vue"
	export default {
        components:{
            tabOverview,
        },
		data() {
			return {
                tabBars: [{
                        name: 'overview',
                        id: 'overview'
                    }, {
                        name: 'Details',
                        id: 'Details'
                    }, {
                        name: 'Milestones',
                        id: 'Milestones'
                    }, {
                        name: 'Team members',
                        id: 'TeamMember'
                    }
                ],
                currentTabId: "overview",
                showHeadMore: false,
			}
		},
		methods: {
            handleTab(e){
                console.log(e.target)
                this.currentTabId = e.target.id;

            },
            headMore(){
                let showHeadMore = !this.showHeadMore;
                if(showHeadMore){
                    this.$refs.headDesc.$el.style.webkitLineClamp = "unset"
                    this.$refs.headReadeMore.$el.innerHTML = "收起"
                } else{
                    this.$refs.headDesc.$el.style.webkitLineClamp = "2";
                    this.$refs.headReadeMore.$el.innerHTML = "reade more"
                }

                this.showHeadMore = showHeadMore;
            }

		}
	}
</script>

<style>
    .head{
        margin: 20px 16px 24px;
        box-shadow:0px 16px 60px 0px rgba(24,98,204,0.09);
        border-radius: 8px;
        padding: 0 12px;
    }
    .top{
        padding: 16px 0 ;
        border-bottom: 1px solid #F4F7FC;
        display: flex;
        flex-direction: row;
    }
    .top-title{
        color: #343744;
        font-size: 32rpx;
        font-weight: bold;
    }
    .tag{
        padding: 0 8px;
        height: 32rpx;
        line-height: 32rpx;
        color: #FFFFFF;
        font-size: 20rpx;
        border-radius: 4px;
        display: inline-block;
        margin-right: 5px;
    }
    .blue-tag{
        background: #27ACE0;
    }
    .yellow-tag{
        background: #FDAD00;
    }
    .top-left{
        width: 220rpx;
        height: 160rpx;
    }
    .top-right{
        height: 160rpx;
        margin-left: 12px;
    }
    .num{
        padding: 8px 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border-bottom: 1px solid #F4F7FC;
        justify-content: space-between;
    }
    .num-item{

    }
    .number{
        color: #27ACE0;
        font-size: 32rpx;
        font-weight: bold;
    }
    .num-desc{
        color: #656B87;
        font-size: 20rpx;
        margin-left: 5px;
    }
    .head-desc-view{
        padding: 12px 0 16px;
    }
    .head-desc{
        color: #656B87;
        font-size: 24rpx;
        line-height: 40rpx;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .readeMore{
        color: #27ACE0;
        font: 24rpx;
        text-decoration: underline;
        text-align: right;
    }
    .flex-wraper{
        padding: 0 16px;
        margin-bottom: 74rpx;
        overflow: scroll;
    }

    .flex-view{
        display: flex;
        flex-direction: row;
        padding-bottom: 20rpx;
    }
    .flex-item{
        width: 234rpx;
        height: 162rpx;
        box-shadow:0px 2px 4px 2px rgba(229,233,239,1);
        border-radius:8px;
        flex-shrink: 0;
        margin-right: 10px;
        padding: 16rpx;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .flex-percent{
        color: #27ACE0;
        font-size: 24rpx;
        font-weight: 100;
    }
    .flex-height{
        height: 44rpx;
        line-height: 44rpx;
    }
    .flex-item-top{
        color: #27ACE0;
        font-size: 32rpx;
        font-weight: 800;
    }
    .flex-item-bottom{
        color: #343744;
        font-size: 28rpx;
        font-weight: 800;
    }
</style>
