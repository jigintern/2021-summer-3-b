import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import "@/assets/css/font.css";


if (process.env.NODE_ENV == "production") {
  axios.defaults.baseURL =  "https://3b.intern.jigd.info";
} else if (process.env.NODE_ENV == "local") {
  axios.defaults.baseURL =  "http://localhost:8891";
}

// axios.defaults.baseURL = "https://3b.intern.jigd.info";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
