<template>
	<view class="sto-detail">
        <view class="head-view">
            <view class="image-view">
                <view class="head-image">
                    <image class="image-style" :src="stoItem['Logo']"></image>
                </view>
                <view class="image-content">
                    <view class="company-name">{{stoItem['ProjectName']}}</view>
                    <view class="company-desc">{{stoItem['Brief']}}</view>
                    <view class="progress">
                        <icon class='iconfont icondanxuankuang' style="font-size: 24rpx;"></icon>
                        <!-- <text class="progress-text">{{stoItem["status"]}} </text>
                        判断中英文
                         -->
                         <text  v-if="languageFlag == 'zh'" class="progress-text">
                            {{statusZh[stoItem["Status"]]}}
                         </text>
                         <text  v-else class="progress-text">
                            {{statusEn[stoItem["Status"]]}}
                         </text>
                    </view>
                </view>
            </view>
            <view class="tag">
                <view class="tag-percent">
                    <view class="tag-item tag-back">
                        <!-- PROFILE -->
                        {{ i18n["profile"] }}
                    </view>
                    <view class="percent" v-if="stoItem.Profile">{{stoItem.Profile}}%</view>
                    <view class="percent" v-else>{{stoItem.Profile}}</view>
                </view>
                <view class="tag-item tag-back tag-border" v-for="(tag,index) in stoItem['Industry']"  :key="index">
                    <!-- // 判断中英文 -->
                    <text v-if="languageFlag == 'zh'">
                        {{industryZh[tag]}}
                    </text>
                    <text v-else>
                        {{industryEn[tag]}}
                    </text>
                </view>
            </view>
            <view class="rank">
                <view class="rank-text">{{ i18n["interest-rank"] }}</view>
                <icon class="iconfont iconyiwen" style="color: #B4B6BF; font-size: 21px;"></icon>
            </view>
            <view class="head-logo-box">
                <view class="head-logo-view" @click="linkTo(stoItem.Website)">
                    <image class="head-logo" src="/static/rankLogo.png"></image>
                </view>
                <view class="head-logo-view">
                    <icon class="iconfont iconlingying" style="color: #B4B6BF; font-size: 18px;" @click="linkTo(stoItem.Linkedin)"></icon>
                </view>
                <view class="head-logo-view">
                    <icon class="iconfont iconyou-tube" style="color: #B4B6BF; font-size: 21px;" @click="linkTo(stoItem.Youtube)"></icon>
                </view>
            </view>
            <view class="period">
                <view class="period-view">
                    <view class="period-item">
                        <view class="period-name">Rank</view>
                        <view class="first-period-num">
                          {{stoItem.Rank}}
                        </view>
                    </view>
                </view>
                <view class="period-view">
                    <view class="period-item">
                        <view class="period-name">24H</view>
                        <view class="period-num">
                           {{stoItem.Day}}
                        </view>
                    </view>
                </view>
                <view class="period-view">
                    <view class="period-item">
                        <view class="period-name">7D</view>
                        <view class="period-num">
                            {{stoItem.Week}}
                        </view>
                    </view>
                </view>
                <view class="period-view">
                    <view class="period-item">
                        <view class="period-name">1M</view>
                        <view class="period-num">
								{{stoItem.Month}}
                        </view>
                    </view>
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
        <!-- <view class="tabs">
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
        </view> -->
        <tabDescribe   v-if="currentTabId == 'Description'" :stoItem="stoItem" ref="tabDescribe" :languageFlag="languageFlag">

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
    import tabTeamMember from "@/components/tabTeamMember/tabTeamMember.vue";
    import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue';
    var util = require('../../../common/util.js');



	export default {
        components:{
            tabDescribe,
            tabDetail,
            tabMilestones,
            tabTeamMember,
            mpvuePicker
        },
		data() {
			return {
                themeColor: '#007AFF',
                mode: '',
                deepLength: 1,
                languageFlag: "zh",
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
                industryEn:{
                    1: 'Art',
                    2: 'Banking',
                    4: 'Blockchain',
                    8: 'E-commerce',
                    16 : 'Energy',
                    32:  'Finance',
                    64: 'Gambling',
                    128: 'Healthcare',
                    256: 'Industrials',
                    512:  'Infrastructure',
                    1024:'Investing',
                    2048: 'Media',
                    4096: 'Real Estate',
                    8192: 'Services',
                    16384:  'Software',
                    32768: 'Sports',
                    65536: 'Technology'
                },
                industryZh:{
                    1: '艺术',
                    2: '银行',
                    4: '区块链',
                    8: '电子商务',
                    16 : '能源',
                    32:  '金融',
                    64: '博彩',
                    128: '卫生保健',
                    256: 'Industrials',
                    512:  'Infrastructure',
                    1024:'投资',
                    2048: '媒体',
                    4096: '房地产',
                    8192: '服务',
                    16384:  '软件',
                    32768: '运动',
                    65536: '科技'
                },
                statusZh:{
                    2: '即将来临',
                    3: '强销期',
                    4: '已结束',
                    5: '募资结束',
                    1: '待定',
                },
                statusEn:{
                    2: 'Upcoming',
                    3: 'Main sale',
                    4: 'Ended',
                    5: 'Funded',
                    1: 'TBA',
                }
			}
		},
        mounted(){
            this.getStoDetail();
        },
        computed: {
            i18n() {
              return this.$t('sto-detail')
            }
        },
		methods: {
            linkTo(url){
                window.open(url);
            },
            handleTab(e){
                this.currentTabId = e.target.id;
            },
            getStoDetail(){
                const that = this;
                let Pagelanguage  = uni.getStorageSync('language');
                let language = 1;
                if( Pagelanguage == "en-US"){
                    language = 1;
                    this.languageFlag = "en"
                } else {
                    language = 0;
                    this.languageFlag = "zh"
                }
                let params = `projectName=${that.ProjectName}&projectID=${that.ProjectID}&language=${language}`
                uni.request({
                	url: `http://47.56.131.174/api/stoserver/v2/stos/get_entry?${params}`,
                	data: {},
                	success: data => {
                        if(data.statusCode == 200){
                            this.stoItem = data.data.data;
                        } else {
                            this.stoItem = {};
                            uni.showToast({
                                title:"项目或者对应语言内容不存在"
                            })
                        }
                	},
                	fail: (data, code) => {

                		console.log('fail' + JSON.stringify(data));
                	}
                });
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
                this.$refs.tabDescribe.setButtonInnerHtml();
                uni.setStorageSync('language', e.value[0]);
                util.setTabBar(this.$i18n.locale,"ST 详情", "ST Detail")
                this.getStoDetail();
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
                console.log(text)
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
        onLoad: function (option) {
            this.ProjectName = option.ProjectName;
            this.ProjectID = option.ProjectID;
            // const item = JSON.parse(decodeURIComponent(option.item));
        },
        onReady(option){
            let language  = uni.getStorageSync('language');
            console.log(uni.getStorageSync("language"))
            if( language == "en-US"){
                // this.setStyle(0, "英文");

                document.getElementsByClassName('uni-btn-icon')[1].innerHTML = "英文";

                this.$i18n.locale = "en-US";

                util.setTabBar("en-US","ST 详情", "ST Detail")
            } else{
                // this.setStyle(0, "中文");
                document.getElementsByClassName('uni-btn-icon')[1].innerText = "中文";
                this.$i18n.locale = "zh-CN";
                util.setTabBar("zh-CN","ST 详情", "ST Detail")
            }
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
		justify-content: center;
    }
    .head-logo-view{
        padding-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .head-logo{
        height: 36rpx;
        width: 36rpx;
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
