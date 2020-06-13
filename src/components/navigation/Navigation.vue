<template>
    <nav class="nav">
        <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'Random' }">Random</RouterLink>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Navigation',
});
</script>

<style lang="scss" src="./Navigation.scss"></style>
