<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
          class="tab-control-item"
          :class="{active: currentIndex === index}"
          @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>

</template>

<script>

  export default {
    name:'TabControl',
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex:0,
        // flag:""
      }
    },
    methods:{
      tabClick(index){
        this.currentIndex = index
        this.$emit('tabClickEvent',index)
        // console.log(index)
      },

    }
  }
</script>

<style>
  .tab-control{
    color: #666666;
    display: flex;
    background-color: #fff;
    height: 35px;
  }
  .tab-control-item{
    flex: 1;
    margin-top: 5px;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active{
    color: #FF8198;
  }
  .active span{
    border-bottom: 3px solid #FF8198;
  }
</style>
