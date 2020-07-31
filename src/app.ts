import Vue from "vue";
// @ts-ignore
import Button from'./Button'
// @ts-ignore
import Icon from './Icon'


Vue.component('g-button',Button);
Vue.component('g-icon',Icon)
new Vue({
  el:('#app')
})