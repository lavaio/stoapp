<template>
	<view>
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

         <tabOverview v-if="currentTabId== 'overview'"></tabOverview>

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
			}
		},
		methods: {
            handleTab(e){
                console.log(e.target)
                this.currentTabId = e.target.id;

            },
            
		}
	}
</script>

<style>

</style>
