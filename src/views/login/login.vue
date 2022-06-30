<template>
  <div class="home">
    <img class="close" :src="close">
    <game-login-image v-show="status === 0 || status === 1" :animalShow="false"></game-login-image>
    <game-login-content :option="dialogOption" @connectLogin="connectLogin">
        <component :contentOption="contentOption" :is="currentName"></component> 
    </game-login-content>
  </div>
</template>

<script>
import gameLoginRegister from '@/components/gameLoginRegister/gameLoginRegister.vue'//登录dialog中的表单
import gameLoginImage from '@/components/gameLoginImage/gameLoginImage.vue'//logo组合
import gameLoginContent from '@/components/gameLoginContent/gameLoginContent.vue'//登录dialog
import gameLoginSuccess from '@/components/gameLoginSuccess/gameLoginSuccess.vue'//登录成功
import gameLoginAuthorize from '@/components/gameLoginAuthorize/gameLoginAuthorize.vue'//登录成功后授权信息
//图片
import close from "@/assets/images/close.png"

import {connectRequest} from "@/api/serviceLogin"
export default {
  name: 'login',
  data () {
    let statusMap={//登录页得全局json对象
      0:{"title":"注册GAME邮箱","name":'gameLoginRegister'},
      1:{"title":"Game邮箱登录","name":'gameLoginRegister'},
      2:{"title":"恭喜您，开通成功！","name":'gameLoginSuccess'},
      3:{"title":"Game.com开放世界！","name":'gameLoginAuthorize'},
    }
    return{
      currentRate: 0,
      close:close,
      statusMap:statusMap,//json对象
      status:1,//就是statusMap的key，通过这个key表示slot中是否显示footer部分的提示
      currentName:"",//当前展示的组件名称
      dialogOption:{"title":"","status":""},//类似dialog这个组件的title标题和status
      contentOption:{}//内容区域的所有组件都使用这一个对象，挑选自己需要的属性
    }
  },
   computed: {
    text() {
      return this.currentRate.toFixed(0) + '%';
    },
  },
  components: {
    gameLoginContent,
    gameLoginImage,
    gameLoginRegister,
    gameLoginSuccess,
    gameLoginAuthorize,
  },
  created(){
    this.inintData()
  },
  mounted(){
    let param={
      a:'1',
      b:'2'
    }
    connectRequest(param).then((res)=>{
      
    })
  },
  methods:{
    inintData(){
      //添加标题，和footer部分的提示显示
      this.dialogOption={"title":this.statusMap[this.status].title,"status":this.status};
      //展示当前的组件的名字
      this.currentName = this.statusMap[this.status].name;
      switch (this.status) {
        case 0 || 1://注册和登录组件需要status状态
          this.$set(this.contentOption,'status',this.status)
          break;
        case 2://开通成功需要email账号
          this.contentOption['email'] = '6688888@game.com';
          break;
        case 3://授权账户名
          this.contentOption['name'] = 'xxxxx';
          break;
        default:
          break;
      }
    },
    connectLogin(){
      // 根据store中表单的输入内容，在这个事件中调用连接的接口，
      // 根据返回的连接状态到下一步“恭喜你，开通成功”，在调用这个同一个事件，调用接口返回到下一步
        // let loginRegisterInfo = this.$store.getters.getLoginRegisterInfo;
        // console.log(loginRegisterInfo)
        setTimeout(() => {//用setTimeout模拟接口异步返回
            // 根据返回的状态码/标志位，只需要改变status的值
            this.status = this.status + 1;
            this.inintData();
        }, 0);
    },
    changeComponentStatus(type){//免费注册和去登陆得切换
      if(type == 'sign'){
        this.status = 0;
      }else{
        this.status = 1;
      }
      this.dialogOption={"title":this.statusMap[this.status].title,"status":this.status};
      this.$set(this.contentOption,'status',this.status)
    }
  }
}
</script>
<style lang="less" scoped>
@import './login.less';
</style>
