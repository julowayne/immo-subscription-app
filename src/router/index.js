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
        name: 'Profil',
        component: () => import('@/views/Profile.vue')
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: () => import('@/views/Checkout.vue')
      },
      {
        path: 'profile/formule',
        name: 'Formule',
        component: () => import('@/views/Profile.vue')
      },
      {
        path: 'profile',
        name: 'Informations',
        component: () => import('@/views/Profile.vue')
      },
      {
        path: 'offres',
        name: 'Abonnements',
        component: () => import('@/views/Offers.vue')
      },
      {
        path: 'accueil',
        name: 'Accueil',
        component: () => import('@/views/Accueil.vue')
      },
      {
        path: 'forms',
        name: 'Inscription',
        component: () => import('@/views/Forms.vue')
      },
      {
        path: 'forms/connexion',
        name: 'Connexion',
        component: () => import('@/views/Forms.vue')
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue')
      },
      {
        path: 'actualites',
        name: 'Actualités',
        component: () => import('@/views/Actualites.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
