import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: () =>
            import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    },
    {
        path: '/random',
        name: 'Random',
        component: () =>
            import(/* webpackChunkName: "random" */ '@/views/Random.vue'),
    },
    {
        path: '/character/:id',
        name: 'CharacterDetail',
        component: () =>
            import(
                /* webpackChunkName: "random" */ '@/views/character-detail/CharacterDetail.vue'
            ),
        props: true,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
