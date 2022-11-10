import store from '../../store'
function request(obj) {
	const baseURL = 'http://192.168.2.135:9000/lindaoMeta/' //测试  
  return new Promise((resolve, reject) => {
		let header = {  
			'content-type': obj.contentType || 'application/json;charset=UTF-8',
			'Token':store.getters.token || ''
		};
		uni.request({
			url: baseURL + obj.url || "",
			data: obj.data || {},
			method: "GET",
			method: obj.method || "GET",
			success: ((res) => {
				//状态返回成功
				if(res.statusCode === 200){
					resolve(res.data)
				}else{
					//提示失败
					// uni.showToast({icon:'none',title: res.data.message})
					reject(res)
				}
			}),
			fail: ((err) => {
				reject(err)
			})
		})
  })
}
export default request