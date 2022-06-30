import axios from 'axios'
import {toast} from '@/assets/js/tool'
let requestTimes = 0; // 记录请求次数
//封装Request方法
export function request(params,showType=true){
	if(showType){
		var toast1=toast('加载中...','loading');
	}
	return new Promise(function (resolve,reject){
		requestTimes++
		axios({
			method: params.methods,
			url: params.url,
			headers:{"Content-type": params.ContentType?params.ContentType:'application/json'},
			responseType:params.responseType,
			data: params.data
		}).then(res => {
			if(res.status == '200'){
				resolve(res.data)
			}
		}).catch(err => {
			toast(err.message,'fail');
			reject(err)
		}).finally(()=>{
			requestTimes--
			if(requestTimes == 0){
				toast1.clear();
			}
		})
	})
}

