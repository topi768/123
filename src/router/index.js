import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import MakeResume from '../pages/MakeResume.vue'


const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/MakeResume',
    name: 'MakeResume',
    component: MakeResume

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
