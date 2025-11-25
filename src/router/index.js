import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import('../views/ProductosView.vue')
  },
  {
    path: '/casos',
    name: 'casos',
    component: () => import('../views/CasosView.vue')
  },
  {
    path: '/educativa',
    name: 'educativa',
    component: () => import('../views/EducativaView.vue')
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: () => import('../views/ServiciosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router