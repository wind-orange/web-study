<template>
  <div class="sum">
    <h3>目前的值为{{ sum }},放大10倍后是{{ bigsum }}</h3>
    <button @click="changeSum">sum+1</button>
  </div>
  <div class="dog">
    <img v-for="(dog, index) in dogList" :src="dog" :key="index">
    <br>
    <button @click="getDog">小狗+1</button>
  </div>

</template>

<script lang="ts">
  export default {
    name:'Dog'
  }
</script>

<script setup lang="ts">
  import useDog from '@/components/hooks/useDog'
  import useSum from '@/components/hooks/useSum'

  const {sum,bigsum,changeSum} = useSum()
  const {dogList,getDog} = useDog()
</script>

<style scoped>
  div {
    background-color: seagreen;
  }
  .dog {
    margin-top: 20px;
  }
  img{
    height: 100px;
    margin-right: 10px;
  }
</style>