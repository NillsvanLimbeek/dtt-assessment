<template>
    <main class="home">
        <button @click="sortByEpisode">Sort by Episode</button>
        <button @click="sortByName">Sort by Name</button>
        <button @click="sortByStatus">Sort by Status</button>

        <CardList type="character" :cards="getCharacters" />
    </main>
</template>

<script lang="ts">
import Vue from 'vue';

import { getters, actions, mutations } from '@/lib/store/characters';
import { sortByString } from '@/lib/utils/sortData';

import CardList from '@/components/card-list/CardList.vue';

export default Vue.extend({
    name: 'Home',

    components: {
        CardList,
    },

    methods: {
        sortByEpisode() {
            const characters = this.getCharacters;

            const sorted = characters.sort((charA, charB) => {
                return charB.episode.length - charA.episode.length;
            });
            mutations.sortCharacters(sorted);
        },
        sortByName() {
            const sorted = sortByString(this.getCharacters, 'name');
            mutations.sortCharacters(sorted);
        },
        sortByStatus() {
            const sorted = sortByString(this.getCharacters, 'status');
            mutations.sortCharacters(sorted);
        },
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

<style lang="scss" src="./Home.scss"></style>
