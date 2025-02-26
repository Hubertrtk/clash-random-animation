<script setup lang="ts">
import ArrowLeft from './ArrowLeft.vue'
import ArrowRight from './ArrowRight.vue'
</script>

<template>
  <div class="mask-wrpper">
    <div class="first-border"></div>
    <div class="secend-border">
      <ArrowLeft />
      <ArrowRight />
    </div>
    <div class="third-border"></div>
  </div>
</template>
<style lang="css">
.first-border {
  width: 100%;
  height: 33%;
  /* border: 2px solid red; */
  backdrop-filter: blur(2px);
}
.secend-border {
  width: 103%;
  height: 33%;
  border: 2px solid #fffe00;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  z-index: -1;
}
.third-border {
  width: 100%;
  height: 33%;
  /* border: 2px solid red; */
  backdrop-filter: blur(2px);
}
.mask-wrpper {
  /* border: 2px solid red; */
  height: 432px;
  width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
