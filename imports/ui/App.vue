<script setup>
import AppMenu from './AppMenu.vue'
</script>

<template>
  <div :class="{'p-8': $route.fullPath !== '/'}">
    <AppMenu v-if="$route.fullPath !== '/'" />
    <router-view />
  </div>
</template>
