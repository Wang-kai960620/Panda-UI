<template>
    <div class="tab-head">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class TabHead extends Vue {
    name: "Tab-head";
  };
</script>

<style lang="scss" scoped>
    .tab-head {

    }
</style>