<template>
    <ul v-if="type === 'character'" class="card-list">
        <li v-for="card in cards" :key="card.id">
            <CharacterCard :character="card" />
        </li>
    </ul>

    <ul v-else class="card-list">
        <li v-for="card in cards" :key="card.id">
            <EpisodeCard :episode="card" />
        </li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue';

import { Character, Episode } from '../../lib/types';

import CharacterCard from '../character-card/CharacterCard.vue';
import EpisodeCard from '../episode-card/EpisodeCard.vue';

type CardType = 'character' | 'episode';

export default Vue.extend({
    props: {
        cards: {
            type: Array as () => Character[] | Episode[],
            required: true,
            default: null,
        },
        type: {
            type: String as () => CardType,
            required: true,
            default: 'character',
        },
    },
    components: {
        CharacterCard,
        EpisodeCard,
    },
});
</script>

<style lang="scss" src="./CardList.scss"></style>
