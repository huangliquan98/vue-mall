<template>
  <div class="detail-main">
    <div class="goos-title">
      <span>{{goods.title}}</span>
    </div>
    <div class="second">
      <span class="goods-newPrice">{{goods.newPrice}}</span>
      <span class="goods-oldPrice">{{goods.oldPrice}}</span>
      <span class="goods-discount">{{goods.discount}}</span>
    </div>
    <div class="believe">
      <span>您可以相信我们的几大理由</span>
    </div>
    <div class="item">
      <span v-for="item in goods.services" class="item-content">{{item.name}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'detailMain',
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  .goos-title{
    font-size: 14px;
    margin: 5px;
  }
  .goods-newPrice{
    color: #ff557f;
    font-size: 18px;
    margin-left: 10px;
  }
  .goods-oldPrice{
    text-decoration: line-through;
    font-weight: 100;
    font-size: 10px;
  }
  .goods-discount{
    background-color: #FF5777;
    color: #FFFFFF;
    font-size: 14px;
    padding: 3px;
    border-radius: 2px;
    margin-left: 10px;
  }
  .second{
    margin-top: 20px;
  }
  .item{
    display: flex;
    font-size: 13px;
    margin-top: 20px;
    text-align: center;
  }
  .item-content{
    flex: 1;
  }
  .believe{
    text-align: center;
    margin-top: 20px;
    background-color: #ff55ff;
    color: white;
    font-weight: bolder;
    height: 40px;
    line-height: 40px;
  }
</style>
