<template>
  <div id="app">

     <tab-bar class="tabBar">
         <tab-item path="/homeA">
           <img src="./assets/img/tabbar/加入房间.png" alt="" slot="item-icon">
           <img src="./assets/img/tabbar/加入房间 (1).png" alt="" slot="item-icon-active">
           <div slot="item-text">首页</div>
         </tab-item>
        <tab-item path="/aboutA/hello">
          <img src="./assets/img/tabbar/喜欢.png" alt="" slot="item-icon">
          <img src="./assets/img/tabbar/喜欢 (1).png" alt="" slot="item-icon-active">
          <div slot="item-text">分类</div>
        </tab-item>
        <tab-item path="/cartA">
          <img src="./assets/img/tabbar/商店.png" alt="" slot="item-icon">
          <img src="./assets/img/tabbar/商店 (1).png" alt="" slot="item-icon-active">
          <div slot="item-text">购物车</div>
        </tab-item>
        <tab-item path="/profileA">
          <img src="./assets/img/tabbar/编辑资料.png" alt="" slot="item-icon">
          <img src="./assets/img/tabbar/编辑资料 (1).png" alt="" slot="item-icon-active">
          <div slot="item-text">我的</div>
        </tab-item>
     </tab-bar>
     <keep-alive exclude="detail">
          <router-view></router-view>
     </keep-alive>

  </div>
</template>

<script>
 import tabBar from "./components/tabbar/tabbar.vue"
 import tabItem from "./components/tabbar/tabItem.vue"
export default {
  name: 'App',
  components:{
    tabBar,
    tabItem
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
  @import url("assets/css/base.css");
  .tabBar{
    z-index: 1;
  }
</style>
