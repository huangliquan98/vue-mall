<template>

  <div class="detail">
    <detail-navbar @navbarclick="navbarclick"></detail-navbar>
    <detail-swipe :topImages="topImages"></detail-swipe>
    <detail-main :goods="goods"></detail-main>
    <detail-super :shop="shop"></detail-super>
    <detail-content :detailContentImg="detailContentImg"></detail-content>
    <detail-params :paramInfo="paramInfo"></detail-params>
    <detail-comment :commentInfo="commentInfo"></detail-comment>
    <detail-recommend :recommend="recommend"></detail-recommend>
    <detail-cart @joinCart="joinCart" ref="cart"></detail-cart>
    <detail-join :message="message" :isShow="isShow"></detail-join>

    <detail-last></detail-last>
  </div>



</template>

<script>
  import detailNavbar from './detailComps/detailNavbar.vue'
  import detailSwipe from './detailComps/detailSwipe.vue'
  import detailMain from './detailComps/detailMain.vue'
  import detailSuper from './detailComps/detailSuper.vue'
  import detailContent from './detailComps/detailContent.vue'
  import detailParams from './detailComps/detailParams.vue'
  import detailComment from './detailComps/detailComment.vue'
  import detailLast from './detailComps/detailLast.vue'
  import detailRecommend from './detailComps/detailRecommend.vue'
  import detailCart from './detailComps/detailCart.vue'
  import detailJoin from './detailComps/detailJoin.vue'

  import {
    getDetail,
    goods,
    shop,
    GoodsParam,
    getRcommend,
  } from '../../network/detail.js'
  export default {
    name: 'detail',
    data() {
      return {
        iid: null,
        topImages: null,
        goods: {},
        shop: {},
        detailContentImg:{},
        paramInfo:{},
        commentInfo:{},
        recommend:{},
        isShow:false,
        message:'',
      }
    },
    components: {
      detailNavbar,
      detailSwipe,
      detailMain,
      detailSuper,
      detailContent,
      detailParams,
      detailComment,
      detailLast,
      detailRecommend,
      detailCart,
      detailJoin
    },
    //请求详情数据
    created() {
      this.iid = this.$route.params.iid
      getDetail(this.iid).then(res => {
          this.topImages = res.result.itemInfo.topImages
          this.goods = new goods(res.result.itemInfo,
            res.result.columms,
            res.result.shopInfo.services)

          this.shop = new shop(res.result.shopInfo)
          // console.log(this.shop)

          this.detailContentImg = res.result.detailInfo

          //获取参数信息
          this.paramInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule)
          // console.log(this.paramInfo)

          //获取评论信息
          if(res.result.rate.cRate != 0 ){
            this.commentInfo = res.result.rate.list[0]
            // console.log(this.commentInfo)
          }

        })
        getRcommend().then(res => {
          this.recommend = res.data
        })
      },
      methods:{
        navbarclick(index){

        },
        joinCart(){
          const product = {}
          product.image = this.topImages[0]
          product.title = this.goods.title
          product.price = this.goods.realPrice
          product.desc = this.goods.desc
          product.iid = this.iid


          //将商品信息添加到购物车
          // this.$store.cartList.push(product)
          this.$store.state.flag = true
          this.$store.commit('addCart', product)
          this.message = "添加到购物车成功"
          this.isShow = true
          setTimeout(()=> {
            this.isShow = false
            this.message = ''
          },2000)
          this.flag = true
        }

      },


   }
</script>

<style scoped>
  .detail{
    /* z-index: 10; */
  }
</style>
