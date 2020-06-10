<template>
	<view class="select">
		<view class="select_box" @click="handleMask">
            <view class="label" ref="label">{{selectLabel}}</view>
            <view class="iconfont-style">

                <icon  v-if="showMask" class='iconfont iconarrow-down' style="color: #27ACE0;" ref="down"></icon>
                <icon v-else class='iconfont iconIcon-KeyboardArrow-Down-Rounded' ref="up"></icon>
            </view>
        </view>
        <!-- 遮罩层 -->
        <view  v-if="showMask" class="mask"  ref="mask">
            <view class="select-list">
                <view class="select-item" v-for="item in selectList" :key="item.value" v-bind:id="item.value" @click="handleSelectItemClick" :data-select-label="item.label">
                    {{item.label}}
                </view>
            </view>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                showMask: false,
                selectLabel: "",
                selectVale: "",
            }
		},
        props:{
            selectList:{
                default: ""
            },
            selectLabel: {
            }
        },
		methods: {
            handleSelectItemClick(e){
                this.selectVale = e.target.id
                this.selectLabel = e.target.dataset.selectLabel;
                this.showMask = false;
            },
            closeSelect(){
                this.showMask = false;
            },
            handleMask(){
                let showMask = !this.showMask;
                if(showMask){
                    this.$refs.label.$el.style.color = "#27ACE0";
                } else {
                    this.$refs.label.$el.style.color = "#656B87";
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
.iconfont-style{
    margin-left: 10px;
}
.mask{
    background: gray;
    width: 750rpx;
    height:100vh;
    position: fixed;
    left: 0;
    top: 200rpx;
    right: 0;
    bottom: 0;
    z-index: 1;
}
.select-list{
    background: #FFFFFF;
    padding:0  16px;
    color: #343744;
}
.select-item{
    height: 96rpx;
    line-height: 96rpx;
    border-bottom: 1px solid #F4F7FC;
    font-size: 32rpx;
    color: #343744;
}
</style>
