import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerMicroApps, start } from 'qiankun'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 注册微应用
registerMicroApps([
  {
    name: 'vue-sub-app',
    entry: '//localhost:8081', // 子应用的入口地址
    container: '#subapp-container', // 子应用的挂载点
    activeRule: '/vue-sub-app', // 子应用的路由前缀
  },
  // 可以注册更多微应用
])

// 启动 qiankun
start()

app.mount('#app')
