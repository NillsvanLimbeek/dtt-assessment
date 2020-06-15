<template>
    <div class="location">
        {{ location.name }}
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Location } from '@/lib/types';

export default Vue.extend({
    name: 'LocationCard',

    props: {
        location: {
            type: Object as () => Location,
            required: true,
            default: null,
        },
    },
});
</script>

<style lang="scss" src="./LocationCard.scss">
</style>
