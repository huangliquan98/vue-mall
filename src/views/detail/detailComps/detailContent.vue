<template>
  <div class="detail-Content" v-if="Object.keys(detailContentImg).length !==0">
    <div class="span2">
      <span>{{detailContentImg.desc}}</span>
    </div>
    <div class="images">
      <div class="item">
        <div class="content" v-for="(item,index) in detailContentImg.detailImage[0].list" :key="index">
          	<img :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'detailContent',
    props:{
      detailContentImg:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-Content{
    width: 100%;
    /* z-index: 8; */
    /* position: fixed; */
  }
  .images{
    display: flex;
  }

  .item{
    color: #666666;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: 12px;
  }
  .item img{
    flex: 1;
    width: 100%;
  }
  span{
    font-size: 14px;
  }
  .span2{
    margin-bottom: 10px;
  }
  .content{
    width: 48%;
  }
</style>
