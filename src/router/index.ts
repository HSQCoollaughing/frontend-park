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
    meta: { title: '隐写术', type: 'multiple' },
    component: layout,
    children: [
      {
        path: '/steganography/text',
        meta: { title: '文字隐写' },
        component: () => import('@/views/steganography/text-steganography.vue'),
      },
      {
        path: '/steganography/enImg',
        meta: { title: '图片隐写' },
        component: () => import('@/views/steganography/img-steganography.vue'),
      },
      {
        path: '/steganography/deImg',
        meta: { title: '图片解密' },
        component: () => import('@/views/steganography/img-decryption.vue'),
      },
    ],
  },
  {
    path: '/testing',
    component: layout,
    redirect: '/testing/index',
    meta: { title: '测试', type: 'single' },
    children: [
      {
        path: '/testing/index',
        component: () => import('@/page/testing/index.vue'),
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
