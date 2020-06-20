<template>
    <div class="info-section">
        <h3>{{ title }}</h3>
        <p>{{ info }}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'InfoSection',

    props: {
        title: {
            type: String,
            required: true,
            default: '',
        },

        info: {
            type: [String, Number],
            required: true,
            default: '',
        },
    },
});
</script>

<style lang="scss" src="./InfoSection.scss"></style>
