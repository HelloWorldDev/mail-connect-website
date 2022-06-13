<template>
  <div class="container" :class="{'containerSuccess':option.status !== 0 && option.status !== 1}">
    <div class="header">{{option.title}}</div>

    <slot>登录组件内容不显示的时候显示此内容</slot>

    <div class="footer" :class="{'loginSuccess':option.status !== 0 && option.status !== 1}">
      <button @click="connect" type="button">立即连接</button>
      <div class="terms" v-if="option.status == 1">还没有邮箱？<span @click="jumpto('sign')">免费注册</span></div>
      <div class="terms" v-if="option.status == 0">已有邮箱？<span @click="jumpto('login')">去登录</span></div>
    </div>
  </div>
</template>
<!-- 给按钮添加click事件，通过$emit像父组件发送事件名，在父组件中监听这个事件，然后在父组件执行这个事件。
根据store中表单的输入内容，在这个事件中调用连接的接口，
根据返回的连接状态到下一步“恭喜你，开通成功”，在调用这个同一个事件，调用接口返回到下一步 -->

<script>
export default {
  name: 'gameLoginContent',
  props: {
    option:Object,
  },
  data(){
    return{
    }
  },
  mounted(){
  },
  methods:{
    connect(){
      this.$emit('connectLogin')
    },
    jumpto(type){
        this.$parent.changeComponentStatus(type);
    }
  }
}
</script>

<style scoped lang="less">
@import './gameLoginContent.less';
</style>
