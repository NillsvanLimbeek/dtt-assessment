<template>
    <div class="location">
        <h1>{{ location.name }}</h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Location } from '@/lib/types';

export default Vue.extend({
    props: {
        url: {
            type: String,
            required: true,
            default: null,
        },
    },
    data() {
        return {
            location: {} as Location,
        };
    },
    mounted() {
        fetch(this.url)
            .then((res) => res.json())
            .then((data) => (this.location = data));
    },
});
</script>

<style lang="scss" src="./LocationDetail.scss"></style>
