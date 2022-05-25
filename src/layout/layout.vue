<script setup lang="ts">
// @ts-ignore
import Menu from '@/layout/Menu.tsx'
</script>
<template>
  <div class="page-container">
    <Menu />
    <div class="content">
      <router-view />
      <!-- <router-view><router-view /></router-view> -->
    </div>
  </div>
</template>

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
