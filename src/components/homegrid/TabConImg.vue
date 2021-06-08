<template>
  <div class="TabConImg">
    <tab-con-img-item v-for="(item,index) in goods" :goodsitem="item" :key="index"></tab-con-img-item>
  </div>
</template>

<script>
  import tabConImgItem from './tabConImgItem.vue'
  export default {
    name:'TabConImg',
    components:{
      tabConImgItem
    },
    props:{
      goods:{
        type:Array
      }
    },

  }
</script>

<style>
  .TabConImg{
    color: #666666;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: 12px;
  }
</style>
