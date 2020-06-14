<template>
    <div class="detail">
        <h1>Info:</h1>
        <h3>{{ character.name }}</h3>

        <EpisodeCard
            v-if="Object.keys(episode).length > 0"
            :episode="episode"
        />

        <CardList v-else type="episode" :cards="episodes" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Character, Episode } from '@/lib/types';
import { fetchData } from '@/lib/fetchData';

import CardList from '@/components/card-list/CardList.vue';
import EpisodeCard from '@/components/episode-card/EpisodeCard.vue';

export default Vue.extend({
    props: {
        id: {
            type: Number,
            required: true,
            default: null,
        },
    },

    components: {
        EpisodeCard,
        CardList,
    },

    data() {
        return {
            character: {} as Character,
            episodes: [] as Episode[],
            episode: {} as Episode,
        };
    },

    methods: {
        async getEpisodes() {
            const episodeIds = this.character.episode.map((eps) => {
                const split = eps.split('/');
                return split[split.length - 1];
            });

            if (episodeIds.length === 1) {
                const episode = await fetchData<Episode>(
                    `episode/${episodeIds}`,
                );

                this.episode = episode;
            } else {
                const episodes = await fetchData<Episode[]>(
                    `episode/${episodeIds}`,
                );

                this.episodes = episodes;
            }
        },
    },

    async mounted() {
        const data = await fetchData<Character>(`character/${this.id}`);
        this.character = data;

        this.getEpisodes();
    },
});
</script>

<style lang="scss" src="./CharacterDetail.scss"></style>
