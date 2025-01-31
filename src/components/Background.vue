<template>
  <div class="container">
    <img class="logo" src="@/assets/LogoClash.svg" alt="Example SVG" />
    <!-- <div class="firefly" v-for="value in fireflys"></div> -->
    <div class="firefly" v-for="value in fireflysFast"></div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'

// def 15
const fireflyAmmount = 15
const fireflyFastAmmount = 100
const fireflys = reactive(Array.from({ length: fireflyAmmount }))
const fireflysFast = reactive(Array.from({ length: fireflyFastAmmount }))
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
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
}
</style>
