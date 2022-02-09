import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from "./src/pages/landing";
import NotFound from "./src/pages/404";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Landing
        },
        {
            path: '/landing',
            component: Landing
        },
        {
            path: "*",
            component: NotFound
        },
    ]
});
