<template>
    <RouterLink
        :to="{ name: 'LocationDetail', params: { id: location.id } }"
        class="location"
    >
        <InfoSection title="Name" :info="location.name" />
        <InfoSection title="Dimension" :info="location.dimension" />
        <InfoSection title="Residents" :info="location.residents.length" />
    </RouterLink>
</template>

<script lang="ts">
import Vue from 'vue';

import { Location } from '@/lib/types';

const InfoSection = () => import('@/components/info-section/InfoSection.vue');

export default Vue.extend({
    name: 'LocationCard',

    props: {
        location: {
            type: Object as () => Location,
            required: true,
            default: null,
        },
    },

    components: {
        InfoSection,
    },
});
</script>

<style lang="scss" src="./LocationCard.scss"></style>
