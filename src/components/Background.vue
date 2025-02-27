<template>
  <div class="container">
    <img class="logo" src="@/assets/LogoClash.svg" alt="Example SVG" />
    <div class="fast-firefly-container">
      <div :class="addClass" v-for="(value, index) in fireflysFast" :key="index"></div>
    </div>
    <div class="firefly" v-for="(value, index) in fireflys" :key="`${index}aaa`"></div>
  </div>
</template>
<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'

// def 15
const fireflyAmmount = 35
const fireflyFastAmmount = 50
const fireflys = reactive(Array.from({ length: fireflyAmmount }))
const fireflysFast = reactive(Array.from({ length: fireflyFastAmmount }))
const displayFastFirefly = ref(false)

const props = defineProps({
  startAnimation: Boolean,
})

const addClass = computed(() => {
  return displayFastFirefly.value ? 'firefly-fast' : ''
})

watch(
  () => props.startAnimation,
  (newValue) => {
    setTimeout(() => {
      displayFastFirefly.value = true
      setTimeout(() => {
        displayFastFirefly.value = false
      }, 4000)
    }, 9000)
  },
)
</script>
<style lang="scss">
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
}
.logo {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
}
.fast-firefly-container {
  width: 100%;
  height: 100%;
}
</style>
