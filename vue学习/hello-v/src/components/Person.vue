<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts"> //定义组件
  export default {
    name:'Person'
  }
  import { ref } from 'vue'
</script>

<script lang="ts" setup> //编写内容
  //数据
  let name = ref('张三')
  let age = ref(18)
  let tel = '13888888888'
  //方法
  const changeName = () => name.value = 'zhang-san'
  const changeAge = () => age.value += 1
  const showTel = () => alert(tel)
</script>

<style>
  .person{
    background-color: skyblue;
    border-radius: 10px;
    padding: 20px;
  }
  button{
    margin: 0 10px;
  }
</style>