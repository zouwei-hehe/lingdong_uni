<template>
	<!-- 活动组件 -->
	<view class="activity">
		<view class="activity_type">
			<view class="type_item" v-for="(item,index) in activityType " :key="index">
				<view class="item_icon">
					<image class="" :src="item.img"   mode=""></image>
				</view>
				<view class="item_title">
					<text class="title_scale">{{item.title}}</text>
				</view>
			    
			</view>
		</view>
		<view class="exhibition_shop">
			<view class="shop" v-for="(item,index) in shopData" :key="index">
				<view class="shop_img">
					<image :src="item.img" mode=""></image>
				</view>
				<view class="shop_details">
					<text class="details_name">{{item.name}}</text>
					<view class="details_title">
						<text class="title_unit">¥</text>
						<text class="title_price">{{item.price}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activityType:[
					{img:'../../static/image/home/welfare.png',title:'新人福利'},
					{img:'../../static/image/home/luck.png',title:'抽奖专区'},
					{img:'../../static/image/home/exchange.png',title:'兑换专区'},
					{img:'../../static/image/home/update.png',title:'拉新活动'},
					{img:'../../static/image/home/synthesis.png',title:'合成专区'}
				],
				shopData:[
					{img:'../../static/image/home/shopDog.png',name:'火焰灵犬',price:'50'},
					{img:'../../static/image/home/shopDog.png',name:'火焰灵犬',price:'50'},
					
				]
			};
		}
	}
</script>

<style  lang="less" scoped>
	.activity{
		height: calc(100vh - 460rpx);
		overflow-x: hidden;
		overflow-y:scroll ;
		list-style-type: none;
		.activity_type{
			display: flex;
			justify-content: space-between;
			padding: 24rpx 40rpx 30rpx 40rpx;
			.type_item{
				flex: 0;
				display: flex;
				flex-wrap:wrap;
				justify-content: center;
				.item_icon{
					width: 82rpx;
					height: 82rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.item_title{
					color: #2F3240;
					display: flex;
					font-size: 12px;
					width: 96rpx;
					transform: scale(0.8333333333333333);
				}
			}
		}
		.exhibition_shop{
			padding: 0 24rpx;
			.shop{
				border: 1px solid #e0e0e0;
				border-radius: 16rpx;
				.shop_img{
					width: 702rpx;
					height: 702rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 16rpx;
					}
				}
			}
			.shop_details{
				display: flex;
				justify-content: space-between;
				padding: 24rpx 20rpx;
				color: #2F3240 ;
				font-weight: 700;
			}
		}
		
	}
	.activity::-webkit-scrollbar { width: 0 !important }
</style>