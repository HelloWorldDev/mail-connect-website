import configUrl from './configUrl'
const config = {}

//http根据不同打包命令执行不同请求域名得方式
// 1.本地代理  nginx跨域代理
// config.BASE_ONE = '/gsp'
// 2.直接使用.env.xxx对应文件里面定义得VUE_APP_XXX赋值得域名
// config.BASE_ONE = process.env.VUE_APP_BASE_URL
// console.log(process.env.VUE_APP_BASE_URL)
// 3.VUE_APP_XXX作为modeUrlObj对象得key
config.BASE_ONE = configUrl.base_url
console.log('base_url:',configUrl.base_url)
console.log('node_env:',configUrl.node_env)

export default config
