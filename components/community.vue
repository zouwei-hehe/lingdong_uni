<template>
	<!-- 专区组件 -->
	<view class="community">
		<view class="community_box">
			<view class="community_area">
				<view class="area_item area_official" @click="official">
					<image src="@/static/image/home/official.png" mode="" class="item_icon"></image>
					<text class="item_text">官方公告</text>
				</view>
				<view class="area_item area_cooperation">
					<image src="@/static/image/home/cooperation.png" mode="" class="item_icon"></image>
					<text class="item_text">合作专区</text>
				</view>
				<view class="area_item area_golden">
					<image src="@/static/image/home/golden.png" mode="" class="item_icon"></image>
					<text class="item_text">金豆专区</text>
				</view>
			</view>
			<view class="community_group">
				<image src="@/static/image/home/notice.png" mode="" class="group_icon"></image>
				<text class="group_text">加入灵岛Meta官方社区群</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			official(){
				this.$Router.push({
					path:'/pages/home/area',
				})
			}
		}
		
	}
</script>

<style  lang="less" scoped>
	.community{
		
		padding: 14rpx 40rpx 20rpx 40rpx;
		background: #FAFAFC;
		.community_box{
			background: #FFFFFF;
			.community_area{
				display: flex;
				padding: 20rpx;
				justify-content: space-between;
				.area_official{
					background: url('~@/static/image/home/officialBack.png');
				}
				.area_cooperation{
					background: url('~@/static/image/home/cooperationBack.png');
				}.area_golden{
					background: url('~@/static/image/home/goldenBack.png');
				}
				.area_item{
					box-sizing: border-box;
					background-size: 100% auto;
					height: 88rpx;
					width: 198rpx;
					border-radius:16rpx ;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 20rpx;
					.item_icon{
						width: 48rpx;
						height: 48rpx;
					}
					.item_text{
						font-size: 12px;
						color: #FFFFFF;
						
					}
				}
			}
		    .community_group{
				padding: 4rpx 0 24rpx 12rpx;
				display: flex;
			
				.group_icon{
					width: 36rpx;
					height: 36rpx;
					margin-right: 12rpx;
					
				}
				.group_text{
					color: #2F3240;
					font-size: 12rpx;
				}
				
			}
		}
	}
</style>