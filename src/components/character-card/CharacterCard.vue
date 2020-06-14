<template>
    <div class="character">
        <RouterLink
            :to="{ name: 'CharacterDetail', params: { id: character.id } }"
        >
            <img :src="character.image" :alt="character.name" />
            <h2>{{ character.name }}</h2>
        </RouterLink>
    </div>
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
