<template>
  <div class="profile-star">
    <div>
      <div><img src="../../../assets/img/profile/消息.png" alt=""></div>
      <span>消息通知</span>
    </div>
    <div>
      <div><img src="../../../assets/img/profile/收藏.png" alt=""></div>
      <span>收藏</span>
    </div>
    <div>
      <div><img src="../../../assets/img/profile/浏览记录.png" alt=""></div>
      <span>浏览历史</span>
    </div>
    <div>
      <div><img src="../../../assets/img/profile/下载.png" alt=""></div>
      <span>下载管理</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'profileStar'
  }
</script>

<style scoped="scoped">
  .profile-star{
    height: 60px;
    text-align: center;
    margin: 10px;
    padding: 3px;
    background-color: #EEEEEE;
    display: flex;
    border-radius: 5px;
    margin-top: 20px;
  }
  .profile-star div{
    flex: 1;
    margin-top: 2px;
  }
  img{
    width: 32px;
  }
  span{
    font-size: 13px;
  }
</style>
