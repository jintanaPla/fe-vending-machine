import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/router'
import store from './stores/store'
import api from './gateways/api'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetAlert from 'vue-sweetalert'
import VueCookies from 'vue-cookies'
import VueSocketio from 'vue-socket.io'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueSweetAlert)
Vue.use(VueCookies)
Vue.use(new VueSocketio({ debug: true, connection: 'http://192.168.1.35:3000'}))

new Vue({
  vuetify,
  router,
  store,
  api,
  render: h => h(App)
}).$mount('#app')
