import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Person from '../views/Person.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/person/:id',
    name: 'Person',
    component: Person,

  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
