<template>
	<view>
        <view class="desc-view">
            <view class="desct-title">
                <!-- Description -->
                {{ i18n["describe"] }}
            </view>
            <view class="desc" ref="desc">
                {{stoItem.description}}
            </view>
            <view class="read-more" ref="readeMore" @click="handleClick">
            <!-- read more -->
           <!-- {{ i18n["more"] }} -->
             {{ market["more"] }}
            </view>
        </view>
        <view class="backgroundStyle"></view>
       <!-- <view class="info">
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
        </view> -->
        <view class="backgroundStyle"></view>
        <view class="info">
            <view class="public-title">{{ i18n["legal"] }}</view>
            <view class="public-info">
                <view class="info-left">
                    <!-- Company name: -->
                    {{ i18n["company-name"] }}
                </view>
                <view class="right">
                    <view class="info-item">{{stoItem['Company name']}}</view>
                </view>
            </view>
            <view class="public-info">
                <view class="info-left">
                    <!-- Country of incorporation: -->
                    {{ i18n["country-incorporation"] }}
                </view>
                <view class="right">
                    <view class="info-item border-before">{{stoItem['Country of incorporation']}} </view>
                </view>
            </view>
            <view class="public-info">
                <view class="info-left">
                    {{ i18n["company-address"] }}
                    <!-- Company address: -->
                </view>
                <view class="right">
                    <view class="info-item location">
                        {{stoItem['Company address']}}
                    </view>
                </view>
            </view>
            <view class="public-info">
                <view class="info-left">
                    <!-- Whitelist: -->
                    {{ i18n["whitelist"] }}
                </view>
                <view class="right">
                    <view :class=" stoItem.WhiteList ? 'info-item gou' : 'info-item'">
                        Required
                    </view>
                </view>
            </view>

            <view class="public-info">
                <view class="info-left">
                    <!-- KYC: -->
                    {{ i18n["kyc"] }}
                </view>
                <view class="right">
                    <view :class=" stoItem.KYC ? 'info-item gou' : 'info-item'">
                        Required
                    </view>
                </view>
            </view>

            <!-- <view class="public-info">
                <view class="info-left">
                    AML:
                </view>
                <view class="right">
                    <view class="info-item gou">
                        Required
                    </view>
                </view>
            </view> -->
        </view>
        <view class="backgroundStyle"></view>
        <view class="info">
            <view class="public-title">
                {{ i18n["asset"] }}
            </view>
            <view class="public-info">
                <view class="info-left">
                    <!-- Token rights: -->
                    {{ i18n["token-rights"] }}
                </view>
                <view class="right">
                    <view class="info-item">
                        {{stoItem['token right']}}
                    </view>
                </view>
            </view>
        </view>
        <view class="backgroundStyle"></view>
        <view class="info">
            <view class="public-title">
                {{ i18n["token-details"] }}
                <!-- Token details -->
            </view>
            <view class="public-info">
                <view class="info-left">
                    {{ i18n["symbol"] }}
                    <!-- Symbol: -->
                </view>
                <view class="right">
                    <view class="info-item">
                        	{{stoItem['Symbol']}}
                    </view>
                </view>
            </view>
            <view class="public-info">
                <view class="info-left">
                    <!-- Available for sale: -->
                    {{ i18n["available-for-sale"] }}
                </view>
                <view class="right">
                    <view class="info-item">
                        {{stoItem['Available for sale']}}
                    </view>
                </view>
            </view>
            <view class="public-info">
                <view class="info-left">
                    <!-- Total supply tokens: -->
                    {{ i18n["total-supply-tokens"] }}
                </view>
                <view class="right">
                    <view class="info-item">
                        {{stoItem['Total supply tokens']}}
                    </view>
                </view>
            </view>
        </view>

        <view class="backgroundStyle"></view>
        <view class="info">
            <view class="public-title">
                <!-- Fundraise Information -->
                {{ i18n["financial"] }}
            </view>
            <view class="public-info">
                <view class="info-left">
                    <!-- Minimum goal: -->
                    {{ i18n["min-goal"] }}
                </view>
                <view class="right">
                    <view class="info-item">
                        {{stoItem['Minimum goal']}}

                    </view>
                </view>
            </view>
            <view class="public-info">
                <view class="info-left">
                    <!-- Fundraising goal: -->
                    {{ i18n["fund-goal"] }}
                </view>
                <view class="right">
                    <view class="info-item">
                        		{{stoItem['Fundraising goal']}}
                    </view>
                </view>
            </view>
            <view class="public-info">
                <view class="info-left">
                    <!-- Min investment: -->
                    {{ i18n["min-invest"] }}

                </view>
                <view class="right">
                    <view class="info-item">
                        {{stoItem['Min investment']}}

                    </view>
                </view>
            </view>

            <view class="public-info">
               <view class="info-left">
                   <!-- Bonuses: -->
                   {{ i18n["bonuses"] }}
               </view>
               <view class="right">
                   <view class="info-item">
                       	{{stoItem['Bonuses']}}

                   </view>
               </view>
           </view>
        </view>
        <view class="backgroundStyle"></view>
        <view class="date-line" v-if="stoItem['milestones'] && Object.keys( this.stoItem['milestones'][0]).length">
            <view class="public-title">
                {{ i18n["milestones"] }}
                <!-- Milestones -->
            </view>
            <view class="date-view" ref="lessLine"  >
                <view class="date-view-box" v-for="(value,key,itemIndex) in computTimeLine" :key="itemIndex">
                    <view>
                        <!-- <view :class="item == 3 ? 'line-item': 'line-item line-style'"></view> -->
                        <view :class="itemIndex== 2 ? 'line-item' : 'line-item line-style' "></view>
                    </view>
                    <view class="date-view-right">
                        <view class="date-title">{{key}}</view>
                        <view class="date-desc">
                            {{value}}
                        </view>
                    </view>
                </view>
            </view>
            <view class="date-view display-none" ref="moreLine" >
                <view class="date-view-box" v-for="(value,key,itemIndex) in stoItem['milestones'][0]" :key="itemIndex">
                    <view>
                       <view :class="itemIndex== Object.keys(stoItem['milestones'][0]).length-1? 'line-item' : 'line-item line-style' "></view>
                    </view>
                    <view class="date-view-right">
                       <view class="date-title">{{key}}</view>
                       <view class="date-desc">
                           {{value}}
                       </view>
                    </view>
               </view>
            </view>
            <view class="button-style" v-if="stoItem['milestones'] && stoItem['milestones'].length">
                <view class="public-button" @click="handleLineMore" ref="lineMoreBut">
                {{ market["more"] }}
                </view>
            </view>
        </view>
        <view class="backgroundStyle"></view>
        <view class="team-member" v-if="stoItem['team members'] && stoItem['team members'].length " >
            <view class="public-title">
                <!-- Team members -->
                {{ i18n["team-member"] }}
                {{stoItem['team members'].length}}
            </view>
            <view ref="lessTeam">
                <view class="team-member-view"  v-for="(team,index) in computTeamMember" :key="index">
                    <view class="team-left">
                        <image class="team-left-image" :src="team['ImgURL']"></image>
                    </view>
                    <view class="team-right">
                        <view class="member-name">{{team['Name']}}</view>
                        <view class="member-position">{{team['Post']}}</view>
                    </view>
                </view>
            </view>
            <view ref="moreTeam" class="display-none">
                <view class="team-member-view"  v-for="(team,index) in stoItem['team members']" :key="index">
                    <view class="team-left">
                        <image class="team-left-image" :src="team['ImgURL']"></image>
                    </view>
                    <view class="team-right">
                        <view class="member-name">{{team['Name']}}</view>
                        <view class="member-position">{{team['Post']}}</view>
                    </view>
                </view>
            </view>
            <view class="button-style marginTop">
                <view class="public-button" @click="handleTeamMore" ref="teamMoreButton">
                    {{ market["more"] }}
                </view>
            </view>
        </view>
        <!-- <view class="follow-us">
            <view class="follow-title">Follow us</view>
            <view class="follow-icon-view">
                <view class="marginRight">
                    <icon class="iconfont icon-telegram" style="font-size: 28px;"></icon>
                </view>
                <view>
                    <icon class="iconfont icon-telegram" style="font-size: 28px;"></icon>
                </view>
            </view>
        </view> -->
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
    var util = require('@/common/util.js');
	export default {
		data() {

			return {
                showMore: false,
                showLineMore: false,
                showTeamMore: false,

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
        props:{
            stoItem: {
				type: Object
            }
        },
        components:{
            mpvuePicker
        },

        computed: {
            computTimeLine: function () {
                let obj = this.stoItem['milestones'][0];
                let newObj = {};
                Object.keys(obj).map((item, index)=>{
                    if(index < 3){
                        newObj[item] = obj[item]
                    }
                })
                return newObj
            },
            computTeamMember: function () {
                return this.stoItem['team members'].filter((item,index)=>{
                    return index < 4
                })
            },
            i18n() {
              return this.$t('sto-detail')
            },
            market(){
              return this.$t('market')
            }
        },


		methods: {
            handleTeamMore(){
                let showTeamMore = !this.showTeamMore;
                if(showTeamMore){
                    if( this.$i18n.locale == "zh-CN"){
                        this.$refs.teamMoreButton.$el.innerHTML = "收起";
                    } else{
                        this.$refs.teamMoreButton.$el.innerHTML = "collapse";
                    }
                    this.$refs.lessTeam.$el.style.display = "none";
                    this.$refs.moreTeam.$el.style.display = "block";
                } else{
                    if( this.$i18n.locale == "zh-CN"){
                        this.$refs.teamMoreButton.$el.innerHTML = "更多";
                    } else{
                        this.$refs.teamMoreButton.$el.innerHTML = "see more"
                    }
                    this.$refs.lessTeam.$el.style.display = "block";
                    this.$refs.moreTeam.$el.style.display = "none";
                }
                this.showTeamMore = showTeamMore;
            },

            handleClick(){
                let showMore = !this.showMore;
                if(showMore){
                    if( this.$i18n.locale == "zh-CN"){
                        this.$refs.readeMore.$el.innerHTML = "收起"
                    } else {
                        this.$refs.readeMore.$el.innerHTML = "collapse"
                    }
                    this.$refs.desc.$el.style.webkitLineClamp = "unset"
                } else{
                    this.$refs.desc.$el.style.webkitLineClamp = "6";
                    if( this.$i18n.locale == "zh-CN"){
                        this.$refs.readeMore.$el.innerHTML = "更多"
                    } else {
                        this.$refs.readeMore.$el.innerHTML = "reade more";
                    }
                }
                this.showMore = showMore;

            },
            handleLineMore(){
                let showLineMore = !this.showLineMore;

                if(showLineMore){
                    if( this.$i18n.locale == "zh-CN"){
                        this.$refs.lineMoreBut.$el.innerHTML = "收起";
                    } else{
                        this.$refs.lineMoreBut.$el.innerHTML = "collapse"
                    }
                    this.$refs.lessLine.$el.style.display = "none"
                    this.$refs.moreLine.$el.style.display = "block"

                } else{

                    if( this.$i18n.locale == "zh-CN"){
                        this.$refs.lineMoreBut.$el.innerHTML = "更多";
                    } else{
                        this.$refs.lineMoreBut.$el.innerHTML = "see more"
                    }

                    this.$refs.lessLine.$el.style.display = "block"
                    this.$refs.moreLine.$el.style.display = "none"

                }
                this.showLineMore = showLineMore;
            },

            setButtonInnerHtml(){
                console.log("ppppppppppppppppppp")
                if(this.$refs.teamMoreButton){
                    if(this.showTeamMore){
                        if( this.$i18n.locale == "zh-CN"){
                            this.$refs.teamMoreButton.$el.innerHTML = "收起";
                        } else{
                            this.$refs.teamMoreButton.$el.innerHTML = "collapse";
                        }
                    } else{
                        if( this.$i18n.locale == "zh-CN"){
                            this.$refs.teamMoreButton.$el.innerHTML = "更多";
                        } else{
                            this.$refs.teamMoreButton.$el.innerHTML = "see more"
                        }
                    }
                }
                if(this.$refs.readeMore){
                    if(this.showMore){
                        if( this.$i18n.locale == "zh-CN"){
                            this.$refs.readeMore.$el.innerHTML = "收起"
                        } else {
                            this.$refs.readeMore.$el.innerHTML = "collapse"
                        }
                    } else{
                        if( this.$i18n.locale == "zh-CN"){
                            this.$refs.readeMore.$el.innerHTML = "更多"
                        } else {
                            this.$refs.readeMore.$el.innerHTML = "reade more";
                        }
                    }
                }
                if(this.$refs.lineMoreBut){
                    if(this.showLineMore ){
                        if( this.$i18n.locale == "zh-CN"){
                            this.$refs.lineMoreBut.$el.innerHTML = "收起";
                        } else{
                            this.$refs.lineMoreBut.$el.innerHTML = "collapse"
                        }

                    } else{

                        if( this.$i18n.locale == "zh-CN"){
                            this.$refs.lineMoreBut.$el.innerHTML = "更多";
                        } else{
                            this.$refs.lineMoreBut.$el.innerHTML = "see more"
                        }

                    }
                }


            },

            // onCancel(){

            // },
            // 	// 单列
            // showSinglePicker() {
            //     this.mode = 'selector';
            //     this.deepLength = 1;
            //     this.pickerValueDefault = [0];
            //     this.$refs.mpvuePicker.show();
            // },

            // onConfirm(e) {
            //     this.$i18n.locale = e.value[0];
            //     this.setStyle(0, e.label);
            //     util.setTabBar(this.$i18n.locale,"ST 详情", "ST Detail")


            // },
            /**
                * 修改导航栏buttons
                * index[number] 修改的buttons 下标索引，最右边索引为0
                * text[string] 需要修改的text 内容
                */
            // setStyle(index, text) {
            // 	let pages = getCurrentPages();
            // 	let page = pages[pages.length - 1];
            // 	if (text.length > 3) {
            // 		text = text.substr(0, 3) + '...';
            // 	}
            // 	// #ifdef APP-PLUS
            // 	let currentWebview = page.$getAppWebview();
            // 	let titleNView = currentWebview.getStyle().titleNView;
            // 	// 添加文字过长截取为3个字符，请根据自己业务需求更改
            // 	titleNView.buttons[0].text = text;
            // 	currentWebview.setStyle({
            // 		titleNView: titleNView
            // 	});
            // 	// #endif
            // 	// #ifdef H5
            // 	// h5 临时方案
            // 	document.getElementsByClassName('uni-btn-icon')[1].innerText = text;
            // 	// #endif
            // },
            // onBackPress() {
            //     if (this.$refs.mpvuePicker.showPicker) {
            //         this.$refs.mpvuePicker.pickerCancel();
            //         return true;
            //     }
            // },
            // onUnload() {
            //     if (this.$refs.mpvuePicker.showPicker) {
            //         this.$refs.mpvuePicker.pickerCancel();
            //     }
            // },
            // onNavigationBarButtonTap(e) {
            //     if (e.index === 0) {
            //         this.showSinglePicker();
            //     }
            // }
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
        height: 130px;
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
        padding: 12px 0;
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
