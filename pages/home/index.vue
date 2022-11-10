<template>
	<view class="content">
		<view class="header">
			<view class="logo">
				<image src="../../static/image/home/logo.png" mode=""></image>
			</view>
			<view class="textLogo">
				<image src="../../static/image/home/textLogo.png" mode=""></image>
			</view>
			<view class="search">
				<uni-easyinput  prefixIcon="search" v-model="value" placeholder="搜索" @iconClick="iconSearch" >
				</uni-easyinput>	
				</view>
		</view>
		
		<view class="community">
			<view class="community_box">
				<view class="community_area">
					<view class="area_item area_official">
						<image src="../../static/image/home/official.png" mode="" class="item_icon"></image>
						<text class="item_text">官方公告</text>
					</view>
					<view class="area_item area_cooperation">
						<image src="../../static/image/home/cooperation.png" mode="" class="item_icon"></image>
						<text class="item_text">合作专区</text>
					</view>
					<view class="area_item area_golden">
						<image src="../../static/image/home/golden.png" mode="" class="item_icon"></image>
						<text class="item_text">金豆专区</text>
					</view>
				</view>
				<view class="community_group">
					官方
				</view>
			</view>
		</view>
		<view class="activity"></view>
		<view class="exhibition"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			// 搜索
			iconSearch(){
				console.log(11)
			}
		}
	}
</script>

<style lang="less" scoped>
	.content{
		box-sizing: border-box;
		background: #FAFAFC;
		height: 100vh;
		.header{
			padding: 0 36rpx;
			background: #FFFFFF;
			height: 104rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.logo{
				display: flex;
				width:64rpx ;
				height: 64rpx;
			}
			.textLogo{
				display: flex;
				width:150rpx ;
				height: 28rpx;
				
			}
			::v-deep .search{
				width: 424rpx;
				height: 70rpx;
				// background: #767680;
				.is-input-border {
					border: 0;
					border-radius: 16rpx;
					 background: #efeff0 !important;
				}
				.uniui-search{
					color: #8e8e93 !important;
				}
			}
			image{
				width: 100%;
				height: 100%;
			}
		}
		.community{
			padding: 14rpx 40rpx 20rpx 40rpx;
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
			}
		}
	}
</style>
