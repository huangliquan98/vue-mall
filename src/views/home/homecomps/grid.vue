<template>
  <div class="grid">
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="(item,id) in images" :key="id">
        <van-image :src="item.image" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
  export default {
    name:'grid',
    data(){
      return {
        images:[{
          id:1,
          image:"https://img.yzcdn.cn/vant/apple-1.jpg"
        },{
          id:2,
          image:"https://img.yzcdn.cn/vant/apple-2.jpg"
        },{
          id:3,
          image:"https://img.yzcdn.cn/vant/apple-3.jpg"
        }]
      }
    }
  }
</script>

<style>
</style>
