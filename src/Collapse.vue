<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class Collapse extends Vue {
    name: "Collapse";
  };
</script>

<style lang="scss" scoped>
    @import "./assets/help.scss";

    .wrapper {
        border: 1px solid $border-color;
        border-radius: 4px;
    }
</style>