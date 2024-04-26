<template>
  <div class="demo03">
    <h2>情况三:监视reactive定义的对象类型数据</h2>
    <h3>姓名：{{ person.name }}</h3>
    <h3>年龄：{{ person.age }}</h3>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改用户</button>
  </div>
</template>

<script lang="ts">
  export default {
    name:'demo03'
  }
</script>

<script lang="ts" setup>
  import {reactive,watch} from 'vue'
  //数据
  let person = reactive({
    name:'张三',
    age:18
  })
  //方法
  function changeName(){
    person.name += '1'
  }
  function changeAge(){
    person.age +=1
  }
  function changePerson(){
    Object.assign(person, { name: '李四', age: 90 })
  }
  //监视
  watch(person,(newValue,oldValue)=>{
    console.log('监视到person变化',newValue,oldValue)
  })
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