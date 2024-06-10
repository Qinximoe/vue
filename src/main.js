// // main.ts
import { createApp } from 'vue'
//引入element-plus官方样式
import App from './APP.vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Router from './Routerr.js'


const app = createApp(App)


app.use(Router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
app.mount('#app')

// import test from './components/test.vue'
// createApp(test).mount('#app')