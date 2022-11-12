<template>
	<!-- 综合公告组件 -->
	<view class="all_area">
		
	</view>
</template>

<script>
	import {allofficial} from '../static/api/index.js'
	export default {
		data() {
			return {
				
			};
		},
		mounted() {
			// console.log(1)
			this.getTableData()
		},
		methods:{
			getTableData(){
				console.log(1)
				allofficial({}).then(res=>{
					console.log(res,'aaa')
				}).catch(err=>{
					console.log(err)
				})
			}
		}
		
	}
</script>

<style  lang="less" scoped>
	.all_area{
		background: pink;
	}
</style>