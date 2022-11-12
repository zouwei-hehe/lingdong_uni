<template>
	<view class="content">
		<view class="egmented_warp">
			<view class="egmented">
				<view @click="checkNotice(index)" class="egmented_item" :class="current==index?'item_check':''" v-for="(item,index) in noticeType" :key="index">{{item.title}}</view>
			</view>
		</view>
		<view class="notice">
			<AllArea v-if="current==0"></AllArea>
			<OtherArea v-if="current!=0"></OtherArea>
			
		</view>
	</view>
</template>

<script>
	import AllArea from '../../components/allArea.vue'
	import OtherArea from '../../components/otherArea.vue'
	
	export default {
		
		data() {
			return {
				noticeType: [
					{title:'综合',id:1},
					{title:'上新公告',id:2},
					{title:'合成公告',id:3},
					{title:'空头公告',id:4},
					{title:'活动公告',id:5}
					],
				current: 0,
				activeColor: '#007aff',
				styleType: 'button'
			}
		},
		methods: {
			checkNotice(arg){
				this.current = arg
				// console.log(arg)
			}
		},
		components: {
			AllArea,
			OtherArea
			}
	}
</script>

<style lang="scss" scoped>
.content{
	background: #FAFAFC;
	.egmented_warp{
		margin-bottom: 20rpx;
		background: #FFFFFF;
		box-sizing: border-box;
		width: 750rpx;
		overflow-x: scroll;
		padding: 10rpx 10rpx ;
		border-bottom: 1px solid #E5E5EA;
		-ms-overflow-style: none;
		overflow: -moz-scrollbars-none;
		.egmented{
			width: 840rpx;
			display: flex;
			justify-content: space-between;
			.egmented_item{
				padding:12rpx 20rpx;
				color: #8E8E93;
			}
			.item_check{
				background: url('~@/static/image/notice/check.png');
				background-size: 100% 100%;
				color: #2F3240;
				font-weight: 700;
			}
		}
		
	}
	.egmented_warp::-webkit-scrollbar { width: 0 !important }
	
}
	
</style>
