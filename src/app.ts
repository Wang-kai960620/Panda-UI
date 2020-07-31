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

//单元测试
import chai from "chai";

const expect = chai.expect;
{
  const constructor = Vue.extend(Button);
  const vm = new constructor({
    propsData: {
      icon: "setting"
    }
  });
  vm.$mount('#test')
  console.log(vm);
  const use = vm.$el.querySelector('use')
  console.log(use);
  const href = use.getAttribute('xlink:href')
  console.log(href);
  expect(href).to.equal('setting')
}