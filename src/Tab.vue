<template>
    <div class="tab">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Tab extends Vue {
    @Prop({type: String}) select: string;
    @Prop({
      type: String,
      default: "row",
      validator(value: string): boolean {return ["row", "column"].indexOf(value) >= 0;}
    }) direction: string;
    name: "Tab";
  };
</script>

<style lang="scss" scoped>

</style>