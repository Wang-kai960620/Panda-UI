<template>
    <div class="tab-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Inject, Prop} from "vue-property-decorator";

  @Component
  export default class TabItem extends Vue {
    @Prop({type: Boolean, default: true}) disable: boolean;
    @Prop(String) name: string;
    @Inject(Object) eventbus!: object;
    active: Boolean = false;

    get classes() {
      return {active: this.active};
    }

    mounted() {
      this.eventbus.$on("update:selected", (name: string) => {
        this.active = name === this.name;
      });
    }

    xxx() {
      this.eventbus.$emit("update:selected", this.name);
    }

  };
</script>

<style lang="scss" scoped>
    .tab-item {
        margin: 0 .1em;
        display: flex;
        border-radius: 4px;
        justify-content: center;
        align-items: center;
        border: 1px solid red;
        padding: 0 10px;

        &.active {
            background: #40a9ff;
        }
    }
</style>