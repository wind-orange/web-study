<template>
  <div class="talk">
    <button @click="getTalk()">获取一句土味情话</button><br>
    <li v-for="t in talkStore.talkList" :key="t.id">{{ t.title }}</li>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Talk'
}
</script>

<script setup lang="ts">
  // import {reactive} from 'vue'
  import axios from 'axios'
  import { nanoid } from 'nanoid'
  import {useTalkStore} from '@/store/talk'

  let talkStore = useTalkStore()
  console.log(talkStore.talkList)

  // 方法
  async function getTalk(){
    // 发请求
    let {data:{content}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    // 把请求回来的字符串包装成一个对象
    let obj = { id: nanoid(), title: content }
    // 放到数组中
    talkStore.talkList.unshift(obj)
    console.log(obj)
  }
</script>

<style scoped>
  .talk{
  padding: 10px;
  margin-top: 10px;
  background-color: yellowgreen;
  }
  .dog img{
    height: 100px;
    margin-right: 10px;
    margin-top: 10px;
  }
</style>