const expect = chai.expect;
import Vue from 'vue'
import Button from '../Button'
import chai from 'chai'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.be.ok
    })
    it('可以设置icon.', () => {
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
        vm.$destroy();
    })
    it('可以设置loading.', () => {
        const constructor = Vue.extend(Button);
        const vm = new constructor({
            propsData: {
                icon: "setting",
                loading: true
            }
        });
        vm.$mount();
        const use = vm.$el.querySelector("use");
        const href = use.getAttribute("xlink:href");
        expect(href).to.equal("#i-loading");
        vm.$el.remove();
        vm.$destroy();
    })
    it('icon 默认的 order 是 1', () => {
        const div = document.createElement("div");
        document.body.appendChild(div);
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
        vm.$el.remove();
        vm.$destroy();
    })
    it('设置 iconPosition 可以改变 order', () => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        const constructor = Vue.extend(Button);
        const vm = new constructor({
            propsData: {
                icon: "setting",
                iconPosition: "right"
            }
        });
        vm.$mount(div);
        const svg = vm.$el.querySelector("svg");
        const {order} = window.getComputedStyle(svg);
        expect(order).to.equal("2");
        vm.$el.remove();
        vm.$destroy();
    })
    it('点击 button 触发 click 事件', () => {
        const constructor = Vue.extend(Button);
        const vm = new constructor({
            propsData: {
                icon: "setting",
            }
        });
        const should = () => {
            console.log("被执行了");
        };
        const spy = chai.spy(should);
        vm.$mount();
        vm.$on("click", spy);
        (vm.$el as HTMLButtonElement).click();
        expect(spy).to.have.been.called(1);
    })
})