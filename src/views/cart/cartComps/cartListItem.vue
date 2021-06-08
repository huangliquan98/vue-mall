<template>
  <div class="cart-list-item">
    <div class="item-image">
      <img :src="cartListItem.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="title">{{cartListItem.title | titleCut}}</div>
      <div class="desc">{{cartListItem.desc | titleCut}}</div>
      <div class="price-count">
        <div class="price">{{cartListItem.price}}$</div>
        <div class="count"><button @click="cut">-</button>X{{cartListItem.count}}<button @click="add">+</button></div>
      </div>
    </div>
    <div class="delete">
      <van-button  @click="deleteItem(cartListItem)">删除</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name:'cartListItem',
    data(){
      return {
      }
    },
    props:{
      cartListItem:{
        type:Object,
        default(){
          return {}
        }
      },
    },
    methods:{
      cut(){
        if(this.cartListItem.count>=1){
          this.cartListItem.count--
         }
      },
      add(){
        this.cartListItem.count++
      },
      deleteItem(item){
        this.$store.state.cartList = this.$store.state.cartList.filter((it)=> {
          return item.iid !=it.iid
        })
      }
    },
    filters:{
      titleCut(title){
        if(title.length>=23){
          return title.substr(0,22)+"...";
        }
        return title
      }
    }
  }
</script>

<style scoped="scoped">
  .cart-list-item{
    width: 100%;
    display: flex;
    border: 2px solid #EEEEEE;
    padding: 3px;
  }
  .item-image{
    width: 60px;
    flex: 5;
    text-align: center;
  }
  .item-image img{
    width: 60px;
    border-radius: 3px;
  }
  .item-info{
    flex: 18;
  }
  .delete{
    flex: 1;
  }
  .delete button{
    height: 100%;
    background-color: #FF7F50;
    color: #EEEEEE;
  }
  .item-info div{
    margin-top: 3px;
  }
  .title{
    font-size: 14px;
    font-weight: bolder;
    color: #FF8198;
  }
  .price-count{
    display: flex;
  }
  .price,.count{
    flex: 1;
  }
  .price{
    font-size: 16px;
    color: #FF007F;
    font-weight: bolder;
  }
  .count{
    text-align: right;
    font-size: 16px;
    margin-right: 10px;
  }
  .count button{
    width: 30px;
    height: 20px;
    line-height: 10px;
    font-size: 14px;
    font-weight: bold;
    background-color: #ff557f;
    border: none;
    color: white;
    border-radius: 2px;
  }
</style>
