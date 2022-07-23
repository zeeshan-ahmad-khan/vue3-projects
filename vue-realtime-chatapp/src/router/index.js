import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ChatRoom from '../views/ChatRoom.vue'
import LoginForm from '../components/LoginForm.vue'
import SignupForm from '../components/SignupForm.vue'
import { projectAuth } from '@/firebase/config'

// AUTH GUARD
const routeGuard = (to, from, next) => {
  const user = projectAuth.currentUser;
  if (!user) {
    next({ name: 'Home' })
  } else {
    next();
  }
}

const noAuth = (to, from, next) => {
  const user = projectAuth.currentUser;
  if (user) {
    next({ name: 'ChatRoom' })
  } else {
    next();
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: noAuth,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupForm,
  },
  {
    path: '/chatroom',
    name: 'ChatRoom',
    component: ChatRoom,
    beforeEnter: routeGuard,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
