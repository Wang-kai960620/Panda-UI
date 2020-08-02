import Vue from "vue";
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./Button-Group";
import Input from './Input'


Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
Vue.component('g-input', Input)
new Vue({


    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: '请在这里输入！！！'
    },
}).$mount('#app')

