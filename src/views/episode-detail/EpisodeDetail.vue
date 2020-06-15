<template>
    <div class="episode">
        <h2>{{ episode.episode }} {{ episode.name }}</h2>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Episode } from '@/lib/types';
import { fetchData } from '@/lib/utils';

export default Vue.extend({
    name: 'EpisodeDetail',

    props: {
        id: {
            type: Number,
            required: true,
            default: null,
        },
    },

    data() {
        return {
            episode: {} as Episode,
        };
    },

    async mounted() {
        const episode = await fetchData<Episode>(`episode/${this.id}`);
        this.episode = episode;
    },
});
</script>

<style lang="scss" src="./EpisodeDetail.scss"></style>
