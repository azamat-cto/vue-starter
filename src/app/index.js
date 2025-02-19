import "./styles/index.scss";

import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./providers";

export const app = createApp(App);

app.use(router);
