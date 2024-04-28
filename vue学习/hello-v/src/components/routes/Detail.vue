<template>
  <ul class="news-list">
    <li>新闻编号：{{ query.id }}</li>
    <li>新闻标题：{{ query.title }}</li>
    <li>新闻内容：{{ query.content }}</li>
  </ul>
</template>

<script setup lang="ts">
  import {toRefs} from 'vue'
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const {query} = toRefs(route)
</script>

<style scoped>
  .news-list{
    padding-left: 20px;
  }
  .news-list li{
    list-style: none;
    line-height: 30px;
    padding-bottom: 20px;
  }
</style>