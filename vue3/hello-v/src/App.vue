<!-- <template>
  <person/>
  <game/>
  <Name/>
  <demo01/>
  <demo02/>
  <demo03/>
  <demo04/>
  <Dog/>
</template> -->

<!-- <script>
  import Person from './components/base/Person.vue'
  import Game from './components/base/Game.vue'
  import Name from './components/base/Name.vue'
  import demo01 from './components/watchdemo/demo01.vue'
  import demo02 from './components/watchdemo/demo02.vue'
  import demo03 from './components/watchdemo/demo03.vue'
  import demo04 from './components/watchdemo/demo04.vue'
  import Dog from './components/base/Dog.vue'
  export default{
  components:{Person, Game, Name,
    demo01, demo02, demo03, demo04,
    Dog}//注册组件
}
</script> -->

<template>
  <h3 class="title">vue3路由测试</h3>
  <div class="router">
    <!-- 导航区 -->
    <div class="nav">
      <ul>
        <li>
          <RouterLink to="/home" active-class="active">首页</RouterLink>
        </li>
        <li>
          <RouterLink to="/news" active-class="active">新闻</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" active-class="active">关于</RouterLink>
        </li>
      </ul>
    </div>
    <!-- 展示区 -->
    <div class="content">
      <!-- 组件展示 -->
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { RouterView,RouterLink } from 'vue-router';
</script>

<style>
  .router {
    font-family: Arial,sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
  }
  .nav {
    width: 100px;
    margin-right: 20px;
    background-color: #f0f0f0;
    padding: 20px;
  }
  .nav ul{
    list-style: none;
    padding: 0;
    margin-top: 0;
  }
  .nav ul li{
    margin-top: 10px;
  }
  .nav a{
    text-decoration: none;
    color: inherit;
    display: block;
    height: 30px;
    width: 60px;
    line-height: 30px;
    text-align: center;
    border: 1px solid black;
  }
  .nav .active{
    background-color: aquamarine;
  }
  .content {
    flex: 1;
    border: 1px solid black;
    border-radius: 20px;
  }
</style>