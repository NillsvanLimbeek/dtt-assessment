<template>
    <nav class="nav">
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/random">Random</RouterLink>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Navigation',
});
</script>

<style lang="scss" src="./Navigation.scss">
</style>
