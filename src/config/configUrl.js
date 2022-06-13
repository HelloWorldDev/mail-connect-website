// 打包不通的环境访问域名
const modeUrlObj = {
    // 正式环境
    'prod': {
      base_url: 'https://prod1:9991',  
    },
    //测试环境
    'test': {
      base_url: 'http://test1:9991', 
    },
    //灰度环境
    'pre': {
      base_url: 'http://pre1:9991', 
    },
    // 本地环境
    'dev': {
      base_url: 'http://dev1:9991', 
    },
}
export default modeUrlObj[process.env.VUE_APP_TITLE]