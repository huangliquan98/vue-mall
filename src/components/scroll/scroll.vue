<template>
  <div ref="wrapper" class="scroll">
    <div>
      <slot name="scroll"></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name:'scroll',
    data(){
      return {
        scroll:null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true
      })
    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      }
    }
  }
</script>

<style>
</style>
