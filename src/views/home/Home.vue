<template>
    <main class="home">
        <div class="home__buttons">
            <Button
                @click="sortByEpisode"
                :class="{ button__secondary: getSortedBy === 'episode' }"
            >
                Sort by Episode
            </Button>
            <Button
                @click="sortByName"
                :class="{ button__secondary: getSortedBy === 'name' }"
            >
                Sort by Name
            </Button>
            <Button
                @click="sortByStatus"
                :class="{ button__secondary: getSortedBy === 'status' }"
            >
                Sort by Status
            </Button>
        </div>

        <CardList type="character" :cards="getCharacters" />
    </main>
</template>

<script lang="ts">
import Vue from 'vue';

import { getters, actions, mutations } from '@/lib/store/characters';
import { sortByString } from '@/lib/utils/sortData';

const Button = () => import('@/components/base-button/BaseButton.vue');
const CardList = () => import('@/components/card-list/CardList.vue');

export default Vue.extend({
    name: 'Home',

    components: {
        Button,
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
