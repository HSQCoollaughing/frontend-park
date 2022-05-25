import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import layout from '@/layout/layout.vue'

export const routerMenu: RouteRecordRaw[] = [
  {
    path: '/home',
    component: layout,
    redirect: '/home/index',
    meta: { title: '首页', type: 'single' },
    children: [
      {
        path: '/home/index',
        component: () => import('@/page/home/index.vue'),
      },
    ],
  },
  {
    path: '/steganography',
    component: layout,
    meta: { title: '隐写术', type: 'multiple' },
    children: [
      {
        path: '/steganography/text',
        meta: { title: '文字隐写' },
        component: () => import('@/page/steganography/text-steganography.vue'),
      },
      // {
      //   path: '/steganography/enImg',
      //   meta: { title: '图片隐写' },
      //   component: () => import('@/page/steganography/img-steganography.vue'),
      // },
      // {
      //   path: '/steganography/deImg',
      //   meta: { title: '图片解密' },
      //   component: () => import('@/page/steganography/img-decryption.vue'),
      // },
    ],
  },

  {
    path: '/drawBoard',
    component: layout,
    redirect: '/drawBoard/index',
    meta: { title: '画板' },
    children: [
      {
        path: '/drawBoard/index',
        component: () => import('@/page/other/test.vue'),
      },
    ],
  },
  {
    path: '/other',
    component: layout,
    meta: { title: '杂项', type: 'multiple' },
    children: [
      {
        path: '/other/webRTC',
        component: () => import('@/page/webRTC/index.vue'),
        meta: { title: 'webRTC', type: 'multiple' },
        children: [
          {
            path: '/other/webRTC/index',
            meta: { title: '选择设备' },
            component: () => import('@/page/webRTC/selectDevices.vue'),
          },
        ],
      },
      {
        path: '/other/lat-long',
        meta: { title: '经纬度' },
        component: () => import('@/page/other/test.vue'),
      },
    ],
  },
  {
    path: '/siteMap',
    component: layout,
    redirect: '/siteMap/index',
    meta: { title: '超人导航' },
    children: [
      {
        path: 'index',
        component: () => import('@/page/siteMap/index.vue'),
      },
    ],
  },
]

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/index',
  },
  ...routerMenu,
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/page/error/404.vue'),
  },
]
const router = createRouter({ history: createWebHistory(), routes })
export default router
