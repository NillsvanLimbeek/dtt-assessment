import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: () =>
            import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    },
    {
        path: '/random',
        name: 'Random',
        component: () =>
            import(/* webpackChunkName: "random" */ '../views/Random.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
