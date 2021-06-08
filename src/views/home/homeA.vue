<template>
  <div class="homeA">
    <nav-bar class="homeAnav">
      <div slot="center">首页</div>
    </nav-bar>

    <!-- <div slot="scroll" ref="sc" class="main"> -->
      <swipe :bannars="bannars"></swipe>
      <carts :recommend="recommend"></carts>
      <div class="goodgoods">精品好货</div>
      <grid></grid>
      <grid></grid>
      <tab-control :titles="['流行','新款','精选']"
                    class="tab-control2"
                    @tabClickEvent="tabClickEvent">
      </tab-control>
      <tab-con-img :goods="goods[flag].list"></tab-con-img>
    <!-- </div> -->
    <scroll-top @click.native="scrollClick" v-show="false"></scroll-top>

  </div>
</template>

<script>

  import NavBar from '../../components/navbar/navbar.vue'
  import TabControl from '../../components/tabcontrol/TabControl.vue'
  import TabConImg from '../../components/homegrid/TabConImg.vue'
  import scrollTop from '../../components/scrollTop/scrollTop.vue'

  import {getmultidata,gethomedata} from '../../network/home.js'

  import swipe from './homecomps/swipe.vue'
  import carts from './homecomps/carts.vue'
  import grid from './homecomps/grid.vue'

  export default {
    name:'homeA',
    components:{
      NavBar,
      swipe,
      carts,
      grid,
      TabControl,
      TabConImg,
      scrollTop
    },
    data(){
      return{
        bannars:[],
        recommend:[],
        goods:{
          'pop':{page: 0, list: []},
          'new':{page: 0,list: []},
          'sell':{page: 0,list: []},
        },
        flag:'pop'
      }
    },
    created(){
      this.getmultidata()
      this.gethomedata('pop')
      this.gethomedata('sell')
      this.gethomedata('new')
    },
    methods:{
      //下面的代码是进行事件监听的代码
      tabClickEvent(index){
        if(index==0){
          this.flag='pop'
        }else if(index==1){
          this.flag='new'
        }else if(index==2){
          this.flag='sell'
        }
      },
       scrollClick(){
         this.$refs.sc.scrollTo(0,0)
         // this.$refs.sc.scrollTop(0,0,300)
         // console.log(this.$refs.sc.scroll.scrollTo(0,0,300))
       },
      //下面的代码是进行网络请求相关的代码
      getmultidata(){
        getmultidata().then(res => {
          // console.log(res)
          this.bannars = res.data.banner.list;
          this.recommend = res.data.recommend.list
        })
      },
      gethomedata(type){
        let page = this.goods[type].page + 1
        gethomedata(type,page).then(res => {
          // console.log(res)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page +=1
        })
        // console.log(page)
      }
    }
  }
</script>

<style>
 .homeA{
    /* background-color: pink; */
    text-align: center;
    color: white;
    padding-top: 44px;
 }
  .homeAnav{
    background-color: #FF8198;
    position: fixed;
    height: 44px;
    right: 0;
    top: 0;
    left: 0;
    z-index: 9;
  }
 .van-col-home>*{
    text-align: center;
 }
 .goodgoods{
   color: #666666;
   padding-top: 10px;
 }
 .tab-control2{
   position: sticky;
   top: 44px;
 }
 .main{
   height: 100vh;
 }
</style>
