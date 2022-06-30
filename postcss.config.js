module.exports = {
    plugins: {
      'postcss-pxtorem': {
          rootValue: 37.5, // 设计稿是375可以写37.5,750的设计稿可以写75,
          propList: ['*'], // 设置哪些属性可以从px变为rem。"*"表示所有都匹配，"!"表示不匹配，"!font*"表示不匹配字体相关属性
          exclude: /App/i //不包含APP.vue文件
      }
    }
  }