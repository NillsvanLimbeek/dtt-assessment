<template>
    <div class="hello">
        <ul>
            <li v-for="character in characters" :key="character.id">
                <img :src="character.image" :alt="character.name" />
                <p>{{ character.name }}</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Character } from '../types/Character';

export default Vue.extend({
    props: {
        msg: String,
    },
    data() {
        return {
            characters: [] as Character[],
        };
    },
    created() {
        const randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            .map((num) => {
                return Math.floor(Math.random() * 350);
            })
            .join(',');

        fetch(`https://rickandmortyapi.com/api/character/${randomNumbers}`)
            .then((res) => res.json())
            .then((data) => (this.characters = data));
    },
});
</script>

<style lang="scss"></style>
