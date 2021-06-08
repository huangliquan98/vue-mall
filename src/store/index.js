import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    cartList:[],
    flag:true
  },
  getters:{
    getCart:state=>state.cartList
  },
  mutations:{
    addCart(state,payload){
      // let oldProduct = {}
      // for(let item in this.state.cartList){
      //   if(item.iid == payload.iid){
      //     oldProduct = item
      //   }
      // }
      return new Promise((resolve,reject) => {
        let oldProduct = state.cartList.find(item => item.iid === payload.iid)
        if(oldProduct){
          oldProduct.count += 1
          resolve('当前的商品数量+1')
        }else {
          payload.count = 1
          payload.check = true
          state.cartList.push(payload)
          resolve('添加到购物车成功')
        }
      })
    }
  }
})

export default store
