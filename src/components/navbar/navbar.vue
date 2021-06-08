<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name:'NavBar'
  }
</script>

<style>
  .navbar{
    display: flex;
    height: 44px;
    line-height: 44px;
    background-color: #FF8198;
    text-align: center;
    color: white;
  }
  .left,.right{
    width: 60px;
    /* background-color: #42B983; */
  }
  .center{
    flex: 1;
  }
</style>
