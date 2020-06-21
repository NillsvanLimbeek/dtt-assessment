<template>
    <div class="footer">
        <div class="footer__wrapper">
            <p class="footer__text">
                Made with <i class="fas fa-heart"></i> by Nills van Limbeek
            </p>

            <div class="footer__links">
                <ul>
                    <li v-for="(link, index) in links" :key="index">
                        <RouterLink :to="{ name: link }">{{ link }}</RouterLink>
                    </li>
                </ul>
            </div>

            <div class="footer__social">
                <ul>
                    <li>
                        <a
                            v-for="(social, index) in socials"
                            :key="index"
                            :href="social.link"
                            target="_blank"
                        >
                            <i :class="social.icon"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Social } from '@/lib/types';

export default Vue.extend({
    name: 'Footer',

    data() {
        return {
            links: ['Home', 'Random'],
            socials: [
                {
                    icon: 'fab fa-github',
                    link: 'https://github.com/NillsvanLimbeek',
                },
                {
                    icon: 'fab fa-linkedin-in',
                    link:
                        'https://www.linkedin.com/in/nills-van-limbeek-610a0753/',
                },
            ] as Social[],
        };
    },
});
</script>

<style lang="scss" src="./Footer.scss"></style>
