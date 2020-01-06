import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueToastPanel from './plugin/test.js'
Vue.config.productionTip = false
Vue.use(vueToastPanel)
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
