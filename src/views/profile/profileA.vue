<template>
  <div>
    <nav-bar class="my-profile">
      <div slot="center">我的</div>
    </nav-bar>
    <profile-set></profile-set>
    <mine></mine>
    <profile-star></profile-star>
    <profile-idea></profile-idea>
    <profile-more></profile-more>
    <div class="bott"></div>
  </div>
</template>

<script>
  import NavBar from '../../components/navbar/navbar.vue'
  import profileSet from './profileComps/profileSet.vue'
  import mine from './profileComps/mine.vue'
  import profileStar from './profileComps/profileStar.vue'
  import profileIdea from './profileComps/profileIdea.vue'
  import profileMore from './profileComps/profileMore.vue'

  export default {
    name:'profileA',
    components:{
      NavBar,
      profileSet,
      mine,
      profileStar,
      profileIdea,
      profileMore
    }
  }
</script>

<style scoped="scoped">
  .my-profile{
    background-color: #FF8198;
    position: fixed;
    height: 44px;
    right: 0;
    top: 0;
    left: 0;
    z-index: 9;
  }
  .bott{
    margin-bottom: 49px;
  }
</style>
