import { createApp } from "vue";
import App from './App.vue'
// 第一步：引入pinia
import { createPinia } from 'pinia'

const app = createApp(App) // 创建app

// 第二步：创建pinia
const pinia = createPinia()
// 第三步：安装pinia
app.use(pinia)

app.mount('#app') // 挂载app

// 注意：11行和13行代码顺序不能错，
// 使用pinia store前先调用11行代码，确保pinia被正确初始化
// 否则控制台报错