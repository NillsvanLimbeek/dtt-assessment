import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: () =>
            import(/* webpackChunkName: "home" */ '@/views/home/Home.vue'),
    },
    {
        path: '/random',
        name: 'Random',
        component: () =>
            import(
                /* webpackChunkName: "random" */ '@/views/random/Random.vue'
            ),
    },
    {
        path: '/categories',
        name: 'Categories',
        component: () =>
            import(
                /* webpackChunkName: "random" */ '@/views/categories/Categories.vue'
            ),
    },
    {
        path: '/character/:id',
        name: 'CharacterDetail',
        component: () =>
            import(
                /* webpackChunkName: "character-detail" */ '@/views/character-detail/CharacterDetail.vue'
            ),
        props: true,
    },
    {
        path: '/location/:id',
        name: 'LocationDetail',
        component: () =>
            import(
                /* webpackChunkName: "location-detail" */ '@/views/location-detail/LocationDetail.vue'
            ),
        props: true,
    },
    {
        path: '/episode/:id',
        name: 'EpisodeDetail',
        component: () =>
            import(
                /* webpackChunkName: "episode-detail" */ '@/views/episode-detail/EpisodeDetail.vue'
            ),
        props: true,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
