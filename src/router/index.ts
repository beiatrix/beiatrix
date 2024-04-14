// router
import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'

// views
import HomePage from '@/views/HomePage.vue'
import ProjectsPage from '@/views/ProjectsPage.vue'
import ProjectShowPage from '@/views/ProjectShowPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage
  },
  {
    path: '/projects/:slug',
    name: 'ProjectShow',
    component: ProjectShowPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
