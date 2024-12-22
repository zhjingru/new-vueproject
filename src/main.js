import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 使用 ElementPlus 和路由器
app.use(ElementPlus)
app.use(router)

// 挂载 Vue 应用实例
app.mount('#app')