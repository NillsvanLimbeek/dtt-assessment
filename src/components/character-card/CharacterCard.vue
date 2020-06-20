<template>
    <RouterLink
        :to="{ name: 'CharacterDetail', params: { id: character.id } }"
        class="character"
    >
        <img :src="character.image" :alt="character.name" />

        <div class="character__info">
            <h3 class="character__name">{{ character.name }}</h3>

            <InfoSection title="Status" :info="character.status" />
            <InfoSection title="Episodes" :info="character.episode.length" />
            <InfoSection title="Location" :info="character.location.name" />
        </div>
    </RouterLink>
</template>

<script lang="ts">
import Vue from 'vue';

import { Character } from '@/lib/types';

const InfoSection = () => import('@/components/info-section/InfoSection.vue');

export default Vue.extend({
    name: 'CharacterCard',

    props: {
        character: {
            type: Object as () => Character,
            required: true,
            default: null,
        },
    },

    components: {
        InfoSection,
    },

    data() {
        return {
            data: {} as Character,
        };
    },
});
</script>

<style lang="scss" src="./CharacterCard.scss"></style>
