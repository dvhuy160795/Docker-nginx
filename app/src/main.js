import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  BootstrapVue,
  IconsPlugin,
  render: h => h(App)
}).$mount('#app')
