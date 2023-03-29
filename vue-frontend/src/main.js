import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import './styles/css/font-awesome.min.css'
import 'blueimp-md5'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark/css-vars.css'
import 'element-plus/dist/index.css'
import router from './router'
import pinia from './store/createstore'
import axios from './js/axios'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

axios.defaults.baseURL = 'https://bbs.liruinian.top/api/'
const app = createApp(App)
app.config.globalProperties.$comp = 'home'
app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.use(mavonEditor)
app.mount('#app')
app.config.globalProperties.$axios = axios
