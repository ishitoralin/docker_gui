import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/layouts/LoginPage.vue')
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: () => import('../views/layouts/LoginPage.vue')
  },
  {
    path: '/signup',
    name: 'signup',
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
      {
        icon: "bi bi-box",
        path: "/containers",
        name: "Containers",
        component: () => import("../views/system/ContainersMain.vue"),
      },
      {
        icon: "bi bi-disc",
        path: "/images",
        name: "Images",
        component: () => import("../views/system/ImagesMain.vue"),
      },
      {
        icon: "bi bi-globe",
        path: "/networks",
        name: "Networks",
        component: () => import("../views/system/NetworksMain.vue"),
      },
      {
        icon: "bi bi-database",
        path: "/volumes",
        name: "Volumes",
        component: () => import("../views/system/VolumesMain.vue"),
      },
      {
        icon: "bi bi-gear",
        path: "/settings",
        name: "Settings",
        component: () => import("../views/system/SettingsPage.vue"),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
