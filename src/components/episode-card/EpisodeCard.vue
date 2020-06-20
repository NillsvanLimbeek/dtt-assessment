<template>
    <RouterLink :to="{ name: 'EpisodeDetail', params: { id: episode.id } }">
        <InfoSection title="Number" :info="episode.episode" />
        <InfoSection title="Name" :info="episode.name" />
        <InfoSection title="Characters" :info="episode.characters.length" />
    </RouterLink>
</template>

<script lang="ts">
import Vue from 'vue';

import { Episode } from '../../lib/types';

const InfoSection = () => import('@/components/info-section/InfoSection.vue');

export default Vue.extend({
    name: 'EpisodeCard',

    components: {
        InfoSection,
    },

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
