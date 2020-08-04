<template>
    <div class="tab-item">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class TabItem extends Vue {
    @Prop({type: Boolean, default: true}) disable: boolean;

    name: "Tab-item";
  };
</script>

<style lang="scss" scoped>
    .tab-item {

    }
</style>