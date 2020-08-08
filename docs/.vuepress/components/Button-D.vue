<template>
    <div>
        <Button>默认按钮</Button>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  import Button from "../../../src/Button";

  @Component({
    components: {
      Button
    },
  })
  export default class ButtonD extends Vue {}

</script>

<style lang="scss" scoped>

</style>