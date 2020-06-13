<template>
    <div class="detail">
        <h1>Info:</h1>
        <h3>{{ character.name }}</h3>

        <h1>Origin:</h1>

        <div v-if="character.origin && character.origin.url">
            <RouterLink
                :to="{
                    name: 'LocationDetail',
                    params: { url: character.origin.url },
                }"
            >
                <h3>{{ character.origin.name }}</h3>
            </RouterLink>
        </div>

        <h1>Episode:</h1>
        <div v-if="character.episode">
            <RouterLink
                :to="{
                    name: 'EpisodeDetail',
                    params: { url: character.episode[0] },
                }"
            >
                <h3>{{ character.episode[0] }}</h3>
            </RouterLink>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { getters } from '@/lib/store/characters';
import { Character } from '@/lib/types';

export default Vue.extend({
    props: {
        id: {
            type: Number,
            required: true,
            default: null,
        },
    },
    data() {
        return {
            character: {} as Character,
        };
    },
    mounted() {
        this.character = getters.getCharacter(this.id);
    },
});
</script>

<style lang="scss" src="./CharacterDetail.scss"></style>
