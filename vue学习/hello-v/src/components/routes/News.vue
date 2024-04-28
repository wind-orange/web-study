<template>
  <div class="news">
    <!-- news中的导航区 -->
    <div class="news-nav">
      <ul>
        <li v-for="news in newsList" :key="news.id">
          <button @click="showNews(news)">点击跳转新闻详情</button>
          <RouterLink 
          :to="{
            path:'/news/detail',
            query:{
              id:news.id,
              title:news.title,
              content:news.content,
            }
          }">
          {{ news.title }}</RouterLink>
        </li>
      </ul>
    </div>
    <!-- news中的展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import { useRouter } from 'vue-router'
  import type {NewsInter} from '@/types'

  const newsList = ref([
    {id:'sboad01',title:'新闻1',content:'相方嬷全死了'},
    {id:'sboad02',title:'新闻2',content:'5.2六周年'},
    {id:'sboad03',title:'新闻3',content:'就这个辞职爽'},
    {id:'sboad04',title:'新闻4',content:'别下雨了'}
  ])

  //编程式导航：点击按钮实现新闻跳转
  const router = useRouter()
  function showNews(news:NewsInter){//接口定义类型
    router.push({ // 和to一样用于跳转，所以写法和to也一样
      path: '/news/detail',
      query: {
        id: news.id,
        title: news.title,
        content: news.content,
      }
    })
  }
</script>

<style scoped>
.news{
  display: flex;
}
.news-nav ul{
  list-style: none;
  width: 200px;
  height: 100%;
}
ul a{
  text-decoration: none;
  color: inherit;
  display: inline-block;
  margin-top: 10px;
}
.news-nav li button{
  margin-right: 5px;
}
.news-content{
  flex: 1;
  border: 1px solid skyblue;
  border-radius: 20px;
}
</style>