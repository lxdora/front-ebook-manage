import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    redirect: '/home/manage'
  },
  {
    path: '/home',
    redirect: '/home/manage'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: 'manage',
        name: 'BookManage',
        component: () => import('@/views/home/BookManage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router