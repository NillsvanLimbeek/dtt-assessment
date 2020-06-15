<template>
    <div class="detail">
        <img :src="character.image" :alt="character.name" class="detail__img" />

        <div class="detail__info">
            <h2>Character Info</h2>

            <div class="detail__row">
                <div>
                    <div class="detail__section">
                        <p>Name</p>
                        <p>{{ character.name }}</p>
                    </div>

                    <div class="detail__section">
                        <p>Status</p>
                        <p>{{ character.status }}</p>
                    </div>

                    <div class="detail__section">
                        <p>Species</p>
                        <p>{{ character.species }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="detail__episodes">
            <h2>Episodes</h2>

            <div class="detail__episode" v-if="Object.keys(episode).length > 0">
                <EpisodeCard :episode="episode" />
            </div>

            <CardList v-else type="episode" :cards="episodes" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Character, Episode } from '@/lib/types';
import { getIds, fetchData } from '@/lib/utils';

const CardList = () => import('@/components/card-list/CardList.vue');
const EpisodeCard = () => import('@/components/episode-card/EpisodeCard.vue');

export default Vue.extend({
    name: 'CharacterDetail',

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
            const episodeIds = getIds(this.character.episode);

            if (episodeIds.length === 1) {
                this.episode = await fetchData<Episode>(
                    `episode/${episodeIds}`,
                );
            } else {
                this.episodes = await fetchData<Episode[]>(
                    `episode/${episodeIds}`,
                );
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
