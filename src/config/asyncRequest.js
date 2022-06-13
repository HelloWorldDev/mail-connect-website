import axios from 'axios'
// import { Loading,Message } from "element-ui";
let preventRepeatLocation = true; // 预防一个页面，并发多个请求，多次跳往登录页。记录状态用
//封装Request方法
export function request(params){
	return new Promise(function (resolve,reject){
		// const {...rest} = params.data;
		// let loadingInstance = Loading.service({
		// 	fullscreen: true,
		// 	background: "rgba(25,25,25,0.5)"
		// });
		axios({
			method: params.methods,
			url: params.url,
			headers: {
				"Content-type": params.ContentType?params.ContentType:'application/json'
			},
			responseType:params.responseType,
			data: params.data
		}).then(res => {
			// loadingInstance.close();
			// if(preventRepeatLocation && res.status == '200'){
			// 	if(res.data.code == '401'){
			// 		document.location.href = '#/login';
			// 	}else{
					resolve(res.data)
			// 	}
			// }
		}).catch(err => {
			// loadingInstance.close();
			// Message({
			// 	message: err
			// });
			reject(err)
		})
	})
}

