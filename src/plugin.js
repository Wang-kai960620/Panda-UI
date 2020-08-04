import Toast from './Toast'

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, props) {
            const constructor = Vue.extend(Toast)
            const toast = new constructor({
                propsData: props
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}