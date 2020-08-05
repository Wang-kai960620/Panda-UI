<template>
    <div class="tab">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop, Provide} from "vue-property-decorator";

  @Component
  export default class Tab extends Vue {
    @Prop({type: String}) selected: string;
    @Prop({
      type: String,
      default: "row",
      validator(value: string): boolean {return ["row", "column"].indexOf(value) >= 0;}
    }) direction: string;
    @Provide(Object) eventbus = new Vue();

    mounted() {
      if (this.$children.length === 0) {
        console && console.warn &&
        console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
      }
      this.eventbus.$emit("update:selected", this.selected);
    }
  };
</script>

<style lang="scss" scoped>

</style>