// Composables
import AboutView from '@/views/about/AboutView.vue'
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
    name: 'homeView',
    meta: { hideHeader: false, hideFooter: false },
    component: MainView,
  },
  {
    path: '/about',
    name: 'aboutView',
    meta: { hideHeader: false, hideFooter: false },
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
