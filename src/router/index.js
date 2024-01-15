// Composables
import AboutView from '@/views/about/AboutView.vue'
import CharacterInfoView from '@/views/characterInfo/CharacterInfoView.vue'
import SkillAndSymbolView from '@/views/characterInfo/category/SkillAndSymbolView.vue'
import StatAndEquipView from '@/views/characterInfo/category/StatAndEquipView.vue'
import SubCharacterView from '@/views/characterInfo/category/SubCharacterView.vue'
import UnionView from '@/views/characterInfo/category/UnionView.vue'
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
    meta: { hideHeader: false, hideFooter: false },
    component: MainView,
  },
  {
    path: '/about',
    name: 'AboutView',
    meta: { hideHeader: false, hideFooter: false },
    component: AboutView
  },
  {
    path: '/info/:name',
    name: 'CharacterInfo',
    component: CharacterInfoView,
    children: [
      {
        path: '/info/:name',
        name: 'StatAndEquip',
        component: StatAndEquipView
      },
      {
        path: '/info/:name/union',
        name: 'Union',
        component: UnionView
      },
      {
        path: '/info/:name/skill',
        name: 'SkillAndSymbol',
        component: SkillAndSymbolView
      },
      {
        path: '/info/:name/character',
        name: 'SubCharacter',
        component: SubCharacterView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition || to.name === 'HomeView' || to.name === 'AboutView') {
  //     // 이전 스크롤 위치가 저장되어 있다면 해당 위치로 이동
  //     return { x: savedPosition.left, y: savedPosition.top};
  //   } else {
  //     // 이전 스크롤 위치가 없다면 페이지의 맨 위로 이동
  //     return { x: 0, y: 0 };
  //   }
  // }
})

export default router
