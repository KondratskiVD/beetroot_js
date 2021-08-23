import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contacts from '../pages/Contacts.vue'


const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts },
]

const router = new VueRouter({
  routes
})
export default router