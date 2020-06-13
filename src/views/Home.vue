<template>
    <main>
        <h2>Home</h2>
        <ul>
            <li v-for="character in getCharacters" :key="character.id">
                <RouterLink
                    :to="{
                        name: 'CharacterDetail',
                        params: { id: character.id },
                    }"
                >
                    <CharacterCard :character="character" />
                </RouterLink>
            </li>
        </ul>
    </main>
</template>

<script lang="ts">
import Vue from 'vue';

import { getters, actions } from '@/lib/store/characters';

const CharacterCard = () =>
    import('@/components/character-card/CharacterCard.vue');

export default Vue.extend({
    name: 'Home',
    components: {
        CharacterCard,
    },
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
