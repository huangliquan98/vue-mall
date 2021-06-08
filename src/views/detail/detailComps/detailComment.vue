<template>
  <div class="detail-comment" v-if="Object.keys(commentInfo).length !==0">
    <div class="comment-first"> 
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment-second">
      <span>
        <img :src="commentInfo.user.avatar" alt="">
      </span>
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div>
      <span>{{commentInfo.content}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'detailComment',
    props:{
      commentInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-comment{
    margin-top: 10px;
    border-top: 2px solid beige;
    padding-top: 5px;
  }
  .comment-first{
    display: flex;
    height: 40px;
    line-height: 40px;
    background-color: #FF8198;
    color: white;
    font-size: 20px;
    font-weight: 500;
  }
  .comment-first span{
    flex: 1;
  }
  .comment-first span:nth-child(1){
    text-align: left;
    padding-left: 15px;
  }
  .comment-first span:nth-child(2){
    text-align: right;
    padding-right: 15px;
  }
/*  .comment-second{
    height: 50px;
  } */
  .comment-second span{
    height: 50px;
    line-height: 50px;
  }
  .comment-second img{
    width: 50px;
  }
</style>
