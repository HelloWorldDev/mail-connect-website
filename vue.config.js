const {defineConfig} = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './',
  parallel:false,
  runtimeCompiler: true,
  outputDir: 'dist',
  productionSourceMap: false,
  css: { // 配置高于chainWebpack中关于css loader的配置
    extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
    sourceMap: false, // 是否在构建样式地图，false将提高构建速度
    loaderOptions: {} // css预设器配置项
  },
  configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
        // 为生产环境修改配置...
          //externals里的模块不打包
          Object.assign(config, {
            externals: {
              'vue': 'Vue',
              'vuex': 'Vuex',
              'axios': 'axios',
              'vue-router': 'VueRouter',
          }
          })
      } else {
        // 为开发环境修改配置...暂时不需要
      }
  },
  chainWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
          // 生产环境下注入一个变量cdn 变量可以在html中通过htmlWebpackPlugin.options进行获取 
          config.plugin('html')
              .tap(args => {
                  args[0].cdn = 'prod';
                  return args;
              })
      }
  },
  devServer: {
    proxy: {
      '/gsp': {
        target: 'http://www.baidu.com/',
        changeOrigin: true,
        ws:true,
        pathRewrite: {
          '^/gsp': ''
        }
      }
    },
    allowedHosts: "all",
  },
})
