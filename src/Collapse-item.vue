<template>
    <div class="collapseItem">
        <div class="title" @click="show=!show" :class="iconClass">
            <Icon name="right" ></Icon>
            {{title}}
        </div>
        <div class="content" v-if="show">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";
  import Icon from "./Icon.vue";

  @Component({
    components: {Icon}
  })
  export default class CollapseItem extends Vue {
    @Prop({type: String, required: true}) title: String;
    @Prop({type: Boolean, default: false}) show: Boolean;

    get iconClass() {
      return {show: this.show};
    }
  };
</script>

<style lang="scss" scoped>
    @import "./assets/help.scss";

    .collapseItem {
        > * {
            min-height: 32px;
        }

        > .title {
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            display: flex;
            align-items: center;
            padding: 0 8px;
            border: 1px solid $border-color;
            >.icon{
                transition: all 500ms;
            }

            &:hover {
                position: relative;
                border-color: $bg;
                z-index: 1;
            }
            &.show{
                >.icon{
                    transform: rotate(90deg);
                    transition: all 500ms;
                }
            }
        }

        &:first-child {
            > .title {
                border-radius: 4px 4px 0 0;

            }
        }

        &:not(:first-child) {
            margin: -1px 0;
        }

        &:last-child {
            > .title {
                border-radius: 0 0 4px 4px;
            }
        }

        > .content {
            display: flex;
            align-items: center;
            padding: 0 8px;
        }
    }
</style>