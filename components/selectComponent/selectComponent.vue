<template>
	<view class="select">
            <!-- <view class="select_box" @click="handleMask" @click.native="selectClick"> -->
            <view class="select_box"  @click.native="selectClick">
                <view class="label" ref="label">{{selectLabel}}</view>
                <view class="iconfont-style">
                    <view  v-if="showMask" class='iconfont iconarrow-down' style="color: #27ACE0;" ref="down"></view>
                    <view v-else class='iconfont iconIcon-KeyboardArrow-Down-Rounded' ref="up"></view>
                </view>
            </view>
        <!-- 遮罩层 -->
            <view  v-if="showMask" class="mask"  ref="mask">
                <view class="back-white">
                    <view class="select-list">
                        <view class="select-item" v-for="item in selectList" :key="item.value" v-bind:id="item.value" @click="handleSelectItemClick" :data-select-label="item.label">
                            {{item.label}}
                        </view>
                    </view>
                    <text class="select-margin select-button" @click="closeMask">Determine</text>
                </view>
            </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                showMask: false,
                selectVale: "",
            }
		},
        props:{
            "selectList": {
                type: Array
            },
            "selectLabel": {
                default: "All",
                type: String
            },
            "changeFixed": {
                type: Function
            },
            "name": {
                type: String
            },
            "handleSelectValue": {
                type: Function
            },
            "selectHeadClick": {
                type: Function
            }
        },
		methods: {
            selectClick(e){
               this.selectHeadClick(e.target);
               this.handleMask();
            },
            handleSelectItemClick(e){
                this.selectVale = e.target.id
                this.selectLabel = e.target.dataset.selectLabel;
                this.handleSelectValue(this.name, e.target.id,  e.target.dataset.selectLabel)
            },
            closeMask(){
                this.showMask = false;
                this.changeFixed(false)
            },
            justCloseMask(){
                this.showMask = false;
            },
            handleMask(){
                let showMask = !this.showMask;
                if(showMask){
                    this.$refs.label.$el.style.color = "#27ACE0";
                    this.changeFixed(true)
                } else {
                    this.$refs.label.$el.style.color = "#656B87";
                    this.changeFixed(false)
                }
                this.showMask = showMask;
            }
		}
	}
</script>

<style>
    @import '/static/iconfont.css';
.select{
    height: 100%;
}
.select_box{
    height: 100%;
    font-size: 32rpx;
    /* border: 1px solid gray; */
    padding: 0 16px;
    color: #656B87;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}
.select-margin{
    margin-top:114rpx ;
}
.select-button{
    width: 100%;
    height:80rpx;
    line-height: 80rpx;
    background: linear-gradient(90deg,rgba(49,205,186,1) 0%,rgba(40,170,226,1) 100%);
    border-radius:8px;
    color: #FFFFFF;
    text-align: center;
}
.iconfont-style{
    margin-left: 10px;
}
.mask{
    width: 750rpx;
    height:100vh;
    position: fixed;
    margin-top: -4px;
    left: 0;
    top: 188rpx;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.4);
}
.back-white{
    background: #FFFFFF;
    padding: 0 16px 16px;
}
.select-list{
    color: #343744;
    max-height: 400px;
    overflow-y: scroll;
}
.select-item{
    height: 96rpx;
    line-height: 96rpx;
    border-bottom: 1px solid #F4F7FC;
    font-size: 32rpx;
    color: #343744;
}
</style>
