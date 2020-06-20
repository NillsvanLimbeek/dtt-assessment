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
import { mapGetters } from 'vuex';

import { sortByString } from '@/lib/utils/sortData';
import { Character } from '../../lib/types';

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
            const characters: Character[] = this.getCharacters;

            const sorted = characters.sort((charA, charB) => {
                return charB.episode.length - charA.episode.length;
            });

            this.$store.dispatch('characters/setSortedCharacters', {
                characters: sorted,
                sort: 'episode',
            });
        },

        sortByName() {
            const sorted = sortByString(this.getCharacters, 'name');

            this.$store.dispatch('characters/setSortedCharacters', {
                characters: sorted,
                sort: 'name',
            });
        },

        sortByStatus() {
            const sorted = sortByString(this.getCharacters, 'status');

            this.$store.dispatch('characters/setSortedCharacters', {
                characters: sorted,
                sort: 'status',
            });
        },
    },

    computed: {
        ...mapGetters({
            getCharacters: 'characters/getCharacters',
            getSortedBy: 'characters/getSortedBy',
        }),
    },

    created() {
        this.$store.dispatch('characters/fetchCharacters');
    },
});
</script>

<style lang="scss" src="./Home.scss"></style>
