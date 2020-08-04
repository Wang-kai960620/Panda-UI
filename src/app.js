import Vue from "vue";
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./Button-Group";
import Input from './Input'
import Row from './Row'
import Column from "./Column";
import Layout from "./Layout";
import Header from "./Header";
import Sider from "./Sider";
import Footer from "./Footer";
import Content from "./Content";
import plugin from "./plugin";


Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Column)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-footer', Footer)
Vue.component('g-content', Content)
Vue.use(plugin)

new Vue({
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: '请在这里输入！！！'
    },
    methods: {
        showToast() {
            this.$toast('hi')
        }
    }
}).$mount('#app')

