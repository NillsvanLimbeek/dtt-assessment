<template>
    <div class="detail"></div>
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
