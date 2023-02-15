import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import vuex from './stores/vuex/index.js';
import Vidle from 'v-idle-3';
import mitt from 'mitt';
const emitter = mitt();

// Nucleo Icons
import "./assets/css/inter-font.css";
import "./assets/css/loadingio-spinner.css";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuex);
app.use(Vidle);
app.use(materialKit);
app.config.globalProperties.emitter = emitter;
app.mount("#app");
