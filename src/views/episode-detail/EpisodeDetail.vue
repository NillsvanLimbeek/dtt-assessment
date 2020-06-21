<template>
    <div class="episode">
        <div class="episode__info">
            <h2>{{ episode.episode }} - {{ episode.name }}</h2>
            <p>Air date: {{ episode.air_date }}</p>
        </div>

        <h2>Characters:</h2>
        <CardList type="character" :cards="characters" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Episode, Character } from '@/lib/types';
import { fetchData, getIds } from '@/lib/utils';

const CardList = () => import('@/components/card-list/CardList.vue');

export default Vue.extend({
    name: 'EpisodeDetail',

    components: {
        CardList,
    },

    props: {
        id: {
            type: [Number, String],
            required: true,
            default: null,
        },
    },

    data() {
        return {
            episode: {} as Episode,
            characters: [] as Character[],
        };
    },

    methods: {
        async fetchEpisode() {
            const episode = await fetchData<Episode>(`episode/${this.id}`);
            this.episode = episode;

            this.fetchCharacters();
        },

        async fetchCharacters() {
            const characterIds = getIds(this.episode.characters);
            const characters = await fetchData<Character[]>(
                `character/${characterIds}`,
            );

            this.characters = characters;
        },
    },

    async mounted() {
        this.fetchEpisode();
    },
});
</script>

<style lang="scss" src="./EpisodeDetail.scss"></style>
