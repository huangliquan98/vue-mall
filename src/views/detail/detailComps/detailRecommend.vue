<template>
  <div class="detail-recommend">
    <div v-for="(item,index) in recommend.list" :key="index" class="recommend-images">
      <img :src="item.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name:'detailRecommend',
    props:{
      recommend:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
 .detail-recommend{
   color: #666666;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   font-size: 12px;
 }
 .recommend-images{
   width: 48%;
 }
 .recommend-images img{
   width: 100%;
   padding: 1px;
 }
</style>
