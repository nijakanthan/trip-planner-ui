import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'

// Styles
import 'element-plus/dist/index.css'
import './styles.scss'

export const pinia = createPinia()

const app = createApp(App)
  .use(pinia)
  .use(router)
  .use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app');
