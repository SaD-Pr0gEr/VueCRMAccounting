import M from 'materialize-css'

export default {
    // eslint-disable-next-line no-unused-vars
    install(Vue, options) {
        Vue.config.globalProperties.$toaster = (html, extraClasses = '') => {
            M.toast({html: html, classes: extraClasses})
        }
    }
}
