<template>
  <div class="talk">
    <button @click="getTalk()">获取一句土味情话</button><br>
    <li v-for="t in talkList" :key="t.id">{{ t.title }}</li>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Talk'
}
</script>

<script setup lang="ts">
  import {reactive} from 'vue'
  import axios from 'axios'
  import { nanoid } from 'nanoid'
  //数据
  let talkList = reactive([ 
    { id: 'afhuwfb01', title:'最近有谣言说我喜欢你，我要澄清一下，那不是谣言。'},
    { id: 'afhuwfb02', title:'今年的冬天，我可不可以拥抱你'},
    { id: 'afhuwfb03', title:'有你在的地方，天气明朗，万物可爱。'}
   ])
  // 方法
  async function getTalk(){
    // 发请求
    let {data:{content}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    // 把请求回来的字符串包装成一个对象
    let obj = { id: nanoid(), title: content }
    // 放到数组中
    talkList.unshift(obj)
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