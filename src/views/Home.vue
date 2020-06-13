<template>
    <main>
        <ul>
            <li v-for="character in getCharacters" :key="character.id">
                <img :src="character.image" :alt="character.name" />
                <p>{{ character.name }}</p>
            </li>
        </ul>
    </main>
</template>

<script lang="ts">
import Vue from 'vue';

import { getters, actions } from '@/store/characters';

export default Vue.extend({
    name: 'Home',
    data() {
        return {};
    },
    computed: {
        getCharacters() {
            return getters.getCharacters();
        },
    },
    created() {
        actions.fetchCharacters();
    },
});
</script>

<style lang="scss"></style>
