import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import App from './App.vue'
import './style/main.css'


Vue.use(VueRouter)
Vue.use(VueMaterial)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
