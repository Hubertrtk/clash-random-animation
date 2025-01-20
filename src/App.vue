<template>
  <!-- // stworzyc klasy czasu animacji dla kazdej ms sass, klasy beda dynamicznie przyznawane. po sparametryzowaniu funkcja js renderuje ciag liczb gdzie kazda odpowiada danej klasie -->
  <!-- pomysl 2 stworzyc kilka instajncji cube z rronym czasem  -->
  <Mask />
  <div class="scene-container">
    <Scene :rotate="rotateValue" />
  </div>
  <Tools @rotate="updateAnimationDuration" />
</template>
<script setup>
import { reactive, ref } from 'vue'
import Scene from './components/Scene.vue'
import Tools from './components/Tools.vue'
import Mask from './components/Mask.vue'

const rotateValue = ref(0)

const updateAnimationDuration = (value) => {
  rotateValue.value += value
}
</script>
<style scoped>
.scene-container {
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
