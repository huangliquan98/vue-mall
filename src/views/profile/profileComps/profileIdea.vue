<template>
  <div class="profile-idea">
    <div class="first">
      <span>再小的想法，都值得被记录</span>
    </div>
    <div class="second">
      <div><img src="../../../assets/img/profile/发布.png" alt=""></div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'profile-idea'
  }
</script>

<style scoped="scoped">
  .profile-idea{
    height: 50px;
    background-color: #EEEEEE;
    display: flex;
    line-height: 50px;
    margin: 10px;
    padding: 2px;
    border-radius: 5px;
  }
  .first{
    flex: 3;
    padding-left: 10px;
  }
  .second{
    flex: 1;
    line-height: 50px;
    text-align: center;
  }
  img{
    width: 40px;
    line-height: 50px;
  }
  .second div{
    border-radius: 10px;
    color: #f6533e;
    width: 80%;
  }
  span{
    font-size: 14px;
  }
</style>
