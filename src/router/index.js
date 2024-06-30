import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/spotList/',
      name: 'spotList',
      component: () => import('../views/SpotListView.vue'),
    },
    {
      path: '/spotCounty/:county',
      name: 'spotCounty',
      component: () => import('../views/SpotCounty.vue'),
    },
    {
      path: '/spot/:spotId',
      name: 'spotContent',
      component: () => import('../views/SpotContent.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
