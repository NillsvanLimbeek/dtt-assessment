<template>
    <ul v-if="type === 'character'" class="card-list">
        <li v-for="card in cards" :key="card.id">
            <CharacterCard :character="card" />
        </li>
    </ul>

    <ul v-else-if="type === 'location'" class="card-list">
        <li v-for="card in cards" :key="card.id">
            <LocationCard :location="card" />
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

import { Character, Episode, CardType } from '@/lib/types';

const CharacterCard = () => import('../character-card/CharacterCard.vue');
const EpisodeCard = () => import('../episode-card/EpisodeCard.vue');
const LocationCard = () => import('../location-card/LocationCard.vue');

export default Vue.extend({
    name: 'CardList',

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
        LocationCard,
    },
});
</script>

<style lang="scss" src="./CardList.scss"></style>
