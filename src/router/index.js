// Composables
import MainView from '@/views/main/MainView.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  // {
  //   path: '/',
  //   component: () => import('@/layouts/default/Default.vue'),
  //   children: [
  //     {
  //       path: '',
  //       name: 'HomeView',

  //       component: () => import('@/views/HomeView.vue'),
  //     },
  //   ],
  // },
  {
    path: '/',
    name: 'HomeView',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/home',
    component: MainView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
