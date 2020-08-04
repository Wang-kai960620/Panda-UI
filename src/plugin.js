import Toast from './Toast'

function creatToast({Vue, message, propsData, onClose}) {
    const constructor = Vue.extend(Toast)
    const toast = new constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close', onClose)
    document.body.appendChild(toast.$el)
    return toast
}

let currentToast
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, props) {
            if (currentToast) {
                currentToast.close()
            }
            currentToast = creatToast({
                Vue,
                message,
                propsData: props,
                onClose: () => {
                    currentToast = null
                }
            })

        }
    }
}