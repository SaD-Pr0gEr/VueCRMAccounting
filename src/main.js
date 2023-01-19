import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import toaster from "@/utils/toaster";

createApp(App).use(store).use(router).use(toaster).mount('#app')
