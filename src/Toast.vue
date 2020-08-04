<template>
    <div class="toast">
        <slot></slot>
        <div class="line"></div>
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
          callback: (toast) => {
            toast.close();
          }
        };
      }
    }) closeButton: object;


    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseTime * 1000);
      }
    }

    close() {
      this.$el.remove();
      this.$destroy();
    }

    onclickClose() {
      this.close();
      this.closeButton.callback();
    }
  };
</script>

<style lang="scss" scoped>
    @import "assets/help.scss";

    .toast {
        position: fixed;
        height: 40px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: $font-size;
        display: flex;
        align-items: center;
        background: $bg;
        border-radius: 3px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
        padding: 0 16px;
    }

    .close {
        padding-left: 16px;
        flex-shrink: 0;
    }

    .line {
        height: 100%;
        border-left: 1px solid white;
        margin-left: 16px;
    }
</style>