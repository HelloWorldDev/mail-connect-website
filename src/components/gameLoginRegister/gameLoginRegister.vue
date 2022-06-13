<template>
  <div class="content" :class="{'regionContent':!contentOption.status}">
    <div :class="{'contentRound':!contentOption.status}">
        <div class="username-region">
          <input class="inputpart" @input="changeInputValue($event,'address')" 
          v-model="registerInfo.address" placeholder="请输入邮箱地址" type="text"/>
          <span class="tempart">@game.com</span>
          <span class="message">账号已存在</span>
        </div>
        <div class="password-region">
          <input class="inputpart" @input="changeInputValue($event,'password')" 
          v-model="registerInfo.password" placeholder="请输入密码" type="password"/>
          <img :src="noSee">
        </div>
        <div class="surePassword-region" v-if="!contentOption.status">
          <input class="inputpart" @input="changeInputValue($event,'surePassword')" 
          v-model="registerInfo.surePassword" placeholder="请再次输入密码" type="password"/>
          <img :src="noSee">
        </div>
    </div>
  </div>
</template>

<!-- 给输入框添加change事件，将修改的数据registerInfo对象添加到store中，
在其他组件中通过store获取，整个流程结束要把store中的registerInfo对象清空 -->

<script>
import noSee from "@/assets/images/noSee.png"
export default {
  name: 'gameLoginRegister',
  props: ['contentOption'],
  data(){
    return{
      noSee:noSee,
      registerInfo:{
        address:'',
        password:'',
        surePassword:''
      }
    }
  },
  methods:{
    changeInputValue(e,type){//输入框input事件
      let value = e.target.value;
      this.registerInfo[type] = value;
      this.$store.dispatch("setLoginRegisterInfo", this.registerInfo);
    }
  }
}
</script>

<style scoped lang="less">
@import './gameLoginRegister.less';
</style>
