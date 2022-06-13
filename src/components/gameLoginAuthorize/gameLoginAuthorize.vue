<template>
  <div class="content">
    <div class="top">您即将进入<span>{{contentOption.name}}</span>，在使用前您必须授权同意连接您的账户。</div>
    <div class="mid">
        <img :src="authorize">
        <div class="mid-introduct">
          <span>HAPPY 元宇宙</span>
          <span>应用简介：捏饭团，Game.com为文娱行业打造的NFT收藏平台，将来自全球的你所喜爱的NFT收入囊中。</span>
        </div>
    </div>
    <div class="bot">
      <span>获取我的账户信息（用户名、头像）</span>
      <span>获取我的NFT资产信息</span>
      <span>获取我的代币资产信息</span>
    </div>
  </div>
</template>

<script>
import authorize from "@/assets/images/authorize.png"
export default {
  name: 'gameLoginSuccess',
  props: ['contentOption'],
  data(){
    return{
      authorize:authorize,
    }
  },
}
</script>

<style scoped lang="less">
@import './gameLoginAuthorize.less';
</style>
