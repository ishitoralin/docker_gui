import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/layouts/LoginPage.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/layouts/MainPage.vue'),
    children: [
      {
        icon: "bi bi-house",
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/system/DashboardPage.vue"),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
