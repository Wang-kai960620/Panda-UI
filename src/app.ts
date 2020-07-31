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
  vm.$mount();
  const use = vm.$el.querySelector("use");
  const href = use.getAttribute("xlink:href");
  expect(href).to.equal("#i-setting");
}
{
  const constructor = Vue.extend(Button);
  const vm = new constructor({
    propsData: {
      icon: "setting",
      loading: true
    }
  });
  vm.$mount()
  const use = vm.$el.querySelector('use')
  const href = use.getAttribute('xlink:href')
  expect(href).to.equal('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const constructor = Vue.extend(Button);
  const vm = new constructor({
    propsData: {
      icon: "setting",
    }
  });
  vm.$mount(div);
  const svg = vm.$el.querySelector("svg");
  const {order} = window.getComputedStyle(svg);
  expect(order).to.equal("0");
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const constructor = Vue.extend(Button);
  const vm = new constructor({
    propsData: {
      icon: "setting",
      iconPosition:'right'
    }
  });
  vm.$mount(div);
  const svg = vm.$el.querySelector("svg");
  const {order} = window.getComputedStyle(svg);
  expect(order).to.equal("2");
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const constructor = Vue.extend(Button);
  const vm = new constructor({
    propsData: {
      icon: "setting",
    }
  });
  vm.$mount(div);
  vm.$on('click',()=>{
    console.log('hi')
  })
  vm.$el.remove()
  vm.$destroy()
}