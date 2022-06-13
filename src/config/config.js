import configUrl from './configUrl'
const config = {}

//http根据不同打包命令执行不同请求域名得方式
// 1.本地代理  nginx跨域代理
// config.BASE_ONE = '/gsp'
// 2.直接使用.env.xxx对应文件里面定义得VUE_APP_XXX赋值得域名
config.BASE_ONE = process.env.VUE_APP_BASE_URL
console.log(process.env.VUE_APP_BASE_URL)
// 3.VUE_APP_XXX作为modeUrlObj对象得key
config.base_url = configUrl.base_url
console.log(configUrl.base_url)


//http的header添加的省市区编码
// 北京
// config['beijing']={
//     UserProvinceName:"%E5%8C%97%E4%BA%AC%E5%B8%82",
//     UserProvinceCode:"110000",
//     UserCityName:"%E5%B8%82%E8%BE%96%E5%8C%BA",
//     UserCityCode:"110100",
//     UserCountyName:"%E5%A4%A7%E5%85%B4%E5%8C%BA",
//     UserCountyCode:"110115",
// }

// config.androidBody = {
//   "body": {
//     "code": {},
//     "content": {},
//     "param": {},
//     "synCode": ""
//   },
//   "header": {
//     "doctorMainId": "1403183336583057409",
//     "adminId": "1403183336583057409",
//     "clinicId": "ff808081639701d30163b037445e0b55",
//     "sign": "1f864614edd52b5331b8e3052ea14a2b",
//     "appCode": "PHARMACY_CLOUD",
//     "userToken": "202106111206186393n5ogxq",
//     "isAdmin": false,
//     "currVersion": "V_0.1",
//     "v": "1.4.0",
//     "osType": "2",
//     "imei": "TC07P07V40255",
//     "currentTime": 1623390126629,
//     "userName": "李可心",
//     "type": "A0201"
//   },
// }

// config.newAndroidBody = {
//   "header": {
//     "doctorMainId": "2c92e02a6f0de8620170f0703e8a1733",
//     "adminId": "2c92e02a6f0de8620170f0703e8a1733",
//     "sign": "eda43189d881efd8cc785dfdb59da63c",
//     "clinicId": "d7259cc935454f78bc69f0edc5496068",
//     "appCode": "PHARMACY_CLOUD",
//     "userToken": "20201124023131956jt6pzv4",
//     "isAdmin": false,
//     "currVersion": "V_0.1",
//     "v": "1.3.5",
//     "osType": "2",
//     "imei": "T219185V00002",
//     "currentTime": 1606359021004,
//     "userName": "王锐",
//     "type": "A0201"
//   },
// }


export default config
