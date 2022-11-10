import { getToken, setToken, removeToken } from '../../static/utils/token.js'
import {GetAccount} from '../../static/api/index.js'
const app = {
  state: {
    token: getToken() === undefined ? '' : getToken(), // 用户token
		userInfo:{} //用户信息
  },
  mutations: {
    // 设置token
    SET_TOKEN (state, value) {
        state.token = value
		setToken(value)
    },
	//设置用户信息
	SET_USERINFO(state, value) {
        state.userInfo = value
    },
    // 退出登录
    SIGN_OUT (state) {
        state.token = ''
		state.userInfo={}
		removeToken()
    },
  },
  actions: {
		// 获取用户信息
		GetInfo ({ commit }) {
			return new Promise((resolve, reject) => {
				GetAccount().then(response => {
					const result = response.Tag
					commit('SET_USERINFO',result)
					resolve(response)
				}).catch(error => {
					reject(error)
				})
			})
		},
	},
  namespaced: true
}
export default app

