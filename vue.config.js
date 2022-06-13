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
