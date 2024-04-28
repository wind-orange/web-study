// 创建一个路由，并暴露出去

// 第一步：引入createRouter
import { createRouter,createWebHistory } from "vue-router"
// 引入组件
import Home from '@/components/routes/Home.vue'
import News from '@/components/routes/News.vue'
import About from '@/components/routes/About.vue'

// 第二步：创建路由器
const router = createRouter({
  history:createWebHistory(),// 路由器的工作模式
  routes:[ //路由规则
    {
      path:'/home',
      component:Home
    },
    {
      path:'/news',
      component:News
    },
    {
      path:'/about',
      component:About
    },
  ]
})

// 第三步：默认暴露
export default router