<template>
    <div class="wrapper" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  // let validator = (value) => {
  //   let keys = Object.keys(value)
  //   let valid = true
  //   keys.forEach(key => {
  //     if (!['span', 'offset'].includes(key)) {
  //       valid = false
  //     }
  //   })
  //   return valid
  // }
  @Component
  export default class Column extends Vue {
    @Prop(String) span: string | number;
    @Prop(String) offset: string | number;
    @Prop(Object) ipad: object;
    @Prop(Object) narrowPc: object;
    @Prop(Object) pc: object;
    @Prop(Object) widePc: object;

    gutter = 0;


    get colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      };
    }

    get colClass() {
      const {span, offset, ipad, narrowPc, pc, widePc} = this;
      return [
        ...this.createClass({span, offset}),
        ...this.createClass(ipad, "ipad-"),
        ...this.createClass(narrowPc, "narrowPc-"),
        ...this.createClass(pc, "pc-"),
        ...this.createClass(widePc, "widePc-"),
      ];
    }

    createClass(obj, str = "") {
      if (!obj) {return [];}
      const array = [];
      if (obj.span) {array.push(`col-${str}${obj.span}`);}
      if (obj.offset) { array.push(`offset-${str}${obj.offset}`); }
      return array;
    }

  };
</script>

<style lang="scss" scoped>
    .wrapper {
        width: 50%;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
        @media (min-width: 577px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 769px) { // 770
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 993px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 1201px) {
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
    }

</style>