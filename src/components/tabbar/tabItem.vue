<template>

    <div class="tab-bar-item" @click="change">
     <!-- <img src="../../assets/img/tabbar/fdisk.png" alt="">
      <div>关于</div> -->
      <div v-if="!isActive"><slot name="item-icon"></slot></div>

      <div v-else><slot name="item-icon-active"></slot></div>
      <div v-bind:class="{active: isActive}"><slot name="item-text"></slot></div>
    </div>

</template>

<script>
  export default {
    name:'tabItem',
    props:{
      path:String
    },
    data(){
      return{
        // isActive:false
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) != -1
      }
    },
    methods:{
      change(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style>
  .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
      }
  .tab-bar-item img{
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 2px;
      }
  .active{
    color: deepskyblue;
  }
</style>
