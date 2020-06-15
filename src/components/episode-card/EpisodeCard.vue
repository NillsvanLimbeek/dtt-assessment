<template>
    <RouterLink
        :to="{ name: 'EpisodeDetail', params: { id: episode.id } }"
        class="episode"
    >
        <div class="episode__section">
            <p>Number</p>
            <p>{{ episode.episode }}</p>
        </div>

        <div class="episode__section">
            <p>Name</p>
            <p>{{ episode.name }}</p>
        </div>

        <div class="episode__section">
            <p>Characters</p>
            <p>{{ episode.characters.length }}</p>
        </div>
    </RouterLink>
</template>

<script lang="ts">
import Vue from 'vue';

import { Episode } from '../../lib/types';

export default Vue.extend({
    name: 'EpisodeCard',

    props: {
        episode: {
            type: Object as () => Episode,
            required: true,
            default: null,
        },
    },
});
</script>

<style lang="scss" src="./EpisodeCard.scss"></style>
