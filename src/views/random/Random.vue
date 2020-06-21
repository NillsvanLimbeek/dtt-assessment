<template>
    <div class="random">
        <Button @click="fetchRandomData" button-class="button__secondary"
            >Show me something new!</Button
        >

        <CharacterDetail v-if="section === 'character'" :id="randomData.id" />
        <LocationDetail v-if="section === 'location'" :id="randomData.id" />
        <EpisodeDetail v-if="section === 'episode'" :id="randomData.id" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { fetchData } from '@/lib/utils';
import { Character, Episode, ApiData } from '@/lib/types';

const Button = () => import('@/components/base-button/BaseButton.vue');
const CharacterDetail = () => import('../character-detail/CharacterDetail.vue');
const LocationDetail = () => import('../location-detail/LocationDetail.vue');
const EpisodeDetail = () => import('../episode-detail/EpisodeDetail.vue');

const apiData: ApiData[] = [
    {
        section: 'character',
        count: 591,
    },
    {
        section: 'location',
        count: 94,
    },
    {
        section: 'episode',
        count: 36,
    },
];

export default Vue.extend({
    name: 'Random',

    components: {
        Button,
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
            console.log(this.randomData);
        },
    },

    async mounted() {
        this.fetchRandomData();
    },
});
</script>

<style lang="scss" src="./Random.scss"></style>
