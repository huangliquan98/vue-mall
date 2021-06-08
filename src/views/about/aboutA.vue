<template>
  <div class="about">
    <nav-bar class="grid">
      <div slot="center">分类</div>
    </nav-bar>
    <about-tree :goods="goods['pop'].list" :goods1="goods['new'].list" :goods2="goods['sell'].list"></about-tree>
  </div>
</template>

<script>
  import NavBar from '../../components/navbar/navbar.vue'
  import aboutTree from './aboutComps/aboutTree.vue'

  import {getmultidata,gethomedata} from '../../network/home.js'

  export default {
    name:'aboutA',
    components:{
      NavBar,
      aboutTree
    },
	data(){
		return {
			goods:{
			  'pop':{page: 0, list: []},
			  'new':{page: 0,list: []},
			  'sell':{page: 0,list: []},
			},
			flag:'pop'
		}
	},
	created(){
    console.log(this.$route.params.name)
		this.getmultidata()
		this.gethomedata('pop')
		this.gethomedata('sell')
		this.gethomedata('new')
	},
	methods:{
		//下面的代码是进行网络请求相关的代码
		getmultidata(){
		  getmultidata().then(res => {
		    this.bannars = res.data.banner.list;
		    this.recommend = res.data.recommend.list
		  })
		},
		gethomedata(type){
		  let page = this.goods[type].page + 1
		  gethomedata(type,page).then(res => {
		    this.goods[type].list.push(...res.data.list)
		    this.goods[type].page +=1
		  })
		}
	}
  }
</script>

<style scoped="scoped">
  .grid{
    background-color: #FF8198;
    position: fixed;
    height: 44px;
    right: 0;
    top: 0;
    left: 0;
    z-index: 9;
  }
</style>
