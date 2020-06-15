<template>
    <div class="location">
        <div class="location__info">
            <h2>{{ location.name }}</h2>
            <h3>{{ location.dimension }}</h3>
        </div>

        <h2>Residents:</h2>
        <CardList type="character" :cards="characters" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Location, Character } from '@/lib/types';
import { fetchData, getIds } from '@/lib/utils';

const CardList = () => import('@/components/card-list/CardList.vue');

export default Vue.extend({
    name: 'LocationDetail',

    components: {
        CardList,
    },

    props: {
        id: {
            type: Number,
            required: true,
            default: null,
        },
    },

    data() {
        return {
            location: {} as Location,
            characters: [] as Character[],
        };
    },

    methods: {
        async fetchLocation() {
            const data = await fetchData<Location>(`location/${this.id}`);
            this.location = data;

            this.fetchCharacters();
        },

        async fetchCharacters() {
            const characterIds = getIds(this.location.residents);
            const characters = await fetchData<Character[]>(
                `character/${characterIds}`,
            );

            this.characters = characters;
        },
    },

    mounted() {
        this.fetchLocation();
    },
});
</script>

<style lang="scss" src="./LocationDetail.scss"></style>
