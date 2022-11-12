// // router.js
// import {RouterMount,createRouter} from 'uni-simple-router';
// import store from './store'
// const router = createRouter({
// 	platform: process.env.VUE_APP_PLATFORM,  
// 	routes: [...ROUTES]
// });
// const whiteList = ['/pages/login/index' ,'/pages/home/index','/pages/home/area'] //免登录页面白名单 
// const loginRoutePath = '/pages/login/index' //登录页
// const defaultRoutePath = '/pages/home/index' //首页
// //全局路由前置守卫
// router.beforeEach((to, from, next) => {
// 	if(store.getters.token){//有token
// 		if(to.fullPath === loginRoutePath){
// 			next({ path: defaultRoutePath })
// 		}else{
// 			next()
// 		}
// 	}else{//无token
// 		if (whiteList.includes(to.fullPath)) {
// 			// 在免登录白名单，直接进入
// 			next()
// 		} else {
// 			next({ path: loginRoutePath})
// 		}
// 	}
// });
// // 全局路由后置守卫
// router.afterEach((to, from) => {
// })

// export {
// 	router,
// 	RouterMount
// }