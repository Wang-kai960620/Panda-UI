<template>
    <div class="tab-pane">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class TabPane extends Vue {
    name: "Tab-pane";
  };
</script>

<style lang="scss" scoped>
    .tab-pane {

    }
</style>