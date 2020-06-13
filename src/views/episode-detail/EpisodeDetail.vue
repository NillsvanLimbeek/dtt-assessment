<template>
    <div class="episode"></div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Episode } from '@/lib/types';

export default Vue.extend({
    props: {
        url: {
            type: String,
            required: true,
            default: null,
        },
    },
    data() {
        return {
            episode: {} as Episode,
        };
    },
    mounted() {
        fetch(this.url)
            .then((res) => res.json())
            .then((data) => (this.episode = data));
    },
});
</script>

<style lang="scss" src="./EpisodeDetail.scss"></style>
