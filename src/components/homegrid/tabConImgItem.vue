<template>
  <div class="tabConImgItem" @click="itemClick">
      <img :src="goodsitem.show.img" alt="">
      <div class="goods-info">
        <div>{{goodsitem.title | titleCut()}}</div>
        <div>
        <span class="price">${{goodsitem.price}}</span>
        <span>热度:<strong class="hot">{{goodsitem.cfav}}</strong></span>
        </div>
      </div>
  </div>
</template>

<script>

  export default {
    name:'tabConImgItem',
    data(){
      return {
        tab:document.getElementById('tab-bar')
      }
    },
    props:{
      goodsitem:{
        type:Object
        }
      },
    methods:{
      itemClick(){
        this.$router.push('/detail/'+this.goodsitem.iid)
        // console.log(this.goodsitem.iid)

         this.tab.style.display = "none"
      }
    },
    filters:{
      titleCut(title){
        return title.substr(0,25);
      }
    }
  }
</script>

<style scoped>
  .tabConImgItem{
    width: 48%;
  }
  .tabConImgItem img{
	  width: 100%;
    padding: 1px;
  }
  .goods-info{
    font-size: 13px;
  }
  .price{
    color: #FF5777;
  }
  .hot{
    color: #ff007f;
  }
</style>
