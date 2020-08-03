<template>
    <div class="sider">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class Sider extends Vue {
    name: "Sider";
  };
</script>

<style lang="scss" scoped>
.sider{
   background:  grey;
}
</style>