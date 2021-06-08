<template>
    <div class="content">
      <nav-bar class="nav">
         <div slot="center">购物车({{$store.state.cartList.length}})</div>
      </nav-bar>
      <cart-big :cart="this.$store.getters.getCart"></cart-big>
      <cart-total></cart-total>
    </div>

</template>

<script>
  import NavBar from '../../components/navbar/navbar.vue'

  import cartBig from './cartComps/cartBig.vue'
  import cartTotal from './cartComps/cartTotal.vue'

  export default {
    name:'cartA',
    components:{
      NavBar,
      cartBig,
      cartTotal
    },
    data(){
      return {
        cart:this.$store.getters.getCart
      }
    },
    computed:{
      newCart(){

      }
    }
  }
</script>

<style scoped>
  /* .content{

  } */
  .nav{
    background-color: #FF8198;
    position: fixed;
    height: 44px;
    right: 0;
    top: 0;
    left: 0;
    z-index: 9;
  }
</style>
