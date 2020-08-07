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
import Tab from "./Tab";
import TabHead from "./Tab-head";
import TabBody from "./Tab-body";
import TabItem from "./Tab-item";
import TabPane from "./Tab-pane";
import Popover from "./Popover";
import Collapse from "./Collapse";
import CollapseItem from "./Collapse-item";


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
Vue.component('g-tab', Tab)
Vue.component('g-tab-head', TabHead)
Vue.component('g-tab-body', TabBody)
Vue.component('g-tab-item', TabItem)
Vue.component('g-tab-pane', TabPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.use(plugin)


new Vue({
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        selected: ['2'],
    },
}).$mount('#app')

