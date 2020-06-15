<template>
    <div id="app">
        <Navigation />
        <router-view />
        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

const Navigation = () => import('@/components/navigation/Navigation.vue');
const Footer = () => import('@/components/footer/Footer.vue');

export default Vue.extend({
    name: 'Home',
    components: {
        Navigation,
        Footer,
    },
});
</script>

<style lang="scss" src="./styling/main.scss">
</style>
