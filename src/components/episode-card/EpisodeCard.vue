<template>
    <RouterLink :to="{ name: 'EpisodeDetail', params: { id: episode.id } }">
        <div class="episode">
            <h4>{{ episode.episode }} {{ episode.name }}</h4>
        </div>
    </RouterLink>
</template>

<script lang="ts">
import Vue from 'vue';

import { Episode } from '../../lib/types';

export default Vue.extend({
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
