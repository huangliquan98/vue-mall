<template>
  <div class="mine">
    <div class="left">
    </div>
    <div class="center">
      <div @click="toLogin"><img src="../../../assets/img/profile/登录.png" alt=""></div>
    </div>
    <div class="right">
    </div>
  </div>
</template>

<script>
  export default {
    name:'mine',
    methods:{
      toLogin(){
        this.$router.push('/login')
        this.tab.style.display = "none"
      }
    },
    data(){
      return {
        tab:document.getElementById('tab-bar')
      }
    }
  }
</script>

<style scoped="scoped">
  .mine{
    display: flex;
    height: 72px;
    margin-top: 84px;
  }
  .left,.right{
    flex: 2;
  }
  .center{
    /* background-color: #FF8198; */
    text-align: center;
    line-height: 70px;
    flex: 1;
    width: 72px;
  }
  .center span{
    color: white;
  }
  .center img{
    width: 72px;
  }
</style>
