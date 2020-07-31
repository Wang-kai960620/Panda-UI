<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <g-icon v-if="icon" :name="icon"></g-icon>
        <slot></slot>
    </button>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  type IconPosition = "right" | "left"


  @Component
  export default class Button extends Vue {
    @Prop(String) icon: string | undefined;
    @Prop({
      type: String,
      default: "left",
      validator(value: IconPosition): boolean {return value === "left" || value === "right";}
    }) iconPosition: string;
  };
</script>

<style lang="scss" scoped>
    @import "./assets/help.scss";

    .g-button {
        height: $height;
        font-size: $font-size;
        padding: 0 1em;
        border: 1px solid $border-color;
        border-radius: 5px;
        color: $color;
        background: $bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle; //inline-flex弹性盒bug，需要修改vertical-align的值，不能是默认值,不然无法对齐

        &:active {
            background: $active-bg;
        }

        &:hover {
            border-color: $hover-bg;
        }

        &:focus {
            outline: none;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-left: .1em;
                margin-right: 0;
            }
        }
    }

</style>