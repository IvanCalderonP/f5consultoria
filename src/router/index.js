import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import InicioView from '../views/InicioView.vue';
import ServiciosView from '../views/ServiciosView.vue';
import CasosView from '../views/CasosView.vue';
import EducativaView from '../views/EducativaView.vue';
import ContactoView from '../views/ContactoView.vue';

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: ServiciosView
  },
  {
    path: '/casos',
    name: 'casos',
    component: CasosView
  },
  {
    path: '/educativa',
    name: 'educativa',
    component: EducativaView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})

export default router
