<template>
  <div class="count">
    <h3>当前求和为：{{ sum }}</h3>
    <!-- v-model默认定义为字符串，所以需要转换成数字 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add()">加</button>
    <button @click="sub()">减</button>
  </div>
</template>

<script lang="ts">
  export default {
    name:'Count'
  }
</script>

<script setup lang="ts">
  import { ref } from 'vue';
  // 数据
  let sum =  ref(0)
  let n = ref(1)
  //方法
  function add(){
    sum.value += n.value
  }
  function sub(){
    sum.value -= n.value
  }
</script>

<style scoped>
  .count{
    background-color: skyblue;
    padding: 10px;
  }
  .count select,button{
    margin-right: 5px;
  }
</style>