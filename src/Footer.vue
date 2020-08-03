<template>
    <div class="footer">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class Footer extends Vue {
    name: "Footer";
  };
</script>

<style lang="scss" scoped>
.footer{
    height: 50px;
    background: #666;
}
</style>