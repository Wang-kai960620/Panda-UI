<template>
    <div class="wrapper" @click="show">
        <div class="content" v-if="visible">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class Popover extends Vue {
    name: "Popover";
    visible: Boolean = false;

    show() {
      this.visible = !this.visible;
    }
  };
</script>

<style lang="scss" scoped>
    .wrapper {
        display: inline-block;
        vertical-align: top;
        position: relative;

        > .content {
            position: absolute;
            bottom: 100%;
            left: -50%;
            border: 1px solid red;
        }
    }
</style>