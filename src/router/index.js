import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/accueil'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/accueil'
      },
      {
        path: 'profile',
        component: () => import('@/views/Profile.vue')
      },
      {
        path: 'offres',
        component: () => import('@/views/Offers.vue')
      },
      {
        path: 'accueil',
        component: () => import('@/views/Accueil.vue')
      },
      {
        path: 'forms',
        name: 'inscription',
        component: () => import('@/views/Forms.vue')
      },
      {
        path: 'forms/connexion',
        name: 'connexion',
        component: () => import('@/views/Forms.vue')
      },
      {
        path: 'contact',
        component: () => import('@/views/Contact.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
