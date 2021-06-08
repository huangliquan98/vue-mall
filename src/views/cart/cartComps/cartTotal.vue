<template>
  <div class="cart-total">
    <div class="div1"></div>
    <div class="total-price">总计:{{totalPrice}}$</div>
    <div class="total-count">去结算:{{totalCount}}</div>
  </div>
</template>

<script>
  export default {
    name:'cartTotal',
    computed:{
      totalPrice(){
        let num = 0
        for(let item of this.$store.state.cartList){
          num += item.price*item.count
        }
        return num.toFixed(2)
      },
      totalCount(){
        let cou = 0
        for(let item of this.$store.state.cartList){
          cou += item.count
        }
        return cou
      }
    }
  }
</script>

<style scoped="scoped">
  .cart-total{
    height: 44px;
    position: fixed;
    z-index: 10;
    bottom: 49px;
    right: 0;
    left: 0;
    background-color: beige;
    display: flex;
    color: brown;
  }
  .total-price,.total-count{
    line-height: 44px;
    font-weight: bold;
  }
  .div1{
    flex: 1;
  }
  .total-price{
    text-align: left;
    flex: 3;
  }
  .total-count{
    flex: 2;
    text-align: center;
    background-color: coral;
  }
</style>
