import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'




import './styles/style.css'

Vue.use(VueMaterial)



new Vue({
  render: h => h(App),
}).$mount('#app')
