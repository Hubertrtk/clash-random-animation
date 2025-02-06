import './assets/main.css'
import './assets/firefly-fast.scss'
import './assets/firefly.scss'
import './assets/arrow.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
