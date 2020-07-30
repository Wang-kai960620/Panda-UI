<template>
    <button class="g-button">
        <slot></slot>
    </button>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class Button extends Vue {
  };
</script>

<style lang="scss" scoped>
    @import "./assets/help.scss";

    .g-button {
        height: $height;
        font-size: $font-size;
        padding: 0 1em;
        border: 1px solid $border-color;
        border-radius: 5px;
        color: $color;
        background: $bg;

        &:active {
            background: $active-bg;
        }

        &:hover {
            border-color: $hover-bg;
        }

        &:focus {
            outline: none;
        }
    }

</style>