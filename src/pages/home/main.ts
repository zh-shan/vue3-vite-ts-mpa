import { createApp } from 'vue'
import App from './App.vue'
import i18n from '@/i18n'
import { store } from '@/store'

// 公共组件
import libs from '@/components'

// 注册svg图标
import 'virtual:svg-icons-register'
// 页面样式
import '@/styles/tailwind.css'
import './index.scss'

const app = createApp(App)
app
  .use(i18n)
  .use(store)
  .use(libs)
  .mount('#home')

export default app
