<script setup>
import { ref, computed } from 'vue'
import AdminPage from './pages/Admin.vue'
import LoteryPage from './pages/lotery.vue'

const routes = {
  '/lottery': LoteryPage,
  '/admin': AdminPage,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})
</script>

<template>
  <component :is="currentView" />
</template>
