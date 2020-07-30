<template>
    <button>
        <slot></slot>
    </button>
</template>

<script lang="ts">
  import Vue from "vue";
  import { Component } from "vue-property-decorator";

  @Component
  export default class Button extends Vue {
    name: "Button";
  };
</script>

<style lang="scss" scoped>

</style>