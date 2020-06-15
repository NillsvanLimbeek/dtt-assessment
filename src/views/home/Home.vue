<template>
    <main class="home">
        <div class="home__buttons">
            <button
                class="home__button"
                :class="{ 'home__button--active': getSortedBy === 'episode' }"
                @click="sortByEpisode"
            >
                Sort by Episode
            </button>
            <button
                class="home__button"
                :class="{ 'home__button--active': getSortedBy === 'name' }"
                @click="sortByName"
            >
                Sort by Name
            </button>
            <button
                class="home__button"
                :class="{ 'home__button--active': getSortedBy === 'status' }"
                @click="sortByStatus"
            >
                Sort by Status
            </button>
        </div>

        <CardList type="character" :cards="getCharacters" />
    </main>
</template>

<script lang="ts">
import Vue from 'vue';

import { getters, actions, mutations } from '@/lib/store/characters';
import { sortByString } from '@/lib/utils/sortData';

const CardList = () => import('@/components/card-list/CardList.vue');

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
            mutations.setSortedCharacters(sorted);
            mutations.setSortedBy('episode');
        },

        sortByName() {
            const sorted = sortByString(this.getCharacters, 'name');
            mutations.setSortedCharacters(sorted);
            mutations.setSortedBy('name');
        },

        sortByStatus() {
            const sorted = sortByString(this.getCharacters, 'status');
            mutations.setSortedCharacters(sorted);
            mutations.setSortedBy('status');
        },
    },

    computed: {
        getCharacters() {
            return getters.getCharacters();
        },

        getSortedBy() {
            return getters.getSortedBy();
        },
    },

    created() {
        actions.fetchCharacters();
    },
});
</script>

<style lang="scss" src="./Home.scss"></style>
