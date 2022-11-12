import request from '../utils/request.js' 
// import init from '../utils/init.js' 
//  发送验证码
export function generateCode(data){
	return request({
		url: 'generateCode.do',
		method: 'GET',
		data
	})
}
// 注册登录
export function registerAndLogin(data){
	return request({
		url: 'registerAndLogin.do',
		method: 'POST',
		data
	})
}

// 综合栏列表
export function allofficial(data){
	return request({
		url: 'home/official/list.do',
		method: 'POST',
		data
	})
}