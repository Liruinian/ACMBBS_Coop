import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './styles/index.scss'
import './assets/css/font-awesome.min.css'
import 'blueimp-md5'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark/css-vars.css'
import 'element-plus/dist/index.css'
import router from './router'
import './store'

const app = createApp(App)
app.config.globalProperties.$comp = 'home'
app.use(router)
app.use(createPinia())
app.use(ElementPlus)
app.mount('#app')
