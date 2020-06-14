<template>
    <div class="random">
        <CharacterDetail
            v-if="Object.keys(character).length !== 0"
            :id="character.id"
        />
        <LocationDetail
            v-if="Object.keys(location).length !== 0"
            :id="location.id"
        />
        <EpisodeDetail
            v-if="Object.keys(episode).length !== 0"
            :id="episode.id"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { apiData } from '@/lib/ApiData';
import { fetchData } from '@/lib/fetchData';
import { Character, Episode } from '@/lib/types';

import CharacterDetail from '@/views/character-detail/CharacterDetail.vue';
import LocationDetail from '@/views/location-detail/LocationDetail.vue';
import EpisodeDetail from '@/views/episode-detail/EpisodeDetail.vue';

export default Vue.extend({
    components: {
        CharacterDetail,
        LocationDetail,
        EpisodeDetail,
    },

    data() {
        return {
            character: {} as Character,
            location: {} as Location,
            episode: {} as Episode,
        };
    },

    methods: {
        async fetchRandomData() {
            const { section, count } = apiData[Math.floor(Math.random() * 3)];
            const data = await fetchData<Character | Episode | Location>(
                `${section}/${Math.ceil(Math.random() * count)}`,
            );

            switch (section) {
                case 'character':
                    this.character = data as Character;
                    break;
                case 'location':
                    this.location = data as Location;
                    break;
                case 'episode':
                    this.episode = data as Episode;
                    break;
            }
        },
    },

    async mounted() {
        this.fetchRandomData();
    },
});
</script>

<style lang="scss" src="./Random.scss"></style>
