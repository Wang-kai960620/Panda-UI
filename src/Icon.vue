<template>
    <svg class="icon">
        <use :xlink:href="`#i-${name}`"/>
    </svg>
</template>

<script lang="ts">
  import Vue from "vue";

  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Icon extends Vue {
    @Prop(String) name: string;
  };
</script>

<style lang="scss" scoped>
    .icon {
        width: 1em;
        height: 1em;
        fill: white;
        margin-right: .1em;
        margin-left: 0;
    }
</style>