<template>
  <div class="profile-set">
    <div class="left">
      <img src="../../../assets/img/profile/扫一扫.png" alt="">
    </div>
    <div class="right">
      <img src="../../../assets/img/profile/设置.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name:'profileSet'
  }
</script>

<style scoped="scoped">
  .profile-set{
    margin-top: 44px;
    height: 40px;
    display: flex;
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    z-index: 8;
    background-color: #FFFFFF;
  }
  .profile-set div{
    flex: 1;
  }
  .right{
    text-align: right;
  }
  img{
    width: 30px;
  }
  .left,.right{
    padding: 10px;
  }
</style>
