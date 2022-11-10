<template>
	<view class="content">
		<view class="header">
			<view class="header_txt">
				<view>
					<text>您好,</text>
				</view>
				<view>
					<text>灵岛Meta欢迎您</text>
				</view>
			</view>
		</view>
		<view class="formBox">
			<view class="form_login">
				<uni-forms :value="formData" label-align="right" ref="form" :rules="rules">
					<view class="form_list">
						<view class="list_input">
							<uni-forms-item label="" name="acount">
								<uni-easyinput :clearable='isCleara' type="text" autocomplete="new-password"
									v-model="formData.acount" placeholder="请输入手机号" />
							</uni-forms-item>
						</view>
					</view>
					<view class="form_list">
						<view class="list_input">
							<uni-forms-item label="" name="code">
								<uni-easyinput :clearable='isCleara' type="text" autocomplete="new-password"
									v-model="formData.code" placeholder="请输入验证码" />
							</uni-forms-item>
						</view>
						<view @click="invitation" class="list_but">
							获取
						</view>
					</view>
					<view class="form_list">
						<view class="list_input">
							<uni-forms-item label="">
								<uni-easyinput :clearable='isCleara' type="text" autocomplete="new-password"
									v-model="formData.Invitation" placeholder="请输入邀请码 (选填)" />
							</uni-forms-item>
						</view>
					</view>
					<button @click="submitForm" type="default" class="form_btn" :class="isLogin?'sure_login':''"
						:loading="canAction" :disabled="canAction">登录</button>
					<view class="form_register">
						未注册的手机号验证后可自动登录
					</view>
				</uni-forms>
			</view>
		</view>
	</view>

</template>
<script>
	import {
		generateCode,
		registerAndLogin
	} from '../../static/api/index.js'
	export default {
		data() {
			return {
				isLogin: false, //是否可以登录
				isCleara: false, //是否去除表单清空按钮
				canAction: false, //是否加载中
				formData: {
					acount: '18018747260',
					code: '',
					Invitation: ''
				},
				rules: {
					acount: {
						rules: [{
							required: true,
							errorMessage: ' ',
						}]
					},
					code: {
						rules: [{
							required: true,
							errorMessage: ' ',
						}]
					},
				}
			}
		},
		onLoad() {},
		methods: {
			// 获取验证码
			invitation() {
				let temp = {
					phone: this.formData.acount
				}
				generateCode(temp).then(res => {
				}).catch(err => {
					console.log(err)
				})
			},
			// 登录
			 submitForm() {
				this.$refs.form.validate().then( async res=>{
					this.canAction = true
					let temp = {
							userPhone: this.formData.acount,
							verifyCode: this.formData.code,
							userInviteCode: this.formData.Invitation
					}
					let loginRes = await registerAndLogin(temp)
					//设置token;
					this.$store.commit('app/SET_TOKEN', loginRes.token)
					this.$Router.pushTab({
						path: '/pages/home/index'
					})
					this.canAction = false
				  }).catch(err => {
				  	console.log(err)
				  	uni.showToast({
				  		title:err.data.Message,
				  		icon:'none',
				  		duration:2000
				  	})
				  	this.canAction = false
				  })
			}
		},
		watch: {
			'formData.acount': {
				handler(newValue) {
					if (this.formData.code != '' && this.formData.acount != '') {
						this.isLogin = true
					} else {
						this.isLogin = false
					}
				}
			},
			'formData.code': {
				handler(newValue) {
					if (this.formData.code != '' && this.formData.acount != '') {
						this.isLogin = true
					} else {
						this.isLogin = false
					}
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	.content {
		height: 100vh;
		background: url('~@/static/image/background/loginback.png');
		background-size: 100% auto;

		.header {
			box-sizing: border-box;
			width: 100vw;
			height: 396rpx;
			font-size: 30px;
			font-weight: 700;
			padding: 200rpx 0 0 36rpx;
		}

		::v-deep .formBox {
			width: 100vw;

			.form_login {
				padding: 54px 36rpx 0 36rpx;

				.form_list {
					position: relative;

					.list_input {
						.uni-easyinput__content-input {
							height: 88rpx;
						}
						.uni-forms-item {
							margin-bottom: 40rpx
						}
						.uni-forms-item__inner {
							padding: 0;
						}

						.is-input-border {
							border: 0;
							border-radius: 16rpx;
						}

					}

					.list_but {
						width: 120rpx;
						height: 88rpx;
						position: absolute;
						top: 0;
						right: 0;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 14px;
					}
				}

				.form_btn {
					margin-top: 70px;
					color: #ABAAB8;
					height: 44px;
					font-size: 16px;
					background: #E5E5EA;
					border: 0;

				}

				.sure_login {
					background: #2F3240;
					color: #fff;
				}

				uni-button:after {
					border: 0;
				}

				.form_register {
					color: #ABAAB8;
					font-size: 12px;
					text-align: center;
					margin-top: 20rpx;
				}
			}
		}

	}
</style>
