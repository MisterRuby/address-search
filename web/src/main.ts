import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueDaumPostcode from "vue-daum-postcode";

createApp(App).use(router).use(VueDaumPostcode).mount("#app");
