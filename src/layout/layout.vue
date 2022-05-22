<script setup lang="ts">
import Menu from '@/layout/Menu.tsx'

const isRouterAlive = ref(true)
</script>
<template>
  <div class="page-container">
    <!-- <MenuList
      :routers="$router.options.routes"
      :is-collapse="isCollapse"
      :active-route="activeRoute"
    /> -->
    <Menu />
    <div class="content">
      <!-- <transition name="fade" mode="out-in">
        <router-view v-if="isRouterAlive" />
      </transition> -->
      <router-view />
    </div>
  </div>
</template>

<!-- <script>
// import MenuList from './menu/MenuList.js'

// export default {
//   components: { MenuList },
//   provide() {
//     return {
//       contentReload: this.reload,
//     }
//   },
//   props: {},
//   data() {
//     return {
//       activeIndex: '1',
//       isRouterAlive: true /* color */,
//       activeRoute: '',
//       isCollapse: true,
//     }
//   },
//   computed: {
//     contentBackground() {
//       return '#41ae3c'
//     },
//   },
//   watch: {
//     $route: {
//       handler(route) {
//         this.activeRoute = route.path
//         console.log('activeRoute', this.activeRoute)
//       },
//       immediate: true,
//     },
//   },
//   created() {
//     // console.log(color);
//   },
//   mounted() {},
//   methods: {
//     reload() {
//       this.isRouterAlive = false
//       this.$nextTick(function () {
//         this.isRouterAlive = true
//       })
//     },
//   },
// }
</script> -->

<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .content {
    overflow-y: auto;
    flex: 1;
  }
}
</style>
