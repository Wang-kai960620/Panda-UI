<template>
    <div class="toast" ref="wrapper" :class="seat">
        <div class="min">
            <slot></slot>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onclickClose">{{closeButton[`test`]}}</span>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Toast extends Vue {
    @Prop({type: Boolean, default: true}) autoClose: boolean;
    @Prop({type: Number, default: 5}) autoCloseTime: number;
    @Prop({
      type: Object, default: () => {
        return {
          test: "关闭",
          callback: undefined
        };
      }
    }) closeButton: object;

    @Prop({
      type: String,
      default: "top",
      validator(value: string): boolean {return ["top", "bottom", "middle"].indexOf(value) >= 0;}
    }) position: string;

    get seat() {
      return {[`position-${this.position}`]: true};
    }

    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseTime * 1000);
      }
      this.$nextTick(() => {
        const wrapper = this.$refs.wrapper as HTMLDivElement;
        const line = this.$refs.line as HTMLSpanElement;
        line.style.height = String(wrapper.getBoundingClientRect().height) + "px";
      });
    }

    close() {
      this.$el.remove();
      this.$destroy();
    }

    onclickClose() {
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.close();
        this.closeButton.callback();
      }
    }
  };
</script>

<style lang="scss" scoped>
    @import "assets/help.scss";

    .toast {
        position: fixed;
        min-height: 40px;
        left: 50%;
        font-size: $font-size;
        display: flex;
        align-items: center;
        background: $bg;
        border-radius: 5px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
        padding: 0 16px;

        > .min {
            display: flex;
            flex-wrap: wrap;
            max-width: 300px;
        }

        > .close {
            padding-left: 16px;
            flex-shrink: 0;
        }

        > .line {
            border-left: 1px solid #ccc;
            margin-left: 16px;
        }

        &.position-top {
            top: 0;
            transform: translateX(-50%);
        }

        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
        }

        &.position-bottom {
            bottom: 0;
            transform: translateX(-50%);
        }
    }


</style>