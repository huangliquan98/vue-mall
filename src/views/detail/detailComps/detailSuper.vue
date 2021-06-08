<template>
  <div class="detail-super" v-if="Object.keys(shop).length !==0">

    <div class="super-logo">
      <span class="super-img">
        <img :src="shop.logo" alt="">
      </span>
      <span class="super-name">{{shop.name}}</span>
      <span class="right"></span>
    </div>

    <div class="super-main">
      <div class="super-main-sell">
        <span>{{newPrice(shop.sells)}}</span>
        <div><span>总销量</span></div>
      </div>
      <div class="super-main-count">
        <span>{{shop.goodsCount}}</span>
        <div><span>全部宝贝</span></div>
      </div>
      <div class="super-score-name">
        <div><span>{{shop.score[0].name}}</span></div>
        <div><span>{{shop.score[1].name}}</span></div>
        <div><span>{{shop.score[2].name}}</span></div>
      </div>
      <div class="super-score-score">
        <div><span>{{shop.score[0].score}}分</span></div>
        <div><span>{{shop.score[1].score}}分</span></div>
        <div><span>{{shop.score[2].score}}分</span></div>
      </div>
    </div>
    <div class="super-look">
      <span>进店看看</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'detailSuper',
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      newPrice(price){
        return Math.round(price/10000)+"万";
      }
    }
  }
</script>

<style scoped>
  .detail-super{
    margin-top: 15px;
    border-top: 3px solid beige;
  }
  .super-logo{
    margin-top: 5px;
    display: flex;
    height: 60px;
  }
  .super-img{
    flex: 1;
  }
  .super-logo img{
    width: 60px;
    /* line-height: ; */
  }
  .super-name{
    flex: 1;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin-top: 20px;
    color: #FF8198;
    font-size: 15px;
    font-weight: bolder;
  }
  .right{
    flex: 2;
  }
  .super-main{
    display: flex;
    margin-top: 10px;
    border-top: 3px solid beige;
    margin-bottom: 15px;
  }
  .super-main>div{
    flex: 1;
    text-align: center;
    height: 60px;
    line-height: 30px;
  }
  .super-look{
    height: 44px;
    line-height: 44px;
    background-color: #FF5777;
    color: white;
    text-align: center;
    font-size: 20px;
    font-weight: bolder;
    margin-bottom: 10px;
  }
  .super-main-sell, .super-main-count{
    margin-top: 18px;
  }
</style>
