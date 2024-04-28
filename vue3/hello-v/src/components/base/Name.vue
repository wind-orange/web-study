<template>
  <div class="perspn">
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    全名：<span>{{ fullName }}</span>
  </div>
</template>

<script lang="ts">
  export default {
    name:'Name'
  }
</script>

<script lang="ts" setup>
import {ref,computed } from 'vue';

const firstName = ref('zhang')
const lastName = ref('san')
//需求：获取firstname之后将首字母大写并拼写出全名
let fullName = computed(()=>{
  return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+'-'+lastName.value
})
</script>

<style>

</style>