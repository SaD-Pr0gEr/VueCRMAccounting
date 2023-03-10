import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import toaster from "@/utils/toaster";
import {initializeApp} from "firebase/app";
initializeApp({
    apiKey: "AIzaSyB8lzI4SZo4GLbekK8C50qqhrkRQKE7iN0",
    authDomain: "accounting-crm-58930.firebaseapp.com",
    projectId: "accounting-crm-58930",
    storageBucket: "accounting-crm-58930.appspot.com",
    messagingSenderId: "917697523570",
    appId: "1:917697523570:web:d6284390c20607adbff7eb"
});
createApp(App).use(store).use(router).use(toaster).mount('#app')
