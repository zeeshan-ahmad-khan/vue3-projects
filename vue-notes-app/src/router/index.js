import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddProject from '../views/AddProject.vue'
import EditProject from '../views/EditProject.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Vue Notes App' }
  },
  {
    path: '/add',
    name: 'AddProject',
    component: AddProject,
    meta: { title: 'Add Notes' }
  },
  {
    path: '/edit',
    name: 'EditProject',
    component: EditProject,
    props: true,
    meta: { title: 'Edit Notes' }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})

export default router
