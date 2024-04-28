// 创建一个路由，并暴露出去

// 第一步：引入createRouter
import { createRouter,createWebHistory } from "vue-router"
// 引入组件
import Home from '@/components/routes/Home.vue'
import News from '@/components/routes/News.vue'
import About from '@/components/routes/About.vue'
import Detail from '@/components/routes/Detail.vue'

// 第二步：创建路由器
const router = createRouter({
  history:createWebHistory(),// 路由器的工作模式
  routes:[ //路由规则
    {
      name:'home',//命名路由
      path:'/home',
      component:Home
    },
    {
      name:'news',
      path:'/news',
      component:News,
      children:[// 嵌套路由-子级路由
        {
          name:'detail',
          path:'detail',
          // path:'detail/:id/:title/:content', parmas传参写法
          component:Detail,
        }
      ]
    },
    {
      name:'about',
      path:'/about',
      component:About
    },
  ]
})

// 第三步：默认暴露
export default router