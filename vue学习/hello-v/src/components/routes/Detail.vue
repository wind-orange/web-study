<template>
  <ul class="news-list">
    <!-- props配置优化：route.query.id->id -->
    <li>新闻编号：{{ id }}</li>
    <li>新闻标题：{{ title }}</li>
    <li>新闻内容：{{ content }}</li>
  </ul>
</template>

<script setup lang="ts">
  defineProps(['id','title','content'])
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