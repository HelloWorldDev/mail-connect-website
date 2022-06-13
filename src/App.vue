<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import '@/assets/less/global.less';
//在这里控制rem基准值，在大于@screen-xs-min得时候设置基准值不变，防止一直放大
@media (min-width:@screen-xs-min) {
  html{
    font-size: 37.5px!important;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
