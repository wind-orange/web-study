<template>
  <div class="game">
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFirstName">修改第一个游戏的名字</button>
  </div>
</template>

<script lang="ts">
  export default {
    name:'Game'
  }
  import { ref } from 'vue';
</script>

<script lang="ts" setup>
  // 数据
  let games = ref([
    {id:'byawdhio01', name:'原神'},
    {id:'byawdhio02', name:'第五人格'},
    {id:'byawdhio03', name:'王者荣耀'},
  ])
  // 方法
  const changeFirstName = () => games.value[0].name = '塞尔达传说'
</script>

<style>
.game {
  background-color: skyblue;
  border-radius: 10px;
  padding: 20px;
}
ul li{
  font-size: 20px;
}

button {
  margin: 0 10px;
}
</style>