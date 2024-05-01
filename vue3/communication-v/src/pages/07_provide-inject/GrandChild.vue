<template>
  <div class="grand-child">
    <h3>我是孙组件</h3>
    <h4>银子：{{ money }}</h4>
    <h4>车子：一辆{{ car.brand }}车，价值{{ car.price }}万元</h4>

  </div>
</template>

<script setup lang="ts" name="GrandChild">
// 1.2 后代注入祖先数据
  import { inject } from 'vue';
  let money = inject('money')
  let car = inject('car',{brand:'',price:0})// 默认值解决ts飘红

</script>

<style scoped>
  .grand-child{
    background-color: orange;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
  }
</style>