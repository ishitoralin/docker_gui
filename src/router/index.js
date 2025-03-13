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
        side: true,
        icon: "bi bi-house",
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/system/DashboardPage.vue"),
      },
      {
        side: true,
        icon: "bi bi-box",
        path: "/containers",
        name: "Containers",
        component: () => import("../views/system/ContainersMain.vue"),
      },
      {
        path: '/containers/inspect/:id',
        name: 'Container Inspect',
        component: () => import("../views/system/ContainersInspect.vue"),
      },
      {
        side: true,
        icon: "bi bi-disc",
        path: "/images",
        name: "Images",
        component: () => import("../views/system/ImagesMain.vue"),
      },
      {
        path: '/images/inspect/:id',
        name: 'Image Inspect',
        component: () => import("../views/system/ImageInspect.vue"),
      },
      {
        side: true,
        icon: "bi bi-globe",
        path: "/networks",
        name: "Networks",
        component: () => import("../views/system/NetworksMain.vue"),
      },
      {
        path: '/networks/inspect/:id',
        name: 'Network Inspect',
        component: () => import("../views/system/NetworkInspect.vue"),
      },
      {
        side: true,
        icon: "bi bi-database",
        path: "/volumes",
        name: "Volumes",
        component: () => import("../views/system/VolumesMain.vue"),
      },
      {
        path: '/volumes/inspect/:id',
        name: 'Volume Inspect',
        component: () => import("../views/system/VolumeInspect.vue"),
      },
      {
        side: true,
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
