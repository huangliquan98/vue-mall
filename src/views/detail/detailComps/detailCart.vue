<template>
  <div class="detail-cart">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
        <van-goods-action-icon icon="cart-o" text="购物车"/>
        <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
        <van-goods-action-button type="warning" text="加入购物车" @click="joinCart"/>
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
  </div>
</template>

<script>
  export default {
    name:'detailCart',
    methods:{
      joinCart(){
        this.$emit('joinCart')
      }
    }
  }
</script>

<style scoped>
  .detail-cart{
  }
</style>
