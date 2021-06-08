<template>
  <div class="detail-navbar">
    <div slot="left" class="back-img"  @click="backClick">
      <img src="../../../assets/img/navbar-back/back.png" alt="">
    </div>
    <div slot="center" class="detail-center">
      <div v-for="(item,index) in titles"
      class="detail-center-item"
      :class="{active:currentIndex === index}"
      @click="currentClick(index)">{{item}}</div>
    </div>
  </div>
</template>

<script>
  import navbar from '../../../components/navbar/navbar.vue'
  export default {
    name:'detailNavbar',
    components:{
      navbar
    },
    data(){
      return {
        titles:['商品详情'],
        currentIndex:0,
		    bar:document.getElementById('tab-bar')
      }
    },
    methods:{
      currentClick(index){
        this.currentIndex = index
        // console.log(this.currentIndex)
        this.$emit('navbarclick',index)
        // console.log(index)
      },
      backClick(){
        this.$router.back()
		    this.bar.style.display = "flex"
      }
    }
  }
</script>

<style scoped="scoped">
  .detail-navbar{
    background-color: #FFFFFF;
    height: 44px;
    border-bottom: 2px solid azure;
    display: flex;
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    z-index: 9;
    margin-bottom: 44px;
  }
  .detail-center{
    display: flex;
    line-height: 44px;
    text-align: center;
    flex: 5;
  }
  .detail-center-item{
    flex: 1;
    padding-right: 42px;
  }
  .back-img img{
    width: 40%;
    margin-top: 8px;
    margin-left: 4px;
  }
  .back-img{
    flex: 1;
  }
  .active{
    color: #FF8198;
  }
</style>
