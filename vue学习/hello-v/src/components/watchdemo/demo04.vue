<template>
  <div class="demo03">
    <h2>情况四:监视ref/reactive定义的对象类型数据中的某个属性</h2>
    <h2>情况五:同时监视多个数据</h2>
    <h3>姓名：{{ person.name }}</h3>
    <h3>年龄：{{ person.age }}</h3>
    <h3>拥有的车：{{ person.car.c1 }}、{{ person.car.c2 }}</h3>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一辆车</button>
    <button @click="changeC2">修改第二辆车</button>
    <button @click="changeCar">修改所有车</button>
  </div>
</template>

<script lang="ts">
  export default {
    name:'demo04'
  }
</script>

<script lang="ts" setup>
  import {reactive,watch} from 'vue'
  // 数据
  let person = reactive({
    name:'张三',
    age:18,
    car:{
      c1:'宝马',
      c2:'奔驰'
    }
  })
  // 方法
  function changeName(){
    person.name += '1'
  }
  function changeAge(){
    person.age +=1
  }
  function changeC1(){
    person.car.c1 = '奥迪'
  }
  function changeC2(){
    person.car.c2 = '劳斯莱斯'
  }
  function changeCar(){
    person.car = {c1:'雅迪',c2:'爱玛'}
  }
  // 监视：情况四
  watch(() => person.name,(newValue,oldValue)=>{
      console.log('④监视到person.name变化',newValue,oldValue)
    })
  // 监视：情况五
  watch([()=>person.age,()=>person.car],(newvalue,oldvalue)=>{
    console.log('⑤检测到数据变化',newvalue,oldvalue)
  },{deep:true})
</script>

<style scoped>
    .demo03 {
      margin-top: 5px;
      background-color: skyblue;
      border-radius: 10px;
      padding: 20px;
      border: 1px solid black;
    }
  
    button {
      margin: 0 10px;
    }
</style>