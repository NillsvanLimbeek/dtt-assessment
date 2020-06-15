<template>
    <RouterLink
        :to="{ name: 'CharacterDetail', params: { id: character.id } }"
        class="character"
    >
        <img :src="character.image" :alt="character.name" />

        <div class="character__info">
            <h3>{{ character.name }}</h3>

            <div class="character__section">
                <p>Status</p>
                <p>{{ character.status }}</p>
            </div>

            <div class="character__section">
                <p>Episodes</p>
                <p>{{ character.episode.length }}</p>
            </div>

            <div class="character__section">
                <p>Location</p>
                <p>{{ character.location.name }}</p>
            </div>
        </div>
    </RouterLink>
</template>

<script lang="ts">
import Vue from 'vue';

import { Character } from '@/lib/types';
import { getters } from '@/lib/store/characters';

export default Vue.extend({
    name: 'CharacterCard',

    props: {
        character: {
            type: Object as () => Character,
            required: true,
            default: null,
        },
    },

    data() {
        return {
            data: {} as Character,
        };
    },

    mounted() {
        if (this.character && this.character.id) {
            this.data = getters.getCharacter(this.character.id);
        }
    },
});
</script>

<style lang="scss" src="./CharacterCard.scss"></style>
