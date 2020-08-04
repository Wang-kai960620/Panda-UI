import Toast from './Toast'

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message) {
            const constructor = Vue.extend(Toast)
            const toast = new constructor({
                propsData: {
                    closeButton: {
                        test: '知道了',
                        callback (){
                            console.log('know');
                        }
                    }
                }
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}