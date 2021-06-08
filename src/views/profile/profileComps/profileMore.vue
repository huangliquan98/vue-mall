<template>
  <div class="profile-more">
    <div class="more-produce">
      <span>更多服务</span>
    </div>
    <!-- 下面这是第一列的内容 -->
    <div class="td-first">
      <div>
        <div><img src="../../../assets/img/profileMore/反馈.png" alt=""></div>
        <span>用户反馈</span>
      </div>
      <div>
        <div><img src="../../../assets/img/profileMore/钱包.png" alt=""></div>
        <span>钱包</span>
      </div>
      <div>
        <div><img src="../../../assets/img/profileMore/推广优势.png" alt=""></div>
        <span>广告推广</span>
      </div>
      <div>
        <div><img src="../../../assets/img/profileMore/流量.png" alt=""></div>
        <span>免流量服务</span>
      </div>
    </div>
    <!-- 下面是第二列的内容 -->
    <div class="td-second">
      <div>
        <div><img src="../../../assets/img/profileMore/评论.png" alt=""></div>
        <span>评论</span>
      </div>
      <div>
        <div><img src="../../../assets/img/profileMore/点赞.png" alt=""></div>
        <span>点赞</span>
      </div>
      <div>
        <div><img src="../../../assets/img/profileMore/阅读页-夜间模式.png" alt=""></div>
        <span>夜间模式</span>
      </div>
      <div>
        <div><img src="../../../assets/img/profileMore/关注.png" alt=""></div>
        <span>关注</span>
      </div>
    </div>
    <!-- 下面是第三列的内容 -->
    <div class="td-third">
      <div>
        <div><img src="../../../assets/img/profileMore/订单.png" alt=""></div>
        <span>订单</span>
      </div>
      <div>
        <div><img src="../../../assets/img/profileMore/购物车满.png" alt=""></div>
        <span>购物车</span>
      </div>
      <div>
        <div><img src="../../../assets/img/profileMore/公益.png" alt=""></div>
        <span>圆梦公益</span>
      </div>
      <div>
        <div><img src="" alt=""></div>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'profileMore'
  }
</script>

<style scoped="scoped">
  .profile-more{
    height: 260px;
    margin: 10px;
    text-align: center;
    background-color: #EEEEEE;
    border-radius: 5px;
  }
  .td-first{
    display: flex;
    margin-top: 25px;
  }
  .td-first div{
    flex: 1;
  }
  img{
    width: 20px;
  }
  span{
    font-size: 13px;
  }
  .td-second{
    display: flex;
    margin-top: 25px;
  }
  .td-second div{
    flex: 1;
  }
  .td-third{
    display: flex;
    margin-top: 25px;
  }
  .td-third div{
    flex: 1;
  }
  .more-produce span{
    font-size: 20px;
    font-weight: bold;
  }
  .more-produce{
    padding-top: 10px;
  }
</style>
