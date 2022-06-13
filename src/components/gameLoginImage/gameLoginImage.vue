<template>
  <div class="contentLogol">
    <img :src="gameLogol">
    <span>快乐游戏 惊喜打金！</span>
    <!-- <img :src="gameAnimal" v-show="animalShow"> -->
    <img :src="gameAnimal">
  </div>
</template>

<script>
import gameLogol from "@/assets/images/gameLogol.png"
import gameAnimal from "@/assets/images/gameAnimal.png"
export default {
  name: 'gameLoginImage',
  props: {
    // animalShow: {
    //   type: Boolean,
    //   default:false
    // }
  },
  data(){
    return{
      gameLogol:gameLogol,
      gameAnimal:gameAnimal
    }
  }
}
</script>

<style scoped lang="less">
@import './gameLoginImage.less';
</style>
