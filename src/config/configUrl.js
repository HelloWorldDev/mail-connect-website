// 打包不通的环境访问域名
const modeUrlObj = {
    // 正式环境
    'prod': {
      base_url: 'https://prod1:9991',  
      node_env:'prod'
    },
    //测试环境
    'test': {
      base_url: 'https://test1:9991', 
      node_env:'test'
    },
    //灰度环境
    'pre': {
      base_url: 'https://pre1:9991', 
      node_env:'pre'
    },
    // 本地环境
    'dev': {
      base_url: 'https://dev1:9991', 
      node_env:'dev'
    },
}
export default modeUrlObj[process.env.VUE_APP_TITLE]