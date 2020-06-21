<template>
    <div class="categories">
        <h2>Characters</h2>
        <CardList type="character" :cards="characters" />

        <h2>Locations</h2>
        <CardList type="location" :cards="locations" />

        <h2>Episodes</h2>
        <CardList type="episode" :cards="episodes" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Character, Location, Episode } from '@/lib/types';
import { fetchData, randomNumbers } from '@/lib/utils';

const CardList = () => import('@/components/card-list/CardList.vue');

export default Vue.extend({
    name: 'Categories',

    components: {
        CardList,
    },

    data() {
        return {
            characters: [] as Character[],
            locations: [] as Location[],
            episodes: [] as Episode[],
        };
    },

    methods: {
        fetchData() {
            const characterIds = randomNumbers(3, 591);
            const characters = fetchData<Character[]>(
                `character/${characterIds}`,
            );

            const locationIds = randomNumbers(3, 94);
            const locations = fetchData<Location[]>(`location/${locationIds}`);

            const episodeIds = randomNumbers(3, 36);
            const episodes = fetchData<Episode[]>(`episode/${episodeIds}`);

            Promise.all([characters, locations, episodes]).then((values) => {
                const [characters, locations, episodes] = values;

                this.characters = characters;
                this.locations = locations;
                this.episodes = episodes;
            });
        },
    },

    mounted() {
        this.fetchData();
    },
});
</script>

<style lang="scss" src="./Categories.scss">
</style>
