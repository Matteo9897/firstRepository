import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ModificaClienti from '../components/ModificaClienti.vue'
import ModificaPrezzoProdotti from '../components/ModificaPrezzoProdotti.vue'
import DettagliCliente from '../components/DettagliCliente.vue'
import Register from '../components/auth/Register.vue'
import Login from '../components/auth/Login.vue'
import LoginPS from '../components/LoginPS.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/modificaclienti',
    name: 'modificaClienti',
    component: ModificaClienti
  },
  {
    path: '/modificaprezzoprodotti',
    name: 'modificaPrezzoProdotti',
    component: ModificaPrezzoProdotti
  },
  {
    path: '/dettaglicliente',
    name: 'dettagliCliente',
    component: DettagliCliente
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/loginps',
    name: 'loginPS',
    component: LoginPS
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
