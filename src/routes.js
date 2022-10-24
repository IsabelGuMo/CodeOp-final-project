import Home from "./views/Home.vue";
import Jewel from "./views/Jewel.vue";

export const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/jewel/:id", name: "jewel", component: Jewel, props: true },

];