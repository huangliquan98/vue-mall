<template>
  <!-- v-if="Object.keys(cart).length !==0" -->
  <div class="cart-big">
       <div v-for="(item,index) in newCart" :key="index" class="big">
         <cart-list-item  :cartListItem="item"></cart-list-item>
       </div>
  </div>
</template>

<script>
   import cartListItem from './cartListItem.vue'
  export default {
    name:'cartBig',
    components:{
      cartListItem
    },
    data(){
      return {
      }
    },
    props:{
      cart:{
        type:Array,
        default(){
          return []
        }
      }
    },
    mounted() {
      // console.log(this.cart)
    },
    computed:{
      newCart(){
        return this.cart
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  .cart-big{
    width: 100vw;
    margin-top: 44px;
    margin-bottom: 93px;
  }
  .big{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: 13px;
  }
</style>
