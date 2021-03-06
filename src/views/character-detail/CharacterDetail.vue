<template>
    <div class="detail">
        <img :src="character.image" :alt="character.name" class="detail__img" />

        <div class="detail__info">
            <h2>Character Info</h2>

            <div class="detail__row">
                <InfoSection title="Name" :info="character.name" />
                <InfoSection title="Status" :info="character.status" />
                <InfoSection title="Species" :info="character.species" />
            </div>
        </div>

        <div v-if="Object.keys(location).length > 0" class="detail__location">
            <h2>Location</h2>
            <LocationCard :location="location" />
        </div>

        <div v-if="episodes" class="detail__episodes">
            <h2>Episodes</h2>

            <CardList
                v-if="Array.isArray(episodes)"
                type="episode"
                :cards="episodes"
            />

            <div v-else class="detail__episode">
                <EpisodeCard :episode="episodes" />
            </div>
        </div>

        <div v-if="related.length" class="detail__related">
            <h2>Related</h2>
            <CardList type="character" :cards="related" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Character, Episode, Location } from '@/lib/types';
import { getIds, fetchData, randomNumbers } from '@/lib/utils';

const CardList = () => import('@/components/card-list/CardList.vue');
const EpisodeCard = () => import('@/components/episode-card/EpisodeCard.vue');
const LocationCard = () =>
    import('@/components/location-card/LocationCard.vue');
const InfoSection = () => import('@/components/info-section/InfoSection.vue');

interface QueryResult {
    info: {
        count: number;
        next: string;
        pages: number;
        prev: string | null;
    };
    results: Character[];
}

export default Vue.extend({
    name: 'CharacterDetail',

    props: {
        id: {
            type: [String, Number],
            required: true,
            default: null,
        },
    },

    components: {
        EpisodeCard,
        LocationCard,
        CardList,
        InfoSection,
    },

    data() {
        return {
            character: {} as Character,
            episodes: [] as Episode[] | Episode,
            location: {} as Location,
            related: [] as Character[],
        };
    },

    methods: {
        async getCharacter() {
            const data = await fetchData<Character>(`character/${this.id}`);
            this.character = data;

            this.getEpisodes();
        },

        async getEpisodes() {
            const episodeIds = getIds(this.character.episode);

            this.episodes = await fetchData<Episode[] | Episode>(
                `episode/${episodeIds}`,
            );

            this.getLocation();
            this.getRelated();
        },

        async getLocation() {
            const splittedUrl = this.character.location.url.split('/');
            const id = splittedUrl[splittedUrl.length - 1];
            const location = await fetchData<Location>(`/location/${id}`);

            this.location = location;
        },

        async getRelated() {
            const related = await fetchData<QueryResult>(
                `/character/?species=${this.character.species}`,
            );

            if (related.info.count > 1) {
                // get random species
                const randomNum = randomNumbers(3, related.results.length);
                const randomSpecies = randomNum.map((num) => {
                    return related.results[num];
                });

                this.related = randomSpecies;
            } else {
                // get random characters on same location
                const residentIds = getIds(this.location.residents);
                const randomNum = randomNumbers(3, residentIds.length);
                const randomLocation = randomNum.map((num) => {
                    return residentIds[num];
                });

                const related = await fetchData<Character[]>(
                    `/character/${randomLocation}`,
                );

                this.related = related;
            }
        },
    },

    watch: {
        id() {
            this.getCharacter();
        },
    },

    mounted() {
        this.getCharacter();
    },
});
</script>

<style lang="scss" src="./CharacterDetail.scss"></style>
