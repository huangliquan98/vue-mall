<template>
  <div class="swipe">
    <van-swipe :autoplay="2000">
      <van-swipe-item v-for="(image, index) in bannars" :key="index">
          <img :src="image.image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    name:'swipe',
    props:{
      bannars:{
        type:Array,
        default(){
          return []
        }
      }
    },
     data() {
        return {
        };
      },
      created(){
        // console.log(this.bannars)
      }
  }
</script>

<style>
  .swipe{
    /* width: 100%; */
  }
  .swipe img{
    width: 100%;
  }
</style>
