import Vue from "vue";
// @ts-ignore
import Button from "./Button";
// @ts-ignore
import Icon from "./Icon";
// @ts-ignore
import ButtonGroup from "./Button-Group";


Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
new Vue({

  data: {
    loading1: false,
    loading2: false,
    loading3: false
  },
  el: ("#app")
});

