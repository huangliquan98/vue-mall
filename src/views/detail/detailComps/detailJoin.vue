<template>
  <div class="detail-join" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name:'detailJoin',
    data(){
      return{
        
      }
    },
    props:{
      message:{
        type:String,
        default(){
          return ''
        }
      },
      isShow:{
        type:Boolean,
        default(){
          return false
        }
      }
    }

  }
</script>

<style scoped="scoped">
  .detail-join{
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: rgba(0,0,0,.7);
    color: white;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    border-radius: 5px;
  }
</style>
