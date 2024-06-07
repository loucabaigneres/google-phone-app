import "./assets/main.css"

import { createPinia } from "pinia"
import { createApp } from "vue"
import router from "./router"

import App from "./App.vue"

import NavBar from "@/components/NavBar.vue"
import SearchBar from "@/components/SearchBar.vue"
import StatusBar from "@/components/StatusBar.vue"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app
  .component("NavBar", NavBar)
  .component("SearchBar", SearchBar)
  .component("StatusBar", StatusBar)

app.mount("#app")
