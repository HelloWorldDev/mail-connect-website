<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import '@/assets/less/global.less';
//在这里控制rem基准值，切换到pc端得时候设置基准值不变
@media (min-width:@screen-md-min) {
  html{
    font-size: 37.5px!important;
  }
}
#app {
  font-family: PingFang SC,Hiragino Sans GB,Heiti SC,Microsoft YaHei,WenQuanYi Micro Hei,Helvetica,Arial,monospace,serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:rgba(0, 0, 0, 0.75);
}
</style>
