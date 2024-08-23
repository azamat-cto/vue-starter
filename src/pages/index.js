import Routing from "./index.vue";

export const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("./home"),
        meta: {
            transition: "fade",
        },
    },
    {
        path: "/about",
        name: "About",
        component: () => import("./about"),
        meta: {
            transition: "fade",
        },
    },
];

export { Routing };
