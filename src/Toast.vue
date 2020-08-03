<template>
<div class="toast">
    <slot></slot>
</div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class Toast extends Vue {
    name: "Toast";
  };
</script>

<style lang="scss" scoped>

</style>