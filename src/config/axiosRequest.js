import axios from 'axios'

// 使用由库提供的配置的默认值来创建实例，配置的默认值将与实例的配置合并
const service = axios.create({
  headers: { 'Content-Type': 'application/json' }
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 响应拦截器
service.interceptors.response.use(
  response => {
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
