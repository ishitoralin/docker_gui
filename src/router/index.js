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
        path: '/containers/detail/:id',
        name: 'Container Detail',
        component: () => import("../views/system/ContainersDetail.vue"),
      },
      {
        path: '/containers/logs/:id',
        name: 'Container Logs',
        component: () => import("../views/system/ContainersLogs.vue"),
      },
      {
        path: '/containers/stats/:id',
        name: 'Container Stats',
        component: () => import("../views/system/ContainersStats.vue"),
      },
      {
        path: '/containers/console/:id',
        name: 'Container Console',
        component: () => import("../views/system/ContainersConsole.vue"),
      },
      {
        path: '/containers/attach/:id',
        name: 'Container Attach',
        component: () => import("../views/system/ContainersAttach.vue"),
      },
      {
        path: '/containers/create',
        name: 'Container Create',
        component: () => import("../views/system/ContainersCreate.vue"),
      },
      {
        side: true,
        icon: "bi bi-disc",
        path: "/images",
        name: "Images",
        component: () => import("../views/system/ImagesMain.vue"),
      },
      {
        path: '/images/detail/:id',
        name: 'Image Detail',
        component: () => import("../views/system/ImageDetail.vue"),
      },
      {
        side: true,
        icon: "bi bi-globe",
        path: "/networks",
        name: "Networks",
        component: () => import("../views/system/NetworksMain.vue"),
      },
      {
        path: '/networks/detail/:id',
        name: 'Network Detail',
        component: () => import("../views/system/NetworkDetail.vue"),
      },
      {
        side: true,
        icon: "bi bi-database",
        path: "/volumes",
        name: "Volumes",
        component: () => import("../views/system/VolumesMain.vue"),
      },
      {
        path: '/volumes/detail/:id',
        name: 'Volume Detail',
        component: () => import("../views/system/VolumeDetail.vue"),
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
