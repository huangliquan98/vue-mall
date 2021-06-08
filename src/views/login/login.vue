<template>
	<div class="login">
		<navbar>
      <div slot="left" class="back-img"  @click="backClick">
        <img src="../../assets/img/navbar-back/back.png" alt="">
      </div>
      <div slot="center">登录</div>
    </navbar>
    <thanks></thanks>
    <login-content></login-content>
	</div>
</template>

<script>
  import navbar from '../../components/navbar/navbar.vue'
  import loginContent from './loginContent.vue'
  import thanks from './thanks.vue'
	export default {
		name:'login',
    data(){
      return {
        bar:document.getElementById('tab-bar')
      }
    },
    components:{
      navbar,
      loginContent,
      thanks
    },
    methods:{
      backClick(){
        this.$router.back()
        this.bar.style.display = "flex"
      }
    }
	}
</script>

<style scoped="scoped">
  .back-img img{
    width: 40%;
    margin-top: 8px;
    margin-left: 4px;
  }
</style>
