import App from './App'
import store from './store'
import {router,RouterMount} from './router.js' 
// #ifndef VUE3
// 除vue3环境
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'
Vue.use(router)
const app = new Vue({
	store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
// 只有vue3环境
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  Vue.use(router)
  return {
    app
  }
}
// #endif
// #ifdef H5
	RouterMount(app,router,'#app')
// #endif
// #ifndef H5
	app.$mount(); 
// #endif