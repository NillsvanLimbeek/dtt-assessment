<template>
    <div id="app">
        <Navigation />
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

const Navigation = () => import('@components/navigation/Navigation.vue');

export default Vue.extend({
    name: 'Home',
    components: {
        Navigation,
    },
});
</script>

<style lang="scss" src="./styling/main.scss"></style>
