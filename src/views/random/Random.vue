<template>
    <div class="random">
        <CharacterDetail v-if="section === 'character'" :id="randomData.id" />
        <LocationDetail v-if="section === 'location'" :id="randomData.id" />
        <EpisodeDetail v-if="section === 'episode'" :id="randomData.id" />

        <button @click="fetchRandomData">Show me something new!</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { apiData } from '@/lib/apiData';
import { fetchData } from '@/lib/utils';
import { Character, Episode } from '@/lib/types';

const CharacterDetail = () => import('../character-detail/CharacterDetail.vue');
const LocationDetail = () => import('../location-detail/LocationDetail.vue');
const EpisodeDetail = () => import('../episode-detail/EpisodeDetail.vue');

export default Vue.extend({
    name: 'Radom',

    components: {
        CharacterDetail,
        LocationDetail,
        EpisodeDetail,
    },

    data() {
        return {
            randomData: {} as Character | Location | Episode,
            section: '' as string,
        };
    },

    methods: {
        async fetchRandomData() {
            this.section = '';

            const { section, count } = apiData[Math.floor(Math.random() * 3)];
            const data = await fetchData<Character | Episode | Location>(
                `${section}/${Math.ceil(Math.random() * count)}`,
            );

            this.section = section;
            this.randomData = data;
        },
    },

    async mounted() {
        this.fetchRandomData();
    },
});
</script>

<style lang="scss" src="./Random.scss"></style>
