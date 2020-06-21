<template>
    <div class="location">
        <div class="location__info">
            <h2>{{ location.name }}</h2>
            <h3>{{ location.dimension }}</h3>
        </div>

        <div class="location__residents">
            <h2>Residents:</h2>

            <CardList
                v-if="Array.isArray(characters)"
                type="character"
                :cards="characters"
            />

            <div v-else-if="location.residents.length === 0">
                No Known Residents...
            </div>

            <CharacterCard v-else :character="characters" />
        </div>

        <div class="location__related">
            <h2>Related</h2>
            <CardList type="location" :cards="related" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Location, Character } from '@/lib/types';
import { fetchData, getIds, randomNumbers } from '@/lib/utils';

const CardList = () => import('@/components/card-list/CardList.vue');
const CharacterCard = () =>
    import('@/components/character-card/CharacterCard.vue');

export default Vue.extend({
    name: 'LocationDetail',

    components: {
        CardList,
        CharacterCard,
    },

    props: {
        id: {
            type: [Number, String],
            required: true,
            default: null,
        },
    },

    data() {
        return {
            location: {} as Location,
            characters: [] as Character[] | Character,
            related: [] as Location[],
        };
    },

    methods: {
        async fetchLocation() {
            const data = await fetchData<Location>(`location/${this.id}`);
            this.location = data;

            this.fetchCharacters();
            this.fetchRelated();
        },

        async fetchCharacters() {
            const characterIds = getIds(this.location.residents);
            const characters = await fetchData<Character[] | Character>(
                `character/${characterIds}`,
            );

            this.characters = characters;
        },

        async fetchRelated() {
            const randomIds = randomNumbers(3, 67);
            const related = await fetchData<Location[]>(
                `location/${randomIds}`,
            );

            this.related = related;
        },
    },

    watch: {
        id() {
            this.fetchLocation();
        },
    },

    mounted() {
        this.fetchLocation();
    },
});
</script>

<style lang="scss" src="./LocationDetail.scss"></style>
