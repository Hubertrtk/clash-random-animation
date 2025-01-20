<template>
  <!-- // stworzyc klasy czasu animacji dla kazdej ms sass, klasy beda dynamicznie przyznawane. po sparametryzowaniu funkcja js renderuje ciag liczb gdzie kazda odpowiada danej klasie -->
  <!-- pomysl 2 stworzyc kilka instajncji cube z rronym czasem  -->
  <div class="tools-container">
    <button @click="() => updateAnimationDuration(45)">+</button>
    <button @click="() => updateAnimationDuration(-45)">-</button>
  </div>
</template>
<script setup>
// import { ref } from 'vue'

const emit = defineEmits(['rotate'])

const updateAnimationDuration = (value) => {
  emit('rotate', value)
}
</script>
<style scoped>
.tools-container {
  border: 2px solid red;
  width: 300px;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: calc(50vw - 150px);
}
</style>
