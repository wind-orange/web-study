import {defineStore} from 'pinia'

export const useCountStore = defineStore('count',{
  // 存储数据的地方
  state(){
    return{
      sum:7
    }
  },
  // 放置方法，相应组件中的“动作”
  actions:{
    minus(Value:number){
      this.sum -= Value
    }
  }
})