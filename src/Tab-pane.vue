<template>
    <div class="tab-pane"  v-if="active" :class="classes">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Inject, Prop} from "vue-property-decorator";

  @Component
  export default class TabPane extends Vue {
    @Prop(String) name: string;
    @Inject(Object) eventbus!: object;
    active: Boolean = false;

    get classes() {
      return {active: this.active};
    }

    created() {
      this.eventbus.$on("update:selected", (name: string) => {
        this.active = name === this.name;
      });
    }

  };
</script>

<style lang="scss" scoped>
    .tab-pane {
        &.active {
            background: #40a9ff;
        }
    }
</style>