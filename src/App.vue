<template>
  <!-- // stworzyc klasy czasu animacji dla kazdej ms sass, klasy beda dynamicznie przyznawane. po sparametryzowaniu funkcja js renderuje ciag liczb gdzie kazda odpowiada danej klasie -->
  <!-- pomysl 2 stworzyc kilka instajncji cube z rronym czasem  -->
  <div class="scene-container">
    <Scene :data="dataArray" :animation-duration="animationDuration" />
  </div>
  <Tools @change-data="handleEmit" @updateAnimationDuration="updateAnimationDuration" />
</template>
<script setup>
import { reactive, ref } from 'vue'
import Scene from './components/Scene.vue'
import Tools from './components/Tools.vue'

const dataArray = reactive([1, 2, 3, 4, 5, 6])
const animationDuration = ref(1)

const handleEmit = (e) => {
  dataArray[0]++
}

const updateAnimationDuration = () => {
  animationDuration.value++
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
