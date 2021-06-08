<template>
  <div class="about-tree">
    <van-tree-select height="100vh" :items="items" :main-active-index.sync="active">
      <template #content>
        <van-grid :border="true" :column-num="2" v-if="active === 0">
          <van-grid-item v-for="(item,index) in goods"  :key="index">
            <van-image :src="item.show.img" />
          </van-grid-item>
        </van-grid>
        <van-grid :border="true" :column-num="2" v-if="active === 1">
          <van-grid-item v-for="(item,index) in goods1" :key="index">
            <van-image :src="item.show.img" />
          </van-grid-item>
        </van-grid>
        <van-grid :border="true" :column-num="2" v-if="active === 2">
          <van-grid-item v-for="(item,index) in goods2"  :key="index">
            <van-image :src="item.show.img" />
          </van-grid-item>
        </van-grid>
        <van-grid :border="true" :column-num="2" v-if="active === 3">
          <van-grid-item v-for="(item,index) in goods"  :key="index">
            <van-image :src="item.show.img" />
          </van-grid-item>
        </van-grid>
        <van-grid :border="true" :column-num="2" v-if="active === 4">
          <van-grid-item v-for="(item,index) in goods2"  :key="index">
            <van-image :src="item.show.img" />
          </van-grid-item>
        </van-grid>
        <van-grid :border="true" :column-num="2" v-if="active === 5">
          <van-grid-item v-for="(item,index) in goods1"  :key="index">
            <van-image :src="item.show.img" />
          </van-grid-item>
        </van-grid>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
  export default {
    name:'aboutTree',
    data() {
        return {
          active: 0,
          items: [{ text: '流行' }, { text: '新款' },{text: '精选'},{text: '时尚'},{text: '母婴'},{text: '女装'}],
          flag:'pop'
        };
      },
      props:{
        goods:{
          type:Array,
          default(){
            return []
          }
        },
        goods1:{
          type:Array,
          default(){
            return []
          }
        },
        goods2:{
          type:Array,
          default(){
            return []
          }
        }
      },
      created() {
      },
      methods:{

      }
  }
</script>

<style scoped="scoped">
  .about-tree{
    margin-top: 44px;
    margin-bottom: 49px;
  }
  .van-tree-select{
    background-color: #FF8198;
    position: fixed;
    right: 0;
    top: 44px;
    left: 0;
    z-index: 2;
    margin-bottom: 49px;
  }
  .van-tree-select__content{
    margin-bottom: 49px;
  }
  .van-image{
    border-radius: 5px;
  }
</style>
