import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import router from './router'

Vue.use(VueMaterial)
Vue.use(VueRouter)

import App from './App.vue'
import './style/main.css'



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
