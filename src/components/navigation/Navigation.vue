<template>
    <nav class="nav">
        <div class="nav__inner">
            <p class="nav__title">DTT<span>Assessment</span></p>

            <div class="nav__links">
                <RouterLink
                    :to="{ name: 'Home' }"
                    class="nav__link"
                    :class="{ 'nav__link--active': $route.name === 'Home' }"
                >
                    Home
                </RouterLink>
                <RouterLink
                    :to="{ name: 'Categories' }"
                    class="nav__link"
                    :class="{
                        'nav__link--active': $route.name === 'Categories',
                    }"
                >
                    Categories
                </RouterLink>
                <RouterLink
                    :to="{ name: 'Random' }"
                    class="nav__link"
                    :class="{ 'nav__link--active': $route.name === 'Random' }"
                >
                    Random
                </RouterLink>
            </div>

            <a
                class="nav__link"
                href="https://github.com/NillsvanLimbeek/dtt-assessment"
                target="_blank"
            >
                <i class="fab fa-github" />
            </a>
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Navigation',
});
</script>

<style lang="scss" src="./Navigation.scss"></style>
