import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Loader from "@/components/Loader.vue";
import vue3StarRatings from "vue3-star-ratings";
import "spin.js/spin.css";
import { VueSvgIconPlugin } from "@yzfe/vue3-svgicon";
import "@yzfe/svgicon/lib/svgicon.css";

//Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faAngleDown } from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope);
library.add(faAngleDown);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//Devextreme
import "devextreme/dist/css/dx.light.css";

const app = createApp(App);
// eslint-disable-next-line vue/multi-word-component-names
app.component("Loader", Loader);
app.component("vue3-star-ratings", vue3StarRatings);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

app.use(VueSvgIconPlugin, {
  tagName: "icon",
});

app.mount("#app");
