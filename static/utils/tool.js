//获取url参数
export function getQueryString(url,name) {
	try{
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		let tempUrl = url.split('?')[1]
		var r = tempUrl.match(reg);
		if (r != null) return unescape(r[2]); return null; 
	}catch(e){
		return ''
	}
}

