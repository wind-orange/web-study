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
  // import {reactive} from 'vue'
  // import axios from 'axios'
  // import { nanoid } from 'nanoid'
  import {useTalkStore} from '@/store/talk'

  let talkStore = useTalkStore()
  // console.log(talkStore.talkList)
  const {talkList,getTalk} = talkStore

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