import { request } from "@/config/asyncRequest.js"
import config from '@/config/config.js'

export function connectRequest(data){ 
	return request({
		url: config.BASE_ONE + '/supe/list',
		methods: 'get',
		data
	}).then(res => res) 
}