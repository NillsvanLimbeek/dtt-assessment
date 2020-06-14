<template>
    <main class="home">
        <CardList type="character" :cards="getCharacters" />
    </main>
</template>

<script lang="ts">
import Vue from 'vue';

import { getters, actions } from '@/lib/store/characters';

import CardList from '@/components/card-list/CardList.vue';

export default Vue.extend({
    name: 'Home',
    components: {
        CardList,
    },
    data() {
        return {};
    },
    computed: {
        getCharacters() {
            return getters.getCharacters();
        },
    },
    created() {
        actions.fetchCharacters();
    },
});
</script>

<style lang="scss" src="./Home.scss"></style>
