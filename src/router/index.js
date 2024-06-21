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
      path: '/spotList',
      name: 'spotList',
      component: () => import('../views/SpotListView.vue'),
    },
    {
      path: '/spot/:spotId',
      name: 'spotContent',
      component: () => import('../views/SpotContent.vue'),
    },
  ]
})

export default router
