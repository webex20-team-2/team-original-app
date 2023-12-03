import { createApp } from "vue"
import "./firebase.js"
import App from "./App.vue"
import router from "./router"

createApp(App).use(router).mount("#app")
