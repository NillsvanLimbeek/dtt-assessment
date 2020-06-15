<template>
    <div class="location">
        <h1>{{ location.name }}</h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Location } from '@/lib/types';
import { fetchData } from '@/lib/utils';

export default Vue.extend({
    name: 'LocationDetail',

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
        };
    },

    async mounted() {
        const data = await fetchData<Location>(`location/${this.id}`);
        this.location = data;
    },
});
</script>

<style lang="scss" src="./LocationDetail.scss"></style>
