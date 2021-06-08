<template>
  <div class="carts">
    <van-grid :border="false" :column-num="4" class="carts-image">
      <van-grid-item v-for="(image, index) in recommend" :key="index">
          <van-image :src="image.image" />
          <div>{{image.title}}</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
  export default {
    name:'carts',
    props:{
      recommend:{
        type:Array
      }
    },
    created(){
      // console.log(this.recommond)
    }

  }
</script>

<style>
 .carts{
    font-size: 14px;
    text-align: center;
    border-bottom: 10px solid #eee;
  }
 /* .carts-image{
    flex: 1;
  } */
</style>
