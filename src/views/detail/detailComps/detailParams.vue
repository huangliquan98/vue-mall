<template>
  <div class="detail-params" v-if="Object.keys(paramInfo).length !==0">
    <div class="params-span">
       <span>产品详情</span>
    </div>
    <div class="second">
      <table v-for="(item,index) in paramInfo.sizes[0]" :key="index" class="table">
        <tr v-for="text in item" class="tr">
          <span class="text">{{text}}</span>
        </tr>
      </table>
    </div>
    <div class="third">
      <div v-for="(info,indey) in paramInfo.infos" :key="indey">
        <span>{{info.key}}:</span>
        <span>{{info.value}}</span>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name:'detailParams',
    props:{
      paramInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-params{

  }
  .params-span{
    color: white;
    background-color: #FF5777;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    margin-top: 5px;
  }
  .second{
    margin-top: 20px;
  }
  .table{
    display: flex;
  }
  .tr{
    flex: 1;
    border: 1px solid #666666;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .third{
    color: #FF8198;
    margin-top: 20px;
  }
  .third div{
    display: flex;
    height: 30px;
    font-weight: bold;
    line-height: 30px;
    border-bottom: 1px solid gainsboro;
  }
  .third span:nth-child(1){
    flex: 1;
    text-align: center;
  }
  .third span:nth-child(2){
    flex: 5;
  }
</style>
