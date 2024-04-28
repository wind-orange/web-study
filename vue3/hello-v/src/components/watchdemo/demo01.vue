<template>
  <div class="demo01">
    <h2>情况一:监视ref定义的基本类型数据</h2>
    <h3>当前求和为：{{ sum }}</h3>
    <button @click="changeSum">点击和+1</button>
  </div>
</template>

<script lang="ts">
  export default {
    name:'demo01'
  }
</script>

<script lang="ts" setup>
  import {ref,watch} from 'vue'
  let sum = ref(0)
  function changeSum(){
    sum.value += 1
  }
const stopWatch = watch(sum,(newvalue,oldvalue)=>{
    console.log('sum已变化',newvalue,oldvalue)
    //value值达到10时停止监视
    if(newvalue >= 10){
      stopWatch()
    }
  })
</script>

<style scoped>
    .demo01 {
      background-color: skyblue;
      border-radius: 10px;
      padding: 20px;
      border: 1px solid black;
    }
  
    button {
      margin: 0 10px;
    }
</style>