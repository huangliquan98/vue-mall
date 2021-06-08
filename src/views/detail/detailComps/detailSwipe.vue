<template>
  <div class="detailSwipe">
    <van-swipe :autoplay="2000">
      <van-swipe-item v-for="(image, index) in topImages" :key="index">
        <a href.prevent="">
          <img :src="image"/>
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    name:'detailSwipe',
    props:{
      topImages:{
        type:Array,
      }
    },

  }
</script>

<style scoped>
  .detailSwipe{
    height: 300px;
    overflow: hidden;
    margin-top: 44px;
  }
  .detailSwipe img{
    width: 100%;
  }
</style>
