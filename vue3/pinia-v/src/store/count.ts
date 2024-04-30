import {defineStore} from 'pinia'

export const useCountStore = defineStore('count',{
  // 存储数据的地方
  state(){
    return{
      sum:7,
      school:'qinghua'
    }
  },
  // 放置方法，相应组件中的“动作”
  actions:{
    minus(Value:number){
      this.sum -= Value
    }
  },
  // 数据预处理
  getters:{
    bigSum:state => state.sum * 10,
    upperSchool(): string{
      return this.school.toUpperCase()}
  }
})