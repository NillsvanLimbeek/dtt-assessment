<template>
    <button class="button__primary" :class="buttonClass" v-on="$listeners">
        <slot />
    </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'BaseButton',

    props: {
        buttonClass: {
            type: String,
        },
    },
});
</script>

<style lang="scss" src="./BaseButton.scss"></style>
