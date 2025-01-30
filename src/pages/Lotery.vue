<template>
  <Mask />
  <div class="scene-container">
    <Scene v-if="startAnimation" :displayData="displayData" />
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Scene from '../components/Scene.vue'
import Mask from '../components/Mask.vue'

const displayData = ref([])
const startAnimation = ref(false)

onMounted(() => {
  localStorage.removeItem('key')
})

window.addEventListener('storage', (event) => {
  if (event.key === 'key') {
    displayData.value = JSON.parse(localStorage.getItem('key'))
    startAnimation.value = true
  }
})
</script>
<style scoped>
.scene-container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  /* background-color: black; */
}
</style>
