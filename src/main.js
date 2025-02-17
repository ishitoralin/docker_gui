import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import router from './router'
import store from './store'
import "./style.css"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App)
app.use(router)
app.use(store)
app.use(createPinia())

app.mount('#app')