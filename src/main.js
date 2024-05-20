import { createApp } from 'vue'
import "tailwindcss/tailwind.css";
import App from './App.vue'
import store from "./store/store.js"

const app = createApp(App);

app.use(store).mount("#app");
