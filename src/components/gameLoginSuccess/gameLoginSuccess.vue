<template>
  <div class="content">
    <img class="img-animal" :src="gameAnimal">
    <div class="info">
      <span class="info-title">您已成功开通以下电子邮箱</span>
      <span class="info-email">{{contentOption.email}}</span>
    </div>
  </div>
</template>

<script>
import gameAnimal from "@/assets/images/gameAnimal.png"
import blackboard from "@/assets/images/blackboard.png"
export default {
  name: 'gameLoginSuccess',
  props: ['contentOption'],
  data(){
    return{
      gameAnimal:gameAnimal,
      blackboard:blackboard
    }
  },
}
</script>

<style scoped lang="less">
@import './gameLoginSuccess.less';
</style>
