<template>
  <Mask />
  <div class="scene-container">
    <Scene :rotate="rotateValue" />
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import Scene from './components/Scene.vue'
import Mask from './components/Mask.vue'

const rotateValue = ref(0)
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
  background-color: black;
}
</style>
